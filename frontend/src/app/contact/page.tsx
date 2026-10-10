import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'İletişim & Yönetim Ofisi | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding Ataşehir yönetim ofisi iletişim bilgileri, telefon numaraları, departman e-postaları ve kurumsal iletişim formu.',
  keywords: [
    'Altınoran İletişim',
    'Holding Ataşehir Adres',
    'Altınoran Telefon',
    'Yatırımcı İletişim',
    'Basın İletişim',
    'Ataşehir Yönetim Ofisi',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/contact/',
  },
  openGraph: {
    title: 'İletişim & Yönetim Ofisi | Altınoran Yatırım Holding',
    description: 'Holding yönetim ofisimize ve ilgili birimlerimize dilediğiniz zaman ulaşabilirsiniz.',
    url: 'https://altinoranyatirimholding.com.tr/contact/',
    images: [{ url: '/images/headquarters.jpg' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          pageKey="contact"
          tag="Bize Ulaşın"
          title="Merkez Ofisimiz ve İletişim Kanalları"
          description="Kurumsal ortaklıklar, yatırım talepleri ve sorularınız için Ataşehir yönetim ofisimizle bağlantıya geçebilirsiniz."
          currentPage="İletişim"
        />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
