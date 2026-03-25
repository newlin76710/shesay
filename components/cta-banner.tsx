export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="overflow-hidden rounded-[2rem] bg-plum px-8 py-12 text-white shadow-soft md:px-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Start with SheSay</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">準備好開始新的認識了嗎？</h2>
            <p className="mt-4 text-base leading-7 text-white/75 md:text-lg">
              加入官方 LINE，開始妳的配對流程、查看活動，或直接預約戀愛諮詢。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://lin.ee/UtgCipOq"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-plum transition hover:bg-sand"
            >
              加入官方 LINE
            </a>
            <a
              href="consult"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              預約戀愛諮詢
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
