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
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');

  const canSubmit = name.trim() && birthYear && birthMonth && birthDay;
  const buildDate = () =>
    `${birthYear}-${birthYear ? birthMonth.padStart(2, '0') : ''}-${birthYear ? birthDay.padStart(2, '0') : ''}`;

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

        <div className="mb-6">
          <span className="mb-1 block text-xs font-semibold text-plum/70">生日（國曆）</span>
          <div className="grid grid-cols-3 gap-2">
            {/* 年 */}
            <div>
              <select
                value={birthYear}
                onChange={e => setBirthYear(e.target.value)}
                className="w-full appearance-none rounded-xl border border-rose/20 bg-blush/30 px-3 py-3 text-center text-sm text-plum outline-none transition focus:border-rose/50 focus:ring-2 focus:ring-rose/15"
              >
                <option value="">年</option>
                {Array.from({ length: 140 }, (_, i) => new Date().getFullYear() - i).map(y => (
                  <option key={y} value={String(y)}>{y}</option>
                ))}
              </select>
            </div>
            {/* 月 */}
            <div>
              <select
                value={birthMonth}
                onChange={e => setBirthMonth(e.target.value)}
                className="w-full appearance-none rounded-xl border border-rose/20 bg-blush/30 px-3 py-3 text-center text-sm text-plum outline-none transition focus:border-rose/50 focus:ring-2 focus:ring-rose/15"
              >
                <option value="">月</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={String(m)}>{m} 月</option>
                ))}
              </select>
            </div>
            {/* 日 */}
            <div>
              <select
                value={birthDay}
                onChange={e => setBirthDay(e.target.value)}
                className="w-full appearance-none rounded-xl border border-rose/20 bg-blush/30 px-3 py-3 text-center text-sm text-plum outline-none transition focus:border-rose/50 focus:ring-2 focus:ring-rose/15"
              >
                <option value="">日</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                  <option key={d} value={String(d)}>{d} 日</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={() => onSubmit(name, gender, buildDate())}
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
    <div className="mx-auto w-full max-w-[576px] px-2 sm:px-0">
      {/* 卡片圖片容器 — 只顯示上方卡片部分，裁切底部按鈕 */}
      <div className="relative overflow-hidden rounded-2xl shadow-soft sm:rounded-3xl">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '9/16.2' }}>
          <Image
            src={cardSrc}
            alt={`主命數 ${result.mainNumber} 結果卡`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 576px"
            priority
          />

          {/* 覆蓋「小瀨」— 在姓名框內，用 % 定位自適應所有尺寸 */}
          <div
            className="absolute flex items-center"
            style={{
              top: '12.9%',
              left: '8%',
              width: '22%',
              height: '2.8%',
            }}
          >
            <span
              className="font-bold leading-none text-[#333]"
              style={{
                fontSize: 'min(3.5vw, 22px)',
              }}
            >
              {result.name}
            </span>
          </div>
        </div>
      </div>

      {/* 按鈕 — 手機版堆疊，桌面版並排 */}
      <div className="mt-5 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose sm:w-auto"
        >
          再測一次
        </button>
        <a
          href="/consult"
          className="inline-flex w-full items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:w-auto"
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
    <section className="mx-auto max-w-4xl px-3 py-8 sm:px-6 sm:py-12 lg:py-16">
      {result ? (
        <ResultCard result={result} onBack={handleBack} />
      ) : (
        <InputForm onSubmit={handleSubmit} />
      )}
    </section>
  );
}
