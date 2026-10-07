'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PillarItem } from '@/data/translations';

export default function PhilosophySection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="felsefe" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
          <span className="section-tag">{t.philosophy.tag}</span>
          <h2 className="section-title">
            {t.philosophy.title}
          </h2>
          <p className="lead-text" style={{ color: 'var(--gold-300)', fontWeight: 500, marginBottom: '14px' }}>
            {t.philosophy.subtitle}
          </p>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8 }}>
            {t.philosophy.description}
          </p>
        </div>

        {/* 2-Column Layout: Left Phi Interactive Spotlight, Right 4 Pillars */}
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left Column: Golden Ratio Card with Animated Spiral SVG */}
          <div
            className="glass-panel"
            style={{
              padding: '48px 40px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.85) 0%, rgba(8, 14, 26, 0.95) 100%)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Spiral Visual */}
            <div style={{ width: '220px', height: '220px', margin: '0 auto 28px' }}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="phiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E5AB" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#9E7719" />
                  </linearGradient>
                </defs>
                {/* Golden Spiral Geometric Boxes */}
                <rect x="20" y="20" width="160" height="100" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                <rect x="120" y="20" width="60" height="60" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                <rect x="120" y="80" width="40" height="40" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.6" fill="none" />

                {/* Spiral Arc */}
                <path
                  d="M 20 120 A 100 100 0 0 1 120 20 A 60 60 0 0 1 180 80 A 40 40 0 0 1 140 120 A 20 20 0 0 1 120 100 A 12 12 0 0 1 132 88"
                  stroke="url(#phiGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="132" cy="88" r="4" fill="#F3E5AB" />
              </svg>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <span className="badge" style={{ fontSize: '0.9rem', padding: '6px 16px', letterSpacing: '0.1em' }}>
                {t.philosophy.phiBadge}
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', color: '#FFFFFF' }}>
              {t.philosophy.phiTitle}
            </h3>

            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              {t.philosophy.phiDesc}
            </p>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {t.philosophy.pillars.map((pillar: PillarItem, idx: number) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    minWidth: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: 'var(--gold-300)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '6px' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
