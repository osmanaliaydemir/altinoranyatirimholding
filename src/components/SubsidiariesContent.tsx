'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface Company {
  id: string;
  name: string;
  sector: string;
  sectorTag: string;
  founded: string;
  desc: string;
  keyMetric: string;
  location: string;
}

export default function SubsidiariesContent() {
  const { t } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const companies: Company[] = [
    {
      id: '1',
      name: 'Altınoran GYO A.Ş.',
      sector: 'Gayrimenkul',
      sectorTag: 'real-estate',
      founded: '2012',
      desc: 'A+ karma projeler, kentsel lüks rezidanslar ve ticari kulelerin geliştirilmesi ve portföy yönetimi.',
      keyMetric: '₺7.2 Milyar Portföy',
      location: 'Maslak / İstanbul',
    },
    {
      id: '2',
      name: 'Altınoran İnşaat & Mimarlık',
      sector: 'Gayrimenkul',
      sectorTag: 'real-estate',
      founded: '2014',
      desc: 'LEED Platinum standartlarında ileri mühendislik ve sürdürülebilir taahhüt projeleri.',
      keyMetric: '1.4M m² Alan',
      location: 'Sarıyer / İstanbul',
    },
    {
      id: '3',
      name: 'Altınoran Enerji Üretim A.Ş.',
      sector: 'Yenilenebilir Enerji',
      sectorTag: 'energy',
      founded: '2016',
      desc: 'Güneş (GES) ve rüzgar (RES) santrallerinde lisanslı elektrik üretimi ve şebeke tedariki.',
      keyMetric: '450 MW Kurulu Güç',
      location: 'Ankara & Konya',
    },
    {
      id: '4',
      name: 'Solaris Yeşil Enerji A.Ş.',
      sector: 'Yenilenebilir Enerji',
      sectorTag: 'energy',
      founded: '2018',
      desc: 'Sanayi tesisleri için çatı tipi hibrit güneş enerjisi ve bataryalı enerji depolama çözümleri.',
      keyMetric: '850 GWh Yıllık Üretim',
      location: 'İzmir',
    },
    {
      id: '5',
      name: 'Altınoran Portföy Yönetimi A.Ş.',
      sector: 'Finans',
      sectorTag: 'finance',
      founded: '2019',
      desc: 'SPK lisanslı girişim sermayesi yatırım fonları, gayrimenkul yatırım fonları ve serbest fon yönetimi.',
      keyMetric: '₺5.1 Milyar AUM',
      location: 'Levent / İstanbul',
    },
    {
      id: '6',
      name: 'Altınoran Girişim Sermayesi GSYO',
      sector: 'Finans',
      sectorTag: 'finance',
      founded: '2020',
      desc: 'Erken ve büyüme aşamasındaki teknoloji şirketlerine akıllı sermaye ve küresel ölçeklenme desteği.',
      keyMetric: '24 Portföy Şirketi',
      location: 'Maslak / İstanbul',
    },
    {
      id: '7',
      name: 'Altınoran İleri Teknoloji A.Ş.',
      sector: 'Teknoloji',
      sectorTag: 'tech',
      founded: '2021',
      desc: 'Savunma, havacılık ve otomotiv sanayii için hassas titanyum işleme ve CNC otomasyonu.',
      keyMetric: '37 Tescilli Patent',
      location: 'Kocaeli Teknopark',
    },
    {
      id: '8',
      name: 'Oran Robotics Sistemleri',
      sector: 'Teknoloji',
      sectorTag: 'tech',
      founded: '2022',
      desc: 'Endüstri 4.0 uyumlu otonom mobil robotlar (AMR) ve akıllı fabrika hat entegrasyonları.',
      keyMetric: '180+ Ar-Ge Mühendisi',
      location: 'Bursa & İstanbul',
    },
    {
      id: '9',
      name: 'Altınoran Sağlık & Biyoteknoloji',
      sector: 'Sağlık',
      sectorTag: 'health',
      founded: '2019',
      desc: 'Biyomedikal tanı teknolojileri, klinik ar-ge laboratuvarları ve koruyucu sağlık çözümleri.',
      keyMetric: '22 Ülkeye İhracat',
      location: 'İstanbul',
    },
    {
      id: '10',
      name: 'Altınoran Global Lojistik A.Ş.',
      sector: 'Lojistik',
      sectorTag: 'logistics',
      founded: '2017',
      desc: '3 kıtada intermodal taşımacılık, modern antrepolar ve uçtan uca tedarik zinciri yönetimi.',
      keyMetric: '220.000 m² Depolama',
      location: 'Mersin & Kocaeli',
    },
  ];

  const sectorFilters = [
    { label: 'Tümü', value: 'all' },
    { label: 'Gayrimenkul', value: 'real-estate' },
    { label: 'Enerji', value: 'energy' },
    { label: 'Finans & VC', value: 'finance' },
    { label: 'Teknoloji', value: 'tech' },
    { label: 'Sağlık', value: 'health' },
    { label: 'Lojistik', value: 'logistics' },
  ];

  const filteredCompanies =
    selectedSector === 'all'
      ? companies
      : companies.filter((c) => c.sectorTag === selectedSector);

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
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
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge" style={{ fontSize: '0.78rem' }}>{c.sector}</span>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>Kuruluş: {c.founded}</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  {c.name}
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
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-serif)' }}>
                  {c.keyMetric}
                </div>
                <Link
                  href="/contact/"
                  className="btn-ghost"
                  style={{ fontSize: '0.85rem', padding: 0, textDecoration: 'none' }}
                >
                  İletişime Geç →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
