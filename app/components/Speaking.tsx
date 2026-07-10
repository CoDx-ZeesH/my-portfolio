const events = [
  {
    day: '24',
    month: 'MAY',
    name: 'DevFest Lahore 2025',
    desc: 'In speaking on community building & leadership.',
    location: 'LAHORE, PAK',
  },
  {
    day: '07',
    month: 'JUN',
    name: 'HackSummit 2025',
    desc: 'Hosting a workshop on building in public.',
    location: 'ISLAMABAD, PAK',
  },
  {
    day: '21',
    month: 'JUN',
    name: 'CodeConnect Induction',
    desc: 'Onboarding new members into the community.',
    location: 'ONLINE',
  },
];

export default function Speaking() {
  return (
    <div className="speaking-section container">
      <div className="speaking-grid">
        {/* Left Column */}
        <div>
          <span className="section-label">SPEAKING &amp; HOSTING</span>
          <h2 className="speaking-headline">
            ON STAGE. ONLINE.
            <br />
            MAKING AN <span className="underline-accent">IMPACT</span>.
          </h2>

          <div className="photo-grid">
            {[1, 2, 3, 4].map((n) => (
              <div className="photo-grid-item" key={n}>
                <div className="img-placeholder" style={{ height: '100%' }}>
                  SPEAKING {n}
                </div>
              </div>
            ))}
          </div>

          <p className="body-text">
            I love speaking about technology, community, leadership and the
            journey of building things that matter.
          </p>

          <button className="btn btn-primary">VIEW SESSIONS ↗</button>
        </div>

        {/* Right Column */}
        <div>
          <span className="section-label">UPCOMING EVENTS</span>

          {events.map((event) => (
            <div className="event-card" key={event.name}>
              <div className="event-date">
                <span className="event-date-day">{event.day}</span>
                <span className="event-date-month">{event.month}</span>
              </div>
              <div className="event-info">
                <span className="event-name">{event.name}</span>
                <span className="event-desc">{event.desc}</span>
                <span className="event-location">{event.location}</span>
              </div>
              <a href="#" className="btn-icon ml-auto">↗</a>
            </div>
          ))}

          <button className="btn btn-primary">VIEW ALL EVENTS ↗</button>
        </div>
      </div>
    </div>
  );
}
