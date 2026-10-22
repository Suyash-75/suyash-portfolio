'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Unable to send your message');

      setStatus('success');
      setStatusMessage('Message sent successfully. I’ll get back to you soon.');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send your message');
    }
  }

  return (
    <main className="portfolio-shell page-shell">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/"><span className="brand-mark">SP</span><span>Suyash Pandey</span></Link>
        <div className="nav-links">
          <Link href="/work">Work</Link><Link href="/about">About</Link>
          <a className="nav-resume" href="/SUYASH%20RESUME%20LR.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} /></a>
        </div>
      </nav>

      <section className="contact-section inner-page">
        <p>HAVE A PROJECT IN MIND?</p>
        <div className="contact-layout">
          <div className="contact-intro">
            <h1>Let&apos;s work<br />together.</h1>
            <div className="contact-details">
              <a href="tel:+918989100501"><Phone size={16} />+91 89891 00501</a>
              <a href="mailto:pandeysuyash29@gmail.com"><Mail size={16} />pandeysuyash29@gmail.com</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required disabled={status === 'sending'} />

            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell me about your project..." rows={6} required disabled={status === 'sending'} />

            <button type="submit" disabled={status === 'sending'}>
              <span>{status === 'sending' ? 'Sending...' : 'Send message'}</span>
              <Send size={18} />
            </button>

            {statusMessage && <p className={`form-status ${status}`} role="status">{statusMessage}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}