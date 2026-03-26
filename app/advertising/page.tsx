'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SiteShell } from '@/components/site-shell';

const BASE10 = '/images/original/shesay.com/wp-content/uploads/2023/10/';
const BASE11 = '/images/original/shesay.com/wp-content/uploads/2023/11/';

const brandIcons = [
  { icon: BASE10 + 'abouticon-4.png', name: '戀愛小秘書娜米', tag: '線上諮詢｜戀愛｜配對', stat: '粉絲總數超過15萬人' },
  { icon: BASE10 + 'abouticon-3.png', name: 'eros主題派對', tag: '線下活動｜交友｜聯誼', stat: '舉辦超過2000場實體活動' },
  { icon: BASE10 + 'abouticon-5.png', name: 'SheSay', tag: '女性社群｜兩性｜媒體', stat: '實名單身會員超過10萬人' },
  { icon: BASE10 + 'abouticon-1.png', name: '尋夢園聊天室', tag: '高黏著度｜社群｜溝通', stat: '會員人數突破3百萬人' },
  { icon: BASE10 + 'abouticon-2.png', name: '尋夢新聞', tag: '高流量｜新聞｜內容', stat: '單月瀏覽量5百萬人次' },
];

const coreValues = [
  { icon: BASE11 + 'earth.png', title: '展現您的品牌' },
  { icon: BASE11 + 'market.png', title: '獲取更大的流量' },
  { icon: BASE11 + 'rating.png', title: '培養品牌忠誠度' },
  { icon: BASE11 + 'conversion.png', title: '轉換率最大化' },
  { icon: BASE11 + 'opportunity.png', title: '搜尋引擎能見度' },
  { icon: BASE11 + 'knowledge.png', title: '潛在用戶新機會' },
];

const services: { title: string; images: string[]; desc: string; gallery?: string[]; cols?: number }[] = [
  {
    title: '整體商品形象企劃',
    desc: '市場分析、競爭者研究、活動促銷、產品分享、品牌調性、視覺設計',
    images: [BASE10 + 'LINE-scaled.jpg', BASE10 + '產品-scaled.jpg', BASE10 + '活動、品牌-scaled.jpg'],
  },
  {
    title: 'SEO優化服務',
    desc: '我們操作SEO已有20多年經驗，許多我們的文章都在Google搜尋排名第一頁。代表案例：得意人生－瑪卡如何幫助男性、小白牙－平價冷光美白體驗、得意人生－娜米帶你了解膠原蛋白',
    images: [BASE10 + '瑪卡一.png', BASE10 + '瑪卡二.png', BASE10 + '牙齒美白一.png', BASE10 + '牙齒美白二.png', BASE10 + '膠原蛋白一.png', BASE10 + '膠原蛋白二.png'],
  },
  {
    title: '社群平台分享',
    desc: '推廣品牌：MENZ洗面乳、UNIQMAN瑪卡、UNIQMAN男性私密慕斯、蹦薏仁',
    images: [],
    gallery: [BASE10 + 'MENZ-洗面乳.png', BASE10 + 'UNIQMAN-瑪卡.png', BASE10 + 'UNIQMAN-男性私密慕斯.png', BASE10 + '蹦薏仁.png'],
    cols: 4,
  },
  {
    title: '商品素材照拍攝',
    desc: 'StyleUP、WEMO、得意人生等品牌合作案例',
    images: [BASE10 + 'StyleUP-01.jpg', BASE10 + 'StyleUP-02.jpg', BASE10 + 'StyleUP-03.jpg', BASE10 + 'WEMO-01.jpg', BASE10 + 'WEMO-02.jpg', BASE10 + 'WEMO-03.jpg', BASE10 + '得意人生-01-立多士EXB群糖衣錠.jpg', BASE10 + '得意人生-02-膠原蛋白左旋Ｃ.jpg', BASE10 + '得意人生-03-魚麟膠原蛋白胜肽.jpg'],
  },
  {
    title: 'Banner製作',
    desc: '創意和專業設計的網路橫幅廣告製作',
    images: [BASE11 + '廣告合作Sales-Kits拷貝2.png', BASE11 + '廣告合作Sales-Kits拷貝.png', BASE11 + '廣告合作Sales-Kits.png'],
  },
  {
    title: '宣傳影片拍攝',
    desc: '完整的影片製作服務，從腳本到後製一手包辦。',
    images: [],
  },
  {
    title: '新聞媒體上稿',
    desc: '配合撰寫新聞稿並上稿至多家新聞平台',
    images: [BASE10 + 'Yahoo-新聞.png', BASE10 + '數位時代－交友也要O2O.png', BASE10 + '蕃薯藤－直播主.jpg', BASE10 + '台灣生活網－怎樣才能受女生歡迎.jpg', BASE10 + '台灣好新聞－提升男生談吐舉止.png', BASE10 + '台灣好新聞－不合理該被改變專訪.png', BASE10 + '台灣好新聞－直播玩心理測驗增信心.png'],
    gallery: [BASE11 + 'yahoo-news.png', BASE11 + 'Foto-1-Logo-LINE-TODAY-Logo-1.png', BASE11 + 'pchome-news.png', BASE11 + 'logo.png', BASE11 + 'icon-mo-03.png', BASE11 + '1200px-YamMedia_logo.svg.png', BASE11 + 'ceihopxw1sczmhwgqqas.png', BASE11 + '下載.png', BASE11 + 'logo-hinet新聞-e1699424213530.png'],
    cols: 5,
  },
  {
    title: '廣告投放',
    desc: 'LINE廣告操作（10項服務）：整體商品形象企劃、Banner製作企劃、LINE互動訊息腳本設計、心理測驗互動設計、輪盤抽獎互動設計、促發購買腳本設計、贈品領取腳本設計、引發分享腳本設計、LINE圖文選單設計、推播訊息設計。FB/IG廣告操作（10項服務）：整體品牌形象企劃、FB/IG貼文企劃、商品使用心得分享、商品幕後花絮分享、心理測驗互動設計、輪盤抽獎互動設計、促發購買腳本設計、贈品領取腳本設計、引發分享腳本設計、推播訊息設計。PTT廣告操作（5項服務）：整體品牌形象企劃、PTT文章原生廣告設計、商品使用心得分享、教學文章分享、引發購買廣告設計。',
    images: [BASE10 + 'LINE-scaled.jpg', BASE10 + '活動、品牌-scaled.jpg', BASE10 + '產品-scaled.jpg', BASE10 + 'ptt-1024x577.jpg'],
  },
  {
    title: '會員受眾推播',
    desc: '電子報寄送、LINE@訊息推播、FB/IG訊息推播、戀愛諮詢節目推播、開場選單置入、心理測驗設計、加好友送禮、抽獎、圖文選單',
    images: [],
    gallery: [BASE11 + 'shesay廣告網頁-1-2.png', BASE11 + 'shesay廣告網頁-1拷貝-1.png', BASE11 + 'shesay廣告網頁-1拷貝2-1.png', BASE11 + 'shesay廣告網頁-1拷貝3-1.png', BASE11 + 'shesay廣告網頁-1拷貝4-1.png'],
    cols: 5,
  },
  {
    title: '活動主持',
    desc: '資策會 Ideas Show 主持、無人機發表記者會主持、Facebook Developer Circle 主持',
    images: [BASE10 + '主持-Facebook-developer-circle.jpg', BASE10 + '主持-IDEA-show.jpg', BASE10 + '主持-無人機記者會-02.jpg'],
    gallery: [
      BASE10 + '20228761_10155585086482451_4144992449215944474_n.jpeg',
      BASE10 + '20155912_10155585086132451_4712331379524426833_n.jpeg',
      BASE10 + '20156179_10155585086797451_5218153064452995253_n.jpeg',
      BASE10 + '36915052_10156551965547451_7159693659045101568_n.jpeg',
      BASE10 + '36879483_10156551965927451_8599583068526739456_n.jpeg',
      BASE10 + '36942813_10156551965007451_5013173093036720128_n.jpeg',
      BASE10 + '36869734_10156551965102451_1126295370251370496_n.jpeg',
    ],
    cols: 4,
  },
];

function Accordion({ items }: { items: typeof services }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.title} className="overflow-hidden rounded-2xl border border-[#DFDFE2] bg-white">
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="flex w-full items-center justify-between p-5 text-left transition hover:bg-blush"
          >
            <span className="flex items-center gap-3">
              <span className="text-xs font-bold text-rose">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-base font-bold text-plum">{item.title}</span>
            </span>
            <svg className={`h-5 w-5 shrink-0 text-plum/50 transition ${open === idx ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
          </button>
          {open === idx && (
            <div className="border-t border-[#DFDFE2] px-5 pb-5 pt-4">
              <p className="text-sm leading-7 text-[#54595F]">{item.desc}</p>
              {/* Gallery images (product shots, logos) */}
              {item.gallery && item.gallery.length > 0 && (
                <div className={`mt-4 grid gap-3`} style={{ gridTemplateColumns: `repeat(${item.cols || 3}, minmax(0, 1fr))` }}>
                  {item.gallery.map((src) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-[#f8f8f8]">
                      <Image src={src} alt="" fill className="object-contain p-1" sizes="150px" />
                    </div>
                  ))}
                </div>
              )}
              {/* Carousel/grid images */}
              {item.images.length > 0 && (
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {item.images.map((src) => (
                    <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AdvertisingPage() {
  return (
    <SiteShell>
      <main className="bg-[#FBFBFB]">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold tracking-tight text-plum md:text-4xl">SheSay 她說｜打造魅力自我</h1>
              <p className="mt-5 text-sm leading-8 text-[#54595F]">
                自1999年10月15日上線以來，一直致力為女性們自由表達、提升魅力、解決愛情難題的平台。我們孕育了一群對SheSay深具品牌認同和自豪感的女性鐵粉，這群有著高消費力的職場女性，追求時尚潮流、獨立自主的生活態度。
              </p>
            </div>
            <div className="relative aspect-[1000/709] w-full lg:w-1/2">
              <Image src={BASE10 + '戀愛會社-小秘書-娜米-1.jpg'} alt="SheSay 廣告合作" fill className="rounded-2xl object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        {/* 品牌圈 */}
        <section className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
          <h2 className="text-center text-2xl font-bold text-plum">SheSay 品牌圈組成</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-5">
            {brandIcons.map((b) => (
              <div key={b.name} className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-soft transition hover:translate-y-1">
                <div className="relative h-16 w-16">
                  <Image src={b.icon} alt={b.name} fill className="object-contain" sizes="64px" />
                </div>
                <p className="mt-3 text-sm font-bold text-plum">{b.name}</p>
                <p className="mt-1 text-xs text-[#54595F]/70">{b.tag}</p>
                <p className="mt-1 text-xs text-rose">{b.stat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 核心價值 */}
        <section className="bg-white/70 py-12">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <h2 className="text-center text-2xl font-bold text-plum">行銷方案核心價值</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3 md:grid-cols-6">
              {coreValues.map((v) => (
                <div key={v.title} className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-soft transition hover:translate-y-1">
                  <div className="relative h-14 w-14">
                    <Image src={v.icon} alt={v.title} fill className="object-contain" sizes="56px" />
                  </div>
                  <p className="mt-3 text-xs font-bold text-plum">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 服務項目 (手風琴) */}
        <section className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
          <h2 className="text-2xl font-bold text-plum">服務項目</h2>
          <div className="mt-8">
            <Accordion items={services} />
          </div>
        </section>

        {/* 合作理念 + 聯絡 */}
        <section className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#DFDFE2] bg-white p-8">
              <h2 className="text-xl font-bold text-plum">合作理念</h2>
              <p className="mt-4 text-sm leading-8 text-[#54595F]">
                我們注重的不僅是傳達訊息，更是傳達心意。過去，我們精心挑選與我們價值理念相符的合作夥伴，僅與真誠且值得信賴的品牌攜手。我們追求真實可靠，言之有據，唯有如此，才能獲得廣大受眾的共鳴和信任。
              </p>
            </div>
            <div className="rounded-[2rem] bg-plum p-8 text-white">
              <h2 className="text-xl font-bold">廣告合作洽詢</h2>
              <p className="mt-4 text-sm leading-8 text-white/80">歡迎來信討論合作方案，我們將盡快回覆您。</p>
              <a href="mailto:ad@shesay.com" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:bg-sand">
                ad@shesay.com
              </a>
              <p className="mt-4 text-xs text-white/50">廣告合作信箱</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
