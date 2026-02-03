# Local VS Code Setup Guide

## Prerequisites
- Node.js 18+ installed
- MongoDB (local installation or MongoDB Compass)
- Git for cloning the project

## Step 1: Clone & Install Dependencies

```bash
# Clone the project
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
```

## Step 2: Configure Environment Variables

Create a `.env.local` file in the project root with your database credentials:

```env
# MongoDB Connection (Choose ONE option below)

# Option A: Local MongoDB
MONGODB_URL="mongodb://localhost:27017"
DB_NAME="tradevastu"

# Option B: MongoDB Atlas (Production)
# MONGODB_URL="mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority"
# DB_NAME="tradevastu"

# Optional: Add these if using custom email service later
# RESEND_API_KEY="your-api-key"
# SENDGRID_API_KEY="your-api-key"
```

Replace `username`, `password`, `localhost`, and `tradevastu_db` with your actual database credentials.

## Step 3: Database Setup

### If using Local MongoDB:

1. **Install MongoDB locally** or use MongoDB Compass
2. **Start MongoDB service** (if using local installation):
   ```bash
   # On Windows (as Administrator)
   net start MongoDB

   # On macOS/Linux
   brew services start mongodb/brew/mongodb-community
   # or
   sudo systemctl start mongod
   ```
3. **Verify connection** using the test script:
   ```bash
   node test-mongo.js
   ```

### If using MongoDB Atlas (Cloud):

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a cluster (if not already created)
3. Go to Database Access → Create a database user
4. Go to Network Access → Add your IP address (or 0.0.0.0/0 for all)
5. Go to Clusters → Connect → Connect your application
6. Copy the connection string and replace `<password>` with your database user password
7. Update your `.env.local` or `.env.production` file

### Test Database Connection:

```bash
# Test local MongoDB connection
node test-mongo.js

# Test with custom environment
MONGODB_URL="your-connection-string" DB_NAME="your-db-name" node test-mongo.js
```

## Step 4: Run the Development Server

```bash
# Terminal 1: Start the development server
npm run dev

# Server will be available at http://localhost:5000
```

You should see:
```
10:30 AM [express] serving on port 5000
```

## Step 5: Open in Browser

1. Open VS Code
2. Go to http://localhost:5000 in your browser (or Ctrl+Click the terminal link)
3. You should see the TRADEVASTU CONNECT website with all animations

## Available Routes

- **Home**: `http://localhost:5000/`
- **Services**: `http://localhost:5000/services`
- **Service Detail**: `http://localhost:5000/services/web-development`
- **Portfolio**: `http://localhost:5000/portfolio`
- **Portfolio Detail**: `http://localhost:5000/portfolio/1`
- **About**: `http://localhost:5000/about`
- **Contact**: `http://localhost:5000/contact`
- **Admin Dashboard**: `http://localhost:5000/admin/dashboard`

## Troubleshooting

### Error: Cannot connect to database
- **Check**: MONGODB_URL is correct in `.env.local`
- **Check**: MongoDB service is running (check MongoDB Compass or run `node test-mongo.js`)
- **Check**: Port 27017 is not blocked by firewall (for local MongoDB)

### Error: npm ERR! 404 Not Found
- Run: `npm install` again
- Delete `node_modules` and `package-lock.json`, then reinstall

### Port 5000 already in use
```bash
# Find process using port 5000
lsof -i :5000

# Kill process (replace PID with actual ID)
kill -9 <PID>
```

### Database tables don't exist
```bash
npm run db:push --force
```

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder

## Useful Commands

```bash
# Test MongoDB connection
node test-mongo.js

# Test with custom connection string
MONGODB_URL="your-connection-string" DB_NAME="your-db-name" node test-mongo.js

# Build for production
npm run build

# Format code
npm run format
```

## Database Management

### View data in database:

```bash
psql tradevastu_db

# View tables
\dt

# Query contact messages
SELECT * FROM contact_messages;

# View portfolio items
SELECT * FROM portfolio_items;
```

### Reset database (WARNING: Deletes all data):

```bash
# Drop and recreate database
dropdb tradevastu_db
createdb tradevastu_db
npm run db:push
```

## Next Steps

1. **Add Initial Content**: 
   - Visit `/admin/dashboard` to add portfolio items and testimonials

2. **Enable Email Notifications**:
   - Get API key from Resend or SendGrid
   - Add to `.env.local`
   - Email will be sent on contact form submission

3. **Deploy to Production**:
   - Push to Replit and publish
   - Or deploy to Vercel, Netlify, etc.

## Project Structure

```
├── client/                 # React frontend
│   └── src/
│       ├── pages/         # All 7 pages
│       ├── components/    # Reusable components & animations
│       └── App.tsx        # Main routing
├── server/                # Express backend
│   ├── routes.ts          # All API endpoints
│   ├── storage.ts         # Database operations
│   ├── email.ts           # Email sending logic
│   └── index.ts           # Server setup
├── shared/                # Shared code
│   └── schema.ts          # Database schema & types
├── .env.local             # Environment variables (create this!)
└── package.json           # Dependencies
```

## Support

If you encounter issues:
1. Check logs in terminal
2. Verify `.env.local` has correct MONGODB_URL
3. Ensure MongoDB is running (`node test-mongo.js` to test)
4. Ensure `npm install` completed without errors
5. Check MongoDB Compass or Atlas dashboard for database status
