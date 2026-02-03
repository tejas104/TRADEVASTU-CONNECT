import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock testimonials data
    const testimonials = [
      {
        id: 1,
        name: "John Doe",
        company: "Tech Corp",
        message: "Excellent service and outstanding results!",
        rating: 5
      },
      {
        id: 2,
        name: "Jane Smith",
        company: "Digital Solutions",
        message: "Highly professional team with great attention to detail.",
        rating: 5
      }
    ];

    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Here you would typically save to database
    return NextResponse.json(
      { message: 'Testimonial submitted successfully', data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit testimonial' },
      { status: 500 }
    );
  }
}
