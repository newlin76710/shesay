import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const eventTypes = [
  {
    title: '主題單身派對',
    description: '用更有情境感的活動設計，降低尷尬感，讓互動自然發生。',
  },
  {
    title: '戶外交流行程',
    description: '把認識放進散步、野餐、手作或輕旅行等真實生活場景裡。',
  },
  {
    title: '小型深度認識場',
    description: '適合想要更安靜、節奏更舒服的人，用較少人數進行更有效的交流。',
  },
];

const gallery = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg',
    alt: 'SheSay 戶外活動合照',
    title: '戶外交流活動',
    description: '在更放鬆的場景裡，認識比制式配對更自然。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/20231014手作蘋果塔-768x475-1.jpeg',
    alt: 'SheSay 手作活動',
    title: '手作主題認識',
    description: '透過一起做事、一起聊天，建立更真實的互動感。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/DSC00020_副本.jpeg',
    alt: 'SheSay 活動現場',
    title: '舒服的社交節奏',
    description: '讓參加活動不是壓力，而是一次有溫度的認識。',
  },
];

export default function EventsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Events"
          title="真實見面，才有真正的心動"
          description="SheSay 的活動不是把人硬塞進流程，而是設計一個更自然、更舒服、更容易互動的場域。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg"
          imageAlt="SheSay 活動主視覺"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">活動重點</h2>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-white/80 md:grid-cols-2">
              <li>• 降低尷尬感與制式感，讓認識更自然</li>
              <li>• 以女性體驗為出發點設計互動節奏</li>
              <li>• 不只看條件，也看真實相處感</li>
              <li>• 讓每場活動都更像舒服的社交，而不是壓力任務</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {eventTypes.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-plum">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-plum/75">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <ImageCard key={item.src} {...item} />
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-sand p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-semibold text-plum">想看近期活動？</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-plum/75">
              目前最適合的做法是把活動資訊整理到官方 LINE 或之後的活動列表頁，讓使用者可以直接查看報名資訊與場次內容。
            </p>
            <a
              href="https://lin.ee/UtgCipOq"
              className="mt-6 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              查看活動與報名方式
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
