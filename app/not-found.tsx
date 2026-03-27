import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export default function NotFound() {
  return (
    <SiteShell>
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-6xl font-bold text-rose">404</p>
        <h1 className="mt-4 text-2xl font-bold text-plum">找不到這個頁面</h1>
        <p className="mt-3 text-base text-plum/60">
          你要找的頁面可能已被移除、更名，或暫時無法使用。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-rose px-8 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
        >
          回到首頁
        </Link>
      </main>
    </SiteShell>
  );
}
