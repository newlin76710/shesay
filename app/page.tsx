import Image from 'next/image';
import { CtaBanner } from '@/components/cta-banner';
import { SiteShell } from '@/components/site-shell';
import { TestimonialCard } from '@/components/testimonial-card';

const steps = [
  {
    title: '加入官方LINE',
    description: '加入 SHESAY 的官方 LINE\nLINE ID：@shesay',
  },
  {
    title: '填寫個人資料',
    description: '依照流程填寫個人資料\n等候戀愛小秘書進行資料驗證\n與配對數據分析',
  },
  {
    title: '參加單身聯誼活動',
    description: '資料驗證完成 開始安排約會\n參加各種有趣的單身聯誼活動\n在真實生活中認識異性吧！',
  },
];

const events = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg',
    alt: '大板根烤肉 森林放鬆去',
    title: '大板根烤肉｜森林放鬆去',
    href: '/party',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2024/01/橫式主視覺-1.jpg',
    alt: '遊艇派對 海上的浪漫',
    title: '遊艇派對｜海上的浪漫',
    href: '/party',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/20231014手作蘋果塔-768x475-1.jpeg',
    alt: '陽明春天 與幸福有約',
    title: '陽明春天｜與幸福有約',
    href: '/party',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/DSC00020_副本.jpeg',
    alt: '一對一快速約會 Speed Dating',
    title: '一對一快速約會（Speed Dating）',
    href: '/party',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-04-生日的彩虹數字.jpg',
    alt: '鏢準情人 命中愛情紅心',
    title: '鏢準情人｜命中愛情紅心',
    href: '/party',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/StyleUP-01.jpg',
    alt: '桌遊派對遊戲',
    title: '桌遊派對遊戲',
    href: '/party',
  },
];

const girlTopics = [
  { label: '她說 最好吃', href: '/blog/category/food/' },
  { label: '她想 去旅遊', href: '/blog/category/travel/' },
  { label: '她有 美美臉', href: '/blog/category/cosmetics/' },
  { label: '她穿 美時尚', href: '/blog/category/fashion/' },
  { label: '她的 健康法', href: '/blog/category/healthy/' },
  { label: '她都 輕鬆瘦', href: '/blog/category/fitness/' },
  { label: '她的 戀愛腦', href: '/blog/category/love/' },
  { label: '她要 去約會', href: '/blog/category/meetup/' },
  { label: '她求 戀愛運', href: '/blog/category/destiny/' },
];

const testimonials = [
  {
    quote:
      '我當時正好在找一個可以改變我的人生的機會，於是參加了戀愛小秘書娜米主辦的聯誼活動。我發現娜米能巧妙地搭配各式活動，創造一個讓人舒適、愉快的氛圍。她的專業和用心讓我感受到無微不至的照顧，更在愛情的道路上引領我跟現在的對象可以因此遇見了彼此。',
    name: '盧小姐',
    meta: '27歲 護理師',
  },
  {
    quote:
      '我曾在尋找愛情的路上徬徨，當我參加了娜米舉辦的活動後，一切都改變了。她的聰明和細心，讓每一場相遇充滿了可能性，而且每個流程細節都展現了她對愛情的獨特見解。如果你也想脫單，我推薦娜米～她將為你帶來不一樣的戀愛體驗，讓你在活動中找到屬於自己的幸福。',
    name: '趙小姐',
    meta: '30歲 芳療老師',
  },
  {
    quote:
      '去年參加了娜米策劃的派對活動後，我找到了一生的伴侶。每一場活動都讓我們有機會在輕鬆愉快的氛圍中相識。她的用心與專業使得整個過程不僅充滿趣味，更讓單身者走進愛情的大門。',
    name: '廖小姐',
    meta: '26歲 甜點店製作助手',
  },
];

const consultTestimonials = [
  {
    quote:
      '感謝娜米，我對自己有了更深的認識，發現了潛在的優勢，也學會了更有效地與人溝通。現在的我在人際關係中更加融洽。',
    name: 'Becky',
    meta: '位格9 流年+17/8',
  },
  {
    quote:
      '經歷娜米的諮詢，我的人生得到了翻天覆地的改變。我發現了自己內在的力量，學到了解決感情問題的方法，也更加自信地與他人交流。',
    name: 'Airel',
    meta: '靈魂等級 1',
  },
  {
    quote:
      '這真的是一場啟發之旅。娜米的戀愛數字密碼，不僅讓我更加了解自己，還讓我在感情中更加得心應手。',
    name: 'Lina',
    meta: '感情主修 6',
  },
];

const products = [
  { name: '給妳好氣色', sub: 'ExB群' },
  { name: '好身材好纖暢', sub: '纖暢果凍' },
  { name: '提升戀愛魅力', sub: '玻尿酸' },
  { name: '美麗又聰慧', sub: 'Omega3魚油' },
  { name: '給妳好面子', sub: '膠原蛋白' },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight text-plum md:text-6xl md:leading-[1.05]">
                SheSay 幫妳安排心動約會
              </h1>
              <div className="mt-6 flex flex-wrap gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose">103,926</p>
                  <p className="mt-1 text-sm text-plum/70">位認證會員</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose">4,000+</p>
                  <p className="mt-1 text-sm text-plum/70">對配對成功</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-sm font-semibold text-plum">高度客製化服務</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-sm font-semibold text-plum">大數據配對分析</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-sm font-semibold text-plum">豐富的單身聯誼活動</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://lin.ee/UtgCipOq" className="rounded-full bg-rose px-7 py-4 text-center text-sm font-semibold text-white transition hover:opacity-90">
                  加入官方 LINE
                </a>
                <a href="/party" className="rounded-full border border-plum/15 bg-white px-7 py-4 text-center text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose">
                  聯誼派對活動
                </a>
              </div>
            </div>
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image src="/images/original/shesay.com/wp-content/uploads/2023/11/banner-1024x683-1.jpeg" alt="SheSay 幫妳安排心動約會" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" priority />
            </div>
          </div>
        </section>

        {/* 3 Steps */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">只要３步驟 輕鬆認識異性</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-3xl bg-white p-8 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-plum">{step.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-base leading-7 text-plum/75">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="https://lin.ee/UtgCipOq" className="inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                立刻諮詢
              </a>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 懂妳會愛的單身聯誼</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-plum/75">多元有趣單身派對活動，豐富妳的社交生活。讓妳快速、精準找到適合的對象</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {events.map((item) => (
              <a key={item.title} href={item.href} className="group relative block overflow-hidden rounded-2xl shadow-soft">
                <div className="relative h-48">
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-plum/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs font-medium text-white/80">我要參加 »</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/party" className="text-sm font-medium text-rose hover:underline">更多聯誼活動 »</a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">會員活動心得</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* 女生話題 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 女生的事女生說</h2>
            <p className="mt-4 text-base leading-8 text-plum/75">好看、好吃、好玩 訊息不漏接</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
            {girlTopics.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-plum/10 bg-white px-6 py-4 shadow-soft transition hover:border-rose/30 hover:text-rose"
              >
                <span className="text-sm font-semibold text-plum group-hover:text-rose">{item.label}</span>
                <span className="text-xs text-rose">看文章 »</span>
              </a>
            ))}
          </div>
        </section>

        {/* 戀愛數字密碼 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-soft">
                <Image src="/images/original/shesay.com/wp-content/uploads/2023/10/SheSay-戀愛數字密碼-banner-1-2048x758.jpg" alt="SheSay 戀愛數字密碼諮詢" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 戀愛數字密碼諮詢</h2>
                <h3 className="mt-3 text-lg font-semibold text-plum/80">從生日就知道妳的戀愛煩惱</h3>
                <p className="mt-4 text-base leading-8 text-plum/75">
                  每個人出生時都帶有一組戀愛數字密碼<br />
                  解讀生命密碼 展開戀愛藍圖
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href="https://datenami.tw/dt09N6FMu" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                    馬上預約戀愛數字諮詢
                  </a>
                  <a href="https://datenami.tw/dt09brRrq" className="inline-flex rounded-full border border-plum/20 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose">
                    免費速測妳的戀愛數字
                  </a>
                  <a href="https://datenami.tw/dt09keayb" className="inline-flex rounded-full border border-plum/20 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose">
                    參加戀愛諮詢節目
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 諮詢見證 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 戀愛密碼諮詢見證</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {consultTestimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        {/* 戀愛產品 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 提升戀愛魅力值</h2>
              <p className="mt-4 text-base text-plum/75">戀愛產品推薦</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-5">
              {products.map((item) => (
                <div key={item.name} className="rounded-2xl bg-white p-6 text-center shadow-soft">
                  <p className="text-sm font-semibold text-plum">{item.name}</p>
                  <p className="mt-2 text-xs text-plum/60">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="cta">
          <CtaBanner />
        </div>
      </main>
    </SiteShell>
  );
}
