'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ChairmanSection() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '100px 0', background: 'rgba(10, 16, 29, 0.6)', position: 'relative' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '48px' }}>
          {/* Visual: Chairman Portrait (16:9 complete background visible) */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                aspectRatio: '16 / 9',
                width: '100%',
                background: 'rgba(10, 16, 29, 0.95)',
              }}
            >
              <Image
                src="/images/ht.jpg"
                alt="Hanifi Tekin"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Clean Caption Card Below Image - Unobstructed view of photo and background */}
            <div
              className="glass-panel"
              style={{
                marginTop: '18px',
                padding: '20px 24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.85) 0%, rgba(8, 14, 26, 0.95) 100%)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ color: 'var(--gold-300)', fontWeight: 700, fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
                  {t.chairman.author}
                </div>
                <span className="badge" style={{ fontSize: '0.74rem', padding: '4px 10px' }}>
                  Yönetim Kurulu
                </span>
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.86rem', marginBottom: '14px' }}>
                {t.chairman.role} &bull; Altınoran Yatırım Holding
              </div>

              {/* Leadership Pillars */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 800 }}>✓</span> %100 Yerli Sermaye
                </div>
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 800 }}>✓</span> 10 Grup Şirketi
                </div>
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 800 }}>✓</span> Reel Sektör Gücü
                </div>
                <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 800 }}>✓</span> Sürdürülebilir Büyüme
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            {/* Header Tag with Dash */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '22px', height: '2px', background: 'var(--gold-400)', display: 'inline-block' }} />
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-400)',
                }}
              >
                {t.chairman.tag}
              </span>
            </div>

            {/* Main Section Title */}
            <h2
              className="section-title text-gold-gradient"
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: '26px',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '-0.01em',
              }}
            >
              {t.chairman.title}
            </h2>

            {/* Blockquote with Golden Accents */}
            <div
              style={{
                position: 'relative',
                padding: '22px 26px',
                marginBottom: '26px',
                background: 'rgba(15, 25, 46, 0.75)',
                borderLeft: '4px solid var(--gold-400)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: '#F8FAFC',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                &ldquo;{t.chairman.quote}&rdquo;
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.8 }}>
              {t.chairman.paragraphs.map((para: string, idx: number) => (
                <p key={idx} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--gold-300)' }}>
                {t.chairman.author}
              </div>
              <div style={{ color: 'var(--gold-400)', fontSize: '0.86rem', letterSpacing: '0.04em', marginTop: '3px' }}>
                {t.chairman.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
