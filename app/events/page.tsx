import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const partyPosts = [
  {
    title: '溯溪聯誼活動',
    description:
      '想要馬上熟，又不想曬太陽？想要刺激，又不想要危險？想要歡樂，又不想要勞累？戀愛小秘書娜米知道大家的心意，決定辦一場精彩刺激，但又消暑的好玩遊戲，就是融合了謎題解謎和團隊合作的密室逃脫遊戲，讓大家在挑戰中感受到歡樂和成就感，一起燒腦一起攜手合作，共同創造難忘的回憶。',
    href: 'https://shesay.com/blog/83518/',
  },
  {
    title: '天生絕配｜桌遊對對碰',
    description: '在充滿歡快氣氛的桌遊活動中，默契十足的你我，讓感情',
    href: 'https://shesay.com/blog/84948/',
  },
  {
    title: '心心相印｜情牽護理師',
    description: '護理師是男生們很是喜歡的另一半的職業，原因是她們有',
    href: 'https://shesay.com/blog/84947/',
  },
];

export default function EventsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="聯誼派對活動"
          title="聯誼派對活動"
          description="以原站 /party/ 為基礎搬移成 React / Next.js 版本，保留原本活動入口與閱讀更多連結。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg"
          imageAlt="聯誼派對活動"
        />

        <section className="mx-auto max-w-5xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="space-y-8">
            {partyPosts.map((post) => (
              <article key={post.href} className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
                <h2 className="text-3xl font-semibold tracking-tight text-plum">{post.title}</h2>
                <p className="mt-5 whitespace-pre-line text-base leading-8 text-plum/75">{post.description}</p>
                <a
                  href={post.href}
                  className="mt-6 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  閱讀更多 »
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
