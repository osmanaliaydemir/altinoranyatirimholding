'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeCtaSection() {
  const { isRTL, lang } = useLanguage();

  const ctaContent = {
    tr: {
      tag: 'Geleceğe Birlikte',
      title: 'Değer Üreten Yatırımlarda Stratejik Ortaklık',
      description: 'Reel sektör gücü, finansal disiplin ve küresel vizyonla Türkiye ekonomisine ve uluslararası pazarlara değer katıyoruz.',
      contactBtn: 'Genel Merkezimizle İletişime Geçin',
      companiesBtn: 'Grup Şirketlerimizi İnceleyin',
    },
    en: {
      tag: 'Building The Future Together',
      title: 'Strategic Partnerships in High-Value Investments',
      description: 'Empowering Türkiye\'s industrial leap and global markets through real-sector leadership and uncompromising financial discipline.',
      contactBtn: 'Connect with Headquarters',
      companiesBtn: 'Explore Group Companies',
    },
    ar: {
      tag: 'نبني المستقبل معاً',
      title: 'شراكات استراتيجية في استثمارات ذات قيمة مضافة',
      description: 'نساهم في تعزيز الاقتصاد والأسواق الدولية من خلال قوة القطاع الحقيقي والانضباط المالي الصارم.',
      contactBtn: 'تواصل مع المقر الرئيسي',
      companiesBtn: 'استعراض شركات المجموعة',
    },
  };

  const content = ctaContent[lang] || ctaContent.tr;

  return (
    <section style={{ padding: '80px 0 100px', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '56px 40px',
            borderRadius: '24px',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.9) 0%, rgba(8, 14, 26, 0.95) 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          }}
        >
          {/* Subtle Golden Glow Accent */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '300px',
              background: 'radial-gradient(ellipse at top, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '18px', padding: '7px 18px', fontSize: '0.82rem' }}>
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--gold-400)',
                  boxShadow: '0 0 8px var(--gold-400)',
                  display: 'inline-block',
                }}
              />
              {content.tag}
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                lineHeight: 1.2,
                marginBottom: '18px',
                color: '#FFFFFF',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              {content.title}
            </h2>

            <p
              style={{
                color: '#CBD5E1',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                maxWidth: '680px',
                margin: '0 auto 36px',
              }}
            >
              {content.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <Link
                href="/contact/"
                className="btn btn-primary"
                style={{
                  height: '50px',
                  padding: '0 28px',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                }}
              >
                <span>{content.contactBtn}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <Link
                href="/subsidiaries/"
                className="btn btn-outline"
                style={{
                  height: '50px',
                  padding: '0 26px',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                }}
              >
                <span>{content.companiesBtn}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
