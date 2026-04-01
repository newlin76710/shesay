'use client';

import { useState } from 'react';

const navItems = [
  { href: '/party', label: '聯誼派對' },
  { href: '/consult', label: '戀愛諮詢' },
  { href: '/podcast', label: '戀愛會社' },
  { href: '/about', label: '關於我們' },
  { href: '/advertising', label: '廣告合作' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#f1d9df] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a href="/" className="relative block h-10 w-[132px] shrink-0 sm:h-12 sm:w-[158px]">
          <img
            src="/images/original/shesay.com/wp-content/uploads/2025/05/shesay-logo-01.png"
            alt="SheSay"
            className="absolute inset-0 h-full w-full object-contain object-left"
            loading="eager"
          />
        </a>

        {/* 桌面版導航 */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="主導航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-plum/80 transition hover:text-rose"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* LINE 按鈕 */}
          <a
            href="https://lin.ee/UtgCipOq"
            className="hidden rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            加入官方 LINE
          </a>

          {/* 手機版漢堡按鈕 */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-plum transition hover:bg-plum/5 lg:hidden"
            aria-label={open ? '關閉選單' : '開啟選單'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 手機版展開選單 */}
      {open && (
        <div id="mobile-menu" className="border-t border-[#f1d9df] bg-white lg:hidden" role="navigation" aria-label="手機版導航">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-plum/80 transition hover:text-rose"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://lin.ee/UtgCipOq"
              className="mt-3 block rounded-full bg-rose px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              加入官方 LINE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
