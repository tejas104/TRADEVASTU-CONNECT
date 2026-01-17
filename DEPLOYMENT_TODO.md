# Deployment Checklist

## Database & Backend (Railway)
- [x] Database schema pushed to Railway PostgreSQL
- [ ] Deploy backend to Railway:
  - Connect your GitHub repo to Railway: In Railway dashboard, select the 'TRADEVASTU-CONNECT' service, go to Settings > GitHub, and connect your GitHub repository.
  - Push your latest code to GitHub to trigger automatic deployment on Railway.
- [ ] Get the Railway backend URL (e.g., https://your-app-name.up.railway.app) from the Railway service dashboard after deployment.

## Frontend (Vercel)
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
- [ ] Test API endpoints from frontend
- [ ] Verify contact form submissions work
- [ ] Check database connections
