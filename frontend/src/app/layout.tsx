import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060911",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://altinoranyatirimholding.com.tr'),
  title: "Altınoran Yatırım Holding | Geleceği Altın Oran Mükemmelliğiyle Şekillendiriyoruz",
  description:
    "Altınoran Yatırım Holding; gayrimenkul, yenilenebilir enerji, finansal hizmetler, girişim sermayesi, ileri teknoloji ve küresel lojistikte sürdürülebilir değer üreten öncü yatırım grubudur.",
  keywords: [
    "Altınoran Yatırım Holding",
    "Altınoran Holding",
    "yatırım holdingi",
    "yenilenebilir enerji yatırımı",
    "girişim sermayesi",
    "portföy yönetimi",
    "gayrimenkul geliştirme",
    "Golden Ratio Investment Holding",
    "holding İstanbul",
  ],
  authors: [{ name: "Altınoran Yatırım Holding A.Ş." }],
  creator: "Altınoran Yatırım Holding A.Ş.",
  publisher: "Altınoran Yatırım Holding A.Ş.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Altınoran Yatırım Holding",
    description: "Finansal disiplin ve reel sektör vizyonuyla yarınların değerini inşa ediyoruz.",
    url: "https://altinoranyatirimholding.com.tr",
    siteName: "Altınoran Yatırım Holding",
    images: [
      {
        url: "/images/headquarters.jpg",
        width: 1200,
        height: 630,
        alt: "Altınoran Yatırım Holding Yönetim Ofisi Ataşehir İstanbul",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

import PageTransitionLoader from "@/components/PageTransitionLoader";
import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <JsonLd />
        <PageTransitionLoader />
        <LanguageProvider>
          {children}
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
