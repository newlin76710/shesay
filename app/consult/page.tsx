import Image from 'next/image';
import { SiteShell } from '@/components/site-shell';

const BASE10 = '/images/original/shesay.com/wp-content/uploads/2023/10/';

const services = [
  {
    title: '揭開未來對象之謎',
    img: BASE10 + '節目-05-學會源起.jpg',
    desc: '透過戀愛數字精準的測算，揭示未來對象的出現時間、地點和場合，讓你不再錯過真愛。',
  },
  {
    title: '深度合盤解析',
    img: BASE10 + '節目-03-一對一戀愛諮詢.jpg',
    desc: '他是怎麼看我的，他到底有沒有喜歡我？透過全面合盤分析，洞悉彼此的契合度與發展性。',
  },
  {
    title: '提升戀愛吸引力',
    img: BASE10 + '節目-02-愛情疑難雜症.jpg',
    desc: '教你發揮個人優勢，建立強大的戀愛吸引力，了解對方的喜好，去設計互動小細節，輕鬆吸引對方。',
  },
  {
    title: '找到速配對象',
    img: BASE10 + '節目-04-解析前世今生.jpg',
    desc: '找對象，要先了解自己適合怎麼樣的人。人有緣分，卻沒有絕對的戀愛法則；準備好自己，運用吸引力法則，宇宙會帶來適合的人。',
  },
];

const steps = [
  {
    num: '01',
    title: '聯繫',
    content: (
      <div>
        <p className="text-sm leading-6 text-plum/70">加娜米的 LINE：<strong className="text-plum">@datenami</strong></p>
        <a
          href="https://lin.ee/UtgCipOq"
          className="mt-4 inline-flex rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          立刻諮詢
        </a>
      </div>
    ),
  },
  {
    num: '02',
    title: '提供資訊',
    content: (
      <div className="text-sm leading-7 text-plum/70">
        <p>私訊我「我想諮詢戀愛數字密碼」</p>
        <p className="mt-2">告訴我以下資訊：</p>
        <ol className="mt-1 list-decimal pl-5 space-y-1">
          <li>怎麼稱呼您</li>
          <li>出生年月日</li>
          <li>是否有對象（有請填對象出生年月日）</li>
          <li>說明目前遇到的議題，想諮詢什麼</li>
        </ol>
      </div>
    ),
  },
  {
    num: '03',
    title: '選擇時段',
    content: (
      <div>
        <p className="text-sm leading-6 text-plum/70">在娜米的預約時段中選擇您可以通話的時間</p>
        <a
          href="https://datenami.tw/dt09Jqbr7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full border border-plum/20 px-5 py-2.5 text-sm font-semibold text-plum transition hover:border-rose hover:text-rose"
        >
          選擇諮詢時段
        </a>
      </div>
    ),
  },
  {
    num: '04',
    title: '實際解析',
    content: (
      <div className="text-sm leading-7 text-plum/70">
        <p>透過與娜米老師一對一的對談、診斷、分析，將找出你在情感模式上的盲點，對症下藥給予最適合的建議。我們會用 LINE 通話一小時。</p>
        <p className="mt-2 font-semibold text-plum">解析流程：</p>
        <ol className="mt-1 list-decimal pl-5 space-y-1">
          <li>解析你生日的戀愛數字密碼所代表的意思、你的戀愛特質、優勢，這輩子要修的功課有哪些</li>
          <li>聊聊今天的議題，告訴我你目前遇到的狀況如何</li>
          <li>提問跟你互動，啟發覺察，找到目前議題的癥結點、卡點在哪裡</li>
          <li>討論可能性：突破點、方案，如何達到目標</li>
          <li>研擬行動：根據你的戀愛數字密碼給予建議、設定新的戀愛目標和行動</li>
        </ol>
      </div>
    ),
  },
  {
    num: '05',
    title: '戀愛數字密碼報告書',
    content: (
      <div className="text-sm leading-7 text-plum/70">
        <p>會談結束後，我們會整理出一份專屬於你的戀愛數字密碼報告書，報告書中包括：</p>
        <ol className="mt-2 list-decimal pl-5 space-y-1">
          <li>你與生俱來的特質、優勢、專長有哪些</li>
          <li>如何運用你靈魂帶來的能量去達成目標</li>
          <li>針對不足的地方如何修行、補修功課</li>
          <li>我們在會談中所發現的癥結點與自我覺察</li>
          <li>確定的具體目標與行動方案</li>
        </ol>
        <p className="mt-3 text-xs text-plum/50">P.S. 計算戀愛數字密碼需要提供自己的陽曆和農曆生日。若有對象，也可一併提供對方的生日。</p>
      </div>
    ),
  },
];

const testimonials = [
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

const worries = [
  '缺乏感情經驗，與異性相處時常受挫卻找不到原因',
  '面對情感問題，找不到可信任能夠提供可靠建議的討論對象',
  '不知道自己的優勢在哪裡，到底要如何吸引異性',
  '覺得自己無法在感情上做出好的抉擇，總是遇見不對的人',
];

export default function ConsultPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Banner */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: 300 }}>
          <Image
            src={BASE10 + 'SheSay-戀愛數字密碼-banner-1-2048x758.jpg'}
            alt="戀愛數字密碼諮詢"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-plum/50" />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-8">
            <h1 className="text-4xl font-bold text-white md:text-5xl">你正為愛煩惱嗎？</h1>
            <ul className="mt-8 space-y-3 text-left">
              {worries.map((w) => (
                <li key={w} className="flex items-start gap-3 text-white/90">
                  <span className="mt-1 shrink-0 text-rose">●</span>
                  <span className="text-base leading-7">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2 — 四大服務 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">
            戀愛數字密碼 全面透視未來戀情走向
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-plum">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-plum/70">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3 — 娜米介紹 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative aspect-[768/811] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src={BASE10 + 'RYN00597-新聞稿用-scaled-e1696996358120-768x811.jpg'}
                  alt="娜米老師"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-plum">娜米的戀愛數字密碼諮詢</h2>
                <p className="mt-5 text-base leading-8 text-plum/75">
                  擅長以戀愛數字密碼來解讀兩性愛情的各種疑難雜症。錄製線上教學課程影片，透過簡易影片學習，你可以應對各種求愛難關！提供一對一線上諮詢，透過生日密碼，探討專屬於你的戀愛藍圖是什麼，找到你單身、總是遇不到對象的原因，以及如何才能追到喜歡的對象。無論你遇到什麼戀愛難題，娜米會陪伴你瞭解現況、給予你在感情方向上最適合自己的建議。相信你能更加了解自己、更有勇氣與力量，找到屬於你的幸福愛情！
                </p>
                <a href="/about#nami" className="mt-6 inline-flex text-sm font-semibold text-rose hover:underline">
                  詳細師資介紹 →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — 諮詢流程 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-plum">諮詢流程</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {steps.map((s) => (
              <article key={s.num} className="rounded-3xl border border-white/70 bg-white p-6 shadow-soft">
                <p className="text-sm font-bold tracking-widest text-rose">{s.num}</p>
                <h3 className="mt-3 text-base font-bold text-plum">{s.title}</h3>
                <div className="mt-3">{s.content}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 5 — 見證 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum">SheSay 戀愛密碼諮詢見證</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <article key={t.name} className="overflow-hidden rounded-3xl bg-white shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={t.graphic} alt={`${t.name} 戀愛數字`} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                      </div>
                      <div>
                        <p className="font-bold text-plum">{t.name}</p>
                        <p className="text-xs text-plum/60">{t.meta}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-[#f5b971]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-plum/75">"{t.quote}"</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — 免費試算 */}
        <section className="mx-auto max-w-6xl px-6 pb-20 py-16 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] bg-sand p-8 text-center shadow-soft md:p-12">
            <h2 className="text-2xl font-bold text-plum">戀愛數字特質免費測</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-plum/75">
              輸入你的生日，立即免費試算專屬戀愛數字密碼。
            </p>
            <a
              href="https://www.rainbownumen.org/shesay/0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-rose px-10 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              立即試算
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
