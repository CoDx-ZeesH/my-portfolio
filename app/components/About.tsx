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

        {/* Journey Timeline */}
        <div className="about-timeline">
          <span className="section-label">JOURNEY TIMELINE</span>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <span className="timeline-year">2021</span>
              <span className="timeline-title">STARTED CODING</span>
              <span className="timeline-desc">
                The beginning of an amazing adventure.
              </span>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <span className="timeline-year">2022</span>
              <span className="timeline-title">JOINED COMMUNITIES</span>
              <span className="timeline-desc">
                Found my people and started contributing.
              </span>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <span className="timeline-year">2023</span>
              <span className="timeline-title">STARTED ORGANIZING</span>
              <span className="timeline-desc">
                From attendee to organizer &amp; host.
              </span>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <span className="timeline-year">2024</span>
              <span className="timeline-title">SPEAKING &amp; IMPACT</span>
              <span className="timeline-desc">
                Sharing ideas and inspiring others.
              </span>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <span className="timeline-year">2025+</span>
              <span className="timeline-title">BUILDING THE FUTURE</span>
              <span className="timeline-desc">
                More impact, bigger vision, endless growth.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
