# Saranya Jewellery - Setup Guide

This is a jewellery shop management system with staff management and role-based access control.

## Features

- **Admin Dashboard**: Full CRUD operations for staff management
- **Staff Portals**: Role-based dashboards for different staff members
- **Authentication & Authorization**: Secure login with approval workflow
- **Staff Roles**: Admin, Customer Care, Inventory, Order Manager, Delivery Manager, Accountant

Server port is fixed to `3000`.

## Required Installations

### 1) Node.js (Windows & macOS)

- Install Node.js LTS: https://nodejs.org/
- Verify:

```bash
node -v
npm -v
```

### 2) MongoDB VS Code Extension

- Install **MongoDB for VS Code**: https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode

### 3) Project Dependencies

From project root run:

```bash
npm install
```

## Environment Variable

Create/update `.env` in project root:

```dotenv
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secure_session_secret_key
```

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Admin Account

Run the seed script to create the default admin account:

```bash
npm run seed:admin
```

**Admin Credentials:**

- Email: `admin@saranya.com`
- Password: `admin@saranya`

### 3. Start the Server

```bash
npm run dev
```

## URLs and Access

### Public URL

- Homepage: `http://localhost:3000`

### Staff Portal URLs (Not linked from homepage - direct access only)

- **Staff Login**: `http://localhost:3000/staff-login.html`
- **Staff Register**: `http://localhost:3000/staff-register.html`

### Admin Dashboard

- **Admin Dashboard**: `http://localhost:3000/admin-dashboard.html`
- Login with admin credentials to access

### Staff Dashboards (After approval)

- **Customer Care**: `http://localhost:3000/customer-care-dashboard.html`
- **Inventory**: `http://localhost:3000/inventory-dashboard.html`
- **Order Manager**: `http://localhost:3000/order-manager-dashboard.html`
- **Delivery Manager**: `http://localhost:3000/delivery-dashboard.html`
- **Accountant**: `http://localhost:3000/accountant-dashboard.html`

## Admin CRUD Operations

### CREATE

- Register new staff accounts
- Assign roles (Customer Care, Inventory, Order Manager, etc.)

### READ

- View all registered staff
- View role permissions
- View account status (Pending / Approved / Revoked)

### UPDATE

- Approve or reject staff registration
- Modify staff roles
- Activate or deactivate staff accounts

### DELETE

- Remove staff accounts permanently

## Staff Registration Flow

1. Staff member visits `/staff-register.html`
2. Fills registration form with role selection
3. Account is created with **Pending** status
4. On login, they see a blurred dashboard with "Pending Approval" message
5. Admin logs in and approves the account
6. Staff member can now access their full dashboard

## API Endpoints

### Authentication

- `POST /api/auth/register` - Staff registration
- `POST /api/auth/login` - Staff login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Staff Management (Admin Only)

- `GET /api/staff` - Get all staff
- `GET /api/staff/:id` - Get single staff
- `POST /api/staff` - Create staff (admin)
- `PUT /api/staff/:id` - Update staff
- `PATCH /api/staff/:id/approve` - Approve staff
- `PATCH /api/staff/:id/reject` - Reject staff
- `PATCH /api/staff/:id/toggle-active` - Toggle active status
- `DELETE /api/staff/:id` - Delete staff

## Project Structure

```
Saranya-Jewellery/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Staff.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── staff.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── seedAdmin.js
├── frontend/
│   ├── index.html
│   ├── staff-login.html
│   ├── staff-register.html
│   ├── admin-dashboard.html
│   ├── customer-care-dashboard.html
│   ├── inventory-dashboard.html
│   ├── order-manager-dashboard.html
│   ├── delivery-dashboard.html
│   ├── accountant-dashboard.html
│   └── favicon.png
├── package.json
└── .env
```

## Security Notes

- All passwords are hashed using bcrypt
- Sessions are managed using express-session
- Admin routes are protected with admin middleware
- Staff dashboards check approval status before showing content
