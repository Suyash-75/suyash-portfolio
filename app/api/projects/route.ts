import { NextResponse } from 'next/server';

// This is your backend API endpoint simulating a database fetch
export async function GET() {
  const projects = [
    {
      id: 1,
      title: "CiviFund Fractional Ownership",
      description: "Conceptual fractional ownership platform for micro-assets in India.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      id: 2,
      title: "Student Management System",
      description: "Console-based application built using C++ object-oriented principles and file handling.",
      tech: ["C++", "OOP", "File Handling"],
    },
  ];

  return NextResponse.json({
    success: true,
    author: "Suyash Pandey",
    data: projects,
  });
}