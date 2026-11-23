"use client";

import { Fragment, useState } from "react";

type Sentence = {
  chinese: string;
  pinyin: string;
  vietnamese: string;
};

const text: Sentence[] = [
  {
    chinese: "罗兰：",
    pinyin: "Luó Lán:",
    vietnamese: "Gửi Roland:",
  },
  {
    chinese: "你好。我已经到了泰山，我是爬上来的，没有坐缆车。",
    pinyin:
      "Nǐ hǎo. Wǒ yǐjīng dào le Tài Shān, wǒ shì pá shànglái de, méiyǒu zuò lǎnchē.",
    vietnamese:
      "Xin chào. Mình đã đến Thái Sơn rồi, mình leo lên đấy, không đi cáp treo.",
  },
  {
    chinese: "登上泰山，真有“一览众山小”的感觉。",
    pinyin: "Dēng shàng Tài Shān, zhēn yǒu “yì lǎn zhòng shān xiǎo” de gǎnjué.",
    vietnamese:
      "Leo lên đỉnh Thái Sơn, đúng là có cảm giác “đứng trên đỉnh núi cao nhìn các núi non khác đều nhỏ bé”.",
  },
  {
    chinese:
      "我还在山上住了一夜，等第二天早上看日出，能站在泰山上看日出，我很高兴。",
    pinyin:
      "Wǒ hái zài shān shang zhù le yí yè, děng dì-èr tiān zǎoshang kàn rìchū, néng zhàn zài Tài Shān shang kàn rìchū, wǒ hěn gāoxìng.",
    vietnamese:
      "Mình còn ở lại trên núi một đêm, đợi sáng hôm sau xem mặt trời mọc; được đứng trên Thái Sơn ngắm bình minh, mình rất vui.",
  },
  {
    chinese:
      "当我们看到太阳一下子跳出来的时候，都兴奋地大声叫了起来，真是美极了。",
    pinyin:
      "Dāng wǒmen kàndào tàiyáng yíxiàzi tiào chūlái de shíhou, dōu xīngfèn de dàshēng jiào le qǐlái, zhēn shì měi jí le.",
    vietnamese:
      "Khi chúng mình thấy mặt trời bỗng nhô lên, ai cũng phấn khích reo hò ầm ĩ, thật sự là đẹp tuyệt vời.",
  },
  {
    chinese: "下午，我又从泰山上走下来了。",
    pinyin: "Xiàwǔ, wǒ yòu cóng Tài Shān shang zǒu xiàlái le.",
    vietnamese: "Buổi chiều, mình lại đi từ trên núi xuống.",
  },
  {
    chinese: "明天我要去曲阜参观孔庙和孔林。",
    pinyin: "Míngtiān wǒ yào qù Qūfù cānguān Kǒngmiào hé Kǒnglín.",
    vietnamese:
      "Ngày mai mình sẽ đi Khúc Phụ tham quan Khổng Miếu và Khổng Lâm.",
  },
  {
    chinese: "到那儿以后再给你介绍曲阜的情况。",
    pinyin: "Dào nàr yǐhòu zài gěi nǐ jièshào Qūfù de qíngkuàng.",
    vietnamese: "Đến đó rồi mình sẽ kể cho bạn tình hình ở Khúc Phụ.",
  },
  {
    chinese: "这次来旅行我很愉快，山东大学的朋友很热情，给了我很多帮助。",
    pinyin:
      "Zhè cì lái lǚxíng wǒ hěn yúkuài, Shāndōng Dàxué de péngyou hěn rèqíng, gěi le wǒ hěn duō bāngzhù.",
    vietnamese:
      "Chuyến đi này mình rất vui, bạn ở Đại học Sơn Đông rất nhiệt tình, giúp mình nhiều.",
  },
  {
    chinese: "这是我用手机照的泰山日出，发给你看看。",
    pinyin: "Zhè shì wǒ yòng shǒujī zhào de Tài Shān rìchū, fā gěi nǐ kànkan.",
    vietnamese:
      "Đây là ảnh bình minh Thái Sơn mình chụp bằng điện thoại, gửi bạn xem.",
  },
  {
    chinese: "祝好",
    pinyin: "Zhù hǎo",
    vietnamese: "Chúc bạn mọi điều tốt đẹp.",
  },
  {
    chinese: "丹尼丝　7月28日",
    pinyin: "Dānnísī, qī yuè èrshíbā rì",
    vietnamese: "Denise, ngày 28 tháng 7.",
  },
];

const grammar = [
  {
    title: "Bổ ngữ xu hướng: V + 上/出/下 + 来",
    examples: "爬上来 · 跳出来 · 走下来 · 叫了起来",
    explanation:
      "Hướng di chuyển so với người nói: 来 = về phía người nói. Người viết đang ở trên núi → 爬上来; mặt trời nhảy ra → 跳出来. 登上 = leo lên tới nơi.",
  },
  {
    title: "是……的 (nhấn mạnh cách thức)",
    examples: "我是爬上来的 · 这是我用手机照的",
    explanation:
      "Sự việc đã xảy ra, nhấn mạnh cách thức/công cụ: 是 + cách thức + V + 的.",
  },
  {
    title: "没有 + V",
    examples: "没有坐缆车",
    explanation: "Phủ định hành động đã/không xảy ra: 没有 + V, không thêm 了.",
  },
  {
    title: "真有……的感觉",
    examples: "真有“一览众山小”的感觉",
    explanation:
      "有 + định ngữ + 的 + 感觉: có cảm giác như… (trích thơ Đỗ Phủ).",
  },
  {
    title: "在 + nơi chốn + V + 了 + thời lượng",
    examples: "我还在山上住了一夜",
    explanation:
      "Nơi chốn trước động từ; thời lượng (一夜) đứng sau 了. 还 = còn, thêm nữa.",
  },
  {
    title: "等 · 能 + V",
    examples: "等第二天早上看日出 · 能站在泰山上看日出",
    explanation:
      "等 = đợi tới lúc; 能 = có thể/được (điều kiện cho phép). 站在 + nơi chốn.",
  },
  {
    title: "当……的时候 · 一下子",
    examples: "当我们看到太阳一下子跳出来的时候",
    explanation: "当…的时候 = khi…; 一下子 = bỗng chốc, trong chớp mắt.",
  },
  {
    title: "Trạng ngữ + 地 + V",
    examples: "兴奋地大声叫了起来",
    explanation:
      "Tính từ + 地 đứng trước động từ để chỉ cách thức; 大声 = to tiếng.",
  },
  {
    title: "V + 起来 (bắt đầu)",
    examples: "叫了起来",
    explanation: "起来 chỉ hành động bắt đầu và tiếp diễn: bật kêu lên.",
  },
  {
    title: "真是 + adj + 极了",
    examples: "真是美极了",
    explanation: "Adj + 极了 = cực kỳ, vô cùng (cảm thán).",
  },
  {
    title: "又 · 从 + nơi chốn + V",
    examples: "我又从泰山上走下来了",
    explanation: "又 = lại (việc đã xảy ra lặp lại); 从…V = từ đâu mà đi.",
  },
  {
    title: "要 + V · 到……以后再……",
    examples: "明天我要去曲阜参观 · 到那儿以后再给你介绍",
    explanation: "要 = sẽ (dự định); …以后再… = sau khi… rồi mới/sẽ…",
  },
  {
    title: "给 + người + V · V给",
    examples: "给你介绍 · 给了我很多帮助 · 发给你看看",
    explanation:
      "给 + người đứng trước V; V + 给 = V cho ai; 看看 = lặp động từ (thử xem, nhẹ nhàng).",
  },
];

type ExerciseQuestion = {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const fillQuestions: ExerciseQuestion[] = [
  {
    prompt: "我是爬____的，没有坐缆车。",
    choices: ["上来", "上去", "下来"],
    answer: 0,
    explanation: "爬上来: người viết đang ở trên núi.",
  },
  {
    prompt: "太阳一下子跳____了。",
    choices: ["下去", "出来", "进去"],
    answer: 1,
    explanation: "跳出来: mặt trời nhảy ra khỏi đường chân trời.",
  },
  {
    prompt: "真是美____了。",
    choices: ["极", "得", "着"],
    answer: 0,
    explanation: "美极了 = đẹp vô cùng.",
  },
  {
    prompt: "下午，我又从泰山上走____了。(đang ở chân núi)",
    choices: ["上来", "下来", "出去"],
    answer: 1,
    explanation: "走下来: từ trên xuống, về phía người nói.",
  },
  {
    prompt: "大家兴奋地大声叫____。",
    choices: ["起来", "下来", "出来"],
    answer: 0,
    explanation: "叫起来 = bật kêu lên.",
  },
];

const correctionQuestions: ExerciseQuestion[] = [
  {
    prompt: "我爬上泰山来了的。",
    choices: ["我是爬上来的。", "我爬上来是的。", "我是爬来上的。"],
    answer: 0,
    explanation: "是……的 + 爬上来.",
  },
  {
    prompt: "我没有坐了缆车。",
    choices: ["我没有坐缆车。", "我不有坐缆车了。", "我没坐了缆车。"],
    answer: 0,
    explanation: "没有 + V, không dùng 了.",
  },
  {
    prompt: "太阳一下子出跳来。",
    choices: ["太阳一下子跳出来。", "太阳一下子出来跳。", "太阳跳一下子出来。"],
    answer: 0,
    explanation: "V + 出 + 来: 跳出来.",
  },
  {
    prompt: "他们都兴奋大声叫了起来。",
    choices: [
      "他们都兴奋地大声叫了起来。",
      "他们都兴奋得大声叫了起来。",
      "他们兴奋都地大声叫起了来。",
    ],
    answer: 0,
    explanation: "Tính từ + 地 + V làm trạng ngữ.",
  },
  {
    prompt: "我住在山上了一夜。",
    choices: ["我在山上住了一夜。", "我住了在山上一夜。", "在我山上住了一夜。"],
    answer: 0,
    explanation: "在 + nơi chốn + V + 了 + thời lượng.",
  },
];

const orderSentences = [
  ["我", "是", "爬上来", "的"],
  ["我", "还", "在山上", "住了", "一夜"],
  ["太阳", "一下子", "跳", "出来"],
  ["我", "用手机", "照", "泰山日出"],
  ["到那儿以后", "再", "给你", "介绍", "曲阜的情况"],
];

type DialogueLine = {
  speaker: "A" | "B";
  chinese: string;
  pinyin: string;
  vietnamese: string;
};

const dialogues: {
  title: string;
  subtitle: string;
  context?: string;
  contextAfter?: number;
  lines: DialogueLine[];
  vocabulary: [string, string, string][];
}[] = [
  {
    title: "叫快递",
    subtitle: "Jiào kuàidì · Gọi công ty chuyển phát nhanh",
    context: "（打电话） Dǎ diànhuà · Gọi điện thoại",
    lines: [
      {
        speaker: "A",
        chinese: "喂，快递公司吗？",
        pinyin: "Wèi, kuàidì gōngsī ma?",
        vietnamese: "A lô, là công ty chuyển phát nhanh phải không?",
      },
      { speaker: "B", chinese: "是！", pinyin: "Shì!", vietnamese: "Vâng ạ!" },
      {
        speaker: "A",
        chinese: "我这里有个快件，您能不能过来取一下儿？",
        pinyin: "Wǒ zhèlǐ yǒu ge kuàijiàn, nín néng bu néng guòlái qǔ yíxiàr?",
        vietnamese:
          "Chỗ tôi có một kiện hàng chuyển phát nhanh, anh/chị có thể qua lấy một chút được không?",
      },
      {
        speaker: "B",
        chinese: "您是哪里？",
        pinyin: "Nín shì nǎlǐ?",
        vietnamese: "Anh/chị ở đâu ạ?",
      },
      {
        speaker: "A",
        chinese: "留学生公寓 1208 号。",
        pinyin: "Liúxuéshēng gōngyù yāo èr líng bā hào.",
        vietnamese: "Ký túc xá lưu học sinh, phòng 1208.",
      },
      {
        speaker: "B",
        chinese: "好！我马上过去。",
        pinyin: "Hǎo! Wǒ mǎshàng guòqù.",
        vietnamese: "Được! Tôi qua ngay.",
      },
      {
        speaker: "B",
        chinese: "这里边是什么？",
        pinyin: "Zhè lǐbian shì shénme?",
        vietnamese: "Bên trong này là gì vậy?",
      },
      {
        speaker: "A",
        chinese: "一本书，一块丝头巾。",
        pinyin: "Yì běn shū, yí kuài sītóujīn.",
        vietnamese: "Một quyển sách, một chiếc khăn lụa.",
      },
      {
        speaker: "B",
        chinese: "送到哪里？",
        pinyin: "Sòng dào nǎlǐ?",
        vietnamese: "Gửi đến đâu?",
      },
      {
        speaker: "A",
        chinese: "外交公寓。",
        pinyin: "Wàijiāo gōngyù.",
        vietnamese: "Chung cư ngoại giao.",
      },
      {
        speaker: "B",
        chinese: "请填一下儿这张单子。",
        pinyin: "Qǐng tián yíxiàr zhè zhāng dānzi.",
        vietnamese: "Xin hãy điền vào tờ đơn này.",
      },
      {
        speaker: "A",
        chinese: "这样填可以吗？",
        pinyin: "Zhèyàng tián kěyǐ ma?",
        vietnamese: "Điền như thế này được không?",
      },
      { speaker: "B", chinese: "可以。", pinyin: "Kěyǐ.", vietnamese: "Được." },
      {
        speaker: "A",
        chinese: "今天能送到吗？",
        pinyin: "Jīntiān néng sòngdào ma?",
        vietnamese: "Hôm nay có giao tới được không?",
      },
      {
        speaker: "B",
        chinese: "没问题，肯定送到。",
        pinyin: "Méi wèntí, kěndìng sòngdào.",
        vietnamese: "Không vấn đề gì, chắc chắn giao tới.",
      },
      {
        speaker: "A",
        chinese: "多少钱？",
        pinyin: "Duōshao qián?",
        vietnamese: "Bao nhiêu tiền?",
      },
      {
        speaker: "B",
        chinese: "10 块。",
        pinyin: "Shí kuài.",
        vietnamese: "10 tệ.",
      },
    ],
    contextAfter: 6,
    vocabulary: [
      ["快递公司", "kuàidì gōngsī", "công ty chuyển phát nhanh"],
      ["快件", "kuàijiàn", "kiện hàng chuyển phát nhanh"],
      ["公寓", "gōngyù", "chung cư"],
      ["丝头巾", "sītóujīn", "khăn lụa"],
      ["外交", "wàijiāo", "ngoại giao"],
      ["填", "tián", "điền"],
      ["单子", "dānzi", "đơn, phiếu"],
    ],
  },
  {
    title: "送礼物",
    subtitle: "Sòng lǐwù · Tặng quà",
    lines: [
      {
        speaker: "A",
        chinese: "大卫，我从中国给你带回了一件小礼物。",
        pinyin: "Dàwèi, wǒ cóng Zhōngguó gěi nǐ dàihuí le yí jiàn xiǎo lǐwù.",
        vietnamese:
          "David, mình từ Trung Quốc mang về cho bạn một món quà nhỏ.",
      },
      {
        speaker: "B",
        chinese: "什么礼物？",
        pinyin: "Shénme lǐwù?",
        vietnamese: "Quà gì vậy?",
      },
      {
        speaker: "A",
        chinese: "你打开盒子，拿出来看看。",
        pinyin: "Nǐ dǎkāi hézi, ná chūlái kànkan.",
        vietnamese: "Bạn mở hộp ra, lấy ra xem thử đi.",
      },
      {
        speaker: "B",
        chinese: "啊，小熊猫！",
        pinyin: "Ā, xiǎo xióngmāo!",
        vietnamese: "Ồ, gấu trúc nhỏ!",
      },
      {
        speaker: "A",
        chinese: "喜欢吗？",
        pinyin: "Xǐhuan ma?",
        vietnamese: "Bạn có thích không?",
      },
      {
        speaker: "B",
        chinese: "喜欢！谢谢叔叔！",
        pinyin: "Xǐhuan! Xièxie shūshu!",
        vietnamese: "Thích! Cảm ơn chú!",
      },
    ],
    vocabulary: [
      ["盒子", "hézi", "cái hộp"],
      ["叔叔", "shūshu", "chú"],
    ],
  },
];

const tabItems = [
  { id: "text", label: "Bài khoá" },
  { id: "grammar", label: "Ngữ pháp" },
  { id: "exercises", label: "Bài tập" },
  { id: "dialogue", label: "Hội thoại giao tiếp" },
] as const;

type TabId = (typeof tabItems)[number]["id"];
type ExerciseId = "fill" | "correct" | "order";

const exerciseItems: { id: ExerciseId; label: string }[] = [
  { id: "fill", label: "1. Điền V + bổ ngữ" },
  { id: "correct", label: "2. Sửa câu" },
  { id: "order", label: "3. Sắp xếp" },
];

const questionSets: Record<Exclude<ExerciseId, "order">, ExerciseQuestion[]> = {
  fill: fillQuestions,
  correct: correctionQuestions,
};

export default function BaiKhoaPhu() {
  const [activeTab, setActiveTab] = useState<TabId>("text");
  const [activeExercise, setActiveExercise] = useState<ExerciseId>("fill");
  const [expandedSentences, setExpandedSentences] = useState<Set<number>>(
    new Set(),
  );
  const [showPinyin, setShowPinyin] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [orderAnswers, setOrderAnswers] = useState<Record<number, number[]>>(
    {},
  );
  const [orderResults, setOrderResults] = useState<Record<number, boolean>>({});

  const toggleSentence = (index: number) => {
    setExpandedSentences((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const selectExercise = (id: ExerciseId) => {
    setActiveExercise(id);
    setAnswers({});
    setOrderAnswers({});
    setOrderResults({});
  };

  const restartQuestions = () => setAnswers({});
  const currentQuestions =
    activeExercise === "order" ? [] : questionSets[activeExercise];
  const completedCount = Object.keys(answers).length;
  const score = currentQuestions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0,
  );

  return (
    <main className="mx-auto overflow-hidden text-slate-800">
      {/* <p className="mx-4 text-right text-sm text-gray-500">
        Bài khoá phụ - Bài 14 - trang 49
      </p> */}

      <div
        role="tablist"
        aria-label="Nội dung bài khoá phụ"
        className="flex overflow-x-auto border-b border-slate-200"
      >
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`min-w-max flex-1 border-b-[3px] px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              activeTab === tab.id
                ? "border-sky-600 font-semibold text-sky-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "text" && (
        <section
          id="panel-text"
          role="tabpanel"
          aria-labelledby="tab-text"
          className="p-4"
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              aria-pressed={showPinyin}
              onClick={() => setShowPinyin((value) => !value)}
              className={`rounded-full border px-3 py-1 text-sm ${
                showPinyin
                  ? "border-sky-600 bg-sky-50 text-sky-700"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              Pinyin
            </button>
            <button
              type="button"
              aria-pressed={showMeaning}
              onClick={() => setShowMeaning((value) => !value)}
              className={`rounded-full border px-3 py-1 text-sm ${
                showMeaning
                  ? "border-sky-600 bg-sky-50 text-sky-700"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              Nghĩa
            </button>
            <p className="text-sm text-sky-700">
              Chạm vào câu để xem pinyin + nghĩa.
            </p>
          </div>

          <div className="divide-y divide-dashed divide-slate-200">
            {text.map((sentence, index) => {
              const isOpen = expandedSentences.has(index);
              return (
                <button
                  key={index}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleSentence(index)}
                  className="block w-full py-2 text-left hover:bg-amber-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <span className="ztai__zh block text-2xl leading-relaxed">
                    {sentence.chinese}
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

          <div className="mt-4 space-y-2 text-sm text-sky-700">
            <p>一览众山小: muôn dặm nước non thu cả vào trong tầm mắt</p>
            <p>住 zhù khác với 往 wǎng</p>
            <p>
              孔林: bia mộ của Khổng Tử và gia tộc, nghĩa trang gia tộc họ Khổng
            </p>
          </div>
        </section>
      )}

      {activeTab === "grammar" && (
        <section
          id="panel-grammar"
          role="tabpanel"
          aria-labelledby="tab-grammar"
          className="space-y-3 p-4"
        >
          {grammar.map((item) => (
            <article
              key={item.title}
              className="rounded-sm border border-slate-200 p-3"
            >
              <h2 className="font-semibold text-sky-700">{item.title}</h2>
              <p className="mt-1 text-lg">{item.examples}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {item.explanation}
              </p>
            </article>
          ))}
        </section>
      )}

      {activeTab === "exercises" && (
        <section
          id="panel-exercises"
          role="tabpanel"
          aria-labelledby="tab-exercises"
          className="p-4"
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {exerciseItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={activeExercise === item.id}
                onClick={() => selectExercise(item.id)}
                className={`rounded-full border px-3 py-1.5 text-sm ${
                  activeExercise === item.id
                    ? "border-sky-600 bg-sky-50 text-sky-700"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {activeExercise !== "order" ? (
            <>
              <div className="space-y-4">
                {currentQuestions.map((question, questionIndex) => {
                  const selectedAnswer = answers[questionIndex];
                  return (
                    <article
                      key={question.prompt}
                      className="border-b border-dashed border-slate-200 pb-4"
                    >
                      <p className="mb-2 text-lg">
                        {questionIndex + 1}. {question.prompt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {question.choices.map((choice, choiceIndex) => {
                          const isAnswerShown = selectedAnswer !== undefined;
                          const isCorrect = choiceIndex === question.answer;
                          const isSelected = selectedAnswer === choiceIndex;
                          return (
                            <button
                              key={choice}
                              type="button"
                              disabled={isAnswerShown}
                              onClick={() =>
                                setAnswers((current) => ({
                                  ...current,
                                  [questionIndex]: choiceIndex,
                                }))
                              }
                              className={`rounded-lg border px-3 py-2 text-left disabled:cursor-default ${
                                isAnswerShown && isCorrect
                                  ? "border-green-700 bg-green-50 text-green-800"
                                  : isAnswerShown && isSelected
                                    ? "border-red-700 bg-red-50 text-red-800"
                                    : "border-slate-200 hover:bg-slate-50"
                              }`}
                            >
                              {choice}
                            </button>
                          );
                        })}
                      </div>
                      {selectedAnswer !== undefined && (
                        <p
                          className={`mt-2 text-sm ${
                            selectedAnswer === question.answer
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {selectedAnswer === question.answer ? "✓ " : "✗ "}
                          {question.explanation}
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
              {completedCount === currentQuestions.length && (
                <p className="mt-3 font-semibold">
                  Điểm: {score}/{currentQuestions.length}
                </p>
              )}
              <button
                type="button"
                onClick={restartQuestions}
                className="mt-3 rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
              >
                Làm lại
              </button>
            </>
          ) : (
            <>
              <div className="space-y-4">
                {orderSentences.map((sentence, questionIndex) => {
                  const answer = orderAnswers[questionIndex] ?? [];
                  const isChecked = orderResults[questionIndex] !== undefined;
                  const isCorrect = orderResults[questionIndex] === true;
                  const available = sentence
                    .map((word, wordIndex) => ({ word, wordIndex }))
                    .filter(({ wordIndex }) => !answer.includes(wordIndex));

                  const addWord = (wordIndex: number) => {
                    setOrderAnswers((current) => ({
                      ...current,
                      [questionIndex]: [
                        ...(current[questionIndex] ?? []),
                        wordIndex,
                      ],
                    }));
                    setOrderResults((current) => {
                      const next = { ...current };
                      delete next[questionIndex];
                      return next;
                    });
                  };
                  const removeWord = (position: number) =>
                    setOrderAnswers((current) => ({
                      ...current,
                      [questionIndex]: answer.filter(
                        (_, index) => index !== position,
                      ),
                    }));

                  return (
                    <article
                      key={questionIndex}
                      className="border-b border-dashed border-slate-200 pb-4"
                    >
                      <p className="mb-2 text-sm text-slate-500">
                        {questionIndex + 1}. Chạm các mảnh để ghép thành câu:
                      </p>
                      <div className="mb-2 flex min-h-11 flex-wrap gap-2 rounded-lg border border-dashed border-slate-300 p-2">
                        {answer.map((wordIndex, position) => (
                          <button
                            key={`${wordIndex}-${position}`}
                            type="button"
                            onClick={() => removeWord(position)}
                            className="rounded-lg border border-sky-300 bg-sky-50 px-3 py-1.5"
                            aria-label={`Bỏ ${sentence[wordIndex]}`}
                          >
                            {sentence[wordIndex]}
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {available.map(({ word, wordIndex }) => (
                          <button
                            key={wordIndex}
                            type="button"
                            onClick={() => addWord(wordIndex)}
                            className="rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
                          >
                            {word}
                          </button>
                        ))}
                      </div>
                      <div className="mt-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const correct =
                              answer.length === sentence.length &&
                              answer.every(
                                (wordIndex, index) => wordIndex === index,
                              );
                            setOrderResults((current) => ({
                              ...current,
                              [questionIndex]: correct,
                            }));
                          }}
                          className="rounded-lg bg-sky-700 px-4 py-2 text-sm text-white hover:bg-sky-800"
                        >
                          Kiểm tra
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setOrderAnswers((current) => ({
                              ...current,
                              [questionIndex]: [],
                            }));
                            setOrderResults((current) => {
                              const next = { ...current };
                              delete next[questionIndex];
                              return next;
                            });
                          }}
                          className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
                        >
                          Xoá
                        </button>
                      </div>
                      {isChecked && (
                        <p
                          className={`mt-2 text-sm ${
                            isCorrect ? "text-green-700" : "text-red-700"
                          }`}
                        >
                          {isCorrect
                            ? `✓ Đúng: ${sentence.join("")}`
                            : `✗ Chưa đúng, thử lại. Gợi ý: ${sentence.join(" ")}`}
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}

      {activeTab === "dialogue" && (
        <section
          id="panel-dialogue"
          role="tabpanel"
          aria-labelledby="tab-dialogue"
          className="p-4"
        >
          <header className="mb-2 text-center">
            <p className="text-2xl font-bold">
              交际会话{" "}
              <span className="font-normal text-stone-500">Jiāojì huìhuà</span>
            </p>
            <p className="text-stone-600">Hội thoại giao tiếp</p>
          </header>
          <div className="space-y-10">
            {dialogues.map((dialogue, dialogueIndex) => (
              <article key={dialogue.title}>
                <h2 className="text-xl font-semibold">
                  ({dialogueIndex + 1}) {dialogue.title}
                </h2>
                <p className="text-sm text-stone-500">{dialogue.subtitle}</p>
                {dialogue.context && (
                  <p className="my-4 rounded-md bg-stone-100 px-3 py-1.5 text-sm text-stone-700">
                    {dialogue.context}
                  </p>
                )}
                <div className="space-y-3">
                  {dialogue.lines.map((line, lineIndex) => (
                    <Fragment key={`${line.chinese}-${lineIndex}`}>
                      {dialogue.contextAfter === lineIndex && (
                        <p
                          key={`context-${dialogueIndex}-${lineIndex}`}
                          className="rounded-md bg-stone-100 px-3 py-1.5 text-sm text-stone-700"
                        >
                          （留学生公寓门口） Liúxuéshēng gōngyù ménkǒu · Trước
                          cửa tòa ký túc xá dành cho lưu học sinh
                        </p>
                      )}
                      <div className="flex gap-3">
                        <span
                          className={`w-6 shrink-0 font-bold ${
                            line.speaker === "A"
                              ? "text-sky-700"
                              : "text-rose-700"
                          }`}
                        >
                          {line.speaker}
                        </span>
                        <div>
                          <p className="ztai__zh text-2xl">{line.chinese}</p>
                          <p className="text-sm text-sky-700">{line.pinyin}</p>
                          <p className="text-sm text-stone-600">
                            {line.vietnamese}
                          </p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="mt-6 rounded-md border border-stone-200 p-4 text-sm">
                  <h3 className="mb-2 font-semibold">Từ mới</h3>
                  <ul className="space-y-1 text-stone-700">
                    {dialogue.vocabulary.map(([word, pinyin, meaning]) => (
                      <li key={word}>
                        {word} <span className="text-sky-700">{pinyin}</span>:{" "}
                        {meaning}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
