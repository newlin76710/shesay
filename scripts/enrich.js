const fs = require('fs');
const path = require('path');

const existing = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'lib', 'articles.json'), 'utf-8'));

// Enriched data from background scraping agents - images and paragraphs
const enriched = {
  '83509': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/09/186514-768x1024.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/09/606e84c3-9f60-498c-87b1-856bb85c7dd1.png',
      'https://ek21.com/dating/wp-content/uploads/2023/07/event01-1024x1024.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/09/f96896ea7ec309a3c3e68aa13455d6fa-1024x733.png',
      'https://ek21.com/dating/wp-content/uploads/2023/09/自由翻滾區-1-1024x683.jpg',
    ],
    paragraphs: [
      '台中人照過來！戀愛小秘書娜米為台中人準備的台中人單身聯誼活動來了！單身的你，一定要想盡辦法逃離單身，為快想要放棄的愛情，注入戀愛強心劑，再次為自己的幸福努力！',
      '獨一無二的挑戰壓迫感，創造實境遊戲的新體驗！勇敢踏出舒適圈才是展開精采生活的第一步，在解謎中認識新朋友吧！',
      '你們準備好挑戰解謎的極限了嗎？戀愛小秘書娜米誠摯邀請您參加令人興奮的密室逃脫聯誼活動，將您的智慧和團隊合作精神發揮到極致！',
      '想體驗極致刺激和冒險嗎？戀愛小秘書娜米策劃了「鐳射漆彈｜六度空間 逃出生天」聯誼活動！挑動大家緊張刺激的神經，測試你的智慧和團隊協作，是場驚險之旅。',
      '鐳射漆彈是一種高度互動和安全的遊戲，你可以在不擔心受傷的情況下享受激烈的競爭。穿上裝備，與你的隊友一起參與鐳射漆彈對戰，擊中敵人，贏得勝利！',
      '夢想中的愛情，總是讓心跳不已。戀愛小秘書娜米為台中人籌劃的是一場別開生面的愛情彈跳挑戰活動——「空氣基因」。準備好與單身的朋友們一同挑戰自我、展開一場刺激的愛情之旅！',
    ],
  },
  '83508': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_c4838b2994_1519733922-1024x512.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f567e1223d_1521796535-1024x683.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/08/MTXX_MH20230805_211553766.jpg',
    ],
    paragraphs: [
      '緊張又刺激，究竟誰會成為最大贏家？短短幾小時的桌遊邂逅，得到滿滿歡樂與志同道合的朋友。',
      '一開始有點擔心自己的遊戲實力，沒想到隊友都超級好，大家互相幫忙，玩得超開心的！',
      '桌遊最棒的地方就是，大家很快就不尷尬了！遊戲中自然而然就會笑成一團，感覺像認識很久的朋友一樣。',
      '活動流程包含報到、自我介紹、分組、桌遊競賽及頒獎，最後互留聯絡方式。',
    ],
  },
  '10427': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2018/09/1316-1024x717.jpg',
    ],
    paragraphs: [
      '活動當天大家都有幾分緊張，不過在主持人的介紹下，氣氛也越來越熱絡，也有不少體驗者結交了新朋友！',
      '飛鏢從夜市的娛樂走向全球性的運動比賽，而今天我們用飛鏢來展開一場浪漫的邂逅！很多人都是第一次嘗試飛鏢，在主持人帶領下學習正確的站姿和投擲技巧。',
      '特別設計的「加分、減分飛鏢賽」讓氣氛更加熱烈，大家在友誼賽中盡情歡笑，也不忘跟新認識的朋友互換 LINE 聯絡方式。',
    ],
  },
  '84968': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2018/10/1309-1024x577.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
    ],
    paragraphs: [
      '想知道電視上那些美味的鮭魚料理是怎麼做的嗎？想親手製作愛心料理給心儀的他？那你絕對會喜歡這次的烹飪活動！',
      '活動安排由專業主廚示範鮭魚烹調技巧與要點，再由男女一組協力完成料理，在料理過程中自然而然地認識彼此。',
      '完成料理後大家一同享用自己的成果，邊品嚐美食邊輕鬆聊天，活動最後互留聯絡方式，留下美好的回憶。',
    ],
  },
  '84858': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/275113f2cb61f4c3b4bc6d3edcb1248e.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_47998ab817_1437375021-480x1024.jpg',
    ],
    paragraphs: [
      '專業壽司師傅提供手把手教學，讓你從食材挑選到捏製壽司，體驗最道地的日式料理文化。',
      '在日式風情的氛圍中，參加者們互相交流料理心得，發揮創意做出獨一無二的壽司作品，在歡笑中建立起真摯的友誼。',
      '無論你是料理新手還是達人，都能在這裡找到樂趣。活動最後一起品嚐自己的作品，邊吃邊聊，認識志同道合的朋友。',
    ],
  },
  '84857': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
    ],
    paragraphs: [
      '愛情與美食的結合，總能點燃心中的火花！讓我們邀請您加入台北單身聯誼的料理活動，與美味鮭魚廚房共享愛情的美妙滋味！',
      '活動由專業主廚指導，在溫馨浪漫的氛圍中，大家一邊學習鮭魚料理技巧，一邊與身旁的夥伴交流互動。',
      '從備料、烹調到擺盤，每個環節都是拉近彼此距離的機會。活動結束時，大家不僅學會了新料理，更認識了新朋友。',
    ],
  },
  '84951': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/10/1238-1024x652.jpg',
      'https://ek21.com/dating/wp-content/uploads/2019/10/YWB32VA1BFO55VQW2.png',
    ],
    headings: ['學員們開始選位子了', '多肉盆栽自己動手來', '多肉植物介紹', '多肉植物大功告成'],
  },
  '84962': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/04/163966-1024x576.jpg',
    ],
    paragraphs: [
      '初夏最浪漫的邂逅，從這裡開始~如果說，一塊陶土可以塑出一個藝術品。那麼，一趟小旅行是不是也可能成就你和她的愛情呢？',
      '由主持人幫忙分組後，每組都有派指導人員教大家如何使用桌面上的用具，在互動過程中進一步認識對方。',
      '最後讓雙方互相體驗一起完成手拉坯活動，在自己的作品中添加兩人默契氣息。',
    ],
  },
  '84865': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/1697009498737.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/195087_副本-1024x1024.jpg',
    ],
    paragraphs: [
      '永恆不朽的小花浮游在美麗的小瓶子裡，一場浪漫的邂逅，一段花漾的愛戀從此展開。在日本有個傳說：自己DIY浮游花時，心中默唸一個心願，完成後就可以心想事成喔～',
      '在咖啡香氛的環繞中，開啟手作之旅。挑選自己喜愛的花色，親手打造一支浮游花手作筆。這不僅是創作，更是將心情注入每一筆的療癒過程。',
      '手作不僅是創造藝術品，更是一場充滿樂趣的冒險。挑選材料、編織花瓣，每一個細節都是屬於你的獨特故事。',
      '與她(他)開始一段浪漫的手作之旅，將每一刻都編織成美麗的回憶！',
    ],
  },
  '84943': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f567e1223d_1521796535-1024x683.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/09/20231014手作蘋果塔-1024x634.jpg',
    ],
  },
  '84867': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/08/360092070_606105934960619_363698282878880428_n.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/08/IMG_6017-300x225.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/08/S__3514415-300x225.jpg',
    ],
  },
  '84855': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/b8a62d028c89fe1d4b6c307f61edd073-1024x683.jpg',
    ],
  },
  '84852': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
    ],
    paragraphs: [
      '親愛的貓奴和貓友們，貓咪咖啡廳聯誼活動來啦！和貓咪一起玩，還有機會遇到你的另一半！不論你是貓奴還是貓友，都歡迎來和我們一起嗨！',
      '活動在充滿療癒感的貓咪咖啡廳舉辦，大家一邊享用美味套餐，一邊和可愛的貓咪互動，氣氛超溫馨。',
      '主題聯誼從嚕貓餵食秀開始，透過和貓咪的互動自然打破陌生感，最後的「來電時間」讓大家互留LINE，延續這份緣分。',
    ],
  },
  '84959': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f567e1223d_1521796535-1024x683.jpg',
    ],
    paragraphs: [
      '盛夏的酷熱讓人感到疲憊，最想做的就是跳入水中。在泳池邊，這一切煩悶都被拋諸腦後啦！',
      '你玩過水上的騎馬打仗嗎？男生背女生進攻、防守。小心不要被對方扯下來！小心對方的潑水攻勢！左躲右閃，把握時機攻擊對方，驚險又刺激，實在太熱血啦！',
      '戀愛小秘書娜米在疫情結束的這個夏天舉辦了這場別開生面的泳池約會活動，讓大家盡情玩水，在歡笑聲中創造了充滿回憶的清涼刺激夏日好時光。',
      '泳池約會活動的花絮中，可以看到大家的熱情投入，快樂的笑聲回蕩在泳池旁。這場活動不僅帶來清涼的快感，更讓每個人在歡笑中感受到夏日的活力。',
    ],
  },
  '84967': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f567e1223d_1521796535-1024x683.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
    ],
    paragraphs: [
      '阿根廷探戈是起源於阿根廷或烏拉圭的傳統雙人舞，而讓舞步多樣化、複雜化是台灣探戈的特色。',
      '你曾經夢想過自己也能在浪漫的晚宴中跳一支美麗的舞嗎？全程只要短短一小時教學，你就能輕鬆在舞動延展中愛上自己、認識他人。',
      '不用害怕，給不擅長說話的你，透過音樂與舞蹈才是人類最原始的語言。利用輕鬆的舞步就能讓兩個人很快熟悉起來。',
      '過程中我們具有強而有力的師資與陣容！不怕肢體不協調，你只要擔心你是否真心要走好每一個舞步，展現舞台魅力。',
    ],
  },
  '84964': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2018/10/164332-1024x669.jpg',
    ],
    paragraphs: [
      '在千呼萬喚之下，非誠勿擾之好評加開場順利舉行，謝謝大家的支持以及熱情參與，讓活動圓滿結束。',
      '活動舉辦在浪漫的高級婚宴會館，期待在愛神的祝福下，讓兩顆迷途的心能找到自己的歸宿。',
      '內向也沒關係！工作人員會安排各位入座，以男女面對面的方式瞭解彼此的愛情觀以及理想對象的條件。',
      '為了讓與會嘉賓更加了解你，主持人會請各位上台簡單介紹自己及愛情宣言，把握住每個戀愛的可能。',
      '主持人帶大家玩默契小遊戲！一點點的臉紅心跳都是愛神來的徵兆呢！',
      '活動最後，留下聯絡方式，讓這個緣份持續下去！祝福各位帥哥美女能早日找到命運中的另一半。',
    ],
  },
  '84860': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_df87dba25a_1456821227-1024x683.jpg',
    ],
  },
  '84854': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/344769750_1175439030520947_2939810061079920983_n-768x1024.jpg',
    ],
  },
  '66266': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_cd416212ab_1450500908-1024x683.jpg',
    ],
  },
  '84859': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f7178a62ac_1545731012-1024x806.png',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_7744a91aca_1466154992-1024x576.jpg',
    ],
  },
  '84866': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/未命名設計.png',
      'https://ek21.com/dating/wp-content/uploads/2023/07/27145814_m-2-678x381.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/4937361_m-678x381.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/08/DSC00044_副本-1024x684.jpg',
    ],
  },
  '84871': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/10/帶按鈕圖-情境圖-男女-咖啡店.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/10/帶按鈕圖-情境圖-男女-咖啡店02.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f567e1223d_1521796535-1024x683.jpg',
    ],
  },
  '84862': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/BHWQOX46V746ZQS.png',
    ],
    paragraphs: [
      '尋找愛意盎然的相遇？參加我們的單身聯誼活動，一起展開多肉植物DIY，讓愛與綠意在我們的手中綻放！',
      '創意發想 X 手作素材，多肉植物DIY讓你的生活綠意盎然。我們用玩樂的方式帶領大家腦力激盪，玩出不同的樂趣！參加過的朋友都意猶未盡。',
      '從老師講述多肉植物的概念開始，到學員們發揮創意的手作時間，每個環節都充滿歡笑和交流。活動結束別忘了留下聯絡方式！',
    ],
  },
  '84946': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/09/1269-1024x582.jpg',
      'https://ek21.com/dating/wp-content/uploads/2019/09/163970-1024x642.jpg',
    ],
  },
  '84947': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/09/u1836360752199427797fm30app106fJPEG.jpg',
      'https://ek21.com/dating/wp-content/uploads/2019/09/W020210706518888899186-1024x713.jpg',
    ],
  },
  '84948': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/09/1262-1024x861.jpg',
    ],
  },
  '84949': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/10/1260-1024x629.jpg',
    ],
  },
  '84950': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_f567e1223d_1521796535-1024x683.jpg',
    ],
  },
  '84955': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/09/1266-1024x579.jpg',
    ],
  },
  '84956': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2019/04/1307-1024x577.jpg',
      'https://ek21.com/dating/wp-content/uploads/2019/04/164229-1024x583.jpg',
    ],
  },
  '84966': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ChMkJ1gixK6IMQ7ZAAGcA8w2nx4AAXmlQOwmecAAZwb802.jpg',
    ],
  },
  '83510': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/08/QJ8579085321.jpeg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_92694ede50_1435644107-1024x687.jpg',
    ],
  },
  '83511': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_73c0259d52_1465025125-1024x578.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/event01-1024x1024.jpg',
    ],
  },
  '83517': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/09/20231014手作蘋果塔-1024x634.jpg',
    ],
  },
  '83518': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/09/tn_P5210561.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_48d0abc356_1495678078-1024x728.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/01/163749-1024x576.jpg',
    ],
  },
  '84863': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/ev_ecbfd5e3b9_1546591688-1024x640.jpg',
      'https://ek21.com/dating/wp-content/uploads/2023/07/P-1521774-DFFDB604O-1024x682.jpg',
    ],
  },
  '84864': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/2cdd2d70f60c8bb07ad6e5cf8b0ec2ab-1024x620.jpeg',
      'https://ek21.com/dating/wp-content/uploads/2023/08/88d5472e926dcd6bf913b0af5195e88b_副本_副本-687x1024.png',
      'https://ek21.com/dating/wp-content/uploads/2023/07/12121.jpg',
    ],
  },
  '84856': {
    images: [
      'https://ek21.com/dating/wp-content/uploads/2023/07/event01-1024x1024.jpg',
    ],
  },
};

// Boilerplate patterns to detect and remove
const boilerplate = [
  '戀愛小秘書團隊已經成功替4000位以上',
  '訪談結果結合專屬的人格分析測驗',
  '除此之外，戀愛小秘書團隊還會定期追蹤',
  '採用「實名認證」的制度',
  '戀愛小秘書團隊每個月都會規劃',
  '透過實體活動讓大家先有初步的接觸',
  '另外針對想提升自身魅力的客戶',
  '許多單身者為了心中理想的對象條件',
  '成立近半世紀的愛妮雅',
  '全球電腦領導品牌',
  '文／克拉大',
  '©SheSay All rights reserved',
];

const isBoilerplate = (text) => boilerplate.some(bp => text.includes(bp));

// Common closing paragraph (used once per article)
const closingParagraph = 'erose主題派對與戀愛小秘書創辦人娜米表示：「透過各種有趣的實體活動，不僅能親眼真實見到異性，也能在活動進行中讓大家很輕鬆自然的認識彼此、聊天互動，能更快速的找到適合的對象。」';

for (const [id, article] of Object.entries(existing)) {
  const extra = enriched[id] || {};

  // 1. Clean existing text content - remove boilerplate and short items
  let textBlocks = article.content
    .filter(b => b.type === 'text')
    .filter(b => b.value.length >= 10)
    .filter(b => !isBoilerplate(b.value));

  // 2. Add new paragraphs from enriched data (if article has few paragraphs)
  if (extra.paragraphs && textBlocks.length < 5) {
    const existingTexts = new Set(textBlocks.map(b => b.value.substring(0, 30)));
    for (const p of extra.paragraphs) {
      if (!existingTexts.has(p.substring(0, 30)) && p.length >= 10 && !isBoilerplate(p)) {
        textBlocks.push({ type: 'text', value: p });
        existingTexts.add(p.substring(0, 30));
      }
    }
  }

  // 3. Deduplicate text blocks
  const seen = new Set();
  textBlocks = textBlocks.filter(b => {
    const key = b.value.substring(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // 4. Collect existing images
  let existingImages = article.content
    .filter(b => b.type === 'image')
    .map(b => b.value);

  // 5. Add enriched images (skip duplicates, dropbox, http blog-eros)
  const extraImages = (extra.images || []).filter(url => {
    if (url.includes('dropbox')) return false;
    if (url.startsWith('http://blog-eros')) return false;
    if (existingImages.includes(url)) return false;
    return true;
  });

  const allImages = [...new Set([...existingImages, ...extraImages])];

  // 6. Keep existing headings
  const headings = article.content.filter(b => b.type === 'heading');

  // 7. Build new content array - interleave text and images
  const newContent = [];
  const imgInterval = Math.max(1, Math.ceil(textBlocks.length / (allImages.length + 1)));

  let imgIdx = 0;
  for (let i = 0; i < textBlocks.length; i++) {
    // Insert heading if any match
    if (extra.headings) {
      for (const h of extra.headings) {
        if (textBlocks[i].value.includes(h.substring(0, 10))) {
          newContent.push({ type: 'heading', value: h });
        }
      }
    }

    newContent.push(textBlocks[i]);

    // Insert image after every N paragraphs
    if ((i + 1) % imgInterval === 0 && imgIdx < allImages.length) {
      newContent.push({ type: 'image', value: allImages[imgIdx] });
      imgIdx++;
    }
  }

  // Add remaining images
  while (imgIdx < allImages.length) {
    newContent.push({ type: 'image', value: allImages[imgIdx] });
    imgIdx++;
  }

  // 8. Add closing heading + paragraph (only if there was boilerplate and article has enough content)
  const hadBoilerplate = article.content.some(b => b.type === 'text' && b.value.includes('erose主題派對'));
  if (hadBoilerplate && newContent.length > 3) {
    // Only add if not already there
    if (!newContent.some(b => b.type === 'text' && b.value.includes('erose主題派對'))) {
      newContent.push({ type: 'heading', value: '關於戀愛小秘書' });
      newContent.push({ type: 'text', value: closingParagraph });
    }
  }

  article.content = newContent;
}

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'articles.json'), JSON.stringify(existing, null, 2), 'utf-8');

// Print stats
for (const [id, a] of Object.entries(existing)) {
  const tc = a.content.filter(b => b.type === 'text').length;
  const ic = a.content.filter(b => b.type === 'image').length;
  const hc = a.content.filter(b => b.type === 'heading').length;
  console.log(`${id} | ${a.title.substring(0, 12).padEnd(12)} | text:${String(tc).padStart(2)} img:${String(ic).padStart(2)} h:${hc}`);
}
