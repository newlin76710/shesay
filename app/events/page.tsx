import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const partyPosts = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg',
    alt: '溯溪聯誼活動',
    title: '溯溪聯誼活動',
    description:
      '想要馬上熟，又不想曬太陽？想要刺激，又不想要危險？想要歡樂，又不想要勞累？透過融合解謎和團隊合作的活動，一起創造難忘回憶。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/20231014手作蘋果塔-768x475-1.jpeg',
    alt: '天生絕配｜桌遊對對碰',
    title: '天生絕配｜桌遊對對碰',
    description: '在充滿歡快氣氛的桌遊活動中，默契十足的你我，讓感情從互動中自然升溫。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/11/DSC00020_副本.jpeg',
    alt: '心心相印｜情牽護理師',
    title: '心心相印｜情牽護理師',
    description: '從原站活動文案出發，保留單身聯誼活動的主題感與原本的入口氛圍。',
  },
];

const features = [
  '多元有趣單身派對活動，豐富妳的社交生活。',
  '讓妳快速、精準找到適合的對象。',
  '在真實生活中認識異性，而不是只停在聊天視窗。',
  '從主題派對、戶外活動到手作與桌遊，保留原站的活動感。',
];

export default function EventsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="聯誼派對活動"
          title="SheSay 懂妳會愛的單身聯誼"
          description="多元有趣單身派對活動，豐富妳的社交生活。讓妳快速、精準找到適合的對象。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg"
          imageAlt="SheSay 聯誼派對活動"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">聯誼派對活動</h2>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-white/80 md:grid-cols-2">
              {features.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {partyPosts.map((item) => (
              <ImageCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-sand p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-semibold text-plum">想參加更多聯誼派對？</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-plum/75">
              加入 SHESAY 官方 LINE，讓戀愛小秘書協助妳查看近期活動、報名方式與適合的場次。
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
