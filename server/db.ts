// server/db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "../shared/schema";
import "dotenv/config"; // ✅ ensure .env is loaded

// Ensure DATABASE_URL exists
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing. Please set it in your .env file.");
}

// Create Postgres client
const client = new Client({
  connectionString: databaseUrl,
});

// Connect to the database
export async function initDB() {
  await client.connect();
  console.log("✅ Connected to PostgreSQL");
}

// Export Drizzle instance
export const db = drizzle(client, { schema });
