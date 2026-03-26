'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SiteShell } from '@/components/site-shell';

const BASE10 = '/images/original/shesay.com/wp-content/uploads/2023/10/';
const BASE11 = '/images/original/shesay.com/wp-content/uploads/2023/11/';

const tabs = [
  { id: 'shesay', label: 'SheSay', icon: BASE10 + 'abouticon-5.png' },
  { id: 'chatroom', label: '尋夢園聊天室', icon: BASE10 + 'abouticon-1.png' },
  { id: 'news', label: '尋夢新聞', icon: BASE10 + 'abouticon-2.png' },
  { id: 'eros', label: 'eros主題派對', icon: BASE10 + 'abouticon-3.png' },
  { id: 'nami', label: '戀愛小秘書娜米', icon: BASE10 + 'abouticon-4.png' },
];

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

const celebrities = [
  '羅志祥', '王心凌', '盧廣仲', '蕭亞軒', '蕭敬騰', '溫嵐', '方大同', '郭采潔', '周湯豪',
  '徐佳瑩', '謝和弦', '戴愛玲', '蔡健雅', '大嘴巴', 'dream-girls', '李聖傑', '鄧福如',
  '酷愛樂團', '黃文星', '郭書瑤', '張芸京', '神木與瞳',
];

const shesayTimeline = [
  '1999-10-15　SheSay.com 網站上線',
  '1999-11-05　依妹兒心情故事徵文活動',
  '1999-12-03　SheSay 網站開幕活動',
  '2000-01-05　養個男人來消遣 1.0 登場',
  '2000-06-05　養男人 2.0 正式推出',
  '2000-06-15　SheSay 單日流量 page view 破 25萬',
  '2000-07-15　SheSay 會員人數破 10萬',
  '2000-07-26　E-Oscar 優質網站金像獎',
  '2000-10-16　SheSay 會員人數破 18萬',
  '2000-11-16　養男人 3.0 正式推出',
  '2001-02-21　SheSay 會員人數破 30萬',
  '2001-03-02　全台網站排名第15名，每月活躍使用者 120萬',
  '2001-04-30　會員人數破35萬，單日流量 100萬',
  '2002-09-16　「同居理想國」服務上線',
  '2003-03-10　「愛情醫學院」案例收錄出版成書',
  '2005-04-29　昱科網路收購 SheSay，經營權轉移到尋夢園聊天室團隊',
  '2007　　　　成立「明星聊天室」邀請歌手明星線上LIVE',
  '2013　　　　留美歸國的娜米二代接班，重整經營團隊',
  '2014　　　　推出「eros主題派對」',
  '2015　　　　推出「尋夢新聞」',
  '2020　　　　建立「戀愛小秘書-娜米」團隊',
  '2022　　　　推出「戀愛密碼諮詢服務」',
  '2023　　　　推出「戀愛會社」Podcast、YouTube節目',
];

const newsCategories = [
  { name: '娛樂', desc: '愛八卦的你，尋夢娛樂掌握明星生活快訊，讓你零時差關注明星動態。' },
  { name: '戲劇', desc: '沒時間看劇，尋夢戲劇幫你推播好劇，好戲不錯過。' },
  { name: '寵物', desc: '寵物是人類最好的陪伴，尋夢寵物是你最棒的依賴。' },
  { name: '動漫', desc: '尋夢動漫第一時間搶先報給動漫迷們最新番動漫情報。' },
  { name: '時尚', desc: '鏈結時下最夯藝人穿搭，尋夢時尚讓你穿著時尚又有品味。' },
  { name: '健康', desc: '尋夢健康比大家更關心你的健康，針對專業健康問題替你把脈解惑。' },
  { name: '愛情', desc: '無論失戀、熱戀、單戀，在愛情有煩惱，尋夢愛情來解答。' },
];

const namiAppearances = [
  '2023.12　開立「戀愛會社」節目',
  '2023.5　成為「電獺經紀」網紅',
  '2023.3　成為「得意人生」保健食品代言人',
  '2023.1　DOMO HAIR 魅力無法擋節目來賓',
  '2022.10　成立「週週趣」並創立週週趣個人工作室孵化空間',
  '2021.10　取得「花精情緒療癒」證照',
  '2021.5　代言Starr9女性服飾',
  '2021.4　「LiveME直播」開立帶狀節目',
  '2020　以秘書長身份協助發起「彩虹數字學會」',
  '2019.6　世代談 交友進化論 講師',
  '2018.7　Facebook Developer Circles Taipei 活動主持人',
  '2018.6　中原大學 人文與科技與談會 演講',
  '2017.7　資策會 IDEAS 智慧生活駭客松 活動主持人',
  '2017.6　上海創業中國創業路演大賽 講師',
  '2017.4　經緯航太與日本NEC產品發表記者會 主持人',
  '2016.10　Facebook #SheMeansBusiness Program 講師',
  '2016.10　Girls in Tech-Mentorship Program 業界導師',
  '2016.9　Girls in Tech-女人的新創約會演講',
  '2016.6　iiiNNO育成中心演講',
  '2016.5　台北商專創業比賽評審',
  '2016.5　Pitch Camp 決勝創投決賽團隊',
  '2016.3　數位時代社群行銷即戰力培訓營講師',
  '2016.1　簡報小聚講師',
  '2015.12　泛旅遊RTM- 大旅創時代 Pitch 冠軍',
  '2015.11　北京創客空間台灣之夜演講',
  '2015.10　資策會IDEAS Show 創業培訓講師',
  '2015.9　高雄青年職涯發展中心講師',
  '2015.9　中視節目-網路溫度計 專訪',
  '2015.7　AIESEC 青年影響力論壇講師',
  '2015.1　政大數位創世紀學術演討會講師',
  '2014.5　國立高雄科技大學演講',
  '2014.5　共創城市駭客松Sharable City，第一名',
  '2014.4　數位時代創業小聚專訪',
  '2014.3　EST女性創業家演講',
  '2014.2　創業脫口秀節目專訪',
  '2014.2　獲選入Appworks創業加速器 #8',
  '2013.10　Taipei Startup Weekend決賽團隊',
];

function TabSheSay() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <p className="text-sm leading-8 text-[#54595F]">
        SheSay，不僅是全台最資深的女性社群網站，更是一個專為女性打造的獨特平台。自1999年10月15日上線以來，我們一直致力於為女性提供一個安全、溫馨的環境，讓女生們可以在這裡自由表達自己、提升魅力，解決各種戀愛難題，最終找到理想中的戀愛對象。
      </p>

      {/* 頻道截圖 */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-rose">網站發展重要里程</p>
        <h3 className="mt-1 text-2xl font-bold text-plum">華人女性社群網站</h3>
        <p className="mt-1 text-sm text-plum/60">1999.10.15 SheSay.com 上線</p>
        <div className="mt-6 grid grid-cols-5 gap-3">
          {channels.map((ch) => (
            <div key={ch.name} className="text-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-soft">
                <Image src={ch.img} alt={ch.name} fill className="object-contain p-1" sizes="120px" />
              </div>
              <p className="mt-1 text-xs text-plum/70">{ch.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 養個男人來消遣 */}
      <div>
        <h3 className="text-2xl font-bold text-plum">養個男人來消遣</h3>
        <p className="mt-1 text-sm text-plum/60">2000.01.05 養男人 1.0 上線</p>
        <p className="mt-4 text-sm leading-7 text-[#54595F]">
          2000年推出「上網養男人」，創造每日60萬 page views 高流量話題；2003年6月推出「手機養男人」，以女性為主導設條件尋找理想對象。2023年9月轉型為女性友善的交友平台。
        </p>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {[BASE11 + 'b拷貝3.jpg', BASE11 + 'a-1.jpg', BASE11 + 'c拷貝.jpg', BASE11 + 'd拷貝-1.jpg'].map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft">
              <Image src={src} alt="養個男人來消遣" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </div>

      {/* 愛情醫學院 */}
      <div>
        <h3 className="text-2xl font-bold text-plum">愛情醫學院</h3>
        <p className="mt-1 text-sm text-plum/60">2003.03.10 愛情醫學院 案例收錄出書</p>
        <p className="mt-4 text-sm leading-7 text-[#54595F]">
          從愛情求救分析、出版成書，到後來發展為娜米的戀愛數字密碼解析，愛情醫學院是 SheSay 在戀愛諮詢領域的起點。2023年轉型為「娜米的戀愛數字密碼解析」，以彩虹數字為基礎提供個人化戀愛諮詢服務。
        </p>
      </div>

      {/* 明星聊天室 */}
      <div>
        <h3 className="text-2xl font-bold text-plum">明星聊天室</h3>
        <p className="mt-1 text-sm text-plum/60">2007年 成立「明星聊天室」邀請歌手與網友互動</p>
        <p className="mt-4 text-sm leading-7 text-[#54595F]">
          明星聊天室邀請眾多知名藝人在線上與粉絲互動，引爆話題。參與藝人包括周湯豪、王心凌、羅志祥、蕭亞軒、方大同、謝和弦、郭采潔、蕭敬騰、徐佳瑩、盧廣仲等。2023年轉型為 KOL 網紅媒合平台。
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
      </div>

      {/* 網站大事紀 */}
      <div>
        <h3 className="text-2xl font-bold text-plum">SheSay.com 網站大事紀</h3>
        <ul className="mt-6 space-y-2 text-sm leading-6 text-[#54595F]">
          {shesayTimeline.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="shrink-0 text-rose">•</span>
              <span className="whitespace-pre-wrap">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TabChatroom() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-plum">尋夢園是全台最大聊天室、匿名聊天平台，擁有百萬會員及各種豐富有趣的主題聊天室</h3>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-rose">3,125,493</p>
          <p className="text-sm text-plum/60">總會員人數突破3百萬人</p>
        </div>
      </div>
      <p className="text-sm leading-8 text-[#54595F]">
        尋夢園聊天室 (ek21.com) 是台灣最早成立的網路聊天室，1996年發展出聊天聯盟，讓會員們互動、唱歌、盡情分享自我的平台。2013年由留美歸國的娜米接手經營，進行商業模式轉型，將尋夢園聊天室轉型為婚戀交友平台，相繼推出：明星聊天室、SheSay女性媒體、eros主題派對、尋夢新聞、戀愛小秘書...等網站平台。娜米是二代創業家，致力於讓尋夢園集團品牌有更好的發展。
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative aspect-[1024/424] overflow-hidden rounded-lg shadow-soft">
          <Image src={BASE10 + '截圖-2023-10-11-上午11.33.50-1024x424.png'} alt="尋夢園聊天室" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="relative aspect-[2048/1208] overflow-hidden rounded-lg shadow-soft">
          <Image src={BASE11 + '截圖-2023-11-14-上午10.25.03-2048x1208.jpg'} alt="尋夢園聊天室" fill className="object-cover" sizes="50vw" />
        </div>
      </div>
      <a href="https://ek21.com/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">前往尋夢園聊天室</a>
    </div>
  );
}

function TabNews() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-plum">尋夢新聞掌握線上消費的高精華族群，每月造訪 500萬人次</h3>
      <div className="flex gap-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-rose">500萬</p>
          <p className="text-sm text-plum/60">單月瀏覽量</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-rose">310萬</p>
          <p className="text-sm text-plum/60">單月不重複使用者</p>
        </div>
      </div>
      <p className="text-sm leading-8 text-[#54595F]">
        尋夢新聞 (ek21.com/news/) 以新聞時事娛樂內容為主，具有「社群、行動、溝通」的新聞社群媒體，集合時下最流行的發燒話題，在各個社群平台推播議題讓話題持續擴散，期望能為上班族篩選出最優良的新聞，提供最有質量的內容給大眾閱讀。
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {newsCategories.map((c) => (
          <div key={c.name} className="rounded-2xl border border-[#DFDFE2] bg-white p-4">
            <p className="font-bold text-plum">{c.name}</p>
            <p className="mt-2 text-xs leading-5 text-[#54595F]">{c.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm leading-8 text-[#54595F]">
        尋夢新聞瞭解時下最流行趨勢，洞察讀者心理和數據分析進行新聞內容的編輯撰寫，加上擅長網路搜尋SEO優化，以及多個社群平台經營，新聞內容擴散度高，討論聲量度廣，不斷創造發燒議題。
      </p>
      <h4 className="font-bold text-plum">廣而深的分眾經營，精準投遞目標客群</h4>
      <div className="relative aspect-[1024/550] overflow-hidden rounded-lg shadow-soft">
        <Image src={BASE11 + '截圖-2023-11-14-上午10.33.32-2048x1100.png'} alt="尋夢新聞受眾" fill className="object-cover" sizes="100vw" />
      </div>
      <a href="https://ek21.com/news/" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">前往尋夢新聞</a>
    </div>
  );
}

function TabEros() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-8">
        <div className="text-center"><p className="text-3xl font-bold text-rose">1,013</p><p className="text-sm text-plum/60">聯誼派對（場）</p></div>
        <div className="text-center"><p className="text-3xl font-bold text-rose">103,089</p><p className="text-sm text-plum/60">單身會員（位）</p></div>
        <div className="text-center"><p className="text-3xl font-bold text-rose">724</p><p className="text-sm text-plum/60">戀愛講座（場）</p></div>
      </div>
      <p className="text-sm leading-8 text-[#54595F]">
        eros主題派對 (erosparty.club) 提供上班族下班後充實自己的活動，希望大家來參加活動後都可以成功交到「新朋友」！活動主打溫馨氣息，希望能像在家般輕鬆愉快且自在。
      </p>
      <p className="text-sm leading-8 text-[#54595F]">
        eros主題派對與許多活動類型廠商合作，例如：料理廚房、桌遊店、品酒店、Tango舞會、手作體驗課程 等等，活動主辦單位經過審核後，將活動上架到eros平台，並加入聯誼元素，每月都固定舉辦多場次的聯誼活動，讓單身上班族可自由選擇參加。
      </p>
      <p className="text-sm leading-8 text-[#54595F]">
        會員只要選擇喜歡的活動，和喜歡對象的類型，系統就會自動推薦適合的活動和場次。
      </p>
      <div className="relative aspect-[1024/842] max-w-2xl overflow-hidden rounded-lg shadow-soft">
        <Image src={BASE11 + '截圖-2023-11-14-上午10.36.24-2048x1685.jpg'} alt="eros主題派對" fill className="object-cover" sizes="100vw" />
      </div>
      <a href="https://erosparty.club" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">前往eros主題派對</a>
    </div>
  );
}

function TabNami() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="relative aspect-[768/811] overflow-hidden rounded-2xl shadow-soft">
          <Image src={BASE10 + 'RYN00597-新聞稿用-scaled-e1696996358120-768x811.jpg'} alt="娜米老師" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-plum">戀愛小秘書 娜米 最專業的紅娘</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['兩性議題分析專家', '留美MBA企管碩士', '交友聊天室第二代', '彩虹數字諮詢師', '花精療癒師'].map((t) => (
              <span key={t} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-plum">{t}</span>
            ))}
          </div>
          <ul className="mt-4 space-y-1 text-sm text-[#54595F]">
            <li>• 善於觀察，對於感性的情緒、感受很敏銳</li>
            <li>• 具有理性的管理、創新、數據分析能力</li>
            <li>• 喜歡分享生活中關於戀愛的小發現</li>
          </ul>
          <p className="mt-5 text-sm leading-8 text-[#54595F]">
            Hi！我是戀愛小秘書，娜米，我知道找對象從來就不是一件簡單的事，我們的專業團隊會透過一對一的諮詢診斷，為你量身訂制一套戀愛攻略，並以朋友的角度提供約會建議，協助你發展長期且穩定的伴侶關係。
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-plum">娜米的經歷</h3>
        <ul className="mt-4 space-y-1 text-sm leading-6 text-[#54595F]">
          <li>• 留美攻讀MBA回台灣，接手經營尋夢園聊天室、SheSay</li>
          <li>• 擅長網路行銷和SEO操作，創立尋夢新聞、eros主題派對</li>
          <li>• 經營公司十多年期間，多次獲得創業競賽冠軍</li>
          <li>• 多次受邀擔任創業導師，以及到不同學術單位演講</li>
          <li>• 常有異業合作、廣告代言、活動主持等經驗</li>
          <li>• 擅長使用彩虹數字、花精療癒等方式為個案解惑</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-plum">演講 / 主持 / 代言 經歷</h3>
        <div className="mt-4 grid gap-x-6 gap-y-1 text-xs leading-5 text-[#54595F] md:grid-cols-2">
          {namiAppearances.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </div>
      </div>

      <a href="https://lin.ee/o4lCgwJ" className="inline-flex rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">預約娜米諮詢</a>
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('shesay');

  return (
    <SiteShell>
      <main className="bg-[#FBFBFB]">

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose">SheSay 尋夢園聊天室 尋夢新聞 eros主題派對 戀愛小秘書娜米</p>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-[#54595F]">
            SheSay，不僅是全台最資深的女性社群網站，更是一個專為女性打造的獨特平台。自1999年10月15日上線以來，我們一直致力於為女性提供一個安全、溫馨的環境，讓女生們可以在這裡自由表達自己、提升魅力，解決各種戀愛難題，最終找到理想中的戀愛對象。
          </p>
        </section>

        {/* Tab Buttons */}
        <section className="sticky top-[65px] z-20 border-b border-[#DFDFE2] bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-6 sm:px-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'border-rose text-rose'
                    : 'border-transparent text-plum/60 hover:text-plum'
                }`}
              >
                <div className="relative h-6 w-6">
                  <Image src={tab.icon} alt="" fill className="object-contain" sizes="24px" />
                </div>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Tab Content */}
        <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
          {activeTab === 'shesay' && <TabSheSay />}
          {activeTab === 'chatroom' && <TabChatroom />}
          {activeTab === 'news' && <TabNews />}
          {activeTab === 'eros' && <TabEros />}
          {activeTab === 'nami' && <TabNami />}
        </section>

        {/* Bottom Brand Nav */}
        <section className="bg-white/70 py-12">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="grid grid-cols-5 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-soft transition hover:-translate-y-1"
                >
                  <div className="relative h-12 w-12">
                    <Image src={tab.icon} alt={tab.label} fill className="object-contain" sizes="48px" />
                  </div>
                  <p className="mt-2 text-xs font-bold text-plum">{tab.label}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
