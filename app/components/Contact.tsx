export default function Contact() {
  return (
    <div className="contact-section container" style={{ paddingBottom: '4rem' }}>
      <div className="contact-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="contact-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <span className="section-label">LET&apos;S CONNECT</span>
          
          <p className="body-text">
            Whether it&apos;s building products, hosting events, discussing AI, exploring new ideas, or simply having an interesting conversation, my inbox is always open.
          </p>
          <p className="body-text">
            I&apos;m always excited to connect with builders, developers, founders, students, community leaders, and anyone curious enough to create something meaningful.
          </p>

      
        </div>

        <div className="contact-right" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {/* GitHub */}
          <a href="https://github.com/CoDx-ZeesH" target="_blank" rel="noopener noreferrer" className="contact-link-card glow-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.75rem', textDecoration: 'none', color: 'inherit', transition: 'var(--transition-base)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              <span>🐙</span> GitHub
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Explore my projects, experiments, and open-source work.</p>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mdzeeshandev/" target="_blank" rel="noopener noreferrer" className="contact-link-card glow-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.75rem', textDecoration: 'none', color: 'inherit', transition: 'var(--transition-base)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              <span>💼</span> LinkedIn
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Professional updates, community work, and career journey.</p>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/uf.zeebot/" target="_blank" rel="noopener noreferrer" className="contact-link-card glow-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.75rem', textDecoration: 'none', color: 'inherit', transition: 'var(--transition-base)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              <span>📸</span> Instagram
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Behind the scenes, events, thoughts, and daily experiments.</p>
          </a>

          {/* Email */}
          <a href="mailto:mohammad.zeeshan.tech@gmail.com" className="contact-link-card glow-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.75rem', textDecoration: 'none', color: 'inherit', transition: 'var(--transition-base)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              <span>✉️</span> Email
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}> 
              mohammad.zeeshan.tech
              @gmail.com</p>
          </a>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'left' }}>
            <h2 className="about-headline" style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              LET&apos;S BUILD SOMETHING <span className="highlight">INTERESTING</span> TOGETHER.
            </h2>
        </div>
      </div>
    </div>
  );
}
