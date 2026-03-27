'use client';

import Link from 'next/link';

export function FloatingSidebar() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-0" role="complementary" aria-label="快速連結">
      <Link
        href="/consult"
        onClick={handleClick}
        className="flex items-center justify-center rounded-l-lg bg-rose px-2 py-4 shadow-lg transition hover:bg-rose/90"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-sm font-bold tracking-[0.15em] text-white">一對一諮詢</span>
      </Link>
      <Link
        href="/podcast"
        onClick={handleClick}
        className="flex items-center justify-center rounded-l-lg bg-plum px-2 py-4 shadow-lg transition hover:bg-plum/90"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-sm font-bold tracking-[0.15em] text-white">戀愛會社節目</span>
      </Link>
    </div>
  );
}
