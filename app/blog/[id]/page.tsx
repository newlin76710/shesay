import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { articles, type Article } from '@/lib/party-articles';

export function generateStaticParams() {
  return Object.keys(articles).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles[id];
  if (!article) return {};
  const firstText = article.content.find((b: { type: string }) => b.type === 'text');
  const desc = firstText ? (firstText.value as string).slice(0, 120) + '...' : article.title;
  return {
    title: `${article.title} — SheSay`,
    description: desc,
    openGraph: {
      title: `${article.title} — SheSay`,
      description: desc,
      ...(article.heroImage ? { images: [article.heroImage] } : {}),
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article: Article | undefined = articles[id];
  if (!article) notFound();

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-8 lg:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-plum md:text-4xl">{article.title}</h1>

        {article.heroImage && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
            <img
              src={article.heroImage}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
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
                  <img
                    src={block.value}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover"
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
            href="/party"
            className="inline-flex rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
          >
            ← 返回聯誼派對活動
          </a>
        </div>
      </main>
    </SiteShell>
  );
}
