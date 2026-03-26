import json

import os
tmp = os.path.join(os.environ.get('TEMP', '/tmp'), 'articles_data.txt')
if not os.path.exists(tmp):
    tmp = 'C:\\Users\\88691\\AppData\\Local\\Temp\\articles_data.txt'
with open(tmp, 'r', encoding='utf-8') as f:
    raw = f.read()

blocks = raw.split('###ARTICLE###')[1:]

known_titles = {
    "83509": "鐳射槍與漆彈", "83508": "桌遊派對遊戲", "10427": "鏢準情人｜命中愛情紅心",
    "84968": "美味料理｜幸福好味道", "84858": "和風創意｜壽司DIY", "84857": "美味鮭魚｜品味愛情的美妙滋味！",
    "84951": "多肉植物｜愛在蔓延時", "84962": "第六感手拉坯", "84865": "療癒的浪漫小物｜浮游花手作趣",
    "84943": "蜜糖吐司手作趣", "84867": "自己做｜烘焙妳的甜心蛋糕", "84855": "FUEGO巧克力傳情",
    "84852": "貓咪咖啡廳｜喵星人派對", "84959": "水上騎馬打仗 清涼刺激的泳池Party", "84967": "阿根廷探戈",
    "83510": "浪漫石門放風箏", "84956": "遊艇派對｜海上的浪漫", "84868": "七夕の園遊祭",
    "84860": "型男培養講堂：如何培養迷人的個性", "84854": "戀愛講座：排約或約會，高手會怎麼做？",
    "66266": "「干物女大變身」美膚彩妝造型班", "84859": "K歌派對-歌聲傳情", "84866": "盛夏微醺園遊祭",
    "84871": "一對一快速約會（Speed Dating）", "84863": "夕陽情懷｜淡水河畔騎車趣",
    "84864": "愜意情調｜滿天星花賞夜趣", "83517": "手工製作玫瑰蘋果塔", "84949": "鮭魚料理｜吃心絕對",
    "84964": "非誠勿擾｜快速換桌", "84946": "魔女烘培｜愛情魔力再現", "84950": "Ｋ歌派對｜情聲綿綿",
    "84955": "烹然心動｜回鮭愛的原點", "84966": "巧克力情人夢", "83518": "溯溪聯誼活動",
    "84948": "天生絕配｜桌遊對對碰", "84947": "心心相印｜情牽護理師", "83511": "密室逃脫聯誼",
    "84862": "綠意盎然｜多肉植物DIY", "84856": "一對一精緻客製化專屬約會",
}

hero_map = {
    "83509": "/images/original/shesay.com/wp-content/uploads/2023/11/1.png",
    "83508": "/images/original/shesay.com/wp-content/uploads/2023/11/10379865_385912448249347_2126902594935315737_o-960x540-1.jpeg",
    "10427": "/images/original/shesay.com/wp-content/uploads/2023/11/1316-768x538-1.jpeg",
    "84968": "/images/original/shesay.com/wp-content/uploads/2023/11/1309-678x381-1.jpeg",
    "84858": "/images/original/shesay.com/wp-content/uploads/2023/11/275113f2cb61f4c3b4bc6d3edcb1248e.jpeg",
    "84857": "/images/original/shesay.com/wp-content/uploads/2023/11/ev_cd416212ab_1450500908-768x512-1.jpeg",
    "84951": "/images/original/shesay.com/wp-content/uploads/2023/11/YWB32VA1BFO55VQW2.png",
    "84962": "/images/original/shesay.com/wp-content/uploads/2023/11/163966-678x381-1.jpeg",
    "84865": "/images/original/shesay.com/wp-content/uploads/2023/11/1697009498737.jpeg",
    "84943": "/images/original/shesay.com/wp-content/uploads/2023/11/04X1PF462E000D19D76B4Bpx-678x509-1.jpeg",
    "84867": "/images/original/shesay.com/wp-content/uploads/2023/11/360092070_606105934960619_363698282878880428_n.jpeg",
    "84855": "/images/original/shesay.com/wp-content/uploads/2023/11/ev_8c0723be28_1445396497-768x509-1.jpeg",
    "84852": "/images/original/shesay.com/wp-content/uploads/2023/11/e6f15b6e34b04f5fa7fde12cbd2e453d.jpeg",
    "84959": "/images/original/shesay.com/wp-content/uploads/2023/11/img-2-426x351-1.jpeg",
    "84967": "/images/original/shesay.com/wp-content/uploads/2023/11/1336-768x402-1.jpeg",
    "83510": "/images/original/shesay.com/wp-content/uploads/2023/11/w600h600r16888.jpeg",
    "84956": "/images/original/shesay.com/wp-content/uploads/2023/11/1307-678x381-2.jpeg",
    "84868": "/images/original/shesay.com/wp-content/uploads/2023/11/1M9A8315-1024x683-1.jpeg",
    "84860": "/images/original/shesay.com/wp-content/uploads/2023/11/2.jepg_-2048x1600.jpg",
    "84854": "/images/original/shesay.com/wp-content/uploads/2023/11/d1201119.jpeg",
    "66266": "/images/original/shesay.com/wp-content/uploads/2023/11/ev_ecad1ceeec_1545037467-768x512-1.jpeg",
    "84859": "/images/original/shesay.com/wp-content/uploads/2023/11/event03.jpeg",
    "84866": "/images/original/shesay.com/wp-content/uploads/2023/11/DSC00020_副本.jpeg",
    "84871": "/images/original/shesay.com/wp-content/uploads/2023/11/event01-768x768-1.jpeg",
    "84863": "/images/original/shesay.com/wp-content/uploads/2023/11/P-1521774-DFFDB604O-768x512-1.jpeg",
    "84864": "/images/original/shesay.com/wp-content/uploads/2023/11/88d5472e926dcd6bf913b0af5195e88b_副本_副本-687x1024-1.png",
    "83517": "/images/original/shesay.com/wp-content/uploads/2023/11/20231014手作蘋果塔-768x475-1.jpeg",
    "84949": "/images/original/shesay.com/wp-content/uploads/2023/11/1260-768x472-1.jpeg",
    "84964": "/images/original/shesay.com/wp-content/uploads/2023/11/164332-768x502-1.jpeg",
    "84946": "/images/original/shesay.com/wp-content/uploads/2023/11/1311-678x381-1.jpeg",
    "84950": "/images/original/shesay.com/wp-content/uploads/2023/11/YWB32VA1BFO55VQW2-1-768x477-1.png",
    "84955": "/images/original/shesay.com/wp-content/uploads/2023/11/1266-678x381-1.jpeg",
    "84966": "/images/original/shesay.com/wp-content/uploads/2023/11/art.jpeg",
    "83518": "/images/original/shesay.com/wp-content/uploads/2023/11/tn_P5210561-678x509-1.jpeg",
    "84948": "/images/original/shesay.com/wp-content/uploads/2023/11/1262-768x646-1.jpeg",
    "84947": "/images/original/shesay.com/wp-content/uploads/2023/11/u1836360752199427797fm30app106fJPEG.jpeg",
    "83511": "/images/original/shesay.com/wp-content/uploads/2023/11/I3HFCBUPA67NZ0A_N.png",
    "84862": "/images/original/shesay.com/wp-content/uploads/2023/11/BHWQOX46V746ZQS.png",
    "84856": "/images/original/shesay.com/wp-content/uploads/2023/11/ev_d92c8926ce_1555391132.jpeg",
}

result = {}

for block in blocks:
    lines = block.strip().split('\n')
    aid = ''
    images = []
    paragraphs = []
    section = None

    for line in lines:
        line = line.strip()
        if line.startswith('ID:'):
            aid = line[3:]
        elif line == '###IMAGES###':
            section = 'images'
        elif line == '###CONTENT###':
            section = 'content'
        elif line == '###END###':
            section = None
        elif section == 'images' and line:
            images.append(line)
        elif section == 'content' and line:
            paragraphs.append(line)

    if not aid:
        continue

    title = known_titles.get(aid, aid)
    hero = hero_map.get(aid, '')

    content = []
    for p in paragraphs:
        p = p.replace('&amp;', '&').replace('&nbsp;', '').strip()
        if p and len(p) > 5:
            content.append({"type": "text", "value": p})

    for img in images[:8]:
        content.append({"type": "image", "value": img})

    result[aid] = {
        "title": title,
        "heroImage": hero,
        "content": content
    }

out_path = os.path.join(os.environ.get('TEMP', '/tmp'), 'articles.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f"Generated {len(result)} articles")
