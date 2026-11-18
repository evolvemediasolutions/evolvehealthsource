import { saveJobApplication } from '../../server/db.js';
import { sendJobApplicationNotification } from '../../server/mailer.js';

export default async function handler(req, res) {
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
    name,
    email,
    phone,
    position,
    experience,
    message,
    resumeFileName,
    resumeBase64,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    referrer,
    landing_url,
  } = req.body || {};

  if (!name || !email || !position) {
    return res.status(400).json({ error: 'Name, email, and position are required.' });
  }

  let dbSaved = false;
  let emailSent = false;
  let errors = {};

  // 1. Save to database
  try {
    const dbResult = await saveJobApplication({
      name,
      email,
      phone,
      position,
      experience,
      message,
      resumeFileName,
      utm_source,
      utm_medium,
      utm_campaign,
      referrer,
      landing_url,
    });
    dbSaved = dbResult.success;
    if (!dbResult.success) {
      errors.database = dbResult.error;
    }
  } catch (dbErr) {
    console.error('DB error in /api/careers/apply:', dbErr);
    errors.database = dbErr.message || dbErr;
  }

  // 2. Send email notification
  try {
    const emailResult = await sendJobApplicationNotification({
      name,
      email,
      phone,
      position,
      experience,
      message,
      resumeFileName,
      resumeBase64,
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
    console.error('Email error in /api/careers/apply:', emailErr);
    errors.email = emailErr.message || emailErr;
  }

  if (dbSaved || emailSent) {
    return res.status(200).json({
      success: true,
      message: 'Job application submitted successfully.',
      details: {
        databaseSaved: dbSaved,
        emailSent,
        errors: Object.keys(errors).length ? errors : undefined,
      },
    });
  }

  return res.status(500).json({
    error: 'Failed to process application. Please check server configuration and environment variables.',
    details: errors,
  });
}

