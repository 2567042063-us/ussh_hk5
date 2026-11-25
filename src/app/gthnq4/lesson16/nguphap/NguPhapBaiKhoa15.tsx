"use client";

import { useState, type ReactNode } from "react";

type Sentence = {
  chinese: string;
  pinyin: string;
  vietnamese: string;
  /** Các cụm có 着 cần tô sáng, theo thứ tự xuất hiện trong câu */
  marks?: string[];
  /** Dòng dẫn (ngữ cảnh) đặt trong ngoặc */
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

const lessons: Lesson[] = [
  {
    title: {
      chinese: "（一）会议厅的门开着呢",
      pinyin: "Huìyìtīng de mén kāizhe ne",
      vietnamese: "Cửa phòng hội nghị đang mở đấy",
      marks: ["开着呢"],
    },
    sentences: [
      {
        chinese: "（玛丽和麦克到会议中心去找一个朋友，他们在前台问服务员……）",
        pinyin:
          "(Mǎlì hé Màikè dào huìyì zhōngxīn qù zhǎo yí ge péngyou, tāmen zài qiántái wèn fúwùyuán……)",
        vietnamese:
          "(Mary và Mike đến trung tâm hội nghị tìm một người bạn, họ hỏi nhân viên ở quầy lễ tân……)",
        context: true,
      },
      {
        chinese: "玛丽：请问，刚才进去一位女士，你看见没有？",
        pinyin: "Mǎlì: Qǐngwèn, gāngcái jìnqù yí wèi nǚshì, nǐ kànjiàn méiyǒu?",
        vietnamese:
          "Mary: Xin hỏi, vừa nãy có một người phụ nữ đi vào, anh có thấy không?",
      },
      {
        chinese: "服务员：什么女士？长得什么样？",
        pinyin: "Fúwùyuán: Shénme nǚshì? Zhǎng de shénme yàng?",
        vietnamese: "Nhân viên: Người phụ nữ nào? Trông như thế nào?",
      },
      {
        chinese:
          "玛丽：她个子高高的，大概有一米七左右，黄头发，大眼睛，戴着一副眼镜儿。",
        pinyin:
          "Mǎlì: Tā gèzi gāogāo de, dàgài yǒu yì mǐ qī zuǒyòu, huáng tóufa, dà yǎnjing, dàizhe yí fù yǎnjìngr.",
        vietnamese:
          "Mary: Cô ấy dáng cao cao, khoảng một mét bảy, tóc vàng, mắt to, đeo một cặp kính.",
        marks: ["戴着"],
      },
      {
        chinese: "上身穿着一件红色的西服，下边穿着一条黑色的裙子。",
        pinyin:
          "Shàngshēn chuānzhe yí jiàn hóngsè de xīfú, xiàbian chuānzhe yì tiáo hēisè de qúnzi.",
        vietnamese:
          "Phần trên mặc một chiếc áo vest màu đỏ, phần dưới mặc một chiếc váy màu đen.",
        marks: ["穿着", "穿着"],
      },
      {
        chinese: "服务员：是干什么的？",
        pinyin: "Fúwùyuán: Shì gàn shénme de?",
        vietnamese: "Nhân viên: Cô ấy làm nghề gì vậy?",
      },
      {
        chinese: "玛丽：是电视台的主持人。",
        pinyin: "Mǎlì: Shì diànshìtái de zhǔchírén.",
        vietnamese: "Mary: Là người dẫn chương trình của đài truyền hình.",
      },
      {
        chinese: "服务员：后边是不是还跟着两个小伙子，扛着摄像机？",
        pinyin:
          "Fúwùyuán: Hòubian shì bu shì hái gēnzhe liǎng ge xiǎohuǒzi, kángzhe shèxiàngjī?",
        vietnamese:
          "Nhân viên: Phía sau có phải còn có hai chàng trai đi theo, vác máy quay không?",
        marks: ["跟着", "扛着"],
      },
      {
        chinese: "玛丽：对。",
        pinyin: "Mǎlì: Duì.",
        vietnamese: "Mary: Đúng.",
      },
      {
        chinese: "服务员：会议厅的门开着呢，你们进去找吧。",
        pinyin: "Fúwùyuán: Huìyìtīng de mén kāizhe ne, nǐmen jìnqù zhǎo ba.",
        vietnamese:
          "Nhân viên: Cửa phòng hội nghị đang mở đấy, các bạn vào tìm đi.",
        marks: ["开着呢"],
      },
      {
        chinese: "玛丽：里边正开着会呢吗？",
        pinyin: "Mǎlì: Lǐbian zhèng kāizhe huì ne ma?",
        vietnamese: "Mary: Bên trong đang họp à?",
        marks: ["正开着", "呢"],
      },
      {
        chinese:
          "服务员：没有。你们看，是不是手里拿着麦克风，对着摄像机讲话的那位？",
        pinyin:
          "Fúwùyuán: Méiyǒu. Nǐmen kàn, shì bu shì shǒu li názhe màikèfēng, duìzhe shèxiàngjī jiǎnghuà de nà wèi?",
        vietnamese:
          "Nhân viên: Không. Các bạn xem, có phải người tay cầm micro, đang nói chuyện hướng về máy quay kia không?",
        marks: ["拿着", "对着"],
      },
      {
        chinese: "玛丽：对，就是她。他们正等着我们呢。",
        pinyin: "Mǎlì: Duì, jiù shì tā. Tāmen zhèng děngzhe wǒmen ne.",
        vietnamese: "Mary: Đúng, chính là cô ấy. Họ đang đợi chúng ta đấy.",
        marks: ["正等着", "呢"],
      },
      {
        chinese: "服务员：你们进去吧。",
        pinyin: "Fúwùyuán: Nǐmen jìnqù ba.",
        vietnamese: "Nhân viên: Các bạn vào đi.",
      },
      {
        chinese: "玛丽：谢谢啦！",
        pinyin: "Mǎlì: Xièxie la!",
        vietnamese: "Mary: Cảm ơn nhé!",
      },
      {
        chinese: "服务员：不客气。",
        pinyin: "Fúwùyuán: Bú kèqi.",
        vietnamese: "Nhân viên: Đừng khách sáo.",
      },
    ],
  },
  {
    title: {
      chinese: "（二）墙上贴着红双喜字",
      pinyin: "Qiáng shang tiēzhe hóng shuāng xǐ zì",
      vietnamese: "Trên tường dán chữ Song Hỷ màu đỏ",
      marks: ["贴着"],
    },
    sentences: [
      {
        chinese: "（麦克参加了一个中国朋友的婚礼……）",
        pinyin: "(Màikè cānjiā le yí ge Zhōngguó péngyou de hūnlǐ……)",
        vietnamese: "(Mike đã dự đám cưới của một người bạn Trung Quốc……)",
        context: true,
      },
      {
        chinese: "玛丽：你昨天去哪儿了？",
        pinyin: "Mǎlì: Nǐ zuótiān qù nǎr le?",
        vietnamese: "Mary: Hôm qua bạn đi đâu thế?",
      },
      {
        chinese: "麦克：张东带我去参加了一个中国人的婚礼。",
        pinyin:
          "Màikè: Zhāng Dōng dài wǒ qù cānjiā le yí ge Zhōngguórén de hūnlǐ.",
        vietnamese:
          "Mike: Trương Đông dẫn mình đi dự một đám cưới của người Trung Quốc.",
      },
      {
        chinese: "玛丽：怎么样？听说中国人的婚礼很热闹。",
        pinyin: "Mǎlì: Zěnmeyàng? Tīngshuō Zhōngguórén de hūnlǐ hěn rènao.",
        vietnamese:
          "Mary: Thế nào? Nghe nói đám cưới của người Trung Quốc rất náo nhiệt.",
      },
      {
        chinese: "麦克：是！我是第一次参加这样的婚礼。",
        pinyin: "Màikè: Shì! Wǒ shì dì-yī cì cānjiā zhèyàng de hūnlǐ.",
        vietnamese: "Mike: Đúng vậy! Mình lần đầu dự đám cưới như thế này.",
      },
      {
        chinese: "屋子里挂着大红灯笼，墙上贴着一个很大的红双喜字。",
        pinyin:
          "Wūzi li guàzhe dà hóng dēnglong, qiáng shang tiēzhe yí ge hěn dà de hóng shuāng xǐ zì.",
        vietnamese:
          "Trong phòng treo đèn lồng đỏ lớn, trên tường dán một chữ Song Hỷ đỏ rất to.",
        marks: ["挂着", "贴着"],
      },
      {
        chinese: "桌子上摆着很多酒和菜。",
        pinyin: "Zhuōzi shang bǎizhe hěn duō jiǔ hé cài.",
        vietnamese: "Trên bàn bày rất nhiều rượu và thức ăn.",
        marks: ["摆着"],
      },
      {
        chinese: "新娘长得很漂亮，穿着一件红棉袄，头上还戴着红花。",
        pinyin:
          "Xīnniáng zhǎng de hěn piàoliang, chuānzhe yí jiàn hóng mián'ǎo, tóu shang hái dàizhe hóng huā.",
        vietnamese:
          "Cô dâu rất xinh, mặc một chiếc áo bông đỏ, trên đầu còn cài hoa đỏ.",
        marks: ["穿着", "戴着"],
      },
      {
        chinese: "新郎是一个帅小伙儿，穿着一身深蓝色的西服，系着红领带。",
        pinyin:
          "Xīnláng shì yí ge shuài xiǎohuǒr, chuānzhe yì shēn shēnlánsè de xīfú, jìzhe hóng lǐngdài.",
        vietnamese:
          "Chú rể là một chàng trai đẹp trai, mặc một bộ vest xanh đậm, thắt cà vạt đỏ.",
        marks: ["穿着", "系着"],
      },
      {
        chinese: "他们笑着对我们说：“欢迎！欢迎！”",
        pinyin: "Tāmen xiàozhe duì wǒmen shuō: “Huānyíng! Huānyíng!”",
        vietnamese: "Họ cười nói với chúng mình: “Hoan nghênh! Hoan nghênh!”",
        marks: ["笑着"],
      },
      {
        chinese: "新娘热情地请客人吃糖，新郎忙着给客人倒喜酒。",
        pinyin:
          "Xīnniáng rèqíng de qǐng kèrén chī táng, xīnláng mángzhe gěi kèrén dào xǐjiǔ.",
        vietnamese:
          "Cô dâu nhiệt tình mời khách ăn kẹo, chú rể bận rót rượu mừng cho khách.",
        marks: ["忙着"],
      },
      {
        chinese: "孩子们不停地说着、笑着，热热闹闹的，气氛非常好。",
        pinyin:
          "Háizimen bù tíng de shuōzhe, xiàozhe, rèrènàonào de, qìfēn fēicháng hǎo.",
        vietnamese:
          "Bọn trẻ nói cười không ngớt, rộn ràng náo nhiệt, không khí rất tuyệt.",
        marks: ["说着", "笑着"],
      },
      {
        chinese: "玛丽：“喜酒”是什么酒？",
        pinyin: "Mǎlì: “Xǐjiǔ” shì shénme jiǔ?",
        vietnamese: "Mary: “Hỷ tửu” (rượu mừng) là rượu gì vậy?",
      },
      {
        chinese: "麦克：结婚时喝的酒中国人叫喜酒，吃的糖叫喜糖。",
        pinyin:
          "Màikè: Jiéhūn shí hē de jiǔ Zhōngguórén jiào xǐjiǔ, chī de táng jiào xǐtáng.",
        vietnamese:
          "Mike: Rượu uống lúc kết hôn người Trung Quốc gọi là rượu mừng, kẹo ăn gọi là kẹo mừng.",
      },
      {
        chinese:
          "所以，中国人要问“什么时候吃你的喜糖啊”，就是问你什么时候结婚。",
        pinyin:
          "Suǒyǐ, Zhōngguórén yào wèn “shénme shíhou chī nǐ de xǐtáng a”, jiù shì wèn nǐ shénme shíhou jiéhūn.",
        vietnamese:
          "Vì vậy, khi người Trung Quốc hỏi “Bao giờ được ăn kẹo mừng của bạn thế”, nghĩa là hỏi bạn khi nào kết hôn.",
      },
      {
        chinese: "玛丽：是吗？",
        pinyin: "Mǎlì: Shì ma?",
        vietnamese: "Mary: Vậy à?",
      },
    ],
  },
];

const grammar: GrammarPoint[] = [
  {
    title: "1. Câu tồn hiện: nơi chốn + V着 + số lượng + danh từ",
    formula: "Nơi chốn + V着 + (số lượng từ) + danh từ",
    explanation:
      "Nói ở một nơi nào đó có người/vật đang ở trạng thái gì. Động từ thường là những động từ để lại trạng thái như 挂 (treo), 贴 (dán), 摆 (bày), 放 (để), 写 (viết), 站 (đứng), 坐 (ngồi). Người/vật đứng sau động từ, thường là cái chưa xác định (một…, nhiều…). 着 ở đây không dịch là “đang” mà chỉ trạng thái vẫn còn nguyên ở đó.",
    examples: [
      {
        chinese: "墙上贴着一个很大的红双喜字。",
        pinyin: "Qiáng shang tiēzhe yí ge hěn dà de hóng shuāng xǐ zì.",
        vietnamese: "Trên tường dán một chữ Song Hỷ đỏ rất to.",
        marks: ["贴着"],
      },
      {
        chinese: "屋子里挂着大红灯笼。",
        pinyin: "Wūzi li guàzhe dà hóng dēnglong.",
        vietnamese: "Trong phòng treo đèn lồng đỏ lớn.",
        marks: ["挂着"],
      },
      {
        chinese: "桌子上摆着很多酒和菜。",
        pinyin: "Zhuōzi shang bǎizhe hěn duō jiǔ hé cài.",
        vietnamese: "Trên bàn bày rất nhiều rượu và thức ăn.",
        marks: ["摆着"],
      },
      {
        chinese: "后边是不是还跟着两个小伙子？",
        pinyin: "Hòubian shì bu shì hái gēnzhe liǎng ge xiǎohuǒzi?",
        vietnamese: "Phía sau có phải còn có hai chàng trai đi theo không?",
        marks: ["跟着"],
      },
    ],
  },
  {
    title: "2. Mặc, đeo, cầm, vác: trạng thái trên người",
    formula: "Chủ ngữ + V着 + (số lượng từ) + tân ngữ",
    explanation:
      "Dùng với các động từ 穿 (mặc), 戴 (đeo, đội), 系 (thắt), 拿 (cầm), 扛 (vác)… để nói người đó đang trong trạng thái mặc/đeo/cầm cái gì. Có thể thêm nơi chốn phía trước như 手里 (trong tay), 头上 (trên đầu). Câu miêu tả ngoại hình kiểu này rất hay dùng với 着.",
    examples: [
      {
        chinese: "上身穿着一件红色的西服，下边穿着一条黑色的裙子。",
        pinyin:
          "Shàngshēn chuānzhe yí jiàn hóngsè de xīfú, xiàbian chuānzhe yì tiáo hēisè de qúnzi.",
        vietnamese:
          "Phần trên mặc một chiếc áo vest màu đỏ, phần dưới mặc một chiếc váy màu đen.",
        marks: ["穿着", "穿着"],
      },
      {
        chinese: "头上还戴着红花。",
        pinyin: "Tóu shang hái dàizhe hóng huā.",
        vietnamese: "Trên đầu còn cài hoa đỏ.",
        marks: ["戴着"],
      },
      {
        chinese: "系着红领带。",
        pinyin: "Jìzhe hóng lǐngdài.",
        vietnamese: "Thắt cà vạt đỏ.",
        marks: ["系着"],
      },
      {
        chinese: "手里拿着麦克风。",
        pinyin: "Shǒu li názhe màikèfēng.",
        vietnamese: "Trong tay cầm micro.",
        marks: ["拿着"],
      },
      {
        chinese: "扛着摄像机。",
        pinyin: "Kángzhe shèxiàngjī.",
        vietnamese: "Vác máy quay.",
        marks: ["扛着"],
      },
    ],
  },
  {
    title: "3. V着 + 呢: trạng thái đang giữ nguyên",
    formula: "…V着呢",
    explanation:
      "Nói trạng thái hiện tại vẫn đang như vậy. 呢 ở cuối câu làm lời xác nhận, nhắc cho người nghe biết. Trong bài, nhân viên nói cửa đang mở để ngầm bảo hai bạn cứ vào tìm.",
    examples: [
      {
        chinese: "会议厅的门开着呢。",
        pinyin: "Huìyìtīng de mén kāizhe ne.",
        vietnamese: "Cửa phòng hội nghị đang mở đấy.",
        marks: ["开着呢"],
      },
    ],
  },
  {
    title: "4. 正 + V着 + 呢: động tác đang diễn ra",
    formula: "正 (正在 / 在) + V着 (+ tân ngữ) + 呢",
    explanation:
      "Nhấn mạnh động tác đang diễn ra ngay lúc nói. 正/正在/在 đứng trước động từ, 着 đứng sau động từ, 呢 đứng cuối câu. Có thể dùng đủ cả ba hoặc chỉ dùng một vài thành phần. Câu hỏi 里边正开着会呢吗？ trong bài dùng thêm 吗 để hỏi.",
    examples: [
      {
        chinese: "他们正等着我们呢。",
        pinyin: "Tāmen zhèng děngzhe wǒmen ne.",
        vietnamese: "Họ đang đợi chúng ta đấy.",
        marks: ["正等着", "呢"],
      },
      {
        chinese: "里边正开着会呢吗？",
        pinyin: "Lǐbian zhèng kāizhe huì ne ma?",
        vietnamese: "Bên trong đang họp à?",
        marks: ["正开着", "呢"],
      },
    ],
  },
  {
    title: "5. V1着 + V2: cách thức đi kèm hành động",
    formula: "V1着 + V2",
    explanation:
      "Động từ thứ nhất có 着 chỉ trạng thái hoặc cách thức đi kèm khi thực hiện động từ thứ hai, tức vừa V1 vừa V2. 对着 + danh từ + V nghĩa là quay về phía cái gì đó mà làm.",
    examples: [
      {
        chinese: "他们笑着对我们说：“欢迎！欢迎！”",
        pinyin: "Tāmen xiàozhe duì wǒmen shuō: “Huānyíng! Huānyíng!”",
        vietnamese: "Họ cười nói với chúng mình: “Hoan nghênh! Hoan nghênh!”",
        marks: ["笑着"],
      },
      {
        chinese: "对着摄像机讲话",
        pinyin: "duìzhe shèxiàngjī jiǎnghuà",
        vietnamese: "nói chuyện hướng về máy quay",
        marks: ["对着"],
      },
    ],
  },
  {
    title: "6. 忙着 + V và V着、V着: bận làm, liên tục làm",
    formula: "忙着 + V  ·  V着、V着",
    explanation:
      "忙着 + V nghĩa là đang bận làm việc gì. Khi hai động từ cùng có 着 đi liền nhau (说着、笑着) thì chỉ nhiều hành động tiếp diễn cùng lúc; thêm 不停地 (không ngừng) để nhấn mạnh sự liên tục.",
    examples: [
      {
        chinese: "新郎忙着给客人倒喜酒。",
        pinyin: "Xīnláng mángzhe gěi kèrén dào xǐjiǔ.",
        vietnamese: "Chú rể bận rót rượu mừng cho khách.",
        marks: ["忙着"],
      },
      {
        chinese: "孩子们不停地说着、笑着。",
        pinyin: "Háizimen bù tíng de shuōzhe, xiàozhe.",
        vietnamese: "Bọn trẻ nói cười không ngớt.",
        marks: ["说着", "笑着"],
      },
    ],
  },
  {
    title: "7. Phủ định và nghi vấn (mở rộng, không có trong bài)",
    formula: "没(有) + V着  ·  V着吗？ / V着没有？",
    explanation:
      "Phủ định dùng 没(有) đặt trước động từ và giữ nguyên 着, không dùng 不. Câu hỏi dùng 吗 hoặc dạng chính phản V着没有.",
    examples: [
      {
        chinese: "墙上没挂着画。",
        pinyin: "Qiáng shang méi guàzhe huà.",
        vietnamese: "Trên tường không treo tranh.",
        marks: ["挂着"],
      },
      {
        chinese: "门开着吗？",
        pinyin: "Mén kāizhe ma?",
        vietnamese: "Cửa có đang mở không?",
        marks: ["开着"],
      },
      {
        chinese: "门开着没有？",
        pinyin: "Mén kāizhe méiyǒu?",
        vietnamese: "Cửa có đang mở không?",
        marks: ["开着"],
      },
    ],
  },
  {
    title: "8. So sánh 着 với 了 và 在 (mở rộng, không có trong bài)",
    formula: "V着: trạng thái  ·  V了: hoàn thành  ·  在V: đang diễn ra",
    explanation:
      "了 nói hành động đã xảy ra hoặc hoàn thành, còn 着 nói trạng thái sau hành động vẫn còn đó. 在 nhấn mạnh động tác đang diễn ra, còn 着 nhấn mạnh trạng thái đang được duy trì.",
    examples: [
      {
        chinese: "他穿着一件红衣服。",
        pinyin: "Tā chuānzhe yí jiàn hóng yīfu.",
        vietnamese: "Anh ấy đang mặc một chiếc áo đỏ (trạng thái).",
        marks: ["穿着"],
      },
      {
        chinese: "他穿了一件红衣服。",
        pinyin: "Tā chuān le yí jiàn hóng yīfu.",
        vietnamese: "Anh ấy đã mặc một chiếc áo đỏ (hành động đã xảy ra).",
      },
      {
        chinese: "他在等我们。",
        pinyin: "Tā zài děng wǒmen.",
        vietnamese: "Anh ấy đang đợi chúng ta (hành động đang diễn ra).",
      },
    ],
  },
];

export default function BaiKhoa15() {
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
    <main className="mx-auto max-w-3xl overflow-hidden text-slate-800">
      <section id="panel-text" aria-label="Bài khoá">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            aria-pressed={showPinyin}
            onClick={() => setShowPinyin((value) => !value)}
            className={pillClass(showPinyin)}
          >
            Pinyin
          </button>
          <button
            type="button"
            aria-pressed={showMeaning}
            onClick={() => setShowMeaning((value) => !value)}
            className={pillClass(showMeaning)}
          >
            Nghĩa
          </button>
          <button
            type="button"
            aria-pressed={highlighted}
            onClick={() => setHighlighted((value) => !value)}
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
              Vàng: 着
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
              <p className="text-sm text-slate-700">
                {lesson.title.vietnamese}
              </p>
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
                      sentence.context
                        ? "my-2 rounded-md bg-stone-100 px-3"
                        : ""
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
      </section>

      <section
        id="panel-grammar-zhe"
        aria-label="Ngữ pháp 着"
        className="border-t border-slate-200 p-4"
      >
        <h2 className="text-xl font-bold">
          Ngữ pháp: <span className="ztai__zh">着</span>{" "}
          <span className="text-base font-normal text-slate-500">zhe</span>
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          着 đặt sau động từ, đọc nhẹ (zhe). Nó cho biết một trạng thái hoặc một
          động tác đang tiếp diễn, đang được duy trì, khác với 了 là nhấn mạnh
          hành động đã xảy ra hoặc hoàn thành. Hai bài khoá có 21 chỗ dùng 着
          (chưa tính hai tiêu đề), chia thành các cách dùng dưới đây.
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
                    <p className="text-sm text-slate-600">
                      {example.vietnamese}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
