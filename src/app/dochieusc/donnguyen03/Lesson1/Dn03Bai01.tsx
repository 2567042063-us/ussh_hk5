"use client";

import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  title: "一、堂弟的婚礼",
  titlePy: "Tángdì de hūnlǐ",
  titleVi: "Đám cưới của em họ",
  paras: [
    [
      {
        zh: "我收到了堂弟的信。",
        py: "Wǒ shōudào le tángdì de xìn.",
        vi: "Tôi nhận được thư của em họ.",
      },
      {
        zh: "信上说:他春节将举行婚礼,地点在燕京饭店,让我一定去参加他的婚礼。",
        py: "Xìn shàng shuō: tā Chūnjié jiāng jǔxíng hūnlǐ, dìdiǎn zài Yānjīng Fàndiàn, ràng wǒ yídìng qù cānjiā tā de hūnlǐ.",
        vi: "Trong thư nói: Tết Nguyên đán cậu ấy sẽ tổ chức đám cưới, địa điểm ở khách sạn Yên Kinh, bảo tôi nhất định phải đi dự.",
      },
      {
        zh: "到底还是婶婶赢了。",
        py: "Dàodǐ háishi shěnshen yíng le.",
        vi: "Rốt cuộc vẫn là thím thắng.",
      },
    ],
    [
      {
        zh: "堂弟半年前就“登记”了。",
        py: "Tángdì bàn nián qián jiù “dēngjì” le.",
        vi: "Em họ nửa năm trước đã “đăng ký” (kết hôn) rồi.",
      },
      {
        zh: "关于结婚仪式,他和婶婶意见不一致,所以婚礼一直拖到了春节。",
        py: "Guānyú jiéhūn yíshì, tā hé shěnshen yìjiàn bù yízhì, suǒyǐ hūnlǐ yìzhí tuōdào le Chūnjié.",
        vi: "Về nghi thức kết hôn, cậu ấy và thím không thống nhất ý kiến, nên đám cưới cứ bị kéo dài đến Tết.",
      },
    ],
    [
      {
        zh: "堂弟和未来的弟媳是大学同学,俩人都主张旅行结婚。",
        py: "Tángdì hé wèilái de dìxí shì dàxué tóngxué, liǎ rén dōu zhǔzhāng lǚxíng jiéhūn.",
        vi: "Em họ và cô em dâu tương lai là bạn học đại học, hai người đều chủ trương cưới kiểu du lịch.",
      },
      {
        zh: "他们认为旅行结婚有几个好处:第一,经济上节约;第二,增长知识;第三,俩人单独在一起,轻松愉快。",
        py: "Tāmen rènwéi lǚxíng jiéhūn yǒu jǐ gè hǎochù: dì-yī, jīngjì shàng jiéyuē; dì-èr, zēngzhǎng zhīshi; dì-sān, liǎ rén dāndú zài yìqǐ, qīngsōng yúkuài.",
        vi: "Họ cho rằng cưới du lịch có mấy cái lợi: một là tiết kiệm kinh tế; hai là mở mang kiến thức; ba là hai người riêng bên nhau, thoải mái vui vẻ.",
      },
    ],
    [
      {
        zh: "堂弟是独生子,婶婶极力主张办酒席。",
        py: "Tángdì shì dúshēngzǐ, shěnshen jílì zhǔzhāng bàn jiǔxí.",
        vi: "Em họ là con trai một, thím hết sức chủ trương tổ chức tiệc cưới.",
      },
      {
        zh: "“我就一个儿子,说什么也得把婚礼办得像样点儿。要不然,别人会笑话咱的!”",
        py: "“Wǒ jiù yí gè érzi, shuō shénme yě děi bǎ hūnlǐ bàn de xiàngyàng diǎnr. Yàobùrán, biérén huì xiàohua zán de!”",
        vi: "“Tôi chỉ có một đứa con trai, nói gì cũng phải tổ chức đám cưới cho ra dáng một chút. Nếu không, người ta sẽ cười chúng ta!”",
      },
      {
        zh: "这是婶婶的理由。",
        py: "Zhè shì shěnshen de lǐyóu.",
        vi: "Đó là lý do của thím.",
      },
    ],
    [
      {
        zh: "我决定去参加堂弟的婚礼。",
        py: "Wǒ juédìng qù cānjiā tángdì de hūnlǐ.",
        vi: "Tôi quyết định đi dự đám cưới của em họ.",
      },
    ],
    [
      {
        zh: "送什么礼物呢?",
        py: "Sòng shénme lǐwù ne?",
        vi: "Tặng quà gì đây?",
      },
      {
        zh: "我想送他们一幅油画。",
        py: "Wǒ xiǎng sòng tāmen yì fú yóuhuà.",
        vi: "Tôi muốn tặng họ một bức tranh sơn dầu.",
      },
      {
        zh: "堂弟他们俩懂艺术,一定会很高兴的。",
        py: "Tángdì tāmen liǎ dǒng yìshù, yídìng huì hěn gāoxìng de.",
        vi: "Hai đứa họ hiểu nghệ thuật, chắc chắn sẽ rất vui.",
      },
    ],
    [
      {
        zh: "可是婶婶很讲实惠。",
        py: "Kěshì shěnshen hěn jiǎng shíhuì.",
        vi: "Nhưng thím rất chuộng thiết thực.",
      },
      {
        zh: "她一定会说:“送这莫名其妙的玩意儿,一点儿用也没有,还那么贵。”",
        py: "Tā yídìng huì shuō: “Sòng zhè mò míng qí miào de wányìr, yìdiǎnr yòng yě méiyǒu, hái nàme guì.”",
        vi: "Thím nhất định sẽ nói: “Tặng cái thứ khó hiểu này, chẳng có chút tác dụng nào mà còn đắt như thế.”",
      },
    ],
    [
      {
        zh: "想了很长时间,我决定还是送实惠的钞票吧。",
        py: "Xiǎng le hěn cháng shíjiān, wǒ juédìng háishi sòng shíhuì de chāopiào ba.",
        vi: "Nghĩ rất lâu, tôi quyết định vẫn là tặng tiền mặt thiết thực vậy.",
      },
      {
        zh: "这不是为了堂弟,而是为了婶婶。",
        py: "Zhè bú shì wèile tángdì, ér shì wèile shěnshen.",
        vi: "Đây không phải vì em họ, mà là vì thím.",
      },
    ],
  ],
  vocab: [
    {
      zh: "堂弟",
      py: "tángdì",
      hv: "đường đệ",
      vi: "em họ (con của anh/em trai bố, nhỏ tuổi hơn mình)",
      syn: "表弟 (em họ bên ngoại)",
    },
    {
      zh: "婶婶",
      py: "shěnshen",
      hv: "thẩm thẩm",
      vi: "thím (vợ của chú)",
      syn: "婶母, 婶子",
    },
    {
      zh: "登记",
      py: "dēngjì",
      hv: "đăng ký",
      vi: "đăng ký (kết hôn)",
      syn: "注册",
    },
    {
      zh: "到底",
      py: "dàodǐ",
      hv: "đáo để",
      vi: "rốt cuộc, cuối cùng",
      syn: "终于, 最后",
    },
    {
      zh: "仪式",
      py: "yíshì",
      hv: "nghi thức",
      vi: "nghi lễ, hình thức buổi lễ",
      syn: "典礼",
    },
    {
      zh: "一致",
      py: "yízhì",
      hv: "nhất trí",
      vi: "thống nhất, giống nhau",
      syn: "一样, 相同",
    },
    {
      zh: "拖",
      py: "tuō",
      hv: "tha",
      vi: "kéo dài, trì hoãn",
      syn: "推迟, 拖延",
    },
    {
      zh: "主张",
      py: "zhǔzhāng",
      hv: "chủ trương",
      vi: "chủ trương, đề xướng",
      syn: "提倡",
    },
    {
      zh: "极力",
      py: "jílì",
      hv: "cực lực",
      vi: "hết sức, dốc toàn lực",
      syn: "竭力, 尽力",
    },
    {
      zh: "酒席",
      py: "jiǔxí",
      hv: "tửu tịch",
      vi: "tiệc rượu, tiệc cưới",
      syn: "宴席",
    },
    {
      zh: "像样",
      py: "xiàngyàng",
      hv: "tượng dạng",
      vi: "ra dáng, đạt tiêu chuẩn",
      syn: "体面",
    },
    {
      zh: "笑话",
      py: "xiàohua",
      hv: "tiếu thoại",
      vi: "(động từ) cười chê, chê cười",
      syn: "嘲笑, 看不起",
    },
    {
      zh: "实惠",
      py: "shíhuì",
      hv: "thực huệ",
      vi: "thiết thực, lợi ích thực tế",
      syn: "实用, 实际",
    },
    {
      zh: "莫名其妙",
      py: "mò míng qí miào",
      hv: "mạc danh kỳ diệu",
      vi: "khó hiểu, chẳng ra làm sao",
      syn: "不可思议",
    },
    {
      zh: "钞票",
      py: "chāopiào",
      hv: "sao phiếu",
      vi: "tiền giấy, tiền mặt",
      syn: "现金, 纸币",
    },
  ],
  ex1: [
    { q: "到底", opts: ["到最底下", "最后", "到终点", "最下面"], a: 1 },
    { q: "仪式", opts: ["形式", "礼物", "费用", "问题"], a: 0 },
    { q: "一致", opts: ["同意", "一起", "一样", "到一个地方"], a: 2 },
    {
      q: "极力",
      opts: ["最大的力量", "用尽一切力量", "最后的力量", "用最高的力量"],
      a: 1,
    },
    {
      q: "像样",
      opts: ["像规定的那样", "非常标准", "达到一定的标准", "样子很好看"],
      a: 0,
    },
    {
      q: "笑话",
      opts: ["大声地笑", "说有意思的话", "看不起", "笑着说话"],
      a: 2,
    },
    {
      q: "实惠",
      opts: ["真实的好处", "好的结果", "实际的好处", "实实在在的话"],
      a: 2,
    },
    {
      q: "莫名其妙",
      opts: [
        "没有名字所以不知道它好在什么地方",
        "不要说它好在什么地方",
        "因为没有名字所以特别美妙",
        "没有人能明白它好在什么地方",
      ],
      a: 3,
    },
  ],
  ex2: [
    {
      q: "这篇课文写的是",
      opts: [
        "堂弟怎么举行婚礼",
        "收到堂弟的信以后的想法",
        "婶婶终于赢了",
        "给堂弟送什么结婚礼物",
      ],
      a: 1,
    },
    {
      q: "堂弟给我写信是为了",
      opts: [
        "请我参加婚礼",
        "告诉我婶婶赢了",
        "告诉我他们想旅行结婚",
        "让我给他们送礼",
      ],
      a: 0,
    },
    {
      q: "堂弟和婶婶意见不一致是因为",
      opts: [
        "堂弟半年前就“登记”了",
        "婚礼春节才能举行",
        "对别人送的礼物看法不同",
        "对婚礼的形式看法不同",
      ],
      a: 3,
    },
    {
      q: "婶婶极力主张办酒席,是因为",
      opts: [
        "她只有一个儿子",
        "担心别人笑话",
        "只有办了酒席婚礼才能举行",
        "这样可以多收一些礼物",
      ],
      a: 1,
    },
    {
      q: "我打算给堂弟送什么?",
      opts: ["一幅油画", "莫名其妙的玩意儿", "实惠", "钱"],
      a: 3,
    },
  ],
  ex3: [
    { q: "春节时,堂弟将在燕京饭店举行婚礼。", a: true },
    { q: "婶婶一直希望在燕京饭店举行婚礼。", a: false },
    { q: "堂弟的婚礼推后了半年。", a: true },
    { q: "婶婶不想让堂弟结婚。", a: false },
    { q: "关于婚礼,堂弟和婶婶的想法不一样。", a: true },
    { q: "旅行结婚比较贵。", a: false },
    { q: "我不想参加堂弟的婚礼。", a: false },
    { q: "油画一般都很贵。", a: true },
    { q: "婶婶也懂艺术。", a: false },
    { q: "最后我决定送给婶婶一些钱。", a: false },
  ],
  ex5: [
    "堂弟的婚礼为什么一直拖到了春节?",
    "旅行结婚的好处是什么?",
    "婶婶希望怎样举行婚礼?",
    "为什么我想送油画?",
  ],
};

export default function Lesson1() {
  return <LessonViewer lesson={lesson} />;
}
