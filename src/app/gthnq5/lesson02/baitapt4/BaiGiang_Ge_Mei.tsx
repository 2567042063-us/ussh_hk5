"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  DỮ LIỆU                                                            */
/* ------------------------------------------------------------------ */

type GmExample = { zh: string; vi: string };

const GM_CARDS: {
  char: string;
  pinyin: string;
  meaning: string;
  focus: string;
  pattern: string;
  examples: GmExample[];
}[] = [
  {
    char: "每",
    pinyin: "měi",
    meaning: "mỗi, mọi",
    focus:
      "Nhấn mạnh từng cá thể trong tập hợp đều giống nhau, không có ngoại lệ. Cũng dùng cho thời gian lặp lại đều đặn.",
    pattern: "每 + (số) + lượng từ / danh từ chỉ thời gian",
    examples: [
      { zh: "每个学生都有一本书。", vi: "Mỗi học sinh đều có một quyển sách." },
      { zh: "每天晚上我都看书。", vi: "Mỗi tối tôi đều đọc sách." },
      {
        zh: "每次考试他都很紧张。",
        vi: "Lần thi nào anh ấy cũng rất hồi hộp.",
      },
    ],
  },
  {
    char: "各",
    pinyin: "gè",
    meaning: "các, mỗi (cái riêng)",
    focus:
      "Nhấn mạnh các cá thể khác nhau, mỗi cái một kiểu, mỗi người một việc riêng.",
    pattern: "各 + danh từ  /  各 + động từ  /  各…各…",
    examples: [
      { zh: "各位同学，请坐。", vi: "Các bạn học sinh, mời ngồi." },
      {
        zh: "大家各自完成自己的工作。",
        vi: "Mọi người ai tự hoàn thành công việc của mình.",
      },
      {
        zh: "这几个孩子各有各的爱好。",
        vi: "Mấy đứa trẻ này mỗi đứa một sở thích.",
      },
    ],
  },
];

const GM_ROWS: { label: string; mei: string; ge: string }[] = [
  {
    label: "Nghĩa",
    mei: "mỗi, mọi",
    ge: "các; mỗi (cái riêng)",
  },
  {
    label: "Nhấn mạnh",
    mei: "Từng cá thể đều như nhau, không ngoại lệ",
    ge: "Các cá thể khác nhau, mỗi cái một kiểu",
  },
  {
    label: "Thời gian lặp lại",
    mei: "Dùng được: 每天, 每年, 每星期, 每次",
    ge: "Không dùng",
  },
  {
    label: "Trước động từ",
    mei: "Không đứng một mình trước động từ",
    ge: "Được: 各有特长, 各自努力, 各回各的家",
  },
  {
    label: "Kết hợp thường gặp",
    mei: "每个人, 每一次, 每两天",
    ge: "各国, 各位, 各方",
  },
];

type GmQ = {
  parts: string[]; // các đoạn câu, giữa các đoạn là chỗ trống
  answers: string[];
  vi: string;
  tip: string;
};

const GM_EXERCISE: GmQ[] = [
  {
    parts: ["", "个人都有自己的梦想。"],
    answers: ["每"],
    vi: "Mỗi người đều có ước mơ của riêng mình.",
    tip: "Nói về từng người trong tập hợp, ai cũng như vậy, nên dùng 每 + lượng từ: 每个人.",
  },
  {
    parts: ["他们的能力都很强，", "有特长。"],
    answers: ["各"],
    vi: "Năng lực của họ đều rất mạnh, mỗi người có sở trường riêng.",
    tip: "Nhấn mạnh sở trường của mỗi người khác nhau, và đứng ngay trước động từ 有, nên dùng 各.",
  },
  {
    parts: ["在此问题上，你和他", "方都要负责任。"],
    answers: ["各"],
    vi: "Về vấn đề này, cả hai bên (anh và anh ấy) đều phải chịu trách nhiệm.",
    tip: "各方 = các bên, mỗi bên. Đây là cách kết hợp cố định của 各.",
  },
  {
    parts: ["她", "星期都来这儿看书。"],
    answers: ["每"],
    vi: "Tuần nào cô ấy cũng đến đây đọc sách.",
    tip: "Thời gian lặp lại đều đặn (mỗi tuần) luôn dùng 每, không dùng 各.",
  },
  {
    parts: ["吃完饭后，", "回", "的家去。"],
    answers: ["各", "各"],
    vi: "Ăn xong, ai về nhà nấy.",
    tip: "Cấu trúc 各 + động từ + 各的 + danh từ: mỗi người làm việc/đi về chỗ của riêng mình (“ai về nhà nấy”).",
  },
];

/* ------------------------------------------------------------------ */
/*  PHẦN GIẢI THÍCH                                                    */
/* ------------------------------------------------------------------ */

function GmLesson() {
  return (
    <section>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          Phân biệt
        </p>
        <h2 className="mt-1 text-3xl font-bold text-stone-900">
          “各” 还是 “每”
        </h2>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {GM_CARDS.map((c) => (
          <div
            key={c.char}
            className="rounded-sm border border-stone-200 bg-white p-5"
          >
            <div className="flex items-end gap-3">
              <span className="ztai__zh text-6xl leading-none text-stone-900">
                {c.char}
              </span>
              <span className="pb-1 text-stone-500">{c.pinyin}</span>
            </div>
            <p className="mt-3 text-lg font-semibold text-stone-900">
              {c.meaning}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              {c.focus}
            </p>
            <p className="mt-3 rounded-lg bg-stone-100 px-3 py-2 text-sm text-stone-700">
              {c.pattern}
            </p>
            <ul className="mt-3 space-y-2">
              {c.examples.map((e, i) => (
                <li key={i} className="rounded-xl bg-stone-50 px-4 py-3">
                  <p className="text-lg text-stone-900">{e.zh}</p>
                  <p className="mt-0.5 text-sm text-stone-500">{e.vi}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-sm border border-stone-200 bg-white">
        <div className="grid grid-cols-[7rem_1fr_1fr] text-sm font-semibold sm:grid-cols-[9rem_1fr_1fr]">
          <div className="px-3 py-2" />
          <div className="px-3 py-2 text-lg">每</div>
          <div className="px-3 py-2 text-lg">各</div>
        </div>
        {GM_ROWS.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-[7rem_1fr_1fr] text-sm sm:grid-cols-[9rem_1fr_1fr] ${
              i % 2 ? "bg-stone-50" : "bg-white"
            }`}
          >
            <div className="px-3 py-3 font-medium text-stone-500">
              {r.label}
            </div>
            <div className="px-3 py-3 leading-relaxed text-stone-800">
              {r.mei}
            </div>
            <div className="px-3 py-3 leading-relaxed text-stone-800">
              {r.ge}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-4 rounded-sm bg-stone-800 p-5 text-stone-50">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Mẹo nhớ nhanh
        </p>
        <p className="mt-2 leading-relaxed">
          <span className="text-xl">每</span> = ai/cái nào cũng{" "}
          <span className="underline decoration-stone-500">như nhau</span>, hoặc
          thời gian lặp lại.
        </p>
        <p className="mt-1 leading-relaxed">
          <span className="text-xl">各</span> = mỗi người/mỗi bên{" "}
          <span className="underline decoration-stone-500">một kiểu riêng</span>
          .
        </p>
      </div> */}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  BÀI TẬP                                                            */
/* ------------------------------------------------------------------ */

type GmState = {
  picks: (string | null)[];
  checked: boolean;
  revealed: boolean;
};

const gmFresh = (): GmState[] =>
  GM_EXERCISE.map((q) => ({
    picks: q.answers.map(() => null),
    checked: false,
    revealed: false,
  }));

function GmExerciseBlock() {
  const [states, setStates] = useState<GmState[]>(gmFresh);

  const update = (i: number, patch: Partial<GmState>) =>
    setStates((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)),
    );

  const pick = (i: number, blank: number, ch: string) =>
    update(i, {
      picks: states[i].picks.map((p, b) => (b === blank ? ch : p)),
    });

  const isCorrect = (i: number) =>
    states[i].picks.every((p, b) => p === GM_EXERCISE[i].answers[b]);

  const checked = states.filter((s) => s.checked).length;
  const score = states.filter((s, i) => s.checked && isCorrect(i)).length;

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-sm border border-stone-200 bg-white p-4">
        <div>
          <p className="text-base font-semibold text-stone-900">
            Bài tập: Chọn “各” hay “每”
          </p>
          <p className="mt-0.5 text-xs text-stone-500">
            Chọn từ thích hợp cho từng chỗ trống, rồi bấm “Kiểm tra”.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-stone-200 px-3 py-1 text-sm text-stone-800">
            Đúng {score}/{checked}
          </span>
          <button
            onClick={() => setStates(gmFresh())}
            className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
          >
            Làm lại tất cả
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {GM_EXERCISE.map((q, i) => {
          const s = states[i];
          const full = s.picks.every((p) => p !== null);
          const ok = isCorrect(i);

          return (
            <li
              key={i}
              className="rounded-sm border border-stone-200 bg-white p-4"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="w-4 shrink-0 pt-0 text-right text-xl font-semibold text-stone-400">
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

              {/* Câu có chỗ trống */}
              <p className="ztai__zh text-2xl leading-loose text-stone-900">
                {q.parts.map((part, p) => (
                  <span key={p}>
                    {part}
                    {p < q.answers.length && (
                      <span
                        className={`ztai__zh mx-1 inline-flex h-10 w-12 items-center justify-center rounded-lg align-middle text-xl font-bold ${
                          s.checked
                            ? s.picks[p] === q.answers[p]
                              ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                              : "border-rose-600 bg-rose-50 text-rose-800"
                            : "border-stone-400 bg-stone-100 text-stone-800"
                        }`}
                      >
                        {s.picks[p] ?? ""}
                      </span>
                    )}
                  </span>
                ))}
              </p>

              {/* Lựa chọn cho từng chỗ trống */}
              <div className="mt-3 space-y-2">
                {q.answers.map((_, b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="w-24 text-xs text-stone-500">
                      {q.answers.length > 1
                        ? `Chỗ trống ${b + 1}`
                        : "Chỗ trống"}
                    </span>
                    {["各", "每"].map((ch) => (
                      <button
                        key={ch}
                        disabled={s.checked}
                        onClick={() => pick(i, b, ch)}
                        className={`ztai__zh h-10 w-14 rounded-sm border text-xl font-semibold transition ${
                          s.picks[b] === ch
                            ? "border-sky-600 bg-sky-100 text-sky-800"
                            : "border-stone-300 bg-white text-stone-800 hover:bg-stone-100"
                        } disabled:cursor-not-allowed`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

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
                    update(i, {
                      picks: q.answers.map(() => null),
                      checked: false,
                      revealed: false,
                    })
                  }
                  className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                >
                  Làm lại
                </button>
                <button
                  onClick={() => update(i, { revealed: !s.revealed })}
                  aria-expanded={s.revealed}
                  className="ml-auto rounded-lg border border-stone-300 bg-stone-100 px-4 py-2 text-sm text-stone-800 hover:bg-stone-200"
                >
                  {s.revealed ? "Ẩn đáp án" : "Xem đáp án"}
                </button>
              </div>

              {s.revealed && (
                <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Đáp án
                  </p>
                  <p className="ztai__zh mt-1 text-2xl text-stone-900">
                    {q.parts.map((part, p) => (
                      <span key={p}>
                        {part}
                        {p < q.answers.length && (
                          <mark className="rounded bg-stone-300 px-1 text-stone-900">
                            {q.answers[p]}
                          </mark>
                        )}
                      </span>
                    ))}
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

export default function BaiGiangGeMei() {
  return (
    <>
      <GmLesson />
      <GmExerciseBlock />
    </>
  );
}
