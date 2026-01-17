# Fix API 500 Error on Railway Deployment

## Issue
- GET /api/contact returns 500 "Failed to fetch messages"
- Root cause: contact_messages table doesn't exist in production database
- Database schema not pushed during deployment

## Changes Made
- [x] Added `db:push:prod` script in package.json
- [x] Modified railway.json buildCommand to run `npm run db:push:prod && npm run build:server`

## Next Steps
- [ ] Commit and push changes to trigger Railway redeploy
- [ ] Test GET https://tradevastu-connect-production.up.railway.app/api/contact after redeploy
- [ ] Verify response is 200 with empty array or contact messages
