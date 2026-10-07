import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ChairmanSection from '@/components/ChairmanSection';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'Kurumsal | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding kurumsal kimliği, yönetim kurulu, tarihçesi ve kurumsal yönetişim standartları.',
  keywords: [
    'Altınoran Holding Kurumsal',
    'Yönetim Kurulu',
    'Hanifi Tekin',
    'Holding Tarihçesi',
    'Kurumsal Yönetişim',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/about/',
  },
  openGraph: {
    title: 'Kurumsal | Altınoran Yatırım Holding',
    description: 'Yarınların değerini köklü tecrübemiz ve dinamik sektörlerimizle inşa ediyoruz.',
    url: 'https://altinoranyatirimholding.com.tr/about/',
    images: [{ url: '/images/boardroom.jpg' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          pageKey="about"
          tag="Kurumsal Kimlik & Vizyon"
          title="Geleceğe Güvenle Bakan Köklü Bir Yatırım Mirası"
          description="Altınoran Yatırım Holding, kurumsal disiplin ve reel sektör gücünü çok sektörlü operasyonel mükemmellikle bir araya getiriyor."
          currentPage="Kurumsal"
        />
        <AboutContent />
        <ChairmanSection />
      </main>
      <Footer />
    </>
  );
}
