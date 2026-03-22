# Create Message Feature - Architecture & Flow Diagrams

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser/Client                       │
│                 (customer-care-dashboard.html)              │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Create Message Modal Form                          │  │
│  │  - Title input                                      │  │
│  │  - Message textarea                                │  │
│  │  - Type dropdown                                    │  │
│  │  - Status dropdown                                  │  │
│  │  - Target Audience dropdown                         │  │
│  │  - Valid Until date picker                          │  │
│  │  - Send on Login checkbox                           │  │
│  └─────────────────────────────────────────────────────┘  │
│                          ↓                                   │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Message List Display                               │  │
│  │  - Filter tabs (All, Active, Inactive)              │  │
│  │  - Message cards with badges                        │  │
│  │  - Action buttons (Edit, Broadcast, Delete)         │  │
│  │  - Statistics cards (Total, Active, Sent)           │  │
│  └─────────────────────────────────────────────────────┘  │
│                          ↓                                   │
│            Fetch API HTTP Requests                         │
│                   (port 5000)                              │
└─────────────────────────────────────────────────────────────┘
                          ↕
                   (REST API calls)
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                     Express.js Server                       │
│                    (backend/server.js)                      │
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │  Message Routes (messageRoutes.js)                │   │
│  │                                                    │   │
│  │  GET    /api/messages                ....... ────→ List│   │
│  │  GET    /api/messages/stats ............ ── Stats│   │
│  │  GET    /api/messages/:id ................ ─ One │   │
│  │  POST   /api/messages ................. Create │   │
│  │  PUT    /api/messages/:id ................ Update│   │
│  │  DELETE /api/messages/:id ................ Delete│   │
│  │  POST   /api/messages/broadcast/:id . Broadcast│   │
│  │                                                    │   │
│  └────────────────────────────────────────────────────┘   │
│                          ↓                                   │
│  ┌────────────────────────────────────────────────────┐   │
│  │  Mongoose Models (message.js)                     │   │
│  │                                                    │   │
│  │  messageSchema with validation                    │   │
│  │  - title (required)                               │   │
│  │  - message (required)                             │   │
│  │  - type (enum)                                    │   │
│  │  - status (enum)                                  │   │
│  │  - targetAudience (enum)                          │   │
│  │  - validUntil (optional)                          │   │
│  │  - sendOnLogin (boolean)                          │   │
│  │  - sentCount (number)                             │   │
│  │  - timestamps (createdAt, updatedAt)              │   │
│  │                                                    │   │
│  └────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                          ↕
                     (Mongoose ODM)
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                    MongoDB Database                         │
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │  messages collection                               │   │
│  │                                                    │   │
│  │  ┌──────────────────────────────────────────────┐│   │
│  │  │ {                                            ││   │
│  │  │   _id: ObjectId(...),                        ││   │
│  │  │   title: "Summer Sale",                      ││   │
│  │  │   message: "Get 30% off...",                 ││   │
│  │  │   type: "promotion",                         ││   │
│  │  │   status: "active",                          ││   │
│  │  │   targetAudience: "all",                     ││   │
│  │  │   sentCount: 120,                            ││   │
│  │  │   createdAt: 2024-03-22T...,                 ││   │
│  │  │   updatedAt: 2024-03-22T...                  ││   │
│  │  │ }                                            ││   │
│  │  └──────────────────────────────────────────────┘│   │
│  │                                                    │   │
│  │  [More documents...]                              │   │
│  │                                                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### Creating a Message

```
┌─ User ─┐
   │
   ├─→ Click "+ Create Message"
   │       ↓
   ├─→ Form Modal Opens
   │       ↓
   ├─→ User Fills Form
   │   - Title
   │   - Message
   │   - Type
   │   - Status
   │   - Target
   │   - Valid Until (optional)
   │   - Send on Login
   │       ↓
   ├─→ User Clicks "Save Message"
   │       ↓
   ├─→ JavaScript Validates Form
   │       ↓
   ├─→ POST /api/messages {data}
   │       ↓ (HTTP Request)
        ┌─────────────────────────────┐
        │  Express Route Handler      │
        │  - Validate data            │
        │  - Create new Message()     │
        │  - Save to DB               │
        └─────────────────────────────┘
                   ↓ (201 Created)
   ├─→ Response: new message object
   │       ↓
   ├─→ JavaScript Shows Alert
   │   "Message created successfully"
   │       ↓
   ├─→ Modal Closes
   │       ↓
   ├─→ loadMessages() Called
   │       ↓
   ├─→ GET /api/messages
   │       ↓
   ├─→ Fetch All Messages from DB
   │       ↓
   ├─→ Response: Array of messages
   │       ↓
   ├─→ displayMessages() Renders List
   │       ↓
   └─→ ✅ Message Appears in List
```

### Broadcasting a Message

```
┌─ User ─┐
   │
   ├─→ Find Message in List
   │   │
   │   └─→ Status must be "Active"
   │       (Broadcast button enabled)
   │       ↓
   ├─→ Click 📧 (Broadcast) Button
   │       ↓
   ├─→ Confirmation Dialog Appears
   │   "Send this message to all target customers?"
   │       ↓
   ├─→ User Clicks OK
   │       ↓
   ├─→ POST /api/messages/broadcast/{id}
   │       ↓ (HTTP Request)
        ┌──────────────────────────────┐
        │  Express Route Handler       │
        │  - Find Message by ID        │
        │  - Check status = "active"   │
        │  - Check not expired         │
        │  - Increment sentCount       │
        │  - Simulate sending          │
        │  - Calculate success/fail    │
        └──────────────────────────────┘
                   ↓ (200 OK)
   ├─→ Response: {
   │      successCount: 85,
   │      failCount: 5,
   │      messageSentCount: 250
   │   }
   │       ↓
   ├─→ JavaScript Shows Alert
   │   "Broadcast completed: 85 sent, 5 failed"
   │       ↓
   ├─→ Alert Auto-hides (5 seconds)
   │       ↓
   ├─→ loadMessages() Called
   │       ↓
   ├─→ Updated Message Shows
   │   "Sent: 250 times" (updated count)
   │       ↓
   └─→ ✅ Broadcast Complete
```

### Filtering Messages

```
┌─ User ─┐
   │
   ├─→ Click Filter Tab
   │   - "All"
   │   - "Active" 
   │   - "Inactive"
   │       ↓
   ├─→ filterMessages(status)
   │       ↓
   ├─→ Update currentFilter variable
   │       ↓
   ├─→ Update tab styling
   │       ↓
   ├─→ displayMessages()
   │       ↓
   ├─→ Filter array on client
   │   (all data already loaded)
   │       ↓
   ├─→ Render filtered list
   │       ↓
   └─→ ✅ Filtered List Displayed
       (No API calls needed)
```

---

## Request/Response Examples

### Create Message Request
```
POST /api/messages HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "title": "Summer Collection",
  "message": "Check out our new summer jewelry",
  "type": "announcement",
  "status": "active",
  "targetAudience": "all",
  "validUntil": "2024-06-30",
  "sendOnLogin": true
}
```

### Create Message Response (201)
```json
{
  "_id": "65fba5c3d8e72f001a2b3c4d",
  "title": "Summer Collection",
  "message": "Check out our new summer jewelry",
  "type": "announcement",
  "status": "active",
  "targetAudience": "all",
  "validUntil": "2024-06-30T00:00:00.000Z",
  "sendOnLogin": true,
  "sentCount": 0,
  "createdBy": "staff",
  "createdAt": "2024-03-22T10:30:45.123Z",
  "updatedAt": "2024-03-22T10:30:45.123Z"
}
```

### Get Messages Request
```
GET /api/messages HTTP/1.1
Host: localhost:5000
```

### Get Messages Response (200)
```json
[
  {
    "_id": "65fba5c3d8e72f001a2b3c4d",
    "title": "Summer Collection",
    "message": "Check out our new summer jewelry",
    "type": "announcement",
    "status": "active",
    "targetAudience": "all",
    "validUntil": "2024-06-30T00:00:00.000Z",
    "sendOnLogin": true,
    "sentCount": 45,
    "createdAt": "2024-03-22T10:30:45.123Z",
    "updatedAt": "2024-03-22T11:00:00.000Z"
  },
  {
    "_id": "65fba6d4e9f83g002b3c4e5e",
    "title": "Weekend Special",
    "message": "Limited time offer",
    "type": "promotion",
    "status": "inactive",
    "targetAudience": "existing",
    "validUntil": null,
    "sendOnLogin": false,
    "sentCount": 0,
    "createdAt": "2024-03-22T11:20:00.000Z",
    "updatedAt": "2024-03-22T11:20:00.000Z"
  }
]
```

### Get Stats Request
```
GET /api/messages/stats HTTP/1.1
Host: localhost:5000
```

### Get Stats Response (200)
```json
{
  "totalMessages": 8,
  "activeMessages": 3,
  "totalSent": 245
}
```

### Broadcast Request
```
POST /api/messages/broadcast/65fba5c3d8e72f001a2b3c4d HTTP/1.1
Host: localhost:5000
```

### Broadcast Response (200)
```json
{
  "message": "Broadcast completed",
  "successCount": 80,
  "failCount": 5,
  "totalRecipients": 85,
  "messageSentCount": 125
}
```

---

## Component Interaction Diagram

```
┌───────────────────────────────────────────────────┐
│          Frontend Components                     │
├───────────────────────────────────────────────────┤
│                                                   │
│  ┌──────────────────────────────────────────┐   │
│  │ Modal Component                          │   │
│  │ - Form for create/edit                   │   │
│  │ - Opens on button click                  │   │
│  │ - Submits to API                         │   │
│  │ - Shows validation errors                │   │
│  └──────────────────────────────────────────┘   │
│            ↕ (show/hide)                        │
│  ┌──────────────────────────────────────────┐   │
│  │ List Component                           │   │
│  │ - Displays all messages                  │   │
│  │ - Shows type/status badges               │   │
│  │ - Action buttons                         │   │
│  │ - Recalculates on data change            │   │
│  └──────────────────────────────────────────┘   │
│            ↕ (filter)                           │
│  ┌──────────────────────────────────────────┐   │
│  │ Filter Component                         │   │
│  │ - Tabs: All, Active, Inactive            │   │
│  │ - Client-side filtering                  │   │
│  │ - Updates selection style                │   │
│  └──────────────────────────────────────────┘   │
│                                                   │
│  ┌──────────────────────────────────────────┐   │
│  │ Stats Component                          │   │
│  │ - Shows total messages                   │   │
│  │ - Shows active count                     │   │
│  │ - Shows emails sent                      │   │
│  │ - Updates from API response              │   │
│  └──────────────────────────────────────────┘   │
│            ↓ (calls loadMessageStats)           │
│                                                   │
└───────────────────────────────────────────────────┘
            ↓ (fetch)
┌───────────────────────────────────────────────────┐
│         API Layer (Express Routes)               │
├───────────────────────────────────────────────────┤
│                                                   │
│  GET /messages ────→ [List Route Handler]       │
│                     ├→ Find all messages        │
│                     ├→ Sort by createdAt       │
│                     └→ Return array             │
│                                                   │
│  GET /messages/stats → [Stats Route Handler]    │
│                     ├→ Count documents         │
│                     ├→ Aggregate sentCount     │
│                     └→ Return stats object     │
│                                                   │
│  GET /messages/:id → [Get Route Handler]        │
│                     ├→ Find by _id             │
│                     └→ Return single document  │
│                                                   │
│  POST /messages ──→ [Create Route Handler]      │
│                     ├→ Validate input         │
│                     ├→ Create document        │
│                     ├→ Save to DB             │
│                     └→ Return created doc    │
│                                                   │
│  PUT /messages/:id → [Update Route Handler]     │
│                     ├→ Find document         │
│                     ├→ Update fields         │
│                     ├→ Save to DB            │
│                     └→ Return updated doc   │
│                                                   │
│  DELETE /messages/:id → [Delete Handler]        │
│                     ├→ Find document         │
│                     ├→ Remove from DB        │
│                     └→ Return confirmation  │
│                                                   │
│  POST /broadcast/:id → [Broadcast Handler]      │
│                     ├→ Validate message     │
│                     ├→ Check status         │
│                     ├→ Increment count      │
│                     ├→ Simulate send        │
│                     └→ Return results       │
│                                                   │
└───────────────────────────────────────────────────┘
            ↓ (Mongoose)
┌───────────────────────────────────────────────────┐
│      Database Layer (MongoDB)                    │
├───────────────────────────────────────────────────┤
│                                                   │
│  messages collection                             │
│  ├─ title: indexed                               │
│  ├─ status: indexed (for filtering)             │
│  ├─ createdAt: indexed (for sorting)            │
│  └─ [documents...]                               │
│                                                   │
└───────────────────────────────────────────────────┘
```

---

## State Management Flow

```
Load Page
    ↓
checkAuth()
    ↓
    ├─ User authenticated? NO → Redirect to login
    │
    └─ YES → Continue
            ↓
        loadMessages()
        loadCampaigns()
        loadFeedback()
            ↓
        Fetch from API
            ↓
        Store in arrays
        - messages = []
        - campaigns = []
        - feedback = []
            ↓
        displayMessages()
        displayCampaigns()
        displayFeedback()
            ↓
        Render UI
            ↓
        User Interactions
            ↓
        ├─ Create → POST /messages → loadMessages()
        ├─ Edit → PUT /messages/:id → loadMessages()
        ├─ Delete → DELETE /messages/:id → loadMessages()
        ├─ Broadcast → POST /broadcast/:id → loadMessages()
        └─ Filter → filterMessages() → displayMessages()
```

---

## Error Handling Flow

```
User Action
    ↓
API Request
    ↓
┌─ Response Status?
├─ 201/200 → SUCCESS
│   ├─ Show success alert
│   ├─ Update data
│   └─ Refresh display
│
├─ 400 → BAD REQUEST
│   ├─ Parse error message
│   ├─ Show error alert
│   └─ Keep modal open (for edit)
│
├─ 404 → NOT FOUND
│   ├─ Show error alert
│   └─ Refresh list
│
└─ 500 → SERVER ERROR
    ├─ Show error alert
    └─ Log to console
```

---

## File Dependencies

```
server.js
├─ messageRoutes (import)
├─ offerRoutes (import)
└─ connectionDB (import)
    ↓
messageRoutes.js
├─ express (import)
└─ Message model (import)
    ↓
models/message.js
└─ mongoose (import)
    ↓
dashboard.html
├─ JavaScript functions
├─ API fetch calls
└─ DOM manipulation
```

---

This architecture provides:
- ✅ Clean separation of concerns
- ✅ RESTful API design
- ✅ Proper error handling
- ✅ Real-time UI updates
- ✅ Scalable structure
- ✅ Maintainable code organization
