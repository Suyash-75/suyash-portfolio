'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
};

const socials = [
  { label: 'GitHub', href: 'https://github.com/Suyash-75', mark: 'GitHub' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suyashpandey7/', mark: 'LinkedIn' },
  { label: 'Instagram', href: 'https://www.instagram.com/suyashpandey_7/', mark: 'Instagram' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Suyash%207P/', mark: 'LeetCode' },
];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((result) => {
        setProjects(Array.isArray(result.data) ? result.data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="portfolio-shell">
      <div className="noise" aria-hidden="true" />
      <nav className="nav reveal reveal-1" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Suyash Pandey, home">
          <span className="brand-mark">SP</span>
          <span>Suyash Pandey</span>
        </a>
        <div className="nav-links">
          <Link href="/work">Work</Link>
          <Link href="/education">Education</Link>
          <Link href="/about">About</Link>
          <Link href="/achievements">Highlights</Link>
          <a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a>
          <a className="nav-contact" href="/contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-2"><span /> Available for opportunities</p>
          <h1 className="reveal reveal-3">Building digital<span>experiences.</span></h1>
          <div className="hero-bottom reveal reveal-4">
            <p>I&apos;m Suyash, a Full-Stack Developer and Computer Science student crafting thoughtful products with clean code, robust systems, and interfaces that feel effortless.</p>
            <a className="hero-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">
              <span>View resume</span>
              <ArrowUpRight size={18} />
            </a>
            <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={24} /></a>
          </div>
        </div>
        <div className="hero-art reveal reveal-3" aria-label="Developer profile">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-disc profile-photo">
            <Image src="/Suyash Smart.jpeg" alt="Suyash Pandey in smart-casual attire" fill priority sizes="330px" />
            <span className="photo-label">Suyash Pandey</span>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Skills">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, group) =>
            ['NEXT.JS', 'TYPESCRIPT', 'POSTGRESQL', 'REACT', 'NODE.JS'].map((skill, index) => (
              <span key={`${group}-${index}`}><b>{skill}</b><i /></span>
            ))
          )}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading reveal">
          <div><p className="section-number">01 / WORK</p><h2>Selected projects</h2></div>
          <p>A collection of ideas turned into practical, scalable digital products.</p>
        </div>
        {loading ? (
          <div className="project-loading"><span /><span /><span /></div>
        ) : (
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.id}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-preview">
                  <div className="browser-bar"><i /><i /><i /></div>
                  <div className="preview-content">
                    <span>{project.title}</span>
                    <div className="preview-lines"><b /><b /><b /></div>
                  </div>
                </div>
                <div className="project-info">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <ArrowUpRight className="project-arrow" size={22} />
                </div>
                <div className="tech-list">
                  {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="education-section" id="education">
        <div className="education-heading">
          <p className="section-number">02 / EDUCATION</p>
          <h2>My foundation</h2>
        </div>
        <div className="education-list">
          <article className="education-item">
            <div className="education-year">2023—2027</div>
            <div>
              <p className="education-degree">B.Tech in Computer Science • 8.07 CGPA</p>
              <h3>Gyan Ganga Institute of Technology and Sciences</h3>
              <p>Jabalpur, Madhya Pradesh • 8.5 SGPA</p>
            </div>
            <ArrowUpRight size={24} />
          </article>
          <article className="education-item">
            <div className="education-year">MAR 2023</div>
            <div>
              <p className="education-degree">Higher Secondary Education • 69.6%</p>
              <h3>Christ Church Boys&apos; Senior Secondary School</h3>
              <p>Jabalpur, Madhya Pradesh</p>
            </div>
          </article>
          <article className="education-item">
            <div className="education-year">MAR 2021</div>
            <div>
              <p className="education-degree">Secondary Education • 95.5%</p>
              <h3>Christ Church Boys&apos; Senior Secondary School</h3>
              <p>Jabalpur, Madhya Pradesh</p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label"><p className="section-number">03 / ABOUT</p></div>
        <div className="about-copy">
          <h2>Code with purpose.<br />Design with feeling.</h2>
          <p>Motivated third-year B.Tech Computer Science student with strong skills in C++, MySQL, and Data Structures &amp; Algorithms. Experienced in software and machine learning projects, with a solid understanding of OOPs, DBMS, Operating Systems, and Computer Networks.</p>
          <div className="skill-pills">
            {['C++', 'MySQL', 'DSA', 'Python', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="credentials-section" id="credentials">
        <div className="credentials-heading">
          <p className="section-number">04 / HIGHLIGHTS</p>
          <h2>Recognition &amp; credentials</h2>
        </div>
        <div className="credentials-grid">
          <article>
            <p className="credential-label">Achievements</p>
            <ul>
              <li>National Entrepreneurship Challenge AIR 11 at IIT Bombay, competing against 4000+ colleges.</li>
              <li>Winner of the Power Pitch Hackathon.</li>
              <li>Top 20 teams at Design Odyssey Hackathon, IIT Indore.</li>
              <li>1st place in Inter-Class Group Debate and 2nd place in English &amp; Sanskrit Elocutions.</li>
            </ul>
          </article>
          <article>
            <p className="credential-label">Certificates &amp; experience</p>
            <p>Cisco Networking Academy courses include C++ Essentials, Advanced C++, Cybersecurity, Data Analytics, Modern AI, Applied AI, OS Basics, and CCNA 1–3.</p>
            <p>Red Hat Linux Fundamentals • Alibaba Cloud Certified Developer • E-Cell IIT Bombay National Entrepreneurship Challenge.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p>HAVE A PROJECT IN MIND?</p>
        <a href="mailto:pandeysuyash29@gmail.com">
          <span>Let&apos;s work together</span>
          <span className="contact-icon"><Mail size={28} /></span>
        </a>
        <div className="contact-details">
          <a href="tel:+918989100501">+91 89891 00501</a>
          <a href="mailto:pandeysuyash29@gmail.com">pandeysuyash29@gmail.com</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Suyash Pandey</p>
        <div className="socials">
          {socials.map(({ label, href, mark }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} key={label}>{mark}</a>
          ))}
        </div>
      </footer>
    </main>
  );
}