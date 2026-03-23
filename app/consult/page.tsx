import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const worries = [
  '缺乏感情經驗，與異性相處時常受挫卻找不到原因',
  '面對情感問題，找不到可信任能夠提供可靠建議的討論對象',
  '不知道自己的優勢在哪裡，到底要如何吸引異性',
  '覺得自己無法在感情上做出好的抉擇，總是遇見不對的人',
];

const features = [
  {
    title: '揭開未來對象之謎',
    description: '透過戀愛數字精準測算，整理未來對象可能出現的時間、地點和場合。',
  },
  {
    title: '深度合盤解析',
    description: '看懂彼此的契合度與發展性，整理他是怎麼看妳、互動該怎麼走。',
  },
  {
    title: '提升戀愛吸引力',
    description: '從個人優勢、互動細節到對方喜好，建立更有吸引力的方式。',
  },
  {
    title: '找到速配對象',
    description: '先了解自己適合怎麼樣的人，再把擇偶與行動方向整理清楚。',
  },
];

const flow = [
  '加娜米的 LINE：@datenami',
  '私訊「我想諮詢戀愛數字密碼」',
  '安排一對一對談與診斷',
  '會談後整理出專屬戀愛數字密碼報告書',
];

const gallery = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/SheSay-戀愛數字密碼-banner-1-2048x758.jpg',
    alt: '戀愛數字密碼 banner',
    title: '戀愛數字密碼全面透視未來戀情走向',
    description: '把原本服務的主視覺和核心說法保留回來。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/戀愛會社-小秘書-娜米-1.jpg',
    alt: '娜米老師',
    title: '娜米老師',
    description: '提供一對一線上諮詢，透過生日密碼探討專屬於妳的戀愛藍圖。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/節目-03-一對一戀愛諮詢.jpg',
    alt: '一對一戀愛諮詢',
    title: '會談後專屬報告書',
    description: '整理出妳的特質、優勢、癥結點與後續行動方案。',
  },
];

export default function ConsultPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="戀愛數字密碼諮詢"
          title="你正為愛煩惱嗎？"
          description="缺乏感情經驗、總是遇見不對的人、找不到可信任的討論對象，SheSay 透過戀愛數字密碼與一對一諮詢，幫妳更清楚看懂自己與關係。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/SheSay-戀愛數字密碼-banner-1-2048x758.jpg"
          imageAlt="SheSay 戀愛數字密碼諮詢"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">妳是否也有這些困擾？</h2>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-plum/75 md:grid-cols-2">
              {worries.map((item) => (
                <li key={item}>● {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-plum">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-plum">諮詢流程</h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-plum/75">
                {flow.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-8 text-plum/75">
                會談中會先解析妳生日的戀愛數字密碼代表的意思、戀愛特質與優勢，再聊聊目前遇到的狀況，最後一起整理出突破點、目標與行動方案。
              </p>
            </div>
            <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
              <h2 className="text-2xl font-semibold">戀愛數字密碼報告書</h2>
              <p className="mt-5 text-base leading-8 text-white/80">
                會談結束後，會整理出一份專屬於妳的戀愛數字密碼報告書，包括與生俱來的特質、優勢、專長、修課方向，以及本次會談找到的癥結點與後續行動方案。
              </p>
              <p className="mt-5 text-sm leading-7 text-white/70">
                備註：計算戀愛數字密碼需要提供自己的陽曆和農曆生日。若有對象，也可一併提供對方的生日。
              </p>
              <a
                href="https://lin.ee/UtgCipOq"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:bg-sand"
              >
                立即預約諮詢
              </a>
            </div>
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
