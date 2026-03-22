import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SheSay | 為單身女性打造的聯誼與戀愛成長平台',
  description:
    'SheSay 提供單身聯誼活動、戀愛諮詢與女性內容，幫助妳更自然地認識適合的對象。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
