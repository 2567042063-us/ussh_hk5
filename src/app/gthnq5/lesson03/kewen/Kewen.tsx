"use client";

import { useState } from "react";

import { paragraphs, questions, type Sentence } from "./data";

const allIds = [
  ...paragraphs.flatMap((paragraph, paragraphIndex) =>
    paragraph.s.map(
      (_, sentenceIndex) => `p${paragraphIndex}-${sentenceIndex}`,
    ),
  ),
  ...questions.map((_, index) => `q${index}`),
];

function Reveal({ s }: { s: Sentence }) {
  return (
    <div className="border-l-2 border-stone-300 pl-3">
      <p className="text-sm leading-6 text-stone-500">{s.py}</p>
      <p className="text-[15px] leading-6 text-stone-800">{s.vi}</p>
    </div>
  );
}

export default function Lesson2Kewen() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const allOpen = open.size === allIds.length;
  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(allIds));

  const sentenceBtn = (id: string) =>
    `cursor-pointer rounded-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
      open.has(id) ? "bg-stone-100" : "hover:bg-amber-50"
    }`;

  return (
    <main
      id="gthnq5bai2kewen"
      className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3"
    >
      <div className="z-9 sticky top-0 mb-3 w-full bg-white/95 py-2 backdrop-blur dark:bg-slate-800/95">
        <audio controls preload="none" className="lesson-audio h-10 w-full">
          <source
            src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/03_kewen.mp3"
            type="audio/mpeg"
          />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>
      {/* Section title */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
          <span className="text-stone-600">一</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">课文</span>{" "}
            <span className="text-sm">Kèwén</span>{" "}
            <span className="text-sm">Text</span>
          </span>
        </div>
        <button
          type="button"
          onClick={toggleAll}
          className="rounded border border-stone-300 px-3 py-1 text-sm text-stone-700 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {allOpen ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
        </button>
      </div>

      {/* Text */}
      <article className="space-y-1">
        {paragraphs.map((para, i) => {
          const opened = para.s
            .map((s, j) => ({ s, id: `p${i}-${j}` }))
            .filter((x) => open.has(x.id));
          const isSign = para.kind === "sign";
          const base =
            "font-serif text-xl leading-10 text-stone-900 " +
            (para.kind ? "" : "indent-8");
          return (
            <section key={i} className="ztai__paragraph space-y-2">
              {isSign ? (
                <div className="text-right font-serif text-xl leading-10 text-stone-900">
                  {para.s.map((s, j) => {
                    const id = `p${i}-${j}`;
                    return (
                      <p key={id}>
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          aria-expanded={open.has(id)}
                          className={`ztai__zh ${sentenceBtn(id)}`}
                        >
                          {s.zh}
                        </button>
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p className={base}>
                  {para.s.map((s, j) => {
                    const id = `p${i}-${j}`;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggle(id)}
                        aria-expanded={open.has(id)}
                        className={`ztai__zh block w-full text-left ${sentenceBtn(id)}`}
                      >
                        {s.zh}
                      </button>
                    );
                  })}
                </p>
              )}
              {opened.length > 0 && (
                <div className="space-y-3 pl-2">
                  {opened.map(({ s, id }) => (
                    <Reveal key={id} s={s} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </article>

      {/* Questions */}
      <section className="mt-10 border-t border-stone-300 pt-6">
        <h2 className="mb-4 text-stone-800">
          <span className="ztai__zh font-semibold">回答课文问题</span>{" "}
          <span className="text-sm">
            Answer the questions according to the text
          </span>
        </h2>
        <ol className="space-y-4">
          {questions.map((q, i) => {
            const id = `q${i}`;
            return (
              <li key={id} className="space-y-2 pl-4">
                <div className="flex gap-2">
                  <span className="ztai__zh font-serif text-lg text-stone-900">
                    （{i + 1}）
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={open.has(id)}
                    className={`ztai__zh font-serif text-lg leading-8 text-stone-900 ${sentenceBtn(id)}`}
                  >
                    {q.zh}
                  </button>
                </div>
                {open.has(id) && (
                  <div className="pl-12">
                    <Reveal s={q} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
