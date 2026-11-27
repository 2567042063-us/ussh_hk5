export type Sentence = { zh: string; py: string; vi: string };
export type Para = { kind?: "greet" | "sign"; s: Sentence[] };
export const bai4Paragraphs: Para[] = [
  // ===== (一) 理想 =====
  {
    s: [
      {
        zh: "中学毕业那年，要考什么大学，要学什么专业，我自己也不清楚。",
        py: "Zhōngxué bìyè nà nián, yào kǎo shénme dàxué, yào xué shénme zhuānyè, wǒ zìjǐ yě bù qīngchu.",
        vi: "Năm tốt nghiệp cấp hai, thi vào trường đại học nào, học ngành gì, bản thân tôi cũng không rõ.",
      },
      {
        zh: "一次我和朋友看了一个电影，这个电影是介绍中国文化的，很有意思。",
        py: "Yí cì wǒ hé péngyou kàn le yí ge diànyǐng, zhège diànyǐng shì jièshào Zhōngguó wénhuà de, hěn yǒu yìsi.",
        vi: "Một lần tôi và bạn xem một bộ phim, bộ phim này giới thiệu văn hóa Trung Quốc, rất thú vị.",
      },
      {
        zh: "我当时就想，学习中文，将来当翻译怎么样？妈妈知道了我的想法，十分赞成。",
        py: "Wǒ dāngshí jiù xiǎng, xuéxí Zhōngwén, jiānglái dāng fānyì zěnmeyàng? Māma zhīdào le wǒ de xiǎngfǎ, shífēn zànchéng.",
        vi: "Lúc đó tôi liền nghĩ, học tiếng Trung, sau này làm phiên dịch thì sao? Mẹ biết được ý nghĩ của tôi, vô cùng tán thành.",
      },
      {
        zh: "就这样，我考上了大学中文系。",
        py: "Jiù zhèyàng, wǒ kǎo shàng le dàxué Zhōngwén xì.",
        vi: "Cứ như vậy, tôi đã đỗ vào khoa Trung văn của trường đại học.",
      },
    ],
  },
  {
    s: [
      {
        zh: "大学三年级暑假，我第一次来到中国，在北京语言大学学习了四个星期。",
        py: "Dàxué sān niánjí shǔjià, wǒ dì-yī cì lái dào Zhōngguó, zài Běijīng Yǔyán Dàxué xuéxí le sì ge xīngqī.",
        vi: "Kỳ nghỉ hè năm thứ ba đại học, lần đầu tiên tôi đến Trung Quốc, học bốn tuần tại Đại học Ngôn ngữ Bắc Kinh.",
      },
      {
        zh: "学完以后，又到中国一些著名的风景区旅游了一个月。",
        py: "Xué wán yǐhòu, yòu dào Zhōngguó yìxiē zhùmíng de fēngjǐngqū lǚyóu le yí ge yuè.",
        vi: "Học xong, lại đi du lịch một tháng ở một số khu phong cảnh nổi tiếng của Trung Quốc.",
      },
      {
        zh: "这时才知道，自己对中国的了解太少了。",
        py: "Zhè shí cái zhīdào, zìjǐ duì Zhōngguó de liǎojiě tài shǎo le.",
        vi: "Lúc này mới biết, sự hiểu biết của mình về Trung Quốc quá ít.",
      },
    ],
  },
  {
    s: [
      {
        zh: "因为汉语说得不好，旅途中遇到了很多困难。",
        py: "Yīnwèi Hànyǔ shuō de bù hǎo, lǚtú zhōng yùdào le hěn duō kùnnan.",
        vi: "Vì tiếng Trung nói không tốt, trong chuyến đi đã gặp rất nhiều khó khăn.",
      },
      {
        zh: "但是，每次遇到困难时，都会得到好心人的帮助。",
        py: "Dànshì, měi cì yùdào kùnnan shí, dōu huì dédào hǎoxīnrén de bāngzhù.",
        vi: "Nhưng, mỗi lần gặp khó khăn, đều nhận được sự giúp đỡ của người tốt bụng.",
      },
    ],
  },
  {
    s: [
      {
        zh: "一次，我坐火车去南京。我对南京一点儿也不了解，火车到南京的时间又是晚上，怎么去找宾馆，怎么买去上海的火车票，我都不知道。",
        py: "Yí cì, wǒ zuò huǒchē qù Nánjīng. Wǒ duì Nánjīng yìdiǎnr yě bù liǎojiě, huǒchē dào Nánjīng de shíjiān yòu shì wǎnshang, zěnme qù zhǎo bīnguǎn, zěnme mǎi qù Shànghǎi de huǒchēpiào, wǒ dōu bù zhīdào.",
        vi: "Một lần, tôi đi tàu đến Nam Kinh. Tôi hoàn toàn không hiểu gì về Nam Kinh, giờ tàu đến Nam Kinh lại là buổi tối, làm sao tìm khách sạn, làm sao mua vé tàu đi Thượng Hải, tôi đều không biết.",
      },
      {
        zh: "我看着地图，心里真有点儿着急。",
        py: "Wǒ kàn zhe dìtú, xīnlǐ zhēn yǒudiǎnr zháojí.",
        vi: "Tôi nhìn bản đồ, trong lòng thật có chút sốt ruột.",
      },
    ],
  },
  {
    s: [
      {
        zh: "坐在我对面的一个姑娘，好像看出了我的心事，就用英语问我是不是留学生，需要不需要她帮助。",
        py: "Zuò zài wǒ duìmiàn de yí ge gūniang, hǎoxiàng kàn chū le wǒ de xīnshì, jiù yòng Yīngyǔ wèn wǒ shì bu shì liúxuéshēng, xūyào bu xūyào tā bāngzhù.",
        vi: "Một cô gái ngồi đối diện tôi, hình như nhìn ra tâm sự của tôi, liền dùng tiếng Anh hỏi tôi có phải lưu học sinh không, có cần cô ấy giúp không.",
      },
      {
        zh: "她的英语说得很好。我就对她说了自己遇到的困难。",
        py: "Tā de Yīngyǔ shuō de hěn hǎo. Wǒ jiù duì tā shuō le zìjǐ yùdào de kùnnan.",
        vi: "Tiếng Anh của cô ấy nói rất tốt. Tôi liền nói với cô ấy những khó khăn mình gặp phải.",
      },
      {
        zh: "她说：“别担心，我也是在南京下车，下车以后，你就跟我走吧。”",
        py: "Tā shuō: “Bié dānxīn, wǒ yě shì zài Nánjīng xià chē, xià chē yǐhòu, nǐ jiù gēn wǒ zǒu ba.”",
        vi: "Cô ấy nói: “Đừng lo, tôi cũng xuống tàu ở Nam Kinh, xuống tàu xong, bạn cứ đi theo tôi.”",
      },
    ],
  },
  {
    s: [
      {
        zh: "就这样，我们开始了交谈。她是南京一所大学的学生。",
        py: "Jiù zhèyàng, wǒmen kāishǐ le jiāotán. Tā shì Nánjīng yì suǒ dàxué de xuésheng.",
        vi: "Cứ như vậy, chúng tôi bắt đầu trò chuyện. Cô ấy là sinh viên của một trường đại học ở Nam Kinh.",
      },
      {
        zh: "她说：“要是你愿意，我可以带你到南京的一些风景区去看看。”",
        py: "Tā shuō: “Yàoshi nǐ yuànyì, wǒ kěyǐ dài nǐ dào Nánjīng de yìxiē fēngjǐngqū qù kànkan.”",
        vi: "Cô ấy nói: “Nếu bạn muốn, tôi có thể dẫn bạn đến một số khu phong cảnh ở Nam Kinh xem thử.”",
      },
      {
        zh: "我说：“这样当然好，不过，会不会太麻烦你了？”",
        py: "Wǒ shuō: “Zhèyàng dāngrán hǎo, búguò, huì bu huì tài máfan nǐ le?”",
        vi: "Tôi nói: “Như vậy đương nhiên tốt, nhưng, có quá làm phiền bạn không?”",
      },
      {
        zh: "她说：“现在正好是假期，我有空儿。我们可以互相学习，我帮你练练汉语，你也帮我练练英语。”",
        py: "Tā shuō: “Xiànzài zhènghǎo shì jiàqī, wǒ yǒu kòngr. Wǒmen kěyǐ hùxiāng xuéxí, wǒ bāng nǐ liànlian Hànyǔ, nǐ yě bāng wǒ liànlian Yīngyǔ.”",
        vi: "Cô ấy nói: “Bây giờ đúng là kỳ nghỉ, tôi có thời gian. Chúng ta có thể học hỏi lẫn nhau, tôi giúp bạn luyện tiếng Trung, bạn cũng giúp tôi luyện tiếng Anh.”",
      },
    ],
  },
  {
    s: [
      {
        zh: "就这样，我交了第一个中国朋友。",
        py: "Jiù zhèyàng, wǒ jiāo le dì-yī ge Zhōngguó péngyou.",
        vi: "Cứ như vậy, tôi đã kết bạn với người bạn Trung Quốc đầu tiên.",
      },
    ],
  },
  {
    s: [
      {
        zh: "在南京玩儿了三天。这三天里，她简直成了我的导游，带我去了南京很多有名的地方，又帮我买了去上海的火车票。",
        py: "Zài Nánjīng wánr le sān tiān. Zhè sān tiān lǐ, tā jiǎnzhí chéng le wǒ de dǎoyóu, dài wǒ qù le Nánjīng hěn duō yǒumíng de dìfang, yòu bāng wǒ mǎi le qù Shànghǎi de huǒchēpiào.",
        vi: "Ở Nam Kinh chơi ba ngày. Trong ba ngày này, cô ấy gần như trở thành hướng dẫn viên của tôi, dẫn tôi đến nhiều nơi nổi tiếng ở Nam Kinh, lại giúp tôi mua vé tàu đi Thượng Hải.",
      },
      {
        zh: "分别的时候，她说，欢迎你再来。我说，肯定会再来的。",
        py: "Fēnbié de shíhou, tā shuō, huānyíng nǐ zài lái. Wǒ shuō, kěndìng huì zài lái de.",
        vi: "Lúc chia tay, cô ấy nói, hoan nghênh bạn lại đến. Tôi nói, chắc chắn sẽ lại đến.",
      },
      {
        zh: "我一定要把汉语学好，实现自己当翻译的理想。",
        py: "Wǒ yídìng yào bǎ Hànyǔ xué hǎo, shíxiàn zìjǐ dāng fānyì de lǐxiǎng.",
        vi: "Tôi nhất định phải học tốt tiếng Trung, thực hiện lý tưởng làm phiên dịch của mình.",
      },
    ],
  },

  // ===== (二) 要见彩虹 =====
  {
    s: [
      {
        zh: "最近，我学会了一首中文歌，很好听，也很有意义。",
        py: "Zuìjìn, wǒ xuéhuì le yì shǒu Zhōngwén gē, hěn hǎotīng, yě hěn yǒu yìyì.",
        vi: "Gần đây, tôi đã học được một bài hát tiếng Trung, rất hay, cũng rất có ý nghĩa.",
      },
      {
        zh: "里边有一句歌词，让我想了很多很多。",
        py: "Lǐbian yǒu yí jù gēcí, ràng wǒ xiǎng le hěn duō hěn duō.",
        vi: "Trong đó có một câu lời bài hát, khiến tôi nghĩ rất nhiều rất nhiều.",
      },
      {
        zh: "这句歌词是：不经历风雨，怎么见彩虹？没有人能随随便便成功。",
        py: "Zhè jù gēcí shì: Bù jīnglì fēngyǔ, zěnme jiàn cǎihóng? Méiyǒu rén néng suísuíbiànbiàn chénggōng.",
        vi: "Câu lời bài hát đó là: Không trải qua mưa gió, sao thấy được cầu vồng? Không ai có thể thành công một cách dễ dàng.",
      },
    ],
  },
  {
    s: [
      {
        zh: "我来中国已经半年了，半年的留学生活让我尝到了以前从没有尝过的酸甜苦辣。",
        py: "Wǒ lái Zhōngguó yǐjīng bàn nián le, bàn nián de liúxué shēnghuó ràng wǒ cháng dào le yǐqián cóng méiyǒu cháng guo de suāntiánkǔlà.",
        vi: "Tôi đến Trung Quốc đã nửa năm rồi, nửa năm cuộc sống lưu học đã khiến tôi nếm trải đủ vị chua ngọt đắng cay mà trước đây chưa từng nếm.",
      },
      {
        zh: "有一段时间我常常一个人偷偷儿地哭，有时哭着哭着就睡着了。",
        py: "Yǒu yí duàn shíjiān wǒ chángcháng yí ge rén tōutōur de kū, yǒushí kū zhe kū zhe jiù shuìzháo le.",
        vi: "Có một thời gian tôi thường một mình lén lút khóc, có lúc khóc khóc rồi ngủ thiếp đi.",
      },
      {
        zh: "在梦中，我梦见了家乡，梦见了家乡的亲人。",
        py: "Zài mèng zhōng, wǒ mèng jiàn le jiāxiāng, mèng jiàn le jiāxiāng de qīnrén.",
        vi: "Trong mơ, tôi mơ thấy quê hương, mơ thấy người thân ở quê hương.",
      },
      {
        zh: "在梦中我对父母说：“你们的傻女儿输了，失败了，对学习、对自己都失去了信心。”",
        py: "Zài mèng zhōng wǒ duì fùmǔ shuō: “Nǐmen de shǎ nǚ'ér shū le, shībài le, duì xuéxí, duì zìjǐ dōu shīqù le xìnxīn.”",
        vi: "Trong mơ tôi nói với bố mẹ: “Con gái ngốc của bố mẹ thua rồi, thất bại rồi, đối với việc học, đối với bản thân đều mất đi niềm tin.”",
      },
    ],
  },
  {
    s: [
      {
        zh: "父母打电话叫我回国，但是，我想我不能回国。",
        py: "Fùmǔ dǎ diànhuà jiào wǒ huí guó, dànshì, wǒ xiǎng wǒ bù néng huí guó.",
        vi: "Bố mẹ gọi điện bảo tôi về nước, nhưng, tôi nghĩ tôi không thể về nước.",
      },
      {
        zh: "来中国留学，学习汉语，这是我自己选择的道路。",
        py: "Lái Zhōngguó liúxué, xuéxí Hànyǔ, zhè shì wǒ zìjǐ xuǎnzé de dàolù.",
        vi: "Đến Trung Quốc du học, học tiếng Trung, đây là con đường do chính tôi lựa chọn.",
      },
      {
        zh: "人生的道路上肯定会遇到各种各样的困难，要是一遇到困难就退缩，怎么可能取得成功呢？",
        py: "Rénshēng de dàolù shang kěndìng huì yùdào gèzhǒng-gèyàng de kùnnan, yàoshi yí yùdào kùnnan jiù tuìsuō, zěnme kěnéng qǔdé chénggōng ne?",
        vi: "Trên con đường đời chắc chắn sẽ gặp đủ loại khó khăn, nếu hễ gặp khó khăn là thoái lui, sao có thể giành được thành công?",
      },
      {
        zh: "我决定坚持下去。老师也常鼓励我说：坚持就是胜利。",
        py: "Wǒ juédìng jiānchí xiàqù. Lǎoshī yě cháng gǔlì wǒ shuō: jiānchí jiù shì shènglì.",
        vi: "Tôi quyết định kiên trì đến cùng. Thầy cô cũng thường động viên tôi rằng: kiên trì chính là thắng lợi.",
      },
    ],
  },
  {
    s: [
      {
        zh: "我的梦想是当一个汉语老师，不学好汉语怎么能当汉语老师呢？",
        py: "Wǒ de mèngxiǎng shì dāng yí ge Hànyǔ lǎoshī, bù xué hǎo Hànyǔ zěnme néng dāng Hànyǔ lǎoshī ne?",
        vi: "Ước mơ của tôi là trở thành giáo viên tiếng Trung, không học tốt tiếng Trung sao có thể làm giáo viên tiếng Trung?",
      },
      {
        zh: "想到这儿，就觉得自己很可笑，都十八岁了，已经不是小孩子了，为什么一遇到困难就哭呢？",
        py: "Xiǎng dào zhèr, jiù juéde zìjǐ hěn kěxiào, dōu shí-bā suì le, yǐjīng bú shì xiǎoháizi le, wèishénme yí yùdào kùnnan jiù kū ne?",
        vi: "Nghĩ đến đây, liền thấy mình rất buồn cười, đã mười tám tuổi rồi, đã không còn là trẻ con nữa, tại sao hễ gặp khó khăn là khóc?",
      },
      {
        zh: "为什么不能坚强一些呢？",
        py: "Wèishénme bù néng jiānqiáng yìxiē ne?",
        vi: "Tại sao không thể mạnh mẽ hơn một chút?",
      },
    ],
  },
  {
    s: [
      {
        zh: "我心中又唱起了这首歌：不经历风雨，怎么见彩虹？没有人能随随便便成功。",
        py: "Wǒ xīnzhōng yòu chàng qǐ le zhè shǒu gē: Bù jīnglì fēngyǔ, zěnme jiàn cǎihóng? Méiyǒu rén néng suísuíbiànbiàn chénggōng.",
        vi: "Trong lòng tôi lại vang lên bài hát này: Không trải qua mưa gió, sao thấy được cầu vồng? Không ai có thể thành công một cách dễ dàng.",
      },
      {
        zh: "是啊，要成功，就必须付出艰苦的努力。",
        py: "Shì a, yào chénggōng, jiù bìxū fùchū jiānkǔ de nǔlì.",
        vi: "Đúng vậy, muốn thành công, thì phải bỏ ra nỗ lực gian khổ.",
      },
    ],
  },
];

export const bai4Questions: Sentence[] = [
  {
    zh: "“我”为什么要学习中文？你呢？",
    py: "“Wǒ” wèishénme yào xuéxí Zhōngwén? Nǐ ne?",
    vi: "Vì sao “tôi” lại học tiếng Trung? Còn bạn thì sao?",
  },
  {
    zh: "“我”第一次来中国是什么时候？来做什么？",
    py: "“Wǒ” dì-yī cì lái Zhōngguó shì shénme shíhou? Lái zuò shénme?",
    vi: "Lần đầu tiên “tôi” đến Trung Quốc là khi nào? Đến làm gì?",
  },
  {
    zh: "“我”在旅途中遇到了什么困难？是谁帮助了“我”？",
    py: "“Wǒ” zài lǚtú zhōng yùdào le shénme kùnnan? Shì shéi bāngzhù le “wǒ”?",
    vi: "Trong chuyến đi “tôi” đã gặp khó khăn gì? Ai đã giúp “tôi”?",
  },
  {
    zh: "“我”为什么还要来中国？“我”的理想是什么？你呢？",
    py: "“Wǒ” wèishénme hái yào lái Zhōngguó? “Wǒ” de lǐxiǎng shì shénme? Nǐ ne?",
    vi: "Vì sao “tôi” vẫn muốn đến Trung Quốc? Lý tưởng của “tôi” là gì? Còn bạn thì sao?",
  },
  {
    zh: "“我”学会了一首什么歌？你听过这首歌吗？",
    py: "“Wǒ” xuéhuì le yì shǒu shénme gē? Nǐ tīng guo zhè shǒu gē ma?",
    vi: "“Tôi” đã học được một bài hát gì? Bạn đã từng nghe bài hát này chưa?",
  },
  {
    zh: "“我”来中国多长时间了？“我”为什么常常一个人偷偷儿地哭？你来中国以后哭过吗？为什么？",
    py: "“Wǒ” lái Zhōngguó duō cháng shíjiān le? “Wǒ” wèishénme chángcháng yí ge rén tōutōur de kū? Nǐ lái Zhōngguó yǐhòu kū guo ma? Wèishénme?",
    vi: "“Tôi” đến Trung Quốc được bao lâu rồi? Vì sao “tôi” thường một mình lén lút khóc? Bạn đến Trung Quốc sau đó đã từng khóc chưa? Vì sao?",
  },
  {
    zh: "“我”为什么要坚持下去？为什么觉得自己很可笑？",
    py: "“Wǒ” wèishénme yào jiānchí xiàqù? Wèishénme juéde zìjǐ hěn kěxiào?",
    vi: "Vì sao “tôi” phải kiên trì đến cùng? Vì sao “tôi” thấy mình rất buồn cười?",
  },
];
