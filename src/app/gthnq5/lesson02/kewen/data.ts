export type Sentence = { zh: string; py: string; vi: string };
export type Para = { kind?: "greet" | "sign"; s: Sentence[] };

export const paragraphs: Para[] = [
  {
    kind: "greet",
    s: [{ zh: "爸爸妈妈：", py: "Bàba māma:", vi: "Gửi bố mẹ:" }],
  },
  {
    s: [
      { zh: "你们好！", py: "Nǐmen hǎo!", vi: "Chào bố mẹ!" },
      {
        zh: "爸爸还那么忙吗？",
        py: "Bàba hái nàme máng ma?",
        vi: "Bố vẫn bận như vậy sao?",
      },
      {
        zh: "一定要注意身体啊！",
        py: "Yídìng yào zhùyì shēntǐ a!",
        vi: "Nhất định phải chú ý sức khoẻ nhé!",
      },
    ],
  },
  {
    s: [
      {
        zh: "你们寄来的生日礼物上星期就收到了。",
        py: "Nǐmen jìlái de shēngrì lǐwù shàng xīngqī jiù shōudào le.",
        vi: "Quà sinh nhật bố mẹ gửi đến, tuần trước con đã nhận được rồi.",
      },
      {
        zh: "我现在一切都很好，吃得好，睡得好，学习也不错。",
        py: "Wǒ xiànzài yīqiè dōu hěn hǎo, chī de hǎo, shuì de hǎo, xuéxí yě búcuò.",
        vi: "Bây giờ mọi thứ của con đều rất tốt, ăn ngon, ngủ ngon, việc học cũng không tệ.",
      },
      {
        zh: "你们就放心吧。",
        py: "Nǐmen jiù fàngxīn ba.",
        vi: "Bố mẹ cứ yên tâm nhé.",
      },
    ],
  },
  {
    s: [
      {
        zh: "刚来时是有很多地方不习惯，但是现在基本上已经习惯了这里的生活。",
        py: "Gāng lái shí shì yǒu hěn duō dìfang bù xíguàn, dànshì xiànzài jīběnshang yǐjīng xíguàn le zhèli de shēnghuó.",
        vi: "Lúc mới đến quả thật có nhiều chỗ chưa quen, nhưng bây giờ về cơ bản con đã quen với cuộc sống ở đây.",
      },
      {
        zh: "学习上也没有什么问题。",
        py: "Xuéxí shang yě méiyǒu shénme wèntí.",
        vi: "Việc học cũng không có vấn đề gì.",
      },
      {
        zh: "中国人常说：“在家靠父母，出门靠朋友。”",
        py: "Zhōngguórén cháng shuō: “Zài jiā kào fùmǔ, chūmén kào péngyou.”",
        vi: "Người Trung Quốc thường nói: “Ở nhà dựa vào bố mẹ, ra ngoài dựa vào bạn bè.”",
      },
      {
        zh: "我现在交了好多朋友。",
        py: "Wǒ xiànzài jiāo le hǎo duō péngyou.",
        vi: "Bây giờ con đã kết giao được rất nhiều bạn.",
      },
    ],
  },
  {
    s: [
      {
        zh: "今天给你们发过去的几张照片，第一张就是我们全班同学一起给我过生日的情景。",
        py: "Jīntiān gěi nǐmen fā guòqù de jǐ zhāng zhàopiàn, dì-yī zhāng jiù shì wǒmen quán bān tóngxué yìqǐ gěi wǒ guò shēngrì de qíngjǐng.",
        vi: "Mấy tấm ảnh hôm nay gửi cho bố mẹ, tấm đầu tiên là cảnh cả lớp cùng tổ chức sinh nhật cho con.",
      },
      {
        zh: "我们班的同学分别来自亚洲、非洲、欧洲、美洲、大洋洲等五大洲十一个国家。",
        py: "Wǒmen bān de tóngxué fēnbié láizì Yàzhōu, Fēizhōu, Ōuzhōu, Měizhōu, Dàyángzhōu děng wǔ dà zhōu shíyī ge guójiā.",
        vi: "Bạn học trong lớp con lần lượt đến từ mười một quốc gia thuộc năm châu lục: châu Á, châu Phi, châu Âu, châu Mỹ, châu Đại Dương.",
      },
      {
        zh: "能跟这么多同学一起学习，认识这么多世界各国来的朋友，我感到非常高兴。",
        py: "Néng gēn zhème duō tóngxué yìqǐ xuéxí, rènshi zhème duō shìjiè gèguó lái de péngyou, wǒ gǎndào fēicháng gāoxìng.",
        vi: "Được học cùng nhiều bạn như vậy, quen biết nhiều bạn bè từ các nước trên thế giới, con cảm thấy rất vui.",
      },
      {
        zh: "大家一起学习，一起聊天儿，一起参加各种课外活动。",
        py: "Dàjiā yìqǐ xuéxí, yìqǐ liáotiānr, yìqǐ cānjiā gèzhǒng kèwài huódòng.",
        vi: "Mọi người cùng học, cùng trò chuyện, cùng tham gia đủ loại hoạt động ngoại khoá.",
      },
      {
        zh: "同学们互相关心，互相帮助，非常团结。",
        py: "Tóngxuémen hùxiāng guānxīn, hùxiāng bāngzhù, fēicháng tuánjié.",
        vi: "Các bạn quan tâm lẫn nhau, giúp đỡ lẫn nhau, rất đoàn kết.",
      },
      {
        zh: "所以我每天都过得很愉快。",
        py: "Suǒyǐ wǒ měi tiān dōu guò de hěn yúkuài.",
        vi: "Vì vậy ngày nào con cũng sống rất vui vẻ.",
      },
      {
        zh: "站在我旁边那个高个子、黄头发、蓝眼睛的小伙子，就是我的好朋友，长得很帅吧？",
        py: "Zhàn zài wǒ pángbiān nàge gāogèzi, huáng tóufa, lán yǎnjing de xiǎohuǒzi, jiù shì wǒ de hǎo péngyou, zhǎng de hěn shuài ba?",
        vi: "Chàng trai cao, tóc vàng, mắt xanh đứng cạnh con chính là bạn thân của con, đẹp trai chứ ạ?",
      },
      {
        zh: "我们俩常常一起玩儿，还一起学打太极拳。",
        py: "Wǒmen liǎ chángcháng yìqǐ wánr, hái yìqǐ xué dǎ tàijíquán.",
        vi: "Hai đứa con thường chơi cùng nhau, còn cùng học đánh Thái cực quyền.",
      },
    ],
  },
  {
    s: [
      {
        zh: "第二张就是我学打太极拳时拍下来的。",
        py: "Dì-èr zhāng jiù shì wǒ xué dǎ tàijíquán shí pāi xiàlái de.",
        vi: "Tấm thứ hai là ảnh chụp lúc con học đánh Thái cực quyền.",
      },
      {
        zh: "现在我每星期有两个下午去体育馆学打太极拳。",
        py: "Xiànzài wǒ měi xīngqī yǒu liǎng ge xiàwǔ qù tǐyùguǎn xué dǎ tàijíquán.",
        vi: "Bây giờ mỗi tuần có hai buổi chiều con đến nhà thi đấu học đánh Thái cực quyền.",
      },
      {
        zh: "太极拳是一种很有意思的运动，动作柔和缓慢，优美舒展，又有增强体质、预防疾病的作用，所以，是一项很受欢迎的体育运动。",
        py: "Tàijíquán shì yì zhǒng hěn yǒu yìsi de yùndòng, dòngzuò róuhé huǎnmàn, yōuměi shūzhǎn, yòu yǒu zēngqiáng tǐzhì, yùfáng jíbìng de zuòyòng, suǒyǐ, shì yí xiàng hěn shòu huānyíng de tǐyù yùndòng.",
        vi: "Thái cực quyền là một môn vận động rất thú vị, động tác mềm mại chậm rãi, đẹp mắt thư thái, lại có tác dụng tăng cường thể chất, phòng ngừa bệnh tật, vì vậy là một môn thể thao rất được yêu thích.",
      },
      {
        zh: "我每次练完以后，都觉得全身特别舒服。",
        py: "Wǒ měi cì liàn wán yǐhòu, dōu juéde quánshēn tèbié shūfu.",
        vi: "Mỗi lần tập xong, con đều thấy toàn thân đặc biệt dễ chịu.",
      },
      {
        zh: "回国后我想教爸爸妈妈学打太极拳。",
        py: "Huíguó hòu wǒ xiǎng jiāo bàba māma xué dǎ tàijíquán.",
        vi: "Về nước rồi con muốn dạy bố mẹ đánh Thái cực quyền.",
      },
    ],
  },
  {
    s: [
      {
        zh: "第三张是我在用毛笔画画儿，写汉字。",
        py: "Dì-sān zhāng shì wǒ zài yòng máobǐ huà huàr, xiě Hànzì.",
        vi: "Tấm thứ ba là ảnh con đang dùng bút lông vẽ tranh, viết chữ Hán.",
      },
      {
        zh: "除了学习汉语以外，我还参加了一个书画学习班，学用毛笔写字、画中国画儿。",
        py: "Chúle xuéxí Hànyǔ yǐwài, wǒ hái cānjiā le yí ge shūhuà xuéxíbān, xué yòng máobǐ xiězì, huà Zhōngguó huàr.",
        vi: "Ngoài học tiếng Trung ra, con còn tham gia một lớp thư hoạ, học dùng bút lông viết chữ, vẽ tranh Trung Quốc.",
      },
      {
        zh: "我觉得十分有趣。",
        py: "Wǒ juéde shífēn yǒuqù.",
        vi: "Con thấy vô cùng thú vị.",
      },
      {
        zh: "上星期我画了一幅竹子，写了一首唐诗，老师说我画得很好，还把它拿去，挂在学校的展览橱窗里展出了，我看了以后觉得又高兴又不好意思。",
        py: "Shàng xīngqī wǒ huà le yì fú zhúzi, xiě le yì shǒu Tángshī, lǎoshī shuō wǒ huà de hěn hǎo, hái bǎ tā ná qù, guà zài xuéxiào de zhǎnlǎn chúchuāng li zhǎnchū le, wǒ kàn le yǐhòu juéde yòu gāoxìng yòu bù hǎoyìsi.",
        vi: "Tuần trước con vẽ một bức tranh tre, viết một bài thơ Đường, thầy giáo nói con vẽ rất đẹp, còn mang đi treo trong tủ kính triển lãm của trường để trưng bày, con xem xong vừa vui vừa ngại.",
      },
      {
        zh: "朋友们看到以后，都向我表示祝贺。",
        py: "Péngyoumen kàndào yǐhòu, dōu xiàng wǒ biǎoshì zhùhè.",
        vi: "Bạn bè nhìn thấy rồi, đều chúc mừng con.",
      },
    ],
  },
  {
    s: [
      {
        zh: "对了，我还学会了用筷子吃饭。",
        py: "Duì le, wǒ hái xuéhuì le yòng kuàizi chīfàn.",
        vi: "À đúng rồi, con còn học được cách dùng đũa ăn cơm.",
      },
      {
        zh: "最后一张就是我在用筷子吃饭。",
        py: "Zuìhòu yì zhāng jiù shì wǒ zài yòng kuàizi chīfàn.",
        vi: "Tấm cuối cùng là ảnh con đang dùng đũa ăn cơm.",
      },
      {
        zh: "前天我们去吃北京烤鸭时，我让朋友把我用筷子吃饭的样子拍了下来，你们看看，怎么样？",
        py: "Qiántiān wǒmen qù chī Běijīng kǎoyā shí, wǒ ràng péngyou bǎ wǒ yòng kuàizi chīfàn de yàngzi pāi le xiàlái, nǐmen kànkan, zěnmeyàng?",
        vi: "Hôm kia chúng con đi ăn vịt quay Bắc Kinh, con nhờ bạn chụp lại dáng con dùng đũa ăn cơm, bố mẹ xem thử, thế nào ạ?",
      },
      {
        zh: "好玩儿吧？",
        py: "Hǎowánr ba?",
        vi: "Vui chứ ạ?",
      },
    ],
  },
  {
    s: [
      {
        zh: "爸爸妈妈担心北京的冬天太冷，怕我不适应，可是我一点儿也不觉得冷。",
        py: "Bàba māma dānxīn Běijīng de dōngtiān tài lěng, pà wǒ bú shìyìng, kěshì wǒ yìdiǎnr yě bù juéde lěng.",
        vi: "Bố mẹ lo mùa đông Bắc Kinh quá lạnh, sợ con không thích nghi, nhưng con chẳng thấy lạnh chút nào.",
      },
      {
        zh: "也许北京也变暖和了吧。",
        py: "Yěxǔ Běijīng yě biàn nuǎnhuo le ba.",
        vi: "Có lẽ Bắc Kinh cũng ấm lên rồi.",
      },
      {
        zh: "在家的时候，一到冬天我都会感冒一两次。",
        py: "Zài jiā de shíhou, yí dào dōngtiān wǒ dōu huì gǎnmào yì liǎng cì.",
        vi: "Hồi ở nhà, cứ đến mùa đông là con lại bị cảm một hai lần.",
      },
      {
        zh: "现在来中国快半年了，因为每天坚持锻炼，一次病也没得过。",
        py: "Xiànzài lái Zhōngguó kuài bàn nián le, yīnwèi měi tiān jiānchí duànliàn, yí cì bìng yě méi dé guo.",
        vi: "Bây giờ đến Trung Quốc sắp nửa năm rồi, nhờ ngày nào cũng kiên trì tập luyện, con chưa bị bệnh lần nào.",
      },
    ],
  },
  {
    s: [
      {
        zh: "就写到这儿吧。",
        py: "Jiù xiě dào zhèr ba.",
        vi: "Con viết đến đây thôi nhé.",
      },
      {
        zh: "我要跟朋友一起出去了。",
        py: "Wǒ yào gēn péngyou yìqǐ chūqù le.",
        vi: "Con sắp ra ngoài cùng bạn bè rồi.",
      },
    ],
  },
  {
    s: [
      {
        zh: "祝爸爸妈妈身体健康！",
        py: "Zhù bàba māma shēntǐ jiànkāng!",
        vi: "Chúc bố mẹ sức khoẻ!",
      },
    ],
  },
  {
    kind: "sign",
    s: [
      { zh: "玛丽", py: "Mǎlì", vi: "Mary (Mã Lệ)" },
      {
        zh: "一月二十八日",
        py: "Yī yuè èrshíbā rì",
        vi: "Ngày 28 tháng 1",
      },
    ],
  },
];

export const questions: Sentence[] = [
  {
    zh: "玛丽现在在哪儿？",
    py: "Mǎlì xiànzài zài nǎr?",
    vi: "Mary bây giờ đang ở đâu?",
  },
  {
    zh: "她现在生活得怎么样？",
    py: "Tā xiànzài shēnghuó de zěnmeyàng?",
    vi: "Bây giờ cô ấy sống thế nào?",
  },
  {
    zh: "她参加了一个什么班？",
    py: "Tā cānjiā le yí ge shénme bān?",
    vi: "Cô ấy tham gia lớp gì?",
  },
  {
    zh: "她以前会用筷子吗？现在呢？",
    py: "Tā yǐqián huì yòng kuàizi ma? Xiànzài ne?",
    vi: "Trước đây cô ấy có biết dùng đũa không? Bây giờ thì sao?",
  },
  {
    zh: "她来中国多长时间了？",
    py: "Tā lái Zhōngguó duō cháng shíjiān le?",
    vi: "Cô ấy đến Trung Quốc được bao lâu rồi?",
  },
  {
    zh: "介绍一下儿这几张照片。",
    py: "Jièshào yíxiàr zhè jǐ zhāng zhàopiàn.",
    vi: "Hãy giới thiệu mấy tấm ảnh này.",
  },
];

