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
  MotionStyle,
  Variants,
} from 'framer-motion';

/* ─── project data ──────────────────────────────────── */
const PROJECTS = [
  {
    id: 'upai-space',
    name: 'UPAI Space',
    tagline: 'Community Platform',
    shortDesc: 'A centralized environment for community engagement and collaborative learning.',
    desc: 'UPAI Space is a community-driven platform designed to bring together AI enthusiasts, builders, students, researchers, and innovators. The platform serves as a collaborative ecosystem where members can learn, network, share knowledge, participate in discussions, and contribute to the growth of the AI community.',
    type: 'COMMUNITY / AI',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    year: '2026',
    accent: '#22d3ee',
    icon: '🚀',
    features: [
      'Community networking and engagement',
      'Knowledge sharing ecosystem',
      'Discussion forums and collaboration channels',
      'Event participation and announcements',
      'Resource sharing and learning opportunities',
    ],
    problem: 'AI communities are often fragmented across multiple platforms, making it difficult for members to collaborate effectively, discover opportunities, and engage in meaningful discussions.',
    solution: 'UPAI Space provides a centralized environment for community engagement, knowledge sharing, networking, and collaborative learning among AI enthusiasts.',
    metrics: [{ label: 'Status', value: 'Active' }],
    github: 'https://github.com/CoDx-ZeesH/UPAI',
    live: 'https://upai.space/',
  },
  {
    id: 'kanpur-ai-space',
    name: 'Kanpur AI Space',
    tagline: 'Regional AI Community',
    shortDesc: 'A regional AI community initiative focused on connecting local AI enthusiasts.',
    desc: 'Kanpur AI Space is a regional AI community initiative focused on connecting students, professionals, researchers, and entrepreneurs interested in Artificial Intelligence. The platform encourages local innovation, collaboration, education, and community building around AI technologies.',
    type: 'COMMUNITY / AI',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    year: '2026',
    accent: '#14b8a6',
    icon: '🌐',
    features: [
      'Local AI community building',
      'Workshops and knowledge sessions',
      'Networking opportunities',
      'Mentorship programs',
      'Project showcases',
      'Community-driven discussions',
    ],
    problem: 'Many aspiring AI practitioners lack access to local communities where they can learn, collaborate, and find mentorship opportunities.',
    solution: 'Kanpur AI Space provides a dedicated ecosystem for AI enthusiasts to connect, learn, build projects, attend events, and share knowledge.',
    metrics: [{ label: 'Status', value: 'Active' }],
    github: 'https://github.com/CoDx-ZeesH/KanpurAISpace',
    live: 'https://kanpurai.space/',
  },
  {
    id: 'rsvp',
    name: 'RSVP Event Management',
    tagline: 'Event Management Platform',
    shortDesc: 'A comprehensive event management platform for seamless event coordination.',
    desc: 'RSVP is a comprehensive event management platform designed to streamline event registrations, attendee management, communication, and event coordination. It helps organizers efficiently manage events while providing a seamless experience for participants.',
    type: 'PLATFORM / WEB',
    stack: ['Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Supabase'],
    year: '2026',
    accent: '#a78bfa',
    icon: '📅',
    features: [
      'Online event registration',
      'RSVP tracking and management',
      'Attendee database management',
      'Automated confirmations and notifications',
      'Event analytics and reporting',
      'Organizer dashboard',
    ],
    problem: 'Manual event registration and attendee tracking processes often lead to inefficiencies, communication gaps, and operational challenges.',
    solution: 'The RSVP platform automates event registration, attendee management, communication workflows, and event tracking through a centralized management system.',
    metrics: [{ label: 'Status', value: 'Completed' }],
    github: 'https://github.com/CoDx-ZeesH',
    live: 'https://rsvp.kanpurai.space/',
  },
  {
    id: 'certverify',
    name: 'CertVerify',
    tagline: 'Certificate Generation & Automation',
    shortDesc: 'Automated certificate generation and verification platform.',
    desc: 'CertVerify is an automated certificate generation and verification platform that enables organizations to create, distribute, and validate certificates efficiently. The system reduces manual effort while ensuring authenticity and reliability.',
    type: 'AUTOMATION / PLATFORM',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    year: '2026',
    accent: '#f59e0b',
    icon: '📜',
    features: [
      'Automated certificate generation',
      'Bulk certificate issuance',
      'Digital certificate verification',
      'Secure validation mechanisms',
      'Certificate management dashboard',
      'Automated workflows and distribution',
    ],
    problem: 'Traditional certificate generation and verification processes are time-consuming, prone to errors, and difficult to scale.',
    solution: 'CertVerify automates certificate creation, issuance, verification, and management, allowing organizations to generate certificates at scale while maintaining credibility.',
    metrics: [{ label: 'Status', value: 'Completed' }],
    github: 'https://github.com/CoDx-ZeesH/certverify',
    live: 'javascript:void(0)',
  },
  {
    id: 'nexus-os',
    name: 'Nexus OS',
    tagline: 'AI Operating System',
    shortDesc: 'An intelligent operating ecosystem unifying productivity, automation, and AI.',
    desc: 'Nexus OS is an intelligent operating ecosystem currently under development that aims to unify productivity, automation, AI agents, workflows, and digital tools into a single integrated platform. The goal is to create a centralized environment where users can manage tasks, workflows, knowledge, and AI-powered operations seamlessly.',
    type: 'OS / AI',
    stack: ['Python', 'PyTorch', 'Pydantic'],
    year: '2026',
    accent: '#22c55e',
    icon: '💻',
    features: [
      'AI-powered workflow automation',
      'Unified productivity workspace',
      'Intelligent task management',
      'Knowledge organization system',
      'Multi-tool integration',
      'AI assistant capabilities',
      'Custom automation workflows',
    ],
    problem: 'Users often rely on multiple disconnected tools for productivity, communication, automation, and information management, resulting in fragmented workflows and reduced efficiency.',
    solution: 'Nexus OS is being developed as a unified operating layer that connects tools, automates workflows, and leverages AI capabilities to streamline digital operations.',
    metrics: [{ label: 'Status', value: 'Development' }],
    github: 'https://github.com/CoDx-ZeesH/NexusOS',
    live: 'javascript:void(0)',
  },
  {
    id: 'rail-sanchalak',
    name: 'Rail Sanchalak',
    tagline: 'Railway Operations Management',
    shortDesc: 'A digital platform for managing railway-related operations and workflows.',
    desc: 'Rail Sanchalak is a railway operations and management solution designed to improve efficiency, coordination, and operational visibility across railway-related processes. The platform focuses on digital transformation and streamlined management of railway workflows.',
    type: 'OPERATIONS / MANAGEMENT',
    stack: ['React', 'Django', 'Python', 'JavaScript'],
    year: '2026',
    accent: '#3b82f6',
    icon: '🚆',
    features: [
      'Operations management',
      'Workflow monitoring',
      'Process digitization',
      'Data-driven insights',
      'Administrative dashboards',
      'Reporting and tracking systems',
    ],
    problem: 'Railway operations involve complex workflows that require improved coordination, visibility, and process management.',
    solution: 'Rail Sanchalak provides a centralized digital platform for managing railway-related operations, monitoring activities, and improving operational efficiency through technology-driven processes.',
    metrics: [{ label: 'Status', value: 'Active' }],
    github: 'https://github.com/CoDx-ZeesH/Rail-Sanchalak',
    live: 'javascript:void(0)',
  },
  {
    id: 'optifi',
    name: 'Optifi',
    tagline: 'Finance Management Platform',
    shortDesc: 'A centralized finance management system for tracking and optimizing finances.',
    desc: 'Optifi is a finance management platform designed to help individuals and organizations track, manage, and optimize their financial activities through intelligent insights, automation, and centralized financial monitoring.',
    type: 'FINANCE / PLATFORM',
    stack: ['React', 'Django', 'Python', 'JavaScript'],
    year: '2026',
    accent: '#ec4899',
    icon: '💰',
    features: [
      'Financial dashboard and analytics',
      'Income and expense tracking',
      'Budget planning and management',
      'Financial reporting and insights',
      'Transaction monitoring',
      'Goal-based financial planning',
      'Automated financial workflows',
    ],
    problem: 'Managing finances across multiple accounts, expenses, budgets, and financial tools can be fragmented and time-consuming. Users often lack clear visibility into their financial health and spending patterns.',
    solution: 'Optifi provides a centralized finance management system that enables users to monitor financial activities, analyze spending behavior, manage budgets, and gain actionable insights for better financial planning and decision-making.',
    metrics: [{ label: 'Status', value: 'Active' }],
    github: 'https://github.com/CoDx-ZeesH/OptiFi',
    live: 'javascript:void(0)',
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
  const cardStyle: MotionStyle & { '--card-accent': string } = {
    x: springX,
    y: springY,
    rotateX: tiltY,
    rotateY: tiltX,
    '--card-accent': project.accent,
    zIndex: isSelected ? 50 : 5,
  };

  return (
    <motion.div
      className="fpc"
      layoutId={`fpc-${project.id}`}
      style={cardStyle}
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
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.15 },
    },
  };
  const itemVariants: Variants = {
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
  }, [paused, fieldW, fieldH]);

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
