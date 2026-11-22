export type Sentence = { zh: string; py: string; vi: string };

const raw: [string, string, string][][] = [
  [
    [
      "星期天，我和麦克一起骑车到图书城去买书。",
      "Xīngqītiān, wǒ hé Màikè yìqǐ qí chē dào Túshūchéng qù mǎi shū.",
      "Chủ nhật, tôi và Mike cùng đạp xe đến Siêu thị sách để mua sách.",
    ],
    [
      "图书城离我们学校比较远。",
      "Túshūchéng lí wǒmen xuéxiào bǐjiào yuǎn.",
      "Siêu thị sách cách trường chúng tôi khá xa.",
    ],
    [
      "那天刮风，我们骑了一个多小时才骑到。",
      "Nà tiān guā fēng, wǒmen qí le yí ge duō xiǎoshí cái qí dào.",
      "Hôm đó có gió, chúng tôi đạp hơn một tiếng mới tới nơi.",
    ],
  ],
  [
    [
      "图书城很大，里边有很多书店。",
      "Túshūchéng hěn dà, lǐbian yǒu hěn duō shūdiàn.",
      "Siêu thị sách rất lớn, bên trong có rất nhiều hiệu sách.",
    ],
    [
      "每个书店我们都想进去看看。",
      "Měi ge shūdiàn wǒmen dōu xiǎng jìnqu kànkan.",
      "Hiệu sách nào chúng tôi cũng muốn vào xem thử.",
    ],
    [
      "我们从一个书店走出来，又走进另一个书店。",
      "Wǒmen cóng yí ge shūdiàn zǒu chūlai, yòu zǒujìn lìng yí ge shūdiàn.",
      "Chúng tôi từ một hiệu sách đi ra, lại đi vào một hiệu sách khác.",
    ],
    [
      "看到书店里有各种各样的书，我很兴奋。",
      "Kàndào shūdiàn li yǒu gèzhǒng gèyàng de shū, wǒ hěn xīngfèn.",
      "Thấy trong hiệu sách có đủ loại sách, tôi rất hào hứng.",
    ],
    [
      "从这个书架上拿下来一本看看，再放上去，又从另一个书架上抽出来一本看看。",
      "Cóng zhège shūjià shang ná xiàlai yì běn kànkan, zài fàng shàngqu, yòu cóng lìng yí ge shūjià shang chōu chūlai yì běn kànkan.",
      "Lấy xuống từ giá sách này một cuốn xem thử, rồi đặt lên lại, lại rút ra từ giá sách khác một cuốn xem thử.",
    ],
    [
      "我挑了几本历史书，麦克选了一些中文小说儿。",
      "Wǒ tiāo le jǐ běn lìshǐ shū, Màikè xuǎn le yìxiē Zhōngwén xiǎoshuōr.",
      "Tôi chọn mấy cuốn sách lịch sử, Mike chọn một số tiểu thuyết tiếng Trung.",
    ],
  ],
  [
    [
      "快放寒假了，我们都想买一些书带回国去。",
      "Kuài fàng hánjià le, wǒmen dōu xiǎng mǎi yìxiē shū dài huí guó qù.",
      "Sắp nghỉ đông rồi, chúng tôi đều muốn mua một ít sách mang về nước.",
    ],
    [
      "除了买书以外，我们还想买一些小礼品，带回去送朋友。",
      "Chúle mǎi shū yǐwài, wǒmen hái xiǎng mǎi yìxiē xiǎo lǐpǐn, dài huíqu sòng péngyou.",
      "Ngoài mua sách ra, chúng tôi còn muốn mua một ít quà nhỏ, mang về tặng bạn bè.",
    ],
    [
      "于是我们又走进一家商场去。",
      "Yúshì wǒmen yòu zǒujìn yì jiā shāngchǎng qù.",
      "Thế là chúng tôi lại đi vào một trung tâm thương mại.",
    ],
    [
      "这家商场里边什么商品都有。",
      "Zhè jiā shāngchǎng lǐbian shénme shāngpǐn dōu yǒu.",
      "Trung tâm thương mại này bên trong hàng hóa gì cũng có.",
    ],
    [
      "我买了一些京剧脸谱的小饰物，还买了一些丝织品。",
      "Wǒ mǎi le yìxiē Jīngjù liǎnpǔ de xiǎo shìwù, hái mǎi le yìxiē sīzhīpǐn.",
      "Tôi mua một ít đồ trang trí nhỏ hình mặt nạ Kinh kịch, còn mua một ít hàng dệt tơ.",
    ],
    [
      "麦克买了很多漂亮的钥匙链儿，还买了不少小玩具，有小熊猫、小汽车什么的。",
      "Màikè mǎi le hěn duō piàoliang de yàoshiliànr, hái mǎi le bùshǎo xiǎo wánjù, yǒu xiǎo xióngmāo, xiǎo qìchē shénme de.",
      "Mike mua rất nhiều móc chìa khoá đẹp, còn mua không ít đồ chơi nhỏ, có gấu trúc nhỏ, ô tô nhỏ, v.v.",
    ],
    [
      "他说，这些玩具带回去送给小朋友们，他们肯定喜欢。",
      "Tā shuō, zhèxiē wánjù dài huíqu sòng gěi xiǎopéngyoumen, tāmen kěndìng xǐhuan.",
      "Anh ấy nói, những đồ chơi này mang về tặng cho các em nhỏ, chúng chắc chắn sẽ thích.",
    ],
  ],
  [
    [
      "售货员看我们买的东西多，不好拿，就给我们一人找了一个小纸箱。",
      "Shòuhuòyuán kàn wǒmen mǎi de dōngxi duō, bù hǎo ná, jiù gěi wǒmen yì rén zhǎo le yí ge xiǎo zhǐxiāng.",
      "Nhân viên bán hàng thấy đồ chúng tôi mua nhiều, khó cầm, liền tìm cho mỗi người một chiếc thùng giấy nhỏ.",
    ],
    [
      "我们买的书和礼品正好都能放进去。",
      "Wǒmen mǎi de shū hé lǐpǐn zhènghǎo dōu néng fàng jìnqu.",
      "Sách và quà chúng tôi mua vừa vặn đều có thể để vào được.",
    ],
    [
      "从商场出来，已经十二点多了。",
      "Cóng shāngchǎng chūlai, yǐjīng shí'èr diǎn duō le.",
      "Từ trung tâm thương mại ra, đã hơn mười hai giờ rồi.",
    ],
    [
      "我和麦克走进一个小饭馆儿去吃午饭。",
      "Wǒ hé Màikè zǒujìn yí ge xiǎo fànguǎnr qù chī wǔfàn.",
      "Tôi và Mike đi vào một quán ăn nhỏ để ăn trưa.",
    ],
    [
      "我们要了一盘饺子和几个菜，吃得很舒服。",
      "Wǒmen yào le yì pán jiǎozi hé jǐ ge cài, chī de hěn shūfu.",
      "Chúng tôi gọi một đĩa sủi cảo và mấy món ăn, ăn rất thoải mái.",
    ],
    [
      "吃完饭，我们就骑车回来了。",
      "Chī wán fàn, wǒmen jiù qí chē huílai le.",
      "Ăn xong, chúng tôi liền đạp xe về.",
    ],
  ],
  [
    [
      "回到学校，我又累又困，想赶快回到宿舍去洗个澡，休息休息。",
      "Huídào xuéxiào, wǒ yòu lèi yòu kùn, xiǎng gǎnkuài huídào sùshè qù xǐ ge zǎo, xiūxi xiūxi.",
      "Về đến trường, tôi vừa mệt vừa buồn ngủ, muốn nhanh chóng về ký túc xá tắm rửa, nghỉ ngơi một chút.",
    ],
    [
      "我从车上拿下小纸箱。",
      "Wǒ cóng chē shang ná xià xiǎo zhǐxiāng.",
      "Tôi lấy xuống từ trên xe chiếc thùng giấy nhỏ.",
    ],
    [
      "走进楼来，看见电梯门口贴了张通知：“电梯维修，请走楼梯。”",
      "Zǒujìn lóu lai, kànjiàn diàntī ménkǒu tiē le zhāng tōngzhī: “Diàntī wéixiū, qǐng zǒu lóutī.”",
      "Đi vào trong toà nhà, thấy ở cửa thang máy dán một tờ thông báo: “Thang máy đang bảo trì, xin đi cầu thang bộ.”",
    ],
    [
      "我住十层，没办法，只好爬上去。",
      "Wǒ zhù shí céng, méi bànfǎ, zhǐhǎo pá shàngqu.",
      "Tôi ở tầng mười, không còn cách nào khác, đành phải leo lên.",
    ],
    [
      "我手里提着一箱子东西，一步一步地往上爬。",
      "Wǒ shǒu li tízhe yì xiāngzi dōngxi, yí bù yí bù de wǎng shàng pá.",
      "Tay tôi xách một thùng đồ, từng bước từng bước leo lên.",
    ],
    [
      "爬了半天才爬到十层。",
      "Pá le bàntiān cái pádào shí céng.",
      "Leo mãi mới leo đến tầng mười.",
    ],
  ],
  [
    [
      "到了门口，我放下箱子，要拿出钥匙开门的时候，却发现钥匙不见了，找了半天也没有找到。",
      "Dàole ménkǒu, wǒ fàngxià xiāngzi, yào ná chū yàoshi kāimén de shíhou, què fāxiàn yàoshi bú jiàn le, zhǎo le bàntiān yě méiyǒu zhǎodào.",
      "Đến cửa, tôi đặt thùng đồ xuống, lúc định lấy chìa khoá ra mở cửa thì phát hiện chìa khoá không thấy đâu, tìm mãi cũng không tìm thấy.",
    ],
    [
      "啊！我忽然想起来了，钥匙还在楼下自行车上插着呢，我忘拔下来了。",
      "À! Wǒ hūrán xiǎng qǐlai le, yàoshi hái zài lóuxià zìxíngchē shang chāzhe ne, wǒ wàng bá xiàlai le.",
      "À! Tôi chợt nhớ ra, chìa khoá vẫn còn cắm ở xe đạp dưới lầu, tôi quên rút ra rồi.",
    ],
    [
      "这时，我真是哭笑不得。",
      "Zhè shí, wǒ zhēn shi kūxiào bùdé.",
      "Lúc này, tôi thật sự dở khóc dở cười.",
    ],
    [
      "我刚要跑下楼去，就看见麦克也爬上来了，他手里拿的正是我的那串儿钥匙。",
      "Wǒ gāng yào pǎo xià lóu qù, jiù kànjiàn Màikè yě pá shànglai le, tā shǒu li ná de zhèng shì wǒ de nà chuànr yàoshi.",
      "Tôi vừa định chạy xuống lầu thì thấy Mike cũng leo lên, trong tay anh ấy cầm chính là chùm chìa khoá của tôi.",
    ],
  ],
];

export const paragraphs: Sentence[][] = raw.map((p) =>
  p.map(([zh, py, vi]) => ({ zh, py, vi })),
);

export const questions: Sentence[] = [
  {
    zh: "星期天，“我”和麦克一起去哪儿买书？",
    py: "Xīngqītiān, “wǒ” hé Màikè yìqǐ qù nǎr mǎi shū?",
    vi: "Chủ nhật, “tôi” và Mike cùng đi đâu mua sách?",
  },
  {
    zh: "图书城离学校远不远？他们骑了多长时间才到？",
    py: "Túshūchéng lí xuéxiào yuǎn bu yuǎn? Tāmen qí le duō cháng shíjiān cái dào?",
    vi: "Siêu thị sách cách trường có xa không? Họ đạp xe bao lâu mới tới nơi?",
  },
  {
    zh: "“我”和麦克都买了什么？",
    py: "“Wǒ” hé Màikè dōu mǎi le shénme?",
    vi: "“Tôi” và Mike đã mua những gì?",
  },
  {
    zh: "“我”回到学校以后，为什么要爬楼梯上十层？",
    py: "“Wǒ” huídào xuéxiào yǐhòu, wèishénme yào pá lóutī shàng shí céng?",
    vi: "Sau khi về đến trường, vì sao “tôi” phải leo cầu thang lên tầng mười?",
  },
  {
    zh: "“我”到了门口以后，发现钥匙怎么了？",
    py: "“Wǒ” dàole ménkǒu yǐhòu, fāxiàn yàoshi zěnme le?",
    vi: "Sau khi đến trước cửa, “tôi” phát hiện chìa khóa bị làm sao?",
  },
  {
    zh: "最后，麦克给“我”带来了什么？",
    py: "Zuìhòu, Màikè gěi “wǒ” dài lái le shénme?",
    vi: "Cuối cùng, Mike mang đến cho “tôi” thứ gì?",
  },
];
