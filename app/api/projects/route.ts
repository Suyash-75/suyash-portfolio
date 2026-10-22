import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  if (!supabase) {
    return NextResponse.json({
      success: true,
      author: "Suyash Pandey",
      data: [
        { id: 1, title: "CiviFund Fractional Ownership", description: "Conceptual fractional ownership platform for micro-assets in India.", tech: ["Next.js", "TypeScript", "PostgreSQL"] },
        { id: 2, title: "Student Management System", description: "Console-based application built using C++ OOP principles.", tech: ["C++", "OOP", "File Handling"] },
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
          title: "CiviFund Fractional Ownership",
          description: "Conceptual fractional ownership platform for micro-assets in India.",
          tech: ["Next.js", "TypeScript", "PostgreSQL"],
        },
        {
          id: 2,
          title: "Student Management System",
          description: "Console-based application built using C++ OOP principles.",
          tech: ["C++", "OOP", "File Handling"],
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