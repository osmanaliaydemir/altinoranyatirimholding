import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import PhilosophySection from '@/components/PhilosophySection';
import ChairmanSection from '@/components/ChairmanSection';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'Kurumsal | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding kurumsal kimliği, yönetim kurulu, altın oran felsefesi, tarihçesi ve kurumsal yönetişim standartları.',
  keywords: [
    'Altınoran Holding Kurumsal',
    'Yönetim Kurulu',
    'Osman Aydemir',
    'Altın Oran Felsefesi',
    'Holding Tarihçesi',
    'Kurumsal Yönetişim',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/about/',
  },
  openGraph: {
    title: 'Kurumsal | Altınoran Yatırım Holding',
    description: 'Yarınların değerini altın oran mükemmelliğiyle inşa ediyoruz.',
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
          tag="Kurumsal Kimlik & Vizyon"
          title="Geleceğe Güvenle Bakan Köklü Bir Yatırım Mirası"
          description="Altınoran Yatırım Holding, evrenin mükemmel uyumu olan altın orandan ilham alarak kurumsal disiplin ve reel sektör gücünü bir araya getiriyor."
          currentPage="Kurumsal"
        />
        <AboutContent />
        <PhilosophySection />
        <ChairmanSection />
      </main>
      <Footer />
    </>
  );
}
