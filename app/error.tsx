'use client';

import { SiteShell } from '@/components/site-shell';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <SiteShell>
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-6xl font-bold text-rose">500</p>
        <h1 className="mt-4 text-2xl font-bold text-plum">發生了一些問題</h1>
        <p className="mt-3 text-base text-plum/60">
          很抱歉，頁面載入時發生錯誤，請稍後再試。
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex rounded-full bg-rose px-8 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
        >
          重新載入
        </button>
      </main>
    </SiteShell>
  );
}
