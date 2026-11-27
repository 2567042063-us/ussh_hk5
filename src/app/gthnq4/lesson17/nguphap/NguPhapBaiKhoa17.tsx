"use client";

import { useMemo, useState, type ReactNode } from "react";

type Sentence = {
  chinese: string;
  pinyin: string;
  vietnamese: string;
  marks?: string[];
  context?: boolean;
};

type Lesson = {
  title: Sentence;
  sentences: Sentence[];
};

type GrammarPoint = {
  title: string;
  formula: string;
  explanation: string;
  examples: Sentence[];
};

const markClass = "rounded-sm bg-yellow-200 px-0.5 text-inherit";

function renderChinese(sentence: Sentence, highlighted: boolean): ReactNode {
  if (!highlighted || !sentence.marks) return sentence.chinese;

  const parts: ReactNode[] = [];
  let cursor = 0;
  sentence.marks.forEach((mark, index) => {
    const start = sentence.chinese.indexOf(mark, cursor);
    if (start === -1) return;
    parts.push(sentence.chinese.slice(cursor, start));
    parts.push(
      <mark key={index} className={markClass}>
        {mark}
      </mark>,
    );
    cursor = start + mark.length;
  });
  parts.push(sentence.chinese.slice(cursor));
  return parts;
}

/* ============================== BÀI KHOÁ ============================== */

const lessons: Lesson[] = [
  {
    title: {
      chinese: "（一）前边开过来一辆空车",
      pinyin: "Qiánbian kāi guolai yí liàng kōng chē",
      vietnamese: "Phía trước có một chiếc xe trống chạy tới",
      marks: ["开过来"],
    },
    sentences: [
      {
        chinese: "（秋天的一天，田芳请张东、玛丽和麦克到家里做客……）",
        pinyin:
          "(Qiūtiān de yì tiān, Tián Fāng qǐng Zhāng Dōng, Mǎlì hé Màikè dào jiāli zuòkè……)",
        vietnamese:
          "(Một ngày mùa thu, Điền Phương mời Trương Đông, Mary và Mike đến nhà chơi……)",
        context: true,
      },
      {
        chinese: "田芳：等车的人越来越多了，咱们还是打的去吧，别坐公共汽车了。",
        pinyin:
          "Tián Fāng: Děng chē de rén yuèláiyuè duō le, zánmen háishi dǎ dī qù ba, bié zuò gōnggòng qìchē le.",
        vietnamese:
          "Điền Phương: Người đợi xe ngày càng đông, chúng ta đi taxi đi, đừng đi xe buýt nữa.",
        marks: ["越来越"],
      },
      {
        chinese: "玛丽：好吧，你看，那边正好开过来一辆空车，就坐这辆吧。",
        pinyin:
          "Mǎlì: Hǎo ba, nǐ kàn, nàbian zhènghǎo kāi guolai yí liàng kōng chē, jiù zuò zhè liàng ba.",
        vietnamese:
          "Mary: Được, bạn xem, đằng kia vừa hay có một chiếc xe trống chạy tới, đi chiếc này đi.",
        marks: ["开过来"],
      },
      {
        chinese: "（在出租车上）",
        pinyin: "(Zài chūzūchē shang)",
        vietnamese: "(Trên xe taxi)",
        context: true,
      },
      {
        chinese: "玛丽：你家住的是四合院儿吗？",
        pinyin: "Mǎlì: Nǐ jiā zhù de shì sìhéyuànr ma?",
        vietnamese: "Mary: Nhà bạn ở là tứ hợp viện à?",
      },
      {
        chinese:
          "田芳：是啊。我家院子里种着一棵大枣树，树上结着很多红枣，远远儿地就能看见。",
        pinyin:
          "Tián Fāng: Shì a. Wǒ jiā yuànzi li zhòngzhe yì kē dà zǎoshù, shù shang jiēzhe hěn duō hóng zǎo, yuǎnyuānr de jiù néng kànjiàn.",
        vietnamese:
          "Điền Phương: Đúng vậy. Trong sân nhà mình trồng một cây táo tàu lớn, trên cây ra rất nhiều táo đỏ, từ xa đã nhìn thấy.",
        marks: ["种着", "结着"],
      },
      {
        chinese:
          "一看见那棵大枣树就看到我家了。今天请你们尝尝我家的红枣，可甜了。",
        pinyin:
          "Yí kànjiàn nà kē dà zǎoshù jiù kàndào wǒ jiā le. Jīntiān qǐng nǐmen chángchang wǒ jiā de hóng zǎo, kě tián le.",
        vietnamese:
          "Cứ nhìn thấy cây táo tàu lớn đó là thấy nhà mình. Hôm nay mời các bạn nếm thử táo đỏ nhà mình, ngọt lắm.",
      },
      {
        chinese: "玛丽：我听说现在住四合院儿的越来越少了。",
        pinyin: "Mǎlì: Wǒ tīngshuō xiànzài zhù sìhéyuànr de yuèláiyuè shǎo le.",
        vietnamese:
          "Mary: Mình nghe nói bây giờ người ở tứ hợp viện ngày càng ít.",
        marks: ["越来越"],
      },
      {
        chinese: "田芳：是。现在城市里大楼越盖越多，住宅小区也越建越漂亮。",
        pinyin:
          "Tián Fāng: Shì. Xiànzài chéngshì li dàlóu yuè gài yuè duō, zhùzhái xiǎoqū yě yuè jiàn yuè piàoliang.",
        vietnamese:
          "Điền Phương: Đúng. Bây giờ trong thành phố nhà cao tầng càng xây càng nhiều, khu dân cư cũng càng xây càng đẹp.",
        marks: ["越盖越多", "越建越漂亮"],
      },
      {
        chinese:
          "很多人都搬进楼房里去住了。我们院子里最近也搬走了五六家，明年我们家也要搬走了。",
        pinyin:
          "Hěn duō rén dōu bān jìn lóufáng li qù zhù le. Wǒmen yuànzi li zuìjìn yě bānzǒu le wǔ-liù jiā, míngnián wǒmen jiā yě yào bānzǒu le.",
        vietnamese:
          "Nhiều người đều chuyển vào nhà cao tầng ở. Trong sân nhà mình gần đây cũng có năm sáu nhà chuyển đi, sang năm nhà mình cũng sẽ chuyển đi.",
        marks: ["搬走了", "搬走了"],
      },
      {
        chinese: "玛丽：那太遗憾了。",
        pinyin: "Mǎlì: Nà tài yíhàn le.",
        vietnamese: "Mary: Thế thì tiếc quá.",
      },
      {
        chinese:
          "田芳：我虽然也舍不得离开我们家的小院儿，但还是希望快点儿搬进现代化的楼房里去住。",
        pinyin:
          "Tián Fāng: Wǒ suīrán yě shěbude líkāi wǒmen jiā de xiǎo yuànr, dàn háishi xīwàng kuài diǎnr bān jìn xiàndàihuà de lóufáng li qù zhù.",
        vietnamese:
          "Điền Phương: Mình tuy cũng không nỡ rời xa sân nhỏ nhà mình, nhưng vẫn mong mau chóng chuyển vào nhà cao tầng hiện đại để ở.",
      },
    ],
  },
  {
    title: {
      chinese: "（二）年轻人打扮得越来越漂亮了",
      pinyin: "Niánqīngrén dǎban de yuèláiyuè piàoliang le",
      vietnamese: "Người trẻ ăn mặc ngày càng đẹp",
      marks: ["越来越"],
    },
    sentences: [
      {
        chinese: "（圣诞节和新年快到了……）",
        pinyin: "(Shèngdàn Jié hé xīnnián kuài dào le……)",
        vietnamese: "(Giáng sinh và năm mới sắp đến……)",
        context: true,
      },
      {
        chinese:
          "王老师：同学们已经学了两个多月汉语了。今天，想请大家随便谈谈自己的感想和体会，有什么意见和建议也可以提。",
        pinyin:
          "Wáng lǎoshī: Tóngxuémen yǐjīng xué le liǎng ge duō yuè Hànyǔ le. Jīntiān, xiǎng qǐng dàjiā suíbiàn tán tan zìjǐ de gǎnxiǎng hé tǐhuì, yǒu shénme yìjiàn hé jiànyì yě kěyǐ tí.",
        vietnamese:
          "Thầy Vương: Các em đã học tiếng Trung hơn hai tháng rồi. Hôm nay, thầy muốn mời các em tùy ý nói về cảm tưởng và trải nghiệm của mình, có ý kiến và đề nghị gì cũng có thể nêu ra.",
      },
      {
        chinese:
          "玛丽：刚来的时候，我不习惯北京的气候，常常感冒，现在越来越习惯了。",
        pinyin:
          "Mǎlì: Gāng lái de shíhou, wǒ bù xíguàn Běijīng de qìhòu, chángcháng gǎnmào, xiànzài yuèláiyuè xíguàn le.",
        vietnamese:
          "Mary: Lúc mới đến, mình không quen khí hậu Bắc Kinh, thường bị cảm, bây giờ ngày càng quen rồi.",
        marks: ["越来越"],
      },
      {
        chinese: "麦克：我们的汉语越来越好，觉得越学越有意思了。",
        pinyin:
          "Màikè: Wǒmen de Hànyǔ yuèláiyuè hǎo, juéde yuè xué yuè yǒu yìsi le.",
        vietnamese:
          "Mike: Tiếng Trung của chúng mình ngày càng tốt, cảm thấy càng học càng thú vị.",
        marks: ["越来越", "越学越有意思"],
      },
      {
        chinese: "玛丽：我的朋友越来越多。",
        pinyin: "Mǎlì: Wǒ de péngyou yuèláiyuè duō.",
        vietnamese: "Mary: Bạn của mình ngày càng nhiều.",
        marks: ["越来越"],
      },
      {
        chinese: "麦克：朋友越多越好，“在家靠父母，出门靠朋友”嘛。",
        pinyin:
          "Màikè: Péngyou yuè duō yuè hǎo, “zài jiā kào fùmǔ, chū mén kào péngyou” ma.",
        vietnamese:
          "Mike: Bạn càng nhiều càng tốt, “ở nhà nhờ cha mẹ, ra ngoài nhờ bạn bè” mà.",
        marks: ["越多越好"],
      },
      {
        chinese: "山本：中国菜很好吃，我越吃越喜欢吃，所以也越来越胖了。",
        pinyin:
          "Shānběn: Zhōngguó cài hěn hǎochī, wǒ yuè chī yuè xǐhuan chī, suǒyǐ yě yuèláiyuè pàng le.",
        vietnamese:
          "Yamamoto: Món ăn Trung Quốc rất ngon, mình càng ăn càng thích ăn, cho nên cũng ngày càng béo.",
        marks: ["越吃越喜欢", "越来越"],
      },
      {
        chinese:
          "麦克：我觉得人们的生活一天比一天丰富，年轻人越来越会打扮，打扮得越来越漂亮了。",
        pinyin:
          "Màikè: Wǒ juéde rénmen de shēnghuó yì tiān bǐ yì tiān fēngfù, niánqīngrén yuèláiyuè huì dǎban, dǎban de yuèláiyuè piàoliang le.",
        vietnamese:
          "Mike: Mình thấy đời sống mọi người mỗi ngày một phong phú hơn, người trẻ ngày càng biết ăn mặc, ăn mặc ngày càng đẹp.",
        marks: ["越来越", "越来越"],
      },
      {
        chinese:
          "玛丽：圣诞节和新年快到了，不少商店都摆着圣诞树，装饰得非常漂亮，我看见很多中国人也买圣诞树和圣诞礼物。",
        pinyin:
          "Mǎlì: Shèngdàn Jié hé xīnnián kuài dào le, bùshǎo shāngdiàn dōu bǎizhe shèngdànshù, zhuāngshì de fēicháng piàoliang, wǒ kànjiàn hěn duō Zhōngguórén yě mǎi shèngdànshù hé shèngdàn lǐwù.",
        vietnamese:
          "Mary: Giáng sinh và năm mới sắp đến, không ít cửa hàng đều bày cây thông Noel, trang trí rất đẹp, mình thấy nhiều người Trung Quốc cũng mua cây thông và quà Giáng sinh.",
        marks: ["摆着"],
      },
      {
        chinese: "麦克：老师，我听说中国过圣诞节的人越来越多了，是吗？",
        pinyin:
          "Màikè: Lǎoshī, wǒ tīngshuō Zhōngguó guò Shèngdàn Jié de rén yuèláiyuè duō le, shì ma?",
        vietnamese:
          "Mike: Thưa thầy, em nghe nói người Trung Quốc đón Giáng sinh ngày càng nhiều, đúng không ạ?",
        marks: ["越来越"],
      },
      {
        chinese:
          "王老师：一般家庭是不过圣诞节的。有的人过圣诞节，可能是喜欢圣诞节那种欢乐的气氛，孩子们能从爸爸妈妈那儿得到礼物，当然也很高兴。",
        pinyin:
          "Wáng lǎoshī: Yìbān jiātíng shì bú guò Shèngdàn Jié de. Yǒu de rén guò Shèngdàn Jié, kěnéng shì xǐhuan Shèngdàn Jié nà zhǒng huānlè de qìfēn, háizimen néng cóng bàba māma nàr dédào lǐwù, dāngrán yě hěn gāoxìng.",
        vietnamese:
          "Thầy Vương: Gia đình bình thường thì không đón Giáng sinh. Có người đón Giáng sinh, có thể là thích không khí vui vẻ của Giáng sinh, bọn trẻ có thể nhận quà từ bố mẹ, đương nhiên cũng rất vui.",
      },
      {
        chinese: "不过，中国最大的节日还是春节。",
        pinyin: "Búguò, Zhōngguó zuì dà de jiérì háishi Chūnjié.",
        vietnamese:
          "Nhưng mà, ngày lễ lớn nhất của Trung Quốc vẫn là Tết Xuân.",
      },
      {
        chinese: "麦克：老师，我建议，咱们开一个新年联欢会，怎么样？",
        pinyin:
          "Màikè: Lǎoshī, wǒ jiànyì, zánmen kāi yí ge xīnnián liánhuānhuì, zěnmeyàng?",
        vietnamese:
          "Mike: Thưa thầy, em đề nghị chúng ta tổ chức một buổi liên hoan năm mới, thế nào ạ?",
      },
      {
        chinese: "王老师：好啊！",
        pinyin: "Wáng lǎoshī: Hǎo a!",
        vietnamese: "Thầy Vương: Được đấy!",
      },
    ],
  },
];

/* ============================== NGỮ PHÁP ============================== */

const grammar: GrammarPoint[] = [
  {
    title: "1. Câu tồn hiện: nơi chốn + động từ + 着 + danh từ",
    formula: "Nơi chốn + V + 着 + (số lượng từ) + danh từ",
    explanation:
      "Câu tồn hiện dùng để nói ở một nơi nào đó có người/vật đang ở trong trạng thái gì. Động từ thường là những động từ để lại trạng thái như 种 (trồng), 结 (ra quả), 摆 (bày), 挂 (treo), 贴 (dán), 放 (để), 停 (đỗ). Danh từ đứng sau thường là cái chưa xác định (một…, nhiều…), không dùng danh từ xác định. 着 ở đây không dịch là “đang” mà chỉ trạng thái vẫn còn nguyên ở đó.",
    examples: [
      {
        chinese: "我家院子里种着一棵大枣树。",
        pinyin: "Wǒ jiā yuànzi li zhòngzhe yì kē dà zǎoshù.",
        vietnamese: "Trong sân nhà mình trồng một cây táo tàu lớn.",
        marks: ["种着"],
      },
      {
        chinese: "树上结着很多红枣。",
        pinyin: "Shù shang jiēzhe hěn duō hóng zǎo.",
        vietnamese: "Trên cây ra rất nhiều táo đỏ.",
        marks: ["结着"],
      },
      {
        chinese: "不少商店都摆着圣诞树。",
        pinyin: "Bùshǎo shāngdiàn dōu bǎizhe shèngdànshù.",
        vietnamese: "Không ít cửa hàng đều bày cây thông Noel.",
        marks: ["摆着"],
      },
      {
        chinese: "门前种着一棵树。",
        pinyin: "Mén qián zhòngzhe yì kē shù.",
        vietnamese: "Trước cửa trồng một cây.",
        marks: ["种着"],
      },
      {
        chinese: "树上开着很多花儿。",
        pinyin: "Shù shang kāizhe hěn duō huār.",
        vietnamese: "Trên cây nở rất nhiều hoa.",
        marks: ["开着"],
      },
    ],
  },
  {
    title: "2. Câu tồn hiện: xuất hiện và biến mất (V + 来/去 + bổ ngữ)",
    formula: "Nơi chốn + V + 来/去 (+ bổ ngữ) + số lượng từ + danh từ",
    explanation:
      "Ngoài trạng thái (V着), câu tồn hiện còn dùng để nói sự xuất hiện (开过来, 跑来, 上来) hoặc biến mất (搬走, 走) của người/vật. Động từ thường có xu hướng 来/去 hoặc bổ ngữ chỉ hướng. Danh từ sau vẫn là không xác định: nói 前边开过来一辆空车, không nói 前边开过来他坐的汽车.",
    examples: [
      {
        chinese: "前边开过来一辆空车。",
        pinyin: "Qiánbian kāi guolai yí liàng kōng chē.",
        vietnamese: "Phía trước có một chiếc xe trống chạy tới.",
        marks: ["开过来"],
      },
      {
        chinese: "楼下上来一个人。",
        pinyin: "Lóu xià shànglai yí ge rén.",
        vietnamese: "Dưới lầu có một người đi lên.",
        marks: ["上来"],
      },
      {
        chinese: "前面开过来一辆出租车。",
        pinyin: "Qiánmiàn kāi guolai yí liàng chūzūchē.",
        vietnamese: "Phía trước có một chiếc taxi chạy tới.",
        marks: ["开过来"],
      },
      {
        chinese: "我们院子里最近也搬走了五六家。",
        pinyin: "Wǒmen yuànzi li zuìjìn yě bānzǒu le wǔ-liù jiā.",
        vietnamese: "Trong sân nhà mình gần đây cũng có năm sáu nhà chuyển đi.",
        marks: ["搬走了"],
      },
      {
        chinese: "我们班走了两个学生。",
        pinyin: "Wǒmen bān zǒu le liǎng ge xuésheng.",
        vietnamese: "Lớp chúng tôi có hai học sinh chuyển đi.",
        marks: ["走了"],
      },
    ],
  },
  {
    title: "3. 越来越…: mức độ thay đổi theo thời gian",
    formula: "越来越 + tính từ / động từ tâm lí",
    explanation:
      "越来越… biểu thị mức độ của sự vật thay đổi theo thời gian, nghĩa là “ngày càng…”. Đứng sau là tính từ hoặc động từ chỉ trạng thái, tâm lí (习惯, 会打扮, 喜欢…). Không dùng 很, 非常… trước tính từ trong kết cấu này.",
    examples: [
      {
        chinese: "等车的人越来越多了。",
        pinyin: "Děng chē de rén yuèláiyuè duō le.",
        vietnamese: "Người đợi xe ngày càng đông.",
        marks: ["越来越"],
      },
      {
        chinese: "现在住四合院儿的越来越少了。",
        pinyin: "Xiànzài zhù sìhéyuànr de yuèláiyuè shǎo le.",
        vietnamese: "Bây giờ người ở tứ hợp viện ngày càng ít.",
        marks: ["越来越"],
      },
      {
        chinese: "现在越来越习惯了。",
        pinyin: "Xiànzài yuèláiyuè xíguàn le.",
        vietnamese: "Bây giờ ngày càng quen rồi.",
        marks: ["越来越"],
      },
      {
        chinese: "我们的汉语越来越好。",
        pinyin: "Wǒmen de Hànyǔ yuèláiyuè hǎo.",
        vietnamese: "Tiếng Trung của chúng mình ngày càng tốt.",
        marks: ["越来越"],
      },
      {
        chinese: "年轻人越来越会打扮。",
        pinyin: "Niánqīngrén yuèláiyuè huì dǎban.",
        vietnamese: "Người trẻ ngày càng biết ăn mặc.",
        marks: ["越来越"],
      },
      {
        chinese: "中国过圣诞节的人越来越多了。",
        pinyin: "Zhōngguó guò Shèngdàn Jié de rén yuèláiyuè duō le.",
        vietnamese: "Người Trung Quốc đón Giáng sinh ngày càng nhiều.",
        marks: ["越来越"],
      },
    ],
  },
  {
    title: "4. 越…越…: mức độ thay đổi theo điều kiện",
    formula: "越 + A/V + 越 + A/V",
    explanation:
      "越…越… biểu thị mức độ của sự vật thay đổi theo điều kiện, nghĩa là “càng… càng…”. Hai vế thường dùng chung hoặc khác chủ ngữ. Kết cấu này đã hàm ý mức độ cao nên không dùng thêm phó từ chỉ mức độ (很, 非常…) trước vị ngữ: nói 越看越喜欢, không nói 越看越很喜欢.",
    examples: [
      {
        chinese: "城市里大楼越盖越多。",
        pinyin: "Chéngshì li dàlóu yuè gài yuè duō.",
        vietnamese: "Trong thành phố nhà cao tầng càng xây càng nhiều.",
        marks: ["越盖越多"],
      },
      {
        chinese: "住宅小区也越建越漂亮。",
        pinyin: "Zhùzhái xiǎoqū yě yuè jiàn yuè piàoliang.",
        vietnamese: "Khu dân cư cũng càng xây càng đẹp.",
        marks: ["越建越漂亮"],
      },
      {
        chinese: "觉得越学越有意思了。",
        pinyin: "Juéde yuè xué yuè yǒu yìsi le.",
        vietnamese: "Cảm thấy càng học càng thú vị.",
        marks: ["越学越有意思"],
      },
      {
        chinese: "朋友越多越好。",
        pinyin: "Péngyou yuè duō yuè hǎo.",
        vietnamese: "Bạn càng nhiều càng tốt.",
        marks: ["越多越好"],
      },
      {
        chinese: "我越吃越喜欢吃。",
        pinyin: "Wǒ yuè chī yuè xǐhuan chī.",
        vietnamese: "Mình càng ăn càng thích ăn.",
        marks: ["越吃越喜欢"],
      },
      {
        chinese: "你看，雨越下越大了。",
        pinyin: "Nǐ kàn, yǔ yuè xià yuè dà le.",
        vietnamese: "Bạn xem, mưa càng lúc càng to.",
        marks: ["越下越大"],
      },
    ],
  },
  {
    title: "5. 一天比一天…: so sánh tăng dần",
    formula: "一天比一天 + tính từ",
    explanation:
      "一天比一天… nghĩa là “mỗi ngày một…”, nhấn mạnh sự thay đổi tăng dần theo từng ngày. Có thể dùng song song với 越来越… để miêu tả xu hướng.",
    examples: [
      {
        chinese: "我觉得人们的生活一天比一天丰富。",
        pinyin: "Wǒ juéde rénmen de shēnghuó yì tiān bǐ yì tiān fēngfù.",
        vietnamese: "Mình thấy đời sống mọi người mỗi ngày một phong phú hơn.",
        marks: ["一天比一天"],
      },
    ],
  },
  {
    title: "6. 越来越… và 越…越…: phân biệt và lỗi thường gặp",
    formula: "越来越… (theo thời gian) · 越…越… (theo điều kiện)",
    explanation:
      "越来越… nói mức độ thay đổi theo thời gian; 越…越… nói mức độ thay đổi theo điều kiện. Cả hai đều không dùng thêm phó từ chỉ mức độ. Lỗi thường gặp: *我的汉语越来越很流利了 → 我的汉语越来越流利了; *这首歌我越听越很喜欢 → 这首歌我越听越喜欢.",
    examples: [
      {
        chinese: "这本书很好，我越看越喜欢。",
        pinyin: "Zhè běn shū hěn hǎo, wǒ yuè kàn yuè xǐhuan.",
        vietnamese: "Cuốn sách này rất hay, mình càng đọc càng thích.",
        marks: ["越看越喜欢"],
      },
      {
        chinese: "她的汉语越说越好。",
        pinyin: "Tā de Hànyǔ yuè shuō yuè hǎo.",
        vietnamese: "Tiếng Trung của cô ấy càng nói càng tốt.",
        marks: ["越说越好"],
      },
    ],
  },
  {
    title: "7. 着 (zhe) ôn lại: trạng thái được duy trì",
    formula: "Nơi chốn + V着 + danh từ",
    explanation:
      "Trong bài 17, 着 xuất hiện chủ yếu trong câu tồn hiện: 种着, 结着, 摆着. 着 đặt sau động từ, đọc nhẹ, chỉ trạng thái vẫn được duy trì sau hành động, khác với 了 (hành động đã xảy ra/hoàn thành) và 在 (đang diễn ra).",
    examples: [
      {
        chinese: "院子里种着一棵大枣树，树上结着很多红枣。",
        pinyin:
          "Yuànzi li zhòngzhe yì kē dà zǎoshù, shù shang jiēzhe hěn duō hóng zǎo.",
        vietnamese:
          "Trong sân trồng một cây táo tàu lớn, trên cây ra rất nhiều táo đỏ.",
        marks: ["种着", "结着"],
      },
      {
        chinese: "不少商店都摆着圣诞树。",
        pinyin: "Bùshǎo shāngdiàn dōu bǎizhe shèngdànshù.",
        vietnamese: "Không ít cửa hàng đều bày cây thông Noel.",
        marks: ["摆着"],
      },
    ],
  },
];

/* ============================== BÀI TẬP ============================== */

type ExerciseType = "fill" | "correct" | "transform";

type Exercise = {
  id: string;
  type: ExerciseType;
  prompt: string;
  hint: string;
  answer: string;
  marks?: string[];
  explanation: string;
};

const exercises: Exercise[] = [
  {
    id: "f1",
    type: "fill",
    prompt: "我家院子里种______很多花儿。",
    hint: "着 / 了 / 过",
    answer: "我家院子里种着很多花儿。",
    marks: ["种着"],
    explanation: "Câu tồn hiện miêu tả trạng thái: nơi chốn + V着 + danh từ.",
  },
  {
    id: "f2",
    type: "fill",
    prompt: "门上贴______一个“红双喜字”。",
    hint: "着 / 了 / 过",
    answer: "门上贴着一个“红双喜字”。",
    marks: ["贴着"],
    explanation: "Trạng thái dán vẫn còn đó → dùng 着.",
  },
  {
    id: "f3",
    type: "fill",
    prompt: "楼前停______几辆车。",
    hint: "着 / 了 / 过",
    answer: "楼前停着几辆车。",
    marks: ["停着"],
    explanation: "Xe đang đỗ ở đó (trạng thái) → 着.",
  },
  {
    id: "f4",
    type: "fill",
    prompt: "树上结______很多红枣。",
    hint: "着 / 了 / 过",
    answer: "树上结着很多红枣。",
    marks: ["结着"],
    explanation: "Quả đang còn trên cây (trạng thái) → 着.",
  },
  {
    id: "f5",
    type: "fill",
    prompt: "这种建筑现在______少了。",
    hint: "越来越 / 越…越…",
    answer: "这种建筑现在越来越少了。",
    marks: ["越来越"],
    explanation: "Mức độ thay đổi theo thời gian → 越来越.",
  },
  {
    id: "f6",
    type: "fill",
    prompt: "汉语______学______有意思。",
    hint: "越来越 / 越…越…",
    answer: "汉语越学越有意思。",
    marks: ["越学越有意思"],
    explanation: "Mức độ thay đổi theo điều kiện (càng học) → 越…越….",
  },
  {
    id: "f7",
    type: "fill",
    prompt: "中国最大的______还是春节。",
    hint: "节日 / 气氛 / 礼物",
    answer: "中国最大的节日还是春节。",
    explanation: "节日 = ngày lễ; 春节 là ngày lễ lớn nhất.",
  },
  {
    id: "f8",
    type: "fill",
    prompt: "有些人过圣诞节可能是因为喜欢那种______的气氛。",
    hint: "欢乐 / 丰富 / 遗憾",
    answer: "有些人过圣诞节可能是因为喜欢那种欢乐的气氛。",
    explanation: "欢乐的气氛 = không khí vui vẻ.",
  },
  {
    id: "c1",
    type: "correct",
    prompt: "教室里跑出来了麦克。",
    hint: "Danh từ sau câu tồn hiện phải không xác định",
    answer: "教室里跑出来了一个人。",
    marks: ["跑出来了"],
    explanation:
      "Câu tồn hiện dùng danh từ không xác định; không dùng tên riêng 麦克 ở vị trí tân ngữ.",
  },
  {
    id: "c2",
    type: "correct",
    prompt: "很多同学坐着在操场上。",
    hint: "Trật tự: nơi chốn + V着",
    answer: "操场上坐着很多同学。",
    marks: ["坐着"],
    explanation: "Câu tồn hiện đặt nơi chốn lên đầu: 操场上 + 坐着 + 很多同学.",
  },
  {
    id: "c3",
    type: "correct",
    prompt: "车里坐在我和一个朋友。",
    hint: "Nơi chốn + V着 + danh từ",
    answer: "车里坐着我和一个朋友。",
    marks: ["坐着"],
    explanation: "Dùng 坐着 (trạng thái), không dùng 坐在 như động từ chính.",
  },
  {
    id: "c4",
    type: "correct",
    prompt: "前边开过来他坐的汽车。",
    hint: "Tân ngữ phải không xác định",
    answer: "前边开过来一辆汽车。",
    marks: ["开过来"],
    explanation:
      "Không dùng danh từ xác định (他坐的汽车) sau câu tồn hiện; thay bằng 一辆汽车.",
  },
  {
    id: "c5",
    type: "correct",
    prompt: "我们班来了这个新老师。",
    hint: "Tân ngữ không xác định",
    answer: "我们班来了一个新老师。",
    marks: ["来了"],
    explanation: "Không dùng 这个 (xác định); đổi thành 一个新老师.",
  },
  {
    id: "c6",
    type: "correct",
    prompt: "我的汉语越来越很流利了。",
    hint: "越来越 không đi với 很",
    answer: "我的汉语越来越流利了。",
    marks: ["越来越"],
    explanation:
      "越来越 đã hàm ý mức độ cao, không dùng thêm 很 trước tính từ.",
  },
  {
    id: "c7",
    type: "correct",
    prompt: "这首歌我越听越很喜欢。",
    hint: "越…越… không đi với 很",
    answer: "这首歌我越听越喜欢。",
    marks: ["越听越喜欢"],
    explanation:
      "越…越… không dùng thêm phó từ chỉ mức độ như 很 trước vị ngữ.",
  },
  {
    id: "t1",
    type: "transform",
    prompt: "Đặt câu tồn hiện với: 门前 / 种 / 一棵树",
    hint: "Nơi chốn + V着 + số lượng + danh từ",
    answer: "门前种着一棵树。",
    marks: ["种着"],
    explanation: "Mẫu: 门前种着一棵树。",
  },
  {
    id: "t2",
    type: "transform",
    prompt: "Đặt câu tồn hiện với: 书架上 / 摆 / 很多书",
    hint: "Nơi chốn + V着 + danh từ",
    answer: "书架上摆着很多书。",
    marks: ["摆着"],
    explanation: "Mẫu: 书架上摆着很多书。",
  },
  {
    id: "t3",
    type: "transform",
    prompt: "Đặt câu tồn hiện với: 墙上 / 挂 / 很多照片",
    hint: "Nơi chốn + V着 + danh từ",
    answer: "墙上挂着很多照片。",
    marks: ["挂着"],
    explanation: "Mẫu: 墙上挂着很多照片。",
  },
  {
    id: "t4",
    type: "transform",
    prompt: "Đổi sang 越来越: 现在住四合院儿的人很少。",
    hint: "越来越 + tính từ",
    answer: "现在住四合院儿的人越来越少了。",
    marks: ["越来越"],
    explanation: "Mẫu: 现在住四合院儿的人越来越少了。",
  },
  {
    id: "t5",
    type: "transform",
    prompt: "Đổi sang 越…越…: 她打扮，她很漂亮。",
    hint: "越 + V + 越 + A",
    answer: "她越打扮越漂亮。",
    marks: ["越打扮越漂亮"],
    explanation: "Mẫu: 她越打扮越漂亮。",
  },
  {
    id: "t6",
    type: "transform",
    prompt: "Đổi sang 越…越…: 这儿的楼盖得很多。",
    hint: "越…越…",
    answer: "这儿的楼越盖越多。",
    marks: ["越盖越多"],
    explanation: "Mẫu: 这儿的楼越盖越多。",
  },
  {
    id: "t7",
    type: "transform",
    prompt: "Đổi sang 越来越: 天气暖和了。",
    hint: "越来越 + tính từ",
    answer: "天气越来越暖和了。",
    marks: ["越来越"],
    explanation: "Mẫu: 天气越来越暖和了。",
  },
  {
    id: "t8",
    type: "transform",
    prompt: "Đổi sang câu tồn hiện: 一辆空车从前面开过来。",
    hint: "Nơi chốn + V + 来 + số lượng + danh từ",
    answer: "前面开过来一辆空车。",
    marks: ["开过来"],
    explanation: "Mẫu: 前面开过来一辆空车。",
  },
];

/* ============================== SUB-COMPONENTS ============================== */

function TextSection() {
  const [showPinyin, setShowPinyin] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleSentence = (key: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const pillClass = (active: boolean) =>
    `rounded-full border px-3 py-1 text-sm ${
      active
        ? "border-sky-600 bg-sky-50 text-sky-700"
        : "border-slate-200 hover:bg-slate-50"
    }`;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          aria-pressed={showPinyin}
          onClick={() => setShowPinyin((v) => !v)}
          className={pillClass(showPinyin)}
        >
          Pinyin
        </button>
        <button
          type="button"
          aria-pressed={showMeaning}
          onClick={() => setShowMeaning((v) => !v)}
          className={pillClass(showMeaning)}
        >
          Nghĩa
        </button>
        <button
          type="button"
          aria-pressed={highlighted}
          onClick={() => setHighlighted((v) => !v)}
          className={pillClass(highlighted)}
        >
          Tô sáng ≖⩊≖
        </button>
        <ul
          aria-label="Chú thích màu"
          className="flex items-center gap-x-3 text-sm text-slate-600"
        >
          <li className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-sm bg-yellow-200"
            />
            Vàng: ngữ pháp bài 17
          </li>
        </ul>
        <p className="text-sm text-sky-700">
          Chạm vào câu để xem pinyin + nghĩa.
        </p>
      </div>

      {lessons.map((lesson, lessonIndex) => (
        <article key={lessonIndex} className="mt-6">
          <header className="mb-2">
            <h2 className="ztai__zh text-2xl font-bold">
              {renderChinese(lesson.title, highlighted)}
            </h2>
            <p className="text-sm text-slate-500">{lesson.title.pinyin}</p>
            <p className="text-sm text-slate-700">{lesson.title.vietnamese}</p>
          </header>

          <div className="divide-y divide-dashed divide-slate-200">
            {lesson.sentences.map((sentence, index) => {
              const key = `${lessonIndex}-${index}`;
              const isOpen = expanded.has(key);
              return (
                <button
                  key={key}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleSentence(key)}
                  className={`block w-full py-2 text-left hover:bg-amber-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    sentence.context ? "my-2 rounded-md bg-stone-100 px-3" : ""
                  }`}
                >
                  <span
                    className={`ztai__zh block leading-relaxed ${
                      sentence.context ? "text-lg text-stone-700" : "text-2xl"
                    }`}
                  >
                    {renderChinese(sentence, highlighted)}
                  </span>
                  {(showPinyin || isOpen) && (
                    <span className="block text-sm text-slate-500">
                      {sentence.pinyin}
                    </span>
                  )}
                  {(showMeaning || isOpen) && (
                    <span className="block text-sm text-slate-700">
                      {sentence.vietnamese}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}

function GrammarSection() {
  return (
    <div>
      <h2 className="text-xl font-bold">
        Ngữ pháp bài 17:{" "}
        <span className="ztai__zh">存现句 · 越来越 · 越…越…</span>
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        Bài 17 tập trung vào ba mảng chính: (1) câu tồn hiện (存现句) miêu tả sự
        tồn tại, xuất hiện, biến mất của người/vật; (2) 越来越… biểu thị mức độ
        thay đổi theo thời gian; (3) 越…越… biểu thị mức độ thay đổi theo điều
        kiện. Kèm theo là ôn lại 着 trong câu tồn hiện và cách dùng 一天比一天….
      </p>

      <div className="mt-4 space-y-4">
        {grammar.map((point) => (
          <article
            key={point.title}
            className="rounded-md border border-stone-200 p-4"
          >
            <h3 className="font-semibold">{point.title}</h3>
            <p className="mt-1 inline-block rounded bg-sky-50 px-2 py-0.5 text-sm text-sky-700">
              {point.formula}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {point.explanation}
            </p>
            <ul className="mt-3 space-y-2">
              {point.examples.map((example) => (
                <li
                  key={example.chinese}
                  className="border-l-2 border-yellow-300 pl-3"
                >
                  <p className="ztai__zh text-xl">
                    {renderChinese(example, true)}
                  </p>
                  <p className="text-sm text-sky-700">{example.pinyin}</p>
                  <p className="text-sm text-slate-600">{example.vietnamese}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExerciseSection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const setAnswer = (id: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const checkExercise = (id: string) =>
    setChecked((prev) => new Set(prev).add(id));

  const resetExercises = () => {
    setAnswers({});
    setChecked(new Set());
  };

  const exerciseCount = useMemo(() => exercises.length, []);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold">
          Bài tập bài 17 ({exerciseCount} câu)
        </h2>
        <button
          type="button"
          onClick={resetExercises}
          className="rounded-full border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50"
        >
          Làm lại
        </button>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Điền từ / sửa lỗi / biến đổi câu. Nhấn “Kiểm tra” để xem đáp án và giải
        thích.
      </p>

      <div className="mt-4 space-y-4">
        {exercises.map((ex, index) => {
          const isChecked = checked.has(ex.id);
          const userAnswer = answers[ex.id] ?? "";
          return (
            <article
              key={ex.id}
              className="rounded-md border border-stone-200 p-4"
            >
              <div className="flex items-start gap-2">
                <span className="mt-0.5 rounded bg-stone-100 px-1.5 text-xs text-stone-600">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">
                    {ex.type === "fill"
                      ? "Điền từ"
                      : ex.type === "correct"
                        ? "Sửa lỗi"
                        : "Biến đổi câu"}
                  </p>
                  <p className="ztai__zh text-xl">{ex.prompt}</p>
                  <p className="mt-1 text-xs text-sky-700">Gợi ý: {ex.hint}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setAnswer(ex.id, e.target.value)}
                      placeholder="Nhập câu trả lời…"
                      className="w-full max-w-md rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    <button
                      type="button"
                      onClick={() => checkExercise(ex.id)}
                      className="rounded-full bg-sky-600 px-3 py-1 text-sm text-white hover:bg-sky-700"
                    >
                      Kiểm tra
                    </button>
                  </div>

                  {isChecked && (
                    <div className="mt-3 rounded-md bg-amber-50 p-3 text-sm">
                      <p className="font-medium text-slate-700">
                        Đáp án:{" "}
                        <span className="ztai__zh text-base">
                          {renderChinese(
                            { chinese: ex.answer, marks: ex.marks } as Sentence,
                            true,
                          )}
                        </span>
                      </p>
                      <p className="mt-1 text-slate-600">{ex.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/* ============================== MAIN ============================== */

export default function NguPhapBaiKhoa17() {
  return (
    <div className="space-y-8">
      <section aria-label="Bài khoá bài 17">
        <TextSection />
      </section>
      <section
        aria-label="Ngữ pháp bài 17"
        className="border-t border-slate-200 pt-6"
      >
        <GrammarSection />
      </section>
      <section
        aria-label="Bài tập bài 17"
        className="border-t border-slate-200 pt-6"
      >
        <ExerciseSection />
      </section>
    </div>
  );
}
