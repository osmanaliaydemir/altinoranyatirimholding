export interface Sector {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  stats: { label: string; value: string }[];
  highlightProjects: string[];
  companies: string[];
  badge: string;
  accentColor: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: string;
}

export interface Metric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface BoardMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  imageAlt: string;
}

export interface ReportItem {
  year: string;
  title: string;
  type: string;
  fileSize: string;
  period: string;
}

export const HOLDING_DATA = {
  name: "Altınoran Yatırım Holding",
  legalName: "Altınoran Yatırım Holding Anonim Şirketi",
  domain: "altinoranyatirimholding.com.tr",
  tagline: "Geleceği Altın Oran Mükemmelliğiyle Şekillendiriyoruz",
  subtagline: "Finansal disiplin, sürdürülebilir büyüme ve reel sektör vizyonuyla yarınların değerini inşa ediyoruz.",
  foundedYear: "2011",
  headquarters: "Altınoran Kuleleri, Maslak Mah. Büyükdere Cad. No: 284, Sarıyer / İstanbul",
  phone: "+90 (212) 345 67 00",
  email: "info@altinoranyatirimholding.com.tr",
  irEmail: "ir@altinoranyatirimholding.com.tr",
  pressEmail: "basin@altinoranyatirimholding.com.tr",
  workingHours: "Pazartesi - Cuma: 08:30 - 18:00",

  metrics: [
    {
      label: "Yerli Sermaye & Özkaynak",
      value: "100",
      prefix: "%",
      suffix: " Yerli",
      description: "Güçlü, bağımsız ve güvenilir sermaye yapısı"
    },
    {
      label: "Stratejik Faaliyet Sektörü",
      value: "6",
      suffix: " Sektör",
      description: "Gayrimenkul, inşaat, sağlık, akaryakıt, ofis-bilişim ve dış ticaret"
    },
    {
      label: "Grup Şirketi & Marka",
      value: "10",
      suffix: " Şirket",
      description: "Demtaş, Tekin Yapı, Medistate, Mimkon, Eston, AzerGıda..."
    },
    {
      label: "Uluslararası Ticaret Ağı",
      value: "Global",
      suffix: " Ağ",
      description: "Yurtdışı ithalat-ihracat, nakliyat ve inşaat taahhütleri"
    }
  ] as Metric[],

  philosophy: {
    title: "Altın Oran (Phi 1.618) Yatırım Felsefemiz",
    subtitle: "Doğanın Kusursuz Geometrisi, Yatırımın Sarsılmaz Disiplini",
    description: "Altınoran Yatırım Holding olarak adımızı evrenin en kusursuz estetik ve denge kuralı olan 'Altın Oran'dan (1.618) alıyoruz. Sermaye tahsisinde risk-getiri dengesini, finansal mühendislikte rasyonel matematiği ve reel sektör operasyonlarında sürdürülebilir insan odaklılığı kusursuz bir uyumla harmanlıyoruz.",
    pillars: [
      {
        title: "Dengeli Risk & Getiri Mimari",
        desc: "Yatırımlarımızı konjonktürel dalgalanmalardan koruyan, kendi kendini dengeleyen çok katmanlı portföy stratejisi."
      },
      {
        title: "Sürdürülebilir Sermaye Verimliliği",
        desc: "Kısa vadeli spekülasyon yerine, uzun vadeli katma değer ve nakit akışı yaratan üretim ve teknoloji odaklılık."
      },
      {
        title: "Kusursuz Kurumsal Yönetişim",
        desc: "Şeffaflık, hesap verebilirlik ve uluslararası denetim standartlarında ödünsüz kurumsal etik."
      },
      {
        title: "Gelecek Odaklı Yeşil Dönüşüm",
        desc: "Tüm iştiraklerimizde karbon ayak izini sıfırlayan, döngüsel ekonomi ve ESG prensipleri."
      }
    ]
  },

  chairmanMessage: {
    author: "Hanifi Tekin",
    role: "Yönetim Kurulu Başkanı",
    title: "Geleceğe Güvenle Bakan, Değer Üreten Çok Sektörlü Bir Güç",
    quote: "Sektöründe yenilikçi ve alternatif hizmetler sunarak, gelişen ve değişen küresel dünyada ülkemize ve paydaşlarımıza kesintisiz değer üretmekten onur duyuyoruz.",
    text: [
      "Sektöründe müşterilerine sürekli yenilikçi ve alternatif hizmetler sunan grubumuz; gelişen ve değişen global yapıya ayak uydurmak ve daha etkin bir ticaret yapmak adına gayrimenkul, inşaat, sağlık, akaryakıt, ofis-bilişim ve dış ticaret alanlarında güçlü hizmet alanları oluşturmuş ve başarıyla faaliyete geçirmiştir.",
      "Demtaş Gayrimenkul ile yüksek prestijli arazi geliştirme faaliyetlerinden Medistate Kavacık Hastanesi ile ileri sağlık hizmetlerine; Tekin Yapı, Mimkon ve Eston Yapı A.Ş. ile modern yapılar inşa etmekten akaryakıt, bilişim ve tarım yatırımlarına kadar her alanda güvenilirliği temel aldık.",
      "Bugün 10 dinamik grup şirketimiz, %100 yerli sermayemiz ve uluslararası ticaret ağımızla ülkemizin kalkınma yolculuğuna kararlılıkla katkı sağlıyoruz.",
      "Tüm paydaşlarımızla birlikte geleceği bugünden inşa etmeye kararlılıkla devam edeceğiz."
    ]
  },

  sectors: [
    {
      id: "gayrimenkul",
      name: "Gayrimenkul & Arazi Geliştirme",
      badge: "Prestij & Değer",
      accentColor: "#D4AF37",
      icon: "building",
      shortDesc: "Yüksek prestijli arazi geliştirme faaliyetleri, arsa değerlendirme, fizibilite ve karlı gayrimenkul yatırımları.",
      fullDesc: "Demtaş Gayrimenkul Yatırım bünyesinde geliştirdiğimiz her projede büyük bir fark yaratıyor ve yeni bir yaşam tarzı sunuyoruz. Satın alınan arsaları profesyonel ekiplerimizle değerlendiriyor, en uygun fizibilite şartlarını belirleyerek müşterilerimize kazançlı ve prestijli gayrimenkul fırsatları sunuyoruz.",
      stats: [
        { label: "Öne Çıkan Projeler", value: "5+ Prestij Proje" },
        { label: "Faaliyet Alanı", value: "Arazi Geliştirme & Yatırım" }
      ],
      highlightProjects: ["YalıCourt İstanbul", "LifeTime Cty Court", "Trante Evleri", "GökKuşağı Blokları", "Korgan Hill Blokları"],
      companies: ["Demtaş Gayrimenkul Yatırım"]
    },
    {
      id: "insaat",
      name: "İnşaat, Mimarlık & Taahhüt",
      badge: "Geleceği İnşa Ediyoruz",
      accentColor: "#3B82F6",
      icon: "building",
      shortDesc: "Modern yapılar, altyapı ve üstyapı taahhüt projeleri, mimari tasarım ve mühendislik çözümleri.",
      fullDesc: "Tekin Yapı, Mimkon ve Eston Yapı A.Ş. ortak tecrübesiyle; konut, ticari ve kurumsal projelerin yanı sıra yurtiçi ve yurtdışı altyapı-üstyapı inşaat alanlarında da çağdaş, estetik ve sağlam yapılar hayata geçiriyoruz.",
      stats: [
        { label: "Uzmanlık Alanı", value: "Altyapı & Üstyapı" },
        { label: "Tasarım & Mimarlık", value: "Entegre Mühendislik" }
      ],
      highlightProjects: ["Modern Konut Yerleşkeleri", "Kentsel Üstyapı Projeleri", "Konsept Mimari Tasarımlar"],
      companies: ["Tekin Yapı", "Mimkon Mimarlık", "Eston Yapı A.Ş."]
    },
    {
      id: "saglik",
      name: "Sağlık Hizmetleri",
      badge: "Sağlığınızı Önemsiyoruz",
      accentColor: "#EC4899",
      icon: "activity",
      shortDesc: "Bütüncül kalite anlayışı, etik ilkeler ve uzman kadro ile ileri teknoloji sağlık hizmetleri.",
      fullDesc: "Medistate Kavacık Hastanesi ile etik ilkelerden ödün vermeden, alanlarında uzman hekimleri ve sağlık çalışanları ile güncel, koruyucu ve iyileştirici sağlık hizmeti sunarak tıbbın gelişimine ve toplum sağlığına katkıda bulunuyoruz.",
      stats: [
        { label: "Hizmet Standartı", value: "A+ Kalite" },
        { label: "Klinik Yaklaşım", value: "Multidisipliner Tıp" }
      ],
      highlightProjects: ["Medistate Kavacık Hastanesi", "İleri Tanı ve Tedavi Üniteleri"],
      companies: ["Medistate Kavacık Hastanesi"]
    },
    {
      id: "akaryakit",
      name: "Akaryakıt & Enerji Dağıtımı",
      badge: "Güvenli Enerji İkmali",
      accentColor: "#F59E0B",
      icon: "zap",
      shortDesc: "Güvenilir akaryakıt istasyon işletmeciliği, kaliteli yakıt ikmali ve kurumsal filo çözümleri.",
      fullDesc: "Demtaş Akaryakıt çatısı altında, müşteri memnuniyeti ve emniyet odaklı istasyon operasyonları ile araç sahiplerine ve kurumsal filolara kesintisiz, güvenli ve yüksek standartlı akaryakıt tedariği sağlıyoruz.",
      stats: [
        { label: "Hizmet Standardı", value: "7/24 Kesintisiz" },
        { label: "Hizmet Alanı", value: "İstasyon & Kurumsal Filo" }
      ],
      highlightProjects: ["Demtaş İstasyon Ağı", "Kurumsal Filo Yakıt İkmali"],
      companies: ["Demtaş Akaryakıt"]
    },
    {
      id: "ofis-kirtasiye",
      name: "Ofis-Kırtasiye & Bilişim Teknolojileri",
      badge: "Teknolojiyi Takip Ediyoruz",
      accentColor: "#8B5CF6",
      icon: "cpu",
      shortDesc: "Kurumsal ofis-kırtasiye tedariği, toptan dağıtım, güçlü bilişim altyapıları ve yazılım sistemleri.",
      fullDesc: "Demtaş Evrensel ile kurumsal firmaların tüm ofis, kırtasiye ve sarf malzemesi tedarik zincirini karşılarken; Demtaş Bilişim ile kurumsal teknoloji altyapıları, bilgi sistemleri ve modern yazılım çözümleri sunuyoruz.",
      stats: [
        { label: "Tedarik Gamı", value: "Geniş Ürün Yelpazesi" },
        { label: "Teknoloji", value: "Kurumsal Bilişim Altyapısı" }
      ],
      highlightProjects: ["Kurumsal Tedarik Ağı", "Bilişim Sistemleri Entegrasyonu"],
      companies: ["Demtaş Bilişim", "Demtaş Evrensel"]
    },
    {
      id: "dis-ticaret",
      name: "Dış Ticaret, Lojistik, Gıda & Tarım",
      badge: "Küresel Ticaret Ağı",
      accentColor: "#10B981",
      icon: "globe",
      shortDesc: "Yurtdışı ithalat-ihracat, uluslararası nakliyat, kaliteli gıda dağıtımı ve sürdürülebilir tarımsal üretim.",
      fullDesc: "Gelişen ve değişen global yapıya ayak uydurmak ve daha etkin bir ticaret yapmak adına yurtdışında ithalat-ihracat, nakliyat ve gayrimenkul satışı alanlarında faaliyet gösteriyor; AzerGıda ile kaliteli gıda tedariğini ve AzerTarım ile verimli zirai üretimi yürütüyoruz.",
      stats: [
        { label: "Ticaret Kapsamı", value: "Uluslararası Ticaret & Nakliyat" },
        { label: "Üretim", value: "Gıda & Modern Tarım" }
      ],
      highlightProjects: ["Uluslararası İthalat-İhracat Koridoru", "AzerGıda Tedarik Zinciri", "AzerTarım Zirai Tesisleri"],
      companies: ["AzerGıda", "AzerTarım", "Dış Ticaret & Nakliyat"]
    }
  ] as Sector[],

  boardMembers: [
    {
      name: "Hanifi Tekin",
      role: "Yönetim Kurulu Başkanı",
      title: "Yönetim Kurulu Başkanı",
      bio: "İnşaat, gayrimenkul, sağlık, akaryakıt ve uluslararası ticaret alanlarında köklü sanayi ve reel sektör tecrübesiyle grubun vizyoner liderliğini üstlenmekte; stratejik yatırımlara ve kurumsal büyüme politikalarına yön vermektedir.",
      imageAlt: "Hanifi Tekin Yönetim Kurulu Başkanı"
    }
  ] as BoardMember[],

  news: [
    {
      id: "haber-1",
      title: "Küresel Ticaret Ağı: Uluslararası İthalat-İhracat ve Nakliyat Faaliyetlerimiz Genişliyor",
      date: "2026",
      category: "Dış Ticaret & Büyüme",
      summary: "Gelişen global yapıya ayak uydurarak yurtdışı gayrimenkul satışı, altyapı-üstyapı inşaat ve nakliyat alanlarındaki etkin ticari faaliyetlerimize yeni küresel koridorlar ekliyoruz.",
      readTime: "3 dk"
    },
    {
      id: "haber-2",
      title: "Demtaş Gayrimenkul'den Yeni Arazi Geliştirme ve Prestijli Proje Hamlesi",
      date: "2026",
      category: "Gayrimenkul Yatırım",
      summary: "Geliştirdiği her projede yeni bir yaşam tarzı sunan Demtaş Gayrimenkul, satın aldığı stratejik arsalarda fizibilite çalışmalarını tamamlayarak prestijli projelerin hazırlıklarına başladı.",
      readTime: "4 dk"
    },
    {
      id: "haber-3",
      title: "Medistate Kavacık Hastanesi İleri Tıbbi Teknoloji ve Uzman Kadrosuyla Hizmette",
      date: "2026",
      category: "Sağlık & Yaşam",
      summary: "Bütüncül kalite anlayışı ve etik ilkelerle donatılan Medistate Kavacık Hastanesi, koruyucu ve iyileştirici ileri sağlık hizmetleriyle tıbbın gelişimine katkı sağlamaya devam ediyor.",
      readTime: "3 dk"
    }
  ] as NewsItem[],

  reports: [
    {
      year: "2026",
      period: "2. Çeyrek",
      title: "2026 Yarıyıl Konsolide Faaliyet ve Finansal Raporu",
      type: "PDF",
      fileSize: "4.8 MB"
    },
    {
      year: "2025",
      period: "Yıllık",
      title: "2025 Yıllık Entegre Faaliyet ve ESG Sürdürülebilirlik Raporu",
      type: "PDF",
      fileSize: "12.4 MB"
    },
    {
      year: "2025",
      period: "Kurumsal",
      title: "Kurumsal Yönetim İlkelerine Uyum Raporu",
      type: "PDF",
      fileSize: "2.1 MB"
    },
    {
      year: "2025",
      period: "Yatırımcı",
      title: "Yatırımcı Sunumu ve Gelecek Projeksiyonları",
      type: "PDF",
      fileSize: "6.5 MB"
    }
  ] as ReportItem[]
};
