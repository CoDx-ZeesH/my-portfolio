'use client';

import Image from 'next/image'
import profilePic from '../assets/pfp.jpg'

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-main">
          {/* Left Column */}
          <div className="hero-left">
            <p className="hero-roles">
              COMMUNITY BUILDER · SPEAKER · DEVELOPER · EXPLORER
            </p>
            <h1 className="hero-title">
              BUILDING
              <br />
              <span className="accent">PRODUCTS.</span>
              <br />
              GROWING
              <br />
              <span className="accent">COMMUNITIES.</span>
            </h1>

            <p className="hero-subtitle">
              I bring people together, build things that matter and explore ideas
              that create real world impact.
            </p>

            <div className="hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => onNavigate('about')}
              >
                EXPLORE MY JOURNEY ↗
              </button>
              <button
                className="btn btn-outline"
                onClick={() => onNavigate('projects')}
              >
                VIEW MY WORK ↗
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-right">

            <div className="hero-image-container">
              <Image
              src={profilePic}
              alt="Picture of the author"
      // width and height are automatically provided for local imports
    />

              <div className="hero-tags">
                <span className="tag">ORGANIZER</span>
                <span className="tag">SPEAKER</span>
                <span className="tag">LEARNER</span>
                <span className="tag">BUILDER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="hero-stats">
          <div className="stat-block">
            <span className="stat-number">30+</span>
            <span className="stat-label">EVENTS ORGANIZED</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">10K+</span>
            <span className="stat-label">PEOPLE IMPACTED</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">25+</span>
            <span className="stat-label">COMMUNITIES COLLABORATED</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">5+</span>
            <span className="stat-label">COUNTRIES CONNECTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}