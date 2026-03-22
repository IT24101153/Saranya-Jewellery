# Create Message Feature - Setup & Testing Guide

## Prerequisites
- Node.js installed
- MongoDB connection configured in `.env` file
- Server running on port 5000

## Quick Start

### 1. Verify Files are in Place
```
backend/
├── models/message.js ✓ (NEW)
├── routes/messageRoutes.js ✓ (NEW)
└── server.js ✓ (UPDATED)

frontend/
└── customer-care-dashboard.html ✓ (Already has UI)
```

### 2. Install Dependencies (if needed)
```bash
npm install
```

### 3. Start the Server
```bash
npm run dev
```

Expected output:
```
Server running on http://localhost:5000
MONGO_URI: mongodb+srv://...
MongoDB Connected: ...
Registering routes...
Routes registered
```

## Testing Checklist

### ✅ Test 1: Server Startup
- [ ] Server starts without errors
- [ ] Port 5000 is accessible
- [ ] MongoDB connection successful
- [ ] Log shows "Routes registered"

### ✅ Test 2: Frontend Loads
- [ ] Navigate to `http://localhost:5000`
- [ ] Customer Care dashboard loads
- [ ] "Create Message" button is visible
- [ ] Stats cards show 0 messages initially

### ✅ Test 3: Create a Message (UI)
- [ ] Click "+ Create Message" button
- [ ] Modal opens with empty form
- [ ] Fill in all required fields:
  - Title: "Welcome to Saranya"
  - Message: "Thank you for shopping with us!"
  - Type: "Welcome"
  - Status: "Active"
  - Target: "All Customers"
- [ ] Click "Save Message"
- [ ] Alert shows "Message created successfully"
- [ ] Message appears in the list below

### ✅ Test 4: API Direct Testing
Open terminal and test endpoints:

**Create Message:**
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "title":"Test Message",
    "message":"This is a test",
    "type":"promotion",
    "status":"active",
    "targetAudience":"all",
    "sendOnLogin":true
  }'
```

**Get All Messages:**
```bash
curl http://localhost:5000/api/messages
```

**Get Statistics:**
```bash
curl http://localhost:5000/api/messages/stats
```

### ✅ Test 5: Edit Message (UI)
- [ ] Click edit (✏️) button on a message
- [ ] Modal shows existing data
- [ ] Change title to "Updated Title"
- [ ] Click "Save Message"
- [ ] Alert shows "Message updated successfully"
- [ ] List shows updated message

### ✅ Test 6: Filter Messages
- [ ] Click "Active" filter tab
- [ ] List shows only active messages
- [ ] Click "Inactive" tab
- [ ] List shows no messages (if none are inactive)
- [ ] Click "All" tab
- [ ] All messages display again

### ✅ Test 7: Broadcast Message (UI)
- [ ] Ensure at least one message has status "Active"
- [ ] Click the email (📧) button on an active message
- [ ] Confirmation dialog appears
- [ ] Click OK to confirm
- [ ] Alert shows: "Broadcast completed: X sent, Y failed"
- [ ] Refresh and verify sent count increased
- [ ] Inactive messages show disabled broadcast button

### ✅ Test 8: Delete Message (UI)
- [ ] Click trash (🗑️) button on a message
- [ ] Confirmation dialog appears
- [ ] Click OK to confirm deletion
- [ ] Alert shows "Message deleted successfully"
- [ ] Message disappears from list
- [ ] Stats update (total messages decreases)

### ✅ Test 9: Message Statistics
- [ ] Create 3 messages
- [ ] Set 2 to "Active", 1 to "Inactive"
- [ ] Check stats cards:
  - Total Messages: 3 ✓
  - Active Messages: 2 ✓
  - Emails Sent: 0 (or based on broadcasts)
- [ ] Broadcast one message
- [ ] Refresh page
- [ ] "Emails Sent" count increases ✓

### ✅ Test 10: Form Validation
- [ ] Click "+ Create Message"
- [ ] Try to submit without title → Error
- [ ] Try to submit without message → Error
- [ ] Click on each dropdown to verify options
- [ ] Test date picker for valid until field

## Troubleshooting

### Issue: Server won't start
**Solution:**
- Check if port 5000 is already in use
- Verify MongoDB URI in `.env` file
- Check Node.js version (14+ recommended)

### Issue: "Cannot find module" error
**Solution:**
```bash
npm install
```

### Issue: MongoDB connection fails
**Solution:**
- Verify internet connection
- Check MONGO_URI in `.env`
- Ensure MongoDB cluster allows your IP
- Check credentials are correct

### Issue: Messages don't appear after creation
**Solution:**
- Open browser DevTools (F12) → Network tab
- Check POST request returned 201 status
- Check Console tab for JavaScript errors
- Verify MongoDB collection was created

### Issue: Broadcast button is disabled
**Solution:**
- Message must have status = "Active"
- Message must not have expired
- Edit the message and change status to "Active"

## Database Verification

Check MongoDB directly:

```javascript
// Connect to MongoDB and check messages collection
db.messages.find()
db.messages.countDocuments()
db.messages.findOne({_id: ObjectId("...")})
```

## Performance Notes
- Each broadcast simulates sending to 10-100 random customers
- Stats are calculated from database aggregation
- Frontend filters happen client-side for better performance

## Next Steps
- [ ] Integrate with real email service (SendGrid, AWS SES)
- [ ] Add message templates
- [ ] Implement scheduled sending
- [ ] Add user authentication context
- [ ] Create message analytics dashboard

## Support
For issues or questions, refer to:
- `MESSAGE_FEATURE_DOCS.md` - Full API documentation
- `backend/routes/messageRoutes.js` - Route implementation
- `backend/models/message.js` - Data schema
- `frontend/customer-care-dashboard.html` - UI implementation
