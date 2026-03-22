import Image from 'next/image';
import { CtaBanner } from '@/components/cta-banner';
import { SectionTitle } from '@/components/section-title';
import { SiteShell } from '@/components/site-shell';
import { TestimonialCard } from '@/components/testimonial-card';

const benefits = [
  {
    title: '更懂女性需求的配對方式',
    description: '不是盲目配對，而是從條件、互動感受與關係期待出發，幫助妳更有效率地認識適合的對象。',
  },
  {
    title: '真實互動，比滑手機更自然',
    description: '透過實體活動與輕鬆的社交情境，降低尷尬與無效聊天，讓認識更有溫度。',
  },
  {
    title: '從認識到關係經營都有人陪妳',
    description: '不只辦活動，也提供戀愛諮詢與方向整理，幫妳少走冤枉路。',
  },
];

const steps = [
  {
    number: '01',
    title: '加入官方 LINE',
    description: '從官方 LINE 開始，快速了解服務內容、活動資訊與加入方式。',
  },
  {
    number: '02',
    title: '填寫資料與驗證',
    description: '完成基本資料，讓 SheSay 更了解妳的需求、個性與期待。',
  },
  {
    number: '03',
    title: '參加活動或預約諮詢',
    description: '依照妳的狀況安排適合的聯誼活動，或從戀愛諮詢開始整理方向。',
  },
];

const testimonials = [
  {
    quote: '活動氣氛很自然，不會有壓力，真的比較容易認識適合的人。',
    name: '盧小姐',
    meta: '27歲｜護理師',
  },
  {
    quote: '原本對感情很迷惘，參加後反而更知道自己適合什麼樣的人。',
    name: '趙小姐',
    meta: '30歲｜芳療老師',
  },
  {
    quote: '不只是聯誼，更像有人真正陪妳整理感情方向。',
    name: '廖小姐',
    meta: '26歲｜甜點店製作助手',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl items-center px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-rose/10 px-4 py-2 text-sm font-semibold text-rose">
                為單身女性打造的聯誼與戀愛成長平台
              </span>
              <h1 className="mt-7 text-5xl font-semibold tracking-tight text-plum md:text-6xl md:leading-[1.05]">
                SheSay 幫妳認識更適合的對象
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-plum/75 md:text-xl">
                從聯誼活動、配對分析到戀愛諮詢，SheSay 陪妳更自然地遇見對的人，也更懂自己真正想要的關係。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://line.me/"
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
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold text-plum">1 對 1</p>
                  <p className="mt-2 text-sm leading-6 text-plum/65">戀愛諮詢與方向整理</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-plum">實體活動</p>
                  <p className="mt-2 text-sm leading-6 text-plum/65">輕鬆認識，不只是線上聊天</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-plum">女性視角</p>
                  <p className="mt-2 text-sm leading-6 text-plum/65">更理解需求，也更貼近妳的處境</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/images/original/shesay.com/wp-content/uploads/2023/11/banner-1024x683-1.jpeg"
                  alt="SheSay 首頁主視覺"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/45 via-plum/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">A softer way to connect</p>
                  <p className="mt-3 max-w-md text-2xl font-semibold leading-snug">不是盲目配對，而是幫妳更靠近真正適合的人。</p>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">What SheSay offers</p>
                <ul className="mt-6 space-y-4 text-base leading-7 text-plum/80">
                  <li>• 單身聯誼活動：在自然情境中認識新朋友</li>
                  <li>• 戀愛諮詢：看懂自己的感情模式與選擇</li>
                  <li>• 女性內容：戀愛、生活、魅力成長一次整合</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionTitle
            eyebrow="Why SheSay"
            title="比起制式配對，SheSay 更在意相處感與真實互動"
            description="把妳的需求、生活狀態與關係期待放進考量，讓每一次認識都更有意義。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-plum">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <SectionTitle
              eyebrow="3 steps"
              title="3 步驟，開始妳的認識旅程"
              description="流程保持簡單，妳不用自己硬撐著摸索。"
              center
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="rounded-3xl bg-blush p-8 shadow-soft">
                  <p className="text-sm font-semibold tracking-[0.25em] text-rose">{step.number}</p>
                  <h3 className="mt-4 text-xl font-semibold text-plum">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-plum/75">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
          <article className="overflow-hidden rounded-[2rem] bg-plum text-white shadow-soft">
            <div className="relative min-h-[260px]">
              <Image
                src="/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg"
                alt="SheSay 活動照片"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Events</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">真實見面，才有真正的心動</h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                SheSay 提供多元單身聯誼活動，讓妳在自然、輕鬆的情境中認識新朋友。少一點制式流程，多一點真正的互動。
              </p>
              <a
                href="/events"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:bg-sand"
              >
                查看近期活動
              </a>
            </div>
          </article>

          <article id="consult" className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-soft">
            <div className="relative min-h-[260px]">
              <Image
                src="/images/original/shesay.com/wp-content/uploads/2023/10/戀愛會社-小秘書-娜米-1.jpg"
                alt="SheSay 戀愛諮詢照片"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">Consulting</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-plum">戀愛卡關時，讓懂妳的人陪妳看清楚</h2>
              <p className="mt-5 text-base leading-8 text-plum/75">
                不只是認識新對象。當妳在關係裡感到迷惘、總遇到相似的問題，SheSay 的戀愛諮詢能幫妳整理感情模式、擇偶方向與下一步。
              </p>
              <a
                href="/consult"
                className="mt-8 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                了解戀愛諮詢
              </a>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionTitle
            eyebrow="Testimonials"
            title="她們在 SheSay 找到新的可能"
            description="首頁只放最短、最有力的感受，先讓人願意相信，再決定往下看。"
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <SectionTitle
              eyebrow="Content"
              title="給女生的戀愛與生活靈感"
              description="把女生話題、生活靈感與戀愛成長內容整合在一起，讓 SheSay 不只是聯誼平台，也是一個陪妳變得更有魅力的地方。"
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/about" className="rounded-full border border-plum/15 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:text-rose">
                了解品牌理念
              </a>
              <a href="/consult" className="rounded-full border border-plum/15 bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:text-rose">
                看戀愛諮詢
              </a>
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
