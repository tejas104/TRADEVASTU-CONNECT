# Deployment Checklist for MongoDB Atlas

## Database Setup (MongoDB Atlas)
- [ ] Create MongoDB Atlas cluster at https://cloud.mongodb.com
- [ ] Create database user with read/write permissions
- [ ] Whitelist IP addresses (0.0.0.0/0 for development, specific IPs for production)
- [ ] Get connection string from Atlas dashboard (Connect > Connect your application)
- [ ] Update environment variables with Atlas connection string

## Backend Deployment (Railway)
- [ ] Deploy backend to Railway:
  - Connect your GitHub repo to Railway
  - Set environment variables in Railway dashboard:
    - `MONGODB_URL`: Your Atlas connection string
    - `DB_NAME`: Your database name
    - `NODE_ENV`: production
    - `PORT`: 5001 (or Railway's default)
- [ ] Get the Railway backend URL from Railway service dashboard

## Frontend Deployment (Vercel)
- [ ] Update `vercel.json` with the Railway backend URL:
  ```json
  {
    "env": {
      "VITE_API_BASE_URL": "https://your-railway-backend-url"
    }
  }
  ```
- [ ] Deploy frontend to Vercel (connect Git repo or use Vercel CLI)

## Post-Deployment
- [ ] Test MongoDB Atlas connection
- [ ] Test API endpoints from frontend
- [ ] Verify contact form submissions work with Atlas
- [ ] Check database operations (create/read contact messages)
