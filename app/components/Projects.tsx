'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from 'framer-motion';

/* ─── project data ──────────────────────────────────── */
const PROJECTS = [
  {
    id: 'rakshaai',
    name: 'RakshaAI',
    tagline: 'Safety Reimagined with AI',
    shortDesc: 'AI-powered safety companion for real-time emergency response.',
    desc: 'An AI-powered personal safety platform that uses real-time threat detection, smart alerts, and predictive analysis to keep communities safe.',
    type: 'AI / SAFETY',
    stack: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
    year: '2025',
    accent: '#22d3ee',
    icon: '🛡',
    features: [
      'Real-time threat detection via camera feeds',
      'Smart SOS alerts with location sharing',
      'Predictive risk analysis using ML models',
      'Community safety heatmaps',
    ],
    problem: 'Personal safety tools are reactive. People need proactive AI-driven protection that can predict and prevent threats before they escalate.',
    solution: 'RakshaAI uses computer vision and machine learning to continuously monitor environments and provide instant alerts and emergency coordination.',
    metrics: [{ label: 'Response Time', value: '<2s' }, { label: 'Accuracy', value: '94%' }, { label: 'Users', value: '500+' }],
    github: '#',
    live: '#',
  },
  {
    id: 'prakriti',
    name: 'Prakriti',
    tagline: 'Nature Meets Technology',
    shortDesc: 'Environmental impact platform promoting sustainability through action & awareness.',
    desc: 'An environmental monitoring and awareness platform that tracks air quality, water pollution, and deforestation using satellite data and IoT sensors.',
    type: 'ENVIRONMENT / IOT',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Python'],
    year: '2024',
    accent: '#14b8a6',
    icon: '🌿',
    features: [
      'Real-time air quality monitoring',
      'Satellite-based deforestation tracking',
      'IoT sensor network integration',
      'Environmental impact reports',
    ],
    problem: 'Climate data is scattered and inaccessible to citizens. Communities lack tools to understand their local environmental impact.',
    solution: 'Prakriti aggregates satellite, IoT, and community data into a single actionable platform that drives real behavioral change.',
    metrics: [{ label: 'Data Points', value: '2M+' }, { label: 'Regions', value: '50+' }, { label: 'Accuracy', value: '97%' }],
    github: '#',
    live: '#',
  },
  {
    id: 'alohomora',
    name: 'Alohomora',
    tagline: 'Unlock Smart Access',
    shortDesc: 'Smart door access system using computer vision and real-time recognition.',
    desc: 'A biometric and AI-driven smart access control system for campuses, offices, and events. Facial recognition meets seamless authentication.',
    type: 'SECURITY / AI',
    stack: ['Python', 'OpenCV', 'YOLOv8', 'React'],
    year: '2024',
    accent: '#a78bfa',
    icon: '🔐',
    features: [
      'Facial recognition-based entry system',
      'Multi-factor authentication pipeline',
      'Real-time access logging dashboard',
      'Visitor management automation',
    ],
    problem: 'Traditional access control systems are slow, error-prone, and require physical credentials that can be lost or stolen.',
    solution: 'Alohomora uses advanced facial recognition to provide frictionless, secure access with real-time logging and anomaly detection.',
    metrics: [{ label: 'Auth Speed', value: '0.3s' }, { label: 'Accuracy', value: '99.2%' }, { label: 'Deployments', value: '12' }],
    github: '#',
    live: '#',
  },
  {
    id: 'deepfake',
    name: 'Deepfake Detection',
    tagline: 'Truth in Every Frame',
    shortDesc: 'Detects AI-generated deepfakes with high accuracy using deep learning models.',
    desc: 'A deep learning model that detects manipulated media — deepfake videos, altered images, and synthetic audio — with high accuracy.',
    type: 'ML / RESEARCH',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    year: '2025',
    accent: '#f59e0b',
    icon: '◎',
    features: [
      'Video frame-level deepfake analysis',
      'Audio authenticity verification',
      'Confidence scoring with explainability',
      'Browser extension for media verification',
    ],
    problem: 'Deepfake media is rapidly proliferating, eroding trust in digital media and enabling disinformation campaigns at scale.',
    solution: 'A multi-modal detection system that analyzes visual artifacts, audio inconsistencies, and temporal patterns to flag manipulated content.',
    metrics: [{ label: 'Detection Rate', value: '96%' }, { label: 'FPS', value: '30' }, { label: 'Model Size', value: '18MB' }],
    github: '#',
    live: '#',
  },
  {
    id: 'plantid',
    name: 'Plant Identifier',
    tagline: 'Identify Any Plant Instantly',
    shortDesc: 'Identify plants instantly using AI. Scan, learn and explore the green world.',
    desc: 'A mobile-first AI tool that identifies plant species from photos, provides care tips, and detects plant diseases using computer vision.',
    type: 'AI / MOBILE',
    stack: ['Flutter', 'TensorFlow Lite', 'Dart', 'Node.js'],
    year: '2024',
    accent: '#22c55e',
    icon: '🌱',
    features: [
      'Instant plant species identification',
      'Disease detection and care recommendations',
      'Offline-capable with TFLite models',
      'Community-driven plant database',
    ],
    problem: 'Millions of plant enthusiasts and farmers lack accessible tools to identify species and detect diseases before they spread.',
    solution: 'A lightweight on-device AI model delivers sub-second plant identification with expert care advice, even without internet.',
    metrics: [{ label: 'Plants ID\'d', value: '10K+' }, { label: 'Accuracy', value: '95%' }, { label: 'App Rating', value: '4.8★' }],
    github: '#',
    live: '#',
  },
  {
    id: 'proctoring',
    name: 'Live Proctoring',
    tagline: 'Fair Exams, Smart Monitoring',
    shortDesc: 'AI-based proctoring solution with real-time monitoring and anomaly detection.',
    desc: 'An AI-powered exam proctoring system with real-time face tracking, browser lockdown, and anomaly detection for secure online assessments.',
    type: 'EDTECH / AI',
    stack: ['Python', 'React', 'Face-API', 'WebRTC'],
    year: '2025',
    accent: '#3b82f6',
    icon: '◉',
    features: [
      'Real-time face and gaze tracking',
      'Browser lockdown and tab-switch detection',
      'Automated anomaly flagging',
      'Instructor review dashboard',
    ],
    problem: 'Remote exam integrity is impossible to maintain with traditional proctoring. Students cheat, administrators struggle with scale.',
    solution: 'A browser-native proctoring system using WebRTC and TensorFlow.js that monitors behavior in real-time without requiring external software.',
    metrics: [{ label: 'Exams Monitored', value: '2K+' }, { label: 'Anomaly Detect', value: '98%' }, { label: 'Latency', value: '<100ms' }],
    github: '#',
    live: '#',
  },
  {
    id: 'eventflow',
    name: 'EventFlow',
    tagline: 'Modern Event Management',
    shortDesc: 'Modern event management platform for communities and organizations.',
    desc: 'A full-featured event management platform that streamlines ticketing, attendee management, and community engagement for organizations.',
    type: 'PLATFORM / WEB',
    stack: ['Next.js', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    year: '2024',
    accent: '#f97316',
    icon: '⚡',
    features: [
      'Smart ticketing with QR code generation',
      'Real-time attendee check-in dashboard',
      'Automated email and notification campaigns',
      'Analytics and post-event reporting',
    ],
    problem: 'Event organizers juggle multiple disconnected tools for ticketing, communication, and analytics, leading to fragmented experiences.',
    solution: 'EventFlow provides a unified command center for event management — from creation to post-event analysis — in a single platform.',
    metrics: [{ label: 'Events Managed', value: '150+' }, { label: 'Attendees', value: '8K+' }, { label: 'Satisfaction', value: '4.9★' }],
    github: '#',
    live: '#',
  },
  {
    id: 'studysphere',
    name: 'StudySphere',
    tagline: 'Collaborative Learning Reimagined',
    shortDesc: 'Collaborative learning platform for students with smart tools and productivity features.',
    desc: 'A collaborative learning platform that connects students, enables shared note-taking, and provides AI-powered study assistance.',
    type: 'EDTECH / COMMUNITY',
    stack: ['React', 'Firebase', 'TailwindCSS', 'Node.js'],
    year: '2024',
    accent: '#ec4899',
    icon: '◈',
    features: [
      'Real-time collaborative note-taking',
      'AI-powered study plan generation',
      'Peer-to-peer flashcard sharing',
      'Progress tracking and analytics',
    ],
    problem: 'Students study in isolation, lacking tools that enable meaningful collaboration and personalized learning paths.',
    solution: 'StudySphere creates a connected learning ecosystem where AI and community combine to make studying more effective and engaging.',
    metrics: [{ label: 'Students', value: '3K+' }, { label: 'Notes Shared', value: '25K+' }, { label: 'Engagement', value: '+67%' }],
    github: '#',
    live: '#',
  },
] as const;

type Project = (typeof PROJECTS)[number];

/* ─── physics constants ─────────────────────────────── */
const CARD_W = 240;
const CARD_H = 170;
const SPEED_BASE = 0.4;
const BORDER_PAD = 24;
const SPRING_STIFF = 160;
const SPRING_DAMP = 22;

/* ─── helpers ───────────────────────────────────────── */
function randBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function initCard(index: number, fieldW: number, fieldH: number) {
  const cols = 4;
  const col = index % cols;
  const row = Math.floor(index / cols);
  const cellW = fieldW / cols;
  const cellH = fieldH / 2;
  const x = col * cellW + randBetween(BORDER_PAD, cellW - CARD_W - BORDER_PAD);
  const y = row * cellH + randBetween(BORDER_PAD, cellH - CARD_H - BORDER_PAD);
  const angle = Math.random() * Math.PI * 2;
  const speed = SPEED_BASE + Math.random() * 0.3;
  return {
    x: Math.max(BORDER_PAD, Math.min(fieldW - CARD_W - BORDER_PAD, x)),
    y: Math.max(BORDER_PAD, Math.min(fieldH - CARD_H - BORDER_PAD, y)),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
  };
}

/* ─── floating card component ───────────────────────── */
interface FloatingCardData {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface FloatCardProps {
  project: Project;
  index: number;
  pos: { x: number; y: number };
  isSelected: boolean;
  isFaded: boolean;
  onSelect: (id: string) => void;
}

function FloatCard({ project, index, pos, isSelected, isFaded, onSelect }: FloatCardProps) {
  const springX = useSpring(pos.x, { stiffness: SPRING_STIFF, damping: SPRING_DAMP });
  const springY = useSpring(pos.y, { stiffness: SPRING_STIFF, damping: SPRING_DAMP });

  useEffect(() => {
    springX.set(pos.x);
    springY.set(pos.y);
  }, [pos.x, pos.y, springX, springY]);

  const tiltX = useTransform(springX, [0, 1200], [-4, 4]);
  const tiltY = useTransform(springY, [0, 700], [4, -4]);

  return (
    <motion.div
      className="fpc"
      layoutId={`fpc-${project.id}`}
      style={{
        x: springX,
        y: springY,
        rotateX: tiltY,
        rotateY: tiltX,
        '--card-accent': project.accent,
        zIndex: isSelected ? 50 : 5,
      } as React.CSSProperties}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: isFaded ? 0.15 : 1,
        scale: isSelected ? 1.06 : 1,
        filter: isFaded ? 'blur(1px)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      whileHover={!isSelected ? {
        scale: 1.08,
        zIndex: 20,
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      } : {}}
      onClick={() => !isSelected && onSelect(project.id)}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.name} project`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(project.id); } }}
    >
      <div className="fpc__border-glow" />
      <div className="fpc__header">
        <span className="fpc__icon">{project.icon}</span>
        <span className="fpc__num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="fpc__name">{project.name}</h3>
      <div className="fpc__stack">
        {project.stack.slice(0, 3).map((t) => (
          <span key={t} className="fpc__stack-tag">{t}</span>
        ))}
      </div>
      <p className="fpc__desc">{project.shortDesc}</p>
      <div className="fpc__footer">
        <span className="fpc__type">{project.type}</span>
        <span className="fpc__link-icon" aria-hidden="true">↗</span>
      </div>
    </motion.div>
  );
}

/* ─── fullscreen detail view ─────────────────────────── */
function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.15 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 22 } },
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fpd__backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Expanding panel */}
      <motion.div
        className="fpd"
        layoutId={`fpc-${project.id}`}
        style={{ '--card-accent': project.accent } as React.CSSProperties}
        initial={{ borderRadius: '20px' }}
        animate={{ borderRadius: '0px' }}
        exit={{ borderRadius: '20px' }}
        transition={{ type: 'spring', stiffness: 280, damping: 30 }}
      >
        {/* Accent top bar */}
        <motion.div
          className="fpd__accent-bar"
          style={{ background: project.accent }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Close button */}
        <AnimatePresence mode="wait">
        <motion.button
          className="fpd__close"
          type="button"
          onClick={onClose}
          aria-label="Close project"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ delay: 0.25, type: 'spring', stiffness: 300, damping: 22 }}
          whileHover={{ rotate: 90, borderColor: project.accent, color: project.accent }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>
        </AnimatePresence>

        {/* Content */}
        <div className="fpd__scroll">
          <motion.div
            className="fpd__inner"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Header */}
            <motion.div className="fpd__header" variants={itemVariants}>
              <div className="fpd__header-meta">
                <span className="fpd__type-badge" style={{ color: project.accent, borderColor: `${project.accent}50` }}>
                  {project.type}
                </span>
                <span className="fpd__year">{project.year}</span>
              </div>
              <div className="fpd__icon-wrap" style={{ borderColor: `${project.accent}40`, background: `${project.accent}10` }}>
                <span className="fpd__icon">{project.icon}</span>
              </div>
              <h2 className="fpd__title">{project.name}</h2>
              <p className="fpd__tagline" style={{ color: project.accent }}>{project.tagline}</p>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="fpd__divider"
              style={{ background: `${project.accent}30` }}
              variants={itemVariants}
            />

            {/* Description */}
            <motion.div className="fpd__section" variants={itemVariants}>
              <span className="fpd__section-label">OVERVIEW</span>
              <p className="fpd__desc">{project.desc}</p>
            </motion.div>

            {/* Problem + Solution */}
            <motion.div className="fpd__grid-2" variants={itemVariants}>
              <div className="fpd__block" style={{ borderColor: `${project.accent}25` }}>
                <span className="fpd__block-label">PROBLEM</span>
                <p className="fpd__block-text">{project.problem}</p>
              </div>
              <div className="fpd__block" style={{ borderColor: `${project.accent}25` }}>
                <span className="fpd__block-label">SOLUTION</span>
                <p className="fpd__block-text">{project.solution}</p>
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div className="fpd__metrics" variants={itemVariants}>
              {project.metrics.map((m) => (
                <div key={m.label} className="fpd__metric" style={{ borderColor: `${project.accent}30` }}>
                  <span className="fpd__metric-value" style={{ color: project.accent }}>{m.value}</span>
                  <span className="fpd__metric-label">{m.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div className="fpd__section" variants={itemVariants}>
              <span className="fpd__section-label">TECH STACK</span>
              <div className="fpd__tags">
                {project.stack.map((t) => (
                  <span key={t} className="fpd__tag" style={{ borderColor: `${project.accent}40`, color: project.accent }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div className="fpd__section" variants={itemVariants}>
              <span className="fpd__section-label">KEY FEATURES</span>
              <ul className="fpd__features">
                {project.features.map((f, i) => (
                  <motion.li
                    key={f}
                    className="fpd__feature"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <span className="fpd__feature-dot" style={{ background: project.accent }} />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Actions */}
            <motion.div className="fpd__actions" variants={itemVariants}>
              <a
                href={project.github}
                className="fpd__btn fpd__btn--primary"
                style={{ background: project.accent, borderColor: project.accent }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" /></svg>
                SOURCE CODE
              </a>
              <a
                href={project.live}
                className="fpd__btn fpd__btn--outline"
                style={{ borderColor: `${project.accent}60`, color: project.accent }}
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE DEMO ↗
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

/* ─── physics engine hook ───────────────────────────── */
function usePhysics(
  fieldW: number,
  fieldH: number,
  count: number,
  paused: boolean
) {
  const stateRef = useRef<FloatingCardData[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number | null>(null);
  const initialized = useRef(false);

  // Initialize positions
  useEffect(() => {
    if (fieldW === 0 || fieldH === 0 || initialized.current) return;
    const cards: FloatingCardData[] = [];
    for (let i = 0; i < count; i++) {
      cards.push(initCard(i, fieldW, fieldH));
    }
    stateRef.current = cards;
    setPositions(cards.map((c) => ({ x: c.x, y: c.y })));
    initialized.current = true;
  }, [fieldW, fieldH, count]);

  // Animation loop
  useEffect(() => {
    if (!initialized.current || paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 3);
      lastTime = now;
      const cards = stateRef.current;
      const n = cards.length;

      for (let i = 0; i < n; i++) {
        const c = cards[i];
        c.x += c.vx * dt;
        c.y += c.vy * dt;

        // Bounce off borders
        if (c.x <= BORDER_PAD) { c.x = BORDER_PAD; c.vx = Math.abs(c.vx); }
        if (c.x >= fieldW - CARD_W - BORDER_PAD) { c.x = fieldW - CARD_W - BORDER_PAD; c.vx = -Math.abs(c.vx); }
        if (c.y <= BORDER_PAD) { c.y = BORDER_PAD; c.vy = Math.abs(c.vy); }
        if (c.y >= fieldH - CARD_H - BORDER_PAD) { c.y = fieldH - CARD_H - BORDER_PAD; c.vy = -Math.abs(c.vy); }

        // Collision detection with other cards
        for (let j = i + 1; j < n; j++) {
          const o = cards[j];
          const dx = o.x - c.x;
          const dy = o.y - c.y;
          const overlapX = CARD_W + 16 - Math.abs(dx);
          const overlapY = CARD_H + 16 - Math.abs(dy);

          if (overlapX > 0 && overlapY > 0) {
            // Elastic collision response
            if (overlapX < overlapY) {
              const sign = dx > 0 ? 1 : -1;
              const temp = c.vx;
              c.vx = o.vx * 0.8;
              o.vx = temp * 0.8;
              c.x -= sign * overlapX * 0.5;
              o.x += sign * overlapX * 0.5;
            } else {
              const sign = dy > 0 ? 1 : -1;
              const temp = c.vy;
              c.vy = o.vy * 0.8;
              o.vy = temp * 0.8;
              c.y -= sign * overlapY * 0.5;
              o.y += sign * overlapY * 0.5;
            }

            // Maintain minimum speed
            const minSpeed = SPEED_BASE * 0.5;
            if (Math.abs(c.vx) < minSpeed && Math.abs(c.vy) < minSpeed) {
              const angle = Math.random() * Math.PI * 2;
              c.vx = Math.cos(angle) * SPEED_BASE;
              c.vy = Math.sin(angle) * SPEED_BASE;
            }
            if (Math.abs(o.vx) < minSpeed && Math.abs(o.vy) < minSpeed) {
              const angle = Math.random() * Math.PI * 2;
              o.vx = Math.cos(angle) * SPEED_BASE;
              o.vy = Math.sin(angle) * SPEED_BASE;
            }
          }
        }
      }

      setPositions(cards.map((c) => ({ x: c.x, y: c.y })));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [paused, initialized.current]);

  return positions;
}

/* ─── main section ──────────────────────────────────── */
export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const [fieldSize, setFieldSize] = useState({ w: 0, h: 0 });

  const selectedProject = useMemo(
    () => PROJECTS.find((p) => p.id === selectedId) ?? null,
    [selectedId]
  );

  // Measure field
  useEffect(() => {
    const measure = () => {
      if (fieldRef.current) {
        setFieldSize({
          w: fieldRef.current.offsetWidth,
          h: fieldRef.current.offsetHeight,
        });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (fieldRef.current) ro.observe(fieldRef.current);
    return () => ro.disconnect();
  }, []);

  const positions = usePhysics(
    fieldSize.w,
    fieldSize.h,
    PROJECTS.length,
    !!selectedId
  );

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
    <section className="fp-section">
      {/* Section Header */}
      

      {/* Floating canvas */}
      <div className="fp-canvas">
        <div className="fp-header">
          <span className="section-label">FEATURED PROJECTS</span>
        </div>
        {/* Background grid lines */}
        <div className="fp-canvas__grid" aria-hidden="true" />

        {/* Watermark */}
        <div className="fp-canvas__watermark" aria-hidden="true">WORK</div>

        {/* The field where cards float */}
        <div className="fp-field" ref={fieldRef}>
          {positions.length > 0 && PROJECTS.map((project, i) => (
            <FloatCard
              key={project.id}
              project={project}
              index={i}
              pos={positions[i] ?? { x: 0, y: 0 }}
              isSelected={selectedId === project.id}
              isFaded={!!selectedId && selectedId !== project.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen detail */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectDetail project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
