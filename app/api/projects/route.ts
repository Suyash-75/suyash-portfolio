import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  if (!supabase) {
    return NextResponse.json({
      success: true,
      author: "Suyash Pandey",
      data: [
        { id: 1, title: "Toxic Comment Detection System", description: "Machine learning system that identifies toxic and non-toxic comments using NLP and text feature extraction.", tech: ["Python", "Scikit-learn", "NLP", "Pandas"] },
        { id: 2, title: "Real-Time Chat Application", description: "Instant messaging application with WebSocket communication and persistent MySQL message storage.", tech: ["Java", "WebSocket", "MySQL"] },
      ],
    });
  }

  // Queries your live PostgreSQL database table on Supabase
  const { data, error } = await supabase.from('projects').select('*');

  if (error) {
    // Fallback static data if Supabase isn't configured yet
    return NextResponse.json({
      success: true,
      author: "Suyash Pandey",
      data: [
        {
          id: 1,
          title: "Toxic Comment Detection System",
          description: "Machine learning system that identifies toxic and non-toxic comments using NLP and text feature extraction.",
          tech: ["Python", "Scikit-learn", "NLP", "Pandas"],
        },
        {
          id: 2,
          title: "Real-Time Chat Application",
          description: "Instant messaging application with WebSocket communication and persistent MySQL message storage.",
          tech: ["Java", "WebSocket", "MySQL"],
        },
      ],
    });
  }

  return NextResponse.json({
    success: true,
    author: "Suyash Pandey",
    data: data,
  });
}