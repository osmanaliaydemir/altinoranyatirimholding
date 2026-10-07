'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function SustainabilitySection() {
  const { t } = useLanguage();

  return (
    <section id="surdurulebilirlik" style={{ padding: '100px 0', background: 'rgba(10, 16, 29, 0.7)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">{t.sustainability.tag}</span>
          <h2 className="section-title text-gold-gradient" style={{ margin: '0 auto 16px', maxWidth: '780px' }}>
            {t.sustainability.title}
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {t.sustainability.subtitle}
          </p>
        </div>

        {/* Big Banner with Clean Energy Image & 2030 Goal */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '48px',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '40px',
          }}
        >
          <Image
            src="/images/energy.jpg"
            alt="Altınoran Yenilenebilir Enerji ve Yeşil Dönüşüm Parkı"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(6, 9, 17, 0.3) 0%, rgba(6, 9, 17, 0.92) 85%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
            <span className="badge" style={{ marginBottom: '14px', background: 'rgba(16, 185, 129, 0.2)', borderColor: '#10B981', color: '#6EE7B7' }}>
              ESG & Net Zero
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '3.6rem', fontWeight: 900, fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1 }}>
                {t.sustainability.netZeroYear}
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--gold-300)' }}>
                {t.sustainability.netZeroDesc}
              </span>
            </div>
            <p style={{ color: '#E2E8F0', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              450 MW yenilenebilir enerji kurulu gücümüz ve çevre dostu üretim metodolojilerimizle, yılda 1.2 milyon ton karbon salınımını bertaraf ediyoruz.
            </p>
          </div>
        </div>

        {/* 3 Pillars of ESG: E - S - G */}
        <div className="grid-3">
          {/* Environmental */}
          <div className="glass-panel" style={{ padding: '36px 30px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#34D399',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 800,
                fontFamily: 'var(--font-serif)',
                marginBottom: '20px',
              }}
            >
              E
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px' }}>
              {t.sustainability.card1Title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
              {t.sustainability.card1Desc}
            </p>
          </div>

          {/* Social */}
          <div className="glass-panel" style={{ padding: '36px 30px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                color: 'var(--gold-300)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 800,
                fontFamily: 'var(--font-serif)',
                marginBottom: '20px',
              }}
            >
              S
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px' }}>
              {t.sustainability.card2Title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
              {t.sustainability.card2Desc}
            </p>
          </div>

          {/* Governance */}
          <div className="glass-panel" style={{ padding: '36px 30px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                color: '#60A5FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 800,
                fontFamily: 'var(--font-serif)',
                marginBottom: '20px',
              }}
            >
              G
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px' }}>
              {t.sustainability.card3Title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
              {t.sustainability.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
