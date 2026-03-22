# Create Message Feature - Documentation

## Overview
The **Create Message** feature allows Customer Care managers to create, manage, and broadcast email messages and promotions to customers through the Customer Care dashboard.

## Features Implemented

### 1. **Backend - API Endpoints**

#### Message Model (`models/message.js`)
- **Schema Fields:**
  - `title` (String, required) - Message title
  - `message` (String, required) - Message content
  - `type` (Enum: promotion, announcement, welcome, general) - Message type
  - `status` (Enum: active, inactive, scheduled) - Message status
  - `targetAudience` (Enum: all, new, existing, specific) - Target customers
  - `validUntil` (Date, optional) - Message expiration date
  - `sendOnLogin` (Boolean) - Send message when customer logs in
  - `sentCount` (Number) - Track number of times sent
  - `createdBy`, `createdAt`, `updatedAt` - Metadata

#### API Routes (`routes/messageRoutes.js`)

1. **GET /api/messages**
   - Returns all messages sorted by creation date (newest first)
   - Response: Array of message objects

2. **GET /api/messages/stats**
   - Returns dashboard statistics
   - Response: 
     ```json
     {
       "totalMessages": 5,
       "activeMessages": 2,
       "totalSent": 150
     }
     ```

3. **GET /api/messages/:id**
   - Returns a specific message by ID
   - Response: Message object

4. **POST /api/messages**
   - Creates a new message
   - Request Body:
     ```json
     {
       "title": "Summer Sale",
       "message": "Get 30% off on all items",
       "type": "promotion",
       "status": "active",
       "targetAudience": "all",
       "validUntil": "2024-03-31",
       "sendOnLogin": true
     }
     ```

5. **PUT /api/messages/:id**
   - Updates an existing message
   - Request Body: Same as POST

6. **DELETE /api/messages/:id**
   - Deletes a message
   - Returns: Success confirmation

7. **POST /api/messages/broadcast/:id**
   - Broadcasts a message to target customers
   - Only works for messages with status = "active"
   - Checks if message hasn't expired
   - Response:
     ```json
     {
       "successCount": 80,
       "failCount": 5,
       "totalRecipients": 85,
       "messageSentCount": 150
     }
     ```

### 2. **Frontend - User Interface**

#### Message Management Dashboard
Located in `customer-care-dashboard.html`

**Features:**
- **Create Message Button** - Opens modal form
- **Message List Display** - Shows all messages with:
  - Title and content preview
  - Type badge (color-coded by type)
  - Status badge (green for active, gray for inactive, yellow for scheduled)
  - Action buttons: Edit, Broadcast (for active only), Delete
  - Target audience and valid until date
  - Sent count tracker

- **Filter Tabs** - Filter by status:
  - All messages
  - Active messages only
  - Inactive messages only

- **Statistics Cards** - Display at top:
  - Total Messages count
  - Active Messages count
  - Emails Sent count

#### Modal Form
**Create Email Message Modal** with fields:
- Title (required)
- Message Content (required)
- Type (Dropdown: Promotion, Announcement, Welcome, General)
- Status (Dropdown: Active, Inactive, Scheduled)
- Target Audience (Dropdown: All, New, Existing, Specific)
- Valid Until (Date picker)
- Send on Login (Checkbox)

### 3. **JavaScript Functionality**

Key functions implemented in the frontend:

```javascript
// Load all messages
loadMessages() 

// Load statistics
loadMessageStats()

// Filter messages by status
filterMessages(status)

// Display messages in the UI
displayMessages()

// Open create modal
openMessageModal()

// Close modal
closeMessageModal()

// Edit existing message
editMessage(id)

// Delete message with confirmation
deleteMessage(id, title)

// Broadcast message to customers
broadcastMessage(id)

// Form submission handler
messageForm.addEventListener('submit', async (e) => {...})
```

## Usage Instructions

### Creating a Message
1. Click **"+ Create Message"** button
2. Fill in the form fields:
   - Enter a descriptive title
   - Write the message content
   - Select message type
   - Choose initial status
   - Select target audience
   - Set expiration date (optional)
   - Check "Send on Login" if desired
3. Click **"Save Message"** button
4. Message appears in the list

### Editing a Message
1. Locate the message in the list
2. Click the **"✏️"** (Edit) button
3. Modal opens with current values
4. Update desired fields
5. Click **"Save Message"** button

### Broadcasting a Message
1. Message must have status = "Active"
2. Click the **"📧"** (Broadcast) button
3. Confirm in the dialog
4. Wait for broadcast to complete
5. View success/fail counts in alert
6. Sent count updates automatically

### Deleting a Message
1. Click the **"🗑️"** (Delete) button
2. Confirm deletion in the dialog
3. Message is removed from the list

## API Testing Examples

### Create a Message
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Spring Collection Launch",
    "message": "Check out our new spring jewelry collection",
    "type": "announcement",
    "status": "active",
    "targetAudience": "all",
    "sendOnLogin": true
  }'
```

### Get All Messages
```bash
curl http://localhost:5000/api/messages
```

### Get Statistics
```bash
curl http://localhost:5000/api/messages/stats
```

### Update a Message
```bash
curl -X PUT http://localhost:5000/api/messages/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "status": "inactive"
  }'
```

### Broadcast a Message
```bash
curl -X POST http://localhost:5000/api/messages/broadcast/{id}
```

### Delete a Message
```bash
curl -X DELETE http://localhost:5000/api/messages/{id}
```

## File Structure
```
backend/
├── models/
│   ├── message.js (NEW)
│   └── offer.js
├── routes/
│   ├── messageRoutes.js (NEW)
│   └── offerRoutes.js
├── server.js (UPDATED)
└── config/
    └── db.js

frontend/
└── customer-care-dashboard.html (form ready to use)
```

## Server Configuration
- **Port:** 5000
- **Database:** MongoDB (via MONGO_URI in .env)
- **Framework:** Express.js
- **ORM:** Mongoose

## Status Codes
- **201** - Message created successfully
- **200** - Request successful (GET, PUT, DELETE, POST broadcast)
- **400** - Bad request (validation error, inactive message broadcast)
- **404** - Message not found
- **500** - Server error

## Future Enhancements
- [ ] Integration with actual email service (SendGrid, AWS SES, etc.)
- [ ] Authentication/user context for createdBy field
- [ ] Scheduled message sending
- [ ] Message templates with variables
- [ ] Customer segmentation for targeted campaigns
- [ ] Message performance analytics
- [ ] A/B testing for message content
- [ ] Rich text editor for message content
- [ ] Attachment support
- [ ] Message preview before broadcast

## Testing the Feature
1. Start the server: `npm run dev`
2. Navigate to `http://localhost:5000`
3. Log in with Customer Care credentials
4. Click "Create Message" and submit the form
5. Verify message appears in the list
6. Test broadcast, edit, and delete functions
7. Check statistics update in real-time
