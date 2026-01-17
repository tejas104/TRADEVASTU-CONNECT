import express from "express";
import { createServer } from "http";
import cors from "cors";
import { registerRoutes } from "./routes";
import { initDB } from "./db";

const app = express();
const server = createServer(app);

/* -------------------- BASIC MIDDLEWARE -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- CORS -------------------- */
const corsOrigin = process.env.NODE_ENV === "production"
  ? process.env.FRONTEND_URL
  : "http://localhost:5173";

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

/* -------------------- HEALTH ENDPOINT -------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* -------------------- API ROUTES -------------------- */
(async () => {
  try {
    await initDB();
    await registerRoutes(server, app);

    /* -------------------- START SERVER -------------------- */
    const PORT = Number(process.env.PORT) || 5000;
    server.listen(PORT, () => {
      console.log(`✅ Connected to Supabase PostgreSQL`);
      console.log(`🚀 Backend running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Server failed to start:", err);
    process.exit(1);
  }
})();
