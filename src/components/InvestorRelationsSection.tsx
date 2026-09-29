'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ReportItemType } from '@/data/translations';

export default function InvestorRelationsSection() {
  const { t } = useLanguage();

  return (
    <section id="yatirimci" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">{t.investorRelations.tag}</span>
          <h2 className="section-title text-gold-gradient" style={{ margin: '0 auto 16px', maxWidth: '780px' }}>
            {t.investorRelations.title}
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {t.investorRelations.subtitle}
          </p>
        </div>

        {/* 2-Column: Financial Highlights Card & Financial Reports List */}
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '36px' }}>
          {/* Financial Highlights */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: 'linear-gradient(135deg, rgba(16, 26, 48, 0.9) 0%, rgba(8, 14, 26, 0.95) 100%)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span className="badge">{t.investorRelations.financialSummary}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 600 }}>BIST / Konsolide</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div style={{ padding: '18px 20px', background: 'rgba(10, 16, 29, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '4px' }}>Konsolide Hasılat / Net Sales</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>₺6.8 Milyar</div>
                <div style={{ fontSize: '0.8rem', color: '#10B981', marginTop: '2px' }}>↑ %34 Yıllık Artış</div>
              </div>

              <div style={{ padding: '18px 20px', background: 'rgba(10, 16, 29, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '4px' }}>FAVÖK Marjı / EBITDA Margin</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>%32.4</div>
                <div style={{ fontSize: '0.8rem', color: '#10B981', marginTop: '2px' }}>Güçlü Operasyonel Nakit Akışı</div>
              </div>

              <div style={{ padding: '18px 20px', background: 'rgba(10, 16, 29, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '4px' }}>Aktif Büyüklük / Total Assets</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>₺18.4 Milyar</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-200)', marginTop: '2px' }}>Dengeli ve Düşük Borçluluk Oranı</div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px' }}>
                {t.investorRelations.governanceTitle}
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {t.investorRelations.governanceDesc}
              </p>
            </div>
          </div>

          {/* Reports & Publications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '12px' }}>
              Faaliyet Raporları ve Yatırımcı Sunumları
            </h3>

            {t.investorRelations.reports.map((report: ReportItemType, idx: number) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '22px 26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  {/* PDF Icon */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#EF4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                    }}
                  >
                    PDF
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-400)' }}>
                        {report.year} • {report.period}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748B' }}>({report.size})</span>
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>
                      {report.title}
                    </div>
                  </div>
                </div>

                <a
                  href="#indir"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`${report.title} (${report.size}) indiriliyor...`);
                  }}
                  className="btn btn-outline"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    gap: '6px',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>İndir</span>
                </a>
              </div>
            ))}

            {/* Investor Relations Contact Card */}
            <div
              className="glass-panel"
              style={{
                padding: '24px 28px',
                marginTop: '12px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <div style={{ fontSize: '0.9rem', color: 'var(--gold-300)', fontWeight: 700, marginBottom: '4px' }}>
                Yatırımcı İlişkileri Direktörlüğü
              </div>
              <p style={{ fontSize: '0.85rem', color: '#CBD5E1', margin: '0 0 12px' }}>
                Kurumsal yatırımcı görüşmeleri ve detaylı finansal modelleme talepleri için:
              </p>
              <a
                href="mailto:ir@altinoranyatirimholding.com.tr"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                ir@altinoranyatirimholding.com.tr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
