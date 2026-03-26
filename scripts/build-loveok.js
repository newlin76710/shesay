const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'lib', 'loveok-raw.json'), 'utf-8'));

// Thumbnail mapping from the category page listing
const thumbMap = {
  '72472': 'https://ek21.com/dating/wp-content/uploads/2024/09/戀愛會社34：名人介紹-1024x576.png',
  '72459': 'https://ek21.com/dating/wp-content/uploads/2024/09/戀愛會社33：cover.jpg',
  '72442': 'https://ek21.com/dating/wp-content/uploads/2024/09/32：cover.jpg',
  '72425': 'https://ek21.com/dating/wp-content/uploads/2024/09/戀愛會社31：cover.jpg',
  '72414': 'https://ek21.com/dating/wp-content/uploads/2024/09/30：cover.jpg',
  '72239': 'https://ek21.com/dating/wp-content/uploads/2024/06/戀愛會社29：感情劇本.png',
  '72269': 'https://ek21.com/dating/wp-content/uploads/2024/06/ep26-cover.jpg',
  '72254': 'https://ek21.com/dating/wp-content/uploads/2024/06/戀愛會社27：名人介紹.jpeg',
  '72242': 'https://ek21.com/dating/wp-content/uploads/2024/06/ep28-YT-封面.jpg',
  '72220': 'https://ek21.com/dating/wp-content/uploads/2024/06/ep25-YT-封面.jpg',
  '72144': 'https://ek21.com/dating/wp-content/uploads/2024/05/ep24-YT-封面.jpg',
  '72074': 'https://ek21.com/dating/wp-content/uploads/2024/04/ep2-cover.jpg',
  '72056': 'https://ek21.com/dating/wp-content/uploads/2024/05/ep23-YT-封面.jpg',
  '72033': 'https://ek21.com/dating/wp-content/uploads/2024/05/ep22-YT-封面.jpg',
  '71991': 'https://ek21.com/dating/wp-content/uploads/2024/03/戀愛會社：節目截圖.jpg',
  '71598': 'https://ek21.com/dating/wp-content/uploads/2024/03/做自已.png',
  '71694': 'https://ek21.com/dating/wp-content/uploads/2024/03/流年運勢：九年循環表.jpg',
};

// Common sidebar/promo images to skip
const skipPatterns = [
  '0316c1200x628', '0321c-e1679', '1200x1200btn4', '402de0aa',
  '螢幕快照-2018-12-25', 'Instagram-Logo', 'Line-Logo', 'wine2',
  '帶按鈕圖', '1678493', 'MTXX_MR2023', '20230304_191810',
  '164854-260', 'b8a62d028c', 'WechatIMG283', '172213-215',
  '188280_0-223', '627bb8132bc', '桌遊-300x157', '圖片_2024070',
  '香氛蠟燭-300', '咖啡聯誼-300',
  // Thumbnails from other articles (sidebar recommendations)
  'ep2-cover-300', 'ep23-YT-封面-300', 'ep24-YT-封面-300',
  'ep25-YT-封面-300', 'ep26-cover-300', 'ep28-YT-封面-300',
  '戀愛會社27：名人介紹-300', '戀愛會社29：感情劇本-213',
  '30：cover-300', '32：cover-300', '戀愛會社31：cover-300',
  '戀愛會社33：cover-300', '戀愛會社34：名人介紹-300',
  '做自已-300', '流年運勢：九年循環表-300', '戀愛會社：節目截圖-300',
  'ep22-YT-封面-300',
];

const shouldSkipImg = (url) => skipPatterns.some(p => url.includes(p));

// Boilerplate text patterns
const boilerplate = [
  '想成為我們的社員嗎',
  '那就開始本集會議吧',
  '娜米致力於解決兩性愛情疑難雜症',
  '因此娜米決定創辦一個新項目',
  '立即報名娜米和戀愛小秘書',
  '戀愛小秘書將會根據您的喜好',
  '點擊連結加入',
  '馬上點擊報名',
  '想要投稿給戀愛會社',
  '👇👇👇加入',
  '追蹤IG看更多',
  '社員投稿連結',
  'gogo～',
];

const isBoilerplate = (text) => boilerplate.some(bp => text.includes(bp));

const result = {};

for (const [id, article] of Object.entries(raw)) {
  const heroImage = thumbMap[id] || '';

  // Filter paragraphs
  const seen = new Set();
  const paragraphs = article.paragraphs
    .filter(p => p.length >= 12)
    .filter(p => !isBoilerplate(p))
    .filter(p => {
      const key = p.substring(0, 35);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 20); // max 20 paragraphs

  // Filter images - only article body images
  const articleImages = article.images
    .filter(url => !shouldSkipImg(url))
    .filter(url => url.startsWith('https://'))
    .slice(0, 6);

  // Build content with interleaved images
  const content = [];
  const imgInterval = Math.max(2, Math.ceil(paragraphs.length / (articleImages.length + 1)));
  let imgIdx = 0;

  for (let i = 0; i < paragraphs.length; i++) {
    content.push({ type: 'text', value: paragraphs[i] });

    if ((i + 1) % imgInterval === 0 && imgIdx < articleImages.length) {
      content.push({ type: 'image', value: articleImages[imgIdx] });
      imgIdx++;
    }
  }

  // Add remaining images
  while (imgIdx < articleImages.length) {
    content.push({ type: 'image', value: articleImages[imgIdx] });
    imgIdx++;
  }

  result[id] = {
    title: article.title,
    heroImage,
    content,
  };
}

// Write JSON
const outPath = path.join(__dirname, '..', 'lib', 'loveok-articles.json');
fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');

// Print stats
for (const [id, a] of Object.entries(result)) {
  const tc = a.content.filter(b => b.type === 'text').length;
  const ic = a.content.filter(b => b.type === 'image').length;
  console.log(`${id} | ${a.title.substring(0, 25).padEnd(25)} | text:${String(tc).padStart(2)} img:${String(ic).padStart(2)}`);
}
console.log(`\nTotal: ${Object.keys(result).length} articles`);
