"use client";

/**
 * Bài tập chọn đáp án A/B/C/D (điền từ vào chỗ trống) kèm giải thích.
 * Component client độc lập cho Next.js (App Router) / React.
 *
 * Dùng:  import BaiTapChonDapAn from "@/components/BaiTapChonDapAn";
 *        <BaiTapChonDapAn />
 *
 * CSS được nhúng ngay trong file (mọi class có tiền tố "bt-", nằm trong vùng .bt)
 * nên không cần file CSS riêng và không đụng style toàn cục.
 */
import { Fragment, useCallback, useEffect, useState } from "react";

/* ───────────────────────── Kiểu dữ liệu ───────────────────────── */

/** ans: đáp án đúng (trùng một lựa chọn); fill: chữ điền vào câu; exp: giải thích */
type Blank = { ans: string; fill: string; exp: string };
/** [bộ bài, nhãn câu, câu có chỗ trống {1} {2}…, pinyin, bản dịch, các chỗ trống] */
type Item = [number, string, string, string, string, Blank[]];
type Group = { id: number; name: string; opts: string[]; note: string };
/** Mỗi chỗ trống của mỗi câu là một câu hỏi */
type Unit = { item: Item; bi: number; retry: boolean };

/* ───────────────────────── Dữ liệu ───────────────────────── */

const GROUPS: Group[] = [
  {
    id: 1,
    name: "Bài 1A: 不 / 没(有)",
    opts: ["不", "没(有)", "别", "不是"],
    note: "不: phủ định ý muốn, thói quen, tương lai, trạng thái (知道, 会, 想…). 没(有): phủ định hành động đã/chưa xảy ra. 别: đừng (cấm đoán). 不是: phủ định “là”.",
  },
  {
    id: 2,
    name: "Bài 1B: 又 / 再",
    opts: ["又", "再", "还", "也"],
    note: "又: lặp lại việc đã xảy ra rồi. 再: lặp lại việc chưa xảy ra (dự định, mong muốn, yêu cầu). 还: vẫn, còn. 也: cũng. Hai từ 还, 也 không diễn đạt nghĩa “lại”.",
  },
  {
    id: 3,
    name: "Bài 2: 就 / 才",
    opts: ["就", "才"],
    note: "就: sớm, nhanh, dễ, hoặc “ngay sau đó”. 才: muộn, chậm, khó, hoặc “mãi mới”.",
  },
  {
    id: 4,
    name: "Bài 3: 就 / 才",
    opts: ["就", "才"],
    note: "就: sớm, nhanh, dễ, hoặc “ngay sau đó”. 才: muộn, chậm, khó, hoặc “mãi mới”.",
  },
];

const ITEMS: Item[] = [
  [
    1,
    "(1)",
    "我明天{1}去超市，我要去书店。",
    "Wǒ míngtiān bù qù chāoshì, wǒ yào qù shūdiàn.",
    "Ngày mai tôi không đi siêu thị, tôi muốn đi hiệu sách.",
    [
      {
        ans: "不",
        fill: "不",
        exp: "“明天” là việc trong tương lai, thể hiện ý muốn chủ quan (không muốn đi) nên dùng 不.",
      },
    ],
  ],
  [
    1,
    "(2)",
    "昨天我{1}去商店，我去书店了。",
    "Zuótiān wǒ méiyǒu qù shāngdiàn, wǒ qù shūdiàn le.",
    "Hôm qua tôi không đi cửa hàng, tôi đi hiệu sách rồi.",
    [
      {
        ans: "没(有)",
        fill: "没有",
        exp: "“昨天” là quá khứ, phủ định một việc đã không xảy ra nên dùng 没有 (没). Vế sau “我去书店了” cũng ở quá khứ.",
      },
    ],
  ],
  [
    1,
    "(3)",
    "A：你觉得昨天晚上的电影怎么样？\nB：我{1}看，{2}知道。",
    "A: Nǐ juéde zuótiān wǎnshang de diànyǐng zěnmeyàng?\nB: Wǒ méi kàn, bù zhīdào.",
    "A: Bạn thấy bộ phim tối qua thế nào?\nB: Tôi không xem nên không biết.",
    [
      {
        ans: "没(有)",
        fill: "没",
        exp: "Phim tối qua là việc đã qua; “không xem” là hành động đã không xảy ra nên dùng 没 + 看.",
      },
      {
        ans: "不",
        fill: "不",
        exp: "知道 là động từ chỉ trạng thái; phủ định 知道 luôn dùng 不 (不知道), không nói 没知道.",
      },
    ],
  ],
  [
    1,
    "(4)",
    "我{1}学太极拳，{2}会打。",
    "Wǒ méi xué tàijíquán, bú huì dǎ.",
    "Tôi chưa học Thái cực quyền, nên không biết đánh.",
    [
      {
        ans: "没(有)",
        fill: "没",
        exp: "没学 = chưa từng học (phủ định hành động chưa xảy ra).",
      },
      {
        ans: "不",
        fill: "不",
        exp: "会 (biết, có khả năng) được phủ định bằng 不: 不会.",
      },
    ],
  ],
  [
    1,
    "(5)",
    "昨天你去{1}去大使馆？",
    "Zuótiān nǐ qù méi qù dàshǐguǎn?",
    "Hôm qua bạn có đi đại sứ quán không (đã đi hay chưa)?",
    [
      {
        ans: "没(有)",
        fill: "没",
        exp: "Hỏi về việc trong quá khứ (昨天) theo dạng V没V: 去没去 (đã đi hay chưa). Dạng này dùng 没, không dùng 不.",
      },
    ],
  ],
  [
    1,
    "(6)",
    "明天你去{1}去看她？",
    "Míngtiān nǐ qù bu qù kàn tā?",
    "Ngày mai bạn có đi thăm cô ấy không?",
    [
      {
        ans: "不",
        fill: "不",
        exp: "“明天” là tương lai, hỏi ý định: 去不去 (đi hay không đi).",
      },
    ],
  ],
  [
    1,
    "(7)",
    "玛丽，你想{1}想家？",
    "Mǎlì, nǐ xiǎng bu xiǎng jiā?",
    "Mary, bạn có nhớ nhà không?",
    [
      {
        ans: "不",
        fill: "不",
        exp: "想 là cảm xúc/ý nguyện nên hỏi bằng dạng V不V: 想不想.",
      },
    ],
  ],
  [
    1,
    "(8)",
    "A：你常常给你妈妈打电话吗？\nB：我{1}常给她打电话，常给她发微信。",
    "A: Nǐ chángcháng gěi nǐ māma dǎ diànhuà ma?\nB: Wǒ bù cháng gěi tā dǎ diànhuà, cháng gěi tā fā wēixìn.",
    "A: Bạn có hay gọi điện cho mẹ không?\nB: Tôi không hay gọi điện cho mẹ, mà hay nhắn WeChat cho mẹ.",
    [
      {
        ans: "不",
        fill: "不",
        exp: "不常 = không thường xuyên. Phủ định tần suất, thói quen dùng 不.",
      },
    ],
  ],
  [
    2,
    "(1)",
    "上次比赛我们赢了，这次{1}赢了。",
    "Shàng cì bǐsài wǒmen yíng le, zhè cì yòu yíng le.",
    "Lần trước thi đấu chúng tôi thắng, lần này lại thắng nữa.",
    [
      {
        ans: "又",
        fill: "又",
        exp: "Việc đã xảy ra (đã thắng, có 了) và lặp lại một lần nữa nên dùng 又.",
      },
    ],
  ],
  [
    2,
    "(2)",
    "这本词典很好，我已经买了一本，想{1}买一本给我弟弟。",
    "Zhè běn cídiǎn hěn hǎo, wǒ yǐjīng mǎi le yì běn, xiǎng zài mǎi yì běn gěi wǒ dìdi.",
    "Quyển từ điển này rất tốt, tôi đã mua một quyển, muốn mua thêm một quyển cho em trai.",
    [
      {
        ans: "再",
        fill: "再",
        exp: "想… là mong muốn, việc chưa xảy ra nên dùng 再.",
      },
    ],
  ],
  [
    2,
    "(3)",
    "我昨天已经去了，今天不想{1}去了。",
    "Wǒ zuótiān yǐjīng qù le, jīntiān bù xiǎng zài qù le.",
    "Hôm qua tôi đã đi rồi, hôm nay không muốn đi nữa.",
    [
      {
        ans: "再",
        fill: "再",
        exp: "“不想… 去了” nói về ý muốn lặp lại trong tương lai nên dùng 再 (不想再…了: không muốn… nữa).",
      },
    ],
  ],
  [
    2,
    "(4)",
    "张东刚才给你打电话了，你不在，他说过一会儿{1}打。",
    "Zhāng Dōng gāngcái gěi nǐ dǎ diànhuà le, nǐ bú zài, tā shuō guò yíhuìr zài dǎ.",
    "Trương Đông vừa gọi điện cho bạn, bạn không có nhà, anh ấy nói lát nữa sẽ gọi lại.",
    [
      {
        ans: "再",
        fill: "再",
        exp: "“过一会儿” là việc sẽ làm trong tương lai (chưa xảy ra) nên dùng 再.",
      },
    ],
  ],
  [
    2,
    "(5)",
    "生词我已经预习了，还要{1}复习复习课文。",
    "Shēngcí wǒ yǐjīng yùxí le, hái yào zài fùxí fùxí kèwén.",
    "Từ mới tôi đã chuẩn bị rồi, còn phải ôn lại bài khóa nữa.",
    [
      {
        ans: "再",
        fill: "再",
        exp: "还要… chỉ việc sẽ làm tiếp, chưa xảy ra nên dùng 再.",
      },
    ],
  ],
  [
    2,
    "(6)",
    "我{1}用用你的车好吗？",
    "Wǒ zài yòngyong nǐ de chē hǎo ma?",
    "Tôi dùng xe của bạn một lần nữa được không?",
    [
      {
        ans: "再",
        fill: "再",
        exp: "Đây là lời xin phép làm một việc lần nữa trong tương lai nên dùng 再.",
      },
    ],
  ],
  [
    2,
    "(7)",
    "我{1}买了一个手机。",
    "Wǒ yòu mǎi le yí ge shǒujī.",
    "Tôi lại mua thêm một chiếc điện thoại.",
    [
      {
        ans: "又",
        fill: "又",
        exp: "Có 了, hành động đã xảy ra và lặp lại nên dùng 又.",
      },
    ],
  ],
  [
    2,
    "(8)",
    "我觉得一年时间太短了，我想{1}学一年。",
    "Wǒ juéde yì nián shíjiān tài duǎn le, wǒ xiǎng zài xué yì nián.",
    "Tôi thấy một năm quá ngắn, tôi muốn học thêm một năm nữa.",
    [
      {
        ans: "再",
        fill: "再",
        exp: "想… là mong muốn, việc chưa xảy ra nên dùng 再.",
      },
    ],
  ],
  [
    3,
    "(1)",
    "她每天都六点半起床，今天六点钟{1}起床了。",
    "Tā měi tiān dōu liù diǎn bàn qǐchuáng, jīntiān liù diǎn zhōng jiù qǐchuáng le.",
    "Mỗi ngày cô ấy 6 giờ rưỡi mới dậy, hôm nay 6 giờ đã dậy rồi.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "6 giờ sớm hơn thường lệ (6 giờ rưỡi), người nói thấy sớm nên dùng 就.",
      },
    ],
  ],
  [
    3,
    "(2)",
    "八点钟上课，他八点半{1}来。",
    "Bā diǎn zhōng shàngkè, tā bā diǎn bàn cái lái.",
    "8 giờ vào học, 8 giờ rưỡi anh ấy mới đến.",
    [
      {
        ans: "才",
        fill: "才",
        exp: "8 giờ rưỡi muộn hơn giờ vào học, người nói thấy muộn nên dùng 才.",
      },
    ],
  ],
  [
    3,
    "(3)",
    "电影七点半{1}开演呢，你怎么现在{2}来了？",
    "Diànyǐng qī diǎn bàn cái kāiyǎn ne, nǐ zěnme xiànzài jiù lái le?",
    "Phim 7 giờ rưỡi mới chiếu, sao bây giờ bạn đã đến rồi?",
    [
      {
        ans: "才",
        fill: "才",
        exp: "“七点半才开演” nhấn mạnh còn lâu mới chiếu (người nói thấy còn sớm).",
      },
      {
        ans: "就",
        fill: "就",
        exp: "“现在就来了” là đến sớm hơn cần thiết nên dùng 就.",
      },
    ],
  ],
  [
    3,
    "(4)",
    "飞机下午两点{1}起飞，上午十点他们{2}去机场了。",
    "Fēijī xiàwǔ liǎng diǎn cái qǐfēi, shàngwǔ shí diǎn tāmen jiù qù jīchǎng le.",
    "Máy bay 2 giờ chiều mới cất cánh, 10 giờ sáng họ đã đi sân bay rồi.",
    [
      {
        ans: "才",
        fill: "才",
        exp: "2 giờ chiều còn lâu mới bay, thấy muộn nên dùng 才.",
      },
      {
        ans: "就",
        fill: "就",
        exp: "10 giờ sáng đã đi sân bay là rất sớm nên dùng 就.",
      },
    ],
  ],
  [
    3,
    "(5)",
    "我觉得听力很难，同学们听一遍{1}懂了，我听两三遍{2}能懂。",
    "Wǒ juéde tīnglì hěn nán, tóngxuémen tīng yí biàn jiù dǒng le, wǒ tīng liǎng sān biàn cái néng dǒng.",
    "Tôi thấy nghe hiểu rất khó, các bạn nghe một lượt là hiểu, tôi nghe hai ba lượt mới hiểu được.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "“听一遍就懂了”: nghe một lượt là hiểu, nhanh và dễ nên dùng 就.",
      },
      {
        ans: "才",
        fill: "才",
        exp: "“听两三遍才能懂”: phải nghe nhiều lần, chậm và khó nên dùng 才.",
      },
    ],
  ],
  [
    3,
    "(6)",
    "昨天晚上我十二点{1}睡觉。",
    "Zuótiān wǎnshang wǒ shí'èr diǎn cái shuìjiào.",
    "Tối qua 12 giờ tôi mới đi ngủ.",
    [
      {
        ans: "才",
        fill: "才",
        exp: "12 giờ đêm là muộn, thể hiện “mãi mới” nên dùng 才.",
      },
    ],
  ],
  [
    3,
    "(7)",
    "他上午下了课{1}去医院了。",
    "Tā shàngwǔ xià le kè jiù qù yīyuàn le.",
    "Sáng nay tan học xong là anh ấy đi bệnh viện ngay.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "Hai hành động nối tiếp nhau: tan học xong làm ngay việc khác, dùng 就 (ngay sau đó).",
      },
    ],
  ],
  [
    3,
    "(8)",
    "坐飞机去两个多小时{1}到了，坐火车十个小时{2}能到。",
    "Zuò fēijī qù liǎng ge duō xiǎoshí jiù dào le, zuò huǒchē shí ge xiǎoshí cái néng dào.",
    "Đi máy bay hơn hai tiếng là đến, đi tàu hỏa mười tiếng mới đến được.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "“两个多小时就到了”: người nói thấy nhanh nên dùng 就.",
      },
      {
        ans: "才",
        fill: "才",
        exp: "“十个小时才能到”: người nói thấy lâu nên dùng 才.",
      },
    ],
  ],
  [
    4,
    "1.",
    "小明很喜欢上汉语课，他觉得四十五分钟的课很快{1}过去了，小强不喜欢上课，他总是说：“怎么还有五分钟{2}下课呢？”",
    "Xiǎo Míng hěn xǐhuan shàng Hànyǔ kè, tā juéde sìshíwǔ fēnzhōng de kè hěn kuài jiù guòqù le, Xiǎo Qiáng bù xǐhuan shàngkè, tā zǒngshì shuō: “Zěnme hái yǒu wǔ fēnzhōng cái xià kè ne?”",
    "Tiểu Minh rất thích học tiếng Hán, cậu thấy tiết 45 phút trôi qua rất nhanh; Tiểu Cường không thích học, cậu luôn nói: “Sao còn 5 phút nữa mới tan học vậy?”",
    [
      {
        ans: "就",
        fill: "就",
        exp: "“很快就过去了”: cảm thấy thời gian trôi nhanh nên dùng 就.",
      },
      {
        ans: "才",
        fill: "才",
        exp: "“还有五分钟才下课”: cảm thấy còn lâu mới tan học nên dùng 才.",
      },
    ],
  ],
  [
    4,
    "2.",
    "今天考试，小马很快{1}能做完了，小王做了半天{2}做了一两题。",
    "Jīntiān kǎoshì, Xiǎo Mǎ hěn kuài jiù néng zuò wán le, Xiǎo Wáng zuò le bàntiān cái zuò le yì liǎng tí.",
    "Hôm nay thi, Tiểu Mã chẳng mấy chốc đã làm xong, Tiểu Vương làm cả buổi mới được một hai câu.",
    [
      { ans: "就", fill: "就", exp: "“很快就能做完”: nhanh, dễ nên dùng 就." },
      {
        ans: "才",
        fill: "才",
        exp: "“做了半天才做了一两题”: làm lâu mà được ít nên dùng 才.",
      },
    ],
  ],
  [
    4,
    "3.",
    "丽丽下了班{1}去约会，约会完{2}回家。",
    "Lìli xià le bān jiù qù yuēhuì, yuēhuì wán cái huí jiā.",
    "Lệ Lệ tan làm là đi hẹn hò ngay, hẹn hò xong mới về nhà.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "“下了班就去约会”: hai việc nối tiếp nhau liền mạch nên dùng 就.",
      },
      {
        ans: "才",
        fill: "才",
        exp: "“约会完才回家”: về muộn, mãi mới về nên dùng 才.",
      },
    ],
  ],
  [
    4,
    "4.",
    "普通邮件要两天{1}到。",
    "Pǔtōng yóujiàn yào liǎng tiān cái dào.",
    "Thư thường phải hai ngày mới đến.",
    [
      {
        ans: "才",
        fill: "才",
        exp: "“要两天才到”: người nói thấy lâu, chậm nên dùng 才.",
      },
    ],
  ],
  [
    4,
    "5.",
    "从这儿走路十分钟{1}到银行了，非常近。",
    "Cóng zhèr zǒulù shí fēnzhōng jiù dào yínháng le, fēicháng jìn.",
    "Từ đây đi bộ mười phút là tới ngân hàng, rất gần.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "“非常近” cho thấy thời gian ngắn, nhanh nên dùng 就. (Đáp án gốc trong tài liệu ghi “到”, có thể là gõ nhầm của 就.)",
      },
    ],
  ],
  [
    4,
    "6.",
    "你怎么现在{1}来？晚会都快结束了。",
    "Nǐ zěnme xiànzài cái lái? Wǎnhuì dōu kuài jiéshù le.",
    "Sao bây giờ bạn mới đến? Buổi tiệc sắp kết thúc rồi.",
    [
      {
        ans: "才",
        fill: "才",
        exp: "Đến muộn (tiệc sắp kết thúc) nên dùng 才 (mãi mới).",
      },
    ],
  ],
  [
    4,
    "7.",
    "小李每天工作到八九点{1}有空吃晚饭。",
    "Xiǎo Lǐ měi tiān gōngzuò dào bā jiǔ diǎn cái yǒu kòng chī wǎnfàn.",
    "Mỗi ngày Tiểu Lý làm việc đến 8–9 giờ mới có thời gian ăn tối.",
    [
      {
        ans: "才",
        fill: "才",
        exp: "8–9 giờ tối mới rảnh là muộn nên dùng 才.",
      },
    ],
  ],
  [
    4,
    "8.",
    "八点上班，七点多他{1}到公司了。",
    "Bā diǎn shàngbān, qī diǎn duō tā jiù dào gōngsī le.",
    "8 giờ vào làm, hơn 7 giờ anh ấy đã tới công ty rồi.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "Hơn 7 giờ đã tới, sớm hơn giờ làm nên dùng 就.",
      },
    ],
  ],
  [
    4,
    "9.",
    "这件事，你找丽丽，不出半个小时保证{1}能办好。",
    "Zhè jiàn shì, nǐ zhǎo Lìli, bù chū bàn ge xiǎoshí bǎozhèng jiù néng bànhǎo.",
    "Việc này bạn nhờ Lệ Lệ, trong vòng nửa tiếng đảm bảo làm xong.",
    [
      {
        ans: "就",
        fill: "就",
        exp: "“不出半个小时” cho thấy nhanh, dễ nên dùng 就.",
      },
    ],
  ],
  [
    4,
    "10.",
    "现在{1}四点半，你就下班回家了？不怕老板骂啊？",
    "Xiànzài cái sì diǎn bàn, nǐ jiù xiàbān huí jiā le? Bú pà lǎobǎn mà a?",
    "Bây giờ mới 4 rưỡi mà bạn đã tan làm về nhà rồi? Không sợ sếp mắng à?",
    [
      {
        ans: "才",
        fill: "才",
        exp: "“现在才四点半”: người nói thấy còn sớm (chưa đến giờ tan làm) nên dùng 才.",
      },
    ],
  ],
];

/* ───────────────────────── Hàm tiện ích ───────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LETTERS = ["A", "B", "C", "D"];
const groupOf = (id: number) => GROUPS.find((g) => g.id === id) as Group;

/** Ghép câu hoàn chỉnh (điền đủ các chỗ trống) */
const fullSentence = (it: Item) =>
  it[2].replace(/\{(\d)\}/g, (_, n) => it[5][Number(n) - 1].fill);

/** Xuống dòng cho các câu hội thoại */
function Lines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((l, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {l}
        </Fragment>
      ))}
    </>
  );
}

/* ───────────────────────── Component ───────────────────────── */

export default function BaiTapChonDapAn() {
  const [group, setGroup] = useState("");
  const [random, setRandom] = useState(false);

  const [pool, setPool] = useState<Unit[] | null>(null);
  const [total, setTotal] = useState(0);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);

  const [opts, setOpts] = useState<string[]>([]);
  const [picked, setPicked] = useState<string | null>(null);

  /** Chuẩn bị trạng thái cho một câu hỏi mới */
  const setup = useCallback((u: Unit | undefined) => {
    setPicked(null);
    if (!u) return;
    setOpts(shuffle(groupOf(u.item[0]).opts));
  }, []);

  /** Bắt đầu lượt mới theo bộ bài đã chọn */
  const start = useCallback(
    (g: string, rnd: boolean) => {
      let list = ITEMS.filter((it) => !g || it[0] === Number(g));
      if (rnd) list = shuffle(list);
      const p: Unit[] = list.flatMap((item) =>
        item[5].map((_, bi) => ({ item, bi, retry: false })),
      );
      setPool(p);
      setTotal(p.length);
      setQi(0);
      setScore(0);
      setup(p[0]);
    },
    [setup],
  );

  // Xáo trộn ở client sau khi mount để tránh lệch hydration
  useEffect(() => {
    start(group, random);
  }, [group, random, start]);

  const u = pool && qi < pool.length ? pool[qi] : null;
  const blank = u ? u.item[5][u.bi] : null;
  const checked = picked !== null;
  const ok = !!blank && picked === blank.ans;

  const next = () => {
    const n = qi + 1;
    setQi(n);
    setup(pool?.[n]);
  };

  /** Chọn đáp án: đúng ngay lần đầu thì +1 điểm, sai thì đưa câu xuống cuối để làm lại */
  const onPick = (o: string) => {
    if (!u || !blank || checked) return;
    setPicked(o);
    if (!u.retry) {
      if (o === blank.ans) setScore((s) => s + 1);
      else setPool((p) => [...(p ?? []), { ...u, retry: true }]);
    }
  };

  /** Câu có chỗ trống: các chỗ trước đã điền đúng, chỗ hiện tại tô màu theo lựa chọn */
  const renderSentence = (unit: Unit) => {
    const parts = unit.item[2].split(/(\{\d\})/);
    return parts.map((part, i) => {
      const m = part.match(/^\{(\d)\}$/);
      if (!m) return <Lines key={i} text={part} />;
      const idx = Number(m[1]) - 1;
      const b = unit.item[5][idx];
      if (idx < unit.bi)
        return (
          <span key={i} className="bt-fill">
            {b.fill}
          </span>
        );
      if (idx === unit.bi) {
        if (picked === null)
          return (
            <span key={i} className="bt-bl">
              &nbsp;
            </span>
          );
        return (
          <span key={i} className={"bt-bl " + (ok ? "bt-bl-ok" : "bt-bl-no")}>
            {ok ? b.fill : picked}
          </span>
        );
      }
      return (
        <span key={i} className="bt-bl">
          &nbsp;
        </span>
      );
    });
  };

  return (
    <div className="bt">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bt-w rounded-lg bg-white p-5 shadow dark:bg-slate-700">
        <h1>Bài tập chọn đáp án</h1>
        <p className="bt-sub">
          {total || ITEMS.reduce((n, it) => n + it[5].length, 0)} câu hỏi. Chọn
          từ thích hợp điền vào chỗ trống, sau khi chọn sẽ có giải thích.
        </p>

        <div className="bt-opt">
          <span>Bộ bài:</span>
          <select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">Tất cả</option>
            {GROUPS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <label>
            <input
              type="checkbox"
              checked={random}
              onChange={(e) => setRandom(e.target.checked)}
            />{" "}
            Xáo trộn thứ tự câu
          </label>
        </div>

        {/* Màn hình tổng kết */}
        {pool && !u && (
          <div className="bt-q bt-sc">
            <span className="bt-score">
              {score}/{total}
            </span>
            Câu đúng ngay lần đầu.
            <div className="bt-row" style={{ marginTop: 14 }}>
              <button
                type="button"
                className="bt-btn bt-pri"
                onClick={() => start(group, random)}
              >
                Làm lại
              </button>
            </div>
          </div>
        )}

        {u && blank && pool && (
          <div className="bt-q">
            <div className="bt-meta">
              <span className="bt-tag">
                {groupOf(u.item[0]).name.split(":")[0]} · {u.item[1]}
                {u.item[5].length > 1
                  ? ` · chỗ trống ${u.bi + 1}/${u.item[5].length}`
                  : ""}
              </span>
              <span>
                {qi + 1}/{pool.length}
              </span>
            </div>

            <div className="bt-zh bt-big">{renderSentence(u)}</div>

            <div className="bt-opts">
              {opts.map((o, i) => {
                let cls = "bt-op";
                if (checked) {
                  if (o === blank.ans) cls += " bt-oc";
                  else if (o === picked) cls += " bt-oi";
                }
                return (
                  <button
                    key={o}
                    type="button"
                    className={cls}
                    disabled={checked}
                    onClick={() => onPick(o)}
                  >
                    <span className="bt-let">{LETTERS[i]}</span>
                    <span className="bt-otx">{o}</span>
                  </button>
                );
              })}
            </div>

            {checked && (
              <>
                <div className={"bt-res " + (ok ? "bt-ok" : "bt-no")}>
                  {ok
                    ? "Đúng rồi!"
                    : `Chưa đúng. Đáp án: ${LETTERS[opts.indexOf(blank.ans)]}. ${blank.ans}`}
                  <div className="bt-zh">
                    {fullSentence(u.item).split("\n").join(" ")}
                  </div>
                  <div className="bt-py">
                    <Lines text={u.item[3]} />
                  </div>
                  <div className="bt-tr">
                    <Lines text={u.item[4]} />
                  </div>
                </div>
                <div className="bt-exp">
                  <b>Giải thích:</b> {blank.exp}
                  <div className="bt-note">{groupOf(u.item[0]).note}</div>
                </div>
                <div className="bt-row" style={{ marginTop: 12 }}>
                  <button
                    type="button"
                    className="bt-btn bt-pri"
                    onClick={next}
                  >
                    Câu tiếp
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── CSS (nhúng sẵn) ───────────────────────── */

const CSS = `
.bt{--bg:#fff;--card:#fff;--tx:#222;--mu:#6b6b6b;--bd:#e3ded4;--ac:#c0392b;--acbg:#fbeae7;--ok:#2e7d32;--okbg:#e6f4e7;--no:#c0392b;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);
background:var(--bg);color:var(--tx);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5}
@media (prefers-color-scheme:dark){.bt{color-scheme:dark;--bg:#1d293d;--card:#0f172a;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}}
.dark .bt{color-scheme:dark;--bg:#1d293d;--card:#0f172a;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}
:where(.bt) *{box-sizing:border-box}
:where(.bt) button,:where(.bt) select{font:inherit;color:var(--tx)}
.bt-w{max-width:720px;margin:0 6px;padding:18px 14px;}
.bt h1{font-size:1.3rem;margin:0 0 2px}
.bt-sub{color:var(--mu);font-size:.85rem;margin:0 0 12px}
.bt-opt{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:.85rem;margin-bottom:12px}
.bt select{background:var(--card);border:1px solid var(--bd);border-radius:8px;padding:4px 8px;max-width:100%}
.bt label{cursor:pointer}
.bt-q{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:16px}
.bt-meta{display:flex;justify-content:space-between;gap:8px;color:var(--mu);font-size:.8rem;margin-bottom:8px}
.bt-tag{background:var(--acbg);color:var(--ac);border-radius:999px;padding:1px 10px}
.bt-zh{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.35rem;color:var(--tx);margin-top:4px}
.bt-big{font-size:1.6rem;line-height:1.9;margin:6px 0 14px}
.bt-bl{display:inline-block;min-width:2.4em;border-bottom:3px solid var(--ac);text-align:center;color:var(--ac)}
.bt-bl-ok{color:var(--ok);border-bottom-color:var(--ok)}
.bt-bl-no{color:var(--no);border-bottom-color:var(--no);text-decoration:line-through}
.bt-fill{color:var(--ok);border-bottom:2px solid var(--ok)}
.bt-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.bt-op{display:flex;align-items:center;gap:10px;text-align:left;border:1px solid var(--bd);background:var(--bg);border-radius:12px;padding:10px 12px;cursor:pointer}
.bt-op:disabled{cursor:default}
.bt-let{flex:none;width:1.8em;height:1.8em;border-radius:50%;border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:700;color:var(--mu)}
.bt-otx{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.3rem}
.bt-op.bt-oc{background:var(--okbg);border-color:var(--ok);color:var(--ok)}
.bt-op.bt-oc .bt-let{border-color:var(--ok);color:var(--ok)}
.bt-op.bt-oi{background:var(--acbg);border-color:var(--no);color:var(--no)}
.bt-op.bt-oi .bt-let{border-color:var(--no);color:var(--no)}
.bt-op.bt-oc .bt-otx,.bt-op.bt-oi .bt-otx{color:inherit}
.bt-row{display:flex;gap:8px}
.bt-btn{flex:1;border:1px solid var(--bd);background:var(--card);border-radius:12px;padding:11px;cursor:pointer;font-weight:600}
.bt-pri{background:var(--ac);border-color:var(--ac);color:#fff}
.bt-res{margin-top:12px;border-radius:12px;padding:10px 12px;font-size:.95rem}
.bt-res.bt-ok{background:var(--okbg);color:var(--ok)}
.bt-res.bt-no{background:var(--acbg);color:var(--no)}
.bt-py{color:var(--ac);font-size:.9rem}
.bt-tr{color:var(--tx);font-size:.9rem;margin-top:2px}
.bt-exp{margin-top:10px;border:1px solid var(--bd);border-radius:12px;padding:10px 12px;font-size:.92rem}
.bt-note{margin-top:6px;color:var(--mu);font-size:.8rem}
.bt-sc{text-align:center;padding:24px 8px}
.bt-score{font-size:2rem;color:var(--ac);display:block}
@media (max-width:420px){.bt-opts{grid-template-columns:1fr}}
`;
