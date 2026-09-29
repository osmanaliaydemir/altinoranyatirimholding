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
      label: "Konsolide Varlık Büyüklüğü",
      value: "18.4",
      prefix: "₺",
      suffix: " Milyar",
      description: "Yıllık %38 bileşik büyüme performansı"
    },
    {
      label: "Stratejik Faaliyet Sektörü",
      value: "6",
      suffix: " Sektör",
      description: "Dengeli ve yüksek çarpanlı sektör dağılımı"
    },
    {
      label: "Grup Şirketi & İştirak",
      value: "18",
      suffix: " Şirket",
      description: "Lider pazar payına sahip operasyonel yapılar"
    },
    {
      label: "Nitelikli İstihdam",
      value: "4.200",
      prefix: "+",
      suffix: " Uzman",
      description: "İnovasyon ve mühendislik odaklı insan kaynağı"
    },
    {
      label: "Temiz Enerji Kurulu Gücü",
      value: "450",
      suffix: " MW",
      description: "Yıllık 1.2 milyon ton karbon salınımı engeli"
    },
    {
      label: "Uluslararası Pazarlar",
      value: "16",
      suffix: " Ülke",
      description: "Avrupa, Körfez ve Orta Asya ihracat ağı"
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
    author: "Osman Aydemir",
    role: "Yönetim Kurulu Başkanı",
    title: "Geleceğe Güvenle Bakan, Değer Üreten Bir Yatırım Mimarisi",
    quote: "Yatırım, yalnızca rakamlardan ibaret değildir. Bizim için yatırım; insan hayatına dokunan, topluma değer katan, doğaya saygılı ve asırlar boyu kalıcı miras bırakan bir denge sanatıdır.",
    text: [
      "Küresel piyasaların ve teknolojinin baş döndürücü bir hızla değiştiği çağımızda, Altınoran Yatırım Holding olarak pusulamızı değişmeyen evrensel prensiplere çevirdik: Liyakat, şeffaflık, disiplin ve kusursuz denge.",
      "Gayrimenkulden yenilenebilir enerjiye, yüksek teknolojiden finansal hizmetlere kadar odaklandığımız her alanda Türkiye'nin büyüme vizyonuna güç veriyor; uluslararası pazarlarda ülkemizi gururla temsil ediyoruz.",
      "Bugün 4.200'ü aşkın çalışanımız, 18 iştirakimiz ve 18.4 milyar TL'ye ulaşan varlık büyüklüğümüzle elde ettiğimiz başarı, tüm paydaşlarımızın bize duyduğu güvenin en somut kanıtıdır.",
      "Altınoran ailesi olarak, yarınları bugünden inşa etmeye kararlılıkla devam edeceğiz."
    ]
  },

  sectors: [
    {
      id: "gayrimenkul",
      name: "Gayrimenkul & Proje Geliştirme",
      badge: "Prestij & Değer",
      accentColor: "#D4AF37",
      icon: "building",
      shortDesc: "Geleceğin ikonik yaşam ve iş alanlarını altın oran estetiğiyle tasarlıyor, şehirlerin silüetine kalıcı değerler kazandırıyoruz.",
      fullDesc: "Altınoran Yapı & GYO, A+ karma kullanım projeleri, akıllı ticari kuleler, lüks konut yerleşkeleri ve modern lojistik parklarının geliştirilmesinde öncüdür. BREEAM ve LEED Platinum sertifikalı yapılarımızla sürdürülebilir mimarinin standartlarını belirliyoruz.",
      stats: [
        { label: "Tamamlanan Proje Alanı", value: "1.4M m²" },
        { label: "Geliştirme Aşamasındaki Projeler", value: "6 Proje" },
        { label: "Portföy Değeri", value: "₺7.2 Milyar" }
      ],
      highlightProjects: ["Altınoran Tower Maslak", "Golden Marina Residences Bodrum", "Altınoran Lojistik Üssü Kocaeli"],
      companies: ["Altınoran GYO A.Ş.", "Altınoran İnşaat & Mimarlık", "Altınoran Tesis Yönetimi"]
    },
    {
      id: "enerji",
      name: "Yenilenebilir Enerji & Yeşil Dönüşüm",
      badge: "Sıfır Karbon",
      accentColor: "#10B981",
      icon: "zap",
      shortDesc: "Doğanın sonsuz enerjisini ileri teknolojiyle elektriğe dönüştürüyor, Türkiye'nin yeşil enerji bağımsızlığına liderlik ediyoruz.",
      fullDesc: "Altınoran Enerji Grubu, güneş enerjisi (GES), rüzgar enerjisi (RES) ve yeni nesil hidrojen & batarya depolama alanlarında devasa yatırımlar gerçekleştirmektedir. 450 MW'ı aşan kurulu gücümüz ile yılda yüz binlerce hanenin temiz enerji ihtiyacını karşılıyoruz.",
      stats: [
        { label: "Toplam Kurulu Güç", value: "450 MW" },
        { label: "Yıllık Üretim Kapasitesi", value: "850 GWh" },
        { label: "Önlenen Karbon Salınımı", value: "1.2M Ton/Yıl" }
      ],
      highlightProjects: ["Konya Karapınar 150 MW GES", "Balıkesir Rüzgar Enerji Santrali 120 MW", "Marmara Batarya Depolama Tesisi"],
      companies: ["Altınoran Enerji Üretim A.Ş.", "Solaris Yeşil Enerji", "Altınoran Güç Sistemleri"]
    },
    {
      id: "finans",
      name: "Finansal Hizmetler & Girişim Sermayesi",
      badge: "Stratejik Sermaye",
      accentColor: "#3B82F6",
      icon: "trending-up",
      shortDesc: "Yenilikçi sermaye modelleri, varlık yönetimi ve girişim sermayesi fonlarıyla geleceğin küresel başarı hikayelerine yatırım yapıyoruz.",
      fullDesc: "Altınoran Portföy ve Girişim Sermayesi Yatırım Ortaklığı (GSYO), yüksek büyüme potansiyeline sahip teknoloji şirketlerine, fintech girişimlerine ve stratejik sanayi varlıklarına sermaye ortaklığı sağlamaktadır.",
      stats: [
        { label: "Yönetilen Varlık (AUM)", value: "₺5.1 Milyar" },
        { label: "Fon Yatırımı Yapılan Şirket", value: "24 Şirket" },
        { label: "Ortalama Yıllık Getiri (IRR)", value: "%44.2" }
      ],
      highlightProjects: ["Altınoran Teknoloji Girişim Fonu", "Büyüme Sermayesi Fonu I & II", "Gayrimenkul Yatırım Fonları"],
      companies: ["Altınoran Portföy Yönetimi A.Ş.", "Altınoran Girişim Sermayesi GSYO", "Altınoran Kurumsal Finansman"]
    },
    {
      id: "teknoloji",
      name: "İleri Teknoloji & Endüstriyel İnovasyon",
      badge: "Geleceğin Üretimi",
      accentColor: "#8B5CF6",
      icon: "cpu",
      shortDesc: "Endüstri 4.0, otonom robotik sistemler ve kritik yazılım teknolojileriyle küresel rekabette yerli katma değer üretiyoruz.",
      fullDesc: "Teknoloji iştiraklerimiz; akıllı fabrikalar, savunma ve havacılık sektörü için hassas mühendislik parçaları, kurumsal yapay zeka entegrasyonları ve IoT donanımları geliştirmektedir.",
      stats: [
        { label: "Ar-Ge Mühendisi", value: "180+ Kişi" },
        { label: "Tescilli Patent & Faydalı Model", value: "37 Adet" },
        { label: "Yıllık Ar-Ge Bütçesi", value: "₺280 Milyon" }
      ],
      highlightProjects: ["Endüstriyel Robotik Hücre Platformu", "Akıllı Şebeke IoT Yazılımı", "Havacılık Titanyum İşleme Tesisi"],
      companies: ["Altınoran İleri Teknoloji A.Ş.", "Oran Robotics Sistemleri", "Aura Yazılım & Bilişim"]
    },
    {
      id: "saglik",
      name: "Sağlık & Yaşam Bilimleri",
      badge: "Yaşama Değer",
      accentColor: "#EC4899",
      icon: "activity",
      shortDesc: "Biyoteknoloji, medikal cihaz üretimi ve modern sağlık kompleksleri ile insan odaklı sürdürülebilir sağlık çözümleri sunuyoruz.",
      fullDesc: "Biyoteknolojik ilaç araştırmaları, yerli tanı kitleri ve uluslararası standartlarda medikal cihaz üretimi ile toplum sağlığını koruyan uzun soluklu yatırımlara imza atıyoruz.",
      stats: [
        { label: "Medikal İhracat Ülkesi", value: "22 Ülke" },
        { label: "Klinik Ar-Ge Merkezi", value: "2 Merkez" },
        { label: "Yıllık Üretilen Medikal Ürün", value: "12M Adet" }
      ],
      highlightProjects: ["Biyomedikal İnovasyon Laboratuvarı", "Entegre Tanı Teknolojileri Üssü"],
      companies: ["Altınoran Sağlık & Biyoteknoloji", "OranMed Medikal Sistemler"]
    },
    {
      id: "lojistik",
      name: "Uluslararası Ticaret & Lojistik",
      badge: "Küresel Ağ",
      accentColor: "#F59E0B",
      icon: "globe",
      shortDesc: "Kıtaları birbirine bağlayan stratejik koridorlarda lojistik üsleri ve intermodal taşımacılıkla tedarik zincirini güvenceye alıyoruz.",
      fullDesc: "Modern antrepolar, soğuk zincir lojistik filoları ve deniz/hava kargo entegrasyonu ile küresel ticaretin can damarı olan tedarik operasyonlarını kusursuz bir güvenilirlikle yönetiyoruz.",
      stats: [
        { label: "Depolama Kapasitesi", value: "220.000 m²" },
        { label: "Yıllık Sevkiyat Hacmi", value: "1.8M Ton" },
        { label: "Global Lojistik Noktası", value: "14 Merkez" }
      ],
      highlightProjects: ["Marmara İntermodal Lojistik Üssü", "Mersin Liman Antrepo Kompleksi"],
      companies: ["Altınoran Global Lojistik A.Ş.", "Oran Ekspres Taşımacılık"]
    }
  ] as Sector[],

  boardMembers: [
    {
      name: "Osman Aydemir",
      role: "Yönetim Kurulu Başkanı",
      title: "Kurucu & Baş Yatırım Stratejisti",
      bio: "25 yılı aşkın küresel yatırım, gayrimenkul ve reel sektör tecrübesiyle Altınoran Yatırım Holding'in vizyoner liderliğini üstlenmektedir. Çok sayıda stratejik birleşme ve satın alma projesine yön vermiştir.",
      imageAlt: "Osman Aydemir Yönetim Kurulu Başkanı"
    },
    {
      name: "Dr. Elif Karahan",
      role: "Yönetim Kurulu Başkan Vekili",
      title: "Finansal Strateji & Kurumsal Yönetişim",
      bio: "Londra ve New York merkezli uluslararası yatırım bankalarında yöneticilik yapmış olup, holdingin sermaye piyasaları ve fon yönetimi politikalarına liderlik etmektedir.",
      imageAlt: "Dr. Elif Karahan"
    },
    {
      name: "Mehmet Sinan Çetin",
      role: "İcra Kurulu Başkanı (CEO)",
      title: "Operasyonel Mükemmellik & İştirak Yönetimi",
      bio: "Enerji, sanayi ve teknoloji sektörlerinde 20 yıllık üst düzey icra kurulu deneyimine sahip olup, holding bünyesindeki 18 şirketin entegre büyümesini koordine etmektedir.",
      imageAlt: "Mehmet Sinan Çetin CEO"
    },
    {
      name: "Prof. Dr. Ayşe Demir",
      role: "Bağımsız Yönetim Kurulu Üyesi",
      title: "ESG & Sürdürülebilirlik Komitesi Başkanı",
      bio: "Sürdürülebilir kalkınma ve döngüsel ekonomi alanında uluslararası akademik çalışmalarıyla tanınan Demir, holdingin yeşil dönüşüm ve etik politikalarını denetlemektedir.",
      imageAlt: "Prof. Dr. Ayşe Demir"
    }
  ] as BoardMember[],

  news: [
    {
      id: "haber-1",
      title: "Altınoran Enerji'den 150 MW'lık Yeni Hibrit Güneş ve Depolama Yatırımı",
      date: "14 Eylül 2026",
      category: "Yatırımlar & Enerji",
      summary: "İç Anadolu bölgesinde hayata geçirilecek olan 150 MW kapasiteli hibrit GES ve batarya depolama tesisi için 110 milyon dolarlık yatırım anlaşması imzalandı.",
      readTime: "3 dk"
    },
    {
      id: "haber-2",
      title: "Altınoran Portföy, 2026 İlk Yarı Finansal Sonuçlarını Açıkladı: Net Karda %42 Artış",
      date: "28 Ağustos 2026",
      category: "Finansal Sonuçlar",
      summary: "Konsolide aktif büyüklüğü 18.4 milyar TL'ye ulaşan grubumuz, güçlü nakit akışı ve dengeli portföy dağılımı ile hedeflerini aşmaya devam ediyor.",
      readTime: "4 dk"
    },
    {
      id: "haber-3",
      title: "LEED Platinum Sertifikalı 'Altınoran Tower Maslak' Projesinde Yaşam Başlıyor",
      date: "15 Temmuz 2026",
      category: "Gayrimenkul",
      summary: "İstanbul finans merkezinin kalbinde yükselen, altın oran mimarisinin zarafetini taşıyan çevre dostu akıllı kule projemiz kapılarını açtı.",
      readTime: "2 dk"
    },
    {
      id: "haber-4",
      title: "Altınoran Eğitim Vakfı ile 1.500 Genç Mühendise Tam Başarı Bursu",
      date: "02 Haziran 2026",
      category: "Sosyal Sorumluluk",
      summary: "Teknoloji ve mühendislik alanında eğitim gören başarılı üniversite öğrencilerine yönelik kapsamlı mentorluk ve burs programımızın 2026 başvuruları tamamlandı.",
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
