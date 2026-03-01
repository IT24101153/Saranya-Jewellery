# Role-Based Access Control System

## Saranya Jewellery Management System

---

## 🎭 User Roles & Access Levels

### 1. **Admin** 👑

**Dashboard:** `/admin-dashboard.html`

**Main Use Cases:**

- ✅ Register Staff Account
- ✅ Approve/Reject Staff Registration
- ✅ Assign Role to Staff
- ✅ View All Staff
- ✅ Manage Staff Accounts
- ✅ Activate/Deactivate Staff
- ✅ Analyze Orders
- ✅ **Full Access to All Dashboards**

**Access Level:** SUPERUSER - Can access and manage all system features

---

### 2. **Product Manager** 📦

**Dashboard:** `/product-management-dashboard.html`

**Main Use Cases:**

- ✅ Add New Product
  - Upload Product Image
  - Add Price / Weight / Category
- ✅ Edit Product Information
  - Update Pricing
  - Change Availability
- ✅ View Product Details
- ✅ View Product List
- ✅ Remove Discontinued Product
- ✅ Search & Filter Products
- ✅ Mark Products as Featured

**Key Features:**

- Product CRUD operations
- Image upload and management
- Pricing and inventory controls
- Category management
- Availability status control

---

### 3. **Order Manager** 📋

**Dashboard:** `/order-management-dashboard.html`

**Main Use Cases:**

- ✅ Create Order Record
  - Generate Invoice
  - Record Payment Transaction
- ✅ Approve Payment
- ✅ Process Refund
- ✅ Cancel Order
- ✅ Change Order Status
  - Pending → Processing → Shipped → Delivered → Completed
- ✅ Remove Failed Transaction
- ✅ View All Orders
- ✅ Filter by Status/Date

**Order Status Flow:**

```
Pending → Processing → Shipped → Delivered → Completed
                               ↓
                           Cancelled/Refunded
```

---

### 4. **Inventory Manager** 📊

**Dashboard:** `/inventory-dashboard.html`

**Main Use Cases:**

- ✅ Add New Stock Entry
  - Generate Item Serial
  - Set Price, Weight, Category
- ✅ Enter Daily Gold Rate
  - 18K Gold Rate
  - 22K Gold Rate
  - 24K Gold Rate
- ✅ View Current Gold Rate
- ✅ View Stock Levels
- ✅ View Low Stock Alerts (automatic)
- ✅ Remove Damaged Items
- ✅ Remove Incorrect Stock Entry
- ✅ Track Inventory Changes

**Key Features:**

- Real-time stock monitoring
- Gold rate management (daily updates)
- Automatic low stock alerts
- Inventory audit trail
- Item serial number generation

---

### 5. **Customer Care Manager** 💬

**Dashboard:** `/customer-care-dashboard.html`

**Main Use Cases:**

- ✅ Create Promotional Offers
  - Select Target Customer Group
  - Create Promotional Message
  - Set Expiry Date
- ✅ View Active Offers
- ✅ Remove Expired Offers
- ✅ Cancel Promotional Campaign
- ✅ Edit Offer Details
  - Change Expiry Date
  - Modify Target Customer Group
- ✅ Reply to Customer Feedback
- ✅ Manage Customer Inquiries

**Promotion Types:**

- Discount Offers
- Special Announcements
- Seasonal Campaigns
- Targeted Customer Promotions

---

### 6. **Loyalty Manager** 🏆

**Dashboard:** `/loyalty-management-dashboard.html`

**Main Use Cases:**

- ✅ Create Loyalty Profile
- ✅ Generate Loyalty Points (automatic on purchase)
- ✅ Upgrade/Downgrade Tier
- ✅ Remove Loyalty Profile
- ✅ View Loyalty Points
- ✅ Redeem Benefits
- ✅ Manage Tier Rules

**Loyalty Tier System:**

```
🥈 Silver   → Base tier (0 - ₹50,000 total spending)
🥇 Gold     → Mid tier (₹50,001 - ₹200,000 total spending)
💎 Platinum → Premium tier (₹200,001+ total spending)
```

**Points Calculation:**

- 1 Point = ₹100 spent
- Points redeemable for discounts/rewards

---

### 7. **Customer** 🛍️

**Dashboard:** `/customer-dashboard.html`

**Main Use Cases:**

- ✅ View Products
- ✅ Place Order
- ✅ View Order Status
- ✅ Receive Promotional Offers
- ✅ View Loyalty Points
- ✅ View Tier Benefits & Terms
- ✅ Redeem Benefits
- ✅ Update Profile
- ✅ View Order History

**Customer Features:**

- Browse product catalog with filters
- Real-time order tracking
- Loyalty points dashboard
- Promotional notifications
- Order history and invoices

---

## 🔒 Authentication & Authorization

### Session Management

All authenticated users have a session that includes:

```javascript
{
  staffId: "user_id",
  role: "Role Name",
  status: "Approved/Pending/Revoked",
  email: "user@example.com",
  fullName: "User Name"
}
```

### Middleware Protection

#### Staff Routes

- `isAuthenticated` - Requires valid session
- `isApproved` - Requires approved account status
- `isAdmin` - Admin only
- `hasRole(...roles)` - Multiple role access
- `isProductManager` - Product Management + Admin
- `isOrderManager` - Order Management + Admin
- `isInventoryManager` - Inventory + Admin
- `isCustomerCareManager` - Customer Care + Admin
- `isLoyaltyManager` - Loyalty Management + Admin

---

## 📊 Dashboard Access Matrix

| Feature                  | Admin | Product | Order | Inventory | Customer Care | Loyalty | Customer |
| ------------------------ | ----- | ------- | ----- | --------- | ------------- | ------- | -------- |
| **Staff Management**     | ✅    | ❌      | ❌    | ❌        | ❌            | ❌      | ❌       |
| **Product Management**   | ✅    | ✅      | ❌    | ❌        | ❌            | ❌      | ❌       |
| **Order Management**     | ✅    | ❌      | ✅    | ❌        | ❌            | ❌      | ❌       |
| **Inventory Management** | ✅    | ❌      | ❌    | ✅        | ❌            | ❌      | ❌       |
| **Promotions**           | ✅    | ❌      | ❌    | ❌        | ✅            | ❌      | ❌       |
| **Loyalty System**       | ✅    | ❌      | ❌    | ❌        | ❌            | ✅      | ❌       |
| **View Products**        | ✅    | ✅      | ✅    | ✅        | ✅            | ✅      | ✅       |
| **Place Orders**         | ❌    | ❌      | ❌    | ❌        | ❌            | ❌      | ✅       |
| **View Own Orders**      | ❌    | ❌      | ❌    | ❌        | ❌            | ❌      | ✅       |

---

## 🔐 Login Endpoints

### Staff Login

- **URL:** `POST /api/auth/login`
- **Redirect:** Based on role and approval status
  - Admin → `/admin-dashboard.html`
  - Product Management → `/product-management-dashboard.html`
  - Order Management → `/order-management-dashboard.html`
  - Inventory → `/inventory-dashboard.html`
  - Customer Care → `/customer-care-dashboard.html`
  - Loyalty Management → `/loyalty-management-dashboard.html`

### Customer Login

- **URL:** `POST /api/customers/login`
- **Redirect:** `/customer-dashboard.html`

---

## 📝 Staff Registration Flow

1. **Staff Registration** (`POST /api/auth/register`)
   - Staff member fills registration form
   - Account created with status: `Pending`
   - Cannot access system until approved

2. **Admin Approval**
   - Admin reviews pending registrations
   - Can approve, reject, or revoke access
   - Can assign/change roles

3. **Access Granted**
   - Status changed to: `Approved`
   - Staff can now login and access assigned dashboard

---

## 🎯 API Route Protection Examples

### Product Routes (Protected by Product Manager role)

```javascript
router.get("/api/products", getAllProducts); // Public
router.post("/api/products", isProductManager, createProduct);
router.put("/api/products/:id", isProductManager, updateProduct);
router.delete("/api/products/:id", isProductManager, deleteProduct);
```

### Staff Routes (Protected by Admin role)

```javascript
router.get("/api/staff", isAdmin, getAllStaff);
router.post("/api/staff", isAdmin, createStaff);
router.put("/api/staff/:id", isAdmin, updateStaff);
router.delete("/api/staff/:id", isAdmin, deleteStaff);
```

### Order Routes (Protected by Order Manager role)

```javascript
router.get("/api/orders", isOrderManager, getAllOrders);
router.post("/api/orders", isOrderManager, createOrder);
router.put("/api/orders/:id/status", isOrderManager, updateOrderStatus);
router.delete("/api/orders/:id", isOrderManager, deleteOrder);
```

---

## 🚀 Quick Start Guide

### For Admin:

1. Login at `/staff-login.html`
2. Access admin dashboard
3. Approve pending staff registrations
4. Assign roles to staff members
5. Monitor system analytics

### For Staff Members:

1. Register at `/staff-register.html`
2. Wait for admin approval
3. Login at `/staff-login.html`
4. Access assigned role dashboard
5. Perform role-specific tasks

### For Customers:

1. Register at `/customer-register.html`
2. Login at `/customer-login.html`
3. Browse products
4. Place orders
5. Track loyalty points

---

## 📧 Contact & Support

For role assignment or access issues, contact your system administrator.

**System Status:**

- ✅ All roles implemented
- ✅ Role-based middleware active
- ✅ Dashboard access controlled
- ✅ API routes protected
- ✅ Session management enabled

---

_Last Updated: February 27, 2026_
