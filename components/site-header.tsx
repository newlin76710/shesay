import Image from 'next/image';

const navItems = [
  { href: '/', label: '女生話題' },
  { href: '/events', label: '聯誼派對' },
  { href: '/consult', label: '戀愛諮詢' },
  { href: '/about', label: '關於我們' },
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
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-plum/80 transition hover:text-rose">
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
