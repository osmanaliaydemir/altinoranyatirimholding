'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function SustainabilityContent() {
  const { t } = useLanguage();

  const esgGoals = [
    { target: '2026', title: 'Tüm Binalarda Yeşil Enerji', desc: 'Holding ve grup şirketleri genel merkezlerinin tükettiği elektriğin %100’ünün yenilenebilir kaynaklardan sağlanması.' },
    { target: '2028', title: 'Sıfır Atık & Döngüsel Ekonomi', desc: 'Sanayi ve üretim tesislerimizde endüstriyel atıkların %95 oranında geri dönüştürülmesi ve döngüsel ekonomiye kazandırılması.' },
    { target: '2030', title: 'Net Sıfır Karbon (Net-Zero)', desc: 'Tüm operasyonel varlıklarda Kapsam 1 ve Kapsam 2 sera gazı salınımlarının net sıfır seviyesine indirilmesi.' },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Big Highlight Banner with Clean Energy Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '80px',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '48px',
          }}
        >
          <Image
            src="/images/energy.jpg"
            alt="Altınoran Yenilenebilir Yeşil Enerji Santralleri"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(6, 9, 17, 0.35) 0%, rgba(6, 9, 17, 0.95) 85%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
            <span className="badge" style={{ marginBottom: '14px', background: 'rgba(16, 185, 129, 0.2)', borderColor: '#10B981', color: '#6EE7B7' }}>
              ESG & 2030 İklim Taahhüdü
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '12px' }}>
              <span style={{ fontSize: '3.8rem', fontWeight: 900, fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1 }}>
                2030
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold-300)' }}>
                Net Sıfır Karbon Hedefi
              </span>
            </div>
            <p style={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
              450 MW toplam kurulu güce ulaşan rüzgar ve güneş santrallerimizle yılda 1.2 milyon ton karbon salınımını önlüyor, yeni nesil batarya depolama teknolojileriyle Türkiye’nin yeşil şebeke dönüşümünü hızlandırıyoruz.
            </p>
          </div>
        </div>

        {/* 3 Pillars: Environment, Social, Governance */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">ESG Mimarisi</span>
            <h2 className="section-title text-gold-gradient">Üç Temel Odak Alanımız</h2>
          </div>

          <div className="grid-3" style={{ gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '36px 30px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10B981',
                  color: '#34D399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: '20px',
                }}
              >
                E
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '12px' }}>Çevresel Sorumluluk</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#94A3B8', fontSize: '0.92rem' }}>
                <li>✓ Yıllık 850 GWh temiz elektrik üretimi</li>
                <li>✓ Tüm kule ve yapılarda LEED Platinum / BREEAM sertifikası</li>
                <li>✓ Su ayak izini azaltan gri su geri kazanım sistemleri</li>
                <li>✓ Endüstriyel tesislerde sıfır atık yönetimi</li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '36px 30px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-400)',
                  color: 'var(--gold-300)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: '20px',
                }}
              >
                S
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '12px' }}>Sosyal Etki & İnsan</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#94A3B8', fontSize: '0.92rem' }}>
                <li>✓ Altınoran Eğitim Vakfı ile 1.500 üniversite bursu</li>
                <li>✓ Üst yönetimde %48 kadın lider temsil oranı</li>
                <li>✓ İş sağlığı ve güvenliğinde sıfır kaza hedefi</li>
                <li>✓ Deprem dirençli sosyal konut ve kentsel katkı projeleri</li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '36px 30px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid #3B82F6',
                  color: '#60A5FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: '20px',
                }}
              >
                G
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '12px' }}>Kurumsal Yönetişim</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#94A3B8', fontSize: '0.92rem' }}>
                <li>✓ Bağımsız Yönetim Kurulu üyeleri denetimi</li>
                <li>✓ Big Four bağımsız mali ve sürdürülebilirlik denetimi</li>
                <li>✓ 7/24 anonim Etik ve Uyum İhbar Hattı</li>
                <li>✓ Çıkar çatışması ve rüşvetle mücadele politikaları</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Yol Haritası</span>
            <h2 className="section-title text-gold-gradient">Net-Zero 2030 Takvimi</h2>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {esgGoals.map((g, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '32px 28px',
                  borderTop: '3px solid var(--gold-400)',
                }}
              >
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                  {g.target}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>{g.title}</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
