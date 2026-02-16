# Minimal Setup Guide

This project now does only two things:

- Connect to MongoDB when server starts
- Serve `frontend/index.html`

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
```

## Run

```bash
npm run dev
```

Open:

- `http://localhost:3000`
