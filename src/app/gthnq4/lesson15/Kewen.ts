export type Sentence = { zh: string; py: string; vi: string };

export type Turn = {
  speaker: { zh: string; vi: string };
  sentences: Sentence[];
};

export type Dialogue = {
  title: Sentence;
  intro: Sentence;
  turns: Turn[];
};

type Raw = [string, string, string];

const MARY = { zh: "玛丽", vi: "Mary" };
const STAFF = { zh: "服务员", vi: "Phục vụ" };
const MIKE = { zh: "麦克", vi: "Mike" };

const s = ([zh, py, vi]: Raw): Sentence => ({ zh, py, vi });
const turn = (speaker: Turn["speaker"], lines: Raw[]): Turn => ({
  speaker,
  sentences: lines.map(s),
});

export const dialogue1: Dialogue = {
  title: s([
    "（一）会议厅的门开着呢",
    "(Yī) Huìyìtīng de mén kāizhe ne",
    "(1) Cửa phòng họp vẫn đang mở đấy",
  ]),
  intro: s([
    "（玛丽和麦克到会议中心去找一个朋友，他们在前台问服务员……）",
    "(Mǎlì hé Màikè dào huìyì zhōngxīn qù zhǎo yí ge péngyou, tāmen zài qiántái wèn fúwùyuán……)",
    "(Mary và Mike đến trung tâm hội nghị để tìm một người bạn. Họ đang hỏi thăm tại quầy lễ tân...)",
  ]),
  turns: [
    turn(MARY, [
      [
        "请问，刚才进去一位女士，你看见没有？",
        "Qǐngwèn, gāngcái jìnqu yí wèi nǚshì, nǐ kànjiàn méiyǒu?",
        "Xin hỏi, vừa nãy có một vị quý cô đi vào, anh/chị có thấy không?",
      ],
    ]),
    turn(STAFF, [
      [
        "什么女士？长得什么样？",
        "Shénme nǚshì? Zhǎng de shénme yàng?",
        "quý cô nào? Trông như thế nào?",
      ],
    ]),
    turn(MARY, [
      [
        "她个子高高的，大概有一米七左右，黄头发，大眼睛，戴着一副眼镜儿。",
        "Tā gèzi gāogāo de, dàgài yǒu yì mǐ qī zuǒyòu, huáng tóufa, dà yǎnjing, dàizhe yí fù yǎnjìngr.",
        "Cô ấy dáng cao cao, khoảng một mét bảy, tóc vàng, mắt to, đeo một cặp kính.",
      ],
      [
        "上身穿着一件红色的西服，下边穿着一条黑色的裙子。",
        "Shàngshēn chuānzhe yí jiàn hóngsè de xīfú, xiàbian chuānzhe yì tiáo hēisè de qúnzi.",
        "Thân trên mặc một bộ vest màu đỏ, phía dưới mặc một chiếc váy màu đen.",
      ],
    ]),
    turn(STAFF, [
      ["是干什么的？", "Shì gàn shénme de?", "Là làm nghề gì vậy?"],
    ]),
    turn(MARY, [
      [
        "是电视台的主持人。",
        "Shì diànshìtái de zhǔchírén.",
        "Là người dẫn chương trình của đài truyền hình.",
      ],
    ]),
    turn(STAFF, [
      [
        "后边是不是还跟着两个小伙子，扛着摄像机？",
        "Hòubian shì bu shì hái gēnzhe liǎng ge xiǎohuǒzi, kángzhe shèxiàngjī?",
        "Phía sau có phải còn có hai chàng trai đi theo, vác máy quay phim không?",
      ],
    ]),
    turn(MARY, [["对。", "Duì.", "Đúng."]]),
    turn(STAFF, [
      [
        "会议厅的门开着呢，你们进去找吧。",
        "Huìyìtīng de mén kāizhe ne, nǐmen jìnqu zhǎo ba.",
        "Cửa phòng họp vẫn đang mở đấy, các bạn vào trong tìm đi.",
      ],
    ]),
    turn(MARY, [
      [
        "里边正开着会呢吗？",
        "Lǐbian zhèng kāizhe huì ne ma?",
        "Bên trong đang họp à?",
      ],
    ]),
    turn(STAFF, [
      ["没有。", "Méiyǒu.", "Không."],
      [
        "你们看，是不是手里拿着麦克风，对着摄像机讲话的那位？",
        "Nǐmen kàn, shì bu shì shǒu li názhe màikèfēng, duìzhe shèxiàngjī jiǎnghuà de nà wèi?",
        "Các bạn xem, có phải người tay cầm micro, nói chuyện trước máy quay đó không?",
      ],
    ]),
    turn(MARY, [
      ["对，就是她。", "Duì, jiù shì tā.", "Đúng, chính là cô ấy."],
      [
        "他们正等着我们呢。",
        "Tāmen zhèng děngzhe wǒmen ne.",
        "Họ đang đợi chúng tôi đấy.",
      ],
    ]),
    turn(STAFF, [["你们进去吧。", "Nǐmen jìnqu ba.", "Các bạn vào đi."]]),
    turn(MARY, [["谢谢啦！", "Xièxie la!", "Cảm ơn nhé!"]]),
    turn(STAFF, [["不客气。", "Bú kèqi.", "Đừng khách sáo."]]),
  ],
};

export const dialogue2: Dialogue = {
  title: s([
    "（二）墙上贴着红双喜字",
    "(Èr) Qiáng shang tiēzhe hóng shuāng xǐ zì",
    "(2) Trên tường dán cặp chữ Hỷ đỏ",
  ]),
  intro: s([
    "（麦克参加了一个中国朋友的婚礼……）",
    "(Màikè cānjiā le yí ge Zhōngguó péngyou de hūnlǐ……)",
    "(Mike tham dự lễ cưới của một người bạn Trung Quốc...)",
  ]),
  turns: [
    turn(MARY, [
      ["你昨天去哪儿了？", "Nǐ zuótiān qù nǎr le?", "Hôm qua bạn đi đâu vậy?"],
    ]),
    turn(MIKE, [
      [
        "张东带我去参加了一个中国人的婚礼。",
        "Zhāng Dōng dài wǒ qù cānjiā le yí ge Zhōngguórén de hūnlǐ.",
        "Trương Đông dẫn tôi đi tham dự một đám cưới của người Trung Quốc.",
      ],
    ]),
    turn(MARY, [
      ["怎么样？", "Zěnmeyàng?", "Thế nào?"],
      [
        "听说中国人的婚礼很热闹。",
        "Tīngshuō Zhōngguórén de hūnlǐ hěn rènao.",
        "Nghe nói đám cưới của người Trung Quốc rất náo nhiệt.",
      ],
    ]),
    turn(MIKE, [
      [
        "是！我是第一次参加这样的婚礼。",
        "Shì! Wǒ shì dì-yī cì cānjiā zhèyàng de hūnlǐ.",
        "Vâng! Tôi là lần đầu tiên tham dự một đám cưới như thế này.",
      ],
      [
        "屋子里挂着大红灯笼，墙上贴着一个很大的红双喜字。",
        "Wūzi li guàzhe dà hóng dēnglong, qiáng shang tiēzhe yí ge hěn dà de hóng shuāng xǐ zì.",
        "Trong phòng treo đèn lồng đỏ lớn, trên tường dán một cặp chữ Hỷ đỏ rất to.",
      ],
      [
        "桌子上摆着很多酒和菜。",
        "Zhuōzi shang bǎizhe hěn duō jiǔ hé cài.",
        "Trên bàn bày rất nhiều rượu và món ăn.",
      ],
      [
        "新娘长得很漂亮，穿着一件红棉袄，头上还戴着红花。",
        "Xīnniáng zhǎng de hěn piàoliang, chuānzhe yí jiàn hóng mián'ǎo, tóu shang hái dàizhe hóng huā.",
        "Cô dâu rất xinh đẹp, mặc một chiếc áo bông đỏ, trên đầu còn cài hoa đỏ.",
      ],
      [
        "新郎是一个帅小伙儿，穿着一身深蓝色的西服，系着红领带。",
        "Xīnláng shì yí ge shuài xiǎohuǒr, chuānzhe yì shēn shēnlánsè de xīfú, jìzhe hóng lǐngdài.",
        "Chú rể là một chàng trai đẹp trai, mặc một bộ vest xanh đậm, thắt cà vạt đỏ.",
      ],
      [
        "他们笑着对我们说：“欢迎！欢迎！”",
        "Tāmen xiàozhe duì wǒmen shuō: “Huānyíng! Huānyíng!”",
        "Họ cười nói với chúng tôi: “Hoan nghênh! Hoan nghênh!”",
      ],
      [
        "新娘热情地请客人吃糖，新郎忙着给客人倒喜酒。",
        "Xīnniáng rèqíng de qǐng kèrén chī táng, xīnláng mángzhe gěi kèrén dào xǐjiǔ.",
        "Cô dâu nhiệt tình mời khách ăn kẹo, chú rể bận rót rượu mừng cho khách.",
      ],
      [
        "孩子们不停地说着、笑着，热热闹闹的，气氛非常好。",
        "Háizimen bù tíng de shuōzhe, xiàozhe, rèrènàonào de, qìfēn fēicháng hǎo.",
        "Bọn trẻ không ngừng nói, cười, náo nhiệt vui vẻ, không khí rất tốt.",
      ],
    ]),
    turn(MARY, [
      [
        "“喜酒”是什么酒？",
        "“Xǐjiǔ” shì shénme jiǔ?",
        "“Rượu mừng” là rượu gì?",
      ],
    ]),
    turn(MIKE, [
      [
        "结婚时喝的酒中国人叫喜酒，吃的糖叫喜糖。",
        "Jiéhūn shí hē de jiǔ Zhōngguórén jiào xǐjiǔ, chī de táng jiào xǐtáng.",
        "Rượu uống khi kết hôn người Trung Quốc gọi là rượu mừng, kẹo ăn gọi là kẹo mừng.",
      ],
      [
        "所以，中国人要问“什么时候吃你的喜糖啊”，就是问你什么时候结婚。",
        "Suǒyǐ, Zhōngguórén yào wèn “shénme shíhou chī nǐ de xǐtáng a”, jiù shì wèn nǐ shénme shíhou jiéhūn.",
        "Cho nên, người Trung Quốc hỏi “Khi nào ăn kẹo mừng của bạn vậy”, chính là hỏi bạn khi nào kết hôn.",
      ],
    ]),
    turn(MARY, [["是吗？", "Shì ma?", "Vậy sao?"]]),
  ],
};
