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
  const { firstName, lastName, email, message } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields (firstName, lastName, email, message) are required.' });
  }

  try {
    // 1. Insert into Neon DB database
    let databaseSaved = false;
    if (process.env.DATABASE_URL) {
      const queryText = 'INSERT INTO contact_submissions (first_name, last_name, email, message) VALUES ($1, $2, $3, $4) RETURNING id';
      const values = [firstName, lastName, email, message];
      const result = await pool.query(queryText, values);
      console.log(`Saved submission to database with ID: ${result.rows[0].id}`);
      databaseSaved = true;
    } else {
      console.warn("Skipped database save: DATABASE_URL not set.");
    }

    // 2. Send email via MailerSend
    let emailSent = false;
    if (process.env.MAILERSEND_API_KEY) {
      const emailResult = await sendContactNotification({ firstName, lastName, email, message });
      emailSent = emailResult.success;
    } else {
      console.warn("Skipped email notification: MAILERSEND_API_KEY not set.");
    }

    // 3. Return success
    return res.status(201).json({
      success: true,
      message: 'Contact submission received successfully.',
      details: {
        databaseSaved,
        emailSent,
      }
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({ error: 'An internal server error occurred while processing your request.' });
  }
});

// Serve static files from the Vite frontend build folder (dist)
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback all SPA routes to index.html
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
