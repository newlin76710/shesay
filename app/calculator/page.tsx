import { SiteShell } from '@/components/site-shell';
import { LoveCalculator } from '@/components/love-calculator';

export const metadata = {
  title: '戀愛特質速測 — SheSay',
  description: '輸入姓名、生日與時辰，用彩虹數字解鎖你的專屬戀愛密碼！了解你的主命數、戀愛方式、幸運色與鍛鍊功課。',
};

export default function CalculatorPage() {
  return (
    <SiteShell>
      <LoveCalculator />
    </SiteShell>
  );
}
