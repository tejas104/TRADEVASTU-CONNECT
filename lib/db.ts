import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config({ path: ".env.local" });
}

import { MongoClient, Db } from "mongodb";

const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "tradevastu";

if (!mongoUrl) {
  throw new Error("❌ MONGODB_URL is missing");
}

let client: MongoClient | null = null;
let db: Db | null = null;

export async function initDB() {
  try {
    if (client) {
      console.log("✅ MongoDB already connected");
      return;
    }

    client = new MongoClient(mongoUrl, {
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 15000, // Increase timeout for Atlas connection
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      connectTimeoutMS: 10000, // Connection timeout
      tls: mongoUrl.includes('mongodb+srv://'), // Enable TLS only for Atlas
      tlsAllowInvalidCertificates: false, // Ensure valid certificates
      retryWrites: true,
      retryReads: true,
      maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
    });

    await client.connect();
    db = client.db(dbName);
    console.log(`✅ Connected to MongoDB ${mongoUrl.includes('mongodb+srv://') ? 'Atlas' : 'Local'}: ${dbName}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    // In production, re-throw the error
    if (process.env.NODE_ENV === "production") {
      throw err;
    }
    // In development, log and continue (fallback to local if needed)
    console.warn("⚠️  Continuing without database connection for development");
  }
}

export async function closeDB() {
  try {
    if (client) {
      await client.close();
      client = null;
      db = null;
      console.log("✅ MongoDB connection closed");
    }
  } catch (err) {
    console.error("❌ Error closing MongoDB connection:", err);
  }
}

export function getDB(): Db {
  if (!db) {
    throw new Error("❌ Database not initialized. Call initDB() first.");
  }
  return db;
}

export { db };
