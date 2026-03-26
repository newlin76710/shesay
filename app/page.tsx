import Image from 'next/image';
import { BannerSlider } from '@/components/banner-slider';
import { CtaBanner } from '@/components/cta-banner';
import { SiteShell } from '@/components/site-shell';

const BASE11 = '/images/original/shesay.com/wp-content/uploads/2023/11/';
const BASE10 = '/images/original/shesay.com/wp-content/uploads/2023/10/';
const BASE09 = '/images/original/shesay.com/wp-content/uploads/2023/09/';

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
  { title: 'FUEGO巧克力傳情', img: BASE11 + 'ev_8c0723be28_1445396497-768x509-1.jpeg', desc: '過了10月就是11月，一年就要這樣過了嗎？受不了街...' },
  { title: '夕陽情懷｜淡水河畔騎車趣', img: BASE11 + 'P-1521774-DFFDB604O-768x512-1.jpeg', desc: '騎著自行車探索這片美麗的河岸，欣賞河水的流動和周圍的風景。' },
  { title: 'K歌派對-歌聲傳情', img: BASE11 + 'event03.jpeg', desc: '別害羞，娜米和戀愛小秘書知道你有一副好歌喉！' },
  { title: '手工製作玫瑰蘋果塔', img: BASE11 + '20231014手作蘋果塔-768x475-1.jpeg', desc: '一起玩手作，揮灑甜蜜，一直都是我們男女學員的最愛。' },
  { title: '戀愛講座：排約或約會，高手會怎麼做？', img: BASE11 + 'd1201119.jpeg', desc: '你在初次約會時感到緊張和不知所措？不用擔心！' },
  { title: '和風創意｜壽司DIY', img: BASE11 + '275113f2cb61f4c3b4bc6d3edcb1248e.jpeg', desc: '尋找和風創意的相遇？一同展現手藝！' },
];

const memberTestimonials = [
  {
    name: '盧小姐',
    meta: '27歲 護理師',
    avatar: '/images/testimonials/member-lu.jpg',
    quote: '我當時正好在找一個可以改變我的人生的機會，於是參加了戀愛小秘書娜米主辦的聯誼活動。我發現娜米能巧妙地搭配各式活動，創造一個讓人舒適、愉快的氛圍。她的專業和用心讓我感受到無微不至的照顧，更在愛情的道路上引領我跟現在的對象可以因此遇見了彼此。',
  },
  {
    name: '趙小姐',
    meta: '30歲 芳療老師',
    avatar: '/images/testimonials/member-zhao.jpg',
    quote: '我曾在尋找愛情的路上徬徨，當我參加了娜米舉辦的活動後，一切都改變了。她的聰明和細心，讓每一場相遇充滿了可能性，而且每個流程細節都展現了她對愛情的獨特見解。如果你也想脫單，我推薦娜米～她將為你帶來不一樣的戀愛體驗，讓你在活動中找到屬於自己的幸福。',
  },
  {
    name: '廖小姐',
    meta: '26歲 甜點店製作助手',
    avatar: '/images/testimonials/member-liao.jpg',
    quote: '去年參加了娜米策劃的派對活動後，我找到了一生的伴侶。每一場活動都讓我們有機會在輕鬆愉快的氛圍中相識。她的用心與專業使得整個過程不僅充滿趣味，更讓單身者走進愛情的大門。如果你也渴望找到屬於自己的另一半，我推薦戀愛小秘書娜米的聯誼活動。體驗到美好而難忘的過程。',
  },
];

const consultTestimonials = [
  {
    name: 'Becky',
    meta: '位格9 流年+17/8',
    avatar: '/images/testimonials/becky.jpg',
    graphic: BASE10 + '五大階段數與流年拷貝.png',
    quote: '感謝娜米，我對自己有了更深的認識，發現了潛在的優勢，也學會了更有效地與人溝通。現在的我在人際關係中更加融洽，感謝娜米老師帶給我這股正向的力量，不僅是學到自我探索，更是獲得了寶貴的人生觀念。遇見娜米老師真的是一場奇妙的緣分，解開了我多年的疑惑。',
  },
  {
    name: 'Airel',
    meta: '靈魂等級 1',
    avatar: '/images/testimonials/airel.jpg',
    graphic: BASE10 + '五大階段數與流年-2.png',
    quote: '經歷娜米的諮詢，我的人生得到了翻天覆地的改變。我發現了自己內在的力量，學到了解決感情問題的方法，也更加自信地與他人交流。娜米老師的指導不僅讓我找到了合適的對象，還幫助我解決了多年的心結，讓我重拾人生的信心。',
  },
  {
    name: 'Lina',
    meta: '感情主修 6',
    avatar: '/images/testimonials/lina.jpg',
    graphic: BASE10 + '五大階段數與流年.png',
    quote: '這真的是一場啟發之旅。娜米的戀愛數字密碼，不僅讓我更加了解自己，還讓我在感情中更加得心應手。透過她的諮詢，我找到了適合我的對象，解答我的戀愛困擾。感謝娜米老師的專業指導，讓我在感情和人生中都有了更多的收獲。',
  },
];

const products = [
  { name: '給妳好氣色', sub: 'ExB群', img: '/images/products/product-exb.jpg' },
  { name: '好身材好纖暢', sub: '纖暢果凍', img: '/images/products/product-jelly.jpg' },
  { name: '提升戀愛魅力', sub: '玻尿酸', img: '/images/products/product-hyaluronic.jpg' },
  { name: '美麗又聰慧', sub: 'Omega3魚油', img: '/images/products/product-omega3.jpg' },
  { name: '給妳好面子', sub: '膠原蛋白', img: '/images/products/product-collagen.jpg' },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="#f5b971"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* Banner Slider */}
        <BannerSlider />

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <h2 className="text-center text-4xl font-bold tracking-tight text-plum md:text-5xl">
            SheSay 幫妳安排心動約會
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* 高度客製化服務 */}
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-soft transition hover:-translate-y-1">
              <svg className="mb-4 h-12 w-12 text-rose" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4C18 4 13 9 13 15c0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11z" fill="currentColor" opacity="0.15" />
                <path d="M24 4C18 4 13 9 13 15c0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11z" />
                <circle cx="24" cy="15" r="4" />
                <path d="M8 40h32" strokeDasharray="2 3" />
                <path d="M14 44h20" strokeDasharray="2 3" />
              </svg>
              <p className="text-base font-semibold text-plum">高度客製化服務</p>
            </div>

            {/* 大數據配對分析 */}
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-soft transition hover:-translate-y-1">
              <svg className="mb-4 h-12 w-12 text-rose" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="24" width="8" height="18" rx="2" fill="currentColor" opacity="0.15" />
                <rect x="16" y="16" width="8" height="26" rx="2" fill="currentColor" opacity="0.15" />
                <rect x="28" y="8" width="8" height="34" rx="2" fill="currentColor" opacity="0.15" />
                <rect x="4" y="24" width="8" height="18" rx="2" />
                <rect x="16" y="16" width="8" height="26" rx="2" />
                <rect x="28" y="8" width="8" height="34" rx="2" />
                <circle cx="40" cy="12" r="4" fill="currentColor" opacity="0.3" stroke="currentColor" />
                <path d="M8 20l12-6 12-4 8-2" />
              </svg>
              <p className="text-base font-semibold text-plum">大數據配對分析</p>
            </div>

            {/* 豐富的單身聯誼活動 */}
            <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-soft transition hover:-translate-y-1">
              <svg className="mb-4 h-12 w-12 text-rose" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="14" r="6" fill="currentColor" opacity="0.15" />
                <circle cx="32" cy="14" r="6" fill="currentColor" opacity="0.15" />
                <circle cx="16" cy="14" r="6" />
                <circle cx="32" cy="14" r="6" />
                <path d="M4 38c0-6.627 5.373-12 12-12h2" fill="none" />
                <path d="M30 26h2c6.627 0 12 5.373 12 12" fill="none" />
                <path d="M20 30l4 4 4-4" />
                <path d="M24 34v8" />
              </svg>
              <p className="text-base font-semibold text-plum">豐富的單身聯誼活動</p>
            </div>
          </div>
        </section>

        {/* 3 Steps */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">只要３步驟 輕鬆認識異性</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-3xl bg-white p-8 shadow-soft">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-bold text-plum">{step.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-base leading-7 text-plum/75">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-xl font-bold text-plum">現在就預約跟娜米諮詢吧</h3>
              <a href="https://lin.ee/UtgCipOq" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#24B053] px-8 py-4 text-sm font-semibold text-white shadow transition hover:opacity-90">
                立刻諮詢
              </a>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">SheSay 懂妳會愛的單身聯誼</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-plum/75">多元有趣單身派對活動，豐富妳的社交生活。讓妳快速、精準找到適合的對象</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {events.map((item) => (
              <a key={item.title} href="https://lin.ee/UtgCipOq" className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-plum">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-plum/60">{item.desc}</p>
                  <p className="mt-3 text-xs font-semibold text-rose">我要參加 »</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="/party" className="text-sm font-medium text-rose hover:underline">更多聯誼活動 »</a>
          </div>
        </section>

        {/* 會員活動心得 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">會員活動心得</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {memberTestimonials.map((t) => (
                <article key={t.name} className="rounded-2xl bg-white p-6 shadow-soft">
                  <Stars />
                  <p className="mt-4 text-sm leading-7 text-plum/80">{t.quote}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <p className="font-bold text-plum">{t.name}</p>
                      <p className="text-xs text-plum/60">{t.meta}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 戀愛數字密碼 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">SheSay 戀愛數字密碼諮詢</h2>
          <h3 className="mt-2 text-center text-lg font-semibold text-plum/70">從生日就知道妳的戀愛煩惱</h3>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* 左側：娜米照片 + 按鈕 */}
            <div>
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-[2rem] shadow-soft">
                <Image src={BASE10 + 'WechatIMG323拷貝2-scaled.jpg'} alt="戀愛小秘書娜米" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div className="mt-6 space-y-2 text-center text-sm leading-7 text-plum/75">
                <p>了解戀愛數字密碼 ⬇️</p>
                <p>妳可以⋯⋯</p>
                <p>預約娜米老師諮詢、</p>
                <p>戀愛數字計算機自己算、</p>
                <p>【戀愛會社】節目上免費解析</p>
              </div>
              <div className="mt-5 flex flex-col items-center gap-3">
                <a href="https://lin.ee/o4lCgwJ" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  馬上預約戀愛數字諮詢
                </a>
                <a href="https://lin.ee/o4lCgwJ" className="inline-flex rounded-full border border-plum/20 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose">
                  免費速測妳的戀愛數字
                </a>
                <a href="https://lin.ee/o4lCgwJ" className="inline-flex rounded-full border border-plum/20 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose">
                  參加戀愛諮詢節目
                </a>
              </div>
            </div>
            {/* 右側：文字 + 數字圖 */}
            <div>
              <div className="text-base leading-8 text-plum/75">
                <p>每個人出生時都帶有</p>
                <p className="text-xl font-bold text-plum">一組戀愛數字密碼</p>
                <p className="mt-4">娜米帶妳看出寫在妳生日密碼中關於戀愛的藍圖是什麼？</p>
                <p>為何現在單身？</p>
                <p>為什麼總是遇不到對的人？</p>
                <p>如何才能追到喜歡的對象？</p>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-plum">解讀生命密碼<br />展開戀愛藍圖</h3>
              <div className="relative mt-8 aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] shadow-soft">
                <Image src={BASE09 + '數字1-1024x1024.jpg'} alt="戀愛數字密碼" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </div>
          </div>
        </section>

        {/* 戀愛密碼諮詢見證 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">SheSay 戀愛密碼諮詢見證</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {consultTestimonials.map((t) => (
                <article key={t.name} className="rounded-2xl bg-white p-5 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Stars />
                      <p className="mt-2 font-bold text-plum">{t.name}</p>
                      <p className="text-xs text-plum/60">{t.meta}</p>
                    </div>
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="56px" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-plum/80">{t.quote}</p>
                  <div className="relative mt-4 w-full" style={{ aspectRatio: '2.7/1' }}>
                    <Image src={t.graphic} alt={`${t.name} 戀愛數字`} fill className="object-contain" sizes="33vw" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 戀愛產品 */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">SheSay 提升戀愛魅力值</h2>
            <p className="mt-4 text-center text-base text-plum/75">戀愛產品推薦</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 md:grid-cols-5">
              {products.map((item) => (
                <div key={item.name} className="overflow-hidden rounded-2xl bg-white shadow-soft">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image src={item.img} alt={`${item.name} - ${item.sub}`} fill className="object-cover" sizes="(max-width: 640px) 33vw, 20vw" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm font-semibold text-plum">{item.name}</p>
                    <p className="mt-1 text-xs text-plum/60">{item.sub}</p>
                  </div>
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
