import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would save this to a database
    // or send an email notification.
    console.log("New Reservation Request:", body);

    return NextResponse.json({ 
      success: true, 
      message: "Reservation received successfully" 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to process reservation" 
    }, { status: 400 });
  }
}
