import React from "react";

/* =====================================================================
   TỪ VỰNG GTHN 5 (汉语教程 第三册 上) — BÀI 5: 回头再说
   Từ mới: file PDF (bai5_shengci.pdf)
   ---------------------------------------------------------------------
   CÁCH THÊM HIGHLIGHT SAU NÀY
   Chữ Hán / pinyin / tiếng Việt đều là chuỗi thuần, KHÔNG chèn thẻ HTML.
   Muốn tô xanh từ nào thì thêm vào mảng của câu đó:
     hl:   ["回头"]       -> tô trong câu tiếng Trung
     hlPy: ["huítóu"]     -> tô trong pinyin
     hlVi: ["lát nữa"]    -> tô trong tiếng Việt
   Ví dụ tự thêm (không có trong PDF) được gắn  added: true  -> hiện nhãn "+ thêm".
   ===================================================================== */

/* ============================== TYPES ============================== */

export type Sentence = {
  zh: string;
  py: string;
  vi: string;
  hl?: string[];
  hlPy?: string[];
  hlVi?: string[];
  added?: boolean;
};

export type Phrase = { zh: string; py: string; vi: string };

/** Một nhóm kết hợp từ: Lượng từ / Tân ngữ đi kèm / Trạng ngữ đi kèm / Đi với động từ, tính từ… */
export type UsageGroup = { label: string; items: Phrase[] };

/** Hàng phụ: từ liên quan (vd. 愿意的愿, 希望的望) */
export type Related = {
  label: string;
  pos?: string[];
  zh: string;
  py?: string;
  hanViet?: string;
  vi?: string;
  usage?: UsageGroup[];
  examples: Sentence[];
};

export type ComparePoint = {
  zh: string;
  py?: string;
  desc: string;
  eg?: Phrase[];
  examples?: Sentence[];
};
export type Compare = {
  title: string;
  points: ComparePoint[];
  examples?: Sentence[];
};

export type Entry = {
  id: string | number;
  zh: string;
  py: string;
  pos: string[];
  hanViet?: string;
  vi: string;
  en?: string;
  usage?: UsageGroup[];
  examples: Sentence[];
  related?: Related[];
  compare?: Compare[];
  notes?: string[];
};

export type Section = {
  title: string;
  subtitle?: string;
  entries: Entry[];
  jumpLinks?: boolean;
};

/* ============================== DATA =============================== */

const MAIN: Entry[] = [
  {
    id: 1,
    zh: "回头",
    py: "huítóu",
    pos: ["副"],
    hanViet: "HỒI ĐẦU",
    vi: "lát nữa, sau này; quay đầu lại",
    en: "after a while; soon",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "回头再说", py: "huítóu zàishuō", vi: "lát nữa nói tiếp" },
          { zh: "回头见", py: "huítóu jiàn", vi: "lát nữa gặp" },
        ],
      },
    ],
    examples: [
      {
        zh: "这件事回头再说吧。",
        py: "Zhè jiàn shì huítóu zàishuō ba.",
        vi: "Chuyện này lát nữa nói tiếp nhé.",
        hl: ["回头"],
        added: true,
      },
    ],
    notes: [
      "回头 gốc nghĩa là “quay đầu lại”, nhưng trong khẩu ngữ thường dùng như phó từ: “lát nữa, sau này”.",
    ],
  },
  {
    id: 2,
    zh: "再说",
    py: "zàishuō",
    pos: ["动"],
    hanViet: "TÁI THUYẾT",
    vi: "nói sau, để sau hãy nói; hơn nữa",
    en: "to talk about sth. later; not to deal with sth. till some time later",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "回头再说", py: "huítóu zàishuō", vi: "lát nữa nói" },
          { zh: "以后再说", py: "yǐhòu zàishuō", vi: "sau này nói" },
        ],
      },
    ],
    examples: [
      {
        zh: "现在没时间，这件事以后再说。",
        py: "Xiànzài méi shíjiān, zhè jiàn shì yǐhòu zàishuō.",
        vi: "Bây giờ không có thời gian, chuyện này sau này nói.",
        hl: ["再说"],
        added: true,
      },
    ],
  },
  {
    id: 3,
    zh: "口头语",
    py: "kǒutóuyǔ",
    pos: ["名"],
    hanViet: "KHẨU ĐẦU NGỮ",
    vi: "câu cửa miệng",
    en: "pet phrase",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "他的口头语", py: "tā de kǒutóuyǔ", vi: "câu cửa miệng của anh ấy" },
        ],
      },
    ],
    examples: [
      {
        zh: "“回头再说”是他的口头语。",
        py: "“Huítóu zàishuō” shì tā de kǒutóuyǔ.",
        vi: "“Lát nữa nói” là câu cửa miệng của anh ấy.",
        hl: ["口头语"],
        added: true,
      },
    ],
  },
  {
    id: 4,
    zh: "后来",
    py: "hòulái",
    pos: ["名"],
    hanViet: "HẬU LAI",
    vi: "sau đó, về sau",
    en: "later; afterwards",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "后来呢", py: "hòulái ne", vi: "sau đó thì sao" },
          { zh: "后来才知道", py: "hòulái cái zhīdào", vi: "về sau mới biết" },
        ],
      },
    ],
    examples: [
      {
        zh: "后来我才知道这件事。",
        py: "Hòulái wǒ cái zhīdào zhè jiàn shì.",
        vi: "Về sau tôi mới biết chuyện này.",
        hl: ["后来"],
        added: true,
      },
    ],
    compare: [
      {
        title: "后来 vs 以后 vs 然后",
        points: [
          { zh: "后来", py: "hòulái", desc: "Về sau (kể lại sự việc đã qua)." },
          { zh: "以后", py: "yǐhòu", desc: "Sau này (có thể dùng cho tương lai)." },
          { zh: "然后", py: "ránhòu", desc: "Rồi thì, sau đó (nối các bước liên tiếp)." },
        ],
      },
    ],
  },
  {
    id: 5,
    zh: "其实",
    py: "qíshí",
    pos: ["副"],
    hanViet: "KỲ THỰC",
    vi: "thật ra, kỳ thực",
    en: "actually; in fact",
    usage: [
      {
        label: "Cấu trúc: 其实 + mệnh đề",
        items: [
          { zh: "其实不然", py: "qíshí bùrán", vi: "thật ra không phải vậy" },
        ],
      },
    ],
    examples: [
      {
        zh: "其实我早就知道这件事了。",
        py: "Qíshí wǒ zǎo jiù zhīdào zhè jiàn shì le.",
        vi: "Thật ra tôi đã biết chuyện này từ lâu rồi.",
        hl: ["其实"],
        added: true,
      },
    ],
  },
  {
    id: 6,
    zh: "民航",
    py: "mínháng",
    pos: ["名"],
    hanViet: "DÂN HÀNG",
    vi: "hàng không dân dụng",
    en: "civil aviation",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "中国民航", py: "Zhōngguó Mínháng", vi: "Hàng không dân dụng Trung Quốc" },
        ],
      },
    ],
    examples: [
      {
        zh: "他坐中国民航的飞机去北京。",
        py: "Tā zuò Zhōngguó Mínháng de fēijī qù Běijīng.",
        vi: "Anh ấy đi máy bay của Hàng không dân dụng Trung Quốc đến Bắc Kinh.",
        hl: ["民航"],
        added: true,
      },
    ],
  },
  {
    id: 7,
    zh: "邻",
    py: "lín",
    pos: ["形"],
    hanViet: "LÂN",
    vi: "bên cạnh, láng giềng",
    en: "adjacent; neighbor",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "邻居", py: "línjū", vi: "hàng xóm" },
          { zh: "邻国", py: "línguó", vi: "nước láng giềng" },
        ],
      },
    ],
    examples: [
      {
        zh: "中国有很多邻国。",
        py: "Zhōngguó yǒu hěn duō línguó.",
        vi: "Trung Quốc có nhiều nước láng giềng.",
        hl: ["邻国"],
        added: true,
      },
    ],
    notes: ["邻 thường dùng trong từ ghép: 邻居 (hàng xóm), 邻国 (nước láng giềng)."],
  },
  {
    id: 8,
    zh: "地道",
    py: "dìdao",
    pos: ["形"],
    hanViet: "ĐỊA ĐẠO",
    vi: "chính gốc, thuần chất, đúng chuẩn",
    en: "pure; real; up to standard",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "地道的北京话", py: "dìdao de Běijīnghuà", vi: "tiếng Bắc Kinh chính gốc" },
          { zh: "味道很地道", py: "wèidao hěn dìdao", vi: "hương vị rất chuẩn" },
        ],
      },
    ],
    examples: [
      {
        zh: "这家饭馆的菜很地道。",
        py: "Zhè jiā fànguǎn de cài hěn dìdao.",
        vi: "Món ăn của quán này rất chuẩn vị.",
        hl: ["地道"],
        added: true,
      },
    ],
    notes: ["Đọc dìdao (nhẹ) khi nghĩa là “chính gốc, thuần chất”; đọc dìdào khi nghĩa là “đường hầm”."],
  },
  {
    id: 9,
    zh: "回答",
    py: "huídá",
    pos: ["动"],
    hanViet: "HỒI ĐÁP",
    vi: "trả lời",
    en: "to answer; to reply",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "回答问题", py: "huídá wèntí", vi: "trả lời câu hỏi" },
          { zh: "回答老师", py: "huídá lǎoshī", vi: "trả lời thầy cô" },
        ],
      },
    ],
    examples: [
      {
        zh: "请你回答这个问题。",
        py: "Qǐng nǐ huídá zhège wèntí.",
        vi: "Mời bạn trả lời câu hỏi này.",
        hl: ["回答"],
        added: true,
      },
    ],
  },
  {
    id: 10,
    zh: "名片",
    py: "míngpiàn",
    pos: ["名"],
    hanViet: "DANH THIẾP",
    vi: "danh thiếp",
    en: "name card",
    usage: [
      {
        label: "Lượng từ / kết hợp",
        items: [
          { zh: "一张名片", py: "yì zhāng míngpiàn", vi: "một tấm danh thiếp" },
          { zh: "递名片", py: "dì míngpiàn", vi: "đưa danh thiếp" },
        ],
      },
    ],
    examples: [
      {
        zh: "他递给我一张名片。",
        py: "Tā dì gěi wǒ yì zhāng míngpiàn.",
        vi: "Anh ấy đưa cho tôi một tấm danh thiếp.",
        hl: ["名片"],
        added: true,
      },
    ],
  },
  {
    id: 11,
    zh: "几乎",
    py: "jīhū",
    pos: ["副"],
    hanViet: "CƠ HỒ",
    vi: "gần như, hầu như",
    en: "all but; almost; close to",
    usage: [
      {
        label: "Cấu trúc: 几乎 + động từ / tính từ",
        items: [
          { zh: "几乎忘了", py: "jīhū wàng le", vi: "gần như quên rồi" },
          { zh: "几乎每天", py: "jīhū měitiān", vi: "hầu như mỗi ngày" },
        ],
      },
    ],
    examples: [
      {
        zh: "我几乎每天都学汉语。",
        py: "Wǒ jīhū měitiān dōu xué Hànyǔ.",
        vi: "Tôi hầu như ngày nào cũng học tiếng Hán.",
        hl: ["几乎"],
        added: true,
      },
    ],
  },
  {
    id: 12,
    zh: "同时",
    py: "tóngshí",
    pos: ["名"],
    hanViet: "ĐỒNG THỜI",
    vi: "đồng thời, cùng lúc",
    en: "at the same time; meanwhile",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "与此同时", py: "yǔ cǐ tóngshí", vi: "cùng với đó" },
          { zh: "同时进行", py: "tóngshí jìnxíng", vi: "tiến hành đồng thời" },
        ],
      },
    ],
    examples: [
      {
        zh: "他一边工作，一边学习，同时还照顾家人。",
        py: "Tā yìbiān gōngzuò, yìbiān xuéxí, tóngshí hái zhàogù jiārén.",
        vi: "Anh ấy vừa làm việc, vừa học, đồng thời còn chăm sóc gia đình.",
        hl: ["同时"],
        added: true,
      },
    ],
  },
  {
    id: 13,
    zh: "实在",
    py: "shízài",
    pos: ["形", "副"],
    hanViet: "THỰC TẠI",
    vi: "thật thà, chân thật; thật sự, quả thực",
    en: "sincere; really",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "实在人", py: "shízài rén", vi: "người thật thà" },
          { zh: "实在对不起", py: "shízài duìbuqǐ", vi: "thật sự xin lỗi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他这个人很实在。",
        py: "Tā zhège rén hěn shízài.",
        vi: "Con người anh ấy rất thật thà.",
        hl: ["实在"],
        added: true,
      },
    ],
  },
  {
    id: 14,
    zh: "之后",
    py: "zhīhòu",
    pos: ["名"],
    hanViet: "CHI HẬU",
    vi: "sau đó, về sau",
    en: "after that; afterwards",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "从那之后", py: "cóng nà zhīhòu", vi: "từ sau đó" },
          { zh: "三天之后", py: "sān tiān zhīhòu", vi: "ba ngày sau" },
        ],
      },
    ],
    examples: [
      {
        zh: "三天之后，我们又见面了。",
        py: "Sān tiān zhīhòu, wǒmen yòu jiànmiàn le.",
        vi: "Ba ngày sau, chúng tôi lại gặp nhau.",
        hl: ["之后"],
        added: true,
      },
    ],
  },
  {
    id: 15,
    zh: "太太",
    py: "tàitai",
    pos: ["名"],
    hanViet: "THÁI THÁI",
    vi: "vợ (cách gọi lịch sự)",
    en: "wife",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "我太太", py: "wǒ tàitai", vi: "vợ tôi" },
          { zh: "张太太", py: "Zhāng tàitai", vi: "bà Trương" },
        ],
      },
    ],
    examples: [
      {
        zh: "这是我太太。",
        py: "Zhè shì wǒ tàitai.",
        vi: "Đây là vợ tôi.",
        hl: ["太太"],
        added: true,
      },
    ],
  },
  {
    id: 16,
    zh: "临了(儿)",
    py: "línliǎor",
    pos: ["副"],
    hanViet: "LÂM LIỄU",
    vi: "cuối cùng, đến lúc kết thúc",
    en: "finally; in the end",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "临了儿", py: "línliǎor", vi: "đến cuối cùng" },
        ],
      },
    ],
    examples: [
      {
        zh: "临了儿，他还送我好多书。",
        py: "Línliǎor, tā hái sòng wǒ hǎoduō shū.",
        vi: "Đến cuối cùng, anh ấy còn tặng tôi rất nhiều sách.",
        hl: ["临了儿"],
        added: true,
      },
    ],
    notes: ["“了” đọc là liǎo, nghĩa là “kết thúc”. 临了儿 = vào lúc sắp kết thúc."],
  },
  {
    id: 17,
    zh: "粗",
    py: "cū",
    pos: ["形"],
    hanViet: "THÔ",
    vi: "thô, to, thô ráp",
    en: "rough",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "粗心", py: "cūxīn", vi: "bất cẩn" },
          { zh: "粗声粗气", py: "cū shēng cū qì", vi: "nói năng thô lỗ" },
        ],
      },
    ],
    examples: [
      {
        zh: "他说话的声音很粗。",
        py: "Tā shuōhuà de shēngyīn hěn cū.",
        vi: "Giọng nói của anh ấy rất thô.",
        hl: ["粗"],
        added: true,
      },
    ],
  },
  {
    id: 18,
    zh: "价钱",
    py: "jiàqian",
    pos: ["名"],
    hanViet: "GIÁ TIỀN",
    vi: "giá cả",
    en: "price",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "价钱便宜", py: "jiàqian piányi", vi: "giá rẻ" },
          { zh: "讲价钱", py: "jiǎng jiàqian", vi: "mặc cả" },
        ],
      },
    ],
    examples: [
      {
        zh: "这件衣服的价钱不贵。",
        py: "Zhè jiàn yīfu de jiàqian bú guì.",
        vi: "Giá của bộ quần áo này không đắt.",
        hl: ["价钱"],
        added: true,
      },
    ],
  },
  {
    id: 19,
    zh: "付",
    py: "fù",
    pos: ["动"],
    hanViet: "PHÓ",
    vi: "trả (tiền)",
    en: "to pay",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "付钱", py: "fù qián", vi: "trả tiền" },
          { zh: "付款", py: "fù kuǎn", vi: "thanh toán" },
        ],
      },
    ],
    examples: [
      {
        zh: "我来付钱吧。",
        py: "Wǒ lái fù qián ba.",
        vi: "Để tôi trả tiền nhé.",
        hl: ["付"],
        added: true,
      },
    ],
  },
  {
    id: 20,
    zh: "平淡",
    py: "píngdàn",
    pos: ["形"],
    hanViet: "BÌNH ĐẠM",
    vi: "bình thường, nhạt nhẽo, êm đềm",
    en: "flat; insipid",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "平淡的生活", py: "píngdàn de shēnghuó", vi: "cuộc sống bình thường" },
        ],
      },
    ],
    examples: [
      {
        zh: "我喜欢平淡的生活。",
        py: "Wǒ xǐhuan píngdàn de shēnghuó.",
        vi: "Tôi thích cuộc sống bình dị.",
        hl: ["平淡"],
        added: true,
      },
    ],
  },
  {
    id: 21,
    zh: "至于",
    py: "zhìyú",
    pos: ["介"],
    hanViet: "CHÍ Ư",
    vi: "còn về, đối với",
    en: "as for; as to",
    usage: [
      {
        label: "Cấu trúc: 至于 + danh từ / mệnh đề",
        items: [
          { zh: "至于这个问题", py: "zhìyú zhège wèntí", vi: "còn về vấn đề này" },
        ],
      },
    ],
    examples: [
      {
        zh: "至于这件事，我们以后再说。",
        py: "Zhìyú zhè jiàn shì, wǒmen yǐhòu zàishuō.",
        vi: "Còn về chuyện này, chúng ta sau này nói tiếp.",
        hl: ["至于"],
        added: true,
      },
    ],
  },
  {
    id: 22,
    zh: "日子",
    py: "rìzi",
    pos: ["名"],
    hanViet: "NHẬT TỬ",
    vi: "ngày tháng, cuộc sống",
    en: "day; date",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "过日子", py: "guò rìzi", vi: "sống qua ngày" },
          { zh: "好日子", py: "hǎo rìzi", vi: "ngày tốt lành" },
        ],
      },
    ],
    examples: [
      {
        zh: "他们的日子过得很幸福。",
        py: "Tāmen de rìzi guò de hěn xìngfú.",
        vi: "Cuộc sống của họ rất hạnh phúc.",
        hl: ["日子"],
        added: true,
      },
    ],
  },
  {
    id: 23,
    zh: "推辞",
    py: "tuīcí",
    pos: ["动"],
    hanViet: "SUY TỪ",
    vi: "từ chối, khước từ",
    en: "to refuse; to turn down; to decline (an appointment, invitation, present, etc.)",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "推辞邀请", py: "tuīcí yāoqǐng", vi: "từ chối lời mời" },
        ],
      },
    ],
    examples: [
      {
        zh: "他推辞了朋友的邀请。",
        py: "Tā tuīcí le péngyou de yāoqǐng.",
        vi: "Anh ấy đã từ chối lời mời của bạn.",
        hl: ["推辞"],
        added: true,
      },
    ],
  },
  {
    id: 24,
    zh: "温暖",
    py: "wēnnuǎn",
    pos: ["形"],
    hanViet: "ÔN NOÃN",
    vi: "ấm áp",
    en: "warm",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "温暖的家", py: "wēnnuǎn de jiā", vi: "gia đình ấm áp" },
          { zh: "感到温暖", py: "gǎndào wēnnuǎn", vi: "cảm thấy ấm áp" },
        ],
      },
    ],
    examples: [
      {
        zh: "他的话让我感到很温暖。",
        py: "Tā de huà ràng wǒ gǎndào hěn wēnnuǎn.",
        vi: "Lời nói của anh ấy khiến tôi cảm thấy rất ấm áp.",
        hl: ["温暖"],
        added: true,
      },
    ],
  },
  {
    id: 25,
    zh: "等待",
    py: "děngdài",
    pos: ["动"],
    hanViet: "ĐẲNG ĐÃI",
    vi: "chờ đợi",
    en: "to wait; to expect",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "等待机会", py: "děngdài jīhuì", vi: "chờ đợi cơ hội" },
          { zh: "等待朋友", py: "děngdài péngyou", vi: "chờ bạn" },
        ],
      },
    ],
    examples: [
      {
        zh: "我在车站等待朋友。",
        py: "Wǒ zài chēzhàn děngdài péngyou.",
        vi: "Tôi đang chờ bạn ở nhà ga.",
        hl: ["等待"],
        added: true,
      },
    ],
  },
  {
    id: 26,
    zh: "地面",
    py: "dìmiàn",
    pos: ["名"],
    hanViet: "ĐỊA DIỆN",
    vi: "mặt đất",
    en: "ground",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "地面上", py: "dìmiàn shàng", vi: "trên mặt đất" },
        ],
      },
    ],
    examples: [
      {
        zh: "地面上有很多水。",
        py: "Dìmiàn shàng yǒu hěn duō shuǐ.",
        vi: "Trên mặt đất có rất nhiều nước.",
        hl: ["地面"],
        added: true,
      },
    ],
  },
  {
    id: 27,
    zh: "熟悉",
    py: "shúxi",
    pos: ["形"],
    hanViet: "THỤC TẤT",
    vi: "quen thuộc, thông thạo",
    en: "familiar",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "熟悉情况", py: "shúxi qíngkuàng", vi: "quen với tình hình" },
          { zh: "很熟悉", py: "hěn shúxi", vi: "rất quen thuộc" },
        ],
      },
    ],
    examples: [
      {
        zh: "我对北京很熟悉。",
        py: "Wǒ duì Běijīng hěn shúxi.",
        vi: "Tôi rất quen thuộc với Bắc Kinh.",
        hl: ["熟悉"],
        added: true,
      },
    ],
  },
  {
    id: 28,
    zh: "路",
    py: "lù",
    pos: ["名"],
    hanViet: "LỘ",
    vi: "tuyến đường, lộ trình",
    en: "line; route",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "一路车", py: "yí lù chē", vi: "xe tuyến số 1" },
          { zh: "几路车", py: "jǐ lù chē", vi: "xe tuyến số mấy" },
        ],
      },
    ],
    examples: [
      {
        zh: "请问，去火车站坐几路车？",
        py: "Qǐngwèn, qù huǒchēzhàn zuò jǐ lù chē?",
        vi: "Xin hỏi, đi ga tàu thì đi xe tuyến số mấy?",
        hl: ["路"],
        added: true,
      },
    ],
    notes: ["路 trong bài là lượng từ chỉ tuyến xe buýt: 一路, 二路…"],
  },
  {
    id: 29,
    zh: "左顾右盼",
    py: "zuǒgù-yòupàn",
    pos: ["成语"],
    hanViet: "TẢ CỐ HỮU PHÁN",
    vi: "nhìn ngó xung quanh, ngó trước ngó sau",
    en: "to look around; to glance right and left",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "左顾右盼地走", py: "zuǒgù-yòupàn de zǒu", vi: "vừa đi vừa nhìn ngó" },
        ],
      },
    ],
    examples: [
      {
        zh: "他站在路口左顾右盼。",
        py: "Tā zhàn zài lùkǒu zuǒgù-yòupàn.",
        vi: "Anh ấy đứng ở ngã tư nhìn ngó xung quanh.",
        hl: ["左顾右盼"],
        added: true,
      },
    ],
  },
  {
    id: 30,
    zh: "主动",
    py: "zhǔdòng",
    pos: ["形"],
    hanViet: "CHỦ ĐỘNG",
    vi: "chủ động, tự giác",
    en: "on one's own initiative; voluntary",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "主动帮助", py: "zhǔdòng bāngzhù", vi: "chủ động giúp đỡ" },
          { zh: "很主动", py: "hěn zhǔdòng", vi: "rất chủ động" },
        ],
      },
    ],
    examples: [
      {
        zh: "他主动帮助了我。",
        py: "Tā zhǔdòng bāngzhù le wǒ.",
        vi: "Anh ấy đã chủ động giúp đỡ tôi.",
        hl: ["主动"],
        added: true,
      },
    ],
  },
  {
    id: 31,
    zh: "打招呼",
    py: "dǎ zhāohu",
    pos: ["动宾"],
    hanViet: "ĐẢ CHIÊU HÔ",
    vi: "chào hỏi",
    en: "to greet sb.; to say hello",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "跟……打招呼", py: "gēn… dǎ zhāohu", vi: "chào hỏi với…" },
          { zh: "打个招呼", py: "dǎ ge zhāohu", vi: "chào một câu" },
        ],
      },
    ],
    examples: [
      {
        zh: "见到老师要打招呼。",
        py: "Jiàndào lǎoshī yào dǎ zhāohu.",
        vi: "Gặp thầy cô phải chào hỏi.",
        hl: ["打招呼"],
        added: true,
      },
    ],
  },
  {
    id: 32,
    zh: "理",
    py: "lǐ",
    pos: ["动"],
    hanViet: "LÝ",
    vi: "(thường dùng trong phủ định) để ý, ngó ngàng tới",
    en: "(usually used in the negative) to pay attention to; to speak to",
    usage: [
      {
        label: "Cấu trúc: 不理 + ai đó",
        items: [
          { zh: "不理他", py: "bù lǐ tā", vi: "không để ý đến anh ấy" },
          { zh: "别理我", py: "bié lǐ wǒ", vi: "đừng để ý đến tôi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他生气了，不理我了。",
        py: "Tā shēngqì le, bù lǐ wǒ le.",
        vi: "Anh ấy giận rồi, không để ý đến tôi nữa.",
        hl: ["不理"],
        added: true,
      },
    ],
    notes: ["理 còn có nghĩa “lý lẽ, đạo lý” (道理) và “quản lý” (管理). Trong bài là “để ý, ngó ngàng”."],
  },
  {
    id: 33,
    zh: "方向",
    py: "fāngxiàng",
    pos: ["名"],
    hanViet: "PHƯƠNG HƯỚNG",
    vi: "phương hướng",
    en: "direction",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "方向感", py: "fāngxiànggǎn", vi: "cảm giác phương hướng" },
          { zh: "找方向", py: "zhǎo fāngxiàng", vi: "tìm phương hướng" },
        ],
      },
    ],
    examples: [
      {
        zh: "我分不清方向。",
        py: "Wǒ fēn bù qīng fāngxiàng.",
        vi: "Tôi không phân biệt được phương hướng.",
        hl: ["方向"],
        added: true,
      },
    ],
  },
  {
    id: 34,
    zh: "犹豫",
    py: "yóuyù",
    pos: ["形"],
    hanViet: "DO DỰ",
    vi: "do dự, lưỡng lự",
    en: "hesitant",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "犹豫不决", py: "yóuyù bùjué", vi: "do dự không quyết" },
          { zh: "很犹豫", py: "hěn yóuyù", vi: "rất do dự" },
        ],
      },
    ],
    examples: [
      {
        zh: "他犹豫了一下，还是答应了。",
        py: "Tā yóuyù le yíxià, háishi dāying le.",
        vi: "Anh ấy do dự một chút, rồi vẫn đồng ý.",
        hl: ["犹豫"],
        added: true,
      },
    ],
  },
  {
    id: 35,
    zh: "打交道",
    py: "dǎ jiāodao",
    pos: ["动宾"],
    hanViet: "ĐẢ GIAO ĐẠO",
    vi: "giao thiệp, tiếp xúc",
    en: "to come into (or make) contact with; to have dealings with",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "和……打交道", py: "hé… dǎ jiāodao", vi: "giao thiệp với…" },
        ],
      },
    ],
    examples: [
      {
        zh: "我喜欢和中国人打交道。",
        py: "Wǒ xǐhuan hé Zhōngguórén dǎ jiāodao.",
        vi: "Tôi thích giao thiệp với người Trung Quốc.",
        hl: ["打交道"],
        added: true,
      },
    ],
  },
  {
    id: 36,
    zh: "顺路",
    py: "shùnlù",
    pos: ["副", "形"],
    hanViet: "THUẬN LỘ",
    vi: "tiện đường, nhân tiện",
    en: "passively; on the way",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "顺路去看看", py: "shùnlù qù kànkan", vi: "tiện đường ghé thăm" },
        ],
      },
    ],
    examples: [
      {
        zh: "我顺路去了一趟超市。",
        py: "Wǒ shùnlù qù le yí tàng chāoshì.",
        vi: "Tôi tiện đường ghé qua siêu thị.",
        hl: ["顺路"],
        added: true,
      },
    ],
  },
  {
    id: 37,
    zh: "发动",
    py: "fādòng",
    pos: ["动"],
    hanViet: "PHÁT ĐỘNG",
    vi: "khởi động (máy); phát động",
    en: "to start; to launch",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "发动汽车", py: "fādòng qìchē", vi: "khởi động ô tô" },
          { zh: "发动群众", py: "fādòng qúnzhòng", vi: "phát động quần chúng" },
        ],
      },
    ],
    examples: [
      {
        zh: "他发动了汽车，开走了。",
        py: "Tā fādòng le qìchē, kāi zǒu le.",
        vi: "Anh ấy khởi động xe rồi lái đi.",
        hl: ["发动"],
        added: true,
      },
    ],
  },
  {
    id: 38,
    zh: "招手",
    py: "zhāo shǒu",
    pos: ["动"],
    hanViet: "CHIÊU THỦ",
    vi: "vẫy tay",
    en: "to wave one's hand",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "招手叫车", py: "zhāo shǒu jiào chē", vi: "vẫy tay gọi xe" },
          { zh: "向我招手", py: "xiàng wǒ zhāo shǒu", vi: "vẫy tay về phía tôi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他向我招手，让我过去。",
        py: "Tā xiàng wǒ zhāo shǒu, ràng wǒ guòqù.",
        vi: "Anh ấy vẫy tay gọi tôi qua.",
        hl: ["招手"],
        added: true,
      },
    ],
  },
  {
    id: 39,
    zh: "没准儿",
    py: "méi zhǔnr",
    pos: ["动"],
    hanViet: "MỘT CHUẨN NHI",
    vi: "có lẽ, không chừng",
    en: "who knows; probably",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "没准儿他来了", py: "méi zhǔnr tā lái le", vi: "không chừng anh ấy đến rồi" },
        ],
      },
    ],
    examples: [
      {
        zh: "没准儿他今天不来了。",
        py: "Méi zhǔnr tā jīntiān bù lái le.",
        vi: "Không chừng hôm nay anh ấy không đến.",
        hl: ["没准儿"],
        added: true,
      },
    ],
  },
  {
    id: 40,
    zh: "见面",
    py: "jiàn miàn",
    pos: ["动"],
    hanViet: "KIẾN DIỆN",
    vi: "gặp mặt",
    en: "to meet; to see",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "跟……见面", py: "gēn… jiànmiàn", vi: "gặp mặt với…" },
          { zh: "第一次见面", py: "dì yī cì jiànmiàn", vi: "lần đầu gặp mặt" },
        ],
      },
    ],
    examples: [
      {
        zh: "我们明天见面吧。",
        py: "Wǒmen míngtiān jiànmiàn ba.",
        vi: "Ngày mai chúng ta gặp mặt nhé.",
        hl: ["见面"],
        added: true,
      },
    ],
  },
  {
    id: 41,
    zh: "愣",
    py: "lèng",
    pos: ["动"],
    hanViet: "LĂNG",
    vi: "sững sờ, ngẩn ra",
    en: "to be dumbfounded; to be stunned",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "愣住了", py: "lèng zhù le", vi: "sững người" },
        ],
      },
    ],
    examples: [
      {
        zh: "我愣在那里，不知道说什么好。",
        py: "Wǒ lèng zài nàli, bù zhīdào shuō shénme hǎo.",
        vi: "Tôi sững người ở đó, không biết nói gì.",
        hl: ["愣"],
        added: true,
      },
    ],
  },
  {
    id: 42,
    zh: "至今",
    py: "zhìjīn",
    pos: ["副"],
    hanViet: "CHÍ KIM",
    vi: "đến nay, cho tới nay",
    en: "up to now; to this day",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "至今没有", py: "zhìjīn méiyǒu", vi: "đến nay vẫn chưa" },
        ],
      },
    ],
    examples: [
      {
        zh: "至今我也没有再见过他。",
        py: "Zhìjīn wǒ yě méiyǒu zài jiànguo tā.",
        vi: "Đến nay tôi vẫn chưa gặp lại anh ấy.",
        hl: ["至今"],
        added: true,
      },
    ],
  },
];

/* ---- 专名: tên riêng ---- */
const PROPER: Entry[] = [
  {
    id: "P1",
    zh: "中国民航",
    py: "Zhōngguó Mínháng",
    pos: ["专名"],
    hanViet: "TRUNG QUỐC DÂN HÀNG",
    vi: "Hàng không dân dụng Trung Quốc (CAAC)",
    en: "CAAC (Civil Aviation Administration of China)",
    examples: [
      {
        zh: "他坐中国民航的飞机去北京。",
        py: "Tā zuò Zhōngguó Mínháng de fēijī qù Běijīng.",
        vi: "Anh ấy đi máy bay của Hàng không dân dụng Trung Quốc đến Bắc Kinh.",
        hl: ["中国民航"],
        added: true,
      },
    ],
  },
  {
    id: "P2",
    zh: "建国门",
    py: "Jiànguó Mén",
    pos: ["专名"],
    hanViet: "KIẾN QUỐC MÔN",
    vi: "Kiến Quốc Môn (một địa danh ở Bắc Kinh)",
    en: "Jianguomen, a place in Beijing",
    examples: [
      {
        zh: "建国门是北京的一个地铁站。",
        py: "Jiànguó Mén shì Běijīng de yí ge dìtiězhàn.",
        vi: "Kiến Quốc Môn là một ga tàu điện ngầm ở Bắc Kinh.",
        hl: ["建国门"],
        added: true,
      },
    ],
  },
  {
    id: "P3",
    zh: "西直门",
    py: "Xīzhí Mén",
    pos: ["专名"],
    hanViet: "TÂY TRỰC MÔN",
    vi: "Tây Trực Môn (một địa danh ở Bắc Kinh)",
    en: "Xizhimen, a place in Beijing",
    examples: [
      {
        zh: "我要在西直门换车。",
        py: "Wǒ yào zài Xīzhí Mén huàn chē.",
        vi: "Tôi phải đổi xe ở Tây Trực Môn.",
        hl: ["西直门"],
        added: true,
      },
    ],
  },
  {
    id: "P4",
    zh: "复兴门",
    py: "Fùxīng Mén",
    pos: ["专名"],
    hanViet: "PHỤC HƯNG MÔN",
    vi: "Phục Hưng Môn (một địa danh ở Bắc Kinh)",
    en: "Fuxingmen, a place in Beijing",
    examples: [
      {
        zh: "复兴门也是北京的一个地铁站。",
        py: "Fùxīng Mén yě shì Běijīng de yí ge dìtiězhàn.",
        vi: "Phục Hưng Môn cũng là một ga tàu điện ngầm ở Bắc Kinh.",
        hl: ["复兴门"],
        added: true,
      },
    ],
  },
];

const SECTIONS: Section[] = [
  {
    title: "生词",
    subtitle: "42 từ trong sách (file PDF)",
    entries: MAIN,
    jumpLinks: true,
  },
  {
    title: "专名 Zhuānmíng · Tên riêng",
    subtitle: "4 tên riêng trong sách",
    entries: PROPER,
  },
];

/* ============================ HELPERS ============================== */

const POS_LABEL: Record<string, string> = {
  名: "danh từ",
  动: "động từ",
  形: "tính từ",
  副: "phó từ",
  连: "liên từ",
  介: "giới từ",
  量: "lượng từ",
  成语: "thành ngữ",
  动宾: "cụm động tân",
  助: "trợ từ",
  代: "đại từ",
  专名: "tên riêng",
  谚语: "tục ngữ",
};

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function ZhText({ text }: { text: string }) {
  return (
    <>
      {text.split(/([\u3400-\u9fff]+)/g).map((part, i) =>
        /[\u3400-\u9fff]/.test(part) ? (
          <span key={i} className="ztai__zh">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

/** Tô xanh các từ/cụm trong `words` (nếu có) bên trong `text`. */
function Hl({ text, words }: { text: string; words?: string[] }) {
  const list = (words ?? []).filter(Boolean);
  if (!list.length) return <>{text}</>;
  const re = new RegExp(
    `(${[...list]
      .sort((a, b) => b.length - a.length)
      .map(escapeRe)
      .join("|")})`,
    "gi",
  );
  return (
    <>
      {text.split(re).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-sky-700">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

/* =========================== COMPONENTS ============================ */

function PosTag({ pos }: { pos?: string[] }) {
  if (!pos?.length) return null;
  return (
    <div>
      <div className="text-xl">（{pos.join("/")}）</div>
      <div className="text-xs text-slate-500">
        {pos.map((p) => POS_LABEL[p] ?? p).join(" / ")}
      </div>
    </div>
  );
}

function SentenceBlock({ s }: { s: Sentence }) {
  return (
    <div className="border-t border-slate-200 py-2 first:border-t-0 first:pt-0 last:pb-0">
      <div className="text-xl leading-snug">
        <Hl text={s.zh} words={s.hl} />
      </div>
      <div className="text-sm text-slate-500">
        <Hl text={s.py} words={s.hlPy} />
      </div>
      <div className="text-base text-slate-800">
        <Hl text={s.vi} words={s.hlVi} />
        {s.added && (
          <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 align-middle text-[10px] uppercase tracking-wide text-slate-400">
            + thêm
          </span>
        )}
      </div>
    </div>
  );
}

function Sentences({ list }: { list: Sentence[] }) {
  return (
    <div>
      {list.map((s, i) => (
        <SentenceBlock key={i} s={s} />
      ))}
    </div>
  );
}

function Usage({ groups }: { groups?: UsageGroup[] }) {
  if (!groups?.length) return null;
  return (
    <div className="mb-3 space-y-2">
      {groups.map((g, gi) => (
        <div key={gi}>
          <span className="mb-1 inline-block rounded bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">
            {g.label}
          </span>
          <ul className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
            {g.items.map((it, ii) => (
              <li key={ii} className="leading-snug">
                <span className="font-semibold">{it.zh}</span>{" "}
                {it.py && (
                  <span className="text-sm text-slate-500">{it.py}</span>
                )}{" "}
                <span className="text-sm text-slate-700">— {it.vi}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CompareRow({ c }: { c: Compare }) {
  return (
    <tr>
      <td
        colSpan={4}
        className="border border-slate-300 bg-amber-50 px-3 py-3 align-top"
      >
        <div className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-800">
          So sánh · {c.title}
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {c.points.map((p, i) => (
            <div
              key={i}
              className="rounded border border-amber-200 bg-white px-3 py-2"
            >
              <div>
                <span className="text-lg font-semibold">{p.zh}</span>{" "}
                {p.py && <span className="text-sm text-slate-500">{p.py}</span>}
              </div>
              <div className="text-sm leading-snug text-slate-800">
                {p.desc}
              </div>
              {p.eg?.map((e, ei) => (
                <div key={ei} className="mt-1 text-sm leading-snug">
                  <span className="font-semibold">{e.zh}</span>{" "}
                  <span className="text-slate-500">{e.py}</span>{" "}
                  <span className="text-slate-700">— {e.vi}</span>
                </div>
              ))}
              {p.examples?.length ? (
                <div className="mt-2 border-t border-amber-200 pt-2">
                  <Sentences list={p.examples} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {c.examples?.length ? (
          <div className="mt-3 rounded border border-amber-200 bg-white px-3 py-2">
            <Sentences list={c.examples} />
          </div>
        ) : null}
      </td>
    </tr>
  );
}

function EntryBody({ e }: { e: Entry }) {
  const related = e.related ?? [];
  const compare = e.compare ?? [];
  const rows = 2 + related.length + compare.length + (e.notes?.length ? 1 : 0);
  const cell = "border border-slate-300 px-3 py-2 align-top";

  return (
    <tbody className="border-t-4 border-slate-300 first:border-t-0">
      {/* Hàng 1: STT | từ (pinyin trên đầu) | từ loại | Hán Việt | nghĩa */}
      <tr>
        <td
          rowSpan={rows}
          className={`${cell} text-center text-lg font-semibold`}
        >
          {e.id}
        </td>
        <td rowSpan={2} className={cell}>
          <div id={`vocab-${e.id}`} className="scroll-mt-42 lg:scroll-mt-36">
            <ruby className="ztai__zh text-4xl leading-tight">
              {e.zh}
              <rt className="text-sm font-normal text-slate-600">
                <ZhText text={e.py} />
              </rt>
            </ruby>
          </div>
        </td>
        <td className={cell}>
          <PosTag pos={e.pos} />
        </td>
        <td className={`${cell} text-lg font-semibold uppercase`}>
          {e.hanViet}
        </td>
        <td className={cell}>
          <div className="text-lg">{e.vi}</div>
          {e.en && <div className="text-sm text-slate-500">{e.en}</div>}
        </td>
      </tr>

      {/* Hàng 2: kết hợp từ + ví dụ của chính từ này */}
      <tr>
        <td colSpan={3} className={cell}>
          <Usage groups={e.usage} />
          <Sentences list={e.examples} />
        </td>
      </tr>

      {/* Hàng phụ: từ liên quan */}
      {related.map((r, i) => (
        <tr key={`r${i}`}>
          <td className={`${cell} text-xl`}>{r.label}</td>
          <td className={cell}>
            <PosTag pos={r.pos} />
          </td>
          <td className={cell}>
            <div className="text-xl font-semibold">
              {r.zh}{" "}
              {r.hanViet && (
                <span className="text-lg uppercase">{r.hanViet}</span>
              )}
            </div>
            {r.py && <div className="text-sm text-slate-500">{r.py}</div>}
            {r.vi && <div className="text-sm text-slate-700">{r.vi}</div>}
          </td>
          <td className={cell}>
            <Usage groups={r.usage} />
            <Sentences list={r.examples} />
          </td>
        </tr>
      ))}

      {/* Phân biệt từ đồng nghĩa */}
      {compare.map((c, i) => (
        <CompareRow key={`c${i}`} c={c} />
      ))}

      {/* Ghi chú */}
      {e.notes?.length ? (
        <tr>
          <td
            colSpan={4}
            className="border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700"
          >
            {e.notes.map((n, i) => (
              <div key={i}>📌 {n}</div>
            ))}
          </td>
        </tr>
      ) : null}
    </tbody>
  );
}

function VocabTable({ entries }: { entries: Entry[] }) {
  return (
    <div className="w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain">
      <table className="min-w-100 xl:min-w-240 w-full table-fixed border-collapse text-slate-900">
        <colgroup>
          <col className="w-14" />
          <col className="w-28" />
          <col className="w-28" />
          <col className="w-60" />
          <col />
        </colgroup>
        {entries.map((e) => (
          <EntryBody key={String(e.id)} e={e} />
        ))}
      </table>
    </div>
  );
}

/* =============================== PAGE =============================== */

export default function VocabBai5() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-3 pb-5 sm:px-4 sm:pb-8">
      {SECTIONS.map((sec) => (
        <section key={sec.title} className="mb-12 min-w-0">
          <div className="my-3 flex items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
              <span className="ztai__zh text-stone-600">五</span>
              <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
                <span className="ztai__zh">{sec.title} </span>{" "}
                <span className="text-sm">Shēngcí</span>{" "}
                <span className="text-sm">New Words</span>
              </span>
            </div>
            {sec.subtitle && (
              <p className="text-sm text-slate-500">
                <ZhText text={sec.subtitle} />
              </p>
            )}
          </div>

          {sec.jumpLinks && (
            <>
              <div className="mb-3 w-full opacity-80">
                <audio
                  controls
                  preload="none"
                  className="lesson-audio h-10 w-full"
                >
                  <source
                    src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/05_tuvung.mp3"
                    type="audio/mpeg"
                  />
                  Trình duyệt của bạn không hỗ trợ phát âm thanh.
                </audio>
              </div>
              <nav
                className="sticky top-0 z-20 flex max-h-32 flex-wrap gap-2 overflow-y-auto border-y border-slate-200 bg-white/95 py-2 backdrop-blur dark:border-slate-700 dark:bg-slate-800/95 lg:max-h-none lg:overflow-visible"
                aria-label={`Danh sách ${sec.entries.length} từ vựng`}
              >
                {sec.entries.map((entry) => (
                  <a
                    key={String(entry.id)}
                    href={`#vocab-${entry.id}`}
                    className="rounded-sm bg-stone-100 px-3 py-1 text-xl text-gray-700 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <ZhText text={entry.zh} />
                  </a>
                ))}
              </nav>
            </>
          )}
          <VocabTable entries={sec.entries} />
          <div>
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-sky-700">Chữ xanh</span> = từ
              / cụm cần chú ý. Nhãn{" "}
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                + thêm
              </span>{" "}
              = ví dụ không có trong PDF, mình tự thêm (bạn kiểm tra lại giúp
              nhé).
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}