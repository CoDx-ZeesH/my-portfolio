'use client';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        {/* Top Area */}
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label">ABOUT ME</span>

            <h2 className="about-headline">
              I&apos;M ALL ABOUT PEOPLE, PURPOSE &amp;{' '}
              <span className="highlight">PROGRESS.</span>
            </h2>

            <p className="body-text">
              A Computer Science student, community builder, and event organizer
              who loves turning ideas into real-world impact. I enjoy working at
              the intersection of technology, creativity and community.
            </p>

            <button className="btn btn-primary">KNOW MORE ↗</button>
          </div>
        </div>
      </div>
    </section>
  );
}
