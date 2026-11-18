import dotenv from 'dotenv';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;
const mailerSendApiKey = process.env.MAILERSEND_API_KEY;

console.log('\n--- Email Configuration Diagnostic ---');
console.log('Resend API Key:', resendApiKey ? `Present (${resendApiKey.slice(0, 7)}...)` : 'Not set');
console.log('MailerSend API Key:', mailerSendApiKey ? `Present (${mailerSendApiKey.slice(0, 7)}...)` : 'Not set');

if (resendApiKey) {
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Evolve Health Source <onboarding@resend.dev>';
  const toEmail = process.env.RESEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

  console.log('\nTesting with RESEND:');
  console.log('From:', fromEmail);
  console.log('To:', toEmail);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: 'Test Email from Evolve Health Source Diagnostic (Resend)',
        html: '<h3>Resend is Working!</h3><p>This confirms that your Resend integration is active and sending emails successfully.</p>',
        text: 'Resend is working! This confirms your email sending configuration.',
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('\n❌ RESEND ERROR:');
      console.error('Status:', response.status);
      console.error('Message:', data.message || data);
      if (data.message && data.message.includes('domain')) {
        console.log('\nTip: If you haven\'t verified your custom domain in Resend yet:');
        console.log('- For testing, use from: "onboarding@resend.dev"');
        console.log('- And send to the email you used to register on resend.com');
        console.log('- To send to any email address, verify your domain in Resend Dashboard -> Domains.');
      }
    } else {
      console.log('\n✅ SUCCESS! Resend accepted the email.');
      console.log('Email ID:', data.id);
      console.log('Check your inbox at:', toEmail);
    }
  } catch (err) {
    console.error('\n❌ Network error while calling Resend:', err.message || err);
  }
} else if (mailerSendApiKey) {
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'noreply@evolvehealthsource.com';
  const toEmail = process.env.MAILERSEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

  console.log('\nTesting with MAILERSEND:');
  const mailerSend = new MailerSend({ apiKey: mailerSendApiKey });

  try {
    const sentFrom = new Sender(fromEmail, 'Evolve Health Source Test');
    const recipients = [new Recipient(toEmail, 'Chitra Test')];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Test Email from Evolve Health Source Diagnostic (MailerSend)')
      .setHtml('<h3>MailerSend is Working!</h3><p>This is a verification test email.</p>')
      .setText('MailerSend is working!');

    const response = await mailerSend.email.send(emailParams);
    console.log('\n✅ SUCCESS! MailerSend accepted the email.');
    console.log('Status:', response.statusCode || 202);
  } catch (error) {
    console.error('\n❌ MailerSend error:', error.message || error);
  }
} else {
  console.error('\n❌ ERROR: Neither RESEND_API_KEY nor MAILERSEND_API_KEY is defined in .env.');
}
