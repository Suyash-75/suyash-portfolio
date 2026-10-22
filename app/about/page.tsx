import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="portfolio-shell page-shell">
      <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/"><span className="brand-mark">SP</span><span>Suyash Pandey</span></Link><div className="nav-links"><a href="/work">Work</a><a href="/education">Education</a><a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a></div></nav>
      <section className="about-section inner-page">
        <div className="about-label"><p className="section-number">03 / ABOUT</p></div>
        <div className="about-copy"><h2>Code with purpose.<br />Design with feeling.</h2><p>Motivated third-year B.Tech Computer Science student with strong skills in C++, MySQL, and Data Structures &amp; Algorithms. Experienced in software and machine learning projects, with a solid understanding of OOPs, DBMS, Operating Systems, and Computer Networks.</p><div className="skill-pills">{['C++','MySQL','DSA','Python','HTML','CSS','JavaScript','Git','GitHub'].map((skill)=><span key={skill}>{skill}</span>)}</div></div>
      </section>
      <section className="contact-section"><p>PROFILE PHOTO</p><div className="profile-disc profile-photo"><Image src="/Suyash Smart.jpeg" alt="Suyash Pandey in smart-casual attire" fill sizes="330px" /><span className="photo-label">Suyash Pandey</span></div></section>
    </main>
  );
}
