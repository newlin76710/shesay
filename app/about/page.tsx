import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const timeline = [
  { year: '1999', date: '1999-10-15', event: 'SheSay.com 正式上線，成為專為女性打造的網路社群平台。' },
  { year: '2000', date: '2000-01-05', event: '推出「養個男人來消遣」虛擬養成遊戲，創造百萬點擊話題。' },
  { year: '2000', date: '2000-06', event: '推出「養男人 2.0」，月活躍用戶突破新高。' },
  { year: '2001', date: '2001-04-30', event: 'SheSay 會員人數突破 35 萬，單日流量達 100 萬次。' },
  { year: '2003', date: '2003-03-10', event: '推出「愛情醫學院」愛情求救專欄，並集結出版成書。' },
  { year: '2003', date: '2003-06', event: '推出「手機養男人」，以女性為主導設條件尋找理想對象。' },
  { year: '2005', date: '2005-04-29', event: '昱科網路收購 SheSay，經營權轉移至尋夢園聊天室團隊。' },
  { year: '2007', date: '2007', event: '推出「明星聊天室」，羅志祥、王心凌等 23 位藝人參與，引爆話題。' },
  { year: '2014', date: '2014', event: '推出 eros 主題派對，發展多元實體單身聯誼活動平台。' },
  { year: '2020', date: '2020', event: '建立「戀愛小秘書－娜米」團隊，提供一對一專業紅娘諮詢服務。' },
  { year: '2022', date: '2022', event: '推出「戀愛密碼諮詢服務」，以彩虹數字解析個人戀愛藍圖。' },
  { year: '2023', date: '2023', event: '推出「戀愛會社」Podcast 與 YouTube 節目，累積大量忠實聽眾。' },
  { year: '2023', date: '2023-09', event: '「養個男人來消遣」轉型為女性友善的現代交友配對服務。' },
];

const brands = [
  {
    name: '尋夢園聊天室',
    url: 'https://ek21.com/',
    tag: '高黏著度 | 社群 | 溝通',
    stat: '總會員人數突破3百萬人',
    desc: '台灣最大的匿名聊天社群平台，提供各類聊天室與即時互動功能，會員人數突破三百萬，是台灣歷史最悠久的網路聊天平台之一。',
  },
  {
    name: '尋夢新聞',
    url: 'https://ek21.com/news/',
    tag: '高流量 | 新聞 | 內容',
    stat: '每月瀏覽人次達 500 萬',
    desc: '涵蓋娛樂、戲劇、寵物、動漫、時尚、健康、愛情七大內容類別，每月吸引數百萬次瀏覽，是台灣重要的生活娛樂資訊平台。',
  },
  {
    name: 'eros主題派對',
    url: 'https://erosparty.club',
    tag: '線下活動 | 交友 | 聯誼',
    stat: '聯誼派對 1,013場 / 單身會員 103,089位 / 戀愛講座 724場',
    desc: '台灣規模最大的主題式單身聯誼平台，舉辦超過千場活動，包含廚藝、手作、戶外、VIP 等多元類型，協助單身男女在真實互動中找到緣分。',
  },
  {
    name: 'SheSay 女性社群媒體',
    url: '/',
    tag: '女性 | 社群 | 媒體',
    stat: '成立於 1999 年，台灣最資深女性社群',
    desc: '為女性提供戀愛、時尚、健康、美食等多元內容，是陪伴台灣女性超過 25 年的數位社群平台。',
  },
  {
    name: '戀愛小秘書娜米',
    url: 'https://datenami.tw/dt09N6FMu',
    tag: '線上諮詢 | 戀愛 | 配對',
    stat: '一對一個人化戀愛諮詢',
    desc: '由第二代經營者娜米主持，提供一對一線上戀愛諮詢服務。透過彩虹數字解析每位個案的戀愛特質，協助找到適合的對象與互動方式。',
  },
];

const namiTimeline = [
  { year: '2013', event: '留美攻讀 MBA 回台，接手經營尋夢園聊天室與 SheSay。' },
  { year: '2014', event: '創立 eros 主題派對，擅長網路行銷與 SEO 操作。' },
  { year: '2014', event: '首次受邀至學術單位演講，分享網路創業與數位行銷經驗。' },
  { year: '2017', event: '多次獲得創業競賽冠軍，受邀擔任創業導師。' },
  { year: '2020', event: '創立「戀愛小秘書娜米」品牌，開始提供一對一戀愛諮詢服務。' },
  { year: '2022', event: '取得彩虹數字諮詢師與花精療癒師資格，推出戀愛數字密碼諮詢。' },
  { year: '2023', event: '推出「戀愛會社」Podcast 與 YouTube 頻道，擔任主持人。' },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="關於我們"
          title="全台最資深的女性社群網站"
          description="SheSay，不僅是全台最資深的女性社群網站，更是一個專為女性打造的獨特平台。自 1999 年 10 月 15 日上線以來，致力為女性提供安全、溫馨的環境，讓女生自由表達自己、提升魅力，解決各種戀愛難題，最終找到理想中的戀愛對象。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg"
          imageAlt="SheSay 關於我們"
        />

        {/* 創立故事 */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose">網站發展重要里程</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-plum">華人女性社群網站</h2>
            <p className="mt-5 text-base leading-8 text-plum/75">
              成立於 1999 年 10 月 15 日的 SheSay.com，相信網路不再是男人的舞台，希望成為提供女性相關資訊、服務及凝聚女性社群意識的女性社群網站。從愛情醫學院、哈日浪潮、陽光健身，到魔女水晶、流行尖端、勁爆娛樂，再到遨遊四方、玫瑰性情、悠遊職場、美饌食堂，每個頻道都是那個時代女性的數位生活縮影。
            </p>
          </div>
        </section>

        {/* 大事紀時間軸 */}
        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-plum">SheSay.com 網站大事紀</h2>
          <div className="mt-8 space-y-0">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 border-l-2 border-rose/30 pb-8 pl-6 last:pb-0">
                <div className="min-w-[72px]">
                  <span className="inline-block rounded-full bg-rose/10 px-3 py-1 text-xs font-semibold text-rose">{item.year}</span>
                </div>
                <div>
                  <p className="text-xs text-plum/50">{item.date}</p>
                  <p className="mt-1 text-base leading-7 text-plum/80">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 集團品牌 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">集團品牌生態系</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/70 bg-white p-7 shadow-soft transition hover:border-rose/30"
                >
                  <p className="text-xs font-semibold text-rose">{brand.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold text-plum group-hover:text-rose">{brand.name}</h3>
                  <p className="mt-2 text-sm font-medium text-plum/60">{brand.stat}</p>
                  <p className="mt-3 text-sm leading-6 text-plum/70">{brand.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 娜米介紹 */}
        <section id="nami" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/original/shesay.com/wp-content/uploads/2023/10/RYN00597-新聞稿用-scaled-e1696996358120-1938x2048.jpg"
                alt="戀愛小秘書 娜米"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-rose">戀愛小秘書</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-plum">娜米 — 最專業的紅娘</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {['兩性議題分析專家', '留美MBA企管碩士', '交友聊天室第二代', '彩虹數字諮詢師', '花精療癒師'].map((tag) => (
                  <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-plum">{tag}</span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-plum/75">
                善於觀察，對感性的情緒與感受很敏銳，同時具有理性的管理、創新與數據分析能力。相信每個人都值得擁有幸福的愛情，透過戀愛數字密碼與一對一諮詢，幫助更多人了解自己、找到適合的對象。
              </p>
              <h3 className="mt-8 text-xl font-semibold text-plum">職涯里程碑</h3>
              <div className="mt-4 space-y-4">
                {namiTimeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="shrink-0 text-sm font-semibold text-rose">{item.year}</span>
                    <p className="text-sm leading-6 text-plum/75">{item.event}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://datenami.tw/dt09N6FMu"
                className="mt-8 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                預約娜米諮詢
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
