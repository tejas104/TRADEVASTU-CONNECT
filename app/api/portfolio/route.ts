import { NextResponse } from 'next/server';
import { storage } from '../../../lib/storage';
import { initDB } from '../../../lib/db';

export async function GET() {
  try {
    await initDB();
    const items = await storage.getPortfolioItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error("🔥 Fetch portfolio items error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch portfolio items",
    }, { status: 500 });
  }
}
