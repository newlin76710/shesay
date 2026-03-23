import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const milestones = [
  {
    title: '華人女性社群網站',
    description:
      '成立於 1999 年 10 月 15 日的 SheSay.com，相信網路不再是男人的舞台，希望成為提供女性相關資訊、服務及凝聚女性社群意識的女性社群網站。',
  },
  {
    title: '養個男人來消遣',
    description:
      '2000 年推出「上網養男人」，創造高流量話題；2003 年推出「手機養男人」，以女性為主導設條件尋找理想對象。2023 年轉型為女性友善的交友平台。',
  },
  {
    title: '愛情醫學院與明星聊天室',
    description:
      '從愛情求救分析、出版成書，到明星聊天室、KOL 網紅媒合平台，SheSay 一路從社群內容、聊天室與戀愛服務延伸至今。',
  },
];

const timeline = [
  '1999-10-15｜SheSay.com 網站上線',
  '2000-06-05｜養男人 2.0 正式推出',
  '2001-04-30｜SheSay 會員人數破 35 萬，單日流量 100 萬',
  '2005-04-29｜昱科網路收購 SheSay，經營權轉移到尋夢園聊天室團隊',
  '2014｜推出 eros 主題派對，發展多元實體聯誼活動平台',
  '2020｜建立「戀愛小秘書－娜米」團隊，專業紅娘解決交友問題',
  '2022｜推出「戀愛密碼諮詢服務」',
  '2023｜推出「戀愛會社」Podcast、YouTube 節目',
];

const namiExperience = [
  '留美攻讀 MBA 回台灣，接手經營尋夢園聊天室、SheSay。',
  '擅長網路行銷和 SEO 操作，創立尋夢新聞、eros 主題派對。',
  '經營公司十多年期間，多次獲得創業競賽冠軍。',
  '多次受邀擔任創業導師，以及到不同學術單位演講。',
  '常有異業合作、廣告代言、活動主持等經驗。',
  '擅長使用彩虹數字、花精療癒等方式為個案解惑。',
];

const gallery = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg',
    alt: 'SheSay 品牌與活動',
    title: 'SheSay 品牌與活動',
    description: '從女性社群、戀愛內容到聯誼與諮詢服務，一路延伸。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/RYN00597-新聞稿用-scaled-e1696996358120-1938x2048.jpg',
    alt: '戀愛小秘書娜米',
    title: '戀愛小秘書 娜米',
    description: '以一對一諮詢、數據分析與觀察力，協助整理戀愛方向。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2025/05/shesay-logo-01.png',
    alt: 'SheSay logo',
    title: '原站品牌識別',
    description: '保留原站識別與內容脈絡，只把前端改成 React / Next.js。',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="關於我們"
          title="SheSay，不僅是全台最資深的女性社群網站，更是一個專為女性打造的獨特平台"
          description="自 1999 年 10 月 15 日上線以來，SheSay 一直致力於為女性提供安全、溫馨的環境，讓女生可以自由表達自己、提升魅力、解決戀愛難題，最終找到理想中的戀愛對象。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg"
          imageAlt="SheSay 關於我們主視覺"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {milestones.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h2 className="text-xl font-semibold text-plum">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">SheSay.com 網站大事紀</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-plum/75">
              {timeline.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">戀愛小秘書 娜米最專業的紅娘</h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              兩性議題分析專家、留美 MBA 企管碩士、交友聊天室第二代、彩虹數字諮詢師、花精療癒師。
              善於觀察，對感性的情緒與感受很敏銳，同時具有理性的管理、創新與數據分析能力。
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/75">
              {namiExperience.map((item) => (
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
