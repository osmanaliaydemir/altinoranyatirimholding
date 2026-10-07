import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubsidiaryDetailView from '@/components/SubsidiaryDetailView';
import {
  getAllSubsidiarySlugs,
  getSubsidiaryBySlug,
} from '@/data/subsidiariesData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSubsidiarySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);

  if (!subsidiary) {
    return {
      title: 'İştirak Bulunamadı | Altınoran Yatırım Holding',
    };
  }

  const seo = subsidiary.tr.seo;
  const canonicalUrl = `https://altinoranyatirimholding.com.tr/subsidiaries/${slug}/`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      images: [{ url: subsidiary.image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [subsidiary.image],
    },
  };
}

export default async function SubsidiaryPage({ params }: PageProps) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);

  if (!subsidiary) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <SubsidiaryDetailView subsidiary={subsidiary} />
      </main>
      <Footer />
    </>
  );
}
