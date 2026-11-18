import { Pool } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("WARNING: DATABASE_URL is not set in environment variables. Database operations will fail.");
}

const pool = new Pool({
  connectionString,
});

// Prevent unhandled errors from crashing the process
pool.on('error', (err) => {
  console.warn('Database pool idle client error (non-fatal):', err.message || err);
});

// Automatically create tables if they don't exist
export async function initializeDatabase() {
  if (!connectionString) {
    console.warn("Skipping database initialization: DATABASE_URL not configured.");
    return;
  }

  let client;
  try {
    client = await pool.connect();
    console.log("Initializing database schema...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS utm_source VARCHAR(255);
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(255);
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(255);
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS utm_term VARCHAR(255);
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS utm_content VARCHAR(255);
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS referrer TEXT;
      ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS landing_url TEXT;

      CREATE TABLE IF NOT EXISTS job_applications (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        position VARCHAR(255) NOT NULL,
        experience VARCHAR(100),
        message TEXT,
        resume_filename VARCHAR(255),
        utm_source VARCHAR(255),
        utm_medium VARCHAR(255),
        utm_campaign VARCHAR(255),
        referrer TEXT,
        landing_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Database schema initialized successfully.");
  } catch (error) {
    console.warn("Warning: Database initialization or connection failed (will continue running):", error.message || error);
  } finally {
    if (client) {
      try {
        client.release();
      } catch (_) {
        // ignore release error
      }
    }
  }
}

export default pool;
