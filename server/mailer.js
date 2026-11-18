import { MailerSend, EmailParams, Sender, Recipient, Attachment } from 'mailersend';
import dotenv from 'dotenv';

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;
const mailerSendApiKey = process.env.MAILERSEND_API_KEY;

if (!resendApiKey && !mailerSendApiKey) {
  console.warn("WARNING: Neither RESEND_API_KEY nor MAILERSEND_API_KEY is set in environment variables. Email sending will fail.");
}

const mailerSend = mailerSendApiKey ? new MailerSend({ apiKey: mailerSendApiKey }) : null;

function extractMailerError(error) {
  const message =
    error?.body?.message ||
    error?.response?.data?.message ||
    error?.message ||
    'Unknown email sending error';

  const details =
    error?.body?.errors ||
    error?.response?.data?.errors ||
    error?.errors ||
    null;

  return { message, details };
}

/**
 * Send email using Resend REST API (via native fetch - zero extra dependencies)
 */
async function sendWithResend({ from, to, replyTo, subject, html, text, attachments }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'RESEND_API_KEY is not configured in environment variables.' };
  }

  const payload = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
    ...(attachments && attachments.length > 0 ? { attachments } : {}),
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Resend rejected email:', data);
      return {
        success: false,
        error: data.message || data.error || 'Resend API returned an error',
        details: data,
      };
    }

    console.log('✅ Email sent successfully via Resend. Email ID:', data.id);
    return { success: true, data };
  } catch (err) {
    console.error('❌ Resend network error:', err);
    return { success: false, error: err.message || 'Network error calling Resend API' };
  }
}

export async function sendContactNotification({
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
}) {
  const hasAttribution = Boolean(utm_source || utm_medium || utm_campaign || utm_term || utm_content || referrer || landing_url);

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Message:</strong></p>
    <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #0d9488; margin: 10px 0;">
      ${message.replace(/\n/g, '<br/>')}
    </blockquote>
    ${hasAttribution ? `
    <div style="background: #f1f5f9; padding: 16px; border-radius: 8px; margin-top: 20px; font-family: sans-serif;">
      <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #1e293b;">Campaign & Lead Attribution</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #334155;">
        ${utm_source ? `<tr><td style="padding: 4px 8px; font-weight: bold; width: 120px;">Source:</td><td style="padding: 4px 8px;">${utm_source}</td></tr>` : ''}
        ${utm_medium ? `<tr><td style="padding: 4px 8px; font-weight: bold;">Medium:</td><td style="padding: 4px 8px;">${utm_medium}</td></tr>` : ''}
        ${utm_campaign ? `<tr><td style="padding: 4px 8px; font-weight: bold;">Campaign:</td><td style="padding: 4px 8px;">${utm_campaign}</td></tr>` : ''}
        ${utm_term ? `<tr><td style="padding: 4px 8px; font-weight: bold;">Term:</td><td style="padding: 4px 8px;">${utm_term}</td></tr>` : ''}
        ${utm_content ? `<tr><td style="padding: 4px 8px; font-weight: bold;">Content:</td><td style="padding: 4px 8px;">${utm_content}</td></tr>` : ''}
        ${referrer ? `<tr><td style="padding: 4px 8px; font-weight: bold;">Referrer:</td><td style="padding: 4px 8px;">${referrer}</td></tr>` : ''}
        ${landing_url ? `<tr><td style="padding: 4px 8px; font-weight: bold;">Landing URL:</td><td style="padding: 4px 8px;">${landing_url}</td></tr>` : ''}
      </table>
    </div>` : ''}
  `;

  const textContent = `New Contact Form Submission
Name: ${firstName} ${lastName}
Email: ${email}
Message:
${message}

${hasAttribution ? `Attribution:
- UTM Source: ${utm_source || 'N/A'}
- UTM Medium: ${utm_medium || 'N/A'}
- UTM Campaign: ${utm_campaign || 'N/A'}
- UTM Term: ${utm_term || 'N/A'}
- UTM Content: ${utm_content || 'N/A'}
- Referrer: ${referrer || 'Direct'}
- Landing URL: ${landing_url || 'N/A'}
` : ''}`;

  const subject = `New Contact Inquiry from ${firstName} ${lastName}${utm_campaign ? ` [Campaign: ${utm_campaign}]` : ''}`;

  // Priority 1: Use Resend if configured
  if (process.env.RESEND_API_KEY) {
    const fromAddress = process.env.RESEND_FROM_EMAIL || process.env.MAILERSEND_FROM_EMAIL || 'Evolve Health Source <onboarding@resend.dev>';
    const toAddress = process.env.RESEND_TO_EMAIL || process.env.MAILERSEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

    console.log(`Sending contact notification via Resend to ${toAddress}...`);
    return await sendWithResend({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject,
      html: htmlContent,
      text: textContent,
    });
  }

  // Priority 2: Fall back to MailerSend if configured
  if (mailerSend) {
    const fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'noreply@evolvehealthsource.com';
    const toEmail = process.env.MAILERSEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

    try {
      console.log(`Sending contact email notification via MailerSend from ${fromEmail} to ${toEmail}...`);
      const sentFrom = new Sender(fromEmail, "Evolve Health Source");
      const recipients = [
        new Recipient(toEmail, "Chitra - Evolve Health Source"),
        new Recipient("connect@evolvehealthsource.com", "Evolve Support")
      ];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject(subject)
        .setHtml(htmlContent)
        .setText(textContent);

      const response = await mailerSend.email.send(emailParams);
      console.log("Email sent successfully via MailerSend:", response);
      return { success: true, data: response };
    } catch (error) {
      const parsed = extractMailerError(error);
      console.error("❌ MailerSend rejected contact email:", parsed.message, parsed.details || error);
      return { success: false, error: parsed.message, details: parsed.details };
    }
  }

  console.warn("Skipping email send: No email provider configured (neither RESEND_API_KEY nor MAILERSEND_API_KEY).");
  return { success: false, error: "No email provider configured." };
}

export async function sendJobApplicationNotification({
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
}) {
  const hasAttribution = Boolean(utm_source || utm_medium || utm_campaign || utm_term || utm_content || referrer || landing_url);

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1e293b;">
      <h2 style="color: #0f172a; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
        New Career Application: ${position}
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Candidate Name:</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Position Applied:</td>
          <td style="padding: 8px 0; color: #0d9488; font-weight: bold;">${position}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
          <td style="padding: 8px 0;"><a href="tel:${phone || ''}" style="color: #2563eb; text-decoration: none;">${phone || 'Not provided'}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Experience:</td>
          <td style="padding: 8px 0;">${experience || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #475569;">Resume File:</td>
          <td style="padding: 8px 0;">${resumeFileName ? `<strong>${resumeFileName}</strong> (Attached)` : 'No file attached'}</td>
        </tr>
      </table>

      ${message ? `
      <h3 style="margin-top: 25px; margin-bottom: 8px; font-size: 15px; color: #334155;">Candidate Notes / Cover Letter:</h3>
      <blockquote style="background: #f8fafc; padding: 15px; border-left: 4px solid #0d9488; margin: 0; font-style: italic; color: #334155; border-radius: 0 8px 8px 0;">
        ${message.replace(/\n/g, '<br/>')}
      </blockquote>
      ` : ''}

      ${hasAttribution ? `
      <div style="background: #f1f5f9; padding: 14px; border-radius: 8px; margin-top: 25px; font-size: 12px; color: #64748b;">
        <h4 style="margin: 0 0 8px 0; font-size: 13px; color: #334155;">Lead & Referral Attribution</h4>
        <p style="margin: 3px 0;"><strong>Source:</strong> ${utm_source || 'N/A'}</p>
        <p style="margin: 3px 0;"><strong>Medium:</strong> ${utm_medium || 'N/A'}</p>
        <p style="margin: 3px 0;"><strong>Campaign:</strong> ${utm_campaign || 'N/A'}</p>
        <p style="margin: 3px 0;"><strong>Referrer:</strong> ${referrer || 'Direct'}</p>
        <p style="margin: 3px 0;"><strong>Landing URL:</strong> ${landing_url || 'N/A'}</p>
      </div>` : ''}

      <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
        This application was submitted via the Evolve Health Source Careers Portal.
      </p>
    </div>
  `;

  const textContent = `New Career Application: ${position}
Candidate Name: ${name}
Position: ${position}
Email: ${email}
Phone: ${phone || 'N/A'}
Experience: ${experience || 'N/A'}
Resume File: ${resumeFileName || 'None'}

Notes:
${message || 'None'}

${hasAttribution ? `Attribution:
- UTM Source: ${utm_source || 'N/A'}
- UTM Campaign: ${utm_campaign || 'N/A'}
- Referrer: ${referrer || 'Direct'}
` : ''}`;

  const subject = `New Career Application: ${position} - ${name}`;

  // Priority 1: Use Resend if configured
  if (process.env.RESEND_API_KEY) {
    const fromAddress = process.env.RESEND_FROM_EMAIL || process.env.MAILERSEND_FROM_EMAIL || 'Evolve Health Source Careers <onboarding@resend.dev>';
    const toAddress = process.env.RESEND_TO_EMAIL || process.env.MAILERSEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

    const attachments = [];
    if (resumeBase64 && resumeFileName) {
      const cleanBase64 = resumeBase64.includes(',') ? resumeBase64.split(',')[1] : resumeBase64;
      attachments.push({
        filename: resumeFileName,
        content: cleanBase64,
      });
    }

    console.log(`Sending job application via Resend to ${toAddress}...`);
    return await sendWithResend({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject,
      html: htmlContent,
      text: textContent,
      attachments,
    });
  }

  // Priority 2: Fall back to MailerSend if configured
  if (mailerSend) {
    const fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'noreply@evolvehealthsource.com';
    const toEmail = "chitra@evolvehealthsource.com";

    try {
      console.log(`Sending job application email via MailerSend from ${fromEmail} to ${toEmail}...`);
      const sentFrom = new Sender(fromEmail, "Evolve Health Source Careers");
      const recipients = [
        new Recipient(toEmail, "Chitra - Evolve Health Source Recruitment")
      ];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject(subject)
        .setHtml(htmlContent)
        .setText(textContent);

      if (resumeBase64 && resumeFileName) {
        const cleanBase64 = resumeBase64.includes(',') ? resumeBase64.split(',')[1] : resumeBase64;
        const attachment = new Attachment(cleanBase64, resumeFileName, 'attachment');
        emailParams.setAttachments([attachment]);
      }

      const response = await mailerSend.email.send(emailParams);
      console.log("Job application email sent successfully via MailerSend:", response);
      return { success: true, data: response };
    } catch (error) {
      const parsed = extractMailerError(error);
      console.error("❌ MailerSend rejected job application email:", parsed.message, parsed.details || error);
      return { success: false, error: parsed.message, details: parsed.details };
    }
  }

  console.warn("Skipping email send: No email provider configured.");
  return { success: false, error: "No email provider configured." };
}
