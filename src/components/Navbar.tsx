'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';

export default function Navbar() {
  const { lang, setLang, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; full: string; flag: string }[] = [
    { code: 'tr', label: 'TR', full: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'EN', full: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'AR', full: 'العربية', flag: '🇸🇦' },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/images/logo.svg"
            alt="Altınoran Yatırım Holding"
            width={210}
            height={46}
            priority
            style={{ width: 'auto', height: '38px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: 'clamp(10px, 1.4vw, 20px)', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="nav-link"
              style={{
                whiteSpace: 'nowrap',
                fontSize: '0.86rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                padding: '6px 4px',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls: Lang Select & Contact Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Custom Select Language Dropdown */}
          <div ref={langRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-select-btn"
              aria-label="Language Selector"
              aria-haspopup="listbox"
              aria-expanded={langDropdownOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '38px',
                padding: '0 14px',
                background: 'rgba(15, 25, 46, 0.75)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{currentLang.flag} {currentLang.label}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  color: 'var(--gold-300)',
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div
                role="listbox"
                className="lang-dropdown-menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: isRTL ? 'auto' : 0,
                  left: isRTL ? 0 : 'auto',
                  minWidth: '155px',
                  background: 'rgba(10, 16, 29, 0.96)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  borderRadius: '10px',
                  padding: '6px',
                  boxShadow: '0 14px 34px rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  zIndex: 1001,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                }}
              >
                {languages.map((item) => {
                  const isActive = lang === item.code;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => {
                        setLang(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className="lang-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        background: isActive ? 'rgba(212, 175, 55, 0.16)' : 'transparent',
                        border: 'none',
                        color: isActive ? 'var(--gold-300)' : '#CBD5E1',
                        fontSize: '0.84rem',
                        fontWeight: isActive ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: isRTL ? 'right' : 'left',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{item.flag}</span>
                        <span>{item.full}</span>
                      </span>
                      {isActive && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact/"
            className="btn btn-primary cta-btn"
            style={{
              height: '38px',
              padding: '0 16px',
              fontSize: '0.84rem',
              borderRadius: '8px',
              fontWeight: 700,
              gap: '6px',
            }}
          >
            <span>{t.nav.getInTouch}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          {/* Mobile Language Selector & CTA */}
          <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
              <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>Dil / Language / اللغة:</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLang(item.code);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: lang === item.code ? '1px solid var(--gold-400)' : '1px solid rgba(255,255,255,0.15)',
                      background: lang === item.code ? 'var(--gradient-gold)' : 'rgba(15,25,46,0.8)',
                      color: lang === item.code ? '#060911' : '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {item.flag} {item.label}
                  </button>
                ))}
              </div>
            </div>

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
        .lang-select-btn:hover {
          border-color: var(--gold-400) !important;
          background: rgba(212, 175, 55, 0.14) !important;
          box-shadow: 0 4px 18px rgba(212, 175, 55, 0.25);
        }
        .lang-dropdown-item:hover {
          background: rgba(212, 175, 55, 0.18) !important;
          color: #FFFFFF !important;
        }
        @media (min-width: 1140px) {
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
