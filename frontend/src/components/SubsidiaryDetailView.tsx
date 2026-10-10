'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { SubsidiaryItem, SUBSIDIARIES_DATA } from '@/data/subsidiariesData';

interface Props {
  subsidiary: SubsidiaryItem;
}

export default function SubsidiaryDetailView({ subsidiary }: Props) {
  const { lang, isRTL } = useLanguage();

  const content = subsidiary[lang] || subsidiary.tr;
  const otherSubsidiaries = Object.values(SUBSIDIARIES_DATA).filter(
    (s) => s.slug !== subsidiary.slug
  );

  const localizedLabels = {
    tr: {
      home: 'Ana Sayfa',
      subsidiaries: 'İştiraklerimiz',
      aboutCompany: 'Kurumsal Profil & Faaliyetler',
      coreServices: 'Temel Hizmet ve Uzmanlık Alanları',
      highlightsTitle: 'Öne Çıkan Varlıklar & Başarılar',
      factsheetTitle: 'Şirket Künyesi',
      sectorLabel: 'Sektör',
      foundedLabel: 'Kuruluş',
      locationLabel: 'Merkez',
      capitalLabel: 'Sermaye Yapısı',
      scopeLabel: 'Faaliyet Kapsamı',
      contactTitle: 'İletişim & Koordinasyon',
      contactCta: 'İletişime Geçin',
      allSubsidiaries: 'Diğer Grup Şirketlerimiz',
      holdingBadge: 'Altınoran Holding İştiraki',
      explore: 'İncele',
    },
    en: {
      home: 'Home',
      subsidiaries: 'Subsidiaries',
      aboutCompany: 'Corporate Profile & Operations',
      coreServices: 'Core Services & Capabilities',
      highlightsTitle: 'Key Assets & Milestones',
      factsheetTitle: 'Company Factsheet',
      sectorLabel: 'Sector',
      foundedLabel: 'Founded',
      locationLabel: 'Headquarters',
      capitalLabel: 'Capital Structure',
      scopeLabel: 'Operational Scope',
      contactTitle: 'Contact & Coordination',
      contactCta: 'Get in Touch',
      allSubsidiaries: 'Other Group Companies',
      holdingBadge: 'Altınoran Holding Entity',
      explore: 'Explore',
    },
    ar: {
      home: 'الرئيسية',
      subsidiaries: 'شركاتنا التابعة',
      aboutCompany: 'الملف المؤسسي والأنشطة',
      coreServices: 'مجالات العمل والخدمات الرئيسية',
      highlightsTitle: 'أبرز الأصول والإنجازات',
      factsheetTitle: 'بطاقة تعريف الشركة',
      sectorLabel: 'القطاع',
      foundedLabel: 'التأسيس',
      locationLabel: 'المقر',
      capitalLabel: 'هيكل رأس المال',
      scopeLabel: 'نطاق العمل',
      contactTitle: 'التواصل والتنسيق',
      contactCta: 'تواصل معنا',
      allSubsidiaries: 'شركات المجموعة الأخرى',
      holdingBadge: 'إحدى شركات ألتن أوران القابضة',
      explore: 'استعراض',
    },
  }[lang] || {
    home: 'Ana Sayfa',
    subsidiaries: 'İştiraklerimiz',
    aboutCompany: 'Kurumsal Profil & Faaliyetler',
    coreServices: 'Temel Hizmet ve Uzmanlık Alanları',
    highlightsTitle: 'Öne Çıkan Varlıklar & Başarılar',
    factsheetTitle: 'Şirket Künyesi',
    sectorLabel: 'Sektör',
    foundedLabel: 'Kuruluş',
    locationLabel: 'Merkez',
    capitalLabel: 'Sermaye Yapısı',
    scopeLabel: 'Faaliyet Kapsamı',
    contactTitle: 'İletişim & Koordinasyon',
    contactCta: 'İletişime Geçin',
    allSubsidiaries: 'Diğer Grup Şirketlerimiz',
    holdingBadge: 'Altınoran Holding İştiraki',
    explore: 'İncele',
  };

  // Schema.org BreadcrumbList Rich Snippet
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: localizedLabels.home,
        item: 'https://altinoranyatirimholding.com.tr/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: localizedLabels.subsidiaries,
        item: 'https://altinoranyatirimholding.com.tr/subsidiaries/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: subsidiary.name,
        item: `https://altinoranyatirimholding.com.tr/subsidiaries/${subsidiary.slug}/`,
      },
    ],
  };

  return (
    <article style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Schema.org BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ====================================================================
          HERO BANNER SECTION
          ==================================================================== */}
      <section
        style={{
          position: 'relative',
          padding: '120px 0 70px 0',
          background: 'linear-gradient(180deg, rgba(6, 9, 17, 0.95) 0%, rgba(10, 16, 29, 0.9) 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                listStyle: 'none',
                padding: '6px 14px',
                margin: 0,
                background: 'rgba(15, 25, 46, 0.65)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                fontSize: '0.84rem',
                flexWrap: 'wrap',
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>{localizedLabels.home}</span>
                </Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }} aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.6)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </li>
              <li>
                <Link
                  href="/subsidiaries/"
                  style={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  {localizedLabels.subsidiaries}
                </Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }} aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.6)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </li>
              <li style={{ color: 'var(--gold-300)', fontWeight: 600 }} aria-current="page">
                {subsidiary.name}
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
              <span className="badge" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                {content.tag}
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#CBD5E1',
                }}
              >
                {content.keyFacts.foundedLabel}
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                }}
              >
                {localizedLabels.holdingBadge}
              </span>
            </div>

            <h1
              className="text-gold-gradient"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {content.title}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#E2E8F0',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MAIN CONTENT & SIDEBAR GRID
          ==================================================================== */}
      <section style={{ padding: '70px 0 100px 0', position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)',
              gap: '48px',
              alignItems: 'start',
            }}
            className="subsidiary-grid-layout"
          >
            {/* ================================================================
                LEFT COLUMN: CORPORATE PROFILE, STORY, SERVICES, HIGHLIGHTS
                ================================================================ */}
            <div>
              {/* Featured Image with Glass Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '380px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  boxShadow: 'var(--shadow-lg)',
                  marginBottom: '40px',
                }}
              >
                <Image
                  src={subsidiary.image}
                  alt={subsidiary.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(6, 9, 17, 0.9) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      background: 'rgba(6, 9, 17, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '8px 16px',
                      fontSize: '0.85rem',
                      color: 'var(--gold-200)',
                    }}
                  >
                    {subsidiary.location}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#CBD5E1' }}>
                    {subsidiary.name}
                  </span>
                </div>
              </div>

              {/* Corporate Story */}
              <div className="glass-panel" style={{ padding: '40px 36px', marginBottom: '40px' }}>
                <span className="section-tag" style={{ marginBottom: '10px' }}>
                  {localizedLabels.aboutCompany}
                </span>
                <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '20px', fontWeight: 700 }}>
                  {content.title}
                </h2>
                <p style={{ color: '#E2E8F0', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '24px', fontWeight: 500 }}>
                  {content.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {content.fullStory.map((paragraph, idx) => (
                    <p key={idx} style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.85, margin: 0 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Services & Capabilities */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <span className="section-tag" style={{ marginBottom: '8px' }}>
                    {localizedLabels.coreServices}
                  </span>
                  <h3 className="text-gold-gradient" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
                    {content.subtitle}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                  }}
                >
                  {content.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="glass-panel"
                      style={{
                        padding: '28px 24px',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        transition: 'transform 0.25s ease, border-color 0.25s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(212, 175, 55, 0.12)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--gold-300)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          marginBottom: '16px',
                        }}
                      >
                        0{idx + 1}
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '10px', fontWeight: 700 }}>
                        {srv.title}
                      </h4>
                      <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                        {srv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Assets */}
              <div className="glass-panel" style={{ padding: '36px 32px' }}>
                <span className="section-tag" style={{ marginBottom: '10px' }}>
                  {localizedLabels.highlightsTitle}
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '16px', fontWeight: 700 }}>
                  {subsidiary.name} Varlıkları
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {content.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '8px 18px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        color: 'var(--gold-200)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================================================
                RIGHT COLUMN / SIDEBAR: FACTSHEET, STATS, QUICK JUMP
                ================================================================ */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Factsheet Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '32px 28px',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#FFFFFF',
                    marginBottom: '20px',
                    fontWeight: 700,
                    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                    paddingBottom: '12px',
                  }}
                >
                  {localizedLabels.factsheetTitle}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {localizedLabels.sectorLabel}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: 'var(--gold-300)', fontWeight: 600, marginTop: '2px' }}>
                      {content.keyFacts.sector}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {localizedLabels.foundedLabel}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 600, marginTop: '2px' }}>
                      {content.keyFacts.foundedLabel}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {localizedLabels.locationLabel}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 600, marginTop: '2px' }}>
                      {content.keyFacts.locationLabel}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {localizedLabels.capitalLabel}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: 'var(--gold-200)', fontWeight: 600, marginTop: '2px' }}>
                      {content.keyFacts.capitalStructure}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {localizedLabels.scopeLabel}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 600, marginTop: '2px' }}>
                      {content.keyFacts.scope}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              <div
                className="glass-panel"
                style={{
                  padding: '28px 24px',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                  }}
                >
                  {subsidiary.stats.map((st, idx) => (
                    <div key={idx} style={{ padding: '12px 10px', background: 'rgba(10, 16, 29, 0.6)', borderRadius: 'var(--radius-sm)' }}>
                      <div
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          color: 'var(--gold-300)',
                          fontFamily: 'var(--font-serif)',
                          lineHeight: 1.2,
                          marginBottom: '4px',
                        }}
                      >
                        {st.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '28px 24px',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                }}
              >
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '14px', fontWeight: 700 }}>
                  {localizedLabels.contactTitle}
                </h4>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {subsidiary.contact.address}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', fontSize: '0.88rem' }}>
                  <div style={{ color: 'var(--gold-300)' }}>
                    <strong>Tel:</strong> {subsidiary.contact.phone}
                  </div>
                  <div style={{ color: '#CBD5E1' }}>
                    <strong>E-Posta:</strong> {subsidiary.contact.email}
                  </div>
                </div>

                <Link href="/contact/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>{localizedLabels.contactCta}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Quick Jump: Other Subsidiaries */}
              <div
                className="glass-panel"
                style={{
                  padding: '24px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ fontSize: '0.92rem', color: 'var(--gold-300)', fontWeight: 700, marginBottom: '14px' }}>
                  {localizedLabels.allSubsidiaries}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {otherSubsidiaries.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/subsidiaries/${other.slug}/`}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: '#CBD5E1',
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{other.name}</span>
                      <span style={{ color: 'var(--gold-400)', fontSize: '0.78rem' }}>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Responsive Style helper */}
      <style jsx>{`
        @media (max-width: 992px) {
          .subsidiary-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </article>
  );
}
