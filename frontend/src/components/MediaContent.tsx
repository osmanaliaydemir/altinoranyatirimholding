'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { HOLDING_DATA } from '@/data/holdingData';

export default function MediaContent() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* News Grid */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Basın Bültenleri</span>
            <h2 className="section-title text-gold-gradient">Son Gelişmeler & Duyurular</h2>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {HOLDING_DATA.news.map((item) => (
              <article
                key={item.id}
                className="glass-panel"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="badge" style={{ fontSize: '0.78rem' }}>{item.category}</span>
                    <span style={{ fontSize: '0.82rem', color: '#64748B' }}>{item.date} • {item.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.45 }}>
                    {item.title}
                  </h3>

                  <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                    {item.summary}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <button
                    onClick={() => alert(`"${item.title}" kurumsal basın bülteni indiriliyor/görüntüleniyor.`)}
                    className="btn-ghost"
                    style={{ padding: 0, fontSize: '0.88rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  >
                    Bülteni Oku →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Media Kit & Press Contact Banner */}
        <div className="grid-2" style={{ gap: '32px' }}>
          {/* Brand Assets */}
          <div className="glass-panel" style={{ padding: '36px 32px' }}>
            <span className="badge" style={{ marginBottom: '14px' }}>Kurumsal Kimlik Kiti</span>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '12px' }}>
              Logo Paketi & Marka Kılavuzu
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Altınoran Yatırım Holding ve iştiraklerimize ait yüksek çözünürlüklü vektörel logolar (SVG, EPS, PNG) ve kurumsal kimlik kullanım kılavuzunu indirebilirsiniz.
            </p>
            <a
              href="/images/logo.svg"
              download="Altinoran_Holding_Logo.svg"
              className="btn btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              Logo Paketini İndir (SVG)
            </a>
          </div>

          {/* Press Contact */}
          <div className="glass-panel" style={{ padding: '36px 32px', background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
            <span className="badge" style={{ marginBottom: '14px' }}>Medya İletişim</span>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '12px' }}>
              Kurumsal İletişim Direktörlüğü
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Röportaj talepleri, basın toplantısı akreditasyonları ve kurumsal bülten kayıtları için medya ekibimizle iletişime geçebilirsiniz.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <div>
                <span style={{ color: '#94A3B8' }}>E-posta: </span>
                <a href="mailto:basin@altinoranyatirimholding.com.tr" style={{ color: 'var(--gold-300)', fontWeight: 600 }}>
                  basin@altinoranyatirimholding.com.tr
                </a>
              </div>
              <div>
                <span style={{ color: '#94A3B8' }}>Santral: </span>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>+90 216 455 14 14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
