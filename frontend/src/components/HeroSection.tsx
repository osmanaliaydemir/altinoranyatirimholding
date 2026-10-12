'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function HeroSection() {
  const { t, isRTL, lang } = useLanguage();
  const { isLight } = useTheme();

  return (
    <section
      id="anasayfa"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 20px)',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Cinematic Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/headquarters.jpg"
          alt="Altınoran Yatırım Holding Yönetim Ofisi Ataşehir İstanbul"
          fill
          priority
          sizes="100vw"
          className="hero-hq-bg-img"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 35%',
            filter: isLight ? 'brightness(0.92) contrast(1.02)' : 'brightness(0.55) contrast(1.1)',
            transition: 'filter 0.4s ease',
          }}
        />
        {/* Layered gradients for crystal-clear readability */}
        <div
          className="hero-overlay-horizontal"
          style={{
            position: 'absolute',
            inset: 0,
            background: isLight
              ? isRTL
                ? 'linear-gradient(270deg, rgba(248, 250, 252, 0.96) 0%, rgba(248, 250, 252, 0.88) 55%, rgba(248, 250, 252, 0.35) 100%)'
                : 'linear-gradient(90deg, rgba(248, 250, 252, 0.96) 0%, rgba(248, 250, 252, 0.88) 55%, rgba(248, 250, 252, 0.35) 100%)'
              : isRTL
                ? 'linear-gradient(270deg, rgba(6, 9, 17, 0.95) 0%, rgba(6, 9, 17, 0.85) 50%, rgba(6, 9, 17, 0.35) 100%)'
                : 'linear-gradient(90deg, rgba(6, 9, 17, 0.95) 0%, rgba(6, 9, 17, 0.85) 50%, rgba(6, 9, 17, 0.35) 100%)',
            transition: 'background 0.4s ease',
          }}
        />
        <div
          className="hero-overlay-vertical"
          style={{
            position: 'absolute',
            inset: 0,
            background: isLight
              ? 'linear-gradient(180deg, rgba(248, 250, 252, 0.6) 0%, transparent 40%, rgba(248, 250, 252, 0.85) 75%, #F8FAFC 100%)'
              : 'linear-gradient(180deg, rgba(6, 9, 17, 0.4) 0%, transparent 40%, rgba(6, 9, 17, 0.8) 80%, #060911 100%)',
            transition: 'background 0.4s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isLight
              ? 'radial-gradient(circle at 75% 45%, rgba(184, 134, 11, 0.12) 0%, transparent 60%)'
              : 'radial-gradient(circle at 75% 45%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Decorative Golden Ratio Spiral Geometric SVG Watermark */}
      <div
        style={{
          position: 'absolute',
          right: isRTL ? 'auto' : '-5%',
          left: isRTL ? '-5%' : 'auto',
          top: '20%',
          width: '560px',
          height: '560px',
          pointerEvents: 'none',
          opacity: 0.08,
          zIndex: 1,
        }}
        className="hero-golden-spiral-watermark"
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="140" stroke="#D4AF37" strokeWidth="1.2" />
          <path
            d="M 200 60 A 140 140 0 0 1 340 200 A 90 90 0 0 1 250 290 A 60 60 0 0 1 190 230 A 38 38 0 0 1 228 192 A 24 24 0 0 1 252 216"
            stroke="#F3E5AB"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '920px' }}>
          {/* Golden Pill Badge */}
          <div style={{ marginBottom: '22px' }}>
            <span
              className="badge hero-live-badge"
              style={{
                padding: '8px 18px',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span className="live-status-dot" />
              {t.hero.badge}
            </span>
          </div>

          {/* Main Hero Title - Crisp, Modern & Orderly */}
          <h1
            style={{
              fontSize: 'clamp(1.95rem, 5.2vw, 4.1rem)',
              lineHeight: 1.18,
              marginBottom: '22px',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--text-main)',
              textShadow: isLight ? 'none' : '0 4px 24px rgba(0,0,0,0.7)',
              wordBreak: 'break-word',
            }}
          >
            {t.hero.title1}{' '}
            <span
              className="text-gold-pure"
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              {t.hero.title2}
            </span>{' '}
            <br />
            {t.hero.title3}
          </h1>

          {/* Executive Subtitle */}
          <p
            className="lead-text"
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '720px',
              color: isLight ? '#334155' : '#CBD5E1',
              fontWeight: 350,
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <Link
              href="/sectors/"
              className="btn btn-primary"
              style={{
                height: '52px',
                padding: '0 32px',
                fontSize: '0.98rem',
                borderRadius: '10px',
              }}
            >
              <span>{t.hero.discoverBtn}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <Link
              href="/subsidiaries/"
              className="btn btn-outline"
              style={{
                height: '52px',
                padding: '0 28px',
                fontSize: '0.98rem',
                borderRadius: '10px',
                background: isLight ? '#FFFFFF' : 'transparent',
                color: isLight ? '#0A1124' : '#FFFFFF',
                borderColor: isLight ? 'rgba(184, 134, 11, 0.35)' : 'rgba(212, 175, 55, 0.35)',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold-400)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span>{t.nav.companies}</span>
            </Link>
          </div>

          {/* Quick Metrics HUD - Perfectly Balanced 4-Column Strip */}
          <div className="hero-metrics-hud">
            {/* Metric 1: Domestic Capital & Equity Strength */}
            <div className="hud-metric-item">
              <div className="hud-val-row">
                <span className="hud-num text-gold-pure">
                  {lang === 'tr' ? '%100' : '100%'}
                </span>
                <span className="hud-suffix text-gold-300">
                  {lang === 'tr' ? 'Yerli' : lang === 'ar' ? 'وطني' : 'Capital'}
                </span>
              </div>
              <div className="hud-label">
                {lang === 'tr' ? 'Yerli Sermaye & Özkaynak' : lang === 'ar' ? 'رأس مال وطني وأصول ذاتية' : 'Domestic Equity & Assets'}
              </div>
            </div>

            {/* Metric 2: Strategic Sectors */}
            <div className="hud-metric-item">
              <div className="hud-val-row">
                <span className="hud-num" style={{ color: isLight ? '#0A1124' : '#FFFFFF' }}>
                  {t.metrics.items[1].value}
                </span>
                <span className="hud-suffix" style={{ color: isLight ? '#475569' : '#CBD5E1' }}>
                  {lang === 'tr' ? 'Sektör' : lang === 'ar' ? 'قطاعات' : 'Sectors'}
                </span>
              </div>
              <div className="hud-label">{t.metrics.items[1].label}</div>
            </div>

            {/* Metric 3: Group Companies & Subsidiaries */}
            <div className="hud-metric-item">
              <div className="hud-val-row">
                <span className="hud-num text-gold-pure">
                  10
                </span>
                <span className="hud-suffix text-gold-300">
                  {lang === 'tr' ? 'Şirket' : lang === 'ar' ? 'شركة' : 'Companies'}
                </span>
              </div>
              <div className="hud-label">
                {lang === 'tr' ? 'Grup Şirketi & Marka' : lang === 'ar' ? 'شركات تابعة وعلامات' : 'Group Companies & Brands'}
              </div>
            </div>

            {/* Metric 4: Global Trade & Logistics Network */}
            <div className="hud-metric-item">
              <div className="hud-val-row">
                <span className="hud-num" style={{ color: isLight ? '#0A1124' : '#FFFFFF' }}>
                  Global
                </span>
                <span className="hud-suffix" style={{ color: isLight ? '#475569' : '#CBD5E1' }}>
                  {lang === 'tr' ? 'Ağ' : lang === 'ar' ? 'شبكة' : 'Reach'}
                </span>
              </div>
              <div className="hud-label">
                {lang === 'tr' ? 'Dış Ticaret & Lojistik' : lang === 'ar' ? 'التجارة الدولية واللوجستيات' : 'Global Trade & Logistics'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

