import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SustainabilityContent from '@/components/SustainabilityContent';

export const metadata: Metadata = {
  title: 'Sürdürülebilirlik & ESG | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding 2030 Net Sıfır Karbon hedefi, ESG politikaları, Altınoran Eğitim Vakfı ve döngüsel ekonomi taahhütleri.',
  keywords: [
    'Altınoran Sürdürülebilirlik',
    'ESG Raporu',
    'Net Sıfır Karbon 2030',
    'Altınoran Eğitim Vakfı',
    'Yeşil Enerji Dönüşümü',
    'Kurumsal Sosyal Sorumluluk',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/sustainability/',
  },
  openGraph: {
    title: 'Sürdürülebilirlik & ESG | Altınoran Yatırım Holding',
    description: 'Yarınlara temiz bir dünya ve kalıcı sosyal miras bırakıyoruz.',
    url: 'https://altinoranyatirimholding.com.tr/sustainability/',
    images: [{ url: '/images/energy.jpg' }],
  },
};

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="ESG & Gelecek"
          title="Gelecek Nesillere Karşı Sorumlu, Sürdürülebilir Bir Dünya"
          description="Çevresel duyarlılık, toplumsal fayda ve şeffaf kurumsal yönetişimi tüm yatırımlarımızın merkezine yerleştiriyoruz."
          currentPage="Sürdürülebilirlik"
        />
        <SustainabilityContent />
      </main>
      <Footer />
    </>
  );
}
