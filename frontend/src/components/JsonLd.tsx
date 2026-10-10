import React from 'react';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Altınoran Yatırım Holding A.Ş.',
    alternateName: ['Altınoran Holding', 'Altinoran Investment Holding'],
    url: 'https://altinoranyatirimholding.com.tr',
    logo: 'https://altinoranyatirimholding.com.tr/images/logo.webp',
    image: 'https://altinoranyatirimholding.com.tr/images/headquarters.jpg',
    description:
      'Altınoran Yatırım Holding; gayrimenkul, inşaat, sağlık, akaryakıt, bilişim ve dış ticarette sürdürülebilir değer üreten öncü yatırım grubudur.',
    foundingDate: '2011',
    founder: {
      '@type': 'Person',
      name: 'Hanifi Tekin',
      jobTitle: 'Yönetim Kurulu Başkanı',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yenişehir Mah. E-80 Güney Yanyol, Rumi Sok. No:29',
      addressLocality: 'Ataşehir',
      addressRegion: 'İstanbul',
      postalCode: '34779',
      addressCountry: 'TR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+90-216-455-1414',
        contactType: 'customer service',
        email: 'info@altinoranyatirimholding.com.tr',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+90-216-455-1414',
        contactType: 'investor relations',
        email: 'ir@altinoranyatirimholding.com.tr',
        areaServed: 'Global',
        availableLanguage: ['Turkish', 'English', 'Arabic'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/altinoranyatirimholding',
      'https://twitter.com/altinoranholding',
      'https://www.instagram.com/altinoranyatirimholding',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
