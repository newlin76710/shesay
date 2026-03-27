import type { ReactNode } from 'react';
import { FloatingSidebar } from './floating-sidebar';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rose focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        跳到主要內容
      </a>
      <SiteHeader />
      <div id="main-content">
        {children}
      </div>
      <FloatingSidebar />
      <SiteFooter />
    </>
  );
}
