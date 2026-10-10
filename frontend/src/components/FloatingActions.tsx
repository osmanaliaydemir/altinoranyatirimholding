'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingActions() {
  const { lang, isRTL } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const backToTopLabel = {
    tr: 'Sayfa Başına Dön',
    en: 'Back to Top',
    ar: 'العودة للأعلى',
  }[lang] || 'Sayfa Başına Dön';

  if (!showBackToTop) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        [isRTL ? 'left' : 'right']: '28px',
        zIndex: 990,
      }}
    >
      <button
        onClick={scrollToTop}
        aria-label={backToTopLabel}
        title={backToTopLabel}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(15, 25, 46, 0.9)',
          border: '1.5px solid rgba(212, 175, 55, 0.5)',
          color: 'var(--gold-300)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(212, 175, 55, 0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.borderColor = 'var(--gold-400)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.45)';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(212, 175, 55, 0.25)';
          e.currentTarget.style.color = 'var(--gold-300)';
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}
