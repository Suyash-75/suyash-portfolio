'use client';
import React, { useEffect, useState } from 'react';

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fetching data from your Next.js backend API route
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Suyash Pandey</h1>
            <p className="text-slate-400 mt-1">Computer Science Engineering | Full-Stack Developer</p>
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium">
            Full-Stack Live 🚀
          </span>
        </header>

        {/* About Me */}
        <section className="mb-8 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 text-emerald-400">About Me</h2>
          <p className="text-slate-300 leading-relaxed">
            Fourth-year B.Tech Computer Science student specializing in scalable full-stack web applications, 
            secure backend APIs, and modern user interfaces using Next.js, TypeScript, and PostgreSQL.
          </p>
        </section>

        {/* Dynamic Projects from Backend API */}
        <section className="mb-8 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-emerald-400">Featured Projects (Fetched from Backend API)</h2>
          {loading ? (
            <p className="text-slate-400">Loading backend data...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-800/60 border border-slate-700/50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg text-white mb-1">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string, i: number) => (
                      <span key={i} className="bg-emerald-950 text-emerald-300 text-xs px-2 py-1 rounded border border-emerald-800/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Interactive Form Section */}
        <section className="mb-10 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 text-emerald-400">Get in Touch</h2>
          {submitted ? (
            <div className="bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 p-3 rounded-lg text-sm">
              Thank you! Your message/email has been recorded successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-950 border border-slate-700 px-4 py-2 rounded-lg text-white flex-1 focus:outline-none focus:border-emerald-500 text-sm"
              />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg font-medium text-sm transition">
                Connect
              </button>
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm border-t border-slate-800 pt-6">
          <p>© 2026 Suyash Pandey. Architecture: Next.js App Router + TypeScript + API Routes.</p>
        </footer>
      </div>
    </main>
  );
}