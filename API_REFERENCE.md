# API Endpoints Reference Guide

## Saranya Jewellery Management System

---

## 🔐 Authentication Endpoints

### Staff Authentication

```
POST   /api/auth/register          - Register new staff (Public)
POST   /api/auth/login             - Staff login (Public)
POST   /api/auth/logout            - Staff logout (Authenticated)
GET    /api/auth/check             - Check session (Authenticated)
```

### Customer Authentication

```
POST   /api/customers/register     - Register new customer (Public)
POST   /api/customers/login        - Customer login (Public)
POST   /api/customers/logout       - Customer logout (Authenticated)
GET    /api/customers/profile      - Get customer profile (Authenticated)
PUT    /api/customers/profile      - Update customer profile (Authenticated)
```

---

## 👥 Staff Management (Admin Only)

```
GET    /api/staff                  - Get all staff
       Middleware: isAdmin
       Query Params: status (Pending/Approved/Revoked)
       Returns: Array of staff members

POST   /api/staff                  - Create new staff account
       Middleware: isAdmin
       Body: { email, password, fullName, role, status }
       Returns: Created staff object

GET    /api/staff/:id              - Get single staff member
       Middleware: isAdmin
       Returns: Staff object

PUT    /api/staff/:id              - Update staff account
       Middleware: isAdmin
       Body: { fullName, role, status, isActive }
       Returns: Updated staff object

DELETE /api/staff/:id              - Delete staff account
       Middleware: isAdmin
       Returns: Success message

GET    /api/staff/stats/overview   - Get staff statistics
       Middleware: isAdmin
       Returns: { total, pending, approved, revoked }
```

**Allowed Staff Roles:**

- `Admin`
- `Product Management`
- `Order Management`
- `Inventory`
- `Customer Care`
- `Loyalty Management`

**Allowed Status Values:**

- `Pending` - Awaiting admin approval
- `Approved` - Can access system
- `Revoked` - Access removed

---

## 📦 Product Management

### Public Endpoints

```
GET    /api/products               - Get all products
       Query Params:
         - category (Ring/Necklace/Bracelet/Earring/etc)
         - kType (18K/22K/24K)
         - availabilityStatus (In Stock/Out of Stock/Pre-Order)
         - featured (true/false)
       Returns: Array of products

GET    /api/products/:id           - Get single product
       Returns: Product object
```

### Protected Endpoints (Product Manager + Admin)

```
POST   /api/products               - Create new product
       Middleware: isProductManager
       Body: {
         name,
         description,
         image,
         category,
         price,
         weight,
         kType,
         karatRate,
         availabilityStatus,
         featured
       }
       Returns: Created product

PUT    /api/products/:id           - Update product
       Middleware: isProductManager
       Body: Same as POST (all fields optional)
       Returns: Updated product

DELETE /api/products/:id           - Delete product
       Middleware: isProductManager
       Returns: Success message

GET    /api/products/stats/overview - Get product statistics
       Middleware: isAuthenticated
       Returns: {
         totalProducts,
         featuredProducts,
         inStockProducts,
         newThisWeek,
         totalCategories
       }
```

**Product Categories:**

- `Ring`
- `Necklace`
- `Bracelet`
- `Earring`
- `Pendant`
- `Chain`
- `Bangles`
- `Anklet`
- `Other`

**Karat Types:**

- `18K`
- `22K`
- `24K`

**Availability Status:**

- `In Stock`
- `Out of Stock`
- `Pre-Order`

---

## 📋 Order Management (Order Manager + Admin)

```
GET    /api/orders                 - Get all orders
       Middleware: isOrderManager
       Query Params: status, customerId
       Returns: Array of orders

POST   /api/orders                 - Create new order
       Middleware: isOrderManager
       Body: {
         customerId,
         items: [{ productId, quantity, price }],
         totalAmount,
         paymentMethod,
         shippingAddress
       }
       Returns: Created order

GET    /api/orders/:id             - Get single order
       Middleware: isOrderManager
       Returns: Order object

PUT    /api/orders/:id/status      - Update order status
       Middleware: isOrderManager
       Body: { status }
       Returns: Updated order

DELETE /api/orders/:id             - Cancel/delete order
       Middleware: isOrderManager
       Returns: Success message

GET    /api/orders/stats/overview  - Get order statistics
       Middleware: isOrderManager
       Returns: {
         totalOrders,
         pendingOrders,
         completedOrders,
         totalRevenue
       }
```

**Order Status Flow:**

```
Pending → Processing → Shipped → Delivered → Completed
                                          ↓
                                    Cancelled
```

---

## 📊 Inventory Management (Inventory Manager + Admin)

```
GET    /api/inventory              - Get inventory overview
       Middleware: isInventoryManager
       Returns: {
         totalItems,
         lowStockItems,
         outOfStockItems,
         totalValue
       }

POST   /api/inventory/stock        - Add stock entry
       Middleware: isInventoryManager
       Body: {
         productId,
         quantity,
         serialNumber,
         costPrice
       }
       Returns: Stock entry

PUT    /api/inventory/goldrates    - Update gold rates
       Middleware: isInventoryManager
       Body: {
         goldRate18K,
         goldRate22K,
         goldRate24K,
         date
       }
       Returns: Updated rates

GET    /api/inventory/goldrates    - Get current gold rates
       Middleware: isAuthenticated
       Returns: {
         goldRate18K,
         goldRate22K,
         goldRate24K,
         lastUpdated
       }

DELETE /api/inventory/stock/:id    - Remove stock entry
       Middleware: isInventoryManager
       Returns: Success message
```

---

## 💬 Promotions (Customer Care Manager + Admin)

```
GET    /api/promotions             - Get all promotions
       Middleware: isCustomerCareManager
       Query Params: status (active/expired)
       Returns: Array of promotions

POST   /api/promotions             - Create new promotion
       Middleware: isCustomerCareManager
       Body: {
         title,
         description,
         targetGroup,
         startDate,
         endDate,
         discountPercentage
       }
       Returns: Created promotion

PUT    /api/promotions/:id         - Update promotion
       Middleware: isCustomerCareManager
       Body: Same as POST
       Returns: Updated promotion

DELETE /api/promotions/:id         - Delete promotion
       Middleware: isCustomerCareManager
       Returns: Success message
```

---

## 🏆 Loyalty Management (Loyalty Manager + Admin)

```
GET    /api/loyalty/customers      - Get all loyalty profiles
       Middleware: isLoyaltyManager
       Returns: Array of loyalty profiles

POST   /api/loyalty/profile        - Create loyalty profile
       Middleware: isLoyaltyManager
       Body: { customerId }
       Returns: Loyalty profile

GET    /api/loyalty/profile/:customerId - Get customer loyalty profile
       Middleware: isLoyaltyManager
       Returns: {
         customerId,
         tier,
         points,
         totalSpent,
         benefits
       }

PUT    /api/loyalty/points         - Add/remove points
       Middleware: isLoyaltyManager
       Body: {
         customerId,
         points,
         reason
       }
       Returns: Updated profile

PUT    /api/loyalty/tier/:customerId - Update customer tier
       Middleware: isLoyaltyManager
       Body: { tier }
       Returns: Updated profile

DELETE /api/loyalty/profile/:id    - Remove loyalty profile
       Middleware: isLoyaltyManager
       Returns: Success message
```

**Loyalty Tiers:**

- `Silver` - ₹0 to ₹50,000 total spending
- `Gold` - ₹50,001 to ₹200,000 total spending
- `Platinum` - ₹200,001+ total spending

**Points Calculation:**

- 1 Point = ₹100 spent
- Auto-generated on order completion

---

## 👤 Customer Endpoints

```
GET    /api/customers/products     - Browse products
       Public
       Returns: Array of products

GET    /api/customers/orders       - Get customer's orders
       Middleware: isAuthenticated (Customer)
       Returns: Customer's order history

POST   /api/customers/orders       - Place new order
       Middleware: isAuthenticated (Customer)
       Body: Order details
       Returns: Created order

GET    /api/customers/loyalty      - Get loyalty points
       Middleware: isAuthenticated (Customer)
       Returns: Loyalty profile

GET    /api/customers/promotions   - Get active promotions
       Middleware: isAuthenticated (Customer)
       Returns: Available promotions
```

---

## 🛡️ Middleware Summary

| Middleware              | Description              | Roles Allowed             |
| ----------------------- | ------------------------ | ------------------------- |
| `isAuthenticated`       | Requires valid session   | All logged-in users       |
| `isApproved`            | Requires approved status | Approved staff only       |
| `isAdmin`               | Admin only               | Admin                     |
| `isProductManager`      | Product management       | Product Management, Admin |
| `isOrderManager`        | Order management         | Order Management, Admin   |
| `isInventoryManager`    | Inventory management     | Inventory, Admin          |
| `isCustomerCareManager` | Promotions & care        | Customer Care, Admin      |
| `isLoyaltyManager`      | Loyalty system           | Loyalty Management, Admin |
| `hasRole(...roles)`     | Custom role check        | Specified roles           |

---

## 📝 Response Format

### Success Response

```json
{
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response

```json
{
  "message": "Error description",
  "error": "Detailed error message"
}
```

### Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (not logged in)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Server Error

---

## 🔧 Testing Endpoints

### Using cURL:

**Register Staff:**

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@saranya.com",
    "password": "admin123",
    "fullName": "Admin User",
    "role": "Admin"
  }'
```

**Login:**

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@saranya.com",
    "password": "admin123"
  }' \
  -c cookie.txt
```

**Create Product (with session):**

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -b cookie.txt \
  -d '{
    "name": "Diamond Ring",
    "description": "Beautiful diamond ring",
    "image": "ring.jpg",
    "category": "Ring",
    "price": 50000,
    "weight": 5.5,
    "kType": "18K",
    "karatRate": 4500
  }'
```

---

## 📚 Additional Resources

- **Role Documentation:** `/ROLE_BASED_ACCESS.md`
- **Implementation Guide:** `/IMPLEMENTATION_COMPLETE.md`
- **Role Helper Utilities:** `/backend/utils/roleHelper.js`
- **Middleware Source:** `/backend/middleware/auth.js`

---

_API Reference - Version 1.0_
_Last Updated: February 27, 2026_
