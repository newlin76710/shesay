import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { loveokArticles, type LoveokArticle } from '@/lib/loveok-articles';

export function generateStaticParams() {
  return Object.keys(loveokArticles).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = loveokArticles[id];
  if (!article) return {};
  const firstText = article.content.find((b: { type: string }) => b.type === 'text');
  const desc = firstText ? (firstText.value as string).slice(0, 120) + '...' : article.title;
  return {
    title: `${article.title} — SheSay 戀愛會社`,
    description: desc,
    openGraph: {
      title: `${article.title} — SheSay 戀愛會社`,
      description: desc,
      ...(article.heroImage ? { images: [article.heroImage] } : {}),
    },
  };
}

export default async function LoveokPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article: LoveokArticle | undefined = loveokArticles[id];
  if (!article) notFound();

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-8 lg:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-plum md:text-4xl">{article.title}</h1>

        {article.heroImage && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <div className="mt-8 space-y-6">
          {article.content.map((block, i) => {
            if (block.type === 'text') {
              return (
                <p key={i} className="text-base leading-8 text-plum/80">
                  {block.value}
                </p>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={i} className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <Image
                    src={block.value}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="text-xl font-bold text-plum">
                  {block.value}
                </h2>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/podcast"
            className="inline-flex rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
          >
            ← 返回戀愛會社
          </a>
        </div>
      </main>
    </SiteShell>
  );
}
