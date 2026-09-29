'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SectorItem } from '@/data/translations';

export default function SectorsContent() {
  const { t, isRTL } = useLanguage();

  const sectorImages: Record<string, string> = {
    gayrimenkul: '/images/headquarters.jpg',
    enerji: '/images/energy.jpg',
    finans: '/images/boardroom.jpg',
    teknoloji: '/images/headquarters.jpg',
    saglik: '/images/boardroom.jpg',
    lojistik: '/images/energy.jpg',
  };

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {t.sectors.list.map((sector: SectorItem, idx: number) => {
            const isEven = idx % 2 === 1;
            const imgSrc = sectorImages[sector.id] || '/images/headquarters.jpg';

            return (
              <div
                key={sector.id}
                id={sector.id}
                className="glass-panel"
                style={{
                  padding: '48px 40px',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                }}
              >
                <div
                  className="grid-2"
                  style={{
                    alignItems: 'center',
                    gap: '48px',
                    direction: isEven && !isRTL ? 'rtl' : 'ltr',
                  }}
                >
                  {/* Image Column */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      minHeight: '380px',
                      height: '100%',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      boxShadow: 'var(--shadow-md)',
                      direction: 'ltr',
                    }}
                  >
                    <Image
                      src={imgSrc}
                      alt={sector.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(6, 9, 17, 0.85) 100%)',
                      }}
                    />
                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                      <span className="badge" style={{ background: 'rgba(6, 9, 17, 0.85)', backdropFilter: 'blur(8px)' }}>
                        {sector.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <span className="badge">0{idx + 1}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 600 }}>{sector.badge}</span>
                    </div>

                    <h2 style={{ fontSize: '2.1rem', color: '#FFFFFF', marginBottom: '16px' }}>
                      {sector.name}
                    </h2>

                    <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                      {sector.fullDesc}
                    </p>

                    {/* Stats */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '16px',
                        marginBottom: '28px',
                        padding: '20px',
                        background: 'rgba(10, 16, 29, 0.6)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                      }}
                    >
                      {sector.stats.map((st: { label: string; value: string }, i: number) => (
                        <div key={i}>
                          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>
                            {st.value}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{st.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights & Companies */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                      <div>
                        <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', fontWeight: 700 }}>
                          {t.sectors.activeProjects}:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                          {sector.highlights.map((h: string, i: number) => (
                            <span
                              key={i}
                              style={{
                                fontSize: '0.85rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-sm)',
                                color: '#CBD5E1',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                              }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', fontWeight: 700 }}>
                          {t.nav.companies}:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                          {sector.companies.map((c: string, i: number) => (
                            <span
                              key={i}
                              style={{
                                fontSize: '0.85rem',
                                background: 'rgba(212, 175, 55, 0.1)',
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--gold-200)',
                                border: '1px solid rgba(212, 175, 55, 0.25)',
                              }}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/contact/" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                      <span>Detaylı Bilgi & Ortaklık</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
