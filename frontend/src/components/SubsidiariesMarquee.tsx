'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SUBSIDIARIES_DATA } from '@/data/subsidiariesData';

export default function SubsidiariesMarquee() {
  const { lang, isRTL } = useLanguage();

  const labels = {
    tr: {
      badge: 'Holding Ekosistemi',
      title: '10 Dinamik Grup Şirketiyle Reel Sektör Gücü',
      founded: 'Kuruluş',
      all: 'Tüm İştirakleri İncele',
    },
    en: {
      badge: 'Holding Ecosystem',
      title: 'Real Sector Power with 10 Dynamic Group Companies',
      founded: 'Est.',
      all: 'Explore All Subsidiaries',
    },
    ar: {
      badge: 'منظومة المجموعة',
      title: 'قوة القطاع الحقيقي مع 10 شركات استثمارية تابعة',
      founded: 'تأسست',
      all: 'استعراض كافة الشركات',
    },
  }[lang] || {
    badge: 'Holding Ekosistemi',
    title: '10 Dinamik Grup Şirketiyle Reel Sektör Gücü',
    founded: 'Kuruluş',
    all: 'Tüm İştirakleri İncele',
  };

  const subsidiariesList = Object.values(SUBSIDIARIES_DATA);
  // Duplicate for seamless 0 to -50% infinite marquee loop
  const marqueeItems = [...subsidiariesList, ...subsidiariesList];

  return (
    <section className="corporate-marquee-section" aria-label={labels.title}>
      <div className="container" style={{ marginBottom: '24px' }}>
        <div className="marquee-header-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="marquee-live-pulse" />
            <span className="marquee-badge">{labels.badge}</span>
            <span className="marquee-title-text">{labels.title}</span>
          </div>

          <Link href="/subsidiaries/" className="marquee-explore-link">
            <span>{labels.all}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Marquee Track with Left & Right Gradient Mask */}
      <div className="marquee-viewport" style={{ direction: 'ltr' }}>
        <div className="marquee-track">
          {marqueeItems.map((item, idx) => {
            const content = item[lang] || item.tr;
            return (
              <Link
                key={`${item.slug}-${idx}`}
                href={`/subsidiaries/${item.slug}/`}
                className="marquee-card"
                title={`${item.name} - ${content.tag}`}
              >
                <div className="marquee-card-top">
                  <div className="marquee-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <span className="marquee-card-tag">{content.tag}</span>
                </div>

                <div className="marquee-card-name">{item.name}</div>

                <div className="marquee-card-bottom">
                  <span className="marquee-card-year">
                    {labels.founded} {item.founded} &bull; {item.location.split(',')[0]}
                  </span>
                  <span className="marquee-card-arrow">&rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

