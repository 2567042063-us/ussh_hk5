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
const YAMAMOTO = { zh: "山本", vi: "Yamamoto" };

const s = ([zh, py, vi]: Raw): Sentence => ({ zh, py, vi });
const turn = (speaker: Turn["speaker"], lines: Raw[]): Turn => ({
  speaker,
  sentences: lines.map(s),
});

export const dialogue1: Dialogue = {
  title: s([
    "（一）前边开过来一辆空车",
    "(Yī) Qiánbian kāi guòlai yí liàng kōngchē",
    "(1) Phía trước có một chiếc xe trống chạy tới",
  ]),
  intro: s([
    "（秋天的一天，田芳请张东、玛丽和麦克到家里做客……）",
    "(Qiūtiān de yì tiān, Tián Fāng qǐng Zhāng Dōng, Mǎlì hé Màikè dào jiā li zuòkè……)",
    "(Một ngày mùa thu, Điền Phương mời Trương Đông, Mary và Mike đến nhà chơi...)",
  ]),
  turns: [
    turn(TIANFANG, [
      [
        "等车的人越来越多了，咱们还是打的去吧，别坐公共汽车了。",
        "Děng chē de rén yuè lái yuè duō le, zánmen háishi dǎdī qù ba, bié zuò gōnggòng qìchē le.",
        "Người đợi xe ngày càng đông, chúng ta vẫn nên đi taxi thôi, đừng đi xe buýt nữa.",
      ],
    ]),
    turn(MARY, [
      [
        "好吧，你看，那边正好开过来一辆空车，就坐这辆吧。",
        "Hǎo ba, nǐ kàn, nàbian zhènghǎo kāi guòlai yí liàng kōngchē, jiù zuò zhè liàng ba.",
        "Được thôi, bạn nhìn kìa, bên đó vừa hay có một chiếc xe trống chạy tới, đi chiếc này nhé.",
      ],
    ]),
    // （在出租车上）Zài chūzūchē shang — Trên xe taxi
    turn(MARY, [
      [
        "你家住的是四合院儿吗？",
        "Nǐ jiā zhù de shì sìhéyuànr ma?",
        "Nhà bạn ở là tứ hợp viện phải không?",
      ],
    ]),
    turn(TIANFANG, [
      [
        "是啊。我家院子里种着一棵大枣树，树上结着很多红枣，远远儿地就能看见。",
        "Shì a. Wǒ jiā yuànzi li zhòngzhe yì kē dàzǎoshù, shù shang jiēzhe hěn duō hóngzǎo, yuǎnyuānr de jiù néng kànjiàn.",
        "Đúng vậy. Trong sân nhà mình trồng một cây táo tàu, trên cây kết rất nhiều táo đỏ, từ xa đã có thể nhìn thấy.",
      ],
      [
        "一看见那棵大枣树就看到我家了。今天请你们尝尝我家的红枣，可甜了。",
        "Yí kànjiàn nà kē dàzǎoshù jiù kàndào wǒ jiā le. Jīntiān qǐng nǐmen chángchang wǒ jiā de hóngzǎo, kě tián le.",
        "Vừa nhìn thấy cây táo tàu đó là thấy nhà mình rồi. Hôm nay mời các bạn nếm thử táo đỏ nhà mình, ngọt lắm.",
      ],
    ]),
    turn(MARY, [
      [
        "我听说现在住四合院儿的越来越少了。",
        "Wǒ tīngshuō xiànzài zhù sìhéyuànr de yuè lái yuè shǎo le.",
        "Mình nghe nói bây giờ người ở tứ hợp viện ngày càng ít.",
      ],
    ]),
    turn(TIANFANG, [
      [
        "是。现在城市里大楼越盖越多，住宅小区也越建越漂亮。",
        "Shì. Xiànzài chéngshì li dàlóu yuè gài yuè duō, zhùzhái xiǎoqū yě yuè jiàn yuè piàoliang.",
        "Đúng vậy. Bây giờ trong thành phố nhà cao tầng càng xây càng nhiều, khu dân cư cũng càng xây càng đẹp.",
      ],
      [
        "很多人都搬进楼房里去住了。我们院子里最近也搬走了五六家，明年我们家也要搬走了。",
        "Hěn duō rén dōu bānjìn lóufáng li qù zhù le. Wǒmen yuànzi li zuìjìn yě bānzǒu le wǔ-liù jiā, míngnián wǒmen jiā yě yào bānzǒu le.",
        "Rất nhiều người đều chuyển vào ở chung cư rồi. Trong sân nhà mình gần đây cũng có năm sáu hộ chuyển đi, sang năm nhà mình cũng sắp chuyển đi.",
      ],
    ]),
    turn(MARY, [["那太遗憾了。", "Nà tài yíhàn le.", "Vậy tiếc quá."]]),
    turn(TIANFANG, [
      [
        "我虽然也舍不得离开我们家的小院儿，但还是希望快点儿搬进现代化的楼房里去住。",
        "Wǒ suīrán yě shěbude líkāi wǒmen jiā de xiǎo yuànr, dàn háishi xīwàng kuàidiǎnr bānjìn xiàndàihuà de lóufáng li qù zhù.",
        "Tuy mình cũng không nỡ rời xa cái sân nhỏ của nhà mình, nhưng vẫn mong sớm chuyển vào chung cư hiện đại.",
      ],
    ]),
  ],
};

export const dialogue2: Dialogue = {
  title: s([
    "（二）年轻人打扮得越来越漂亮了",
    "(Èr) Niánqīngrén dǎban de yuè lái yuè piàoliang le",
    "(2) Giới trẻ ăn mặc ngày càng đẹp",
  ]),
  intro: s([
    "（圣诞节和新年快到了……）",
    "(Shèngdànjié hé xīnnián kuài dào le……)",
    "(Giáng sinh và Năm mới sắp đến rồi...)",
  ]),
  turns: [
    turn(WANG, [
      [
        "同学们已经学了两个多月汉语了。今天，想请大家随便谈谈自己的感想和体会，有什么意见和建议也可以提。",
        "Tóngxuémen yǐjīng xué le liǎng ge duō yuè Hànyǔ le. Jīntiān, xiǎng qǐng dàjiā suíbiàn tántan zìjǐ de gǎnxiǎng hé tǐhuì, yǒu shénme yìjiàn hé jiànyì yě kěyǐ tí.",
        "Các em đã học tiếng Hán hơn hai tháng rồi. Hôm nay, cô muốn mời các em tùy ý chia sẻ cảm tưởng và trải nghiệm của mình, có ý kiến hay đề nghị gì cũng có thể nêu ra.",
      ],
    ]),
    turn(MARY, [
      [
        "刚来的时候，我不习惯北京的气候，常常感冒，现在越来越习惯了。",
        "Gāng lái de shíhou, wǒ bù xíguàn Běijīng de qìhòu, chángcháng gǎnmào, xiànzài yuè lái yuè xíguàn le.",
        "Lúc mới đến, em không quen khí hậu Bắc Kinh, hay bị cảm, bây giờ em ngày càng quen rồi.",
      ],
    ]),
    turn(MIKE, [
      [
        "我们的汉语越来越好，觉得越学越有意思了。",
        "Wǒmen de Hànyǔ yuè lái yuè hǎo, juéde yuè xué yuè yǒu yìsi le.",
        "Tiếng Hán của chúng em ngày càng tốt, thấy càng học càng thú vị.",
      ],
    ]),
    turn(MARY, [
      [
        "我的朋友越来越多了。",
        "Wǒ de péngyou yuè lái yuè duō le.",
        "Bạn bè của em ngày càng nhiều.",
      ],
    ]),
    turn(MIKE, [
      [
        "朋友越多越好，“在家靠父母，出门靠朋友”嘛。",
        "Péngyou yuè duō yuè hǎo, “zài jiā kào fùmǔ, chū mén kào péngyou” ma.",
        "Bạn càng nhiều càng tốt, “ở nhà dựa vào cha mẹ, ra ngoài dựa vào bạn bè” mà.",
      ],
    ]),
    turn(YAMAMOTO, [
      [
        "中国菜很好吃，我越吃越喜欢吃，所以也越来越胖了。",
        "Zhōngguó cài hěn hǎochī, wǒ yuè chī yuè xǐhuan chī, suǒyǐ yě yuè lái yuè pàng le.",
        "Món Trung Quốc rất ngon, em càng ăn càng thích ăn, nên cũng ngày càng mập.",
      ],
    ]),
    turn(MIKE, [
      [
        "我觉得人们的生活一天比一天丰富，年轻人越来越会打扮，打扮得越来越漂亮了。",
        "Wǒ juéde rénmen de shēnghuó yì tiān bǐ yì tiān fēngfù, niánqīngrén yuè lái yuè huì dǎban, dǎban de yuè lái yuè piàoliang le.",
        "Em thấy cuộc sống của mọi người ngày một phong phú hơn, giới trẻ ngày càng biết ăn diện, ăn mặc ngày càng đẹp.",
      ],
    ]),
    turn(MARY, [
      [
        "圣诞节和新年快到了，不少商店都摆着圣诞树，装饰得非常漂亮，我看见很多中国人也买圣诞树和圣诞礼物。",
        "Shèngdànjié hé xīnnián kuài dào le, bù shǎo shāngdiàn dōu bǎizhe shèngdànshù, zhuāngshì de fēicháng piàoliang, wǒ kànjiàn hěn duō Zhōngguórén yě mǎi shèngdànshù hé shèngdàn lǐwù.",
        "Giáng sinh và Năm mới sắp đến rồi, không ít cửa hàng bày cây thông Noel, trang trí rất đẹp, em thấy nhiều người Trung Quốc cũng mua cây thông Noel và quà Giáng sinh.",
      ],
    ]),
    turn(MIKE, [
      [
        "老师，我听说中国过圣诞节的人越来越多了，是吗？",
        "Lǎoshī, wǒ tīngshuō Zhōngguó guò Shèngdànjié de rén yuè lái yuè duō le, shì ma?",
        "Thưa cô, em nghe nói ở Trung Quốc người đón Giáng sinh ngày càng nhiều, đúng không ạ?",
      ],
    ]),
    turn(WANG, [
      [
        "一般家庭是不过圣诞节的。有的人过圣诞节，可能是喜欢圣诞节那种欢乐的气氛，孩子们能从爸爸妈妈那儿得到礼物，当然也很高兴。",
        "Yìbān jiātíng shì bú guò Shèngdànjié de. Yǒu de rén guò Shèngdànjié, kěnéng shì xǐhuan Shèngdànjié nà zhǒng huānlè de qìfēn, háizimen néng cóng bàba māma nàr dédào lǐwù, dāngrán yě hěn gāoxìng.",
        "Gia đình bình thường thì không đón Giáng sinh. Có người đón Giáng sinh, có thể là vì thích không khí vui vẻ của lễ này, bọn trẻ nhận được quà từ bố mẹ thì đương nhiên cũng rất vui.",
      ],
      [
        "不过，中国最大的节日还是春节。",
        "Búguò, Zhōngguó zuì dà de jiérì háishi Chūnjié.",
        "Có điều, ngày lễ lớn nhất của Trung Quốc vẫn là Tết Xuân.",
      ],
    ]),
    turn(MIKE, [
      [
        "老师，我建议，咱们开一个新年联欢会，怎么样？",
        "Lǎoshī, wǒ jiànyì, zánmen kāi yí ge xīnnián liánhuānhuì, zěnmeyàng?",
        "Thưa cô, em đề nghị chúng ta tổ chức một buổi liên hoan mừng năm mới, cô thấy thế nào ạ?",
      ],
    ]),
    turn(WANG, [["好啊！", "Hǎo a!", "Được chứ!"]]),
  ],
};
