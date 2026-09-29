'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="anasayfa"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--nav-height)',
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
        {/* Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(6, 9, 17, 0.7) 0%, rgba(6, 9, 17, 0.85) 65%, #060911 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 75% 40%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Decorative Golden Ratio Spiral Geometric SVG Watermark */}
      <div
        style={{
          position: 'absolute',
          right: isRTL ? 'auto' : '-10%',
          left: isRTL ? '-10%' : 'auto',
          top: '18%',
          width: '640px',
          height: '640px',
          pointerEvents: 'none',
          opacity: 0.18,
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

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '40px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Golden Badge */}
          <div style={{ marginBottom: '24px' }}>
            <span className="badge" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--gold-400)',
                  boxShadow: '0 0 10px var(--gold-400)',
                  display: 'inline-block',
                }}
              />
              {t.hero.badge}
            </span>
          </div>

          {/* Main Hero Title */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
              lineHeight: 1.12,
              marginBottom: '24px',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            {t.hero.title1}{' '}
            <span className="text-gold-pure" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(212,175,55,0.4)', textUnderlineOffset: '8px' }}>
              {t.hero.title2}
            </span>{' '}
            <br />
            {t.hero.title3}
          </h1>

          {/* Subtitle */}
          <p
            className="lead-text"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              marginBottom: '38px',
              maxWidth: '720px',
              color: '#E2E8F0',
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '56px' }}>
            <Link href="/sectors/" className="btn btn-primary" style={{ padding: '16px 34px', fontSize: '1.02rem' }}>
              <span>{t.hero.discoverBtn}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <Link href="/investor-relations/" className="btn btn-outline" style={{ padding: '16px 30px', fontSize: '1.02rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <span>{t.hero.investorBtn}</span>
            </Link>
          </div>

          {/* Quick Metrics Bar directly inside Hero */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              padding: '24px 28px',
              background: 'rgba(10, 16, 29, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
            }}
          >
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>
                ₺18.4 <span style={{ fontSize: '1rem', fontWeight: 600 }}>Milyar / Bn</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{t.metrics.items[0].label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>
                6 <span style={{ fontSize: '1rem', fontWeight: 600 }}>Sektör / Sectors</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{t.metrics.items[1].label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>
                4.200+
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{t.metrics.items[3].label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>
                450 <span style={{ fontSize: '1rem', fontWeight: 600 }}>MW</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{t.metrics.items[4].label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
