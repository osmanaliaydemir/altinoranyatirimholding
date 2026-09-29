import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altinoranyatirimholding.com.tr';
  const currentDate = new Date().toISOString();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/sectors', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/subsidiaries', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/investor-relations', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/sustainability', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/media', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
