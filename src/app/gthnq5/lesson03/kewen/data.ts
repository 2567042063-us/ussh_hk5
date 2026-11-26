export type Sentence = { zh: string; py: string; vi: string };
export type Para = { kind?: "greet" | "sign"; s: Sentence[] };

export const paragraphs: Para[] = [
  {
    s: [
      {
        zh: "中国的大部分地区，一年都有春、夏、秋、冬四个季节。",
        py: "Zhōngguó de dà bùfen dìqū, yì nián dōu yǒu chūn, xià, qiū, dōng sì ge jìjié.",
        vi: "Phần lớn các vùng của Trung Quốc, một năm đều có bốn mùa: xuân, hạ, thu, đông.",
      },
    ],
  },
  {
    s: [
      {
        zh: "就拿首都北京来说吧，从三月到五月是春季，六月到八月是夏季，九月到十一月是秋季，十二月到第二年的二月是冬季。",
        py: "Jiù ná shǒudū Běijīng lái shuō ba, cóng sān yuè dào wǔ yuè shì chūnjì, liù yuè dào bā yuè shì xiàjì, jiǔ yuè dào shíyī yuè shì qiūjì, shí'èr yuè dào dì-èr nián de èr yuè shì dōngjì.",
        vi: "Cứ lấy thủ đô Bắc Kinh mà nói, từ tháng ba đến tháng năm là mùa xuân, tháng sáu đến tháng tám là mùa hè, tháng chín đến tháng mười một là mùa thu, tháng mười hai đến tháng hai năm sau là mùa đông.",
      },
    ],
  },
  {
    s: [
      {
        zh: "春天来了，树绿了，花儿开了，天气暖和了。",
        py: "Chūntiān lái le, shù lǜ le, huār kāi le, tiānqì nuǎnhuo le.",
        vi: "Mùa xuân đến rồi, cây xanh lên, hoa nở, thời tiết ấm áp.",
      },
      {
        zh: "人们脱下冬衣，换上春装。",
        py: "Rénmen tuō xià dōngyī, huàn shàng chūnzhuāng.",
        vi: "Mọi người cởi áo mùa đông, thay đồ mùa xuân.",
      },
      {
        zh: "姑娘和小伙子们打扮得漂漂亮亮的，他们在湖上划船，在花儿前照相，公园里充满了年轻人的歌声和笑声。",
        py: "Gūniang hé xiǎohuǒzimen dǎban de piàopiaoliàngliàng de, tāmen zài hú shang huá chuán, zài huār qián zhàoxiàng, gōngyuán li chōngmǎn le niánqīngrén de gēshēng hé xiàoshēng.",
        vi: "Các cô gái và chàng trai ăn mặc thật xinh đẹp, họ chèo thuyền trên hồ, chụp ảnh trước hoa, công viên tràn ngập tiếng ca và tiếng cười của giới trẻ.",
      },
      {
        zh: "颐和园、北海、香山、长城和十三陵……到处都可以看到来自世界各地的游人。",
        py: "Yíhéyuán, Běihǎi, Xiāngshān, Chángchéng hé Shísānlíng…… dàochù dōu kěyǐ kàndào láizì shìjiè gèdì de yóurén.",
        vi: "Di Hoà Viên, Bắc Hải, Hương Sơn, Trường Thành và Thập Tam Lăng…… đâu đâu cũng có thể thấy du khách đến từ khắp nơi trên thế giới.",
      },
    ],
  },
  {
    s: [
      {
        zh: "夏天来了，天气热了。",
        py: "Xiàtiān lái le, tiānqì rè le.",
        vi: "Mùa hè đến rồi, trời nóng lên.",
      },
      {
        zh: "人们常常去游泳。",
        py: "Rénmen chángcháng qù yóuyǒng.",
        vi: "Mọi người thường đi bơi.",
      },
      {
        zh: "吃完晚饭，工作了一天的人们喜欢到外边散步、聊天儿。",
        py: "Chī wán wǎnfàn, gōngzuò le yì tiān de rénmen xǐhuan dào wàibian sànbù, liáotiānr.",
        vi: "Ăn tối xong, những người đã làm việc cả ngày thích ra ngoài đi dạo, trò chuyện.",
      },
      {
        zh: "马路边、公园里都有散步的人。",
        py: "Mǎlù biān, gōngyuán li dōu yǒu sànbù de rén.",
        vi: "Bên đường, trong công viên đều có người đi dạo.",
      },
      {
        zh: "他们一边走一边聊，显得轻松而愉快。",
        py: "Tāmen yìbiān zǒu yìbiān liáo, xiǎnde qīngsōng ér yúkuài.",
        vi: "Họ vừa đi vừa trò chuyện, trông thật thoải mái và vui vẻ.",
      },
    ],
  },
  {
    s: [
      {
        zh: "北京的冬天比较冷，但是暖气一开，屋子里很暖和。",
        py: "Běijīng de dōngtiān bǐjiào lěng, dànshì nuǎnqì yì kāi, wūzi li hěn nuǎnhuo.",
        vi: "Mùa đông Bắc Kinh khá lạnh, nhưng hễ bật lò sưởi, trong nhà rất ấm.",
      },
      {
        zh: "到了冬天，人们喜欢吃火锅儿。",
        py: "Dào le dōngtiān, rénmen xǐhuan chī huǒguōr.",
        vi: "Đến mùa đông, mọi người thích ăn lẩu.",
      },
      {
        zh: "一家几口人或三五个朋友，高高兴兴地围坐在火锅儿旁边，边吃，边喝，边聊，这情景让人羡慕和向往。",
        py: "Yì jiā jǐ kǒu rén huò sān-wǔ ge péngyou, gāogaoxìngxìng de wéi zuò zài huǒguōr pángbiān, biān chī, biān hē, biān liáo, zhè qíngjǐng ràng rén xiànmù hé xiàngwǎng.",
        vi: "Một nhà vài người hoặc ba năm người bạn, vui vẻ ngồi quây quanh nồi lẩu, vừa ăn, vừa uống, vừa trò chuyện, cảnh tượng ấy khiến người ta ngưỡng mộ và hướng tới.",
      },
    ],
  },
  {
    s: [
      {
        zh: "北京的冬天不常下雪，但是，要是下了雪，人们就会像过节一样高兴。",
        py: "Běijīng de dōngtiān bù cháng xià xuě, dànshì, yàoshi xià le xuě, rénmen jiù huì xiàng guò jié yíyàng gāoxìng.",
        vi: "Mùa đông Bắc Kinh không thường có tuyết, nhưng nếu có tuyết rơi, mọi người sẽ vui như ngày lễ.",
      },
      {
        zh: "冬天最美的风光就是雪景了。",
        py: "Dōngtiān zuì měi de fēngguāng jiù shì xuějǐng le.",
        vi: "Phong cảnh đẹp nhất của mùa đông chính là cảnh tuyết.",
      },
      {
        zh: "很多人会带上相机去外边照相。",
        py: "Hěn duō rén huì dài shàng xiàngjī qù wàibian zhàoxiàng.",
        vi: "Rất nhiều người mang máy ảnh ra ngoài chụp ảnh.",
      },
      {
        zh: "孩子们一点儿也不怕冷，在雪地上跑啊跳啊，堆雪人儿，打雪仗，小脸和小手冻得红红的，玩儿得可高兴了。",
        py: "Háizimen yìdiǎnr yě bú pà lěng, zài xuědì shang pǎo a tiào a, duī xuěrénr, dǎ xuězhàng, xiǎo liǎn hé xiǎo shǒu dòng de hónghóng de, wánr de kě gāoxìng le.",
        vi: "Bọn trẻ chẳng sợ lạnh chút nào, chạy nhảy trên nền tuyết, đắp người tuyết, ném tuyết, khuôn mặt nhỏ và đôi tay nhỏ lạnh đến đỏ ửng, chơi thật là vui.",
      },
      {
        zh: "北京人喜欢雪。",
        py: "Běijīngrén xǐhuan xuě.",
        vi: "Người Bắc Kinh thích tuyết.",
      },
      {
        zh: "“瑞雪兆丰年”，冬天要是下几场大雪，第二年一定会有好收成。",
        py: "“Ruìxuě zhào fēngnián”, dōngtiān yàoshi xià jǐ chǎng dà xuě, dì-èr nián yídìng huì yǒu hǎo shōucheng.",
        vi: "“Tuyết lành báo hiệu năm được mùa”, mùa đông nếu có vài trận tuyết lớn thì năm sau nhất định sẽ được mùa.",
      },
    ],
  },
  {
    s: [
      {
        zh: "北京一年中最好的季节要数秋天了。",
        py: "Běijīng yì nián zhōng zuì hǎo de jìjié yào shǔ qiūtiān le.",
        vi: "Mùa tốt đẹp nhất trong năm ở Bắc Kinh phải kể đến mùa thu.",
      },
      {
        zh: "天气不冷也不热，不常下雨，也很少刮风。",
        py: "Tiānqì bù lěng yě bú rè, bù cháng xià yǔ, yě hěn shǎo guā fēng.",
        vi: "Thời tiết không lạnh cũng không nóng, không thường mưa, cũng rất ít gió.",
      },
      {
        zh: "大街上到处是鲜花，到处是瓜果。",
        py: "Dàjiē shang dàochù shì xiānhuā, dàochù shì guāguǒ.",
        vi: "Trên phố đâu đâu cũng là hoa tươi, đâu đâu cũng là trái cây.",
      },
      {
        zh: "每到周末，人们都喜欢到郊外去玩儿。",
        py: "Měi dào zhōumò, rénmen dōu xǐhuan dào jiāowài qù wánr.",
        vi: "Cứ đến cuối tuần, mọi người đều thích ra ngoại ô chơi.",
      },
      {
        zh: "那满山的红叶是秋天最美丽的景色。",
        py: "Nà mǎn shān de hóngyè shì qiūtiān zuì měilì de jǐngsè.",
        vi: "Lá đỏ phủ đầy núi ấy là cảnh sắc đẹp nhất của mùa thu.",
      },
      {
        zh: "爬香山、看红叶，是北京人最喜欢的活动。",
        py: "Pá Xiāngshān, kàn hóngyè, shì Běijīngrén zuì xǐhuan de huódòng.",
        vi: "Leo Hương Sơn, ngắm lá đỏ là hoạt động người Bắc Kinh thích nhất.",
      },
    ],
  },
  {
    s: [
      {
        zh: "国庆节放假期间，正是北京一年中风景最美的时候。",
        py: "Guóqìngjié fàngjià qījiān, zhèng shì Běijīng yì nián zhōng fēngjǐng zuì měi de shíhou.",
        vi: "Trong kỳ nghỉ Quốc khánh, chính là lúc phong cảnh Bắc Kinh đẹp nhất trong năm.",
      },
      {
        zh: "每到国庆节，全国各地很多游人都会利用假期到北京来旅游。",
        py: "Měi dào Guóqìngjié, quánguó gèdì hěn duō yóurén dōu huì lìyòng jiàqī dào Běijīng lái lǚyóu.",
        vi: "Cứ đến Quốc khánh, rất nhiều du khách từ khắp cả nước đều tận dụng kỳ nghỉ đến Bắc Kinh du lịch.",
      },
      {
        zh: "要是你能到天安门广场去看看，就会知道，这个古老的国家如今显得多么年轻，你就会感到，勤劳善良、热爱和平的中国人是多么热情。",
        py: "Yàoshi nǐ néng dào Tiān'ānmén Guǎngchǎng qù kànkan, jiù huì zhīdào, zhège gǔlǎo de guójiā rújīn xiǎnde duōme niánqīng, nǐ jiù huì gǎndào, qínláo shànliáng, rè'ài hépíng de Zhōngguórén shì duōme rèqíng.",
        vi: "Nếu bạn có thể đến Quảng trường Thiên An Môn xem thử, bạn sẽ biết rằng đất nước cổ xưa này ngày nay trông trẻ trung biết bao, bạn sẽ cảm nhận được người Trung Quốc cần cù, lương thiện, yêu hoà bình nhiệt tình biết bao.",
      },
      {
        zh: "也许你会爱上这个美丽的城市，爱上这些热情友好的人们。",
        py: "Yěxǔ nǐ huì àishàng zhège měilì de chéngshì, àishàng zhèxiē rèqíng yǒuhǎo de rénmen.",
        vi: "Có lẽ bạn sẽ yêu thành phố xinh đẹp này, yêu những con người nhiệt tình thân thiện này.",
      },
    ],
  },
  {
    s: [
      {
        zh: "亲爱的朋友，愿你们在北京、在中国生活得平安快乐。",
        py: "Qīn'ài de péngyou, yuàn nǐmen zài Běijīng, zài Zhōngguó shēnghuó de píng'ān kuàilè.",
        vi: "Các bạn thân mến, chúc các bạn ở Bắc Kinh, ở Trung Quốc sống bình an vui vẻ.",
      },
    ],
  },
];

export const questions: Sentence[] = [
  {
    zh: "北京一年有几个季节？每个季节从几月到几月？你们国家呢？",
    py: "Běijīng yì nián yǒu jǐ ge jìjié? Měi ge jìjié cóng jǐ yuè dào jǐ yuè? Nǐmen guójiā ne?",
    vi: "Bắc Kinh một năm có mấy mùa? Mỗi mùa từ tháng mấy đến tháng mấy? Còn nước các bạn thì sao?",
  },
  {
    zh: "北京的春天怎么样？",
    py: "Běijīng de chūntiān zěnmeyàng?",
    vi: "Mùa xuân ở Bắc Kinh thế nào?",
  },
  {
    zh: "北京的夏天怎么样？",
    py: "Běijīng de xiàtiān zěnmeyàng?",
    vi: "Mùa hè ở Bắc Kinh thế nào?",
  },
  {
    zh: "北京的冬天怎么样？",
    py: "Běijīng de dōngtiān zěnmeyàng?",
    vi: "Mùa đông ở Bắc Kinh thế nào?",
  },
  {
    zh: "北京的秋天怎么样？",
    py: "Běijīng de qiūtiān zěnmeyàng?",
    vi: "Mùa thu ở Bắc Kinh thế nào?",
  },
  {
    zh: "你们国家或家乡的季节怎么样？请写出来并说一说。",
    py: "Nǐmen guójiā huò jiāxiāng de jìjié zěnmeyàng? Qǐng xiě chūlai bìng shuō yi shuō.",
    vi: "Mùa ở đất nước hoặc quê hương các bạn thế nào? Hãy viết ra và nói thử.",
  },
];
