# Local VS Code Setup Guide

## Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or remote)
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
# Database Connection (Choose ONE option below)

# Option A: Local PostgreSQL
DATABASE_URL="postgresql://username:password@localhost:5432/tradevastu_db"

# Option B: Remote PostgreSQL (e.g., from Replit)
# DATABASE_URL="postgresql://user:password@host:port/database_name"

# Optional: Add these if using custom email service later
# RESEND_API_KEY="your-api-key"
# SENDGRID_API_KEY="your-api-key"
```

Replace `username`, `password`, `localhost`, and `tradevastu_db` with your actual database credentials.

## Step 3: Database Setup

### If using Local PostgreSQL:

```bash
# Create database
createdb tradevastu_db

# Or using psql
psql -U postgres
# In psql console:
# CREATE DATABASE tradevastu_db;
# \q
```

### If using Replit Database:

1. Go to Replit project → Secrets tab
2. Copy the `DATABASE_URL` value
3. Paste it in your `.env.local` file

### Sync Database Schema:

```bash
npm run db:push
```

This will create all tables (services, portfolio_items, testimonials, contact_messages, etc.)

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
- **Check**: DATABASE_URL is correct in `.env.local`
- **Check**: PostgreSQL service is running (`sudo service postgresql start` on Linux)
- **Check**: Port 5432 is not blocked by firewall

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
# View database schema
npm run db:studio

# Push schema changes to database
npm run db:push

# Force push (if regular push fails)
npm run db:push --force

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
2. Verify `.env.local` has correct DATABASE_URL
3. Ensure `npm install` completed without errors
4. Try `npm run db:push --force` to resync database
