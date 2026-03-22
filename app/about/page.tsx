import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SectionTitle } from '@/components/section-title';
import { SiteShell } from '@/components/site-shell';

const values = [
  {
    title: '更理解女性處境',
    description: '從真實生活節奏、關係焦慮到擇偶期待，SheSay 用更貼近女性的角度整理戀愛這件事。',
  },
  {
    title: '讓認識回到真實互動',
    description: '我們相信，真正的感受往往發生在互動裡，不只是在聊天室視窗。',
  },
  {
    title: '戀愛成長不只是一場配對',
    description: '比起把妳交給運氣，我們更想幫妳看懂自己、看懂關係。',
  },
];

const gallery = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/RYN00597-新聞稿用-scaled-e1696996358120-1938x2048.jpg',
    alt: 'SheSay 品牌人物照片',
    title: '品牌人物與內容主軸',
    description: '把品牌個性、女性視角與可信任感一起建立起來。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg',
    alt: 'SheSay 活動與品牌照片',
    title: '從內容到活動的延伸',
    description: '不是只有單一服務，而是一整套更有方向感的陪伴。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/logo.png',
    alt: 'SheSay 品牌標誌',
    title: 'SheSay 品牌資產',
    description: '舊站素材可以延續使用，再逐步整理成更統一的視覺。',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="About SheSay"
          title="SheSay 想做的不只是聯誼，而是更舒服的認識方式"
          description="我們把聯誼活動、戀愛諮詢與女性內容放在同一個平台，讓單身不只是等待，而是更有方向地往前。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg"
          imageAlt="SheSay 關於我們主視覺"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Our view"
                title="比起快速配對，我們更在意妳是否真的適合"
                description="SheSay 相信，一段關係的開始不只靠運氣，也需要更好的場域、更好的節奏與更好的理解。"
              />
            </div>
            <div className="rounded-[2rem] bg-sand p-8 shadow-soft">
              <p className="text-base leading-8 text-plum/80">
                我們希望把「找對象」這件事，從壓力、焦慮、反覆失望，慢慢拉回到比較自然的狀態。
                妳可以透過活動認識新朋友，也可以透過諮詢重新整理自己的感情模式與期待。
                SheSay 想做的是一個更溫柔、但也更有方向感的入口。
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h2 className="text-xl font-semibold text-plum">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
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
