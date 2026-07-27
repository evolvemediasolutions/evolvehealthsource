import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import dotenv from 'dotenv';

dotenv.config();

const mailerSendApiKey = process.env.MAILERSEND_API_KEY;

if (!mailerSendApiKey) {
  console.warn("WARNING: MAILERSEND_API_KEY is not set in environment variables. Email sending will fail.");
}

const mailerSend = mailerSendApiKey ? new MailerSend({ apiKey: mailerSendApiKey }) : null;

export async function sendContactNotification({ firstName, lastName, email, message }) {
  if (!mailerSend) {
    console.warn("Skipping email send: MailerSend is not configured.");
    return { success: false, error: "MailerSend not configured" };
  }

  const fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'MS_XXXXXX@trial-XXXXXX.mlsender.net';
  const toEmail = process.env.MAILERSEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

  try {
    console.log(`Sending email notification from ${fromEmail} to ${toEmail}...`);
    
    const sentFrom = new Sender(fromEmail, "Evolve Health Source");
    const recipients = [new Recipient(toEmail, "Evolve Health Source Admin")];
    
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #0d9488; margin: 10px 0;">
        ${message.replace(/\n/g, '<br/>')}
      </blockquote>
    `;

    const textContent = `New Contact Form Submission\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage:\n${message}`;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`New Contact Inquiry from ${firstName} ${lastName}`)
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
