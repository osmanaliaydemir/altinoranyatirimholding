'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface Company {
  id: string;
  slug: string;
  name: string;
  sector: string;
  sectorTag: string;
  founded: string;
  desc: string;
  keyMetric: string;
  location: string;
}

export default function SubsidiariesContent() {
  const { lang, isRTL } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const companies: Company[] = [
    {
      id: '1',
      slug: 'demtas-gayrimenkul',
      name: 'Demtaş Gayrimenkul Yatırım',
      sector: 'Gayrimenkul',
      sectorTag: 'real-estate',
      founded: '2008',
      desc: 'Yüksek prestijli arazi geliştirme, arsa değerlendirme, fizibilite ve karlı gayrimenkul yatırım modelleri.',
      keyMetric: 'Arazi Geliştirme & Yatırım',
      location: 'İstanbul',
    },
    {
      id: '2',
      slug: 'tekin-yapi',
      name: 'Tekin Yapı',
      sector: 'İnşaat',
      sectorTag: 'construction',
      founded: '2010',
      desc: 'Nitelikli konut, ticari yapılar ve modern altyapı-üstyapı taahhüt projeleri.',
      keyMetric: 'Altyapı & Üstyapı Taahhüt',
      location: 'İstanbul',
    },
    {
      id: '3',
      slug: 'mimkon',
      name: 'Mimkon',
      sector: 'Mimarlık & Mühendislik',
      sectorTag: 'construction',
      founded: '2012',
      desc: 'Yenilikçi mimari konsept tasarımı, statik projelendirme, iç mimari ve inşaat yönetimi.',
      keyMetric: 'Entegre Mimari & Mühendislik',
      location: 'İstanbul',
    },
    {
      id: '4',
      slug: 'demtas-akaryakit',
      name: 'Demtaş Akaryakıt',
      sector: 'Akaryakıt',
      sectorTag: 'fuel',
      founded: '2011',
      desc: 'Güvenilir akaryakıt istasyon işletmeciliği, kaliteli yakıt ikmali ve kurumsal filo çözümleri.',
      keyMetric: '7/24 Kesintisiz Enerji İkmali',
      location: 'İstanbul & Bölge',
    },
    {
      id: '5',
      slug: 'demtas-bilisim',
      name: 'Demtaş Bilişim',
      sector: 'Bilişim & Teknoloji',
      sectorTag: 'office-tech',
      founded: '2014',
      desc: 'Kurumsal bilişim altyapıları, donanım sistemleri, kurumsal yazılım ve bilgi teknolojileri entegrasyonu.',
      keyMetric: 'Bilişim & Dijital Altyapı',
      location: 'İstanbul',
    },
    {
      id: '6',
      slug: 'demtas-evrensel',
      name: 'Demtaş Evrensel',
      sector: 'Ofis-Kırtasiye',
      sectorTag: 'office-tech',
      founded: '2013',
      desc: 'Kurumsal şirketlerin tüm ofis, kırtasiye ve sarf malzemesi tedarik zincirini toptan ve perakende karşılama.',
      keyMetric: 'Kurumsal Tedarik Zinciri',
      location: 'İstanbul',
    },
    {
      id: '7',
      slug: 'medistate',
      name: 'Medistate Kavacık Hastanesi',
      sector: 'Sağlık',
      sectorTag: 'health',
      founded: '2014',
      desc: 'Bütüncül kalite anlayışı, etik ilkeler ve uzman kadro ile ileri teknoloji tam teşekküllü tıp hizmetleri.',
      keyMetric: 'A+ Kalite Sağlık Hizmeti',
      location: 'Kavacık / İstanbul',
    },
    {
      id: '8',
      slug: 'eston-yapi',
      name: 'Eston Yapı A.Ş.',
      sector: 'İnşaat & Gayrimenkul',
      sectorTag: 'construction',
      founded: '1965',
      desc: 'Türkiye\'nin köklü konut ve yapı geliştirme markası, büyük ölçekli yerleşim ve kentsel yaşam projeleri.',
      keyMetric: 'Köklü Yapı Mirası',
      location: 'İstanbul',
    },
    {
      id: '9',
      slug: 'azer-gida',
      name: 'AzerGıda',
      sector: 'Gıda & Tüketim',
      sectorTag: 'agro-trade',
      founded: '2016',
      desc: 'Kaliteli gıda üretimi, paketleme ve toptan gıda tedariği ile güvenilir dağıtım zinciri.',
      keyMetric: 'Güvenilir Gıda Tedariği',
      location: 'İstanbul & Global',
    },
    {
      id: '10',
      slug: 'azer-tarim',
      name: 'AzerTarım',
      sector: 'Tarım & Ziraat',
      sectorTag: 'agro-trade',
      founded: '2017',
      desc: 'Sürdürülebilir tarımsal üretim, modern seracılık ve katma değerli zirai yatırımlar.',
      keyMetric: 'Modern Tarım & Ziraat',
      location: 'Türkiye & Bölge',
    },
  ];

  const sectorFilters = [
    { label: 'Tümü (10)', value: 'all' },
    { label: 'Gayrimenkul', value: 'real-estate' },
    { label: 'İnşaat & Mimarlık', value: 'construction' },
    { label: 'Sağlık', value: 'health' },
    { label: 'Akaryakıt', value: 'fuel' },
    { label: 'Ofis & Bilişim', value: 'office-tech' },
    { label: 'Gıda & Tarım', value: 'agro-trade' },
  ];

  const filteredCompanies =
    selectedSector === 'all'
      ? companies
      : companies.filter((c) => c.sectorTag === selectedSector);

  const detailLabel = {
    tr: 'Şirket Sayfası',
    en: 'Company Page',
    ar: 'صفحة الشركة',
  }[lang] || 'Şirket Sayfası';

  return (
    <section style={{ padding: '80px 0', position: 'relative', direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="container">
        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {sectorFilters.map((flt) => (
            <button
              key={flt.value}
              onClick={() => setSelectedSector(flt.value)}
              className={`tab-button ${selectedSector === flt.value ? 'active' : ''}`}
              style={{ padding: '10px 18px', fontSize: '0.9rem' }}
            >
              {flt.label}
            </button>
          ))}
        </div>

        {/* Companies Grid */}
        <div className="grid-2" style={{ gap: '28px' }}>
          {filteredCompanies.map((c) => (
            <div
              key={c.id}
              className="glass-panel"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge" style={{ fontSize: '0.78rem' }}>{c.sector}</span>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Kuruluş: {c.founded}</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                  <Link
                    href={`/subsidiaries/${c.slug}/`}
                    style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  >
                    {c.name}
                  </Link>
                </h3>

                <div style={{ color: 'var(--gold-400)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '16px' }}>
                  {c.location}
                </div>

                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 20px' }}>
                  {c.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>
                  {c.keyMetric}
                </div>
                <Link
                  href={`/subsidiaries/${c.slug}/`}
                  className="btn btn-outline"
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>{detailLabel}</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isRTL ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
