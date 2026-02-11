#!/bin/bash

# Smart Jewellery Management System - Quick Start Guide

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Smart Jewellery Management System - Quick Start         ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📁 PROJECT STRUCTURE${NC}"
echo "├── frontend/"
echo "│   ├── index.html (Landing Page)"
echo "│   ├── login.html (Login Page)"
echo "│   ├── register.html (Register Page)"
echo "│   └── dashboard.html (User Dashboard)"
echo "├── backend/"
echo "├── MONGODB_SETUP.md (Database Guide)"
echo "├── SETUP_GUIDE.md (Complete Setup)"
echo "└── package.json"
echo ""

echo -e "${BLUE}🚀 QUICK START COMMANDS${NC}"
echo ""
echo -e "${YELLOW}1. Start Frontend:${NC}"
echo "   cd frontend/"
echo "   python -m http.server 8000"
echo "   # OR use: http-server"
echo "   # Visit: http://localhost:8000"
echo ""

echo -e "${YELLOW}2. Start MongoDB:${NC}"
echo "   brew services start mongodb-community  # macOS"
echo "   sudo systemctl start mongod           # Linux"
echo "   # Windows: MongoDB starts automatically"
echo ""

echo -e "${YELLOW}3. Setup MongoDB Database:${NC}"
echo "   mongosh"
echo "   use smartJewelleryDB"
echo "   db.createCollection('users')"
echo "   db.createCollection('products')"
echo "   db.createCollection('orders')"
echo "   db.createCollection('categories')"
echo "   db.createCollection('inventory')"
echo ""

echo -e "${YELLOW}4. Install Dependencies:${NC}"
echo "   npm install"
echo ""

echo -e "${YELLOW}5. Start Backend Server:${NC}"
echo "   npm run dev"
echo "   # Server runs on port 5000"
echo ""

echo -e "${GREEN}✅ PAGES READY TO USE${NC}"
echo "├── 🏠 Landing Page: index.html"
echo "├── 📝 Register: register.html"
echo "├── 🔓 Login: login.html"
echo "└── 📊 Dashboard: dashboard.html"
echo ""

echo -e "${GREEN}✨ FEATURES INCLUDED${NC}"
echo "✓ Beautiful responsive design"
echo "✓ Professional UI/UX with gold theme"
echo "✓ User authentication pages"
echo "✓ Dashboard with multiple sections"
echo "✓ Form validation"
echo "✓ Password strength indicator"
echo "✓ Mobile-friendly layout"
echo "✓ Complete MongoDB schema"
echo ""

echo -e "${BLUE}📚 USEFUL MONGODB COMMANDS${NC}"
echo ""
echo "mongosh                          # Connect to MongoDB"
echo "show databases                   # List all databases"
echo "use smartJewelleryDB             # Switch to database"
echo "show collections                 # Show collections"
echo "db.users.find()                  # Find all users"
echo "db.users.countDocuments()        # Count documents"
echo "db.users.deleteMany({})          # Clear collection"
echo "db.dropDatabase()                # Delete database"
echo ""

echo -e "${BLUE}🔐 DEFAULT TEST CREDENTIALS${NC}"
echo "After setup, you can test with:"
echo "├── Username: johndoe"
echo "├── Email: john@example.com"
echo "├── Password: test123456"
echo ""

echo -e "${BLUE}📖 DOCUMENTATION FILES${NC}"
echo "├── SETUP_GUIDE.md - Complete setup instructions"
echo "├── MONGODB_SETUP.md - Detailed database setup"
echo ""

echo -e "${BLUE}🌐 TEST URLS${NC}"
echo "├── Frontend: http://localhost:8000"
echo "├── Backend API: http://localhost:5000/api"
echo "├── Health Check: http://localhost:5000/api/health"
echo ""

echo -e "${GREEN}✅ ALL SETUP COMPLETE!${NC}"
echo ""
echo "Start with:"
echo "1. npm install"
echo "2. npm run dev (for backend)"
echo "3. python -m http.server 8000 (for frontend)"
echo "4. mongosh (to setup database)"
echo ""
