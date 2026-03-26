'use client';

import { useState } from 'react';
import Image from 'next/image';
import { calculateLoveNumber, type LoveNumberResult } from '@/lib/love-number';

/* ─── 主命數 1-9 對應圖片路徑 ─── */
const CARD_IMAGES: Record<number, string> = {
  1: '/images/calculator/戀愛職能測驗-No.01-營運部-行政管理.png',
  2: '/images/calculator/戀愛職能測驗-No.02-產品部-專案規劃師.png',
  3: '/images/calculator/戀愛職能測驗-No.03-行銷推廣部-行銷 企劃.png',
  4: '/images/calculator/戀愛職能測驗-No.04-財務部-會計.png',
  5: '/images/calculator/戀愛職能測驗-No.05-行銷發展部-數位推廣.png',
  6: '/images/calculator/戀愛職能測驗-No.06-人事部-人力 資源師.png',
  7: '/images/calculator/戀愛職能測驗-No.07-公關部-公關.png',
  8: '/images/calculator/戀愛職能測驗-No.08-策略發展部-策略規劃.png',
  9: '/images/calculator/戀愛職能測驗-No.09-加盟部-加盟推廣.png',
};

/* ─── 輸入表單（無時辰） ─── */
function InputForm({ onSubmit }: { onSubmit: (name: string, gender: string, date: string) => void }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  const canSubmit = name.trim() && date;

  return (
    <div className="mx-auto w-full max-w-md">
      {/* 標題 */}
      <div className="rounded-t-3xl bg-gradient-to-b from-rose/20 to-rose/5 px-6 pb-4 pt-8 text-center">
        <p className="text-xs font-medium tracking-wider text-rose">娜米的戀愛數字密碼</p>
        <h1 className="mt-1 text-2xl font-bold text-plum">你的戀愛職能評量</h1>
      </div>

      {/* 表單 */}
      <div className="rounded-b-3xl border border-t-0 border-rose/15 bg-white px-6 pb-8 pt-6 shadow-soft">
        <label className="mb-4 block">
          <span className="mb-1 block text-xs font-semibold text-plum/70">姓名</span>
          <input
            type="text"
            placeholder="請輸入姓名"
            maxLength={30}
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full rounded-xl border border-rose/20 bg-blush/30 px-4 py-3 text-sm text-plum outline-none transition placeholder:text-plum/30 focus:border-rose/50 focus:ring-2 focus:ring-rose/15"
          />
        </label>

        <label className="mb-4 block">
          <span className="mb-1 block text-xs font-semibold text-plum/70">性別</span>
          <div className="flex gap-3">
            {(['男', '女'] as const).map(g => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  gender === g
                    ? 'border-rose bg-rose/10 text-rose'
                    : 'border-rose/15 bg-blush/30 text-plum/50 hover:border-rose/30'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </label>

        <label className="mb-6 block">
          <span className="mb-1 block text-xs font-semibold text-plum/70">生日（國曆）</span>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full rounded-xl border border-rose/20 bg-blush/30 px-4 py-3 text-sm text-plum outline-none transition placeholder:text-plum/30 focus:border-rose/50 focus:ring-2 focus:ring-rose/15"
          />
        </label>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={() => onSubmit(name, gender, date)}
          className={`w-full rounded-full py-3.5 text-sm font-bold text-white shadow-md transition ${
            canSubmit
              ? 'bg-rose hover:opacity-90 active:scale-[0.98]'
              : 'cursor-not-allowed bg-plum/20'
          }`}
        >
          產生測算表
        </button>
      </div>
    </div>
  );
}

/* ─── 結果卡片：圖片 + 名字覆蓋 ─── */
function ResultCard({ result, onBack }: { result: LoveNumberResult; onBack: () => void }) {
  const cardSrc = CARD_IMAGES[result.mainNumber] || CARD_IMAGES[1];

  return (
    <div className="mx-auto w-full max-w-sm">
      {/* 卡片圖片容器 — 只顯示上方卡片部分，裁切底部按鈕 */}
      <div className="relative overflow-hidden rounded-3xl shadow-soft">
        {/* 圖片：用 aspect ratio 裁切，只顯示卡片上方約 78% */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '9/16.5' }}>
          <Image
            src={cardSrc}
            alt={`主命數 ${result.mainNumber} 結果卡`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 384px"
            priority
          />

          {/* 覆蓋「小瀨」名字位置 — 左上方 */}
          <div
            className="absolute flex items-center"
            style={{
              top: '7.8%',
              left: '5%',
              width: '35%',
              height: '3.5%',
            }}
          >
            {/* 底色遮蓋原本的「小瀨」 */}
            <div
              className="absolute inset-0 rounded"
              style={{
                /* 用與卡片背景相近的色塊蓋住 */
                backgroundColor: 'inherit',
              }}
            />
            {/* 使用者名字 */}
            <span
              className="relative z-10 font-bold leading-none text-white"
              style={{
                fontSize: 'clamp(14px, 4.5vw, 20px)',
                textShadow: '0 1px 3px rgba(0,0,0,0.15)',
              }}
            >
              {result.name}
            </span>
          </div>
        </div>
      </div>

      {/* 按鈕 */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
        >
          再測一次
        </button>
        <a
          href="/consult"
          className="inline-flex items-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
        >
          立即預約戀愛諮詢
        </a>
      </div>
    </div>
  );
}

/* ─── 主元件 ─── */
export function LoveCalculator() {
  const [result, setResult] = useState<LoveNumberResult | null>(null);

  const handleSubmit = (name: string, gender: string, date: string) => {
    const r = calculateLoveNumber(name, gender, date, '');
    setResult(r);
  };

  const handleBack = () => setResult(null);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {result ? (
        <ResultCard result={result} onBack={handleBack} />
      ) : (
        <InputForm onSubmit={handleSubmit} />
      )}
    </section>
  );
}
