import { neon, Pool } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

function getConnectionString() {
  return process.env.DATABASE_URL;
}

const pool = new Pool({
  connectionString: getConnectionString() || '',
});

pool.on('error', (err) => {
  console.warn('Database pool client error (non-fatal):', err.message || err);
});

async function executeSql(queryText, params = []) {
  const connStr = getConnectionString();
  if (!connStr) {
    throw new Error('DATABASE_URL is not set.');
  }

  // 1. Try HTTP neon query (preferred for Vercel serverless)
  try {
    const sql = neon(connStr);
    return await sql(queryText, params);
  } catch (httpError) {
    console.warn('HTTP neon query failed, trying Pool:', httpError.message || httpError);
    // 2. Fall back to Pool query
    const res = await pool.query(queryText, params);
    return res.rows;
  }
}

let schemaEnsured = false;
export async function initializeDatabase() {
  if (schemaEnsured || !getConnectionString()) return;
  try {
    await executeSql(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        utm_source VARCHAR(255),
        utm_medium VARCHAR(255),
        utm_campaign VARCHAR(255),
        utm_term VARCHAR(255),
        utm_content VARCHAR(255),
        referrer TEXT,
        landing_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
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
    schemaEnsured = true;
    console.log('Database tables verified/created successfully.');
  } catch (error) {
    console.warn('Non-fatal database initialization warning:', error.message || error);
  }
}

export async function saveContactSubmission(data) {
  if (!getConnectionString()) {
    return { success: false, error: 'DATABASE_URL not configured in environment.' };
  }
  await initializeDatabase();
  try {
    const query = `
      INSERT INTO contact_submissions 
      (first_name, last_name, email, message, utm_source, utm_medium, utm_campaign, utm_term, utm_content, referrer, landing_url) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
      RETURNING id
    `;
    const params = [
      data.firstName,
      data.lastName,
      data.email,
      data.message,
      data.utm_source || null,
      data.utm_medium || null,
      data.utm_campaign || null,
      data.utm_term || null,
      data.utm_content || null,
      data.referrer || null,
      data.landing_url || null,
    ];
    const rows = await executeSql(query, params);
    const id = rows && rows[0] ? rows[0].id : null;
    return { success: true, id };
  } catch (err) {
    console.error('Database saveContactSubmission error:', err.message || err);
    return { success: false, error: err.message || err };
  }
}

export async function saveJobApplication(data) {
  if (!getConnectionString()) {
    return { success: false, error: 'DATABASE_URL not configured in environment.' };
  }
  await initializeDatabase();
  try {
    const query = `
      INSERT INTO job_applications 
      (name, email, phone, position, experience, message, resume_filename, utm_source, utm_medium, utm_campaign, referrer, landing_url) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
      RETURNING id
    `;
    const params = [
      data.name,
      data.email,
      data.phone || null,
      data.position,
      data.experience || null,
      data.message || null,
      data.resumeFileName || null,
      data.utm_source || null,
      data.utm_medium || null,
      data.utm_campaign || null,
      data.referrer || null,
      data.landing_url || null,
    ];
    const rows = await executeSql(query, params);
    const id = rows && rows[0] ? rows[0].id : null;
    return { success: true, id };
  } catch (err) {
    console.error('Database saveJobApplication error:', err.message || err);
    return { success: false, error: err.message || err };
  }
}

export default pool;
