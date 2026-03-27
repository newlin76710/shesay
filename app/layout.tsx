import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SheSay | 為單身女性打造的聯誼與戀愛成長平台',
    template: '%s — SheSay',
  },
  description:
    'SheSay 提供單身聯誼活動、戀愛諮詢與女性內容，幫助妳更自然地認識適合的對象。',
  metadataBase: new URL('https://shesay.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: 'SheSay',
    title: 'SheSay | 為單身女性打造的聯誼與戀愛成長平台',
    description: 'SheSay 提供單身聯誼活動、戀愛諮詢與女性內容，幫助妳更自然地認識適合的對象。',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'SheSay 為單身女性打造的聯誼與戀愛成長平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SheSay | 為單身女性打造的聯誼與戀愛成長平台',
    description: 'SheSay 提供單身聯誼活動、戀愛諮詢與女性內容，幫助妳更自然地認識適合的對象。',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shesay.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SheSay',
              url: 'https://shesay.com',
              logo: 'https://shesay.com/images/original/shesay.com/wp-content/uploads/2025/05/shesay-logo-01.png',
              description: 'SheSay 提供單身聯誼活動、戀愛諮詢與女性內容，幫助妳更自然地認識適合的對象。',
              sameAs: [
                'https://lin.ee/UtgCipOq',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SheSay',
              url: 'https://shesay.com',
            }),
          }}
        />
      </body>
    </html>
  );
}
