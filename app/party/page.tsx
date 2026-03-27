import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '聯誼派對',
  description: 'SheSay 聯誼派對活動——娛樂遊戲、美食饗宴、手作體驗、戶外運動等多種主題，讓單身男女自然互動。',
  openGraph: {
    title: '聯誼派對 — SheSay',
    description: 'SheSay 聯誼派對——娛樂遊戲、美食饗宴、手作體驗等多種主題，讓單身男女自然互動。',
  },
};

const BASE = '/images/original/shesay.com/wp-content/uploads/2023/11/';

const categories = [
  {
    id: '娛樂遊戲',
    activities: [
      { title: '鐳射槍與漆彈', href: '/blog/83509/', img: BASE + '1.png' },
      { title: '桌遊派對遊戲', href: '/blog/83508/', img: BASE + '10379865_385912448249347_2126902594935315737_o-960x540-1.jpeg' },
      { title: '鏢準情人｜命中愛情紅心', href: '/blog/10427/', img: BASE + '1316-768x538-1.jpeg' },
    ],
  },
  {
    id: '廚藝教室',
    activities: [
      { title: '美味料理｜幸福好味道', href: '/blog/84968/', img: BASE + '1309-678x381-1.jpeg' },
      { title: '和風創意｜壽司DIY', href: '/blog/84858/', img: BASE + '275113f2cb61f4c3b4bc6d3edcb1248e.jpeg' },
      { title: '美味鮭魚｜品味愛情的美妙滋味！', href: '/blog/84857/', img: BASE + 'ev_cd416212ab_1450500908-768x512-1.jpeg' },
    ],
  },
  {
    id: '手作體驗',
    activities: [
      { title: '多肉植物｜愛在蔓延時', href: '/blog/84951/', img: BASE + 'YWB32VA1BFO55VQW2.png' },
      { title: '第六感手拉坯', href: '/blog/84962/', img: BASE + '163966-678x381-1.jpeg' },
      { title: '療癒的浪漫小物｜浮游花手作趣', href: '/blog/84865/', img: BASE + '1697009498737.jpeg' },
    ],
  },
  {
    id: '甜點烘培',
    activities: [
      { title: '蜜糖吐司手作趣', href: '/blog/84943/', img: BASE + '04X1PF462E000D19D76B4Bpx-678x509-1.jpeg' },
      { title: '自己做｜烘焙妳的甜心蛋糕', href: '/blog/84867/', img: BASE + '360092070_606105934960619_363698282878880428_n.jpeg' },
      { title: 'FUEGO巧克力傳情', href: '/blog/84855/', img: BASE + 'ev_8c0723be28_1445396497-768x509-1.jpeg' },
    ],
  },
  {
    id: '室內聚會',
    activities: [
      { title: '貓咪咖啡廳｜喵星人派對', href: '/blog/84852/', img: BASE + 'e6f15b6e34b04f5fa7fde12cbd2e453d.jpeg' },
      { title: '水上騎馬打仗 清涼刺激的泳池Party', href: '/blog/84959/', img: BASE + 'img-2-426x351-1.jpeg' },
      { title: '阿根廷探戈', href: '/blog/84967/', img: BASE + '1336-768x402-1.jpeg' },
    ],
  },
  {
    id: '戶外郊遊',
    activities: [
      { title: '浪漫石門放風箏', href: '/blog/83510/', img: BASE + 'w600h600r16888.jpeg' },
      { title: '遊艇派對｜海上的浪漫', href: '/blog/84956/', img: BASE + '1307-678x381-2.jpeg' },
      { title: '七夕の園遊祭', href: '/blog/84868/', img: BASE + '1M9A8315-1024x683-1.jpeg' },
    ],
  },
  {
    id: '專業講座',
    activities: [
      { title: '型男培養講堂：如何培養迷人的個性', href: '/blog/84860/', img: BASE + '2.jepg_-2048x1600.jpg' },
      { title: '戀愛講座：排約或約會，高手會怎麼做？', href: '/blog/84854/', img: BASE + 'd1201119.jpeg' },
      { title: '「干物女大變身」美膚彩妝造型班', href: '/blog/66266/', img: BASE + 'ev_ecad1ceeec_1545037467-768x512-1.jpeg' },
    ],
  },
  {
    id: 'VIP限定',
    activities: [
      { title: 'K歌派對-歌聲傳情', href: '/blog/84859/', img: BASE + 'event03.jpeg' },
      { title: '盛夏微醺園遊祭', href: '/blog/84866/', img: BASE + 'DSC00020_副本.jpeg' },
      { title: '一對一快速約會（Speed Dating）', href: '/blog/84871/', img: BASE + 'event01-768x768-1.jpeg' },
    ],
  },
];

const benefits = [
  {
    icon: BASE + 'icon_main_6.png',
    title: '豐富主題活動',
    desc: '每月不同的主題活動，讓你在歡樂互動中享受各種多彩多姿的體驗，豐富一成不變的無趣生活！',
  },
  {
    icon: BASE + 'icon_main_5.png',
    title: '提升自我魅力',
    desc: '形象教練量身打造專屬的穿搭風格，以及傳授不冷場的聊天應對技巧，你就是最耀眼的PARTY KING！',
  },
  {
    icon: BASE + 'icon_main_7.png',
    title: '輕鬆拓展人脈',
    desc: '工作環境一成不變，難以拓展交友圈，eros超過百種的主題活動，讓你找到志同道合、想法相近的好夥伴。',
  },
];

const featured = [
  { title: '夕陽情懷｜淡水河畔騎車趣', href: '/blog/84863/', img: BASE + 'P-1521774-DFFDB604O-768x512-1.jpeg' },
  { title: '愜意情調｜滿天星花賞夜趣', href: '/blog/84864/', img: BASE + '88d5472e926dcd6bf913b0af5195e88b_副本_副本-687x1024-1.png' },
  { title: '手工製作玫瑰蘋果塔', href: '/blog/83517/', img: BASE + '20231014手作蘋果塔-768x475-1.jpeg' },
  { title: '鮭魚料理｜吃心絕對', href: '/blog/84949/', img: BASE + '1260-768x472-1.jpeg' },
  { title: '非誠勿擾｜快速換桌', href: '/blog/84964/', img: BASE + '164332-768x502-1.jpeg' },
  { title: '魔女烘培｜愛情魔力再現', href: '/blog/84946/', img: BASE + '1311-678x381-1.jpeg' },
  { title: 'Ｋ歌派對｜情聲綿綿', href: '/blog/84950/', img: BASE + 'YWB32VA1BFO55VQW2-1-768x477-1.png' },
  { title: '烹然心動｜回鮭愛的原點', href: '/blog/84955/', img: BASE + '1266-678x381-1.jpeg' },
  { title: '巧克力情人夢', href: '/blog/84966/', img: BASE + 'art.jpeg' },
  { title: '溯溪聯誼活動', href: '/blog/83518/', img: BASE + 'tn_P5210561-678x509-1.jpeg' },
  { title: '天生絕配｜桌遊對對碰', href: '/blog/84948/', img: BASE + '1262-768x646-1.jpeg' },
  { title: '心心相印｜情牽護理師', href: '/blog/84947/', img: BASE + 'u1836360752199427797fm30app106fJPEG.jpeg' },
  { title: '密室逃脫聯誼', href: '/blog/83511/', img: BASE + 'I3HFCBUPA67NZ0A_N.png' },
  { title: '綠意盎然｜多肉植物DIY', href: '/blog/84862/', img: BASE + 'BHWQOX46V746ZQS.png' },
  { title: '一對一精緻客製化專屬約會', href: '/blog/84856/', img: BASE + 'ev_d92c8926ce_1555391132.jpeg' },
];

const categoryIcons: Record<string, string> = {
  '娛樂遊戲': '🎮',
  '廚藝教室': '🍳',
  '手作體驗': '✂️',
  '甜點烘培': '🧁',
  '室內聚會': '🏠',
  '戶外郊遊': '⛰️',
  '專業講座': '📖',
  'VIP限定': '👑',
};

const regions = ['台北', '新竹', '台中', '台南', '高雄'];

const steps = [
  { num: '01', title: '加入官方LINE', desc: '加入 SHESAY 的官方 LINE\nLINE ID：@shesay' },
  { num: '02', title: '填寫個人資料', desc: '依照流程填寫個人資料，等候戀愛小秘書進行資料驗證與配對數據分析' },
  { num: '03', title: '參加單身聯誼活動', desc: '資料驗證完成，開始安排約會，參加各種有趣的單身聯誼活動！' },
];

export default function PartyPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section>
          <a href="https://lin.ee/UtgCipOq" className="relative block w-full overflow-hidden aspect-[2553/945]">
            <Image
              src="/images/banners/banner-party.png"
              alt="聯誼派對活動"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </a>
          {/* 錨點導航列 — 手機 4 欄 grid 換行，桌面橫排 */}
          <div className="sticky top-[57px] z-20 border-b border-plum/10 bg-white/95 backdrop-blur sm:top-[65px]">
            <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2 px-3 py-2.5 sm:flex sm:justify-center sm:gap-2 sm:px-6 sm:py-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex flex-col items-center gap-0.5 rounded-xl border border-plum/10 bg-white/60 px-1 py-2 text-center text-plum/70 transition hover:border-rose hover:bg-rose/5 hover:text-rose sm:flex-row sm:gap-1.5 sm:rounded-full sm:px-4 sm:py-2"
                >
                  <span className="text-lg leading-none sm:text-base">{categoryIcons[cat.id] || '📌'}</span>
                  <span className="text-[10px] font-semibold leading-tight sm:text-sm">{cat.id}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 活動類別 */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="space-y-10 sm:space-y-14">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28 sm:scroll-mt-32">
                <div className="flex items-center gap-2 border-b border-plum/10 pb-3">
                  <span className="text-lg">{categoryIcons[cat.id] || '📌'}</span>
                  <h2 className="text-xl font-bold text-plum sm:text-2xl">{cat.id}</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-5">
                  {cat.activities.map((act) => (
                    <a
                      key={act.title}
                      href={act.href}
                      className="group overflow-hidden rounded-xl bg-white shadow-soft transition hover:shadow-lg sm:rounded-2xl"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={act.img}
                          alt={act.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-3 sm:p-4">
                        <p className="text-xs font-semibold leading-5 text-plum sm:text-sm">{act.title}</p>
                        <p className="mt-1 text-[10px] font-medium text-rose sm:mt-2 sm:text-xs">查看活動詳情 »</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 三大優勢 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">
              甩開冰冷螢幕，一起找回面對面的感動吧！
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map((b) => (
                <article key={b.title} className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-soft">
                  <div className="relative h-16 w-16">
                    <Image src={b.icon} alt={b.title} fill className="object-contain" sizes="64px" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-plum">{b.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-plum/70">{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 預約參加 + 地區 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">
            現在就預約參加活動吧！
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <a
                key={r}
                href="https://lin.ee/UtgCipOq"
                className="rounded-full border border-plum/20 bg-white px-8 py-2.5 text-sm font-semibold text-plum transition hover:border-rose hover:text-rose"
              >
                {r}
              </a>
            ))}
          </div>

          {/* 精選活動 */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
            {featured.map((f) => (
              <a
                key={f.title}
                href={f.href}
                className="group overflow-hidden rounded-xl bg-white shadow-soft sm:rounded-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <p className="text-[10px] font-semibold leading-4 text-plum sm:text-xs sm:leading-5">{f.title}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://lin.ee/UtgCipOq"
              className="inline-flex rounded-full bg-rose px-10 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              我要參加
            </a>
          </div>
        </section>

        {/* 3步驟 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum">只要３步驟 輕鬆認識異性</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <article key={s.num} className="rounded-3xl bg-white p-8 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose">{s.num}</p>
                  <h3 className="mt-4 text-xl font-semibold text-plum">{s.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-plum/75">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 底部 CTA */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h2 className="text-3xl font-bold text-white">戀愛的事更要讓專業的來！</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
              積極參加活動，輕鬆突破單身圈！小秘書幫您策劃活動，人來就好免煩惱～讓您專注在深度交流，獲得高品質互動經驗。馬上聯絡戀愛小秘書娜米，今年穩交不是夢！
            </p>
            <a
              href="https://lin.ee/UtgCipOq"
              className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              加LINE洽詢單身聯誼活動
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
