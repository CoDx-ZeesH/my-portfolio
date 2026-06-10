const communityData = [
  {
    name: 'Google Developer Groups',
    role: 'ORGANIZER',
    icon: '🔷',
    desc: 'Organizing tech events, workshops, and hackathons for the local developer community.',
  },
  {
    name: 'CodeConnect Community',
    role: 'FOUNDER & LEAD',
    icon: '💻',
    desc: 'Built a thriving developer community focused on learning, collaboration and real-world projects.',
  },
  {
    name: 'Major League Hacking',
    role: 'FELLOW',
    icon: '🏆',
    desc: 'Part of the global hacker community, participating in hackathons and building innovative solutions.',
  },
  {
    name: 'GDSC (Google DSC)',
    role: 'CORE TEAM',
    icon: '🎯',
    desc: 'Contributing to student developer communities through workshops, study jams and tech talks.',
  },
  {
    name: 'Open Source Pakistan',
    role: 'CONTRIBUTOR',
    icon: '🌐',
    desc: 'Contributing to open source projects and advocating for the open source culture in Pakistan.',
  },
  {
    name: 'Tech Events Pakistan',
    role: 'VOLUNTEER',
    icon: '🎪',
    desc: 'Volunteering at major tech events, conferences and meetups across Pakistan.',
  },
];

export default function Community() {
  return (
    <div className="community-section container">
      <span className="section-label">COMMUNITY</span>
      <h2 className="display-md mb-xl">BUILDING BRIDGES. CONNECTING PEOPLE.</h2>

      <div className="grid-3">
        {communityData.map((item) => (
          <div key={item.name} className="community-card">
            <div className="community-icon">{item.icon}</div>
            <span className="community-role">{item.role}</span>
            <h3 className="community-name">{item.name}</h3>
            <p className="community-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
