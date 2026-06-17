'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/* ─── experience data ────────────────────────── */
const experiences = [
  {
    id: 'kanpur-ai',
    num: '01',
    category: 'COMMUNITY',
    title: 'KANPUR AI SPACE',
    role: 'Head of Community Relations & Partnerships',
    duration: 'SEP 2025 — PRESENT',
    description:
      'Leading community engagement, strategic partnerships, sponsorship outreach, and event operations for a growing AI-focused community in Kanpur.',
    contributions: [
      'Partnerships & Sponsorships',
      'Event Operations',
      'Community Building',
      'Public Speaking',
    ],
    icon: '✦',
    color: '#22d3ee',
    image: '/experiences/speaking.png',
    link: '#',
  },
  {
    id: 'upai',
    num: '02',
    category: 'PRODUCT',
    title: 'UPAI SPACE',
    role: 'Core Team Member',
    duration: 'SEP 2025 — PRESENT',
    description:
      'Contributing to product development, project management, and community initiatives for UPAI Space.',
    contributions: [
      'Product Development',
      'Project Management',
      'Community Operations',
      'Team Collaboration',
    ],
    icon: '⚡',
    color: '#a78bfa',
    image: '/experiences/codeconnect.png',
    link: '#',
  },
  {
    id: 'codeday-rm',
    num: '03',
    category: 'LEADERSHIP',
    title: 'CODEDAY',
    role: 'Regional Manager',
    duration: 'JAN 2025 — PRESENT',
    description:
      'Leading regional operations and supporting the execution of student-focused hackathons and developer events across multiple cities.',
    contributions: [
      'Team Management',
      'Event Operations',
      'Community Growth',
      'Volunteer Coordination',
    ],
    icon: '</>',
    color: '#22d3ee',
    image: '/experiences/codeday.png',
    link: '#',
  },
  {
    id: 'webwink',
    num: '04',
    category: 'DEVELOPMENT',
    title: 'WEB WINK',
    role: 'Frontend Web Developer',
    duration: 'JAN 2025 — PRESENT',
    description:
      'Developing and maintaining modern websites while collaborating with clients and teams to deliver responsive, user-friendly web experiences.',
    contributions: [
      'Frontend Development',
      'WordPress',
      'Web Design',
      'Client Collaboration',
    ],
    icon: '✱',
    color: '#14b8a6',
    image: '/experiences/webwink.png',
    link: '#',
  },
  {
    id: 'mlsa',
    num: '05',
    category: 'PROGRAM',
    title: 'MICROSOFT',
    role: 'Microsoft Learn Student Ambassador (Beta)',
    duration: 'FEB 2023 — JAN 2026',
    description:
      'Empowering students through technical workshops, mentorship, and community initiatives focused on cloud computing, AI, and security.',
    contributions: [
      'Technical Evangelism',
      'Mentorship',
      'Community Leadership',
      'Public Speaking',
    ],
    icon: '⬡',
    color: '#a78bfa',
    image: '/experiences/mlsa.png',
    link: '#',
  },
  {
    id: 'hackerabad',
    num: '06',
    category: 'COMMUNITY',
    title: 'HACKERABAD',
    role: 'Community Volunteer',
    duration: 'MAR 2023 — PRESENT',
    description:
      'Supporting one of India\'s leading technology communities through outreach, community engagement, content initiatives, and growth-focused operations.',
    contributions: [
      'Community Growth',
      'Outreach',
      'Content Strategy',
      'Event Support',
    ],
    icon: '◇',
    color: '#f59e0b',
    image: '/experiences/gdsc.png',
    link: '#',
  },
  {
    id: 'codeday-vol',
    num: '07',
    category: 'VOLUNTEER',
    title: 'CODEDAY',
    role: 'Volunteer',
    duration: 'JUN 2024 — JAN 2025',
    description:
      'Supported hackathons and student-focused events as a volunteer by assisting with event logistics and operations.',
    contributions: [
      'Volunteer Management',
      'Event Coordination',
      'Community Support',
      'Attendee Engagement',
    ],
    icon: '⊕',
    color: '#22d3ee',
    image: '/experiences/codeday.png',
    link: '#',
  },
  {
    id: 'instagram',
    num: '08',
    category: 'CONTENT',
    title: 'INSTAGRAM',
    role: 'Social Media Content Creator',
    duration: 'SEP 2025 — PRESENT',
    description:
      'Creating content focused on technology, personal growth, community building, events, and digital storytelling.',
    contributions: [
      'Content Creation',
      'Branding',
      'Storytelling',
      'Social Media Marketing',
    ],
    icon: '📸',
    color: '#a78bfa',
    image: '/experiences/speaking.png',
    link: '#',
  },
  {
    id: 'youtube',
    num: '09',
    category: 'CONTENT',
    title: 'YOUTUBE',
    role: 'Content Creator',
    duration: 'NOV 2020 — PRESENT',
    description:
      'Producing educational and community-focused content while experimenting with digital media, audience engagement, and content strategy.',
    contributions: [
      'Content Strategy',
      'Video Production',
      'Communication',
      'Digital Media',
    ],
    icon: '▶',
    color: '#ef4444',
    image: '/experiences/speaking.png',
    link: '#',
  },
  {
    id: 'muskurahat',
    num: '10',
    category: 'SOCIAL IMPACT',
    title: 'MUSKURAHAT FOUNDATION',
    role: 'Fundraising Intern',
    duration: 'JAN 2023 — FEB 2023',
    description:
      'Worked with the fundraising team to support social impact initiatives and donor outreach campaigns aimed at improving opportunities for underserved communities.',
    contributions: [
      'Fundraising',
      'Communication',
      'Research',
      'Campaign Management',
    ],
    icon: '♡',
    color: '#f59e0b',
    image: '/experiences/muskurahat.png',
    link: '#',
  },
];

type Experience = (typeof experiences)[0];

/* ─── small calendar SVG icon ───────────────── */
function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ─── single experience row ────────────────── */
function ExperienceRow({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const rowRef = useRef<HTMLElement>(null);
  const isInView = useInView(rowRef, { once: true, margin: '-10%' });
  const isTextLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  /* ── text panel ── */
  const textPanel = (
    <motion.div
      className="exp-row__text"
      initial={{ opacity: 0, x: isTextLeft ? -32 : 32 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 140, damping: 22, delay: 0.08 }}
    >
      <motion.span
        className="exp-row__num"
        style={{ color: experience.color, borderColor: `${experience.color}55` }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.05 }}
      >
        {experience.num}
      </motion.span>

      <motion.span
        className="exp-row__category"
        style={{ color: experience.color }}
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.12 }}
      >
        {experience.category}
      </motion.span>

      <motion.h3
        className="exp-row__title"
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.18 }}
      >
        {experience.title}
      </motion.h3>

      <motion.div
        className="exp-row__meta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.24 }}
      >
        <span className="exp-row__role-label">ROLE</span>
        <span className="exp-row__role-value">{experience.role}</span>
      </motion.div>

      <motion.div
        className="exp-row__duration"
        style={{ color: experience.color }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.28 }}
      >
        <CalendarIcon />
        <span>{experience.duration}</span>
      </motion.div>

      <motion.p
        className="exp-row__desc"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.34 }}
      >
        {experience.description}
      </motion.p>

      <motion.div
        className="exp-row__contributions"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <span className="exp-row__contributions-label">Key Contributions:</span>
        <div className="exp-row__contribution-tags">
          {experience.contributions.map((c) => (
            <span key={c} className="exp-row__contribution">
              • {c}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.a
        href={experience.link}
        className="exp-row__cta"
        style={{ borderColor: `${experience.color}40`, color: experience.color }}
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.46 }}
        whileHover={{
          borderColor: experience.color,
          boxShadow: `3px 3px 0 ${experience.color}30`,
          x: 2,
        }}
      >
        <span className="arrow-icon">↗</span>
      </motion.a>
    </motion.div>
  );

  /* ── image panel ── */
  const imagePanel = (
    <motion.div
      className="exp-row__image"
      initial={{ opacity: 0, x: isTextLeft ? 32 : -32 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 140, damping: 22, delay: 0.16 }}
    >
      <div className="exp-row__img-wrapper">
        <motion.img
          src={experience.image}
          alt={experience.title}
          className="exp-row__img"
          style={{ y: imageY }}
          loading="lazy"
        />
        <div className="exp-row__img-overlay" />
      </div>
    </motion.div>
  );

  /* ── timeline node ── */
  const nodePanel = (
    <div className="exp-row__node">
      <motion.div
        className="exp-row__node-icon"
        style={{
          borderColor: `${experience.color}55`,
          color: experience.color,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1, boxShadow: `0 0 20px ${experience.color}20` }
            : {}
        }
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
      >
        <span className="exp-row__node-icon-text">{experience.icon}</span>
      </motion.div>
    </div>
  );

  return (
    <article
      ref={rowRef}
      className={`exp-row ${isTextLeft ? 'exp-row--text-left' : 'exp-row--text-right'}`}
    >
      {isTextLeft ? (
        <>
          {textPanel}
          {nodePanel}
          {imagePanel}
        </>
      ) : (
        <>
          {imagePanel}
          {nodePanel}
          {textPanel}
        </>
      )}
    </article>
  );
}

/* ─── main timeline component ──────────────── */
export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const spineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="exp-section" ref={sectionRef}>
      <div className="container">
        {/* ── header ── */}
        <div className="exp-section__header">
          <div className="exp-section__header-left">
            <span className="section-label">JOURNEY TIMELINE</span>
            <h2 className="exp-section__title">
              EXPERIENCES.
              <br />
              THAT BUILT{' '}
              <span className="exp-section__title-accent">ME.</span>
            </h2>
          </div>
          <div className="exp-section__header-right">
            <div className="exp-section__subtitle-box">
              <p className="exp-section__subtitle">
                A timeline of communities, roles and opportunities that shaped
                my journey.
              </p>
            </div>
          </div>
        </div>

        {/* ── timeline ── */}
        <div className="exp-timeline">
          <div className="exp-timeline__spine">
            <div className="exp-timeline__spine-base" />
            <motion.div
              className="exp-timeline__spine-fill"
              style={{ height: spineHeight }}
            />
            <motion.div
              className="exp-timeline__spine-glow"
              style={{ height: spineHeight }}
            />
            <motion.div
              className="exp-timeline__spine-pulse"
              style={{ top: spineHeight }}
            />
          </div>

          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.id} experience={exp} index={i} />
          ))}
        </div>

        {/* ── CTA bar ── */}
        <motion.div
          className="exp-section__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          <div className="exp-section__cta-icon">📅</div>
          <div className="exp-section__cta-text">
            <span className="exp-section__cta-heading">
              WANT TO BE PART OF THESE MEMORIES?
            </span>
            <span
              className="exp-section__cta-sub"
              style={{ color: '#22d3ee' }}
            >
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER.
            </span>
          </div>
          <a href="#" className="btn btn-primary exp-section__cta-btn">
            LET&apos;S CONNECT <span className="arrow-icon">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
