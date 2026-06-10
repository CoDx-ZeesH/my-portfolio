'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';

/* ─── project data ──────────────────────────── */
const projects = [
  {
    id: 'rakshaai',
    name: 'RakshaAI',
    tagline: 'Safety Reimagined with AI',
    desc: 'An AI-powered personal safety platform that uses real-time threat detection, smart alerts, and predictive analysis to keep communities safe.',
    type: 'AI / SAFETY',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'React Native'],
    year: '2025',
    color: '#22d3ee',
    icon: '🛡',
    features: [
      'Real-time threat detection via camera feeds',
      'Smart SOS alerts with location sharing',
      'Predictive risk analysis using ML models',
      'Community safety heatmaps',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'prakriti',
    name: 'Prakriti',
    tagline: 'Nature Meets Technology',
    desc: 'An environmental monitoring and awareness platform that tracks air quality, water pollution, and deforestation using satellite data and IoT sensors.',
    type: 'ENVIRONMENT / IOT',
    stack: ['Next.js', 'Python', 'Arduino', 'MapboxGL'],
    year: '2024',
    color: '#14b8a6',
    icon: '🌿',
    features: [
      'Real-time air quality monitoring',
      'Satellite-based deforestation tracking',
      'IoT sensor network integration',
      'Environmental impact reports',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'alohomora',
    name: 'Alohomora',
    tagline: 'Unlock Smart Access',
    desc: 'A biometric and AI-driven smart access control system for campuses, offices, and events. Facial recognition meets seamless authentication.',
    type: 'SECURITY / AI',
    stack: ['Python', 'OpenCV', 'Flask', 'React'],
    year: '2024',
    color: '#a78bfa',
    icon: '🔐',
    features: [
      'Facial recognition-based entry system',
      'Multi-factor authentication pipeline',
      'Real-time access logging dashboard',
      'Visitor management automation',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'deepfake',
    name: 'Deepfake Detection',
    tagline: 'Truth in Every Frame',
    desc: 'A deep learning model that detects manipulated media — deepfake videos, altered images, and synthetic audio — with high accuracy.',
    type: 'ML / RESEARCH',
    stack: ['PyTorch', 'OpenCV', 'Streamlit', 'ONNX'],
    year: '2025',
    color: '#ef4444',
    icon: '◎',
    features: [
      'Video frame-level deepfake analysis',
      'Audio authenticity verification',
      'Confidence scoring with explainability',
      'Browser extension for media verification',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'plantid',
    name: 'Plant Identifier',
    tagline: 'Identify Any Plant Instantly',
    desc: 'A mobile-first AI tool that identifies plant species from photos, provides care tips, and detects plant diseases using computer vision.',
    type: 'AI / MOBILE',
    stack: ['React Native', 'TensorFlow Lite', 'Node.js', 'MongoDB'],
    year: '2024',
    color: '#22c55e',
    icon: '🌱',
    features: [
      'Instant plant species identification',
      'Disease detection and care recommendations',
      'Offline-capable with TFLite models',
      'Community-driven plant database',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 'proctoring',
    name: 'Live Proctoring',
    tagline: 'Fair Exams, Smart Monitoring',
    desc: 'An AI-powered exam proctoring system with real-time face tracking, browser lockdown, and anomaly detection for secure online assessments.',
    type: 'EDTECH / AI',
    stack: ['Next.js', 'WebRTC', 'TensorFlow.js', 'PostgreSQL'],
    year: '2025',
    color: '#3b82f6',
    icon: '◉',
    features: [
      'Real-time face and gaze tracking',
      'Browser lockdown and tab-switch detection',
      'Automated anomaly flagging',
      'Instructor review dashboard',
    ],
    github: '#',
    live: '#',
  },
];

type Project = (typeof projects)[0];

/* ─── project visual panel ───────────────────── */
function ProjectVisual({
  project,
  index,
  parallaxY,
  isInView,
}: {
  project: Project;
  index: number;
  parallaxY: ReturnType<typeof useTransform<number, number>>;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="proj-card__visual"
      style={{ '--proj-accent': project.color } as React.CSSProperties}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="proj-card__visual-bg">
        <motion.div className="proj-card__visual-shapes" style={{ y: parallaxY }}>
          <div className="proj-card__visual-block proj-card__visual-block--1" />
          <div className="proj-card__visual-block proj-card__visual-block--2" />
          <div className="proj-card__visual-block proj-card__visual-block--3" />
        </motion.div>
      </div>
      <span className="proj-card__visual-num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="proj-card__visual-icon">{project.icon}</span>
      <span className="proj-card__visual-type">{project.type}</span>
    </motion.div>
  );
}

/* ─── featured project card ──────────────────── */
function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (id: string) => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-12%' });
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <article
      ref={cardRef}
      className={`proj-card ${isLeft ? 'proj-card--left' : 'proj-card--right'}`}
    >
      <motion.div
        className="proj-card__shell"
        style={{ '--proj-accent': project.color } as React.CSSProperties}
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 28 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 150, damping: 24, delay: 0.08 }}
        whileHover={{ y: -5 }}
      >
        <div className={`proj-card__layout ${isLeft ? '' : 'proj-card__layout--reverse'}`}>
          <ProjectVisual project={project} index={index} parallaxY={parallaxY} isInView={isInView} />

          <div className="proj-card__content">
            <motion.span
              className="proj-card__year"
              style={{ color: project.color, borderColor: `${project.color}45` }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
            >
              {project.year}
            </motion.span>

            <motion.h3
              className="proj-card__name"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {project.name}
            </motion.h3>

            <motion.p
              className="proj-card__tagline"
              style={{ color: project.color }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.34 }}
            >
              {project.tagline}
            </motion.p>

            <motion.p
              className="proj-card__desc"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.38 }}
            >
              {project.desc}
            </motion.p>

            <motion.div
              className="proj-card__stack"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.42 }}
            >
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="proj-card__stack-tag"
                  style={{ borderColor: `${project.color}35` }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.button
              type="button"
              className="proj-card__cta"
              style={{ borderColor: `${project.color}50`, color: project.color }}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{
                borderColor: project.color,
                boxShadow: `4px 4px 0 ${project.color}30`,
                x: 4,
              }}
              onClick={() => onSelect(project.id)}
            >
              EXPLORE PROJECT <span className="arrow-icon">↗</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

/* ─── fullscreen detail panel ──────────────────── */
function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        className="proj-detail__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      <motion.div
        className="proj-detail"
        style={{ '--proj-accent': project.color } as React.CSSProperties}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 28 }}
      >
        <motion.div
          className="proj-detail__accent"
          style={{ background: project.color }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />

        <button type="button" className="proj-detail__close" onClick={onClose} aria-label="Close project">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="proj-detail__inner">
          <span className="proj-detail__type" style={{ color: project.color, borderColor: `${project.color}45` }}>
            {project.type}
          </span>
          <h2 className="proj-detail__title">{project.name}</h2>
          <p className="proj-detail__tagline" style={{ color: project.color }}>{project.tagline}</p>
          <p className="proj-detail__desc">{project.desc}</p>

          <div className="proj-detail__meta">
            <div className="proj-detail__meta-item">
              <span className="proj-detail__meta-label">YEAR</span>
              <span className="proj-detail__meta-value">{project.year}</span>
            </div>
            <div className="proj-detail__meta-item">
              <span className="proj-detail__meta-label">CATEGORY</span>
              <span className="proj-detail__meta-value" style={{ color: project.color }}>{project.type}</span>
            </div>
          </div>

          <div className="proj-detail__section">
            <span className="proj-detail__section-label">TECH STACK</span>
            <div className="proj-detail__tags">
              {project.stack.map((t) => (
                <span key={t} className="proj-detail__tag" style={{ borderColor: `${project.color}40` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="proj-detail__section">
            <span className="proj-detail__section-label">KEY FEATURES</span>
            <ul className="proj-detail__features">
              {project.features.map((f) => (
                <li key={f} className="proj-detail__feature">
                  <span className="proj-detail__feature-mark" style={{ background: project.color }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="proj-detail__actions">
            <a
              href={project.github}
              className="proj-detail__btn proj-detail__btn--primary"
              style={{ background: project.color, borderColor: project.color }}
            >
              SOURCE CODE ↗
            </a>
            <a
              href={project.live}
              className="proj-detail__btn proj-detail__btn--outline"
              style={{ borderColor: `${project.color}60`, color: project.color }}
            >
              LIVE DEMO ↗
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ─── main component ─────────────────────────── */
export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setSelectedId(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  return (
    <section className="proj-section">
      <div className="container">
        <div className="proj-section__header">
          <div className="proj-section__header-left">
            <span className="section-label">SELECTED WORK</span>
            <h2 className="proj-section__title">
              PROJECTS
              <br />
              THAT <span className="proj-section__title-accent">SHIP.</span>
            </h2>
          </div>
          <p className="proj-section__subtitle">
            Featured builds across AI, security, and impact — each one engineered to solve real problems.
          </p>
        </div>

        <div className="proj-showcase">
          <div className="proj-showcase__rail" aria-hidden="true">
            <div className="proj-showcase__rail-line" />
          </div>

          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectDetail project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
