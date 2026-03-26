import type { ReactNode } from 'react';
import { FloatingSidebar } from './floating-sidebar';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <FloatingSidebar />
      <SiteFooter />
    </>
  );
}
