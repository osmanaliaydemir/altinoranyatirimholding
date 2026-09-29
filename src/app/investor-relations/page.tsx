import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import InvestorContent from '@/components/InvestorContent';

export const metadata: Metadata = {
  title: 'Yatırımcı İlişkileri | Altınoran Yatırım Holding',
  description:
    'Altınoran Yatırım Holding finansal raporları, faaliyet raporları, kurumsal yönetim uyum ilkeleri, finansal takvim ve pay sahipliği yapısı.',
  keywords: [
    'Altınoran Yatırımcı İlişkileri',
    'Faaliyet Raporu',
    'Finansal Tablolar',
    'BIST Kurumsal Yönetim',
    'Finansal Takvim',
    'Yatırımcı Sunumu',
  ],
  alternates: {
    canonical: 'https://altinoranyatirimholding.com.tr/investor-relations/',
  },
  openGraph: {
    title: 'Yatırımcı İlişkileri | Altınoran Yatırım Holding',
    description: 'Şeffaf, hesap verebilir ve sürdürülebilir kurumsal sermaye yönetimi.',
    url: 'https://altinoranyatirimholding.com.tr/investor-relations/',
    images: [{ url: '/images/boardroom.jpg' }],
  },
};

export default function InvestorRelationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Finansal Şeffaflık"
          title="Yatırımcı İlişkileri & Kurumsal Yönetişim"
          description="Uluslararası standartlarda bağımsız denetimden geçen finansal tablolarımız, faaliyet raporlarımız ve paydaş değerini artıran yönetim modelimiz."
          currentPage="Yatırımcı İlişkileri"
        />
        <InvestorContent />
      </main>
      <Footer />
    </>
  );
}
