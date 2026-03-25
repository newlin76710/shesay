import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const brands = [
  { name: '戀愛小秘書娜米', tag: '線上諮詢｜戀愛｜配對', stat: '粉絲總數超過15萬人' },
  { name: 'eros主題派對', tag: '線下活動｜交友｜聯誼', stat: '舉辦超過2000場實體活動' },
  { name: 'SheSay', tag: '女性社群｜兩性｜媒體', stat: '實名單身會員超過10萬人' },
  { name: '尋夢園聊天室', tag: '高黏著度｜社群｜溝通', stat: '會員人數突破3百萬人' },
  { name: '尋夢新聞', tag: '高流量｜新聞｜內容', stat: '單月瀏覽量5百萬人次' },
];

const values = [
  { icon: 'abouticon-1.png', title: '展現您的品牌' },
  { icon: 'abouticon-2.png', title: '獲取更大的流量' },
  { icon: 'abouticon-3.png', title: '培養品牌忠誠度' },
  { icon: 'abouticon-4.png', title: '轉換率最大化' },
];

const services = [
  {
    num: '01',
    title: '整體商品形象企劃',
    desc: '市場分析、競爭者研究、活動促銷、產品分享、品牌調性、視覺設計',
  },
  {
    num: '02',
    title: 'SEO優化服務',
    desc: '我們操作SEO已有20多年經驗，許多我們的文章都在Google搜尋排名第一頁。代表案例：得意人生－瑪卡如何幫助男性、小白牙－平價冷光美白體驗、得意人生－娜米帶你了解膠原蛋白',
  },
  {
    num: '03',
    title: '社群平台分享',
    desc: '推廣品牌：MENZ洗面乳、UNIQMAN瑪卡、UNIQMAN男性私密慕斯、蹦薏仁',
  },
  {
    num: '04',
    title: '商品素材照拍攝',
    desc: '包含 StyleUP 與 WEMO 等品牌合作案例，提供專業商品攝影服務。',
  },
  {
    num: '05',
    title: 'Banner製作',
    desc: '創意和專業設計的網路橫幅廣告製作。',
  },
  {
    num: '06',
    title: '宣傳影片拍攝',
    desc: '完整的影片製作服務，從腳本到後製一手包辦。',
  },
  {
    num: '07',
    title: '新聞媒體上稿',
    desc: '配合撰寫新聞稿並上稿至多家新聞平台：Yahoo、Line Today、理財周刊、台灣大哥大、蕃薯藤、奧丁丁新聞、台灣旅行趣、TDN Today、Hinet新聞、Life新聞、台灣好新聞、遊戲橘子、PChome',
  },
  {
    num: '08',
    title: '廣告投放',
    desc: 'LINE廣告（10項服務）：整體商品形象企劃、Banner製作企劃、LINE互動訊息腳本設計、心理測驗互動設計、輪盤抽獎互動設計、促發購買腳本設計、贈品領取腳本設計、引發分享腳本設計、LINE圖文選單設計、推播訊息設計。FB/IG廣告（10項服務）：整體品牌形象企劃、FB/IG貼文企劃、商品使用心得分享、商品幕後花絮分享、心理測驗互動設計、輪盤抽獎互動設計、促發購買腳本設計、贈品領取腳本設計、引發分享腳本設計、推播訊息設計。PTT廣告（5項服務）：整體品牌形象企劃、PTT文章原生廣告設計、商品使用心得分享、教學文章分享、引發購買廣告設計。',
  },
  {
    num: '09',
    title: '會員受眾推播',
    desc: '電子報寄送、LINE@訊息推播、FB/IG訊息推播、戀愛諮詢節目推播、開場選單置入、心理測驗設計、加好友送禮、抽獎、圖文選單',
  },
  {
    num: '10',
    title: '活動主持',
    desc: '資策會 Ideas Show 主持、無人機發表記者會主持、Facebook Developer Circle 主持',
  },
];

const caseImages = [
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/StyleUP-01.jpg', alt: 'StyleUP 合作案例 1' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/StyleUP-02.jpg', alt: 'StyleUP 合作案例 2' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/StyleUP-03.jpg', alt: 'StyleUP 合作案例 3' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/WEMO-01.jpg', alt: 'WEMO 合作案例 1' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/WEMO-02.jpg', alt: 'WEMO 合作案例 2' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/WEMO-03.jpg', alt: 'WEMO 合作案例 3' },
];

const productImages = [
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/MENZ-洗面乳.png', alt: 'MENZ 洗面乳' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/UNIQMAN-瑪卡.png', alt: 'UNIQMAN 瑪卡' },
  { src: '/images/original/shesay.com/wp-content/uploads/2023/10/UNIQMAN-男性私密慕斯.png', alt: 'UNIQMAN 男性私密慕斯' },
];

const mediaLogos = ['Yahoo', 'Line Today', '理財周刊', '台灣大哥大', '蕃薯藤', '奧丁丁新聞', '台灣旅行趣', 'TDN Today', 'Hinet新聞', 'Life新聞', '台灣好新聞', '遊戲橘子', 'PChome'];

export default function AdvertisingPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="廣告合作"
          title="SheSay 她說｜打造魅力自我"
          description="自1999年10月15日上線以來，一直致力為女性們自由表達、提升魅力、解決愛情難題的平台。我們孕育了一群對SheSay深具品牌認同和自豪感的女性鐵粉，這群有著高消費力的職場女性，追求時尚潮流、獨立自主的生活態度。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2023/10/活動、品牌-scaled.jpg"
          imageAlt="SheSay 廣告合作"
        />

        {/* 品牌圈 */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-plum">SheSay 品牌圈組成</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {brands.map((b) => (
              <div key={b.name} className="rounded-2xl border border-plum/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold text-rose">{b.tag}</p>
                <h3 className="mt-2 text-base font-semibold text-plum">{b.name}</h3>
                <p className="mt-2 text-sm text-plum/60">{b.stat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 核心價值 */}
        <section className="bg-white/70 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-plum">行銷方案核心價值</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-soft">
                  <div className="relative h-16 w-16">
                    <Image
                      src={`/images/original/shesay.com/wp-content/uploads/2023/10/${v.icon}`}
                      alt={v.title}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <p className="mt-4 text-base font-semibold text-plum">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 服務項目 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-plum">服務項目</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.num} className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold tracking-widest text-rose">{s.num}</p>
                <h3 className="mt-2 text-xl font-semibold text-plum">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-plum/70">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 合作案例：商品照 */}
        <section className="bg-white/70 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">商品素材照合作案例</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-6">
              {caseImages.map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 16vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 社群合作品牌 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-plum">社群平台合作品牌</h2>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            {productImages.map((img) => (
              <div key={img.src} className="relative h-32 w-24 overflow-hidden rounded-xl shadow-soft">
                <Image src={img.src} alt={img.alt} fill className="object-contain" sizes="96px" />
              </div>
            ))}
          </div>
        </section>

        {/* 新聞媒體 */}
        <section className="bg-white/70 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-semibold tracking-tight text-plum">新聞媒體上稿平台</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {mediaLogos.map((name) => (
                <span key={name} className="rounded-full border border-plum/15 bg-white px-4 py-2 text-sm font-medium text-plum shadow-soft">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 合作理念 + 聯絡 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft md:p-10">
              <h2 className="text-2xl font-semibold text-plum">合作理念</h2>
              <p className="mt-5 text-base leading-8 text-plum/75">
                我們注重的不僅是傳達訊息，更是傳達心意。過去，我們精心挑選與我們價值理念相符的合作夥伴，僅與真誠且值得信賴的品牌攜手。我們追求真實可靠，言之有據，唯有如此，才能獲得廣大受眾的共鳴和信任。
              </p>
            </div>
            <div className="rounded-[2rem] bg-plum p-8 text-white shadow-soft md:p-10">
              <h2 className="text-2xl font-semibold">廣告合作洽詢</h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                歡迎來信討論合作方案，我們將盡快回覆您。
              </p>
              <a
                href="mailto:ad@shesay.com"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:bg-sand"
              >
                ad@shesay.com
              </a>
              <p className="mt-6 text-sm text-white/60">廣告合作信箱</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
