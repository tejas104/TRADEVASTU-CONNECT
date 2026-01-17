# Production Readiness Tasks

## Backend Changes
- [x] Update server/db.ts: Use Supabase Postgres connection string with SSL enabled
- [x] Update server/index.ts: Remove static file serving, update CORS for dev/prod, add /health endpoint, update logging
- [x] Update server/routes.ts: Add /health endpoint
- [x] Remove server/static.ts and server/vite.ts
- [x] Update package.json: Modify build scripts for separate client/server builds

## Frontend Changes
- [x] Update client/src/pages/Contact.tsx: Use VITE_API_BASE_URL for API calls
- [x] Create .env.local for development
- [x] Create .env.production for production
- [x] Update vercel.json for frontend deployment

## Configuration
- [x] Ensure build output goes to dist
- [x] Verify backend starts with node dist/index.cjs
- [x] Test API calls without CORS errors
