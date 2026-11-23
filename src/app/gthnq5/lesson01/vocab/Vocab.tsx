import React from "react";

import ZhText from "@shared/components/ZhText";

/* =====================================================================
   TỪ VỰNG GTHN 5 (汉语教程 第三册 上) — BÀI 1: 离家的时候
   Từ mới: file PDF (01_tuvung.pdf) · Ví dụ / phân biệt: file docx của giáo viên
   ---------------------------------------------------------------------
   CÁCH THÊM HIGHLIGHT SAU NÀY
   Chữ Hán / pinyin / tiếng Việt đều là chuỗi thuần, KHÔNG chèn thẻ HTML.
   Muốn tô xanh từ nào thì thêm vào mảng của câu đó:
     hl:   ["不愿意"]       -> tô trong câu tiếng Trung
     hlPy: ["bú yuànyì"]    -> tô trong pinyin
     hlVi: ["không muốn"]   -> tô trong tiếng Việt
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
    zh: "愿望",
    py: "yuànwàng",
    pos: ["名"],
    hanViet: "NGUYỆN VỌNG",
    vi: "nguyện vọng, mong muốn",
    en: "desire; wish; aspiration",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一个愿望", py: "yí ge yuànwàng", vi: "một điều ước" }],
      },
      {
        label: "Động từ / định ngữ đi kèm",
        items: [
          {
            zh: "实现愿望",
            py: "shíxiàn yuànwàng",
            vi: "thực hiện nguyện vọng",
          },
          {
            zh: "美好的愿望",
            py: "měihǎo de yuànwàng",
            vi: "nguyện vọng tốt đẹp",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "愿望实现了。",
        py: "Yuànwàng shíxiàn le.",
        vi: "Điều ước đã thành hiện thực.",
        hl: ["愿望"],
        hlVi: ["Điều ước"],
      },
      {
        zh: "我的愿望是当医生。",
        py: "Wǒ de yuànwàng shì dāng yīshēng.",
        vi: "Ước nguyện của tôi là làm bác sĩ.",
        hl: ["愿望"],
        added: true,
      },
    ],
    related: [
      {
        label: "愿意的愿",
        pos: ["动"],
        zh: "愿意",
        py: "yuànyì",
        hanViet: "NGUYỆN Ý",
        vi: "bằng lòng, sẵn lòng, muốn",
        examples: [
          {
            zh: "我不愿意早起。",
            py: "Wǒ bú yuànyì zǎoqǐ.",
            vi: "Tôi không muốn dậy sớm.",
            hl: ["不愿意"],
            hlVi: ["không muốn"],
          },
          {
            zh: "我很愿意帮助你。",
            py: "Wǒ hěn yuànyì bāngzhù nǐ.",
            vi: "Tôi rất sẵn lòng giúp đỡ bạn.",
            hl: ["很愿意"],
            hlVi: ["rất sẵn lòng"],
          },
          {
            zh: "他不大愿意离开家。",
            py: "Tā bú dà yuànyì líkāi jiā.",
            vi: "Anh ấy không mấy muốn rời khỏi nhà.",
            hl: ["不大愿意"],
            hlVi: ["không mấy muốn"],
            added: true,
          },
        ],
      },
      {
        label: "希望的望",
        pos: ["动", "名"],
        zh: "希望",
        py: "xīwàng",
        hanViet: "HY VỌNG",
        vi: "(động) hy vọng, mong; (danh) hy vọng, triển vọng",
        examples: [
          {
            zh: "我希望你早点儿回来。",
            py: "Wǒ xīwàng nǐ zǎodiǎnr huílái.",
            vi: "Tôi hy vọng bạn về sớm một chút.",
            hl: ["希望"],
            added: true,
          },
          {
            zh: "他有希望考上大学。",
            py: "Tā yǒu xīwàng kǎoshàng dàxué.",
            vi: "Cậu ấy có hy vọng đỗ đại học.",
            hl: ["希望"],
            added: true,
          },
        ],
      },
    ],
    compare: [
      {
        title: "愿望 vs 希望",
        points: [
          {
            zh: "愿望",
            py: "yuànwàng",
            desc: "Chỉ là DANH TỪ: điều ao ước nằm trong lòng, thường lớn và lâu dài. Hay đi với 实现 / 美好的… / 有…愿望.",
          },
          {
            zh: "希望",
            py: "xīwàng",
            desc: "Vừa là ĐỘNG TỪ (希望 + mệnh đề: 希望你来) vừa là DANH TỪ (có / không có hy vọng, triển vọng: 有希望、没希望). Hai nghĩa này không thay bằng 愿望 được.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    zh: "终于",
    py: "zhōngyú",
    pos: ["副"],
    hanViet: "CHUNG VU",
    vi: "cuối cùng, rốt cuộc (sau một quá trình dài)",
    en: "finally; at last",
    usage: [
      {
        label: "Đi với động từ / tính từ",
        items: [
          { zh: "终于考上", py: "zhōngyú kǎoshàng", vi: "cuối cùng đã thi đỗ" },
          {
            zh: "终于明白了",
            py: "zhōngyú míngbai le",
            vi: "cuối cùng đã hiểu",
          },
          { zh: "终于到了", py: "zhōngyú dào le", vi: "cuối cùng đã đến" },
        ],
      },
    ],
    examples: [
      {
        zh: "他终于考上大学了。",
        py: "Tā zhōngyú kǎoshàng dàxué le.",
        vi: "Anh ấy cuối cùng cũng đỗ đại học.",
        hl: ["终于"],
        hlVi: ["cuối cùng"],
      },
      {
        zh: "等了一个小时，公共汽车终于来了。",
        py: "Děng le yí ge xiǎoshí, gōnggòng qìchē zhōngyú lái le.",
        vi: "Đợi một tiếng, cuối cùng xe buýt cũng đến.",
        hl: ["终于"],
        added: true,
      },
    ],
    compare: [
      {
        title: "终于 vs 到底 vs 最后",
        points: [
          {
            zh: "终于",
            py: "zhōngyú",
            desc: "Phó từ. Sau thời gian chờ đợi / khó khăn thì điều mong đợi đã xảy ra; thường kèm 了.",
          },
          {
            zh: "到底",
            py: "dàodǐ",
            desc: "Hỏi gặng “rốt cuộc”, thường nằm trong câu hỏi (你到底去不去?). Còn nghĩa “đến cùng” (坚持到底).",
          },
          {
            zh: "最后",
            py: "zuìhòu",
            desc: "Chỉ thứ tự “sau cùng”, không hàm ý mong đợi. Đi trong chuỗi 先…然后…最后…; cũng làm định ngữ (最后的人).",
          },
        ],
        examples: [
          {
            zh: "你到底去不去？",
            py: "Nǐ dàodǐ qù bú qù?",
            vi: "Rốt cuộc bạn có đi hay không?",
            hl: ["到底"],
          },
          {
            zh: "我要坚持到底。",
            py: "Wǒ yào jiānchí dàodǐ.",
            vi: "Tôi phải kiên trì đến cùng.",
            hl: ["到底"],
          },
          {
            zh: "我先去广西，然后去武汉，最后去北京，再最后去隔离。",
            py: "Wǒ xiān qù Guǎngxī, ránhòu qù Wǔhàn, zuìhòu qù Běijīng, zài zuìhòu qù gélí.",
            vi: "Trước tiên tôi đi Quảng Tây, sau đó đi Vũ Hán, cuối cùng đi Bắc Kinh, rồi cuối cùng nữa là đi cách ly.",
            hl: ["先", "然后", "最后", "再最后"],
          },
          {
            zh: "最后的人",
            py: "zuìhòu de rén",
            vi: "người cuối cùng",
            hl: ["最后"],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    zh: "实现",
    py: "shíxiàn",
    pos: ["动"],
    hanViet: "THỰC HIỆN",
    vi: "thực hiện, biến thành hiện thực",
    en: "to realize; to fulfil; to come true",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "实现梦想", py: "shíxiàn mèngxiǎng", vi: "thực hiện ước mơ" },
          {
            zh: "实现愿望",
            py: "shíxiàn yuànwàng",
            vi: "thực hiện nguyện vọng",
          },
          { zh: "实现理想", py: "shíxiàn lǐxiǎng", vi: "thực hiện lý tưởng" },
          { zh: "实现目标", py: "shíxiàn mùbiāo", vi: "đạt được mục tiêu" },
        ],
      },
    ],
    examples: [
      {
        zh: "为了实现梦想，他每天努力学习。",
        py: "Wèile shíxiàn mèngxiǎng, tā měitiān nǔlì xuéxí.",
        vi: "Để thực hiện ước mơ, anh ấy ngày nào cũng nỗ lực học tập.",
        hl: ["实现梦想"],
        added: true,
      },
      {
        zh: "我的愿望终于实现了。",
        py: "Wǒ de yuànwàng zhōngyú shíxiàn le.",
        vi: "Điều ước của tôi cuối cùng cũng thành hiện thực.",
        hl: ["实现"],
        added: true,
      },
    ],
    notes: [
      "Tân ngữ của 实现 thường là những điều “mong muốn / kỳ vọng” (梦想、愿望、理想、目标). Việc cụ thể như bài tập, nhiệm vụ thì dùng 完成, không dùng 实现.",
    ],
  },
  {
    id: 4,
    zh: "联系",
    py: "liánxì",
    pos: ["动"],
    hanViet: "LIÊN HỆ",
    vi: "liên hệ, liên lạc",
    en: "to contact",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "联系学校", py: "liánxì xuéxiào", vi: "liên hệ với trường" },
          { zh: "联系他", py: "liánxì tā", vi: "liên hệ với anh ấy" },
          { zh: "联系工作", py: "liánxì gōngzuò", vi: "liên hệ tìm việc" },
        ],
      },
      {
        label: "Trạng ngữ đi kèm (cách nói tương đương)",
        items: [
          {
            zh: "跟学校联系",
            py: "gēn xuéxiào liánxì",
            vi: "liên hệ với trường (= 联系学校)",
          },
          {
            zh: "跟他联系",
            py: "gēn tā liánxì",
            vi: "liên hệ với anh ấy (= 联系他)",
          },
          { zh: "保持联系", py: "bǎochí liánxì", vi: "giữ liên lạc" },
        ],
      },
      {
        label: "Cụm danh từ hay gặp",
        items: [
          {
            zh: "联系方式",
            py: "liánxì fāngshì",
            vi: "thông tin liên hệ (留下联系方式: để lại thông tin liên hệ)",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "请留下你的联系方式。",
        py: "Qǐng liúxià nǐ de liánxì fāngshì.",
        vi: "Xin để lại thông tin liên hệ của bạn.",
        hl: ["联系方式"],
        added: true,
      },
      {
        zh: "我想联系一下那所学校。",
        py: "Wǒ xiǎng liánxì yíxià nà suǒ xuéxiào.",
        vi: "Tôi muốn liên hệ với ngôi trường đó một chút.",
        hl: ["联系"],
        added: true,
      },
      {
        zh: "到国外以后，请跟我联系。",
        py: "Dào guówài yǐhòu, qǐng gēn wǒ liánxì.",
        vi: "Sau khi ra nước ngoài, hãy liên lạc với tôi.",
        hl: ["跟我联系"],
        added: true,
      },
    ],
  },
  {
    id: 5,
    zh: "瞒",
    py: "mán",
    pos: ["动"],
    hanViet: "MAN",
    vi: "giấu, giấu giếm (sự thật)",
    en: "to hide the truth from",
    usage: [
      {
        label: "Tân ngữ đi kèm (thường là người)",
        items: [
          { zh: "瞒他", py: "mán tā", vi: "giấu anh ấy" },
          { zh: "瞒着父母", py: "mánzhe fùmǔ", vi: "giấu bố mẹ" },
          { zh: "瞒不住", py: "mán bu zhù", vi: "không giấu nổi" },
        ],
      },
    ],
    examples: [
      {
        zh: "你不该瞒他。",
        py: "Nǐ bù gāi mán tā.",
        vi: "Bạn không nên giấu anh ấy.",
        hl: ["瞒"],
        hlVi: ["giấu"],
      },
      {
        zh: "他瞒着父母去了国外。",
        py: "Tā mánzhe fùmǔ qù le guówài.",
        vi: "Anh ấy giấu bố mẹ ra nước ngoài.",
        hl: ["瞒着"],
        added: true,
      },
    ],
    compare: [
      {
        title: "瞒 vs 隐瞒",
        points: [
          {
            zh: "瞒",
            py: "mán",
            desc: "Khẩu ngữ, ngắn gọn. Tân ngữ thường là NGƯỜI bị giấu: 瞒他、瞒着父母.",
          },
          {
            zh: "隐瞒",
            py: "yǐnmán",
            desc: "Trang trọng hơn. Tân ngữ thường là SỰ THẬT / SỰ VIỆC bị giấu: 隐瞒真相、隐瞒事实、隐瞒年龄.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    zh: "独生女",
    py: "dúshēngnǚ",
    pos: ["名"],
    hanViet: "ĐỘC SINH NỮ",
    vi: "con gái một",
    en: "only daughter",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一个独生女", py: "yí ge dúshēngnǚ", vi: "một cô con gái một" },
        ],
      },
    ],
    examples: [
      {
        zh: "我是独生女，没有兄弟姐妹。",
        py: "Wǒ shì dúshēngnǚ, méiyǒu xiōngdì jiěmèi.",
        vi: "Tôi là con gái một, không có anh chị em.",
        hl: ["独生女"],
        added: true,
      },
    ],
    related: [
      {
        label: "独生女 ↔ 独生子",
        pos: ["名"],
        zh: "独生子",
        py: "dúshēngzǐ",
        hanViet: "ĐỘC SINH TỬ",
        vi: "con trai một",
        examples: [
          {
            zh: "他是独生子。",
            py: "Tā shì dúshēngzǐ.",
            vi: "Anh ấy là con trai một.",
            hl: ["独生子"],
            added: true,
          },
        ],
      },
    ],
    notes: ["Con một nói chung (cả trai lẫn gái): 独生子女 dúshēng zǐnǚ."],
  },
  {
    id: 7,
    zh: "多半",
    py: "duōbàn",
    pos: ["副"],
    hanViet: "ĐA BÁN",
    vi: "phần lớn là, nhiều khả năng, có lẽ",
    en: "the greater part; more likely",
    usage: [
      {
        label: "Đi với động từ / tính từ",
        items: [
          {
            zh: "多半不会同意",
            py: "duōbàn bú huì tóngyì",
            vi: "nhiều khả năng sẽ không đồng ý",
          },
          {
            zh: "多半会下雨",
            py: "duōbàn huì xià yǔ",
            vi: "nhiều khả năng sẽ mưa",
          },
          { zh: "多半是……", py: "duōbàn shì…", vi: "phần lớn là…" },
        ],
      },
    ],
    examples: [
      {
        zh: "爸妈多半不会同意我去国外。",
        py: "Bàmā duōbàn bú huì tóngyì wǒ qù guówài.",
        vi: "Bố mẹ nhiều khả năng sẽ không đồng ý cho tôi ra nước ngoài.",
        hl: ["多半不会同意"],
        hlVi: ["nhiều khả năng"],
        added: true,
      },
      {
        zh: "天这么阴，多半要下雨。",
        py: "Tiān zhème yīn, duōbàn yào xià yǔ.",
        vi: "Trời âm u thế này, nhiều khả năng sẽ mưa.",
        hl: ["多半"],
        added: true,
      },
    ],
    compare: [
      {
        title: "多半 vs 一定 vs 肯定 (và 多数)",
        points: [
          {
            zh: "多半",
            py: "duōbàn",
            desc: "Suy đoán có khả năng lớn nhưng chưa chắc hẳn; không dùng để ra yêu cầu / mệnh lệnh.",
          },
          {
            zh: "一定",
            py: "yídìng",
            desc: "Nhất định, chắc chắn; còn dùng để nhấn mạnh yêu cầu, quyết tâm (你一定要来).",
          },
          {
            zh: "肯定",
            py: "kěndìng",
            desc: "Chắc chắn (phán đoán rất chắc); còn là động từ “khẳng định” và tính từ “khẳng định” (肯定的回答).",
          },
          {
            zh: "多数",
            py: "duōshù",
            desc: "Đa số: chỉ SỐ LƯỢNG (多数人同意), không phải sự suy đoán.",
          },
        ],
        examples: [
          {
            zh: "他一定会来的。",
            py: "Tā yídìng huì lái de.",
            vi: "Anh ấy nhất định sẽ đến.",
            hl: ["一定"],
            added: true,
          },
          {
            zh: "他肯定知道这件事。",
            py: "Tā kěndìng zhīdào zhè jiàn shì.",
            vi: "Anh ấy chắc chắn biết chuyện này.",
            hl: ["肯定"],
            added: true,
          },
          {
            zh: "多数同学都同意。",
            py: "Duōshù tóngxué dōu tóngyì.",
            vi: "Đa số bạn học đều đồng ý.",
            hl: ["多数"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    zh: "因此",
    py: "yīncǐ",
    pos: ["连"],
    hanViet: "NHÂN THỬ",
    vi: "vì vậy, do đó",
    en: "so; therefore; for this reason",
    examples: [
      {
        zh: "由于他乒乓球打得好，因此老师让他去参加比赛了。",
        py: "Yóuyú tā pīngpāngqiú dǎ de hǎo, yīncǐ lǎoshī ràng tā qù cānjiā bǐsài le.",
        vi: "Vì cậu ấy chơi bóng bàn giỏi nên thầy giáo cho cậu ấy đi tham gia thi đấu.",
        hl: ["由于", "因此"],
        hlVi: ["Vì", "nên"],
      },
    ],
    compare: [
      {
        title: "因此 vs 所以 vs 理由 / 原因",
        points: [
          {
            zh: "因此",
            py: "yīncǐ",
            desc: "Liên từ thiên về văn viết; nối kết quả với nguyên nhân đã nêu trước đó, hay đi cặp với 由于.",
          },
          {
            zh: "所以",
            py: "suǒyǐ",
            desc: "Dùng được cả nói và viết; hay đi cặp 因为…所以….",
          },
          {
            zh: "原因",
            py: "yuányīn",
            desc: "DANH TỪ “nguyên nhân”: cái gây ra kết quả (khách quan).",
          },
          {
            zh: "理由",
            py: "lǐyóu",
            desc: "DANH TỪ “lý do”: điều nêu ra để giải thích / biện minh (có tính lập luận).",
          },
        ],
        examples: [
          {
            zh: "因为他乒乓球打得好，所以老师让他去参加比赛了。",
            py: "Yīnwèi tā pīngpāngqiú dǎ de hǎo, suǒyǐ lǎoshī ràng tā qù cānjiā bǐsài le.",
            vi: "Vì cậu ấy chơi bóng bàn giỏi, cho nên thầy giáo cho cậu ấy đi tham gia thi đấu.",
            hl: ["因为", "所以"],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    zh: "果然",
    py: "guǒrán",
    pos: ["副"],
    hanViet: "QUẢ NHIÊN",
    vi: "quả nhiên, đúng như dự đoán",
    en: "as expected; sure enough; really",
    usage: [
      {
        label: "Đi với động từ / tính từ",
        items: [
          {
            zh: "果然下雨了",
            py: "guǒrán xià yǔ le",
            vi: "quả nhiên trời mưa rồi",
          },
          { zh: "果然如此", py: "guǒrán rúcǐ", vi: "quả nhiên là như vậy" },
        ],
      },
    ],
    examples: [
      {
        zh: "天气预报说今天有雨，果然下雨了。",
        py: "Tiānqì yùbào shuō jīntiān yǒu yǔ, guǒrán xià yǔ le.",
        vi: "Dự báo thời tiết nói hôm nay có mưa, quả nhiên trời mưa.",
        hl: ["果然"],
        hlVi: ["quả nhiên"],
        added: true,
      },
      {
        zh: "我早就觉得他会迟到，他果然迟到了。",
        py: "Wǒ zǎo jiù juéde tā huì chídào, tā guǒrán chídào le.",
        vi: "Tôi đã nghĩ anh ấy sẽ đến muộn, quả nhiên anh ấy đến muộn.",
        hl: ["果然"],
        added: true,
      },
    ],
    notes: [
      "果然 = kết quả TRÙNG khớp với dự đoán trước đó (không bất ngờ). Nếu kết quả ngoài dự đoán thì dùng 居然 / 竟然.",
    ],
  },
  {
    id: 10,
    zh: "实话",
    py: "shíhuà",
    pos: ["名"],
    hanViet: "THỰC THOẠI",
    vi: "lời nói thật, sự thật",
    en: "truth",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一句实话", py: "yí jù shíhuà", vi: "một lời nói thật" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "说实话", py: "shuō shíhuà", vi: "nói thật" },
          {
            zh: "讲实话",
            py: "jiǎng shíhuà",
            vi: "nói thật (trang trọng hơn)",
          },
          {
            zh: "实话实说",
            py: "shíhuà shíshuō",
            vi: "có sao nói vậy, nói thẳng nói thật",
          },
          { zh: "听实话", py: "tīng shíhuà", vi: "nghe lời thật" },
        ],
      },
    ],
    examples: [
      {
        zh: "说实话，我不太想去。",
        py: "Shuō shíhuà, wǒ bú tài xiǎng qù.",
        vi: "Nói thật, tôi không muốn đi lắm.",
        hl: ["说实话"],
        hlVi: ["Nói thật"],
        added: true,
      },
      {
        zh: "他不爱听实话。",
        py: "Tā bú ài tīng shíhuà.",
        vi: "Anh ấy không thích nghe lời nói thật.",
        hl: ["实话"],
        added: true,
      },
      {
        zh: "我们应该实话实说。",
        py: "Wǒmen yīnggāi shíhuà shíshuō.",
        vi: "Chúng ta nên nói thật.",
        hl: ["实话实说"],
        added: true,
      },
    ],
    notes: [
      "说实话 (mục chú thích 1 trong sách) dùng để mở đầu khi nói suy nghĩ thật. Cách nói tương đương: 说心里话 shuō xīnlǐhuà, 说真的 shuō zhēn de.",
    ],
  },
  {
    id: 11,
    zh: "对于",
    py: "duìyú",
    pos: ["介"],
    hanViet: "ĐỐI VU",
    vi: "đối với, về (việc / vấn đề)",
    en: "with regard to; concerning; to",
    examples: [
      {
        zh: "对于/对“秋游”这个话题，大家都很感兴趣。",
        py: "Duìyú/Duì “qiūyóu” zhège huàtí, dàjiā dōu hěn gǎn xìngqù.",
        vi: "Đối với chủ đề “đi chơi mùa thu”, mọi người đều rất hứng thú.",
        hl: ["对于", "对"],
      },
      {
        zh: "多跟中国人谈话，对于/对提高汉语听说能力非常有帮助。",
        py: "Duō gēn Zhōngguórén tánhuà, duìyú/duì tígāo Hànyǔ tīng-shuō nénglì fēicháng yǒu bāngzhù.",
        vi: "Nói chuyện nhiều với người Trung Quốc rất có ích cho việc nâng cao khả năng nghe nói tiếng Hán.",
        hl: ["对于", "对"],
      },
      {
        zh: "对于/对这个问题，大家都很感兴趣。",
        py: "Duìyú/Duì zhège wèntí, dàjiā dōu hěn gǎn xìngqù.",
        vi: "Đối với vấn đề này, mọi người đều rất quan tâm.",
        hl: ["对于", "对"],
      },
      {
        zh: "对于将来要做什么，我还没想好。",
        py: "Duìyú jiānglái yào zuò shénme, wǒ hái méi xiǎnghǎo.",
        vi: "Về việc tương lai sẽ làm gì, tôi vẫn chưa nghĩ ra.",
        hl: ["对于"],
      },
    ],
    compare: [
      {
        title: "对于 vs 对 vs 关于 vs 至于",
        points: [
          {
            zh: "对于",
            py: "duìyú",
            desc: "Chỉ ĐỐI TƯỢNG là sự việc / vấn đề, thường đứng đầu câu, hơi trang trọng.",
          },
          {
            zh: "对",
            py: "duì",
            desc: "Làm được mọi chỗ của 对于, nhưng còn dùng cho NGƯỜI: chỉ hướng hành động (对我笑) và thái độ (对我热情). Những nghĩa này không thay bằng 对于.",
          },
          {
            zh: "关于",
            py: "guānyú",
            desc: "“Về, liên quan đến”: nêu phạm vi nội dung, hay làm tiêu đề / định ngữ (关于…的书); không đứng sau chủ ngữ.",
          },
          {
            zh: "至于",
            py: "zhìyú",
            desc: "“Còn về, đến như”: chuyển sang một đề tài khác trong câu sau.",
          },
        ],
        examples: [
          {
            zh: "我对“秋游”这个话题很感兴趣。",
            py: "Wǒ duì “qiūyóu” zhège huàtí hěn gǎn xìngqù.",
            vi: "Tôi rất hứng thú với chủ đề “đi chơi mùa thu”.",
            hl: ["对"],
          },
          {
            zh: "朋友们对我很热情。",
            py: "Péngyoumen duì wǒ hěn rèqíng.",
            vi: "Bạn bè rất nhiệt tình với tôi.",
            hl: ["对"],
          },
          {
            zh: "他对我笑了笑。",
            py: "Tā duì wǒ xiào le xiào.",
            vi: "Anh ấy cười với tôi.",
            hl: ["对"],
          },
          {
            zh: "关于这件事，我什么都不知道。",
            py: "Guānyú zhè jiàn shì, wǒ shénme dōu bù zhīdào.",
            vi: "Về chuyện này, tôi chẳng biết gì cả.",
            hl: ["关于"],
            added: true,
          },
          {
            zh: "我同意这个办法，至于怎么做，大家再商量。",
            py: "Wǒ tóngyì zhège bànfǎ, zhìyú zěnme zuò, dàjiā zài shāngliang.",
            vi: "Tôi đồng ý cách này, còn làm thế nào thì mọi người bàn thêm.",
            hl: ["至于"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    zh: "古老",
    py: "gǔlǎo",
    pos: ["形"],
    hanViet: "CỔ LÃO",
    vi: "cổ xưa, lâu đời",
    en: "ancient; age-old",
    usage: [
      {
        label: "Danh từ hay đi kèm (kèm lượng từ)",
        items: [
          {
            zh: "古老的城市",
            py: "gǔlǎo de chéngshì",
            vi: "thành phố cổ xưa (trái nghĩa: 年轻的城市)",
          },
          {
            zh: "一座古老的城市",
            py: "yí zuò gǔlǎo de chéngshì",
            vi: "một thành phố cổ xưa",
          },
          {
            zh: "古老的传说",
            py: "gǔlǎo de chuánshuō",
            vi: "truyền thuyết cổ xưa",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "西安是一座古老的城市。",
        py: "Xī’ān shì yí zuò gǔlǎo de chéngshì.",
        vi: "Tây An là một thành phố cổ xưa.",
        hl: ["古老"],
        added: true,
      },
      {
        zh: "这是一个古老而年轻的国家。",
        py: "Zhè shì yí ge gǔlǎo ér niánqīng de guójiā.",
        vi: "Đây là một đất nước vừa cổ xưa vừa trẻ trung.",
        hl: ["古老而年轻"],
        added: true,
      },
    ],
    compare: [
      {
        title: "古老 vs 古 vs 老 vs 旧",
        points: [
          {
            zh: "古老",
            py: "gǔlǎo",
            desc: "Tính từ, cổ xưa, có lịch sử rất lâu đời; sắc thái trang trọng, thường tích cực. Trái nghĩa: 年轻.",
          },
          {
            zh: "古",
            py: "gǔ",
            desc: "Chữ đơn, hay nằm trong từ ghép: 古代、古城、古书。",
            eg: [{ zh: "古代", py: "gǔdài", vi: "cổ đại" }],
          },
          {
            zh: "老",
            py: "lǎo",
            desc: "Già; lâu đời / quen từ lâu (nhẹ nhàng, gần gũi).",
            eg: [{ zh: "老朋友", py: "lǎo péngyou", vi: "bạn cũ" }],
          },
          {
            zh: "旧",
            py: "jiù",
            desc: "Cũ (đồ vật đã dùng, không còn mới); trái nghĩa 新.",
            eg: [{ zh: "旧衣服", py: "jiù yīfu", vi: "quần áo cũ" }],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    zh: "而",
    py: "ér",
    pos: ["连"],
    hanViet: "NHI",
    vi: "mà, nhưng (đối lập); và (cùng chiều)",
    en: "but; and",
    usage: [
      {
        label: "Nối tính từ / cụm động từ",
        items: [
          {
            zh: "古老而年轻",
            py: "gǔlǎo ér niánqīng",
            vi: "cổ xưa mà trẻ trung (đối lập)",
          },
          {
            zh: "好看而不好吃",
            py: "hǎokàn ér bù hǎochī",
            vi: "đẹp mắt nhưng không ngon (đối lập)",
          },
          {
            zh: "美丽而善良",
            py: "měilì ér shànliáng",
            vi: "xinh đẹp và hiền lành (cùng chiều)",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "这是一个古老而年轻的国家。",
        py: "Zhè shì yí ge gǔlǎo ér niánqīng de guójiā.",
        vi: "Đây là một đất nước vừa cổ xưa vừa trẻ trung.",
        hl: ["而"],
        added: true,
      },
      {
        zh: "这个蛋糕好看而不好吃。",
        py: "Zhège dàngāo hǎokàn ér bù hǎochī.",
        vi: "Chiếc bánh này đẹp mắt nhưng không ngon.",
        hl: ["而"],
        hlVi: ["nhưng"],
        added: true,
      },
      {
        zh: "她是一个美丽而善良的姑娘。",
        py: "Tā shì yí ge měilì ér shànliáng de gūniang.",
        vi: "Cô ấy là một cô gái xinh đẹp và hiền lành.",
        hl: ["而"],
        added: true,
      },
    ],
    notes: [
      "而 chủ yếu nối tính từ hoặc cụm động từ; thường không nối danh từ với danh từ như “和”.",
    ],
  },
  {
    id: 14,
    zh: "鸟",
    py: "niǎo",
    pos: ["名"],
    hanViet: "ĐIỂU",
    vi: "chim",
    en: "bird",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一只小鸟", py: "yì zhī xiǎo niǎo", vi: "một chú chim nhỏ" },
        ],
      },
    ],
    examples: [
      {
        zh: "树上有一只小鸟。",
        py: "Shù shang yǒu yì zhī xiǎo niǎo.",
        vi: "Trên cây có một chú chim nhỏ.",
        hl: ["一只小鸟"],
        added: true,
      },
      {
        zh: "小鸟在天空中自由自在地飞。",
        py: "Xiǎo niǎo zài tiānkōng zhōng zìyóu zìzài de fēi.",
        vi: "Chú chim nhỏ bay tự do tự tại trên bầu trời.",
        hl: ["小鸟"],
        added: true,
      },
    ],
    notes: [
      "Dễ nhầm chữ: 鸟 niǎo (chim) và 乌 wū (quạ; đen), vd. 乌龟 wūguī (con rùa), 乌鸦 wūyā (quạ).",
    ],
  },
  {
    id: 15,
    zh: "独立",
    py: "dúlì",
    pos: ["动"],
    hanViet: "ĐỘC LẬP",
    vi: "độc lập, tự lập",
    en: "to be independent",
    usage: [
      {
        label: "Đi với động từ (làm gì một cách độc lập)",
        items: [
          { zh: "独立生活", py: "dúlì shēnghuó", vi: "sống tự lập" },
          { zh: "独立思考", py: "dúlì sīkǎo", vi: "suy nghĩ độc lập" },
          { zh: "独立完成", py: "dúlì wánchéng", vi: "tự hoàn thành" },
          { zh: "经济独立", py: "jīngjì dúlì", vi: "độc lập về kinh tế" },
        ],
      },
    ],
    examples: [
      {
        zh: "我想去国外独立生活。",
        py: "Wǒ xiǎng qù guówài dúlì shēnghuó.",
        vi: "Tôi muốn ra nước ngoài sống tự lập.",
        hl: ["独立生活"],
        added: true,
      },
      {
        zh: "孩子长大了，应该学会独立。",
        py: "Háizi zhǎngdà le, yīnggāi xuéhuì dúlì.",
        vi: "Con cái lớn rồi, nên học cách tự lập.",
        hl: ["独立"],
        added: true,
      },
    ],
  },
  {
    id: 16,
    zh: "自在",
    py: "zìzài",
    pos: ["形"],
    hanViet: "TỰ TẠI",
    vi: "tự tại, thoải mái, không gò bó",
    en: "unrestrained; free",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "自由自在", py: "zìyóu zìzài", vi: "tự do tự tại" },
          {
            zh: "过得很自在",
            py: "guò de hěn zìzài",
            vi: "sống rất thoải mái",
          },
          { zh: "觉得自在", py: "juéde zìzài", vi: "cảm thấy thoải mái" },
        ],
      },
    ],
    examples: [
      {
        zh: "小鸟自由自在地飞来飞去。",
        py: "Xiǎo niǎo zìyóu zìzài de fēi lái fēi qù.",
        vi: "Chú chim nhỏ bay lượn tự do tự tại.",
        hl: ["自由自在"],
        added: true,
      },
      {
        zh: "在家里我觉得很自在。",
        py: "Zài jiālǐ wǒ juéde hěn zìzài.",
        vi: "Ở nhà tôi cảm thấy rất thoải mái.",
        hl: ["自在"],
        added: true,
      },
    ],
    notes: [
      "自在 nhấn vào CẢM GIÁC thoải mái, không bị ràng buộc; 自由 nhấn vào quyền / tình trạng không bị hạn chế.",
    ],
  },
  {
    id: 17,
    zh: "国外",
    py: "guówài",
    pos: ["名"],
    hanViet: "QUỐC NGOẠI",
    vi: "nước ngoài, ngoài nước",
    en: "overseas; abroad",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "（không dùng lượng từ）", py: "", vi: "danh từ chỉ nơi chốn" },
        ],
      },
      {
        label: "Động từ / giới từ đi kèm",
        items: [
          { zh: "去国外", py: "qù guówài", vi: "ra nước ngoài" },
          { zh: "在国外", py: "zài guówài", vi: "ở nước ngoài" },
          { zh: "国外留学", py: "guówài liúxué", vi: "du học nước ngoài" },
        ],
      },
    ],
    examples: [
      {
        zh: "他打算去国外留学。",
        py: "Tā dǎsuàn qù guówài liúxué.",
        vi: "Anh ấy dự định ra nước ngoài du học.",
        hl: ["国外"],
        added: true,
      },
      {
        zh: "我想在国外工作几年。",
        py: "Wǒ xiǎng zài guówài gōngzuò jǐ nián.",
        vi: "Tôi muốn làm việc ở nước ngoài vài năm.",
        hl: ["在国外"],
        added: true,
      },
    ],
    compare: [
      {
        title: "国外 vs 外国",
        points: [
          {
            zh: "国外",
            py: "guówài",
            desc: "Chỉ VỊ TRÍ “ở ngoài nước” (trái nghĩa 国内): 去国外、在国外.",
          },
          {
            zh: "外国",
            py: "wàiguó",
            desc: "“Nước ngoài / nước khác”, hay làm định ngữ: 外国人、外国朋友、外国语.",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    zh: "考虑",
    py: "kǎolǜ",
    pos: ["动"],
    hanViet: "KHẢO LỰ",
    vi: "cân nhắc, suy xét",
    en: "to consider",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "考虑问题", py: "kǎolǜ wèntí", vi: "cân nhắc vấn đề" },
          {
            zh: "考虑去国外",
            py: "kǎolǜ qù guówài",
            vi: "cân nhắc việc ra nước ngoài",
          },
          {
            zh: "考虑一下 / 考虑考虑",
            py: "kǎolǜ yíxià / kǎolǜ kǎolǜ",
            vi: "cân nhắc một chút",
          },
          { zh: "认真考虑", py: "rènzhēn kǎolǜ", vi: "cân nhắc nghiêm túc" },
        ],
      },
    ],
    examples: [
      {
        zh: "这件事你再考虑考虑。",
        py: "Zhè jiàn shì nǐ zài kǎolǜ kǎolǜ.",
        vi: "Chuyện này bạn cân nhắc thêm đi.",
        hl: ["考虑考虑"],
        added: true,
      },
      {
        zh: "我正在考虑去国外留学。",
        py: "Wǒ zhèngzài kǎolǜ qù guówài liúxué.",
        vi: "Tôi đang cân nhắc việc ra nước ngoài du học.",
        hl: ["考虑"],
        added: true,
      },
    ],
    compare: [
      {
        title: "考虑 vs 思考 vs 想",
        points: [
          {
            zh: "考虑",
            py: "kǎolǜ",
            desc: "Cân nhắc nhiều mặt để ĐI ĐẾN QUYẾT ĐỊNH (làm hay không, chọn cái nào).",
          },
          {
            zh: "思考",
            py: "sīkǎo",
            desc: "Suy nghĩ sâu, có hệ thống (tư duy); thiên văn viết: 思考人生、独立思考.",
          },
          {
            zh: "想",
            py: "xiǎng",
            desc: "Khẩu ngữ, nghĩa rộng nhất: nghĩ / muốn / nhớ.",
            eg: [
              { zh: "我想家了。", py: "Wǒ xiǎng jiā le.", vi: "Tôi nhớ nhà." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    zh: "今后",
    py: "jīnhòu",
    pos: ["名"],
    hanViet: "KIM HẬU",
    vi: "từ nay về sau, sau này",
    en: "in future; from now on",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          {
            zh: "今后的生活",
            py: "jīnhòu de shēnghuó",
            vi: "cuộc sống sau này",
          },
          { zh: "往后余生", py: "wǎng hòu yú shēng", vi: "quãng đời còn lại" },
          { zh: "下半辈子", py: "xià bàn bèizi", vi: "nửa đời còn lại" },
        ],
      },
    ],
    examples: [
      {
        zh: "今后你打算怎么办？",
        py: "Jīnhòu nǐ dǎsuàn zěnme bàn?",
        vi: "Từ nay về sau bạn định làm thế nào?",
        hl: ["今后"],
        added: true,
      },
      {
        zh: "今后我会常常给你打电话。",
        py: "Jīnhòu wǒ huì chángcháng gěi nǐ dǎ diànhuà.",
        vi: "Từ nay tôi sẽ thường gọi điện cho bạn.",
        hl: ["今后"],
        added: true,
      },
    ],
    compare: [
      {
        title: "今后 vs 以后 vs 往后",
        points: [
          {
            zh: "今后",
            py: "jīnhòu",
            desc: "Tính từ lúc nói trở đi; chỉ tương lai, không dùng cho quá khứ.",
          },
          {
            zh: "以后",
            py: "yǐhòu",
            desc: "“Sau (một mốc)”: dùng được cho cả quá khứ lẫn tương lai, thường có mốc đi trước (毕业以后).",
          },
          {
            zh: "往后",
            py: "wǎnghòu",
            desc: "Khẩu ngữ, gần nghĩa “sau này”; hay gặp trong cụm cố định 往后余生.",
          },
        ],
      },
    ],
  },
  {
    id: 20,
    zh: "事情",
    py: "shìqing",
    pos: ["名"],
    hanViet: "SỰ TÌNH",
    vi: "sự việc, việc, chuyện",
    en: "thing",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一件事情", py: "yí jiàn shìqing", vi: "một việc" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "做事情", py: "zuò shìqing", vi: "làm việc" },
          { zh: "处理事情", py: "chǔlǐ shìqing", vi: "xử lý việc" },
        ],
      },
    ],
    examples: [
      {
        zh: "今天有一件重要的事情。",
        py: "Jīntiān yǒu yí jiàn zhòngyào de shìqing.",
        vi: "Hôm nay có một việc quan trọng.",
        hl: ["一件事情"],
        added: true,
      },
      {
        zh: "这件事情你别告诉他。",
        py: "Zhè jiàn shìqing nǐ bié gàosu tā.",
        vi: "Chuyện này bạn đừng nói với anh ấy.",
        hl: ["事情"],
        added: true,
      },
    ],
    notes: [
      "事情 = 事. Dạng ngắn 事 hay nằm trong cụm cố định (有事、没事、什么事、一件事).",
    ],
  },
  {
    id: 21,
    zh: "改变",
    py: "gǎibiàn",
    pos: ["动"],
    hanViet: "CẢI BIẾN",
    vi: "thay đổi, làm thay đổi",
    en: "to change",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "改变命运", py: "gǎibiàn mìngyùn", vi: "thay đổi số phận" },
          { zh: "改变想法", py: "gǎibiàn xiǎngfǎ", vi: "thay đổi suy nghĩ" },
          { zh: "改变态度", py: "gǎibiàn tàidù", vi: "thay đổi thái độ" },
          { zh: "改变主意", py: "gǎibiàn zhǔyi", vi: "đổi ý" },
        ],
      },
    ],
    examples: [
      {
        zh: "学习可以改变命运。",
        py: "Xuéxí kěyǐ gǎibiàn mìngyùn.",
        vi: "Học tập có thể thay đổi số phận.",
        hl: ["改变命运"],
        added: true,
      },
      {
        zh: "我改变了想法，不去国外了。",
        py: "Wǒ gǎibiàn le xiǎngfǎ, bú qù guówài le.",
        vi: "Tôi đã đổi ý, không ra nước ngoài nữa.",
        hl: ["改变了想法"],
        added: true,
      },
    ],
    compare: [
      {
        title: "改变 vs 改 vs 变 vs 变化",
        points: [
          {
            zh: "改变",
            py: "gǎibiàn",
            desc: "Làm cho khác đi một cách chủ động; có tân ngữ (命运、想法、态度). Cũng dùng như danh từ.",
          },
          {
            zh: "改",
            py: "gǎi",
            desc: "Sửa / đổi (khẩu ngữ, cụ thể): 改作业、改名字、改错。",
            eg: [{ zh: "改作业", py: "gǎi zuòyè", vi: "chấm / sửa bài" }],
          },
          {
            zh: "变",
            py: "biàn",
            desc: "TỰ biến đổi (thường không có tân ngữ): 天气变了、变成…。",
            eg: [{ zh: "变冷了", py: "biàn lěng le", vi: "trở nên lạnh" }],
          },
          {
            zh: "变化",
            py: "biànhuà",
            desc: "Danh từ / động từ nội động: 变化很大、发生了变化; không mang tân ngữ.",
            eg: [
              { zh: "变化很大", py: "biànhuà hěn dà", vi: "thay đổi rất lớn" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 22,
    zh: "想法",
    py: "xiǎngfǎ",
    pos: ["名"],
    hanViet: "TƯỞNG PHÁP",
    vi: "ý nghĩ, suy nghĩ, ý tưởng",
    en: "idea",
    usage: [
      {
        label: "Lượng từ",
        items: [{ zh: "一个想法", py: "yí ge xiǎngfǎ", vi: "một ý nghĩ" }],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "有想法", py: "yǒu xiǎngfǎ", vi: "có suy nghĩ" },
          { zh: "改变想法", py: "gǎibiàn xiǎngfǎ", vi: "thay đổi suy nghĩ" },
          { zh: "说出想法", py: "shuōchū xiǎngfǎ", vi: "nói ra suy nghĩ" },
        ],
      },
    ],
    examples: [
      {
        zh: "你有什么想法？",
        py: "Nǐ yǒu shénme xiǎngfǎ?",
        vi: "Bạn có suy nghĩ gì?",
        hl: ["想法"],
        added: true,
      },
      {
        zh: "我的想法跟你不一样。",
        py: "Wǒ de xiǎngfǎ gēn nǐ bù yíyàng.",
        vi: "Suy nghĩ của tôi khác bạn.",
        hl: ["想法"],
        added: true,
      },
    ],
    compare: [
      {
        title: "想法 vs 看法 vs 意见 vs 主见 vs 建议 vs 思考 vs 念头",
        points: [
          { zh: "想法", py: "xiǎngfǎ", desc: "Ý nghĩ, suy nghĩ nói chung." },
          {
            zh: "看法",
            py: "kànfǎ",
            desc: "Quan điểm, nhận định về một việc: 对…的看法。",
            eg: [
              {
                zh: "对这个问题你有什么看法？",
                py: "Duì zhège wèntí nǐ yǒu shénme kànfǎ?",
                vi: "Bạn nhìn nhận vấn đề này thế nào?",
              },
            ],
          },
          {
            zh: "意见",
            py: "yìjiàn",
            desc: "Ý kiến (góp ý); 有意见 / 提意见 còn có thể mang nghĩa bất mãn, phê bình.",
            eg: [
              {
                zh: "我对他有意见。",
                py: "Wǒ duì tā yǒu yìjiàn.",
                vi: "Tôi có ý kiến (bất mãn) với anh ấy.",
              },
            ],
          },
          {
            zh: "主见",
            py: "zhǔjiàn",
            desc: "Chủ kiến, chính kiến riêng: 有主见。",
            eg: [
              {
                zh: "他很有主见。",
                py: "Tā hěn yǒu zhǔjiàn.",
                vi: "Anh ấy rất có chủ kiến.",
              },
            ],
          },
          {
            zh: "建议",
            py: "jiànyì",
            desc: "Đề nghị, gợi ý (danh từ + động từ): 提建议、给你一个建议。",
            eg: [
              {
                zh: "给你一个建议",
                py: "gěi nǐ yí ge jiànyì",
                vi: "cho bạn một gợi ý",
              },
            ],
          },
          {
            zh: "思考",
            py: "sīkǎo",
            desc: "ĐỘNG TỪ “suy nghĩ sâu”, không phải danh từ ý nghĩ.",
          },
          {
            zh: "念头",
            py: "niàntou",
            desc: "Ý nghĩ chợt đến, ý định thoáng qua: 冒出一个念头。",
            eg: [
              {
                zh: "冒出一个念头",
                py: "màochū yí ge niàntou",
                vi: "chợt nảy ra một ý nghĩ",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 23,
    zh: "视频",
    py: "shìpín",
    pos: ["名"],
    hanViet: "THỊ TẦN",
    vi: "video",
    en: "video",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一个视频", py: "yí ge shìpín", vi: "một video" },
          { zh: "一段视频", py: "yí duàn shìpín", vi: "một đoạn video" },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "看视频", py: "kàn shìpín", vi: "xem video" },
          { zh: "发视频", py: "fā shìpín", vi: "gửi video" },
          { zh: "视频通话", py: "shìpín tōnghuà", vi: "gọi video" },
        ],
      },
    ],
    examples: [
      {
        zh: "他给我发了一段视频。",
        py: "Tā gěi wǒ fā le yí duàn shìpín.",
        vi: "Anh ấy gửi cho tôi một đoạn video.",
        hl: ["一段视频"],
        added: true,
      },
      {
        zh: "我们每天都视频聊天。",
        py: "Wǒmen měitiān dōu shìpín liáotiān.",
        vi: "Mỗi ngày chúng tôi đều gọi video trò chuyện.",
        hl: ["视频"],
        added: true,
      },
    ],
  },
  {
    id: 24,
    zh: "临",
    py: "lín",
    pos: ["介"],
    hanViet: "LÂM",
    vi: "sắp, ngay trước lúc",
    en: "just before",
    usage: [
      {
        label: "Đi với động từ (+ 的时候 / 前)",
        items: [
          { zh: "临走的时候", py: "lín zǒu de shíhou", vi: "lúc sắp đi" },
          { zh: "临睡前", py: "lín shuì qián", vi: "trước khi đi ngủ" },
          { zh: "临出门", py: "lín chūmén", vi: "sắp ra khỏi nhà" },
        ],
      },
    ],
    examples: [
      {
        zh: "临走的时候，妈妈给了我一个拥抱。",
        py: "Lín zǒu de shíhou, māma gěi le wǒ yí ge yōngbào.",
        vi: "Lúc sắp đi, mẹ ôm tôi một cái.",
        hl: ["临走的时候"],
        hlVi: ["Lúc sắp đi"],
        added: true,
      },
      {
        zh: "我临睡前喜欢看书。",
        py: "Wǒ lín shuì qián xǐhuan kàn shū.",
        vi: "Trước khi ngủ tôi thích đọc sách.",
        hl: ["临睡前"],
        added: true,
      },
    ],
    compare: [
      {
        title: "临 vs 快(要)……了",
        points: [
          {
            zh: "临",
            py: "lín",
            desc: "Giới từ chỉ thời điểm NGAY TRƯỚC một hành động: 临 + động từ (+ 的时候 / 前); không cần 了.",
          },
          {
            zh: "快(要)……了",
            py: "kuài(yào)… le",
            desc: "Chỉ sự việc SẮP xảy ra; bắt buộc có 了 ở cuối.",
            eg: [
              {
                zh: "飞机快要起飞了。",
                py: "Fēijī kuàiyào qǐfēi le.",
                vi: "Máy bay sắp cất cánh rồi.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 25,
    zh: "拼命",
    py: "pīnmìng",
    pos: ["副"],
    hanViet: "BÍNH MỆNH",
    vi: "liều mạng, hết sức, ra sức",
    en: "with all one’s might; desperately",
    usage: [
      {
        label: "Đi với động từ",
        items: [
          { zh: "拼命工作", py: "pīnmìng gōngzuò", vi: "làm việc hết sức" },
          { zh: "拼命学习", py: "pīnmìng xuéxí", vi: "học hết sức" },
          { zh: "拼命跑", py: "pīnmìng pǎo", vi: "chạy hết sức" },
        ],
      },
    ],
    examples: [
      {
        zh: "他拼命工作，想早点儿实现梦想。",
        py: "Tā pīnmìng gōngzuò, xiǎng zǎodiǎnr shíxiàn mèngxiǎng.",
        vi: "Anh ấy làm việc hết sức, muốn sớm thực hiện ước mơ.",
        hl: ["拼命工作"],
        added: true,
      },
      {
        zh: "为了考上大学，他拼命学习。",
        py: "Wèile kǎoshàng dàxué, tā pīnmìng xuéxí.",
        vi: "Để đỗ đại học, anh ấy học hết sức mình.",
        hl: ["拼命学习"],
        added: true,
      },
    ],
    notes: ["拼命 mạnh hơn 努力: dốc toàn lực, đôi khi đến mức quá sức."],
  },
  {
    id: 26,
    zh: "塞",
    py: "sāi",
    pos: ["动"],
    hanViet: "TẮC",
    vi: "nhét, tọng",
    en: "to fill in; to stuff",
    usage: [
      {
        label: "Tân ngữ / bổ ngữ đi kèm",
        items: [
          { zh: "塞衣服", py: "sāi yīfu", vi: "nhét quần áo" },
          { zh: "塞进去", py: "sāi jìnqù", vi: "nhét vào" },
          { zh: "往里塞", py: "wǎng lǐ sāi", vi: "nhét vào trong" },
          { zh: "塞满", py: "sāimǎn", vi: "nhét đầy" },
        ],
      },
    ],
    examples: [
      {
        zh: "他把衣服塞进了行李箱。",
        py: "Tā bǎ yīfu sāi jìn le xínglixiāng.",
        vi: "Anh ấy nhét quần áo vào vali.",
        hl: ["塞进"],
        added: true,
      },
      {
        zh: "妈妈拼命往我的包里塞吃的。",
        py: "Māma pīnmìng wǎng wǒ de bāo lǐ sāi chī de.",
        vi: "Mẹ ra sức nhét đồ ăn vào túi tôi.",
        hl: ["往", "塞"],
        added: true,
      },
    ],
    notes: [
      "Dễ nhầm với 赛 sài trong 比赛 bǐsài (trận đấu). 塞 còn có trong 塞车 sāichē (kẹt xe).",
    ],
  },
  {
    id: 27,
    zh: "离别",
    py: "líbié",
    pos: ["动"],
    hanViet: "LY BIỆT",
    vi: "li biệt, chia xa",
    en: "to leave; to depart",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "离别家乡", py: "líbié jiāxiāng", vi: "xa quê hương" },
          { zh: "离别亲人", py: "líbié qīnrén", vi: "xa người thân" },
        ],
      },
    ],
    examples: [
      {
        zh: "离别他已经很多年了。",
        py: "Líbié tā yǐjīng hěn duō nián le.",
        vi: "Đã xa anh ấy rất nhiều năm rồi.",
        hl: ["离别"],
        hlVi: ["xa"],
      },
      {
        zh: "离别家乡已经十年了。",
        py: "Líbié jiāxiāng yǐjīng shí nián le.",
        vi: "Rời xa quê hương đã mười năm rồi.",
        hl: ["离别"],
        added: true,
      },
    ],
    compare: [
      {
        title: "离别 vs 分开 vs 分手 vs 离开",
        points: [
          {
            zh: "离别",
            py: "líbié",
            desc: "Văn viết, chia xa người / nơi thân thuộc trong thời gian dài, giàu cảm xúc.",
          },
          {
            zh: "离开",
            py: "líkāi",
            desc: "Rời khỏi (nơi chốn / người), nghĩa thông thường, tân ngữ hay là địa điểm.",
            eg: [{ zh: "离开北京", py: "líkāi Běijīng", vi: "rời Bắc Kinh" }],
          },
          {
            zh: "分开",
            py: "fēnkāi",
            desc: "Tách ra (người hoặc vật cụ thể), không còn ở cùng nhau.",
            eg: [
              { zh: "把它们分开", py: "bǎ tāmen fēnkāi", vi: "tách chúng ra" },
            ],
          },
          {
            zh: "分手",
            py: "fēnshǒu",
            desc: "Chia tay: tách nhau ra ở nơi chia tay, hoặc người yêu chia tay.",
            eg: [
              {
                zh: "他们分手了。",
                py: "Tāmen fēnshǒu le.",
                vi: "Họ chia tay rồi.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 28,
    zh: "望",
    py: "wàng",
    pos: ["动"],
    hanViet: "VỌNG",
    vi: "nhìn, trông, ngắm (nhìn xa)",
    en: "to look at; to look over",
    usage: [
      {
        label: "Đi với tân ngữ / bổ ngữ",
        items: [
          { zh: "望着天空", py: "wàngzhe tiānkōng", vi: "nhìn lên bầu trời" },
          { zh: "登山望远", py: "dēng shān wàng yuǎn", vi: "lên núi ngắm xa" },
          {
            zh: "望向窗外",
            py: "wàng xiàng chuāng wài",
            vi: "nhìn ra ngoài cửa sổ",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "她望着天空，一句话也没说。",
        py: "Tā wàngzhe tiānkōng, yí jù huà yě méi shuō.",
        vi: "Cô ấy nhìn lên bầu trời, không nói một câu nào.",
        hl: ["望着天空"],
        added: true,
      },
    ],
    compare: [
      {
        title: "望 vs 看 vs 见",
        points: [
          {
            zh: "望",
            py: "wàng",
            desc: "Nhìn ra xa / hướng về phía xa; văn viết hơn. Còn nghĩa “mong” (希望).",
          },
          {
            zh: "看",
            py: "kàn",
            desc: "Nhìn / xem: nghĩa chung nhất, dùng hằng ngày.",
            eg: [{ zh: "看电视", py: "kàn diànshì", vi: "xem tivi" }],
          },
          {
            zh: "见",
            py: "jiàn",
            desc: "Thấy (là KẾT QUẢ của nhìn: 看见); cũng là “gặp” (见面).",
            eg: [{ zh: "看见", py: "kànjiàn", vi: "nhìn thấy" }],
          },
        ],
      },
    ],
  },
  {
    id: 29,
    zh: "挥",
    py: "huī",
    pos: ["动"],
    hanViet: "HUY",
    vi: "vẫy, vung",
    en: "to wave",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "挥手", py: "huī shǒu", vi: "vẫy tay" },
          {
            zh: "挥手告别",
            py: "huī shǒu gàobié",
            vi: "vẫy tay chào tạm biệt",
          },
        ],
      },
      {
        label: "Trạng ngữ đi kèm (cụm 挥手)",
        items: [
          { zh: "向他挥手", py: "xiàng tā huī shǒu", vi: "vẫy tay với anh ấy" },
          { zh: "朝我挥手", py: "cháo wǒ huī shǒu", vi: "vẫy tay về phía tôi" },
        ],
      },
    ],
    examples: [
      {
        zh: "他向我们挥手告别。",
        py: "Tā xiàng wǒmen huī shǒu gàobié.",
        vi: "Anh ấy vẫy tay chào tạm biệt chúng tôi.",
        hl: ["挥手告别"],
        added: true,
      },
      {
        zh: "妈妈站在门口向我挥手。",
        py: "Māma zhàn zài ménkǒu xiàng wǒ huī shǒu.",
        vi: "Mẹ đứng ở cửa vẫy tay với tôi.",
        hl: ["向我挥手"],
        added: true,
      },
    ],
  },
  {
    id: 30,
    zh: "眼泪",
    py: "yǎnlèi",
    pos: ["名"],
    hanViet: "NHÃN LỆ",
    vi: "nước mắt",
    en: "tear",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一滴眼泪", py: "yì dī yǎnlèi", vi: "một giọt nước mắt" },
          { zh: "两行眼泪", py: "liǎng háng yǎnlèi", vi: "hai hàng nước mắt" },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "流(下)眼泪", py: "liú(xià) yǎnlèi", vi: "rơi nước mắt" },
          { zh: "流泪", py: "liú lèi", vi: "rơi lệ" },
          { zh: "擦眼泪", py: "cā yǎnlèi", vi: "lau nước mắt" },
        ],
      },
    ],
    examples: [
      {
        zh: "她流下了眼泪。",
        py: "Tā liúxià le yǎnlèi.",
        vi: "Cô ấy rơi nước mắt.",
        hl: ["流下了眼泪"],
        added: true,
      },
      {
        zh: "他擦了擦眼泪。",
        py: "Tā cā le cā yǎnlèi.",
        vi: "Anh ấy lau nước mắt.",
        hl: ["擦了擦眼泪"],
        added: true,
      },
    ],
    notes: ["眼泪 = 泪. 泪 lèi thường nằm trong cụm: 流泪、泪水."],
  },
  {
    id: 31,
    zh: "恋恋不舍",
    py: "liànliàn-bùshě",
    pos: ["成语"],
    hanViet: "LUYẾN LUYẾN BẤT XẢ",
    vi: "lưu luyến không nỡ rời",
    en: "unwilling to part with",
    usage: [
      {
        label: "Trạng ngữ đi kèm (恋恋不舍地 + động từ)",
        items: [
          {
            zh: "恋恋不舍地离开",
            py: "liànliàn-bùshě de líkāi",
            vi: "lưu luyến rời đi",
          },
          {
            zh: "恋恋不舍地望着",
            py: "liànliàn-bùshě de wàngzhe",
            vi: "lưu luyến nhìn theo",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "他恋恋不舍，抱住她不放她走。",
        py: "Tā liànliàn-bùshě, bàozhù tā bú fàng tā zǒu.",
        vi: "Anh ấy lưu luyến không rời, ôm chặt cô ấy không cho cô ấy đi.",
        hl: ["恋恋不舍"],
        hlVi: ["lưu luyến không rời"],
      },
      {
        zh: "孩子恋恋不舍地离开了公园。",
        py: "Háizi liànliàn-bùshě de líkāi le gōngyuán.",
        vi: "Đứa trẻ lưu luyến rời khỏi công viên.",
        hl: ["恋恋不舍地离开"],
        added: true,
      },
    ],
  },
  {
    id: 32,
    zh: "嘱咐",
    py: "zhǔfù",
    pos: ["动"],
    hanViet: "CHÚC PHÓ",
    vi: "dặn dò, căn dặn",
    en: "to enjoin; to advise; to urge",
    usage: [
      {
        label: "Tân ngữ đi kèm (người + nội dung dặn)",
        items: [
          { zh: "嘱咐孩子", py: "zhǔfù háizi", vi: "dặn dò con" },
          {
            zh: "嘱咐他注意安全",
            py: "zhǔfù tā zhùyì ānquán",
            vi: "dặn anh ấy chú ý an toàn",
          },
          { zh: "再三嘱咐", py: "zàisān zhǔfù", vi: "dặn đi dặn lại" },
        ],
      },
    ],
    examples: [
      {
        zh: "爸妈嘱咐我好好生活。",
        py: "Bàmā zhǔfù wǒ hǎohāo shēnghuó.",
        vi: "Bố mẹ dặn tôi phải sống thật tốt.",
        hl: ["嘱咐"],
        hlVi: ["dặn"],
      },
      {
        zh: "临走的时候，妈妈再三嘱咐我要注意身体。",
        py: "Lín zǒu de shíhou, māma zàisān zhǔfù wǒ yào zhùyì shēntǐ.",
        vi: "Lúc sắp đi, mẹ dặn đi dặn lại tôi phải giữ gìn sức khỏe.",
        hl: ["再三嘱咐"],
        added: true,
      },
    ],
    compare: [
      {
        title: "嘱咐 vs 提醒",
        points: [
          {
            zh: "嘱咐",
            py: "zhǔfù",
            desc: "Dặn dò, căn dặn kỹ (thường người lớn / người thân dặn người nhỏ, nhất là trước lúc xa nhau); nội dung là việc nên làm.",
          },
          {
            zh: "提醒",
            py: "tíxǐng",
            desc: "Nhắc nhở để người ta chú ý, đừng quên; dùng được giữa mọi quan hệ, kể cả tự nhắc mình.",
            eg: [
              {
                zh: "老师提醒大家明天带课本。",
                py: "Lǎoshī tíxǐng dàjiā míngtiān dài kèběn.",
                vi: "Thầy nhắc mọi người mai mang sách.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 33,
    zh: "表达",
    py: "biǎodá",
    pos: ["动"],
    hanViet: "BIỂU ĐẠT",
    vi: "biểu đạt, diễn đạt, bày tỏ",
    en: "to express; to convey; to voice",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "表达思想", py: "biǎodá sīxiǎng", vi: "diễn đạt tư tưởng" },
          { zh: "表达态度", py: "biǎodá tàidù", vi: "bày tỏ thái độ" },
          { zh: "表达爱", py: "biǎodá ài", vi: "bày tỏ tình yêu" },
          { zh: "表达感情", py: "biǎodá gǎnqíng", vi: "bày tỏ tình cảm" },
          { zh: "表达能力", py: "biǎodá nénglì", vi: "khả năng diễn đạt" },
        ],
      },
    ],
    examples: [
      {
        zh: "他不会表达自己的感情。",
        py: "Tā bú huì biǎodá zìjǐ de gǎnqíng.",
        vi: "Anh ấy không biết bày tỏ tình cảm của mình.",
        hl: ["表达"],
        added: true,
      },
      {
        zh: "视频里，爸妈表达了对我的想念。",
        py: "Shìpín lǐ, bàmā biǎodá le duì wǒ de xiǎngniàn.",
        vi: "Trong video, bố mẹ bày tỏ nỗi nhớ dành cho tôi.",
        hl: ["表达"],
        added: true,
      },
    ],
    compare: [
      {
        title: "表达 vs 表示",
        points: [
          {
            zh: "表达",
            py: "biǎodá",
            desc: "Đưa điều trong lòng / trong đầu ra bằng lời hoặc chữ. Tân ngữ: 思想、态度、爱、能力…; chung với 表示: 感情、祝福、祝贺.",
          },
          {
            zh: "表示",
            py: "biǎoshì",
            desc: "Biểu thị thái độ / cảm xúc ở mức nhất định (hay mang tính xã giao): 感谢、同意、欢迎、理解、关心. Còn là danh từ “biểu hiện” và nghĩa “có nghĩa là”.",
          },
        ],
        examples: [
          {
            zh: "我们对你的帮助表示感谢。",
            py: "Wǒmen duì nǐ de bāngzhù biǎoshì gǎnxiè.",
            vi: "Chúng tôi xin cảm ơn sự giúp đỡ của bạn.",
            hl: ["表示感谢"],
            added: true,
          },
          {
            zh: "他对我一点表示都没有。",
            py: "Tā duì wǒ yì diǎn biǎoshì dōu méiyǒu.",
            vi: "Anh ấy chẳng có chút biểu hiện gì với tôi cả.",
            hl: ["表示"],
            added: true,
          },
          {
            zh: "红灯表示不能走。",
            py: "Hóngdēng biǎoshì bù néng zǒu.",
            vi: "Đèn đỏ có nghĩa là không được đi.",
            hl: ["表示"],
            added: true,
          },
        ],
      },
    ],
  },
  {
    id: 34,
    zh: "想念",
    py: "xiǎngniàn",
    pos: ["动"],
    hanViet: "TƯỞNG NIỆM",
    vi: "nhớ, nhớ nhung",
    en: "to miss",
    usage: [
      {
        label: "Tân ngữ đi kèm",
        items: [
          { zh: "想念着祖国", py: "xiǎngniànzhe zǔguó", vi: "nhớ về tổ quốc" },
          {
            zh: "想念着家乡",
            py: "xiǎngniànzhe jiāxiāng",
            vi: "nhớ về quê hương",
          },
          { zh: "想念家人", py: "xiǎngniàn jiārén", vi: "nhớ người nhà" },
        ],
      },
    ],
    examples: [
      {
        zh: "我很想念我的家人。",
        py: "Wǒ hěn xiǎngniàn wǒ de jiārén.",
        vi: "Tôi rất nhớ gia đình.",
        hl: ["想念"],
        added: true,
      },
      {
        zh: "他在国外想念着家乡。",
        py: "Tā zài guówài xiǎngniànzhe jiāxiāng.",
        vi: "Anh ấy ở nước ngoài nhớ về quê hương.",
        hl: ["想念着家乡"],
        added: true,
      },
    ],
    compare: [
      {
        title: "想念 vs 想 vs 思念",
        points: [
          {
            zh: "想念",
            py: "xiǎngniàn",
            desc: "Nhớ người / nơi đang xa; dùng được cả nói và viết, tân ngữ trực tiếp.",
          },
          {
            zh: "想",
            py: "xiǎng",
            desc: "Khẩu ngữ, nghĩa rộng nhất (nghĩ / muốn / nhớ).",
            eg: [{ zh: "我想你。", py: "Wǒ xiǎng nǐ.", vi: "Anh nhớ em." }],
          },
          {
            zh: "思念",
            py: "sīniàn",
            desc: "Nhớ thương da diết, văn chương, giàu cảm xúc; còn là danh từ “nỗi nhớ”.",
            eg: [
              {
                zh: "把思念积压在我心头",
                py: "bǎ sīniàn jīyā zài wǒ xīntóu",
                vi: "dồn nén nỗi nhớ trong lòng tôi",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 35,
    zh: "放心",
    py: "fàng xīn",
    pos: ["动"],
    hanViet: "PHÓNG TÂM",
    vi: "yên tâm",
    en: "to set one’s mind at rest",
    usage: [
      {
        label: "Trạng ngữ / cấu trúc đi kèm (động từ ly hợp)",
        items: [
          { zh: "你放心吧", py: "nǐ fàngxīn ba", vi: "bạn yên tâm đi" },
          { zh: "不放心", py: "bú fàngxīn", vi: "không yên tâm" },
          { zh: "让爸妈放心", py: "ràng bàmā fàngxīn", vi: "để bố mẹ yên tâm" },
          { zh: "对他放心", py: "duì tā fàngxīn", vi: "yên tâm về anh ấy" },
        ],
      },
    ],
    examples: [
      {
        zh: "你放心吧，我会照顾好自己的。",
        py: "Nǐ fàngxīn ba, wǒ huì zhàogù hǎo zìjǐ de.",
        vi: "Bạn yên tâm đi, tôi sẽ tự chăm sóc tốt bản thân.",
        hl: ["放心"],
        added: true,
      },
      {
        zh: "孩子一个人在国外，妈妈很不放心。",
        py: "Háizi yí ge rén zài guówài, māma hěn bú fàngxīn.",
        vi: "Con một mình ở nước ngoài, mẹ rất không yên tâm.",
        hl: ["不放心"],
        added: true,
      },
    ],
    related: [
      {
        label: "trái nghĩa",
        pos: ["动"],
        zh: "担心",
        py: "dānxīn",
        hanViet: "ĐAM TÂM",
        vi: "lo lắng",
        examples: [
          {
            zh: "妈妈很担心我。",
            py: "Māma hěn dānxīn wǒ.",
            vi: "Mẹ rất lo cho tôi.",
            hl: ["担心"],
            added: true,
          },
          {
            zh: "我担心他会迟到。",
            py: "Wǒ dānxīn tā huì chídào.",
            vi: "Tôi lo anh ấy sẽ đến muộn.",
            hl: ["担心"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "放心 là động từ ly hợp (động + tân), thường không mang tân ngữ trực tiếp: dùng 对…放心 / 让…放心. 担心 thì mang tân ngữ được: 担心孩子.",
    ],
  },
  {
    id: 36,
    zh: "逗",
    py: "dòu",
    pos: ["动"],
    hanViet: "ĐẬU",
    vi: "chọc, trêu, làm cho (cười)",
    en: "to provoke (laughter, etc.); to amuse",
    usage: [
      {
        label: "Tân ngữ / bổ ngữ đi kèm",
        items: [
          { zh: "逗孩子", py: "dòu háizi", vi: "chọc / dỗ trẻ con" },
          { zh: "逗笑", py: "dòuxiào", vi: "làm cho cười" },
          {
            zh: "把大家逗笑了",
            py: "bǎ dàjiā dòuxiào le",
            vi: "làm mọi người bật cười",
          },
          {
            zh: "逗得大家哈哈大笑",
            py: "dòu de dàjiā hāhā-dàxiào",
            vi: "chọc cho mọi người cười ha hả",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "他的话把大家逗笑了。",
        py: "Tā de huà bǎ dàjiā dòuxiào le.",
        vi: "Lời anh ấy khiến mọi người bật cười.",
        hl: ["逗笑"],
        added: true,
      },
      {
        zh: "爸爸逗得孩子哈哈大笑。",
        py: "Bàba dòu de háizi hāhā-dàxiào.",
        vi: "Bố chọc cho đứa trẻ cười ha hả.",
        hl: ["逗得", "哈哈大笑"],
        added: true,
      },
    ],
  },
  {
    id: 37,
    zh: "哈哈大笑",
    py: "hāhā-dàxiào",
    pos: ["成语"],
    hanViet: "HA HA ĐẠI TIẾU",
    vi: "cười ha hả",
    en: "to laugh",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "哈哈大笑起来", py: "hāhā-dàxiào qǐlái", vi: "bật cười ha hả" },
          {
            zh: "引得大家哈哈大笑",
            py: "yǐn de dàjiā hāhā-dàxiào",
            vi: "khiến mọi người cười ha hả",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "听了他的话，大家都哈哈大笑起来。",
        py: "Tīng le tā de huà, dàjiā dōu hāhā-dàxiào qǐlái.",
        vi: "Nghe lời anh ấy, mọi người đều cười phá lên.",
        hl: ["哈哈大笑起来"],
        added: true,
      },
      {
        zh: "他哈哈大笑，笑得肚子都疼了。",
        py: "Tā hāhā-dàxiào, xiào de dùzi dōu téng le.",
        vi: "Anh ấy cười ha hả, cười đến đau cả bụng.",
        hl: ["哈哈大笑"],
        added: true,
      },
    ],
  },
];

/* ---- 补充生词: từ bổ sung trong file docx của giáo viên ---- */
const SUPPLEMENT: Entry[] = [
  {
    id: "B1",
    zh: "戒指",
    py: "jièzhi",
    pos: ["名"],
    hanViet: "GIỚI CHỈ",
    vi: "nhẫn",
    en: "ring",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一枚戒指", py: "yì méi jièzhi", vi: "một chiếc nhẫn" },
          {
            zh: "一个戒指",
            py: "yí ge jièzhi",
            vi: "một chiếc nhẫn (khẩu ngữ)",
          },
        ],
      },
      {
        label: "Động từ đi kèm",
        items: [
          { zh: "戴戒指", py: "dài jièzhi", vi: "đeo nhẫn" },
          { zh: "买戒指", py: "mǎi jièzhi", vi: "mua nhẫn" },
          { zh: "结婚戒指", py: "jiéhūn jièzhi", vi: "nhẫn cưới" },
        ],
      },
    ],
    examples: [
      {
        zh: "他送了她一枚戒指。",
        py: "Tā sòng le tā yì méi jièzhi.",
        vi: "Anh ấy tặng cô ấy một chiếc nhẫn.",
        hl: ["一枚戒指"],
        added: true,
      },
      {
        zh: "戒指上刻着她的名字。",
        py: "Jièzhi shàng kè zhe tā de míngzi.",
        vi: "Trên nhẫn khắc tên cô ấy.",
        hl: ["刻着"],
        added: true,
      },
    ],
  },
  {
    id: "B2",
    zh: "刻",
    py: "kè",
    pos: ["动"],
    hanViet: "KHẮC",
    vi: "khắc, chạm",
    en: "to carve; to engrave",
    usage: [
      {
        label: "Tân ngữ / bổ ngữ đi kèm",
        items: [
          { zh: "刻字", py: "kè zì", vi: "khắc chữ" },
          { zh: "刻图章", py: "kè túzhāng", vi: "khắc con dấu" },
          { zh: "刻在……上", py: "kè zài… shang", vi: "khắc lên…" },
        ],
      },
    ],
    examples: [
      {
        zh: "他把我们的名字刻在了树上。",
        py: "Tā bǎ wǒmen de míngzi kè zài le shù shang.",
        vi: "Anh ấy khắc tên chúng tôi lên cây.",
        hl: ["刻在了树上"],
        added: true,
      },
    ],
    related: [
      {
        label: "刻 vs 印",
        pos: ["动"],
        zh: "印",
        py: "yìn",
        hanViet: "ẤN",
        vi: "in, đóng dấu",
        usage: [
          {
            label: "Tân ngữ đi kèm",
            items: [
              { zh: "印书", py: "yìn shū", vi: "in sách" },
              { zh: "印名片", py: "yìn míngpiàn", vi: "in danh thiếp" },
              { zh: "印上图案", py: "yìnshang tú’àn", vi: "in họa tiết lên" },
            ],
          },
        ],
        examples: [
          {
            zh: "这些书是在北京印的。",
            py: "Zhèxiē shū shì zài Běijīng yìn de.",
            vi: "Những cuốn sách này in ở Bắc Kinh.",
            hl: ["印"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "刻 = dùng dao / dụng cụ làm lõm xuống vật cứng (gỗ, đá, kim loại). 印 = dùng mực / máy ép lên giấy, vải… cho hiện chữ, hình.",
      "刻 còn là lượng từ 15 phút: 一刻钟 yí kèzhōng (15 phút).",
    ],
  },
  {
    id: "B3",
    zh: "鼓励",
    py: "gǔlì",
    pos: ["动"],
    hanViet: "CỔ LỆ",
    vi: "khuyến khích, động viên",
    en: "to encourage",
    usage: [
      {
        label: "Tân ngữ đi kèm (thường là người)",
        items: [
          { zh: "鼓励孩子", py: "gǔlì háizi", vi: "khuyến khích trẻ" },
          {
            zh: "鼓励他继续努力",
            py: "gǔlì tā jìxù nǔlì",
            vi: "động viên anh ấy tiếp tục cố gắng",
          },
          { zh: "受到鼓励", py: "shòudào gǔlì", vi: "được khích lệ" },
        ],
      },
    ],
    examples: [
      {
        zh: "老师经常鼓励我们多说汉语。",
        py: "Lǎoshī jīngcháng gǔlì wǒmen duō shuō Hànyǔ.",
        vi: "Thầy thường khuyến khích chúng tôi nói nhiều tiếng Hán.",
        hl: ["鼓励"],
        added: true,
      },
    ],
    related: [
      {
        label: "鼓励 vs 鼓舞",
        pos: ["动", "形"],
        zh: "鼓舞",
        py: "gǔwǔ",
        hanViet: "CỔ VŨ",
        vi: "làm phấn chấn, cổ vũ tinh thần",
        usage: [
          {
            label: "Tân ngữ / kết hợp",
            items: [
              {
                zh: "鼓舞士气",
                py: "gǔwǔ shìqì",
                vi: "nâng cao tinh thần, sĩ khí",
              },
              {
                zh: "鼓舞人心",
                py: "gǔwǔ rénxīn",
                vi: "làm lòng người phấn chấn",
              },
              {
                zh: "令人鼓舞",
                py: "lìng rén gǔwǔ",
                vi: "khiến người ta phấn chấn",
              },
            ],
          },
        ],
        examples: [
          {
            zh: "这个好消息鼓舞了大家。",
            py: "Zhège hǎo xiāoxi gǔwǔ le dàjiā.",
            vi: "Tin tốt này làm mọi người phấn chấn.",
            hl: ["鼓舞"],
            added: true,
          },
        ],
      },
    ],
    notes: [
      "鼓励 = dùng lời nói / hành động để người ta thêm tự tin, tiếp tục làm (tân ngữ là người). 鼓舞 = làm tinh thần phấn khởi (thường nhờ một sự việc, tin tức; tân ngữ hay là 士气、人心).",
    ],
  },
  {
    id: "B4",
    zh: "孤独",
    py: "gūdú",
    pos: ["形"],
    hanViet: "CÔ ĐỘC",
    vi: "cô độc, lẻ loi",
    en: "lonely; solitary",
    usage: [
      {
        label: "Kết hợp hay gặp",
        items: [
          { zh: "感到孤独", py: "gǎndào gūdú", vi: "cảm thấy cô độc" },
          { zh: "孤独的老人", py: "gūdú de lǎorén", vi: "người già cô độc" },
        ],
      },
    ],
    examples: [
      {
        zh: "一个人在国外，他常常觉得孤独。",
        py: "Yí ge rén zài guówài, tā chángcháng juéde gūdú.",
        vi: "Một mình ở nước ngoài, anh ấy thường thấy cô độc.",
        hl: ["孤独"],
        added: true,
      },
    ],
    related: [
      {
        label: "孤单",
        pos: ["形"],
        zh: "孤单",
        py: "gūdān",
        hanViet: "CÔ ĐƠN",
        vi: "cô đơn, đơn chiếc",
        examples: [
          {
            zh: "孩子们都走了，家里只剩下老人，很孤单。",
            py: "Háizimen dōu zǒu le, jiālǐ zhǐ shèngxià lǎorén, hěn gūdān.",
            vi: "Con cái đều đi rồi, trong nhà chỉ còn người già, rất cô đơn.",
            hl: ["孤单"],
            added: true,
          },
        ],
      },
      {
        label: "寂寞",
        pos: ["形"],
        zh: "寂寞",
        py: "jìmò",
        hanViet: "TỊCH MỊCH",
        vi: "cô quạnh, trống vắng, buồn chán",
        examples: [
          {
            zh: "周末没有朋友来，我觉得很寂寞。",
            py: "Zhōumò méiyǒu péngyou lái, wǒ juéde hěn jìmò.",
            vi: "Cuối tuần không có bạn đến, tôi thấy rất trống vắng.",
            hl: ["寂寞"],
            added: true,
          },
        ],
      },
    ],
    compare: [
      {
        title: "孤独 vs 孤单 vs 寂寞",
        points: [
          {
            zh: "孤独",
            py: "gūdú",
            desc: "Một mình, lẻ loi; mức sâu, nặng nề hơn, có thể là hoàn cảnh lẫn cảm giác.",
          },
          {
            zh: "孤单",
            py: "gūdān",
            desc: "Đơn chiếc, ít người thân / bầu bạn; khẩu ngữ, nhẹ hơn 孤独.",
          },
          {
            zh: "寂寞",
            py: "jìmò",
            desc: "Cảm giác trống vắng, buồn tẻ vì thiếu người / thiếu việc để làm.",
          },
        ],
      },
    ],
  },
  {
    id: "B5",
    zh: "后悔",
    py: "hòuhuǐ",
    pos: ["动"],
    hanViet: "HẬU HỐI",
    vi: "hối hận, hối tiếc",
    en: "to regret",
    usage: [
      {
        label: "Đi với động từ / mệnh đề",
        items: [
          {
            zh: "后悔没有听……",
            py: "hòuhuǐ méiyǒu tīng…",
            vi: "hối hận vì không nghe…",
          },
          { zh: "很后悔", py: "hěn hòuhuǐ", vi: "rất hối hận" },
          { zh: "不后悔", py: "bú hòuhuǐ", vi: "không hối hận" },
        ],
      },
    ],
    examples: [
      {
        zh: "我很后悔没有听爸妈的话。",
        py: "Wǒ hěn hòuhuǐ méiyǒu tīng bàmā de huà.",
        vi: "Tôi rất hối hận vì không nghe lời bố mẹ.",
        hl: ["后悔"],
        added: true,
      },
      {
        zh: "我不后悔来国外学习。",
        py: "Wǒ bú hòuhuǐ lái guówài xuéxí.",
        vi: "Tôi không hối hận vì đã ra nước ngoài học.",
        hl: ["不后悔"],
        added: true,
      },
    ],
  },
  {
    id: "B6",
    zh: "落",
    py: "luò / là",
    pos: ["动"],
    hanViet: "LẠC",
    vi: "luò: rơi, rụng · là: bỏ quên",
    en: "to fall; to leave behind",
    usage: [
      {
        label: "luò: rơi, rụng",
        items: [
          { zh: "落在地上", py: "luò zài dìshang", vi: "rơi xuống đất" },
          { zh: "太阳落山", py: "tàiyáng luòshān", vi: "mặt trời lặn" },
        ],
      },
      {
        label: "là: bỏ quên",
        items: [
          { zh: "落在……上", py: "là zài… shang", vi: "bỏ quên ở…" },
          { zh: "落东西", py: "là dōngxi", vi: "bỏ quên đồ" },
        ],
      },
    ],
    examples: [
      {
        zh: "树叶落在了地上。",
        py: "Shùyè luò zài le dìshang.",
        vi: "Lá cây rơi xuống đất.",
        hl: ["落在了地上"],
        hlPy: ["luò"],
      },
      {
        zh: "我昨天把书包落在出租车上了。",
        py: "Wǒ zuótiān bǎ shūbāo là zài chūzūchē shang le.",
        vi: "Hôm qua tôi bỏ quên cặp trên taxi.",
        hl: ["落在出租车上"],
        hlPy: ["là"],
        hlVi: ["bỏ quên"],
      },
    ],
  },
];

/* ---- Cấu trúc / mẫu câu ghi trong docx ---- */
const PATTERNS: Entry[] = [
  {
    id: "C1",
    zh: "如果……（的话）……就……",
    py: "rúguǒ… (dehuà)… jiù…",
    pos: ["连"],
    hanViet: "NHƯ QUẢ",
    vi: "nếu … thì …",
    en: "if … then …",
    usage: [
      {
        label: "Ba dạng tương đương",
        items: [
          {
            zh: "如果……（的话），……就……",
            py: "rúguǒ… (dehuà), … jiù…",
            vi: "nếu … thì … (chung, hơi văn viết)",
          },
          {
            zh: "要是……（的话），……就……",
            py: "yàoshi… (dehuà), … jiù…",
            vi: "nếu … thì … (khẩu ngữ)",
          },
          {
            zh: "……的话，……就……",
            py: "… dehuà, … jiù…",
            vi: "nếu … thì … (chỉ dùng 的话 ở cuối vế giả thiết)",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "如果你有时间的话，就来看看我吧。",
        py: "Rúguǒ nǐ yǒu shíjiān dehuà, jiù lái kànkan wǒ ba.",
        vi: "Nếu bạn có thời gian thì đến thăm tôi nhé.",
        hl: ["如果", "的话", "就"],
        added: true,
      },
      {
        zh: "要是爸妈不同意的话，我就不去了。",
        py: "Yàoshi bàmā bù tóngyì dehuà, wǒ jiù bú qù le.",
        vi: "Nếu bố mẹ không đồng ý thì tôi sẽ không đi nữa.",
        hl: ["要是", "的话", "就"],
        added: true,
      },
      {
        zh: "去国外的话，我就得自己做饭。",
        py: "Qù guówài dehuà, wǒ jiù děi zìjǐ zuòfàn.",
        vi: "Nếu ra nước ngoài thì tôi phải tự nấu cơm.",
        hl: ["的话", "就"],
        added: true,
      },
    ],
  },
  {
    id: "C2",
    zh: "一下子 / 一下儿",
    py: "yíxiàzi / yíxiàr",
    pos: ["副", "量"],
    vi: "bỗng chốc, đột nhiên / một chút, một cái",
    en: "all at once / (action measure) a bit, a stroke",
    examples: [
      {
        zh: "你一下子长这么高了！",
        py: "Nǐ yíxiàzi zhǎng zhème gāo le!",
        vi: "Em bỗng chốc cao thế này rồi!",
        hl: ["一下子"],
        hlVi: ["bỗng chốc"],
      },
      {
        zh: "他一下子从楼梯上摔下来了。",
        py: "Tā yíxiàzi cóng lóutī shang shuāi xiàlái le.",
        vi: "Anh ấy bỗng ngã từ cầu thang xuống.",
        hl: ["一下子"],
        hlVi: ["bỗng"],
      },
    ],
    compare: [
      {
        title: "一下子 vs 一下儿",
        points: [
          {
            zh: "一下子",
            py: "yíxiàzi",
            desc: "PHÓ TỪ: trong chốc lát, đột nhiên; nhấn vào sự thay đổi nhanh / bất ngờ.",
          },
          {
            zh: "一下儿",
            py: "yíxiàr",
            desc: "LƯỢNG TỪ ĐỘNG TÁC: “một chút, một cái”; làm động tác nhẹ hơn hoặc đếm số lần (下).",
          },
        ],
        examples: [
          {
            zh: "等我一下儿。",
            py: "Děng wǒ yíxiàr.",
            vi: "Đợi tôi một chút.",
            hl: ["一下儿"],
            hlVi: ["một chút"],
          },
          {
            zh: "打我两下。",
            py: "Dǎ wǒ liǎng xià.",
            vi: "Đánh tôi hai cái.",
            hl: ["两下"],
            hlVi: ["hai cái"],
          },
        ],
      },
    ],
  },
  {
    id: "C3",
    zh: "一大笔钱",
    py: "yí dà bǐ qián",
    pos: ["名"],
    vi: "một khoản tiền lớn",
    en: "a large sum of money",
    usage: [
      {
        label: "Lượng từ",
        items: [
          { zh: "一笔钱", py: "yì bǐ qián", vi: "một khoản tiền" },
          {
            zh: "一大笔钱",
            py: "yí dà bǐ qián",
            vi: "một khoản tiền lớn (大 nhấn mạnh)",
          },
        ],
      },
    ],
    examples: [
      {
        zh: "他借了一大笔钱。",
        py: "Tā jiè le yí dà bǐ qián.",
        vi: "Anh ấy đã vay một khoản tiền lớn.",
        hl: ["一大笔钱"],
        hlVi: ["một khoản tiền lớn"],
        added: true,
      },
      {
        zh: "去国外留学要花一大笔钱。",
        py: "Qù guówài liúxué yào huā yí dà bǐ qián.",
        vi: "Du học nước ngoài phải tốn một khoản tiền lớn.",
        hl: ["一大笔钱"],
        added: true,
      },
    ],
    notes: [
      "笔 bǐ là lượng từ của khoản tiền; chèn 大 giữa 一 và 笔 để nhấn mạnh số lượng lớn.",
    ],
  },
];

const SECTIONS: Section[] = [
  {
    title: "生词",
    subtitle: "37 từ trong sách (file PDF)",
    entries: MAIN,
    jumpLinks: true,
  },
  {
    title: "补充生词 · Từ bổ sung",
    subtitle: "Từ ghi thêm trong file docx của giáo viên",
    entries: SUPPLEMENT,
  },
  {
    title: "Cấu trúc & mẫu câu bổ sung",
    subtitle: "Các điểm ngữ pháp ngắn ghi trong file docx",
    entries: PATTERNS,
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
};

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Tô xanh các từ/cụm trong `words` (nếu có) bên trong `text`. */
function Hl({
  text,
  words,
  chinese = false,
}: {
  text: string;
  words?: string[];
  chinese?: boolean;
}) {
  const list = (words ?? []).filter(Boolean);
  if (!list.length) return <ZhText text={text} />;
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
          <span
            key={i}
            className={
              chinese || /[\u3400-\u9fff]/.test(part)
                ? "text-sky-700"
                : "font-semibold text-sky-700"
            }
          >
            <ZhText text={part} />
          </span>
        ) : (
          <React.Fragment key={i}>
            <ZhText text={part} />
          </React.Fragment>
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
      <div className="ztai__zh text-xl">（{pos.join("/")}）</div>
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
        <Hl text={s.zh} words={s.hl} chinese />
      </div>
      <div className="text-sm text-slate-500">
        <Hl text={s.py} words={s.hlPy} />
      </div>
      <div className="text-base text-slate-800">
        <Hl text={s.vi} words={s.hlVi} />
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
          <span className="mb-1 inline-block rounded bg-sky-100 px-2 py-0.5 text-xs text-sky-800">
            <ZhText text={g.label} />
          </span>
          {/* <ul className="grid gap-x-6 gap-y-0.5 sm:grid-cols-2"> */}
          <ul>
            {g.items.map((it, ii) => (
              <li key={ii} className="leading-snug">
                <span className="text-xl">
                  <ZhText text={it.zh} />{" "}
                </span>
                {it.py && (
                  <span className="text-sm text-slate-500">
                    <ZhText text={it.py} />
                  </span>
                )}{" "}
                <span className="text-sm text-slate-700">
                  — <ZhText text={it.vi} />
                </span>
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
          So sánh · <ZhText text={c.title} />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {c.points.map((p, i) => (
            <div
              key={i}
              className="rounded border border-amber-200 bg-white px-3 py-2"
            >
              <div>
                <span className="text-lg">
                  <ZhText text={p.zh} />
                </span>{" "}
                {p.py && (
                  <span className="text-sm text-slate-500">
                    <ZhText text={p.py} />
                  </span>
                )}
              </div>
              <div className="text-sm leading-snug text-slate-800">
                <ZhText text={p.desc} />
              </div>
              {p.eg?.map((e, ei) => (
                <div key={ei} className="mt-1 text-sm leading-snug">
                  <span className="text-lg">
                    <ZhText text={e.zh} />{" "}
                  </span>
                  <span className="text-slate-500">
                    <ZhText text={e.py} />
                  </span>{" "}
                  <span className="text-slate-700">
                    — <ZhText text={e.vi} />
                  </span>
                </div>
              ))}
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
          <ZhText text={e.hanViet ?? ""} />
        </td>
        <td className={cell}>
          <div className="text-lg">
            <ZhText text={e.vi} />
          </div>
          {e.en && (
            <div className="text-sm text-slate-500">
              <ZhText text={e.en} />
            </div>
          )}
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
          <td className={`${cell} text-xl`}>
            <ZhText text={r.label} />
          </td>
          <td className={cell}>
            <PosTag pos={r.pos} />
          </td>
          <td className={cell}>
            <div className="text-xl">
              <ZhText text={r.zh} />{" "}
              {r.hanViet && (
                <span className="text-lg uppercase">
                  <ZhText text={r.hanViet} />
                </span>
              )}
            </div>
            {r.py && (
              <div className="text-sm text-slate-500">
                <ZhText text={r.py} />
              </div>
            )}
            {r.vi && (
              <div className="text-sm text-slate-700">
                <ZhText text={r.vi} />
              </div>
            )}
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
              <div key={i}>
                📌 <ZhText text={n} />
              </div>
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

export default function VocabBai1() {
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
                    src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/01_tuvung.mp3"
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
        </section>
      ))}
    </main>
  );
}
