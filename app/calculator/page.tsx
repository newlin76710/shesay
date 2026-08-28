import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { LoveCalculator } from '@/components/love-calculator';

export const metadata: Metadata = {
  title: '戀愛特質速測｜免費戀愛算命計算機',
  description: '輸入姓名、生日與時辰，免費用彩虹數字算命解鎖你的專屬戀愛密碼！了解你的主命數、戀愛方式、幸運色與鍛鍊功課。',
  keywords: ['戀愛算命', '數字算命', '戀愛數字密碼', '彩虹數字', '免費算命', '戀愛'],
  openGraph: {
    title: '戀愛特質速測｜免費戀愛算命計算機 — SheSay',
    description: '免費用彩虹數字算命解鎖你的專屬戀愛密碼！了解你的主命數、戀愛方式、幸運色與鍛鍊功課。',
  },
};

export default function CalculatorPage() {
  return (
    <SiteShell>
      <LoveCalculator />
    </SiteShell>
  );
}
