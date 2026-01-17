// server/routes.ts
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "../shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {

  /* ---------------- CONTACT ROUTE ---------------- */
  app.post("/api/contact", async (req, res) => {
    try {
      // ✅ Validate input
      const validatedData = insertContactMessageSchema.parse(req.body);

      // ✅ Store message in DB
      let message;
      try {
        message = await storage.createContactMessage(validatedData);
      } catch (err: any) {
        console.error("🔥 DB insert failed:", err);
        return res.status(500).json({
          success: false,
          message: "Database insertion failed",
          error: err.message,
        });
      }

      // ✅ Email disabled temporarily (add back later when SMTP ready)
      // await sendContactEmail(validatedData);

      return res.status(201).json({
        success: true,
        message: "Message saved successfully",
        id: message.id,
      });

    } catch (error) {
      // Zod validation errors
      if (error instanceof ZodError) {
        console.error("❌ Contact validation failed:", error.flatten());
        return res.status(400).json({
          success: false,
          message: "Invalid contact form data",
          errors: error.flatten().fieldErrors,
        });
      }

      // Unknown server errors
      console.error("🔥 Contact API server error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  /* ---------------- GET CONTACT MESSAGES ---------------- */
  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("🔥 Fetch contact messages error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch messages",
      });
    }
  });

  return httpServer;
}
