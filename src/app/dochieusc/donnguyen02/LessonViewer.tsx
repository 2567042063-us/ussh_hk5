"use client";

import { JSX, useState } from "react";

/* ---------- Kiểu dữ liệu ---------- */
export type Sent = { zh: string; py: string; vi: string };
export type Vocab = {
  zh: string;
  py: string;
  hv: string;
  vi: string;
  syn: string;
};
export type Opt = [string, string, string]; // [chữ Hán, pinyin, tiếng Việt]
export type MC = {
  q: string;
  py: string;
  vi: string;
  opts: Opt[];
  a: number;
  why?: string;
};
export type TF = { q: string; py: string; vi: string; a: boolean; why: string };
export type Fill = {
  parts: string[];
  answers: string[];
  py: string;
  vi: string;
};
export type QA = {
  q: string;
  qp: string;
  qv: string;
  a: string;
  py: string;
  vi: string;
};
export type Def = {
  w: string;
  wp: string;
  wv: string;
  a: string;
  py: string;
  vi: string;
};
export type Extra =
  | { kind: "fill"; label: string; items: Fill[] } // 填空
  | { kind: "qa"; label: string; items: QA[] } // 回答问题
  | { kind: "order"; label: string; sents: Opt[]; answer: number[] } // 连句成段
  | { kind: "define"; label: string; items: Def[] }; // 用汉语解释词语
export type Lesson = {
  unit?: string;
  title: string;
  titlePy: string;
  titleVi: string;
  paras: Sent[][];
  vocab: Vocab[];
  usage?: Record<string, string>; // ghi chú cách dùng, key = chữ Hán trong vocab
  ex1: MC[];
  ex2: MC[];
  ex3: TF[];
  extras: Extra[];
};

const L = "ABCD";

/* ---------- Bài khoá + popup chữ khó ---------- */
type Seg = string | { t: string };
function segment(text: string, terms: string[]): Seg[] {
  const out: Seg[] = [];
  let buf = "";
  let i = 0;
  while (i < text.length) {
    const hit = terms.find((t) => text.startsWith(t, i));
    if (hit) {
      if (buf) {
        out.push(buf);
        buf = "";
      }
      out.push({ t: hit });
      i += hit.length;
    } else {
      buf += text[i];
      i++;
    }
  }
  if (buf) out.push(buf);
  return out;
}

function Word({ v, note }: { v: Vocab; note?: string }) {
  return (
    <span
      tabIndex={0}
      className="group relative cursor-help border-b border-dotted border-sky-500 text-sky-900 outline-none"
    >
      {v.zh}
      <span
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-lg border border-stone-200 bg-white p-3 text-left indent-0 text-sm font-normal leading-5 text-stone-800 shadow-lg group-hover:visible group-focus:visible"
      >
        <span className="block text-xl font-semibold text-stone-900">
          {v.zh}{" "}
          <span className="ztai__py text-base font-normal text-sky-800">
            {v.py}
          </span>
        </span>
        <span className="ztai__vi block text-xs uppercase text-stone-500">
          {v.hv}
        </span>
        <span className="ztai__vi mt-1 block">{v.vi}</span>
        {note && (
          <span className="mt-1.5 block rounded bg-sky-50 p-1.5 text-xs text-stone-700">
            {note}
          </span>
        )}
        {v.syn && v.syn !== "—" && (
          <span className="mt-1 block text-xs text-stone-500">≈ {v.syn}</span>
        )}
      </span>
    </span>
  );
}

function Text({ lesson }: { lesson: Lesson }) {
  const [active, setActive] = useState<string | null>(null);
  const [all, setAll] = useState(false);
  const map = new Map(lesson.vocab.map((v) => [v.zh, v]));
  const terms = [...map.keys()].sort((a, b) => b.length - a.length);
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-stone-500">
          Rê chuột vào chữ gạch chấm để xem nghĩa và cách dùng. Bấm vào câu để
          xem pinyin và dịch.
        </p>
        <button
          onClick={() => {
            setAll(!all);
            setActive(null);
          }}
          className="rounded-md border border-sky-300 px-3 py-1 text-sm text-sky-800 hover:bg-sky-50"
        >
          {all ? "Ẩn tất cả" : "Hiện tất cả"}
        </button>
      </div>
      <div className="space-y-5">
        {lesson.paras.map((p, i) => (
          <p
            key={i}
            className="ztai__zh indent-8 text-2xl leading-10 text-stone-800"
          >
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
                    className={`cursor-pointer rounded px-0.5 transition-colors ${open ? "bg-sky-100" : "hover:bg-stone-100"}`}
                  >
                    {segment(s.zh, terms).map((g, n) =>
                      typeof g === "string" ? (
                        <span key={n}>{g}</span>
                      ) : (
                        <Word
                          key={n}
                          v={map.get(g.t)!}
                          note={lesson.usage?.[g.t]}
                        />
                      ),
                    )}
                  </span>
                  {open && (
                    <span className="my-1 ml-8 block border-l-4 border-stone-200 bg-stone-50 py-1 pl-3 indent-0 text-base leading-7">
                      <span className="ztai__py block text-stone-500">
                        {s.py}
                      </span>
                      <span className="ztai__vi block text-stone-800">
                        {s.vi}
                      </span>
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

/* ---------- Từ vựng ---------- */
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
              <td className="ztai__zh px-3 py-2 text-3xl text-stone-900">
                {r.zh}
              </td>
              <td className="px-3 py-2 text-stone-500">{r.py}</td>
              <td className="px-3 py-2 text-stone-600">{r.hv}</td>
              <td className="px-3 py-2 text-stone-800">{r.vi}</td>
              <td className="ztai__zh px-3 py-2 text-xl text-stone-600">
                {r.syn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Gloss({ py, vi }: { py: string; vi: string }) {
  return (
    <span className="mt-1 block border-l-4 border-stone-300 pl-2 text-sm leading-6">
      <span className="block text-stone-600">{py}</span>
      <span className="block text-stone-800">{vi}</span>
    </span>
  );
}

function ResetBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md border border-stone-300 px-3 py-1 text-sm text-stone-700 hover:bg-stone-100"
    >
      Làm lại
    </button>
  );
}

/* ---------- 选择解释 / 选择答案 ---------- */
function MCTab({ items }: { items: MC[] }) {
  const [sel, setSel] = useState<Record<number, number>>({});
  const score = items.filter((m, i) => sel[i] === m.a).length;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Đã làm {Object.keys(sel).length}/{items.length} · Đúng {score}
        </p>
        <ResetBtn onClick={() => setSel({})} />
      </div>
      {items.map((m, i) => {
        const picked = sel[i] !== undefined;
        return (
          <div
            key={i}
            className="rounded-lg border border-stone-200 bg-white p-4"
          >
            <p className="ztai__zh text-2xl text-stone-900">
              {i + 1}. {m.q}
            </p>
            {picked && <Gloss py={m.py} vi={m.vi} />}
            <div className="mt-3 grid gap-2">
              {m.opts.map(([zh, py, vi], j) => {
                const cls = !picked
                  ? "border-stone-200 hover:border-sky-400 hover:bg-sky-50"
                  : j === m.a
                    ? "border-emerald-400 bg-emerald-50 text-black"
                    : sel[i] === j
                      ? "border-stone-400 bg-stone-200 text-stone-600"
                      : "border-stone-200 text-stone-500";
                return (
                  <button
                    key={j}
                    disabled={picked}
                    onClick={() => setSel({ ...sel, [i]: j })}
                    className={`ztai__zh flex flex-col rounded-md border px-3 py-2 text-left text-2xl ${cls}`}
                  >
                    <span>
                      {L[j]}. {zh}
                      {picked && j === m.a && "  ✓"}
                      {picked && sel[i] === j && j !== m.a && "  ✗"}
                    </span>
                    {picked && (
                      <>
                        <span className="ztai__py mt-0.5 block text-sm text-gray-600">
                          {py}
                        </span>
                        <span className="ztai__vi block text-sm text-gray-800">
                          {vi}
                        </span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
            {picked && m.why && (
              <p className="mt-2 rounded-sm bg-yellow-100 p-3 text-sm text-stone-700">
                {m.why}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 判断正误 ---------- */
function TFTab({ items }: { items: TF[] }) {
  const [sel, setSel] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Đúng {items.filter((t, i) => sel[i] === t.a).length}/
          {Object.keys(sel).length} câu đã làm
        </p>
        <ResetBtn onClick={() => setSel({})} />
      </div>
      {items.map((t, i) => {
        const picked = sel[i] !== undefined;
        const ok = sel[i] === t.a;
        return (
          <div
            key={i}
            className={`rounded-lg border px-4 py-3 ${!picked ? "border-stone-200 bg-white" : ok ? "border-emerald-200 bg-emerald-50" : "border-stone-400 bg-stone-100"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-stone-900">
                {i + 1}. {t.q}
              </p>
              <div className="flex shrink-0 gap-2">
                {[true, false].map((b) => (
                  <button
                    key={String(b)}
                    disabled={picked}
                    onClick={() => setSel({ ...sel, [i]: b })}
                    className={`h-9 w-9 rounded-md border text-lg disabled:opacity-60 ${picked && b === t.a ? "border-emerald-500 bg-emerald-200 text-emerald-700" : "border-stone-300 hover:bg-sky-100"}`}
                  >
                    {b ? "对" : "错"}
                  </button>
                ))}
              </div>
            </div>
            {picked && (
              <>
                <Gloss py={t.py} vi={t.vi} />
                <p className="mt-2 text-sm text-stone-700">
                  {ok ? (
                    <span className="font-medium text-emerald-600">Đúng. </span>
                  ) : (
                    <span className="font-medium text-rose-600">Sai. </span>
                  )}
                  <span className="font-medium">
                    {ok ? "" : ` — đáp án: ${t.a ? "对" : "错"}. `}
                  </span>
                  {t.why}
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 填空 ---------- */
function FillTab({ items }: { items: Fill[] }) {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const allOn = items.every((_, i) => shown[i]);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Tự điền trong đầu, rồi bấm “Hiện đáp án”.
        </p>
        <button
          onClick={() =>
            setShown(
              allOn ? {} : Object.fromEntries(items.map((_, i) => [i, true])),
            )
          }
          className="rounded-md border border-sky-300 px-3 py-1 text-sm text-sky-800 hover:bg-sky-50"
        >
          {allOn ? "Ẩn tất cả" : "Hiện tất cả"}
        </button>
      </div>
      {items.map((f, i) => (
        <div
          key={i}
          className="rounded-lg border border-stone-200 bg-white p-4"
        >
          <p className="text-lg leading-9 text-stone-900">
            <span className="mr-2 text-stone-500">{i + 1}.</span>
            {f.parts.map((p, j) => (
              <span key={j}>
                {p}
                {j < f.answers.length &&
                  (shown[i] ? (
                    <span className="mx-1 rounded bg-sky-100 px-1 font-medium text-sky-900">
                      {f.answers[j]}
                    </span>
                  ) : (
                    <span className="mx-1 inline-block w-20 border-b-2 border-stone-400">
                      &nbsp;
                    </span>
                  ))}
              </span>
            ))}
          </p>
          <button
            onClick={() => setShown({ ...shown, [i]: !shown[i] })}
            className="mt-2 rounded-md border border-stone-300 px-3 py-1 text-sm text-stone-700 hover:bg-stone-100"
          >
            {shown[i] ? "Ẩn đáp án" : "Hiện đáp án"}
          </button>
          {shown[i] && <Gloss py={f.py} vi={f.vi} />}
        </div>
      ))}
    </div>
  );
}

/* ---------- 回答问题 ---------- */
function QATab({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-500">
        Bấm vào câu hỏi để xem câu trả lời mẫu.
      </p>
      {items.map((q, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-lg border border-stone-200 bg-white"
        >
          <button
            onClick={() => setOpen({ ...open, [i]: !open[i] })}
            className="w-full px-4 py-3 text-left hover:bg-sky-50"
          >
            <span className="block font-medium text-stone-900">
              {i + 1}. {q.q}
            </span>
            {open[i] && (
              <span className="block text-sm text-sky-800">
                {q.qp} — <span className="text-stone-600">{q.qv}</span>
              </span>
            )}
          </button>
          {open[i] && (
            <div className="border-t border-sky-200 bg-sky-50 px-4 py-3">
              <p className="leading-8 text-stone-900">{q.a}</p>
              <Gloss py={q.py} vi={q.vi} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- 用汉语解释词语 ---------- */
function DefineTab({ items }: { items: Def[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-500">
        Thử tự giải thích từ bằng tiếng Trung, rồi bấm vào từ để xem cách giải
        thích mẫu.
      </p>
      {items.map((d, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-lg border border-stone-200 bg-white"
        >
          <button
            onClick={() => setOpen({ ...open, [i]: !open[i] })}
            className="w-full px-4 py-3 text-left hover:bg-sky-50"
          >
            <span className="text-lg font-medium text-stone-900">
              {i + 1}. {d.w}
            </span>
            {open[i] && (
              <span className="ml-2 text-sm text-sky-800">
                {d.wp} — <span className="text-stone-600">{d.wv}</span>
              </span>
            )}
          </button>
          {open[i] && (
            <div className="border-t border-sky-200 bg-sky-50 px-4 py-3">
              <p className="leading-8 text-stone-900">{d.a}</p>
              <Gloss py={d.py} vi={d.vi} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- 连句成段 ---------- */
function OrderTab({ sents, answer }: { sents: Opt[]; answer: number[] }) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-500">
        Sắp xếp các câu sau thành một đoạn văn hoàn chỉnh.
      </p>
      {sents.map(([zh], i) => (
        <p
          key={i}
          className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-stone-900"
        >
          {i + 1}. {zh}
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
            Thứ tự đúng: {answer.join(" → ")}
          </p>
          <div className="space-y-2">
            {answer.map((n) => (
              <div key={n}>
                <p className="leading-7 text-stone-900">{sents[n - 1][0]}</p>
                <Gloss py={sents[n - 1][1]} vi={sents[n - 1][2]} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Khung chính ---------- */
/**
 *
Dạng	Bài dùng
选择解释 (giải nghĩa từ)	cả 4 bài
选择答案 (chọn đáp án)	cả 4 bài
判断正误 (đúng/sai)	cả 4 bài
填空 (điền chỗ trống)	Bài 1, 3, 4
回答问题 (trả lời câu hỏi)	Bài 1, 2, 3, 4
连句成段 (sắp xếp câu)	Bài 2
用汉语解释词语 (giải thích từ)	Bài 4
 */
export default function LessonViewer({ lesson }: { lesson: Lesson }) {
  const [tab, setTab] = useState(0);
  const tabs: { label: string; node: JSX.Element }[] = [
    { label: "课文", node: <Text lesson={lesson} /> },
    { label: "词汇", node: <VocabTab v={lesson.vocab} /> },
    { label: "练习(一) 选择解释", node: <MCTab items={lesson.ex1} /> },
    { label: "练习(二) 选择答案", node: <MCTab items={lesson.ex2} /> },
    { label: "练习(三) 判断正误", node: <TFTab items={lesson.ex3} /> },
    ...lesson.extras.map((e) => ({
      label: e.label,
      node:
        e.kind === "fill" ? (
          <FillTab items={e.items} />
        ) : e.kind === "qa" ? (
          <QATab items={e.items} />
        ) : e.kind === "define" ? (
          <DefineTab items={e.items} />
        ) : (
          <OrderTab sents={e.sents} answer={e.answer} />
        ),
    })),
  ];
  return (
    <div>
      <header className="mb-3 border-b border-stone-300 pb-2">
        <p className="text-sm text-stone-500">
          {lesson.unit ?? "第二单元 · Đơn nguyên 2"} · 汉语系列阅读(第一册)
        </p>
        <h1 className="ztai__zh mt-2 text-3xl text-sky-800">{lesson.title}</h1>
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
      {/* Mỗi tab giữ trạng thái riêng, chỉ ẩn khi không được chọn */}
      {tabs.map((t, i) => (
        <div key={t.label} className={tab === i ? "" : "hidden"}>
          {t.node}
        </div>
      ))}
    </div>
  );
}
