import dotenv from 'dotenv';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

dotenv.config();

console.log('\n--- MailerSend Configuration Diagnostic ---');
const apiKey = process.env.MAILERSEND_API_KEY;
const fromEmail = process.env.MAILERSEND_FROM_EMAIL || 'noreply@evolvehealthsource.com';
const toEmail = process.env.MAILERSEND_TO_EMAIL || 'chitra@evolvehealthsource.com';

console.log('1. API Key present:', apiKey ? `Yes (${apiKey.slice(0, 10)}...)` : 'NO');
console.log('2. From Email:', fromEmail);
console.log('3. To Email:', toEmail);

if (!apiKey) {
  console.error('\n❌ ERROR: MAILERSEND_API_KEY is missing from environment variables (.env).');
  process.exit(1);
}

const mailerSend = new MailerSend({ apiKey });

async function runTest() {
  console.log('\nSending test email...');
  try {
    const sentFrom = new Sender(fromEmail, 'Evolve Health Source Test');
    const recipients = [new Recipient(toEmail, 'Chitra Test')];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Test Email from Evolve Health Source Diagnostic')
      .setHtml('<h3>MailerSend is Working!</h3><p>This is a verification test email confirming your email sending configuration.</p>')
      .setText('MailerSend is working! This is a test email.');

    const response = await mailerSend.email.send(emailParams);
    console.log('\n✅ SUCCESS! Email was accepted by MailerSend:');
    console.log('Response status:', response.statusCode || 202);
    console.log('Check the inbox at:', toEmail);
  } catch (error) {
    console.error('\n❌ MAIL SEND FAILED:');
    console.error('Status code:', error.statusCode || error.status || 'N/A');
    if (error.body) {
      console.error('MailerSend Error Message:', error.body.message);
      if (error.body.errors) {
        console.error('Details:', JSON.stringify(error.body.errors, null, 2));
      }
    } else {
      console.error('Error:', error.message || error);
    }

    console.log('\n--- Common Causes & How to Fix ---');
    console.log('1. "The from.email must be a valid sender of the authenticated domain":');
    console.log('   -> Your domain (' + fromEmail.split('@')[1] + ') is not yet verified in MailerSend.');
    console.log('   -> Go to MailerSend Dashboard -> Domains -> Add Domain & verify SPF/DKIM DNS records.');
    console.log('   -> If using a trial account, use your trial sender address (e.g. MS_XXXXXX@trial-XXXXXX.mlsender.net).');
    console.log('2. If deployed to Vercel:');
    console.log('   -> .env is in .gitignore! You MUST add MAILERSEND_API_KEY, MAILERSEND_FROM_EMAIL, and MAILERSEND_TO_EMAIL to Vercel Dashboard -> Settings -> Environment Variables.');
  }
}

runTest();

