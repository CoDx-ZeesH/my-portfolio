'use client';

import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { num: '01', label: 'HOME', section: 'home' },
  { num: '02', label: 'ABOUT', section: 'about' },
  { num: '03', label: 'EXPERIENCES', section: 'experiences' },
  { num: '04', label: 'PROJECTS', section: 'projects' },
  { num: '05', label: 'SPEAKING', section: 'speaking' },
  { num: '06', label: 'COMMUNITY', section: 'community' },
  { num: '07', label: 'CONTACT', section: 'contact' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: string) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="navbar" id="main-nav">
        <div className="navbar-inner">
          <button
            className="navbar-logo"
            onClick={() => handleNav('home')}
            aria-label="Go to home"
          >
            ZEESHAN
          </button>

          <div className="navbar-links">
            {navItems.map((item) => (
              <button
                key={item.section}
                className={`navbar-link ${activeSection === item.section ? 'navbar-link-active' : ''}`}
                onClick={() => handleNav(item.section)}
              >
                <span className="navbar-link-num">{item.num}.</span>
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="navbar-cta"
            onClick={() => handleNav('contact')}
          >
            LET'S CONNECT
            <span className="arrow-icon">↗</span>
          </button>

          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.section}
            className={`navbar-link ${activeSection === item.section ? 'navbar-link-active' : ''}`}
            onClick={() => handleNav(item.section)}
          >
            <span className="navbar-link-num">{item.num}.</span>
            {item.label}
          </button>
        ))}
        <button
          className="btn btn-primary w-full"
          onClick={() => handleNav('contact')}
          style={{ justifyContent: 'center', marginTop: '8px' }}
        >
          LET'S CONNECT
          <span className="arrow-icon">↗</span>
        </button>
      </div>
    </>
  );
}