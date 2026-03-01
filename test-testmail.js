import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import emailService from './backend/utils/emailService.js';
import testmailService from './backend/utils/testmailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

console.log('🧪 Testing testmail.app integration...\n');

// Test 1: Check configuration
console.log('📋 Configuration:');
console.log('  Namespace:', process.env.TESTMAIL_NAMESPACE);
console.log('  Default Tag:', process.env.TESTMAIL_TAG);
console.log('  Inbox Address:', testmailService.getInboxAddress());
console.log('  Web View:', testmailService.getWebViewUrl());
console.log('');

// Test 2: Send a test email
console.log('📧 Sending test email...');
const result = await emailService.sendTestEmail(
  'quicktest',
  '🎉 Test Email from Saranya Jewellery',
  '<h1>Hello from Saranya Jewellery!</h1><p>This is a test email to verify the testmail.app integration.</p><p><strong>Status:</strong> ✅ Working!</p>'
);

if (result.success) {
  console.log('✅ Email sent successfully!');
  console.log('  Message ID:', result.messageId);
  console.log('  Recipient:', result.recipientEmail);
  console.log('  View URL:', result.viewUrl);
  console.log('');
  
  // Test 3: Wait for email to arrive
  console.log('⏳ Waiting for email to arrive (up to 30 seconds)...');
  const waitResult = await testmailService.waitForEmail('Test Email from Saranya', 30000);
  
  if (waitResult.success) {
    console.log('✅ Email received!');
    console.log('  Subject:', waitResult.email.subject);
    console.log('  From:', waitResult.email.from);
    console.log('  To:', waitResult.email.to);
    console.log('');
    console.log('🎉 All tests passed! Testmail.app integration is working correctly.');
  } else {
    console.log('⚠️  Email not received within 30 seconds.');
    console.log('   This might be normal - check the web view to see if it arrived:');
    console.log('   ', result.viewUrl);
  }
} else {
  console.error('❌ Failed to send email:', result.error);
}

console.log('');
console.log('🌐 Open in browser to view all emails:');
console.log('   ', testmailService.getWebViewUrl('quicktest'));
console.log('');
console.log('📚 For more information, see TESTMAIL_GUIDE.md');
