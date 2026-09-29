export type Language = 'tr' | 'en' | 'ar';

export interface SectorItem {
  id: string;
  name: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  companies: string[];
}

export interface MetricItem {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface NewsItemType {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}

export interface ReportItemType {
  year: string;
  period: string;
  title: string;
  size: string;
}

export interface PillarItem {
  title: string;
  desc: string;
}

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    sectors: string;
    companies: string;
    investor: string;
    sustainability: string;
    media: string;
    contact: string;
    getInTouch: string;
    downloadCatalog: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    discoverBtn: string;
    investorBtn: string;
    scrollDown: string;
  };
  metrics: {
    title: string;
    subtitle: string;
    items: MetricItem[];
  };
  philosophy: {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    phiTitle: string;
    phiBadge: string;
    phiDesc: string;
    pillars: PillarItem[];
  };
  chairman: {
    tag: string;
    title: string;
    author: string;
    role: string;
    quote: string;
    paragraphs: string[];
    signature: string;
  };
  sectors: {
    tag: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    activeProjects: string;
    list: SectorItem[];
  };
  investorRelations: {
    tag: string;
    title: string;
    subtitle: string;
    financialSummary: string;
    downloadReport: string;
    governanceTitle: string;
    governanceDesc: string;
    q2Results: string;
    annualGrowth: string;
    ebitdaMargin: string;
    reports: ReportItemType[];
  };
  sustainability: {
    tag: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    netZeroYear: string;
    netZeroDesc: string;
  };
  news: {
    tag: string;
    title: string;
    subtitle: string;
    readMore: string;
    items: NewsItemType[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours: string;
    formTitle: string;
    formSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    departmentLabel: string;
    departmentGeneral: string;
    departmentIR: string;
    departmentPress: string;
    departmentHR: string;
    messagePlaceholder: string;
    submitBtn: string;
    sending: string;
    successMessage: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    sectorsTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    kvkk: string;
    ethics: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterBtn: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Kurumsal",
      sectors: "Sektörler",
      companies: "İştirakler",
      investor: "Yatırımcı İlişkileri",
      sustainability: "Sürdürülebilirlik",
      media: "Medya",
      contact: "İletişim",
      getInTouch: "Bize Ulaşın",
      downloadCatalog: "Kurumsal Sunum"
    },
    hero: {
      badge: "Kusursuz Oran • Güçlü Gelecek",
      title1: "Geleceği",
      title2: "Altın Oran",
      title3: "Mükemmelliğiyle Şekillendiriyoruz",
      subtitle: "Finansal disiplin, sürdürülebilir büyüme ve reel sektör yatırımlarıyla Türkiye'den dünyaya uzanan prestijli bir değer ortaklığı.",
      discoverBtn: "Faaliyet Alanlarımız",
      investorBtn: "Yatırımcı İlişkileri",
      scrollDown: "Aşağı Kaydırın"
    },
    metrics: {
      title: "Rakamlarla Altınoran",
      subtitle: "Sürdürülebilir büyümenin matematiksel kanıtı",
      items: [
        {
          label: "Konsolide Aktif Büyüklüğü",
          value: "18.4",
          prefix: "₺",
          suffix: " Milyar",
          description: "Son 5 yılda yıllık %38 bileşik büyüme performansı"
        },
        {
          label: "Stratejik Sektör",
          value: "6",
          suffix: " Alan",
          description: "Yüksek çarpanlı ve dengeli sektör çeşitliliği"
        },
        {
          label: "Grup Şirketi & İştirak",
          value: "18",
          suffix: " Şirket",
          description: "Pazarında lider operasyonel ve sanayi şirketleri"
        },
        {
          label: "Nitelikli İstihdam",
          value: "4.200",
          prefix: "+",
          suffix: " Kişi",
          description: "Mühendislik ve inovasyon odaklı insan kaynağı"
        },
        {
          label: "Temiz Enerji Kurulu Gücü",
          value: "450",
          suffix: " MW",
          description: "Yıllık 1.2 milyon ton engellenen karbon salınımı"
        },
        {
          label: "Küresel İhracat & Ağ",
          value: "16",
          suffix: " Ülke",
          description: "Avrupa, Körfez ve Orta Asya pazarları"
        }
      ]
    },
    philosophy: {
      tag: "Yatırım Felsefemiz",
      title: "Doğanın Kusursuz Geometrisi: Phi (1.618)",
      subtitle: "Rasyonel Matematik, Sarsılmaz Finansal Disiplin",
      description: "Adımızı evrendeki estetik dengenin temel kuralı olan 'Altın Oran'dan alıyoruz. Her yatırım kararımızda; risk ile getiriyi, kısa vadeli fırsatlar ile uzun vadeli sürdürülebilirliği 1.618 hassasiyetiyle dengeliyoruz.",
      phiTitle: "Altın Oran İlkesi",
      phiBadge: "Φ = 1.618033...",
      phiDesc: "Doğada deniz kabuklarından galaksilere kadar her mükemmel yapıda bulunan Altın Oran, portföy mimarimizde sermaye koruma ve katma değer üretme pusulamızdır.",
      pillars: [
        {
          title: "Dengeli Portföy Mimarisi",
          desc: "Konjonktürel dalgalanmalardan etkilenmeyen, birbirini dengeleyen çok sektörlü reel varlık yapısı."
        },
        {
          title: "Katma Değerli Üretim",
          desc: "Spekülatif getiriler yerine sanayi, teknoloji ve temiz enerji gibi nakit akışı güçlü reel sektör yatırımları."
        },
        {
          title: "Kusursuz Kurumsal Yönetişim",
          desc: "Uluslararası Big Four denetim standartları, tam şeffaflık ve sıfır tavizli etik ilkeler."
        },
        {
          title: "2030 Yeşil Dönüşüm Taahhüdü",
          desc: "Tüm operasyonlarımızda karbon nötr olma hedefi ve döngüsel ekonomi prensipleri."
        }
      ]
    },
    chairman: {
      tag: "Yönetim Kurulu Mesajı",
      title: "Geleceğe Güvenle Bakan, Kalıcı Değer Üreten Bir Miras",
      author: "Osman Aydemir",
      role: "Yönetim Kurulu Başkanı",
      quote: "Yatırım, yalnızca bilançodaki rakamlardan ibaret değildir. Bizim için yatırım; topluma değer katan, doğaya saygılı ve yarınlara kalıcı eserler bırakan bir denge sanatıdır.",
      paragraphs: [
        "Küresel piyasaların ve teknolojinin baş döndürücü bir hızla dönüştüğü günümüzde, Altınoran Yatırım Holding olarak pusulamızı değişmeyen evrensel ilkelere çevirdik: Liyakat, disiplin, şeffaflık ve kusursuz denge.",
        "Gayrimenkulden yenilenebilir enerjiye, yüksek teknolojiden fon yönetimine kadar faaliyet gösterdiğimiz her sahada Türkiye'nin kalkınma vizyonuna güç veriyor; küresel iş birliklerimizle ülkemizi gururla temsil ediyoruz.",
        "Bugün 18.4 milyar TL konsolide varlık büyüklüğümüz ve 4.200'ü aşkın çalışanımızla ulaştığımız nokta, paydaşlarımızın bize duyduğu sarsılmaz güvenin meyvesidir. Bu güveni onurla geleceğe taşıyoruz."
      ],
      signature: "Osman Aydemir • Yönetim Kurulu Başkanı"
    },
    sectors: {
      tag: "Faaliyet Alanlarımız",
      title: "Stratejik Sektörlerde Öncü Yatırımlar",
      subtitle: "Geleceğin dinamiklerine yön veren, yüksek katma değerli ve sürdürülebilir 6 temel odak alanı.",
      viewDetails: "Detayları İncele",
      activeProjects: "Öne Çıkan Varlıklar",
      list: [
        {
          id: "gayrimenkul",
          name: "Gayrimenkul & Proje Geliştirme",
          badge: "Prestij & Değer",
          shortDesc: "İkonik karma yaşam projeleri, A+ ticari kuleler ve akıllı lojistik parkları.",
          fullDesc: "LEED Platinum ve BREEAM sertifikalı sürdürülebilir mimari yaklaşımlarla şehirlerin kalbinde nesiller boyu değerini koruyan yapılar inşa ediyoruz.",
          stats: [
            { label: "Proje Alanı", value: "1.4M m²" },
            { label: "Portföy Büyüklüğü", value: "₺7.2 Mr" }
          ],
          highlights: ["Altınoran Tower Maslak", "Golden Marina Residences", "Lojistik Park Kocaeli"],
          companies: ["Altınoran GYO", "Altınoran İnşaat", "Oran Tesis Yönetimi"]
        },
        {
          id: "enerji",
          name: "Yenilenebilir Enerji",
          badge: "Sıfır Karbon",
          shortDesc: "Güneş ve rüzgar enerjisi santralleri ile yeni nesil enerji depolama yatırımları.",
          fullDesc: "450 MW toplam kurulu gücümüzle yılda 850 GWh temiz elektrik üretiyor, sanayimizin yeşil enerji dönüşümüne öncülük ediyoruz.",
          stats: [
            { label: "Kurulu Güç", value: "450 MW" },
            { label: "Önlenen CO₂", value: "1.2M Ton/Yıl" }
          ],
          highlights: ["Karapınar 150 MW GES", "Balıkesir 120 MW RES", "Marmara Depolama Üssü"],
          companies: ["Altınoran Enerji A.Ş.", "Solaris Güneş Teknolojileri", "Oran Batarya Sistemleri"]
        },
        {
          id: "finans",
          name: "Finans & Girişim Sermayesi",
          badge: "Akıllı Sermaye",
          shortDesc: "Portföy yönetimi, kurumsal finansman ve teknoloji girişim sermayesi fonları.",
          fullDesc: "Yüksek potansiyele sahip ölçeklenme aşamasındaki teknoloji şirketlerine ve stratejik sanayi varlıklarına akıllı sermaye ortaklığı sağlıyoruz.",
          stats: [
            { label: "Yönetilen Varlık", value: "₺5.1 Mr" },
            { label: "Yıllık Getiri (IRR)", value: "%44.2" }
          ],
          highlights: ["Altınoran Teknoloji Fonu", "Büyüme Sermayesi Fonu", "GYO Yatırım Fonları"],
          companies: ["Altınoran Portföy A.Ş.", "Altınoran Girişim Sermayesi GSYO"]
        },
        {
          id: "teknoloji",
          name: "İleri Teknoloji & Endüstri",
          badge: "Endüstri 4.0",
          shortDesc: "Robotik otomasyon, kritik sanayi mühendisliği ve kurumsal yapay zeka sistemleri.",
          fullDesc: "Hassas imalat makineleri, savunma sanayii bileşenleri ve endüstriyel IoT yazılımlarıyla yerli katma değeri dünya pazarlarına ihraç ediyoruz.",
          stats: [
            { label: "Ar-Ge Mühendisi", value: "180+" },
            { label: "Tescilli Patent", value: "37 Adet" }
          ],
          highlights: ["Robotik Üretim Hücresi", "Akıllı Şebeke IoT Yazılımı", "Titanyum İşleme Üssü"],
          companies: ["Altınoran İleri Teknoloji", "Oran Robotics Sistemleri", "Aura Bilişim"]
        },
        {
          id: "saglik",
          name: "Sağlık & Yaşam Bilimleri",
          badge: "Biyoteknoloji",
          shortDesc: "Medikal cihaz üretimi, klinik araştırmalar ve entegre sağlık çözümleri.",
          fullDesc: "Toplum sağlığını ve yaşam kalitesini artıran biyoteknolojik ar-ge çalışmaları ve 22 ülkeye ihraç edilen ileri medikal cihazlar üretiyoruz.",
          stats: [
            { label: "İhracat Ülkesi", value: "22 Ülke" },
            { label: "Yıllık Medikal Ürün", value: "12M Adet" }
          ],
          highlights: ["Biyomedikal İnovasyon Laboratuvarı", "Entegre Tanı Teknolojileri"],
          companies: ["Altınoran Sağlık Grubu", "OranMed Medikal Sistemler"]
        },
        {
          id: "lojistik",
          name: "Uluslararası Ticaret & Lojistik",
          badge: "Küresel Tedarik",
          shortDesc: "İntermodal taşımacılık, modern antrepolar ve uçtan uca tedarik zinciri yönetimi.",
          fullDesc: "3 kıtadaki stratejik ticaret koridorlarında 220.000 m² depolama kapasitesi ile küresel ticaretin aksamadan işlemesini sağlıyoruz.",
          stats: [
            { label: "Depolama Alanı", value: "220K m²" },
            { label: "Lojistik Merkezi", value: "14 Merkez" }
          ],
          highlights: ["Marmara İntermodal Üssü", "Mersin Liman Antrepo Kompleksi"],
          companies: ["Altınoran Global Lojistik", "Oran Lojistik Filosu"]
        }
      ]
    },
    investorRelations: {
      tag: "Yatırımcı İlişkileri",
      title: "Şeffaf, Güvenilir ve Sürdürülebilir Finansal Yönetim",
      subtitle: "BIST kurumsal yönetim ilkelerine tam uyum, denetlenmiş finansal tablolar ve yatırımcı sunumları.",
      financialSummary: "2026/Q2 Finansal Özet",
      downloadReport: "Raporu İndir (PDF)",
      governanceTitle: "Kurumsal Yönetim ve Şeffaflık",
      governanceDesc: "Uluslararası bağımsız denetim raporlarımız, etik ilkelerimiz ve pay sahipliği yapımızla tüm paydaşlarımıza eşit mesafede ve hesap verebilir bir yönetim modeli sunuyoruz.",
      q2Results: "Konsolide Net Satışlar: ₺6.8 Milyar",
      annualGrowth: "Konsolide Aktif Artışı: +%38 Yıllık",
      ebitdaMargin: "FAVÖK Marjı: %32.4",
      reports: [
        {
          year: "2026",
          period: "Q2",
          title: "2026 Yarıyıl Konsolide Finansal Raporu",
          size: "4.8 MB"
        },
        {
          year: "2025",
          period: "Yıllık",
          title: "2025 Entegre Faaliyet ve ESG Raporu",
          size: "12.4 MB"
        },
        {
          year: "2025",
          period: "Kurumsal",
          title: "Kurumsal Yönetim İlkelerine Uyum Raporu",
          size: "2.1 MB"
        },
        {
          year: "2025",
          period: "Sunum",
          title: "Yatırımcı Bilgilendirme Sunumu",
          size: "6.5 MB"
        }
      ]
    },
    sustainability: {
      tag: "ESG & Sürdürülebilirlik",
      title: "Gelecek Nesillere Karşı Sorumluluğumuz",
      subtitle: "Çevresel duyarlılık, sosyal kalkınma ve etik yönetişim taahhütlerimizi iş modellerimizin merkezine koyuyoruz.",
      card1Title: "Çevresel (E)",
      card1Desc: "Yenilenebilir enerji yatırımlarımızla yılda 1.2 milyon ton karbon salınımını engelliyor, tüm binalarımızda LEED sertifikası hedefliyoruz.",
      card2Title: "Sosyal (S)",
      card2Desc: "Altınoran Eğitim Vakfı ile her yıl 1.500 üniversite öğrencisine burs imkanı sağlıyor; %48 kadın yönetici oranımızla eşitliği destekliyoruz.",
      card3Title: "Yönetişim (G)",
      card3Desc: "Uluslararası şeffaflık ilkeleri, bağımsız denetim kurulu ve sıfır toleranslı etik ihbar hattımızla adil yönetişim uyguluyoruz.",
      netZeroYear: "2030",
      netZeroDesc: "Net Sıfır Karbon Hedefimiz"
    },
    news: {
      tag: "Haberler & Duyurular",
      title: "Holdingden Son Gelişmeler",
      subtitle: "Yatırımlarımız, yeni iştiraklerimiz ve kurumsal başarı hikayelerimiz.",
      readMore: "Haberin Devamı",
      items: [
        {
          id: "1",
          title: "Altınoran Enerji'den 150 MW'lık Yeni Hibrit Güneş ve Depolama Yatırımı",
          date: "14 Eylül 2026",
          category: "Enerji & Yatırım",
          summary: "110 milyon dolarlık yatırım ile İç Anadolu bölgesinde hayata geçirilecek dev hibrit santral için imzalar atıldı."
        },
        {
          id: "2",
          title: "Altınoran Portföy 2026 Yarıyıl Sonuçları: Net Karda %42 Artış",
          date: "28 Ağustos 2026",
          category: "Finansal Sonuçlar",
          summary: "Konsolide aktif büyüklüğü 18.4 milyar TL'ye ulaşan grubumuz, güçlü nakit akışı ve dengeli portföy dağılımı sergiledi."
        },
        {
          id: "3",
          title: "LEED Platinum Sertifikalı 'Altınoran Tower Maslak' Kapılarını Açtı",
          date: "15 Temmuz 2026",
          category: "Gayrimenkul",
          summary: "İstanbul finans merkezinin kalbinde yükselen, altın oran mimarisinin zarafetini taşıyan akıllı kule projemiz tamamlandı."
        }
      ]
    },
    contact: {
      tag: "İletişim",
      title: "Bizimle İletişime Geçin",
      subtitle: "Yatırım ortaklıkları, basın talepleri ve kurumsal sorularınız için holding merkezimize dilediğiniz zaman ulaşabilirsiniz.",
      addressLabel: "Genel Merkez",
      address: "Altınoran Kuleleri, Maslak Mah. Büyükdere Cad. No: 284, Sarıyer / İstanbul, Türkiye",
      phoneLabel: "Santral Telefonu",
      phone: "+90 (212) 345 67 00",
      emailLabel: "Kurumsal E-posta",
      email: "info@altinoranyatirimholding.com.tr",
      hoursLabel: "Çalışma Saatleri",
      hours: "Pazartesi - Cuma: 08:30 - 18:00",
      formTitle: "Bize Mesaj Gönderin",
      formSubtitle: "Formu doldurarak ilgili departmanımıza doğrudan ulaşabilirsiniz.",
      namePlaceholder: "Adınız Soyadınız",
      emailPlaceholder: "E-posta Adresiniz",
      phonePlaceholder: "Telefon Numaranız",
      subjectPlaceholder: "Konu Başlığı",
      departmentLabel: "İlgili Departman",
      departmentGeneral: "Genel İletişim & Santral",
      departmentIR: "Yatırımcı İlişkileri & Finans",
      departmentPress: "Basın & Kurumsal İletişim",
      departmentHR: "İnsan Kaynakları & Kariyer",
      messagePlaceholder: "Mesajınızı buraya yazınız...",
      submitBtn: "Mesajı Gönder",
      sending: "Gönderiliyor...",
      successMessage: "Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz."
    },
    footer: {
      desc: "Altınoran Yatırım Holding; finans, gayrimenkul, yenilenebilir enerji, sanayi, teknoloji ve lojistikte altın oran mükemmelliğiyle değer inşa eden Türkiye'nin öncü yatırım grubudur.",
      quickLinks: "Kurumsal",
      sectorsTitle: "Faaliyet Alanları",
      contactTitle: "Merkez Ofis",
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      kvkk: "KVKK Aydınlatma Metni",
      ethics: "Etik İlkeler & Uyum",
      newsletterTitle: "Bültenimize Abone Olun",
      newsletterDesc: "Holding gelişmeleri ve yatırımcı raporlarından anında haberdar olun.",
      newsletterBtn: "Abone Ol"
    }
  },

  en: {
    nav: {
      home: "Home",
      about: "About Us",
      sectors: "Sectors",
      companies: "Subsidiaries",
      investor: "Investor Relations",
      sustainability: "Sustainability",
      media: "Media & News",
      contact: "Contact",
      getInTouch: "Get In Touch",
      downloadCatalog: "Corporate Deck"
    },
    hero: {
      badge: "Divine Proportion • Enduring Future",
      title1: "Shaping The Future with",
      title2: "The Golden Ratio",
      title3: "Perfection",
      subtitle: "A prestigious investment power from Türkiye to the globe, built on financial discipline, sustainable growth, and transformative real-sector assets.",
      discoverBtn: "Explore Our Sectors",
      investorBtn: "Investor Relations",
      scrollDown: "Scroll Down"
    },
    metrics: {
      title: "Altınoran In Numbers",
      subtitle: "Mathematical proof of disciplined compounding growth",
      items: [
        {
          label: "Consolidated Asset Base",
          value: "18.4",
          prefix: "₺",
          suffix: " Billion",
          description: "38% Compound Annual Growth Rate over the last 5 years"
        },
        {
          label: "Strategic Sectors",
          value: "6",
          suffix: " Sectors",
          description: "High-multiple and counter-cyclical balanced portfolio"
        },
        {
          label: "Group Companies",
          value: "18",
          suffix: " Companies",
          description: "Market-leading operational enterprises & industrial assets"
        },
        {
          label: "Skilled Workforce",
          value: "4,200",
          prefix: "+",
          suffix: " Professionals",
          description: "Engineering and innovation-driven human capital"
        },
        {
          label: "Clean Energy Capacity",
          value: "450",
          suffix: " MW",
          description: "1.2 Million tons of CO₂ emissions prevented annually"
        },
        {
          label: "Global Reach",
          value: "16",
          suffix: " Countries",
          description: "Export footprint across Europe, GCC, and Central Asia"
        }
      ]
    },
    philosophy: {
      tag: "Investment Philosophy",
      title: "Nature's Perfect Geometry: Phi (1.618)",
      subtitle: "Rational Mathematics, Unshakable Financial Discipline",
      description: "Our holding takes its name from the universal aesthetic formula of equilibrium: The Golden Ratio (1.618). In every capital allocation decision, we balance risk and reward, present cash flow and future longevity with phi precision.",
      phiTitle: "The Golden Ratio Principle",
      phiBadge: "Φ = 1.618033...",
      phiDesc: "Found in nautilus shells, spiral galaxies, and timeless architecture, the Golden Ratio serves as our compass for capital preservation and high-return value creation.",
      pillars: [
        {
          title: "Balanced Portfolio Architecture",
          desc: "Multi-sector asset structures designed to remain resilient through macroeconomic cycles."
        },
        {
          title: "Value-Added Real Production",
          desc: "Direct investment in cash-generating industry, clean power, and technology rather than short-term speculation."
        },
        {
          title: "Rigorous Corporate Governance",
          desc: "Big Four audit standards, complete transparency, and uncompromising business ethics."
        },
        {
          title: "2030 Green Transition Pledge",
          desc: "Net-zero carbon roadmap across all operational facilities and circular economy frameworks."
        }
      ]
    },
    chairman: {
      tag: "Chairman's Statement",
      title: "A Timeless Legacy Built on Trust and Sustainable Value",
      author: "Osman Aydemir",
      role: "Chairman of the Board",
      quote: "Investment is never merely about balance sheet figures. For us, investing is the art of equilibrium—enriching communities, respecting nature, and building enduring legacies for generations to come.",
      paragraphs: [
        "In an era where global markets and technologies are evolving at breakneck speed, Altınoran Yatırım Holding steers its compass by unchanging universal principles: meritocracy, disciplined execution, transparency, and exquisite harmony.",
        "From prime real estate to clean energy, high technology to asset management, we empower Türkiye's industrial leap while representing our national prestige on international stages with orgullo.",
        "Today, reaching ₺18.4 billion in consolidated assets alongside 4,200+ dedicated team members is the definitive testament to our stakeholders' trust. We carry this trust forward into the future."
      ],
      signature: "Osman Aydemir • Chairman of the Board"
    },
    sectors: {
      tag: "Our Core Sectors",
      title: "Pioneering Strategic Industries",
      subtitle: "Six pillars of high-growth, high-value, and resilient capital deployment.",
      viewDetails: "Explore Details",
      activeProjects: "Flagship Assets",
      list: [
        {
          id: "gayrimenkul",
          name: "Real Estate & Urban Development",
          badge: "Prestige & Value",
          shortDesc: "Iconic mixed-use developments, Grade-A commercial towers, and smart logistics hubs.",
          fullDesc: "With LEED Platinum and BREEAM certifications, we build landmark architectural masterworks that appreciate in value across generations.",
          stats: [
            { label: "Developed Area", value: "1.4M m²" },
            { label: "Portfolio Value", value: "₺7.2 Bn" }
          ],
          highlights: ["Altınoran Tower Maslak", "Golden Marina Residences", "Logistics Hub Kocaeli"],
          companies: ["Altınoran REIT", "Altınoran Construction", "Oran Facility Management"]
        },
        {
          id: "enerji",
          name: "Renewable Energy & Cleantech",
          badge: "Net Zero",
          shortDesc: "Utility-scale solar (PV), wind farms, and next-generation battery storage systems.",
          fullDesc: "Generating 850 GWh of clean electricity annually across 450 MW operational capacity, accelerating our industries' decarbonization journey.",
          stats: [
            { label: "Installed Capacity", value: "450 MW" },
            { label: "CO₂ Avoided", value: "1.2M Tons/Yr" }
          ],
          highlights: ["Karapınar 150 MW Solar", "Balıkesir 120 MW Wind", "Marmara Storage Hub"],
          companies: ["Altınoran Energy Generation", "Solaris Cleantech", "Oran Battery Systems"]
        },
        {
          id: "finans",
          name: "Financial Services & Venture Capital",
          badge: "Smart Capital",
          shortDesc: "Asset management, corporate advisory, and high-growth technology venture funds.",
          fullDesc: "Deploying strategic growth capital into market-defining technology startups and transformative industrial acquisitions.",
          stats: [
            { label: "Assets Under Mgmt", value: "₺5.1 Bn" },
            { label: "Internal Rate of Return", value: "44.2%" }
          ],
          highlights: ["Altınoran Tech Venture Fund", "Growth Capital Fund I & II", "Real Estate Funds"],
          companies: ["Altınoran Asset Management", "Altınoran Venture Capital GSYO"]
        },
        {
          id: "teknoloji",
          name: "Advanced Technology & Robotics",
          badge: "Industry 4.0",
          shortDesc: "Industrial robotics automation, precision defense mechanics, and enterprise AI.",
          fullDesc: "Engineering high-precision manufacturing systems, aerospace titanium hardware, and IoT software platforms exported worldwide.",
          stats: [
            { label: "R&D Engineers", value: "180+" },
            { label: "Patents Granted", value: "37" }
          ],
          highlights: ["Robotic Workcells", "Smart Grid IoT Software", "Aerospace Titanium Plant"],
          companies: ["Altınoran High Tech A.Ş.", "Oran Robotics Systems", "Aura Enterprise IT"]
        },
        {
          id: "saglik",
          name: "Healthcare & Life Sciences",
          badge: "Life Sciences",
          shortDesc: "Biotechnology research, diagnostic medical devices, and integrated health solutions.",
          fullDesc: "Advancing pharmaceutical biotechnology, point-of-care diagnostics, and medical devices shipped to healthcare providers across 22 countries.",
          stats: [
            { label: "Export Markets", value: "22 Nations" },
            { label: "Annual Medical Units", value: "12M Pcs" }
          ],
          highlights: ["Biomedical Innovation Labs", "Integrated Diagnostic Complex"],
          companies: ["Altınoran Health Group", "OranMed Medical Systems"]
        },
        {
          id: "lojistik",
          name: "Global Trade & Intermodal Logistics",
          badge: "Global Network",
          shortDesc: "Intermodal freight corridors, modern bonded warehousing, and supply chain solutions.",
          fullDesc: "Operating 220,000 m² of modern logistics hubs connecting vital trade routes across Europe, the Middle East, and Central Asia.",
          stats: [
            { label: "Warehousing Space", value: "220K m²" },
            { label: "Global Hubs", value: "14 Hubs" }
          ],
          highlights: ["Marmara Intermodal Hub", "Mersin Port Logistics Terminal"],
          companies: ["Altınoran Global Logistics", "Oran Freight Solutions"]
        }
      ]
    },
    investorRelations: {
      tag: "Investor Relations",
      title: "Transparent, Resilient & Value-Driven Governance",
      subtitle: "Complete adherence to BIST corporate governance standards, audited financials, and comprehensive investor decks.",
      financialSummary: "2026/Q2 Financial Highlights",
      downloadReport: "Download Report (PDF)",
      governanceTitle: "Governance & Accountability",
      governanceDesc: "Backed by Big Four independent auditing, a balanced board structure, and strict whistleblowing frameworks, we safeguard stakeholder rights with unwavering integrity.",
      q2Results: "Consolidated Revenue: ₺6.8 Billion",
      annualGrowth: "Total Asset Expansion: +38% YoY",
      ebitdaMargin: "EBITDA Margin: 32.4%",
      reports: [
        {
          year: "2026",
          period: "Q2",
          title: "Q2 2026 Interim Consolidated Financials",
          size: "4.8 MB"
        },
        {
          year: "2025",
          period: "Annual",
          title: "2025 Integrated Annual & ESG Report",
          size: "12.4 MB"
        },
        {
          year: "2025",
          period: "Corporate",
          title: "Corporate Governance Compliance Review",
          size: "2.1 MB"
        },
        {
          year: "2025",
          period: "Deck",
          title: "Comprehensive Institutional Investor Deck",
          size: "6.5 MB"
        }
      ]
    },
    sustainability: {
      tag: "ESG & Sustainability",
      title: "Our Pledge to Tomorrow's Generations",
      subtitle: "Integrating environmental stewardship, social upliftment, and ethical leadership into every core business model.",
      card1Title: "Environmental (E)",
      card1Desc: "Preventing 1.2M tons of greenhouse emissions through our clean energy portfolio and pursuing LEED certification across all physical assets.",
      card2Title: "Social (S)",
      card2Desc: "Granting 1,500 university scholarships annually via Altınoran Education Foundation, with 48% female representation in senior leadership.",
      card3Title: "Governance (G)",
      card3Desc: "Empowering an independent oversight board, international compliance audits, and an anonymous zero-tolerance ethics hotline.",
      netZeroYear: "2030",
      netZeroDesc: "Net Zero Carbon Commitment"
    },
    news: {
      tag: "News & Releases",
      title: "Latest Holding Developments",
      subtitle: "Capital milestones, new ventures, and corporate progress updates.",
      readMore: "Read Full Story",
      items: [
        {
          id: "1",
          title: "Altınoran Energy Signs $110M Deal for 150 MW Solar & Storage Complex",
          date: "September 14, 2026",
          category: "Energy & Cleantech",
          summary: "Definitive agreements signed for Central Anatolia's flagship hybrid solar plant integrated with utility-scale battery systems."
        },
        {
          id: "2",
          title: "Altınoran Asset Management Reports H1 2026 Results: Net Profit Up 42%",
          date: "August 28, 2026",
          category: "Financial Results",
          summary: "Consolidated asset size reaches ₺18.4 billion, demonstrating superior cash conversion and diversified capital robustness."
        },
        {
          id: "3",
          title: "LEED Platinum 'Altınoran Tower Maslak' Ready for Occupancy",
          date: "July 15, 2026",
          category: "Real Estate",
          summary: "Istanbul financial district's newest architectural marvel embodying the harmony of the Golden Ratio is officially completed."
        }
      ]
    },
    contact: {
      tag: "Contact Us",
      title: "Connect With Our Headquarters",
      subtitle: "Reach our executive office for institutional partnerships, investor inquiries, and corporate communications.",
      addressLabel: "Corporate Headquarters",
      address: "Altınoran Towers, Maslak Mah. Büyükdere Ave. No: 284, Sarıyer / Istanbul, Türkiye",
      phoneLabel: "Head Office Phone",
      phone: "+90 (212) 345 67 00",
      emailLabel: "Corporate Inquiries",
      email: "info@altinoranyatirimholding.com.tr",
      hoursLabel: "Operating Hours",
      hours: "Monday - Friday: 08:30 - 18:00 (GMT+3)",
      formTitle: "Send Us a Message",
      formSubtitle: "Complete the inquiry form below to connect directly with the relevant department.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number",
      subjectPlaceholder: "Subject Title",
      departmentLabel: "Target Department",
      departmentGeneral: "General Inquiries & Switchboard",
      departmentIR: "Investor Relations & Capital Markets",
      departmentPress: "Media & Corporate Communications",
      departmentHR: "Human Resources & Talent",
      messagePlaceholder: "Write your message here...",
      submitBtn: "Send Message",
      sending: "Sending...",
      successMessage: "Thank you. Your message has been received and routed to the appropriate department."
    },
    footer: {
      desc: "Altınoran Yatırım Holding is a premier Turkish investment conglomerate building sustainable value across finance, real estate, clean energy, advanced tech, and global logistics.",
      quickLinks: "Corporate",
      sectorsTitle: "Our Sectors",
      contactTitle: "Head Office",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      kvkk: "Data Protection (KVKK/GDPR)",
      ethics: "Code of Ethics & Compliance",
      newsletterTitle: "Join Our Newsletter",
      newsletterDesc: "Receive corporate disclosures, financial updates, and investor reports directly.",
      newsletterBtn: "Subscribe"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن المجموعة",
      sectors: "قطاعاتنا",
      companies: "الشركات التابعة",
      investor: "علاقات المستثمرين",
      sustainability: "الاستدامة",
      media: "المركز الإعلامي",
      contact: "اتصل بنا",
      getInTouch: "تواصل معنا",
      downloadCatalog: "الملف التعريفي"
    },
    hero: {
      badge: "النسبة الذهبية • مستقبل راسخ",
      title1: "نصنع المستقبل",
      title2: "بمعايير النسبة الذهبية",
      title3: "المثالية",
      subtitle: "قوة استثمارية رائدة تمتد من تركيا إلى الأسواق العالمية، ترتكز على الانضباط المالي والنمو المستدام في القطاعات الحيوية.",
      discoverBtn: "استكشف قطاعاتنا",
      investorBtn: "علاقات المستثمرين",
      scrollDown: "مرر للأسفل"
    },
    metrics: {
      title: "ألتن أوران بالأرقام",
      subtitle: "برهان رياضي على النمو المالي المتوازن والمستدام",
      items: [
        {
          label: "إجمالي الأصول المجمعة",
          value: "18.4",
          prefix: "₺",
          suffix: " مليار",
          description: "معدل نمو سنوي مركب بنسبة 38٪ خلال السنوات الخمس الماضية"
        },
        {
          label: "قطاعات استراتيجية",
          value: "6",
          suffix: " قطاعات",
          description: "محفظة متوازنة ومتنوعة ذات عوائد تشغيلية عالية"
        },
        {
          label: "شركة تابعة واستثمارية",
          value: "18",
          suffix: " شركة",
          description: "شركات رائدة في أسواقها الإقليمية والدولية"
        },
        {
          label: "كوادر وكفاءات بشرية",
          value: "4,200",
          prefix: "+",
          suffix: " متخصص",
          description: "طاقات هندسية وابتكارية تقود التميز المؤسسي"
        },
        {
          label: "طاقة نظيفة مركبة",
          value: "450",
          suffix: " ميغاواط",
          description: "تفادي 1.2 مليون طن من انبعاثات الكربون سنوياً"
        },
        {
          label: "أسواق عالمية",
          value: "16",
          suffix: " دولة",
          description: "شبكة تصدير وشراكات عبر أوروبا والخليج وآسيا الوسطى"
        }
      ]
    },
    philosophy: {
      tag: "فلسفتنا الاستثمارية",
      title: "هندسة الطبيعة الكاملة: فاي (1.618)",
      subtitle: "رياضيات دقيقة وانضباط مالي لا يتزعزع",
      description: "نستمد اسمنا من قاعدة التوازن الكونية الخالدة 'النسبة الذهبية' (1.618). في كل قرار استثماري، نوازن بدقة متناهية بين المخاطر والعوائد، وبين السيولة العاجلة والأثر المستدام طويل الأمد.",
      phiTitle: "مبدأ النسبة الذهبية",
      phiBadge: "Φ = 1.618033...",
      phiDesc: "من الصدفات البحرية إلى المجرات الكونية والعمارة الخالدة، تظل النسبة الذهبية بوصلتنا في الحفاظ على رأس المال وتعظيم القيمة الاستثمارية.",
      pillars: [
        {
          title: "هندسة المحفظة المتوازنة",
          desc: "هياكل أصول متعددة القطاعات تحمي الاستثمارات من التقلبات الدورية للأسواق العالمية."
        },
        {
          title: "الإنتاج ذو القيمة المضافة",
          desc: "الاستثمار في الأصول الحقيقية كالصناعة والتقنية والطاقة بدلاً من المضاربات السريعة."
        },
        {
          title: "حوكمة مؤسسية رفيعة",
          desc: "الالتزام بأعلى معايير التدقيق الدولية (Big Four)، الشفافية التامة والنزاهة المطلقة."
        },
        {
          title: "مبادرة التحول الأخضر 2030",
          desc: "خارطة طريق نحو الحياد الكربوني التام وتطبيق الاقتصاد الدائري في كافة الشركات."
        }
      ]
    },
    chairman: {
      tag: "رسالة رئيس مجلس الإدارة",
      title: "إرث راسخ من الثقة وصناعة القيمة المستدامة",
      author: "عثمان آيدمير",
      role: "رئيس مجلس الإدارة",
      quote: "الاستثمار بالنسبة لنا ليس مجرد أرقام في ميزانية عمومية، بل هو فن التوازن لإثراء المجتمعات، واحترام البيئة، وبناء صروح خالدة للأجيال القادمة.",
      paragraphs: [
        "في عصر تتسارع فيه التحولات الاقتصادية والتكنولوجية بشكل غير مسبوق، جعلنا في مجموعة ألتن أوران للاستثمار بوصلتنا موجهة نحو قيم عالمية ثابتة: الكفاءة، الانضباط، الشفافية، والتوازن المثالي.",
        "من التطوير العقاري الراقي إلى الطاقة المتجددة، ومن التكنولوجيا المتقدمة إلى إدارة الصناديق الاستثمارية، نسهم بقوة في النهضة الاقتصادية لتركيا، ونمثل بلدنا بفخر في المحافل الدولية.",
        "إن وصول أصولنا المجمعة اليوم إلى 18.4 مليار ليرة تركية بفريق يتجاوز 4,200 زميل، هو برهان ناصع على ثقة شركائنا ومستثمرينا، وهي أمانة نواصل رعايتها بكل عزم."
      ],
      signature: "عثمان آيدمير • رئيس مجلس الإدارة"
    },
    sectors: {
      tag: "قطاعات أعمالنا",
      title: "استثمارات ريادية في قطاعات استراتيجية",
      subtitle: "ستة محاور رئيسية ترسم ملامح المستقبل وتوفر نمواً مستداماً وعوائد استثنائية.",
      viewDetails: "تفاصيل القطاع",
      activeProjects: "أبرز الأصول",
      list: [
        {
          id: "gayrimenkul",
          name: "التطوير العقاري والمشاريع النوعية",
          badge: "الفخامة والقيمة",
          shortDesc: "أبراج تجارية من الفئة الأولى ومجمعات سكنية فاخرة ومراكز لوجستية ذكية.",
          fullDesc: "بشهادات الاستدامة العالمية LEED Platinum و BREEAM، نشيد معالم معمارية تحافظ على قيمتها وترتقي بالبيئة الحضرية.",
          stats: [
            { label: "مساحة التطوير", value: "1.4M م²" },
            { label: "قيمة المحفظة", value: "₺7.2 مليار" }
          ],
          highlights: ["برج ألتن أوران مسلك", "مجمع مارينا السكني", "المنطقة اللوجستية كوجالي"],
          companies: ["ألتن أوران العقارية", "ألتن أوران للإنشاءات", "أوران لإدارة المرافق"]
        },
        {
          id: "enerji",
          name: "الطاقة المتجددة والتحول الأخضر",
          badge: "صفر كربون",
          shortDesc: "محطات الطاقة الشمسية وطاقة الرياح ومشاريع تخزين الطاقة المتقدمة.",
          fullDesc: "بقدرة إجمالية مركبة تبلغ 450 ميغاواط، ننتج 850 غيغاواط/ساعة من الكهرباء النظيفة سنوياً لدعم مستقبل مستدام.",
          stats: [
            { label: "القدرة المركبة", value: "450 MW" },
            { label: "الحد من الكربون", value: "1.2M طن/سنة" }
          ],
          highlights: ["محطة قونية 150 MW شمسية", "محطة باليكسير 120 MW رياح", "مركز مرمرة للتخزين"],
          companies: ["ألتن أوران للطاقة", "سولاريس للتقنيات الخضراء", "أوران لأنظمة البطاريات"]
        },
        {
          id: "finans",
          name: "الخدمات المالية ورأس المال الجريء",
          badge: "رأس المال الذكي",
          shortDesc: "إدارة الصناديق والمحافظ، الاستشارات المالية، والاستثمار في شركات التقنية الواعدة.",
          fullDesc: "نوفر رأس مال استراتيجي يدعم نمو الشركات التقنية المبتكرة والاستحواذ على الأصول الصناعية ذات القيمة المضافة.",
          stats: [
            { label: "الأصول المدارة", value: "₺5.1 مليار" },
            { label: "العائد الداخلي (IRR)", value: "%44.2" }
          ],
          highlights: ["صندوق التقنية والاستثمار الجريء", "صناديق النمو التوسعي", "صناديق الاستثمار العقاري"],
          companies: ["ألتن أوران لإدارة المحافظ", "ألتن أوران لرأس المال الجريء"]
        },
        {
          id: "teknoloji",
          name: "التكنولوجيا المتقدمة والروبوتات",
          badge: "الثورة الصناعية 4.0",
          shortDesc: "أنظمة الأتمتة الصناعية، الهندسة الدقيقة للصناعات الدفاعية، والذكاء الاصطناعي.",
          fullDesc: "نطور معدات صناعية عالية الدقة ومكونات تيتانيوم وبرمجيات إنترنت الأشياء المصدرة عالمياً.",
          stats: [
            { label: "مهندسو البحث والتطوير", value: "+180" },
            { label: "براءات اختراع مسجلة", value: "37 براءة" }
          ],
          highlights: ["خلايا الروبوتات الصناعية", "برمجيات الشبكات الذكية", "مصنع تيتانيوم الطيران"],
          companies: ["ألتن أوران للتقنية العالية", "أوران للأنظمة الروبوتية", "أورا لتقنية المعلومات"]
        },
        {
          id: "saglik",
          name: "الرعاية الصحية وعلوم الحياة",
          badge: "علوم الحياة",
          shortDesc: "أبحاث التكنولوجيا الحيوية، تصنيع الأجهزة الطبية، والمجمعات الصحية المتكاملة.",
          fullDesc: "نستثمر في تصنيع المستلزمات الطبية المتطورة ومختبرات التشخيص المتقدمة المصدرة إلى 22 دولة.",
          stats: [
            { label: "أسواق التصدير", value: "22 دولة" },
            { label: "الإنتاج الطبي السنوي", value: "12M وحدة" }
          ],
          highlights: ["مختبرات الابتكار الطبي الحيوي", "مجمع التشخيص المتكامل"],
          companies: ["مجموعة ألتن أوران الصحية", "أوران ميد للأجهزة الطبية"]
        },
        {
          id: "lojistik",
          name: "التجارة الدولية والخدمات اللوجستية",
          badge: "شبكة عالمية",
          shortDesc: "النقل متعدد الوسائط، المستودعات الجمركية الذكية، وإدارة سلاسل الإمداد العالمية.",
          fullDesc: "ندير 220,000 م² من المراكز اللوجستية الاستراتيجية التي تربط ممرات التجارة بين أوروبا والشرق الأوسط وآسيا.",
          stats: [
            { label: "مساحة التخزين", value: "220K م²" },
            { label: "مراكز لوجستية", value: "14 مركزاً" }
          ],
          highlights: ["مركز مرمرة للنقل اللوجستي", "مستودعات ميناء مرسين"],
          companies: ["ألتن أوران العالمية للوجستيات", "أسطول أوران للشحن"]
        }
      ]
    },
    investorRelations: {
      tag: "علاقات المستثمرين",
      title: "حوكمة مالية شفافة، مستدامة وموثوقة",
      subtitle: "التزام كامل بمعايير حوكمة الشركات في بورصة إسطنبول، قوائم مالية مدققة وعروض تقديمية للمستثمرين.",
      financialSummary: "الملخص المالي للنصف الأول 2026",
      downloadReport: "تحميل التقرير (PDF)",
      governanceTitle: "الحوكمة المؤسسية والشفافية",
      governanceDesc: "بإشراف كبرى شركات التدقيق العالمية (Big Four) ومجلس إدارة مستقل، نضمن حقوق كافة المساهمين وفق أعلى درجات المسؤولية والنزاهة.",
      q2Results: "إجمالي المبيعات المجمعة: ₺6.8 مليار",
      annualGrowth: "نمو إجمالي الأصول: +38٪ سنوياً",
      ebitdaMargin: "هامش الأرباح التشغيلية: %32.4",
      reports: [
        {
          year: "2026",
          period: "Q2",
          title: "التقرير المالي النصفي المجمع 2026",
          size: "4.8 MB"
        },
        {
          year: "2025",
          period: "سنوي",
          title: "تقرير الأداء والاستدامة المتكامل 2025",
          size: "12.4 MB"
        },
        {
          year: "2025",
          period: "حوكمة",
          title: "تقرير الامتثال لمبادئ حوكمة الشركات",
          size: "2.1 MB"
        },
        {
          year: "2025",
          period: "عرض",
          title: "العرض التقديمي الشامل للمستثمرين",
          size: "6.5 MB"
        }
      ]
    },
    sustainability: {
      tag: "الاستدامة والحوكمة (ESG)",
      title: "مسؤوليتنا الراسخة تجاه أجيال المستقبل",
      subtitle: "نضع الحفاظ على البيئة، والمسؤولية الاجتماعية، والحوكمة الأخلاقية في صميم نماذج أعمالنا.",
      card1Title: "البيئة (E)",
      card1Desc: "نمنع انبعاث 1.2 مليون طن من الكربون سنوياً عبر محطاتنا النظيفة، ونستهدف شهادات LEED في كافة أصولنا.",
      card2Title: "المجتمع (S)",
      card2Desc: "نقدم 1,500 منحة جامعية سنوياً عبر وقف ألتن أوران التعليمي، ونفخر بنسبة 48٪ قيادات نسائية في الإدارة العليا.",
      card3Title: "الحوكمة (G)",
      card3Desc: "حوكمة متكاملة تعتمد على مجلس مستقل، رقابة دورية صارمة، وخط ساخن للنزاهة دون أي تسامح مع التجاوزات.",
      netZeroYear: "2030",
      netZeroDesc: "هدفنا للوصول للحياد الكربوني"
    },
    news: {
      tag: "الأخبار والإعلانات",
      title: "أحدث مستجدات المجموعة",
      subtitle: "استثماراتنا الجديدة، شراكاتنا الاستراتيجية وقصص نجاحنا المؤسسية.",
      readMore: "اقرأ المزيد",
      items: [
        {
          id: "1",
          title: "ألتن أوران للطاقة توقع اتفاقية استثمار بقيمة 110 ملايين دولار لمجمع الطاقة الشمسية والتخزين",
          date: "14 سبتمبر 2026",
          category: "الطاقة والاستثمار",
          summary: "توقيع العقود النهائية لإنشاء أضخم محطة هجينة للطاقة الشمسية وأنظمة البطاريات بقدرة 150 ميغاواط في وسط الأناضول."
        },
        {
          id: "2",
          title: "ألتن أوران للمحافظ تعلن نتائج النصف الأول 2026: نمو صافي الأرباح بنسبة 42٪",
          date: "28 أغسطس 2026",
          category: "النتائج المالية",
          summary: "بلغت الأصول المجمعة للمجموعة 18.4 مليار ليرة تركية مع استقرار تدفقات السيولة وتنوع قوي للأصول التشغيلية."
        },
        {
          id: "3",
          title: "اكتمال برج 'ألتن أوران مسلك' الصديق للبيئة والحائز على شهادة LEED Platinum",
          date: "15 يوليو 2026",
          category: "العقارات",
          summary: "افتتاح الصرح المعماري الأحدث في قلب المركز المالي بإسطنبول، المستوحى من سحر وتوازن النسبة الذهبية."
        }
      ]
    },
    contact: {
      tag: "اتصل بنا",
      title: "تواصل مع المقر الرئيسي للمجموعة",
      subtitle: "يسعدنا الرد على استفساراتكم الاستثمارية والشركات المؤسسية والطلبات الإعلامية.",
      addressLabel: "المقر الرئيسي",
      address: "أبراج ألتن أوران، حي مسلك، شارع بيوك ديري رقم 284، ساريير / إسطنبول، تركيا",
      phoneLabel: "هاتف المقسم الرئيسي",
      phone: "+90 (212) 345 67 00",
      emailLabel: "البريد المؤسسي",
      email: "info@altinoranyatirimholding.com.tr",
      hoursLabel: "ساعات العمل",
      hours: "الاثنين - الجمعة: 08:30 - 18:00 (توقيت تركيا)",
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "يرجى تعبئة النموذج أدناه للتواصل المباشر مع القسم المعني.",
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني",
      phonePlaceholder: "رقم الهاتف",
      subjectPlaceholder: "عنوان الموضوع",
      departmentLabel: "القسم المعني",
      departmentGeneral: "الاستفسارات العامة ومكتب الاستقبال",
      departmentIR: "علاقات المستثمرين والأسواق المالية",
      departmentPress: "الإعلام والاتصال المؤسسي",
      departmentHR: "الموارد البشرية والوظائف",
      messagePlaceholder: "اكتب رسالتك هنا...",
      submitBtn: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMessage: "شكراً لتواصلك. تم استلام رسالتك وسيتم الرد عليك في أقرب وقت ممكن."
    },
    footer: {
      desc: "ألتن أوران القابضة للاستثمار هي مجموعة استثمارية تركية رائدة تصنع قيمة مضافة ومستدامة عبر قطاعات التمويل، العقار، الطاقة النظيفة، الصناعة واللوجستيات بمعايير النسبة الذهبية.",
      quickLinks: "روابط سريعة",
      sectorsTitle: "قطاعاتنا",
      contactTitle: "المكتب الرئيسي",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      kvkk: "حماية البيانات الشخصية",
      ethics: "ميثاق الشرف والحوكمة",
      newsletterTitle: "اشترك في نشرتنا البريدية",
      newsletterDesc: "احصل على التقارير المالية وأحدث أخبار الاستثمارات مباشرة في بريدك.",
      newsletterBtn: "اشتراك"
    }
  }
};
