# ✅ Testmail.app Integration Complete!

## 📧 Configuration Summary

Your Saranya Jewellery application is now configured to send test emails to **testmail.app**.

### Configuration Details:

- **Namespace**: `vkzvk`
- **API Key**: `c33e723d-550d-4168-9ea0-eae72bd09011`
- **Default inbox**: `vkzvk.test@inbox.testmail.app`

---

## 🚀 Quick Start

### 1. View Your Test Emails

Open your testmail.app inbox in your browser:

**🌐 Web Interface**: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app

Or view emails by tag:

- **Welcome emails**: https://testmail.app/inbox/vkzvk.welcome@inbox.testmail.app
- **Promotions**: https://testmail.app/inbox/vkzvk.promotion@inbox.testmail.app
- **Custom emails**: https://testmail.app/inbox/vkzvk.custom@inbox.testmail.app
- **Quick tests**: https://testmail.app/inbox/vkzvk.quicktest@inbox.testmail.app

### 2. Start the Server

```bash
npm run dev
```

The server will start on http://localhost:3000

### 3. Send a Test Email

Use the test endpoint:

```bash
curl -X POST http://localhost:3000/api/testmail/send-test \
  -H "Content-Type: application/json" \
  -d '{
    "tag": "test",
    "subject": "Hello from Saranya Jewellery!",
    "content": "<h1>Welcome!</h1><p>This is a test email.</p>"
  }'
```

Then check your inbox at: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app

---

## 🎯 How It Works

### Email Sending

All emails sent by your application will go through Gmail SMTP and can be redirected to testmail.app for testing:

1. **Production Mode** (default): Emails go to real customer addresses
2. **Test Mode** (enabled): All emails automatically redirect to testmail.app

### Enable Test Mode

**Option 1: Environment Variable**

```bash
# Add to .env
USE_TESTMAIL=true
```

**Option 2: API Call**

```bash
curl -X POST http://localhost:3000/api/testmail/test-mode \
  -H "Content-Type: application/json" \
  -d '{"enabled": true}'
```

**Option 3: In Code**

```javascript
import emailService from "./backend/utils/emailService.js";
emailService.setTestMode(true);
```

---

## 📊 Testing Customer Workflows

### Welcome Email (Customer Registration)

When a customer registers, a welcome email is automatically sent.

**In Test Mode:**

- Email goes to: `vkzvk.welcome@inbox.testmail.app`
- View at: https://testmail.app/inbox/vkzvk.welcome@inbox.testmail.app

**Test it:**

1. Enable test mode
2. Register a new customer at http://localhost:3000/customer-register
3. Check the testmail.app inbox for the welcome email

### Promotional Emails

When customer care staff create promotions, they can be sent to customers.

**In Test Mode:**

- Email goes to: `vkzvk.promotion@inbox.testmail.app`
- View at: https://testmail.app/inbox/vkzvk.promotion@inbox.testmail.app

**Test it:**

1. Enable test mode
2. Login as customer care staff
3. Create a promotion message
4. Check the testmail.app inbox

---

## 🛠️ API Endpoints

### Send Test Email

```bash
POST /api/testmail/send-test
{
  "tag": "test",
  "subject": "Subject line",
  "content": "<h1>HTML content</h1>"
}
```

### Enable/Disable Test Mode

```bash
POST /api/testmail/test-mode
{
  "enabled": true
}
```

### Get Configuration

```bash
GET /api/testmail/config
```

### Get Web View URL

```bash
GET /api/testmail/web-view?tag=test
```

---

## 📝 Environment Variables

All testmail.app configuration is in your `.env` file:

```env
# Testmail.app Configuration
TESTMAIL_NAMESPACE=vkzvk
TESTMAIL_TAG=test
TESTMAIL_API_KEY=c33e723d-550d-4168-9ea0-eae72bd09011
TESTMAIL_INBOX=vkzvk.test@inbox.testmail.app

# Optional: Enable test mode by default
USE_TESTMAIL=true
```

---

## 🎨 Viewing Emails

### Web Interface (Recommended)

The easiest way to view your test emails is through the testmail.app web interface:

1. Open: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app
2. View all your emails in a beautiful interface
3. See HTML rendering, source code, and attachments
4. Test on mobile and desktop previews

### Organizing with Tags

Use different tags to organize emails by type:

```javascript
// Send welcome email
await emailService.sendTestEmail("welcome", "Welcome!", "<h1>Hi!</h1>");
// View at: vkzvk.welcome@inbox.testmail.app

// Send promotion
await emailService.sendTestEmail("promotion", "Sale!", "<h1>50% Off</h1>");
// View at: vkzvk.promotion@inbox.testmail.app
```

---

## ✅ What Works

- ✅ **Email sending** - All emails are successfully sent through Gmail SMTP
- ✅ **Testmail.app delivery** - Emails arrive at your testmail.app inbox
- ✅ **Test mode** - Redirect all emails to testmail.app for testing
- ✅ **Tags** - Organize emails by type (welcome, promotion, custom, etc.)
- ✅ **Web viewing** - View emails in testmail.app's web interface
- ✅ **HTML rendering** - See beautifully formatted emails
- ✅ **Multiple inboxes** - Use different tags for different email types

---

## 🔒 Security

⚠️ **Important Security Notes:**

1. **Never commit `.env` file** - Contains sensitive API keys
2. **Keep API key private** - Don't share your testmail.app API key
3. **Disable test mode in production** - Set `USE_TESTMAIL=false` or remove it
4. **Use environment-specific configs** - Different keys for dev/staging/prod

---

## 🎯 Best Practices

### Development

```env
USE_TESTMAIL=true
```

- All emails go to testmail.app
- Safe testing without spamming real users
- Easy to view and verify email content

### Production

```env
# USE_TESTMAIL=false (or remove this line)
```

- Emails go to real customer addresses
- Normal production behavior
- Monitor email delivery success

---

## 📚 Additional Resources

- **Testmail.app Dashboard**: https://testmail.app
- **Your Namespace**: vkzvk
- **Full Documentation**: See `TESTMAIL_GUIDE.md` for detailed API reference
- **Email Setup Guide**: See `EMAIL_SETUP_GUIDE.md` for SMTP configuration

---

## 🎉 Success!

Your application is now connected to testmail.app!

**Next Steps:**

1. Start the server: `npm run dev`
2. Open testmail.app inbox: https://testmail.app/inbox/vkzvk.test@inbox.testmail.app
3. Send a test email: `npm run test:email` (or use the API)
4. Watch the email appear in your inbox!

**Happy Testing! 📧✨**
