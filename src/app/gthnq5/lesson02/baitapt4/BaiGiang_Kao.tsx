"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  DỮ LIỆU BÀI GIẢNG: 靠                                              */
/* ------------------------------------------------------------------ */

type Example = { zh: string; vi: string };
type Meaning = {
  no: number;
  vi: string; // nghĩa tiếng Việt
  zh: string; // giải nghĩa tiếng Trung
  examples: Example[];
};

const MEANINGS: Meaning[] = [
  {
    no: 1,
    vi: "dựa; kê; tựa",
    zh: "坐着或站着时，让身体一部分重量由别人或物体支持着(人)。",
    examples: [
      { zh: "靠枕。", vi: "Gối tựa." },
      { zh: "两人背靠背坐着。", vi: "Hai người ngồi tựa lưng vào nhau." },
      { zh: "靠着椅子打盹儿。", vi: "Dựa vào ghế ngủ gật." },
    ],
  },
  {
    no: 2,
    vi: "dựng",
    zh: "(物体)凭借别的东西的支持立着或竖起来。",
    examples: [
      { zh: "你把梯子靠在墙上。", vi: "Bạn dựng cái thang vào tường." },
      { zh: "扁担靠在门背后。", vi: "Đòn gánh dựng sau cánh cửa." },
    ],
  },
  {
    no: 3,
    vi: "cập; áp sát",
    zh: "接近；挨近。",
    examples: [
      { zh: "我家靠海。", vi: "Nhà tôi gần biển." },
      { zh: "船靠岸。", vi: "Thuyền cập bờ." },
    ],
  },
  {
    no: 4,
    vi: "dựa vào; nhờ vào",
    zh: "依靠。",
    examples: [
      { zh: "靠劳动生活。", vi: "Sống dựa vào lao động." },
      {
        zh: "学习全靠自己的努力。",
        vi: "Việc học hoàn toàn dựa vào nỗ lực của bản thân.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  DỮ LIỆU BÀI TẬP SẮP XẾP                                            */
/* ------------------------------------------------------------------ */

type Q = {
  tokens: string[]; // các từ bị xáo trộn
  answer: string; // câu đúng (không có dấu câu cuối)
  vi: string;
  tip: string;
};

const EXERCISE: Q[] = [
  {
    tokens: ["家", "我们", "工资", "靠", "生活", "父亲", "的"],
    answer: "我们家靠父亲的工资生活",
    vi: "Gia đình chúng tôi sống nhờ vào tiền lương của bố.",
    tip: "我们家 là chủ ngữ. 靠 + danh từ (父亲的工资) + động từ 生活: “sống dựa vào …”. Đây là nghĩa 4 của 靠.",
  },
  {
    tokens: ["水果", "发", "财", "这", "而", "了", "家", "靠", "商店", "经营"],
    answer: "这家商店靠经营水果而发了财",
    vi: "Cửa hàng này nhờ kinh doanh trái cây mà phát tài.",
    tip: "这家商店 (lượng từ 家 đi với 商店) làm chủ ngữ. 靠 + 经营水果 (nhờ kinh doanh trái cây), 而 nối cách thức với kết quả 发了财 (phát tài, 发财 là từ li hợp nên 了 chen giữa).",
  },
  {
    tokens: ["她", "熟睡", "肩膀", "着", "我", "靠", "的"],
    answer: "她靠着我的肩膀熟睡",
    vi: "Cô ấy tựa vào vai tôi ngủ say.",
    tip: "靠着 + danh từ (我的肩膀): “tựa vào …”, 着 chỉ trạng thái đang duy trì. Đây là nghĩa 1 của 靠. 熟睡 đứng cuối làm động từ chính.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT PHỤ                                                      */
/* ------------------------------------------------------------------ */

function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split("靠").map((part, i, arr) => (
        <span key={i}>
          {part}
          {i < arr.length - 1 && (
            <mark className="rounded bg-stone-300 px-0.5 text-stone-900">
              靠
            </mark>
          )}
        </span>
      ))}
    </>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 shrink-0 transition-transform ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PHẦN 1: NỘI DUNG GIẢNG                                             */
/* ------------------------------------------------------------------ */

function Lecture() {
  return (
    <section>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          词语用法
        </p>
        <div className="mt-2 flex items-end gap-4">
          <span className="ztai__zh text-7xl leading-none text-stone-900">
            靠
          </span>
          <span className="pb-1 text-lg text-stone-500">kào</span>
        </div>
      </div>

      <ol className="mt-4 space-y-3">
        {MEANINGS.map((m) => (
          <li
            key={m.no}
            className="rounded-sm border border-stone-200 bg-white p-5"
          >
            <div className="flex items-start gap-3">
              <span className="w-4 shrink-0 pt-0 text-right text-xl font-semibold text-stone-400">
                {m.no}
              </span>
              <div className="flex-1">
                <p className="text-lg font-semibold text-stone-900">{m.vi}</p>
                <p className="mt-1 text-base leading-relaxed text-stone-600">
                  {m.zh}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {m.examples.map((e, i) => (
                <li key={i} className="rounded-xl bg-stone-50 px-4 py-3">
                  <p className="ztai__zh text-2xl text-stone-900">
                    <Highlight text={e.zh} />
                  </p>
                  <p className="mt-0.5 text-sm text-stone-500">{e.vi}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-sm bg-yellow-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider">
          Cấu trúc
        </p>
        <p className="mt-2 text-xl">
          <span className="ztai__zh text-2xl">靠</span>{" "}
          <span className="">+</span> danh từ
        </p>
        <p className="mt-1 text-xl">
          <span className="ztai__zh text-2xl">靠</span>{" "}
          <span className="ztai__zh text-2xl">
            <span className="ztai__zh text-2xl">+</span> 在 / 着{" "}
          </span>
          <span className="">+</span> danh từ chỉ nơi chốn
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PHẦN 2: BÀI TẬP SẮP XẾP                                            */
/* ------------------------------------------------------------------ */

type QState = { picked: number[]; checked: boolean; revealed: boolean };

const fresh = (): QState[] =>
  EXERCISE.map(() => ({ picked: [], checked: false, revealed: false }));

function Exercise() {
  const [states, setStates] = useState<QState[]>(fresh);

  const update = (i: number, patch: Partial<QState>) =>
    setStates((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)),
    );

  const built = (i: number) =>
    states[i].picked.map((t) => EXERCISE[i].tokens[t]).join("");
  const isCorrect = (i: number) => built(i) === EXERCISE[i].answer;

  const checked = states.filter((s) => s.checked).length;
  const score = states.filter((s, i) => s.checked && isCorrect(i)).length;

  return (
    <section>
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3 p-4">
        <div>
          <p className="text-base font-semibold text-stone-900">
            Bài tập: Sắp xếp các từ thành câu hoàn chỉnh
          </p>
          <p className="mt-0.5 text-xs text-stone-500">
            Bấm các từ theo thứ tự. Bấm vào từ đã chọn để bỏ ra.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-stone-200 px-3 py-1 text-sm text-stone-800">
            Đúng {score}/{checked}
          </span>
          <button
            onClick={() => setStates(fresh())}
            className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
          >
            Làm lại tất cả
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {EXERCISE.map((q, i) => {
          const s = states[i];
          const full = s.picked.length === q.tokens.length;
          const ok = isCorrect(i);

          return (
            <li
              key={i}
              className="rounded-sm border border-stone-200 bg-white p-4"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-md w-3 shrink-0 pt-1 text-right font-semibold text-stone-400">
                  {i + 1}
                </span>
                {s.checked && (
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                      ok
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {ok ? "Chính xác" : "Chưa đúng"}
                  </span>
                )}
              </div>

              {/* Kho từ */}
              <div className="flex flex-wrap gap-2">
                {q.tokens.map((t, idx) => {
                  const used = s.picked.includes(idx);
                  return (
                    <button
                      key={idx}
                      disabled={used || s.checked}
                      onClick={() => update(i, { picked: [...s.picked, idx] })}
                      className={`ztai__zh rounded-lg border px-3 py-2 text-xl transition ${
                        used
                          ? "border-stone-200 bg-stone-100 text-stone-300"
                          : "border-stone-300 bg-white text-stone-900 hover:border-stone-500 hover:bg-stone-50"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              {/* Câu đang ghép */}
              <div
                className={`ztai__zh mt-4 flex min-h-14 flex-wrap items-center gap-2 rounded-xl border-2 border-dashed px-3 py-2 ${
                  s.checked
                    ? ok
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-rose-300 bg-rose-50"
                    : "border-stone-300 bg-stone-50"
                }`}
              >
                {s.picked.length === 0 && (
                  <span className="text-sm text-stone-400">
                    Câu của bạn sẽ hiện ở đây…
                  </span>
                )}
                {s.picked.map((t, pos) => (
                  <button
                    key={pos}
                    disabled={s.checked}
                    onClick={() =>
                      update(i, {
                        picked: s.picked.filter((_, p) => p !== pos),
                      })
                    }
                    className="rounded-lg bg-stone-800 px-3 py-1.5 text-xl text-stone-50 hover:bg-stone-700 disabled:hover:bg-stone-800"
                  >
                    {q.tokens[t]}
                  </button>
                ))}
                {s.picked.length > 0 && (
                  <span className="text-xl text-stone-800">。</span>
                )}
              </div>

              {/* Nút */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  disabled={!full || s.checked}
                  onClick={() => update(i, { checked: true })}
                  className="rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-stone-50 hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500"
                >
                  Kiểm tra
                </button>
                <button
                  onClick={() =>
                    update(i, { picked: [], checked: false, revealed: false })
                  }
                  className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                >
                  Làm lại
                </button>
                <button
                  onClick={() => update(i, { revealed: !s.revealed })}
                  aria-expanded={s.revealed}
                  className="ml-auto flex items-center gap-1 rounded-lg border border-stone-300 bg-stone-100 px-4 py-2 text-sm text-stone-800 hover:bg-stone-200"
                >
                  {s.revealed ? "Ẩn đáp án" : "Xem đáp án"}
                  <Chevron open={s.revealed} />
                </button>
              </div>

              {s.revealed && (
                <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Đáp án
                  </p>
                  <p className="mt-1 text-2xl text-stone-900">
                    <Highlight text={q.answer + "。"} />
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Dịch
                  </p>
                  <p className="mt-1 text-sm text-stone-700">{q.vi}</p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Giải thích
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-700">
                    {q.tip}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRANG CHÍNH                                                        */
/* ------------------------------------------------------------------ */

export default function BaiGiangKao() {
  return (
    <>
      <Lecture />
      <Exercise />
    </>
  );
}
