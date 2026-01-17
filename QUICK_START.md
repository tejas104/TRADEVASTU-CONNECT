# ⚡ Quick Start (5 Minutes)

## 1️⃣ Clone & Install (1 min)
```bash
git clone <your-repo>
cd <project>
npm install
```

## 2️⃣ Database Setup (1 min)

### Using Local PostgreSQL:
```bash
# Create database
createdb tradevastu_db

# Create .env.local file with:
DATABASE_URL=postgresql://postgres:password@localhost:5432/tradevastu_db
```

### Using Replit Database:
```bash
# Go to Replit → Secrets → copy DATABASE_URL
# Create .env.local and paste it
```

## 3️⃣ Sync Database (1 min)
```bash
npm run db:push
```

## 4️⃣ Run Server (1 min)
```bash
npm run dev
```

## 5️⃣ Open Browser (1 sec)
Visit: **http://localhost:5000**

---

## That's it! 🎉

Your website is now running locally with:
- ✅ All 7 pages
- ✅ Database connected
- ✅ All animations working
- ✅ Admin dashboard at `/admin/dashboard`

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `connect ECONNREFUSED` | PostgreSQL not running: `sudo service postgresql start` |
| `DATABASE_URL not found` | Create `.env.local` file |
| `tables don't exist` | Run `npm run db:push --force` |
| Port 5000 in use | Kill process: `lsof -i :5000` then `kill -9 <PID>` |

## Next: Add Content

1. Visit: `http://localhost:5000/admin/dashboard`
2. Click "Manage Portfolio" → add items
3. Data saves to database instantly!

Done! Your local setup is complete. 🚀
