import { z } from "zod";

// User Schema
export interface User {
  _id?: string;
  id: string;
  username: string;
  password: string;
}

export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

// Contact Message Schema
export interface ContactMessage {
  _id?: string;
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  createdAt: Date;
}

export const insertContactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// Service Schema
export interface Service {
  _id?: string;
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  createdAt: Date;
}

export const insertServiceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  features: z.array(z.string()).min(1),
});

export type InsertService = z.infer<typeof insertServiceSchema>;

// Portfolio Item Schema
export interface PortfolioItem {
  _id?: string;
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  createdAt: Date;
}

export const insertPortfolioItemSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  tags: z.array(z.string()).min(1),
  featured: z.boolean().optional().default(false),
});

export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;

// Testimonial Schema
export interface Testimonial {
  _id?: string;
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  featured: boolean;
  createdAt: Date;
}

export const insertTestimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
  content: z.string().min(1),
  featured: z.boolean().optional().default(false),
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
