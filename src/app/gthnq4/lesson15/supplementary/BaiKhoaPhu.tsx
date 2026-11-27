"use client";

import { useEffect, useState, type ReactNode } from "react";

/* ───────────────────────── Types & helpers ───────────────────────── */

type TabId = "a" | "g" | "x" | "d";
type Sentence = [zh: string, pinyin: string, vi: string];
type Grammar = [title: string, example: string, note: string];
type ChoiceData = [
  question: string,
  options: string[],
  correctIndex: number,
  note: string,
];

const zhFont = {
  fontFamily:
    'KaiTi, STKaiti, "PingFang SC", "Songti SC", SimSun, "Noto Serif CJK SC", "Noto Serif SC", serif',
};

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Renders  segments as red text (đáp án các chỗ trống). */
function Marked({ text }: { text: string }) {
  return (
    <>
      {text.split(/(<b>.*?<\/b>)/g).map((part, i) =>
        part.startsWith("<b>") ? (
          <span
            key={i}
            className="mx-0.5 rounded bg-yellow-50 px-1 text-sky-700"
          >
            {part.slice(3, -4)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm transition-colors ${
        on
          ? "border-stone-800 bg-stone-800 text-white"
          : "border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
      }`}
    >
      {children}
    </button>
  );
}

/* ───────────────────────────── Data ───────────────────────────── */

const T1: Sentence[] = [
  [
    "王老师已经好几天没有<b>给</b>我们上课了，因为他生病住院了。",
    "Wáng lǎoshī yǐjīng hǎo jǐ tiān méiyǒu gěi wǒmen shàngkè le, yīnwèi tā shēngbìng zhùyuàn le.",
    "Thầy Vương đã mấy ngày rồi không dạy chúng tôi, vì thầy bị bệnh nhập viện.",
  ],
  [
    "老师住院以后，我们班的学生都去医院看<b>过</b>他。",
    "Lǎoshī zhùyuàn yǐhòu, wǒmen bān de xuésheng dōu qù yīyuàn kàn guo tā.",
    "Sau khi thầy nhập viện, học sinh lớp chúng tôi đều đã đến bệnh viện thăm thầy.",
  ],
  [
    "我们都希望老师能早点儿好，因为我们觉得他是个好老师，对我们就像对自己的儿女一样。",
    "Wǒmen dōu xīwàng lǎoshī néng zǎo diǎnr hǎo, yīnwèi wǒmen juéde tā shì ge hǎo lǎoshī, duì wǒmen jiù xiàng duì zìjǐ de érnǚ yíyàng.",
    "Chúng tôi đều mong thầy sớm khỏe, vì thấy thầy là thầy giáo tốt, đối với chúng tôi như con ruột.",
  ],
  [
    "今天早上，我<b>刚</b>走进教室，就看见王老师在讲台旁边站<b>着</b>。",
    "Jīntiān zǎoshang, wǒ gāng zǒujìn jiàoshì, jiù kànjiàn Wáng lǎoshī zài jiǎngtái pángbiān zhàn zhe.",
    "Sáng nay, tôi vừa bước vào lớp thì thấy thầy Vương đang đứng cạnh bục giảng.",
  ],
  [
    "我高兴<b>地</b>向老师问了一声好。",
    "Wǒ gāoxìng de xiàng lǎoshī wèn le yì shēng hǎo.",
    "Tôi vui mừng chào thầy một tiếng.",
  ],
  [
    "我问：“老师，您什么时候出院的？”",
    "Wǒ wèn: “Lǎoshī, nín shénme shíhou chūyuàn de?”",
    "Tôi hỏi: “Thầy ơi, thầy xuất viện khi nào ạ?”",
  ],
  [
    "“我前天出的院。听说你也病了，好<b>了</b>吗？”",
    "“Wǒ qiántiān chū de yuàn. Tīngshuō nǐ yě bìng le, hǎo le ma?”",
    "“Thầy xuất viện hôm kia. Nghe nói em cũng bị bệnh, khỏi chưa?”",
  ],
  [
    "“好了。老师，您要保重身体！”“谢谢你！”",
    "“Hǎo le. Lǎoshī, nín yào bǎozhòng shēntǐ!” “Xièxie nǐ!”",
    "“Khỏi rồi ạ. Thầy nhớ giữ gìn sức khỏe!” “Cảm ơn em!”",
  ],
  [
    "这时，同学们都走进教室<b>来</b>了，大家看到王老师又能给我们上课了，都很高兴。",
    "Zhèshí, tóngxuémen dōu zǒujìn jiàoshì lái le, dàjiā kàndào Wáng lǎoshī yòu néng gěi wǒmen shàngkè le, dōu hěn gāoxìng.",
    "Lúc này các bạn đều vào lớp rồi, mọi người thấy thầy lại dạy được thì đều rất vui.",
  ],
  [
    "老师也高兴地和大家说<b>着</b>话，问每个同学的情况。",
    "Lǎoshī yě gāoxìng de hé dàjiā shuō zhe huà, wèn měi ge tóngxué de qíngkuàng.",
    "Thầy cũng vui vẻ vừa trò chuyện với mọi người vừa hỏi thăm từng bạn.",
  ],
  [
    "我们都知道王老师刚出院，身体还不太好。上课铃响了。",
    "Wǒmen dōu zhīdào Wáng lǎoshī gāng chūyuàn, shēntǐ hái bú tài hǎo. Shàngkè líng xiǎng le.",
    "Chúng tôi đều biết thầy vừa xuất viện, sức khỏe còn chưa tốt. Chuông vào học đã reo.",
  ],
  [
    "大家一起大声地说：“老师好！”王老师笑<b>着</b>点了点头，也对我们说：“同学们好！”",
    "Dàjiā yìqǐ dàshēng de shuō: “Lǎoshī hǎo!” Wáng lǎoshī xiào zhe diǎn le diǎn tóu, yě duì wǒmen shuō: “Tóngxuémen hǎo!”",
    "Mọi người cùng nói to: “Chào thầy!” Thầy Vương mỉm cười gật đầu, cũng nói với chúng tôi: “Chào các em!”",
  ],
  [
    "老师拿起书要开始讲课了。山本搬了一把椅子，走到老师面前，说：“老师，今天请您坐<b>着</b>讲吧。”",
    "Lǎoshī ná qǐ shū yào kāishǐ jiǎngkè le. Shānběn bān le yì bǎ yǐzi, zǒu dào lǎoshī miànqián, shuō: “Lǎoshī, jīntiān qǐng nín zuò zhe jiǎng ba.”",
    "Thầy cầm sách lên chuẩn bị giảng. Yamamoto bê một chiếc ghế, đi đến trước mặt thầy, nói: “Thầy ơi, hôm nay mời thầy ngồi giảng ạ.”",
  ],
  [
    "王老师说：“谢谢，我不累，我不习惯坐着上课。”王老师没有坐。",
    "Wáng lǎoshī shuō: “Xièxie, wǒ bú lèi, wǒ bù xíguàn zuò zhe shàngkè.” Wáng lǎoshī méiyǒu zuò.",
    "Thầy Vương nói: “Cảm ơn, thầy không mệt, thầy không quen ngồi dạy.” Thầy không ngồi.",
  ],
  [
    "“老师，请您坐下讲吧！”这时，班长带着全班同学一起大声地说。",
    "“Lǎoshī, qǐng nín zuò xià jiǎng ba!” Zhèshí, bānzhǎng dài zhe quán bān tóngxué yìqǐ dàshēng de shuō.",
    "“Thầy ơi, mời thầy ngồi xuống giảng ạ!” Lúc này, lớp trưởng dẫn cả lớp cùng nói to.",
  ],
  [
    "王老师有点儿激动地看着我们说：“谢谢大家！谢谢同学们！”",
    "Wáng lǎoshī yǒudiǎnr jīdòng de kàn zhe wǒmen shuō: “Xièxie dàjiā! Xièxie tóngxuémen!”",
    "Thầy Vương hơi xúc động nhìn chúng tôi nói: “Cảm ơn mọi người! Cảm ơn các em!”",
  ],
];

const G: Grammar[] = [
  [
    "Bổ ngữ xu hướng đơn: V + 进/起/下…",
    "走进教室 · 拿起书 · 坐下讲吧",
    "进 = vào, 起 = lên (nhấc lên), 下 = xuống (ngồi xuống). Chỉ hướng của hành động.",
  ],
  [
    "Bổ ngữ xu hướng kép + tân ngữ nơi chốn",
    "同学们都走进教室来了",
    "Tân ngữ chỉ nơi chốn đứng GIỮA: V + 进 + nơi chốn + 来. Không nói 走进来教室.",
  ],
  [
    "Bổ ngữ kết quả: V + 见/到",
    "看见王老师 · 看到王老师又能上课了 · 走到老师面前",
    "见/到 = kết quả đã đạt được (thấy, tới nơi). 走到 + nơi chốn: đi tới đâu.",
  ],
  [
    "Động lượng bổ ngữ",
    "问了一声好 · 点了点头",
    "Số lần/lượng của hành động: V + 了 + 一声/一下. 点了点头: lặp động từ nhẹ nhàng.",
  ],
  [
    "着 – trạng thái đang tồn tại",
    "王老师在讲台旁边站着",
    "V + 着 = duy trì trạng thái. Dạng 在 + nơi chốn + V着 mô tả ai đang ở tư thế nào.",
  ],
  [
    "V1着 + V2 (V1 là cách thức)",
    "笑着点了点头 · 带着全班同学…说 · 看着我们说",
    "V1着 cho biết trạng thái/cách thức đi kèm khi làm V2: cười mà gật đầu, nhìn mà nói.",
  ],
  [
    "V + 着 + tân ngữ (hành động kéo dài)",
    "和大家说着话 · 我不习惯坐着上课",
    "说着话 = đang nói chuyện (kéo dài); 坐着上课 = ngồi mà dạy (tư thế khi làm việc).",
  ],
  [
    "So sánh 坐着 và 坐下",
    "请您坐着讲吧 / 请您坐下讲吧",
    "坐着 = ở trạng thái ngồi; 坐下 = động tác ngồi xuống (bổ ngữ xu hướng). 没有坐 phủ định hành động, không nói 没有坐着了.",
  ],
  [
    "Lưu ý: 了 sau V ≠ 着",
    "问了一声好 / 站着",
    "了 = hoàn thành; 着 = đang duy trì trạng thái. Không dùng 了 và 着 cùng lúc để nhấn trạng thái: không nói 站了着.",
  ],
];

const E1: ChoiceData[] = [
  [
    "我刚____教室，就看见王老师。",
    ["走进", "走着", "走过"],
    0,
    "走进 = bổ ngữ xu hướng: bước vào.",
  ],
  [
    "同学们都走进教室____了。",
    ["来", "着", "起"],
    0,
    "走进 + nơi chốn + 来 (tân ngữ nơi chốn đứng giữa).",
  ],
  [
    "王老师在讲台旁边站____。",
    ["着", "了", "起来"],
    0,
    "站着: trạng thái đứng.",
  ],
  [
    "王老师笑____点了点头。",
    ["着", "过", "下"],
    0,
    "笑着 + V2: cười mà gật đầu.",
  ],
  [
    "老师不习惯坐____上课。",
    ["着", "下", "起"],
    0,
    "坐着上课: ngồi trong khi dạy (tư thế).",
  ],
  [
    "老师，请您坐____吧！(mời ngồi xuống)",
    ["下", "着", "过"],
    0,
    "坐下 = động tác ngồi xuống.",
  ],
];

const E2: ChoiceData[] = [
  [
    "老师在讲台旁边着站。",
    ["老师在讲台旁边站着。", "老师在讲台旁边站了着。", "老师着在讲台旁边站。"],
    0,
    "着 đứng ngay sau động từ: 站着.",
  ],
  [
    "同学们都走进来教室了。",
    [
      "同学们都走进教室来了。",
      "同学们都进走教室来了。",
      "同学们都走进教室了来。",
    ],
    0,
    "Tân ngữ nơi chốn đứng giữa: 走进教室来.",
  ],
  [
    "王老师笑点了点头着。",
    ["王老师笑着点了点头。", "王老师着笑点了点头。", "王老师笑点着了点头。"],
    0,
    "V1着 + V2: 笑着点头.",
  ],
  [
    "我不习惯坐了着上课。",
    ["我不习惯坐着上课。", "我不习惯坐着了上课。", "我不习惯着坐上课。"],
    0,
    "Không dùng 了 chen vào V着.",
  ],
  [
    "我问了好一声老师。",
    ["我向老师问了一声好。", "我问了老师好一声。", "我老师问了一声好。"],
    0,
    "Động lượng bổ ngữ: 问了一声好.",
  ],
];

const E3: string[][] = [
  ["王老师", "在讲台旁边", "站着"],
  ["同学们", "都", "走进教室", "来了"],
  ["王老师", "笑着", "点了点头"],
  ["我", "不习惯", "坐着", "上课"],
  ["班长", "带着", "全班同学", "一起", "大声地说"],
];

/** 打听 dialogue: [speaker, 中文, pinyin, tiếng Việt] */
const DIALOGUE: [string, string, string, string][] = [
  [
    "A",
    "请问，您看没看见一个姑娘（gūniang, girl）从这儿过去？",
    "Qǐngwèn, nín kàn méi kànjiàn yí ge gūniang cóng zhèr guòqù?",
    "Xin hỏi, ông/bà có thấy một cô gái đi qua đây không?",
  ],
  [
    "B",
    "什么姑娘？长得什么样？",
    "Shénme gūniang? Zhǎng de shénme yàng?",
    "Cô gái nào? Trông cô ấy như thế nào?",
  ],
  [
    "A",
    "身高一米六左右，留着长发，穿着一件白色的上衣，戴着一副眼镜儿。",
    "Shēngāo yì mǐ liù zuǒyòu, liú zhe cháng fà, chuān zhe yí jiàn báisè de shàngyī, dài zhe yí fù yǎnjìngr.",
    "Cao khoảng 1 mét 6, để tóc dài, mặc một chiếc áo màu trắng, đeo một cặp kính.",
  ],
  ["B", "看见了。", "Kànjiàn le.", "Có thấy."],
  ["A", "她往哪儿走了？", "Tā wǎng nǎr zǒu le?", "Cô ấy đi về hướng nào rồi?"],
  [
    "B",
    "从这儿下山去了。",
    "Cóng zhèr xià shān qù le.",
    "Đi xuống núi từ đây rồi.",
  ],
  [
    "A",
    "大概走多长时间了？",
    "Dàgài zǒu duō cháng shíjiān le?",
    "Đi được khoảng bao lâu rồi?",
  ],
  ["B", "二十多分钟了。", "Èrshí duō fēnzhōng le.", "Hơn hai mươi phút rồi."],
  [
    "A",
    "只她一个人吗？",
    "Zhǐ tā yí ge rén ma?",
    "Chỉ có một mình cô ấy thôi sao?",
  ],
  ["B", "对。", "Duì.", "Đúng vậy."],
  [
    "A",
    "就是她。我们也快点儿下去吧。谢谢您了！",
    "Jiù shì tā. Wǒmen yě kuài diǎnr xiàqù ba. Xièxie nín le!",
    "Chính là cô ấy. Chúng ta cũng nhanh chóng đi xuống thôi. Cảm ơn ông/bà!",
  ],
  ["B", "不客气！", "Bú kèqi!", "Không có gì!"],
];

/** Từ vựng: [中文, pinyin, tiếng Việt] */
const VOCAB: [string, string, string][] = [
  ["打听", "dǎtīng", "hỏi thăm,打听 tin tức"],
  ["请问", "qǐngwèn", "xin hỏi"],
  ["姑娘", "gūniang", "cô gái"],
  ["长得什么样", "zhǎng de shénme yàng", "trông như thế nào"],
  ["身高", "shēngāo", "chiều cao"],
  ["左右", "zuǒyòu", "khoảng, chừng"],
  ["留着长发", "liú zhe cháng fà", "để tóc dài"],
  ["穿着", "chuān zhe", "mặc (đang mặc)"],
  ["白色的上衣", "báisè de shàngyī", "áo màu trắng"],
  ["戴着一副眼镜儿", "dài zhe yí fù yǎnjìngr", "đeo một cặp kính"],
  ["往哪儿走", "wǎng nǎr zǒu", "đi về hướng nào"],
  ["下山", "xià shān", "xuống núi"],
  ["大概", "dàgài", "khoảng, đại khái"],
  ["多长", "duō cháng", "bao lâu"],
  ["分钟", "fēnzhōng", "phút"],
  ["就是她", "jiù shì tā", "chính là cô ấy"],
  ["快点儿", "kuài diǎnr", "nhanh lên"],
  ["不客气", "bú kèqi", "không có gì / đừng khách sáo"],
];

/* ─────────────────────────── Tab: Bài khoá ─────────────────────────── */

function ReadingTab() {
  const [showP, setShowP] = useState(false);
  const [showV, setShowV] = useState(false);
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div>
      <div className="mb-3 flex gap-2">
        <Chip on={showP} onClick={() => setShowP((v) => !v)}>
          Pinyin
        </Chip>
        <Chip on={showV} onClick={() => setShowV((v) => !v)}>
          Nghĩa
        </Chip>
      </div>

      <ul className="space-y-0">
        {T1.map(([zh, py, vi], i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="block w-full px-2 py-2 text-left transition-colors hover:bg-stone-50"
            >
              <span
                className="block text-[22px] leading-relaxed"
                style={zhFont}
              >
                <Marked text={zh} />
              </span>
              {(showP || open.has(i)) && (
                <span className="text-light mt-1 block text-[0.9rem] leading-snug text-gray-400">
                  {py}
                </span>
              )}
              {(showV || open.has(i)) && (
                <span className="mt-1 block text-sm text-stone-600">{vi}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-sm text-stone-500">
        Chữ{" "}
        <span className="text-red-60mx-0.5 rounded bg-yellow-50 px-1 text-sky-700">
          xanh
        </span>{" "}
        = đáp án các chỗ trống ①–⑩ trong đề gốc.
      </p>
      <p className="mt-2 text-sm text-stone-500">
        Chạm vào câu để xem pinyin + nghĩa.
      </p>
    </div>
  );
}

/* ─────────────────────────── Tab: Ngữ pháp ─────────────────────────── */

function GrammarTab() {
  return (
    <div className="space-y-3">
      {G.map(([title, example, note], i) => (
        <div
          key={i}
          className="rounded-lg border border-stone-200 bg-white px-4 py-3"
        >
          <b className="text-stone-900">{title}</b>
          <div className="my-1 text-xl text-sky-700" style={zhFont}>
            {example}
          </div>
          <small className="block text-sm leading-snug text-stone-600">
            {note}
          </small>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── Tab: Bài tập ─────────────────────────── */

type Question = { q: string; opts: string[]; correct: number; note: string };

function buildQuestions(data: ChoiceData[], doShuffle: boolean): Question[] {
  return data.map(([q, opts, correct, note]) => {
    const tagged = opts.map((t, i) => ({ t, ok: i === correct }));
    const arranged = doShuffle ? shuffle(tagged) : tagged;
    return {
      q,
      opts: arranged.map((x) => x.t),
      correct: arranged.findIndex((x) => x.ok),
      note,
    };
  });
}

function ChoiceExercise({ data }: { data: ChoiceData[] }) {
  // Render unshuffled first (SSR-safe), then shuffle on the client.
  const [qs, setQs] = useState<Question[]>(() => buildQuestions(data, false));
  const [picked, setPicked] = useState<Record<number, number>>({});

  useEffect(() => {
    setQs(buildQuestions(data, true));
  }, [data]);

  const answered = Object.keys(picked).length;
  const score = qs.filter((x, i) => picked[i] === x.correct).length;

  const reset = () => {
    setPicked({});
    setQs(buildQuestions(data, true));
  };

  return (
    <div className="space-y-3">
      {qs.map((item, i) => {
        const chosen = picked[i];
        const done = chosen !== undefined;
        return (
          <div
            key={i}
            className="rounded-lg border border-stone-200 bg-white px-4 py-3"
          >
            <div className="text-xl leading-relaxed" style={zhFont}>
              {i + 1}. {item.q}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.opts.map((o, j) => {
                let cls =
                  "border-stone-300 bg-white text-stone-800 hover:bg-stone-100";
                if (done && j === item.correct)
                  cls = "border-emerald-600 bg-emerald-50 text-emerald-800";
                else if (done && j === chosen)
                  cls = "border-red-500 bg-red-50 text-red-700";
                return (
                  <button
                    key={j}
                    type="button"
                    disabled={done}
                    onClick={() => setPicked((p) => ({ ...p, [i]: j }))}
                    className={`rounded-lg border px-3 py-1.5 text-lg disabled:cursor-default ${cls}`}
                    style={zhFont}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {done && (
              <div
                className={`mt-2 text-sm ${chosen === item.correct ? "text-emerald-700" : "text-red-600"}`}
              >
                {chosen === item.correct ? "✔ " : "✘ "}
                {item.note}
              </div>
            )}
          </div>
        );
      })}

      {answered === qs.length && (
        <div className="font-medium text-stone-800">
          Điểm: {score}/{qs.length}
        </div>
      )}

      <button
        type="button"
        onClick={reset}
        className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
      >
        Làm lại
      </button>
    </div>
  );
}

type Piece = { id: number; t: string };

function OrderItem({ index, parts }: { index: number; parts: string[] }) {
  const initial = (): Piece[] => parts.map((t, id) => ({ id, t }));
  const [pieces, setPieces] = useState<Piece[]>(initial);
  const [chosen, setChosen] = useState<number[]>([]);
  const [fb, setFb] = useState<{ ok: boolean; msg: string } | null>(null);

  useEffect(() => {
    setPieces(shuffle(parts.map((t, id) => ({ id, t }))));
  }, [parts]);

  const available = pieces.filter((p) => !chosen.includes(p.id));

  const check = () => {
    const s = chosen.map((id) => parts[id]).join("");
    const ok = s === parts.join("");
    setFb({
      ok,
      msg: ok
        ? `✔ Đúng: ${s}`
        : `✘ Chưa đúng, thử lại. Gợi ý: ${parts.join(" ")}`,
    });
  };

  const clear = () => {
    setChosen([]);
    setFb(null);
    setPieces(shuffle(parts.map((t, id) => ({ id, t }))));
  };

  const pieceCls =
    "rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-lg text-stone-800 hover:bg-stone-100";

  return (
    <div className="rounded-lg border border-stone-200 bg-white px-4 py-3">
      <div className="text-sm text-stone-500">
        {index + 1}. Chạm các mảnh để ghép thành câu:
      </div>

      <div className="my-2 flex min-h-[2.75rem] flex-wrap gap-2 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-2">
        {chosen.map((id) => (
          <button
            key={id}
            type="button"
            className={pieceCls}
            style={zhFont}
            onClick={() => {
              setChosen((c) => c.filter((x) => x !== id));
              setFb(null);
            }}
          >
            {parts[id]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {available.map((p) => (
          <button
            key={p.id}
            type="button"
            className={pieceCls}
            style={zhFont}
            onClick={() => {
              setChosen((c) => [...c, p.id]);
              setFb(null);
            }}
          >
            {p.t}
          </button>
        ))}
      </div>

      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={check}
          className="rounded-lg bg-stone-800 px-4 py-1.5 text-sm text-white hover:bg-stone-700"
        >
          Kiểm tra
        </button>
        <button
          type="button"
          onClick={clear}
          className="rounded-lg border border-stone-300 bg-white px-4 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
        >
          Xoá
        </button>
      </div>

      {fb && (
        <div
          className={`mt-2 text-sm ${fb.ok ? "text-emerald-700" : "text-red-600"}`}
        >
          {fb.msg}
        </div>
      )}
    </div>
  );
}

function OrderExercise() {
  return (
    <div className="space-y-3">
      {E3.map((parts, i) => (
        <OrderItem key={i} index={i} parts={parts} />
      ))}
    </div>
  );
}

function ExerciseTab() {
  const [ex, setEx] = useState<1 | 2 | 3>(1);
  const subs: [1 | 2 | 3, string][] = [
    [1, "1. Điền V+bổ ngữ"],
    [2, "2. Sửa câu"],
    [3, "3. Sắp xếp"],
  ];

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {subs.map(([id, label]) => (
          <Chip key={id} on={ex === id} onClick={() => setEx(id)}>
            {label}
          </Chip>
        ))}
      </div>
      {ex === 1 && <ChoiceExercise key="e1" data={E1} />}
      {ex === 2 && <ChoiceExercise key="e2" data={E2} />}
      {ex === 3 && <OrderExercise key="e3" />}
    </div>
  );
}

/* ─────────────────────── Tab: 打听 + Từ vựng ─────────────────────── */

function DialogueTab() {
  return (
    <div>
      <header className="mb-4 text-center">
        <p className="text-3xl text-sky-600" style={zhFont}>
          打听
        </p>
        <div className="text-stone-500">
          Inquiring - <span className="pl-2">Hỏi thăm / Hỏi đường</span>
        </div>
      </header>

      <div className="space-y-3">
        {DIALOGUE.map(([who, zh, py, vi], i) => (
          <div
            key={i}
            className={`flex gap-2 rounded-lg border px-4 py-3 ${
              who === "A"
                ? "mr-6 border-gray-200 bg-gray-50"
                : "ml-6 border-stone-200 bg-white"
            }`}
          >
            <div className="p-1.75 font-semibold text-stone-500">{who}:</div>
            <div>
              <div className="text-[22px] leading-relaxed" style={zhFont}>
                {zh}
              </div>
              <div className="text-[0.9rem] leading-snug text-stone-400">
                {py}
              </div>
              <div className="mt-0.5 text-sm text-stone-600">{vi}</div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-stone-900">
          📚 Từ vựng / Vocabulary
        </h2>
        <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
          <table className="min-w-105 w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100 text-sm text-stone-600">
                <th className="px-3 py-2 font-medium">Tiếng Trung</th>
                <th className="px-3 py-2 font-medium">Pinyin</th>
                <th className="px-3 py-2 font-medium">Tiếng Việt</th>
              </tr>
            </thead>
            <tbody>
              {VOCAB.map(([zh, py, vi]) => (
                <tr
                  key={zh}
                  className="border-b border-stone-100 last:border-b-0"
                >
                  <td className="px-3 py-2 text-xl" style={zhFont}>
                    {zh}
                  </td>
                  <td className="px-3 py-2 text-sm text-stone-600">{py}</td>
                  <td className="px-3 py-2 text-sm text-stone-700">{vi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/* ───────────────────────────── Page ───────────────────────────── */

const TABS: { id: TabId; label: string }[] = [
  { id: "a", label: "Bài khoá" },
  { id: "g", label: "Ngữ pháp" },
  { id: "x", label: "Bài tập" },
  { id: "d", label: "Hội thoại giao tiếp" },
];

export default function Bai15() {
  const [tab, setTab] = useState<TabId>("a");

  return (
    <div className="mx-auto p-4">
      <div
        role="tablist"
        className="mb-4 flex gap-2 overflow-x-auto border-b border-stone-200 pb-2"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`shrink-0 rounded-lg px-4 py-1.5 text-sm transition-colors ${
              tab === t.id
                ? "bg-stone-800 text-white"
                : "text-stone-600 hover:bg-stone-200"
            }`}
            // style={t.id === "d" ? zhFont : undefined}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {tab === "a" && <ReadingTab />}
        {tab === "g" && <GrammarTab />}
        {tab === "x" && <ExerciseTab />}
        {tab === "d" && <DialogueTab />}
      </div>
    </div>
  );
}
