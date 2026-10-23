import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import dotenv from 'dotenv';

dotenv.config();

const mailerSendApiKey = process.env.MAILERSEND_API_KEY;

if (!mailerSendApiKey) {
  console.warn("WARNING: MAILERSEND_API_KEY is not set in environment variables. Email sending will fail.");
}

const mailerSend = mailerSendApiKey ? new MailerSend({ apiKey: mailerSendApiKey }) : null;

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
  if (!mailerSend) {
    console.warn("Skipping email send: MailerSend is not configured.");
    return { success: false, error: "MailerSend not configured" };
  }

  const fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'MS_XXXXXX@trial-XXXXXX.mlsender.net';
  const toEmail = process.env.MAILERSEND_TO_EMAIL;

  try {
    console.log(`Sending email notification from ${fromEmail}...`);
    
    const sentFrom = new Sender(fromEmail, "Evolve Health Source");
    const recipients = toEmail 
      ? [new Recipient(toEmail, "Evolve Health Source Admin")]
      : [
          new Recipient("rory@evolvehealthsource.com", "Rory Gray"),
          new Recipient("connect@evolvehealthsource.com", "Evolve Support")
        ];
    
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

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`New Contact Inquiry from ${firstName} ${lastName}${utm_campaign ? ` [Campaign: ${utm_campaign}]` : ''}`)
      .setHtml(htmlContent)
      .setText(textContent);

    const response = await mailerSend.email.send(emailParams);
    console.log("Email sent successfully:", response);
    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending email via MailerSend:", error);
    return { success: false, error };
  }
}
