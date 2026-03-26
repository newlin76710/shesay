import Image from 'next/image';
import { SiteShell } from '@/components/site-shell';

const BASE10 = '/images/original/shesay.com/wp-content/uploads/2023/10/';
const BASE11 = '/images/original/shesay.com/wp-content/uploads/2023/11/';

const channels = [
  { name: '愛情醫學院', img: BASE11 + '12.17.png' },
  { name: '哈日浪潮', img: BASE11 + '12.04.png' },
  { name: '陽光健身', img: BASE11 + '11.58.png' },
  { name: '魔女水晶', img: BASE11 + '11.51.png' },
  { name: '流行尖端', img: BASE11 + '11.46.png' },
  { name: '勁爆娛樂', img: BASE11 + '11.42.png' },
  { name: '遨遊四方', img: BASE11 + '11.38.png' },
  { name: '玫瑰性情', img: BASE11 + '12.10-e1700097804437.png' },
  { name: '悠遊職場', img: BASE11 + '11.55-e1700097774643.png' },
  { name: '美饌食堂', img: BASE11 + '11.33-e1700097711580.png' },
];

const historicalPhotos = [
  BASE11 + 'b拷貝3.jpg',
  BASE11 + 'a-1.jpg',
  BASE11 + 'c拷貝.jpg',
  BASE11 + 'd拷貝-1.jpg',
];

const celebrities = [
  '羅志祥', '王心凌', '盧廣仲', '蕭亞軒', '蕭敬騰', '溫嵐', '方大同', '郭采潔', '周湯豪',
  '徐佳瑩', '謝和弦', '戴愛玲', '蔡健雅', '大嘴巴', 'dream-girls', '李聖傑', '鄧福如',
  '酷愛樂團', '黃文星', '郭書瑤', '張芸京', '神木與瞳',
];

const timeline = [
  { year: '1999', date: '1999-10-15', event: 'SheSay.com 正式上線，成為專為女性打造的網路社群平台。' },
  { year: '2000', date: '2000-01-05', event: '推出「養個男人來消遣」虛擬養成遊戲，創造百萬點擊話題。' },
  { year: '2000', date: '2000-06', event: '推出「養男人 2.0」，月活躍用戶突破新高。' },
  { year: '2001', date: '2001-04-30', event: 'SheSay 會員人數突破 35 萬，單日流量達 100 萬次。' },
  { year: '2003', date: '2003-03-10', event: '推出「愛情醫學院」愛情求救專欄，並集結出版成書。' },
  { year: '2003', date: '2003-06', event: '推出「手機養男人」，以女性為主導設條件尋找理想對象。' },
  { year: '2005', date: '2005-04-29', event: '昱科網路收購 SheSay，經營權轉移至尋夢園聊天室團隊。' },
  { year: '2007', date: '2007', event: '推出「明星聊天室」，羅志祥、王心凌等 23 位藝人參與，引爆話題。' },
  { year: '2014', date: '2014', event: '推出 eros 主題派對，發展多元實體單身聯誼活動平台。' },
  { year: '2020', date: '2020', event: '建立「戀愛小秘書－娜米」團隊，提供一對一專業紅娘諮詢服務。' },
  { year: '2022', date: '2022', event: '推出「戀愛密碼諮詢服務」，以彩虹數字解析個人戀愛藍圖。' },
  { year: '2023', date: '2023', event: '推出「戀愛會社」Podcast 與 YouTube 節目，累積大量忠實聽眾。' },
  { year: '2023', date: '2023-09', event: '「養個男人來消遣」轉型為女性友善的現代交友配對服務。' },
];

const brands = [
  {
    icon: BASE10 + 'abouticon-1.png',
    name: '尋夢園聊天室',
    url: 'https://ek21.com/',
    tag: '高黏著度 | 社群 | 溝通',
    stat: '總會員人數突破3百萬人',
    desc: '台灣最大的匿名聊天社群平台，提供各類聊天室與即時互動功能，會員人數突破三百萬，是台灣歷史最悠久的網路聊天平台之一。',
  },
  {
    icon: BASE10 + 'abouticon-2.png',
    name: '尋夢新聞',
    url: 'https://ek21.com/news/',
    tag: '高流量 | 新聞 | 內容',
    stat: '每月瀏覽人次達 500 萬',
    desc: '涵蓋娛樂、戲劇、寵物、動漫、時尚、健康、愛情七大內容類別，每月吸引數百萬次瀏覽，是台灣重要的生活娛樂資訊平台。',
  },
  {
    icon: BASE10 + 'abouticon-3.png',
    name: 'eros主題派對',
    url: 'https://erosparty.club',
    tag: '線下活動 | 交友 | 聯誼',
    stat: '聯誼派對 1,013場 / 單身會員 103,089位 / 戀愛講座 724場',
    desc: '台灣規模最大的主題式單身聯誼平台，舉辦超過千場活動，包含廚藝、手作、戶外、VIP 等多元類型，協助單身男女在真實互動中找到緣分。',
  },
  {
    icon: BASE10 + 'abouticon-5.png',
    name: 'SheSay 女性社群媒體',
    url: '/',
    tag: '女性 | 社群 | 媒體',
    stat: '成立於 1999 年，台灣最資深女性社群',
    desc: '為女性提供戀愛、時尚、健康、美食等多元內容，是陪伴台灣女性超過 25 年的數位社群平台。',
  },
  {
    icon: BASE10 + 'abouticon-4.png',
    name: '戀愛小秘書娜米',
    url: 'https://lin.ee/o4lCgwJ',
    tag: '線上諮詢 | 戀愛 | 配對',
    stat: '一對一個人化戀愛諮詢',
    desc: '由第二代經營者娜米主持，提供一對一線上戀愛諮詢服務。透過彩虹數字解析每位個案的戀愛特質，協助找到適合的對象與互動方式。',
  },
];

const namiTimeline = [
  { year: '2013', event: '留美攻讀 MBA 回台，接手經營尋夢園聊天室與 SheSay。' },
  { year: '2014', event: '創立 eros 主題派對，擅長網路行銷與 SEO 操作。' },
  { year: '2014', event: '首次受邀至學術單位演講，分享網路創業與數位行銷經驗。' },
  { year: '2017', event: '多次獲得創業競賽冠軍，受邀擔任創業導師。' },
  { year: '2020', event: '創立「戀愛小秘書娜米」品牌，開始提供一對一戀愛諮詢服務。' },
  { year: '2022', event: '取得彩虹數字諮詢師與花精療癒師資格，推出戀愛數字密碼諮詢。' },
  { year: '2023', event: '推出「戀愛會社」Podcast 與 YouTube 頻道，擔任主持人。' },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="bg-[#FBFBFB]">

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-rose">SheSay 尋夢園聊天室 尋夢新聞 eros主題派對 戀愛小秘書娜米</p>
              <p className="mt-6 text-base leading-8 text-[#54595F]">
                SheSay，不僅是全台最資深的女性社群網站，更是一個專為女性打造的獨特平台。自1999年10月15日上線以來，我們一直致力於為女性提供一個安全、溫馨的環境，讓女生們可以在這裡自由表達自己、提升魅力，解決各種戀愛難題，最終找到理想中的戀愛對象。
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft">
              <Image src={BASE10 + '活動、品牌-scaled.jpg'} alt="SheSay 關於我們" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
            </div>
          </div>
        </section>

        {/* 網站發展重要里程 + 頻道截圖 */}
        <section className="bg-white/70 py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-rose">網站發展重要里程</p>
            <h2 className="mt-2 text-center text-3xl font-bold text-plum">華人女性社群網站</h2>
            <p className="mt-2 text-center text-base text-plum/70">1999.10.15 SheSay.com 上線</p>
            <div className="mt-8 grid grid-cols-5 gap-3 sm:gap-4">
              {channels.map((ch) => (
                <div key={ch.name} className="text-center">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-soft">
                    <Image src={ch.img} alt={ch.name} fill className="object-contain p-1" sizes="(max-width: 640px) 20vw, 120px" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-plum/70">{ch.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 養個男人來消遣 */}
        <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
          <h2 className="text-2xl font-bold text-plum">養個男人來消遣</h2>
          <p className="mt-1 text-sm text-plum/60">2000-01-05 上線</p>
          <p className="mt-4 text-sm leading-7 text-[#54595F]">
            2000年推出「上網養男人」，創造高流量話題；2003年6月推出「手機養男人」，以女性為主導設條件尋找理想對象。2023年9月轉型為女性友善的交友平台。
          </p>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {historicalPhotos.map((src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft">
                <Image src={src} alt="養個男人來消遣" fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
        </section>

        {/* 愛情醫學院 */}
        <section className="bg-white/70 py-12">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="text-2xl font-bold text-plum">愛情醫學院</h2>
            <p className="mt-1 text-sm text-plum/60">2003-03-10 推出</p>
            <p className="mt-4 text-sm leading-7 text-[#54595F]">
              從愛情求救分析、出版成書，到後來發展為娜米的戀愛數字密碼解析，愛情醫學院是 SheSay 在戀愛諮詢領域的起點。2023年轉型為「娜米的戀愛數字密碼解析」，以彩虹數字為基礎提供個人化戀愛諮詢服務。
            </p>
          </div>
        </section>

        {/* 明星聊天室 */}
        <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
          <h2 className="text-2xl font-bold text-plum">明星聊天室</h2>
          <p className="mt-1 text-sm text-plum/60">2007 年推出，共 23 位藝人參與</p>
          <p className="mt-4 text-sm leading-7 text-[#54595F]">
            明星聊天室邀請眾多知名藝人在線上與粉絲互動，引爆話題。2023年轉型為 KOL 網紅媒合平台。
          </p>
          <div className="mt-6 grid grid-cols-6 gap-2 sm:grid-cols-8 md:grid-cols-11">
            {celebrities.map((name) => (
              <div key={name} className="text-center">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-soft">
                  <Image src={BASE11 + '正方－' + name + '.jpg'} alt={name} fill className="object-cover" sizes="80px" />
                </div>
                <p className="mt-1 text-[10px] text-plum/60">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 大事紀時間軸 */}
        <section className="bg-white/70 py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-plum">SheSay.com 網站大事紀</h2>
            <div className="mt-8 space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 border-l-2 border-rose/30 pb-8 pl-6 last:pb-0">
                  <div className="min-w-[72px]">
                    <span className="inline-block rounded-full bg-rose/10 px-3 py-1 text-xs font-semibold text-rose">{item.year}</span>
                  </div>
                  <div>
                    <p className="text-xs text-plum/50">{item.date}</p>
                    <p className="mt-1 text-sm leading-7 text-[#54595F]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集團品牌生態系 */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum">集團品牌生態系</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center rounded-3xl bg-white p-7 text-center shadow-soft transition hover:-translate-y-1"
                >
                  <div className="relative h-16 w-16">
                    <Image src={brand.icon} alt={brand.name} fill className="object-contain" sizes="64px" />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-rose">{brand.tag}</p>
                  <h3 className="mt-2 text-lg font-bold text-plum group-hover:text-rose">{brand.name}</h3>
                  <p className="mt-1 text-sm font-medium text-plum/60">{brand.stat}</p>
                  <p className="mt-3 text-sm leading-6 text-[#54595F]/80">{brand.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 娜米介紹 */}
        <section id="nami" className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src={BASE10 + 'RYN00597-新聞稿用-scaled-e1696996358120-1938x2048.jpg'}
                  alt="戀愛小秘書 娜米"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-rose">戀愛小秘書</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-plum">娜米 — 最專業的紅娘</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['兩性議題分析專家', '留美MBA企管碩士', '交友聊天室第二代', '彩虹數字諮詢師', '花精療癒師'].map((tag) => (
                    <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-plum">{tag}</span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-8 text-[#54595F]">
                  善於觀察，對感性的情緒與感受很敏銳，同時具有理性的管理、創新與數據分析能力。相信每個人都值得擁有幸福的愛情，透過戀愛數字密碼與一對一諮詢，幫助更多人了解自己、找到適合的對象。
                </p>
                <h3 className="mt-8 text-xl font-bold text-plum">職涯里程碑</h3>
                <div className="mt-4 space-y-4">
                  {namiTimeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="shrink-0 text-sm font-bold text-rose">{item.year}</span>
                      <p className="text-sm leading-6 text-[#54595F]">{item.event}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="https://lin.ee/o4lCgwJ"
                  className="mt-8 inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  預約娜米諮詢
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
