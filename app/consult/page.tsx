import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';
import { TestimonialCard } from '@/components/testimonial-card';

const worries = [
  '缺乏感情經驗，與異性相處時常受挫卻找不到原因',
  '面對情感問題，找不到可信任能夠提供可靠建議的討論對象',
  '不知道自己的優勢在哪裡，到底要如何吸引異性',
  '覺得自己無法在感情上做出好的抉擇，總是遇見不對的人',
];

const features = [
  {
    title: '揭開未來對象之謎',
    description: '透過戀愛數字精準的測算，揭示未來對象的出現時間、地點和場合，讓你不再錯過真愛。',
  },
  {
    title: '深度合盤解析',
    description: '他是怎麼看我的，他到底有沒有喜歡我？透過全面合盤分析，洞悉彼此的契合度與發展性。',
  },
  {
    title: '提升戀愛吸引力',
    description: '教你發揮個人優勢，建立強大的戀愛吸引力，了解對方的喜好，設計互動小細節，輕鬆吸引對方。',
  },
  {
    title: '找到速配對象',
    description: '找對象要先了解自己適合怎麼樣的人。準備好自己，運用吸引力法則，宇宙會帶來適合的人。',
  },
];

const flow = [
  {
    step: '01',
    title: '聯繫',
    desc: '加入 LINE：@datenami，私訊「我想諮詢戀愛數字密碼」，戀愛小秘書娜米將盡快回覆。',
  },
  {
    step: '02',
    title: '提供資訊',
    desc: '提供姓名、陽曆農曆生日、感情狀況，若有對象也可一併提供對方的生日，讓諮詢更精準。',
  },
  {
    step: '03',
    title: '選擇時段',
    desc: '前往預約系統選擇方便的諮詢時段，確認後會收到提醒通知。',
  },
  {
    step: '04',
    title: '實際解析',
    desc: '一小時 LINE 視訊通話：解析生日密碼 → 討論當前困境 → 深度探索 → 研究解決方案 → 制定行動計畫。',
  },
  {
    step: '05',
    title: '專屬報告書',
    desc: '會談後整理出戀愛數字密碼報告書，包含特質優勢、靈魂能量、待加強面向、自我覺察、後續行動方案。',
  },
];

const testimonials = [
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

export default function ConsultPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="戀愛數字密碼諮詢"
          title="你正為愛煩惱嗎？"
          description="會算命的紅娘——戀愛小秘書娜米，擷取彩虹數字中的戀愛訊息，透過生日就能解析專屬於你的戀愛解方。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/SheSay-戀愛數字密碼-banner-1-2048x758.jpg"
          imageAlt="SheSay 戀愛數字密碼諮詢"
        />

        {/* 次要導覽 */}
        <div className="border-b border-plum/10 bg-white">
          <div className="mx-auto flex max-w-6xl gap-6 px-6 py-3 sm:px-8 lg:px-10">
            <a href="https://lin.ee/UtgCipOq" className="text-sm font-medium text-plum/70 transition hover:text-rose">一對一諮詢</a>
            <a href="https://lin.ee/o4lCgwJ" className="text-sm font-medium text-plum/70 transition hover:text-rose">戀愛會社節目</a>
          </div>
        </div>

        {/* 困擾 */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">你正為愛煩惱嗎？</h2>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-plum/75 md:grid-cols-2">
              {worries.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-rose">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 四大服務 */}
        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-plum">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 娜米介紹 */}
        <section className="bg-white/70 py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
              <h2 className="text-2xl font-semibold">戀愛數字密碼解讀 × 兩性愛情疑難雜症</h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                娜米老師提供線上教學課程影片與一對一線上諮詢服務。相信你能更加了解自己、更有勇氣與力量，找到屬於你的幸福愛情。
              </p>
              <a href="/about#nami" className="mt-4 inline-block text-sm text-white/60 hover:text-white">
                了解娜米老師的背景 →
              </a>
            </div>
          </div>
        </section>

        {/* 5步驟流程 */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-plum">諮詢流程</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {flow.map((item) => (
              <article key={item.step} className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold tracking-widest text-rose">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-plum">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-plum/70">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-plum">立即預約</h3>
              <p className="mt-4 text-base leading-7 text-plum/75">
                加娜米的 LINE：<strong>@datenami</strong><br />
                私訊「我想諮詢戀愛數字密碼」即可開始。
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a href="https://lin.ee/UtgCipOq" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  立刻諮詢
                </a>
                <a href="https://datenami.tw/dt09Jqbr7" className="inline-flex rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose">
                  選擇諮詢時段
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft">
              <h3 className="text-xl font-semibold">戀愛數字密碼報告書</h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                會談結束後，整理出一份專屬報告書，包含：
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• 與生俱來的特質、優勢與專長</li>
                <li>• 靈魂能量等級解析</li>
                <li>• 待加強的修課方向</li>
                <li>• 本次會談找到的癥結點</li>
                <li>• 後續行動方案</li>
              </ul>
              <p className="mt-4 text-xs text-white/50">
                備註：計算戀愛數字密碼需提供陽曆和農曆生日。若有對象，也可一併提供對方生日。
              </p>
            </div>
          </div>
        </section>

        {/* 見證 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-plum">戀愛密碼諮詢見證</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* 免費速測 */}
        <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] bg-sand p-8 text-center shadow-soft md:p-12">
            <h2 className="text-2xl font-semibold text-plum">想先免費試算看看？</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-plum/75">
              使用免費戀愛數字計算機，先了解自己的基本戀愛特質。
            </p>
            <a
              href="https://www.rainbownumen.org/shesay/0"
              className="mt-6 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              立即試算
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
