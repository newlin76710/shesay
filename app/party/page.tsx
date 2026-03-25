import { PageHero } from '@/components/page-hero';
import { SiteShell } from '@/components/site-shell';

const categories = [
  {
    id: '娛樂遊戲',
    activities: [
      { title: '鐳射槍與漆彈', desc: '台中人照過來！刺激好玩的鐳射槍與漆彈體驗，讓你在競技中認識新朋友。' },
      { title: '桌遊派對遊戲', desc: '輕鬆歡樂的桌遊時光，在遊戲互動中自然而然地認識彼此。' },
      { title: '鏢準情人｜命中愛情紅心', desc: '射飛鏢找緣分，命中紅心也命中愛情！' },
    ],
  },
  {
    id: '廚藝教室',
    activities: [
      { title: '美味料理｜幸福好味道', desc: '一起下廚，透過料理共同完成美食，創造獨特的回憶。' },
      { title: '和風創意｜壽司DIY', desc: '捲起袖子一起做壽司，在歡笑中認識對方！' },
      { title: '美味鮭魚｜品味愛情的美妙滋味', desc: '以鮭魚為主題的料理課，享受美食也享受美好相遇。' },
    ],
  },
  {
    id: '手作體驗',
    activities: [
      { title: '多肉植物｜愛在蔓延時', desc: '一起種植多肉植物，讓愛意像綠意一樣蔓延生長。' },
      { title: '第六感手拉坯', desc: '體驗陶藝手拉坯，在泥土的觸感中感受彼此的默契。' },
      { title: '療癒的浪漫小物｜浮游花手作趣', desc: '製作精緻的浮游花瓶，帶回屬於這段緣分的紀念品。' },
    ],
  },
  {
    id: '甜點烘培',
    activities: [
      { title: '蜜糖吐司手作趣', desc: '一起製作甜蜜蜜糖吐司，分享甜點也分享心情。' },
      { title: '自己做｜烘焙妳的甜心蛋糕', desc: '親手做一個蛋糕送給喜歡的人，用甜點傳遞心意。' },
      { title: 'FUEGO巧克力傳情', desc: '巧克力的濃郁滋味，就像愛情一樣讓人難以忘懷。' },
    ],
  },
  {
    id: '室內聚會',
    activities: [
      { title: '貓咪咖啡廳｜喵星人派對', desc: '與可愛貓咪為伴，在溫馨的貓咪咖啡廳中輕鬆認識新朋友。' },
      { title: '水上騎馬打仗｜清涼刺激的泳池Party', desc: '夏日泳池派對，歡笑嬉鬧中認識志同道合的朋友。' },
      { title: '阿根廷探戈', desc: '學習充滿熱情的探戈舞步，在舞動中感受默契與連結。' },
    ],
  },
  {
    id: '戶外郊遊',
    activities: [
      { title: '浪漫石門放風箏', desc: '在石門海邊迎風放飛風箏，享受陽光與海風的浪漫時光。' },
      { title: '遊艇派對｜海上的浪漫', desc: '乘風破浪的遊艇派對，在大海中找尋心動的感覺。' },
      { title: '七夕の園遊祭', desc: '七夕限定的浪漫園遊祭，讓愛在最美的節日悄然綻放。' },
    ],
  },
  {
    id: '專業講座',
    activities: [
      { title: '排約或約會，高手會怎麼做？', desc: '戀愛講座：學習高手的約會技巧，掌握愛情主動權。' },
      { title: '「干物女大變身」美膚彩妝造型班', desc: '專業彩妝老師帶你打造完美造型，提升魅力值！' },
      { title: '型男培養講堂：如何培養迷人的個性', desc: '從氣質到談吐，全面提升個人魅力。' },
    ],
  },
  {
    id: 'VIP限定',
    activities: [
      { title: 'K歌派對-歌聲傳情', desc: 'VIP專屬KTV派對，用歌聲傳遞愛意，在音樂中相遇。' },
      { title: '盛夏微醺園遊祭', desc: 'VIP限定的夏日微醺派對，獨家體驗高品質交流。' },
      { title: '一對一快速約會（Speed Dating）', desc: 'VIP精選速配活動，在有限時間內找到無限可能。' },
    ],
  },
];

const regions = ['台北', '新竹', '台中', '台南', '高雄'];

const benefits = [
  {
    title: '豐富主題活動',
    desc: '每月不同的主題活動，讓你在歡樂互動中享受各種多彩多姿的體驗，豐富一成不變的無趣生活！',
  },
  {
    title: '提升自我魅力',
    desc: '形象教練量身打造專屬的穿搭風格，以及傳授不冷場的聊天應對技巧，你就是最耀眼的 PARTY KING！',
  },
  {
    title: '輕鬆拓展人脈',
    desc: '工作環境一成不變，難以拓展交友圈，eros超過百種的主題活動，讓你找到志同道合、想法相近的好夥伴。',
  },
];

const steps = [
  { title: '加入官方LINE', desc: '加入 SHESAY 的官方 LINE  LINE ID：@shesay' },
  { title: '填寫個人資料', desc: '依照流程填寫個人資料，等候戀愛小秘書進行資料驗證與配對數據分析' },
  { title: '參加單身聯誼活動', desc: '資料驗證完成，開始安排約會，參加各種有趣的單身聯誼活動！' },
];

export default function PartyPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="聯誼派對活動"
          title="甩開冷螢幕，一起找回面對面的感動吧！"
          description="多元有趣單身派對活動，豐富妳的社交生活。讓妳快速、精準找到適合的對象。"
          imageSrc="/images/original/shesay.com/wp-content/uploads/2024/01/賞花打卡區大合照01.jpg"
          imageAlt="SheSay 聯誼派對"
        />

        {/* 活動類別 */}
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-plum">{cat.id}</h2>
                  <a href="https://lin.ee/UtgCipOq" className="text-sm font-medium text-rose hover:underline">
                    更多{cat.id} »
                  </a>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {cat.activities.map((act) => (
                    <article key={act.title} className="rounded-2xl border border-plum/10 bg-white p-6 shadow-soft">
                      <h3 className="text-base font-semibold text-plum">{act.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-plum/70">{act.desc}</p>
                      <a
                        href="https://lin.ee/UtgCipOq"
                        className="mt-4 inline-flex rounded-full bg-rose px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                      >
                        參加{cat.id} »
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 三大優勢 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-plum md:text-4xl">
              甩開冷螢幕，一起找回面對面的感動吧！
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map((item) => (
                <article key={item.title} className="rounded-3xl bg-white p-8 shadow-soft">
                  <h3 className="text-xl font-semibold text-plum">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-plum/75">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 地區選擇 + 報名流程 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-plum md:text-4xl">
            現在就預約參加活動吧！
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <a
                key={region}
                href="https://lin.ee/UtgCipOq"
                className="rounded-full border border-plum/20 bg-white px-6 py-2.5 text-sm font-semibold text-plum transition hover:border-rose hover:text-rose"
              >
                {region}
              </a>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-plum">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-plum/75">{step.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://lin.ee/UtgCipOq" className="inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
              我要參加
            </a>
          </div>
        </section>

        {/* 底部 CTA */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h2 className="text-3xl font-semibold text-white">戀愛的事更要讓專業的來！</h2>
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
