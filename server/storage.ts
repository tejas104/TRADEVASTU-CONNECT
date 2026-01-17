import { db } from "./db";
import { contactMessages, type InsertContactMessage } from "../shared/schema";
import { desc } from "drizzle-orm";

export class DatabaseStorage {
  async createContactMessage(insertMessage: InsertContactMessage) {
    const result = await db.insert(contactMessages).values(insertMessage).returning();
    return result[0];
  }

  async getContactMessages() {
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }
}

export const storage = new DatabaseStorage();
