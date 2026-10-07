export interface SubsidiaryService {
  title: string;
  desc: string;
}

export interface SubsidiaryStat {
  label: string;
  value: string;
}

export interface SubsidiaryLocalizedContent {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  fullStory: string[];
  services: SubsidiaryService[];
  highlights: string[];
  keyFacts: {
    sector: string;
    foundedLabel: string;
    locationLabel: string;
    capitalStructure: string;
    scope: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface SubsidiaryItem {
  slug: string;
  name: string;
  sectorId: string;
  founded: string;
  location: string;
  image: string;
  stats: SubsidiaryStat[];
  contact: {
    address: string;
    phone: string;
    email: string;
    website?: string;
  };
  tr: SubsidiaryLocalizedContent;
  en: SubsidiaryLocalizedContent;
  ar: SubsidiaryLocalizedContent;
}

export const SUBSIDIARIES_DATA: Record<string, SubsidiaryItem> = {
  'demtas-gayrimenkul': {
    slug: 'demtas-gayrimenkul',
    name: 'Demtaş Gayrimenkul Yatırım',
    sectorId: 'gayrimenkul',
    founded: '2008',
    location: 'İstanbul, Türkiye',
    image: '/images/headquarters.jpg',
    stats: [
      { label: 'Öne Çıkan Projeler', value: '5+ Prestij Proje' },
      { label: 'Sermaye Yapısı', value: '%100 Özkaynak' },
      { label: 'Faaliyet Deneyimi', value: '18+ Yıl' },
      { label: 'Yatırım Odak', value: 'Arazi & Konut' },
    ],
    contact: {
      address: 'Altınoran Holding Plaza, Levent / İstanbul',
      phone: '+90 (212) 890 16 18',
      email: 'gayrimenkul@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Arazi Geliştirme & Gayrimenkul',
      title: 'Demtaş Gayrimenkul Yatırım',
      subtitle: 'Stratejik Arsa Değerlendirme ve Prestijli Yaşam Projeleri',
      description:
        'Demtaş Gayrimenkul Yatırım, geliştirdiği her projede büyük bir fark yaratarak yeni bir yaşam tarzı sunar. Satın alınan arsaları uzman mühendislik ve fizibilite ekipleriyle değerlendirerek kazançlı ve nitelikli gayrimenkul yatırımlarına dönüştürür.',
      fullStory: [
        'Demtaş Gayrimenkul Yatırım, 2008 yılından bu yana stratejik lokasyonlardaki imarlı ve imar potansiyeli yüksek arazilerin tespiti, satın alımı, hukuki süreçlerinin yönetimi ve mimari projelendirmesi konularında uzmanlaşmıştır.',
        'Her projede doğru lokasyon, sürdürülebilir mimari ve yüksek yatırım getirisi üçgenini odağına alan şirketimiz; YalıCourt İstanbul, LifeTime Cty Court, Trante Evleri, GökKuşağı Blokları ve Korgan Hill Blokları gibi ses getiren konut ve karma projeleri başarıyla portföyüne katmıştır.',
        'Yatırımcılarına şeffaf fizibilite analizleri ve sağlam mülkiyet güvencesi sunan Demtaş Gayrimenkul Yatırım, Altınoran Holding’in reel varlık mimarisindeki amiral gemilerinden biri olarak büyümeye devam etmektedir.',
      ],
      services: [
        {
          title: 'Stratejik Arsa Geliştirme',
          desc: 'Metropol ve gelişme akslarındaki değerli arazilerin analizi, satın alınması ve yasal imar optimizasyonu.',
        },
        {
          title: 'Fizibilite & Proje Yönetimi',
          desc: 'En yüksek getiriyi sağlayan fonksiyon ve mimari konsept analiziyle yatırım riskini sıfıra indiren mühendislik yaklaşımı.',
        },
        {
          title: 'Prestij Konut & Karma Projeler',
          desc: 'Estetik, fonksiyonel ve deprem güvenliği yüksek modern yaşam alanlarının anahtar teslim hayata geçirilmesi.',
        },
        {
          title: 'Gayrimenkul Portföy Danışmanlığı',
          desc: 'Bireysel ve kurumsal yatırımcılar için güvenli, değer kazanan ve yüksek prim potansiyeline sahip gayrimenkul çözümleri.',
        },
      ],
      highlights: [
        'YalıCourt İstanbul',
        'LifeTime Cty Court',
        'Trante Evleri',
        'GökKuşağı Blokları',
        'Korgan Hill Blokları',
      ],
      keyFacts: {
        sector: 'Gayrimenkul & Arazi Geliştirme',
        foundedLabel: '2008 (18+ Yıl)',
        locationLabel: 'İstanbul, Türkiye',
        capitalStructure: '%100 Yerli / Altınoran Holding',
        scope: 'Ulusal ve Uluslararası Yatırımlar',
      },
      seo: {
        title: 'Demtaş Gayrimenkul Yatırım | Altınoran Yatırım Holding',
        description:
          'Demtaş Gayrimenkul Yatırım; stratejik arsa geliştirme, prestijli konut projeleri ve yüksek getirili gayrimenkul fizibilite modelleri sunmaktadır.',
        keywords: [
          'Demtaş Gayrimenkul',
          'Arsa Geliştirme',
          'YalıCourt İstanbul',
          'Gayrimenkul Yatırımı',
          'Altınoran Holding Gayrimenkul',
        ],
      },
    },
    en: {
      tag: 'Land Development & Real Estate',
      title: 'Demtaş Real Estate Investment',
      subtitle: 'Strategic Land Assessment and Flagship Living Projects',
      description:
        'Demtaş Real Estate Investment delivers high-value living concepts across strategic urban plots, turning land opportunities into premier residential developments with rigorous feasibility standards.',
      fullStory: [
        'Since 2008, Demtaş Real Estate Investment has specialized in the identification, acquisition, zoning optimization, and development of premium land in high-growth corridors.',
        'With projects such as YalıCourt Istanbul, LifeTime Cty Court, Trante Residences, GökKuşağı Towers, and Korgan Hill, the company has proven its track record of creating sustainable living spaces with exceptional capital appreciation.',
        'Backed by 100% equity and institutional governance, Demtaş Real Estate continues to expand its prime portfolio under Altınoran Investment Holding.',
      ],
      services: [
        {
          title: 'Strategic Land Development',
          desc: 'Comprehensive analysis, acquisition, and legal development of prime real estate assets.',
        },
        {
          title: 'Feasibility & Project Engineering',
          desc: 'Optimized architectural and financial modeling ensuring maximized investment returns and zero structural risk.',
        },
        {
          title: 'Premier Residential Developments',
          desc: 'Turnkey development of modern, earthquake-resilient, and amenity-rich living spaces.',
        },
        {
          title: 'Portfolio Advisory',
          desc: 'Tailored property asset strategies for domestic and international high-net-worth investors.',
        },
      ],
      highlights: [
        'YalıCourt Istanbul',
        'LifeTime Cty Court',
        'Trante Residences',
        'GökKuşağı Towers',
        'Korgan Hill Towers',
      ],
      keyFacts: {
        sector: 'Real Estate & Land Development',
        foundedLabel: '2008 (18+ Years)',
        locationLabel: 'Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'National & Global Markets',
      },
      seo: {
        title: 'Demtaş Real Estate Investment | Altınoran Holding',
        description:
          'Demtaş Real Estate Investment specializes in strategic land development, premier residential developments, and high-yield real estate investments.',
        keywords: [
          'Demtas Real Estate',
          'Land Development',
          'Istanbul Property',
          'Altinoran Subsidiaries',
        ],
      },
    },
    ar: {
      tag: 'تطوير الأراضي والاستثمار العقاري',
      title: 'ديمتاش للاستثمار العقاري',
      subtitle: 'تطوير أراضٍ استراتيجية ومشاريع سكنية متميزة',
      description:
        'تقدم ديمتاش للاستثمار العقاري أساليب معيشية متطورة عبر دراسات جدوى دقيقة وتقييم هندسي متخصص للأراضي الاستراتيجية لتحويلها إلى مشاريع سكنية وتجارية رائدة.',
      fullStory: [
        'منذ تأسيسها في عام 2008، تخصصت ديمتاش للاستثمار العقاري في شراء وتقييم وتطوير الأراضي الحيوية في محاور النمو العمراني بإسطنبول.',
        'تشمل مشاريعها البارزة مجمعات يالي كورت إسطنبول، لايف تايم سيتي كورت، مساكن ترانتي، أبراج غوك كوشاغي، ومجمعات كورغان هيل.',
        'تواصل ديمتاش تعزيز ريادتها كإحدى أهم الركائز التشغيلية لمجموعة ألتن أوران القابضة.',
      ],
      services: [
        {
          title: 'تطوير الأراضي الاستراتيجية',
          desc: 'تحديد وشراء الأراضي ذات القيمة الاستثمارية العالية واستكمال التراخيص النظامية.',
        },
        {
          title: 'دراسات الجدوى وإدارة المشاريع',
          desc: 'تحليلات هندسية واقتصادية متقدمة لتعظيم العائد وتقليل المخاطر التشغيلية.',
        },
        {
          title: 'المشاريع السكنية الراقية',
          desc: 'تنفيذ مجمعات سكنية عصرية ومقاومة للزلازل بأعلى معايير الرفاهية.',
        },
        {
          title: 'استشارات الاستثمار العقاري',
          desc: 'حلول عقارية موثوقة للمستثمرين المحليين والدوليين.',
        },
      ],
      highlights: [
        'يالي كورت إسطنبول',
        'لايف تايم سيتي كورت',
        'مساكن ترانتي',
        'أبراج غوك كوشاغي',
        'كورغان هيل',
      ],
      keyFacts: {
        sector: 'التطوير العقاري والاستثمار في الأراضي',
        foundedLabel: '2008 (18+ عاماً)',
        locationLabel: 'إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'مشاريع محلية ودولية',
      },
      seo: {
        title: 'ديمتاش للاستثمار العقاري | ألتن أوران القابضة',
        description:
          'شركة ديمتاش للاستثمار العقاري، رائدة في تطوير الأراضي الاستراتيجية وتنفيذ أرقى المجمعات السكنية في تركيا.',
        keywords: [
          'ديمتاش العقارية',
          'تطوير الأراضي إسطنبول',
          'استثمار عقاري تركيا',
          'مجموعة ألتن أوران',
        ],
      },
    },
  },

  'tekin-yapi': {
    slug: 'tekin-yapi',
    name: 'Tekin Yapı',
    sectorId: 'insaat',
    founded: '2010',
    location: 'İstanbul, Türkiye',
    image: '/images/boardroom.jpg',
    stats: [
      { label: 'Taahhüt Alanı', value: 'Altyapı & Üstyapı' },
      { label: 'İş Güvenliği', value: '%100 Standart' },
      { label: 'Mühendislik Gücü', value: 'Uzman Kadro' },
      { label: 'Tamamlanan Proje', value: 'Çok Sayıda' },
    ],
    contact: {
      address: 'Tekin Yapı Genel Merkez, İstanbul',
      phone: '+90 (212) 890 16 20',
      email: 'tekinyapi@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'İnşaat & Taahhüt',
      title: 'Tekin Yapı',
      subtitle: 'Modern Yapılar, Güvenli Altyapı ve Nitelikli Taahhüt Çözümleri',
      description:
        'Tekin Yapı; konut, ticari ve kurumsal projelerin yanı sıra yurtiçi ve yurtdışı altyapı-üstyapı inşaat alanlarında çağdaş, estetik ve depreme dayanıklı yapılar hayata geçirir.',
      fullStory: [
        'Tekin Yapı, inşaat ve mühendislik sektöründeki köklü deneyimiyle sağlam temeller üzerinde yükselen yapılar inşa etmektedir.',
        'Modern iş makineleri filosu, yetkin mühendis ve mimar kadrosu ile konuttan iş merkezlerine, yol ve altyapı projelerinden karma yapılara kadar geniş bir yelpazede taahhüt faaliyetlerini sürdürür.',
        'Zamanında teslim, sıfır hata toleransı ve uluslararası kalite standartlarını benimseyen Tekin Yapı, sektörün güvenilir çözüm ortaklarındandır.',
      ],
      services: [
        {
          title: 'Üstyapı & Konut İnşaatları',
          desc: 'Depreme tam dayanıklı, ileri betonarme ve çelik konstrüksiyon lüks konut ve iş merkezi projeleri.',
        },
        {
          title: 'Altyapı Taahhütleri',
          desc: 'Kentsel altyapı hatları, çevre düzenlemeleri, zemin iyileştirme ve yol projeleri.',
        },
        {
          title: 'Anahtar Teslim İnşaat Yönetimi',
          desc: 'Projelendirmeden iskana kadar tüm inşaat sürecinin profesyonel mühendislik denetimiyle yönetimi.',
        },
        {
          title: 'Kentsel Dönüşüm Uygulamaları',
          desc: 'Eski yapı stoğunu güvenli, çevre dostu ve modern standartlara kavuşturan kentsel dönüşüm taahhütleri.',
        },
      ],
      highlights: [
        'Nitelikli Konut Yerleşkeleri',
        'Ticari Plaza & İş Merkezleri',
        'Kentsel Altyapı & Yol Düzenlemeleri',
        'Güvenli Betonarme Yapılar',
      ],
      keyFacts: {
        sector: 'İnşaat & Taahhüt',
        foundedLabel: '2010',
        locationLabel: 'İstanbul, Türkiye',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Yurtiçi ve Bölgesel Projeler',
      },
      seo: {
        title: 'Tekin Yapı | Altınoran Yatırım Holding',
        description:
          'Tekin Yapı; konut, ticari alan, altyapı ve üstyapı taahhüt projelerinde modern mühendislik ve güvenli inşaat çözümleri sunar.',
        keywords: [
          'Tekin Yapı',
          'İnşaat Taahhüt',
          'Konut Projeleri',
          'Altyapı Mühendislik',
          'Altınoran İnşaat',
        ],
      },
    },
    en: {
      tag: 'Construction & Contracting',
      title: 'Tekin Yapı',
      subtitle: 'Modern Structures, Resilient Infrastructure and Turnkey Contracting',
      description:
        'Tekin Yapı builds contemporary, aesthetic, and earthquake-resilient residential, commercial, and infrastructure structures across domestic and regional markets.',
      fullStory: [
        'With extensive construction and civil engineering experience, Tekin Yapı erects reliable architectural edifices with uncompromising safety standards.',
        'The company manages comprehensive general contracting across residential compounds, commercial plazas, and municipal infrastructure.',
        'Committed to on-time delivery and structural excellence, Tekin Yapı is a pillar of Altınoran Holding’s contracting division.',
      ],
      services: [
        {
          title: 'Superstructure & Commercial Contracting',
          desc: 'Earthquake-safe reinforced concrete and structural steel residential and office complexes.',
        },
        {
          title: 'Civil & Infrastructure Engineering',
          desc: 'Utility infrastructure, ground reinforcement, and arterial road networks.',
        },
        {
          title: 'Turnkey Construction Management',
          desc: 'End-to-end site execution from groundbreaking to occupancy certification.',
        },
        {
          title: 'Urban Regeneration Projects',
          desc: 'Modernizing aging building stocks into energy-efficient, safe communities.',
        },
      ],
      highlights: [
        'Modern Residential Communities',
        'Corporate Office Plazas',
        'Municipal Infrastructure Projects',
        'Seismic-Safe Structures',
      ],
      keyFacts: {
        sector: 'Construction & Contracting',
        foundedLabel: '2010',
        locationLabel: 'Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'Domestic and Regional Markets',
      },
      seo: {
        title: 'Tekin Yapı | Altınoran Holding',
        description:
          'Tekin Yapı delivers turnkey construction, residential building, and infrastructure contracting with modern engineering standards.',
        keywords: [
          'Tekin Yapi',
          'General Contractor Turkey',
          'Infrastructure Construction',
          'Commercial Real Estate',
        ],
      },
    },
    ar: {
      tag: 'الإنشاءات والمقاولات',
      title: 'تكين يابي',
      subtitle: 'صروح معمارية حديثة ومقاولات بنية تحتية وفوقية متكاملة',
      description:
        'تتولى تكين يابي تشييد مبانٍ سكنية وتجارية ومشاريع بنية تحتية مقاومة للزلازل وفق أحدث المعايير الهندسية والجمالية.',
      fullStory: [
        'تتمتع تكين يابي بسجل حافل في قطاع الإنشاءات والمقاولات العامة معتمدة على أسطول معدات حديث وكفاءات هندسية متمرسة.',
        'تغطي مشاريعها بناء المجمعات السكنية، المقرات التجارية، وشبكات البنية التحتية.',
        'الالتزام بالمواعيد والجودة الهندسية العالية جعلها خياراً موثوقاً للشركاء والمستثمرين.',
      ],
      services: [
        {
          title: 'مقاولات المباني السكنية والتجارية',
          desc: 'تشييد صروح خرسانية وفولاذية متطورة بمقاومة عالية للزلازل.',
        },
        {
          title: 'مشاريع البنية التحتية',
          desc: 'تنفيذ شبكات المرافق، تمهيد الطرق، وأعمال تحسين التربة.',
        },
        {
          title: 'إدارة الإنشاءات تسليم مفتاح',
          desc: 'إشراف هندسي شامل من مرحلة الحفر حتى التسليم النهائي.',
        },
        {
          title: 'مشاريع التحول والتطوير الحضري',
          desc: 'تجديد المباني القديمة وتحويلها إلى مجتمعات آمنة وعصرية.',
        },
      ],
      highlights: [
        'مجمعات سكنية متكاملة',
        'أبراج ومكاتب تجارية',
        'شبكات البنية التحتية',
        'منشآت مقاومة للزلازل',
      ],
      keyFacts: {
        sector: 'الإنشاءات والمقاولات',
        foundedLabel: '2010',
        locationLabel: 'إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'مشاريع محلية وإقليمية',
      },
      seo: {
        title: 'تكين يابي | ألتن أوران القابضة',
        description:
          'شركة تكين يابي للإنشاءات والمقاولات العامة، متخصصة في تشييد المشاريع السكنية والتجارية والبنية التحتية.',
        keywords: [
          'تكين يابي',
          'مقاولات بناء تركيا',
          'بنية تحتية إسطنبول',
          'شركات ألتن أوران',
        ],
      },
    },
  },

  mimkon: {
    slug: 'mimkon',
    name: 'Mimkon',
    sectorId: 'insaat',
    founded: '2012',
    location: 'İstanbul, Türkiye',
    image: '/images/boardroom.jpg',
    stats: [
      { label: 'Tasarım Disiplini', value: 'Bütüncül Mimari' },
      { label: 'Statik Mühendislik', value: 'A+ Güvenlik' },
      { label: 'Konsept Alanı', value: 'Konut & Ticari' },
      { label: 'Proje Yönetimi', value: 'Entegre Süreç' },
    ],
    contact: {
      address: 'Mimkon Mimarlık & Tasarım Stüdyosu, İstanbul',
      phone: '+90 (212) 890 16 22',
      email: 'mimkon@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Mimarlık & Mühendislik',
      title: 'Mimkon Mimarlık & Mühendislik',
      subtitle: 'Yenilikçi Mimari Tasarım, Statik Projelendirme ve İç Mimari',
      description:
        'Mimkon; estetiği fonksiyonellikle buluşturan çağdaş mimari projeler, ileri statik mühendislik çözümleri ve özgün iç mimari tasarımlar geliştirir.',
      fullStory: [
        'Mimkon, mekanın insan yaşamı üzerindeki etkisini merkeze alarak çevreyle uyumlu, enerji tasarruflu ve zamansız mimari yapılar tasarlar.',
        'Gelişmiş 3D modelleme, BIM (Yapı Bilgi Modellemesi) ve parametrik tasarım araçlarıyla projeleri sıfır hata ile üretime hazırlar.',
        'Tekin Yapı ve Eston Yapı gibi grup ortaklarıyla entegre çalışan Mimkon, çizimden şantiye uygulamasına kadar her adımda kusursuz tasarım disiplini sergiler.',
      ],
      services: [
        {
          title: 'Mimari Konsept Tasarımı',
          desc: 'Özgün, fonksiyonel ve çevre dostu yapı projelerinin konsept ve uygulama çizimleri.',
        },
        {
          title: 'Statik & Deprem Mühendisliği',
          desc: 'İleri deprem yönetmeliklerine uygun betonarme ve çelik statik hesaplamalar.',
        },
        {
          title: 'İç Mimari & Dekorasyon',
          desc: 'Kullanıcı konforunu maksimuma çıkaran iç mekan planlaması ve malzeme seçimleri.',
        },
        {
          title: 'BIM & Proje Yönetimi',
          desc: 'Yapı bilgi modellemesi ile şantiye ve maliyet disiplininin entegre takibi.',
        },
      ],
      highlights: [
        'Konsept Yaşam Alanları',
        'Akıllı Ofis ve Bina Tasarımları',
        'Parametrik Cephe Çözümleri',
        'Bütüncül Mühendislik Planları',
      ],
      keyFacts: {
        sector: 'Mimarlık & Mühendislik',
        foundedLabel: '2012',
        locationLabel: 'İstanbul, Türkiye',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Mimari & Mühendislik Tasarımı',
      },
      seo: {
        title: 'Mimkon Mimarlık & Mühendislik | Altınoran Holding',
        description:
          'Mimkon; mimari konsept tasarımı, statik proje mühendisliği, BIM ve iç mimari çözümlerinde öncü stüdyodur.',
        keywords: [
          'Mimkon',
          'Mimarlık İstanbul',
          'Statik Mühendislik',
          'İç Mimari Tasarım',
          'Altınoran Mimarlık',
        ],
      },
    },
    en: {
      tag: 'Architecture & Engineering',
      title: 'Mimkon Architecture & Engineering',
      subtitle: 'Innovative Architectural Design, Structural Engineering and Interior Solutions',
      description:
        'Mimkon harmonizes aesthetics with functionality, developing sustainable architectural blueprints, advanced structural engineering, and customized interior spaces.',
      fullStory: [
        'Mimkon focuses on the harmony between humanity, nature, and the built environment, crafting timeless and energy-efficient spaces.',
        'Utilizing Building Information Modeling (BIM) and parametric design, Mimkon delivers error-free architectural execution.',
        'Working closely with Tekin Yapı and Eston Yapı, the studio ensures flawless translation from drafting board to site delivery.',
      ],
      services: [
        {
          title: 'Architectural Concept Design',
          desc: 'Creative, sustainable, and functional architectural masterplans and construction documents.',
        },
        {
          title: 'Structural & Seismic Engineering',
          desc: 'Advanced structural calculations complying with rigorous international seismic codes.',
        },
        {
          title: 'Interior Architecture & FF&E',
          desc: 'Ergonomic interior layouts and refined material specifications.',
        },
        {
          title: 'BIM Project Coordination',
          desc: 'Digital twin coordination reducing construction clashes and budget variances.',
        },
      ],
      highlights: [
        'Concept Living Spaces',
        'Smart Commercial Building Design',
        'Parametric Facade Solutions',
        'Integrated Engineering Blueprints',
      ],
      keyFacts: {
        sector: 'Architecture & Engineering',
        foundedLabel: '2012',
        locationLabel: 'Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'Design & Structural Consultancy',
      },
      seo: {
        title: 'Mimkon Architecture & Engineering | Altınoran Holding',
        description:
          'Mimkon provides premier architectural masterplanning, structural engineering, and interior design solutions.',
        keywords: [
          'Mimkon Architecture',
          'Structural Engineering',
          'Interior Design Istanbul',
          'BIM Modeling',
        ],
      },
    },
    ar: {
      tag: 'الهندسة المعمارية والإنشائية',
      title: 'ميمكون للعمارة والهندسة',
      subtitle: 'تصاميم معمارية مبتكرة، دراسات إنشائية وديكورات داخلية',
      description:
        'تجمع ميمكون بين الرؤية الجمالية والوظيفة العملية لتقديم أرقى المشاريع المعمارية والهندسية المتوافقة مع البيئة.',
      fullStory: [
        'تصمم ميمكون مساحات معمارية خالدة تركز على الاستدامة وكفاءة الطاقة وجودة الحياة.',
        'تعتمد أحدث تقنيات نمذجة معلومات البناء (BIM) لضمان دقة التنفيذ وتقليل تكاليف البناء.',
        'تشكل الذراع المعماري والهندسي التكاملي لمشاريع مجموعة ألتن أوران القابضة.',
      ],
      services: [
        {
          title: 'التصميم المعماري الإبداعي',
          desc: 'مخططات معمارية فريدة ومتكاملة تراعي المعايير البيئية الحديثة.',
        },
        {
          title: 'الهندسة الإنشائية ومقاومة الزلازل',
          desc: 'حسابات هندسية دقيقة للمنشآت الخرسانية والمعدنية.',
        },
        {
          title: 'التصميم والديكور الداخلي',
          desc: 'توزيع فراغات ذكي واختيار مواد تشطيب عالية الجودة.',
        },
        {
          title: 'إدارة مشاريع BIM',
          desc: 'تنسيق رقمي شامل للمخططات لضمان سلاسة التنفيذ الميداني.',
        },
      ],
      highlights: [
        'مفاهيم معمارية سكنية راقية',
        'تصاميم مبانٍ ذكية',
        'واجهات معمارية بارامترية',
        'مخططات هندسية متكاملة',
      ],
      keyFacts: {
        sector: 'الهندسة المعمارية والإنشائية',
        foundedLabel: '2012',
        locationLabel: 'إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'استشارات معمارية وهندسية',
      },
      seo: {
        title: 'ميمكون للهندسة المعمارية | ألتن أوران القابضة',
        description:
          'شركة ميمكون للهندسة المعمارية والتصميم الإنشائي، حلول متطورة للتصاميم المعمارية والديكور الداخلي في تركيا.',
        keywords: [
          'ميمكون',
          'مكاتب معمارية إسطنبول',
          'هندسة إنشائية',
          'ألتن أوران القابضة',
        ],
      },
    },
  },

  'demtas-akaryakit': {
    slug: 'demtas-akaryakit',
    name: 'Demtaş Akaryakıt',
    sectorId: 'akaryakit',
    founded: '2011',
    location: 'İstanbul & Bölge',
    image: '/images/energy.jpg',
    stats: [
      { label: 'Hizmet Standardı', value: '7/24 Kesintisiz' },
      { label: 'Kalite Güvencesi', value: '%100 Orijinal Yakıt' },
      { label: 'Filo Müşterileri', value: 'Kurumsal Taşıt Tanıma' },
      { label: 'İstasyon Ağı', value: 'Stratejik Noktalar' },
    ],
    contact: {
      address: 'Demtaş Akaryakıt İstasyon Yönetim Merkezi, İstanbul',
      phone: '+90 (212) 890 16 24',
      email: 'akaryakit@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Akaryakıt & Enerji Dağıtımı',
      title: 'Demtaş Akaryakıt',
      subtitle: 'Güvenilir İstasyon Ağı ve Kurumsal Filo Yakıt İkmali',
      description:
        'Demtaş Akaryakıt çatısı altında, müşteri memnuniyeti ve emniyet odaklı istasyon operasyonları ile araç sahiplerine ve kurumsal filolara kesintisiz, güvenli ve yüksek standartlı yakıt tedariği sağlanır.',
      fullStory: [
        'Demtaş Akaryakıt, 2011 yılından bu yana stratejik transit güzergahlarda modern akaryakıt ve servis istasyonları işletmektedir.',
        'Kaliteli yakıt garantisi, yüksek teknolojiye sahip taşıt tanıma sistemleri (TTS), 7/24 market ve oto bakım hizmetleri ile bireysel sürücülerden binlerce araçlık kurumsal filolara kadar kesintisiz enerji sunar.',
        'Çevre ve iş güvenliği regülasyonlarına tam uyumlu altyapısıyla Demtaş Akaryakıt, bölgenin güvenilir enerji ikmal noktasıdır.',
      ],
      services: [
        {
          title: 'Akaryakıt & LPG İkmal İstasyonları',
          desc: 'Uluslararası standartlarda denetlenen kaliteli motorin, benzin ve otogaz satışı.',
        },
        {
          title: 'Kurumsal Taşıt Tanıma Sistemleri (TTS)',
          desc: 'Şirket filolarının yakıt alımını temassız, güvenli ve anlık raporlamayla yöneten teknolojik altyapı.',
        },
        {
          title: '7/24 İstasyon Market & Hizmet Alanları',
          desc: 'Yolculuk sırasında ihtiyaç duyulan taze gıda, sıcak içecek ve oto bakım ürünleri.',
        },
        {
          title: 'Toptan Akaryakıt & Şantiye İkmali',
          desc: 'İnşaat, sanayi ve lojistik tesislerine doğrudan tankerle güvenli yakıt teslimatı.',
        },
      ],
      highlights: [
        'Stratejik Lokasyonlu İstasyonlar',
        'Kurumsal Filo Taşıt Tanıma',
        'Yüksek Emniyet Standartları',
        '7/24 Kesintisiz Enerji Tedariği',
      ],
      keyFacts: {
        sector: 'Akaryakıt & Enerji Dağıtımı',
        foundedLabel: '2011',
        locationLabel: 'İstanbul & Marmara',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'İstasyon İşletmeciliği & Filo Tedariği',
      },
      seo: {
        title: 'Demtaş Akaryakıt | Altınoran Yatırım Holding',
        description:
          'Demtaş Akaryakıt; kaliteli yakıt ikmali, kurumsal filo taşıt tanıma ve 7/24 istasyon operasyonlarıyla güvenli enerji sunar.',
        keywords: [
          'Demtaş Akaryakıt',
          'Akaryakıt İstasyonu',
          'Taşıt Tanıma Sistemi',
          'Kurumsal Filo Yakıtı',
          'Altınoran Enerji',
        ],
      },
    },
    en: {
      tag: 'Fuel & Energy Distribution',
      title: 'Demtaş Fuel Distribution',
      subtitle: 'Trusted Fuel Station Network and Fleet Energy Logistics',
      description:
        'Demtaş Fuel delivers continuous, reliable, and premium fuel supply to motorists and corporate fleets through modern station infrastructure and smart fleet refueling systems.',
      fullStory: [
        'Operating modern fuel stations situated along major transit corridors since 2011, Demtaş Fuel guarantees certified product quality and environmental safety.',
        'From RFID-enabled automatic fleet vehicle identification to 24/7 convenience services, the company meets the fueling demands of both individual and large commercial fleets.',
        'Rigorous quality control and zero-incident health and safety policies ensure dependable operations across all station sites.',
      ],
      services: [
        {
          title: 'Certified Fuel & AutoGas Dispensing',
          desc: 'High-grade diesel, gasoline, and LPG inspected under rigorous quality standards.',
        },
        {
          title: 'Fleet Vehicle Recognition Systems (RFID)',
          desc: 'Contactless automated fuel management and digitized accounting for enterprise fleets.',
        },
        {
          title: '24/7 Travel Retail & Car Care',
          desc: 'Modern on-site convenience stores, express cafes, and auto-care facilities.',
        },
        {
          title: 'Bulk Fuel Supply for Industry & Sites',
          desc: 'Direct tanker delivery to construction sites, manufacturing hubs, and logistics yards.',
        },
      ],
      highlights: [
        'Strategic Transit Fuel Stations',
        'Fleet Management Integration',
        'Strict Environmental Compliance',
        '24/7 Non-Stop Fuel Supply',
      ],
      keyFacts: {
        sector: 'Fuel & Energy Distribution',
        foundedLabel: '2011',
        locationLabel: 'Istanbul & Marmara',
        capitalStructure: '100% Domestic Capital',
        scope: 'Retail Stations & Bulk Distribution',
      },
      seo: {
        title: 'Demtaş Fuel Distribution | Altınoran Holding',
        description:
          'Demtaş Fuel operates premium service stations and corporate fleet refueling solutions across strategic transit routes.',
        keywords: [
          'Demtas Fuel',
          'Service Stations Istanbul',
          'Fleet Fuel Management',
          'Bulk Fuel Supply',
        ],
      },
    },
    ar: {
      tag: 'توزيع الوقود والطاقة',
      title: 'ديمتاش للوقود',
      subtitle: 'شبكة محطات موثوقة وتوريد وقود للأساطيل التجارية',
      description:
        'توفر ديمتاش للوقود خدمات تزويد المركبات والأساطيل التجارية بالوقود عالي الجودة على مدار الساعة عبر محطات حديثة وأنظمة ذكية.',
      fullStory: [
        'تدير ديمتاش للوقود محطات خدمة نموذجية في مواقع استراتيجية منذ عام 2011، ملتزمة بأعلى معايير السلامة البيئية والمهنية.',
        'تخدم آلاف المركبات يومياً وتوفر أنظمة التعرف التلقائي على الأساطيل (TTS) لإدارة استهلاك الوقود بمرونة وشفافية.',
        'تقدم خدمات متكاملة تشمل المتاجر، العناية بالسيارات، والتوريد المباشر للشركات والمنشآت.',
      ],
      services: [
        {
          title: 'توزيع الوقود المعتمد والغاز',
          desc: 'ديزل وبنزين وغاز سيارات خاضع لأعلى معايير الجودة والنقاء.',
        },
        {
          title: 'نظام التعرف الآلي على المركبات (TTS)',
          desc: 'حلول ذكية لإدارة وتتبع استهلاك الوقود لأساطيل الشركات.',
        },
        {
          title: 'متاجر وخدمات المحطات على مدار 24 ساعة',
          desc: 'متاجر تجزئة عصرية وخدمات غسيل وصيانة سريعة للسيارات.',
        },
        {
          title: 'توريد الوقود بالجملة للمشاريع',
          desc: 'إمداد مباشر بالصهاريج لمواقع الإنشاءات والمجمعات الصناعية.',
        },
      ],
      highlights: [
        'محطات في مواقع استراتيجية',
        'أنظمة ذكية لإدارة الأساطيل',
        'معايير أمان بيئي صارمة',
        'خدمة متواصلة على مدار الساعة',
      ],
      keyFacts: {
        sector: 'توزيع الوقود والطاقة',
        foundedLabel: '2011',
        locationLabel: 'إسطنبول والمنطقة',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'محطات تجزئة وتوريد جملة',
      },
      seo: {
        title: 'ديمتاش للوقود | ألتن أوران القابضة',
        description:
          'شركة ديمتاش للوقود، إدارة محطات الخدمة وتوريد الوقود عالي الجودة للأساطيل التجارية في تركيا.',
        keywords: [
          'ديمتاش للوقود',
          'محطات وقود تركيا',
          'تزويد أساطيل بالوقود',
          'ألتن أوران للطاقة',
        ],
      },
    },
  },

  'demtas-bilisim': {
    slug: 'demtas-bilisim',
    name: 'Demtaş Bilişim',
    sectorId: 'ofis-kirtasiye',
    founded: '2014',
    location: 'İstanbul, Türkiye',
    image: '/images/boardroom.jpg',
    stats: [
      { label: 'Teknoloji Altyapısı', value: 'Kurumsal Seviye' },
      { label: 'Sistem Sürekliliği', value: '%99.9 Uptime' },
      { label: 'Siber Güvenlik', value: 'Uçtan Uca' },
      { label: 'Destek Hizmeti', value: '7/24 Uzman' },
    ],
    contact: {
      address: 'Demtaş Bilişim Teknolojileri Merkezi, İstanbul',
      phone: '+90 (212) 890 16 26',
      email: 'bilisim@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Bilişim & Bilgi Teknolojileri',
      title: 'Demtaş Bilişim',
      subtitle: 'Kurumsal BT Altyapıları, Yazılım ve Sistem Entegrasyonu',
      description:
        'Demtaş Bilişim; kurumsal şirketlerin ihtiyaç duyduğu donanım sistemleri, güvenli sunucu altyapıları, modern kurumsal yazılımlar ve bilgi teknolojileri entegrasyonunu sağlar.',
      fullStory: [
        'Dijital dönüşümün hızlandığı günümüzde Demtaş Bilişim, şirketlerin teknolojik omurgasını kurmakta ve sürdürülebilir kılmaktadır.',
        'Bulut sistemleri, veri tabanı mimarileri, siber güvenlik protokolleri ve ağ altyapıları alanında anahtar teslim çözümler sunar.',
        'Hem grup şirketlerinin hem de dış müşterilerin operasyonel verimliliğini artıran Demtaş Bilişim, yenilikçi teknolojileri yakından takip eder.',
      ],
      services: [
        {
          title: 'Kurumsal Sunucu & Bulut Sistemleri',
          desc: 'Yüksek performanslı, yedekli sunucu ve veri depolama çözümlerinin kurulum ve yönetimi.',
        },
        {
          title: 'Siber Güvenlik & Ağ Altyapısı',
          desc: 'Şirket verilerini tehditlere karşı koruyan güvenlik duvarları, VPN ve kurumsal siber savunma sistemleri.',
        },
        {
          title: 'Donanım & Donatım Tedariği',
          desc: 'İş istasyonları, kurumsal bilgisayarlar, network cihazları ve lisanslama hizmetleri.',
        },
        {
          title: 'Özel Yazılım & Sistem Entegrasyonu',
          desc: 'İş süreçlerini otomatikleştiren ERP, CRM ve özel yazılım entegrasyonu.',
        },
      ],
      highlights: [
        'Kurumsal Sunucu & Veri Merkezi',
        'Uçtan Uca Siber Savunma',
        'Kesintisiz BT Desteği',
        'ERP & Sistem Entegrasyonları',
      ],
      keyFacts: {
        sector: 'Bilişim & Bilgi Teknolojileri',
        foundedLabel: '2014',
        locationLabel: 'İstanbul, Türkiye',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Kurumsal BT Çözümleri',
      },
      seo: {
        title: 'Demtaş Bilişim | Altınoran Yatırım Holding',
        description:
          'Demtaş Bilişim; kurumsal teknoloji altyapıları, sunucu sistemleri, siber güvenlik ve donanım entegrasyonu sunar.',
        keywords: [
          'Demtaş Bilişim',
          'Kurumsal BT',
          'Sunucu Altyapısı',
          'Siber Güvenlik İstanbul',
          'Altınoran Teknoloji',
        ],
      },
    },
    en: {
      tag: 'Information Technology & Systems',
      title: 'Demtaş IT Solutions',
      subtitle: 'Enterprise IT Infrastructure, Cyber Defense, and Systems Integration',
      description:
        'Demtaş IT provides cutting-edge enterprise hardware systems, secure cloud architecture, cybersecurity infrastructure, and seamless ERP/software integrations.',
      fullStory: [
        'Empowering digital transformation across industries, Demtaş IT designs and manages resilient technological backbones for modern enterprises.',
        'From high-availability data storage and virtualization to advanced firewall defenses, the company delivers end-to-end IT lifecycle management.',
        'Demtaş IT ensures 99.9% uptime, operational speed, and data integrity for all connected group entities and corporate clients.',
      ],
      services: [
        {
          title: 'Enterprise Server & Cloud Infrastructure',
          desc: 'Deployment and maintenance of high-throughput computing clusters and cloud storage.',
        },
        {
          title: 'Cybersecurity & Network Engineering',
          desc: 'Enterprise-grade firewalls, threat monitoring, and zero-trust network configurations.',
        },
        {
          title: 'IT Hardware & Enterprise Licensing',
          desc: 'Supply of workstations, network switches, enterprise software licenses, and peripherals.',
        },
        {
          title: 'Custom Software & ERP Integration',
          desc: 'Tailored enterprise resource planning and workflow automation platforms.',
        },
      ],
      highlights: [
        'High-Availability Server Clusters',
        'End-to-End Cyber Protection',
        '24/7 IT Infrastructure Support',
        'Enterprise ERP Integrations',
      ],
      keyFacts: {
        sector: 'Information Technology & Systems',
        foundedLabel: '2014',
        locationLabel: 'Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'Enterprise IT Solutions',
      },
      seo: {
        title: 'Demtaş IT Solutions | Altınoran Holding',
        description:
          'Demtaş IT provides enterprise server architectures, cybersecurity systems, and corporate digital infrastructure.',
        keywords: [
          'Demtas IT',
          'Enterprise IT Turkey',
          'Cybersecurity Solutions',
          'Cloud Infrastructure',
        ],
      },
    },
    ar: {
      tag: 'تكنولوجيا المعلومات والأنظمة',
      title: 'ديمتاش للتقنية والمعلومات',
      subtitle: 'بنية تحتية رقمية، أمن سيبراني وتكامل الأنظمة المؤسسية',
      description:
        'تقدم ديمتاش للمعلوماتية حلولاً متكاملة لتكنولوجيا المعلومات، الخوادم السحابية، أمن البيانات وتكامل البرمجيات للمؤسسات والشركات.',
      fullStory: [
        'تقود ديمتاش للمعلوماتية التحول الرقمي للشركات عبر بناء بنى تحتية تقنية قوية ومستقرة.',
        'تشمل خدماتها تركيب الخوادم عالية الكفاءة، شبكات الحماية السيبرانية، وتوريد الأجهزة والمعدات المعتمدة.',
        'تضمن استمرارية الأعمال وحماية البيانات الحساسة وفق أعلى المعايير الدولية.',
      ],
      services: [
        {
          title: 'الخوادم والبنية السحابية المؤسسية',
          desc: 'تركيب وإدارة مراكز البيانات وحلول التخزين السحابي عالي الأداء.',
        },
        {
          title: 'الأمن السيبراني وحماية الشبكات',
          desc: 'أنظمة دفاع رقمي متقدمة وحماية ضد التهديدات والاختراقات.',
        },
        {
          title: 'توريد الأجهزة والتراخيص',
          desc: 'توفير أجهزة الكمبيوتر، خوادم الشبكات، والتراخيص البرمجية الأصلية.',
        },
        {
          title: 'تكامل برمجيات الأعمال (ERP)',
          desc: 'تطوير ودمج برامج إدارة الموارد وأتمتة العمليات التشغيلية.',
        },
      ],
      highlights: [
        'مراكز بيانات وخوادم متطورة',
        'دفاع سيبراني شامل',
        'دعم فني متخصص على مدار الساعة',
        'تكامل أنظمة ERP',
      ],
      keyFacts: {
        sector: 'تكنولوجيا المعلومات والأنظمة',
        foundedLabel: '2014',
        locationLabel: 'إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'حلول تقنية للمؤسسات',
      },
      seo: {
        title: 'ديمتاش للمعلوماتية | ألتن أوران القابضة',
        description:
          'شركة ديمتاş لتكنولوجيا المعلومات، حلول البنية التحتية الرقمية والأمن السيبراني للشركات في تركيا.',
        keywords: [
          'ديمتاش للمعلوماتية',
          'حلول تقنية تركيا',
          'أمن سيبراني إسطنبول',
          'ألتن أوران للتقنية',
        ],
      },
    },
  },

  'demtas-evrensel': {
    slug: 'demtas-evrensel',
    name: 'Demtaş Evrensel',
    sectorId: 'ofis-kirtasiye',
    founded: '2013',
    location: 'İstanbul, Türkiye',
    image: '/images/headquarters.jpg',
    stats: [
      { label: 'Ürün Yelpazesi', value: '10.000+ Kalem' },
      { label: 'Tedarik Ağı', value: 'Ulusal Dağıtım' },
      { label: 'Müşteri Portföyü', value: '500+ Kurum' },
      { label: 'Teslimat Hızı', value: 'Hızlı & Güvenli' },
    ],
    contact: {
      address: 'Demtaş Evrensel Lojistik & Dağıtım Üssü, İstanbul',
      phone: '+90 (212) 890 16 28',
      email: 'evrensel@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Kurumsal Tedarik & Ofis Çözümleri',
      title: 'Demtaş Evrensel',
      subtitle: 'Kurumsal Ofis-Kırtasiye ve Sarf Malzemesi Tedarik Zinciri',
      description:
        'Demtaş Evrensel; kurumsal şirketlerin ihtiyaç duyduğu tüm ofis, kırtasiye, teknik malzeme ve sarf malzemesi tedarik zincirini toptan ve perakende olarak güvenle karşılar.',
      fullStory: [
        'Demtaş Evrensel, kurumların günlük operasyonlarını aksatmadan sürdürebilmeleri için binlerce kalem sarf malzemesini tek elden sunmaktadır.',
        'Geniş depolama kapasitesi, güçlü lojistik filosu ve avantajlı toptan fiyatlama politikası ile bankalardan holdinglere, okullardan kamu kurumlarına kadar geniş bir müşteri kitlesine hizmet verir.',
        'Zamanında teslimat ve kaliteli ürün ilkesiyle çalışan şirket, kurumsal satın alma süreçlerinin en güvenilir partneridir.',
      ],
      services: [
        {
          title: 'Toptan Ofis & Kırtasiye Tedariği',
          desc: 'Kağıt ürünleri, masaüstü gereçleri, arşivleme ve yazım malzemelerinin toptan ikmali.',
        },
        {
          title: 'Baskı & Yazıcı Sarf Malzemeleri',
          desc: 'Orijinal toner, kartuş, şerit ve endüstriyel baskı sarflarının kesintisiz temini.',
        },
        {
          title: 'Kurumsal Temizlik & Hijyen Ürünleri',
          desc: 'Ofis ve işletmelerin ihtiyaç duyduğu profesyonel temizlik kimyasalları ve aparatları.',
        },
        {
          title: 'Özelleştirilmiş Kurumsal Satın Alma',
          desc: 'Şirketlere özel aylık sözleşmeli tedarik ve kapıya teslim lojistik dağıtım.',
        },
      ],
      highlights: [
        '10.000+ Çeşit Ürün Kataloğu',
        'Kurumsal Sözleşmeli Dağıtım',
        'Geniş Antrepo ve Depolama Ağı',
        'Aynı Gün Sevk Yeteneği',
      ],
      keyFacts: {
        sector: 'Kurumsal Tedarik & Ofis Çözümleri',
        foundedLabel: '2013',
        locationLabel: 'İstanbul, Türkiye',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Toptan ve Kurumsal Tedarik',
      },
      seo: {
        title: 'Demtaş Evrensel | Altınoran Yatırım Holding',
        description:
          'Demtaş Evrensel; kurumsal ofis-kırtasiye, yazıcı sarf malzemeleri ve kurumsal tedarik zinciri yönetiminde liderdir.',
        keywords: [
          'Demtaş Evrensel',
          'Kurumsal Kırtasiye',
          'Ofis Sarf Malzemeleri',
          'Toptan Kırtasiye İstanbul',
          'Altınoran Tedarik',
        ],
      },
    },
    en: {
      tag: 'Corporate Supplies & Office Solutions',
      title: 'Demtaş Evrensel',
      subtitle: 'Comprehensive Corporate Stationery and Office Supply Chain',
      description:
        'Demtaş Evrensel delivers wholesale and direct corporate office supplies, stationery, printing consumables, and operational hardware across nationwide business networks.',
      fullStory: [
        'Ensuring smooth daily enterprise operations, Demtaş Evrensel manages an extensive product catalog spanning thousands of commercial supply SKUs.',
        'With modern warehousing facilities and scheduled distribution fleets, the company serves leading corporations, banks, and educational institutions.',
        'Reliability, competitive wholesale pricing, and verified quality standards establish Demtaş Evrensel as an indispensable procurement partner.',
      ],
      services: [
        {
          title: 'Wholesale Stationery & Paper Products',
          desc: 'Bulk delivery of premium copy paper, filing solutions, and daily desktop stationery.',
        },
        {
          title: 'Printing Consumables & Toners',
          desc: 'Certified original toners, cartridges, and commercial printing consumables.',
        },
        {
          title: 'Facility Cleaning & Hygiene Supplies',
          desc: 'Institutional-grade cleaning chemicals, dispensers, and sanitation consumables.',
        },
        {
          title: 'Custom Procurement Contracts',
          desc: 'Tailored monthly supply agreements with direct-to-desktop delivery.',
        },
      ],
      highlights: [
        '10,000+ Active Product SKUs',
        'Enterprise Procurement Agreements',
        'Modern High-Capacity Warehousing',
        'Rapid Scheduled Delivery Fleet',
      ],
      keyFacts: {
        sector: 'Corporate Supplies & Office Solutions',
        foundedLabel: '2013',
        locationLabel: 'Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'National Wholesale Distribution',
      },
      seo: {
        title: 'Demtaş Evrensel | Altınoran Holding',
        description:
          'Demtaş Evrensel is a leading wholesale supplier of corporate stationery, printing consumables, and office operations supplies.',
        keywords: [
          'Demtas Evrensel',
          'Office Supplies Wholesale',
          'Stationery Supplier Turkey',
          'Corporate Procurement',
        ],
      },
    },
    ar: {
      tag: 'التوريدات المكتبية وحلول الشركات',
      title: 'ديمتاش إفرنسل',
      subtitle: 'سلسلة توريد مستلزمات المكاتب والقرطاسية للشركات',
      description:
        'تلبي ديمتاش إفرنسل كافة احتياجات الشركات والمؤسسات من المستلزمات المكتبية، الورقية، ومواد الطباعة بالجملة وبأعلى كفاءة لوجستية.',
      fullStory: [
        'تعد ديمتاش إفرنسل الشريك المفضل لمئات الشركات الكبرى والبنوك لتأمين احتياجاتها اليومية من القرطاسية والمستلزمات التشغيلية.',
        'تمتلك مستودعات ضخمة وأسطول توزيع سريع يضمن تسليم آلاف المنتجات بأسعار تنافسية وجودة مضمونة.',
        'توفر عقود توريد دورية مخصصة تضمن تدفق المستلزمات دون أي انقطاع في سير العمل.',
      ],
      services: [
        {
          title: 'توريد القرطاسية والمستلزمات بالجملة',
          desc: 'توفير الورق عالي الجودة، أدوات الأرشفة، واللوازم المكتبية المتكاملة.',
        },
        {
          title: 'أحبار ومستهلكات الطباعة الأصلية',
          desc: 'توريد خراطيش الأحبار الأصلية ومستهلكات أجهزة الطباعة للشركات.',
        },
        {
          title: 'منتجات النظافة والتعقيم المؤسسي',
          desc: 'حلول تعقيم ومواد تنظيف معتمدة للمباني والمجمعات المكتبية.',
        },
        {
          title: 'عقود شراء مؤسسية مخصصة',
          desc: 'اتفاقيات توريد شهرية مجدولة مع توصيل مباشر إلى مقرات الشركات.',
        },
      ],
      highlights: [
        'أكثر من 10,000 منتج معتمد',
        'عقود توريد لكبرى المؤسسات',
        'مستودعات تخزين حديثة',
        'أسطول توزيع سريع ومباشر',
      ],
      keyFacts: {
        sector: 'التوريدات المكتبية وحلول الشركات',
        foundedLabel: '2013',
        locationLabel: 'إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'توريد جملة وشبكة توزيع وطنية',
      },
      seo: {
        title: 'ديمتاش إفرنسل | ألتن أوران القابضة',
        description:
          'شركة ديمتاش إفرنسل، كبرى شركات توريد المستلزمات المكتبية والقرطاسية بالجملة للمؤسسات والشركات في تركيا.',
        keywords: [
          'ديمتاش إفرنسل',
          'توريد قرطاسية شركات',
          'مستلزمات مكاتب إسطنبول',
          'ألتن أوران القابضة',
        ],
      },
    },
  },

  medistate: {
    slug: 'medistate',
    name: 'Medistate Kavacık Hastanesi',
    sectorId: 'saglik',
    founded: '2014',
    location: 'Kavacık, Beykoz / İstanbul',
    image: '/images/headquarters.jpg',
    stats: [
      { label: 'Hizmet Standardı', value: 'A+ Kalite' },
      { label: 'Klinik Branş', value: 'Tüm Tıbbi Birimler' },
      { label: 'Uluslararası Hasta', value: 'Küresel Sağlık' },
      { label: 'Teknoloji', value: 'İleri Tanı & Cerrahi' },
    ],
    contact: {
      address: 'Rüzgarlıbahçe Mah. Cumhuriyet Cad. No:24, Kavacık, Beykoz / İstanbul',
      phone: '+90 (216) 331 40 40',
      email: 'info@medistate.com.tr',
      website: 'https://medistate.com.tr',
    },
    tr: {
      tag: 'Sağlık Hizmetleri',
      title: 'Medistate Kavacık Hastanesi',
      subtitle: 'Bütüncül Kalite Anlayışı, Etik İlkeler ve İleri Tıp Teknolojisi',
      description:
        'Medistate Kavacık Hastanesi; etik ilkelerden ödün vermeden, alanlarında uzman hekim kadrosu ile koruyucu, teşhis edici ve iyileştirici A+ sağlık hizmeti sunarak toplum sağlığına katkıda bulunur.',
      fullStory: [
        'İstanbul’un ana ulaşım akslarından Kavacık’ta konumlanan Medistate Hastanesi, 17.000 m² kapalı alanda modern mimarisi ve çevre dostu yeşil hastane konseptiyle hizmet vermektedir.',
        'Gelişmiş yoğun bakım üniteleri, robotik cerrahi altyapısı, modern acil servis birimi ve multidisipliner poliklinikleri ile yerli ve yabancı binlerce hastaya güvenilir şifa kapısıdır.',
        'Hasta haklarına saygı, şeffaf tedavi süreçleri ve sürekli yenilenen medikal teknolojisiyle Medistate, Türkiye’nin önde gelen özel sağlık kurumları arasında yer alır.',
      ],
      services: [
        {
          title: 'İleri Cerrahi & Ameliyathaneler',
          desc: 'Laparoskopik ve mikrocerrahi imkanlarına sahip son teknoloji donanımlı ameliyathane kompleksleri.',
        },
        {
          title: 'Kapsamlı Yoğun Bakım Üniteleri',
          desc: 'Yenidoğan, koroner ve genel yoğun bakım ünitelerinde 24 saat kesintisiz uzman takibi.',
        },
        {
          title: 'Gelişmiş Tanı & Radyoloji Merkezi',
          desc: '3 Tesla MR, çok kesitli BT, dijital mamografi ve tam donanımlı klinik biyokimya laboratuvarı.',
        },
        {
          title: 'Uluslararası Sağlık Turizmi',
          desc: 'Dünyanın dört bir yanından gelen yabancı hastalara çok dilli tercümanlık, transfer ve tedavi koordinasyonu.',
        },
      ],
      highlights: [
        '17.000 m² Modern Sağlık Kompleksi',
        'Yeşil Hastane (Green Hospital) Mimarisi',
        'Uluslararası Akreditasyon Standartları',
        'A+ Kalite Hasta Memnuniyeti',
      ],
      keyFacts: {
        sector: 'Sağlık Hizmetleri & Tıp',
        foundedLabel: '2014',
        locationLabel: 'Kavacık, Beykoz / İstanbul',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Tam Teşekküllü Genel Hastane',
      },
      seo: {
        title: 'Medistate Kavacık Hastanesi | Altınoran Yatırım Holding',
        description:
          'Medistate Kavacık Hastanesi; uzman hekim kadrosu, ileri cerrahi ve modern teşhis üniteleriyle A+ kalitede sağlık hizmeti sunar.',
        keywords: [
          'Medistate Hastanesi',
          'Medistate Kavacık',
          'Özel Hastane İstanbul',
          'Sağlık Turizmi Türkiye',
          'Altınoran Sağlık',
        ],
      },
    },
    en: {
      tag: 'Healthcare Services',
      title: 'Medistate Kavacık Hospital',
      subtitle: 'Holistic Quality, Ethical Medicine, and Advanced Clinical Technologies',
      description:
        'Medistate Kavacık Hospital delivers comprehensive A+ healthcare services through distinguished medical faculties, multidisciplinary clinics, and advanced surgical care.',
      fullStory: [
        'Strategically situated in Kavacık at the transcontinental intersection of Istanbul, Medistate operates across 17,000 m² of eco-friendly green hospital architecture.',
        'Featuring state-of-the-art intensive care, robotic surgery capabilities, and world-class diagnostic radiology, Medistate serves thousands of domestic and global patients annually.',
        'With unwavering dedication to patient comfort, medical ethics, and clinical precision, Medistate stands as a beacon of modern Turkish healthcare.',
      ],
      services: [
        {
          title: 'Advanced Surgical Theaters',
          desc: 'Equipped for complex microsurgery, oncology resections, and minimally invasive laparoscopy.',
        },
        {
          title: 'Intensive Care Units (ICU)',
          desc: '24/7 dedicated neonatology, coronary, and general critical care monitoring.',
        },
        {
          title: 'Diagnostic Imaging & Laboratories',
          desc: '3T MRI, 128-slice CT, digital mammography, and accredited clinical pathology labs.',
        },
        {
          title: 'International Patient Center',
          desc: 'Multilingual assistance, airport logistics, and personalized treatment plans for global medical travelers.',
        },
      ],
      highlights: [
        '17,000 m² Modern Clinical Facility',
        'Eco-Friendly Green Hospital Design',
        'International Quality Accreditations',
        'A+ Patient Care Excellence',
      ],
      keyFacts: {
        sector: 'Healthcare Services & Medicine',
        foundedLabel: '2014',
        locationLabel: 'Kavacik, Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'Full-Service General Hospital',
      },
      seo: {
        title: 'Medistate Kavacık Hospital | Altınoran Holding',
        description:
          'Medistate Kavacık Hospital provides world-class healthcare, advanced diagnostics, and surgical excellence in Istanbul.',
        keywords: [
          'Medistate Hospital',
          'Medistate Istanbul',
          'Private Hospital Turkey',
          'Medical Tourism Istanbul',
        ],
      },
    },
    ar: {
      tag: 'خدمات الرعاية الصحية والطبية',
      title: 'مستشفى ميديستيت كافاجيك',
      subtitle: 'جودة شاملة، أخلاقيات طبية راسخة وتكنولوجيا علاجية متقدمة',
      description:
        'يقدم مستشفى ميديستيت كافاجيك خدمات طبية متكاملة من الدرجة الأولى (A+) بإشراف كبار الأطباء والاستشاريين وأحدث تقنيات التشخيص والجراحة.',
      fullStory: [
        'يقع مستشفى ميديستيت في موقع استراتيجي بمنطقة كافاجيك في إسطنبول، ويمتد على مساحة مغلقة تبلغ 17,000 م² ضمن مفهوم المستشفى الأخضر الصديق للبيئة.',
        'يضم وحدات عناية مركزة متطورة، غرف عمليات جراحية فائقة التقنية، ومراكز تشخيصية شاملة تستقبل آلاف المرضى من داخل تركيا وخارجها.',
        'يعد المستشفى وجهة مفضلة للسياحة العلاجية بفضل خدمات الترجمة والتنسيق الطبي المتكامل للمرضى الدوليين.',
      ],
      services: [
        {
          title: 'غرف العمليات والجراحة المتقدمة',
          desc: 'مجهزة بأحدث تقنيات الجراحة المجهرية والمنظار.',
        },
        {
          title: 'وحدات العناية المركزة المتخصصة',
          desc: 'عناية مركزة للأطفال حديثي الولادة، القلبية، والعامة بإشراف طبي على مدار الساعة.',
        },
        {
          title: 'مركز التشخيص والأشعة التخصصي',
          desc: 'رنين مغناطيسي 3 تسلا، أشعة مقطعية متطورة، ومختبرات تحاليل معتمدة.',
        },
        {
          title: 'مركز رعاية المرضى الدوليين',
          desc: 'خدمات ترجمة مخصصة، استقبال في المطار، وتنسيق خطط العلاج للمرضى القادمين من الخارج.',
        },
      ],
      highlights: [
        'مجمع طبي بمساحة 17,000 م²',
        'مستشفى أخضر صديق للبيئة',
        'معايير اعتماد دولية عالية',
        'مستوى رفيع لرضا المرضى',
      ],
      keyFacts: {
        sector: 'خدمات الرعاية الصحية والطبية',
        foundedLabel: '2014',
        locationLabel: 'كافاجيك، إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'مستشفى عام متكامل التخصصات',
      },
      seo: {
        title: 'مستشفى ميديستيت كافاجيك | ألتن أوران القابضة',
        description:
          'مستشفى ميديستيت كافاجيك في إسطنبول، صرح طبي متكامل يقدم أرقى الخدمات الجراحية والعلاجية والسياحة الطبية في تركيا.',
        keywords: [
          'مستشفى ميديستيت',
          'مستشفيات إسطنبول الخاصة',
          'سياحة علاجية تركيا',
          'ميديستيت كافاجيك',
        ],
      },
    },
  },

  'eston-yapi': {
    slug: 'eston-yapi',
    name: 'Eston Yapı A.Ş.',
    sectorId: 'insaat',
    founded: '1965',
    location: 'İstanbul, Türkiye',
    image: '/images/headquarters.jpg',
    stats: [
      { label: 'Sektörel Miras', value: '60+ Yıllık Tarih' },
      { label: 'Üretilen Konut', value: 'On Binlerce' },
      { label: 'Konsept Yaşam', value: 'Bahçeli & Prestij' },
      { label: 'Marka Gücü', value: 'Sektörün Öncüsü' },
    ],
    contact: {
      address: 'Eston Yapı A.Ş. Genel Müdürlük, İstanbul',
      phone: '+90 (212) 890 16 30',
      email: 'eston@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Köklü Yapı Mirası',
      title: 'Eston Yapı A.Ş.',
      subtitle: 'Yarım Asrı Aşan Tecrübe, Kentsel Yaşam Kültürü ve Güven',
      description:
        'Eston Yapı A.Ş.; 1965 yılından bu yana Türkiye’nin gayrimenkul ve konut geliştirme tarihindeki en köklü ve saygın markalarından biri olarak modern yerleşimler inşa eder.',
      fullStory: [
        '1965 yılında kurulan Eston Yapı, Türkiye’de planlı ve bahçeli kentsel konut kavramını ilk hayata geçiren öncü kurumlardan biridir.',
        'Eston Şehir, Eston Çamlıevler, Eston Ardıçlı ve Eston Dererevleri gibi efsaneleşmiş mega projelerle on binlerce aileyi huzurlu, yeşille iç içe ve güvenli yaşam alanlarıyla buluşturmuştur.',
        'Altınoran Yatırım Holding bünyesinde köklü mirasını geleceğin çevre dostu, akıllı mimari trendleriyle buluşturan Eston Yapı, yeni nesil mega projeler geliştirmeye devam etmektedir.',
      ],
      services: [
        {
          title: 'Büyük Ölçekli Konut Yerleşimleri',
          desc: 'Geniş peyzaj, sosyal tesisler ve bahçeli yaşam konseptini birleştiren mega konut projeleri.',
        },
        {
          title: 'Kentsel Tasarım & Master Planlama',
          desc: 'Şehir planlamasına değer katan, altyapısı ve sosyal donatıları eksiksiz yaşam yerleşkeleri.',
        },
        {
          title: 'Çevre Dostu & Sürdürülebilir Yapılar',
          desc: 'Enerji tasarruflu, yeşil bina sertifikalı çağdaş mimari konseptler.',
        },
        {
          title: 'Gayrimenkul Geliştirme Ortaklıkları',
          desc: 'Büyük ölçekli arazilerin katma değeri yüksek kentsel projelere dönüştürülmesi.',
        },
      ],
      highlights: [
        'Eston Şehir Projeleri',
        '60 Yılı Aşkın İnşaat Tecrübesi',
        'Bahçeli ve Doğayla Uyumlu Yaşam',
        'Türkiye’nin Güven Duyulan Markası',
      ],
      keyFacts: {
        sector: 'İnşaat & Gayrimenkul Geliştirme',
        foundedLabel: '1965 (60+ Yıllık Miras)',
        locationLabel: 'İstanbul, Türkiye',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Mega Konut & Kentsel Yerleşimler',
      },
      seo: {
        title: 'Eston Yapı A.Ş. | Altınoran Yatırım Holding',
        description:
          '1965 yılından bu yana Türkiye’nin köklü konut geliştirme markası Eston Yapı A.Ş., bahçeli yaşam ve mega kentsel projeler inşa eder.',
        keywords: [
          'Eston Yapı',
          'Eston Şehir',
          'Köklü İnşaat Firması',
          'Konut Projeleri İstanbul',
          'Altınoran Eston',
        ],
      },
    },
    en: {
      tag: 'Heritage Construction Brand',
      title: 'Eston Yapı A.Ş.',
      subtitle: 'Over Six Decades of Urban Living Heritage and Structural Trust',
      description:
        'Established in 1965, Eston Yapı A.Ş. is one of Türkiye’s most celebrated residential development pioneers, shaping master-planned garden communities and landmark urban communities.',
      fullStory: [
        'Founded in 1965, Eston Yapı introduced the concept of master-planned garden residences to the Turkish real estate landscape.',
        'With iconic milestone developments including Eston Şehir, Eston Çamlıevler, and Eston Ardıçlı, the company has delivered safe, nature-integrated homes to tens of thousands of families.',
        'Now operating under Altınoran Investment Holding, Eston Yapı continues its rich legacy by designing next-generation, sustainable smart residential townships.',
      ],
      services: [
        {
          title: 'Master-Planned Township Developments',
          desc: 'Large-scale residential projects with integrated parks, social amenities, and family living concepts.',
        },
        {
          title: 'Urban Architecture & Masterplanning',
          desc: 'Comprehensive community planning enhancing city skylines and local infrastructure.',
        },
        {
          title: 'Sustainable Green Building Standards',
          desc: 'Energy-efficient construction incorporating low-carbon architectural practices.',
        },
        {
          title: 'Joint Venture Property Development',
          desc: 'Strategic partnerships transforming large urban land banks into high-yield developments.',
        },
      ],
      highlights: [
        'Flagship Eston Şehir Townships',
        'Over 60 Years of Construction Integrity',
        'Garden Living & Biophilic Design',
        'Trusted Household Brand Name',
      ],
      keyFacts: {
        sector: 'Construction & Real Estate Development',
        foundedLabel: '1965 (60+ Years)',
        locationLabel: 'Istanbul, Türkiye',
        capitalStructure: '100% Domestic Capital',
        scope: 'Mega Residential Townships',
      },
      seo: {
        title: 'Eston Yapı A.Ş. | Altınoran Holding',
        description:
          'Eston Yapı A.Ş., pioneer of garden residential townships since 1965, creates iconic living communities across Türkiye.',
        keywords: [
          'Eston Yapi',
          'Eston Sehir',
          'Heritage Developer Turkey',
          'Master Planned Communities',
        ],
      },
    },
    ar: {
      tag: 'تاريخ عريق في التطوير العقاري',
      title: 'إستون يابي المساهمة',
      subtitle: 'أكثر من ستين عاماً من الخبرة والريادة في بناء المجمعات السكنية',
      description:
        'تعد إستون يابي A.Ş.، التي تأسست عام 1965، واحدة من أعرق وأشهر العلامات التجارية في تاريخ التطوير العقاري وبناء المجمعات السكنية الكبرى في تركيا.',
      fullStory: [
        'تأسست إستون يابي عام 1965، وكانت رائدة في تقديم مفهوم السكن المتكامل مع الحدائق والمساحات الخضراء في السوق التركي.',
        'من خلال مشاريعها الأيقونية مثل إستون شهير، شيدت آلاف المنازل التي تجمع بين الأمان المعماري والطبيعة الخلابة.',
        'تحت مظلة ألتن أوران القابضة، تواصل إستون يابي مسيرتها في تطوير مجمعات الجيل الجديد الذكية والصديقة للبيئة.',
      ],
      services: [
        {
          title: 'تطوير المدن والمجمعات السكنية الكبرى',
          desc: 'مشاريع ضخمة تشمل مساحات خضراء شاسعة ومرافق ترفيهية وخدمية متكاملة.',
        },
        {
          title: 'التخطيط الحضري والتصميم العام',
          desc: 'تخطيط عمراني راقٍ يعزز جودة الحياة المجتمعية.',
        },
        {
          title: 'مبانٍ مستدامة وصديقة للبيئة',
          desc: 'تصاميم معمارية تعتمد تقنيات ترشيد الطاقة والمواد الطبيعية.',
        },
        {
          title: 'شراكات التطوير العقاري الكبرى',
          desc: 'تحويل المساحات الشاسعة إلى صروح عمرانية ذات عائد استثماري استثنائي.',
        },
      ],
      highlights: [
        'مشاريع إستون شهير الرائدة',
        'أكثر من 60 عاماً من الخبرة الإنشائية',
        'مفهوم السكن بين الحدائق والطبيعة',
        'العلامة الأكثر ثقة في قطاع الإسكان',
      ],
      keyFacts: {
        sector: 'الإنشاءات والتطوير العقاري',
        foundedLabel: '1965 (تاريخ عريق 60+ عاماً)',
        locationLabel: 'إسطنبول، تركيا',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'مشاريع سكنية ضخمة ومدن سكنية',
      },
      seo: {
        title: 'إستون يابي | ألتن أوران القابضة',
        description:
          'شركة إستون يابي، أعرق شركات التطوير العقاري في تركيا منذ عام 1965، رائدة المجمعات السكنية الخضراء.',
        keywords: [
          'إستون يابي',
          'إستون شهير',
          'مجمعات سكنية إسطنبول',
          'ألتن أوران القابضة',
        ],
      },
    },
  },

  'azer-gida': {
    slug: 'azer-gida',
    name: 'AzerGıda',
    sectorId: 'dis-ticaret',
    founded: '2016',
    location: 'İstanbul & Global',
    image: '/images/energy.jpg',
    stats: [
      { label: 'Kalite Güvencesi', value: '%100 Sertifikalı' },
      { label: 'Dağıtım Ağı', value: 'Ulusal & İhracat' },
      { label: 'Depolama', value: 'Soğuk Hava Zinciri' },
      { label: 'Ürün Yelpazesi', value: 'Temel & Gurme Gıda' },
    ],
    contact: {
      address: 'AzerGıda Lojistik ve İhracat Merkezi, İstanbul',
      phone: '+90 (212) 890 16 32',
      email: 'azergida@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Gıda Üretimi & Tedariği',
      title: 'AzerGıda',
      subtitle: 'Kaliteli Gıda Üretimi, Hijyenik Paketleme ve Küresel Tedarik',
      description:
        'AzerGıda; güvenilir gıda üretimi, uluslararası hijyen standartlarında paketleme ve etkin lojistik ağı ile sofralara kaliteli ve sağlıklı gıda ulaştırır.',
      fullStory: [
        'AzerGıda, 2016 yılından bu yana tarımsal ve işlenmiş gıda sektöründe güvenli tedarik zincirleri inşa etmektedir.',
        'Kaliteli bakliyat, tahıl, temel gıda ve taze zirai ürünlerin tedariğinden paketlenmesine ve toptan dağıtımına kadar entegre bir zincir yönetir.',
        'Yurtiçi zincir marketlere tedariğin yanı sıra Ortadoğu, Kafkaslar ve Avrupa pazarlarına ihracat gerçekleştiren AzerGıda, gıda güvenliğini en üst öncelik sayar.',
      ],
      services: [
        {
          title: 'Sertifikalı Gıda Tedariği & Paketleme',
          desc: 'ISO 22000 ve Helal sertifikalı tesislerde hijyenik paketleme ve kalite kontrol.',
        },
        {
          title: 'Toptan Gıda İkmal Zinciri',
          desc: 'Kurumsal zincirlere, otellere ve toptancılara düzenli ve güvenli gıda sevkiyatı.',
        },
        {
          title: 'Soğuk Hava Zinciri ve Lojistik',
          desc: 'Ürünlerin tazeliğini ve besin değerini koruyan iklim kontrollü depolama ve nakliye.',
        },
        {
          title: 'Gıda İhracatı & Dış Ticaret',
          desc: 'Bölgesel ve küresel pazarlara yönelik sertifikalı Türk gıda ürünleri ihracatı.',
        },
      ],
      highlights: [
        'Sertifikalı Hijyenik Paketleme',
        'Uluslararası İhracat Ağı',
        'Soğuk Zincir Depolama Altyapısı',
        'Güvenilir Gıda Kalite Güvencesi',
      ],
      keyFacts: {
        sector: 'Gıda & Tüketim',
        foundedLabel: '2016',
        locationLabel: 'İstanbul & Global',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Toptan Gıda & Dış Ticaret',
      },
      seo: {
        title: 'AzerGıda | Altınoran Yatırım Holding',
        description:
          'AzerGıda; kaliteli gıda üretimi, paketleme, toptan tedarik ve uluslararası gıda ihracatı gerçekleştiren güvenilir markadır.',
        keywords: [
          'AzerGıda',
          'Gıda Tedariği',
          'Gıda İhracatı',
          'Toptan Gıda İstanbul',
          'Altınoran Gıda',
        ],
      },
    },
    en: {
      tag: 'Food Production & Logistics',
      title: 'AzerGıda',
      subtitle: 'Premium Food Processing, Hygienic Packaging, and International Distribution',
      description:
        'AzerGıda manages integrated food supply chains, certified hygienic processing, and temperature-controlled distribution delivering wholesome nutrition to global tables.',
      fullStory: [
        'Established in 2016, AzerGıda focuses on the production, processing, packaging, and wholesale trade of staple foods, grains, and agricultural produce.',
        'With certified packing facilities and strict compliance with food safety regulations, the company supplies major retail networks and overseas trade corridors.',
        'AzerGıda exports to markets across the Middle East, Caucasus, and Europe, reinforcing Türkiye’s agricultural export prominence.',
      ],
      services: [
        {
          title: 'Certified Food Processing & Packaging',
          desc: 'ISO 22000 and Halal-certified food handling, sorting, and packaging facilities.',
        },
        {
          title: 'Wholesale Commercial Distribution',
          desc: 'Continuous delivery pipelines for supermarket chains, institutional caterers, and distributors.',
        },
        {
          title: 'Cold Chain Logistics & Warehousing',
          desc: 'Climate-controlled storage facilities preserving optimum freshness and product shelf life.',
        },
        {
          title: 'Agricultural Commodity Export',
          desc: 'Exporting premium Turkish agricultural commodities and packaged foods globally.',
        },
      ],
      highlights: [
        'Certified Hygienic Processing Hub',
        'International Export Footprint',
        'Cold-Chain Storage Logistics',
        'Uncompromising Food Safety Systems',
      ],
      keyFacts: {
        sector: 'Food & FMCG',
        foundedLabel: '2016',
        locationLabel: 'Istanbul & International',
        capitalStructure: '100% Domestic Capital',
        scope: 'Wholesale & Cross-Border Trade',
      },
      seo: {
        title: 'AzerGıda | Altınoran Holding',
        description:
          'AzerGıda is a premier food processor and exporter, managing certified packaging and cold-chain food supply networks.',
        keywords: [
          'AzerGida',
          'Food Processor Turkey',
          'Food Export Istanbul',
          'Agricultural Trade',
        ],
      },
    },
    ar: {
      tag: 'صناعة وتجارة المواد الغذائية',
      title: 'آذر غيداء',
      subtitle: 'إنتاج غذائي معتمد، تعبئة صحية وشبكة توزيع دولية',
      description:
        'تعمل آذر غيداء على تصنيع وتعبئة وتوزيع المواد الغذائية عالية الجودة وفق أعلى معايير السلامة الصحية وشبكات التبريد اللوجستية الحديثة.',
      fullStory: [
        'منذ تأسيسها في عام 2016، رسخت آذر غيداء مكانتها كشركة موثوقة في قطاع تجارة وتوريد المواد الغذائية الأساسية والحبوب والمنتجات الزراعية.',
        'تدير منشآت تعبئة حاصلة على شهادات الجودة العالمية وتزود سلاسل التجزئة الكبرى وشبكات التوزيع الإقليمية.',
        'تعد من كبرى الشركات المصدرة للمنتجات الغذائية التركية إلى أسواق الشرق الأوسط، القوقاز، وأوروبا.',
      ],
      services: [
        {
          title: 'التعبئة والتغليف الصحي المعتمد',
          desc: 'معالجة وتعبئة المواد الغذائية وفق معايير ISO 22000 وشهادات الحلال.',
        },
        {
          title: 'التوريد الغذائي بالجملة',
          desc: 'إمداد مستمر ومنتظم لسلاسل المتاجر الكبرى والمنشآت الغذائية.',
        },
        {
          title: 'سلسلة التبريد والتخزين اللوجستي',
          desc: 'مستودعات مكيفة ومبردة تحافظ على نضارة وجودة المنتجات الغذائية.',
        },
        {
          title: 'التصدير والتجارة الدولية',
          desc: 'تصدير المنتجات الغذائية والزراعية إلى الأسواق الإقليمية والعالمية.',
        },
      ],
      highlights: [
        'مرافق تعبئة وتغليف صحية ومعتمدة',
        'شبكة تصدير دولية واسعة',
        'بنية لوجستية متطورة لسلسلة التبريد',
        'ضمان كامل لسلامة وجودة الغذاء',
      ],
      keyFacts: {
        sector: 'صناعة وتجارة المواد الغذائية',
        foundedLabel: '2016',
        locationLabel: 'إسطنبول ودولياً',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'تجارة جملة وتصدير دولي',
      },
      seo: {
        title: 'آذر غيداء | ألتن أوران القابضة',
        description:
          'شركة آذر غيداء لإنتاج وتعبئة وتصدير المواد الغذائية، جودة معتمدة وشبكة لوجستية عالمية.',
        keywords: [
          'آذر غيداء',
          'تصدير مواد غذائية تركيا',
          'تجارة الأغذية إسطنبول',
          'ألتن أوران القابضة',
        ],
      },
    },
  },

  'azer-tarim': {
    slug: 'azer-tarim',
    name: 'AzerTarım',
    sectorId: 'dis-ticaret',
    founded: '2017',
    location: 'Türkiye & Bölge',
    image: '/images/energy.jpg',
    stats: [
      { label: 'Üretim Modeli', value: 'Modern & Sürdürülebilir' },
      { label: 'Zirai Standart', value: 'İyi Tarım (İTU)' },
      { label: 'Sera Alanı', value: 'Yüksek Teknoloji' },
      { label: 'Katma Değer', value: 'Yüksek Verim' },
    ],
    contact: {
      address: 'AzerTarım Zirai Yatırımlar & Operasyon Merkezi, Türkiye',
      phone: '+90 (212) 890 16 34',
      email: 'azertarim@altinoranyatirimholding.com.tr',
    },
    tr: {
      tag: 'Modern Tarım & Ziraat',
      title: 'AzerTarım',
      subtitle: 'Sürdürülebilir Zirai Üretim, Modern Seracılık ve Katma Değer',
      description:
        'AzerTarım; modern tarım teknolojileri, kontrollü seracılık sistemleri ve iyi tarım uygulamalarıyla toprağın bereketini yüksek katma değerli üretime dönüştürür.',
      fullStory: [
        'AzerTarım, gıda güvenliğinin temelini oluşturan tarım sektöründe teknoloji odaklı ve çevreye duyarlı üretim modelleri geliştirmektedir.',
        'Akıllı sulama sistemleri, topraksız tarım otomasyonları ve iklimlendirmeli modern sera kompleksleriyle dört mevsim yüksek verimli zirai üretim gerçekleştirir.',
        'Doğal kaynakları koruyan ve sürdürülebilir tarımı destekleyen AzerTarım, Altınoran Holding’in yeşil üretim vizyonunu toprağa yansıtmaktadır.',
      ],
      services: [
        {
          title: 'Modern & Teknolojik Seracılık',
          desc: 'İklim kontrollü, jeotermal veya güneş enerjili modern sera ünitelerinde yüksek kaliteli mahsul yetiştiriciliği.',
        },
        {
          title: 'İyi Tarım Uygulamaları (İTU)',
          desc: 'Kimyasal kalıntısız, izlenebilir ve çevre dostu tarımsal üretim sertifikasyonları.',
        },
        {
          title: 'Akıllı Sulama & Otomasyon',
          desc: 'Su tasarruflu damla sulama ve sensör tabanlı gübreleme teknolojileri ile maksimum verim.',
        },
        {
          title: 'Sözleşmeli Tarım & Hasat Yönetimi',
          desc: 'Yerel üreticilerle iş birliği içinde standart kalite ve garantili alım modelleri.',
        },
      ],
      highlights: [
        'Yüksek Teknolojili Modern Seracılık',
        'Sürdürülebilir Akıllı Sulama',
        'İyi Tarım Sertifikalı Üretim',
        'Dört Mevsim Kesintisiz Hasat',
      ],
      keyFacts: {
        sector: 'Tarım & Ziraat',
        foundedLabel: '2017',
        locationLabel: 'Türkiye & Bölgesel Tesisler',
        capitalStructure: '%100 Yerli Sermaye',
        scope: 'Modern Zirai Üretim & Seracılık',
      },
      seo: {
        title: 'AzerTarım | Altınoran Yatırım Holding',
        description:
          'AzerTarım; modern seracılık, sürdürülebilir tarımsal üretim ve yüksek verimli akıllı ziraat teknolojileri geliştirir.',
        keywords: [
          'AzerTarım',
          'Modern Seracılık',
          'Sürdürülebilir Tarım',
          'İyi Tarım Uygulamaları',
          'Altınoran Tarım',
        ],
      },
    },
    en: {
      tag: 'Modern Agriculture & Agro-Tech',
      title: 'AzerTarım',
      subtitle: 'Sustainable Agricultural Cultivation, Advanced Greenhouses, and Agro-Tech',
      description:
        'AzerTarım leverages modern agro-technologies, smart greenhouse environments, and certified sustainable farming to transform fertile soils into high-yield produce.',
      fullStory: [
        'Recognizing agriculture as foundational to global security, AzerTarım implements high-efficiency cultivation techniques that preserve soil and water.',
        'With climate-controlled soilless greenhouse automation and telemetry-based irrigation, the company ensures year-round harvest consistency.',
        'AzerTarım mirrors Altınoran Holding’s sustainability ethos by promoting green, carbon-conscious farming frameworks.',
      ],
      services: [
        {
          title: 'Advanced Climate-Controlled Greenhouses',
          desc: 'High-tech greenhouse facilities utilizing automated climate and solar energy systems.',
        },
        {
          title: 'Certified Good Agricultural Practices (GAP)',
          desc: 'Traceable, pesticide-minimized, and eco-friendly farming adhering to strict food quality audits.',
        },
        {
          title: 'Precision Irrigation & Automation',
          desc: 'Sensor-driven drip irrigation and automated fertigation systems optimizing water conservation.',
        },
        {
          title: 'Contract Farming & Harvest Logistics',
          desc: 'Empowering regional farmers with guaranteed purchase contracts and technical agronomic advisory.',
        },
      ],
      highlights: [
        'High-Tech Commercial Greenhouses',
        'Precision Irrigation & Water Conservation',
        'Certified Good Agricultural Practices',
        'Year-Round Resilient Crop Harvests',
      ],
      keyFacts: {
        sector: 'Agriculture & Agro-Tech',
        foundedLabel: '2017',
        locationLabel: 'Türkiye & Regional Hubs',
        capitalStructure: '100% Domestic Capital',
        scope: 'Sustainable Agro-Tech Cultivation',
      },
      seo: {
        title: 'AzerTarım | Altınoran Holding',
        description:
          'AzerTarım leads in modern greenhouse agriculture, smart irrigation, and sustainable crop production.',
        keywords: [
          'AzerTarim',
          'Modern Greenhouses Turkey',
          'Agro Tech Farming',
          'Sustainable Agriculture',
        ],
      },
    },
    ar: {
      tag: 'الزراعة الحديثة والتقنيات الزراعية',
      title: 'آذر تريم',
      subtitle: 'إنتاج زراعي مستدام، بيوت زراعية ذكية وممارسات زراعية متطورة',
      description:
        'تطبق آذر تريم أحدث التقنيات الزراعية وأنظمة البيوت المحمية الذكية لتحويل الموارد الطبيعية إلى محاصيل وفيرة وعالية القيمة الغذائية.',
      fullStory: [
        'تتبنى آذر تريم استراتيجيات زراعية ذكية وصديقة للبيئة تركز على استدامة الموارد المائية وخصوبة التربة.',
        'تعتمد على البيوت الزجاجية المتطورة وأنظمة الري الذكية لضمان حصاد وفير ومستمر على مدار فصول السنة الأربعة.',
        'تجسد رؤية ألتن أوران القابضة في الاستثمار الأخضر وتحقيق الأمن الغذائي المستدام.',
      ],
      services: [
        {
          title: 'البيوت المحمية الذكية والمتحكم بمناخها',
          desc: 'زراعة محاصيل عالية الجودة في بيئات مبردة ومدفأة بتقنيات الطاقة النظيفة.',
        },
        {
          title: 'الممارسات الزراعية الجيدة المعتمدة (GAP)',
          desc: 'إنتاج زراعي خالٍ من الملوثات الكيميائية ومطابق لمعايير الصحة العالمية.',
        },
        {
          title: 'أنظمة الري الدقيق والأتمتة',
          desc: 'ري بالتنقيط وأتمتة التسميد باستخدام المستشعرات لتوفير المياه وتعظيم الإنتاجية.',
        },
        {
          title: 'الزراعة التعاقدية وإدارة المحاصيل',
          desc: 'شراكات مع المزارعين المحليين لضمان الجودة والتوريد المنتظم.',
        },
      ],
      highlights: [
        'مجمعات بيوت محمية فائقة التقنية',
        'ترشيد ذكي لاستهلاك المياه',
        'شهادات ممارسات زراعية جيدة',
        'إنتاج مستمر طوال فصول العام',
      ],
      keyFacts: {
        sector: 'الزراعة الحديثة والتقنيات الزراعية',
        foundedLabel: '2017',
        locationLabel: 'تركيا ومرافق إقليمية',
        capitalStructure: 'رأس مال وطني 100٪',
        scope: 'زراعة حديثة وبيوت محمية ذكية',
      },
      seo: {
        title: 'آذر تريم | ألتن أوران القابضة',
        description:
          'شركة آذر تريم للزراعة الحديثة والبيوت المحمية الذكية، رائدة الزراعة المستدامة في تركيا.',
        keywords: [
          'آذر تريم',
          'بيوت محمية تركيا',
          'زراعة ذكية ومستدامة',
          'ألتن أوران القابضة',
        ],
      },
    },
  },
};

export function getSubsidiaryBySlug(slug: string): SubsidiaryItem | undefined {
  return SUBSIDIARIES_DATA[slug];
}

export function getAllSubsidiarySlugs(): string[] {
  return Object.keys(SUBSIDIARIES_DATA);
}
