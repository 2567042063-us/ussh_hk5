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
const TIANFANG = { zh: "田芳", vi: "Điền Phương" };
const MIKE = { zh: "麦克", vi: "Mike" };
const WANG = { zh: "王老师", vi: "Thầy Vương" };
const GAO = { zh: "高老师", vi: "Cô Cao" };

const s = ([zh, py, vi]: Raw): Sentence => ({ zh, py, vi });
const turn = (speaker: Turn["speaker"], lines: Raw[]): Turn => ({
  speaker,
  sentences: lines.map(s),
});

/* ===================== （一）Không phải hội thoại ===================== */

export const text1Title: Sentence = s([
  "（一）我们把教室布置成了会场",
  "(Yī) Wǒmen bǎ jiàoshì bùzhì chéng le huìchǎng",
  "(1) Chúng tôi trang trí lớp học thành hội trường",
]);

const raw1: Raw[][] = [
  [
    [
      "圣诞节和新年快到了，我们班准备在圣诞节前举行一个联欢晚会，请老师们也来参加。",
      "Shèngdànjié hé xīnnián kuài dào le, wǒmen bān zhǔnbèi zài Shèngdànjié qián jǔxíng yí ge liánhuān wǎnhuì, qǐng lǎoshīmen yě lái cānjiā.",
      "Giáng sinh và Năm mới sắp đến rồi, lớp chúng tôi dự định tổ chức một buổi liên hoan tối trước Giáng sinh, mời các thầy cô cũng đến tham dự.",
    ],
    [
      "晚会上我们要唱中文歌，用汉语讲故事，表演节目，品尝各国的特色菜。",
      "Wǎnhuì shang wǒmen yào chàng Zhōngwén gē, yòng Hànyǔ jiǎng gùshi, biǎoyǎn jiémù, pǐncháng gèguó de tèsè cài.",
      "Trong buổi tối, chúng tôi sẽ hát bài hát tiếng Trung, kể chuyện bằng tiếng Hán, biểu diễn tiết mục, nếm thử các món đặc sắc của các nước.",
    ],
    [
      "班长要求我们那天把自己亲手做的菜带到晚会上来，让大家品尝。",
      "Bānzhǎng yāoqiú wǒmen nà tiān bǎ zìjǐ qīnshǒu zuò de cài dài dào wǎnhuì shang lái, ràng dàjiā pǐncháng.",
      "Lớp trưởng yêu cầu hôm đó chúng tôi mang món ăn do chính tay mình làm đến buổi liên hoan để mọi người cùng nếm thử.",
    ],
  ],
  [
    [
      "玛丽说：“我们最好借一个大教室，把它布置成会场。”",
      "Mǎlì shuō: “Wǒmen zuìhǎo jiè yí ge dà jiàoshì, bǎ tā bùzhì chéng huìchǎng.”",
      "Mary nói: “Tốt nhất là chúng ta mượn một phòng học lớn, trang trí nó thành hội trường.”",
    ],
  ],
  [
    [
      "前天，我们找到管理员，告诉了她借教室的事儿，她答应把那个大教室借给我们。",
      "Qiántiān, wǒmen zhǎodào guǎnlǐyuán, gàosu le tā jiè jiàoshì de shìr, tā dāying bǎ nàge dà jiàoshì jiè gěi wǒmen.",
      "Hôm kia, chúng tôi tìm gặp người quản lý, nói với cô ấy chuyện mượn phòng học, cô ấy đồng ý cho chúng tôi mượn phòng học lớn đó.",
    ],
    [
      "昨天下午服务员把教室打扫了一下儿，把门和窗户也都擦得干干净净的。",
      "Zuótiān xiàwǔ fúwùyuán bǎ jiàoshì dǎsǎo le yíxiàr, bǎ mén hé chuānghu yě dōu cā de gānganjìngjìng de.",
      "Chiều hôm qua nhân viên phục vụ đã quét dọn phòng học một lượt, cửa ra vào và cửa sổ cũng đều lau sạch sẽ.",
    ],
  ],
  [
    [
      "我们把桌子摆成了一个大圆圈儿，爱德华把“圣诞——新年快乐”几个大字贴在了黑板上。",
      "Wǒmen bǎ zhuōzi bǎi chéng le yí ge dà yuánquānr, Àidéhuá bǎ “Shèngdàn——xīnnián kuàilè” jǐ ge dà zì tiē zài le hēibǎn shang.",
      "Chúng tôi xếp bàn thành một vòng tròn lớn, Edward dán mấy chữ lớn “Giáng sinh — Chúc mừng năm mới” lên bảng đen.",
    ],
  ],
  [
    [
      "李美英说，晚会上她要和几个同学唱歌，跳舞，所以把音响也搬到教室里来了。",
      "Lǐ Měiyīng shuō, wǎnhuì shang tā yào hé jǐ ge tóngxué chàng gē, tiàowǔ, suǒyǐ bǎ yīnxiǎng yě bān dào jiàoshì li lái le.",
      "Lý Mỹ Anh nói, trong buổi tối cô ấy sẽ cùng vài bạn hát và nhảy, nên đã khiêng cả dàn âm thanh vào phòng học.",
    ],
    [
      "爱德华昨天从商店买回来一棵圣诞树，我们把它摆在了教室的前边，用彩灯和彩带把它装饰得非常漂亮。",
      "Àidéhuá zuótiān cóng shāngdiàn mǎi huílai yì kē Shèngdànshù, wǒmen bǎ tā bǎi zài le jiàoshì de qiánbian, yòng cǎidēng hé cǎidài bǎ tā zhuāngshì de fēicháng piàoliang.",
      "Hôm qua Edward mua từ cửa hàng về một cây thông Noel, chúng tôi đặt nó ở phía trước phòng học, dùng đèn màu và dây ruy băng màu trang trí rất đẹp.",
    ],
  ],
  [
    [
      "安娜是我们班最小的同学，她的生日正好是十二月二十五号，所以同学们还为她准备了一份生日礼物和一个生日蛋糕，但是我们还没把这事儿告诉她。",
      "Ānnà shì wǒmen bān zuì xiǎo de tóngxué, tā de shēngrì zhènghǎo shì shí'èr yuè èrshíwǔ hào, suǒyǐ tóngxuémen hái wèi tā zhǔnbèi le yí fèn shēngrì lǐwù hé yí ge shēngrì dàngāo, dànshì wǒmen hái méi bǎ zhè shìr gàosu tā.",
      "Anna là bạn nhỏ tuổi nhất lớp chúng tôi, sinh nhật của bạn ấy đúng vào ngày 25 tháng 12, nên các bạn còn chuẩn bị cho bạn ấy một món quà sinh nhật và một chiếc bánh sinh nhật, nhưng chúng tôi vẫn chưa nói chuyện này với bạn ấy.",
    ],
    [
      "我们想，到晚会上再把生日礼物送给她，给她一个惊喜，让她在中国过一个快乐的生日。",
      "Wǒmen xiǎng, dào wǎnhuì shang zài bǎ shēngrì lǐwù sòng gěi tā, gěi tā yí ge jīngxǐ, ràng tā zài Zhōngguó guò yí ge kuàilè de shēngrì.",
      "Chúng tôi nghĩ, đến buổi liên hoan mới tặng quà sinh nhật cho bạn ấy, tạo cho bạn ấy một bất ngờ, để bạn ấy có một sinh nhật vui vẻ ở Trung Quốc.",
    ],
  ],
  [
    [
      "我们把教室布置好以后，请老师来看了看，老师高兴地说：“你们把教室布置得真漂亮！”",
      "Wǒmen bǎ jiàoshì bùzhì hǎo yǐhòu, qǐng lǎoshī lái kàn le kàn, lǎoshī gāoxìng de shuō: “Nǐmen bǎ jiàoshì bùzhì de zhēn piàoliang!”",
      "Sau khi trang trí xong phòng học, chúng tôi mời thầy cô đến xem, thầy cô vui vẻ nói: “Các em trang trí phòng học đẹp thật đấy!”",
    ],
  ],
  [
    [
      "为了开好这个联欢会，同学们都认真地做了准备。",
      "Wèile kāi hǎo zhège liánhuānhuì, tóngxuémen dōu rènzhēn de zuò le zhǔnbèi.",
      "Để tổ chức tốt buổi liên hoan này, các bạn đều chuẩn bị rất nghiêm túc.",
    ],
    [
      "明天晚上六点钟，我们的晚会就要开始了，欢迎大家来参加。",
      "Míngtiān wǎnshang liù diǎn zhōng, wǒmen de wǎnhuì jiù yào kāishǐ le, huānyíng dàjiā lái cānjiā.",
      "Sáu giờ tối ngày mai, buổi liên hoan của chúng tôi sắp bắt đầu, hoan nghênh mọi người đến tham dự.",
    ],
  ],
];

export const paragraphs: Sentence[][] = raw1.map((p) =>
  p.map(([zh, py, vi]) => ({ zh, py, vi })),
);

export const text1: Sentence[][] = raw1.map((p) => p.map(s));

/* ===================== （二）Hội thoại ===================== */

export const dialogue2: Dialogue = {
  title: s([
    "（二）把对联儿贴在大门两边",
    "(Èr) Bǎ duìliánr tiē zài dàmén liǎngbiān",
    "(2) Dán câu đối hai bên cửa lớn",
  ]),
  intro: s([
    "（春节前，王老师和夫人高老师在布置他们的家……）",
    "(Chūnjié qián, Wáng lǎoshī hé fūrén Gāo lǎoshī zài bùzhì tāmen de jiā……)",
    "(Trước Tết Xuân, thầy Vương và phu nhân là cô Cao đang trang trí nhà của họ...)",
  ]),
  turns: [
    turn(GAO, [
      [
        "哎，这幅画儿挂在什么地方比较好？",
        "Āi, zhè fú huàr guà zài shénme dìfang bǐjiào hǎo?",
        "Ôi, bức tranh này treo ở chỗ nào thì tốt hơn nhỉ?",
      ],
    ]),
    turn(WANG, [
      [
        "我想把它挂在中间。对了，小林还没把水仙花送来吧？",
        "Wǒ xiǎng bǎ tā guà zài zhōngjiān. Duìle, Xiǎo Lín hái méi bǎ shuǐxiānhuā sòng lái ba?",
        "Anh muốn treo nó ở giữa. À đúng rồi, Tiểu Lâm vẫn chưa mang hoa thủy tiên đến nhỉ?",
      ],
    ]),
    turn(GAO, [
      [
        "已经送来了，我把它摆在卧室里了。你来看，开得可好了。",
        "Yǐjīng sòng lái le, wǒ bǎ tā bǎi zài wòshì li le. Nǐ lái kàn, kāi de kě hǎo le.",
        "Đã mang đến rồi, em đặt nó trong phòng ngủ rồi. Anh lại xem, nở đẹp lắm.",
      ],
    ]),
    turn(WANG, [
      [
        "把它摆在客厅里比较好。我把“福”字贴在门上吧。",
        "Bǎ tā bǎi zài kètīng li bǐjiào hǎo. Wǒ bǎ “fú” zì tiē zài mén shang ba.",
        "Đặt nó ở phòng khách thì tốt hơn. Anh dán chữ “福” lên cửa nhé.",
      ],
    ]),
    turn(GAO, [
      [
        "把你写的对联儿也贴上去吧。",
        "Bǎ nǐ xiě de duìliánr yě tiē shàngqu ba.",
        "Anh cũng dán câu đối anh viết lên luôn đi.",
      ],
      ["（读对联儿）", "(Dú duìliánr)", "(Đọc câu đối)"],
      [
        "“新年新春吉祥，百行百业……”你是不是把“兴”字也写成“旺”字了？",
        "“Xīnnián xīnchūn jíxiáng, bǎi háng bǎi yè……” Nǐ shì bu shì bǎ “xīng” zì yě xiě chéng “wàng” zì le?",
        "“Năm mới xuân mới cát tường, trăm nghề nghìn nghiệp……” Có phải anh viết chữ “兴” thành chữ “旺” rồi không?",
      ],
    ]),
    turn(WANG, [
      [
        "哦，可不是嘛，写错了。应该是“新年新春吉祥，百行百业兴旺”。",
        "Ò, kěbúshì ma, xiě cuò le. Yīnggāi shì “xīnnián xīnchūn jíxiáng, bǎi háng bǎi yè xīngwàng”.",
        "Ồ, đúng thật, viết sai rồi. Phải là “Năm mới xuân mới cát tường, trăm nghề nghìn nghiệp hưng vượng”.",
      ],
    ]),
  ],
};

/* ===================== （三）Hội thoại ===================== */

export const dialogue3: Dialogue = {
  title: s([
    "（三）把“福”字倒着贴在门上",
    "(Sān) Bǎ “fú” zì dàozhe tiē zài mén shang",
    "(3) Dán chữ “福” ngược lên cửa",
  ]),
  intro: s([
    "（麦克看见王老师家门上贴着对联儿，就问田芳……）",
    "(Màikè kànjiàn Wáng lǎoshī jiā mén shang tiēzhe duìliánr, jiù wèn Tián Fāng……)",
    "(Mike thấy trên cửa nhà thầy Vương dán câu đối, bèn hỏi Điền Phương...)",
  ]),
  turns: [
    turn(MIKE, [
      [
        "田芳，这就是你说的对联儿吗？",
        "Tián Fāng, zhè jiù shì nǐ shuō de duìliánr ma?",
        "Điền Phương, đây chính là câu đối mà bạn nói phải không?",
      ],
    ]),
    turn(TIANFANG, [["是啊。", "Shì a.", "Đúng vậy."]]),
    turn(MIKE, [
      [
        "门上这个字怎么念？",
        "Mén shang zhège zì zěnme niàn?",
        "Chữ này trên cửa đọc thế nào?",
      ],
    ]),
    turn(TIANFANG, [
      [
        "你仔细看看，认识不认识？",
        "Nǐ zǐxì kànkan, rènshi bu rènshi?",
        "Bạn nhìn kỹ xem, có biết không?",
      ],
    ]),
    turn(MIKE, [["没学过。", "Méi xué guo.", "Chưa học qua."]]),
    turn(TIANFANG, [
      [
        "这不是幸福的“福”字吗？",
        "Zhè bú shì xìngfú de “fú” zì ma?",
        "Đây chẳng phải là chữ “福” trong “hạnh phúc” sao?",
      ],
      [
        "过春节的时候，差不多家家都贴“福”字。",
        "Guò Chūnjié de shíhou, chàbuduō jiājiā dōu tiē “fú” zì.",
        "Lúc đón Tết Xuân, hầu như nhà nào cũng dán chữ “福”.",
      ],
    ]),
    turn(MIKE, [
      [
        "这是幸福的“福”字？为什么把“福”字倒着贴在门上呢？",
        "Zhè shì xìngfú de “fú” zì? Wèi shénme bǎ “fú” zì dàozhe tiē zài mén shang ne?",
        "Đây là chữ “福” trong “hạnh phúc” à? Tại sao lại dán chữ “福” ngược lên cửa vậy?",
      ],
    ]),
    turn(TIANFANG, [
      [
        "这样，人们一看见就会说“福倒了”，听声音就是“福到了”。",
        "Zhèyàng, rénmen yí kànjiàn jiù huì shuō “fú dào le”, tīng shēngyīn jiù shì “fú dào le”.",
        "Như vậy, mọi người vừa nhìn thấy sẽ nói “福倒了” (phúc bị ngược), nghe âm thanh thì chính là “福到了” (phúc đến rồi).",
      ],
    ]),
    turn(MIKE, [
      [
        "哦，那我也去买一些“福”字来，把它倒着贴在门上、床上、桌子上、椅子上、沙发上、冰箱上、洗衣机上、空调上……等着幸福来找我。",
        "Ò, nà wǒ yě qù mǎi yìxiē “fú” zì lái, bǎ tā dàozhe tiē zài mén shang, chuáng shang, zhuōzi shang, yǐzi shang, shāfā shang, bīngxiāng shang, xǐyījī shang, kōngtiáo shang…… děngzhe xìngfú lái zhǎo wǒ.",
        "Ồ, vậy mình cũng đi mua một ít chữ “福”, dán ngược lên cửa, giường, bàn, ghế, sofa, tủ lạnh, máy giặt, máy điều hòa... chờ hạnh phúc đến tìm mình.",
      ],
    ]),
  ],
};
