'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MetricItem } from '@/data/translations';

export default function KeyMetricsSection() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '90px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">{t.metrics.title}</span>
          <h2 className="section-title text-gold-gradient" style={{ margin: '0 auto 16px', maxWidth: '750px' }}>
            {t.metrics.subtitle}
          </h2>
        </div>

        {/* 6 Grid Metrics Cards */}
        <div className="grid-3">
          {t.metrics.items.map((item: MetricItem, idx: number) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '210px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                  {item.prefix && (
                    <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold-400)' }}>
                      {item.prefix}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '3.2rem',
                      fontWeight: 800,
                      lineHeight: 1,
                      fontFamily: 'var(--font-serif)',
                      background: 'var(--gradient-gold)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.value}
                  </span>
                  {item.suffix && (
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold-200)' }}>
                      {item.suffix}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  {item.label}
                </h3>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
