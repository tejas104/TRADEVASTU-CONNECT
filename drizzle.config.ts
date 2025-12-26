// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import "dotenv/config";

// Ensure DATABASE_URL exists
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing. Make sure you have a .env file with DATABASE_URL set.");
}

export default defineConfig({
  out: "./migrations",        // Folder where migrations will be stored
  schema: "./shared/schema.ts", // Path to your schema file
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,         // TypeScript is happy because we checked above
  },
});
