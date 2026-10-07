import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import MediaContent from '@/components/MediaContent';

export const metadata: Metadata = {
  title: 'Medya & Haberler | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding basın bültenleri, kurumsal duyurular, basın kiti ve medya iletişim bilgileri.',
  keywords: [
    'Altınoran Medya',
    'Basın Bültenleri',
    'Holding Haberleri',
    'Kurumsal Duyurular',
    'Basın Kiti',
    'Logo Paketi',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/media/',
  },
  openGraph: {
    title: 'Medya & Haberler | Altınoran Yatırım Holding',
    description: 'Holdingimizden en güncel haberler, yatırımlar ve basın materyalleri.',
    url: 'https://altinoranyatirimholding.com.tr/media/',
    images: [{ url: '/images/headquarters.jpg' }],
  },
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          pageKey="media"
          tag="Medya Odası"
          title="Haberler, Basın Bültenleri ve Medya Kiti"
          description="Altınoran Yatırım Holding ve iştiraklerimizin en güncel yatırım adımları, kurumsal açıklamaları ve basın materyalleri."
          currentPage="Medya"
        />
        <MediaContent />
      </main>
      <Footer />
    </>
  );
}
