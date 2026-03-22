# 🚀 Quick Reference Card - Create Message Feature

## Start Server
```bash
npm run dev
# Visit http://localhost:5000
```

---

## Create Message Flow

### Step 1: Click Button
Click **"+ Create Message"** on the dashboard

### Step 2: Fill Form
| Field | Options | Required |
|-------|---------|----------|
| Title | Any text | ✅ Yes |
| Message | Any text | ✅ Yes |
| Type | Promotion, Announcement, Welcome, General | ✅ Yes |
| Status | Active, Inactive, Scheduled | ✅ Yes |
| Target | All, New, Existing, Specific | ✅ Yes |
| Valid Until | Date picker | ❌ No |
| Send on Login | Checkbox | Default: On |

### Step 3: Submit
Click **"Save Message"** button

---

## Message List Actions

| Icon | Action | Condition |
|------|--------|-----------|
| ✏️ | Edit | Any status |
| 📧 | Broadcast | Status must be "Active" |
| 🗑️ | Delete | Requires confirmation |

---

## Filter & Sort

- **All:** Show all messages
- **Active:** Show only active (can broadcast)
- **Inactive:** Show only inactive messages

---

## Statistics Cards

```
┌─ Total Messages ─┐    ┌─ Active Messages ─┐    ┌─ Emails Sent ─┐
│       5          │    │       2            │    │      150       │
└──────────────────┘    └────────────────────┘    └────────────────┘
```

---

## API Endpoints (for testing)

### Create
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","message":"Test message","type":"promotion","status":"active","targetAudience":"all"}'
```

### List
```bash
curl http://localhost:5000/api/messages
```

### Stats
```bash
curl http://localhost:5000/api/messages/stats
```

### Update
```bash
curl -X PUT http://localhost:5000/api/messages/{ID} \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated"}'
```

### Delete
```bash
curl -X DELETE http://localhost:5000/api/messages/{ID}
```

### Broadcast
```bash
curl -X POST http://localhost:5000/api/messages/broadcast/{ID}
```

---

## Message Type Colors & Uses

| Type | Badge Color | Best For |
|------|-------------|----------|
| Promotion | 🟡 Gold | Discounts, sales, offers |
| Announcement | 🔵 Cyan | News, features, updates |
| Welcome | 🟢 Green | New customer greetings |
| General | ⚫ Gray | Other messages |

---

## Status Lifecycle

```
Draft (Inactive)
    ↓
    ├→ Active (can broadcast)
    │   └→ Inactive (stop broadcasting)
    │
    └→ Scheduled (for future)
       └→ Active (when time comes)
```

---

## Broadcast Rules

✅ **Can Broadcast if:**
- Status = "Active"
- Not expired (validUntil date is future)
- Has content

❌ **Cannot Broadcast if:**
- Status = "Inactive"
- Status = "Scheduled"
- Message is expired
- Broadcast button is grayed out

---

## Message Badges

### Type Badge
Shows: `Promotion` `Announcement` `Welcome` `General`

### Status Badge
Shows: `Active` `Inactive` `Scheduled`

### Example
```
Title: Summer Sale
[Promotion] [Active]
Target: All Customers
Sent: 45 times
Valid until: 2024-06-30
```

---

## Common Tasks

### I want to create a promotion
1. Click "+ Create Message"
2. Title: "Summer Sale"
3. Type: "Promotion"
4. Status: "Active"
5. Save → Click Broadcast

### I want to pause a message
1. Click Edit on the message
2. Status: Change to "Inactive"
3. Save
4. Broadcast button will be disabled

### I want to schedule a message
1. Click "+ Create Message"
2. Status: "Scheduled"
3. Valid Until: Set to later date
4. Save (will be visible but not broadcastable)

### I want to check who got the message
1. Look at message card
2. See "Sent: X times"
3. Number shows total broadcasts

---

## Keyboard Shortcuts (Future)

| Key | Action |
|-----|--------|
| Ctrl+N | New message |
| Ctrl+E | Edit message |
| Delete | Delete message |
| Esc | Close modal |

*Not yet implemented*

---

## Troubleshooting Quick Tips

**Message won't save?**
- Check browser console (F12) for errors
- Ensure all required fields are filled
- Check MongoDB connection

**Broadcast button disabled?**
- Change Status to "Active"
- Check expiration date is in future

**Stats not updating?**
- Refresh page (F5)
- Check MongoDB connection

**Server won't start?**
- Check if port 5000 is busy
- Verify .env file exists

---

## File Locations

| Component | File |
|-----------|------|
| Model | `backend/models/message.js` |
| Routes | `backend/routes/messageRoutes.js` |
| Server | `backend/server.js` |
| UI/Form | `frontend/customer-care-dashboard.html` |

---

## Response Examples

### Successful Create (201)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Summer Sale",
  "message": "Get 30% off",
  "type": "promotion",
  "status": "active",
  "targetAudience": "all",
  "sendOnLogin": true,
  "sentCount": 0,
  "createdAt": "2024-03-22T10:30:00Z",
  "updatedAt": "2024-03-22T10:30:00Z"
}
```

### Stats Response
```json
{
  "totalMessages": 5,
  "activeMessages": 2,
  "totalSent": 150
}
```

### Broadcast Response
```json
{
  "successCount": 80,
  "failCount": 5,
  "totalRecipients": 85,
  "messageSentCount": 150
}
```

---

## Performance Tips

- Messages are sorted newest first
- Filter happens on client-side (fast)
- Stats calculated via MongoDB aggregation (efficient)
- Broadcast simulates sending (placeholder for real email service)

---

## Before Production

- [ ] Connect real email service (SendGrid/AWS SES)
- [ ] Add authentication check
- [ ] Sanitize message content
- [ ] Add rate limiting
- [ ] Enable HTTPS
- [ ] Set up monitoring
- [ ] Test with real data

---

## Need Help?

📄 Full docs: `MESSAGE_FEATURE_DOCS.md`  
🧪 Testing guide: `TESTING_GUIDE.md`  
✅ Completion status: `FEATURE_COMPLETE.md`  
📋 Setup guide: `SETUP_GUIDE.md`

---

**Remember:** Dashboard is at `http://localhost:5000` while server is running!
