'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface PageBannerProps {
  tag: string;
  title: string;
  description: string;
  currentPage: string;
}

export default function PageBanner({ tag, title, description, currentPage }: PageBannerProps) {
  const { t, isRTL } = useLanguage();

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 50px)',
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, #0A101D 0%, #060911 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at top, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb Schema Friendly Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '20px' }}>
          <ol
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '0.85rem',
            }}
          >
            <li>
              <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>
                {t.nav.home}
              </Link>
            </li>
            <li style={{ color: 'var(--gold-400)' }}>/</li>
            <li style={{ color: 'var(--gold-300)', fontWeight: 600 }}>{currentPage}</li>
          </ol>
        </nav>

        {/* Tag & Heading */}
        <span className="section-tag">{tag}</span>
        <h1
          className="section-title text-gold-gradient"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            marginBottom: '16px',
            maxWidth: '850px',
          }}
        >
          {title}
        </h1>
        <p className="lead-text" style={{ maxWidth: '720px', margin: 0, color: '#CBD5E1' }}>
          {description}
        </p>
      </div>
    </section>
  );
}
