'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SectorItem } from '@/data/translations';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer
      style={{
        background: '#04070D',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        paddingTop: '80px',
        paddingBottom: '32px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Main 4-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Image
                src="/images/logo.svg"
                alt="Altınoran Yatırım Holding"
                width={220}
                height={48}
                style={{ width: 'auto', height: '42px', objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {t.footer.desc}
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['linkedin', 'twitter', 'instagram', 'youtube'].map((platform, i) => (
                <a
                  key={i}
                  href={`#${platform}`}
                  aria-label={platform}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-300)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', textTransform: 'capitalize' }}>
                    {platform[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>
              {t.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              <li>
                <Link href="/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/sectors/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.sectors}
                </Link>
              </li>
              <li>
                <Link href="/subsidiaries/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.companies}
                </Link>
              </li>
              <li>
                <Link href="/investor-relations/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.investor}
                </Link>
              </li>
              <li>
                <Link href="/sustainability/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.sustainability}
                </Link>
              </li>
              <li>
                <Link href="/media/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.media}
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="nav-link" style={{ padding: 0 }}>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>
              {t.footer.sectorsTitle}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {t.sectors.list.map((s: SectorItem) => (
                <li key={s.id}>
                  <Link href="/sectors/" className="nav-link" style={{ padding: 0, fontSize: '0.88rem' }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '14px', letterSpacing: '0.05em' }}>
              {t.footer.newsletterTitle}
            </h4>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
              {t.footer.newsletterDesc}
            </p>

            {newsletterSubscribed ? (
              <div style={{ color: '#10B981', fontSize: '0.9rem', fontWeight: 600 }}>
                ✓ Başarıyla abone oldunuz.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="email"
                  required
                  placeholder="E-posta adresiniz"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="form-input"
                  style={{ padding: '10px 14px', fontSize: '0.88rem' }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '10px 18px', fontSize: '0.88rem', width: '100%' }}
                >
                  {t.footer.newsletterBtn}
                </button>
              </form>
            )}

            <div style={{ marginTop: '24px', fontSize: '0.85rem', color: '#64748B' }}>
              Maslak Mah. Büyükdere Cad. No: 284, Sarıyer / İstanbul
              <br />
              Tel: +90 (212) 345 67 00
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.84rem',
            color: '#64748B',
          }}
        >
          <div>
            © {new Date().getFullYear()} Altınoran Yatırım Holding A.Ş. {t.footer.rights}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <a href="#kvkk" onClick={(e) => { e.preventDefault(); alert(t.footer.kvkk); }} style={{ color: '#94A3B8', textDecoration: 'none' }}>
              {t.footer.kvkk}
            </a>
            <a href="#gizlilik" onClick={(e) => { e.preventDefault(); alert(t.footer.privacy); }} style={{ color: '#94A3B8', textDecoration: 'none' }}>
              {t.footer.privacy}
            </a>
            <a href="#kullanim" onClick={(e) => { e.preventDefault(); alert(t.footer.terms); }} style={{ color: '#94A3B8', textDecoration: 'none' }}>
              {t.footer.terms}
            </a>
            <a href="#etik" onClick={(e) => { e.preventDefault(); alert(t.footer.ethics); }} style={{ color: '#94A3B8', textDecoration: 'none' }}>
              {t.footer.ethics}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
