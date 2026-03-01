# Email Notification System - Setup Guide

## 📧 Overview

The Nodemailer integration allows Customer Care staff to create promotional messages and announcements that are automatically sent to customers when they log in.

---

## 🔧 Setup Instructions

### Step 1: Configure Email Credentials

Update the `.env` file in the root directory with your email service credentials:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Application URL
APP_URL=http://localhost:3000
```

### Step 2: Get Gmail App-Specific Password (If using Gmail)

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** > **2-Step Verification**
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password and use it as `EMAIL_PASSWORD`

**Important:** Use the app-specific password, NOT your regular Gmail password.

### Alternative Email Services

#### Outlook/Hotmail

```env
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Custom SMTP

```env
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASSWORD=your-password
```

### Step 3: Restart the Server

After updating `.env`, restart the backend server:

```bash
cd backend
node server.js
```

---

## 🎯 How It Works

### 1. Customer Login Flow

When a customer logs in:

- The system automatically checks for **active messages** where `sendOnLogin = true`
- Filters messages based on `targetAudience` (all, new, existing)
- Sends a welcome email with all matching promotions
- Emails are sent asynchronously (doesn't delay login)

### 2. Message Types

- **Promotion:** Discounts, special offers
- **Announcement:** Company news, new product launches
- **Welcome:** Welcome messages for new customers
- **General:** General information

### 3. Target Audiences

- **All:** Every customer
- **New:** Customers registered within the last 30 days
- **Existing:** Customers older than 30 days
- **Specific:** For future custom targeting

---

## 👥 For Customer Care Staff

### Creating a Message/Promotion

1. **Login** as Customer Care staff
2. Navigate to **Customer Care Dashboard**
3. Click **"+ Create Message"** button
4. Fill in the form:
   - **Title:** Short, catchy title (e.g., "50% Off Gold Chains!")
   - **Message Content:** Full description of the offer
   - **Type:** Choose promotion, announcement, etc.
   - **Status:** Active/Inactive/Scheduled
   - **Target Audience:** Who should receive it
   - **Valid Until:** Optional expiration date
   - **Send on Login:** Check to send automatically on customer login
5. Click **"Save Message"**

### Managing Messages

**Edit Message:**

- Click the ✏️ (Edit) button on any message
- Update fields as needed
- Click "Save Message"

**Broadcast Message:**

- Click the 📧 (Broadcast) button to send immediately to all target customers
- Confirm the action
- Wait for the result (shows success/fail count)

**Delete Message:**

- Click the 🗑️ (Delete) button
- Confirm deletion

### Filtering Messages

Use the filter tabs:

- **All:** Show all messages
- **Active:** Currently active messages
- **Inactive:** Disabled messages

---

## 📊 Message Statistics

The dashboard displays:

- **Total Messages:** All messages created
- **Active Messages:** Currently active messages
- **Emails Sent:** Total number of emails sent across all messages

Each message card shows:

- Number of times it has been sent
- Target audience
- Expiration date (if set)

---

## 🎨 Email Templates

The system includes professional HTML email templates with:

- Saranya Jewellery branding
- Responsive design
- Proper formatting for promotions
- Call-to-action buttons

### Welcome Email Template

Sent automatically on login with all active promotions:

- Greeting with customer name
- List of active promotions
- "Start Shopping" button
- Company footer

### Promotion Email Template

Sent when broadcasting specific promotions:

- Highlighted offer
- Promotion details
- Expiration date
- "Shop Now" button

---

## 🔒 Security & Best Practices

1. **Never commit `.env` file** to version control
2. **Use app-specific passwords** for Gmail
3. **Test emails** before broadcasting to all customers
4. **Set expiration dates** for time-limited offers
5. **Monitor sent counts** to avoid spam
6. **Keep messages concise** and valuable

---

## 🛠️ Troubleshooting

### Emails Not Sending

**Check 1: Email Configuration**

```bash
# Verify .env file has correct credentials
cat .env | grep EMAIL
```

**Check 2: Server Logs**

```bash
# Look for email-related errors
tail -f backend/logs/server.log
```

**Check 3: Gmail Security**

- Ensure 2-Step Verification is enabled
- Use app-specific password, not regular password
- Check if "Less secure app access" is needed (not recommended)

### Customer Not Receiving Emails

**Possible causes:**

1. Message status is not "active"
2. Message `sendOnLogin` is unchecked
3. Target audience doesn't match customer
4. Message has expired (`validUntil` date passed)
5. Email went to spam folder (check customer's spam)

### Test Email Sending

To verify email configuration, you can test with a simple API call:

```bash
curl -X POST http://localhost:3000/api/messages/broadcast/MESSAGE_ID \
  -H "Cookie: your-session-cookie"
```

---

## 📁 File Structure

```
backend/
├── config/
│   └── email.js          # Email configuration & templates
├── models/
│   └── Message.js        # Message/Promotion database model
├── routes/
│   ├── message.js        # Message CRUD & broadcast endpoints
│   └── customer.js       # Updated with email sending on login
└── utils/
    └── emailService.js   # Email sending service

frontend/
└── customer-care-dashboard.html   # UI for creating messages
```

---

## 🚀 API Endpoints

### Messages API (Customer Care & Admin only)

| Method | Endpoint                      | Description                       |
| ------ | ----------------------------- | --------------------------------- |
| GET    | `/api/messages`               | Get all messages                  |
| GET    | `/api/messages/stats`         | Get message statistics            |
| GET    | `/api/messages/:id`           | Get single message                |
| POST   | `/api/messages`               | Create new message                |
| PUT    | `/api/messages/:id`           | Update message                    |
| DELETE | `/api/messages/:id`           | Delete message                    |
| POST   | `/api/messages/:id/send`      | Send to specific customers        |
| POST   | `/api/messages/broadcast/:id` | Broadcast to all target customers |

---

## 📝 Example Usage

### Creating a Flash Sale Message

```javascript
{
  "title": "⚡ Flash Sale: 40% Off All Necklaces!",
  "message": "For the next 48 hours, enjoy 40% off all gold necklaces. Use code NECK40 at checkout. Limited stock available!",
  "type": "promotion",
  "status": "active",
  "targetAudience": "all",
  "validUntil": "2026-03-02T23:59:59Z",
  "sendOnLogin": true
}
```

### Broadcasting to All Customers

From Customer Care Dashboard:

1. Find the message you want to broadcast
2. Click the 📧 button
3. Confirm the broadcast
4. Wait for completion notification

---

## 💡 Tips for Effective Promotions

1. **Clear Subject Lines:** Use emojis and action words
2. **Time-Limited Offers:** Create urgency with expiration dates
3. **Target Wisely:** Send relevant offers to the right audience
4. **Test First:** Create as "inactive" and test before activating
5. **Monitor Results:** Check sent counts and customer feedback
6. **Seasonal Offers:** Plan ahead for festivals and holidays
7. **Personalization:** Messages include customer names automatically

---

## 🎉 Success!

Your email notification system is now ready! Customers will receive beautiful, branded emails with your promotions every time they log in.

**Next Steps:**

1. Create your first welcome message
2. Test by logging in as a customer
3. Check the customer's email inbox
4. Monitor statistics in the dashboard

For issues or questions, check the server logs or contact the development team.
