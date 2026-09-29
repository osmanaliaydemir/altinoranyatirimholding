'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ReportItemType } from '@/data/translations';

export default function InvestorContent() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calendarEvents = [
    { date: '12 Mart 2026', title: '2025 Yıl Sonu Konsolide Finansal Sonuçların Açıklanması' },
    { date: '28 Nisan 2026', title: 'Olağan Genel Kurul Toplantısı & Kar Payı Dağıtım Kararı' },
    { date: '10 Haziran 2026', title: '2026/1. Çeyrek Finansal Raporlarının İlanı' },
    { date: '28 Ağustos 2026', title: '2026/2. Çeyrek Yarıyıl Faaliyet Raporu ve Yatırımcı Sunumu' },
    { date: '12 Kasım 2026', title: '2026/3. Çeyrek Finansal Tabloların Kamuya Duyurulması' },
  ];

  const shareholding = [
    { name: 'Aydemir Ailesi & Kurucu Ortaklar', ratio: '%65.0' },
    { name: 'Nitelikli Kurumsal Yatırımcılar', ratio: '%20.0' },
    { name: 'Girişim Sermayesi & Stratejik Ortaklar', ratio: '%15.0' },
  ];

  const faqs = [
    {
      q: 'Holdingin ana kar payı (temettü) dağıtım politikası nedir?',
      a: 'Altınoran Yatırım Holding, genel kurul onayına tabi olarak dağıtılabilir dönem karının asgari %30’unu nakit veya bedelsiz pay olarak hissedarlarına dağıtmayı ilke edinmiştir.',
    },
    {
      q: 'Bağımsız denetim hangi kuruluş tarafından yürütülmektedir?',
      a: 'Grubumuzun konsolide finansal tabloları uluslararası kabul görmüş Big Four bağımsız denetim kuruluşu tarafından denetlenmektedir.',
    },
    {
      q: 'Yatırımcı İlişkileri Birimi ile nasıl iletişime geçebilirim?',
      a: 'Kurumsal analistler ve pay sahipleri ir@altinoranyatirimholding.com.tr adresi veya +90 (212) 345 67 00 numaralı hattan direkt direktörlüğümüze ulaşabilir.',
    },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Financial Metrics Summary */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Performans Göstergeleri</span>
            <h2 className="section-title text-gold-gradient">2026 Yarıyıl Konsolide Finansal Özet</h2>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '32px 28px', borderLeft: '4px solid var(--gold-400)' }}>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '6px' }}>Konsolide Toplam Aktifler</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>₺18.4 Mr</div>
              <div style={{ fontSize: '0.82rem', color: '#10B981', marginTop: '6px' }}>↑ %38 Yıllık Bileşik Büyüme</div>
            </div>

            <div className="glass-panel" style={{ padding: '32px 28px', borderLeft: '4px solid #3B82F6' }}>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '6px' }}>Konsolide Net Hasılat</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>₺6.8 Mr</div>
              <div style={{ fontSize: '0.82rem', color: '#10B981', marginTop: '6px' }}>Güçlü İhracat ve Reel Gelir Dağılımı</div>
            </div>

            <div className="glass-panel" style={{ padding: '32px 28px', borderLeft: '4px solid #10B981' }}>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '6px' }}>FAVÖK Marjı</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>%32.4</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--gold-200)', marginTop: '6px' }}>Yüksek Nakit Yaratma Kapasitesi</div>
            </div>
          </div>
        </div>

        {/* 2-Column: Reports & Financial Calendar */}
        <div className="grid-2" style={{ gap: '48px', marginBottom: '80px', alignItems: 'flex-start' }}>
          {/* Reports */}
          <div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '24px' }}>
              Faaliyet ve Sürdürülebilirlik Raporları
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {t.investorRelations.reports.map((report: ReportItemType, idx: number) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        color: '#EF4444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                      }}
                    >
                      PDF
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--gold-400)', fontWeight: 700 }}>
                        {report.year} • {report.period} ({report.size})
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>
                        {report.title}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`${report.title} indiriliyor...`)}
                    className="btn btn-outline"
                    style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                  >
                    İndir
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar & Shareholding */}
          <div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '24px' }}>
              2026 Finansal Takvim
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {calendarEvents.map((ev, i) => (
                <div
                  key={i}
                  className="glass-panel"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ minWidth: '110px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold-400)' }}>
                    {ev.date}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#E2E8F0' }}>{ev.title}</div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '14px' }}>
              Sermaye & Pay Sahipliği Yapısı
            </h4>
            <div className="glass-panel" style={{ padding: '20px' }}>
              {shareholding.map((sh, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: idx < shareholding.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  <span style={{ color: '#94A3B8' }}>{sh.name}</span>
                  <span style={{ color: 'var(--gold-300)', fontWeight: 700 }}>{sh.ratio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Sıkça Sorulan Sorular</span>
            <h2 className="section-title text-gold-gradient">Yatırımcı SSS</h2>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{ padding: '20px 24px', cursor: 'pointer' }}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF' }}>{faq.q}</div>
                    <span style={{ color: 'var(--gold-400)', fontSize: '1.2rem' }}>{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '12px', color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, margin: '12px 0 0' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
