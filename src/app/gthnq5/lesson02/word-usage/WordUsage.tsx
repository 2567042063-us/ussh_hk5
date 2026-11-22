"use client";

import { JSX, useMemo, useState } from "react";

// ===== DỮ LIỆU =====
type E = { id: string; sec: string; h: string; p: string; v: string };
// h: {từ khoá} = highlight · "/" = ranh giới cụm · # = bài đặt từ · * = câu sai (不能说)
const SEC: { k: string; t: string; e: string }[] = [
  {
    k: "ts",
    t: "唐诗 Tángshī",
    e: "唐诗 (Tángshī): thơ ca đời Đường. Triều Đường (618–907) là một trong những triều đại phồn vinh của Trung Quốc cổ đại; kinh đô là Trường An, nay là thành phố Tây An, tỉnh Thiểm Tây. (Mục này chỉ là chú thích, không có câu ví dụ.)",
  },
  {
    k: "kao",
    t: "靠 kào (动)",
    e: "靠 (động từ) dựa vào, gần sát, có 3 nghĩa: (1) 依靠: dựa vào, nhờ vào; (2) 接近或挨着某地方: gần, sát một nơi nào đó; (3) 人或物体倚着其他人或物体: tựa vào người hoặc vật khác.",
  },
  {
    k: "fb",
    t: "分别 fēnbié (副)",
    e: "分别 (phó từ) riêng, lần lượt: 各自, 不一起. (1) 采取不同方式, 有区别地: dùng cách khác nhau, xử lý riêng từng trường hợp; (2) 几个主体对几个对象, 各自, 分头: nhiều chủ thể, nhiều đối tượng, mỗi bên làm riêng.",
  },
  {
    k: "ge",
    t: "各 gè (代)",
    e: "各 (đại từ) mỗi, các: chỉ tất cả cá thể trong một phạm vi, dùng trước danh từ hoặc lượng từ. So sánh 各 và 每: (1) Đều chỉ tất cả cá thể nhưng trọng tâm khác nhau: 每 nhấn mạnh chỉ chung (mỗi, từng cái một), 各 nhấn mạnh chỉ riêng từng phần. (2) 各 có thể đứng trực tiếp trước một số danh từ; 每 phải kèm lượng từ hoặc số lượng từ (trừ 人、家、年、月、日、天、星期、周). (3) 每 có thể kết hợp với số lượng từ, 各 không thể.",
  },
  {
    k: "bs",
    t: "表示 biǎoshì (动、名)",
    e: "表示 (động từ, danh từ) biểu thị, bày tỏ. (1) Động từ: dùng lời nói, hành động để bộc lộ tư tưởng, tình cảm, thái độ; có thể mang 了, 过, có thể lặp lại, mang tân ngữ danh từ hoặc động từ. (2) Động từ: bản thân sự vật có ý nghĩa nào đó, hoặc nhờ sự vật nào đó mà thể hiện ý nghĩa. (3) Danh từ: lời nói, hành động hoặc thần sắc bộc lộ tư tưởng, tình cảm.",
  },
];
const S: E[] = [
  {
    id: "kao1",
    sec: "kao",
    h: "中国人/常说:/“在家/{靠}/父母,/出门/{靠}/朋友。”/我/现在/交了/好多/朋友。",
    p: "Zhōngguórén cháng shuō: “Zàijiā kào fùmǔ, chūmén kào péngyou.” Wǒ xiànzài jiāo le hǎo duō péngyou.",
    v: "Người Trung Quốc thường nói: “Ở nhà dựa vào bố mẹ, ra ngoài dựa vào bạn bè.” Bây giờ tôi đã kết giao được rất nhiều bạn.",
  },
  {
    id: "kao2",
    sec: "kao",
    h: "她/学习/这么好,/全/{靠}/自己的/努力。",
    p: "Tā xuéxí zhème hǎo, quán kào zìjǐ de nǔlì.",
    v: "Cô ấy học giỏi như vậy, hoàn toàn nhờ vào nỗ lực của bản thân.",
  },
  {
    id: "kao3",
    sec: "kao",
    h: "他是/{靠}/奖学金/读完/大学的。",
    p: "Tā shì kào jiǎngxuéjīn dúwán dàxué de.",
    v: "Anh ấy nhờ học bổng mà học xong đại học.",
  },
  {
    id: "kao4",
    sec: "kao",
    h: "我的家乡,/前边/临着/一条河,/后边/{靠}着/一座山,/是/有名的/风景区。",
    p: "Wǒ de jiāxiāng, qiánbian lín zhe yì tiáo hé, hòubian kào zhe yí zuò shān, shì yǒumíng de fēngjǐngqū.",
    v: "Quê tôi phía trước giáp một con sông, phía sau tựa vào một ngọn núi, là khu thắng cảnh nổi tiếng.",
  },
  {
    id: "kao5",
    sec: "kao",
    h: "#屋子里,/{靠}/墙/放着一张桌子。",
    p: "Wūzi li, kào qiáng fàng zhe yì zhāng zhuōzi.",
    v: "Trong phòng, có một cái bàn đặt sát tường.",
  },
  {
    id: "kao6",
    sec: "kao",
    h: "#别/{靠}/在我身上。",
    p: "Bié kào zài wǒ shēnshang.",
    v: "Đừng dựa vào người tôi.",
  },
  {
    id: "kao7",
    sec: "kao",
    h: "他/{靠}着/沙发/睡着了。",
    p: "Tā kào zhe shāfā shuìzháo le.",
    v: "Anh ấy tựa vào ghế sofa ngủ thiếp đi.",
  },
  {
    id: "fb1",
    sec: "fb",
    h: "对/不同情况,/应该/{分别}/对待。",
    p: "Duì bù tóng qíngkuàng, yīnggāi fēnbié duìdài.",
    v: "Đối với các tình huống khác nhau, nên xử lý riêng từng trường hợp.",
  },
  {
    id: "fb2",
    sec: "fb",
    h: "#我们班的同学/{分别}/来自亚洲、非洲、欧洲、美洲、大洋洲等五大洲十一个国家。",
    p: "Wǒmen bān de tóngxué fēnbié láizì Yàzhōu, Fēizhōu, Ōuzhōu, Měizhōu, Dàyángzhōu děng wǔ dàzhōu shíyī ge guójiā.",
    v: "Các bạn trong lớp chúng tôi lần lượt đến từ mười một quốc gia thuộc năm châu: Á, Phi, Âu, Mỹ, Đại Dương.",
  },
  {
    id: "fb3",
    sec: "fb",
    h: "#王老师和林老师/{分别}/找她俩谈了话,/现在她俩的关系好多了。",
    p: "Wáng lǎoshī hé Lín lǎoshī fēnbié zhǎo tāliǎ tán le huà, xiànzài tāliǎ de guānxi hǎo duō le.",
    v: "Thầy Vương và cô Lâm lần lượt tìm hai bạn ấy nói chuyện riêng, bây giờ quan hệ của hai bạn tốt hơn nhiều rồi.",
  },
  {
    id: "ge1",
    sec: "ge",
    h: "能跟/这么多同学/一起/学习,/认识/这么多/世界/{各}国/来的/朋友,/我感到/非常高兴。",
    p: "Néng gēn zhème duō tóngxué yìqǐ xuéxí, rènshi zhème duō shìjiè gè guó lái de péngyou, wǒ gǎndào fēicháng gāoxìng.",
    v: "Được học cùng nhiều bạn như vậy, quen biết nhiều bạn đến từ các nước trên thế giới, tôi cảm thấy rất vui.",
  },
  {
    id: "ge2",
    sec: "ge",
    h: "每天/都有/全国/{各}地的/旅游者/来这里/参观。",
    p: "Měi tiān dōu yǒu quánguó gè dì de lǚyóuzhě lái zhèlǐ cānguān.",
    v: "Mỗi ngày đều có du khách từ khắp nơi trong nước đến đây tham quan.",
  },
  {
    id: "ge3",
    sec: "ge",
    h: "请/{各}班/同学/快/上车,/我们/马上/就要/出发了。",
    p: "Qǐng gè bān tóngxué kuài shàngchē, wǒmen mǎshàng jiù yào chūfā le.",
    v: "Mời học sinh các lớp mau lên xe, chúng ta sắp xuất phát rồi.",
  },
  {
    id: "cm1",
    sec: "ge",
    h: "{每}个人/都有/自己的/爱好。",
    p: "Měi ge rén dōu yǒu zìjǐ de àihào.",
    v: "Mỗi người đều có sở thích riêng của mình.",
  },
  {
    id: "nc1",
    sec: "ge",
    h: "*{各}个人都有自己的爱好。",
    p: "Gè ge rén dōu yǒu zìjǐ de àihào.",
    v: "✗ Không thể nói (theo sách). Ở đây dùng 每 (chỉ chung, từng người một), không dùng 各 → 每个人都有自己的爱好。",
  },
  {
    id: "cm2",
    sec: "ge",
    h: "{每}星期/有/一次/太极拳课。",
    p: "Měi xīngqī yǒu yí cì tàijíquán kè.",
    v: "Mỗi tuần có một buổi học Thái cực quyền.",
  },
  {
    id: "nc2",
    sec: "ge",
    h: "*{各}星期有一次太极拳课。",
    p: "Gè xīngqī yǒu yí cì tàijíquán kè.",
    v: "✗ Không thể nói. 星期 thuộc nhóm đi trực tiếp sau 每 (人、家、年、月、日、天、星期、周); không dùng 各星期 → 每星期有一次太极拳课。",
  },
  {
    id: "cm3",
    sec: "ge",
    h: "#他/{每}/一门课/都学得很好。",
    p: "Tā měi yì mén kè dōu xué de hěn hǎo.",
    v: "Anh ấy môn nào cũng học rất tốt.",
  },
  {
    id: "nc3",
    sec: "ge",
    h: "*他{各}一门课都学得很好。",
    p: "Tā gè yì mén kè dōu xué de hěn hǎo.",
    v: "✗ Không thể nói. 每 có thể kết hợp với số lượng từ (一门), 各 thì không → 他每一门课都学得很好。",
  },
  {
    id: "pa",
    sec: "ge",
    h: "~各国、各学校、各医院、各单位",
    p: "gè guó, gè xuéxiào, gè yīyuàn, gè dānwèi",
    v: "可以说: các nước, các trường, các bệnh viện, các đơn vị. 各 đứng trực tiếp trước danh từ.",
  },
  {
    id: "pn",
    sec: "ge",
    h: "*每国、每学校、每医院、每单位",
    p: "měi guó, měi xuéxiào, měi yīyuàn, měi dānwèi",
    v: "✗ 不能说: 每 phải kèm lượng từ/số lượng từ trước danh từ (trừ 人、家、年、月、日、天、星期、周). Nói: 各国、各学校… hoặc 每个国家、每个学校…",
  },
  {
    id: "pb",
    sec: "ge",
    h: "~每个国家、每个学校、每个医院、每个单位",
    p: "měi ge guójiā, měi ge xuéxiào, měi ge yīyuàn, měi ge dānwèi",
    v: "可以说: mỗi quốc gia, mỗi trường, mỗi bệnh viện, mỗi đơn vị. 每 + lượng từ + danh từ.",
  },
  {
    id: "bs1",
    sec: "bs",
    h: "#朋友们看到以后,/都/向我/{表示}/祝贺。",
    p: "Péngyoumen kàndào yǐhòu, dōu xiàng wǒ biǎoshì zhùhè.",
    v: "Sau khi thấy, bạn bè đều chúc mừng tôi.",
  },
  {
    id: "bs2",
    sec: "bs",
    h: "我送给/老师/一张照片,/向老师/{表示}/感谢。",
    p: "Wǒ sòng gěi lǎoshī yì zhāng zhàopiàn, xiàng lǎoshī biǎoshì gǎnxiè.",
    v: "Tôi tặng thầy một tấm ảnh để bày tỏ lòng cảm ơn với thầy.",
  },
  {
    id: "bs3",
    sec: "bs",
    h: "#点头/{表示}/同意。",
    p: "Diǎntóu biǎoshì tóngyì.",
    v: "Gật đầu tỏ ý đồng ý.",
  },
  {
    id: "bs4",
    sec: "bs",
    h: "他/送/你/玫瑰花/是/{表示}/对你的爱。",
    p: "Tā sòng nǐ méiguihuā shì biǎoshì duì nǐ de ài.",
    v: "Anh ấy tặng bạn hoa hồng là để bày tỏ tình yêu với bạn.",
  },
  {
    id: "bs5",
    sec: "bs",
    h: "你说了以后,/他/有/什么/{表示}?",
    p: "Nǐ shuō le yǐhòu, tā yǒu shénme biǎoshì?",
    v: "Sau khi bạn nói, anh ấy có biểu hiện (phản ứng) gì không?",
  },
  {
    id: "bs6",
    sec: "bs",
    h: "她/这样/做/是/友好的/{表示}。",
    p: "Tā zhèyàng zuò shì yǒuhǎo de biǎoshì.",
    v: "Cô ấy làm như vậy là một biểu hiện thân thiện.",
  },
];
const MC: ([string, string] | [string, string, string, string])[] = [
  ["kao1", "分别|各|表示"],
  ["kao2", "分别|各|表示"],
  ["kao3", "分别|各|表示"],
  ["kao4", "分别|各|表示"],
  ["kao5", "分别|各|表示"],
  ["kao6", "分别|各|表示"],
  ["kao7", "分别|各|表示"],
  ["fb1", "靠|各|表示"],
  ["fb2", "靠|表示|终于"],
  ["fb3", "靠|表示|而"],
  ["ge1", "每|分别|靠"],
  ["ge2", "每|分别|靠"],
  ["ge3", "靠|分别|表示"],
  ["cm1", "各|分别|靠"],
  ["cm2", "各|分别|表示"],
  ["cm3", "各|分别|靠"],
  ["bs1", "靠|分别|各"],
  ["bs2", "靠|分别|各"],
  ["bs3", "靠|而|如果"],
  ["bs4", "靠|分别|各"],
  ["bs5", "靠|分别|各"],
  ["bs6", "靠|分别|各"],
  [
    "＿＿国、＿＿学校、＿＿医院、＿＿单位",
    "各",
    "每|另|整",
    "各 có thể đứng trực tiếp trước một số danh từ: 各国、各学校、各医院、各单位 (không nói 每国、每学校…).",
  ],
  [
    "每＿＿国家、每＿＿学校、每＿＿医院、每＿＿单位",
    "个",
    "各|位|条",
    "每 phải kèm lượng từ trước danh từ: 每个国家、每个学校、每个医院、每个单位.",
  ],
];
const FIX: [string, string, string, string?][] = [
  [
    "中国人常说:“在家父母靠,出门朋友靠。”我现在交了好多朋友。",
    "“靠” là động từ, đứng trước đối tượng được dựa vào: 靠父母、靠朋友.",
    "kao1",
  ],
  [
    "她学习这么好,全自己的努力靠。",
    "“靠” đứng trước đối tượng: 全靠自己的努力.",
    "kao2",
  ],
  [
    "他是奖学金靠读完大学的。",
    "“靠” đứng trước đối tượng: 靠奖学金读完大学.",
    "kao3",
  ],
  [
    "我的家乡,前边临着一条河,后边一座山靠着,是有名的风景区。",
    "“靠着” đứng trước đối tượng: 靠着一座山.",
    "kao4",
  ],
  [
    "屋子里,墙靠放着一张桌子。",
    "“靠” đứng trước địa điểm, rồi mới đến động từ: 靠墙放着一张桌子.",
    "kao5",
  ],
  ["别在我身上靠。", "“靠” đứng trước 在: 靠在我身上.", "kao6"],
  [
    "他沙发靠着睡着了。",
    "“靠着” đứng trước đối tượng: 靠着沙发睡着了.",
    "kao7",
  ],
  [
    "对不同情况,应该对待分别。",
    "“分别” là phó từ, đứng trước động từ: 分别对待.",
    "fb1",
  ],
  [
    "我们班的同学来自分别亚洲、非洲、欧洲、美洲、大洋洲等五大洲十一个国家。",
    "“分别” đứng trước động từ: 分别来自…",
    "fb2",
  ],
  [
    "王老师和林老师找分别她俩谈了话,现在她俩的关系好多了。",
    "“分别” đứng trước động từ: 分别找她俩谈了话.",
    "fb3",
  ],
  [
    "能跟这么多同学一起学习,认识这么多各世界国来的朋友,我感到非常高兴。",
    "“各” đứng trước danh từ 国: 世界各国.",
    "ge1",
  ],
  [
    "每天都有各全国地的旅游者来这里参观。",
    "“各” đứng trước danh từ 地: 全国各地.",
    "ge2",
  ],
  [
    "请班各同学快上车,我们马上就要出发了。",
    "“各” đứng trước danh từ 班: 各班同学.",
    "ge3",
  ],
  [
    "各个人都有自己的爱好。",
    "Theo sách, ở đây dùng 每 (chỉ chung, từng người một), không dùng 各: 每个人都有自己的爱好.",
    "cm1",
  ],
  [
    "各星期有一次太极拳课。",
    "星期 đi trực tiếp sau 每, không dùng 各星期: 每星期有一次太极拳课.",
    "cm2",
  ],
  [
    "他各一门课都学得很好。",
    "每 kết hợp được với số lượng từ (一门), 各 thì không: 他每一门课都学得很好.",
    "cm3",
  ],
  [
    "朋友们看到以后,都向我祝贺表示。",
    "“表示” là động từ, đứng trước tân ngữ: 表示祝贺.",
    "bs1",
  ],
  [
    "我送给老师一张照片,向老师感谢表示。",
    "“表示” đứng trước tân ngữ: 表示感谢.",
    "bs2",
  ],
  ["点头同意表示。", "“表示” đứng trước tân ngữ: 表示同意.", "bs3"],
  [
    "他送你玫瑰花是对你的爱表示。",
    "“表示” đứng trước tân ngữ: 是表示对你的爱.",
    "bs4",
  ],
  [
    "你说了以后,他有表示什么?",
    "“表示” ở đây là danh từ, đứng sau 什么: 有什么表示?",
    "bs5",
  ],
  [
    "她这样做是友好表示的。",
    "“表示” là danh từ làm tân ngữ, đứng sau 的: 友好的表示.",
    "bs6",
  ],
  [
    "每国、每学校、每医院、每单位",
    "每 phải kèm lượng từ trước danh từ (trừ 人、家、年、月、日、天、星期、周). Sửa: 各国、各学校、各医院、各单位 hoặc 每个国家、每个学校、每个医院、每个单位.",
    "pa",
    "各国、各学校、各医院、各单位|每个国家、每个学校、每个医院、每个单位",
  ],
];

// ===== DANH SÁCH TAB DỊCH (dùng cho code cũ) — mỗi nhóm = 1 điểm ngữ pháp =====
export const P: [string, string, string][][] = [
  [
    [
      "中国人常说:“在家{1|靠}父母,出门{1|靠}朋友。”我现在交了好多朋友。",
      "Zhōngguórén cháng shuō: “Zàijiā kào fùmǔ, chūmén kào péngyou.” Wǒ xiànzài jiāo le hǎo duō péngyou.",
      "Người Trung Quốc thường nói: “Ở nhà dựa vào bố mẹ, ra ngoài dựa vào bạn bè.” Bây giờ tôi đã kết giao được rất nhiều bạn.",
    ],
    [
      "她学习这么好,全{1|靠}自己的努力。",
      "Tā xuéxí zhème hǎo, quán kào zìjǐ de nǔlì.",
      "Cô ấy học giỏi như vậy, hoàn toàn nhờ vào nỗ lực của bản thân.",
    ],
    [
      "他是{1|靠}奖学金读完大学的。",
      "Tā shì kào jiǎngxuéjīn dúwán dàxué de.",
      "Anh ấy nhờ học bổng mà học xong đại học.",
    ],
    [
      "我的家乡,前边临着一条河,后边{1|靠}着一座山,是有名的风景区。",
      "Wǒ de jiāxiāng, qiánbian lín zhe yì tiáo hé, hòubian kào zhe yí zuò shān, shì yǒumíng de fēngjǐngqū.",
      "Quê tôi phía trước giáp một con sông, phía sau tựa vào một ngọn núi, là khu thắng cảnh nổi tiếng.",
    ],
    [
      "屋子里,{1|靠}墙放着一张桌子。",
      "Wūzi li, kào qiáng fàng zhe yì zhāng zhuōzi.",
      "Trong phòng, có một cái bàn đặt sát tường.",
    ],
    [
      "别{1|靠}在我身上。",
      "Bié kào zài wǒ shēnshang.",
      "Đừng dựa vào người tôi.",
    ],
    [
      "他{1|靠}着沙发睡着了。",
      "Tā kào zhe shāfā shuìzháo le.",
      "Anh ấy tựa vào ghế sofa ngủ thiếp đi.",
    ],
  ],
  [
    [
      "对不同情况,应该{1|分别}对待。",
      "Duì bù tóng qíngkuàng, yīnggāi fēnbié duìdài.",
      "Đối với các tình huống khác nhau, nên xử lý riêng từng trường hợp.",
    ],
    [
      "我们班的同学{1|分别}来自亚洲、非洲、欧洲、美洲、大洋洲等五大洲十一个国家。",
      "Wǒmen bān de tóngxué fēnbié láizì Yàzhōu, Fēizhōu, Ōuzhōu, Měizhōu, Dàyángzhōu děng wǔ dàzhōu shíyī ge guójiā.",
      "Các bạn trong lớp chúng tôi lần lượt đến từ mười một quốc gia thuộc năm châu: Á, Phi, Âu, Mỹ, Đại Dương.",
    ],
    [
      "王老师和林老师{1|分别}找她俩谈了话,现在她俩的关系好多了。",
      "Wáng lǎoshī hé Lín lǎoshī fēnbié zhǎo tāliǎ tán le huà, xiànzài tāliǎ de guānxi hǎo duō le.",
      "Thầy Vương và cô Lâm lần lượt tìm hai bạn ấy nói chuyện riêng, bây giờ quan hệ của hai bạn tốt hơn nhiều rồi.",
    ],
  ],
  [
    [
      "能跟这么多同学一起学习,认识这么多世界{1|各}国来的朋友,我感到非常高兴。",
      "Néng gēn zhème duō tóngxué yìqǐ xuéxí, rènshi zhème duō shìjiè gè guó lái de péngyou, wǒ gǎndào fēicháng gāoxìng.",
      "Được học cùng nhiều bạn như vậy, quen biết nhiều bạn đến từ các nước trên thế giới, tôi cảm thấy rất vui.",
    ],
    [
      "每天都有全国{1|各}地的旅游者来这里参观。",
      "Měi tiān dōu yǒu quánguó gè dì de lǚyóuzhě lái zhèlǐ cānguān.",
      "Mỗi ngày đều có du khách từ khắp nơi trong nước đến đây tham quan.",
    ],
    [
      "请{1|各}班同学快上车,我们马上就要出发了。",
      "Qǐng gè bān tóngxué kuài shàngchē, wǒmen mǎshàng jiù yào chūfā le.",
      "Mời học sinh các lớp mau lên xe, chúng ta sắp xuất phát rồi.",
    ],
    [
      "{1|每}个人都有自己的爱好。",
      "Měi ge rén dōu yǒu zìjǐ de àihào.",
      "Mỗi người đều có sở thích riêng của mình.",
    ],
    [
      "{1|每}星期有一次太极拳课。",
      "Měi xīngqī yǒu yí cì tàijíquán kè.",
      "Mỗi tuần có một buổi học Thái cực quyền.",
    ],
    [
      "他{1|每}一门课都学得很好。",
      "Tā měi yì mén kè dōu xué de hěn hǎo.",
      "Anh ấy môn nào cũng học rất tốt.",
    ],
  ],
  [
    [
      "朋友们看到以后,都向我{1|表示}祝贺。",
      "Péngyoumen kàndào yǐhòu, dōu xiàng wǒ biǎoshì zhùhè.",
      "Sau khi thấy, bạn bè đều chúc mừng tôi.",
    ],
    [
      "我送给老师一张照片,向老师{1|表示}感谢。",
      "Wǒ sòng gěi lǎoshī yì zhāng zhàopiàn, xiàng lǎoshī biǎoshì gǎnxiè.",
      "Tôi tặng thầy một tấm ảnh để bày tỏ lòng cảm ơn với thầy.",
    ],
    ["点头{1|表示}同意。", "Diǎntóu biǎoshì tóngyì.", "Gật đầu tỏ ý đồng ý."],
    [
      "他送你玫瑰花是{1|表示}对你的爱。",
      "Tā sòng nǐ méiguihuā shì biǎoshì duì nǐ de ài.",
      "Anh ấy tặng bạn hoa hồng là để bày tỏ tình yêu với bạn.",
    ],
    [
      "你说了以后,他有什么{1|表示}?",
      "Nǐ shuō le yǐhòu, tā yǒu shénme biǎoshì?",
      "Sau khi bạn nói, anh ấy có biểu hiện (phản ứng) gì không?",
    ],
    [
      "她这样做是友好的{1|表示}。",
      "Tā zhèyàng zuò shì yǒuhǎo de biǎoshì.",
      "Cô ấy làm như vậy là một biểu hiện thân thiện.",
    ],
  ],
];

// ===== HẾT DỮ LIỆU =====

const M: Record<string, E> = Object.fromEntries(S.map((s) => [s.id, s]));
const clean = (h: string) => h.replace(/[{}*&#~]/g, "");
const plain = (h: string) => clean(h).replace(/\//g, "");
const keyOf = (h: string) => h.match(/\{(.+?)\}/)?.[1] ?? "";
const norm = (s: string) => s.replace(/[\s，。,.？?！!“”":：、；;—\-]/g, "");
const shuffle = <T,>(a: T[]) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const blank = (h: string) =>
  h.replace(/[*&#~/]/g, "").replace(/\{.+?\}/g, "＿＿＿＿");

const Hl = ({ h }: { h: string }) => (
  <>
    {h
      .replace(/[*&#~/]/g, "")
      .split(/(\{.+?\})/)
      .map((t, i) =>
        t[0] === "{" ? (
          <span
            key={i}
            className="rounded bg-sky-100 px-0.5 font-semibold text-sky-700"
          >
            {t.slice(1, -1)}
          </span>
        ) : (
          t
        ),
      )}
  </>
);

const Info = ({ s }: { s: E }) => (
  <div className="mt-2 space-y-0.5 text-sm">
    <div className="text-stone-500">{s.p}</div>
    <div className="text-stone-700">{s.v}</div>
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
    {children}
  </div>
);
const Btn = ({
  onClick,
  children,
  kind = "main",
}: {
  onClick: () => void;
  children: React.ReactNode;
  kind?: "main" | "ghost";
}) => (
  <button
    onClick={onClick}
    className={
      "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
      (kind === "main"
        ? "bg-stone-800 text-white hover:bg-stone-700"
        : "border border-stone-300 text-stone-600 hover:bg-stone-100")
    }
  >
    {children}
  </button>
);
const Verdict = ({
  ok,
  children,
}: {
  ok: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={
      "mt-3 rounded-lg border p-3 text-sm " +
      (ok
        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
        : "border-rose-200 bg-rose-50 text-rose-800")
    }
  >
    {children}
  </div>
);

// ===== 1. TRẮC NGHIỆM (có đáp án ngay trên từng câu) =====
function MCTab() {
  const [seed, setSeed] = useState(0);
  const qs = useMemo(
    () =>
      MC.map((it) => {
        if (it.length === 4) {
          const [stem, k, d, ex] = it;
          return {
            stem,
            k,
            ex,
            s: null as E | null,
            opts: shuffle([k, ...d.split("|")]),
          };
        }
        const s = M[it[0]];
        const k = keyOf(s.h);
        return {
          stem: blank(s.h),
          k,
          ex: "",
          s: s as E | null,
          opts: shuffle([k, ...it[1].split("|")]),
        };
      }),
    [seed],
  );
  const [ans, setAns] = useState<Record<number, string>>({});
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const done = (i: number) => shown[i] || ans[i] !== undefined;
  const answered = Object.keys(ans).length;
  const score = qs.filter((q, i) => ans[i] === q.k).length;
  return (
    <>
      <div className="mb-3 text-sm text-stone-600">
        Đúng {score}/{answered} câu đã làm · tổng {qs.length} câu
      </div>
      {qs.map((q, i) => (
        <Card key={i + "-" + seed}>
          <div className="text-lg text-stone-800">
            {i + 1}. {q.stem}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {q.opts.map((o) => {
              let cls = "border-stone-300 text-stone-700 hover:bg-stone-100";
              if (done(i)) {
                if (o === q.k)
                  cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
                else if (ans[i] === o)
                  cls = "border-rose-400 bg-rose-50 text-rose-800";
                else cls = "border-stone-200 text-stone-400";
              }
              return (
                <button
                  key={o}
                  disabled={done(i)}
                  onClick={() => setAns({ ...ans, [i]: o })}
                  className={"rounded-lg border px-4 py-1.5 text-base " + cls}
                >
                  {o}
                </button>
              );
            })}
          </div>
          {!done(i) && (
            <button
              onClick={() => setShown({ ...shown, [i]: true })}
              className="mt-2 text-sm text-sky-700 hover:underline"
            >
              Xem đáp án
            </button>
          )}
          {done(i) && (
            <div className="mt-3 text-lg text-stone-800">
              {ans[i] !== undefined && (
                <div
                  className={
                    "mb-1 text-sm " +
                    (ans[i] === q.k ? "text-emerald-700" : "text-rose-700")
                  }
                >
                  {ans[i] === q.k ? "Đúng!" : `Chưa đúng. Đáp án: ${q.k}`}
                </div>
              )}
              {q.s ? (
                <>
                  <Hl h={q.s.h} />
                  <Info s={q.s} />
                </>
              ) : (
                <div className="text-base text-stone-700">{q.ex}</div>
              )}
            </div>
          )}
        </Card>
      ))}
      <Btn
        kind="ghost"
        onClick={() => {
          setAns({});
          setShown({});
          setSeed(seed + 1);
        }}
      >
        Làm lại
      </Btn>
    </>
  );
}

// ===== 2. SẮP XẾP CÂU =====
function Ord({ s, n }: { s: E; n: number }) {
  const ch = useMemo(() => clean(s.h).split("/"), [s]);
  const init = () => shuffle(ch.map((_, i) => i));
  const [pool, setPool] = useState<number[]>(init);
  const [ans, setAns] = useState<number[]>([]);
  const [chk, setChk] = useState(false);
  const ok = ans.map((i) => ch[i]).join("") === ch.join("");
  const chip = "rounded-lg border px-3 py-1 text-base ";
  return (
    <Card>
      <div className="text-sm text-stone-500">
        {n}. {s.v}
      </div>
      <div className="mt-3 flex min-h-11 flex-wrap gap-2 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-2">
        {ans.map((i) => (
          <button
            key={i}
            onClick={() => {
              setAns(ans.filter((x) => x !== i));
              setPool([...pool, i]);
              setChk(false);
            }}
            className={chip + "border-sky-300 bg-sky-50 text-sky-800"}
          >
            {ch[i]}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {pool.map((i) => (
          <button
            key={i}
            onClick={() => {
              setPool(pool.filter((x) => x !== i));
              setAns([...ans, i]);
              setChk(false);
            }}
            className={
              chip +
              "border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
            }
          >
            {ch[i]}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <Btn onClick={() => setChk(true)}>Kiểm tra</Btn>
        <Btn
          kind="ghost"
          onClick={() => {
            setPool(init());
            setAns([]);
            setChk(false);
          }}
        >
          Làm lại
        </Btn>
      </div>
      {chk && (
        <Verdict ok={ok}>
          {ok ? "Đúng!" : "Chưa đúng. Đáp án:"}
          <div className="mt-1 text-lg text-stone-800">
            <Hl h={s.h} />
          </div>
          <div className="text-stone-500">{s.p}</div>
        </Verdict>
      )}
    </Card>
  );
}
const OrdTab = () => (
  <>
    {S.filter((s) => !"*~".includes(s.h[0])).map((s, i) => (
      <Ord key={s.id} s={s} n={i + 1} />
    ))}
  </>
);

// ===== 3. SỬA CÂU SAI =====
function Fix({
  item,
  n,
}: {
  item: [string, string, string, string?];
  n: number;
}) {
  const [w, why, id, alt] = item;
  const s = M[id];
  const rights = alt ? alt.split("|") : [plain(s.h)];
  const [val, setVal] = useState(w);
  const [r, setR] = useState<"" | "ok" | "no" | "show">("");
  return (
    <Card>
      <div className="text-sm text-stone-500">{n}. Sửa câu sai</div>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          setR("");
        }}
        className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-lg text-stone-800 focus:border-sky-400 focus:outline-none"
      />
      <div className="mt-3 flex gap-2">
        <Btn
          onClick={() =>
            setR(rights.some((x) => norm(x) === norm(val)) ? "ok" : "no")
          }
        >
          Kiểm tra
        </Btn>
        <Btn
          kind="ghost"
          onClick={() => {
            setVal(w);
            setR("");
          }}
        >
          Làm lại
        </Btn>
        <Btn kind="ghost" onClick={() => setR("show")}>
          Xem đáp án
        </Btn>
      </div>
      {r && (
        <Verdict ok={r === "ok"}>
          {r === "ok" ? "Đúng!" : r === "no" ? "Chưa đúng. Đáp án:" : "Đáp án:"}
          <div className="mt-1 text-lg text-stone-800">
            {alt ? rights.join("  /  ") : <Hl h={s.h} />}
          </div>
          <div className="text-stone-500">{s.p}</div>
          <div className="mt-1 text-stone-700">{why}</div>
        </Verdict>
      )}
    </Card>
  );
}
const FixTab = () => (
  <>
    {FIX.map((f, i) => (
      <Fix key={i} item={f} n={i + 1} />
    ))}
  </>
);

// ===== 4. ĐẶT TỪ ĐÚNG VỊ TRÍ =====
function Place({ s, n }: { s: E; n: number }) {
  const raw = s.h.slice(1).split("/");
  const ix = raw.findIndex((x) => x.includes("{"));
  const rest = raw
    .filter((_, j) => j !== ix)
    .map((x) => x.replace(/[{}]/g, ""));
  const [pick, setPick] = useState<number | null>(null);
  return (
    <Card>
      <div className="text-sm text-stone-500">
        {n}. Đặt{" "}
        <span className="rounded bg-sky-100 px-1 font-semibold text-sky-700">
          {keyOf(s.h)}
        </span>{" "}
        vào vị trí thích hợp — {s.v}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-y-2 text-lg text-stone-800">
        {Array.from({ length: rest.length + 1 }, (_, i) => (
          <span key={i} className="flex items-center">
            <button
              disabled={pick !== null}
              onClick={() => setPick(i)}
              className={
                "mx-1 h-7 w-7 rounded-full border text-sm " +
                (pick === null
                  ? "border-stone-300 text-stone-500 hover:bg-sky-50"
                  : i === ix
                    ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                    : pick === i
                      ? "border-rose-400 bg-rose-50 text-rose-800"
                      : "border-stone-200 text-stone-300")
              }
            >
              {"ABCDEFGHI"[i]}
            </button>
            {rest[i]}
          </span>
        ))}
      </div>
      {pick !== null && (
        <Verdict ok={pick === ix}>
          {pick === ix ? "Đúng!" : `Chưa đúng. Đáp án: ${"ABCDEFGHI"[ix]}`}
          <div className="mt-1 text-lg text-stone-800">
            <Hl h={s.h} />
          </div>
          <div className="text-stone-500">{s.p}</div>
          <Btn kind="ghost" onClick={() => setPick(null)}>
            Làm lại
          </Btn>
        </Verdict>
      )}
    </Card>
  );
}
const PlaceTab = () => (
  <>
    {S.filter((s) => s.h[0] === "#").map((s, i) => (
      <Place key={s.id} s={s} n={i + 1} />
    ))}
  </>
);

// ===== 5. DỊCH (placeholder — thay bằng code cũ, dùng dữ liệu P ở đầu file) =====
function TrTab() {
  const flat = P.flat();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <>
      {flat.map(([h, p, v], i) => (
        <Card key={i}>
          <div className="text-stone-800">
            {i + 1}. {v}
          </div>
          <button
            onClick={() => setOpen({ ...open, [i]: !open[i] })}
            className="mt-2 text-sm text-sky-700 hover:underline"
          >
            {open[i] ? "Ẩn đáp án" : "Xem đáp án"}
          </button>
          {open[i] && (
            <div className="mt-1">
              <div className="text-lg text-stone-800">
                {h.replace(/\{1\|(.+?)\}/g, "$1")}
              </div>
              <div className="text-sm text-stone-500">{p}</div>
            </div>
          )}
        </Card>
      ))}
    </>
  );
}

// ===== 6. DANH SÁCH CÂU =====
function ListTab() {
  return (
    <>
      {SEC.map((sc) => (
        <div key={sc.k} className="mb-6">
          <h2 className="text-lg font-semibold text-stone-800">{sc.t}</h2>
          <p className="mb-2 text-sm text-stone-600">{sc.e}</p>
          {S.filter((s) => s.sec === sc.k).map((s) => {
            const bad = s.h[0] === "*";
            return (
              <details
                key={s.id}
                className="group mb-1.5 rounded-lg border border-stone-200 bg-white px-3 py-2"
              >
                <summary className="cursor-pointer list-none text-lg text-stone-800">
                  {bad && (
                    <span className="mr-1 font-semibold text-rose-600">
                      ✗ *
                    </span>
                  )}
                  <Hl h={s.h} />
                </summary>
                <Info s={s} />
              </details>
            );
          })}
        </div>
      ))}
    </>
  );
}

// ===== APP =====
const TABS: [string, () => JSX.Element][] = [
  ["Trắc nghiệm", MCTab],
  ["Sắp xếp câu", OrdTab],
  ["Sửa câu sai", FixTab],
  ["Đặt từ", PlaceTab],
  ["Dịch", TrTab],
  ["Danh sách câu", ListTab],
];

export default function App() {
  const [t, setT] = useState(0);
  const Cur = TABS[t][1];
  return (
    <div className="min-h-screen text-stone-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-xl font-semibold">
          汉语教程 第三册上 · 第二课 注释 & 词语用法
        </h1>
        <p className="mb-4 text-sm text-stone-500">
          Luyện tập từ các câu ví dụ ở phần Notes và Usage
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {TABS.map(([name], i) => (
            <button
              key={name}
              onClick={() => setT(i)}
              className={
                "rounded-lg px-3 py-1.5 text-sm font-medium " +
                (t === i
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-100")
              }
            >
              {name}
            </button>
          ))}
        </div>
        <Cur key={t} />
      </div>
    </div>
  );
}
