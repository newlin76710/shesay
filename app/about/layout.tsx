import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於我們｜女性交友網站與專業紅娘團隊',
  description: 'SheSay 品牌故事——從尋夢園聊天室到最專業的紅娘戀愛小秘書娜米，了解這個女性網站如何用交友聯誼、彩虹數字與戀愛諮詢，幫助單身女性找到幸福。',
  keywords: ['女性網站', '交友', '戀愛', '紅娘', '彩虹數字', 'SheSay 品牌故事'],
  openGraph: {
    title: '關於我們｜女性交友網站與專業紅娘團隊 — SheSay',
    description: 'SheSay 品牌故事——從尋夢園聊天室到最專業的紅娘戀愛小秘書娜米，了解我們如何用交友聯誼、彩虹數字與戀愛諮詢幫助單身女性找到幸福。',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
