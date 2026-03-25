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

const testimonials = [
  {
    name: 'Becky',
    meta: '位格9 流年+17/8',
    avatar: '/images/testimonials/becky.jpg',
    graphic: BASE10 + '五大階段數與流年拷貝.png',
    quoteColor: '#000000',
    quote: '感謝娜米，我對自己有了更深的認識，發現了潛在的優勢，也學會了更有效地與人溝通。現在的我在人際關係中更加融洽，感謝娜米老師帶給我這股正向的力量，不僅是學到自我探索，更是獲得了寶貴的人生觀念。遇見娜米老師真的是一場奇妙的緣分，解開了我多年的疑惑。',
  },
  {
    name: 'Airel',
    meta: '靈魂等級 1',
    avatar: '/images/testimonials/airel.jpg',
    graphic: BASE10 + '五大階段數與流年-2.png',
    quoteColor: '#AD5207',
    quote: '經歷娜米的諮詢，我的人生得到了翻天覆地的改變。我發現了自己內在的力量，學到了解決感情問題的方法，也更加自信地與他人交流。娜米老師的指導不僅讓我找到了合適的對象，還幫助我解決了多年的心結，讓我重拾人生的信心。',
  },
  {
    name: 'Lina',
    meta: '感情主修 6',
    avatar: '/images/testimonials/lina.jpg',
    graphic: BASE10 + '五大階段數與流年.png',
    quoteColor: '#AD5207',
    quote: '這真的是一場啟發之旅。娜米的戀愛數字密碼，不僅讓我更加了解自己，還讓我在感情中更加得心應手。透過她的諮詢，我找到了適合我的對象，解答我的戀愛困擾。感謝娜米老師的專業指導，讓我在感情和人生中都有了更多的收獲。',
  },
];

const worries = [
  '缺乏感情經驗，與異性相處時常受挫卻找不到原因',
  '面對情感問題，找不到可信任能夠提供可靠建議的討論對象',
  '不知道自己的優勢在哪裡，到底要如何吸引異性',
  '覺得自己無法在感情上做出好的抉擇，總是遇見不對的人',
];

function DividerHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-px flex-1 bg-[#DFDFE2]" />
      <h2 className="text-center text-2xl font-bold" style={{ color: '#4054B2', fontFamily: 'Roboto Slab, serif' }}>
        {children}
      </h2>
      <div className="h-px flex-1 bg-[#DFDFE2]" />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A7A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

export default function ConsultPage() {
  return (
    <SiteShell>
      <main className="bg-[#FBFBFB]">

        {/* Section 1 — Hero Banner (純圖片，無疊字) */}
        <div className="w-full">
          <Image
            src={BASE10 + 'SheSay-戀愛數字密碼-banner-1-2048x758.jpg'}
            alt="SheSay 戀愛數字密碼諮詢"
            width={1024}
            height={379}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Section 2 — 困擾 + 服務標題 */}
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
          <DividerHeading>你正為愛煩惱嗎？</DividerHeading>
          <ul className="mt-6 space-y-3">
            {worries.map((w) => (
              <li key={w} className="flex items-start gap-2 text-base leading-7 text-[#54595F]">
                <span className="mt-1 text-[#ff9a9e]">●</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <DividerHeading>戀愛數字密碼{'\n'}全面透視未來戀情走向</DividerHeading>
          </div>
        </div>

        {/* Section 3 — 四大服務卡片 (2欄，圓形圖) */}
        <div className="mx-auto max-w-4xl px-6 pb-10 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-[15px] border border-dashed border-[#ff9a9e] p-4 text-center transition hover:border-solid hover:border-[#f74da5]"
              >
                <div className="flex justify-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image src={s.img} alt={s.title} fill className="object-cover" sizes="96px" />
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#54595F]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#54595F]/80">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Section 4 — 娜米介紹 (照片左，文字右) */}
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="w-full lg:w-[40%]">
              <Image
                src={BASE10 + 'RYN00597-新聞稿用-scaled-e1696996358120-768x811.jpg'}
                alt="娜米老師"
                width={768}
                height={811}
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-[60%]">
              <DividerHeading>娜米的戀愛數字密碼諮詢</DividerHeading>
              <p className="mt-4 text-sm leading-8 text-[#54595F]">
                擅長以戀愛數字密碼來解讀兩性愛情的各種疑難雜症。錄製線上教學課程影片，透過簡易影片學習，你可以應對各種求愛難關！提供一對一線上諮詢，透過生日密碼，探討專屬於你的戀愛藍圖是什麼，找到你單身、總是遇不到對象的原因，以及如何才能追到喜歡的對象。無論你遇到什麼戀愛難題，娜米會陪伴你瞭解現況、給予你在感情方向上最適合自己的建議。相信你能更加了解自己、更有勇氣與力量，找到屬於你的幸福愛情！
              </p>
              <a
                href="/about#nami"
                className="mt-5 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold text-white transition"
                style={{ backgroundColor: '#f74da5' }}
              >
                詳細師資介紹
              </a>
            </div>
          </div>
        </div>

        {/* Section 5 — 諮詢流程 (垂直) */}
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
          <DividerHeading>諮詢流程</DividerHeading>

          <div className="mt-8 space-y-0">
            {/* Step 1 */}
            <div className="rounded-2xl border border-[#DFDFE2] bg-white p-6">
              <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: '#f74da5', fontFamily: 'Poppins, sans-serif' }}>01</p>
              <h3 className="mt-2 text-center text-lg font-bold uppercase tracking-wider text-[#090808]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                加娜米的 LINE：@datenami
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="https://lin.ee/UtgCipOq"
                  className="inline-flex rounded-full px-8 py-3 text-base font-semibold uppercase text-white transition hover:opacity-90"
                  style={{ backgroundColor: '#24B053', textShadow: '0 0 10px rgba(0,0,0,0.3)' }}
                >
                  立刻諮詢
                </a>
              </div>
            </div>
            <ArrowDown />

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#DFDFE2] bg-white p-6">
              <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: '#f74da5', fontFamily: 'Poppins, sans-serif' }}>02</p>
              <h3 className="mt-2 text-center text-lg font-bold uppercase tracking-wider text-[#090808]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                私訊「我想諮詢戀愛數字密碼」
              </h3>
              <div className="mt-4 text-sm leading-7 text-[#54595F]">
                <p>告訴我以下資訊：</p>
                <ol className="mt-2 list-decimal pl-6 space-y-1">
                  <li>怎麼稱呼您</li>
                  <li>出生年月日</li>
                  <li>是否有對象（有請填對象出生年月日）</li>
                  <li>說明目前遇到的議題，想諮詢什麼</li>
                </ol>
              </div>
            </div>
            <ArrowDown />

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#DFDFE2] bg-white p-6">
              <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: '#f74da5', fontFamily: 'Poppins, sans-serif' }}>03</p>
              <h3 className="mt-2 text-center text-lg font-bold uppercase tracking-wider text-[#090808]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                選擇時段
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#54595F]">在娜米的預約時段中選擇您可以通話的時間</p>
              <div className="mt-3 text-center">
                <a
                  href="https://datenami.tw/dt09Jqbr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border px-6 py-2.5 text-sm font-semibold transition"
                  style={{ borderColor: '#f74da5', color: '#f74da5' }}
                >
                  選擇諮詢時段
                </a>
              </div>
            </div>
            <ArrowDown />

            {/* Step 4 */}
            <div className="rounded-2xl border border-[#DFDFE2] bg-white p-6">
              <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: '#f74da5', fontFamily: 'Poppins, sans-serif' }}>04</p>
              <h3 className="mt-2 text-center text-lg font-bold uppercase tracking-wider text-[#090808]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                實際解析
              </h3>
              <div className="mt-4 text-sm leading-7 text-[#54595F]">
                <p>透過與娜米老師一對一的對談、診斷、分析，將找出你在情感模式上的盲點，對症下藥給予最適合的建議。我們會用 LINE 通話一小時，確認好方便通話的時間後，我會傳送通話邀請給你。</p>
                <p className="mt-3 font-semibold text-[#090808]">解析流程：</p>
                <ol className="mt-1 list-decimal pl-6 space-y-1">
                  <li>先解析你生日的戀愛數字密碼所代表的意思、你的戀愛特質、優勢，這輩子要修的功課有哪些</li>
                  <li>聊聊今天的議題，告訴我你目前遇到的狀況如何</li>
                  <li>我會提問跟你互動，啟發覺察，找到目前議題的癥結點、卡點在哪裡</li>
                  <li>討論可能性：突破點、方案，如何達到目標</li>
                  <li>研擬行動：根據你的戀愛數字密碼給予建議、設定新的戀愛目標和行動</li>
                </ol>
              </div>
            </div>
            <ArrowDown />

            {/* Step 5 */}
            <div className="rounded-2xl border border-[#DFDFE2] bg-white p-6">
              <p className="text-center text-sm font-bold uppercase tracking-widest" style={{ color: '#f74da5', fontFamily: 'Poppins, sans-serif' }}>05</p>
              <h3 className="mt-2 text-center text-lg font-bold uppercase tracking-wider text-[#090808]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                戀愛數字密碼報告書
              </h3>
              <div className="mt-4 text-sm leading-7 text-[#54595F]">
                <p>會談結束後，我們會整理出一份專屬於你的戀愛數字密碼報告書，報告書中包括：</p>
                <ol className="mt-2 list-decimal pl-6 space-y-1">
                  <li>你與生俱來的特質、優勢、專長有哪些</li>
                  <li>如何運用你靈魂帶來的能量去達成目標</li>
                  <li>針對不足的地方如何修行、補修功課</li>
                  <li>我們在會談中所發現的癥結點與自我覺察</li>
                  <li>確定的具體目標與行動方案</li>
                </ol>
                <p className="mt-3 text-xs text-[#54595F]/60">P.S. 計算戀愛數字密碼需要提供自己的陽曆和農曆生日。若有對象，也可一併提供對方的生日。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 — 見證 */}
        <div className="px-6 py-16 sm:px-8" style={{ padding: '5%' }}>
          <div className="mx-auto max-w-6xl">
            <DividerHeading>SheSay 戀愛密碼諮詢見證</DividerHeading>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <article key={t.name} className="rounded-2xl bg-white p-5" style={{ boxShadow: '0 4px 18px rgba(34,56,101,0.07)' }}>
                  {/* Top: 星星 + 姓名 + 頭像 */}
                  <div className="flex items-start justify-between gap-3" style={{ minHeight: 60 }}>
                    <div className="flex-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="#f5b971"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-[#54595F]">{t.name}</h3>
                      <p className="text-xs text-[#54595F]/70">{t.meta}</p>
                    </div>
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="56px" />
                    </div>
                  </div>
                  {/* Quote */}
                  <p className="mt-4 text-sm leading-7" style={{ color: t.quoteColor }}>
                    {t.quote}
                  </p>
                  {/* Graphic */}
                  <div className="relative mt-4 w-full" style={{ aspectRatio: '2.7/1' }}>
                    <Image src={t.graphic} alt={`${t.name} 戀愛數字`} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Section 7 — 免費試算 */}
        <div className="pb-16 text-center">
          <DividerHeading>戀愛數字特質免費測</DividerHeading>
          <div className="mt-6">
            <a
              href="https://www.rainbownumen.org/shesay/0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full px-10 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: '#f74da5' }}
            >
              立即試算
            </a>
          </div>
        </div>

      </main>
    </SiteShell>
  );
}
