import { saveContactSubmission } from '../server/db.js';
import { sendContactNotification } from '../server/mailer.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

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
  } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields (firstName, lastName, email, message) are required.' });
  }

  let dbSaved = false;
  let emailSent = false;
  let errors = {};

  // 1. Save to Database
  try {
    const dbResult = await saveContactSubmission({
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
    dbSaved = dbResult.success;
    if (!dbResult.success) {
      errors.database = dbResult.error;
    }
  } catch (dbErr) {
    console.error('DB error in /api/contact:', dbErr);
    errors.database = dbErr.message || dbErr;
  }

  // 2. Send email notification
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
      errors.email = emailResult.error;
    }
  } catch (emailErr) {
    console.error('Email error in /api/contact:', emailErr);
    errors.email = emailErr.message || emailErr;
  }

  // If at least one succeeds (DB or Email), treat submission as successful
  if (dbSaved || emailSent) {
    return res.status(200).json({
      success: true,
      message: 'Contact submission received successfully.',
      details: {
        databaseSaved: dbSaved,
        emailSent,
        errors: Object.keys(errors).length ? errors : undefined,
      },
    });
  }

  // Both failed
  console.error('Both database and email failed:', errors);
  return res.status(500).json({
    error: 'Failed to process submission. Please check server configuration and environment variables.',
    details: errors,
  });
}

