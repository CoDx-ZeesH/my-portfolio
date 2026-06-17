'use client';

import { useState, useRef, MouseEvent } from 'react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      className="about" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      {/* Glow Effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'opacity 0.3s ease',
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.08), transparent 40%)`
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-grid">
          <div className="about-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="section-label">ABOUT ME</span>
            
            <h2 className="about-headline">
              Hey, I&apos;m <span className="highlight">Zeeshan.</span>
            </h2>

            <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>I&apos;m a Computer Science student, community builder, event host, and someone who&apos;s constantly building things just to see what happens.</p>
              
              <p>Most of my time is split between writing code, experimenting with AI, organizing tech communities, and having conversations with interesting people. I enjoy turning ideas into products, whether that&apos;s an event management platform, an AI-powered system, a finance tracker, or something completely random that started as a late-night thought.</p>
              
              <p>What excites me most about technology isn&apos;t just building software, it&apos;s understanding why things work. I love breaking systems apart, spotting patterns, analyzing behavior, and figuring out how technology can solve real problems. That&apos;s what initially pulled me toward Artificial Intelligence, and it&apos;s a space I&apos;m constantly exploring through projects, research, and experimentation.</p>
              
              <p>Outside of development, I spend a lot of time working with communities. I&apos;ve hosted events, spoken on stage, coordinated hackathons, built partnerships, and helped create spaces where students can learn, connect, and grow together. Some of my favorite experiences have come from meeting people with completely different perspectives and learning something new from every conversation.</p>
              
              <p>I don&apos;t believe great opportunities appear out of nowhere. Most of them are created through curiosity, consistency, and saying yes to experiences before feeling fully ready.</p>
              
              <p>Currently, I&apos;m focused on building products, exploring AI systems, growing communities, and documenting the journey along the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
