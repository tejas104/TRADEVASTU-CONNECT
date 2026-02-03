import { ContactMessage, type InsertContactMessage } from "../shared/schema";
import { getDB } from "./db";
import { ObjectId } from "mongodb";

export class DatabaseStorage {
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const message = {
      _id: new ObjectId(),
      id: new ObjectId().toHexString(),
      ...insertMessage,
      createdAt: new Date(),
    };

    const result = await getDB().collection("contact_messages").insertOne(message);
    return {
      _id: result.insertedId.toString(),
      id: message.id,
      name: message.name,
      email: message.email,
      phone: message.phone,
      service: message.service,
      budget: message.budget,
      message: message.message,
      createdAt: message.createdAt,
    };
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    const messages = await getDB().collection("contact_messages").find({}).sort({ createdAt: -1 }).toArray();
    return messages.map((msg: any) => ({
      _id: msg._id.toString(),
      id: msg._id.toString(),
      name: msg.name,
      email: msg.email,
      phone: msg.phone,
      service: msg.service,
      budget: msg.budget,
      message: msg.message,
      createdAt: msg.createdAt,
    }));
  }

  async getPortfolioItems(): Promise<any[]> {
    try {
      const db = getDB();
      const collection = db.collection('portfolio');
      const items = await collection.find({}).toArray();
      return items;
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
      throw error;
    }
  }

  async getTestimonials(): Promise<any[]> {
    try {
      const db = getDB();
      const collection = db.collection('testimonials');
      const testimonials = await collection.find({}).toArray();
      return testimonials;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();
