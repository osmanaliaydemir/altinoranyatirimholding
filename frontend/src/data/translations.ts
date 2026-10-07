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
      subtitle: "Müşterilerimize sürekli yenilikçi ve alternatif hizmetler sunan vizyonumuzla; gayrimenkulden sağlığa, inşaattan akaryakıta, bilişimden küresel ticarete uzanan güçlü bir değer mimarisi.",
      discoverBtn: "Faaliyet Alanlarımız",
      investorBtn: "Yatırımcı İlişkileri",
      scrollDown: "Aşağı Kaydırın"
    },
    metrics: {
      title: "Rakamlarla Grubumuz",
      subtitle: "Güvenilir sermaye ve çok sektörlü operasyonel güç",
      items: [
        {
          label: "Yerli Sermaye & Özkaynak",
          value: "100",
          prefix: "%",
          suffix: " Yerli",
          description: "Güçlü, bağımsız ve güvenilir sermaye yapısı"
        },
        {
          label: "Stratejik Sektör",
          value: "6",
          suffix: " Alan",
          description: "Gayrimenkul, inşaat, sağlık, akaryakıt, bilişim, dış ticaret"
        },
        {
          label: "Grup Şirketi & Marka",
          value: "10",
          suffix: " Şirket",
          description: "Demtaş, Tekin Yapı, Medistate, Mimkon, Eston, AzerGıda..."
        },
        {
          label: "Küresel Ticaret & Ağ",
          value: "Global",
          suffix: " Ağ",
          description: "Yurtdışı ithalat-ihracat, nakliyat ve inşaat taahhütleri"
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
      author: "Hanifi Tekin",
      role: "Yönetim Kurulu Başkanı",
      quote: "Sektöründe yenilikçi ve alternatif hizmetler sunarak, gelişen ve değişen küresel dünyada ülkemize ve paydaşlarımıza kesintisiz değer üretmekten onur duyuyoruz.",
      paragraphs: [
        "Sektöründe müşterilerine sürekli yenilikçi ve alternatif hizmetler sunan grubumuz; gelişen ve değişen global yapıya ayak uydurmak ve daha etkin bir ticaret yapmak adına gayrimenkul, inşaat, sağlık, akaryakıt, ofis-bilişim ve dış ticaret alanlarında güçlü hizmet alanları oluşturmuş ve başarıyla faaliyete geçirmiştir.",
        "Demtaş Gayrimenkul ile yüksek prestijli arazi geliştirme faaliyetlerinden Medistate Kavacık Hastanesi ile ileri sağlık hizmetlerine; Tekin Yapı, Mimkon ve Eston Yapı A.Ş. ile modern yapılar inşa etmekten akaryakıt, bilişim ve tarım yatırımlarına kadar her alanda güvenilirliği temel aldık.",
        "Bugün 10 dinamik grup şirketimiz, %100 yerli sermayemiz ve uluslararası ticaret ağımızla ülkemizin kalkınma yolculuğuna kararlılıkla katkı sağlıyoruz."
      ],
      signature: "Hanifi Tekin • Yönetim Kurulu Başkanı"
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
          name: "Gayrimenkul & Arazi Geliştirme",
          badge: "Prestij & Değer",
          shortDesc: "Yüksek prestijli arazi geliştirme faaliyetleri, arsa değerlendirme ve karlı gayrimenkul yatırımları.",
          fullDesc: "Demtaş Gayrimenkul Yatırım bünyesinde geliştirdiğimiz her projede büyük bir fark yaratıyor ve yeni bir yaşam tarzı sunuyoruz. Satın alınan arsaları profesyonel ekiplerimizle değerlendiriyor, en uygun fizibilite şartlarını belirleyerek müşterilerimize kazançlı gayrimenkul fırsatları sunuyoruz.",
          stats: [
            { label: "Öne Çıkan Projeler", value: "5+ Prestij Proje" },
            { label: "Faaliyet Alanı", value: "Arazi Geliştirme & Yatırım" }
          ],
          highlights: ["YalıCourt İstanbul", "LifeTime Cty Court", "Trante Evleri", "GökKuşağı Blokları", "Korgan Hill Blokları"],
          companies: ["Demtaş Gayrimenkul Yatırım"]
        },
        {
          id: "insaat",
          name: "İnşaat, Mimarlık & Taahhüt",
          badge: "Geleceği İnşa Ediyoruz",
          shortDesc: "Modern yapılar, altyapı ve üstyapı taahhüt projeleri, mimari tasarım ve mühendislik çözümleri.",
          fullDesc: "Tekin Yapı, Mimkon ve Eston Yapı A.Ş. ortak tecrübesiyle; konut, ticari ve kurumsal projelerin yanı sıra yurtiçi ve yurtdışı altyapı-üstyapı inşaat alanlarında da çağdaş, estetik ve sağlam yapılar hayata geçiriyoruz.",
          stats: [
            { label: "Uzmanlık Alanı", value: "Altyapı & Üstyapı" },
            { label: "Tasarım & Mimarlık", value: "Entegre Mühendislik" }
          ],
          highlights: ["Modern Konut Yerleşkeleri", "Kentsel Üstyapı Projeleri", "Konsept Mimari Tasarımlar"],
          companies: ["Tekin Yapı", "Mimkon Mimarlık", "Eston Yapı A.Ş."]
        },
        {
          id: "saglik",
          name: "Sağlık Hizmetleri",
          badge: "Sağlığınızı Önemsiyoruz",
          shortDesc: "Bütüncül kalite anlayışı, etik ilkeler ve uzman kadro ile ileri teknoloji sağlık hizmetleri.",
          fullDesc: "Medistate Kavacık Hastanesi ile etik ilkelerden ödün vermeden, alanlarında uzman hekimleri ve sağlık çalışanları ile güncel, koruyucu ve iyileştirici sağlık hizmeti sunarak tıbbın gelişimine ve toplum sağlığına katkıda bulunuyoruz.",
          stats: [
            { label: "Hizmet Standartı", value: "A+ Kalite" },
            { label: "Klinik Yaklaşım", value: "Multidisipliner Tıp" }
          ],
          highlights: ["Medistate Kavacık Hastanesi", "İleri Tanı ve Tedavi Üniteleri"],
          companies: ["Medistate Kavacık Hastanesi"]
        },
        {
          id: "akaryakit",
          name: "Akaryakıt & Enerji Dağıtımı",
          badge: "Güvenli Enerji İkmali",
          shortDesc: "Güvenilir akaryakıt istasyon işletmeciliği, kaliteli yakıt ikmali ve kurumsal filo çözümleri.",
          fullDesc: "Demtaş Akaryakıt çatısı altında, müşteri memnuniyeti ve emniyet odaklı istasyon operasyonları ile araç sahiplerine ve kurumsal filolara kesintisiz, güvenli ve yüksek standartlı akaryakıt tedariği sağlıyoruz.",
          stats: [
            { label: "Hizmet Standardı", value: "7/24 Kesintisiz" },
            { label: "Hizmet Alanı", value: "İstasyon & Kurumsal Filo" }
          ],
          highlights: ["Demtaş İstasyon Ağı", "Kurumsal Filo Yakıt İkmali"],
          companies: ["Demtaş Akaryakıt"]
        },
        {
          id: "ofis-kirtasiye",
          name: "Ofis-Kırtasiye & Bilişim Teknolojileri",
          badge: "Teknolojiyi Takip Ediyoruz",
          shortDesc: "Kurumsal ofis-kırtasiye tedariği, toptan dağıtım, güçlü bilişim altyapıları ve yazılım sistemleri.",
          fullDesc: "Demtaş Evrensel ile kurumsal firmaların tüm ofis, kırtasiye ve sarf malzemesi tedarik zincirini karşılarken; Demtaş Bilişim ile kurumsal teknoloji altyapıları, bilgi sistemleri ve modern yazılım çözümleri sunuyoruz.",
          stats: [
            { label: "Tedarik Gamı", value: "Geniş Ürün Yelpazesi" },
            { label: "Teknoloji", value: "Kurumsal Bilişim Altyapısı" }
          ],
          highlights: ["Kurumsal Tedarik Ağı", "Bilişim Sistemleri Entegrasyonu"],
          companies: ["Demtaş Bilişim", "Demtaş Evrensel"]
        },
        {
          id: "dis-ticaret",
          name: "Dış Ticaret, Lojistik, Gıda & Tarım",
          badge: "Küresel Ticaret Ağı",
          shortDesc: "Yurtdışı ithalat-ihracat, uluslararası nakliyat, kaliteli gıda dağıtımı ve sürdürülebilir tarımsal üretim.",
          fullDesc: "Gelişen ve değişen global yapıya ayak uydurmak ve daha etkin bir ticaret yapmak adına yurtdışında ithalat-ihracat, nakliyat ve gayrimenkul satışı alanlarında faaliyet gösteriyor; AzerGıda ile kaliteli gıda tedariğini ve AzerTarım ile verimli zirai üretimi yürütüyoruz.",
          stats: [
            { label: "Ticaret Kapsamı", value: "Uluslararası Ticaret & Nakliyat" },
            { label: "Üretim", value: "Gıda & Modern Tarım" }
          ],
          highlights: ["Uluslararası İthalat-İhracat Koridoru", "AzerGıda Tedarik Zinciri", "AzerTarım Zirai Tesisleri"],
          companies: ["AzerGıda", "AzerTarım", "Dış Ticaret & Nakliyat"]
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
          title: "Küresel Ticaret Ağı: Uluslararası İthalat-İhracat ve Nakliyat Faaliyetlerimiz Genişliyor",
          date: "2026",
          category: "Dış Ticaret & Büyüme",
          summary: "Gelişen global yapıya ayak uydurarak yurtdışı gayrimenkul satışı, altyapı-üstyapı inşaat ve nakliyat alanlarındaki etkin ticari faaliyetlerimize yeni küresel koridorlar ekliyoruz."
        },
        {
          id: "2",
          title: "Demtaş Gayrimenkul'den Yeni Arazi Geliştirme ve Prestijli Proje Hamlesi",
          date: "2026",
          category: "Gayrimenkul Yatırım",
          summary: "Geliştirdiği her projede yeni bir yaşam tarzı sunan Demtaş Gayrimenkul, satın aldığı stratejik arsalarda fizibilite çalışmalarını tamamlayarak prestijli projelerin hazırlıklarına başladı."
        },
        {
          id: "3",
          title: "Medistate Kavacık Hastanesi İleri Tıbbi Teknoloji ve Uzman Kadrosuyla Hizmette",
          date: "2026",
          category: "Sağlık & Yaşam",
          summary: "Bütüncül kalite anlayışı ve etik ilkelerle donatılan Medistate Kavacık Hastanesi, koruyucu ve iyileştirici ileri sağlık hizmetleriyle tıbbın gelişimine katkı sağlamaya devam ediyor."
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
      subtitle: "Delivering innovative and alternative solutions across key industries—from prime real estate to healthcare, construction to fuel distribution, IT to global trade.",
      discoverBtn: "Explore Our Sectors",
      investorBtn: "Investor Relations",
      scrollDown: "Scroll Down"
    },
    metrics: {
      title: "Group In Numbers",
      subtitle: "Disciplined capital and multi-sector operational strength",
      items: [
        {
          label: "Domestic Capital & Equity",
          value: "100",
          prefix: "%",
          suffix: " Domestic",
          description: "Solid, independent, and resilient balance sheet"
        },
        {
          label: "Strategic Sectors",
          value: "6",
          suffix: " Sectors",
          description: "Real estate, construction, healthcare, fuel, IT, global trade"
        },
        {
          label: "Group Companies & Brands",
          value: "10",
          suffix: " Companies",
          description: "Demtaş, Tekin Yapı, Medistate, Mimkon, Eston, AzerGıda..."
        },
        {
          label: "Global Trade Network",
          value: "Global",
          suffix: " Reach",
          description: "International import-export, freight, and turnkey contracting"
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
      author: "Hanifi Tekin",
      role: "Chairman of the Board",
      quote: "Continuously providing innovative and alternative services to our partners while creating sustainable value for society and future generations.",
      paragraphs: [
        "Consistently offering innovative and alternative solutions across evolving global markets, our group has established and expanded strong operating pillars across real estate, construction, healthcare, fuel distribution, IT supplies, and international trade.",
        "From high-prestige land development with Demtaş Real Estate to comprehensive healthcare services with Medistate Kavacık Hospital; from modern living structures with Tekin Yapı, Mimkon, and Eston Yapı A.Ş. to energy, technology, and agriculture—trust and excellence remain our foundation.",
        "Today, backed by 10 agile group companies, 100% domestic capital, and an international trading footprint, we are proudly advancing Türkiye's sustainable economic journey."
      ],
      signature: "Hanifi Tekin • Chairman of the Board"
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
          name: "Real Estate & Land Development",
          badge: "Prestige & Value",
          shortDesc: "High-prestige land development, feasibility evaluation, and high-yield real estate investments.",
          fullDesc: "Through Demtaş Real Estate Investment, we create distinguished living standards across every project. Our professional teams evaluate strategic lands to determine optimal feasibility, delivering lucrative and prestigious investment opportunities.",
          stats: [
            { label: "Notable Projects", value: "5+ Prime Projects" },
            { label: "Focus", value: "Land Development & Acquisition" }
          ],
          highlights: ["YalıCourt Istanbul", "LifeTime Cty Court", "Trante Residences", "GökKuşağı Blocks", "Korgan Hill"],
          companies: ["Demtaş Real Estate Investment"]
        },
        {
          id: "insaat",
          name: "Construction, Architecture & Contracting",
          badge: "Building The Future",
          shortDesc: "Modern buildings, infrastructure and superstructure contracting, architectural design and engineering.",
          fullDesc: "Combining the seasoned strengths of Tekin Yapı, Mimkon, and Eston Yapı A.Ş., we build durable, aesthetic, and state-of-the-art residential and commercial developments, as well as domestic and international infrastructure projects.",
          stats: [
            { label: "Contracting Scope", value: "Infrastructure & Superstructure" },
            { label: "Design", value: "Integrated Architecture & Engineering" }
          ],
          highlights: ["Modern Living Developments", "Urban Infrastructure Projects", "Concept Architectural Masterplans"],
          companies: ["Tekin Yapı", "Mimkon Architecture", "Eston Yapı A.Ş."]
        },
        {
          id: "saglik",
          name: "Healthcare Services",
          badge: "Compassionate Healthcare",
          shortDesc: "Holistic care, ethical medical practices, and advanced diagnostic and treatment services.",
          fullDesc: "At Medistate Kavacık Hospital, we provide comprehensive, preventive, and curative healthcare services through distinguished physicians and state-of-the-art medical technology, contributing to medical advancement and community well-being.",
          stats: [
            { label: "Service Quality", value: "A+ Standard" },
            { label: "Approach", value: "Multidisciplinary Medicine" }
          ],
          highlights: ["Medistate Kavacık Hospital", "Advanced Diagnostic & Surgical Units"],
          companies: ["Medistate Kavacık Hospital"]
        },
        {
          id: "akaryakit",
          name: "Fuel & Energy Distribution",
          badge: "Secure Energy Supply",
          shortDesc: "Dependable petrol station networks, high-grade fuel supply, and corporate fleet services.",
          fullDesc: "Under Demtaş Fuel, we deliver safe, uninterrupted, and top-tier fuel supplies to motorists and enterprise logistics fleets through modern, customer-oriented station operations.",
          stats: [
            { label: "Availability", value: "24/7 Uninterrupted" },
            { label: "Service Line", value: "Station Retail & Corporate Fleet" }
          ],
          highlights: ["Demtaş Station Network", "Commercial Fleet Fuel Solutions"],
          companies: ["Demtaş Fuel"]
        },
        {
          id: "ofis-kirtasiye",
          name: "Office Supplies & Information Technology",
          badge: "Embracing Technology",
          shortDesc: "Wholesale corporate office supplies, procurement logistics, enterprise IT infrastructure, and software.",
          fullDesc: "Through Demtaş Evrensel, we supply complete stationery, consumables, and office procurement chains, while Demtaş Bilişim delivers robust digital infrastructure, hardware systems, and modern software integration.",
          stats: [
            { label: "Product Portfolio", value: "Comprehensive Catalog" },
            { label: "Technology", value: "Enterprise IT Systems" }
          ],
          highlights: ["Corporate Procurement Network", "IT Infrastructure Systems"],
          companies: ["Demtaş Bilişim", "Demtaş Evrensel"]
        },
        {
          id: "dis-ticaret",
          name: "Global Trade, Logistics, Agro & Food",
          badge: "Global Network",
          shortDesc: "International import-export, cross-border freight, certified food distribution, and sustainable agriculture.",
          fullDesc: "Navigating evolving global trade lanes, we manage international import-export, freight forwarding, and overseas property sales; while AzerGıda coordinates reliable food distribution and AzerTarım leads sustainable agricultural farming.",
          stats: [
            { label: "Trade Span", value: "International Trade & Freight" },
            { label: "Production", value: "Agro & Food Processing" }
          ],
          highlights: ["International Trade Corridors", "AzerGıda Distribution Network", "AzerTarım Agricultural Facilities"],
          companies: ["AzerGıda", "AzerTarım", "Global Trade & Logistics"]
        }
      ]
    },
    investorRelations: {
      tag: "Investor Relations",
      title: "Transparent, Resilient & Value-Driven Governance",
      subtitle: "Complete adherence to corporate governance standards, financial stewardship, and long-term value creation.",
      financialSummary: "2026/Q2 Financial Highlights",
      downloadReport: "Download Report (PDF)",
      governanceTitle: "Governance & Accountability",
      governanceDesc: "Backed by rigorous financial planning, multi-sector operational strength, and transparent reporting, we safeguard stakeholder trust with unwavering integrity.",
      q2Results: "Consolidated Revenue: Resilient Growth",
      annualGrowth: "Capital Equity: 100% Domestic",
      ebitdaMargin: "Operational Health: Strong Cash Flow",
      reports: [
        {
          year: "2026",
          period: "Q2",
          title: "Q2 2026 Interim Operational & Financial Overview",
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
          title: "Comprehensive Institutional Corporate Deck",
          size: "6.5 MB"
        }
      ]
    },
    sustainability: {
      tag: "ESG & Sustainability",
      title: "Our Pledge to Tomorrow's Generations",
      subtitle: "Integrating environmental stewardship, social upliftment, and ethical leadership into every core business model.",
      card1Title: "Environmental (E)",
      card1Desc: "Implementing eco-friendly construction techniques, energy-efficient operations, and sustainable agricultural practices.",
      card2Title: "Social (S)",
      card2Desc: "Fostering inclusive workplaces, investing in qualified talent development, and supporting regional community programs.",
      card3Title: "Governance (G)",
      card3Desc: "Maintaining transparent governance, ethical operating guidelines, and customer-first compliance policies across all subsidiaries.",
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
          title: "Global Trade Network: International Import-Export & Logistics Operations Expand",
          date: "2026",
          category: "Global Trade & Growth",
          summary: "Expanding our active international trading channels across overseas real estate sales, infrastructure-superstructure contracting, and cross-border transport."
        },
        {
          id: "2",
          title: "Demtaş Real Estate Launches Prestigious Land Development Initiative",
          date: "2026",
          category: "Real Estate Investment",
          summary: "Introducing distinctive living concepts, Demtaş Real Estate completes feasibility studies on strategic land parcels to launch flagship development projects."
        },
        {
          id: "3",
          title: "Medistate Kavacık Hospital Expands Advanced Medical Technologies and Specialized Care",
          date: "2026",
          category: "Healthcare & Life",
          summary: "Combining holistic service standards and ethical medical care, Medistate Kavacık Hospital continues to advance healthcare excellence with expert medical faculty."
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
      title: "المجموعة بالأرقام",
      subtitle: "رأس مال موثوق وقوة تشغيلية متعددة القطاعات",
      items: [
        {
          label: "رأس مال وطني وأصول ذاتية",
          value: "100",
          prefix: "%",
          suffix: " وطني",
          description: "هيكل مالي قوي ومستقل يرتكز على الكفاءة"
        },
        {
          label: "قطاعات استراتيجية",
          value: "6",
          suffix: " قطاعات",
          description: "العقارات، المقاولات، الصحة، الوقود، التقنية، التجارة الدولية"
        },
        {
          label: "شركات تابعة وعلامات تجارية",
          value: "10",
          suffix: " شركات",
          description: "ديمتاش، تكين يابي، ميديستيت، ميمكون، إستون، آذر غيداء..."
        },
        {
          label: "شبكة التجارة الدولية",
          value: "عالمية",
          suffix: " شبكة",
          description: "استيراد وتصدير دولي، خدمات شحن ومقاولات إنشائية متكاملة"
        }
      ]
    },
    philosophy: {
      tag: "فلسفتنا الاستثمارية",
      title: "الهندسة الكونية للكمال: النسبة الذهبية (1.618)",
      subtitle: "رياضيات رشيدة، وانضباط مالي راسخ",
      description: "نستمد اسمنا من قانون التوازن والجمال الأزلي 'النسبة الذهبية'. وفي كل قرار استثماري، نوازن بين المخاطر والعوائد، والفرص الآنية والاستدامة المستقبلية بدقة متناهية.",
      phiTitle: "مبدأ النسبة الذهبية",
      phiBadge: "Φ = 1.618033...",
      phiDesc: "من أصداف البحار البسيطة إلى المجرات الكونية والعمارة الخالدة، تظل النسبة الذهبية بوصلتنا في الحفاظ على رأس المال وتعظيم القيمة الاستثمارية.",
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
      author: "حنفي تكين",
      role: "رئيس مجلس الإدارة",
      quote: "تقديم خدمات وحلول مبتكرة وبديلة لشركائنا، وخلق قيمة مستدامة للمجتمع وللأجيال القادمة.",
      paragraphs: [
        "سعياً لمواكبة المتغيرات الاقتصادية العالمية وبناء شراكات تجارية فعالة، أنشأت مجموعتنا قطاعات تشغيلية راسخة في مجالات التطوير العقاري، الإنشاءات، الرعاية الصحية، محطات الوقود، التوريدات المكتبية والتقنية، والتجارة الدولية.",
        "من التطوير العقاري عالي القيمة مع ديمتاش العقارية إلى خدمات الرعاية الصحية المتكاملة بمستشفى ميديستيت كافاجيك، ومن تشييد الصروح المعمارية الحديثة مع تكين يابي وميمكون وإستون يابي إلى استثمارات الوقود والتقنية والزراعة؛ تظل الثقة والجودة حجر الزاوية في مسيرتنا.",
        "اليوم، بفضل 10 شركات نشطة ورأس مال وطني 100٪ وشبكة تجارة دولية، نواصل بكل ثقة الإسهام في مسيرة التنمية المستدامة."
      ],
      signature: "حنفي تكين • رئيس مجلس الإدارة"
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
          name: "التطوير العقاري والاستثمار في الأراضي",
          badge: "الفخامة والقيمة",
          shortDesc: "تطوير أراضٍ استراتيجية، دراسات جدوى دقيقة، وفرص استثمار عقاري مربحة.",
          fullDesc: "من خلال شركة ديمتاش للاستثمار العقاري، نبتكر أساليب معيشية جديدة في كل مشروع، حيث نقوم بتقييم الأراضي المشتراة وتحديد أفضل شروط الجدوى لتوفير استثمارات عقارية ذات عوائد مجزية.",
          stats: [
            { label: "أبرز المشاريع", value: "+5 مشاريع كبرى" },
            { label: "مجال العمل", value: "تطوير واستثمار الأراضي" }
          ],
          highlights: ["يالي كورت إسطنبول", "لايف تايم سيتي كورت", "مساكن ترانتي", "أبراج غوك كوشاغي", "كورغان هيل"],
          companies: ["ديمتاش للاستثمار العقاري"]
        },
        {
          id: "insaat",
          name: "الإنشاءات، الهندسة المعمارية والمقاولات",
          badge: "نبني المستقبل",
          shortDesc: "مبانٍ عصرية، مشاريع مقاولات للبنية التحتية والفوقية، وتصاميم معمارية متكاملة.",
          fullDesc: "بالتعاون والخبرات المتراكمة بين تكين يابي، ميمكون، وإستون يابي، نقوم بتنفيذ مشاريع سكنية وتجارية ومشاريع بنية تحتية وفوقية حديثة ومتينة داخل وخارج البلاد.",
          stats: [
            { label: "نطاق المقاولات", value: "بنية تحتية وفوقية" },
            { label: "التصميم والتنفيذ", value: "هندسة معمارية متكاملة" }
          ],
          highlights: ["مجمعات سكنية حديثة", "مشاريع البنية التحتية الحضرية", "مخططات معمارية رائدة"],
          companies: ["تكين يابي", "ميمكون للعمارة", "إستون يابي"]
        },
        {
          id: "saglik",
          name: "خدمات الرعاية الصحية",
          badge: "نهتم بصحتكم",
          shortDesc: "جودة شاملة وأخلاقيات مهنية وكوادر طبية متميزة وتقنيات علاجية حديثة.",
          fullDesc: "يقدم مستشفى ميديستيت كافاجيك خدمات رعاية صحية وقائية وعلاجية وتشخيصية متطورة بكوادر طبية خبيرة وأجهزة طبية متقدمة، مساهماً في تطور الطب وصحة المجتمع.",
          stats: [
            { label: "مستوى الخدمة", value: "معايير A+ الفائقة" },
            { label: "المنهج الطبي", value: "طب متكامل ومتعدد التخصصات" }
          ],
          highlights: ["مستشفى ميديستيت كافاجيك", "وحدات التشخيص والجراحة المتقدمة"],
          companies: ["مستشفى ميديستيت كافاجيك"]
        },
        {
          id: "akaryakit",
          name: "توزيع الوقود والطاقة",
          badge: "إمداد طاقة موثوق",
          shortDesc: "إدارة محطات وقود متطورة، وتزويد الأساطيل التجارية بوقود عالي الجودة.",
          fullDesc: "تحت مظلة ديمتاش للمحروقات، نوفر إمدادات وقود آمنة ومستمرة بأعلى المعايير للمركبات والأساطيل التجارية من خلال شبكة محطات حديثة تركز على رضا العملاء.",
          stats: [
            { label: "جاهزية الخدمة", value: "24/7 دون انقطاع" },
            { label: "نطاق الخدمة", value: "محطات تجزئة وأساطيل شركات" }
          ],
          highlights: ["شبكة محطات ديمتاش", "حلول وقود أساطيل الشركات"],
          companies: ["ديمتاش للمحروقات"]
        },
        {
          id: "ofis-kirtasiye",
          name: "المستلزمات المكتبية وتكنولوجيا المعلومات",
          badge: "نواكب التطور التقني",
          shortDesc: "توريدات مكتبية وقرطاسية شاملة، بنية تحتية رقمية، وأنظمة برمجية للمؤسسات.",
          fullDesc: "تلبي ديمتاش إفرنسل كافة احتياجات الشركات من القرطاسية والمستلزمات المكتبية، بينما تقدم ديمتاش للمعلوماتية حلولاً تقنية وبنى تحتية رقمية وتكاملاً برمجياً متطوراً.",
          stats: [
            { label: "مجموعة التوريدات", value: "كتالوج متكامل" },
            { label: "التكنولوجيا", value: "بنى تحتية للمؤسسات" }
          ],
          highlights: ["شبكة التوريد للشركات", "أنظمة تكنولوجيا المعلومات"],
          companies: ["ديمتاش للمعلوماتية", "ديمتاش إفرنسل"]
        },
        {
          id: "dis-ticaret",
          name: "التجارة الدولية، اللوجستيات والزراعة والأغذية",
          badge: "شبكة تجارية عالمية",
          shortDesc: "استيراد وتصدير، شحن دولي، توزيع منتجات غذائية معتمدة وزراعة حديثة مستدامة.",
          fullDesc: "استجابة لحركة التجارة العالمية، ندير عمليات التصدير والاستيراد والشحن الدولي والمبيعات العقارية الخارجية، مع تنسيق توزيع الأغذية عبر آذر غيداء والزراعة الحديثة عبر آذر تريم.",
          stats: [
            { label: "نطاق التجارة", value: "تجارة وشحن دولي" },
            { label: "الإنتاج", value: "صناعات غذائية وزراعة حديثة" }
          ],
          highlights: ["ممرات التجارة الدولية", "سلسلة توريد آذر غيداء", "مزارع آذر تريم الحديثة"],
          companies: ["آذر غيداء", "آذر تريم", "التجارة الدولية واللوجستيات"]
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
      q2Results: "الإيرادات المجمعة: نمو تشغيلي متوازن",
      annualGrowth: "نمو إجمالي الأصول: رأس مال ذاتي 100٪",
      ebitdaMargin: "هامش الأرباح التشغيلية: تدفق نقدي قوي",
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
      card1Desc: "نطبق معايير البناء المستدام وترشيد استهلاك الطاقة والممارسات الزراعية الصديقة للبيئة.",
      card2Title: "المجتمع (S)",
      card2Desc: "نوفر بيئات عمل آمنة ومحفزة، ونستثمر في الكفاءات البشرية الشابة ومبادرات خدمة المجتمع.",
      card3Title: "الحوكمة (G)",
      card3Desc: "حوكمة متكاملة تعتمد على الشفافية التامة والرقابة الإدارية المستمرة لحماية حقوق كافة الشركاء.",
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
          title: "شبكة التجارة العالمية: توسع عمليات الاستيراد والتصدير والنقل الدولي",
          date: "2026",
          category: "التجارة والنمو الدولي",
          summary: "إضافة قنوات تجارية جديدة تشمل المبيعات العقارية الخارجية، مقاولات البنية التحتية، وعمليات الشحن الدولي متعدد الوسائط."
        },
        {
          id: "2",
          title: "ديمتاش العقارية تطلق مبادرة تطوير أراضٍ ومشاريع نوعية رائدة",
          date: "2026",
          category: "الاستثمار العقاري",
          summary: "استكمال دراسات الجدوى لقطع أراضٍ استراتيجية لإطلاق مجمعات معمارية راقية توفر مفاهيم معيشية جديدة ومتميزة."
        },
        {
          id: "3",
          title: "مستشفى ميديستيت كافاجيك يواصل تقديم خدمات طبية فائقة التقنية وكوادر متخصصة",
          date: "2026",
          category: "الرعاية الصحية",
          summary: "بأعلى معايير الجودة والأخلاقيات الطبية، يواصل مستشفى ميديستيت كافاجيك تقديم خدمات وقائية وعلاجية متميزة تسهم في تطور الرعاية الصحية."
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
