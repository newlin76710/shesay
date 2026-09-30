import type { MetadataRoute } from 'next';

// 靜態輸出（output: 'export'）時在建置階段產生
export const dynamic = 'force-static';

const BASE_URL = 'https://shesay.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
