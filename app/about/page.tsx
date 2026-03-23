import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const timeline = [
  '1999-10-15｜SheSay.com 網站上線，定位為華人女性社群網站。',
  '2000-06｜推出「養個男人來消遣」，創造高流量話題。',
  '2001｜SheSay 推出「愛情醫學院」，針對愛情求救做出分析與解讀。',
  '2007｜尋夢園團隊成立明星聊天室，邀請歌手、明星與網友互動。',
  '2014｜推出 eros 主題派對，開始發展多元實體聯誼活動。',
  '2020｜建立「戀愛小秘書－娜米」團隊，協助處理交友與戀愛問題。',
  '2022-2023｜推出戀愛密碼諮詢服務與戀愛會社 Podcast / YouTube。',
];

const highlights = [
  {
    title: '華人女性社群網站',
    description: 'SheSay 自 1999 年上線以來，從女性社群、聊天室、愛情討論到現在的聯誼與諮詢服務，一直圍繞女性需求發展。',
  },
  {
    title: '女性主導的交友服務',
    description: '從「養男人」到後來轉型成女性友善的交友平台，核心一直是讓女生在更安心的條件下認識對象。',
  },
  {
    title: '從內容到服務的延伸',
    description: '愛情醫學院、明星聊天室、eros 主題派對、戀愛密碼諮詢、戀愛會社，都是同一條脈絡的演化。',
  },
];

const gallery = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg',
    alt: 'SheSay 活動與品牌',
    title: 'SheSay 品牌與活動',
    description: '從內容社群一路延伸到實體活動與諮詢服務。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/RYN00597-新聞稿用-scaled-e1696996358120-1938x2048.jpg',
    alt: '娜米人物照片',
    title: '戀愛小秘書 娜米',
    description: '以一對一諮詢、數據與觀察力，協助整理戀愛方向。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2025/05/shesay-logo-01.png',
    alt: 'SheSay logo',
    title: '原站品牌識別',
    description: '保留原來的識別感，前端則改成 React / Next.js。',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="關於我們"
          title="SheSay，不僅是女性社群網站，也是一個一路演化至今的女性平台"
          description="自 1999 年 10 月 15 日上線以來，SheSay 持續圍繞女性社群、戀愛討論、聯誼活動與諮詢服務發展，從內容、社群到實體服務，慢慢長成今天的樣子。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg"
          imageAlt="SheSay 關於我們主視覺"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h2 className="text-xl font-semibold text-plum">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">網站發展重要里程</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-plum/75">
              {timeline.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <ImageCard key={item.src} {...item} />
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
