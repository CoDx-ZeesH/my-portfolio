'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

/* ─── experience data ────────────────────────── */
const experiences = [
  {
    id: 'codeday',
    num: '01',
    category: 'COMMUNITY',
    title: 'CODEDAY',
    organization: 'CodeDay Hyderabad',
    role: 'Core Committee Member',
    duration: 'JAN 2024 — PRESENT',
    description:
      'Shaped Hyderabad\'s developer culture by organizing immersive hackathons, mentoring builders, and growing an inclusive tech community from the ground up.',
    highlights: [
      'Organized 10+ tech events reaching 500+ developers',
      'Built partnerships with 5+ tech organizations',
      'Mentored 30+ aspiring developers through hands-on workshops',
    ],
    icon: '</>',
    color: '#22d3ee',
    image: '/experiences/codeday.png',
    link: '#',
  },
  {
    id: 'mlsa',
    num: '02',
    category: 'PROGRAM',
    title: 'MICROSOFT LEARN',
    organization: 'Microsoft',
    role: 'Student Ambassador',
    duration: 'SEP 2024 — PRESENT',
    description:
      'Representing Microsoft technologies on campus — hosting workshops, empowering student developers with Azure and AI tools, and building the next generation of cloud-native builders.',
    highlights: [
      'Achieved Beta milestone in the MLSA program',
      'Hosted 6+ Microsoft-sponsored workshops',
      'Trained 150+ students on Azure fundamentals',
    ],
    icon: '⬡',
    color: '#a78bfa',
    image: '/experiences/mlsa.png',
    link: '#',
  },
  {
    id: 'hackerabad',
    num: '03',
    category: 'COMMUNITY',
    title: 'HACKERABAD',
    organization: 'Hackerabad',
    role: 'Community Contributor',
    duration: 'MAR 2024 — PRESENT',
    description:
      'Active contributor to Hyderabad\'s largest hacker community — collaborating on open initiatives, supporting hackathons, and fostering a culture of building in public.',
    highlights: [
      'Contributed to 5+ community-led hackathon initiatives',
      'Mentored first-time hackers at community events',
      'Helped grow active member engagement by 40%',
    ],
    icon: '⚡',
    color: '#14b8a6',
    image: '/experiences/hackerabad.png',
    link: '#',
  },
  {
    id: 'muskurahat',
    num: '04',
    category: 'SOCIAL IMPACT',
    title: 'MUSKURAHAT FOUNDATION',
    organization: 'Muskurahat Foundation',
    role: 'Volunteer & Tech Lead',
    duration: 'MAR 2024 — PRESENT',
    description:
      'Using technology for social good — building digital solutions that help underprivileged communities access education, resources, and opportunity.',
    highlights: [
      'Built digital platform serving 500+ beneficiaries',
      'Led tech team of 8 volunteers',
      'Automated donation and impact tracking systems',
    ],
    icon: '♡',
    color: '#f59e0b',
    image: '/experiences/muskurahat.png',
    link: '#',
  },
  {
    id: 'webwink',
    num: '05',
    category: 'COMMUNITY',
    title: 'WEBWINK',
    organization: 'WebWink',
    role: 'Open Source Contributor',
    duration: 'FEB 2024 — PRESENT',
    description:
      'Contributing to impactful open source projects and collaborating with developers across the globe to ship meaningful, production-grade software.',
    highlights: [
      'Contributed to 8+ open source repositories',
      'Collaborated with developers from 12+ countries',
      'Maintained documentation and onboarding guides',
    ],
    icon: '◇',
    color: '#3b82f6',
    image: '/experiences/webwink.png',
    link: '#',
  },
  {
    id: 'iitdelhi',
    num: '06',
    category: 'EVENT',
    title: 'IIT DELHI EVENTS',
    organization: 'IIT Delhi',
    role: 'Event Collaborator',
    duration: '2024 — 2025',
    description:
      'Collaborated on high-impact tech events at IIT Delhi — bridging student innovation with industry expertise through workshops, panels, and networking sessions.',
    highlights: [
      'Co-organized 3+ flagship campus tech events',
      'Facilitated 200+ student-industry connections',
      'Led technical workshop tracks on AI and cloud',
    ],
    icon: '◆',
    color: '#22d3ee',
    image: '/experiences/iitdelhi.png',
    link: '#',
  },
  {
    id: 'speaking',
    num: '07',
    category: 'TALK',
    title: 'PUBLIC SPEAKING',
    organization: 'Various Conferences & Meetups',
    role: 'Speaker',
    duration: 'MAY 2024 — PRESENT',
    description:
      'Delivering talks at conferences, colleges, and community meetups about technology, community building, and the mindset behind creating lasting impact.',
    highlights: [
      'Delivered 15+ talks at conferences and meetups',
      'Reached audiences of 2000+ across events',
      'Featured speaker at 3 national tech conferences',
    ],
    icon: '🎤',
    color: '#a78bfa',
    image: '/experiences/speaking.png',
    link: '#',
  },
  {
    id: 'leadership',
    num: '08',
    category: 'LEADERSHIP',
    title: 'COMMUNITY LEADERSHIP',
    organization: 'GDSC & Code Connect',
    role: 'Lead & Core Team',
    duration: 'AUG 2024 — PRESENT',
    description:
      'Leading developer communities, mentoring students, and creating structured pathways for learners to grow from beginners to confident builders.',
    highlights: [
      'Grew GDSC chapter from 50 to 300+ active members',
      'Designed onboarding curriculum for 100+ new members',
      'Launched mentorship program pairing 40+ students',
    ],
    icon: '⊕',
    color: '#14b8a6',
    image: '/experiences/leadership.png',
    link: '#',
  },
];

type Experience = (typeof experiences)[0];

/* ─── visual placeholder / image ─────────────── */
function ExperienceVisual({
  experience,
  imageY,
  isInView,
}: {
  experience: Experience;
  imageY: ReturnType<typeof useTransform<number, number>>;
  isInView: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      className="exp-card__visual"
      style={{ '--exp-accent': experience.color } as React.CSSProperties}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="exp-card__visual-bg">
        <div className="exp-card__visual-gradient" />
        <div className="exp-card__visual-grid" aria-hidden="true" />
        <motion.div className="exp-card__visual-parallax" style={{ y: imageY }}>
          {!imgFailed && (
            <img
              src={experience.image}
              alt=""
              className="exp-card__visual-img"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          )}
        </motion.div>
      </div>

      <div className="exp-card__visual-overlay" />
      <span className="exp-card__visual-watermark" aria-hidden="true">
        {experience.num}
      </span>
      <div className="exp-card__visual-icon" style={{ borderColor: `${experience.color}50` }}>
        {experience.icon}
      </div>
      <span className="exp-card__visual-label">CHAPTER {experience.num}</span>
    </motion.div>
  );
}

/* ─── single experience chapter card ─────────── */
function ExperienceCard({
  experience,
  index,
  onActive,
}: {
  experience: Experience;
  index: number;
  onActive: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: '-15%' });
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    if (isInView) onActive(index);
  }, [isInView, index, onActive]);

  return (
    <article
      ref={cardRef}
      className={`exp-chapter ${isLeft ? 'exp-chapter--left' : 'exp-chapter--right'}`}
      data-chapter={experience.num}
    >
      {/* spine connector */}
      <div className="exp-chapter__connector">
        <motion.div
          className="exp-chapter__connector-ring"
          style={{ borderColor: experience.color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.1 }}
        />
        <motion.div
          className="exp-chapter__connector-dot"
          style={{ borderColor: experience.color, boxShadow: `0 0 16px ${experience.color}60` }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.15 }}
        />
        <motion.div
          className="exp-chapter__connector-glow"
          style={{ background: experience.color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: [0, 0.7, 0.35], scale: [0.5, 1.4, 1] } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.div
          className={`exp-chapter__connector-trace ${isLeft ? 'exp-chapter__connector-trace--left' : 'exp-chapter__connector-trace--right'}`}
          style={{ background: `linear-gradient(90deg, ${experience.color}00, ${experience.color}80)` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* chapter number */}
      <motion.span
        className="exp-chapter__index"
        style={{ color: experience.color }}
        initial={{ opacity: 0, y: -12 }}
        animate={isInView ? { opacity: 0.35, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        aria-hidden="true"
      >
        {experience.num}
      </motion.span>

      {/* featured card */}
      <motion.div
        className="exp-chapter__card"
        style={{ '--exp-accent': experience.color } as React.CSSProperties}
        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 160, damping: 24, delay: 0.12 }}
        whileHover={{ y: -6 }}
      >
        <div className={`exp-chapter__layout ${isLeft ? '' : 'exp-chapter__layout--reverse'}`}>
          <ExperienceVisual experience={experience} imageY={imageY} isInView={isInView} />

          <div className="exp-chapter__details">
            <motion.span
              className="exp-chapter__category"
              style={{ color: experience.color, borderColor: `${experience.color}45` }}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.28 }}
            >
              {experience.category}
            </motion.span>

            <motion.h3
              className="exp-chapter__title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32 }}
            >
              {experience.title}
            </motion.h3>

            <motion.p
              className="exp-chapter__org"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.36 }}
            >
              {experience.organization}
            </motion.p>

            <motion.div
              className="exp-chapter__meta"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="exp-chapter__meta-item">
                <span className="exp-chapter__meta-label">ROLE</span>
                <span className="exp-chapter__meta-value">{experience.role}</span>
              </div>
              <div className="exp-chapter__meta-item">
                <span className="exp-chapter__meta-label">DURATION</span>
                <span className="exp-chapter__meta-value exp-chapter__meta-value--accent" style={{ color: experience.color }}>
                  {experience.duration}
                </span>
              </div>
            </motion.div>

            <motion.p
              className="exp-chapter__summary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.44 }}
            >
              {experience.description}
            </motion.p>

            <motion.ul
              className="exp-chapter__highlights"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.48 }}
            >
              {experience.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  className="exp-chapter__highlight"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.52 + i * 0.06 }}
                >
                  <span className="exp-chapter__highlight-mark" style={{ background: experience.color }} />
                  {h}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href={experience.link}
              className="exp-chapter__link btn"
              style={{ borderColor: `${experience.color}50`, color: experience.color }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              whileHover={{
                borderColor: experience.color,
                boxShadow: `4px 4px 0 ${experience.color}30`,
                x: 4,
              }}
            >
              VIEW DETAILS <span className="arrow-icon">↗</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

/* ─── main timeline component ──────────────── */
export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const spineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setScrollProgress(Math.round(v * 100));
  });

  return (
    <section className="exp-section" ref={sectionRef}>
      <div className="container">
        <div className="exp-section__header">
          <div className="exp-section__header-left">
            <span className="section-label">CAREER DOCUMENTARY</span>
            <h2 className="exp-section__title">
              CHAPTERS
              <br />
              THAT <span className="exp-section__title-accent">SHAPED</span>
              <br />
              MY PATH.
            </h2>
          </div>
          <div className="exp-section__header-right">
            <p className="exp-section__subtitle">
              Every role, community, and milestone — told as a featured chapter, not a bullet on a resume.
            </p>
            <div className="exp-section__progress" aria-label={`Timeline progress: ${scrollProgress}%`}>
              <span className="exp-section__progress-label">PROGRESS</span>
              <div className="exp-section__progress-track">
                <div
                  className="exp-section__progress-fill"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <span className="exp-section__progress-value">{String(activeIndex + 1).padStart(2, '0')} / {experiences.length}</span>
            </div>
          </div>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline__spine">
            <div className="exp-timeline__spine-base" />
            <motion.div className="exp-timeline__spine-fill" style={{ height: spineHeight }} />
            <motion.div className="exp-timeline__spine-glow" style={{ height: spineHeight }} />
            <motion.div
              className="exp-timeline__spine-pulse"
              style={{ top: spineHeight }}
            />
          </div>

          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={i}
              onActive={setActiveIndex}
            />
          ))}
        </div>

        <motion.div
          className="exp-section__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          <div className="exp-section__cta-icon">🚀</div>
          <div className="exp-section__cta-text">
            <span className="exp-section__cta-heading">WANT TO BE PART OF THE NEXT CHAPTER?</span>
            <span className="exp-section__cta-sub" style={{ color: '#22d3ee' }}>
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
