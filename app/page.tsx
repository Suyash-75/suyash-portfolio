'use client';

import React, { useEffect, useState } from 'react';
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
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-2"><span /> Available for opportunities</p>
          <h1 className="reveal reveal-3">Building digital<span>experiences.</span></h1>
          <div className="hero-bottom reveal reveal-4">
            <p>I&apos;m Suyash, a Full-Stack Developer crafting thoughtful products with clean code, robust systems, and interfaces that feel effortless.</p>
            <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={24} /></a>
          </div>
        </div>
        <div className="hero-art reveal reveal-3" aria-label="Developer profile">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-disc">
            <span className="disc-top">PORTFOLIO / 2026</span>
            <span className="initials">SP</span>
            <span className="disc-bottom">FULL-STACK DEVELOPER</span>
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
            <div className="education-year">CURRENT</div>
            <div>
              <p className="education-degree">Bachelor of Technology</p>
              <h3>Computer Science Engineering</h3>
              <p>Fourth-year undergraduate studies focused on software engineering, scalable systems, and modern web development.</p>
            </div>
            <ArrowUpRight size={24} />
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label"><p className="section-number">03 / ABOUT</p></div>
        <div className="about-copy">
          <h2>Code with purpose.<br />Design with feeling.</h2>
          <p>Fourth-year B.Tech Computer Science student focused on scalable full-stack applications, secure backend APIs, and modern interfaces. I enjoy turning complex problems into simple, reliable experiences.</p>
          <div className="skill-pills">
            {['Next.js', 'TypeScript', 'PostgreSQL', 'React', 'C++'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p>HAVE A PROJECT IN MIND?</p>
        <a href="https://www.linkedin.com/in/suyashpandey7/" target="_blank" rel="noopener noreferrer">
          <span>Let&apos;s work together</span>
          <span className="contact-icon"><Mail size={28} /></span>
        </a>
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