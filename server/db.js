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

// Automatically create tables if they don't exist
export async function initializeDatabase() {
  if (!connectionString) {
    console.warn("Skipping database initialization: DATABASE_URL not configured.");
    return;
  }

  const client = await pool.connect();
  try {
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
    `);
    console.log("Database schema initialized successfully.");
  } catch (error) {
    console.error("Error initializing database schema:", error);
  } finally {
    client.release();
  }
}

export default pool;
