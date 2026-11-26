import React from "react";

/* =====================================================================
   TỪ VỰNG GTHN 5 (汉语教程 第三册 上) — BÀI 3: 北京的四季
   Từ mới: file PDF (bai3_shengci.pdf) · Ví dụ / phân biệt: file docx của giáo viên
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
    zh: "部分",
    py: "bùfen",
    pos: ["名"],
    hanViet: "BỘ PHẬN",
    vi: "phần, bộ phận (của một chỉnh thể)",
    en: "part; section",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "一部分", py: "yí bùfen", vi: "một phần" },
          {
            zh: "大部分 / 小部分",
            py: "dà bùfen / xiǎo bùfen",
            vi: "phần lớn / phần nhỏ",
          },
          { zh: "这部分", py: "zhè bùfen", vi: "phần này" },
        ],
      },
    ],
    examples: [
      {
        zh: "这个城市的大部分地区都很安静。",
        py: "Zhège chéngshì de dà bùfen dìqū dōu hěn ānjìng.",
        vi: "Phần lớn khu vực của thành phố này đều rất yên tĩnh.",
        hl: ["大部分"],
        added: true,
      },
      {
        zh: "我只看了书的一部分。",
        py: "Wǒ zhǐ kàn le shū de yí bùfen.",
        vi: "Tôi mới đọc một phần của cuốn sách.",
        hl: ["一部分"],
        added: true,
      },
    ],
    compare: [
      {
        title: "部分 vs 部门",
        points: [
          {
            zh: "部分",
            py: "bùfen",
            desc: "Một phần được chia ra từ cái toàn thể: 一部分、大部分. Đối lập với 全部 (toàn bộ).",
          },
          {
            zh: "部门",
            py: "bùmén",
            desc: "Bộ phận / ban ngành trong một tổ chức, cơ quan.",
            eg: [
              { zh: "政府部门", py: "zhèngfǔ bùmén", vi: "cơ quan chính phủ" },
            ],
          },
        ],
        examples: [
          {
            zh: "他在公司的销售部门工作。",
            py: "Tā zài gōngsī de xiāoshòu bùmén gōngzuò.",
            vi: "Anh ấy làm việc ở bộ phận kinh doanh của công ty.",
            hl: ["部门"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    zh: "地区",
    py: "dìqū",
    pos: ["名"],
    hanViet: "ĐỊA KHU",
    vi: "khu vực, vùng",
    en: "region; area",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一个地区", py: "yí ge dìqū", vi: "một khu vực" }],
      },
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "北方地区", py: "běifāng dìqū", vi: "khu vực phía Bắc" },
          {
            zh: "全国各地区",
            py: "quánguó gè dìqū",
            vi: "các vùng trong cả nước",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "这个地区冬天很冷。",
        py: "Zhège dìqū dōngtiān hěn lěng.",
        vi: "Khu vực này mùa đông rất lạnh.",
        hl: ["地区"],
        added: true,
      },
      {
        zh: "来北京的游人来自世界各个地区。",
        py: "Lái Běijīng de yóurén láizì shìjiè gège dìqū.",
        vi: "Du khách đến Bắc Kinh đến từ khắp các khu vực trên thế giới.",
        hl: ["地区"],
        added: true,
      },
    ],
    related: [
      {
        label: "区",
        pos: ["名"],
        zh: "区",
        py: "qū",
        hanViet: "KHU",
        vi: "quận, khu (đơn vị hành chính / khu chức năng)",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "海淀区", py: "Hǎidiàn Qū", vi: "quận Hải Điến" },
              { zh: "小区", py: "xiǎoqū", vi: "khu dân cư" },
            ],
          },
        ],
        examples: [
          {
            zh: "我住在朝阳区。",
            py: "Wǒ zhù zài Cháoyáng Qū.",
            vi: "Tôi sống ở quận Triều Dương.",
            hl: ["区"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    zh: "拿",
    py: "ná",
    pos: ["介"],
    hanViet: "NÃ",
    vi: "lấy … mà nói (đưa ra đối tượng để bàn)",
    en: "used to introduce the object",
    usage: [
      {
        label: "Cấu trúc: 拿 + danh từ + 来 + động từ",
        items: [
          { zh: "拿……来说", py: "ná… lái shuō", vi: "lấy … mà nói" },
          { zh: "拿……来看", py: "ná… lái kàn", vi: "lấy … mà xét" },
          {
            zh: "拿……来比较 / 分析",
            py: "ná… lái bǐjiào / fēnxī",
            vi: "lấy … ra so sánh / phân tích",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "拿天气来说，南方比北方暖和。",
        py: "Ná tiānqì lái shuō, nánfāng bǐ běifāng nuǎnhuo.",
        vi: "Lấy thời tiết mà nói, miền Nam ấm hơn miền Bắc.",
        hl: ["拿天气来说"],
        hlVi: ["Lấy thời tiết mà nói"],
        added: true,
      },
      {
        zh: "拿学习来看，他比我努力。",
        py: "Ná xuéxí lái kàn, tā bǐ wǒ nǔlì.",
        vi: "Xét về việc học, anh ấy chăm chỉ hơn tôi.",
        hl: ["拿学习来看"],
        added: true,
      },
    ],
    related: [
      {
        label: "拿 (động từ)",
        pos: ["动"],
        zh: "拿",
        py: "ná",
        hanViet: "NÃ",
        vi: "cầm, lấy",
        usage: [
          {
            label: "Tân ngữ đi kèm",
            items: [
              { zh: "拿书", py: "ná shū", vi: "cầm sách" },
              { zh: "拿出来", py: "ná chūlái", vi: "lấy ra" },
            ],
          },
        ],
        examples: [
          {
            zh: "请把书拿出来。",
            py: "Qǐng bǎ shū ná chūlái.",
            vi: "Xin hãy lấy sách ra.",
            hl: ["拿出来"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "Chỉ dùng 拿……来 + động từ với các động từ như 说、看、讲、比、比较、分析 (theo phần Usage trong sách).",
    ],
  },
  {
    id: 4,
    zh: "脱",
    py: "tuō",
    pos: ["动"],
    hanViet: "THOÁT",
    vi: "cởi, tháo (quần áo, giày mũ)",
    en: "to take off",
    usage: [
      {
        label: "Tân ngữ / bổ ngữ đi kèm",
        items: [
          { zh: "脱衣服", py: "tuō yīfu", vi: "cởi quần áo" },
          { zh: "脱鞋", py: "tuō xié", vi: "cởi giày" },
          { zh: "脱帽子", py: "tuō màozi", vi: "bỏ mũ" },
          { zh: "脱下来", py: "tuō xiàlái", vi: "cởi ra" },
        ],
      },
    ],
    examples: [
      {
        zh: "天气热了，他把外套脱下来了。",
        py: "Tiānqì rè le, tā bǎ wàitào tuō xiàlái le.",
        vi: "Trời nóng lên, anh ấy cởi áo khoác ra.",
        hl: ["脱下来"],
        hlVi: ["cởi"],
        added: true,
      },
      {
        zh: "进门请脱鞋。",
        py: "Jìn mén qǐng tuō xié.",
        vi: "Vào cửa xin hãy cởi giày.",
        hl: ["脱鞋"],
        added: true,
      },
    ],
    notes: ["Trái nghĩa: 穿 chuān (mặc, mang)."],
  },
  {
    id: 5,
    zh: "冬衣",
    py: "dōngyī",
    pos: ["名"],
    hanViet: "ĐÔNG Y",
    vi: "quần áo mùa đông",
    en: "winter clothes",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一件冬衣", py: "yí jiàn dōngyī", vi: "một chiếc áo đông" },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "换冬衣", py: "huàn dōngyī", vi: "thay đồ đông" },
          { zh: "准备冬衣", py: "zhǔnbèi dōngyī", vi: "chuẩn bị đồ đông" },
        ],
      },
    ],
    examples: [
      {
        zh: "天冷了，该换冬衣了。",
        py: "Tiān lěng le, gāi huàn dōngyī le.",
        vi: "Trời lạnh rồi, đến lúc thay đồ đông.",
        hl: ["换冬衣"],
        added: true,
      },
      {
        zh: "妈妈给我准备了很多冬衣。",
        py: "Māma gěi wǒ zhǔnbèi le hěn duō dōngyī.",
        vi: "Mẹ chuẩn bị cho tôi rất nhiều đồ đông.",
        hl: ["冬衣"],
        added: true,
      },
    ],
    related: [
      {
        label: "冬装",
        pos: ["名"],
        zh: "冬装",
        py: "dōngzhuāng",
        hanViet: "ĐÔNG TRANG",
        vi: "trang phục mùa đông (hay dùng trong thời trang, cửa hàng)",
        examples: [
          {
            zh: "商店里的冬装打折了。",
            py: "Shāngdiàn lǐ de dōngzhuāng dǎzhé le.",
            vi: "Đồ đông trong cửa hàng được giảm giá rồi.",
            hl: ["冬装"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    zh: "春装",
    py: "chūnzhuāng",
    pos: ["名"],
    hanViet: "XUÂN TRANG",
    vi: "trang phục mùa xuân",
    en: "spring clothes",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一套春装", py: "yí tào chūnzhuāng", vi: "một bộ đồ xuân" },
        ],
      },
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "换春装", py: "huàn chūnzhuāng", vi: "thay đồ xuân" },
          {
            zh: "夏装 / 秋装 / 冬装",
            py: "xiàzhuāng / qiūzhuāng / dōngzhuāng",
            vi: "đồ hè / thu / đông",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "天气暖和了，人们都穿上了春装。",
        py: "Tiānqì nuǎnhuo le, rénmen dōu chuānshang le chūnzhuāng.",
        vi: "Trời ấm lên, mọi người đều mặc đồ xuân.",
        hl: ["春装"],
        added: true,
      },
      {
        zh: "我想买一套新的春装。",
        py: "Wǒ xiǎng mǎi yí tào xīn de chūnzhuāng.",
        vi: "Tôi muốn mua một bộ đồ xuân mới.",
        hl: ["春装"],
        added: true,
      },
    ],
  },
  {
    id: 7,
    zh: "姑娘",
    py: "gūniang",
    pos: ["名"],
    hanViet: "CÔ NƯƠNG",
    vi: "cô gái, thiếu nữ",
    en: "girl",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一个姑娘", py: "yí ge gūniang", vi: "một cô gái" },
          { zh: "一位姑娘", py: "yí wèi gūniang", vi: "một cô gái (lịch sự)" },
        ],
      },
    ],
    examples: [
      {
        zh: "那个姑娘是我的同学。",
        py: "Nàge gūniang shì wǒ de tóngxué.",
        vi: "Cô gái đó là bạn học của tôi.",
        hl: ["姑娘"],
        added: true,
      },
      {
        zh: "湖边站着一位漂亮的姑娘。",
        py: "Hú biān zhànzhe yí wèi piàoliang de gūniang.",
        vi: "Bên hồ có một cô gái xinh đẹp đứng đó.",
        hl: ["一位漂亮的姑娘"],
        added: true,
      },
    ],
    compare: [
      {
        title: "姑娘 vs 小姐 vs 小姐姐",
        points: [
          {
            zh: "姑娘",
            py: "gūniang",
            desc: "Cô gái trẻ, thân mật, đời thường; cũng dùng để gọi con gái mình.",
          },
          {
            zh: "小姐",
            py: "xiǎojie",
            desc: "Cách xưng hô lịch sự với phụ nữ trẻ (cô, tiểu thư), hay dùng trong giao tiếp, dịch vụ.",
            eg: [{ zh: "王小姐", py: "Wáng xiǎojie", vi: "cô Vương" }],
          },
          {
            zh: "小姐姐",
            py: "xiǎojiejie",
            desc: "Cách gọi thân thiện trên mạng / giữa bạn trẻ: “chị gái” (người nữ lớn hơn một chút hoặc ngang tuổi, dễ mến).",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    zh: "湖",
    py: "hú",
    pos: ["名"],
    hanViet: "HỒ",
    vi: "hồ",
    en: "lake",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一个湖", py: "yí ge hú", vi: "một cái hồ" },
          { zh: "一片湖", py: "yí piàn hú", vi: "một vùng hồ" },
        ],
      },
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "湖边", py: "húbiān", vi: "bên hồ" },
          { zh: "湖上", py: "hú shang", vi: "trên mặt hồ" },
          { zh: "湖水", py: "húshuǐ", vi: "nước hồ" },
        ],
      },
    ],
    examples: [
      {
        zh: "公园里有一个很大的湖。",
        py: "Gōngyuán lǐ yǒu yí ge hěn dà de hú.",
        vi: "Trong công viên có một cái hồ rất lớn.",
        hl: ["一个很大的湖"],
        added: true,
      },
      {
        zh: "夏天，人们喜欢在湖上划船。",
        py: "Xiàtiān, rénmen xǐhuan zài hú shang huá chuán.",
        vi: "Mùa hè, mọi người thích chèo thuyền trên hồ.",
        hl: ["湖上"],
        added: true,
      },
    ],
    related: [
      {
        label: "池",
        pos: ["名"],
        zh: "池",
        py: "chí",
        hanViet: "TRÌ",
        vi: "ao, hồ nhỏ, bể (nhỏ, thường nhân tạo)",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "游泳池", py: "yóuyǒngchí", vi: "hồ bơi" },
              { zh: "池塘", py: "chítáng", vi: "ao" },
            ],
          },
        ],
        examples: [
          {
            zh: "院子里有一个小池塘。",
            py: "Yuànzi lǐ yǒu yí ge xiǎo chítáng.",
            vi: "Trong sân có một cái ao nhỏ.",
            hl: ["池塘"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "湖 là hồ lớn, thường tự nhiên. 池 là ao, bể nhỏ, hay gặp trong từ ghép (游泳池、池塘).",
    ],
  },
  {
    id: 9,
    zh: "划船",
    py: "huá chuán",
    pos: ["动宾"],
    hanViet: "HOẠCH THUYỀN",
    vi: "chèo thuyền (cụm động tân)",
    en: "to row a boat",
    usage: [
      {
        label: "Trạng ngữ đi kèm",
        items: [
          {
            zh: "在湖上划船",
            py: "zài hú shang huá chuán",
            vi: "chèo thuyền trên hồ",
          },
          {
            zh: "去公园划船",
            py: "qù gōngyuán huá chuán",
            vi: "đến công viên chèo thuyền",
          },
          {
            zh: "和朋友一起划船",
            py: "hé péngyou yìqǐ huá chuán",
            vi: "cùng bạn chèo thuyền",
          },
        ],
      },
      {
        label: "Tách 划 và 船 khi thêm thành phần",
        items: [
          {
            zh: "划了一个小时的船",
            py: "huá le yí ge xiǎoshí de chuán",
            vi: "chèo thuyền một tiếng",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "周末我们去北海公园划船。",
        py: "Zhōumò wǒmen qù Běihǎi Gōngyuán huá chuán.",
        vi: "Cuối tuần chúng tôi đến công viên Bắc Hải chèo thuyền.",
        hl: ["划船"],
        hlVi: ["chèo thuyền"],
        added: true,
      },
      {
        zh: "我们在湖上划了一个小时的船。",
        py: "Wǒmen zài hú shang huá le yí ge xiǎoshí de chuán.",
        vi: "Chúng tôi đã chèo thuyền trên hồ một tiếng.",
        hl: ["划了一个小时的船"],
        added: true,
      },
    ],
    related: [
      {
        label: "划",
        pos: ["动"],
        zh: "划",
        py: "huá",
        hanViet: "HOẠCH",
        vi: "chèo (thuyền)",
        usage: [
          {
            label: "Tân ngữ đi kèm",
            items: [{ zh: "划船", py: "huá chuán", vi: "chèo thuyền" }],
          },
        ],
        examples: [
          {
            zh: "他划得很快。",
            py: "Tā huá de hěn kuài.",
            vi: "Anh ấy chèo rất nhanh.",
            hl: ["划"],
            added: true,
          },
        ],
      },
      {
        label: "船",
        pos: ["名"],
        zh: "船",
        py: "chuán",
        hanViet: "THUYỀN",
        vi: "thuyền, tàu (lượng từ: 条 / 只 / 艘)",
        usage: [
          {
            label: "Lượng từ",
            items: [
              { zh: "一条船", py: "yì tiáo chuán", vi: "một chiếc thuyền" },
              { zh: "一艘船", py: "yì sōu chuán", vi: "một chiếc tàu (lớn)" },
            ],
          },
        ],
        examples: [
          {
            zh: "湖上有几条小船。",
            py: "Hú shang yǒu jǐ tiáo xiǎo chuán.",
            vi: "Trên hồ có mấy chiếc thuyền nhỏ.",
            hl: ["小船"],
            added: true,
          },
        ],
      },
      {
        label: "舟",
        pos: ["名"],
        zh: "舟",
        py: "zhōu",
        hanViet: "CHÂU",
        vi: "thuyền (văn viết, từ cổ)",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [{ zh: "龙舟", py: "lóngzhōu", vi: "thuyền rồng" }],
          },
        ],
        examples: [
          {
            zh: "端午节有划龙舟比赛。",
            py: "Duānwǔ Jié yǒu huá lóngzhōu bǐsài.",
            vi: "Tết Đoan Ngọ có thi chèo thuyền rồng.",
            hl: ["龙舟"],
            added: true,
          },
        ],
      },
    ],
    notes: ["划 huá (chèo) khác 划 huà trong 计划、划分."],
  },
  {
    id: 10,
    zh: "充满",
    py: "chōngmǎn",
    pos: ["动"],
    hanViet: "SUNG MÃN",
    vi: "tràn đầy, đầy ắp",
    en: "to cram; to be full of",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "充满希望", py: "chōngmǎn xīwàng", vi: "tràn đầy hy vọng" },
          { zh: "充满信心", py: "chōngmǎn xìnxīn", vi: "tràn đầy tự tin" },
          { zh: "充满笑声", py: "chōngmǎn xiàoshēng", vi: "đầy tiếng cười" },
          { zh: "充满了游人", py: "chōngmǎn le yóurén", vi: "đầy du khách" },
        ],
      },
    ],
    examples: [
      {
        zh: "公园里充满了游人。",
        py: "Gōngyuán lǐ chōngmǎn le yóurén.",
        vi: "Trong công viên đầy du khách.",
        hl: ["充满了游人"],
        hlVi: ["đầy"],
        added: true,
      },
      {
        zh: "他对未来充满了信心。",
        py: "Tā duì wèilái chōngmǎn le xìnxīn.",
        vi: "Anh ấy tràn đầy niềm tin vào tương lai.",
        hl: ["充满了信心"],
        added: true,
      },
    ],
    notes: [
      "Tân ngữ của 充满 thường là tình cảm, bầu không khí hoặc người / vật xuất hiện dày đặc. Câu nói địa điểm thường là: Địa điểm + 充满 + (了) + N.",
    ],
  },
  {
    id: 11,
    zh: "游人",
    py: "yóurén",
    pos: ["名"],
    hanViet: "DU NHÂN",
    vi: "người đi dạo, khách tham quan",
    en: "visitor; sightseer; tourist",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "游人很多",
            py: "yóurén hěn duō",
            vi: "khách tham quan rất đông",
          },
          { zh: "很多游人", py: "hěn duō yóurén", vi: "rất nhiều du khách" },
        ],
      },
    ],
    examples: [
      {
        zh: "国庆节，全国各地很多游人都会到北京来旅游。",
        py: "Guóqìng Jié, quánguó gèdì hěn duō yóurén dōu huì dào Běijīng lái lǚyóu.",
        vi: "Ngày Quốc khánh, rất nhiều du khách từ khắp nơi trong cả nước sẽ đến Bắc Kinh du lịch.",
        hl: ["游人"],
        added: true,
      },
      {
        zh: "春天，湖边的游人特别多。",
        py: "Chūntiān, hú biān de yóurén tèbié duō.",
        vi: "Mùa xuân, bên hồ du khách đặc biệt đông.",
        hl: ["游人"],
        added: true,
      },
    ],
    compare: [
      {
        title: "游人 vs 游客 vs 旅客 vs 旅行者",
        points: [
          {
            zh: "游人",
            py: "yóurén",
            desc: "Người đi dạo, tham quan ngay tại nơi du ngoạn (công viên, danh lam); văn viết.",
          },
          {
            zh: "游客",
            py: "yóukè",
            desc: "Du khách, người đi du lịch; dùng phổ biến nhất.",
            eg: [
              { zh: "外国游客", py: "wàiguó yóukè", vi: "du khách nước ngoài" },
            ],
          },
          {
            zh: "旅客",
            py: "lǚkè",
            desc: "Hành khách, lữ khách (đi đường dài; tàu xe, khách sạn).",
            eg: [
              { zh: "火车旅客", py: "huǒchē lǚkè", vi: "hành khách tàu hỏa" },
            ],
          },
          {
            zh: "旅行者",
            py: "lǚxíngzhě",
            desc: "Người đi du lịch / lữ hành; nhấn mạnh con người thực hiện chuyến đi.",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    zh: "显得",
    py: "xiǎnde",
    pos: ["动"],
    hanViet: "HIỂN ĐẮC",
    vi: "trông có vẻ, tỏ ra",
    en: "to look; to seem; to appear",
    usage: [
      {
        label: "Đi với tính từ / cụm tính từ",
        items: [
          { zh: "显得很年轻", py: "xiǎnde hěn niánqīng", vi: "trông rất trẻ" },
          { zh: "显得很高兴", py: "xiǎnde hěn gāoxìng", vi: "trông rất vui" },
          { zh: "显得多么……", py: "xiǎnde duōme…", vi: "trông biết bao…" },
        ],
      },
    ],
    examples: [
      {
        zh: "这个古老的国家如今显得多么年轻。",
        py: "Zhège gǔlǎo de guójiā rújīn xiǎnde duōme niánqīng.",
        vi: "Đất nước cổ xưa này ngày nay trông trẻ trung biết bao.",
        hl: ["显得多么年轻"],
        added: true,
      },
      {
        zh: "她穿上红衣服显得很年轻。",
        py: "Tā chuānshang hóng yīfu xiǎnde hěn niánqīng.",
        vi: "Cô ấy mặc áo đỏ trông rất trẻ.",
        hl: ["显得很年轻"],
        added: true,
      },
      {
        zh: "这个房间显得很大。",
        py: "Zhège fángjiān xiǎnde hěn dà.",
        vi: "Căn phòng này trông rất rộng.",
        hl: ["显得很大"],
        added: true,
      },
    ],
    notes: [
      "显得 phải có thành phần sau (thường là tính từ). Không nói riêng 他显得 mà không có vị ngữ.",
    ],
  },
  {
    id: 13,
    zh: "轻松",
    py: "qīngsōng",
    pos: ["形"],
    hanViet: "KHINH TÙNG",
    vi: "thoải mái, nhẹ nhõm, không căng thẳng",
    en: "relaxed; not feeling nervous",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "心情轻松", py: "xīnqíng qīngsōng", vi: "tâm trạng thoải mái" },
          { zh: "轻松愉快", py: "qīngsōng yúkuài", vi: "thoải mái vui vẻ" },
          { zh: "轻松地", py: "qīngsōng de", vi: "một cách nhẹ nhàng" },
          { zh: "放轻松", py: "fàng qīngsōng", vi: "thả lỏng đi, thư giãn" },
        ],
      },
    ],
    examples: [
      {
        zh: "考完试，我觉得很轻松。",
        py: "Kǎo wán shì, wǒ juéde hěn qīngsōng.",
        vi: "Thi xong, tôi cảm thấy rất nhẹ nhõm.",
        hl: ["轻松"],
        added: true,
      },
      {
        zh: "别紧张，放轻松！",
        py: "Bié jǐnzhāng, fàng qīngsōng!",
        vi: "Đừng căng thẳng, thả lỏng đi!",
        hl: ["放轻松"],
        added: true,
      },
    ],
  },
  {
    id: 14,
    zh: "火锅(儿)",
    py: "huǒguōr",
    pos: ["名"],
    hanViet: "HỎA OA",
    vi: "lẩu",
    en: "hotpot; chafing dish",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一顿火锅", py: "yí dùn huǒguō", vi: "một bữa lẩu" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "吃火锅", py: "chī huǒguō", vi: "ăn lẩu" },
          { zh: "涮火锅", py: "shuàn huǒguō", vi: "nhúng lẩu" },
        ],
      },
    ],
    examples: [
      {
        zh: "冬天大家喜欢围着桌子吃火锅。",
        py: "Dōngtiān dàjiā xǐhuan wéizhe zhuōzi chī huǒguō.",
        vi: "Mùa đông mọi người thích ngồi quanh bàn ăn lẩu.",
        hl: ["吃火锅"],
        added: true,
      },
      {
        zh: "今天晚上我们去吃一顿火锅吧。",
        py: "Jīntiān wǎnshang wǒmen qù chī yí dùn huǒguō ba.",
        vi: "Tối nay chúng ta đi ăn một bữa lẩu nhé.",
        hl: ["一顿火锅"],
        added: true,
      },
    ],
    compare: [
      {
        title: "火锅 vs 麻辣烫",
        points: [
          {
            zh: "火锅",
            py: "huǒguō",
            desc: "Nhiều người ngồi quanh nồi nước dùng, tự nhúng nguyên liệu vào ăn.",
          },
          {
            zh: "麻辣烫",
            py: "málàtàng",
            desc: "Chọn sẵn xiên / nguyên liệu rồi nấu trong nước dùng cay tê, ăn nhanh, hay ăn một mình.",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    zh: "围",
    py: "wéi",
    pos: ["动"],
    hanViet: "VI",
    vi: "vây quanh, quây quanh",
    en: "to enclose; to surround",
    usage: [
      {
        label: "Tân ngữ / bổ ngữ đi kèm",
        items: [
          { zh: "围着桌子", py: "wéizhe zhuōzi", vi: "quây quanh bàn" },
          {
            zh: "围着火锅坐",
            py: "wéizhe huǒguō zuò",
            vi: "ngồi quanh nồi lẩu",
          },
          { zh: "围成一圈", py: "wéi chéng yì quān", vi: "vây thành một vòng" },
        ],
      },
    ],
    examples: [
      {
        zh: "孩子们围着老师听故事。",
        py: "Háizimen wéizhe lǎoshī tīng gùshi.",
        vi: "Bọn trẻ quây quanh thầy cô nghe kể chuyện.",
        hl: ["围着"],
        added: true,
      },
      {
        zh: "大家围成一个圈跳舞。",
        py: "Dàjiā wéi chéng yí ge quān tiàowǔ.",
        vi: "Mọi người vây thành một vòng tròn nhảy múa.",
        hl: ["围成一个圈"],
        added: true,
      },
    ],
    related: [
      {
        label: "围巾",
        pos: ["名"],
        zh: "围巾",
        py: "wéijīn",
        hanViet: "VI CÂN",
        vi: "khăn quàng cổ (lượng từ: 条)",
        usage: [
          {
            label: "Lượng từ / động từ đi kèm",
            items: [
              {
                zh: "一条围巾",
                py: "yì tiáo wéijīn",
                vi: "một chiếc khăn quàng",
              },
              { zh: "围围巾", py: "wéi wéijīn", vi: "quàng khăn" },
            ],
          },
        ],
        examples: [
          {
            zh: "冬天出门要围一条围巾。",
            py: "Dōngtiān chūmén yào wéi yì tiáo wéijīn.",
            vi: "Mùa đông ra ngoài phải quàng khăn.",
            hl: ["围巾"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 16,
    zh: "向往",
    py: "xiàngwǎng",
    pos: ["动"],
    hanViet: "HƯỚNG VÃNG",
    vi: "hướng tới, khao khát, mong ước",
    en: "to yearn for; to look forward to",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "向往自由", py: "xiàngwǎng zìyóu", vi: "khao khát tự do" },
          {
            zh: "向往美好的生活",
            py: "xiàngwǎng měihǎo de shēnghuó",
            vi: "hướng tới cuộc sống tốt đẹp",
          },
          {
            zh: "向往大城市",
            py: "xiàngwǎng dà chéngshì",
            vi: "mơ ước thành phố lớn",
          },
        ],
      },
      {
        label: "Trạng ngữ đi kèm",
        items: [
          {
            zh: "对……十分向往",
            py: "duì… shífēn xiàngwǎng",
            vi: "rất khao khát …",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "我从小就向往北京的冬天。",
        py: "Wǒ cóngxiǎo jiù xiàngwǎng Běijīng de dōngtiān.",
        vi: "Từ nhỏ tôi đã mơ ước mùa đông Bắc Kinh.",
        hl: ["向往"],
        hlVi: ["mơ ước"],
        added: true,
      },
      {
        zh: "他对国外的生活十分向往。",
        py: "Tā duì guówài de shēnghuó shífēn xiàngwǎng.",
        vi: "Anh ấy rất khao khát cuộc sống ở nước ngoài.",
        hl: ["十分向往"],
        added: true,
      },
    ],
  },
  {
    id: 17,
    zh: "堆雪人(儿)",
    py: "duī xuěrénr",
    pos: ["动宾"],
    hanViet: "ĐỐI TUYẾT NHÂN",
    vi: "đắp người tuyết (cụm động tân)",
    en: "to build a snowman",
    usage: [
      {
        label: "Trạng ngữ / lượng từ đi kèm",
        items: [
          {
            zh: "在院子里堆雪人",
            py: "zài yuànzi lǐ duī xuěrén",
            vi: "đắp người tuyết trong sân",
          },
          {
            zh: "和孩子一起堆雪人",
            py: "hé háizi yìqǐ duī xuěrén",
            vi: "cùng con đắp người tuyết",
          },
          {
            zh: "堆了一个雪人",
            py: "duī le yí ge xuěrén",
            vi: "đã đắp một người tuyết",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "下雪了，孩子们在院子里堆雪人。",
        py: "Xià xuě le, háizimen zài yuànzi lǐ duī xuěrén.",
        vi: "Tuyết rơi rồi, bọn trẻ đang đắp người tuyết trong sân.",
        hl: ["堆雪人"],
        hlVi: ["đắp người tuyết"],
        added: true,
      },
      {
        zh: "我们堆了一个很大的雪人。",
        py: "Wǒmen duī le yí ge hěn dà de xuěrén.",
        vi: "Chúng tôi đã đắp một người tuyết rất to.",
        hl: ["堆了一个很大的雪人"],
        added: true,
      },
    ],
    related: [
      {
        label: "堆",
        pos: ["动", "量"],
        zh: "堆",
        py: "duī",
        hanViet: "ĐỐI",
        vi: "chất đống, xếp chồng; (lượng từ) đống",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "一堆书", py: "yì duī shū", vi: "một đống sách" },
              { zh: "一堆事情", py: "yì duī shìqing", vi: "một đống việc" },
              { zh: "堆成山", py: "duī chéng shān", vi: "chất thành núi" },
            ],
          },
        ],
        examples: [
          {
            zh: "桌子上堆着一堆书。",
            py: "Zhuōzi shang duīzhe yì duī shū.",
            vi: "Trên bàn chất một đống sách.",
            hl: ["堆"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 18,
    zh: "打雪仗",
    py: "dǎ xuězhàng",
    pos: ["动宾"],
    hanViet: "ĐẢ TUYẾT TRƯỢNG",
    vi: "ném tuyết, chơi trận tuyết (cụm động tân)",
    en: "to have a snowball fight; to throw snowballs at each other",
    usage: [
      {
        label: "Trạng ngữ đi kèm",
        items: [
          {
            zh: "在雪地里打雪仗",
            py: "zài xuědì lǐ dǎ xuězhàng",
            vi: "chơi ném tuyết trên nền tuyết",
          },
          {
            zh: "跟同学打雪仗",
            py: "gēn tóngxué dǎ xuězhàng",
            vi: "chơi ném tuyết với bạn học",
          },
          {
            zh: "打了一场雪仗",
            py: "dǎ le yì chǎng xuězhàng",
            vi: "đã chơi một trận ném tuyết",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "下雪的时候，我们常常在公园里打雪仗。",
        py: "Xià xuě de shíhou, wǒmen chángcháng zài gōngyuán lǐ dǎ xuězhàng.",
        vi: "Lúc tuyết rơi, chúng tôi thường chơi ném tuyết trong công viên.",
        hl: ["打雪仗"],
        hlVi: ["chơi ném tuyết"],
        added: true,
      },
      {
        zh: "他们跟朋友打了一场雪仗。",
        py: "Tāmen gēn péngyou dǎ le yì chǎng xuězhàng.",
        vi: "Họ đã chơi một trận ném tuyết với bạn bè.",
        hl: ["打了一场雪仗"],
        added: true,
      },
    ],
    related: [
      {
        label: "打",
        pos: ["动"],
        zh: "打",
        py: "dǎ",
        hanViet: "ĐẢ",
        vi: "đánh; chơi (một số môn); gọi (điện thoại)",
        usage: [
          {
            label: "Tân ngữ đi kèm",
            items: [
              { zh: "打球", py: "dǎ qiú", vi: "chơi bóng" },
              { zh: "打电话", py: "dǎ diànhuà", vi: "gọi điện thoại" },
              { zh: "打人", py: "dǎ rén", vi: "đánh người" },
            ],
          },
        ],
        examples: [
          {
            zh: "他每天都打球。",
            py: "Tā měitiān dōu dǎ qiú.",
            vi: "Ngày nào anh ấy cũng chơi bóng.",
            hl: ["打球"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 19,
    zh: "冻",
    py: "dòng",
    pos: ["动"],
    hanViet: "ĐÓNG",
    vi: "lạnh cóng, bị cóng; đông lại",
    en: "to feel very cold; to be frostbitten; to freeze",
    usage: [
      {
        label: "Bổ ngữ đi kèm",
        items: [
          { zh: "冻得发抖", py: "dòng de fādǒu", vi: "lạnh run lên" },
          { zh: "冻坏了", py: "dòng huài le", vi: "bị cóng hỏng" },
          { zh: "冻红了", py: "dòng hóng le", vi: "cóng đỏ lên" },
        ],
      },
    ],
    examples: [
      {
        zh: "外面很冷，别把手冻坏了。",
        py: "Wàimiàn hěn lěng, bié bǎ shǒu dòng huài le.",
        vi: "Bên ngoài rất lạnh, đừng để tay bị cóng hỏng.",
        hl: ["冻坏"],
        hlVi: ["cóng hỏng"],
        added: true,
      },
      {
        zh: "我的手都冻红了。",
        py: "Wǒ de shǒu dōu dòng hóng le.",
        vi: "Tay tôi cóng đến đỏ lên rồi.",
        hl: ["冻红了"],
        added: true,
      },
    ],
  },
  {
    id: 20,
    zh: "瑞雪兆丰年",
    py: "ruìxuě zhào fēngnián",
    pos: ["谚语"],
    hanViet: "THỤY TUYẾT TRIỆU PHONG NIÊN",
    vi: "Tuyết lành báo hiệu năm được mùa",
    en: "a timely snow promises a good harvest; a snowy year, a rich year",
    examples: [
      {
        zh: "今年冬天下了好几场大雪，真是瑞雪兆丰年。",
        py: "Jīnnián dōngtiān xià le hǎo jǐ cháng dàxuě, zhēn shì ruìxuě zhào fēngnián.",
        vi: "Mùa đông năm nay tuyết rơi mấy trận lớn, đúng là tuyết lành báo hiệu năm được mùa.",
        hl: ["瑞雪兆丰年"],
        hlVi: ["tuyết lành báo hiệu năm được mùa"],
        added: true,
      },
    ],
    related: [
      {
        label: "瑞雪",
        pos: ["名"],
        zh: "瑞雪",
        py: "ruìxuě",
        hanViet: "THỤY TUYẾT",
        vi: "tuyết lành (tuyết rơi đúng lúc, báo điềm tốt)",
        examples: [
          {
            zh: "一场瑞雪过后，田野一片白。",
            py: "Yì cháng ruìxuě guòhòu, tiányě yí piàn bái.",
            vi: "Sau một trận tuyết lành, đồng ruộng trắng xóa.",
            hl: ["瑞雪"],
            added: true,
          },
        ],
      },
      {
        label: "兆",
        pos: ["动"],
        zh: "兆",
        py: "zhào",
        hanViet: "TRIỆU",
        vi: "báo hiệu, điềm báo",
        examples: [
          {
            zh: "这是个好兆头。",
            py: "Zhè shì ge hǎo zhàotou.",
            vi: "Đây là một điềm tốt.",
            hl: ["兆头"],
            added: true,
          },
        ],
      },
      {
        label: "丰年",
        pos: ["名"],
        zh: "丰年",
        py: "fēngnián",
        hanViet: "PHONG NIÊN",
        vi: "năm được mùa",
        examples: [
          {
            zh: "人们都盼望丰年。",
            py: "Rénmen dōu pànwàng fēngnián.",
            vi: "Mọi người đều mong một năm được mùa.",
            hl: ["丰年"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 21,
    zh: "场",
    py: "cháng",
    pos: ["量"],
    hanViet: "TRƯỜNG",
    vi: "trận, cơn, đợt (dùng cho sự việc diễn ra)",
    en: "a measure word for events, etc.",
    usage: [
      {
        label: "场 cháng + danh từ (hiện tượng tự nhiên, sự việc)",
        items: [
          { zh: "一场大雪", py: "yì cháng dàxuě", vi: "một trận tuyết lớn" },
          { zh: "一场大雨", py: "yì cháng dàyǔ", vi: "một trận mưa lớn" },
          { zh: "一场病", py: "yì cháng bìng", vi: "một trận ốm" },
        ],
      },
      {
        label: "场 chǎng + danh từ (trận đấu, buổi diễn)",
        items: [
          { zh: "一场比赛", py: "yì chǎng bǐsài", vi: "một trận đấu" },
          {
            zh: "一场电影",
            py: "yì chǎng diànyǐng",
            vi: "một suất chiếu phim",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "昨天下了一场大雪。",
        py: "Zuótiān xià le yì cháng dàxuě.",
        vi: "Hôm qua tuyết rơi một trận lớn.",
        hl: ["一场大雪"],
        hlVi: ["một trận tuyết lớn"],
        added: true,
      },
      {
        zh: "我们看了一场电影。",
        py: "Wǒmen kàn le yì chǎng diànyǐng.",
        vi: "Chúng tôi đã xem một suất phim.",
        hl: ["一场电影"],
        added: true,
      },
    ],
    notes: [
      "Cùng một chữ 场 nhưng có hai âm: cháng (mưa, tuyết, bệnh, sự việc kéo dài) và chǎng (trận đấu, buổi diễn, suất chiếu).",
    ],
  },
  {
    id: 22,
    zh: "收成",
    py: "shōucheng",
    pos: ["名"],
    hanViet: "THU THÀNH",
    vi: "thu hoạch, vụ mùa (sản lượng nông sản)",
    en: "harvest; crop",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "收成好 / 不好",
            py: "shōucheng hǎo / bù hǎo",
            vi: "vụ mùa tốt / không tốt",
          },
          { zh: "好收成", py: "hǎo shōucheng", vi: "vụ mùa bội thu" },
          {
            zh: "今年的收成",
            py: "jīnnián de shōucheng",
            vi: "vụ mùa năm nay",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "今年雨水多，收成很好。",
        py: "Jīnnián yǔshuǐ duō, shōucheng hěn hǎo.",
        vi: "Năm nay mưa nhiều, vụ mùa rất tốt.",
        hl: ["收成"],
        hlVi: ["vụ mùa"],
        added: true,
      },
      {
        zh: "农民们盼望有个好收成。",
        py: "Nóngmínmen pànwàng yǒu ge hǎo shōucheng.",
        vi: "Nông dân mong có một vụ mùa bội thu.",
        hl: ["好收成"],
        added: true,
      },
    ],
    compare: [
      {
        title: "收成 vs 收获",
        points: [
          {
            zh: "收成",
            py: "shōucheng",
            desc: "Danh từ: sản lượng, vụ mùa (nông sản).",
          },
          {
            zh: "收获",
            py: "shōuhuò",
            desc: "Thu hoạch (động từ), hoặc “thành quả, điều thu được” (danh từ, cả nghĩa bóng).",
            eg: [
              {
                zh: "学习收获很大",
                py: "xuéxí shōuhuò hěn dà",
                vi: "thu hoạch từ việc học rất lớn",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 23,
    zh: "数",
    py: "shǔ",
    pos: ["动"],
    hanViet: "SỐ",
    vi: "đếm; (so sánh) kể ra thì … là nhất",
    en: "to be reckoned as exceptionally (good or bad, etc.) by comparison",
    usage: [
      {
        label: "Cấu trúc đi kèm",
        items: [
          {
            zh: "数 + người / vật + 最……",
            py: "shǔ… zuì…",
            vi: "kể ra thì … là … nhất",
          },
          { zh: "要数……", py: "yào shǔ…", vi: "nếu kể thì phải kể đến…" },
          { zh: "数一数二", py: "shǔ yī shǔ èr", vi: "hạng nhất nhì" },
        ],
      },
    ],
    examples: [
      {
        zh: "我们班数他个子最高。",
        py: "Wǒmen bān shǔ tā gèzi zuì gāo.",
        vi: "Lớp chúng tôi kể ra thì cậu ấy cao nhất.",
        hl: ["数他"],
        hlVi: ["kể ra thì"],
        added: true,
      },
      {
        zh: "北京的秋天最美，要数香山的红叶了。",
        py: "Běijīng de qiūtiān zuì měi, yào shǔ Xiāngshān de hóngyè le.",
        vi: "Mùa thu Bắc Kinh đẹp nhất, phải kể đến lá đỏ ở Hương Sơn.",
        hl: ["要数"],
        added: true,
      },
    ],
    notes: [
      "Chữ 数 có nhiều âm: shǔ (đếm, kể ra: 数一数), shù (con số: 数字、数学), shuò (nhiều lần, ít dùng).",
    ],
  },
  {
    id: 24,
    zh: "大街",
    py: "dàjiē",
    pos: ["名"],
    hanViet: "ĐẠI NHAI",
    vi: "phố lớn, đường phố",
    en: "main street",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一条大街", py: "yì tiáo dàjiē", vi: "một con phố lớn" }],
      },
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "在大街上", py: "zài dàjiē shang", vi: "trên đường phố" },
          { zh: "大街小巷", py: "dàjiē xiǎoxiàng", vi: "đường lớn ngõ nhỏ" },
        ],
      },
    ],
    examples: [
      {
        zh: "国庆节，大街上挂满了鲜花。",
        py: "Guóqìng Jié, dàjiē shang guàmǎn le xiānhuā.",
        vi: "Ngày Quốc khánh, trên đường phố treo đầy hoa tươi.",
        hl: ["大街上"],
        added: true,
      },
      {
        zh: "这条大街很热闹。",
        py: "Zhè tiáo dàjiē hěn rènao.",
        vi: "Con phố này rất náo nhiệt.",
        hl: ["这条大街"],
        added: true,
      },
    ],
    compare: [
      {
        title: "大街 vs 大路 vs 大道 vs 公路 vs 大陆",
        points: [
          {
            zh: "大街",
            py: "dàjiē",
            desc: "Phố lớn trong thành phố, hai bên có nhà cửa, cửa hàng.",
          },
          {
            zh: "大路",
            py: "dàlù",
            desc: "Đường lớn, rộng (ngoài phố, ở làng quê), cũng dùng nghĩa bóng “con đường lớn”.",
          },
          {
            zh: "大道",
            py: "dàdào",
            desc: "Đại lộ, đường rộng, trang trọng; hay làm tên đường.",
            eg: [
              { zh: "长安大道", py: "Cháng’ān Dàdào", vi: "đại lộ Trường An" },
            ],
          },
          {
            zh: "公路",
            py: "gōnglù",
            desc: "Đường bộ nối các thành phố (quốc lộ, đường cao tốc).",
            eg: [{ zh: "高速公路", py: "gāosù gōnglù", vi: "đường cao tốc" }],
          },
          {
            zh: "大陆",
            py: "dàlù",
            desc: "Lục địa, đại lục (không phải “đường”): 中国大陆.",
          },
        ],
      },
    ],
  },
  {
    id: 25,
    zh: "鲜花",
    py: "xiānhuā",
    pos: ["名"],
    hanViet: "TIÊN HOA",
    vi: "hoa tươi",
    en: "(fresh) flower",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一朵鲜花", py: "yì duǒ xiānhuā", vi: "một bông hoa tươi" },
          { zh: "一束鲜花", py: "yí shù xiānhuā", vi: "một bó hoa tươi" },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "送鲜花", py: "sòng xiānhuā", vi: "tặng hoa tươi" },
          { zh: "插鲜花", py: "chā xiānhuā", vi: "cắm hoa tươi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他送给她一束鲜花。",
        py: "Tā sònggěi tā yí shù xiānhuā.",
        vi: "Anh ấy tặng cô ấy một bó hoa tươi.",
        hl: ["一束鲜花"],
        hlVi: ["một bó hoa tươi"],
        added: true,
      },
      {
        zh: "春天，公园里开满了鲜花。",
        py: "Chūntiān, gōngyuán lǐ kāimǎn le xiānhuā.",
        vi: "Mùa xuân, trong công viên hoa tươi nở đầy.",
        hl: ["鲜花"],
        added: true,
      },
    ],
    notes: ["鲜花 là hoa tươi (đối lập 假花 hoa giả). 花 nói chung là hoa."],
  },
  {
    id: 26,
    zh: "瓜",
    py: "guā",
    pos: ["名"],
    hanViet: "QUA",
    vi: "dưa, bầu bí (họ dưa)",
    en: "melon",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一个瓜", py: "yí ge guā", vi: "một quả dưa" },
          { zh: "一个西瓜", py: "yí ge xīguā", vi: "một quả dưa hấu" },
          { zh: "一根黄瓜", py: "yì gēn huánggua", vi: "một quả dưa chuột" },
        ],
      },
    ],
    examples: [
      {
        zh: "夏天我喜欢吃西瓜。",
        py: "Xiàtiān wǒ xǐhuan chī xīguā.",
        vi: "Mùa hè tôi thích ăn dưa hấu.",
        hl: ["西瓜"],
        added: true,
      },
    ],
    related: [
      {
        label: "西瓜",
        pos: ["名"],
        zh: "西瓜",
        py: "xīguā",
        hanViet: "TÂY QUA",
        vi: "dưa hấu",
        examples: [
          {
            zh: "这个西瓜又大又甜。",
            py: "Zhège xīguā yòu dà yòu tián.",
            vi: "Quả dưa hấu này vừa to vừa ngọt.",
            hl: ["西瓜"],
            added: true,
          },
        ],
      },
      {
        label: "黄瓜",
        pos: ["名"],
        zh: "黄瓜",
        py: "huánggua",
        hanViet: "HOÀNG QUA",
        vi: "dưa chuột",
        examples: [
          {
            zh: "我想买两根黄瓜。",
            py: "Wǒ xiǎng mǎi liǎng gēn huánggua.",
            vi: "Tôi muốn mua hai quả dưa chuột.",
            hl: ["黄瓜"],
            added: true,
          },
        ],
      },
      {
        label: "南瓜",
        pos: ["名"],
        zh: "南瓜",
        py: "nánguā",
        hanViet: "NAM QUA",
        vi: "bí đỏ",
        examples: [
          {
            zh: "南瓜汤很好喝。",
            py: "Nánguā tāng hěn hǎohē.",
            vi: "Canh bí đỏ rất ngon.",
            hl: ["南瓜"],
            added: true,
          },
        ],
      },
      {
        label: "瓜葛",
        pos: ["名"],
        zh: "瓜葛",
        py: "guāgé",
        hanViet: "QUA CÁT",
        vi: "dây mơ rễ má, liên quan (nghĩa bóng)",
        examples: [
          {
            zh: "我跟这件事没有任何瓜葛。",
            py: "Wǒ gēn zhè jiàn shì méiyǒu rènhé guāgé.",
            vi: "Tôi không có bất cứ dây mơ rễ má nào với chuyện này.",
            hl: ["瓜葛"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 27,
    zh: "果",
    py: "guǒ",
    pos: ["名"],
    hanViet: "QUẢ",
    vi: "quả, trái cây",
    en: "fruit",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一个果子", py: "yí ge guǒzi", vi: "một quả (trái nhỏ)" },
          { zh: "一种水果", py: "yì zhǒng shuǐguǒ", vi: "một loại trái cây" },
        ],
      },
    ],
    examples: [
      {
        zh: "树上结满了果子。",
        py: "Shù shang jiēmǎn le guǒzi.",
        vi: "Trên cây kết đầy quả.",
        hl: ["果子"],
        added: true,
      },
    ],
    related: [
      {
        label: "果子",
        pos: ["名"],
        zh: "果子",
        py: "guǒzi",
        hanViet: "QUẢ TỬ",
        vi: "quả, trái (khẩu ngữ, thường là loại nhỏ)",
        examples: [
          {
            zh: "这个果子还没熟。",
            py: "Zhège guǒzi hái méi shú.",
            vi: "Quả này vẫn chưa chín.",
            hl: ["果子"],
            added: true,
          },
        ],
      },
      {
        label: "水果",
        pos: ["名"],
        zh: "水果",
        py: "shuǐguǒ",
        hanViet: "THỦY QUẢ",
        vi: "trái cây (nói chung)",
        examples: [
          {
            zh: "我每天都吃水果。",
            py: "Wǒ měitiān dōu chī shuǐguǒ.",
            vi: "Ngày nào tôi cũng ăn trái cây.",
            hl: ["水果"],
            added: true,
          },
        ],
      },
      {
        label: "芒果",
        pos: ["名"],
        zh: "芒果",
        py: "mángguǒ",
        hanViet: "MANG QUẢ",
        vi: "xoài",
        examples: [
          {
            zh: "这种芒果特别甜。",
            py: "Zhè zhǒng mángguǒ tèbié tián.",
            vi: "Loại xoài này đặc biệt ngọt.",
            hl: ["芒果"],
            added: true,
          },
        ],
      },
      {
        label: "火龙果",
        pos: ["名"],
        zh: "火龙果",
        py: "huǒlóngguǒ",
        hanViet: "HỎA LONG QUẢ",
        vi: "thanh long",
        examples: [
          {
            zh: "我喜欢吃火龙果。",
            py: "Wǒ xǐhuan chī huǒlóngguǒ.",
            vi: "Tôi thích ăn thanh long.",
            hl: ["火龙果"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 28,
    zh: "每",
    py: "měi",
    pos: ["副"],
    hanViet: "MỖI",
    vi: "mỗi, mỗi lần, hễ",
    en: "every; each",
    usage: [
      {
        label: "Đi với lượng từ / thời gian, thường kèm 都",
        items: [
          { zh: "每年", py: "měi nián", vi: "mỗi năm" },
          { zh: "每个人都……", py: "měi ge rén dōu…", vi: "mỗi người đều…" },
          { zh: "每到……就……", py: "měi dào… jiù…", vi: "hễ đến … thì …" },
        ],
      },
    ],
    examples: [
      {
        zh: "每年国庆节，全国各地的游人都会来北京。",
        py: "Měi nián Guóqìng Jié, quánguó gèdì de yóurén dōu huì lái Běijīng.",
        vi: "Năm nào đến Quốc khánh, du khách từ khắp nơi trong nước đều đến Bắc Kinh.",
        hl: ["每年"],
        added: true,
      },
      {
        zh: "每到秋天，香山的树叶就变红了。",
        py: "Měi dào qiūtiān, Xiāngshān de shùyè jiù biàn hóng le.",
        vi: "Hễ đến mùa thu, lá cây ở Hương Sơn lại chuyển sang đỏ.",
        hl: ["每到"],
        hlVi: ["Hễ đến"],
        added: true,
      },
    ],
    compare: [
      {
        title: "每 vs 各",
        points: [
          {
            zh: "每",
            py: "měi",
            desc: "Mỗi một (cái nào cũng như nhau, hay đi cùng 都).",
            eg: [{ zh: "每个国家", py: "měi ge guójiā", vi: "mỗi nước" }],
          },
          {
            zh: "各",
            py: "gè",
            desc: "Các, mỗi nơi / mỗi bên (nhấn vào sự riêng biệt của từng đơn vị).",
            eg: [{ zh: "各国", py: "gèguó", vi: "các nước" }],
          },
        ],
      },
    ],
  },
  {
    id: 29,
    zh: "郊外",
    py: "jiāowài",
    pos: ["名"],
    hanViet: "GIAO NGOẠI",
    vi: "ngoại ô, vùng ven ngoài thành phố",
    en: "outskirts; countryside around a city",
    usage: [
      {
        label: "Động từ / giới từ đi kèm",
        items: [
          { zh: "去郊外玩", py: "qù jiāowài wán", vi: "ra ngoại ô chơi" },
          { zh: "在郊外", py: "zài jiāowài", vi: "ở ngoại ô" },
        ],
      },
    ],
    examples: [
      {
        zh: "周末我们去郊外爬山。",
        py: "Zhōumò wǒmen qù jiāowài páshān.",
        vi: "Cuối tuần chúng tôi ra ngoại ô leo núi.",
        hl: ["郊外"],
        added: true,
      },
      {
        zh: "郊外的空气特别好。",
        py: "Jiāowài de kōngqì tèbié hǎo.",
        vi: "Không khí ở ngoại ô đặc biệt tốt.",
        hl: ["郊外"],
        added: true,
      },
    ],
    compare: [
      {
        title: "郊外 vs 郊区 vs 市中心",
        points: [
          {
            zh: "郊外",
            py: "jiāowài",
            desc: "Vùng bên ngoài thành phố, thiên về nhấn vị trí, thiên nhiên (đi dã ngoại, chơi).",
          },
          {
            zh: "郊区",
            py: "jiāoqū",
            desc: "Khu ngoại thành thuộc thành phố, hay nói về nơi ở, khu vực hành chính.",
            eg: [
              {
                zh: "住在郊区",
                py: "zhù zài jiāoqū",
                vi: "sống ở ngoại thành",
              },
            ],
          },
          {
            zh: "市中心",
            py: "shì zhōngxīn",
            desc: "Trung tâm thành phố, trái nghĩa với 郊区.",
          },
        ],
      },
    ],
  },
  {
    id: 30,
    zh: "美丽",
    py: "měilì",
    pos: ["形"],
    hanViet: "MỸ LỆ",
    vi: "đẹp, xinh đẹp (trang trọng)",
    en: "beautiful",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          {
            zh: "美丽的城市",
            py: "měilì de chéngshì",
            vi: "thành phố xinh đẹp",
          },
          {
            zh: "美丽的景色 = 美景",
            py: "měilì de jǐngsè = měijǐng",
            vi: "cảnh đẹp",
          },
          { zh: "美丽的姑娘", py: "měilì de gūniang", vi: "cô gái xinh đẹp" },
        ],
      },
    ],
    examples: [
      {
        zh: "也许你会爱上这个美丽的城市。",
        py: "Yěxǔ nǐ huì àishang zhège měilì de chéngshì.",
        vi: "Có lẽ bạn sẽ yêu thành phố xinh đẹp này.",
        hl: ["美丽的城市"],
        hlVi: ["xinh đẹp"],
        added: true,
      },
      {
        zh: "香山的秋天有美丽的景色。",
        py: "Xiāngshān de qiūtiān yǒu měilì de jǐngsè.",
        vi: "Mùa thu ở Hương Sơn có cảnh sắc tươi đẹp.",
        hl: ["美丽的景色"],
        added: true,
      },
    ],
    related: [
      {
        label: "美",
        pos: ["形"],
        zh: "美",
        py: "měi",
        hanViet: "MỸ",
        vi: "đẹp (đơn âm tiết)",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "很美", py: "hěn měi", vi: "rất đẹp" },
              { zh: "美景", py: "měijǐng", vi: "cảnh đẹp" },
              { zh: "美食", py: "měishí", vi: "món ngon" },
            ],
          },
        ],
        examples: [
          {
            zh: "这里的景色真美。",
            py: "Zhèlǐ de jǐngsè zhēn měi.",
            vi: "Cảnh sắc ở đây thật đẹp.",
            hl: ["美"],
            added: true,
          },
        ],
      },
    ],
    compare: [
      {
        title: "美丽 vs 美 vs 漂亮 vs 好看",
        points: [
          {
            zh: "美丽",
            py: "měilì",
            desc: "Đẹp, trang trọng, hay dùng cho cảnh vật, thành phố, đất nước, cô gái.",
          },
          {
            zh: "美",
            py: "měi",
            desc: "Đẹp (đơn âm), nằm trong từ ghép (美景、美食) hoặc làm vị ngữ (很美).",
          },
          {
            zh: "漂亮",
            py: "piàoliang",
            desc: "Xinh, đẹp bề ngoài (người, đồ vật); còn nghĩa “làm tốt, đẹp mắt” (干得漂亮); khẩu ngữ.",
          },
          {
            zh: "好看",
            py: "hǎokàn",
            desc: "Dễ nhìn, đẹp mắt; dùng cả cho phim, sách (好看的电影).",
            eg: [
              { zh: "好看的电影", py: "hǎokàn de diànyǐng", vi: "bộ phim hay" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 31,
    zh: "景色",
    py: "jǐngsè",
    pos: ["名"],
    hanViet: "CẢNH SẮC",
    vi: "cảnh sắc, phong cảnh trước mắt",
    en: "scenery; view; scene",
    usage: [
      {
        label: "Tính từ / động từ đi kèm",
        items: [
          { zh: "景色优美", py: "jǐngsè yōuměi", vi: "cảnh sắc tươi đẹp" },
          { zh: "景色迷人", py: "jǐngsè mírén", vi: "cảnh sắc mê hồn" },
          { zh: "欣赏景色", py: "xīnshǎng jǐngsè", vi: "thưởng thức cảnh sắc" },
        ],
      },
    ],
    examples: [
      {
        zh: "香山秋天的景色非常美。",
        py: "Xiāngshān qiūtiān de jǐngsè fēicháng měi.",
        vi: "Cảnh sắc mùa thu ở Hương Sơn vô cùng đẹp.",
        hl: ["景色"],
        added: true,
      },
      {
        zh: "我们站在湖边欣赏美丽的景色。",
        py: "Wǒmen zhàn zài hú biān xīnshǎng měilì de jǐngsè.",
        vi: "Chúng tôi đứng bên hồ thưởng thức cảnh sắc đẹp.",
        hl: ["欣赏", "景色"],
        added: true,
      },
    ],
    compare: [
      {
        title: "景色 vs 景 vs 风景 vs 风光",
        points: [
          {
            zh: "景色",
            py: "jǐngsè",
            desc: "Cảnh sắc: vẻ đẹp phong cảnh nhìn thấy, theo mùa, theo nơi.",
          },
          {
            zh: "景",
            py: "jǐng",
            desc: "Cảnh (đơn âm), nằm trong từ ghép: 景点 (điểm tham quan)、美景 (cảnh đẹp).",
          },
          {
            zh: "风景",
            py: "fēngjǐng",
            desc: "Phong cảnh (thiên nhiên, danh thắng); hay nói 风景区, 看风景.",
            eg: [{ zh: "风景区", py: "fēngjǐngqū", vi: "khu thắng cảnh" }],
          },
          {
            zh: "风光",
            py: "fēngguāng",
            desc: "Phong quang: cảnh vật đặc trưng một vùng, văn chương (北国风光); còn nghĩa “vẻ vang”.",
          },
        ],
      },
    ],
  },
  {
    id: 32,
    zh: "如今",
    py: "rújīn",
    pos: ["名"],
    hanViet: "NHƯ KIM",
    vi: "ngày nay, hiện nay (đối lập với quá khứ)",
    en: "now; today; at present",
    examples: [
      {
        zh: "这个古老的国家如今显得多么年轻。",
        py: "Zhège gǔlǎo de guójiā rújīn xiǎnde duōme niánqīng.",
        vi: "Đất nước cổ xưa này ngày nay trông trẻ trung biết bao.",
        hl: ["如今"],
        hlVi: ["ngày nay"],
        added: true,
      },
      {
        zh: "过去这里是农村，如今成了大城市。",
        py: "Guòqù zhèlǐ shì nóngcūn, rújīn chéng le dà chéngshì.",
        vi: "Trước đây nơi này là nông thôn, nay đã thành thành phố lớn.",
        hl: ["过去", "如今"],
        added: true,
      },
    ],
    compare: [
      {
        title: "如今 vs 到现在",
        points: [
          {
            zh: "如今",
            py: "rújīn",
            desc: "“Ngày nay”, nhấn sự thay đổi so với trước kia; văn viết.",
          },
          {
            zh: "到现在",
            py: "dào xiànzài",
            desc: "“Cho đến bây giờ”, nhấn sự việc kéo dài đến hiện tại.",
          },
        ],
        examples: [
          {
            zh: "他到现在还不知道这件事。",
            py: "Tā dào xiànzài hái bù zhīdào zhè jiàn shì.",
            vi: "Đến giờ anh ấy vẫn chưa biết chuyện này.",
            hl: ["到现在"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 33,
    zh: "多么",
    py: "duōme",
    pos: ["副"],
    hanViet: "ĐA MA",
    vi: "biết bao, biết nhường nào",
    en: "what; how; to a great extent",
    usage: [
      {
        label: "Đi với tính từ / động từ tâm lý / phó từ",
        items: [
          { zh: "多么美丽", py: "duōme měilì", vi: "đẹp biết bao" },
          {
            zh: "多么爱 / 多么想",
            py: "duōme ài / duōme xiǎng",
            vi: "yêu biết bao / nhớ biết bao",
          },
          { zh: "多么热情", py: "duōme rèqíng", vi: "nhiệt tình biết bao" },
        ],
      },
    ],
    examples: [
      {
        zh: "中国人是多么热情。",
        py: "Zhōngguórén shì duōme rèqíng.",
        vi: "Người Trung Quốc nhiệt tình biết bao.",
        hl: ["多么热情"],
        added: true,
      },
      {
        zh: "这里的景色多么美啊！",
        py: "Zhèlǐ de jǐngsè duōme měi a!",
        vi: "Cảnh sắc ở đây đẹp biết bao!",
        hl: ["多么美"],
        added: true,
      },
      {
        zh: "我多么想回家啊！",
        py: "Wǒ duōme xiǎng huíjiā a!",
        vi: "Tôi nhớ nhà biết bao!",
        hl: ["多么想"],
        added: true,
      },
    ],
    notes: [
      "多么 dùng trong câu cảm thán, thường kết thúc bằng 啊 / 呀. Nhấn mạnh mức độ cao.",
    ],
  },
  {
    id: 34,
    zh: "勤劳",
    py: "qínláo",
    pos: ["形"],
    hanViet: "CẦN LAO",
    vi: "cần cù, chăm chỉ lao động",
    en: "industrious; hard-working",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          { zh: "勤劳的人民", py: "qínláo de rénmín", vi: "nhân dân cần cù" },
          {
            zh: "勤劳善良",
            py: "qínláo shànliáng",
            vi: "cần cù và lương thiện",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "勤劳善良的中国人热爱和平。",
        py: "Qínláo shànliáng de Zhōngguórén rè’ài hépíng.",
        vi: "Người Trung Quốc cần cù, lương thiện yêu chuộng hòa bình.",
        hl: ["勤劳善良"],
        added: true,
      },
      {
        zh: "我的妈妈是一个勤劳的人。",
        py: "Wǒ de māma shì yí ge qínláo de rén.",
        vi: "Mẹ tôi là một người cần cù.",
        hl: ["勤劳"],
        added: true,
      },
    ],
    compare: [
      {
        title: "勤劳 vs 勤奋 vs 刻苦 vs 认真 vs 努力",
        points: [
          {
            zh: "勤劳",
            py: "qínláo",
            desc: "Cần cù lao động (làm việc chân tay, việc nhà, đồng áng).",
          },
          {
            zh: "勤奋",
            py: "qínfèn",
            desc: "Chăm chỉ có chí tiến thủ, hay nói về học tập, công việc.",
            eg: [
              { zh: "勤奋学习", py: "qínfèn xuéxí", vi: "chăm chỉ học tập" },
            ],
          },
          {
            zh: "刻苦",
            py: "kèkǔ",
            desc: "Chịu khó, chịu gian khổ (nhấn mạnh sự vất vả).",
            eg: [
              { zh: "刻苦训练", py: "kèkǔ xùnliàn", vi: "tập luyện chịu khổ" },
            ],
          },
          {
            zh: "认真",
            py: "rènzhēn",
            desc: "Nghiêm túc, cẩn thận (thái độ làm việc).",
            eg: [
              {
                zh: "认真听课",
                py: "rènzhēn tīngkè",
                vi: "chăm chú nghe giảng",
              },
            ],
          },
          {
            zh: "努力",
            py: "nǔlì",
            desc: "Nỗ lực, cố gắng (động từ và tính từ); phổ biến nhất.",
            eg: [{ zh: "努力工作", py: "nǔlì gōngzuò", vi: "nỗ lực làm việc" }],
          },
        ],
      },
    ],
  },
  {
    id: 35,
    zh: "善良",
    py: "shànliáng",
    pos: ["形"],
    hanViet: "THIỆN LƯƠNG",
    vi: "lương thiện, hiền lành",
    en: "good and honest; kind-hearted",
    usage: [
      {
        label: "Danh từ đi kèm",
        items: [
          { zh: "善良的人", py: "shànliáng de rén", vi: "người lương thiện" },
          { zh: "心地善良", py: "xīndì shànliáng", vi: "lòng dạ hiền lành" },
        ],
      },
    ],
    examples: [
      {
        zh: "她是一个心地善良的姑娘。",
        py: "Tā shì yí ge xīndì shànliáng de gūniang.",
        vi: "Cô ấy là một cô gái lòng dạ hiền lành.",
        hl: ["心地善良"],
        added: true,
      },
      {
        zh: "善良的人总是愿意帮助别人。",
        py: "Shànliáng de rén zǒngshì yuànyì bāngzhù biérén.",
        vi: "Người lương thiện luôn sẵn lòng giúp đỡ người khác.",
        hl: ["善良"],
        added: true,
      },
    ],
    related: [
      {
        label: "善",
        pos: ["形"],
        zh: "善",
        py: "shàn",
        hanViet: "THIỆN",
        vi: "tốt lành, thiện",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "友善", py: "yǒushàn", vi: "thân thiện" },
              { zh: "善于 + động từ", py: "shànyú + V", vi: "giỏi về…" },
            ],
          },
        ],
        examples: [
          {
            zh: "他善于交朋友。",
            py: "Tā shànyú jiāo péngyou.",
            vi: "Anh ấy giỏi kết bạn.",
            hl: ["善于"],
            added: true,
          },
        ],
      },
      {
        label: "良",
        pos: ["形"],
        zh: "良",
        py: "liáng",
        hanViet: "LƯƠNG",
        vi: "tốt, lành",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "良好", py: "liánghǎo", vi: "tốt đẹp" },
              { zh: "良心", py: "liángxīn", vi: "lương tâm" },
            ],
          },
        ],
        examples: [
          {
            zh: "他的身体状况良好。",
            py: "Tā de shēntǐ zhuàngkuàng liánghǎo.",
            vi: "Tình trạng sức khỏe của anh ấy tốt.",
            hl: ["良好"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 36,
    zh: "热爱",
    py: "rè’ài",
    pos: ["动"],
    hanViet: "NHIỆT ÁI",
    vi: "yêu tha thiết, yêu say mê",
    en: "to love deeply",
    usage: [
      {
        label: "Tân ngữ trừu tượng",
        items: [
          { zh: "热爱和平", py: "rè’ài hépíng", vi: "yêu chuộng hòa bình" },
          { zh: "热爱祖国", py: "rè’ài zǔguó", vi: "yêu tha thiết tổ quốc" },
          { zh: "热爱生活", py: "rè’ài shēnghuó", vi: "yêu cuộc sống" },
        ],
      },
      {
        label: "Tân ngữ là người / vật cụ thể",
        items: [
          { zh: "热爱人民", py: "rè’ài rénmín", vi: "yêu nhân dân" },
          { zh: "热爱大自然", py: "rè’ài dàzìrán", vi: "yêu thiên nhiên" },
          { zh: "热爱读书", py: "rè’ài dúshū", vi: "say mê đọc sách" },
        ],
      },
    ],
    examples: [
      {
        zh: "中国人热爱和平。",
        py: "Zhōngguórén rè’ài hépíng.",
        vi: "Người Trung Quốc yêu chuộng hòa bình.",
        hl: ["热爱和平"],
        hlVi: ["yêu chuộng hòa bình"],
        added: true,
      },
      {
        zh: "他热爱自己的工作。",
        py: "Tā rè’ài zìjǐ de gōngzuò.",
        vi: "Anh ấy yêu thích công việc của mình.",
        hl: ["热爱"],
        added: true,
      },
    ],
    notes: [
      "热爱 mạnh hơn 爱 / 喜欢: cảm xúc sâu, nồng nhiệt, thường dùng cho tổ quốc, sự nghiệp, đối tượng lớn.",
    ],
  },
  {
    id: 37,
    zh: "友好",
    py: "yǒuhǎo",
    pos: ["形"],
    hanViet: "HỮU HẢO",
    vi: "hữu hảo, thân thiện",
    en: "friendly",
    usage: [
      {
        label: "Danh từ / giới từ đi kèm",
        items: [
          {
            zh: "友好的人们",
            py: "yǒuhǎo de rénmen",
            vi: "những con người thân thiện",
          },
          { zh: "友好关系", py: "yǒuhǎo guānxi", vi: "quan hệ hữu nghị" },
          {
            zh: "对……很友好",
            py: "duì… hěn yǒuhǎo",
            vi: "rất thân thiện với…",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "也许你会爱上这些热情友好的人们。",
        py: "Yěxǔ nǐ huì àishang zhèxiē rèqíng yǒuhǎo de rénmen.",
        vi: "Có lẽ bạn sẽ yêu những con người nhiệt tình thân thiện này.",
        hl: ["热情友好"],
        added: true,
      },
      {
        zh: "两国人民的关系很友好。",
        py: "Liǎng guó rénmín de guānxi hěn yǒuhǎo.",
        vi: "Quan hệ giữa nhân dân hai nước rất hữu hảo.",
        hl: ["友好"],
        added: true,
      },
    ],
  },
  {
    id: 38,
    zh: "亲爱",
    py: "qīn’ài",
    pos: ["形"],
    hanViet: "THÂN ÁI",
    vi: "thân yêu, thân mến",
    en: "dear",
    usage: [
      {
        label: "Cấu trúc: 亲爱的 + danh từ (mở đầu thư, lời chào)",
        items: [
          { zh: "亲爱的朋友", py: "qīn’ài de péngyou", vi: "bạn thân mến" },
          {
            zh: "亲爱的老师",
            py: "qīn’ài de lǎoshī",
            vi: "thầy / cô kính mến",
          },
          { zh: "亲爱的爸妈", py: "qīn’ài de bàmā", vi: "bố mẹ yêu quý" },
        ],
      },
    ],
    examples: [
      {
        zh: "亲爱的朋友，愿你们生活得平安快乐。",
        py: "Qīn’ài de péngyou, yuàn nǐmen shēnghuó de píng’ān kuàilè.",
        vi: "Bạn thân mến, chúc các bạn sống bình an vui vẻ.",
        hl: ["亲爱的朋友"],
        added: true,
      },
      {
        zh: "亲爱的老师，您好！",
        py: "Qīn’ài de lǎoshī, nín hǎo!",
        vi: "Thầy kính mến, em chào thầy ạ!",
        hl: ["亲爱的老师"],
        added: true,
      },
    ],
    related: [
      {
        label: "亲",
        pos: ["形", "动"],
        zh: "亲",
        py: "qīn",
        hanViet: "THÂN",
        vi: "thân; hôn; (trên mạng) cách gọi thân mật",
        usage: [
          {
            label: "Kết hợp hay gặp",
            items: [
              { zh: "亲人", py: "qīnrén", vi: "người thân" },
              { zh: "亲了一下", py: "qīn le yíxià", vi: "hôn một cái" },
            ],
          },
        ],
        examples: [
          {
            zh: "亲人都在老家。",
            py: "Qīnrén dōu zài lǎojiā.",
            vi: "Người thân đều ở quê.",
            hl: ["亲人"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "亲爱 hầu như chỉ dùng dạng 亲爱的 + danh từ, không làm vị ngữ độc lập.",
    ],
  },
  {
    id: 39,
    zh: "愿",
    py: "yuàn",
    pos: ["动"],
    hanViet: "NGUYỆN",
    vi: "mong, nguyện, chúc",
    en: "to hope; to wish; to like",
    usage: [
      {
        label: "Cấu trúc đi kèm (lời chúc)",
        items: [
          { zh: "愿你们……", py: "yuàn nǐmen…", vi: "mong / chúc các bạn…" },
          { zh: "愿你平安", py: "yuàn nǐ píng’ān", vi: "mong bạn bình an" },
        ],
      },
    ],
    examples: [
      {
        zh: "愿你们在北京、在中国生活得平安快乐。",
        py: "Yuàn nǐmen zài Běijīng, zài Zhōngguó shēnghuó de píng’ān kuàilè.",
        vi: "Chúc các bạn ở Bắc Kinh, ở Trung Quốc sống bình an vui vẻ.",
        hl: ["愿你们"],
        hlVi: ["Chúc"],
        added: true,
      },
      {
        zh: "愿你梦想成真。",
        py: "Yuàn nǐ mèngxiǎng chéng zhēn.",
        vi: "Chúc bạn mơ ước thành sự thật.",
        hl: ["愿"],
        added: true,
      },
    ],
    compare: [
      {
        title: "愿 vs 愿意 vs 想 vs 要 vs 肯",
        points: [
          {
            zh: "愿",
            py: "yuàn",
            desc: "Văn viết: mong, nguyện; hay dùng trong lời chúc (愿你……).",
          },
          {
            zh: "愿意",
            py: "yuànyì",
            desc: "Bằng lòng, sẵn lòng (tự nguyện đồng ý làm).",
            eg: [
              {
                zh: "我愿意帮助你。",
                py: "Wǒ yuànyì bāngzhù nǐ.",
                vi: "Tôi sẵn lòng giúp bạn.",
              },
            ],
          },
          {
            zh: "想",
            py: "xiǎng",
            desc: "Muốn, định (nguyện vọng, dự định; khẩu ngữ).",
            eg: [
              {
                zh: "我想去北京。",
                py: "Wǒ xiǎng qù Běijīng.",
                vi: "Tôi muốn đi Bắc Kinh.",
              },
            ],
          },
          {
            zh: "要",
            py: "yào",
            desc: "Muốn, cần, phải (ý chí mạnh hơn 想).",
            eg: [
              {
                zh: "我要去北京。",
                py: "Wǒ yào qù Běijīng.",
                vi: "Tôi sẽ đi Bắc Kinh (đã quyết).",
              },
            ],
          },
          {
            zh: "肯",
            py: "kěn",
            desc: "Chịu, bằng lòng (đồng ý làm); thường dùng với 不肯 “không chịu”.",
            eg: [
              {
                zh: "他不肯说。",
                py: "Tā bù kěn shuō.",
                vi: "Anh ấy không chịu nói.",
              },
            ],
          },
        ],
      },
    ],
    notes: ["Xem thêm 愿望 / 愿意 ở Bài 1 (愿意的愿)."],
  },
  {
    id: 40,
    zh: "平安",
    py: "píng’ān",
    pos: ["形"],
    hanViet: "BÌNH AN",
    vi: "bình an, yên ổn",
    en: "safe and sound",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "平安幸福", py: "píng’ān xìngfú", vi: "bình an hạnh phúc" },
          { zh: "平安快乐", py: "píng’ān kuàilè", vi: "bình an vui vẻ" },
          { zh: "一路平安", py: "yílù píng’ān", vi: "thượng lộ bình an" },
          { zh: "平安回家", py: "píng’ān huíjiā", vi: "về nhà bình an" },
        ],
      },
    ],
    examples: [
      {
        zh: "祝你一路平安！",
        py: "Zhù nǐ yílù píng’ān!",
        vi: "Chúc bạn thượng lộ bình an!",
        hl: ["一路平安"],
        added: true,
      },
      {
        zh: "愿你们平安幸福。",
        py: "Yuàn nǐmen píng’ān xìngfú.",
        vi: "Mong các bạn bình an hạnh phúc.",
        hl: ["平安幸福"],
        added: true,
      },
    ],
  },
];

/* ---- 专名: tên riêng ---- */
const PROPER: Entry[] = [
  {
    id: "P1",
    zh: "北海",
    py: "Běi Hǎi",
    pos: ["专名"],
    hanViet: "BẮC HẢI",
    vi: "Bắc Hải (công viên Bắc Hải, Bắc Kinh)",
    en: "Beihai Park",
    examples: [
      {
        zh: "北海公园里有一个很大的湖。",
        py: "Běihǎi Gōngyuán lǐ yǒu yí ge hěn dà de hú.",
        vi: "Công viên Bắc Hải có một cái hồ rất lớn.",
        hl: ["北海公园"],
        added: true,
      },
    ],
  },
  {
    id: "P2",
    zh: "香山",
    py: "Xiāng Shān",
    pos: ["专名"],
    hanViet: "HƯƠNG SƠN",
    vi: "Hương Sơn (công viên Hương Sơn, nổi tiếng với lá đỏ mùa thu)",
    en: "Fragrant Hills Park",
    examples: [
      {
        zh: "秋天很多人去香山看红叶。",
        py: "Qiūtiān hěn duō rén qù Xiāngshān kàn hóngyè.",
        vi: "Mùa thu rất nhiều người đến Hương Sơn ngắm lá đỏ.",
        hl: ["香山"],
        added: true,
      },
    ],
  },
  {
    id: "P3",
    zh: "十三陵",
    py: "Shísān Líng",
    pos: ["专名"],
    hanViet: "THẬP TAM LĂNG",
    vi: "Thập Tam Lăng (lăng tẩm nhà Minh)",
    en: "the Ming Tombs",
    examples: [
      {
        zh: "十三陵是明朝皇帝的陵墓。",
        py: "Shísān Líng shì Míngcháo huángdì de língmù.",
        vi: "Thập Tam Lăng là lăng mộ của các hoàng đế nhà Minh.",
        hl: ["十三陵"],
        added: true,
      },
    ],
  },
  {
    id: "P4",
    zh: "国庆节",
    py: "Guóqìng Jié",
    pos: ["专名"],
    hanViet: "QUỐC KHÁNH TIẾT",
    vi: "Quốc khánh (1/10 ở Trung Quốc)",
    en: "National Day",
    examples: [
      {
        zh: "国庆节放假七天。",
        py: "Guóqìng Jié fàngjià qī tiān.",
        vi: "Quốc khánh được nghỉ bảy ngày.",
        hl: ["国庆节"],
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

export default function VocabBai3() {
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
                    src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/03_tuvung.mp3"
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
