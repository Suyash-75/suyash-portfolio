import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const pulseAnalytics = {
  id: 0,
  title: "Pulse Analytics",
  description: "Real-time analytics dashboard for tracking metrics, visualizing activity trends, and monitoring live Supabase database signals.",
  tech: ["React", "Supabase", "PostgreSQL", "Vercel"],
  href: "https://pulse-analytics-sage.vercel.app/",
};

export async function GET() {
  if (!supabase) {
    return NextResponse.json({
      success: true,
      author: "Suyash Pandey",
      data: [
        pulseAnalytics,
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
        pulseAnalytics,
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

  const databaseProjects = (data ?? []).filter((project) => project.title !== "Pulse Analytics");
  return NextResponse.json({
    success: true,
    author: "Suyash Pandey",
    data: [pulseAnalytics, ...databaseProjects],
  });
}