import { ImageCard } from '@/components/image-card';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const topics = [
  '總是遇不到適合的對象',
  '關係裡反覆出現相似問題',
  '不知道自己真正適合什麼樣的人',
  '想更了解自己的戀愛模式與相處需求',
];

const gallery = [
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/戀愛會社-小秘書-娜米-1.jpg',
    alt: 'SheSay 戀愛諮詢主講人',
    title: '一對一戀愛整理',
    description: '用更清楚的方式理解自己的感情模式與下一步。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/SheSay-戀愛數字密碼-banner-1-2048x758.jpg',
    alt: 'SheSay 戀愛數字密碼視覺',
    title: '戀愛數字密碼',
    description: '把既有服務內容收斂成更清楚、好理解的入口。',
  },
  {
    src: '/images/original/shesay.com/wp-content/uploads/2023/10/節目-03-一對一戀愛諮詢.jpg',
    alt: 'SheSay 諮詢節目封面',
    title: '內容與服務串聯',
    description: '讓諮詢、節目與品牌內容彼此支援，不是分散存在。',
  },
];

export default function ConsultPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Consulting"
          title="戀愛卡關時，先把方向整理清楚"
          description="SheSay 的戀愛諮詢不是給妳標準答案，而是陪妳看懂自己、看懂關係，讓下一步更清楚。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/戀愛會社-小秘書-娜米-1.jpg"
          imageAlt="SheSay 戀愛諮詢主視覺"
        />

        <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-plum">這些情況，很適合先聊聊</h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-plum/75">
                {topics.map((topic) => (
                  <li key={topic}>• {topic}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
              <h2 className="text-2xl font-semibold">諮詢能帶來什麼？</h2>
              <p className="mt-5 text-base leading-8 text-white/80">
                妳會更理解自己在關係裡的模式、辨識自己真正重視的條件，也更知道下一步應該怎麼走。
                這不只是處理眼前的戀愛困擾，也是在整理妳未來進入關係的方式。
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
