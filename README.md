# Smart Jewellery Management System

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure MongoDB:**
   - Create a `.env` file in the root directory
   - Copy the contents from `.env.example`
   - Replace with your MongoDB connection string:

   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and go to `http://localhost:3000`

## Requirements

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB database library
- **dotenv** - Environment variables management
- **nodemon** (dev) - Auto-restart server on file changes
