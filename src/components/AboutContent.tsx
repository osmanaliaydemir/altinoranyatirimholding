'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { HOLDING_DATA, BoardMember } from '@/data/holdingData';

export default function AboutContent() {
  const { t, isRTL } = useLanguage();

  const milestones = [
    { year: '2011', title: 'Kuruluş & İlk Temeller', desc: 'İstanbul merkezli gayrimenkul ve yatırım ortaklığı olarak faaliyete başlandı.' },
    { year: '2015', title: 'Enerji & Sanayi Açılımı', desc: 'Yenilenebilir enerji yatırımları portföye dahil edilerek ilk GES santrali devreye alındı.' },
    { year: '2019', title: 'Portföy Yönetimi & Fonlar', desc: 'Sermaye piyasaları lisanslamaları tamamlanarak Altınoran Portföy ve GSYO kuruldu.' },
    { year: '2023', title: 'Global Lojistik & İleri Teknoloji', desc: 'Robotik otomasyon ve intermodal lojistik yatırımlarıyla uluslararası pazarlara açılındı.' },
    { year: '2026', title: '₺18.4 Milyar Konsolide Büyüklük', desc: '6 ana sektörde 18 iştirak ve 4.200 çalışanla Türkiye ve bölgenin öncü holdinglerinden biri.' },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section 1: History & Milestones */}
        <div style={{ marginBottom: '90px' }}>
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

        {/* Section 2: Board of Directors & Leadership */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag">Üst Yönetim</span>
            <h2 className="section-title text-gold-gradient">Yönetim Kurulu ve Lider Kadromuz</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Küresel tecrübeye sahip, vizyoner ve liyakat odaklı yönetim kurulumuz.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {HOLDING_DATA.boardMembers.map((member: BoardMember, idx: number) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="badge" style={{ fontSize: '0.78rem' }}>{member.role}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--gold-400)' }}>Altınoran Holding</span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '6px' }}>
                    {member.name}
                  </h3>
                  <div style={{ color: 'var(--gold-300)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '16px' }}>
                    {member.title}
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
