import Link from 'next/link';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="portfolio-shell page-shell">
      <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/"><span className="brand-mark">SP</span><span>Suyash Pandey</span></Link><div className="nav-links"><a href="/work">Work</a><a href="/about">About</a><a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a></div></nav>
      <section className="contact-section inner-page"><p>HAVE A PROJECT IN MIND?</p><a href="mailto:pandeysuyash29@gmail.com"><span>Let&apos;s work together</span><span className="contact-icon"><Mail size={28} /></span></a><div className="contact-details"><a href="tel:+918989100501"><Phone size={16} />+91 89891 00501</a><a href="mailto:pandeysuyash29@gmail.com"><Mail size={16} />pandeysuyash29@gmail.com</a></div></section>
    </main>
  );
}
