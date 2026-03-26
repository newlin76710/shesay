'use client';

import { useState, useRef } from 'react';
import { calculateLoveNumber, getPracticeText, getNumberAccent, type LoveNumberResult } from '@/lib/love-number';

/* ─── 主命數 1-9 對應的 SVG 圖案（左上角裝飾） ─── */
function NumberIcon({ n, size = 120 }: { n: number; size?: number }) {
  const accent = getNumberAccent(n);
  // 每個數字有不同的幾何圖形
  const shapes: Record<number, React.ReactNode> = {
    1: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <polygon points="60,10 110,90 10,90" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.5" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>1</text>
      </svg>
    ),
    2: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <ellipse cx="60" cy="60" rx="40" ry="50" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" />
        <ellipse cx="60" cy="60" rx="50" ry="35" fill="none" stroke={accent} strokeWidth="2" opacity="0.3" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>2</text>
      </svg>
    ),
    3: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <rect x="20" y="20" width="80" height="80" rx="8" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" transform="rotate(15 60 60)" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>3</text>
      </svg>
    ),
    4: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <rect x="25" y="25" width="70" height="70" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.5" />
        <rect x="35" y="35" width="50" height="50" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.3" transform="rotate(45 60 60)" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>4</text>
      </svg>
    ),
    5: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <polygon points="60,8 75,45 115,45 83,70 95,108 60,85 25,108 37,70 5,45 45,45" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>5</text>
      </svg>
    ),
    6: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <polygon points="60,10 100,35 100,85 60,110 20,85 20,35" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.4" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>6</text>
      </svg>
    ),
    7: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <circle cx="60" cy="60" r="35" fill="none" stroke={accent} strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="5" x2="60" y2="115" stroke={accent} strokeWidth="1" opacity="0.2" />
        <line x1="5" y1="60" x2="115" y2="60" stroke={accent} strokeWidth="1" opacity="0.2" />
        <line x1="18" y1="18" x2="102" y2="102" stroke={accent} strokeWidth="1" opacity="0.2" />
        <line x1="102" y1="18" x2="18" y2="102" stroke={accent} strokeWidth="1" opacity="0.2" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>7</text>
      </svg>
    ),
    8: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <path d="M60,15 Q95,15 95,42 Q95,60 60,60 Q25,60 25,78 Q25,105 60,105 Q95,105 95,78 Q95,60 60,60 Q25,60 25,42 Q25,15 60,15Z" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>8</text>
      </svg>
    ),
    9: (
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke={accent} strokeWidth="3" opacity="0.2" />
        <circle cx="60" cy="45" r="30" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" />
        <line x1="90" y1="45" x2="60" y2="110" stroke={accent} strokeWidth="2" opacity="0.4" />
        <text x="60" y="68" textAnchor="middle" fontSize="42" fontWeight="bold" fill={accent}>9</text>
      </svg>
    ),
  };
  return shapes[n] || shapes[1];
}

/* ─── 輸入表單 ─── */
function InputForm({ onSubmit }: { onSubmit: (name: string, gender: string, date: string, time: string) => void }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [noTime, setNoTime] = useState(false);

  const canSubmit = name.trim() && date;

  return (
    <div className="mx-auto w-full max-w-md">
      {/* 標題 */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-plum md:text-4xl">
          戀愛特質速測
        </h1>
        <p className="mt-2 text-sm text-plum/60">
          輸入你的資訊，解鎖專屬戀愛密碼
        </p>
      </div>

      {/* 卡片表單 */}
      <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
        {/* 姓名 */}
        <label className="mb-4 block">
          <span className="mb-1 block text-sm font-semibold text-plum/80">姓名</span>
          <input
            type="text"
            placeholder="請輸入姓名"
            maxLength={30}
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full rounded-xl border border-plum/15 bg-blush/50 px-4 py-3 text-plum outline-none transition placeholder:text-plum/30 focus:border-rose/50 focus:ring-2 focus:ring-rose/20"
          />
        </label>

        {/* 性別 */}
        <label className="mb-4 block">
          <span className="mb-1 block text-sm font-semibold text-plum/80">性別</span>
          <div className="flex gap-3">
            {(['男', '女'] as const).map(g => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  gender === g
                    ? 'border-rose bg-rose/10 text-rose'
                    : 'border-plum/15 bg-blush/50 text-plum/60 hover:border-rose/30'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </label>

        {/* 生日 */}
        <label className="mb-4 block">
          <span className="mb-1 block text-sm font-semibold text-plum/80">出生日期（國曆）</span>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full rounded-xl border border-plum/15 bg-blush/50 px-4 py-3 text-plum outline-none transition placeholder:text-plum/30 focus:border-rose/50 focus:ring-2 focus:ring-rose/20"
          />
        </label>

        {/* 時辰 */}
        <label className={`mb-2 block ${noTime ? 'opacity-40 pointer-events-none' : ''}`}>
          <span className="mb-1 block text-sm font-semibold text-plum/80">出生時間</span>
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            disabled={noTime}
            className="w-full rounded-xl border border-plum/15 bg-blush/50 px-4 py-3 text-plum outline-none transition placeholder:text-plum/30 focus:border-rose/50 focus:ring-2 focus:ring-rose/20"
          />
        </label>
        <label className="mb-6 flex items-center gap-2 text-sm text-plum/60">
          <input
            type="checkbox"
            checked={noTime}
            onChange={() => { setNoTime(!noTime); if (!noTime) setTime(''); }}
            className="h-4 w-4 accent-rose"
          />
          忘記出生時間
        </label>

        {/* 送出 */}
        <button
          type="button"
          disabled={!canSubmit}
          onClick={() => onSubmit(name, gender, date, time)}
          className={`w-full rounded-full py-3.5 text-base font-semibold text-white shadow-md transition ${
            canSubmit
              ? 'bg-rose hover:opacity-90 active:scale-[0.98]'
              : 'cursor-not-allowed bg-plum/20'
          }`}
        >
          產生速測表
        </button>
      </div>
    </div>
  );
}

/* ─── 結果卡片區塊 ─── */
function InfoBlock({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-plum/8 bg-white/80 p-4 backdrop-blur">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>
        {label}
      </p>
      <p className="whitespace-pre-line text-sm leading-relaxed text-plum/80">
        {value}
      </p>
    </div>
  );
}

/* ─── 結果頁面 ─── */
function ResultCard({ result, onBack }: { result: LoveNumberResult; onBack: () => void }) {
  const accent = getNumberAccent(result.mainNumber);
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto w-full max-w-lg">
      {/* 結果卡片 */}
      <div
        ref={resultRef}
        className="relative overflow-hidden rounded-3xl bg-white shadow-soft"
      >
        {/* 頂部漸層 banner */}
        <div
          className="relative flex items-center gap-4 px-6 py-6 sm:px-8"
          style={{
            background: `linear-gradient(135deg, ${accent}15 0%, ${accent}08 100%)`,
          }}
        >
          {/* 左上角 數字圖案 */}
          <div className="shrink-0">
            <NumberIcon n={result.mainNumber} size={100} />
          </div>

          {/* 右側基本資訊 */}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-plum/50">戀愛特質速測結果</p>
            <h2 className="mt-1 text-2xl font-bold text-plum">{result.name}</h2>
            <p className="mt-0.5 text-sm text-plum/60">
              {result.gender && `${result.gender} · `}{result.date}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white"
                style={{ backgroundColor: accent }}
              >
                主命數 {result.mainNumber}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: accent, color: accent }}>
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                幸運色：{result.luckyColor}
              </span>
            </div>
          </div>
        </div>

        {/* 內容區 */}
        <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
          <InfoBlock accent={accent} label="戀愛方式" value={result.loveStyle} />
          <InfoBlock accent={accent} label="關鍵字" value={result.keyword} />
          <InfoBlock accent={accent} label="特質" value={result.special} />
          <InfoBlock accent={accent} label="地雷" value={result.mines} />
          <div className="sm:col-span-2">
            <InfoBlock accent={accent} label="鍛鍊功課" value={result.practice} />
          </div>

          {/* 鍛鍊數字 */}
          {result.practiceNumbers.length > 0 && (
            <div className="sm:col-span-2">
              <div className="rounded-2xl border border-plum/8 bg-white/80 p-4 backdrop-blur">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>
                  鍛鍊數字：{result.practiceNumbers.join('、')}
                </p>
                <div className="space-y-2">
                  {result.practiceNumbers.map(n => (
                    <p key={n} className="whitespace-pre-line text-xs leading-relaxed text-plum/70">
                      {getPracticeText(n)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 底部品牌標記 */}
        <div className="border-t border-plum/5 px-6 py-3 text-center text-[10px] text-plum/30">
          SheSay 戀愛小秘書 · 彩虹數字戀愛測算
        </div>
      </div>

      {/* 按鈕區 */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose/30 hover:text-rose"
        >
          重新測算
        </button>
        <a
          href="/consult"
          className="inline-flex items-center gap-1.5 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
        >
          預約戀愛諮詢
        </a>
      </div>
    </div>
  );
}

/* ─── 主元件 ─── */
export function LoveCalculator() {
  const [result, setResult] = useState<LoveNumberResult | null>(null);

  const handleSubmit = (name: string, gender: string, date: string, time: string) => {
    const r = calculateLoveNumber(name, gender, date, time);
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
