'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { NewsItemType } from '@/data/translations';

export default function NewsSection() {
  const { t } = useLanguage();

  return (
    <section id="medya" style={{ padding: '100px 0', background: 'rgba(10, 16, 29, 0.6)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">{t.news.tag}</span>
          <h2 className="section-title text-gold-gradient" style={{ margin: '0 auto 16px', maxWidth: '780px' }}>
            {t.news.title}
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {t.news.subtitle}
          </p>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid-3">
          {t.news.items.map((news: NewsItemType) => (
            <article
              key={news.id}
              className="glass-panel"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    {news.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{news.date}</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    lineHeight: 1.45,
                    color: '#FFFFFF',
                    marginBottom: '14px',
                    fontFamily: 'inherit',
                    fontWeight: 700,
                  }}
                >
                  {news.title}
                </h3>

                <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {news.summary}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href="#haber-detay"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    alert(`"${news.title}" kurumsal bülteni.`);
                  }}
                  className="btn-ghost"
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                    textDecoration: 'none',
                  }}
                >
                  <span>{t.news.readMore}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
