import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertServiceSchema, insertPortfolioItemSchema, insertTestimonialSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification
      await sendContactEmail(validatedData);
      
      res.status(201).json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ success: false, message: "Invalid form data" });
      } else {
        res.status(500).json({ success: false, message: "Failed to send message" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch messages" });
    }
  });

  // Services routes
  app.post("/api/services", async (req, res) => {
    try {
      const validatedData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(validatedData);
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid service data" });
    }
  });

  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:slug", async (req, res) => {
    try {
      const service = await storage.getServiceBySlug(req.params.slug);
      if (!service) {
        return res.status(404).json({ success: false, message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch service" });
    }
  });

  // Portfolio routes
  app.post("/api/portfolio", async (req, res) => {
    try {
      const validatedData = insertPortfolioItemSchema.parse(req.body);
      const item = await storage.createPortfolioItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid portfolio item data" });
    }
  });

  app.get("/api/portfolio", async (req, res) => {
    try {
      const items = await storage.getPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch portfolio" });
    }
  });

  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const item = await storage.getPortfolioItem(req.params.id);
      if (!item) {
        return res.status(404).json({ success: false, message: "Portfolio item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch portfolio item" });
    }
  });

  // Testimonials routes
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ success: false, message: "Invalid testimonial data" });
    }
  });

  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch testimonials" });
    }
  });

  return httpServer;
}
