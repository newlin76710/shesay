import type { MetadataRoute } from 'next';
import { articles } from '@/lib/party-articles';
import { loveokArticles } from '@/lib/loveok-articles';

const BASE_URL = 'https://shesay.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/consult`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/events`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/party`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/podcast`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/advertising`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = Object.keys(articles).map((id) => ({
    url: `${BASE_URL}/blog/${id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const loveokRoutes: MetadataRoute.Sitemap = Object.keys(loveokArticles).map((id) => ({
    url: `${BASE_URL}/loveok/${id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...loveokRoutes];
}
