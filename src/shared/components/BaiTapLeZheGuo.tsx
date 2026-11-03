"use client";

/**
 * Bài tập chọn đáp án A/B/C: phân biệt trợ từ động thái 了 – 着 – 过 (HSK 4), kèm giải thích.
 * Component client độc lập cho Next.js (App Router) / React.
 *
 * Dùng:  import BaiTapLeZheGuo from "@/components/BaiTapLeZheGuo";
 *        <BaiTapLeZheGuo />
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
    name: "Bộ 1: 了 và 过 (hoàn thành / kinh nghiệm)",
    opts: ["了", "着", "过"],
    note: "了: hành động đã hoàn thành, xảy ra cụ thể (thường có thời điểm hoặc số lượng). 过: từng có kinh nghiệm trong quá khứ (hay đi với 曾经, 以前, 从来没…); phủ định là 没(有)…过.",
  },
  {
    id: 2,
    name: "Bộ 2: 着 và 了 (trạng thái / hoàn thành)",
    opts: ["了", "着", "过"],
    note: "着: trạng thái hoặc hành động đang kéo dài (门开着, 墙上挂着…; V1着 V2; …着…呢). 了: hành động đã hoàn thành hoặc có sự thay đổi.",
  },
  {
    id: 3,
    name: "Bộ 3: 着 và 过 (đang tiếp diễn / từng trải)",
    opts: ["了", "着", "过"],
    note: "着: trạng thái đang tiếp diễn ở hiện tại. 过: đã từng xảy ra trong quá khứ, nay không còn tiếp diễn.",
  },
  {
    id: 4,
    name: "Bộ 4: Tổng hợp 了 – 着 – 过",
    opts: ["了", "着", "过"],
    note: "了: đã hoàn thành. 着: đang tiếp diễn / trạng thái kéo dài. 过: từng trải nghiệm. Chú ý các từ gợi ý như 昨天, 已经 (了), 正在…呢, 一直 (着), 以前, 曾经, 从来没 (过).",
  },
  {
    id: 5,
    name: "Bộ 5: Mở rộng (phủ định, lặp động từ, 着…着…)",
    opts: ["了", "着", "过"],
    note: "没(有)…过: chưa từng. 没(有)…着: trạng thái không như vậy. V了V / V了一会儿: hành động ngắn đã xảy ra. V着V着: đang làm thì xảy ra việc khác.",
  },
];

const ITEMS: Item[] = [
  [
    1,
    "1.",
    "我从来没吃{1}北京烤鸭。",
    "Wǒ cónglái méi chī guo Běijīng kǎoyā.",
    "Tôi chưa từng ăn vịt quay Bắc Kinh.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“从来没…过” phủ định kinh nghiệm, dùng 过.",
      },
    ],
  ],
  [
    1,
    "2.",
    "昨天晚上我吃{1}两碗米饭。",
    "Zuótiān wǎnshang wǒ chī le liǎng wǎn mǐfàn.",
    "Tối qua tôi ăn hai bát cơm.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Việc cụ thể đã xảy ra tối qua, có số lượng (两碗) nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "3.",
    "你以前来{1}这个城市吗？",
    "Nǐ yǐqián lái guo zhège chéngshì ma?",
    "Trước đây bạn đã từng đến thành phố này chưa?",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“以前” + câu hỏi về kinh nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    1,
    "4.",
    "他刚才给我打{1}一个电话。",
    "Tā gāngcái gěi wǒ dǎ le yí ge diànhuà.",
    "Vừa nãy anh ấy gọi cho tôi một cuộc điện thoại.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“刚才”: việc vừa xảy ra, đã hoàn thành nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "5.",
    "我曾经在上海住{1}两年。",
    "Wǒ céngjīng zài Shànghǎi zhù guo liǎng nián.",
    "Tôi từng sống ở Thượng Hải hai năm.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“曾经” biểu thị trải nghiệm đã qua nên dùng 过.",
      },
    ],
  ],
  [
    1,
    "6.",
    "下课以后，我们去{1}图书馆。",
    "Xià kè yǐhòu, wǒmen qù le túshūguǎn.",
    "Tan học xong, chúng tôi đã đến thư viện.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Hành động cụ thể đã xảy ra sau khi tan học nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "7.",
    "她小时候学{1}钢琴，现在已经不弹了。",
    "Tā xiǎoshíhou xué guo gāngqín, xiànzài yǐjīng bù tán le.",
    "Hồi nhỏ cô ấy từng học piano, bây giờ không chơi nữa.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "Chuyện từng làm trong quá khứ, nay không còn nữa nên dùng 过.",
      },
    ],
  ],
  [
    1,
    "8.",
    "昨天我买{1}一件红色的毛衣。",
    "Zuótiān wǒ mǎi le yí jiàn hóngsè de máoyī.",
    "Hôm qua tôi mua một chiếc áo len màu đỏ.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天” + tân ngữ có số lượng, định ngữ nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "9.",
    "我们见{1}面，他是我的大学同学。",
    "Wǒmen jiàn guo miàn, tā shì wǒ de dàxué tóngxué.",
    "Chúng tôi từng gặp nhau, anh ấy là bạn đại học của tôi.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“见过面” = đã từng gặp (trải nghiệm) nên dùng 过.",
      },
    ],
  ],
  [
    1,
    "10.",
    "他一次也没去{1}国外。",
    "Tā yí cì yě méi qù guo guówài.",
    "Anh ấy chưa một lần ra nước ngoài.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“一次也没…过” phủ định kinh nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    1,
    "11.",
    "昨天下午我们踢{1}一场足球。",
    "Zuótiān xiàwǔ wǒmen tī le yì chǎng zúqiú.",
    "Chiều qua chúng tôi đá một trận bóng.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天下午” + số lượng (一场): việc đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "12.",
    "他今天早上喝{1}一杯咖啡。",
    "Tā jīntiān zǎoshang hē le yì bēi kāfēi.",
    "Sáng nay anh ấy uống một ly cà phê.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Việc đã xảy ra sáng nay, có số lượng nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "13.",
    "这首歌我以前听{1}，现在还记得。",
    "Zhè shǒu gē wǒ yǐqián tīng guo, xiànzài hái jìde.",
    "Bài hát này trước đây tôi từng nghe, bây giờ vẫn nhớ.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“以前” nói về trải nghiệm đã qua nên dùng 过.",
      },
    ],
  ],
  [
    1,
    "14.",
    "上星期妈妈给我寄{1}一个包裹。",
    "Shàng xīngqī māma gěi wǒ jì le yí ge bāoguǒ.",
    "Tuần trước mẹ gửi cho tôi một gói hàng.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“上星期” + số lượng: sự việc cụ thể đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "15.",
    "我没去{1}西藏，一直想去。",
    "Wǒ méi qù guo Xīzàng, yìzhí xiǎng qù.",
    "Tôi chưa từng đến Tây Tạng, vẫn luôn muốn đi.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "Phủ định kinh nghiệm dùng “没…过”, không dùng “没…了”.",
      },
    ],
  ],
  [
    1,
    "16.",
    "他去{1}北京，还没回来。",
    "Tā qù le Běijīng, hái méi huílái.",
    "Anh ấy đã đi Bắc Kinh, vẫn chưa về.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“去了” = đã đi và còn ở đó (chưa về). “去过” = từng đi và đã về.",
      },
    ],
  ],
  [
    1,
    "17.",
    "我去{1}北京，我知道那里的冬天很冷。",
    "Wǒ qù guo Běijīng, wǒ zhīdào nàlǐ de dōngtiān hěn lěng.",
    "Tôi từng đến Bắc Kinh nên biết mùa đông ở đó rất lạnh.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "Đã từng đến (và đã về), nhờ trải nghiệm đó mà biết, nên dùng 过. So sánh với câu 16.",
      },
    ],
  ],
  [
    1,
    "18.",
    "昨天他迟到{1}十分钟。",
    "Zuótiān tā chídào le shí fēnzhōng.",
    "Hôm qua anh ấy đến muộn mười phút.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天” + khoảng thời gian: sự việc đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    1,
    "19.",
    "这部电影你以前看{1}吗？",
    "Zhè bù diànyǐng nǐ yǐqián kàn guo ma?",
    "Bộ phim này trước đây bạn đã xem chưa?",
    [{ ans: "过", fill: "过", exp: "“以前” + hỏi trải nghiệm nên dùng 过." }],
  ],
  [
    1,
    "20.",
    "我从没坐{1}飞机，有点儿紧张。",
    "Wǒ cóng méi zuò guo fēijī, yǒudiǎnr jǐnzhāng.",
    "Tôi chưa bao giờ đi máy bay, hơi lo lắng.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“从没…过”: chưa từng, phủ định kinh nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    2,
    "1.",
    "会议厅的门开{1}呢，你进去吧。",
    "Huìyìtīng de mén kāi zhe ne, nǐ jìnqù ba.",
    "Cửa phòng họp đang mở đấy, bạn vào đi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“开着” là trạng thái cửa đang mở kéo dài, có 呢 nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "2.",
    "风一吹，门突然开{1}。",
    "Fēng yì chuī, mén tūrán kāi le.",
    "Gió thổi một cái, cửa bỗng mở ra.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Diễn tả sự thay đổi (từ đóng thành mở) vừa xảy ra, không phải trạng thái kéo dài, nên dùng 了.",
      },
    ],
  ],
  [
    2,
    "3.",
    "墙上挂{1}一张中国地图。",
    "Qiáng shang guà zhe yì zhāng Zhōngguó dìtú.",
    "Trên tường treo một tấm bản đồ Trung Quốc.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Câu tồn tại: nơi chốn + động từ + 着 + vật, diễn tả trạng thái sau khi treo.",
      },
    ],
  ],
  [
    2,
    "4.",
    "他昨天在墙上挂{1}一幅画。",
    "Tā zuótiān zài qiáng shang guà le yì fú huà.",
    "Hôm qua anh ấy treo một bức tranh lên tường.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Có “昨天”, nói về hành động đã xảy ra chứ không tả trạng thái nên dùng 了.",
      },
    ],
  ],
  [
    2,
    "5.",
    "桌子上放{1}很多水果，你随便吃吧。",
    "Zhuōzi shang fàng zhe hěn duō shuǐguǒ, nǐ suíbiàn chī ba.",
    "Trên bàn có nhiều trái cây, bạn cứ ăn tự nhiên nhé.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Tả trạng thái hiện tại: trái cây đang được đặt trên bàn nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "6.",
    "妈妈在桌子上放{1}一个苹果，然后出去了。",
    "Māma zài zhuōzi shang fàng le yí ge píngguǒ, ránhòu chūqu le.",
    "Mẹ đặt một quả táo lên bàn rồi đi ra ngoài.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Hai hành động nối tiếp (然后): 放 đã hoàn thành nên dùng 了.",
      },
    ],
  ],
  [
    2,
    "7.",
    "你看，她身上穿{1}一件红裙子呢。",
    "Nǐ kàn, tā shēnshang chuān zhe yí jiàn hóng qúnzi ne.",
    "Bạn xem, cô ấy đang mặc một chiếc váy đỏ kìa.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“身上穿着…呢” tả trạng thái đang mặc nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "8.",
    "她买{1}一件红裙子，花了三百块。",
    "Tā mǎi le yí jiàn hóng qúnzi, huā le sānbǎi kuài.",
    "Cô ấy mua một chiếc váy đỏ, tốn ba trăm tệ.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Hành động mua đã hoàn thành (kèm số lượng) nên dùng 了.",
      },
    ],
  ],
  [
    2,
    "9.",
    "教室里的灯还开{1}，快去关吧。",
    "Jiàoshì li de dēng hái kāi zhe, kuài qù guān ba.",
    "Đèn trong phòng học vẫn còn bật, mau đi tắt đi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“还” cho thấy trạng thái (đèn bật) vẫn kéo dài nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "10.",
    "太冷了，我把窗户关{1}。",
    "Tài lěng le, wǒ bǎ chuānghu guān le.",
    "Lạnh quá, tôi đã đóng cửa sổ lại rồi.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Câu 把: hành động “đóng” đã hoàn thành, kết thúc câu bằng 了.",
      },
    ],
  ],
  [
    2,
    "11.",
    "孩子们在教室外面站{1}，等老师来。",
    "Háizimen zài jiàoshì wàimiàn zhàn zhe, děng lǎoshī lái.",
    "Bọn trẻ đứng ở ngoài lớp, đợi cô giáo đến.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“站着” là tư thế đang kéo dài trong lúc chờ nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "12.",
    "他在沙发上躺{1}看电视。",
    "Tā zài shāfā shang tǎng zhe kàn diànshì.",
    "Anh ấy nằm trên sofa xem tivi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“V1着 V2”: 躺 là tư thế kèm theo hành động 看 nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "13.",
    "她笑{1}对我说：“谢谢你。”",
    "Tā xiào zhe duì wǒ shuō: “Xièxie nǐ.”",
    "Cô ấy mỉm cười nói với tôi: “Cảm ơn bạn.”",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“笑着说”: 着 nối cách thức (cười) với hành động chính (nói).",
      },
    ],
  ],
  [
    2,
    "14.",
    "他手里拿{1}一束花，在门口等你。",
    "Tā shǒu li ná zhe yí shù huā, zài ménkǒu děng nǐ.",
    "Anh ấy tay cầm một bó hoa, đang đợi bạn ở cửa.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Tả trạng thái đang cầm hoa trong lúc chờ nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "15.",
    "外面下{1}雨呢，别出去了。",
    "Wàimiàn xià zhe yǔ ne, bié chūqu le.",
    "Bên ngoài trời đang mưa, đừng ra ngoài nữa.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“…着…呢” diễn tả sự việc đang diễn ra nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "16.",
    "昨天夜里下{1}一场大雨。",
    "Zuótiān yèli xià le yì chǎng dà yǔ.",
    "Đêm qua có một trận mưa lớn.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天夜里” + 一场: sự việc đã xảy ra, đã kết thúc nên dùng 了.",
      },
    ],
  ],
  [
    2,
    "17.",
    "他每天听{1}音乐做作业。",
    "Tā měi tiān tīng zhe yīnyuè zuò zuòyè.",
    "Mỗi ngày anh ấy vừa nghe nhạc vừa làm bài tập.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“听着音乐做作业”: hai hành động diễn ra đồng thời, dùng 着.",
      },
    ],
  ],
  [
    2,
    "18.",
    "我听{1}这个好消息，高兴得跳了起来。",
    "Wǒ tīng le zhège hǎo xiāoxi, gāoxìng de tiào le qǐlái.",
    "Nghe tin vui này, tôi vui đến mức nhảy cẫng lên.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Nghe xong (hoàn thành) rồi dẫn đến phản ứng sau đó nên dùng 了.",
      },
    ],
  ],
  [
    2,
    "19.",
    "汽车一直停{1}，没有开走。",
    "Qìchē yìzhí tíng zhe, méiyǒu kāi zǒu.",
    "Xe ô tô cứ đỗ đó, không chạy đi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“一直” nhấn mạnh trạng thái kéo dài liên tục nên dùng 着.",
      },
    ],
  ],
  [
    2,
    "20.",
    "司机把车停{1}，下车去买东西了。",
    "Sījī bǎ chē tíng le, xià chē qù mǎi dōngxi le.",
    "Tài xế đỗ xe xong, xuống xe đi mua đồ.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "Hành động “đỗ xe” hoàn thành rồi mới làm việc tiếp theo nên dùng 了.",
      },
    ],
  ],
  [
    3,
    "1.",
    "他从来没穿{1}西装。",
    "Tā cónglái méi chuān guo xīzhuāng.",
    "Anh ấy chưa từng mặc vest.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“从来没…过”: phủ định kinh nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    3,
    "2.",
    "他身上穿{1}一套西装，看起来很精神。",
    "Tā shēnshang chuān zhe yí tào xīzhuāng, kàn qǐlái hěn jīngshen.",
    "Anh ấy đang mặc một bộ vest, trông rất lịch lãm.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“身上穿着…” tả trạng thái đang mặc ở hiện tại nên dùng 着.",
      },
    ],
  ],
  [
    3,
    "3.",
    "这个孩子哭{1}说：“我要妈妈。”",
    "Zhège háizi kū zhe shuō: “Wǒ yào māma.”",
    "Đứa bé vừa khóc vừa nói: “Con muốn mẹ.”",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“哭着说”: 着 diễn tả cách thức đi kèm hành động chính.",
      },
    ],
  ],
  [
    3,
    "4.",
    "我小时候在这个村子里住{1}。",
    "Wǒ xiǎoshíhou zài zhège cūnzi li zhù guo.",
    "Hồi nhỏ tôi từng sống trong làng này.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“小时候” nói về chuyện đã qua, nay không còn, nên dùng 过.",
      },
    ],
  ],
  [
    3,
    "5.",
    "房间里亮{1}灯，他一定在家。",
    "Fángjiān li liàng zhe dēng, tā yídìng zàijiā.",
    "Trong phòng đèn đang sáng, chắc chắn anh ấy ở nhà.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Đèn đang sáng là trạng thái hiện tại nên dùng 着.",
      },
    ],
  ],
  [
    3,
    "6.",
    "我听说{1}这件事，但是不太清楚。",
    "Wǒ tīngshuō guo zhè jiàn shì, dànshì bú tài qīngchu.",
    "Tôi từng nghe nói về chuyện này nhưng không rõ lắm.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“听说过” là cách dùng cố định, chỉ trải nghiệm đã qua.",
      },
    ],
  ],
  [
    3,
    "7.",
    "窗户开{1}，冷风吹进来。",
    "Chuānghu kāi zhe, lěngfēng chuī jìnlái.",
    "Cửa sổ đang mở, gió lạnh thổi vào.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Cửa sổ đang ở trạng thái mở nên gió mới thổi vào: dùng 着.",
      },
    ],
  ],
  [
    3,
    "8.",
    "我从没坐{1}高铁。",
    "Wǒ cóng méi zuò guo gāotiě.",
    "Tôi chưa bao giờ đi tàu cao tốc.",
    [{ ans: "过", fill: "过", exp: "“从没…过”: chưa từng nên dùng 过." }],
  ],
  [
    3,
    "9.",
    "她脸上戴{1}一副眼镜，看书看得很认真。",
    "Tā liǎn shang dài zhe yí fù yǎnjìng, kàn shū kàn de hěn rènzhēn.",
    "Cô ấy đeo một cặp kính, đọc sách rất chăm chú.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“脸上戴着…” tả trạng thái đang đeo nên dùng 着.",
      },
    ],
  ],
  [
    3,
    "10.",
    "他从没骗{1}我。",
    "Tā cóng méi piàn guo wǒ.",
    "Anh ấy chưa bao giờ lừa tôi.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“从没…过”: phủ định trải nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    3,
    "11.",
    "我们俩聊{1}聊{2}，不知不觉天亮了。",
    "Wǒmen liǎ liáo zhe liáo zhe, bù zhī bù jué tiān liàng le.",
    "Hai chúng tôi nói chuyện, nói chuyện mà không hay trời đã sáng.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“V着V着”: hành động đang tiếp diễn thì có việc khác xảy ra.",
      },
      {
        ans: "着",
        fill: "着",
        exp: "“V着V着”: lặp lại 着 để nhấn mạnh hành động kéo dài.",
      },
    ],
  ],
  [
    3,
    "12.",
    "她以前在这家公司工作{1}，所以认识很多人。",
    "Tā yǐqián zài zhè jiā gōngsī gōngzuò guo, suǒyǐ rènshi hěn duō rén.",
    "Trước đây cô ấy từng làm ở công ty này nên quen nhiều người.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“以前” + từng làm, nay không còn nên dùng 过.",
      },
    ],
  ],
  [
    3,
    "13.",
    "他一直开{1}灯睡觉，对眼睛不好。",
    "Tā yìzhí kāi zhe dēng shuìjiào, duì yǎnjing bù hǎo.",
    "Anh ấy cứ bật đèn đi ngủ, không tốt cho mắt.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“开着灯睡觉”: trạng thái bật đèn kéo dài suốt khi ngủ, dùng 着.",
      },
    ],
  ],
  [
    3,
    "14.",
    "我没吃{1}这种水果，不知道味道。",
    "Wǒ méi chī guo zhè zhǒng shuǐguǒ, bù zhīdào wèidào.",
    "Tôi chưa từng ăn loại trái cây này, không biết vị thế nào.",
    [{ ans: "过", fill: "过", exp: "“没吃过”: chưa từng ăn nên dùng 过." }],
  ],
  [
    3,
    "15.",
    "现在墙上贴{1}一张海报，上面写{2}几个大字。",
    "Xiànzài qiáng shang tiē zhe yì zhāng hǎibào, shàngmiàn xiě zhe jǐ ge dà zì.",
    "Bây giờ trên tường dán một tấm áp phích, trên đó viết mấy chữ lớn.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“现在” + câu tồn tại: nơi chốn + V着 + vật nên dùng 着.",
      },
      {
        ans: "着",
        fill: "着",
        exp: "Câu tồn tại “上面写着…”: tả trạng thái hiện có nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "1.",
    "他昨天买{1}一本汉语词典。",
    "Tā zuótiān mǎi le yì běn Hànyǔ cídiǎn.",
    "Hôm qua anh ấy mua một quyển từ điển tiếng Hán.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天” + số lượng: hành động đã hoàn thành nên dùng 了.",
      },
    ],
  ],
  [
    4,
    "2.",
    "他手里拿{1}一本汉语词典。",
    "Tā shǒu li ná zhe yì běn Hànyǔ cídiǎn.",
    "Trên tay anh ấy cầm một quyển từ điển tiếng Hán.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Tả trạng thái đang cầm trên tay nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "3.",
    "他以前用{1}这本汉语词典，所以知道很有用。",
    "Tā yǐqián yòng guo zhè běn Hànyǔ cídiǎn, suǒyǐ zhīdào hěn yǒuyòng.",
    "Trước đây anh ấy từng dùng quyển từ điển này nên biết nó rất hữu ích.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“以前” + “所以知道”: nhờ trải nghiệm đã qua nên dùng 过.",
      },
    ],
  ],
  [
    4,
    "4.",
    "门口站{1}一个人，我不认识他。",
    "Ménkǒu zhàn zhe yí ge rén, wǒ bú rènshi tā.",
    "Ở cửa có một người đang đứng, tôi không quen anh ta.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Câu tồn tại: nơi chốn + V着 + người nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "5.",
    "他从来没迟到{1}。",
    "Tā cónglái méi chídào guo.",
    "Anh ấy chưa bao giờ đến muộn.",
    [{ ans: "过", fill: "过", exp: "“从来没…过”: chưa từng nên dùng 过." }],
  ],
  [
    4,
    "6.",
    "我们昨天看{1}一个很有意思的电影。",
    "Wǒmen zuótiān kàn le yí ge hěn yǒu yìsi de diànyǐng.",
    "Hôm qua chúng tôi xem một bộ phim rất thú vị.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天” + tân ngữ có định ngữ: việc đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    4,
    "7.",
    "现在冰箱里放{1}很多好吃的东西。",
    "Xiànzài bīngxiāng li fàng zhe hěn duō hǎochī de dōngxi.",
    "Bây giờ trong tủ lạnh có rất nhiều đồ ngon.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“现在” + câu tồn tại: tả trạng thái hiện có nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "8.",
    "爸爸正在看{1}报纸呢。",
    "Bàba zhèngzài kàn zhe bàozhǐ ne.",
    "Bố đang đọc báo.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“正在…呢” diễn tả hành động đang tiến hành, thường đi với 着.",
      },
    ],
  ],
  [
    4,
    "9.",
    "他喝{1}两杯茶，就走了。",
    "Tā hē le liǎng bēi chá, jiù zǒu le.",
    "Anh ấy uống hai tách trà rồi đi.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“V了…就…”: hành động đã hoàn thành rồi làm việc khác, dùng 了.",
      },
    ],
  ],
  [
    4,
    "10.",
    "我小时候读{1}这本小说，现在还记得。",
    "Wǒ xiǎoshíhou dú guo zhè běn xiǎoshuō, xiànzài hái jìde.",
    "Hồi nhỏ tôi từng đọc cuốn tiểu thuyết này, bây giờ vẫn nhớ.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "Trải nghiệm trong quá khứ (小时候) mà bây giờ vẫn nhớ nên dùng 过.",
      },
    ],
  ],
  [
    4,
    "11.",
    "他们坐{1}聊天儿，聊了一个下午。",
    "Tāmen zuò zhe liáotiānr, liáo le yí ge xiàwǔ.",
    "Họ ngồi trò chuyện, nói suốt cả buổi chiều.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“坐着聊天儿”: ngồi (trạng thái) trong lúc trò chuyện nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "12.",
    "我们以前去{1}那家饭馆，菜不太好吃。",
    "Wǒmen yǐqián qù guo nà jiā fànguǎn, cài bú tài hǎochī.",
    "Trước đây chúng tôi từng đến quán đó, đồ ăn không ngon lắm.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“以前” + đánh giá dựa trên trải nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    4,
    "13.",
    "窗外飘{1}雪花，美极了。",
    "Chuāng wài piāo zhe xuěhuā, měi jí le.",
    "Ngoài cửa sổ tuyết đang rơi, đẹp tuyệt.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "Tả cảnh đang diễn ra (câu tồn tại) nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "14.",
    "昨天我给妈妈打{1}电话，她说想我了。",
    "Zuótiān wǒ gěi māma dǎ le diànhuà, tā shuō xiǎng wǒ le.",
    "Hôm qua tôi gọi điện cho mẹ, mẹ nói nhớ tôi.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天” + hành động đã hoàn thành nên dùng 了.",
      },
    ],
  ],
  [
    4,
    "15.",
    "她从来没有见{1}大海。",
    "Tā cónglái méiyǒu jiàn guo dàhǎi.",
    "Cô ấy chưa bao giờ nhìn thấy biển.",
    [{ ans: "过", fill: "过", exp: "“从来没有…过”: chưa từng nên dùng 过." }],
  ],
  [
    4,
    "16.",
    "他总是皱{1}眉头想问题。",
    "Tā zǒngshì zhòu zhe méitóu xiǎng wèntí.",
    "Anh ấy luôn cau mày suy nghĩ vấn đề.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“皱着眉头想问题”: trạng thái cau mày kèm theo hành động nghĩ, dùng 着.",
      },
    ],
  ],
  [
    4,
    "17.",
    "老板已经批准{1}我的假期。",
    "Lǎobǎn yǐjīng pīzhǔn le wǒ de jiàqī.",
    "Sếp đã phê duyệt kỳ nghỉ của tôi rồi.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“已经” + hành động đã hoàn thành nên dùng 了.",
      },
    ],
  ],
  [
    4,
    "18.",
    "来中国以后，他的汉语进步{1}很多。",
    "Lái Zhōngguó yǐhòu, tā de Hànyǔ jìnbù le hěn duō.",
    "Sau khi đến Trung Quốc, tiếng Hán của anh ấy tiến bộ rất nhiều.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“进步了很多”: sự thay đổi đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    4,
    "19.",
    "他一边走{1}一边打电话。",
    "Tā yìbiān zǒu zhe yìbiān dǎ diànhuà.",
    "Anh ấy vừa đi vừa gọi điện thoại.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“一边…着一边…”: hai hành động đồng thời, dùng 着.",
      },
    ],
  ],
  [
    4,
    "20.",
    "我曾经爱{1}一个人，但是她不爱我。",
    "Wǒ céngjīng ài guo yí ge rén, dànshì tā bú ài wǒ.",
    "Tôi từng yêu một người, nhưng cô ấy không yêu tôi.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“曾经” biểu thị trải nghiệm đã qua nên dùng 过.",
      },
    ],
  ],
  [
    4,
    "21.",
    "屋子里一直开{1}空调，很凉快。",
    "Wūzi li yìzhí kāi zhe kōngtiáo, hěn liángkuai.",
    "Trong phòng máy lạnh bật suốt nên rất mát.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“一直” nhấn mạnh trạng thái bật liên tục nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "22.",
    "小王病{1}三天，今天才来上班。",
    "Xiǎo Wáng bìng le sān tiān, jīntiān cái lái shàngbān.",
    "Tiểu Vương bị ốm ba ngày, hôm nay mới đi làm.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“病了三天”: khoảng thời gian đã hoàn tất nên dùng 了.",
      },
    ],
  ],
  [
    4,
    "23.",
    "我想起来了，我们在哪儿见{1}面。",
    "Wǒ xiǎng qǐlái le, wǒmen zài nǎr jiàn guo miàn.",
    "Tôi nhớ ra rồi, chúng ta từng gặp nhau ở đâu.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“见过面”: từng gặp nhau (trải nghiệm) nên dùng 过.",
      },
    ],
  ],
  [
    4,
    "24.",
    "他躺在床上，眼睛睁{1}，睡不着。",
    "Tā tǎng zài chuáng shang, yǎnjing zhēng zhe, shuì bu zháo.",
    "Anh ấy nằm trên giường, mắt mở trừng trừng, không ngủ được.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“眼睛睁着”: trạng thái mắt đang mở nên dùng 着.",
      },
    ],
  ],
  [
    4,
    "25.",
    "灯还亮{1}，他可能没睡。",
    "Dēng hái liàng zhe, tā kěnéng méi shuì.",
    "Đèn vẫn còn sáng, có lẽ anh ấy chưa ngủ.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“还亮着”: trạng thái đèn vẫn đang sáng nên dùng 着.",
      },
    ],
  ],
  [
    5,
    "1.",
    "我没去{1}那个地方，不知道怎么走。",
    "Wǒ méi qù guo nàge dìfang, bù zhīdào zěnme zǒu.",
    "Tôi chưa từng đến chỗ đó, không biết đi thế nào.",
    [{ ans: "过", fill: "过", exp: "Phủ định kinh nghiệm: 没…过." }],
  ],
  [
    5,
    "2.",
    "门没关{1}，你进去吧。",
    "Mén méi guān zhe, nǐ jìnqù ba.",
    "Cửa không đóng, bạn vào đi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“没(有)V着”: phủ định trạng thái, nghĩa là cửa đang không ở trạng thái đóng.",
      },
    ],
  ],
  [
    5,
    "3.",
    "他头上一直戴{1}帽子，我没看清他的脸。",
    "Tā tóu shang yìzhí dài zhe màozi, wǒ méi kàn qīng tā de liǎn.",
    "Đầu anh ấy lúc nào cũng đội mũ nên tôi không nhìn rõ mặt.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“一直戴着”: trạng thái đội mũ kéo dài nên dùng 着.",
      },
    ],
  ],
  [
    5,
    "4.",
    "我吃{1}饭就去找你。",
    "Wǒ chī le fàn jiù qù zhǎo nǐ.",
    "Ăn cơm xong tôi sẽ đi tìm bạn.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“V了…就…”: làm xong việc này rồi làm việc kia, dùng 了.",
      },
    ],
  ],
  [
    5,
    "5.",
    "你们有没有听说{1}这个故事？",
    "Nǐmen yǒu méiyǒu tīngshuō guo zhège gùshi?",
    "Các bạn đã từng nghe câu chuyện này chưa?",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“有没有…过”: hỏi về trải nghiệm nên dùng 过.",
      },
    ],
  ],
  [
    5,
    "6.",
    "爷爷拄{1}拐杖慢慢地走。",
    "Yéye zhǔ zhe guǎizhàng mànmàn de zǒu.",
    "Ông chống gậy đi chậm rãi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“拄着拐杖走”: chống gậy là cách thức kèm theo khi đi, dùng 着.",
      },
    ],
  ],
  [
    5,
    "7.",
    "我想{1}想，还是决定去。",
    "Wǒ xiǎng le xiǎng, háishi juédìng qù.",
    "Tôi nghĩ một lúc, vẫn quyết định đi.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“V了V”: hành động ngắn đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    5,
    "8.",
    "她看{1}看手表，说：“我得走了。”",
    "Tā kàn le kàn shǒubiǎo, shuō: “Wǒ děi zǒu le.”",
    "Cô ấy xem đồng hồ rồi nói: “Tôi phải đi rồi.”",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“V了V”: hành động ngắn đã hoàn thành, sau đó làm việc khác.",
      },
    ],
  ],
  [
    5,
    "9.",
    "我们聊{1}一会儿，就各自回家了。",
    "Wǒmen liáo le yíhuìr, jiù gèzì huí jiā le.",
    "Chúng tôi nói chuyện một lát rồi ai về nhà nấy.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“V了一会儿”: khoảng thời gian đã hoàn tất, dùng 了.",
      },
    ],
  ],
  [
    5,
    "10.",
    "桌子上摆{1}一束花呢，是谁送的？",
    "Zhuōzi shang bǎi zhe yí shù huā ne, shì shéi sòng de?",
    "Trên bàn đang để một bó hoa kìa, ai tặng vậy?",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“…着…呢”: tả trạng thái đang có nên dùng 着.",
      },
    ],
  ],
  [
    5,
    "11.",
    "我没学{1}日语，一句也不会说。",
    "Wǒ méi xué guo Rìyǔ, yí jù yě bú huì shuō.",
    "Tôi chưa từng học tiếng Nhật, một câu cũng không biết nói.",
    [
      {
        ans: "过",
        fill: "过",
        exp: "“没学过”: chưa từng học (kinh nghiệm) nên dùng 过.",
      },
    ],
  ],
  [
    5,
    "12.",
    "她曾经当{1}老师，后来改行了。",
    "Tā céngjīng dāng guo lǎoshī, hòulái gǎiháng le.",
    "Cô ấy từng làm giáo viên, sau đó đổi nghề.",
    [{ ans: "过", fill: "过", exp: "“曾经” + việc đã chấm dứt nên dùng 过." }],
  ],
  [
    5,
    "13.",
    "汽车开{1}一个小时，终于到了。",
    "Qìchē kāi le yí ge xiǎoshí, zhōngyú dào le.",
    "Xe chạy một tiếng, cuối cùng cũng đến nơi.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“开了一个小时”: khoảng thời gian đã trôi qua nên dùng 了.",
      },
    ],
  ],
  [
    5,
    "14.",
    "孩子抱{1}玩具睡着了。",
    "Háizi bào zhe wánjù shuìzháo le.",
    "Đứa bé ôm đồ chơi ngủ thiếp đi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“抱着玩具睡着了”: ôm đồ chơi là trạng thái kèm theo khi ngủ.",
      },
    ],
  ],
  [
    5,
    "15.",
    "我上星期看{1}一场京剧，演员唱得很好。",
    "Wǒ shàng xīngqī kàn le yì chǎng jīngjù, yǎnyuán chàng de hěn hǎo.",
    "Tuần trước tôi xem một buổi kinh kịch, diễn viên hát rất hay.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“上星期” + số lượng: việc cụ thể đã xảy ra nên dùng 了.",
      },
    ],
  ],
  [
    5,
    "16.",
    "他一边吃{1}饭一边看手机，对身体不好。",
    "Tā yìbiān chī zhe fàn yìbiān kàn shǒujī, duì shēntǐ bù hǎo.",
    "Anh ấy vừa ăn cơm vừa xem điện thoại, không tốt cho sức khỏe.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“一边…着一边…”: hai hành động đồng thời nên dùng 着.",
      },
    ],
  ],
  [
    5,
    "17.",
    "我昨天丢{1}钱包，今天去派出所报案。",
    "Wǒ zuótiān diū le qiánbāo, jīntiān qù pàichūsuǒ bào'àn.",
    "Hôm qua tôi mất ví, hôm nay đi đồn công an trình báo.",
    [
      {
        ans: "了",
        fill: "了",
        exp: "“昨天” + việc đã xảy ra, là nguyên nhân của việc sau, dùng 了.",
      },
    ],
  ],
  [
    5,
    "18.",
    "我们在公园里走{1}走{2}，发现了一个小湖。",
    "Wǒmen zài gōngyuán li zǒu zhe zǒu zhe, fāxiàn le yí ge xiǎo hú.",
    "Chúng tôi đang đi dạo trong công viên thì phát hiện một cái hồ nhỏ.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“V着V着”: đang làm thì xảy ra việc khác (phát hiện).",
      },
      {
        ans: "着",
        fill: "着",
        exp: "“V着V着”: lặp lại 着 để nhấn mạnh hành động kéo dài.",
      },
    ],
  ],
  [
    5,
    "19.",
    "我从没怀疑{1}他。",
    "Wǒ cóng méi huáiyí guo tā.",
    "Tôi chưa bao giờ nghi ngờ anh ấy.",
    [{ ans: "过", fill: "过", exp: "“从没…过”: chưa từng nên dùng 过." }],
  ],
  [
    5,
    "20.",
    "你的手机响{1}呢，快接吧。",
    "Nǐ de shǒujī xiǎng zhe ne, kuài jiē ba.",
    "Điện thoại của bạn đang reo kìa, nghe máy đi.",
    [
      {
        ans: "着",
        fill: "着",
        exp: "“响着呢”: đang reo (trạng thái đang diễn ra) nên dùng 着.",
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
function Lines({ children }: { children: string }) {
  const lines = children.split("\n");
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

export default function BaiTapLeZheGuo() {
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
      if (!m) return <Lines key={i}>{part}</Lines>;
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
        <p className="bt-sub">
          {total || ITEMS.reduce((n, it) => n + it[5].length, 0)} câu hỏi. Chọn
          了, 着 hoặc 过 điền vào chỗ trống, sau khi chọn sẽ có giải thích.
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
                    <Lines>{u.item[3]}</Lines>
                  </div>
                  <div className="bt-tr">
                    <Lines>{u.item[4]}</Lines>
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
@media (prefers-color-scheme:dark){.bt{color-scheme:dark;--bg:#1b1a18;--card:#252320;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}}
.dark .bt{color-scheme:dark;--bg:#1b1a18;--card:#252320;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}
:where(.bt) *{box-sizing:border-box}
:where(.bt) button,:where(.bt) select{font:inherit;color:var(--tx)}
.bt-w{max-width:720px;margin:0 auto;padding:18px 14px 40px}
.bt h1{margin:0 0 15px;text-align:center;}
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
.bt-opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:10px}
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
`;
