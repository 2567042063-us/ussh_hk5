"use client";

import { JSX, useState } from "react";

export type Sent = { zh: string; py: string; vi: string };
export type Vocab = {
  zh: string;
  py: string;
  hv: string;
  vi: string;
  syn: string;
};
export type MC = { q: string; opts: string[]; a: number };
export type TF = { q: string; a: boolean };
export type Lesson = {
  title: string;
  titlePy: string;
  titleVi: string;
  paras: Sent[][];
  vocab: Vocab[];
  ex1: MC[];
  ex2: MC[];
  ex3: TF[];
  ex5?: string[];
  unit?: string;
  extra?: { label: string; qs: string[] }[];
  order?: { label: string; sents: string[]; answer: number[] };
};

const TABS = [
  "课文 · Bài khoá",
  "词汇 · Từ vựng",
  "练习(一) Giải nghĩa từ",
  "练习(二) Chọn đáp án",
  "练习(三) Đúng/Sai",
  "练习(五) Trả lời",
];
const L = "ABCD";

function Text({ lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string | null>(null);
  const [all, setAll] = useState(false);
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Bấm vào từng câu để xem pinyin và nghĩa.
        </p>
        <button
          onClick={() => {
            setAll(!all);
            setActive(null);
          }}
          className="rounded-md border border-sky-300 px-3 py-1 text-sm text-sky-800 hover:bg-sky-50"
        >
          {all ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
        </button>
      </div>
      <div className="space-y-5">
        {lesson.paras.map((p, i) => (
          <p key={i} className="indent-8 text-xl leading-10 text-stone-800">
            {p.map((s, j) => {
              const k = `${i}-${j}`;
              const open = all || active === k;
              return (
                <span key={k}>
                  <span
                    onClick={() => {
                      setAll(false);
                      setActive(open ? null : k);
                    }}
                    className={`ztai__zh cursor-pointer rounded px-0.5 text-2xl transition-colors ${open ? "" : "hover:bg-stone-100"}`}
                  >
                    {s.zh}
                  </span>
                  {open && (
                    <span className="my-1 ml-8 block border-l-4 border-stone-400 bg-stone-50 py-1 pl-3 indent-0 text-base leading-7">
                      <span className="block text-stone-600">{s.py}</span>
                      <span className="block">{s.vi}</span>
                    </span>
                  )}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </div>
  );
}

function VocabTab({ v }: { v: Vocab[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-stone-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-stone-100 text-stone-700">
          <tr>
            {[
              "Chữ Hán",
              "Pinyin",
              "Hán Việt",
              "Nghĩa tiếng Việt",
              "Đồng nghĩa / gần nghĩa",
            ].map((h) => (
              <th key={h} className="px-3 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {v.map((r, i) => (
            <tr key={r.zh} className={i % 2 ? "bg-stone-50" : "bg-white"}>
              <td className="px-3 py-2 text-lg font-medium text-stone-900">
                {r.zh}
              </td>
              <td className="px-3 py-2 text-sky-800">{r.py}</td>
              <td className="px-3 py-2 text-stone-600">{r.hv}</td>
              <td className="px-3 py-2 text-stone-800">{r.vi}</td>
              <td className="px-3 py-2 text-stone-600">{r.syn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MCTab({ items, word }: { items: MC[]; word?: boolean }) {
  const [sel, setSel] = useState<Record<number, number>>({});
  const done = Object.keys(sel).length;
  const score = items.filter((m, i) => sel[i] === m.a).length;
  return (
    <div className="space-y-4">
      <p className="text-sm text-stone-500">
        Đã làm {done}/{items.length} · Đúng {score}
      </p>
      {items.map((m, i) => (
        <div
          key={i}
          className="rounded-lg border border-stone-200 bg-white p-4"
        >
          <p className="mb-2 font-medium text-stone-900">
            {i + 1}. {m.q}
          </p>
          <div className={`grid gap-2 ${word ? "sm:grid-cols-2" : ""}`}>
            {m.opts.map((o, j) => {
              const picked = sel[i] !== undefined;
              const cls = !picked
                ? "border-stone-200 hover:border-sky-400 hover:bg-sky-50"
                : j === m.a
                  ? "border-sky-500 bg-sky-100 text-sky-900"
                  : sel[i] === j
                    ? "border-stone-400 bg-stone-200 text-stone-500 line-through"
                    : "border-stone-200 text-stone-400";
              return (
                <button
                  key={j}
                  disabled={picked}
                  onClick={() => setSel({ ...sel, [i]: j })}
                  className={`rounded-md border px-3 py-2 text-left text-sm ${cls}`}
                >
                  {L[j]}. {o}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function TFTab({ items }: { items: TF[] }) {
  const [sel, setSel] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-2">
      <p className="mb-2 text-sm text-stone-500">
        Đúng {items.filter((t, i) => sel[i] === t.a).length}/
        {Object.keys(sel).length} câu đã làm
      </p>
      {items.map((t, i) => {
        const picked = sel[i] !== undefined;
        const ok = sel[i] === t.a;
        return (
          <div
            key={i}
            className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 ${!picked ? "border-stone-200 bg-white" : ok ? "border-sky-400 bg-sky-50" : "border-stone-400 bg-stone-100"}`}
          >
            <p className="text-stone-900">
              {i + 1}. {t.q}
            </p>
            <div className="flex shrink-0 items-center gap-2">
              {picked && (
                <span className="text-xs text-stone-500">
                  {ok ? "Đúng" : `Đáp án: ${t.a ? "对" : "错"}`}
                </span>
              )}
              {[true, false].map((b) => (
                <button
                  key={String(b)}
                  disabled={picked}
                  onClick={() => setSel({ ...sel, [i]: b })}
                  className="h-9 w-9 rounded-md border border-stone-300 text-lg hover:bg-sky-100 disabled:opacity-60"
                >
                  {b ? "对" : "错"}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OpenTab({ qs }: { qs: string[] }) {
  const [ans, setAns] = useState<Record<number, string>>({});
  return (
    <div className="space-y-4">
      {qs.map((q, i) => (
        <div key={i}>
          <p className="mb-1 font-medium text-stone-900">
            {i + 1}. {q}
          </p>
          <textarea
            rows={2}
            value={ans[i] || ""}
            onChange={(e) => setAns({ ...ans, [i]: e.target.value })}
            placeholder="Viết câu trả lời của bạn…"
            className="w-full rounded-md border border-stone-300 bg-white p-2 text-stone-800 focus:border-sky-500 focus:outline-none"
          />
        </div>
      ))}
    </div>
  );
}

function OrderTab({ o }: { o: NonNullable<Lesson["order"]> }) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-500">
        Sắp xếp các câu sau thành một đoạn văn hoàn chỉnh.
      </p>
      {o.sents.map((t, i) => (
        <p
          key={i}
          className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-stone-900"
        >
          {i + 1}. {t}
        </p>
      ))}
      <button
        onClick={() => setShow(!show)}
        className="rounded-md border border-sky-300 px-3 py-1 text-sm text-sky-800 hover:bg-sky-50"
      >
        {show ? "Ẩn đáp án" : "Xem đáp án"}
      </button>
      {show && (
        <div className="rounded-lg border-l-4 border-sky-400 bg-sky-50 p-4">
          <p className="mb-2 font-medium text-sky-900">
            Thứ tự đúng: {o.answer.join(" → ")}
          </p>
          <p className="leading-8 text-stone-800">
            {o.answer.map((n) => o.sents[n - 1]).join("")}
          </p>
        </div>
      )}
    </div>
  );
}

export default function LessonViewer({ lesson }: { lesson: Lesson }) {
  const [tab, setTab] = useState(0);
  const tabs: { label: string; node: JSX.Element }[] = [
    { label: TABS[0], node: <Text lesson={lesson} /> },
    { label: TABS[1], node: <VocabTab v={lesson.vocab} /> },
    { label: TABS[2], node: <MCTab items={lesson.ex1} word /> },
    { label: TABS[3], node: <MCTab items={lesson.ex2} /> },
    { label: TABS[4], node: <TFTab items={lesson.ex3} /> },
  ];
  if (lesson.ex5)
    tabs.push({ label: TABS[5], node: <OpenTab qs={lesson.ex5} /> });
  (lesson.extra ?? []).forEach((e) =>
    tabs.push({ label: e.label, node: <OpenTab qs={e.qs} /> }),
  );
  if (lesson.order)
    tabs.push({
      label: lesson.order.label,
      node: <OrderTab o={lesson.order} />,
    });
  return (
    <div className="min-h-screen text-stone-800">
      <header className="mb-6 border-b border-stone-300 pb-4">
        <p className="text-sm text-stone-500">
          {lesson.unit ?? "第三单元 · Đơn nguyên 3"} · 汉语系列阅读(第一册)
        </p>
        <h1 className="ztai__zh mt-3 text-3xl text-sky-800">{lesson.title}</h1>
        <p className="text-stone-800">
          {lesson.titlePy} — {lesson.titleVi}
        </p>
      </header>
      <nav className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            className={`rounded-full px-4 py-1.5 text-sm ${tab === i ? "bg-sky-700 text-white" : "bg-stone-200 text-stone-700 hover:bg-sky-100"}`}
          >
            {t.label}
          </button>
        ))}
      </nav>
      {tabs[tab].node}
    </div>
  );
}
