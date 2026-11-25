export type GrammarGroup =
  "continue" | "negative" | "question" | "serial" | "together";

export type GrammarSentence = {
  group: GrammarGroup;
  zh: string;
  py: string;
  vi: string;
  /** Giải thích trong ngoặc của sách (nếu có) */
  note?: string;
  /** Các thành phần để làm bài sắp xếp câu */
  tokens: string[];
};

export const grammarSentences: GrammarSentence[] = [
  {
    group: "continue",
    zh: "同学们走着，说着，笑着，可热闹啦。",
    py: "Tóngxuémen zǒuzhe, shuōzhe, xiàozhe, kě rènao la.",
    vi: "Các bạn học vừa đi vừa nói vừa cười, náo nhiệt lắm.",
    note: "Mô tả trạng thái động tác đang tiến hành và kéo dài",
    tokens: ["同学们", "走着", "说着", "笑着", "可", "热闹", "啦"],
  },
  {
    group: "continue",
    zh: "他正往墙上贴着红双喜字。",
    py: "Tā zhèng wǎng qiáng shang tiēzhe hóng shuāng xǐ zì.",
    vi: "Anh ấy đang dán chữ song hỷ đỏ lên tường.",
    note: "Động tác “贴” đang tiến hành và kéo dài",
    tokens: ["他", "正", "往", "墙上", "贴着", "红双喜字"],
  },
  {
    group: "continue",
    zh: "墙上贴着红双喜字。",
    py: "Qiáng shang tiēzhe hóng shuāng xǐ zì.",
    vi: "Trên tường dán chữ song hỷ đỏ.",
    note: "Sau khi “贴” xong, chữ song hỷ đỏ ở trạng thái “đang được dán”",
    tokens: ["墙上", "贴着", "红双喜字"],
  },
  {
    group: "continue",
    zh: "她正在里面穿着衣服呢，请等一会儿。",
    py: "Tā zhèngzài lǐmiàn chuānzhe yīfu ne, qǐng děng yíhuìr.",
    vi: "Cô ấy đang mặc quần áo ở bên trong, xin đợi một lát.",
    note: "Động tác “穿” đang tiến hành và kéo dài",
    tokens: ["她", "正在", "里面", "穿着", "衣服", "呢", "请", "等", "一会儿"],
  },
  {
    group: "continue",
    zh: "她穿着一件红西服。",
    py: "Tā chuānzhe yí jiàn hóng xīfú.",
    vi: "Cô ấy mặc một bộ vest đỏ.",
    note: "Sau khi “穿” xong, bộ vest đỏ ở trạng thái “đang mặc”",
    tokens: ["她", "穿着", "一件", "红西服"],
  },
  {
    group: "negative",
    zh: "老师没在前面坐着，他站着呢。",
    py: "Lǎoshī méi zài qiánmiàn zuòzhe, tā zhànzhe ne.",
    vi: "Thầy giáo không ngồi ở phía trước, thầy đang đứng.",
    tokens: ["老师", "没", "在", "前面", "坐着", "他", "站着", "呢"],
  },
  {
    group: "negative",
    zh: "教室的门没开着。",
    py: "Jiàoshì de mén méi kāizhe.",
    vi: "Cửa lớp học không mở.",
    tokens: ["教室", "的", "门", "没", "开着"],
  },
  {
    group: "negative",
    zh: "书上没写着名字，不知道是谁的书。",
    py: "Shū shang méi xiězhe míngzi, bù zhīdào shì shéi de shū.",
    vi: "Trên sách không viết tên, không biết là sách của ai.",
    tokens: ["书上", "没", "写着", "名字", "不知道", "是", "谁", "的", "书"],
  },
  {
    group: "question",
    zh: "门开着没有？",
    py: "Mén kāizhe méiyǒu?",
    vi: "Cửa có đang mở không?",
    tokens: ["门", "开着", "没有"],
  },
  {
    group: "question",
    zh: "墙上挂着地图没有？",
    py: "Qiáng shang guàzhe dìtú méiyǒu?",
    vi: "Trên tường có treo bản đồ không?",
    tokens: ["墙上", "挂着", "地图", "没有"],
  },
  {
    group: "serial",
    zh: "她正在前边站着讲话呢。",
    py: "Tā zhèngzài qiánbian zhànzhe jiǎnghuà ne.",
    vi: "Cô ấy đang đứng ở phía trước phát biểu.",
    tokens: ["她", "正在", "前边", "站着", "讲话", "呢"],
  },
  {
    group: "serial",
    zh: "她笑着对我说：“欢迎！欢迎！”",
    py: "Tā xiàozhe duì wǒ shuō: “Huānyíng! Huānyíng!”",
    vi: "Cô ấy cười nói với tôi: “Hoan nghênh! Hoan nghênh!”",
    tokens: ["她", "笑着", "对", "我", "说", "欢迎", "欢迎"],
  },
  {
    group: "serial",
    zh: "那里离这儿不远，我们走着去吧。",
    py: "Nàlǐ lí zhèr bù yuǎn, wǒmen zǒuzhe qù ba.",
    vi: "Chỗ đó cách đây không xa, chúng ta đi bộ đi nhé.",
    tokens: ["那里", "离", "这儿", "不远", "我们", "走着", "去", "吧"],
  },
  {
    group: "together",
    zh: "里边正上着课呢。",
    py: "Lǐbian zhèng shàngzhe kè ne.",
    vi: "Bên trong đang học.",
    tokens: ["里边", "正", "上着", "课", "呢"],
  },
  {
    group: "together",
    zh: "她来时，我正在躺着看书呢。",
    py: "Tā lái shí, wǒ zhèngzài tǎngzhe kàn shū ne.",
    vi: "Lúc cô ấy đến, tôi đang nằm đọc sách.",
    tokens: ["她", "来", "时", "我", "正在", "躺着", "看", "书", "呢"],
  },
];
