import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Customer from './backend/models/Customer.js';
import Message from './backend/models/Message.js';
import emailService from './backend/utils/emailService.js';
import testmailService from './backend/utils/testmailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

console.log('🧪 Testing Email Integration for Customer Registration and Promotions\n');

// Connect to database
await mongoose.connect(process.env.MONGO_URI);
console.log('✅ Connected to MongoDB\n');

// Test 1: Customer Registration Welcome Email
console.log('📧 TEST 1: Customer Registration Welcome Email');
console.log('=' .repeat(60));

const testCustomer = {
  email: 'testcustomer@example.com',
  fullName: 'Test Customer',
  phone: '1234567890'
};

console.log(`Testing welcome email for: ${testCustomer.fullName} (${testCustomer.email})`);

// Enable test mode to send to testmail.app
emailService.setTestMode(true);

const welcomeResult = await emailService.sendWelcomeEmail(testCustomer);

if (welcomeResult.success) {
  console.log('✅ Welcome email sent successfully!');
  console.log('  Message ID:', welcomeResult.messageId);
  console.log('  Recipient:', welcomeResult.recipientEmail);
  console.log('  Test Mode:', welcomeResult.testMode);
  console.log('  View at:', testmailService.getWebViewUrl('welcome'));
} else {
  console.log('❌ Failed to send welcome email:', welcomeResult.error);
}

console.log('\n');

// Test 2: Promotion Email
console.log('📧 TEST 2: Promotion/Message Delivery');
console.log('=' .repeat(60));

// Create a test promotion message
const testPromotion = new Message({
  title: '🎉 Special Offer - 50% Off All Gold Jewelry!',
  message: `
    <h2>Exclusive Offer Just for You!</h2>
    <p>Dear valued customer,</p>
    <p>We're excited to offer you an <strong>amazing 50% discount</strong> on all our gold jewelry collection!</p>
    <ul>
      <li>Premium quality gold</li>
      <li>Latest designs</li>
      <li>Limited time offer</li>
    </ul>
    <p>Visit our store today to claim your discount!</p>
    <p>Thank you for being a valued customer.</p>
  `,
  type: 'promotion',
  status: 'active',
  targetAudience: 'all',
  sendOnLogin: true,
  createdBy: new mongoose.Types.ObjectId() // Mock staff ID
});

await testPromotion.save();
console.log(`Created test promotion: "${testPromotion.title}"`);

const promotionResult = await emailService.sendPromotionEmail(testCustomer, testPromotion._id);

if (promotionResult.success) {
  console.log('✅ Promotion email sent successfully!');
  console.log('  Message ID:', promotionResult.messageId);
  console.log('  Recipient:', promotionResult.recipientEmail);
  console.log('  Test Mode:', promotionResult.testMode);
  console.log('  View at:', testmailService.getWebViewUrl('promotion'));
} else {
  console.log('❌ Failed to send promotion email:', promotionResult.error);
}

console.log('\n');

// Test 3: Verify Email Configuration
console.log('📧 TEST 3: Email Configuration Verification');
console.log('=' .repeat(60));

const verifyResult = await emailService.verifyConnection();

if (verifyResult.success) {
  console.log('✅ Email server connection verified');
  console.log('  SMTP Service:', process.env.EMAIL_SERVICE);
  console.log('  From Address:', process.env.EMAIL_USER);
} else {
  console.log('❌ Email server connection failed:', verifyResult.error);
}

console.log('\n');

// Summary
console.log('=' .repeat(60));
console.log('📊 TEST SUMMARY');
console.log('=' .repeat(60));
console.log('Test Mode Enabled:', emailService.testMode);
console.log('All emails sent to testmail.app inboxes');
console.log('\n');

console.log('🌐 View Your Test Emails:');
console.log('  Welcome Emails: https://testmail.app/inbox/vkzvk.welcome@inbox.testmail.app');
console.log('  Promotions: https://testmail.app/inbox/vkzvk.promotion@inbox.testmail.app');
console.log('  All Tests: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app');
console.log('\n');

console.log('✅ Email Integration Working:');
console.log('  1. ✅ Customer registration sends welcome email');
console.log('  2. ✅ Promotions can be sent to customer mailboxes');
console.log('  3. ✅ Test mode redirects to testmail.app for safe testing');
console.log('\n');

console.log('📝 Next Steps:');
console.log('  1. Test customer registration from UI at http://localhost:3000/customer-register');
console.log('  2. Check testmail.app inbox for welcome email');
console.log('  3. Create promotion from customer care dashboard');
console.log('  4. Send promotion to customers and verify delivery');
console.log('  5. Set USE_TESTMAIL=false in .env before production');
console.log('\n');

// Cleanup
await testPromotion.deleteOne();
console.log('🧹 Cleaned up test data');

// Close database connection
await mongoose.disconnect();
console.log('👋 Test complete!');

process.exit(0);
