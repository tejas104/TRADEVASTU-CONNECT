import { db } from "./db";
import { 
  users, 
  contactMessages, 
  services,
  portfolioItems,
  testimonials,
  type InsertUser, 
  type InsertContactMessage,
  type InsertService,
  type InsertPortfolioItem,
  type InsertTestimonial,
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<any>;
  getUserByUsername(username: string): Promise<any>;
  createUser(user: InsertUser): Promise<any>;
  createContactMessage(message: InsertContactMessage): Promise<any>;
  getContactMessages(): Promise<any[]>;
  createService(service: InsertService): Promise<any>;
  getServices(): Promise<any[]>;
  getServiceBySlug(slug: string): Promise<any>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<any>;
  getPortfolioItems(): Promise<any[]>;
  getPortfolioItem(id: string): Promise<any>;
  createTestimonial(testimonial: InsertTestimonial): Promise<any>;
  getTestimonials(): Promise<any[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string) {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser) {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(insertMessage: InsertContactMessage) {
    const result = await db.insert(contactMessages).values(insertMessage).returning();
    return result[0];
  }

  async getContactMessages() {
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }

  async createService(insertService: InsertService) {
    const result = await db.insert(services).values(insertService).returning();
    return result[0];
  }

  async getServices() {
    return await db.select().from(services);
  }

  async getServiceBySlug(slug: string) {
    const result = await db.select().from(services).where(eq(services.slug, slug));
    return result[0];
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem) {
    const result = await db.insert(portfolioItems).values(insertItem).returning();
    return result[0];
  }

  async getPortfolioItems() {
    return await db.select().from(portfolioItems).orderBy(desc(portfolioItems.createdAt));
  }

  async getPortfolioItem(id: string) {
    const result = await db.select().from(portfolioItems).where(eq(portfolioItems.id, id));
    return result[0];
  }

  async createTestimonial(insertTestimonial: InsertTestimonial) {
    const result = await db.insert(testimonials).values(insertTestimonial).returning();
    return result[0];
  }

  async getTestimonials() {
    return await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
  }
}

export const storage = new DatabaseStorage();
