'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';

interface NavSubItem {
  label: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
}

interface NavGroup {
  id: string;
  label: string;
  href?: string;
  items?: NavSubItem[];
}

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    corporate: true,
    operations: true,
    mediaContact: true,
  });

  const langRef = useRef<HTMLDivElement>(null);
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') {
      return pathname === '/' || pathname === '';
    }
    const cleanPath = pathname.replace(/\/$/, '');
    const cleanHref = href.replace(/\/$/, '');
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + '/');
  };

  const isGroupActive = (group: NavGroup) => {
    if (group.href) {
      return isLinkActive(group.href);
    }
    if (group.items) {
      return group.items.some((sub) => isLinkActive(sub.href));
    }
    return false;
  };

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
        setActiveDropdown(null);
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

  const handleMouseEnter = (id: string) => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownCloseTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Structured Nav Groups (5 Main Categories)
  const navGroups: NavGroup[] = [
    {
      id: 'home',
      label: t.nav.home,
      href: '/',
    },
    {
      id: 'corporate',
      label: lang === 'tr' ? 'Kurumsal' : lang === 'ar' ? 'عن المجموعة' : 'Corporate',
      items: [
        {
          label: lang === 'tr' ? 'Kurumsal Profil & Vizyon' : lang === 'ar' ? 'الملف المؤسسي والرؤية' : 'Corporate Profile & Vision',
          href: '/about/',
          desc: lang === 'tr' ? '15 yıllık köklü yatırım mirası ve yönetim kurulu' : lang === 'ar' ? 'إرث استثماري عريق ومجلس الإدارة' : '15-year enduring legacy & board leadership',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M11 11h2M11 15h2M16 11h2M16 15h2M12 3l9 4H3l9-4z" />
            </svg>
          ),
        },
        {
          label: lang === 'tr' ? 'Sürdürülebilirlik & ESG' : lang === 'ar' ? 'الاستدامة والحوكمة' : 'Sustainability & ESG',
          href: '/sustainability/',
          desc: lang === 'tr' ? '2030 net sıfır karbon vizyonu ve sosyal etki' : lang === 'ar' ? 'مستقبل مستدام ومسؤولية بيئية واجتماعية' : '2030 net-zero roadmap & societal impact',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-.5 4.5-1.5 6.5-4 10.5A7 7 0 0 1 11 20z" />
              <path d="m2 2 20 20" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 'operations',
      label: lang === 'tr' ? 'Faaliyetlerimiz' : lang === 'ar' ? 'استثماراتنا' : 'Portfolio',
      items: [
        {
          label: lang === 'tr' ? 'Stratejik Sektörler' : lang === 'ar' ? 'القطاعات الاستراتيجية' : 'Strategic Sectors',
          href: '/sectors/',
          desc: lang === 'tr' ? '6 ana sektörde yüksek katma değerli yatırımlar' : lang === 'ar' ? 'استثمارات حيوية في 6 قطاعات رئيسية' : 'High-multiplier growth across 6 core sectors',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          ),
        },
        {
          label: lang === 'tr' ? 'İştirakler & Grup Şirketleri' : lang === 'ar' ? 'الشركات التابعة' : 'Group Companies & Subsidiaries',
          href: '/subsidiaries/',
          desc: lang === 'tr' ? '10 dinamik lider grup şirketi' : lang === 'ar' ? '10 شركات رائدة في أسواقها' : '10 market-leading operating enterprises',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          ),
        },
      ],
    },
    {
      id: 'mediaContact',
      label: lang === 'tr' ? 'Medya & İletişim' : lang === 'ar' ? 'الإعلام والتواصل' : 'Media & Contact',
      items: [
        {
          label: lang === 'tr' ? 'Medya Odası & Haberler' : lang === 'ar' ? 'المركز الإعلامي' : 'Media Center & News',
          href: '/media/',
          desc: lang === 'tr' ? 'Basın bültenleri, kurumsal duyurular ve medya kiti' : lang === 'ar' ? 'البيانات الصحفية والأخبار المؤسسية' : 'Press releases, news & official assets',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
              <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"></path>
            </svg>
          ),
        },
        {
          label: lang === 'tr' ? 'İletişim & Genel Merkez' : lang === 'ar' ? 'اتصل بنا' : 'Contact & Headquarters',
          href: '/contact/',
          desc: lang === 'tr' ? 'Maslak genel merkez ve kurumsal kanallar' : lang === 'ar' ? 'المقر الرئيسي في مسلك وقنوات التواصل' : 'Maslak headquarters & stakeholder channels',
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <header className={`header-glass ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/images/logo.webp"
            alt="Altınoran Yatırım Holding"
            width={240}
            height={50}
            priority
            style={{ width: 'auto', height: '48px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation Links with Dropdown Menus */}
        <nav style={{ display: 'none', gap: 'clamp(14px, 1.8vw, 26px)', alignItems: 'center' }} className="desktop-nav">
          {navGroups.map((group) => {
            const groupActive = isGroupActive(group);

            // Direct Link (Ana Sayfa, Yatırımcı İlişkileri)
            if (group.href) {
              return (
                <Link
                  key={group.id}
                  href={group.href}
                  className={`nav-link ${groupActive ? 'active' : ''}`}
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: '0.88rem',
                    fontWeight: groupActive ? 700 : 500,
                    letterSpacing: '0.01em',
                    padding: '8px 4px',
                    color: groupActive ? 'var(--gold-300)' : undefined,
                  }}
                >
                  {group.label}
                </Link>
              );
            }

            // Dropdown Group (Kurumsal, Faaliyetlerimiz, Medya & İletişim)
            const isDropdownOpen = activeDropdown === group.id;

            return (
              <div
                key={group.id}
                className="nav-dropdown-group"
                onMouseEnter={() => handleMouseEnter(group.id)}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
              >
                <button
                  type="button"
                  className={`nav-link ${groupActive ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(isDropdownOpen ? null : group.id)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    whiteSpace: 'nowrap',
                    fontSize: '0.88rem',
                    fontWeight: groupActive ? 700 : 500,
                    letterSpacing: '0.01em',
                    padding: '8px 4px',
                    color: groupActive ? 'var(--gold-300)' : undefined,
                  }}
                >
                  <span>{group.label}</span>
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
                      transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: groupActive ? 'var(--gold-400)' : '#94A3B8',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Dropdown Menu Card */}
                {isDropdownOpen && (
                  <div
                    className="dropdown-menu-wrapper"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: isRTL ? 'auto' : 0,
                      right: isRTL ? 0 : 'auto',
                      paddingTop: '10px',
                      zIndex: 1005,
                    }}
                  >
                    <div
                      className="dropdown-card"
                      style={{
                        width: '320px',
                        background: 'rgba(10, 16, 29, 0.97)',
                        border: '1px solid rgba(212, 175, 55, 0.35)',
                        borderRadius: '14px',
                        padding: '8px',
                        boxShadow: '0 20px 48px rgba(0, 0, 0, 0.8), 0 0 16px rgba(212, 175, 55, 0.12)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        animation: 'navFadeDown 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {group.items?.map((sub) => {
                        const subActive = isLinkActive(sub.href);
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="dropdown-sub-item"
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              padding: '10px 12px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              background: subActive ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                              border: subActive ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid transparent',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <div
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '8px',
                                background: subActive ? 'var(--gradient-gold)' : 'rgba(212, 175, 55, 0.1)',
                                border: '1px solid rgba(212, 175, 55, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: subActive ? '#060911' : 'var(--gold-300)',
                                flexShrink: 0,
                                marginTop: '1px',
                              }}
                            >
                              {sub.icon}
                            </div>
                            <div style={{ flex: 1, minWidth: 0, textAlign: isRTL ? 'right' : 'left' }}>
                              <div
                                style={{
                                  fontSize: '0.88rem',
                                  fontWeight: subActive ? 700 : 600,
                                  color: subActive ? 'var(--gold-300)' : '#FFFFFF',
                                  lineHeight: 1.3,
                                  marginBottom: '3px',
                                }}
                              >
                                {sub.label}
                              </div>
                              <div
                                style={{
                                  fontSize: '0.76rem',
                                  color: '#94A3B8',
                                  lineHeight: 1.35,
                                }}
                              >
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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

            {/* Language Dropdown List */}
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
                  zIndex: 1006,
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

      {/* Mobile Drawer Menu (Hierarchical Groups) */}
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
            gap: '8px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.85)',
            maxHeight: 'calc(100vh - var(--nav-height))',
            overflowY: 'auto',
          }}
        >
          {navGroups.map((group) => {
            // Direct Link in mobile
            if (group.href) {
              const active = isLinkActive(group.href);
              return (
                <Link
                  key={group.id}
                  href={group.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link ${active ? 'active' : ''}`}
                  style={{
                    fontSize: '1.02rem',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: active ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                    color: active ? 'var(--gold-300)' : '#CBD5E1',
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  {group.label}
                </Link>
              );
            }

            // Accordion Dropdown Group in mobile
            const groupActive = isGroupActive(group);
            const isExpanded = mobileExpanded[group.id] ?? false;

            return (
              <div
                key={group.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: groupActive ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded((prev) => ({ ...prev, [group.id]: !prev[group.id] }))
                  }
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    background: 'transparent',
                    border: 'none',
                    color: groupActive ? 'var(--gold-300)' : '#FFFFFF',
                    fontSize: '1.02rem',
                    fontWeight: groupActive ? 700 : 600,
                    cursor: 'pointer',
                    textAlign: isRTL ? 'right' : 'left',
                  }}
                >
                  <span>{group.label}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: groupActive ? 'var(--gold-400)' : '#94A3B8',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isExpanded && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      padding: '4px 8px 10px',
                      background: 'rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {group.items?.map((sub) => {
                      const subActive = isLinkActive(sub.href);
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '9px 12px',
                            borderRadius: '6px',
                            background: subActive ? 'rgba(212, 175, 55, 0.16)' : 'transparent',
                            color: subActive ? 'var(--gold-300)' : '#CBD5E1',
                            textDecoration: 'none',
                            fontSize: '0.92rem',
                            fontWeight: subActive ? 700 : 500,
                          }}
                        >
                          <div style={{ color: subActive ? 'var(--gold-300)' : '#94A3B8' }}>{sub.icon}</div>
                          <span>{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

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
        .dropdown-sub-item:hover {
          background: rgba(212, 175, 55, 0.14) !important;
          border-color: rgba(212, 175, 55, 0.3) !important;
          transform: translateY(-1px);
        }

        @keyframes navFadeDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .lang-select-btn:hover {
          border-color: var(--gold-400) !important;
          background: rgba(212, 175, 55, 0.14) !important;
          box-shadow: 0 4px 18px rgba(212, 175, 55, 0.25);
        }
        .lang-dropdown-item:hover {
          background: rgba(212, 175, 55, 0.18) !important;
          color: #FFFFFF !important;
        }
        @media (min-width: 1040px) {
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
