import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { year: '2026', title: 'Pulse Analytics', description: 'Real-time data tracking dashboard with live metric cards, activity charts, metric management, and Supabase database status monitoring.', tech: ['React', 'Supabase', 'PostgreSQL', 'Vercel'], href: 'https://pulse-analytics-sage.vercel.app/' },
  { year: '2026', title: 'Toxic Comment Detection System', description: 'Machine learning system for identifying toxic and non-toxic comments using NLP and text feature extraction.', tech: ['Python', 'Scikit-learn', 'NLP', 'Pandas'] },
  { year: '2025', title: 'Real-Time Chat Application', description: 'Instant messaging application with WebSocket communication and persistent MySQL message storage.', tech: ['Java', 'WebSocket', 'MySQL'] },
];

export default function WorkPage() {
  return (
    <main className="portfolio-shell page-shell">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/"><span className="brand-mark">SP</span><span>Suyash Pandey</span></Link>
        <div className="nav-links"><a href="/about">About</a><a href="/education">Education</a><a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a></div>
      </nav>
      <section className="inner-page work-section">
        <div className="section-heading"><div><p className="section-number">01 / WORK</p><h2>Selected projects</h2></div><p>Software and machine learning projects built around practical problems.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-index">{project.year}</div><div className="project-preview"><div className="browser-bar"><i /><i /><i /></div><div className="preview-content"><span>{project.title}</span><div className="preview-lines"><b /><b /><b /></div></div></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div>{project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight className="project-arrow" size={22} /></a> : <ArrowUpRight className="project-arrow" size={22} />}</div><div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>
    </main>
  );
}
