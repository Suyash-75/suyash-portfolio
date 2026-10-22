import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <main className="portfolio-shell page-shell">
      <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/"><span className="brand-mark">SP</span><span>Suyash Pandey</span></Link><div className="nav-links"><a href="/work">Work</a><a href="/education">Education</a><a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a></div></nav>
      <section className="credentials-section inner-page"><div className="credentials-heading"><p className="section-number">04 / HIGHLIGHTS</p><h2>Recognition &amp; credentials</h2></div><div className="credentials-grid"><article><p className="credential-label">Achievements</p><ul><li>National Entrepreneurship Challenge AIR 11 at IIT Bombay, competing against 4000+ colleges.</li><li>Winner of the Power Pitch Hackathon.</li><li>Top 20 teams at Design Odyssey Hackathon, IIT Indore.</li><li>1st place in Inter-Class Group Debate and 2nd place in English &amp; Sanskrit Elocutions.</li></ul></article><article><p className="credential-label">Certificates &amp; experience</p><p>Cisco Networking Academy courses include C++ Essentials, Advanced C++, Cybersecurity, Data Analytics, Modern AI, Applied AI, OS Basics, and CCNA 1–3.</p><p>Red Hat Linux Fundamentals • Alibaba Cloud Certified Developer • E-Cell IIT Bombay National Entrepreneurship Challenge.</p></article></div></section>
    </main>
  );
}
