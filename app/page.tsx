'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Speaking from './components/Speaking';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Section = 'home' | 'about' | 'experiences' | 'projects' | 'speaking' | 'community' | 'contact';

const sectionOrder: Section[] = ['home', 'about', 'experiences', 'projects', 'speaking', 'community', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousSection = useRef<Section>('home');

  const navigateTo = useCallback((section: string) => {
    const target = section as Section;
    if (target === activeSection || isTransitioning) return;

    setIsTransitioning(true);

    const currentIndex = sectionOrder.indexOf(activeSection);
    const targetIndex = sectionOrder.indexOf(target);
    const direction = targetIndex > currentIndex ? 1 : -1;

    const content = contentRef.current;
    if (!content) {
      setActiveSection(target);
      setIsTransitioning(false);
      return;
    }

    // Animate out
    const tl = gsap.timeline({
      onComplete: () => {
        previousSection.current = activeSection;
        setActiveSection(target);
      },
    });

    tl.to(content, {
      x: direction * -60,
      opacity: 0,
      duration: 0.35,
      ease: 'power3.in',
    });
  }, [activeSection, isTransitioning]);

  // Animate in after section change
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const currentIndex = sectionOrder.indexOf(activeSection);
    const prevIndex = sectionOrder.indexOf(previousSection.current);
    const direction = currentIndex > prevIndex ? 1 : -1;

    // Set starting position
    gsap.set(content, {
      x: direction * 60,
      opacity: 0,
    });

    // Animate in
    gsap.to(content, {
      x: 0,
      opacity: 1,
      duration: 0.45,
      ease: 'power3.out',
      delay: 0.05,
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onNavigate={navigateTo} />;
      case 'about':
        return <About />;
      case 'experiences':
        return <ExperienceTimeline />;
      case 'projects':
        return <Projects />;
      case 'speaking':
        return <Speaking />;
      case 'community':
        return <Community />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />
      <div className="section-wrapper">
        <div ref={contentRef} className="section-content">
          {renderSection()}
        </div>
      </div>
      <Footer onNavigate={navigateTo} />
    </>
  );
}