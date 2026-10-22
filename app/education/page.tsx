import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function EducationPage() {
  return (
    <main className="portfolio-shell page-shell">
      <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/"><span className="brand-mark">SP</span><span>Suyash Pandey</span></Link><div className="nav-links"><a href="/work">Work</a><a href="/about">About</a><a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a></div></nav>
      <section className="education-section inner-page">
        <div className="education-heading"><p className="section-number">02 / EDUCATION</p><h2>My foundation</h2></div>
        <div className="education-list">
          <article className="education-item"><div className="education-year">2023—2027</div><div><p className="education-degree">B.Tech in Computer Science • 8.07 CGPA</p><h3>Gyan Ganga Institute of Technology and Sciences</h3><p>Jabalpur, Madhya Pradesh • 8.5 SGPA</p></div><ArrowUpRight size={24} /></article>
          <article className="education-item"><div className="education-year">MAR 2023</div><div><p className="education-degree">Higher Secondary • 69.6%</p><h3>Christ Church Boys&apos; Senior Secondary School</h3><p>Jabalpur, Madhya Pradesh</p></div></article>
          <article className="education-item"><div className="education-year">MAR 2021</div><div><p className="education-degree">Secondary Education • 95.5%</p><h3>Christ Church Boys&apos; Senior Secondary School</h3><p>Jabalpur, Madhya Pradesh</p></div></article>
        </div>
      </section>
    </main>
  );
}
