'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SectorItem } from '@/data/translations';

export default function SectorsSection() {
  const { t, isRTL, lang } = useLanguage();
  const [activeSectorId, setActiveSectorId] = useState('gayrimenkul');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  const sectorImages: Record<string, string> = {
    gayrimenkul: '/images/headquarters.jpg',
    insaat: '/images/boardroom.jpg',
    saglik: '/images/headquarters.jpg',
    akaryakit: '/images/energy.jpg',
    'ofis-kirtasiye': '/images/boardroom.jpg',
    'dis-ticaret': '/images/energy.jpg',
  };

  const activeSector = t.sectors.list.find((s: SectorItem) => s.id === activeSectorId) || t.sectors.list[0];

  // Auto-tour rotation every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveSectorId((currentId) => {
        const list = t.sectors.list;
        const currentIndex = list.findIndex((s: SectorItem) => s.id === currentId);
        const nextIndex = (currentIndex + 1) % list.length;
        return list[nextIndex].id;
      });
      setProgressKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, t.sectors.list]);

  const handleTabClick = (id: string) => {
    setActiveSectorId(id);
    setProgressKey((prev) => prev + 1);
    // Pause auto-rotation when user clicks a specific tab so they can read comfortably
    setIsAutoPlaying(false);
  };

  return (
    <section id="sektorler" className="sectors-section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">{t.sectors.tag}</span>
          <h2 className="section-title text-gold-gradient" style={{ margin: '0 auto 16px', maxWidth: '780px' }}>
            {t.sectors.title}
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 16px' }}>
            {t.sectors.subtitle}
          </p>

          {/* Auto-Showcase Status Pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(!isAutoPlaying);
                setProgressKey((prev) => prev + 1);
              }}
              className="sectors-tour-toggle"
              aria-label="Toggle Auto Tour"
            >
              <span className={`tour-dot ${isAutoPlaying ? 'active' : ''}`} />
              <span>
                {isAutoPlaying
                  ? lang === 'tr'
                    ? 'Canlı Portföy Akışı: Aktif'
                    : lang === 'ar'
                    ? 'الجولة التلقائية: نشطة'
                    : 'Live Showcase: Active'
                  : lang === 'tr'
                  ? 'Canlı Akış: Duraklatıldı (Oynat)'
                  : lang === 'ar'
                  ? 'الجولة التلقائية: متوقفة'
                  : 'Live Showcase: Paused (Play)'}
              </span>
            </button>
          </div>
        </div>

        {/* Sector Navigation Tabs */}
        <div className="sectors-tabs-nav">
          {t.sectors.list.map((sector: SectorItem) => {
            const isActive = sector.id === activeSector.id;
            return (
              <button
                key={sector.id}
                onClick={() => handleTabClick(sector.id)}
                className={`tab-button ${isActive ? 'active' : ''}`}
                style={{
                  fontSize: '0.92rem',
                  padding: '12px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span>{sector.name}</span>
                {isActive && isAutoPlaying && (
                  <span key={progressKey} className="tab-progress-line" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Card */}
        <div
          className="glass-panel sector-showcase-panel"
          style={{
            border: '1px solid var(--border-gold)',
            background: 'var(--bg-cta, linear-gradient(135deg, rgba(16, 26, 48, 0.9) 0%, rgba(8, 14, 26, 0.95) 100%))',
          }}
        >
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            {/* Visual Column */}
            <div className="sector-showcase-visual">
              <Image
                src={sectorImages[activeSector.id] || '/images/headquarters.jpg'}
                alt={activeSector.name}
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
                  {activeSector.badge}
                </span>
              </div>
            </div>

            {/* Details Column */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <span className="badge">{activeSector.badge}</span>
              </div>

              <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '16px' }}>
                {activeSector.name}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {activeSector.fullDesc}
              </p>

              {/* Stats Highlights */}
              <div className="sector-stats-grid">
                {activeSector.stats.map((st: { label: string; value: string }, i: number) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold-400)', fontFamily: 'var(--font-serif)' }}>
                      {st.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlight Projects & Companies */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', fontWeight: 700 }}>
                    {t.sectors.activeProjects}:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                    {activeSector.highlights.map((h: string, i: number) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.85rem',
                          background: 'var(--bg-hud)',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border-subtle)',
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
                    {activeSector.companies.map((c: string, i: number) => {
                      const companySlugMap: Record<string, string> = {
                        'Demtaş Gayrimenkul Yatırım': 'demtas-gayrimenkul',
                        'Tekin Yapı': 'tekin-yapi',
                        'Mimkon Mimarlık': 'mimkon',
                        'Eston Yapı A.Ş.': 'eston-yapi',
                        'Medistate Kavacık Hastanesi': 'medistate',
                        'Demtaş Akaryakıt': 'demtas-akaryakit',
                        'Demtaş Bilişim': 'demtas-bilisim',
                        'Demtaş Evrensel': 'demtas-evrensel',
                        'AzerGıda': 'azer-gida',
                        'AzerTarım': 'azer-tarim',
                      };
                      const slug = companySlugMap[c];
                      const href = slug ? `/subsidiaries/${slug}/` : '/subsidiaries/';

                      return (
                        <Link
                          key={i}
                          href={href}
                          style={{
                            fontSize: '0.85rem',
                            background: 'rgba(212, 175, 55, 0.1)',
                            padding: '4px 12px',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--gold-200)',
                            border: '1px solid rgba(212, 175, 55, 0.25)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {c}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link href="#iletisim" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                <span>{t.contact.title}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

