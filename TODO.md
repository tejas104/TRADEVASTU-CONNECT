# Contact Form Fix TODO

## Completed
- [x] Identify issue: Contact form sends 'service' and 'budget' fields, but schema only has 'name', 'email', 'phone', 'message'
- [x] Update shared/schema.ts to add 'service' and 'budget' fields to contactMessages table

## Pending
- [ ] Generate database migration for schema changes
- [ ] Apply migration to production Railway database
- [ ] Redeploy application to Railway
- [ ] Test contact form submission on live website

## Notes
- Migration generation failed locally due to missing DATABASE_URL in .env.local
- Production DATABASE_URL is set in Railway environment variables
- Redeployment should apply schema changes automatically via Drizzle
