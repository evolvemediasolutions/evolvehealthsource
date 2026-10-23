import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import pool, { initializeDatabase } from './db.js';
import { sendContactNotification } from './mailer.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize database schema
initializeDatabase();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

// Contact form POST endpoint
app.post('/api/contact', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    message,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    referrer,
    landing_url,
  } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields (firstName, lastName, email, message) are required.' });
  }

  let databaseSaved = false;
  let emailSent = false;
  let errorDetails = {};

  try {
    // 1. Insert into Neon DB database
    if (process.env.DATABASE_URL) {
      try {
        let result;
        try {
          const queryWithTracking = `
            INSERT INTO contact_submissions 
            (first_name, last_name, email, message, utm_source, utm_medium, utm_campaign, utm_term, utm_content, referrer, landing_url) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
            RETURNING id
          `;
          const valuesWithTracking = [
            firstName,
            lastName,
            email,
            message,
            utm_source || null,
            utm_medium || null,
            utm_campaign || null,
            utm_term || null,
            utm_content || null,
            referrer || null,
            landing_url || null,
          ];
          result = await pool.query(queryWithTracking, valuesWithTracking);
        } catch (colErr) {
          console.warn('Extended columns insert failed, trying base columns:', colErr.message);
          const fallbackQuery = 'INSERT INTO contact_submissions (first_name, last_name, email, message) VALUES ($1, $2, $3, $4) RETURNING id';
          result = await pool.query(fallbackQuery, [firstName, lastName, email, message]);
        }
        console.log(`Saved submission to database with ID: ${result.rows[0].id}`);
        databaseSaved = true;
      } catch (dbError) {
        console.error('Database insertion failed:', dbError);
        errorDetails.database = dbError.message || dbError;
      }
    } else {
      console.warn("Skipped database save: DATABASE_URL not set.");
    }

    // 2. Send email via MailerSend
    if (process.env.MAILERSEND_API_KEY) {
      try {
        const emailResult = await sendContactNotification({
          firstName,
          lastName,
          email,
          message,
          utm_source,
          utm_medium,
          utm_campaign,
          utm_term,
          utm_content,
          referrer,
          landing_url,
        });
        emailSent = emailResult.success;
        if (!emailResult.success) {
          errorDetails.email = emailResult.error;
        }
      } catch (emailError) {
        console.error('MailerSend operation failed:', emailError);
        errorDetails.email = emailError.message || emailError;
      }
    } else {
      console.warn("Skipped email notification: MAILERSEND_API_KEY not set.");
    }

    // 3. Return response based on outcomes
    if (!databaseSaved && !emailSent) {
      return res.status(500).json({
        error: 'Failed to process contact submission.',
        details: errorDetails
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Contact submission received successfully.',
      details: {
        databaseSaved,
        emailSent,
        errors: Object.keys(errorDetails).length > 0 ? errorDetails : undefined
      }
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({ error: 'An internal server error occurred while processing your request.' });
  }
});

// Serve static files from the Vite frontend build folder (dist) - only when not on Vercel
if (!process.env.VERCEL) {
  // 301-redirect /rcm and /rcm/* to / and /*
  app.use('/rcm', (req, res) => {
    const target = (req.url && req.url !== '/') ? req.url : '/';
    res.redirect(301, target);
  });

  app.use(express.static(path.join(__dirname, '../dist')));

  const validSpaPaths = [
    '/',
    '/about',
    '/solutions',
    '/services',
    '/insights',
    '/careers',
    '/contact',
    '/contact/thank-you',
    '/thank-you',
    '/marketing/home',
    '/myclinicboot',
    '/myclinicboost',
    '/privacy',
    '/terms',
  ];

  // Route handler: match valid SPA routes to index.html, return HTTP 404 for unknown routes
  app.get('/*splat', (req, res) => {
    const reqPath = req.path.toLowerCase().replace(/\/$/, '') || '/';
    const isDynamicBlog = reqPath.startsWith('/insights/');
    const isValid = validSpaPaths.includes(reqPath) || isDynamicBlog;

    if (isValid) {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    } else {
      const custom404 = path.join(__dirname, '../dist/404.html');
      res.status(404).sendFile(custom404, (err) => {
        if (err) {
          res.status(404).sendFile(path.join(__dirname, '../dist/index.html'));
        }
      });
    }
  });
}

// Start the server - only when not on Vercel
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
  });
}

export default app;
