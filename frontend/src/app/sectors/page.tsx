import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SectorsContent from '@/components/SectorsContent';

export const metadata: Metadata = {
  title: 'Faaliyet Alanlarımız & Sektörler | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding; gayrimenkul, yenilenebilir enerji, finans & girişim sermayesi, ileri teknoloji, sağlık ve lojistikte öncü yatırımlara imza atmaktadır.',
  keywords: [
    'Altınoran Sektörler',
    'Yenilenebilir Enerji Yatırımları',
    'Gayrimenkul Geliştirme',
    'Girişim Sermayesi Fonları',
    'İleri Teknoloji Sanayi',
    'Sağlık Biyoteknoloji',
    'Küresel Lojistik',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/sectors/',
  },
  openGraph: {
    title: 'Faaliyet Alanlarımız | Altınoran Yatırım Holding',
    description: '6 stratejik sektörde yüksek çarpanlı ve sürdürülebilir yatırımlar.',
    url: 'https://altinoranyatirimholding.com.tr/sectors/',
    images: [{ url: '/images/headquarters.jpg' }],
  },
};

export default function SectorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          pageKey="sectors"
          tag="Stratejik Portföy"
          title="Geleceğin Dinamiklerine Yön Veren 6 Temel Sektör"
          description="Altın oran dengesiyle yönettiğimiz stratejik iş kollarımızda yüksek katma değer, sürdürülebilir nakit akışı ve küresel rekabet avantajı inşa ediyoruz."
          currentPage="Sektörler"
        />
        <SectorsContent />
      </main>
      <Footer />
    </>
  );
}
