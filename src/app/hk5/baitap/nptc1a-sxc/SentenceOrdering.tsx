"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Dữ liệu: words = các từ theo thứ tự xáo trộn (như đề bài),        */
/*  answer = các từ theo đúng thứ tự, pinyin = phiên âm cả câu.       */
/*  Muốn thêm câu / thêm bộ bài: thêm object vào mảng QUESTIONS.      */
/* ------------------------------------------------------------------ */

type Question = {
  id: string;
  words: string[];
  answer: string[];
  pinyin: string;
  vi?: string;
};

const QUESTIONS: Question[] = [
  {
    id: "1",
    words: [
      "把",
      "你",
      "全都",
      "知道",
      "了",
      "告诉",
      "事情",
      "我",
      "已经",
      "的",
    ],
    answer: [
      "我",
      "已经",
      "把",
      "知道",
      "的",
      "事情",
      "全都",
      "告诉",
      "你",
      "了",
    ],
    pinyin: "Wǒ yǐjīng bǎ zhīdào de shìqing quándōu gàosu nǐ le",
    vi: "Tôi đã nói hết tất cả những chuyện tôi biết cho bạn rồi.",
  },
  {
    id: "2",
    words: ["送给", "这", "想", "玛丽", "特别", "我", "礼物", "份", "的"],
    answer: ["这", "份", "特别", "的", "礼物", "我", "想", "送给", "玛丽"],
    pinyin: "Zhè fèn tèbié de lǐwù wǒ xiǎng sònggěi Mǎlì",
    vi: "Món quà đặc biệt này tôi muốn tặng cho Mary.",
  },
  {
    id: "3",
    words: [
      "喝",
      "的",
      "在",
      "的",
      "没",
      "请",
      "倒",
      "这些",
      "瓶子里",
      "过",
      "绿色",
    ],
    answer: [
      "没",
      "喝",
      "过",
      "的",
      "请",
      "倒",
      "在",
      "这些",
      "绿色",
      "的",
      "瓶子里",
    ],
    pinyin: "Méi hē guo de qǐng dào zài zhèxiē lǜsè de píngzi lǐ",
    vi: "Những chai chưa uống thì xin hãy rót vào những cái chai màu xanh lá này.",
  },
  {
    id: "4",
    words: [
      "已经",
      "这",
      "他们",
      "本",
      "电影",
      "拍",
      "有名",
      "小说",
      "把",
      "成",
      "了",
    ],
    answer: [
      "他们",
      "已经",
      "把",
      "这",
      "本",
      "有名",
      "小说",
      "拍",
      "成",
      "了",
      "电影",
    ],
    pinyin: "Tāmen yǐjīng bǎ zhè běn yǒumíng xiǎoshuō pāi chéng le diànyǐng",
    vi: "Họ đã chuyển thể cuốn tiểu thuyết nổi tiếng này thành phim rồi.",
  },
  {
    id: "5",
    words: [
      "大家",
      "特色",
      "可以",
      "上",
      "在",
      "晚会",
      "一起",
      "各国",
      "的",
      "菜",
      "品尝",
    ],
    answer: [
      "大家",
      "在",
      "晚会",
      "上",
      "可以",
      "一起",
      "品尝",
      "各国",
      "的",
      "特色",
      "菜",
    ],
    pinyin: "Dàjiā zài wǎnhuì shàng kěyǐ yìqǐ pǐncháng gèguó de tèsè cài",
    vi: "Mọi người có thể cùng nhau thưởng thức các món đặc sản của nhiều nước trong buổi tiệc.",
  },
  {
    id: "6",
    words: [
      "彩灯",
      "我们",
      "圣诞树",
      "和",
      "把",
      "用",
      "装饰",
      "得",
      "非常",
      "彩带",
      "漂亮",
    ],
    answer: [
      "我们",
      "用",
      "彩灯",
      "和",
      "彩带",
      "把",
      "圣诞树",
      "装饰",
      "得",
      "非常",
      "漂亮",
    ],
    pinyin:
      "Wǒmen yòng cǎidēng hé cǎidài bǎ shèngdànshù zhuāngshì de fēicháng piàoliang",
    vi: "Chúng tôi dùng đèn màu và dây ruy băng trang trí cây thông Noel rất đẹp.",
  },
  {
    id: "7",
    words: ["大门", "爸爸", "上", "贴了", "的", "红红", "在", "对联", "一副"],
    answer: ["爸爸", "在", "大门", "上", "贴了", "一副", "红红", "的", "对联"],
    pinyin: "Bàba zài dàmén shàng tiēle yí fù hónghóng de duìlián",
    vi: "Bố dán một đôi câu đối đỏ lên cánh cổng.",
  },
];

type Status = "idle" | "correct" | "wrong" | "revealed";

// Font kiểu chữ viết tay (楷体), có fallback cho nhiều hệ điều hành
const hanFont = {
  fontFamily:
    '"KaiTi", "Kaiti SC", "STKaiti", "楷体", "DFKai-SB", "BiauKai", "Noto Serif SC", serif',
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SentenceOrdering() {
  const [shuffle, setShuffle] = useState(false);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]); // chỉ số trong q.words
  const [status, setStatus] = useState<Status>("idle");

  const list = useMemo(
    () => (shuffle ? shuffleArray(QUESTIONS) : QUESTIONS),
    [shuffle],
  );

  const q = list[index];
  const done = status !== "idle"; // đã kiểm tra hoặc đã xem đáp án
  const isLast = index === list.length - 1;

  const goTo = (i: number) => {
    setIndex(i);
    setPicked([]);
    setStatus("idle");
  };

  const pick = (i: number) => {
    if (done || picked.includes(i)) return;
    setPicked((p) => [...p, i]);
  };

  const unpick = (pos: number) => {
    if (done) return;
    setPicked((p) => p.filter((_, k) => k !== pos));
  };

  const clear = () => {
    setPicked([]);
    setStatus("idle");
  };

  const check = () => {
    if (!q || picked.length === 0) return;
    const attempt = picked.map((i) => q.words[i]);
    const isCorrect =
      attempt.length === q.answer.length &&
      attempt.every((word, i) => word === q.answer[i]);
    setStatus(isCorrect ? "correct" : "wrong");
  };

  const reveal = () => {
    if (!q) return;
    const used = new Set<number>();
    const order = q.answer.map((token) => {
      const i = q.words.findIndex((w, k) => w === token && !used.has(k));
      if (i >= 0) used.add(i);
      return i;
    });
    setPicked(order.filter((i) => i >= 0));
    setStatus("revealed");
  };

  const next = () => goTo(isLast ? 0 : index + 1);

  if (!q) {
    return (
      <main className="min-h-screen bg-stone-100 p-6 text-stone-600">
        Không có câu hỏi nào trong bộ bài này.
      </main>
    );
  }

  return (
    <main className="min-h-screen py-4 text-stone-800">
      <div className="mx-auto w-full max-w-xl">
        <p className="mb-4 text-sm text-stone-500">
          {QUESTIONS.length} câu. Sắp xếp các từ thành một câu hoàn chỉnh: chạm
          từ để xếp, chạm lại để gỡ ra.
        </p>

        {/* Thẻ câu hỏi */}
        <section className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="mb-3 flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-stone-700">
              <input
                type="checkbox"
                checked={shuffle}
                onChange={(e) => {
                  setShuffle(e.target.checked);
                  goTo(0);
                }}
                className="h-4 w-4 rounded border-stone-300 accent-sky-600"
              />
              Xáo trộn thứ tự câu
            </label>
            <span className="tabular-nums text-stone-500">
              {index + 1}/{list.length}
            </span>
          </div>

          {/* Khung xếp câu */}
          <div
            aria-label="Câu đã xếp"
            className="mb-4 flex min-h-20 flex-wrap content-start items-center gap-2 rounded-xl border-2 border-dashed border-stone-300 bg-stone-50/60 p-3"
          >
            {picked.map((wi, pos) => (
              <button
                key={`${wi}-${pos}`}
                type="button"
                onClick={() => unpick(pos)}
                disabled={done}
                style={hanFont}
                className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-2xl text-stone-900 transition hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-default disabled:hover:border-stone-300"
              >
                {q.words[wi]}
              </button>
            ))}
          </div>

          {/* Kho từ */}
          <div className="mb-5 flex flex-wrap gap-2">
            {q.words.map((w, i) => {
              const used = picked.includes(i);
              return (
                <button
                  key={`${q.id}-${i}`}
                  type="button"
                  onClick={() => pick(i)}
                  disabled={used || done}
                  style={hanFont}
                  className={[
                    "rounded-lg border px-3 py-1.5 text-2xl transition focus:outline-none focus:ring-2 focus:ring-sky-300",
                    used
                      ? "border-stone-100 bg-stone-50 text-stone-300"
                      : "border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50 disabled:hover:border-stone-300 disabled:hover:bg-white",
                  ].join(" ")}
                >
                  {w}
                </button>
              );
            })}
          </div>

          {/* Nút thao tác */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={clear}
              className="rounded-xl border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300"
            >
              Xóa
            </button>
            <button
              type="button"
              onClick={reveal}
              disabled={done}
              className="rounded-xl border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300 disabled:cursor-not-allowed disabled:text-stone-400 disabled:hover:bg-white"
            >
              Xem đáp án
            </button>
            {done ? (
              <button
                type="button"
                onClick={next}
                className="rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                {isLast ? "Làm lại" : "Câu tiếp"}
              </button>
            ) : (
              <button
                type="button"
                onClick={check}
                disabled={picked.length === 0}
                className="rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:bg-sky-300"
              >
                Kiểm tra
              </button>
            )}
          </div>

          {/* Bảng đáp án */}
          {done && (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 rounded-xl bg-sky-50 p-4"
            >
              <p className="mb-2 text-sm text-sky-700">
                {status === "correct"
                  ? "Chính xác! Đáp án:"
                  : status === "wrong"
                    ? "Chưa đúng. Đáp án:"
                    : "Đáp án:"}
              </p>
              <p
                style={hanFont}
                className="text-2xl leading-snug text-stone-900"
              >
                {q.answer.join("")}
              </p>
              <p className="mt-1 text-sm text-sky-700">{q.pinyin}</p>
              <p className="mt-3 border-t border-sky-100 pt-3 text-sm text-stone-700">
                {q.vi}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
