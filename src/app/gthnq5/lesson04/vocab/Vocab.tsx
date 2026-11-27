import React from "react";

/* =====================================================================
   TỪ VỰNG GTHN 5 (汉语教程 第三册 上) — BÀI 4: 理想
   Từ mới: file PDF (bai4_tumoi.pdf)
   ---------------------------------------------------------------------
   CÁCH THÊM HIGHLIGHT SAU NÀY
   Chữ Hán / pinyin / tiếng Việt đều là chuỗi thuần, KHÔNG chèn thẻ HTML.
   Muốn tô xanh từ nào thì thêm vào mảng của câu đó:
     hl:   ["不愿意"]       -> tô trong câu tiếng Trung
     hlPy: ["bú yuànyì"]    -> tô trong pinyin
     hlVi: ["không muốn"]   -> tô trong tiếng Việt
   Ví dụ tự thêm (không có trong docx) được gắn  added: true  -> hiện nhãn "+ thêm".
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
    zh: "理想",
    py: "lǐxiǎng",
    pos: ["名", "形"],
    hanViet: "LÝ TƯỞNG",
    vi: "lý tưởng; lý tưởng (tính từ: lý tưởng, tốt đẹp)",
    en: "imagination or hope for the future; ideal",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "有理想", py: "yǒu lǐxiǎng", vi: "có lý tưởng" },
          { zh: "远大理想", py: "yuǎndà lǐxiǎng", vi: "lý tưởng lớn lao" },
          { zh: "实现理想", py: "shíxiàn lǐxiǎng", vi: "thực hiện lý tưởng" },
        ],
      },
    ],
    examples: [
      {
        zh: "每个人都有自己的理想。",
        py: "Měi ge rén dōu yǒu zìjǐ de lǐxiǎng.",
        vi: "Mỗi người đều có lý tưởng của riêng mình.",
        hl: ["理想"],
        added: true,
      },
      {
        zh: "他的理想是当一名医生。",
        py: "Tā de lǐxiǎng shì dāng yì míng yīshēng.",
        vi: "Lý tưởng của anh ấy là trở thành bác sĩ.",
        hl: ["理想"],
        added: true,
      },
    ],
  },
  {
    id: 2,
    zh: "专业",
    py: "zhuānyè",
    pos: ["名", "形"],
    hanViet: "CHUYÊN NGHIỆP",
    vi: "chuyên ngành; chuyên nghiệp",
    en: "special field of study; professional",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "学什么专业",
            py: "xué shénme zhuānyè",
            vi: "học chuyên ngành gì",
          },
          { zh: "专业水平", py: "zhuānyè shuǐpíng", vi: "trình độ chuyên môn" },
          { zh: "专业知识", py: "zhuānyè zhīshi", vi: "kiến thức chuyên môn" },
        ],
      },
    ],
    examples: [
      {
        zh: "我大学的专业是汉语。",
        py: "Wǒ dàxué de zhuānyè shì Hànyǔ.",
        vi: "Chuyên ngành đại học của tôi là tiếng Hán.",
        hl: ["专业"],
        added: true,
      },
      {
        zh: "他是一名专业的翻译。",
        py: "Tā shì yì míng zhuānyè de fānyì.",
        vi: "Anh ấy là một biên dịch viên chuyên nghiệp.",
        hl: ["专业"],
        added: true,
      },
    ],
  },
  {
    id: 3,
    zh: "当时",
    py: "dāngshí",
    pos: ["名"],
    hanViet: "ĐƯƠNG THỜI",
    vi: "lúc đó, khi đó (thời điểm trong quá khứ)",
    en: "at that time; then",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "当时的情况",
            py: "dāngshí de qíngkuàng",
            vi: "tình hình lúc đó",
          },
          { zh: "当时我……", py: "dāngshí wǒ…", vi: "lúc đó tôi…" },
        ],
      },
    ],
    examples: [
      {
        zh: "当时我还不知道这件事。",
        py: "Dāngshí wǒ hái bù zhīdào zhè jiàn shì.",
        vi: "Lúc đó tôi vẫn chưa biết chuyện này.",
        hl: ["当时"],
        added: true,
      },
      {
        zh: "当时的情况很复杂。",
        py: "Dāngshí de qíngkuàng hěn fùzá.",
        vi: "Tình hình lúc đó rất phức tạp.",
        hl: ["当时"],
        added: true,
      },
    ],
    compare: [
      {
        title: "当时 vs 现在 vs 以后",
        points: [
          {
            zh: "当时",
            py: "dāngshí",
            desc: "Lúc đó (thời điểm đã qua được nhắc tới).",
          },
          {
            zh: "现在",
            py: "xiànzài",
            desc: "Bây giờ, hiện tại.",
          },
          {
            zh: "以后",
            py: "yǐhòu",
            desc: "Sau này, về sau.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    zh: "赞成",
    py: "zànchéng",
    pos: ["动"],
    hanViet: "TÁN THÀNH",
    vi: "tán thành, đồng ý",
    en: "to approve of; to favor; to agree with",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          {
            zh: "赞成他的意见",
            py: "zànchéng tā de yìjiàn",
            vi: "tán thành ý kiến của anh ấy",
          },
          { zh: "不赞成", py: "bù zànchéng", vi: "không tán thành" },
          {
            zh: "赞成这个计划",
            py: "zànchéng zhège jìhuà",
            vi: "tán thành kế hoạch này",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "我赞成你的看法。",
        py: "Wǒ zànchéng nǐ de kànfǎ.",
        vi: "Tôi tán thành cách nhìn của bạn.",
        hl: ["赞成"],
        added: true,
      },
      {
        zh: "大家都赞成这个计划。",
        py: "Dàjiā dōu zànchéng zhège jìhuà.",
        vi: "Mọi người đều tán thành kế hoạch này.",
        hl: ["赞成"],
        added: true,
      },
    ],
    compare: [
      {
        title: "赞成 vs 同意 vs 支持",
        points: [
          {
            zh: "赞成",
            py: "zànchéng",
            desc: "Tán thành (nghiêng về ý kiến, quan điểm).",
          },
          {
            zh: "同意",
            py: "tóngyì",
            desc: "Đồng ý (chấp thuận đề nghị, yêu cầu).",
          },
          {
            zh: "支持",
            py: "zhīchí",
            desc: "Ủng hộ (bằng hành động, tinh thần).",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    zh: "系",
    py: "xì",
    pos: ["名"],
    hanViet: "HỆ",
    vi: "khoa (trong trường đại học)",
    en: "department",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "中文系", py: "Zhōngwén xì", vi: "khoa Trung văn" },
          { zh: "历史系", py: "lìshǐ xì", vi: "khoa Lịch sử" },
          { zh: "系主任", py: "xì zhǔrèn", vi: "chủ nhiệm khoa" },
        ],
      },
    ],
    examples: [
      {
        zh: "他在中文系学习。",
        py: "Tā zài Zhōngwén xì xuéxí.",
        vi: "Anh ấy học ở khoa Trung văn.",
        hl: ["中文系"],
        added: true,
      },
    ],
    notes: [
      "系 còn có âm xì (buộc, thắt: 系鞋带) và jì (buộc, cột). Trong bài này đọc xì, nghĩa là khoa.",
    ],
  },
  {
    id: 6,
    zh: "著名",
    py: "zhùmíng",
    pos: ["形"],
    hanViet: "TRỨ DANH",
    vi: "nổi tiếng, trứ danh",
    en: "famous; well-known",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          {
            zh: "著名的作家",
            py: "zhùmíng de zuòjiā",
            vi: "nhà văn nổi tiếng",
          },
          {
            zh: "著名大学",
            py: "zhùmíng dàxué",
            vi: "trường đại học nổi tiếng",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "南京是一座著名的城市。",
        py: "Nánjīng shì yí zuò zhùmíng de chéngshì.",
        vi: "Nam Kinh là một thành phố nổi tiếng.",
        hl: ["著名"],
        added: true,
      },
      {
        zh: "这是一位著名的作家。",
        py: "Zhè shì yí wèi zhùmíng de zuòjiā.",
        vi: "Đây là một nhà văn nổi tiếng.",
        hl: ["著名"],
        added: true,
      },
    ],
  },
  {
    id: 7,
    zh: "旅途",
    py: "lǚtú",
    pos: ["名"],
    hanViet: "LỮ ĐỒ",
    vi: "hành trình, chặng đường đi",
    en: "on a journey; during a trip",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "旅途愉快", py: "lǚtú yúkuài", vi: "chuyến đi vui vẻ" },
          {
            zh: "旅途生活",
            py: "lǚtú shēnghuó",
            vi: "cuộc sống trên đường đi",
          },
          { zh: "在旅途中", py: "zài lǚtú zhōng", vi: "trong chuyến đi" },
        ],
      },
    ],
    examples: [
      {
        zh: "祝你旅途愉快！",
        py: "Zhù nǐ lǚtú yúkuài!",
        vi: "Chúc bạn chuyến đi vui vẻ!",
        hl: ["旅途愉快"],
        added: true,
      },
      {
        zh: "在旅途中，我认识了很多朋友。",
        py: "Zài lǚtú zhōng, wǒ rènshi le hěn duō péngyou.",
        vi: "Trong chuyến đi, tôi đã quen rất nhiều bạn.",
        hl: ["旅途中"],
        added: true,
      },
    ],
  },
  {
    id: 8,
    zh: "宾馆",
    py: "bīnguǎn",
    pos: ["名"],
    hanViet: "TÂN QUÁN",
    vi: "khách sạn (lớn, có tiện nghi)",
    en: "hotel",
    usage: [
      {
        label: "Lượng từ / kết hợp",
        items: [
          { zh: "一家宾馆", py: "yì jiā bīnguǎn", vi: "một khách sạn" },
          { zh: "住宾馆", py: "zhù bīnguǎn", vi: "ở khách sạn" },
          { zh: "五星级宾馆", py: "wǔxīngjí bīnguǎn", vi: "khách sạn năm sao" },
        ],
      },
    ],
    examples: [
      {
        zh: "我们住在车站附近的一家宾馆。",
        py: "Wǒmen zhù zài chēzhàn fùjìn de yì jiā bīnguǎn.",
        vi: "Chúng tôi ở một khách sạn gần nhà ga.",
        hl: ["宾馆"],
        added: true,
      },
    ],
  },
  {
    id: 9,
    zh: "地图",
    py: "dìtú",
    pos: ["名"],
    hanViet: "ĐỊA ĐỒ",
    vi: "bản đồ",
    en: "map",
    usage: [
      {
        label: "Lượng từ / động từ đi kèm",
        items: [
          { zh: "一张地图", py: "yì zhāng dìtú", vi: "một tấm bản đồ" },
          { zh: "看地图", py: "kàn dìtú", vi: "xem bản đồ" },
          { zh: "中国地图", py: "Zhōngguó dìtú", vi: "bản đồ Trung Quốc" },
        ],
      },
    ],
    examples: [
      {
        zh: "我买了一张南京地图。",
        py: "Wǒ mǎi le yì zhāng Nánjīng dìtú.",
        vi: "Tôi đã mua một tấm bản đồ Nam Kinh.",
        hl: ["地图"],
        added: true,
      },
      {
        zh: "看着地图，我们找到了那个宾馆。",
        py: "Kànzhe dìtú, wǒmen zhǎodào le nàge bīnguǎn.",
        vi: "Nhìn bản đồ, chúng tôi đã tìm được khách sạn đó.",
        hl: ["地图"],
        added: true,
      },
    ],
  },
  {
    id: 10,
    zh: "对面",
    py: "duìmiàn",
    pos: ["名"],
    hanViet: "ĐỐI DIỆN",
    vi: "đối diện, phía bên kia",
    en: "opposite; right in front",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "在对面", py: "zài duìmiàn", vi: "ở đối diện" },
          { zh: "对面的人", py: "duìmiàn de rén", vi: "người đối diện" },
          { zh: "马路对面", py: "mǎlù duìmiàn", vi: "bên kia đường" },
        ],
      },
    ],
    examples: [
      {
        zh: "银行就在宾馆的对面。",
        py: "Yínháng jiù zài bīnguǎn de duìmiàn.",
        vi: "Ngân hàng ngay đối diện khách sạn.",
        hl: ["对面"],
        added: true,
      },
      {
        zh: "坐在我对面的是一个姑娘。",
        py: "Zuò zài wǒ duìmiàn de shì yí ge gūniang.",
        vi: "Ngồi đối diện tôi là một cô gái.",
        hl: ["对面"],
        added: true,
      },
    ],
  },
  {
    id: 11,
    zh: "好像",
    py: "hǎoxiàng",
    pos: ["副"],
    hanViet: "HẢO TƯỢNG",
    vi: "hình như, dường như",
    en: "to look as if; to seem like",
    usage: [
      {
        label: "Cấu trúc: 好像 + động từ / tính từ / mệnh đề",
        items: [
          { zh: "好像见过", py: "hǎoxiàng jiànguo", vi: "hình như đã gặp" },
          { zh: "好像很忙", py: "hǎoxiàng hěn máng", vi: "hình như rất bận" },
          { zh: "好像是……", py: "hǎoxiàng shì…", vi: "hình như là…" },
        ],
      },
    ],
    examples: [
      {
        zh: "他好像有什么心事。",
        py: "Tā hǎoxiàng yǒu shénme xīnshì.",
        vi: "Anh ấy hình như có tâm sự gì đó.",
        hl: ["好像"],
        added: true,
      },
      {
        zh: "我好像在哪儿见过你。",
        py: "Wǒ hǎoxiàng zài nǎr jiànguo nǐ.",
        vi: "Hình như tôi đã gặp bạn ở đâu đó.",
        hl: ["好像"],
        added: true,
      },
    ],
  },
  {
    id: 12,
    zh: "心事",
    py: "xīnshì",
    pos: ["名"],
    hanViet: "TÂM SỰ",
    vi: "tâm sự, điều đang nặng lòng",
    en: "sth. weighing on one's mind; worry",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "有心思", py: "yǒu xīnshì", vi: "có tâm sự" },
          { zh: "心事重重", py: "xīnshì chóngchóng", vi: "tâm sự nặng trĩu" },
        ],
      },
    ],
    examples: [
      {
        zh: "她好像有心事，一直不说话。",
        py: "Tā hǎoxiàng yǒu xīnshì, yìzhí bù shuōhuà.",
        vi: "Cô ấy hình như có tâm sự, cứ không nói gì.",
        hl: ["心事"],
        added: true,
      },
    ],
  },
  {
    id: 13,
    zh: "交谈",
    py: "jiāotán",
    pos: ["动"],
    hanViet: "GIAO ĐÀM",
    vi: "trò chuyện, trao đổi",
    en: "to come in contact and talk; to chat",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "和……交谈", py: "hé… jiāotán", vi: "trò chuyện với…" },
          {
            zh: "交谈了一会儿",
            py: "jiāotán le yíhuìr",
            vi: "trò chuyện một lúc",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "我们和那位老人交谈了很久。",
        py: "Wǒmen hé nà wèi lǎorén jiāotán le hěn jiǔ.",
        vi: "Chúng tôi đã trò chuyện với ông cụ đó rất lâu.",
        hl: ["交谈"],
        added: true,
      },
    ],
  },
  {
    id: 14,
    zh: "所",
    py: "suǒ",
    pos: ["量"],
    hanViet: "SỞ",
    vi: "lượng từ cho nhà cửa, trường học, bệnh viện…",
    en: "a measure word for houses, schools, hospitals, etc.",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "一所大学", py: "yì suǒ dàxué", vi: "một trường đại học" },
          { zh: "一所医院", py: "yì suǒ yīyuàn", vi: "một bệnh viện" },
          { zh: "一所房子", py: "yì suǒ fángzi", vi: "một ngôi nhà" },
        ],
      },
    ],
    examples: [
      {
        zh: "南京有一所著名的大学。",
        py: "Nánjīng yǒu yì suǒ zhùmíng de dàxué.",
        vi: "Nam Kinh có một trường đại học nổi tiếng.",
        hl: ["一所"],
        added: true,
      },
    ],
    notes: [
      "所 còn là danh từ (nơi, sở: 住所, 派出所) và trợ từ trong 所以. Trong bài học này là lượng từ.",
    ],
  },
  {
    id: 15,
    zh: "简直",
    py: "jiǎnzhí",
    pos: ["副"],
    hanViet: "GIẢN TRỰC",
    vi: "quả thực, đơn giản là (nhấn mạnh)",
    en: "simply; at all",
    usage: [
      {
        label: "Cấu trúc: 简直 + động từ / tính từ",
        items: [
          {
            zh: "简直不相信",
            py: "jiǎnzhí bù xiāngxìn",
            vi: "quả thực không tin",
          },
          {
            zh: "简直太好了",
            py: "jiǎnzhí tài hǎo le",
            vi: "đơn giản là quá tốt",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "这儿的风景简直太美了！",
        py: "Zhèr de fēngjǐng jiǎnzhí tài měi le!",
        vi: "Phong cảnh ở đây đơn giản là quá đẹp!",
        hl: ["简直"],
        added: true,
      },
      {
        zh: "我简直不敢相信自己的眼睛。",
        py: "Wǒ jiǎnzhí bù gǎn xiāngxìn zìjǐ de yǎnjing.",
        vi: "Tôi quả thực không dám tin vào mắt mình.",
        hl: ["简直"],
        added: true,
      },
    ],
  },
  {
    id: 16,
    zh: "分别",
    py: "fēnbié",
    pos: ["动"],
    hanViet: "PHÂN BIỆT",
    vi: "chia tay, từ biệt",
    en: "to part; to leave; to say goodbye to each other",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "分别的时候", py: "fēnbié de shíhou", vi: "lúc chia tay" },
          { zh: "和……分别", py: "hé… fēnbié", vi: "chia tay với…" },
        ],
      },
    ],
    examples: [
      {
        zh: "我们在车站分别了。",
        py: "Wǒmen zài chēzhàn fēnbié le.",
        vi: "Chúng tôi đã chia tay ở nhà ga.",
        hl: ["分别"],
        added: true,
      },
      {
        zh: "分别的时候，大家都哭了。",
        py: "Fēnbié de shíhou, dàjiā dōu kū le.",
        vi: "Lúc chia tay, mọi người đều khóc.",
        hl: ["分别"],
        added: true,
      },
    ],
    notes: [
      "分别 còn có nghĩa “lần lượt, riêng rẽ” (phó từ) và “khác nhau” (động từ). Trong bài này là động từ chia tay.",
    ],
  },
  {
    id: 17,
    zh: "彩虹",
    py: "cǎihóng",
    pos: ["名"],
    hanViet: "THẢI HỒNG",
    vi: "cầu vồng",
    en: "rainbow",
    usage: [
      {
        label: "Lượng từ / kết hợp",
        items: [
          { zh: "一道彩虹", py: "yí dào cǎihóng", vi: "một cầu vồng" },
          {
            zh: "彩虹出现了",
            py: "cǎihóng chūxiàn le",
            vi: "cầu vồng xuất hiện",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "雨停了，天上出现了一道彩虹。",
        py: "Yǔ tíng le, tiānshàng chūxiàn le yí dào cǎihóng.",
        vi: "Mưa tạnh, trên trời xuất hiện một cầu vồng.",
        hl: ["彩虹"],
        added: true,
      },
    ],
  },
  {
    id: 18,
    zh: "意义",
    py: "yìyì",
    pos: ["名"],
    hanViet: "Ý NGHĨA",
    vi: "ý nghĩa",
    en: "significance; meaning",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "有意义", py: "yǒu yìyì", vi: "có ý nghĩa" },
          {
            zh: "人生的意义",
            py: "rénshēng de yìyì",
            vi: "ý nghĩa của cuộc sống",
          },
          { zh: "重要意义", py: "zhòngyào yìyì", vi: "ý nghĩa quan trọng" },
        ],
      },
    ],
    examples: [
      {
        zh: "这是一件很有意义的事。",
        py: "Zhè shì yí jiàn hěn yǒu yìyì de shì.",
        vi: "Đây là một việc rất có ý nghĩa.",
        hl: ["有意义"],
        added: true,
      },
      {
        zh: "这次旅行对我来说很有意义。",
        py: "Zhè cì lǚxíng duì wǒ lái shuō hěn yǒu yìyì.",
        vi: "Chuyến đi này đối với tôi rất có ý nghĩa.",
        hl: ["意义"],
        added: true,
      },
    ],
  },
  {
    id: 19,
    zh: "风雨",
    py: "fēngyǔ",
    pos: ["名"],
    hanViet: "PHONG VŨ",
    vi: "mưa gió; (nghĩa bóng) sóng gió, gian nan",
    en: "wind and rain; trials and hardships",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "风雨无阻", py: "fēngyǔ wúzǔ", vi: "mưa gió không cản" },
          { zh: "经历风雨", py: "jīnglì fēngyǔ", vi: "trải qua mưa gió" },
        ],
      },
    ],
    examples: [
      {
        zh: "人生总要经历一些风雨。",
        py: "Rénshēng zǒng yào jīnglì yìxiē fēngyǔ.",
        vi: "Cuộc đời luôn phải trải qua một số sóng gió.",
        hl: ["风雨"],
        added: true,
      },
    ],
  },
  {
    id: 20,
    zh: "成功",
    py: "chénggōng",
    pos: ["动", "形"],
    hanViet: "THÀNH CÔNG",
    vi: "thành công",
    en: "to succeed; successful",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "取得成功", py: "qǔdé chénggōng", vi: "giành được thành công" },
          { zh: "成功的人", py: "chénggōng de rén", vi: "người thành công" },
          { zh: "成功了", py: "chénggōng le", vi: "thành công rồi" },
        ],
      },
    ],
    examples: [
      {
        zh: "只要努力，就一定能成功。",
        py: "Zhǐyào nǔlì, jiù yídìng néng chénggōng.",
        vi: "Chỉ cần nỗ lực, nhất định có thể thành công.",
        hl: ["成功"],
        added: true,
      },
    ],
  },
  {
    id: 21,
    zh: "从",
    py: "cóng",
    pos: ["副"],
    hanViet: "TÒNG",
    vi: "(đi với phủ định) từng, đã từng",
    en: "(used before a negative) ever",
    usage: [
      {
        label: "Cấu trúc: 从 + 不 / 没 + động từ",
        items: [
          { zh: "从不迟到", py: "cóng bù chídào", vi: "chưa từng đến muộn" },
          { zh: "从没去过", py: "cóng méi qùguo", vi: "chưa từng đi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他从来不迟到。",
        py: "Tā cónglái bù chídào.",
        vi: "Anh ấy chưa bao giờ đến muộn.",
        hl: ["从不"],
        added: true,
      },
      {
        zh: "我从没去过南京。",
        py: "Wǒ cóng méi qùguo Nánjīng.",
        vi: "Tôi chưa từng đến Nam Kinh.",
        hl: ["从没"],
        added: true,
      },
    ],
    notes: [
      "从 còn là giới từ “từ” (从北京来) và danh từ “từ trước” (从前). Trong bài này là phó từ đi với phủ định.",
    ],
  },
  {
    id: 22,
    zh: "酸甜苦辣",
    py: "suān-tián-kǔ-là",
    pos: ["成语"],
    hanViet: "TOAN ĐIỀM KHỔ LẠT",
    vi: "chua ngọt đắng cay; (nghĩa bóng) mọi vị của cuộc sống",
    en: "sour, sweet, bitter, hot; joys and sorrows of life",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "人生的酸甜苦辣",
            py: "rénshēng de suāntiánkǔlà",
            vi: "mọi vị của cuộc đời",
          },
          {
            zh: "尝尽酸甜苦辣",
            py: "chángjìn suāntiánkǔlà",
            vi: "nếm trải mọi vị",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "生活中充满了酸甜苦辣。",
        py: "Shēnghuó zhōng chōngmǎn le suāntiánkǔlà.",
        vi: "Cuộc sống đầy ắp chua ngọt đắng cay.",
        hl: ["酸甜苦辣"],
        added: true,
      },
    ],
  },
  {
    id: 23,
    zh: "段",
    py: "duàn",
    pos: ["量"],
    hanViet: "ĐOẠN",
    vi: "đoạn (thời gian, khoảng cách, văn bản)",
    en: "(a measure word) duration (of time); distance; paragraph; passage; part",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "一段时间", py: "yí duàn shíjiān", vi: "một khoảng thời gian" },
          { zh: "一段路", py: "yí duàn lù", vi: "một đoạn đường" },
          { zh: "一段话", py: "yí duàn huà", vi: "một đoạn lời nói" },
          { zh: "这段经历", py: "zhè duàn jīnglì", vi: "trải nghiệm này" },
        ],
      },
    ],
    examples: [
      {
        zh: "我在南京住了一段时间。",
        py: "Wǒ zài Nánjīng zhù le yí duàn shíjiān.",
        vi: "Tôi đã ở Nam Kinh một thời gian.",
        hl: ["一段时间"],
        added: true,
      },
      {
        zh: "这是一段难忘的经历。",
        py: "Zhè shì yí duàn nánwàng de jīnglì.",
        vi: "Đây là một trải nghiệm khó quên.",
        hl: ["一段"],
        added: true,
      },
    ],
  },
  {
    id: 24,
    zh: "梦",
    py: "mèng",
    pos: ["名", "动"],
    hanViet: "MỘNG",
    vi: "giấc mơ; mơ",
    en: "dream; to dream",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "做了一个梦", py: "zuò le yí ge mèng", vi: "nằm mơ một giấc" },
          { zh: "梦想", py: "mèngxiǎng", vi: "mơ ước" },
          { zh: "梦见", py: "mèngjiàn", vi: "mơ thấy" },
        ],
      },
    ],
    examples: [
      {
        zh: "我昨天做了一个奇怪的梦。",
        py: "Wǒ zuótiān zuò le yí ge qíguài de mèng.",
        vi: "Hôm qua tôi nằm mơ một giấc mơ kỳ lạ.",
        hl: ["梦"],
        added: true,
      },
    ],
    related: [
      {
        label: "梦想",
        pos: ["名", "动"],
        zh: "梦想",
        py: "mèngxiǎng",
        hanViet: "MỘNG TƯỞNG",
        vi: "mơ ước, khát vọng",
        examples: [
          {
            zh: "他的梦想是当一名作家。",
            py: "Tā de mèngxiǎng shì dāng yì míng zuòjiā.",
            vi: "Mơ ước của anh ấy là trở thành nhà văn.",
            hl: ["梦想"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 25,
    zh: "亲人",
    py: "qīnrén",
    pos: ["名"],
    hanViet: "THÂN NHÂN",
    vi: "người thân, người trong gia đình",
    en: "relative; one's family member(s)",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "想念亲人", py: "xiǎngniàn qīnrén", vi: "nhớ người thân" },
          { zh: "亲人团聚", py: "qīnrén tuánjù", vi: "người thân đoàn tụ" },
        ],
      },
    ],
    examples: [
      {
        zh: "在国外的时候，我特别想念亲人。",
        py: "Zài guówài de shíhou, wǒ tèbié xiǎngniàn qīnrén.",
        vi: "Khi ở nước ngoài, tôi đặc biệt nhớ người thân.",
        hl: ["亲人"],
        added: true,
      },
    ],
  },
  {
    id: 26,
    zh: "女儿",
    py: "nǚ'ér",
    pos: ["名"],
    hanViet: "NỮ NHI",
    vi: "con gái",
    en: "daughter",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "一个女儿", py: "yí ge nǚ'ér", vi: "một cô con gái" },
          { zh: "女儿和儿子", py: "nǚ'ér hé érzi", vi: "con gái và con trai" },
        ],
      },
    ],
    examples: [
      {
        zh: "他们有一个女儿。",
        py: "Tāmen yǒu yí ge nǚ'ér.",
        vi: "Họ có một cô con gái.",
        hl: ["女儿"],
        added: true,
      },
    ],
  },
  {
    id: 27,
    zh: "失败",
    py: "shībài",
    pos: ["动"],
    hanViet: "THẤT BẠI",
    vi: "thất bại",
    en: "to fail",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "失败了", py: "shībài le", vi: "thất bại rồi" },
          { zh: "害怕失败", py: "hàipà shībài", vi: "sợ thất bại" },
          {
            zh: "失败是成功之母",
            py: "shībài shì chénggōng zhī mǔ",
            vi: "thất bại là mẹ thành công",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "不要害怕失败。",
        py: "Búyào hàipà shībài.",
        vi: "Đừng sợ thất bại.",
        hl: ["失败"],
        added: true,
      },
      {
        zh: "失败是成功之母。",
        py: "Shībài shì chénggōng zhī mǔ.",
        vi: "Thất bại là mẹ thành công.",
        hl: ["失败"],
        added: true,
      },
    ],
    notes: ["Trái nghĩa: 成功 chénggōng (thành công)."],
  },
  {
    id: 28,
    zh: "失去",
    py: "shīqù",
    pos: ["动"],
    hanViet: "THẤT KHỨ",
    vi: "mất đi, đánh mất",
    en: "to lose; not to have any more",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "失去信心", py: "shīqù xìnxīn", vi: "mất tự tin" },
          { zh: "失去机会", py: "shīqù jīhuì", vi: "mất cơ hội" },
          { zh: "失去亲人", py: "shīqù qīnrén", vi: "mất người thân" },
        ],
      },
    ],
    examples: [
      {
        zh: "失败了也不要失去信心。",
        py: "Shībài le yě búyào shīqù xìnxīn.",
        vi: "Thất bại rồi cũng đừng mất tự tin.",
        hl: ["失去信心"],
        added: true,
      },
    ],
  },
  {
    id: 29,
    zh: "信心",
    py: "xìnxīn",
    pos: ["名"],
    hanViet: "TÍN TÂM",
    vi: "tự tin, niềm tin",
    en: "confidence; faith; belief that one's wish or expectation is sure to come true",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "有信心", py: "yǒu xìnxīn", vi: "có tự tin" },
          { zh: "充满信心", py: "chōngmǎn xìnxīn", vi: "tràn đầy tự tin" },
          { zh: "失去信心", py: "shīqù xìnxīn", vi: "mất tự tin" },
        ],
      },
    ],
    examples: [
      {
        zh: "只要坚持，就一定有信心。",
        py: "Zhǐyào jiānchí, jiù yídìng yǒu xìnxīn.",
        vi: "Chỉ cần kiên trì, nhất định sẽ có niềm tin.",
        hl: ["信心"],
        added: true,
      },
      {
        zh: "他对未来充满了信心。",
        py: "Tā duì wèilái chōngmǎn le xìnxīn.",
        vi: "Anh ấy tràn đầy niềm tin vào tương lai.",
        hl: ["信心"],
        added: true,
      },
    ],
  },
  {
    id: 30,
    zh: "选择",
    py: "xuǎnzé",
    pos: ["动"],
    hanViet: "TUYỂN TRẠCH",
    vi: "lựa chọn",
    en: "to choose; to select",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "选择道路", py: "xuǎnzé dàolù", vi: "chọn con đường" },
          { zh: "选择专业", py: "xuǎnzé zhuānyè", vi: "chọn chuyên ngành" },
          { zh: "做出选择", py: "zuòchū xuǎnzé", vi: "đưa ra lựa chọn" },
        ],
      },
    ],
    examples: [
      {
        zh: "你要自己选择自己的道路。",
        py: "Nǐ yào zìjǐ xuǎnzé zìjǐ de dàolù.",
        vi: "Bạn phải tự mình chọn con đường của mình.",
        hl: ["选择"],
        added: true,
      },
    ],
  },
  {
    id: 31,
    zh: "道路",
    py: "dàolù",
    pos: ["名"],
    hanViet: "ĐẠO LỘ",
    vi: "con đường; (nghĩa bóng) đường lối",
    en: "road; way",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "一条道路", py: "yì tiáo dàolù", vi: "một con đường" },
          {
            zh: "人生的道路",
            py: "rénshēng de dàolù",
            vi: "con đường của cuộc đời",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "人生的道路不会总是那么顺利。",
        py: "Rénshēng de dàolù bú huì zǒngshì nàme shùnlì.",
        vi: "Con đường của cuộc đời không phải lúc nào cũng suôn sẻ.",
        hl: ["道路"],
        added: true,
      },
    ],
  },
  {
    id: 32,
    zh: "人生",
    py: "rénshēng",
    pos: ["名"],
    hanViet: "NHÂN SINH",
    vi: "cuộc đời, nhân sinh",
    en: "life",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "人生的意义", py: "rénshēng de yìyì", vi: "ý nghĩa cuộc đời" },
          { zh: "人生道路", py: "rénshēng dàolù", vi: "con đường đời" },
        ],
      },
    ],
    examples: [
      {
        zh: "人生的意义在于奉献。",
        py: "Rénshēng de yìyì zàiyú fèngxiàn.",
        vi: "Ý nghĩa của cuộc đời nằm ở sự cống hiến.",
        hl: ["人生"],
        added: true,
      },
    ],
  },
  {
    id: 33,
    zh: "退缩",
    py: "tuìsuō",
    pos: ["动"],
    hanViet: "THOÁI SÚC",
    vi: "thoái lui, chùn bước",
    en: "to shrink back; to hold back",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "遇到困难不退缩",
            py: "yùdào kùnnan bù tuìsuō",
            vi: "gặp khó khăn không chùn bước",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "遇到困难的时候，我们不能退缩。",
        py: "Yùdào kùnnan de shíhou, wǒmen bù néng tuìsuō.",
        vi: "Khi gặp khó khăn, chúng ta không thể chùn bước.",
        hl: ["退缩"],
        added: true,
      },
    ],
  },
  {
    id: 34,
    zh: "取得",
    py: "qǔdé",
    pos: ["动"],
    hanViet: "THỦ ĐẮC",
    vi: "giành được, đạt được",
    en: "to get; to gain",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "取得成绩", py: "qǔdé chéngjì", vi: "đạt thành tích" },
          { zh: "取得成功", py: "qǔdé chénggōng", vi: "giành thành công" },
          { zh: "取得进步", py: "qǔdé jìnbù", vi: "đạt tiến bộ" },
        ],
      },
    ],
    examples: [
      {
        zh: "只要努力，就能取得好成绩。",
        py: "Zhǐyào nǔlì, jiù néng qǔdé hǎo chéngjì.",
        vi: "Chỉ cần nỗ lực, có thể đạt thành tích tốt.",
        hl: ["取得"],
        added: true,
      },
    ],
  },
  {
    id: 35,
    zh: "鼓励",
    py: "gǔlì",
    pos: ["动"],
    hanViet: "CỔ LỆ",
    vi: "khuyến khích, động viên",
    en: "to encourage",
    usage: [
      {
        label: "Tân ngữ / cấu trúc đi kèm",
        items: [
          { zh: "鼓励别人", py: "gǔlì biérén", vi: "khuyến khích người khác" },
          {
            zh: "鼓励他坚持",
            py: "gǔlì tā jiānchí",
            vi: "động viên anh ấy kiên trì",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "老师常常鼓励我们多读书。",
        py: "Lǎoshī chángcháng gǔlì wǒmen duō dúshū.",
        vi: "Thầy cô thường khuyến khích chúng tôi đọc nhiều sách.",
        hl: ["鼓励"],
        added: true,
      },
    ],
  },
  {
    id: 36,
    zh: "梦想",
    py: "mèngxiǎng",
    pos: ["名", "动"],
    hanViet: "MỘNG TƯỞNG",
    vi: "giấc mơ, ước mơ; mơ ước",
    en: "dream; to dream",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "实现梦想", py: "shíxiàn mèngxiǎng", vi: "thực hiện ước mơ" },
          {
            zh: "梦想成真",
            py: "mèngxiǎng chéng zhēn",
            vi: "mơ ước thành sự thật",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "只要坚持，梦想就一定能实现。",
        py: "Zhǐyào jiānchí, mèngxiǎng jiù yídìng néng shíxiàn.",
        vi: "Chỉ cần kiên trì, ước mơ nhất định có thể thực hiện.",
        hl: ["梦想"],
        added: true,
      },
    ],
  },
  {
    id: 37,
    zh: "可笑",
    py: "kěxiào",
    pos: ["形"],
    hanViet: "KHẢ TIẾU",
    vi: "buồn cười, nực cười, lố bịch",
    en: "ridiculous; absurd; funny",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "很可笑", py: "hěn kěxiào", vi: "rất buồn cười" },
          { zh: "觉得可笑", py: "juéde kěxiào", vi: "cảm thấy buồn cười" },
        ],
      },
    ],
    examples: [
      {
        zh: "现在想想，那时候的自己有点可笑。",
        py: "Xiànzài xiǎngxiǎng, nà shíhou de zìjǐ yǒudiǎn kěxiào.",
        vi: "Bây giờ nghĩ lại, bản thân lúc đó hơi buồn cười.",
        hl: ["可笑"],
        added: true,
      },
    ],
  },
  {
    id: 38,
    zh: "坚强",
    py: "jiānqiáng",
    pos: ["形"],
    hanViet: "KIÊN CƯỜNG",
    vi: "kiên cường, mạnh mẽ",
    en: "strong; firm",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "坚强的人", py: "jiānqiáng de rén", vi: "người kiên cường" },
          { zh: "坚强起来", py: "jiānqiáng qǐlái", vi: "trở nên kiên cường" },
        ],
      },
    ],
    examples: [
      {
        zh: "遇到困难，你要坚强起来。",
        py: "Yùdào kùnnan, nǐ yào jiānqiáng qǐlái.",
        vi: "Gặp khó khăn, bạn phải kiên cường lên.",
        hl: ["坚强"],
        added: true,
      },
    ],
  },
  {
    id: 39,
    zh: "付出",
    py: "fùchū",
    pos: ["动"],
    hanViet: "PHÓ XUẤT",
    vi: "bỏ ra, cống hiến, trả giá",
    en: "to pay; to give",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "付出努力", py: "fùchū nǔlì", vi: "bỏ ra nỗ lực" },
          { zh: "付出代价", py: "fùchū dàijià", vi: "trả giá" },
        ],
      },
    ],
    examples: [
      {
        zh: "成功的背后要付出很多努力。",
        py: "Chénggōng de bèihòu yào fùchū hěn duō nǔlì.",
        vi: "Đằng sau thành công phải bỏ ra rất nhiều nỗ lực.",
        hl: ["付出"],
        added: true,
      },
    ],
  },
  {
    id: 40,
    zh: "艰苦",
    py: "jiānkǔ",
    pos: ["形"],
    hanViet: "KIÊN KHỔ",
    vi: "gian khổ, vất vả",
    en: "hard; difficult",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "艰苦的生活",
            py: "jiānkǔ de shēnghuó",
            vi: "cuộc sống gian khổ",
          },
          { zh: "艰苦奋斗", py: "jiānkǔ fèndòu", vi: "phấn đấu gian khổ" },
        ],
      },
    ],
    examples: [
      {
        zh: "他经历过一段艰苦的日子。",
        py: "Tā jīnglì guo yí duàn jiānkǔ de rìzi.",
        vi: "Anh ấy từng trải qua một thời gian gian khổ.",
        hl: ["艰苦"],
        added: true,
      },
    ],
  },
];

/* ---- 专名: tên riêng ---- */
const PROPER: Entry[] = [
  {
    id: "P1",
    zh: "南京",
    py: "Nánjīng",
    pos: ["专名"],
    hanViet: "NAM KINH",
    vi: "Nam Kinh (thủ phủ tỉnh Giang Tô)",
    en: "Nanjing, the capital of Jiangsu Province",
    examples: [
      {
        zh: "南京是江苏的省会。",
        py: "Nánjīng shì Jiāngsū de shěnghuì.",
        vi: "Nam Kinh là thủ phủ của tỉnh Giang Tô.",
        hl: ["南京"],
        added: true,
      },
      {
        zh: "南京是一座历史悠久的城市。",
        py: "Nánjīng shì yí zuò lìshǐ yōujiǔ de chéngshì.",
        vi: "Nam Kinh là một thành phố có lịch sử lâu đời.",
        hl: ["南京"],
        added: true,
      },
    ],
  },
];

const SECTIONS: Section[] = [
  {
    title: "生词",
    subtitle: "40 từ trong sách (file PDF)",
    entries: MAIN,
    jumpLinks: true,
  },
  {
    title: "专名 Zhuānmíng · Tên riêng",
    subtitle: "1 tên riêng trong sách",
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

export default function VocabBai4() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-3 pb-5 sm:px-4 sm:pb-8">
      {SECTIONS.map((sec) => (
        <section key={sec.title} className="mb-12 min-w-0">
          <div className="my-3 flex items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
              <span className="ztai__zh text-stone-600">四</span>
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
                    src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/04_tuvung.mp3"
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
