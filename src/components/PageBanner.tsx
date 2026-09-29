'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';

interface PageBannerProps {
  tag: string;
  title: string;
  description: string;
  currentPage: string;
  pageKey?: 'about' | 'sectors' | 'subsidiaries' | 'investor' | 'sustainability' | 'media' | 'contact';
}

const bannerDictionary: Record<
  string,
  Record<Language, { tag: string; title: string; description: string; pageTitle: string }>
> = {
  about: {
    tr: {
      tag: 'Kurumsal Kimlik & Vizyon',
      title: 'Geleceğe Güvenle Bakan Köklü Bir Yatırım Mirası',
      description: 'Altınoran Yatırım Holding, evrenin mükemmel uyumu olan altın orandan ilham alarak kurumsal disiplin ve reel sektör gücünü bir araya getiriyor.',
      pageTitle: 'Kurumsal',
    },
    en: {
      tag: 'Corporate Identity & Vision',
      title: 'An Enduring Investment Legacy Looking Ahead with Confidence',
      description: 'Altınoran Yatırım Holding unites corporate discipline and real-sector strength, inspired by universal equilibrium—the Golden Ratio.',
      pageTitle: 'About Us',
    },
    ar: {
      tag: 'الهوية المؤسسية والرؤية',
      title: 'إرث استثماري عريق يتطلع للمستقبل بثقة واقتدار',
      description: 'تجمع ألتن أوران للاستثمار القابضة بين الانضباط المؤسسي وقوة القطاع الحقيقي، مستلهمة من النسبة الذهبية للتوازن الكوني.',
      pageTitle: 'من نحن',
    },
  },
  sectors: {
    tr: {
      tag: 'Stratejik Portföy',
      title: 'Geleceğin Dinamiklerine Yön Veren 6 Temel Sektör',
      description: 'Altın oran dengesiyle yönettiğimiz stratejik iş kollarımızda yüksek katma değer, sürdürülebilir nakit akışı ve küresel rekabet avantajı inşa ediyoruz.',
      pageTitle: 'Sektörler',
    },
    en: {
      tag: 'Strategic Portfolio',
      title: '6 Core Sectors Shaping Tomorrow\'s Growth Dynamics',
      description: 'Across our core operations managed with Golden Ratio precision, we generate high value-add, sustainable cash flows, and global competitive power.',
      pageTitle: 'Sectors',
    },
    ar: {
      tag: 'المحفظة الاستراتيجية',
      title: '6 قطاعات حيوية تقود ديناميكيات النمو المستقبلي',
      description: 'نعمل في قطاعاتنا الاستراتيجية بمعايير النسبة الذهبية لخلق قيمة مضافة وتدفقات نقدية مستدامة وميزة تنافسية عالمية.',
      pageTitle: 'القطاعات',
    },
  },
  subsidiaries: {
    tr: {
      tag: 'Ekosistemimiz',
      title: '18 Grup Şirketi ve Güçlü İştirak Portföyü',
      description: 'Her biri kendi pazarında liderlik hedefleyen, kurumsal yönetim standartlarımızla güçlendirilen iştirak yapımız.',
      pageTitle: 'İştirakler',
    },
    en: {
      tag: 'Our Ecosystem',
      title: '18 Group Companies and a Resilient Portfolio',
      description: 'A robust corporate ecosystem of operational companies and subsidiaries, each aiming for market leadership under premier governance standards.',
      pageTitle: 'Subsidiaries',
    },
    ar: {
      tag: 'منظومتنا الاستثمارية',
      title: '18 شركة رائدة ومحفظة متينة من الشركات التابعة',
      description: 'منظومة مؤسسية قوية من الشركات التشغيلية والاستثمارية، تسعى كل منها لريادة سوقها تحت مظلة حوكمة رشيدة.',
      pageTitle: 'الشركات التابعة',
    },
  },
  investor: {
    tr: {
      tag: 'Finansal Şeffaflık',
      title: 'Yatırımcı İlişkileri & Kurumsal Yönetişim',
      description: 'Uluslararası standartlarda bağımsız denetimden geçen finansal tablolarımız, faaliyet raporlarımız ve paydaş değerini artıran yönetim modelimiz.',
      pageTitle: 'Yatırımcı İlişkileri',
    },
    en: {
      tag: 'Financial Transparency',
      title: 'Investor Relations & Corporate Governance',
      description: 'Independently audited financial reports under international standards, annual disclosures, and a value-accretive stakeholder model.',
      pageTitle: 'Investor Relations',
    },
    ar: {
      tag: 'الشفافية المالية',
      title: 'علاقات المستثمرين والحوكمة المؤسسية',
      description: 'قوائم مالية مدققة دولياً، تقارير سنوية شاملة، ونموذج إداري يعزز القيمة المضافة لجميع المساهمين والشركاء.',
      pageTitle: 'علاقات المستثمرين',
    },
  },
  sustainability: {
    tr: {
      tag: 'ESG & Gelecek',
      title: 'Gelecek Nesillere Karşı Sorumlu, Sürdürülebilir Bir Dünya',
      description: 'Çevresel duyarlılık, toplumsal fayda ve şeffaf kurumsal yönetişimi tüm yatırımlarımızın merkezine yerleştiriyoruz.',
      pageTitle: 'Sürdürülebilirlik',
    },
    en: {
      tag: 'ESG & The Future',
      title: 'A Sustainable World Responsible to Future Generations',
      description: 'Placing environmental stewardship, social prosperity, and transparent governance at the very core of all capital decisions.',
      pageTitle: 'Sustainability',
    },
    ar: {
      tag: 'الاستدامة والمسؤولية',
      title: 'عالم مستدام ومسؤول تجاه الأجيال القادمة',
      description: 'نضع الحفاظ على البيئة، والازدهار المجتمعي، والحوكمة الشفافة في صميم جميع استثماراتنا وقراراتنا المالية.',
      pageTitle: 'الاستدامة',
    },
  },
  media: {
    tr: {
      tag: 'Medya Odası',
      title: 'Haberler, Basın Bültenleri ve Medya Kiti',
      description: 'Altınoran Yatırım Holding ve iştiraklerimizin en güncel yatırım adımları, kurumsal açıklamaları ve basın materyalleri.',
      pageTitle: 'Medya',
    },
    en: {
      tag: 'Media Room',
      title: 'Press Releases, News & Media Kit',
      description: 'The latest corporate updates, strategic investments, and official press assets from Altınoran Yatırım Holding and our portfolio.',
      pageTitle: 'Media',
    },
    ar: {
      tag: 'المركز الإعلامي',
      title: 'الأخبار والبيانات الصحفية والملف الإعلامي',
      description: 'أحدث البيانات الصحفية والأخبار المؤسسية والمواد الإعلامية المعتمدة لمجموعة ألتن أوران وشركاتها التابعة.',
      pageTitle: 'الإعلام',
    },
  },
  contact: {
    tr: {
      tag: 'Bize Ulaşın',
      title: 'Merkez Ofisimiz ve İletişim Kanalları',
      description: 'Kurumsal ortaklıklar, yatırım talepleri ve sorularınız için Maslak Finans Merkezi’ndeki genel merkezimizle bağlantıya geçebilirsiniz.',
      pageTitle: 'İletişim',
    },
    en: {
      tag: 'Contact Us',
      title: 'Headquarters & Global Communication Channels',
      description: 'Connect with our executive headquarters in Maslak Financial District for corporate partnerships, investor inquiries, and stakeholder affairs.',
      pageTitle: 'Contact',
    },
    ar: {
      tag: 'اتصل بنا',
      title: 'المقر الرئيسي وقنوات التواصل المؤسسي',
      description: 'تواصل مع مقرنا الرئيسي في مركز مسلك المالي بإسطنبول للشراكات الاستراتيجية واستفسارات المستثمرين.',
      pageTitle: 'اتصل بنا',
    },
  },
};

export default function PageBanner({ tag, title, description, currentPage, pageKey }: PageBannerProps) {
  const { t, isRTL, lang } = useLanguage();

  // Detect key from pageKey or currentPage
  const resolvedKey =
    pageKey ||
    (currentPage.toLowerCase().includes('kurum')
      ? 'about'
      : currentPage.toLowerCase().includes('sekt')
      ? 'sectors'
      : currentPage.toLowerCase().includes('iştir') || currentPage.toLowerCase().includes('istir')
      ? 'subsidiaries'
      : currentPage.toLowerCase().includes('yatırım') || currentPage.toLowerCase().includes('yatirim')
      ? 'investor'
      : currentPage.toLowerCase().includes('sürdür') || currentPage.toLowerCase().includes('surdur')
      ? 'sustainability'
      : currentPage.toLowerCase().includes('medya')
      ? 'media'
      : currentPage.toLowerCase().includes('ileti')
      ? 'contact'
      : '');

  const localizedData = resolvedKey && bannerDictionary[resolvedKey] ? bannerDictionary[resolvedKey][lang] : null;

  const displayTag = localizedData ? localizedData.tag : tag;
  const displayTitle = localizedData ? localizedData.title : title;
  const displayDesc = localizedData ? localizedData.description : description;
  const displayPage = localizedData ? localizedData.pageTitle : currentPage;

  return (
    <section
      className="page-banner-section"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 36px)',
        paddingBottom: '52px',
        background: 'linear-gradient(180deg, #090F1C 0%, #060911 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.22)',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '420px',
          background: 'radial-gradient(ellipse at top, rgba(212, 175, 55, 0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Golden Ratio Spiral Watermark */}
      <div
        style={{
          position: 'absolute',
          right: isRTL ? 'auto' : '-4%',
          left: isRTL ? '-4%' : 'auto',
          top: '10%',
          width: '420px',
          height: '420px',
          pointerEvents: 'none',
          opacity: 0.05,
          zIndex: 0,
        }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="140" stroke="#D4AF37" strokeWidth="1.2" />
          <path
            d="M 200 60 A 140 140 0 0 1 340 200 A 90 90 0 0 1 250 290 A 60 60 0 0 1 190 230 A 38 38 0 0 1 228 192 A 24 24 0 0 1 252 216"
            stroke="#F3E5AB"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '920px' }}>
          {/* Breadcrumb Navigation Strip */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '18px' }}>
            <ol
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                listStyle: 'none',
                padding: '6px 14px',
                margin: 0,
                fontSize: '0.84rem',
                background: 'rgba(15, 25, 46, 0.65)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.6)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </li>
              <li style={{ color: 'var(--gold-300)', fontWeight: 600 }}>{displayPage}</li>
            </ol>
          </nav>

          {/* Golden Category Pill Badge */}
          <div style={{ marginBottom: '16px' }}>
            <span
              className="badge"
              style={{
                padding: '7px 16px',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--gold-400)',
                  boxShadow: '0 0 8px var(--gold-400)',
                  display: 'inline-block',
                }}
              />
              {displayTag}
            </span>
          </div>

          {/* Main Page Title - Crisp, Block Level, Majestic */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.4vw, 3.6rem)',
              lineHeight: 1.16,
              marginBottom: '18px',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              display: 'block',
              width: '100%',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            {displayTitle}
          </h1>

          {/* Subtitle / Description */}
          <p
            className="lead-text"
            style={{
              maxWidth: '780px',
              color: '#CBD5E1',
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              lineHeight: 1.7,
              fontWeight: 350,
              margin: 0,
            }}
          >
            {displayDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
