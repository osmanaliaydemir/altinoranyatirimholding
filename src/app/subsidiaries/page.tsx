import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import SubsidiariesContent from '@/components/SubsidiariesContent';

export const metadata: Metadata = {
  title: 'İştiraklerimiz & Grup Şirketleri | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding bünyesinde faaliyet gösteren 18 grup şirketi ve operasyonel iştiraklerin kurumsal profilleri.',
  keywords: [
    'Altınoran İştirakler',
    'Grup Şirketleri',
    'Altınoran Portföy',
    'Altınoran Enerji',
    'Altınoran GYO',
    'Oran Robotics',
    'Altınoran Global Lojistik',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/subsidiaries/',
  },
  openGraph: {
    title: 'İştiraklerimiz | Altınoran Yatırım Holding',
    description: '18 öncü grup şirketiyle ekonomiye kesintisiz değer katan ekosistem.',
    url: 'https://altinoranyatirimholding.com.tr/subsidiaries/',
    images: [{ url: '/images/boardroom.jpg' }],
  },
};

export default function SubsidiariesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          pageKey="subsidiaries"
          tag="Ekosistemimiz"
          title="18 Grup Şirketi ve Güçlü İştirak Portföyü"
          description="Her biri kendi pazarında liderlik hedefleyen, kurumsal yönetim standartlarımızla güçlendirilen iştirak yapımız."
          currentPage="İştirakler"
        />
        <SubsidiariesContent />
      </main>
      <Footer />
    </>
  );
}
