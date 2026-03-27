import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於我們',
  description: 'SheSay 品牌故事——從尋夢園聊天室到戀愛小秘書娜米，了解我們如何幫助單身女性找到幸福。',
  openGraph: {
    title: '關於我們 — SheSay',
    description: 'SheSay 品牌故事——從尋夢園聊天室到戀愛小秘書娜米，了解我們如何幫助單身女性找到幸福。',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
