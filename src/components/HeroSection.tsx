'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t, isRTL, lang } = useLanguage();

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
      {/* Background Image with Cinematic Dark Gradient Overlays */}
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
          alt="Altınoran Yatırım Holding Genel Merkezi Maslak İstanbul"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 35%',
            filter: 'brightness(0.55) contrast(1.1)',
          }}
        />
        {/* Layered dark gradients for crystal-clear readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isRTL
              ? 'linear-gradient(270deg, rgba(6, 9, 17, 0.95) 0%, rgba(6, 9, 17, 0.85) 50%, rgba(6, 9, 17, 0.35) 100%)'
              : 'linear-gradient(90deg, rgba(6, 9, 17, 0.95) 0%, rgba(6, 9, 17, 0.85) 50%, rgba(6, 9, 17, 0.35) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(6, 9, 17, 0.4) 0%, transparent 40%, rgba(6, 9, 17, 0.8) 80%, #060911 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 75% 45%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)',
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
        className="animate-spin-slow"
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
              className="badge"
              style={{
                padding: '8px 18px',
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--gold-400)',
                  boxShadow: '0 0 8px var(--gold-400)',
                  display: 'inline-block',
                }}
              />
              {t.hero.badge}
            </span>
          </div>

          {/* Main Hero Title - Crisp, Modern & Orderly */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 4.1rem)',
              lineHeight: 1.15,
              marginBottom: '22px',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              textShadow: '0 4px 24px rgba(0,0,0,0.7)',
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
              color: '#CBD5E1',
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
              href="/investor-relations/"
              className="btn btn-outline"
              style={{
                height: '52px',
                padding: '0 28px',
                fontSize: '0.98rem',
                borderRadius: '10px',
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
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <span>{t.hero.investorBtn}</span>
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
                <span className="hud-num" style={{ color: '#FFFFFF' }}>
                  {t.metrics.items[1].value}
                </span>
                <span className="hud-suffix" style={{ color: '#CBD5E1' }}>
                  {lang === 'tr' ? 'Sektör' : lang === 'ar' ? 'قطاعات' : 'Sectors'}
                </span>
              </div>
              <div className="hud-label">{t.metrics.items[1].label}</div>
            </div>

            {/* Metric 3: Group Companies & Subsidiaries */}
            <div className="hud-metric-item">
              <div className="hud-val-row">
                <span className="hud-num text-gold-pure">
                  18
                </span>
                <span className="hud-suffix text-gold-300">
                  {lang === 'tr' ? 'Şirket' : lang === 'ar' ? 'شركة' : 'Companies'}
                </span>
              </div>
              <div className="hud-label">
                {lang === 'tr' ? 'Grup Şirketi & İştirak' : lang === 'ar' ? 'شركة تابعة ومجموعة' : 'Group Companies & Assets'}
              </div>
            </div>

            {/* Metric 4: Institutional Experience & Trust */}
            <div className="hud-metric-item" style={{ borderRight: 'none' }}>
              <div className="hud-val-row">
                <span className="hud-num" style={{ color: '#FFFFFF' }}>
                  40+
                </span>
                <span className="hud-suffix" style={{ color: '#CBD5E1' }}>
                  {lang === 'tr' ? 'Yıl' : lang === 'ar' ? 'عاماً' : 'Years'}
                </span>
              </div>
              <div className="hud-label">
                {lang === 'tr' ? 'Köklü Tecrübe & Güven' : lang === 'ar' ? 'سنوات من الريادة والخبرة' : 'Institutional Trust & Legacy'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-metrics-hud {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          padding: 20px 24px;
          background: rgba(10, 16, 29, 0.78);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.28);
          border-radius: var(--radius-lg);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
          width: 100%;
          max-width: 860px;
        }

        .hud-metric-item {
          padding: 0 18px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          justifyContent: center;
        }

        :global(html.rtl-mode) .hud-metric-item {
          border-right: none;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        :global(html.rtl-mode) .hud-metric-item:last-child {
          border-left: none;
        }

        .hud-val-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 4px;
        }

        .hud-num {
          font-size: 1.85rem;
          font-weight: 800;
          font-family: var(--font-display);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .hud-suffix {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .hud-label {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .hero-metrics-hud {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 0;
            padding: 20px 16px;
          }
          .hud-metric-item:nth-child(2) {
            border-right: none;
          }
          :global(html.rtl-mode) .hud-metric-item:nth-child(2) {
            border-left: none;
          }
          .hud-metric-item:nth-child(3),
          .hud-metric-item:nth-child(4) {
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            padding-top: 16px;
          }
        }

        @media (max-width: 480px) {
          .hud-num {
            font-size: 1.55rem;
          }
          .hud-label {
            font-size: 0.74rem;
          }
        }
      `}</style>
    </section>
  );
}
