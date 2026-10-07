'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SectorItem } from '@/data/translations';

export default function SectorsContent() {
  const { t, isRTL, lang } = useLanguage();

  const sectorImages: Record<string, string> = {
    gayrimenkul: '/images/headquarters.jpg',
    insaat: '/images/boardroom.jpg',
    saglik: '/images/headquarters.jpg',
    akaryakit: '/images/energy.jpg',
    'ofis-kirtasiye': '/images/boardroom.jpg',
    'dis-ticaret': '/images/energy.jpg',
  };

  const sectorIcons: Record<string, React.ReactNode> = {
    gayrimenkul: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
        <path d="M3 21h18"/>
        <path d="M5 21V7l7-4 7 4v14"/>
        <path d="M9 10h1M14 10h1M9 14h1M14 14h1M10 21v-4h4v4"/>
      </svg>
    ),
    insaat: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
        <path d="M2 22h20"/>
        <path d="M6 22V9l6-5 6 5v13"/>
        <path d="M10 22v-6h4v6"/>
        <path d="M10 12h4"/>
      </svg>
    ),
    saglik: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
        <path d="M22 12h-4l-3 8-6-16-3 8H2"/>
      </svg>
    ),
    akaryakit: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
        <path d="M3 22h12"/>
        <path d="M4 9h10"/>
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/>
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>
      </svg>
    ),
    'ofis-kirtasiye': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
      </svg>
    ),
    'dis-ticaret': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  };

  const sectors = t.sectors.list || [];
  const [activeId, setActiveId] = useState<string>(sectors[0]?.id || 'gayrimenkul');

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectors.some((s: SectorItem) => s.id === hash)) {
        setActiveId(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [sectors]);

  const handleSelectTab = (id: string) => {
    setActiveId(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const activeIdx = sectors.findIndex((s: SectorItem) => s.id === activeId);
  const activeSector = sectors[activeIdx] || sectors[0];
  const imgSrc = sectorImages[activeSector?.id] || '/images/headquarters.jpg';

  const localizedLabels = {
    tr: {
      sectorNumber: 'SEKTÖR',
      allSectorsTitle: 'Tüm Sektörlere Genel Bakış',
      allSectorsSubtitle: 'Altınoran Yatırım Holding çatısı altında geleceğe değer katan 6 stratejik odak alanı.',
      contactCta: 'Detaylı Bilgi & İletişim',
      companiesCta: 'Tüm Grup Şirketleri',
      activeStatus: 'Aktif Sektör',
      explore: 'İncele',
    },
    en: {
      sectorNumber: 'SECTOR',
      allSectorsTitle: 'Overview of All Sectors',
      allSectorsSubtitle: 'Six strategic focal industries creating long-term value under Altınoran Holding.',
      contactCta: 'Get in Touch & Inquire',
      companiesCta: 'View Group Companies',
      activeStatus: 'Active Sector',
      explore: 'Explore',
    },
    ar: {
      sectorNumber: 'القطاع',
      allSectorsTitle: 'نظرة شاملة على كافة القطاعات',
      allSectorsSubtitle: 'ستة قطاعات استراتيجية رائدة تصنع قيمة مستدامة تحت مظلة ألتن أوران القابضة.',
      contactCta: 'تواصل معنا واستفسر',
      companiesCta: 'استعراض شركات المجموعة',
      activeStatus: 'القطاع النشط',
      explore: 'استكشاف',
    },
  }[lang] || {
    sectorNumber: 'SEKTÖR',
    allSectorsTitle: 'Tüm Sektörlere Genel Bakış',
    allSectorsSubtitle: 'Altınoran Yatırım Holding çatısı altında geleceğe değer katan 6 stratejik odak alanı.',
    contactCta: 'Detaylı Bilgi & İletişim',
    companiesCta: 'Tüm Grup Şirketleri',
    activeStatus: 'Aktif Sektör',
    explore: 'İncele',
  };

  const shortTitles: Record<string, Record<string, string>> = {
    tr: {
      gayrimenkul: 'Gayrimenkul & Arazi',
      insaat: 'İnşaat & Taahhüt',
      saglik: 'Sağlık Hizmetleri',
      akaryakit: 'Akaryakıt & Enerji',
      'ofis-kirtasiye': 'Bilişim & Ofis',
      'dis-ticaret': 'Dış Ticaret & Gıda',
    },
    en: {
      gayrimenkul: 'Real Estate & Land',
      insaat: 'Construction & Works',
      saglik: 'Healthcare Services',
      akaryakit: 'Fuel & Energy',
      'ofis-kirtasiye': 'IT & Office Systems',
      'dis-ticaret': 'Trade & Logistics',
    },
    ar: {
      gayrimenkul: 'التطوير العقاري',
      insaat: 'الإنشاءات والمقاولات',
      saglik: 'الرعاية الصحية',
      akaryakit: 'الوقود والطاقة',
      'ofis-kirtasiye': 'التقنية والتوريدات',
      'dis-ticaret': 'التجارة واللوجستيات',
    },
  };

  const getTabTitle = (sectorId: string, fallbackName: string) => {
    return shortTitles[lang]?.[sectorId] || fallbackName;
  };

  if (!activeSector) return null;

  return (
    <section style={{ padding: '60px 0 100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* ====================================================================
            1. RESPONSIVE 6-COLUMN TAB NAVIGATION (ALL 6 TABS 100% VISIBLE)
            ==================================================================== */}
        <div style={{ marginBottom: '36px' }}>
          <div
            className="sectors-tabs-grid"
            role="tablist"
            aria-label="Sektörler"
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            {sectors.map((sector: SectorItem, idx: number) => {
              const isActive = sector.id === activeId;
              const icon = sectorIcons[sector.id] || sectorIcons.gayrimenkul;
              const tabTitle = getTabTitle(sector.id, sector.name);

              return (
                <button
                  key={sector.id}
                  role="tab"
                  id={`tab-${sector.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${sector.id}`}
                  onClick={() => handleSelectTab(sector.id)}
                  className={`sector-tab-card ${isActive ? 'active' : ''}`}
                >
                  <div
                    className="sector-tab-top"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      className="sector-tab-icon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        minWidth: '44px',
                        minHeight: '44px',
                        maxWidth: '44px',
                        maxHeight: '44px',
                        flexShrink: 0,
                        borderRadius: '12px',
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <span className="sector-tab-num">0{idx + 1}</span>
                  </div>
                  
                  <div className="sector-tab-title">
                    {tabTitle}
                  </div>

                  <div className="sector-tab-indicator">
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: isActive ? 'var(--gold-400)' : '#64748B',
                        boxShadow: isActive ? '0 0 6px var(--gold-400)' : 'none',
                        display: 'inline-block',
                      }}
                    />
                    <span>{isActive ? localizedLabels.activeStatus : sector.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================================
            2. ACTIVE TAB HERO SHOWCASE PANEL
            ==================================================================== */}
        <div
          id={`panel-${activeSector.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeSector.id}`}
          key={activeSector.id}
          className="glass-panel sector-tab-panel"
          style={{
            padding: '48px 42px',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(212, 175, 55, 0.08)',
            marginBottom: '64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Decorative Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: isRTL ? 'auto' : '-80px',
              left: isRTL ? '-80px' : 'auto',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(30px)',
            }}
          />

          <div
            className="grid-2"
            style={{
              alignItems: 'center',
              gap: '52px',
              direction: isRTL ? 'rtl' : 'ltr',
            }}
          >
            {/* Visual Column */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                minHeight: '420px',
                height: '100%',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)',
                direction: 'ltr',
              }}
            >
              <Image
                src={imgSrc}
                alt={activeSector.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 9, 17, 0.2) 0%, rgba(6, 9, 17, 0.4) 50%, rgba(6, 9, 17, 0.9) 100%)',
                }}
              />

              {/* Floating Top Badge */}
              <div style={{ position: 'absolute', top: '22px', left: '22px' }}>
                <span
                  className="badge"
                  style={{
                    background: 'rgba(6, 9, 17, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    color: 'var(--gold-200)',
                  }}
                >
                  {activeSector.badge}
                </span>
              </div>

              {/* Floating Bottom Quick Info */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  left: '22px',
                  right: '22px',
                  padding: '16px 20px',
                  background: 'rgba(10, 16, 29, 0.85)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--gold-400)',
                      boxShadow: '0 0 10px var(--gold-400)',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Altınoran Yatırım Holding
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
              <div style={{ marginBottom: '16px' }}>
                <span
                  className="badge"
                  style={{
                    padding: '6px 16px',
                    fontSize: '0.84rem',
                    color: 'var(--gold-300)',
                    borderColor: 'rgba(212, 175, 55, 0.35)',
                    background: 'rgba(212, 175, 55, 0.08)',
                  }}
                >
                  {activeSector.badge}
                </span>
              </div>

              <h2
                style={{
                  fontSize: '2.3rem',
                  color: '#FFFFFF',
                  marginBottom: '18px',
                  lineHeight: 1.25,
                  fontWeight: 700,
                }}
              >
                {activeSector.name}
              </h2>

              <p
                style={{
                  color: '#E2E8F0',
                  fontSize: '1.08rem',
                  lineHeight: 1.8,
                  marginBottom: '28px',
                }}
              >
                {activeSector.fullDesc}
              </p>

              {/* Key Stats Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  marginBottom: '30px',
                  padding: '22px 24px',
                  background: 'rgba(10, 16, 29, 0.75)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(212, 175, 55, 0.22)',
                }}
              >
                {activeSector.stats.map((st: { label: string; value: string }, i: number) => (
                  <div key={i}>
                    <div
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: 'var(--gold-300)',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '4px',
                      }}
                    >
                      {st.value}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#94A3B8' }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights & Operating Companies */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {activeSector.highlights && activeSector.highlights.length > 0 && (
                  <div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--gold-400)',
                        fontWeight: 700,
                      }}
                    >
                      {t.sectors.activeProjects}:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                      {activeSector.highlights.map((h: string, i: number) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.86rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '6px 14px',
                            borderRadius: 'var(--radius-sm)',
                            color: '#CBD5E1',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeSector.companies && activeSector.companies.length > 0 && (
                  <div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--gold-400)',
                        fontWeight: 700,
                      }}
                    >
                      {t.nav.companies}:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
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
                              fontSize: '0.86rem',
                              background: 'rgba(212, 175, 55, 0.12)',
                              padding: '6px 14px',
                              borderRadius: 'var(--radius-sm)',
                              color: 'var(--gold-200)',
                              border: '1px solid rgba(212, 175, 55, 0.3)',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <span>{c}</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link
                  href="/contact/"
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.94rem' }}
                >
                  <span>{localizedLabels.contactCta}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link
                  href="/subsidiaries/"
                  className="btn btn-outline"
                  style={{ padding: '14px 26px', fontSize: '0.94rem' }}
                >
                  <span>{localizedLabels.companiesCta}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
