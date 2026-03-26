/**
 * 彩虹數字戀愛測算邏輯
 * 從 rainbow_web CalculatorLove.jsx 移植
 */

export interface LoveNumberResult {
  mainNumber: number;
  luckyColor: string;
  colorHex: string;
  loveStyle: string;
  keyword: string;
  special: string;
  practice: string;
  mines: string;
  practiceNumbers: number[];
  backNumbers: string[][];
  secondBackNumbers: string[][];
  mainNumbers: string[];
  name: string;
  gender: string;
  date: string;
  lunarDate: string;
}

/** 遞迴加總陣列數字 */
function sumArr(arr: number[]): number {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] + sumArr(arr.slice(1));
}

/** 將多位數遞迴縮減為個位數 */
function reduceToSingle(digits: string[]): { second: string[]; main: string } {
  const total = sumArr(digits.map(Number));
  const totalStr = total.toString();
  if (totalStr.length > 1) {
    const secondDigits = totalStr.split('');
    const mainVal = sumArr(secondDigits.map(Number)).toString();
    return { second: secondDigits, main: mainVal };
  }
  return { second: [], main: totalStr };
}

/** 陽曆轉農曆 (簡易版 - 使用公式估算) */
function solarToLunar(year: number, month: number, day: number) {
  // 簡易近似: 農曆大約比陽曆晚 1 個月
  // 實際產品中應使用 lunar-javascript 庫
  // 這裡先回傳近似值，後續可替換為精確計算
  let lMonth = month - 1;
  let lYear = year;
  let lDay = day;
  if (lMonth <= 0) {
    lMonth = 12 + lMonth;
    lYear = year - 1;
  }
  if (lDay > 30) lDay = 30;
  return { year: lYear, month: lMonth, day: lDay };
}

const NUMBER_DATA: Record<number, Omit<LoveNumberResult, 'mainNumber' | 'practiceNumbers' | 'backNumbers' | 'secondBackNumbers' | 'mainNumbers' | 'name' | 'gender' | 'date' | 'lunarDate'>> = {
  1: {
    luckyColor: '紅色',
    colorHex: '#E74C3C',
    loveStyle: '專心愛一個人',
    keyword: '獨立、專注、領導、教導、無中生有',
    special: '老大語氣、以我為主、享受孤獨、喜歡指使對方',
    practice: '1. 設定明確目標\n2. 累積實力經驗\n3. 挑戰整個過程',
    mines: '最討厭別人試圖改變或說服自己',
  },
  2: {
    luckyColor: '橘色',
    colorHex: '#E67E22',
    loveStyle: '白頭偕老、互相陪伴',
    keyword: '溫柔、細膩、傾聽、配合、依賴',
    special: '委婉、沉默、不喜被背叛、重視小細節',
    practice: '1. 真誠表達自己\n2. 逆向思考\n3. 接受與包容\n4. 做足事前準備',
    mines: '不喜歡別人太直接，想要保有空間跟時間',
  },
  3: {
    luckyColor: '黃色',
    colorHex: '#F1C40F',
    loveStyle: '重視外表、喜歡新鮮感和變化',
    keyword: '自由、彈性、表演、溝通、好奇、樂觀',
    special: '喜歡談情說愛、用音樂唱歌表達、容易突發奇想',
    practice: '1. 學說話的藝術\n2. 客觀中性立場\n3. 發揮創意與敏銳力',
    mines: '最討厭被忽視，想要被看見、關心自己感興趣的事',
  },
  4: {
    luckyColor: '綠色',
    colorHex: '#27AE60',
    loveStyle: '重視隱私、門當戶對、成家立業',
    keyword: '穩定、務實、冷靜、腳踏實地、責任感',
    special: '邏輯思考、制定規範、保護自己人、給人安全感',
    practice: '1. 清晰決策力\n2. 具體行動力\n3. 承擔責任與結果\n4. 打破舊有習氣',
    mines: '最討厭被侵犯隱私，或被打破自己的原則與規範',
  },
  5: {
    luckyColor: '藍色',
    colorHex: '#2980B9',
    loveStyle: '喜歡自由、熱情、心電感應',
    keyword: '探索、冒險、戶外、自由、正義、野性、海派',
    special: '多情、有攻擊性、喜歡距離感、勇敢熱忱',
    practice: '1. 找到心之所向\n2. 勇敢冒險\n3. 解開心結\n4. 全力以赴',
    mines: '討厭別人過於堅持，或有強大支配欲',
  },
  6: {
    luckyColor: '靛色',
    colorHex: '#8E44AD',
    loveStyle: '找尋一生真愛、照顧對方',
    keyword: '美、高貴、愛心、善解人意、熱心服務、慈悲心',
    special: '喜歡照顧別人、在乎雙贏、追求完美',
    practice: '1. 付出剛剛好的愛\n2. 共創彈性與雙贏\n3. 優雅謙虛',
    mines: '最討厭一昧索取，吝嗇，不願意付出的人',
  },
  7: {
    luckyColor: '紫色',
    colorHex: '#9B59B6',
    loveStyle: '重視氛圍、幸福感',
    keyword: '直覺、哲理、心靈、靈感、好運氣、質疑',
    special: '情緒化、一定要贏、慷慨大方、旅遊度假伴侶',
    practice: '1. 放鬆 幽默 感恩\n2. 信任第六感\n3. 運用知識力量\n4. 送禮物',
    mines: '討厭別人講話慢條斯理、不斷重複',
  },
  8: {
    luckyColor: '金色',
    colorHex: '#D4A017',
    loveStyle: '經營感情是一種投資',
    keyword: '商業、洞察遠見、氣魄、權力、執行組織、存錢',
    special: '察言觀色、深思熟慮、重視成就感、善用錢&權、曖昧、挑逗',
    practice: '1. 愛錢但不貪\n2. 掌握而非控制\n3. 培養人際關係\n4. 投射正向意念',
    mines: '對自己的事情很在乎，討厭別人拿自己的成就冷嘲熱諷',
  },
  9: {
    luckyColor: '白色',
    colorHex: '#BDC3C7',
    loveStyle: '夢中情人、靈魂伴侶',
    keyword: '博愛、樂觀、同理心、希望、關懷、分享',
    special: '迷戀崇拜偶像、有智慧有深度、隨緣、成全他人',
    practice: '1. 實踐夢想\n2. 腳踏實地\n3. 修練提高智慧\n4. 有捨才有得',
    mines: '不喜歡過度鑽研，或被強迫做沒興趣的事情',
  },
};

const PRACTICE_DATA: Record<number, string> = {
  0: '【 0 】的鍛鍊：\n1. 警覺性的思維\n2. 集中力量\n3. 把握機緣\n4. 擁抱自然',
  1: '【 1 】的鍛鍊：\n1. 設定明確目標\n2. 累積實力經驗\n3. 挑戰整個過程',
  2: '【 2 】的鍛鍊：\n1. 真誠表達自己\n2. 逆向思考\n3. 接受與包容\n4. 做足事前準備',
  3: '【 3 】的鍛鍊：\n1. 學說話的藝術\n2. 客觀中性立場\n3. 發揮創意與敏銳力',
  4: '【 4 】的鍛鍊：\n1. 清晰決策力\n2. 具體行動力\n3. 承擔責任與結果\n4. 打破舊有習氣',
  5: '【 5 】的鍛鍊：\n1. 找到心之所向\n2. 勇敢冒險\n3. 解開心結\n4. 全力以赴',
  6: '【 6 】的鍛鍊：\n1. 付出剛剛好的愛\n2. 共創彈性與雙贏\n3. 優雅謙虛',
  7: '【 7 】的鍛鍊：\n1. 放鬆 幽默 感恩\n2. 信任第六感\n3. 運用知識力量\n4. 送禮物',
  8: '【 8 】的鍛鍊：\n1. 愛錢但不貪\n2. 掌握而非控制\n3. 培養人際關係\n4. 投射正向意念',
  9: '【 9 】的鍛鍊：\n1. 實踐夢想\n2. 腳踏實地\n3. 修練提高智慧\n4. 有捨才有得',
};

export function getPracticeText(n: number): string {
  return PRACTICE_DATA[n] ?? PRACTICE_DATA[1];
}

export function calculateLoveNumber(
  name: string,
  gender: string,
  dateStr: string,       // YYYY-MM-DD
  timeStr: string,       // HH:mm or empty
): LoveNumberResult {
  const dateParts = dateStr.split('-').map(Number);
  const [year, month, day] = dateParts;

  // 農曆近似
  const lunar = solarToLunar(year, month, day);
  const lunarDateStr = `${lunar.year}-${String(lunar.month).padStart(2, '0')}-${String(lunar.day).padStart(2, '0')}`;

  const dateDigits = dateStr.split('').filter(c => c !== '-');
  const lunarDigits = lunarDateStr.split('').filter(c => c !== '-');
  const timeDigits = timeStr ? timeStr.split('').filter(c => c !== ':') : [];
  const fullDigits = [...dateDigits, ...timeDigits];
  const fullLunarDigits = [...lunarDigits, ...timeDigits];

  // 計算流年日期
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  let sYear = currentYear;
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    sYear = currentYear - 1;
  }
  const sDateStr = `${sYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const crossYear = year > lunar.year;
  const lSYear = sYear - (crossYear ? 1 : 0);
  const lDateStr = `${lSYear}-${String(lunar.month).padStart(2, '0')}-${String(lunar.day).padStart(2, '0')}`;
  const sDateDigits = sDateStr.split('').filter(c => c !== '-');
  const lDateDigits = lDateStr.split('').filter(c => c !== '-');

  // 12 組後天數
  const backNumbers: string[][] = [];
  const pad2 = (n: number) => n.toString().padStart(2, '0').split('');

  backNumbers[0] = pad2(sumArr(dateDigits.slice(0, 4).map(Number)));
  backNumbers[1] = pad2(sumArr(dateDigits.slice(0, 6).map(Number)));
  backNumbers[2] = pad2(sumArr(dateDigits.map(Number)));
  backNumbers[3] = pad2(sumArr(fullDigits.slice(0, 10).map(Number)));
  backNumbers[4] = pad2(sumArr(fullDigits.map(Number)));
  backNumbers[5] = pad2(sumArr(lunarDigits.slice(0, 4).map(Number)));
  backNumbers[6] = pad2(sumArr(lunarDigits.slice(0, 6).map(Number)));
  backNumbers[7] = pad2(sumArr(lunarDigits.map(Number)));
  backNumbers[8] = pad2(sumArr(fullLunarDigits.slice(0, 10).map(Number)));
  backNumbers[9] = pad2(sumArr(fullLunarDigits.map(Number)));
  backNumbers[10] = pad2(sumArr(sDateDigits.map(Number)));
  backNumbers[11] = pad2(sumArr(lDateDigits.map(Number)));

  const secondBackNumbers: string[][] = [];
  const mainNumbers: string[] = [];

  for (let i = 0; i < 12; i++) {
    const { second, main } = reduceToSingle(backNumbers[i]);
    secondBackNumbers[i] = second;
    mainNumbers[i] = main;
  }

  // 主命數取 index 3 (陽曆生日+時辰)
  const mainNumber = parseInt(mainNumbers[3]) || 1;

  // 鍛鍊數字 = backNumbers[3] + secondBackNumbers[3] 去重
  const practiceNumbers: number[] = [];
  for (const d of backNumbers[3]) {
    const n = parseInt(d);
    if (!practiceNumbers.includes(n)) practiceNumbers.push(n);
  }
  for (const d of secondBackNumbers[3]) {
    const n = parseInt(d);
    if (!practiceNumbers.includes(n)) practiceNumbers.push(n);
  }

  const data = NUMBER_DATA[mainNumber] || NUMBER_DATA[1];

  return {
    mainNumber,
    ...data,
    practiceNumbers,
    backNumbers,
    secondBackNumbers,
    mainNumbers,
    name,
    gender,
    date: dateStr,
    lunarDate: lunarDateStr,
  };
}

/** 主命數對應的漸層背景色 */
export function getNumberGradient(n: number): string {
  const gradients: Record<number, string> = {
    1: 'from-red-500 to-rose-400',
    2: 'from-orange-400 to-amber-300',
    3: 'from-yellow-400 to-amber-200',
    4: 'from-emerald-500 to-green-400',
    5: 'from-blue-500 to-sky-400',
    6: 'from-indigo-500 to-violet-400',
    7: 'from-purple-500 to-fuchsia-400',
    8: 'from-yellow-600 to-amber-500',
    9: 'from-gray-400 to-slate-300',
  };
  return gradients[n] || gradients[1];
}

/** 主命數對應的強調色 */
export function getNumberAccent(n: number): string {
  const accents: Record<number, string> = {
    1: '#E74C3C',
    2: '#E67E22',
    3: '#F1C40F',
    4: '#27AE60',
    5: '#2980B9',
    6: '#8E44AD',
    7: '#9B59B6',
    8: '#D4A017',
    9: '#BDC3C7',
  };
  return accents[n] || accents[1];
}
