import React from "react";

/* =====================================================================
   TỪ VỰNG GTHN 5 (汉语教程 第三册 上) — BÀI 2: 一封信
   Từ mới: file PDF (02tuvung.pdf) · Ví dụ / phân biệt: file docx của giáo viên
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
    zh: "封",
    py: "fēng",
    pos: ["量"],
    hanViet: "PHONG",
    vi: "lượng từ cho vật được niêm phong, bỏ trong phong bì: thư, bức",
    en: "a measure word for sth. sealed",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          { zh: "一封信", py: "yì fēng xìn", vi: "một bức thư" },
          { zh: "一封邮件", py: "yì fēng yóujiàn", vi: "một email" },
        ],
      },
    ],
    examples: [
      {
        zh: "我给妈妈写了一封信。",
        py: "Wǒ gěi māma xiě le yì fēng xìn.",
        vi: "Tôi đã viết cho mẹ một bức thư.",
        hl: ["一封信"],
        hlVi: ["một bức thư"],
        added: true,
      },
    ],
    related: [
      {
        label: "一个信封",
        pos: ["名"],
        zh: "信封",
        py: "xìnfēng",
        hanViet: "TÍN PHONG",
        vi: "phong bì (lượng từ: 个)",
        examples: [
          {
            zh: "信封上写着他的地址。",
            py: "Xìnfēng shang xiězhe tā de dìzhǐ.",
            vi: "Trên phong bì ghi địa chỉ của anh ấy.",
            hl: ["信封"],
            added: true,
          },
        ],
      },
    ],
    notes: ["Phân biệt: 一封信 (một bức thư) – 一个信封 (một cái phong bì)."],
  },
  {
    id: 2,
    zh: "上",
    py: "shàng",
    pos: ["名"],
    hanViet: "THƯỢNG",
    vi: "trước (thứ tự, thời gian); trên",
    en: "preceding (in order or time)",
    usage: [
      {
        label: "Chỉ thời gian / thứ tự: “trước”",
        items: [
          { zh: "上个星期", py: "shàng ge xīngqī", vi: "tuần trước" },
          { zh: "上次", py: "shàng cì", vi: "lần trước" },
          { zh: "上个月", py: "shàng ge yuè", vi: "tháng trước" },
        ],
      },
      {
        label: "Đặt sau danh từ: “trên / về mặt”",
        items: [
          { zh: "桌子上", py: "zhuōzi shang", vi: "trên bàn" },
          { zh: "山上", py: "shān shang", vi: "trên núi" },
          { zh: "网上", py: "wǎng shang", vi: "trên mạng" },
          { zh: "课上", py: "kè shang", vi: "trên lớp, trong giờ học" },
          {
            zh: "心上 / 心上人",
            py: "xīn shang / xīnshàngrén",
            vi: "trong lòng / ý trung nhân",
          },
          { zh: "精神上", py: "jīngshén shang", vi: "về mặt tinh thần" },
          { zh: "上面 / 上边", py: "shàngmiàn / shàngbian", vi: "bên trên" },
        ],
      },
    ],
    examples: [
      {
        zh: "上个星期我去了朋友家。",
        py: "Shàng ge xīngqī wǒ qù le péngyou jiā.",
        vi: "Tuần trước tôi đã đến nhà bạn.",
        hl: ["上个星期"],
        hlVi: ["Tuần trước"],
        added: true,
      },
      {
        zh: "桌子上有一本书。",
        py: "Zhuōzi shang yǒu yì běn shū.",
        vi: "Trên bàn có một quyển sách.",
        hl: ["桌子上"],
        added: true,
      },
      {
        zh: "上有天堂，下有苏杭。",
        py: "Shàng yǒu tiāntáng, xià yǒu Sū Háng.",
        vi: "Trên có thiên đường, dưới có Tô Châu, Hàng Châu.",
        hl: ["上", "下"],
      },
    ],
    compare: [
      {
        title: "N + 上 (trên…) vs 上 + N (lên…)",
        points: [
          {
            zh: "课上 / 上课",
            py: "kè shang / shàng kè",
            desc: "课上 = trên lớp, trong giờ học (vị trí/thời điểm). 上课 = lên lớp (động tác).",
          },
          {
            zh: "网上 / 上网",
            py: "wǎng shang / shàng wǎng",
            desc: "网上 = trên mạng. 上网 = lên mạng.",
          },
          {
            zh: "山上 / 上山",
            py: "shān shang / shàng shān",
            desc: "山上 = trên núi. 上山 = lên núi.",
          },
        ],
      },
    ],
    notes: [
      "Sai: 河内外有桃花，胡志明市里有黄梅花。 Đúng: 河内有桃花，胡志明市有黄梅花。 (Tên thành phố riêng không thêm 里 / 上 / 外 sau nó khi nói “ở … có …”.)",
      "上 đứng sau danh từ còn mang nghĩa “về mặt”: 精神上 (về mặt tinh thần), 基本上 (về cơ bản).",
    ],
  },
  {
    id: 3,
    zh: "基本上",
    py: "jīběnshang",
    pos: ["副"],
    hanViet: "CƠ BẢN THƯỢNG",
    vi: "về cơ bản, đại thể",
    en: "basically",
    usage: [
      {
        label: "Đi với động từ / tính từ",
        items: [
          {
            zh: "基本上完成了",
            py: "jīběnshang wánchéng le",
            vi: "về cơ bản đã hoàn thành",
          },
          {
            zh: "基本上一样",
            py: "jīběnshang yíyàng",
            vi: "về cơ bản giống nhau",
          },
          { zh: "基本上同意", py: "jīběnshang tóngyì", vi: "về cơ bản đồng ý" },
        ],
      },
    ],
    examples: [
      {
        zh: "这篇文章我基本上看懂了。",
        py: "Zhè piān wénzhāng wǒ jīběnshang kàndǒng le.",
        vi: "Bài văn này về cơ bản tôi đã đọc hiểu.",
        hl: ["基本上"],
        hlVi: ["về cơ bản"],
        added: true,
      },
      {
        zh: "我们俩的想法基本上一样。",
        py: "Wǒmen liǎ de xiǎngfǎ jīběnshang yíyàng.",
        vi: "Suy nghĩ của hai chúng tôi về cơ bản giống nhau.",
        hl: ["基本上"],
        added: true,
      },
    ],
    related: [
      {
        label: "基本",
        pos: ["形", "副"],
        zh: "基本",
        py: "jīběn",
        hanViet: "CƠ BẢN",
        vi: "(tính) cơ bản, căn bản; (phó) về cơ bản",
        usage: [
          {
            label: "Danh từ / động từ đi kèm",
            items: [
              { zh: "基本知识", py: "jīběn zhīshi", vi: "kiến thức cơ bản" },
              { zh: "基本要求", py: "jīběn yāoqiú", vi: "yêu cầu cơ bản" },
              { zh: "基本满意", py: "jīběn mǎnyì", vi: "về cơ bản hài lòng" },
            ],
          },
        ],
        examples: [
          {
            zh: "学习汉语要先学基本知识。",
            py: "Xuéxí Hànyǔ yào xiān xué jīběn zhīshi.",
            vi: "học tiếng Trung trước hết phải học kiến thức cơ bản.",
            hl: ["基本知识"],
            added: true,
          },
        ],
      },
    ],
    compare: [
      {
        title: "基本 vs 基础 vs 初级",
        points: [
          {
            zh: "基本",
            py: "jīběn",
            desc: "Tính từ / phó từ: “cơ bản, chủ yếu”; làm định ngữ (基本知识) hoặc trạng ngữ (基本完成).",
          },
          {
            zh: "基础",
            py: "jīchǔ",
            desc: "Danh từ: “nền tảng, cơ sở”. Hay đi với 打基础、有基础、基础好; cũng làm định ngữ (基础知识).",
            eg: [
              {
                zh: "汉语基础很好",
                py: "Hànyǔ jīchǔ hěn hǎo",
                vi: "nền tảng tiếng Hán rất tốt",
              },
            ],
          },
          {
            zh: "初级",
            py: "chūjí",
            desc: "Chỉ CẤP ĐỘ “sơ cấp”: 初级班、初级汉语.",
            eg: [{ zh: "初级汉语", py: "chūjí Hànyǔ", vi: "tiếng Hán sơ cấp" }],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    zh: "交",
    py: "jiāo",
    pos: ["动"],
    hanViet: "GIAO",
    vi: "nộp, giao; kết giao",
    en: "to associate with; to be friends with",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "交作业", py: "jiāo zuòyè", vi: "nộp bài tập" },
          { zh: "交文件", py: "jiāo wénjiàn", vi: "nộp tài liệu" },
          { zh: "交钱", py: "jiāo qián", vi: "nộp tiền" },
          { zh: "交朋友 = 交友", py: "jiāo péngyou = jiāoyǒu", vi: "kết bạn" },
        ],
      },
      {
        label: "Bổ ngữ xu hướng đi kèm",
        items: [
          { zh: "交上去", py: "jiāo shàngqù", vi: "nộp lên (cấp trên)" },
          {
            zh: "交上来",
            py: "jiāo shànglái",
            vi: "nộp lên (về phía người nói)",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "请把作业交给老师。",
        py: "Qǐng bǎ zuòyè jiāo gěi lǎoshī.",
        vi: "Hãy nộp bài tập cho thầy giáo.",
        hl: ["交给"],
        added: true,
      },
      {
        zh: "他很会交朋友。",
        py: "Tā hěn huì jiāo péngyou.",
        vi: "Anh ấy rất biết kết bạn.",
        hl: ["交朋友"],
        added: true,
      },
      {
        zh: "作业明天交上来。",
        py: "Zuòyè míngtiān jiāo shànglái.",
        vi: "Bài tập ngày mai nộp lên nhé.",
        hl: ["交上来"],
        added: true,
      },
    ],
  },
  {
    id: 5,
    zh: "分别",
    py: "fēnbié",
    pos: ["副"],
    hanViet: "PHÂN BIỆT",
    vi: "lần lượt, riêng rẽ, mỗi bên một; (động) chia tay",
    en: "respectively; separately",
    usage: [
      {
        label: "Đi với động từ",
        items: [
          {
            zh: "分别来自世界各国",
            py: "fēnbié láizì shìjiè gèguó",
            vi: "lần lượt đến từ các nước trên thế giới",
          },
          {
            zh: "分别介绍",
            py: "fēnbié jièshào",
            vi: "giới thiệu riêng từng người",
          },
        ],
      },
      {
        label: "Làm động từ: chia tay",
        items: [{ zh: "跟他分别", py: "gēn tā fēnbié", vi: "chia tay anh ấy" }],
      },
    ],
    examples: [
      {
        zh: "他们分别来自中国和日本。",
        py: "Tāmen fēnbié láizì Zhōngguó hé Rìběn.",
        vi: "Họ lần lượt đến từ Trung Quốc và Nhật Bản.",
        hl: ["分别"],
        hlVi: ["lần lượt"],
        added: true,
      },
      {
        zh: "我们分别来自世界各国。",
        py: "Wǒmen fēnbié láizì shìjiè gèguó.",
        vi: "Chúng tôi lần lượt đến từ các nước trên thế giới.",
        hl: ["分别来自"],
        added: true,
      },
      {
        zh: "毕业那天，我跟他分别了。",
        py: "Bìyè nà tiān, wǒ gēn tā fēnbié le.",
        vi: "Hôm tốt nghiệp, tôi đã chia tay anh ấy.",
        hl: ["分别"],
        added: true,
      },
    ],
    compare: [
      {
        title: "分别 vs 区别 / 差别 / 区分 / 辨别",
        points: [
          {
            zh: "分别",
            py: "fēnbié",
            desc: "Phó từ “riêng rẽ, lần lượt”; động từ “chia tay”; danh từ “khác biệt” (有分别).",
          },
          {
            zh: "区别",
            py: "qūbié",
            desc: "Danh từ “sự khác nhau” (有区别) và động từ “phân biệt” (区别A和B).",
            eg: [
              {
                zh: "这两个词有什么区别？",
                py: "Zhè liǎng ge cí yǒu shénme qūbié?",
                vi: "Hai từ này khác nhau thế nào?",
              },
            ],
          },
          {
            zh: "差别",
            py: "chābié",
            desc: "Danh từ “chênh lệch, khác biệt” về mức độ.",
            eg: [
              { zh: "差别很大", py: "chābié hěn dà", vi: "khác biệt rất lớn" },
            ],
          },
          {
            zh: "区分",
            py: "qūfēn",
            desc: "Động từ “phân chia, phân biệt” theo loại.",
            eg: [
              { zh: "区分好坏", py: "qūfēn hǎohuài", vi: "phân biệt tốt xấu" },
            ],
          },
          {
            zh: "辨别",
            py: "biànbié",
            desc: "Động từ “nhận biết, phân biệt” bằng giác quan / năng lực.",
            eg: [
              {
                zh: "辨别真假",
                py: "biànbié zhēnjiǎ",
                vi: "phân biệt thật giả",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    zh: "来自",
    py: "láizì",
    pos: ["动"],
    hanViet: "LAI TỰ",
    vi: "đến từ, xuất thân từ",
    en: "to come from",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "来自越南", py: "láizì Yuènán", vi: "đến từ Việt Nam" },
          {
            zh: "来自世界各国",
            py: "láizì shìjiè gèguó",
            vi: "đến từ các nước trên thế giới",
          },
          { zh: "来自农村", py: "láizì nóngcūn", vi: "xuất thân từ nông thôn" },
        ],
      },
    ],
    examples: [
      {
        zh: "他来自越南。",
        py: "Tā láizì Yuènán.",
        vi: "Anh ấy đến từ Việt Nam.",
        hl: ["来自越南"],
        hlVi: ["đến từ Việt Nam"],
        added: true,
      },
      {
        zh: "这位老师来自北京。",
        py: "Zhè wèi lǎoshī láizì Běijīng.",
        vi: "Vị thầy này đến từ Bắc Kinh.",
        hl: ["来自"],
        added: true,
      },
    ],
    related: [
      {
        label: "自",
        pos: ["介"],
        zh: "自",
        py: "zì",
        hanViet: "TỰ",
        vi: "từ (văn viết)",
        usage: [
          {
            label: "Đi với địa điểm / thời gian",
            items: [
              {
                zh: "自北京出发",
                py: "zì Běijīng chūfā",
                vi: "xuất phát từ Bắc Kinh",
              },
              { zh: "自古以来", py: "zìgǔ yǐlái", vi: "từ xưa đến nay" },
            ],
          },
        ],
        examples: [
          {
            zh: "这列火车自北京开往上海。",
            py: "Zhè liè huǒchē zì Běijīng kāiwǎng Shànghǎi.",
            vi: "Chuyến tàu này chạy từ Bắc Kinh đến Thượng Hải.",
            hl: ["自北京"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "来自 là ĐỘNG TỪ, tự mang tân ngữ (来自越南). Còn 从 là giới từ, cần động từ khác đi cùng: 他从越南来。",
    ],
  },
  {
    id: 7,
    zh: "等",
    py: "děng",
    pos: ["助"],
    hanViet: "ĐẲNG",
    vi: "v.v..., vân vân",
    en: "and so on; etc.",
    usage: [
      {
        label: "Cấu trúc liệt kê",
        items: [
          {
            zh: "A、B、C 等 + danh từ chung",
            py: "A, B, C děng…",
            vi: "A, B, C … (vân vân) như",
          },
          {
            zh: "A、B、C 等 / 等等",
            py: "A, B, C děng / děngdeng",
            vi: "A, B, C v.v…",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "我去过北京、上海、广州等城市。",
        py: "Wǒ qùguo Běijīng, Shànghǎi, Guǎngzhōu děng chéngshì.",
        vi: "Tôi đã đến các thành phố như Bắc Kinh, Thượng Hải, Quảng Châu…",
        hl: ["等"],
        hlVi: ["như"],
        added: true,
      },
      {
        zh: "他会说英语、法语、汉语等。",
        py: "Tā huì shuō Yīngyǔ, Fǎyǔ, Hànyǔ děng.",
        vi: "Anh ấy biết nói tiếng Anh, tiếng Pháp, tiếng Hán v.v…",
        hl: ["等"],
        added: true,
      },
    ],
    related: [
      {
        label: "等 (động)",
        pos: ["动"],
        zh: "等",
        py: "děng",
        hanViet: "ĐẲNG",
        vi: "đợi, chờ",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "等一下", py: "děng yíxià", vi: "đợi một chút" },
              { zh: "等待", py: "děngdài", vi: "chờ đợi (trang trọng)" },
            ],
          },
        ],
        examples: [
          {
            zh: "请等一下。",
            py: "Qǐng děng yíxià.",
            vi: "Xin chờ một chút.",
            hl: ["等一下"],
            added: true,
          },
          {
            zh: "我们都在等待你的消息。",
            py: "Wǒmen dōu zài děngdài nǐ de xiāoxi.",
            vi: "Chúng tôi đều đang chờ tin của bạn.",
            hl: ["等待"],
            added: true,
          },
        ],
      },
      {
        label: "包括",
        pos: ["动"],
        zh: "包括",
        py: "bāokuò",
        hanViet: "BAO QUÁT",
        vi: "bao gồm",
        examples: [
          {
            zh: "我们班有十个人，包括我。",
            py: "Wǒmen bān yǒu shí ge rén, bāokuò wǒ.",
            vi: "Lớp chúng tôi có mười người, bao gồm cả tôi.",
            hl: ["包括"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "等 (trợ từ) đặt SAU phần liệt kê, báo hiệu còn nữa chưa nêu hết. 包括 thì đặt TRƯỚC, nêu các thành phần bao gồm.",
    ],
  },
  {
    id: 8,
    zh: "洲",
    py: "zhōu",
    pos: ["名"],
    hanViet: "CHÂU",
    vi: "châu (châu lục)",
    en: "continent",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "五洲 / 五大洲", py: "wǔzhōu / wǔ dà zhōu", vi: "năm châu" },
          { zh: "亚洲", py: "Yàzhōu", vi: "châu Á" },
          { zh: "欧洲", py: "Ōuzhōu", vi: "châu Âu" },
          { zh: "非洲", py: "Fēizhōu", vi: "châu Phi" },
          { zh: "美洲", py: "Měizhōu", vi: "châu Mỹ" },
          { zh: "澳洲", py: "Àozhōu", vi: "châu Úc" },
        ],
      },
    ],
    examples: [
      {
        zh: "世界上有七大洲。",
        py: "Shìjiè shang yǒu qī dà zhōu.",
        vi: "Trên thế giới có bảy châu lục.",
        hl: ["大洲"],
        added: true,
      },
      {
        zh: "他去过亚洲、欧洲和美洲。",
        py: "Tā qùguo Yàzhōu, Ōuzhōu hé Měizhōu.",
        vi: "Anh ấy đã đến châu Á, châu Âu và châu Mỹ.",
        hl: ["洲"],
        added: true,
      },
    ],
    compare: [
      {
        title: "洲 vs 州",
        points: [
          { zh: "洲", py: "zhōu", desc: "Châu lục (亚洲、欧洲、五大洲)." },
          {
            zh: "州",
            py: "zhōu",
            desc: "Đơn vị hành chính / địa danh, đồng âm với 洲: 杭州 Hángzhōu, 广州 Guǎngzhōu.",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    zh: "课外",
    py: "kèwài",
    pos: ["名"],
    hanViet: "KHÓA NGOẠI",
    vi: "ngoài giờ học, ngoại khóa",
    en: "extracurricular; after school",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          { zh: "课外练习", py: "kèwài liànxí", vi: "bài tập làm thêm" },
          { zh: "课外活动", py: "kèwài huódòng", vi: "hoạt động ngoại khóa" },
          { zh: "课外书", py: "kèwài shū", vi: "sách đọc thêm" },
        ],
      },
    ],
    examples: [
      {
        zh: "我们学校有很多课外活动。",
        py: "Wǒmen xuéxiào yǒu hěn duō kèwài huódòng.",
        vi: "Trường chúng tôi có rất nhiều hoạt động ngoại khóa.",
        hl: ["课外活动"],
        added: true,
      },
      {
        zh: "课外我常常看书。",
        py: "Kèwài wǒ chángcháng kàn shū.",
        vi: "Ngoài giờ học tôi thường đọc sách.",
        hl: ["课外"],
        added: true,
      },
    ],
    notes: ["Trái nghĩa: 课内 kènèi (trong chương trình, trong giờ học)."],
  },
  {
    id: 10,
    zh: "关心",
    py: "guānxīn",
    pos: ["动"],
    hanViet: "QUAN TÂM",
    vi: "quan tâm, để ý, lo cho",
    en: "to have sb. or sth. on one’s mind; to pay great attention to and care for; to be concerned about",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "关心我", py: "guānxīn wǒ", vi: "quan tâm tôi" },
          { zh: "关心别人", py: "guānxīn biérén", vi: "quan tâm người khác" },
          {
            zh: "关心国家大事",
            py: "guānxīn guójiā dàshì",
            vi: "quan tâm đại sự quốc gia",
          },
        ],
      },
      {
        label: "Trạng ngữ đi kèm",
        items: [
          { zh: "对……很关心", py: "duì… hěn guānxīn", vi: "rất quan tâm đến…" },
          { zh: "互相关心", py: "hùxiāng guānxīn", vi: "quan tâm lẫn nhau" },
        ],
      },
    ],
    examples: [
      {
        zh: "老师很关心我们的生活。",
        py: "Lǎoshī hěn guānxīn wǒmen de shēnghuó.",
        vi: "Thầy giáo rất quan tâm đến cuộc sống của chúng tôi.",
        hl: ["关心"],
        hlVi: ["quan tâm"],
        added: true,
      },
      {
        zh: "谢谢你对我的关心。",
        py: "Xièxie nǐ duì wǒ de guānxīn.",
        vi: "Cảm ơn sự quan tâm của bạn dành cho tôi.",
        hl: ["关心"],
        added: true,
      },
    ],
  },
  {
    id: 11,
    zh: "团结",
    py: "tuánjié",
    pos: ["形", "动"],
    hanViet: "ĐOÀN KẾT",
    vi: "đoàn kết",
    en: "united; solidarized",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "很团结", py: "hěn tuánjié", vi: "rất đoàn kết" },
          { zh: "团结起来", py: "tuánjié qǐlái", vi: "đoàn kết lại" },
          { zh: "团结一致", py: "tuánjié yízhì", vi: "đoàn kết một lòng" },
        ],
      },
    ],
    examples: [
      {
        zh: "团结是胜利。",
        py: "Tuánjié shì shènglì.",
        vi: "Đoàn kết là thắng lợi.",
        hl: ["团结"],
        hlVi: ["Đoàn kết"],
      },
      {
        zh: "团结是力量的源泉。",
        py: "Tuánjié shì lìliàng de yuánquán.",
        vi: "Đoàn kết là cội nguồn của sức mạnh.",
        hl: ["团结"],
        hlVi: ["Đoàn kết"],
      },
      {
        zh: "我们班同学非常团结。",
        py: "Wǒmen bān tóngxué fēicháng tuánjié.",
        vi: "Các bạn trong lớp chúng tôi vô cùng đoàn kết.",
        hl: ["团结"],
        added: true,
      },
    ],
  },
  {
    id: 12,
    zh: "站",
    py: "zhàn",
    pos: ["动", "名"],
    hanViet: "TRẠM",
    vi: "đứng; (danh) trạm, bến",
    en: "to stand",
    usage: [
      {
        label: "Bổ ngữ / giới từ đi kèm",
        items: [
          { zh: "站起来", py: "zhàn qǐlái", vi: "đứng dậy, đứng lên" },
          { zh: "站在门口", py: "zhàn zài ménkǒu", vi: "đứng ở cửa" },
          { zh: "站着", py: "zhànzhe", vi: "đang đứng" },
        ],
      },
    ],
    examples: [
      {
        zh: "大家都站起来了。",
        py: "Dàjiā dōu zhàn qǐlái le.",
        vi: "Mọi người đều đứng dậy.",
        hl: ["站起来"],
        hlVi: ["đứng dậy"],
        added: true,
      },
      {
        zh: "他站在门口等我。",
        py: "Tā zhàn zài ménkǒu děng wǒ.",
        vi: "Anh ấy đứng ở cửa đợi tôi.",
        hl: ["站在门口"],
        added: true,
      },
    ],
    related: [
      {
        label: "车站",
        pos: ["名"],
        zh: "车站",
        py: "chēzhàn",
        hanViet: "XA TRẠM",
        vi: "trạm xe, bến xe (lượng từ: 个)",
        examples: [
          {
            zh: "车站离我家很近。",
            py: "Chēzhàn lí wǒ jiā hěn jìn.",
            vi: "Trạm xe cách nhà tôi rất gần.",
            hl: ["车站"],
            added: true,
          },
        ],
      },
      {
        label: "占 (đồng âm)",
        pos: ["动"],
        zh: "占",
        py: "zhàn",
        hanViet: "CHIẾM",
        vi: "chiếm",
        usage: [
          {
            label: "Tân ngữ đi kèm",
            items: [
              { zh: "占百分之十", py: "zhàn bǎi fēn zhī shí", vi: "chiếm 10%" },
            ],
          },
        ],
        examples: [
          {
            zh: "留学生占百分之十。",
            py: "Liúxuéshēng zhàn bǎi fēn zhī shí.",
            vi: "Lưu học sinh chiếm 10%.",
            hl: ["占"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 13,
    zh: "个子",
    py: "gèzi",
    pos: ["名"],
    hanViet: "CÁ TỬ",
    vi: "vóc dáng, chiều cao",
    en: "height",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "高个子", py: "gāo gèzi", vi: "người dáng cao" },
          { zh: "矮个子", py: "ǎi gèzi", vi: "người dáng thấp" },
          { zh: "个子很高", py: "gèzi hěn gāo", vi: "dáng rất cao" },
        ],
      },
    ],
    examples: [
      {
        zh: "他个子很高，是个高个子。",
        py: "Tā gèzi hěn gāo, shì ge gāo gèzi.",
        vi: "Anh ấy dáng rất cao, là người cao to.",
        hl: ["个子"],
        added: true,
      },
      {
        zh: "我弟弟个子比我高。",
        py: "Wǒ dìdi gèzi bǐ wǒ gāo.",
        vi: "Em trai tôi cao hơn tôi.",
        hl: ["个子"],
        added: true,
      },
    ],
    related: [
      {
        label: "样子",
        pos: ["名"],
        zh: "样子",
        py: "yàngzi",
        hanViet: "DẠNG TỬ",
        vi: "dáng vẻ, hình dạng",
        examples: [
          {
            zh: "这件衣服样子很好看。",
            py: "Zhè jiàn yīfu yàngzi hěn hǎokàn.",
            vi: "Kiểu dáng bộ đồ này rất đẹp.",
            hl: ["样子"],
            added: true,
          },
        ],
      },
      {
        label: "式样",
        pos: ["名"],
        zh: "式样",
        py: "shìyàng",
        hanViet: "THỨC DẠNG",
        vi: "kiểu dáng, mẫu mã",
        examples: [
          {
            zh: "这种鞋的式样很新。",
            py: "Zhè zhǒng xié de shìyàng hěn xīn.",
            vi: "Kiểu dáng của loại giày này rất mới.",
            hl: ["式样"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "Nói người thấp: 矮个子 (dùng 矮). 低 dùng cho mức độ, vị trí: 社会地位低 (địa vị xã hội thấp).",
    ],
  },
  {
    id: 14,
    zh: "黄",
    py: "huáng",
    pos: ["形"],
    hanViet: "HOÀNG",
    vi: "vàng; (họ) Hoàng",
    en: "yellow",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "黄色", py: "huángsè", vi: "màu vàng" },
          { zh: "黄头发", py: "huáng tóufa", vi: "tóc vàng" },
          { zh: "黄梅花", py: "huángméihuā", vi: "hoa mai vàng" },
          { zh: "黄先生", py: "Huáng xiānsheng", vi: "ông Hoàng (họ)" },
        ],
      },
    ],
    examples: [
      {
        zh: "她有一头黄头发。",
        py: "Tā yǒu yì tóu huáng tóufa.",
        vi: "Cô ấy có mái tóc vàng.",
        hl: ["黄头发"],
        hlVi: ["tóc vàng"],
        added: true,
      },
      {
        zh: "胡志明市有黄梅花。",
        py: "Húzhìmíngshì yǒu huángméihuā.",
        vi: "Thành phố Hồ Chí Minh có hoa mai vàng.",
        hl: ["黄梅花"],
      },
      {
        zh: "黄先生是我们的老师。",
        py: "Huáng xiānsheng shì wǒmen de lǎoshī.",
        vi: "Ông Hoàng là thầy giáo của chúng tôi.",
        hl: ["黄先生"],
        added: true,
      },
    ],
  },
  {
    id: 15,
    zh: "拍",
    py: "pāi",
    pos: ["动"],
    hanViet: "PHÁCH",
    vi: "chụp (ảnh), quay; vỗ, đập",
    en: "to take (a photo)",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          {
            zh: "拍照片 / 拍照",
            py: "pāi zhàopiàn / pāi zhào",
            vi: "chụp ảnh",
          },
          { zh: "拍视频", py: "pāi shìpín", vi: "quay video" },
          { zh: "拍电影", py: "pāi diànyǐng", vi: "quay phim" },
          { zh: "拍手", py: "pāi shǒu", vi: "vỗ tay" },
        ],
      },
    ],
    examples: [
      {
        zh: "请帮我们拍一张照片。",
        py: "Qǐng bāng wǒmen pāi yì zhāng zhàopiàn.",
        vi: "Xin chụp giúp chúng tôi một tấm ảnh.",
        hl: ["拍一张照片"],
        added: true,
      },
      {
        zh: "他在公园里拍了很多照片。",
        py: "Tā zài gōngyuán lǐ pāi le hěn duō zhàopiàn.",
        vi: "Anh ấy đã chụp rất nhiều ảnh trong công viên.",
        hl: ["拍"],
        added: true,
      },
      {
        zh: "大家拍手欢迎他。",
        py: "Dàjiā pāi shǒu huānyíng tā.",
        vi: "Mọi người vỗ tay chào đón anh ấy.",
        hl: ["拍手"],
        added: true,
      },
    ],
    notes: [
      "Nghĩa gốc là “vỗ, đập” (拍手、拍桌子); từ đó mở rộng sang “chụp, quay”.",
    ],
  },
  {
    id: 16,
    zh: "柔和",
    py: "róuhé",
    pos: ["形"],
    hanViet: "NHU HÒA",
    vi: "dịu dàng, êm dịu, nhẹ nhàng, mềm mại",
    en: "soft; gentle; mild",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          { zh: "动作柔和", py: "dòngzuò róuhé", vi: "động tác nhẹ nhàng" },
          { zh: "柔和的灯光", py: "róuhé de dēngguāng", vi: "ánh đèn dịu" },
          { zh: "声音柔和", py: "shēngyīn róuhé", vi: "giọng nói êm dịu" },
        ],
      },
    ],
    examples: [
      {
        zh: "她的动作很柔和。",
        py: "Tā de dòngzuò hěn róuhé.",
        vi: "Động tác của cô ấy rất nhẹ nhàng.",
        hl: ["动作很柔和"],
        hlVi: ["nhẹ nhàng"],
        added: true,
      },
      {
        zh: "房间里的灯光很柔和。",
        py: "Fángjiān lǐ de dēngguāng hěn róuhé.",
        vi: "Ánh đèn trong phòng rất dịu.",
        hl: ["柔和"],
        added: true,
      },
    ],
    compare: [
      {
        title: "柔和 vs 温柔",
        points: [
          {
            zh: "柔和",
            py: "róuhé",
            desc: "Không gắt, êm dịu: dùng cho ánh sáng, màu sắc, âm thanh, động tác.",
          },
          {
            zh: "温柔",
            py: "wēnróu",
            desc: "Dịu dàng (tính cách, thái độ của người, nhất là phụ nữ).",
            eg: [
              {
                zh: "她很温柔。",
                py: "Tā hěn wēnróu.",
                vi: "Cô ấy rất dịu dàng.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 17,
    zh: "缓慢",
    py: "huǎnmàn",
    pos: ["形"],
    hanViet: "HOÃN MẠN",
    vi: "chậm rãi, từ tốn, chậm chạp",
    en: "slow",
    usage: [
      {
        label: "Danh từ / động từ đi kèm",
        items: [
          { zh: "动作缓慢", py: "dòngzuò huǎnmàn", vi: "động tác chậm rãi" },
          { zh: "速度缓慢", py: "sùdù huǎnmàn", vi: "tốc độ chậm" },
          { zh: "缓慢地走", py: "huǎnmàn de zǒu", vi: "đi chậm rãi" },
        ],
      },
    ],
    examples: [
      {
        zh: "太极拳的动作缓慢而柔和。",
        py: "Tàijíquán de dòngzuò huǎnmàn ér róuhé.",
        vi: "Động tác của Thái cực quyền chậm rãi mà êm dịu.",
        hl: ["缓慢"],
        hlVi: ["chậm rãi"],
        added: true,
      },
      {
        zh: "老人走得很缓慢。",
        py: "Lǎorén zǒu de hěn huǎnmàn.",
        vi: "Cụ già đi rất chậm.",
        hl: ["缓慢"],
        added: true,
      },
    ],
    notes: [
      "缓慢 văn viết hơn 慢; không dùng để ra lệnh kiểu 请慢点儿.",
      "Liên quan chữ 动: 动作 dòngzuò (động tác), 动作片 dòngzuòpiàn (phim hành động), 行动 xíngdòng (hành động).",
    ],
  },
  {
    id: 18,
    zh: "优美",
    py: "yōuměi",
    pos: ["形"],
    hanViet: "ƯU MỸ",
    vi: "đẹp, duyên dáng, du dương",
    en: "graceful; fine",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          {
            zh: "优美的轻音乐",
            py: "yōuměi de qīng yīnyuè",
            vi: "bản nhạc nhẹ du dương",
          },
          {
            zh: "优美的动作",
            py: "yōuměi de dòngzuò",
            vi: "động tác duyên dáng",
          },
          { zh: "风景优美", py: "fēngjǐng yōuměi", vi: "phong cảnh đẹp" },
        ],
      },
    ],
    examples: [
      {
        zh: "她跳舞的动作非常优美。",
        py: "Tā tiàowǔ de dòngzuò fēicháng yōuměi.",
        vi: "Động tác nhảy múa của cô ấy vô cùng duyên dáng.",
        hl: ["优美"],
        added: true,
      },
      {
        zh: "这里风景优美。",
        py: "Zhèlǐ fēngjǐng yōuměi.",
        vi: "Nơi đây phong cảnh tươi đẹp.",
        hl: ["优美"],
        added: true,
      },
    ],
    notes: [
      "优美 dùng cho cảnh vật, âm nhạc, động tác, văn chương; khen diện mạo thì dùng 漂亮 / 好看.",
    ],
  },
  {
    id: 19,
    zh: "舒展",
    py: "shūzhǎn",
    pos: ["形", "动"],
    hanViet: "THƯ TRIỂN",
    vi: "thoải mái, khoan khoái, giãn ra, duỗi ra",
    en: "stretched",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          {
            zh: "动作舒展",
            py: "dòngzuò shūzhǎn",
            vi: "động tác duỗi thoải mái",
          },
          {
            zh: "身体舒展",
            py: "shēntǐ shūzhǎn",
            vi: "cơ thể thư giãn, duỗi ra",
          },
          { zh: "舒展筋骨", py: "shūzhǎn jīngǔ", vi: "duỗi gân cốt" },
        ],
      },
    ],
    examples: [
      {
        zh: "跳舞怎么样身体动作才能舒展？",
        py: "Tiàowǔ zěnmeyàng shēntǐ dòngzuò cái néng shūzhǎn?",
        vi: "Nhảy múa thế nào thì động tác cơ thể mới thoải mái, duỗi thẳng?",
        hl: ["舒展"],
      },
      {
        zh: "做完运动，我觉得全身都舒展了。",
        py: "Zuò wán yùndòng, wǒ juéde quánshēn dōu shūzhǎn le.",
        vi: "Tập xong, tôi thấy cả người đều khoan khoái.",
        hl: ["舒展"],
        added: true,
      },
    ],
  },
  {
    id: 20,
    zh: "增强",
    py: "zēngqiáng",
    pos: ["动"],
    hanViet: "TĂNG CƯỜNG",
    vi: "tăng cường, làm cho mạnh thêm",
    en: "to strengthen; to enhance",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "增强体质", py: "zēngqiáng tǐzhì", vi: "tăng cường thể chất" },
          { zh: "增强信心", py: "zēngqiáng xìnxīn", vi: "củng cố niềm tin" },
          { zh: "增强能力", py: "zēngqiáng nénglì", vi: "nâng cao năng lực" },
        ],
      },
    ],
    examples: [
      {
        zh: "经常运动可以增强体质。",
        py: "Jīngcháng yùndòng kěyǐ zēngqiáng tǐzhì.",
        vi: "Thường xuyên vận động có thể tăng cường thể chất.",
        hl: ["增强体质"],
        hlVi: ["tăng cường thể chất"],
      },
      {
        zh: "这次成功增强了我的信心。",
        py: "Zhè cì chénggōng zēngqiáng le wǒ de xìnxīn.",
        vi: "Lần thành công này đã củng cố niềm tin của tôi.",
        hl: ["增强"],
        added: true,
      },
    ],
    notes: [
      "增强 hay đi với thể chất, lòng tin, ý thức, năng lực. 加强 jiāqiáng thì hay đi với hoạt động, quản lý, liên hệ: 加强管理, 加强联系.",
    ],
  },
  {
    id: 21,
    zh: "体质",
    py: "tǐzhì",
    pos: ["名"],
    hanViet: "THỂ CHẤT",
    vi: "thể chất",
    en: "physique; constitution",
    usage: [
      {
        label: "Động từ / tính từ đi kèm (không dùng lượng từ)",
        items: [
          { zh: "增强体质", py: "zēngqiáng tǐzhì", vi: "tăng cường thể chất" },
          {
            zh: "体质好 / 差",
            py: "tǐzhì hǎo / chà",
            vi: "thể chất tốt / kém",
          },
          { zh: "体质弱", py: "tǐzhì ruò", vi: "thể chất yếu" },
        ],
      },
    ],
    examples: [
      {
        zh: "他的体质不太好，容易生病。",
        py: "Tā de tǐzhì bú tài hǎo, róngyì shēngbìng.",
        vi: "Thể chất của anh ấy không tốt lắm, dễ bị bệnh.",
        hl: ["体质"],
        added: true,
      },
      {
        zh: "每天跑步能增强体质。",
        py: "Měitiān pǎobù néng zēngqiáng tǐzhì.",
        vi: "Chạy bộ mỗi ngày có thể tăng cường thể chất.",
        hl: ["体质"],
        added: true,
      },
    ],
  },
  {
    id: 22,
    zh: "预防",
    py: "yùfáng",
    pos: ["动"],
    hanViet: "DỰ PHÒNG",
    vi: "dự phòng, ngăn ngừa",
    en: "to take precautions against; to guard against; to forestall",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "预防疾病", py: "yùfáng jíbìng", vi: "phòng bệnh" },
          { zh: "预防感冒", py: "yùfáng gǎnmào", vi: "phòng cảm" },
          { zh: "预防火灾", py: "yùfáng huǒzāi", vi: "phòng hỏa hoạn" },
        ],
      },
    ],
    examples: [
      {
        zh: "多运动可以预防疾病。",
        py: "Duō yùndòng kěyǐ yùfáng jíbìng.",
        vi: "Vận động nhiều có thể phòng bệnh.",
        hl: ["预防疾病"],
        hlVi: ["phòng bệnh"],
      },
      {
        zh: "冬天要注意预防感冒。",
        py: "Dōngtiān yào zhùyì yùfáng gǎnmào.",
        vi: "Mùa đông cần chú ý phòng cảm.",
        hl: ["预防感冒"],
        added: true,
      },
    ],
    compare: [
      {
        title: "预防 vs 预料 / 防备 / 预定 / 预报 / 提前",
        points: [
          {
            zh: "预防",
            py: "yùfáng",
            desc: "Phòng ngừa từ trước (bệnh tật, tai nạn).",
          },
          {
            zh: "预料",
            py: "yùliào",
            desc: "Dự đoán, lường trước (kết quả, sự việc).",
            eg: [{ zh: "出乎预料", py: "chūhū yùliào", vi: "ngoài dự đoán" }],
          },
          {
            zh: "防备",
            py: "fángbèi",
            desc: "Đề phòng, cảnh giác với điều xấu có thể xảy ra.",
          },
          {
            zh: "预定",
            py: "yùdìng",
            desc: "Đặt trước, định trước.",
            eg: [{ zh: "预定机票", py: "yùdìng jīpiào", vi: "đặt vé máy bay" }],
          },
          {
            zh: "预报",
            py: "yùbào",
            desc: "Dự báo.",
            eg: [
              { zh: "天气预报", py: "tiānqì yùbào", vi: "dự báo thời tiết" },
            ],
          },
          {
            zh: "提前",
            py: "tíqián",
            desc: "Làm sớm hơn thời gian dự định.",
            eg: [{ zh: "提前出发", py: "tíqián chūfā", vi: "xuất phát sớm" }],
          },
        ],
      },
    ],
  },
  {
    id: 23,
    zh: "疾病",
    py: "jíbìng",
    pos: ["名"],
    hanViet: "TẬT BỆNH",
    vi: "bệnh tật",
    en: "disease",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一种疾病", py: "yì zhǒng jíbìng", vi: "một loại bệnh" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "预防疾病", py: "yùfáng jíbìng", vi: "phòng bệnh" },
          { zh: "治疗疾病", py: "zhìliáo jíbìng", vi: "điều trị bệnh" },
        ],
      },
    ],
    examples: [
      {
        zh: "这是一种常见的疾病。",
        py: "Zhè shì yì zhǒng chángjiàn de jíbìng.",
        vi: "Đây là một loại bệnh thường gặp.",
        hl: ["一种疾病", "疾病"],
        added: true,
      },
      {
        zh: "运动能预防很多疾病。",
        py: "Yùndòng néng yùfáng hěn duō jíbìng.",
        vi: "Vận động có thể phòng được nhiều bệnh.",
        hl: ["疾病"],
        added: true,
      },
    ],
    notes: [
      "疾病 trang trọng, nói chung. 病 thì khẩu ngữ, cụ thể: 生病、看病.",
    ],
  },
  {
    id: 24,
    zh: "作用",
    py: "zuòyòng",
    pos: ["名", "动"],
    hanViet: "TÁC DỤNG",
    vi: "tác dụng, vai trò; (động) tác động",
    en: "impact; result; to act on; to affect",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一种作用", py: "yì zhǒng zuòyòng", vi: "một loại tác dụng" },
        ],
      },
      {
        label: "Động từ / định ngữ đi kèm",
        items: [
          { zh: "起作用", py: "qǐ zuòyòng", vi: "có tác dụng" },
          {
            zh: "很好的作用",
            py: "hěn hǎo de zuòyòng",
            vi: "tác dụng rất tốt",
          },
          { zh: "消化作用", py: "xiāohuà zuòyòng", vi: "tác dụng tiêu hóa" },
          { zh: "副作用", py: "fùzuòyòng", vi: "tác dụng phụ" },
        ],
      },
    ],
    examples: [
      {
        zh: "这种药对感冒有很好的作用。",
        py: "Zhè zhǒng yào duì gǎnmào yǒu hěn hǎo de zuòyòng.",
        vi: "Loại thuốc này có tác dụng rất tốt với cảm.",
        hl: ["很好的作用"],
        added: true,
      },
      {
        zh: "这个办法不起作用。",
        py: "Zhège bànfǎ bù qǐ zuòyòng.",
        vi: "Cách này không có tác dụng.",
        hl: ["起作用"],
        added: true,
      },
    ],
  },
  {
    id: 25,
    zh: "项",
    py: "xiàng",
    pos: ["量"],
    hanViet: "HẠNG",
    vi: "lượng từ cho hạng mục, môn, việc",
    en: "a measure word for itemized things",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          {
            zh: "一项体育运动",
            py: "yí xiàng tǐyù yùndòng",
            vi: "một môn thể thao",
          },
          {
            zh: "一项工作",
            py: "yí xiàng gōngzuò",
            vi: "một hạng mục công việc",
          },
          { zh: "一项计划", py: "yí xiàng jìhuà", vi: "một kế hoạch" },
          { zh: "一项规定", py: "yí xiàng guīdìng", vi: "một quy định" },
          { zh: "一项问题", py: "yí xiàng wèntí", vi: "một vấn đề" },
        ],
      },
    ],
    examples: [
      {
        zh: "还有一项工作要做。",
        py: "Hái yǒu yí xiàng gōngzuò yào zuò.",
        vi: "Còn một việc phải làm.",
        hl: ["一项工作"],
      },
      {
        zh: "我们现在着手讨论一项问题。",
        py: "Wǒmen xiànzài zhuóshǒu tǎolùn yí xiàng wèntí.",
        vi: "Bây giờ chúng ta bắt tay vào thảo luận một vấn đề.",
        hl: ["一项问题"],
      },
      {
        zh: "游泳那项运动很受欢迎的。",
        py: "Yóuyǒng nà xiàng yùndòng hěn shòu huānyíng de.",
        vi: "Môn thể thao bơi lội đó rất được ưa chuộng.",
        hl: ["那项运动"],
      },
      {
        zh: "这项计划牵涉到许多部门。",
        py: "Zhè xiàng jìhuà qiānshè dào xǔduō bùmén.",
        vi: "Kế hoạch này liên quan đến nhiều bộ phận.",
        hl: ["这项计划"],
      },
      {
        zh: "游泳是一项很好的体育运动。",
        py: "Yóuyǒng shì yí xiàng hěn hǎo de tǐyù yùndòng.",
        vi: "Bơi lội là một môn thể thao rất tốt.",
        hl: ["一项"],
        added: true,
      },
    ],
    related: [
      {
        label: "项目",
        pos: ["名"],
        zh: "项目",
        py: "xiàngmù",
        hanViet: "HẠNG MỤC",
        vi: "hạng mục, dự án",
        examples: [
          {
            zh: "这个项目需要两年时间。",
            py: "Zhège xiàngmù xūyào liǎng nián shíjiān.",
            vi: "Dự án này cần hai năm.",
            hl: ["项目"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "项 là lượng từ dùng cho các điều khoản, công việc, vấn đề, kế hoạch, các hạng mục thể thao.",
    ],
  },
  {
    id: 26,
    zh: "后",
    py: "hòu",
    pos: ["名"],
    hanViet: "HẬU",
    vi: "sau",
    en: "after; afterwards",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "后面 / 后边", py: "hòumiàn / hòubian", vi: "phía sau" },
          { zh: "课后", py: "kè hòu", vi: "sau giờ học" },
          { zh: "下课后", py: "xià kè hòu", vi: "sau khi tan lớp" },
          { zh: "身后", py: "shēnhòu", vi: "sau lưng" },
        ],
      },
    ],
    examples: [
      {
        zh: "下课后我们去吃饭。",
        py: "Xià kè hòu wǒmen qù chīfàn.",
        vi: "Tan học xong chúng ta đi ăn cơm.",
        hl: ["下课后"],
        hlVi: ["Tan học xong"],
        added: true,
      },
      {
        zh: "他站在我身后。",
        py: "Tā zhàn zài wǒ shēnhòu.",
        vi: "Anh ấy đứng sau lưng tôi.",
        hl: ["身后"],
        added: true,
      },
    ],
    related: [
      {
        label: "以后",
        pos: ["名"],
        zh: "以后",
        py: "yǐhòu",
        hanViet: "DĨ HẬU",
        vi: "sau khi, sau này",
        examples: [
          {
            zh: "以后我要当翻译。",
            py: "Yǐhòu wǒ yào dāng fānyì.",
            vi: "Sau này tôi muốn làm phiên dịch.",
            hl: ["以后"],
          },
          {
            zh: "我以后要当翻译。",
            py: "Wǒ yǐhòu yào dāng fānyì.",
            vi: "Tôi sau này muốn làm phiên dịch.",
            hl: ["以后"],
          },
        ],
      },
    ],
    notes: [
      "以后 làm trạng ngữ thời gian, đứng trước hoặc sau chủ ngữ đều được. 后 thường cần một mốc đi trước (下课后, 课后).",
    ],
  },
  {
    id: 27,
    zh: "书画",
    py: "shūhuà",
    pos: ["名"],
    hanViet: "THƯ HỌA",
    vi: "thư họa, tranh chữ",
    en: "painting and calligraphy",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一幅书画", py: "yì fú shūhuà", vi: "một bức thư họa" },
          { zh: "一张书画", py: "yì zhāng shūhuà", vi: "một tấm thư họa" },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "欣赏书画", py: "xīnshǎng shūhuà", vi: "thưởng thức thư họa" },
          { zh: "展出书画", py: "zhǎnchū shūhuà", vi: "trưng bày thư họa" },
        ],
      },
    ],
    examples: [
      {
        zh: "墙上挂着一幅书画。",
        py: "Qiáng shang guàzhe yì fú shūhuà.",
        vi: "Trên tường treo một bức thư họa.",
        hl: ["一幅书画"],
        added: true,
      },
      {
        zh: "学校展出了很多学生的书画。",
        py: "Xuéxiào zhǎnchū le hěn duō xuésheng de shūhuà.",
        vi: "Trường đã trưng bày rất nhiều thư họa của học sinh.",
        hl: ["书画"],
        added: true,
      },
    ],
  },
  {
    id: 28,
    zh: "竹子",
    py: "zhúzi",
    pos: ["名"],
    hanViet: "TRÚC TỬ",
    vi: "tre, trúc",
    en: "bamboo",
    usage: [
      {
        label: "Lượng từ / động từ đi kèm",
        items: [
          {
            zh: "一棵竹子 / 一根竹子",
            py: "yì kē zhúzi / yì gēn zhúzi",
            vi: "một cây tre / một cây tre (thân)",
          },
          { zh: "种竹子", py: "zhòng zhúzi", vi: "trồng tre" },
          { zh: "画竹子", py: "huà zhúzi", vi: "vẽ tre" },
        ],
      },
    ],
    examples: [
      {
        zh: "院子里种了很多竹子。",
        py: "Yuànzi lǐ zhòng le hěn duō zhúzi.",
        vi: "Trong sân trồng rất nhiều tre.",
        hl: ["竹子"],
        added: true,
      },
      {
        zh: "竹子长得很快。",
        py: "Zhúzi zhǎng de hěn kuài.",
        vi: "Tre mọc rất nhanh.",
        hl: ["竹子"],
        added: true,
      },
    ],
  },
  {
    id: 29,
    zh: "诗",
    py: "shī",
    pos: ["名"],
    hanViet: "THI",
    vi: "thơ",
    en: "poem; poetry",
    usage: [
      {
        label: "Lượng từ",
        items: [
          {
            zh: "一首诗 / 一首唐诗",
            py: "yì shǒu shī / yì shǒu Tángshī",
            vi: "một bài thơ / một bài thơ Đường",
          },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "写诗", py: "xiě shī", vi: "làm thơ" },
          { zh: "读诗", py: "dú shī", vi: "đọc thơ" },
          { zh: "背诗", py: "bèi shī", vi: "học thuộc thơ" },
        ],
      },
    ],
    examples: [
      {
        zh: "我会背一首唐诗。",
        py: "Wǒ huì bèi yì shǒu Tángshī.",
        vi: "Tôi biết đọc thuộc một bài thơ Đường.",
        hl: ["一首唐诗"],
        hlVi: ["một bài thơ Đường"],
      },
      {
        zh: "他喜欢读唐诗。",
        py: "Tā xǐhuan dú Tángshī.",
        vi: "Anh ấy thích đọc thơ Đường.",
        hl: ["唐诗"],
        added: true,
      },
    ],
    related: [
      {
        label: "诗歌",
        pos: ["名"],
        zh: "诗歌",
        py: "shīgē",
        hanViet: "THI CA",
        vi: "thơ ca",
        examples: [
          {
            zh: "他对中国诗歌很感兴趣。",
            py: "Tā duì Zhōngguó shīgē hěn gǎn xìngqù.",
            vi: "Anh ấy rất hứng thú với thơ ca Trung Quốc.",
            hl: ["诗歌"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 30,
    zh: "橱窗",
    py: "chúchuāng",
    pos: ["名"],
    hanViet: "TRÙ SONG",
    vi: "tủ kính (trưng bày sản phẩm, tranh ảnh)",
    en: "show window",
    usage: [
      {
        label: "Lượng từ",
        items: [
          {
            zh: "一个橱窗",
            py: "yí ge chúchuāng",
            vi: "một tủ kính trưng bày",
          },
        ],
      },
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "展览橱窗", py: "zhǎnlǎn chúchuāng", vi: "tủ kính triển lãm" },
          { zh: "商店橱窗", py: "shāngdiàn chúchuāng", vi: "tủ kính cửa hàng" },
          { zh: "橱窗里", py: "chúchuāng lǐ", vi: "trong tủ kính" },
        ],
      },
    ],
    examples: [
      {
        zh: "那幅画挂在学校的展览橱窗里展出了。",
        py: "Nà fú huà guà zài xuéxiào de zhǎnlǎn chúchuāng lǐ zhǎnchū le.",
        vi: "Bức tranh đó được treo và trưng bày trong tủ kính triển lãm của trường.",
        hl: ["展览橱窗", "展出"],
      },
      {
        zh: "商店的橱窗里摆着很多漂亮的衣服。",
        py: "Shāngdiàn de chúchuāng lǐ bǎizhe hěn duō piàoliang de yīfu.",
        vi: "Trong tủ kính cửa hàng bày rất nhiều quần áo đẹp.",
        hl: ["橱窗"],
        added: true,
      },
    ],
    compare: [
      {
        title: "橱窗 vs 窗户 vs 窗口",
        points: [
          {
            zh: "橱窗",
            py: "chúchuāng",
            desc: "Tủ kính trưng bày hàng hóa, tranh ảnh.",
          },
          {
            zh: "窗户",
            py: "chuānghu",
            desc: "Cửa sổ của nhà, phòng (lượng từ: 扇 / 个).",
            eg: [{ zh: "打开窗户", py: "dǎkāi chuānghu", vi: "mở cửa sổ" }],
          },
          {
            zh: "窗口",
            py: "chuāngkǒu",
            desc: "Khung cửa sổ; ô / quầy giao dịch.",
            eg: [
              { zh: "售票窗口", py: "shòupiào chuāngkǒu", vi: "quầy bán vé" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 31,
    zh: "展出",
    py: "zhǎnchū",
    pos: ["动"],
    hanViet: "TRIỂN XUẤT",
    vi: "triển lãm, trưng bày",
    en: "to exhibit; to display; to show; to put on display",
    usage: [
      {
        label: "Tân ngữ / trạng ngữ đi kèm",
        items: [
          { zh: "展出作品", py: "zhǎnchū zuòpǐn", vi: "trưng bày tác phẩm" },
          { zh: "展出书画", py: "zhǎnchū shūhuà", vi: "trưng bày thư họa" },
          { zh: "在……展出", py: "zài… zhǎnchū", vi: "trưng bày ở…" },
        ],
      },
    ],
    examples: [
      {
        zh: "他的画在学校展出了。",
        py: "Tā de huà zài xuéxiào zhǎnchū le.",
        vi: "Tranh của anh ấy đã được trưng bày ở trường.",
        hl: ["展出"],
        added: true,
      },
      {
        zh: "博物馆展出了很多古老的书画。",
        py: "Bówùguǎn zhǎnchū le hěn duō gǔlǎo de shūhuà.",
        vi: "Bảo tàng trưng bày rất nhiều thư họa cổ xưa.",
        hl: ["展出"],
        added: true,
      },
    ],
  },
  {
    id: 32,
    zh: "表示",
    py: "biǎoshì",
    pos: ["动", "名"],
    hanViet: "BIỂU THỊ",
    vi: "biểu thị, bày tỏ; (danh) biểu hiện",
    en: "to show; to express; to indicate; words, actions or air expressing one’s ideas and feelings",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "表示心意", py: "biǎoshì xīnyì", vi: "biểu thị tấm lòng" },
          {
            zh: "表示祝贺 / 祝福",
            py: "biǎoshì zhùhè / zhùfú",
            vi: "chúc mừng / chúc phúc",
          },
          { zh: "表示感谢", py: "biǎoshì gǎnxiè", vi: "bày tỏ lòng cảm ơn" },
        ],
      },
      {
        label: "Trạng ngữ đi kèm",
        items: [
          {
            zh: "向他表示感谢",
            py: "xiàng tā biǎoshì gǎnxiè",
            vi: "bày tỏ lòng biết ơn với anh ấy",
          },
        ],
      },
      {
        label: "Làm danh từ (biểu hiện, thái độ)",
        items: [
          {
            zh: "一点表示都没有",
            py: "yì diǎn biǎoshì dōu méiyǒu",
            vi: "chẳng có chút biểu hiện nào",
          },
          {
            zh: "悔改的表示",
            py: "huǐgǎi de biǎoshì",
            vi: "biểu hiện hối cải",
          },
          {
            zh: "赞许的表示",
            py: "zànxǔ de biǎoshì",
            vi: "vẻ tán thưởng",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "我们向他表示感谢。",
        py: "Wǒmen xiàng tā biǎoshì gǎnxiè.",
        vi: "Chúng tôi bày tỏ lòng biết ơn với anh ấy.",
        hl: ["表示感谢"],
        hlVi: ["bày tỏ lòng biết ơn"],
      },
      {
        zh: "他对我的话表示怀疑。",
        py: "Tā duì wǒ de huà biǎoshì huáiyí.",
        vi: "Anh ấy tỏ ra nghi ngờ lời tôi nói.",
        hl: ["表示怀疑"],
        hlVi: ["tỏ ra nghi ngờ"],
      },
      {
        zh: "我们大家都表示同意了。",
        py: "Wǒmen dàjiā dōu biǎoshì tóngyì le.",
        vi: "Tất cả chúng tôi đều thể hiện sự đồng ý.",
        hl: ["表示同意"],
        hlVi: ["thể hiện sự đồng ý"],
      },
      {
        zh: "我想向他表示感谢。",
        py: "Wǒ xiǎng xiàng tā biǎoshì gǎnxiè.",
        vi: "Tôi muốn cảm ơn anh ấy.",
        hl: ["向他表示感谢"],
        hlVi: ["cảm ơn"],
      },
      {
        zh: "他送给我一份礼物表示心意。",
        py: "Tā sònggěi wǒ yí fèn lǐwù biǎoshì xīnyì.",
        vi: "Anh ấy tặng tôi một món quà để bày tỏ tấm lòng.",
        hl: ["表示心意"],
        added: true,
      },
      // {
      //   zh: "红灯表示行人和车辆停止通行。",
      //   py: "Hóngdēng biǎoshì xíngrén hé chēliàng tíngzhǐ tōngxíng.",
      //   vi: "Đèn đỏ có nghĩa là người đi bộ và xe cộ phải dừng lại, không được đi qua.",
      //   hl: ["表示"],
      //   hlVi: ["có nghĩa là"],
      // },
      // {
      //   zh: "海上红色的灯光表示那儿有浅滩或者礁石。",
      //   py: "Hǎi shang hóngsè de dēngguāng biǎoshì nàr yǒu qiǎntān huòzhě jiāoshí.",
      //   vi: "Ánh đèn đỏ trên biển cho biết ở đó có bãi cạn hoặc đá ngầm.",
      //   hl: ["表示"],
      //   hlVi: ["cho biết"],
      // },
    ],
    notes: [
      "Nghĩa 1: tỏ ra, ngỏ lời, tỏ lòng, tỏ vẻ, thể hiện. Chủ ngữ thường là danh từ chỉ người hoặc đại từ (ví dụ: 我们向他表示感谢 / 他对我的话表示怀疑 / 我们大家都表示同意了).",
      "Nghĩa 2: có ý nghĩa…, biểu hiện, biểu thị. Chủ ngữ thường là danh từ chỉ sự vật, sự việc (ví dụ: 红灯表示… / 海上红色的灯光表示…).",
    ],
    compare: [
      {
        title: "表示 (động từ) vs 表示 (danh từ)",
        points: [
          {
            zh: "表示 (động từ)",
            py: "biǎoshì",
            desc: "Tỏ ra, bày tỏ, thể hiện; hoặc “có nghĩa là”. Phía sau mang tân ngữ: 表示感谢、表示怀疑、表示同意.",
            eg: [
              {
                zh: "表示同意",
                py: "biǎoshì tóngyì",
                vi: "thể hiện sự đồng ý",
              },
            ],
            examples: [
              {
                zh: "我们向他表示感谢。",
                py: "Wǒmen xiàng tā biǎoshì gǎnxiè.",
                vi: "Chúng tôi bày tỏ lòng biết ơn với anh ấy.",
                hl: ["表示感谢"],
                hlVi: ["bày tỏ lòng biết ơn"],
              },
              {
                zh: "他对我的话表示怀疑。",
                py: "Tā duì wǒ de huà biǎoshì huáiyí.",
                vi: "Anh ấy tỏ ra nghi ngờ lời tôi nói.",
                hl: ["表示怀疑"],
                hlVi: ["tỏ ra nghi ngờ"],
              },
              {
                zh: "我们大家都表示同意了。",
                py: "Wǒmen dàjiā dōu biǎoshì tóngyì le.",
                vi: "Tất cả chúng tôi đều thể hiện sự đồng ý.",
                hl: ["表示同意"],
                hlVi: ["thể hiện sự đồng ý"],
              },
              {
                zh: "红灯表示行人和车辆停止通行。",
                py: "Hóngdēng biǎoshì xíngrén hé chēliàng tíngzhǐ tōngxíng.",
                vi: "Đèn đỏ có nghĩa là người đi bộ và xe cộ phải dừng lại, không được đi qua.",
                hl: ["表示"],
                hlVi: ["có nghĩa là"],
              },
              {
                zh: "海上红色的灯光表示那儿有浅滩或者礁石。",
                py: "Hǎi shang hóngsè de dēngguāng biǎoshì nàr yǒu qiǎntān huòzhě jiāoshí.",
                vi: "Ánh đèn đỏ trên biển cho biết ở đó có bãi cạn hoặc đá ngầm.",
                hl: ["表示"],
                hlVi: ["cho biết"],
              },
            ],
          },
          {
            zh: "表示 (danh từ)",
            py: "biǎoshì",
            desc: "Biểu cảm, thần thái, động thái (cái được biểu hiện ra). Thường làm tân ngữ của 有 / 没有 / 露出, hoặc đứng sau định ngữ + 的: 一点表示都没有、悔改的表示、赞许的表示.",
            eg: [
              {
                zh: "没有表示",
                py: "méiyǒu biǎoshì",
                vi: "không có biểu hiện gì",
              },
              {
                zh: "露出赞许的表示",
                py: "lùchū zànxǔ de biǎoshì",
                vi: "lộ ra vẻ tán thưởng",
              },
            ],
            examples: [
              {
                zh: "他口口声声说爱我，可是他一点表示都没有。",
                py: "Tā kǒukǒu-shēngshēng shuō ài wǒ, kěshì tā yì diǎn biǎoshì dōu méiyǒu.",
                vi: "Anh ta suốt ngày miệng nói yêu tôi, nhưng chẳng có chút biểu hiện nào cả.",
                hl: ["一点表示都没有"],
                hlVi: ["chẳng có chút biểu hiện nào"],
              },
              {
                zh: "我好说歹说，但他毫无悔改的表示。",
                py: "Wǒ hǎo shuō dǎi shuō, dàn tā háowú huǐgǎi de biǎoshì.",
                vi: "Tôi nói hết lời hay lẽ phải, nhưng anh ấy chẳng có chút biểu hiện hối cải nào.",
                hl: ["悔改的表示"],
                hlVi: ["biểu hiện hối cải"],
              },
              {
                zh: "他心里特别满意，但是脸上并没露出赞许的表示。",
                py: "Tā xīnlǐ tèbié mǎnyì, dànshì liǎn shang bìng méi lùchū zànxǔ de biǎoshì.",
                vi: "Trong lòng anh ấy rất hài lòng, nhưng trên mặt không hề lộ ra vẻ tán thưởng.",
                hl: ["赞许的表示"],
                hlVi: ["vẻ tán thưởng"],
              },
            ],
          },
        ],
      },
      {
        title: "表示 vs 表达",
        points: [
          {
            zh: "表示",
            py: "biǎoshì",
            desc: "Biểu thị thái độ, ý nghĩa; hay đi với 心意、祝贺、祝福、感谢. Còn là danh từ “biểu hiện” và nghĩa “có nghĩa là”.",
          },
          {
            zh: "表达",
            py: "biǎodá",
            desc: "Diễn đạt ý nghĩ, tình cảm; hay đi với 心意、祝贺、美好祝福、……意思。",
            eg: [
              {
                zh: "表达美好祝福",
                py: "biǎodá měihǎo zhùfú",
                vi: "gửi gắm lời chúc tốt đẹp",
              },
            ],
          },
        ],
        examples: [
          {
            zh: "他向我们表达了祝贺。",
            py: "Tā xiàng wǒmen biǎodá le zhùhè.",
            vi: "Anh ấy đã gửi lời chúc mừng đến chúng tôi.",
            hl: ["表达"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 33,
    zh: "筷子",
    py: "kuàizi",
    pos: ["名"],
    hanViet: "KHOÁI TỬ",
    vi: "đũa",
    en: "chopsticks",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一双筷子", py: "yì shuāng kuàizi", vi: "một đôi đũa" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "用筷子", py: "yòng kuàizi", vi: "dùng đũa" },
          { zh: "拿筷子", py: "ná kuàizi", vi: "cầm đũa" },
        ],
      },
    ],
    examples: [
      {
        zh: "请给我一双筷子。",
        py: "Qǐng gěi wǒ yì shuāng kuàizi.",
        vi: "Xin đưa cho tôi một đôi đũa.",
        hl: ["一双筷子"],
        hlVi: ["một đôi đũa"],
        added: true,
      },
      {
        zh: "我不会用筷子。",
        py: "Wǒ bú huì yòng kuàizi.",
        vi: "Tôi không biết dùng đũa.",
        hl: ["用筷子"],
        added: true,
      },
    ],
    compare: [
      {
        title: "Lượng từ 双 vs 副 vs 对",
        points: [
          {
            zh: "双",
            py: "shuāng",
            desc: "Đôi: vật / bộ phận cơ thể vốn thành cặp.",
            eg: [
              { zh: "一双筷子", py: "yì shuāng kuàizi", vi: "một đôi đũa" },
              { zh: "一双眼睛", py: "yì shuāng yǎnjing", vi: "một đôi mắt" },
            ],
          },
          {
            zh: "副",
            py: "fù",
            desc: "Bộ, cặp: vật gồm hai phần ghép lại thành một bộ.",
            eg: [
              { zh: "一副眼镜", py: "yí fù yǎnjìng", vi: "một cặp mắt kính" },
            ],
          },
          {
            zh: "对",
            py: "duì",
            desc: "Cặp: hai người / vật đi cùng, tương xứng với nhau.",
            eg: [
              { zh: "一对沙发", py: "yí duì shāfā", vi: "một cặp ghế sofa" },
              { zh: "一对夫妻", py: "yí duì fūqī", vi: "một cặp vợ chồng" },
              { zh: "一对恋人", py: "yí duì liànrén", vi: "một đôi tình nhân" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 34,
    zh: "好玩儿",
    py: "hǎowánr",
    pos: ["形"],
    hanViet: "HẢO NGOẠN",
    vi: "vui, thú vị (để chơi)",
    en: "amusing; interesting",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          { zh: "很好玩儿", py: "hěn hǎowánr", vi: "rất vui" },
          { zh: "好玩儿的游戏", py: "hǎowánr de yóuxì", vi: "trò chơi vui" },
          { zh: "好玩儿的地方", py: "hǎowánr de dìfang", vi: "nơi vui chơi" },
        ],
      },
    ],
    examples: [
      {
        zh: "这个游戏很好玩儿。",
        py: "Zhège yóuxì hěn hǎowánr.",
        vi: "Trò chơi này rất vui.",
        hl: ["好玩儿"],
        added: true,
      },
      {
        zh: "这本书很有意思。",
        py: "Zhè běn shū hěn yǒu yìsi.",
        vi: "Quyển sách này rất thú vị.",
        hl: ["有意思"],
        added: true,
      },
      {
        zh: "他是个很有趣的人。",
        py: "Tā shì ge hěn yǒuqù de rén.",
        vi: "Anh ấy là người rất thú vị.",
        hl: ["有趣"],
        added: true,
      },
    ],
    compare: [
      {
        title: "好玩儿 vs 有意思 vs 有趣",
        points: [
          {
            zh: "好玩儿",
            py: "hǎowánr",
            desc: "Khẩu ngữ: vui, thú vị để CHƠI (trò chơi, đồ chơi, nơi vui chơi).",
          },
          {
            zh: "有意思",
            py: "yǒu yìsi",
            desc: "Khẩu ngữ, nghĩa rộng nhất: thú vị, hay (sách, phim, chuyện, người).",
          },
          {
            zh: "有趣",
            py: "yǒuqù",
            desc: "Thiên văn viết hơn: thú vị, hấp dẫn, có chất hài hước.",
          },
        ],
      },
    ],
  },
  {
    id: 35,
    zh: "适应",
    py: "shìyìng",
    pos: ["动"],
    hanViet: "THÍCH ỨNG",
    vi: "thích nghi, thích ứng",
    en: "to suit; to adapt to",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          {
            zh: "适应环境",
            py: "shìyìng huánjìng",
            vi: "thích nghi hoàn cảnh",
          },
          {
            zh: "适应生活",
            py: "shìyìng shēnghuó",
            vi: "thích nghi cuộc sống",
          },
          { zh: "适应天气", py: "shìyìng tiānqì", vi: "thích nghi thời tiết" },
        ],
      },
      {
        label: "Bổ ngữ đi kèm",
        items: [
          {
            zh: "很快适应",
            py: "hěn kuài shìyìng",
            vi: "nhanh chóng thích nghi",
          },
          { zh: "适应不了", py: "shìyìng bu liǎo", vi: "không thích nghi nổi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他很快就适应了这里的生活。",
        py: "Tā hěn kuài jiù shìyìng le zhèlǐ de shēnghuó.",
        vi: "Anh ấy rất nhanh đã thích nghi với cuộc sống ở đây.",
        hl: ["适应"],
        hlVi: ["thích nghi"],
        added: true,
      },
      {
        zh: "我还不适应这里的天气。",
        py: "Wǒ hái bú shìyìng zhèlǐ de tiānqì.",
        vi: "Tôi vẫn chưa thích nghi với thời tiết ở đây.",
        hl: ["适应"],
        added: true,
      },
    ],
  },
  {
    id: 36,
    zh: "健康",
    py: "jiànkāng",
    pos: ["形", "名"],
    hanViet: "KIỆN KHANG",
    vi: "khỏe mạnh; (danh) sức khỏe",
    en: "healthy",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "身体健康", py: "shēntǐ jiànkāng", vi: "sức khỏe tốt" },
          {
            zh: "健康的生活",
            py: "jiànkāng de shēnghuó",
            vi: "cuộc sống lành mạnh",
          },
          { zh: "保持健康", py: "bǎochí jiànkāng", vi: "giữ gìn sức khỏe" },
        ],
      },
    ],
    examples: [
      {
        zh: "运动对身体健康很重要。",
        py: "Yùndòng duì shēntǐ jiànkāng hěn zhòngyào.",
        vi: "Vận động rất quan trọng với sức khỏe.",
        hl: ["健康"],
        added: true,
      },
      {
        zh: "她过着健康的生活。",
        py: "Tā guòzhe jiànkāng de shēnghuó.",
        vi: "Cô ấy sống một cuộc sống lành mạnh.",
        hl: ["健康"],
        added: true,
      },
    ],
    related: [
      {
        label: "好好儿",
        pos: ["副", "形"],
        zh: "好好儿",
        py: "hǎohāor",
        hanViet: "HẢO HẢO NHI",
        vi: "khỏe mạnh, bình thường, tốt lành; cố gắng hết sức, cho tử tế",
        examples: [
          {
            zh: "你要好好儿学习。",
            py: "Nǐ yào hǎohāor xuéxí.",
            vi: "Bạn phải học hành cho tử tế.",
            hl: ["好好儿"],
            hlVi: ["cho tử tế"],
            added: true,
          },
          {
            zh: "他昨天还好好儿的，今天怎么病了？",
            py: "Tā zuótiān hái hǎohāor de, jīntiān zěnme bìng le?",
            vi: "Hôm qua anh ấy còn khỏe mạnh, sao hôm nay lại bệnh?",
            hl: ["好好儿"],
            added: true,
          },
        ],
      },
    ],
  },
];

/* ---- 专名: tên riêng ---- */
const PROPER: Entry[] = [
  {
    id: "P1",
    zh: "亚洲",
    py: "Yàzhōu",
    pos: ["专名"],
    hanViet: "Á CHÂU",
    vi: "châu Á",
    en: "Asia",
    examples: [
      {
        zh: "越南在亚洲。",
        py: "Yuènán zài Yàzhōu.",
        vi: "Việt Nam ở châu Á.",
        hl: ["亚洲"],
        added: true,
      },
    ],
  },
  {
    id: "P2",
    zh: "非洲",
    py: "Fēizhōu",
    pos: ["专名"],
    hanViet: "PHI CHÂU",
    vi: "châu Phi",
    en: "Africa",
    examples: [
      {
        zh: "他去过非洲。",
        py: "Tā qùguo Fēizhōu.",
        vi: "Anh ấy đã từng đến châu Phi.",
        hl: ["非洲"],
        added: true,
      },
    ],
  },
  {
    id: "P3",
    zh: "美洲",
    py: "Měizhōu",
    pos: ["专名"],
    hanViet: "MỸ CHÂU",
    vi: "châu Mỹ",
    en: "America(s)",
    examples: [
      {
        zh: "美洲分为北美洲和南美洲。",
        py: "Měizhōu fēn wéi Běi Měizhōu hé Nán Měizhōu.",
        vi: "Châu Mỹ chia thành Bắc Mỹ và Nam Mỹ.",
        hl: ["美洲"],
        added: true,
      },
    ],
  },
  {
    id: "P4",
    zh: "大洋洲",
    py: "Dàyángzhōu",
    pos: ["专名"],
    hanViet: "ĐẠI DƯƠNG CHÂU",
    vi: "châu Đại Dương",
    en: "Oceania",
    examples: [
      {
        zh: "澳大利亚在大洋洲。",
        py: "Àodàlìyà zài Dàyángzhōu.",
        vi: "Úc nằm ở châu Đại Dương.",
        hl: ["大洋洲"],
        added: true,
      },
    ],
    notes: ["澳洲 (châu Úc) thường chỉ Úc; 大洋洲 là châu Đại Dương."],
  },
  {
    id: "P5",
    zh: "唐",
    py: "Táng",
    pos: ["专名"],
    hanViet: "ĐƯỜNG",
    vi: "nhà Đường (618–907)",
    en: "Tang Dynasty (618—907)",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "唐诗", py: "Tángshī", vi: "thơ Đường" },
          { zh: "唐朝", py: "Tángcháo", vi: "triều Đường" },
        ],
      },
    ],
    examples: [
      {
        zh: "李白是唐朝的诗人。",
        py: "Lǐ Bái shì Tángcháo de shīrén.",
        vi: "Lý Bạch là nhà thơ đời Đường.",
        hl: ["唐朝"],
        added: true,
      },
    ],
  },
];

/* ---- 补充: từ / điểm ghi thêm trong file docx của giáo viên ---- */
const SUPPLEMENT: Entry[] = [
  {
    id: "B1",
    zh: "毛笔",
    py: "máobǐ",
    pos: ["名"],
    hanViet: "MAO BÚT",
    vi: "bút lông",
    en: "writing brush",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一支毛笔", py: "yì zhī máobǐ", vi: "một cây bút lông" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          {
            zh: "用毛笔写字",
            py: "yòng máobǐ xiě zì",
            vi: "dùng bút lông viết chữ",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "他用毛笔写了一首诗。",
        py: "Tā yòng máobǐ xiě le yì shǒu shī.",
        vi: "Anh ấy dùng bút lông viết một bài thơ.",
        hl: ["毛笔"],
        added: true,
      },
    ],
    related: [
      {
        label: "钢笔",
        pos: ["名"],
        zh: "钢笔",
        py: "gāngbǐ",
        hanViet: "CƯƠNG BÚT",
        vi: "bút mực (lượng từ: 支)",
        examples: [
          {
            zh: "我有一支钢笔。",
            py: "Wǒ yǒu yì zhī gāngbǐ.",
            vi: "Tôi có một cây bút mực.",
            hl: ["一支钢笔"],
            added: true,
          },
        ],
      },
      {
        label: "铅笔",
        pos: ["名"],
        zh: "铅笔",
        py: "qiānbǐ",
        hanViet: "DUYÊN BÚT",
        vi: "bút chì (lượng từ: 支)",
        examples: [
          {
            zh: "请用铅笔写。",
            py: "Qǐng yòng qiānbǐ xiě.",
            vi: "Xin viết bằng bút chì.",
            hl: ["铅笔"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: "B2",
    zh: "干",
    py: "gān / gàn",
    pos: ["形", "动"],
    hanViet: "CAN / CÁN",
    vi: "gān: khô · gàn: làm",
    en: "dry / to do",
    usage: [
      {
        label: "gān (khô)",
        items: [{ zh: "干燥", py: "gānzào", vi: "khô ráo, khô hanh" }],
      },
      {
        label: "gàn (làm)",
        items: [
          { zh: "干什么", py: "gàn shénme", vi: "làm gì" },
          { zh: "干活儿", py: "gàn huór", vi: "làm việc tay chân" },
          { zh: "干工作", py: "gàn gōngzuò", vi: "làm công việc" },
        ],
      },
    ],
    examples: [
      {
        zh: "你在干什么？",
        py: "Nǐ zài gàn shénme?",
        vi: "Bạn đang làm gì thế?",
        hl: ["干什么"],
        added: true,
      },
      {
        zh: "北方的冬天空气很干燥。",
        py: "Běifāng de dōngtiān kōngqì hěn gānzào.",
        vi: "Mùa đông ở miền Bắc không khí rất khô.",
        hl: ["干燥"],
        added: true,
      },
    ],
    compare: [
      {
        title: "干燥 vs 枯燥",
        points: [
          {
            zh: "干燥",
            py: "gānzào",
            desc: "Khô ráo, thiếu độ ẩm: 空气干燥、皮肤干燥.",
          },
          {
            zh: "枯燥",
            py: "kūzào",
            desc: "Khô khan, tẻ nhạt: 内容枯燥、生活枯燥.",
          },
        ],
        examples: [
          {
            zh: "这本书的内容太枯燥了。",
            py: "Zhè běn shū de nèiróng tài kūzào le.",
            vi: "Nội dung quyển sách này khô khan quá.",
            hl: ["枯燥"],
            added: true,
          },
        ],
      },
      {
        title: "干 vs 做 vs 弄 vs 搞 vs 办 vs 当 (làm)",
        points: [
          {
            zh: "干",
            py: "gàn",
            desc: "Khẩu ngữ: làm việc, làm công việc.",
            eg: [{ zh: "干活儿", py: "gàn huór", vi: "làm việc" }],
          },
          {
            zh: "做",
            py: "zuò",
            desc: "Làm, thực hiện, chế tạo.",
            eg: [
              {
                zh: "做饭 / 做作业",
                py: "zuò fàn / zuò zuòyè",
                vi: "nấu cơm / làm bài tập",
              },
            ],
          },
          {
            zh: "弄",
            py: "nòng",
            desc: "Khẩu ngữ: làm, xoay xở; hay đi với kết quả.",
            eg: [
              {
                zh: "弄坏 / 弄清楚",
                py: "nònghuài / nòng qīngchu",
                vi: "làm hỏng / làm rõ",
              },
            ],
          },
          {
            zh: "搞",
            py: "gǎo",
            desc: "Khẩu ngữ, phạm vi rộng: làm, tiến hành, xoay xở.",
            eg: [
              {
                zh: "搞活动 / 搞清楚",
                py: "gǎo huódòng / gǎo qīngchu",
                vi: "tổ chức hoạt động / làm rõ",
              },
            ],
          },
          {
            zh: "办",
            py: "bàn",
            desc: "Giải quyết, xử lý việc, thủ tục.",
            eg: [{ zh: "办手续", py: "bàn shǒuxù", vi: "làm thủ tục" }],
          },
          {
            zh: "当",
            py: "dāng",
            desc: "Làm (nghề, chức vụ).",
            eg: [{ zh: "当老师", py: "dāng lǎoshī", vi: "làm giáo viên" }],
          },
        ],
        examples: [
          {
            zh: "我去办一下手续。",
            py: "Wǒ qù bàn yíxià shǒuxù.",
            vi: "Tôi đi làm thủ tục một chút.",
            hl: ["办"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: "B3",
    zh: "突然",
    py: "tūrán",
    pos: ["形", "副"],
    hanViet: "ĐỘT NHIÊN",
    vi: "đột nhiên, bỗng nhiên, đột ngột",
    en: "suddenly",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "突然下雨", py: "tūrán xià yǔ", vi: "đột nhiên mưa" },
          { zh: "很突然", py: "hěn tūrán", vi: "rất đột ngột" },
          {
            zh: "发生得很突然",
            py: "fāshēng de hěn tūrán",
            vi: "xảy ra rất đột ngột",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "天突然下雨了。",
        py: "Tiān tūrán xià yǔ le.",
        vi: "Trời đột nhiên đổ mưa.",
        hl: ["突然"],
        added: true,
      },
      {
        zh: "这件事发生得很突然。",
        py: "Zhè jiàn shì fāshēng de hěn tūrán.",
        vi: "Chuyện này xảy ra rất đột ngột.",
        hl: ["很突然"],
        added: true,
      },
    ],
    related: [
      {
        label: "忽然",
        pos: ["副"],
        zh: "忽然",
        py: "hūrán",
        hanViet: "HỐT NHIÊN",
        vi: "bỗng nhiên",
        examples: [
          {
            zh: "忽然下雨了。",
            py: "Hūrán xià yǔ le.",
            vi: "Bỗng nhiên trời mưa.",
            hl: ["忽然"],
            added: true,
          },
          {
            zh: "他忽然想起了一件事。",
            py: "Tā hūrán xiǎngqǐ le yí jiàn shì.",
            vi: "Anh ấy bỗng nhớ ra một việc.",
            hl: ["忽然"],
            added: true,
          },
        ],
      },
    ],
    compare: [
      {
        title: "突然 vs 忽然",
        points: [
          {
            zh: "突然",
            py: "tūrán",
            desc: "Tính từ + phó từ: làm được vị ngữ (很突然、太突然了), định ngữ, bổ ngữ và trạng ngữ.",
          },
          {
            zh: "忽然",
            py: "hūrán",
            desc: "Chỉ là PHÓ TỪ, làm trạng ngữ (忽然下雨); không làm vị ngữ, không nói 很忽然.",
          },
        ],
      },
    ],
  },
  {
    id: "B4",
    zh: "不到长城非好汉",
    py: "bú dào Chángchéng fēi hǎohàn",
    pos: ["谚语"],
    hanViet: "BẤT ĐÁO TRƯỜNG THÀNH PHI HẢO HÁN",
    vi: "Chưa đến Vạn Lý Trường Thành thì chưa phải hảo hán",
    en: "He who has not climbed the Great Wall is not a true man",
    examples: [
      {
        zh: "来北京一定要爬长城，不到长城非好汉。",
        py: "Lái Běijīng yídìng yào pá Chángchéng, bú dào Chángchéng fēi hǎohàn.",
        vi: "Đến Bắc Kinh nhất định phải leo Trường Thành, chưa đến Trường Thành chưa phải hảo hán.",
        hl: ["不到长城非好汉"],
        hlVi: ["chưa phải hảo hán"],
        added: true,
      },
    ],
    notes: ["好汉 hǎohàn: người anh hùng, đấng nam nhi."],
  },
  {
    id: "B5",
    zh: "滑",
    py: "huá",
    pos: ["动", "形"],
    hanViet: "HOẠT",
    vi: "trượt; trơn",
    en: "to slide; slippery",
    usage: [
      {
        label: "Tân ngữ / kết hợp",
        items: [
          { zh: "滑冰", py: "huá bīng", vi: "trượt băng" },
          { zh: "滑雪", py: "huá xuě", vi: "trượt tuyết" },
          { zh: "小心路滑", py: "xiǎoxīn lù huá", vi: "cẩn thận đường trơn" },
        ],
      },
    ],
    examples: [
      {
        zh: "冬天我们去滑冰。",
        py: "Dōngtiān wǒmen qù huá bīng.",
        vi: "Mùa đông chúng tôi đi trượt băng.",
        hl: ["滑冰"],
        added: true,
      },
      {
        zh: "小心路滑！",
        py: "Xiǎoxīn lù huá!",
        vi: "Cẩn thận đường trơn!",
        hl: ["路滑"],
        added: true,
      },
      {
        zh: "他滑雪滑得很好。",
        py: "Tā huáxuě huá de hěn hǎo.",
        vi: "Anh ấy trượt tuyết rất giỏi.",
        hl: ["滑雪"],
        added: true,
      },
    ],
  },
  {
    id: "B6",
    zh: "堆",
    py: "duī",
    pos: ["量", "动"],
    hanViet: "ĐỐI",
    vi: "đống; chất đống",
    en: "pile; to pile up",
    usage: [
      {
        label: "Lượng từ + danh từ",
        items: [
          { zh: "一堆事情", py: "yì duī shìqing", vi: "một đống việc" },
          { zh: "一堆书", py: "yì duī shū", vi: "một đống / chồng sách" },
        ],
      },
      {
        label: "Làm động từ",
        items: [
          { zh: "堆成山", py: "duī chéng shān", vi: "chất thành núi" },
          { zh: "堆满", py: "duīmǎn", vi: "chất đầy" },
        ],
      },
    ],
    examples: [
      {
        zh: "今天我有一堆事情要做。",
        py: "Jīntiān wǒ yǒu yì duī shìqing yào zuò.",
        vi: "Hôm nay tôi có cả đống việc phải làm.",
        hl: ["一堆事情"],
        added: true,
      },
      {
        zh: "桌子上堆满了书。",
        py: "Zhuōzi shang duīmǎn le shū.",
        vi: "Trên bàn chất đầy sách.",
        hl: ["堆满"],
        added: true,
      },
    ],
  },
  {
    id: "B7",
    zh: "扶",
    py: "fú",
    pos: ["动"],
    hanViet: "PHÙ",
    vi: "dìu, đỡ",
    en: "to support with the hand; to help up",
    usage: [
      {
        label: "Tân ngữ / bổ ngữ đi kèm",
        items: [
          { zh: "扶老人", py: "fú lǎorén", vi: "dìu người già" },
          { zh: "扶起来", py: "fú qǐlái", vi: "đỡ dậy" },
          { zh: "扶着……", py: "fúzhe…", vi: "vịn / đỡ lấy…" },
        ],
      },
    ],
    examples: [
      {
        zh: "他扶着老人过马路。",
        py: "Tā fúzhe lǎorén guò mǎlù.",
        vi: "Anh ấy dìu cụ già qua đường.",
        hl: ["扶着"],
        added: true,
      },
      {
        zh: "孩子摔倒了，妈妈把他扶起来。",
        py: "Háizi shuāidǎo le, māma bǎ tā fú qǐlái.",
        vi: "Đứa bé ngã, mẹ đỡ bé dậy.",
        hl: ["扶起来"],
        added: true,
      },
    ],
    related: [
      {
        label: "扶手",
        pos: ["名"],
        zh: "扶手",
        py: "fúshou",
        hanViet: "PHÙ THỦ",
        vi: "tay vịn",
        examples: [
          {
            zh: "请扶好扶手。",
            py: "Qǐng fúhǎo fúshou.",
            vi: "Xin hãy vịn chắc tay vịn.",
            hl: ["扶手"],
            added: true,
          },
        ],
      },
      {
        label: "扶梯",
        pos: ["名"],
        zh: "扶梯",
        py: "fútī",
        hanViet: "PHÙ THÊ",
        vi: "cầu thang có tay vịn (自动扶梯: thang cuốn)",
        examples: [
          {
            zh: "请站在自动扶梯的右边。",
            py: "Qǐng zhàn zài zìdòng fútī de yòubian.",
            vi: "Xin đứng bên phải thang cuốn.",
            hl: ["扶梯"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: "B8",
    zh: "各 / 每",
    py: "gè / měi",
    pos: ["代"],
    hanViet: "CÁC / MỖI",
    vi: "các / mỗi",
    en: "each; every",
    usage: [
      {
        label: "各 + danh từ / lượng từ",
        items: [
          { zh: "各国 = 各个国家", py: "gèguó = gègè guójiā", vi: "các nước" },
          { zh: "各位", py: "gèwèi", vi: "các vị" },
        ],
      },
      {
        label: "每 + lượng từ / từ chỉ thời gian",
        items: [
          { zh: "每个国家", py: "měi ge guójiā", vi: "mỗi nước" },
          { zh: "每一个国家", py: "měi yí ge guójiā", vi: "mỗi một nước" },
          {
            zh: "每天 / 每年",
            py: "měitiān / měinián",
            vi: "mỗi ngày / mỗi năm",
          },
          { zh: "每一个人", py: "měi yí ge rén", vi: "mỗi một người" },
        ],
      },
    ],
    examples: [
      {
        zh: "来自世界各国的留学生。",
        py: "Láizì shìjiè gèguó de liúxuéshēng.",
        vi: "Lưu học sinh đến từ các nước trên thế giới.",
        hl: ["各国"],
        hlVi: ["các nước"],
        added: true,
      },
      {
        zh: "每个国家都有自己的文化。",
        py: "Měi ge guójiā dōu yǒu zìjǐ de wénhuà.",
        vi: "Mỗi quốc gia đều có nền văn hóa riêng.",
        hl: ["每个国家"],
        added: true,
      },
      {
        zh: "他每天都跑步。",
        py: "Tā měitiān dōu pǎobù.",
        vi: "Ngày nào anh ấy cũng chạy bộ.",
        hl: ["每天"],
        added: true,
      },
    ],
    notes: [
      "Sai: 各个国 → đúng: 各国 hoặc 各个国家 (không tách thành 各个国).",
      "各: nhấn vào “các cá thể, mỗi nơi khác nhau”. 每: nhấn vào “mỗi một, lần nào cũng thế”, hay đi với 都.",
    ],
  },
  {
    id: "B9",
    zh: "翻来覆去",
    py: "fānlái-fùqù",
    pos: ["成语"],
    hanViet: "PHIÊN LAI PHÚC KHỨ",
    vi: "trằn trọc, lăn qua lăn lại; (nghĩ / nói) đi nghĩ lại",
    en: "to toss and turn; again and again",
    usage: [
      {
        label: "Đi với động từ",
        items: [
          {
            zh: "翻来覆去睡不着",
            py: "fānlái-fùqù shuì bu zháo",
            vi: "trằn trọc không ngủ được",
          },
          {
            zh: "翻来覆去地想",
            py: "fānlái-fùqù de xiǎng",
            vi: "nghĩ đi nghĩ lại",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "昨天晚上我翻来覆去睡不着。",
        py: "Zuótiān wǎnshang wǒ fānlái-fùqù shuì bu zháo.",
        vi: "Tối qua tôi trằn trọc không ngủ được.",
        hl: ["翻来覆去"],
        hlVi: ["trằn trọc"],
        added: true,
      },
      {
        zh: "他翻来覆去地想这件事。",
        py: "Tā fānlái-fùqù de xiǎng zhè jiàn shì.",
        vi: "Anh ấy nghĩ đi nghĩ lại chuyện này.",
        hl: ["翻来覆去"],
        added: true,
      },
    ],
  },
];

const SECTIONS: Section[] = [
  {
    title: "生词",
    subtitle: "36 từ trong sách (file PDF)",
    entries: MAIN,
    jumpLinks: true,
  },
  {
    title: "专名 Zhuānmíng · Tên riêng",
    subtitle: "5 tên riêng trong sách",
    entries: PROPER,
  },
  {
    title: "补充 · Từ và điểm bổ sung",
    subtitle: "Ghi thêm trong file docx của giáo viên",
    entries: SUPPLEMENT,
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

      {/* Hàng phụ: từ liên quan (愿意的愿 / 希望的望 …) */}
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

export default function VocabBai2() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-3 pb-5 sm:px-4 sm:pb-8">
      {SECTIONS.map((sec) => (
        <section key={sec.title} className="mb-12 min-w-0">
          <div className="my-3 flex items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
              <span className="ztai__zh text-stone-600">二</span>
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
                    src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/02_tuvung.mp3"
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
              = ví dụ không có trong docx, mình tự thêm (bạn kiểm tra lại giúp
              nhé).
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
