import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config({ path: ".env.local" });
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("❌ DATABASE_URL is missing");

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});