import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../lib/storage';
import { insertContactMessageSchema } from '../../../shared/schema';
import { initDB } from '../../../lib/db';
import { ZodError } from 'zod';

// POST /api/contact
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // ✅ Validate input
    const validatedData = insertContactMessageSchema.parse(body);

    // ✅ Store message in DB
    let message;
    try {
      await initDB();
      message = await storage.createContactMessage(validatedData);
    } catch (err: any) {
      console.error("🔥 DB insert failed:", err);

      // Handle MongoDB Atlas connection issues in development
      if (process.env.NODE_ENV !== 'production' && err.message?.includes('ECONNRESET')) {
        return NextResponse.json({
          success: false,
          message: "Database connection failed locally. This won't affect production deployment.",
          error: "MongoDB Atlas connection blocked by local network. Contact form will work on Vercel.",
        }, { status: 500 });
      }

      // In production, don't expose internal errors
      const isProduction = process.env.NODE_ENV === 'production';
      return NextResponse.json({
        success: false,
        message: isProduction ? "Failed to save message. Please try again later." : "Database insertion failed",
        error: isProduction ? undefined : err.message,
      }, { status: 500 });
    }

    // ✅ Email disabled temporarily (add back later when SMTP ready)
    // await sendContactEmail(validatedData);

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
      id: message.id,
    }, { status: 201 });

  } catch (error) {
    // Zod validation errors
    if (error instanceof ZodError) {
      console.error("❌ Contact validation failed:", error.flatten());
      return NextResponse.json({
        success: false,
        message: "Invalid contact form data",
        errors: error.flatten().fieldErrors,
      }, { status: 400 });
    }

    // Unknown server errors
    console.error("🔥 Contact API server error:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    }, { status: 500 });
  }
}

// GET /api/contact
export async function GET() {
  try {
    await initDB();
    const messages = await storage.getContactMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("🔥 Fetch contact messages error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch messages",
    }, { status: 500 });
  }
}
