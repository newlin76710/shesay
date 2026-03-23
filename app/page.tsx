import Image from 'next/image';
import { CtaBanner } from '@/components/cta-banner';
import { ImageCard } from '@/components/image-card';
import { SiteShell } from '@/components/site-shell';
import { TestimonialCard } from '@/components/testimonial-card';

const steps = [
  {
    title: '加入官方 LINE',
    description: '加入 SHESAY 的官方 LINE，LINE ID：@shesay。',
  },
  {
    title: '填寫個人資料',
    description: '依照流程填寫個人資料，等候戀愛小秘書進行資料驗證與配對數據分析。',
  },
  {
    title: '參加單身聯誼活動',
    description: '資料驗證完成後開始安排約會，參加各種有趣的單身聯誼活動。',
  },
];

const eventCards = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg',
    alt: '浪漫活動',
    title: '浪漫石門放風箏',
    description: '遠離繁囂，讓參與者在自然環境中放鬆相識，也替自己創造新的可能。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/20231014手作蘋果塔-768x475-1.jpeg',
    alt: '手作活動',
    title: '手作交流活動',
    description: '在一起做事、一起聊天的過程裡，讓認識更自然發生。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/DSC00020_副本.jpeg',
    alt: '活動現場',
    title: '多元主題派對',
    description: '讓社交回到真實互動，而不是只停在螢幕上的配對。',
  },
];

const testimonials = [
  {
    quote: '我當時正好在找一個可以改變人生的機會，參加娜米主辦的聯誼活動後，真的遇見了現在的對象。',
    name: '盧小姐',
    meta: '27歲｜護理師',
  },
  {
    quote: '我曾在尋找愛情的路上徬徨，參加活動後反而更知道自己適合什麼樣的人。',
    name: '趙小姐',
    meta: '30歲｜芳療老師',
  },
  {
    quote: '每一場活動都讓我們有機會在輕鬆愉快的氛圍中相識，也讓我真的找到了一生的伴侶。',
    name: '廖小姐',
    meta: '26歲｜甜點店製作助手',
  },
];

const consultTestimonials = [
  {
    quote: '我對自己有了更深的認識，學會更有效地與人溝通，也解開了多年的疑惑。',
    name: 'Becky',
    meta: '位格9｜流年 +17/8',
  },
  {
    quote: '透過諮詢，我發現了自己內在的力量，也更知道如何處理感情問題。',
    name: 'Airel',
    meta: '靈魂等級 1',
  },
  {
    quote: '娜米的戀愛數字密碼讓我更了解自己，也讓我在感情中更得心應手。',
    name: 'Lina',
    meta: '感情主修 6',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight text-plum md:text-6xl md:leading-[1.05]">
                SheSay 幫妳安排心動約會
              </h1>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-lg font-semibold text-plum">高度客製化服務</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-lg font-semibold text-plum">大數據配對分析</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <p className="text-lg font-semibold text-plum">豐富的單身聯誼活動</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://lin.ee/UtgCipOq"
                  className="rounded-full bg-rose px-7 py-4 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  加入官方 LINE
                </a>
                <a
                  href="/events"
                  className="rounded-full border border-plum/15 bg-white px-7 py-4 text-center text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
                >
                  查看聯誼活動
                </a>
              </div>
            </div>
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/original/shesay.com/wp-content/uploads/2023/11/banner-1024x683-1.jpeg"
                alt="SheSay 幫妳安排心動約會"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">只要 3 步驟，輕鬆認識異性</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-3xl bg-white p-8 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-plum">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-plum/75">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/original/shesay.com/wp-content/uploads/2023/10/戀愛會社-小秘書-娜米-1.jpg"
                alt="現在就預約跟娜米諮詢吧"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">Consulting</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-plum md:text-4xl">現在就預約跟娜米諮詢吧</h2>
              <p className="mt-5 text-base leading-8 text-plum/75">
                從單身原因、互動困擾到戀愛方向，透過一對一諮詢、戀愛數字密碼與診斷分析，幫妳看懂自己，整理出更清楚的下一步。
              </p>
              <a
                href="/consult"
                className="mt-8 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                了解戀愛諮詢
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 懂妳會愛的單身聯誼</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-plum/75">
              多元有趣單身派對活動，豐富妳的社交生活，讓妳快速、精準找到適合的對象。
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {eventCards.map((item) => (
              <ImageCard key={item.src} {...item} />
            ))}
          </div>
        </section>

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

        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">Girls talk</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 女生的事女生說</h2>
              <p className="mt-5 text-base leading-8 text-plum/75">好看、好吃、好玩，訊息不漏接。從女生話題、生活靈感到戀愛內容，一起陪妳把生活過得更有魅力。</p>
              <a
                href="/about"
                className="mt-8 inline-flex rounded-full border border-plum/15 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:text-rose"
              >
                看更多內容
              </a>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg"
                alt="SheSay 女生的事女生說"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/images/original/shesay.com/wp-content/uploads/2023/10/SheSay-戀愛數字密碼-banner-1-2048x758.jpg"
                  alt="SheSay 戀愛數字密碼諮詢"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">Love code</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-plum md:text-4xl">SheSay 戀愛數字密碼諮詢</h2>
                <p className="mt-5 whitespace-pre-line text-base leading-8 text-plum/75">
                  從生日就知道妳的戀愛煩惱。
                  了解戀愛數字密碼 ⬇️
                  妳可以⋯⋯
                  預約娜米老師諮詢、
                  戀愛數字計算機自己算、
                  【戀愛會社】節目上免費解析。
                </p>
                <a
                  href="/consult"
                  className="mt-8 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  了解戀愛數字密碼
                </a>
              </div>
            </div>
          </div>
        </section>

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

        <div id="cta">
          <CtaBanner />
        </div>
      </main>
    </SiteShell>
  );
}
