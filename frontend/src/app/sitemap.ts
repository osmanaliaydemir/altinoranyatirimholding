import { MetadataRoute } from 'next';
import { getAllSubsidiarySlugs } from '@/data/subsidiariesData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altinoranyatirimholding.com.tr';
  const currentDate = new Date().toISOString();

  const mainRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/sectors/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/subsidiaries/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/sustainability/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/media/', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/contact/', priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  const subsidiaryRoutes = getAllSubsidiarySlugs().map((slug) => ({
    url: `/subsidiaries/${slug}/`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }));

  const allRoutes = [...mainRoutes, ...subsidiaryRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
