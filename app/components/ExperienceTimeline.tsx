'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/* ─── experience data ────────────────────────── */
const experiences = [
  {
    id: 'codeday',
    num: '01',
    category: 'COMMUNITY',
    title: 'CODEDAY',
    role: 'Core Committee Member',
    duration: 'JAN 2024 — PRESENT',
    description:
      'Contributed to organizing tech events, managed operations and helped build an inclusive developer community.',
    contributions: [
      'Event Operations',
      'Community Building',
      'Volunteer Coordination',
      'Logistics Management',
    ],
    icon: '</>',
    color: '#22d3ee',
    image: '/experiences/codeday.png',
    link: '#',
  },
  {
    id: 'webwink',
    num: '02',
    category: 'COMMUNITY',
    title: 'WEBWINK',
    role: 'Open Source Contributor',
    duration: 'FEB 2024 — PRESENT',
    description:
      'Contributing to impactful open source projects and collaborating with amazing developers across the globe.',
    contributions: [
      'Open Source PRs',
      'Code Reviews',
      'Documentation',
      'Global Collaboration',
    ],
    icon: '✱',
    color: '#a78bfa',
    image: '/experiences/webwink.png',
    link: '#',
  },
  {
    id: 'hacksummit',
    num: '03',
    category: 'EVENT',
    title: 'HACKSUMMIT 2025',
    role: 'Host & Organizer',
    duration: 'APR 2025',
    description:
      'Hosted a workshop on building in public and led sessions on product mindset and community growth.',
    contributions: [
      'Workshop Hosting',
      'Panel Moderation',
      'Community Growth',
      'Product Mindset',
    ],
    icon: '⚡',
    color: '#22d3ee',
    image: '/experiences/hacksummit.png',
    link: '#',
  },
  {
    id: 'speaking',
    num: '04',
    category: 'TALK',
    title: 'PUBLIC SPEAKING',
    role: 'Speaker',
    duration: 'MAY 2024 — PRESENT',
    description:
      'Spoken at various events, colleges and community meetups about tech, community and personal growth.',
    contributions: [
      'Conference Talks',
      'College Workshops',
      'Meetup Sessions',
      'Panel Discussions',
    ],
    icon: '🎤',
    color: '#a78bfa',
    image: '/experiences/speaking.png',
    link: '#',
  },
  {
    id: 'gdsc',
    num: '05',
    category: 'COMMUNITY',
    title: 'GDSC LEAD',
    role: 'Lead',
    duration: 'AUG 2024 — PRESENT',
    description:
      'Leading the community, mentoring students and creating opportunities to learn, build and grow together.',
    contributions: [
      'Community Leadership',
      'Student Mentoring',
      'Workshop Organizing',
      'Tech Talks',
    ],
    icon: '◇',
    color: '#14b8a6',
    image: '/experiences/gdsc.png',
    link: '#',
  },
  {
    id: 'codeconnect',
    num: '06',
    category: 'ACHIEVEMENT',
    title: 'CODE CONNECT INDUCTION',
    role: 'Core Team',
    duration: 'JUL 2024',
    description:
      'Onboarded and guided new members, helped them get started with their journey in the community.',
    contributions: [
      'Member Onboarding',
      'Team Coordination',
      'Community Building',
      'Knowledge Sharing',
    ],
    icon: '⊕',
    color: '#22d3ee',
    image: '/experiences/codeconnect.png',
    link: '#',
  },
  {
    id: 'mlsa',
    num: '07',
    category: 'PROGRAM',
    title: 'MICROSOFT LEARN',
    role: 'Student Ambassador',
    duration: 'SEP 2024 — PRESENT',
    description:
      'Representing Microsoft technologies on campus — hosting workshops, empowering student developers with Azure and AI tools.',
    contributions: [
      'Azure Workshops',
      'AI Training',
      'Campus Events',
      'Tech Advocacy',
    ],
    icon: '⬡',
    color: '#a78bfa',
    image: '/experiences/mlsa.png',
    link: '#',
  },
  {
    id: 'muskurahat',
    num: '08',
    category: 'SOCIAL IMPACT',
    title: 'MUSKURAHAT FOUNDATION',
    role: 'Volunteer & Tech Lead',
    duration: 'MAR 2024 — PRESENT',
    description:
      'Using technology for social good — building digital solutions that help underprivileged communities access education and resources.',
    contributions: [
      'Digital Platform',
      'Tech Solutions',
      'Volunteer Management',
      'Impact Tracking',
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
