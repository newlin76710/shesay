export function SiteFooter() {
  return (
    <footer className="border-t border-plum/10 bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <p className="text-lg font-semibold text-plum">SheSay</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-plum/70">
            為單身女性打造的聯誼與戀愛成長平台。從活動認識、戀愛整理到自我理解，陪妳更自然地靠近適合的關係。
          </p>
        </div>
        <div className="grid gap-3 text-sm text-plum/70 sm:grid-cols-2">
          <a href="/about" className="transition hover:text-rose">關於 SheSay</a>
          <a href="/events" className="transition hover:text-rose">聯誼活動</a>
          <a href="/consult" className="transition hover:text-rose">戀愛諮詢</a>
          <a href="https://lin.ee/UtgCipOq" className="transition hover:text-rose">官方 LINE</a>
        </div>
      </div>
    </footer>
  );
}
