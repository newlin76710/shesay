import Image from 'next/image';

const girlTopics = [
  { href: '/blog/category/food/', label: '推好吃好玩' },
  { href: '/blog/category/fashion/', label: '追漂亮時尚' },
  { href: '/blog/category/healthy/', label: '健康又緊實' },
  { href: '/blog/category/love/', label: '戀愛百寶箱' },
];

const navItems = [
  { href: '/party', label: '聯誼派對' },
  { href: '/consult', label: '戀愛諮詢' },
  { href: '/podcast', label: '戀愛會社' },
  { href: '/about', label: '關於我們' },
  { href: '/about#advertising', label: '廣告合作' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#f1d9df] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="relative block h-10 w-[132px] shrink-0 sm:h-12 sm:w-[158px]">
          <Image
            src="/images/original/shesay.com/wp-content/uploads/2025/05/shesay-logo-01.png"
            alt="SheSay"
            fill
            className="object-contain object-left"
            sizes="158px"
            priority
          />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {/* 女生話題 dropdown */}
          <div className="group relative">
            <a href="/" className="text-sm font-medium text-plum/80 transition hover:text-rose">
              女生話題
            </a>
            <div className="absolute left-0 top-full hidden min-w-[140px] rounded-xl border border-[#f1d9df] bg-white py-2 shadow-soft group-hover:block">
              {girlTopics.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-plum/80 transition hover:bg-blush hover:text-rose"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
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
        <a
          href="https://lin.ee/UtgCipOq"
          className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          加入官方 LINE
        </a>
      </div>
    </header>
  );
}
