# Testmail.app Integration Guide

## 📧 Overview

This application is now integrated with [testmail.app](https://testmail.app), a service for testing email functionality without sending to real email addresses. This is perfect for development and testing.

---

## 🔧 Configuration

The following environment variables have been added to your `.env` file:

```env
# Testmail.app Configuration
TESTMAIL_NAMESPACE=vkzvk
TESTMAIL_TAG=test
TESTMAIL_API_KEY=c33e723d-550d-4168-9ea0-eae72bd09011
TESTMAIL_INBOX=vkzvk.test@inbox.testmail.app
```

### What These Mean:

- **TESTMAIL_NAMESPACE**: Your testmail.app namespace (vkzvk)
- **TESTMAIL_TAG**: Default tag for organizing emails (can be customized per email)
- **TESTMAIL_API_KEY**: Your API key for accessing the testmail.app API
- **TESTMAIL_INBOX**: The default inbox address where test emails will be sent

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install axios, which is required for the testmail.app API integration.

### 2. Start the Server

```bash
npm run dev
```

### 3. Send a Test Email

You can send a test email using the API:

```bash
curl -X POST http://localhost:3000/api/testmail/send-test \
  -H "Content-Type: application/json" \
  -d '{
    "tag": "test",
    "subject": "Test Email",
    "content": "<h1>Hello from Saranya Jewellery!</h1>"
  }'
```

### 4. View Your Emails

Open your testmail.app inbox in a browser:

- **Web View**: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app
- Or get the URL from the API: `GET http://localhost:3000/api/testmail/web-view`

---

## 📡 API Endpoints

### Send Test Email

```http
POST /api/testmail/send-test
Content-Type: application/json

{
  "tag": "test",
  "subject": "Test Subject",
  "content": "<h1>HTML content</h1>"
}
```

**Response:**

```json
{
  "success": true,
  "messageId": "...",
  "recipientEmail": "vkzvk.test@inbox.testmail.app",
  "viewUrl": "https://testmail.app/inbox/vkzvk.test@inbox.testmail.app"
}
```

### Get All Emails from Inbox

```http
GET /api/testmail/inbox?tag=test&limit=50
```

**Response:**

```json
{
  "success": true,
  "emails": [...],
  "count": 5
}
```

### Get Latest Email

```http
GET /api/testmail/latest?tag=test
```

**Response:**

```json
{
  "success": true,
  "email": {
    "subject": "...",
    "from": "...",
    "to": "...",
    "html": "...",
    "text": "..."
  }
}
```

### Search Emails by Subject

```http
GET /api/testmail/search?subject=Welcome&tag=test
```

**Response:**

```json
{
  "success": true,
  "emails": [...],
  "count": 2
}
```

### Delete All Emails

```http
DELETE /api/testmail/inbox?tag=test
```

**Response:**

```json
{
  "success": true,
  "message": "All emails deleted successfully"
}
```

### Get Web View URL

```http
GET /api/testmail/web-view?tag=test
```

**Response:**

```json
{
  "success": true,
  "url": "https://testmail.app/inbox/vkzvk.test@inbox.testmail.app",
  "message": "Open this URL in your browser to view the inbox"
}
```

### Enable/Disable Test Mode

```http
POST /api/testmail/test-mode
Content-Type: application/json

{
  "enabled": true
}
```

**Response:**

```json
{
  "success": true,
  "testMode": true,
  "message": "Test mode enabled. All emails will now be sent to testmail.app inbox."
}
```

When test mode is enabled:

- All welcome emails will be sent to `vkzvk.welcome@inbox.testmail.app`
- All promotion emails will be sent to `vkzvk.promotion@inbox.testmail.app`
- All custom emails will be sent to `vkzvk.custom@inbox.testmail.app`

### Get Testmail Configuration

```http
GET /api/testmail/config
```

**Response:**

```json
{
  "success": true,
  "config": {
    "namespace": "vkzvk",
    "defaultTag": "test",
    "inboxAddress": "vkzvk.test@inbox.testmail.app",
    "webViewUrl": "https://testmail.app/inbox/vkzvk.test@inbox.testmail.app"
  }
}
```

---

## 🎯 Using Tags for Organization

Tags help you organize different types of emails:

- `welcome` - Customer welcome emails
- `promotion` - Promotional emails
- `custom` - Custom emails
- `test` - General testing

Example:

```javascript
// Send to vkzvk.welcome@inbox.testmail.app
await emailService.sendTestEmail(
  "welcome",
  "Welcome!",
  "<h1>Welcome to our store</h1>",
);

// Send to vkzvk.promotion@inbox.testmail.app
await emailService.sendTestEmail(
  "promotion",
  "Sale!",
  "<h1>50% off all items</h1>",
);
```

Each tag creates a separate inbox that you can view independently.

---

## 🧪 Test Mode

Test mode redirects all outgoing emails to testmail.app instead of actual customer emails.

### Enable Test Mode

```javascript
// In your code
emailService.setTestMode(true);

// Or via API
POST /api/testmail/test-mode
{
  "enabled": true
}
```

### Environment Variable

You can also enable test mode via environment variable:

```env
USE_TESTMAIL=true
```

When test mode is active:

- ✅ All emails go to testmail.app
- ✅ No emails are sent to real customer addresses
- ✅ Perfect for development and testing
- ✅ Each email type uses a different tag

---

## 📝 Code Examples

### Sending a Welcome Email (Test Mode)

```javascript
import emailService from "./backend/utils/emailService.js";

// Enable test mode
emailService.setTestMode(true);

// Send welcome email (will go to testmail.app)
const customer = {
  email: "customer@example.com",
  fullName: "John Doe",
};

const result = await emailService.sendWelcomeEmail(customer);
console.log(result);
// Output:
// {
//   success: true,
//   messageId: '...',
//   testMode: true,
//   recipientEmail: 'vkzvk.welcome@inbox.testmail.app'
// }
```

### Checking Received Emails

```javascript
import testmailService from "./backend/utils/testmailService.js";

// Get all emails
const inbox = await testmailService.getEmails("welcome");
console.log(`Received ${inbox.count} emails`);

// Get latest email
const latest = await testmailService.getLatestEmail("welcome");
console.log("Subject:", latest.email.subject);

// Search for specific email
const results = await testmailService.searchBySubject("Welcome to Saranya");
console.log(`Found ${results.count} matching emails`);
```

### Wait for Email Delivery

```javascript
// Send email
await emailService.sendTestEmail(
  "test",
  "Important Update",
  "<h1>New Features!</h1>",
);

// Wait for it to arrive (up to 30 seconds)
const result = await testmailService.waitForEmail("Important Update", 30000);

if (result.success) {
  console.log("Email received!");
  console.log("Content:", result.email.html);
} else {
  console.log("Email not received within timeout");
}
```

---

## 🔍 Viewing Emails in Browser

### Direct Links

Your testmail.app inboxes:

- **Test**: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app
- **Welcome**: https://testmail.app/inbox/vkzvk.welcome@inbox.testmail.app
- **Promotion**: https://testmail.app/inbox/vkzvk.promotion@inbox.testmail.app
- **Custom**: https://testmail.app/inbox/vkzvk.custom@inbox.testmail.app

### API View URLs

```bash
# Get web view URL for any tag
curl http://localhost:3000/api/testmail/web-view?tag=welcome
```

---

## 🛡️ Security Notes

⚠️ **Important**: Your API key is stored in the `.env` file.

- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Keep your API key secure and private
- Rotate your API key if it's ever compromised

---

## 📊 Testing Workflow

Here's a recommended workflow for testing email functionality:

1. **Enable Test Mode**

   ```bash
   curl -X POST http://localhost:3000/api/testmail/test-mode -H "Content-Type: application/json" -d '{"enabled": true}'
   ```

2. **Clear Previous Test Emails**

   ```bash
   curl -X DELETE http://localhost:3000/api/testmail/inbox?tag=test
   ```

3. **Trigger Your Email Functionality**
   - Register a new customer
   - Create a promotion
   - Send custom emails

4. **Verify Emails Arrived**

   ```bash
   curl http://localhost:3000/api/testmail/inbox?tag=welcome&limit=10
   ```

5. **View in Browser**
   - Open https://testmail.app/inbox/vkzvk.welcome@inbox.testmail.app

6. **Disable Test Mode for Production**
   ```bash
   curl -X POST http://localhost:3000/api/testmail/test-mode -H "Content-Type: application/json" -d '{"enabled": false}'
   ```

---

## 🎨 Visual Testing

The testmail.app web interface provides:

- ✅ Email preview (HTML & Text)
- ✅ Email source code view
- ✅ Mobile/Desktop preview
- ✅ JSON view of email data
- ✅ Email headers and metadata
- ✅ Attachment viewing

---

## 🔧 Troubleshooting

### Emails Not Arriving

1. Check your SMTP configuration in `.env`
2. Verify email service is running: `npm run dev`
3. Check server logs for errors
4. Verify API key is correct
5. Try sending a simple test email:
   ```bash
   curl -X POST http://localhost:3000/api/testmail/send-test
   ```

### Can't View Emails in Browser

1. Verify the namespace is correct: `vkzvk`
2. Check the tag matches what you used
3. Try the direct API to see if emails exist:
   ```bash
   curl http://localhost:3000/api/testmail/inbox
   ```

### API Key Issues

If you get authentication errors:

1. Check `.env` file has correct `TESTMAIL_API_KEY`
2. Verify the API key format: `c33e723d-550d-4168-9ea0-eae72bd09011`
3. Make sure the key hasn't been revoked in testmail.app dashboard

---

## 📚 Additional Resources

- **Testmail.app Dashboard**: https://testmail.app
- **Testmail.app Documentation**: https://testmail.app/docs
- **API Reference**: See the GraphQL API section in testmail.app

---

## 🎉 Benefits of Using Testmail.app

✅ **No Spam** - Don't clog up real inboxes during testing
✅ **Visual Testing** - See exactly how emails render
✅ **Automation** - Integrate with automated tests
✅ **Organization** - Use tags to separate different email types
✅ **Debugging** - View full email source and headers
✅ **Team Collaboration** - Share inbox URLs with your team
✅ **Free Tier** - Great for development and testing

---

## 💡 Tips

1. Use descriptive tags for different email types
2. Clear your inbox regularly during testing
3. Enable test mode during development
4. Disable test mode before deploying to production
5. Use the wait function for automated testing
6. Keep your API key secure

---

**Happy Testing! 📧**
