'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutContent() {
  const { t, isRTL } = useLanguage();

  const milestones = [
    { year: '2008', title: 'Gayrimenkul & Arazi Geliştirme', desc: 'Demtaş Gayrimenkul Yatırım ile stratejik arsa geliştirme ve konut projeleri temelleri atıldı.' },
    { year: '2010', title: 'İnşaat, Taahhüt & Mimarlık', desc: 'Tekin Yapı ve Mimkon ortaklığı ile nitelikli konut, ticari ve altyapı-üstyapı inşaatları başlatıldı.' },
    { year: '2011', title: 'Akaryakıt & Kurumsal Tedarik', desc: 'Demtaş Akaryakıt istasyon ağı ve Demtaş Evrensel ofis-kırtasiye tedarik operasyonları hayata geçirildi.' },
    { year: '2014', title: 'Sağlık & Bilişim Yatırımları', desc: 'Medistate Kavacık Hastanesi ile ileri sağlık hizmetleri ve Demtaş Bilişim ile kurumsal teknoloji altyapıları kuruldu.' },
    { year: '2026', title: '10 Grup Şirketi & Küresel Ağ', desc: 'Eston Yapı, AzerGıda, AzerTarım ve uluslararası dış ticaret ağı ile 6 stratejik sektörde çok yönlü büyüme.' },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* History & Milestones */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Zaman Çizelgesi</span>
            <h2 className="section-title text-gold-gradient">15 Yıllık Kesintisiz Büyüme Yolculuğu</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Her adımda planlı ve disiplinli adımlarla Türkiye ekonomisine değer katan kilometre taşlarımız.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '24px',
            }}
          >
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--gold-400)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--gold-300)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
