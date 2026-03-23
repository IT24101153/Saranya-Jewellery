# Loyalty Management System - Complete Implementation Guide

## Overview

This document describes the comprehensive loyalty management system implemented for Saranya Jewellery, including tier management, customer loyalty management, and promotional offers functionality.

## Features Implemented

### 1. **Tier Configuration & Management**

#### Three Loyalty Tiers

- **Silver Tier**: Rs. 0 - Rs. 50,000 spent
  - 1x points multiplier
  - Basic benefits
- **Gold Tier**: Rs. 50,000 - Rs. 2,00,000 spent
  - 1.5x points multiplier
  - Premium benefits
- **Platinum Tier**: Above Rs. 2,00,000 spent
  - 2x points multiplier
  - VIP benefits

#### Editable Configuration

The loyalty manager can edit:

- Point range for each tier
- Points multiplier
- Tier benefits (add/edit/remove individual benefits)
- Tier descriptions

**UI**: Edit buttons on each tier card in the tier configuration section

### 2. **Customer Loyalty Management**

#### Add Customer to Loyalty Program

- Click "Add to Loyalty" button
- Select customer from dropdown
- Customer is automatically assigned to **Silver Tier**
- Initial points setting available

#### Customer Status Management

Loyalty managers can perform actions on loyalty customers:

**Upgrade Tier**

- Move customer from Silver → Gold → Platinum
- Based on eligibility

**Downgrade Tier**

- Move customer from Platinum → Gold → Silver
- Manual downgrade option

**Remove from Loyalty**

- Convert loyalty customer back to regular customer
- Reset all loyalty-related data

#### Member Filtering

Filter members by:

- All customers
- Loyalty members only
- Specific tier (Silver/Gold/Platinum)

#### Member Information Display

Show for each customer:

- Name & Email
- Loyalty status (Loyalty/Regular)
- Current tier (or Regular badge)
- Current loyalty points
- Total spent amount
- Action buttons for tier management

### 3. **Points Management**

#### Award Points

- Select loyalty customer
- Enter points amount
- Add optional reason (promotion, compensation, etc.)
- Points added to customer's loyalty account

#### Points Tracking

- Display total points issued
- Display total points redeemed
- Track per-customer points balance

### 4. **Promotional Offers**

#### Create Offers

Click "Create New Offer" to add promotional offers with:

- **Title**: Offer name (e.g., "New Year Special")
- **Description**: Full offer details and terms
- **Discount**: Percentage (%) discount or fixed amount (Rs.)
- **Applicable Tier**: Silver/Gold/Platinum/All Tiers
- **Valid Until**: Expiry date for the offer

#### Manage Offers

- **Edit Offer**: Update offer details
- **Delete Offer**: Remove offer from system
- **Send via Email**: Send offer to eligible customers

#### Email Notifications

Three email types (one per tier):

- Silver tier offers email
- Gold tier offers email
- Platinum tier offers email

Loyalty managers can:

- Send offers by tier to specific customer groups
- Track email sent status
- See recipient count

#### Offer Display Card

Each offer shows:

- Title and description
- Discount details
- Applicable tier
- Valid until date
- Email status and recipient count
- Action buttons for edit, send, delete

### 5. **Dashboard Statistics**

Real-time display of:

- **Active Members**: Total loyalty customers
- **Silver Members**: Count of Silver tier members
- **Gold Members**: Count of Gold tier members
- **Platinum Members**: Count of Platinum tier members
- **Points Redeemed**: Total points redeemed by all customers
- **Points Issued**: Total points issued to all customers

## Database Models

### Customer Model (Updated)

```javascript
{
  email: String,
  fullName: String,
  phone: String,
  address: Object,
  loyaltyPoints: Number (default: 0),          // Current loyalty points
  isLoyalty: Boolean (default: false),         // Loyalty status
  loyaltyTier: String (Silver/Gold/Platinum),  // Current tier
  totalSpent: Number (default: 0),             // Total purchase amount
  pointsRedeemed: Number (default: 0),         // Points redeemed so far
  loyaltyJoinedDate: Date (default: null),     // When joined loyalty program
  isActive: Boolean (default: true)
}
```

### LoyaltyTier Model

```javascript
{
  tierName: String (Silver/Gold/Platinum),
  minSpent: Number,              // Minimum spending to reach tier
  maxSpent: Number,              // Maximum spending in tier
  pointMultiplier: Number,       // Points multiplier for purchases
  benefits: [String],            // Array of tier benefits
  description: String            // Tier description
}
```

### LoyaltyOffer Model

```javascript
{
  title: String,                 // Offer title
  description: String,           // Full offer description
  tierType: String,              // Silver/Gold/Platinum/All
  discountPercentage: Number,    // % discount
  discountAmount: Number,        // Or fixed amount discount
  validFrom: Date,               // Offer start date
  validUntil: Date,              // Offer expiry date
  isActive: Boolean,             // Offer active status
  emailSent: Boolean,            // Email sent status
  sentAt: Date,                  // When email was sent
  recipientsCount: Number        // Number of recipients
}
```

## API Endpoints

### Tier Management

- `GET /api/loyalty/tiers` - Get all tiers
- `GET /api/loyalty/tiers/:id` - Get single tier
- `PUT /api/loyalty/tiers/:id` - Update tier configuration

### Customer Management

- `GET /api/loyalty/members` - Get all customers
- `POST /api/loyalty/members/add` - Add customer to loyalty
- `POST /api/loyalty/members/remove` - Remove from loyalty
- `POST /api/loyalty/members/upgrade/:customerId` - Upgrade tier
- `POST /api/loyalty/members/downgrade/:customerId` - Downgrade tier
- `POST /api/loyalty/members/check-eligibility/:customerId` - Check tier eligibility
- `POST /api/loyalty/members/award-points` - Award loyalty points

### Offer Management

- `GET /api/loyalty/offers` - Get all offers
- `POST /api/loyalty/offers` - Create new offer
- `PUT /api/loyalty/offers/:id` - Update offer
- `DELETE /api/loyalty/offers/:id` - Delete offer
- `POST /api/loyalty/offers/:id/send-email` - Send offer via email

### Dashboard

- `GET /api/loyalty/dashboard/stats` - Get dashboard statistics

## Setup Instructions

### 1. Initialize Loyalty Tiers

Run the seed script to initialize default loyalty tiers:

```bash
node backend/seedLoyaltyTiers.js
```

This creates three tiers with predefined configurations:

- Silver: 0-50,000 spent, 1x multiplier
- Gold: 50,000-200,000 spent, 1.5x multiplier
- Platinum: 200,000+ spent, 2x multiplier

### 2. Access Loyalty Dashboard

Navigate to: `/loyalty-management-dashboard`

Staff member must have role: **"Loyalty Management"** or **"Admin"**

## User Workflows

### Adding a Customer to Loyalty Program

1. Click "Add to Loyalty" button
2. Select customer from dropdown (non-loyalty customers only)
3. Customer assigned to Silver tier with 0 initial points
4. Success alert displayed

### Managing Customer Tiers

1. Filter/find loyalty customer in table
2. Click "Up" to upgrade to next tier (if not already at highest)
3. Click "Down" to downgrade to previous tier (if not already at lowest)
4. Click "Remove" to remove from loyalty program entirely

### Awarding Loyalty Points

1. Click "Award Points" button
2. Select loyalty customer
3. Enter points amount
4. Optional: Add reason for award
5. Submit to award points to customer

### Creating a Promotional Offer

1. Click "Create New Offer"
2. Fill in offer title and description
3. Set discount percentage or amount
4. Choose applicable tier(s)
5. Set expiry date
6. Click "Save Offer"

### Sending Offers via Email

1. Create/select an offer
2. Click "Send Email" button
3. Customers of applicable tier(s) receive email
4. Offer status updates to "Email Sent"
5. Recipient count displayed

### Editing Tier Configuration

1. Click "Edit" button on any tier card
2. Modify tier ranges, multiplier, benefits
3. Add/remove benefits
4. Save changes

## Features Summary

| Feature                     | Type            | Status      |
| --------------------------- | --------------- | ----------- |
| 3-Tier System               | Tier Management | Implemented |
| Editable Tier Configuration | Admin           | Implemented |
| Add to Loyalty              | Customer Mgmt   | Implemented |
| Remove from Loyalty         | Customer Mgmt   | Implemented |
| Upgrade/Downgrade Tiers     | Customer Mgmt   | Implemented |
| Award Points                | Points Mgmt     | Implemented |
| Promotional Offers          | Offers          | Implemented |
| Tier-Specific Offers        | Offers          | Implemented |
| Email Offers to Customers   | Communications  | Implemented |
| Offer Management (CRUD)     | Offers          | Implemented |
| Dashboard Statistics        | Analytics       | Implemented |
| Customer Filtering          | UI              | Implemented |
| Real-time Point Tracking    | Analytics       | Implemented |
| Alert System                | UI              | Implemented |

## Security

All endpoints are protected with:

- Authentication middleware (`isAuthenticated`)
- Role-based access control (`isLoyaltyManager` or `isAdmin`)
- Account approval check (`isApproved`)

## Notes

- One point = Rs. 100 spent (base rate, adjusted by tier multiplier)
- Points are tied to order completion on customer side
- Tiers are based on total cumulative spending
- Loyalty tier eligibility should be checked via separate order fulfillment process
- Email sending uses configured email service (Nodemailer + Testmail support)

## Future Enhancements

Potential additions:

- Automatic tier upgrade based on spending threshold
- Points expiration rules
- Redemption management
- Loyalty tier history/audit log
- Customer tier anniversary reset
- Bulk email campaigns
- Offer performance analytics
