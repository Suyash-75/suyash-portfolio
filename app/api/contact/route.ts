import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ success: false, error: 'Email and message are required.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json({ success: false, error: 'Enter a valid email address.' }, { status: 400 });
    }

    if (!cleanMessage) {
      return NextResponse.json({ success: false, error: 'Enter a message.' }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json({ success: false, error: 'Database configuration is missing. Please try again later.' }, { status: 503 });
    }

    const { error } = await supabase
      .from('visitor_inquiries')
      .insert([{ email: cleanEmail, message: cleanMessage }]);

    if (error) {
      console.error('Supabase contact insert failed:', error.message);
      return NextResponse.json({ success: false, error: 'Unable to save your message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact request failed:', error);
    return NextResponse.json({ success: false, error: 'Unable to process your message.' }, { status: 400 });
  }
}
