const navItems = [
  { href: '/', label: '首頁' },
  { href: '/about', label: '關於 SheSay' },
  { href: '/events', label: '聯誼活動' },
  { href: '/consult', label: '戀愛諮詢' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="text-lg font-semibold tracking-tight text-plum">
          SheSay
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-plum/75 transition hover:text-rose">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://line.me/"
          className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          加入官方 LINE
        </a>
      </div>
    </header>
  );
}
