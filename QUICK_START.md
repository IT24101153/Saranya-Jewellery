# Staff Management System - Quick Start Guide

## ✅ What Has Been Implemented

### Backend

- ✅ Staff MongoDB model with password hashing
- ✅ Authentication middleware (login/logout)
- ✅ Authorization middleware (admin-only routes)
- ✅ Staff CRUD API routes
- ✅ Session management
- ✅ Admin seeding script

### Frontend

- ✅ Staff Login page
- ✅ Staff Registration page
- ✅ Admin Dashboard (full CRUD operations)
- ✅ Customer Care Dashboard (with pending approval check)
- ✅ Inventory Dashboard (with pending approval check)
- ✅ Order Manager Dashboard (with pending approval check)
- ✅ Delivery Manager Dashboard (with pending approval check)
- ✅ Accountant Dashboard (with pending approval check)

## 🚀 How to Get Started

### 1. Admin Account Already Created

The admin account has been seeded in your database:

- **Email**: `admin@saranya.com`
- **Password**: `admin@saranya`

### 2. Start the Server

```bash
npm run dev
```

### 3. Login as Admin

Visit: `http://localhost:3000/staff-login.html`

Use the admin credentials above to login. You'll be redirected to the admin dashboard.

## 📋 Admin Dashboard Features

Once logged in as admin, you can:

### VIEW (Read)

- See all staff members in a table
- View staff statistics (Total, Pending, Approved, Revoked)
- Filter by status (All, Pending, Approved, Revoked)
- See each staff member's:
  - Name, Email, Role
  - Status (Pending/Approved/Revoked)
  - Active status
  - Join date

### CREATE

- Click "Add New Staff" button
- Fill in: Name, Email, Role, Password, Status
- Admin can create staff that are pre-approved

### UPDATE

- **Approve/Reject**: For pending staff, click approve ✓ or reject ✗
- **Edit**: Click edit button to modify name, role, or status
- **Activate/Deactivate**: Toggle staff account active status

### DELETE

- Click delete button to permanently remove staff (cannot delete own account or other admins)

## 👥 Testing the Staff Registration Flow

### As a new staff member:

1. Visit: `http://localhost:3000/staff-register.html`

2. Register with:
   - Full Name
   - Email
   - Choose Role (Customer Care, Inventory, Order Manager, Delivery Manager, Accountant)
   - Password

3. After registration, go to: `http://localhost:3000/staff-login.html`

4. Login with your credentials

5. **You'll see a BLURRED dashboard** with message:
   > "Account Pending Approval - Your account is waiting for administrator approval"

### As Admin:

1. Login to admin dashboard

2. You'll see the new staff in "Pending" status

3. Click the "✓ Approve" button

### As Staff (after approval):

1. Logout and login again (or refresh page)

2. **Now you can see your full dashboard!** (no longer blurred)

## 🔗 All URLs

### Staff Portal (Not linked from homepage)

- Login: `http://localhost:3000/staff-login.html`
- Register: `http://localhost:3000/staff-register.html`

### Dashboards

- Admin: `http://localhost:3000/admin-dashboard.html`
- Customer Care: `http://localhost:3000/customer-care-dashboard.html`
- Inventory: `http://localhost:3000/inventory-dashboard.html`
- Order Manager: `http://localhost:3000/order-manager-dashboard.html`
- Delivery: `http://localhost:3000/delivery-dashboard.html`
- Accountant: `http://localhost:3000/accountant-dashboard.html`

### Main Site

- Homepage: `http://localhost:3000/`

## 🔒 Security Features

- ✅ Passwords hashed with bcrypt
- ✅ Session-based authentication
- ✅ Admin-only routes protected
- ✅ Approval required before staff can access dashboard
- ✅ Cannot delete own admin account
- ✅ Account can be deactivated without deletion

## 📊 Staff Roles Available

1. **Admin** - Full system access, manages all staff
2. **Customer Care** - Customer inquiries and support
3. **Inventory** - Stock management
4. **Order Manager** - Order processing and management
5. **Delivery Manager** - Delivery tracking and scheduling
6. **Accountant** - Financial reports and transactions

## 🎯 What's Next?

The skeleton dashboards are ready for you to implement the actual functionality:

- Each role-specific dashboard has placeholder stats and sections
- You can add real features to each dashboard as needed
- The authentication and approval workflow is fully functional
- Admin can manage all staff through the CRUD interface

## 💡 Tips

1. **Admin cannot be deleted** - System prevents admins from deleting themselves
2. **Staff see blurred dashboard** - Until approved by admin
3. **Direct URL access** - Staff login/register not shown on homepage (as requested)
4. **Real-time updates** - After admin actions, the table updates automatically
5. **Session persistence** - Users stay logged in until they logout or session expires (24 hours)

---

**Your admin password is**: `admin@saranya`  
**Keep this secure and change it in production!**
