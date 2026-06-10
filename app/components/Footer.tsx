'use client';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const exploreLinks = [
  { num: '01', label: 'HOME', section: 'home' },
  { num: '02', label: 'ABOUT', section: 'about' },
  { num: '03', label: 'EXPERIENCES', section: 'experiences' },
  { num: '04', label: 'PROJECTS', section: 'projects' },
  { num: '05', label: 'SPEAKING', section: 'speaking' },
  { num: '06', label: 'COMMUNITY', section: 'community' },
  { num: '07', label: 'CONTACT', section: 'contact' },
];

const resourceLinks = ['BLOG', 'EVENTS', 'PHOTOS', 'ARTICLES', 'NEWSLETTER'];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Let's Connect */}
          <div>
            <h4 className="footer-heading">LET&apos;S CONNECT</h4>
            <div className="footer-social">
              <button className="footer-social-icon">GH</button>
              <button className="footer-social-icon">in</button>
              <button className="footer-social-icon">𝕏</button>
              <button className="footer-social-icon">IG</button>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="footer-heading">EXPLORE</h4>
            <ul className="footer-links">
              {exploreLinks.map((link) => (
                <li key={link.section}>
                  <button
                    className="footer-link"
                    onClick={() => onNavigate(link.section)}
                  >
                    <span className="footer-link-num">{link.num}.</span>{' '}
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="footer-heading">RESOURCES</h4>
            <ul className="footer-links">
              {resourceLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="footer-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="footer-heading">SUBSCRIBE TO MY NEWSLETTER</h4>
            <div className="footer-newsletter">
              <input
                type="email"
                className="footer-input"
                placeholder="Your email"
              />
              <button className="btn-icon">↗</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2025 Zeeshan. All rights reserved.
          </span>
          <span className="footer-made">
            BUILT WITH PASSION <span className="footer-heart">❤</span>
          </span>
        </div>
      </div>
    </footer>
  );
}