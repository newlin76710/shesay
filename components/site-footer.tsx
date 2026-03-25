export function SiteFooter() {
  return (
    <footer className="border-t border-plum/10 bg-plum text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-xl font-semibold">SheSay 專為女性の聯誼配對平台</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              單身聯誼活動、交友平台、相親認識異性、找對象的交友網站、婚友社、脫單
            </p>
            <a
              href="https://datenami.tw/dt09varRz"
              className="mt-6 inline-flex rounded-full bg-rose px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              與戀愛小秘書交談
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-2">
            <a href="/about" className="transition hover:text-white">關於我們</a>
            <a href="/party" className="transition hover:text-white">聯誼派對</a>
            <a href="/consult" className="transition hover:text-white">戀愛諮詢</a>
            <a href="https://lin.ee/UtgCipOq" className="transition hover:text-white">官方 LINE</a>
            <a href="/article/" className="transition hover:text-white">網友投稿</a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          ©SheSay All rights reserved.
        </p>
      </div>
    </footer>
  );
}
