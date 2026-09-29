'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';

export default function Navbar() {
  const { lang, setLang, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about/' },
    { label: t.nav.sectors, href: '/sectors/' },
    { label: t.nav.companies, href: '/subsidiaries/' },
    { label: t.nav.investor, href: '/investor-relations/' },
    { label: t.nav.sustainability, href: '/sustainability/' },
    { label: t.nav.media, href: '/media/' },
    { label: t.nav.contact, href: '/contact/' },
  ];

  return (
    <header className={`header-glass ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '12px' }}>
          <Image
            src="/images/logo.svg"
            alt="Altınoran Yatırım Holding"
            width={240}
            height={52}
            priority
            style={{ width: 'auto', height: '44px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '6px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls: Lang Switcher & Contact Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* 3-Language Switcher */}
          <div className="lang-switcher" aria-label="Language Selector">
            <button
              onClick={() => setLang('tr')}
              className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
              title="Türkçe"
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
              title="العربية"
            >
              AR
            </button>
          </div>

          {/* CTA Button */}
          <Link href="/contact/" className="btn btn-primary cta-btn" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            <span>{t.nav.getInTouch}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(6, 9, 17, 0.98)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
              style={{ fontSize: '1.05rem', padding: '10px 0' }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              {t.nav.getInTouch}
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
