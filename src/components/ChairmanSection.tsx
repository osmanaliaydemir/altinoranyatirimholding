'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ChairmanSection() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '100px 0', background: 'rgba(10, 16, 29, 0.6)', position: 'relative' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          {/* Visual: Boardroom Image */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              minHeight: '440px',
              height: '100%',
            }}
          >
            <Image
              src="/images/boardroom.jpg"
              alt="Altınoran Yatırım Holding Yönetim Kurulu ve Finansal Strateji"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Subtle Gradient Shade */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(6, 9, 17, 0.9) 100%)',
              }}
            />
            {/* Floating Tag */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                padding: '16px 20px',
                background: 'rgba(15, 25, 46, 0.85)',
                backdropFilter: 'blur(16px)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <div style={{ color: 'var(--gold-300)', fontWeight: 700, fontSize: '0.95rem' }}>
                {t.chairman.author}
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>
                {t.chairman.role} • Altınoran Yatırım Holding
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="section-tag">{t.chairman.tag}</span>
            <h2 className="section-title text-gold-gradient" style={{ marginBottom: '24px' }}>
              {t.chairman.title}
            </h2>

            {/* Blockquote with Golden Accents */}
            <div
              style={{
                position: 'relative',
                padding: '24px 28px',
                marginBottom: '28px',
                background: 'rgba(212, 175, 55, 0.06)',
                borderLeft: '4px solid var(--gold-400)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  fontStyle: 'italic',
                  color: '#F8FAFC',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                &ldquo;{t.chairman.quote}&rdquo;
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '0.98rem', lineHeight: 1.8 }}>
              {t.chairman.paragraphs.map((para: string, idx: number) => (
                <p key={idx} style={{ margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold-300)' }}>
                {t.chairman.author}
              </div>
              <div style={{ color: 'var(--gold-500)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                {t.chairman.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
