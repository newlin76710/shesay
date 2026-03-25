import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const hosts = [
  {
    name: '戀愛小秘書 娜米',
    role: '面試官',
    desc: '兩性議題分析專家、留美MBA企管碩士、交友聊天室第二代、彩虹數字諮詢師、花精療癒師。善於觀察，對於感性的情緒、感受很敏銳，具有理性的管理、創新、數據分析能力，喜歡分享生活中關於戀愛的小發現！',
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/戀愛會社-小秘書-娜米-1.jpg',
  },
  {
    name: '戀愛社長 謝綸',
    role: '社長',
    desc: '戀愛主命數1，有明確目標和想法，感情靈魂等級7級（最高等級博士畢業生）但在戀愛上卻卡在：需要別人的欣賞、認同、沒自信，甚至覺得「怎麼可能會有女生喜歡我」',
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/節目-02-愛情疑難雜症.jpg',
  },
  {
    name: '戀愛社畜 予琳',
    role: '社畜',
    desc: '感情主修1，很專情、重視直覺、有時候也喜歡自己一人的感覺。感情靈魂等級5級（等級類似大學生）想要被對方尊重，如果有受到尊重就會充滿熱忱，否則根本不想理對方～',
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/節目-03-一對一戀愛諮詢.jpg',
  },
];

const features = [
  {
    title: '愛情疑難雜症',
    desc: '幫你應對各種愛情問題，例如：面對心儀的女生該如何開口邀約、遇到渣男該怎麼辦、我喜歡的對象好像有別的喜歡的人了.....等。',
  },
  {
    title: '彼此戀愛特質',
    desc: '解析在肢體動作、言語、思想上透露出的秘密，回答你心中的疑問：「他/她到底有沒有愛你呢？」，「愛是如何表達的？」，「在感情上的需求分別是什麼？」',
  },
  {
    title: '前世今生關係',
    desc: '每個數字都代表著不同的戀愛密碼，透過彩虹數字解析，讓你了解彼此之間的互動方式，是療癒關係？還是曖昧關係？或者是其他形式的關係？',
  },
];

const episodes = [
  { title: '今天是我們的戀愛會社', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-01-今天是我們的戀愛會社.jpg' },
  { title: '想知道自己喜歡哪一型的女生', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-02-想知道自己喜歡哪一型的女生.jpg' },
  { title: '主要是沒自信的問題', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-03-主要是沒自信的問題.jpg' },
  { title: '生日的彩虹數字', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-04-生日的彩虹數字.jpg' },
  { title: '愛情的靈魂等級很高', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-05愛情的靈魂等級很高.jpg' },
  { title: '身心靈三年', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-06-身心靈三年.jpg' },
  { title: '今年走到位格一', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-07-今年走到位格一.jpg' },
  { title: '第一年轉角年', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-08-第一年轉角年.jpg' },
  { title: '流年剛好在突破點', src: '/images/original/shesay.com/wp-content/uploads/2023/10/ep2-09-流年剛好在突破點.jpg' },
];

const codeHelps = [
  { num: '1', title: '展開戀愛藍圖', desc: '每個人出生時都帶有一組戀愛數字密碼，我會帶你看出寫在你生日密碼中，關於戀愛的藍圖是什麼？' },
  { num: '2', title: '戀愛吸引秘訣', desc: '怎樣才能吸引到對方，怎樣才能讓我喜歡的人喜歡我？和你一起探索、了解對方的喜好，去設計互動小細節。' },
  { num: '3', title: '幸福經營方法', desc: '戀愛成功三要素，從你的生命密碼中，看到目前的人生課題，如何提升自己來變得更幸福！' },
  { num: '4', title: '找到速配對象', desc: '人有緣分，沒有絕對的戀愛法則；準備好自己，放心放手不執著，運用吸引力法則，宇宙會帶來適合的人。' },
  { num: '5', title: '創造幸福人生', desc: '不管遇到什麼難題，在進行完溫暖的心靈交流後，相信你能更加了解自己，並且更有勇氣與力量，去面對生命的課題。' },
];

const worries = [
  '缺乏感情經驗，與異性相處時常受挫卻找不到原因',
  '面對情感問題，找不到可信任能夠提供可靠建議的討論對象',
  '不知道自己的優勢在哪裡，到底要如何吸引異性',
  '覺得自己無法在感情上做出好的抉擇，總是遇見不對的人',
];

export default function PodcastPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="戀愛會社"
          title="從生日就看出妳的戀愛關卡"
          description="《戀愛會社》專為在愛情路上遇到困難的朋友們設計。透過彩虹數字解析，幫你了解自己的戀愛特質，找到屬於你的幸福愛情。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/ep2-04-生日的彩虹數字.jpg"
          imageAlt="戀愛會社節目"
        />

        {/* 困擾 */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-semibold text-plum">從生日就看出妳的戀愛關卡</h2>
            <h3 className="mt-2 text-base font-medium text-plum/70">你有以下戀愛困擾嗎？</h3>
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

        {/* 主持人 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum">來戀愛會社面試吧！</h2>
              <p className="mt-2 text-base text-plum/70">面試官介紹</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {hosts.map((host) => (
                <article key={host.name} className="overflow-hidden rounded-3xl bg-white shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image src={host.src} alt={host.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-rose">{host.role}</p>
                    <h3 className="mt-2 text-lg font-semibold text-plum">{host.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-plum/70">{host.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 節目特色 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">戀愛會社－射中你理想中的愛情</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-plum">{f.title}</h3>
                <p className="mt-4 text-base leading-7 text-plum/75">{f.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://datenami.tw/dt09keayb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              我要參加戀愛會社節目
            </a>
          </div>
        </section>

        {/* 社員招募 / 集數 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum">誠徵社員戀愛煩惱</h2>
              <p className="mt-2 text-base text-plum/70">從你的生日我們發現</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {episodes.map((ep) => (
                <a
                  key={ep.title}
                  href="https://datenami.tw/dt09keayb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl bg-white shadow-soft"
                >
                  <div className="relative aspect-video">
                    <Image src={ep.src} alt={ep.title} fill className="object-cover transition group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 flex items-center justify-center bg-plum/20 opacity-0 transition group-hover:opacity-100">
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-plum">▶ 收聽</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-plum">{ep.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 戀愛數字密碼五大幫助 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">戀愛數字密碼 幫助這麼大</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {codeHelps.map((item) => (
              <article key={item.num} className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-2xl font-bold text-rose">{item.num}</p>
                <h3 className="mt-3 text-base font-semibold text-plum">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-plum/70">{item.desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-plum/50">
            P.S. 計算戀愛數字密碼需要提供自己的陽曆和農曆生日。若有對象，也可一併提供對方的生日。
          </p>
        </section>

        {/* 報名表單 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-plum">我要參加戀愛會社節目</h2>
              <p className="mt-4 text-base leading-7 text-plum/75">
                歡迎分享戀愛經驗中的任何疑難雜症，無論是約會、搭訕、把妹、穿搭…等問題，都可以匿名留言給我～記得附上你的生日密碼，戀愛小秘書、戀愛社長及戀愛社畜將在節目中為各位解惑！
              </p>
            </div>
            <form
              action="https://datenami.tw/dt09keayb"
              method="get"
              target="_blank"
              className="mt-10 space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-plum">怎麼稱呼您？ <span className="text-rose">*</span></label>
                <p className="mb-1 text-xs text-plum/50">留言將在節目中被公開討論，請盡量使用化名</p>
                <input type="text" required className="mt-1 w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-sm text-plum placeholder-plum/30 outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/10" placeholder="化名 / 暱稱" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-plum">您的性別？ <span className="text-rose">*</span></label>
                <div className="mt-2 flex gap-4">
                  {['女', '男', '其他'].map((g) => (
                    <label key={g} className="flex items-center gap-2 text-sm text-plum/80">
                      <input type="radio" name="gender" value={g} className="accent-rose" /> {g}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-plum">出生年、月、日、時、分 <span className="text-rose">*</span></label>
                <p className="mb-1 text-xs text-plum/50">時、分若無可只填生日</p>
                <input type="text" required className="mt-1 w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-sm text-plum placeholder-plum/30 outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/10" placeholder="例：1995/08/15" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-plum">我想問娜米的問題 <span className="text-rose">*</span></label>
                <textarea required rows={5} className="mt-1 w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-sm text-plum placeholder-plum/30 outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/10" placeholder="請描述你的戀愛困擾..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-plum">方便的話請留下您的 Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-sm text-plum placeholder-plum/30 outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/10" placeholder="讓戀愛會社能聯繫您" />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-rose py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                已填寫完整，提交給戀愛會社
              </button>
            </form>
          </div>
        </section>

        {/* 工具包 */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-8 lg:px-10">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-plum">戀愛數字密碼工具包</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <h3 className="text-lg font-semibold text-plum">收聽戀愛會社 Podcast</h3>
              <p className="mt-3 text-sm leading-6 text-plum/70">訂閱節目，每集免費收聽戀愛數字密碼解析。</p>
              <a
                href="https://datenami.tw/dt09keayb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                前往收聽
              </a>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <h3 className="text-lg font-semibold text-plum">免費測戀愛數字密碼</h3>
              <p className="mt-3 text-sm leading-6 text-plum/70">輸入生日，立即試算你的專屬戀愛數字密碼。</p>
              <a
                href="https://www.rainbownumen.org/shesay/0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
              >
                立即試算
              </a>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <h3 className="text-lg font-semibold text-plum">預約一對一諮詢</h3>
              <p className="mt-3 text-sm leading-6 text-plum/70">深入了解個人戀愛數字密碼，與娜米老師一對一解析。</p>
              <a
                href="/consult"
                className="mt-6 inline-flex rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
              >
                了解戀愛數字密碼
              </a>
            </div>
          </div>

          {/* 節目說明 */}
          <div className="mt-10 rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
            <h3 className="text-2xl font-semibold">馬上觀看戀愛會社</h3>
            <p className="mt-4 text-base leading-8 text-white/80">
              《戀愛會社》這個節目專門為那些在愛情路上遇到困難的朋友們設計，無論是缺乏感情經驗、不知道如何吸引異性，還是總是遇見不對的人，這裡都有解答！
            </p>
            <p className="mt-4 text-base leading-8 text-white/80">
              節目由戀愛社長謝綸、戀愛社畜予琳，以及會算命的紅娘——戀愛小秘書娜米共同主持。他們將透過網友提問和互動，幫助大家應對各種愛情疑難雜症。不論是如何邀約心儀的對象、如何應對渣男，還是如何處理喜歡的人喜歡別人的情況，節目都會給出建議和解答。
            </p>
            <p className="mt-4 text-base leading-8 text-white/80">
              更有趣的是，節目還會用彩虹數字來解構愛情，每個數字都代表著不同的戀愛密碼。透過這些數字，你可以更了解彼此之間的互動方式，是療癒關係、曖昧關係，還是其他形式的關係。《戀愛會社》不僅僅是一個 Podcast 節目，它是一個幫助你瞭解自己、增強愛情勇氣和力量的平台。
            </p>
            <a
              href="https://datenami.tw/dt09keayb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:bg-sand"
            >
              馬上收看節目
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
