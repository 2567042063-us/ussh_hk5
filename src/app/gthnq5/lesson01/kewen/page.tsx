"use client";

import { useState } from "react";

import { paragraphs, questions, type Sentence } from "./Kewen";

const allIds = [
  ...paragraphs.flatMap((paragraph, paragraphIndex) =>
    paragraph.map((_, sentenceIndex) => `p${paragraphIndex}-${sentenceIndex}`),
  ),
  ...questions.map((_, index) => `q${index}`),
];

function Reveal({ sentence }: { sentence: Sentence }) {
  return (
    <div className="border-l-2 border-stone-300 pl-3">
      <p className="text-sm leading-6 text-stone-500">{sentence.py}</p>
      <p className="text-[15px] leading-6 text-stone-800">{sentence.vi}</p>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const allOpen = open.size === allIds.length;
  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(allIds));
  const sentenceButtonClass = (id: string) =>
    `cursor-pointer rounded-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
      open.has(id) ? "bg-stone-100" : "hover:bg-amber-50"
    }`;

  return (
    <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
      <div className="mb-3 w-full opacity-80">
        <audio controls preload="none" className="lesson-audio h-10 w-full">
          <source
            src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/01_kewen.mp3"
            type="audio/mpeg"
          />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
          <span className="ztai__zh text-stone-600">一</span>
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

      <article className="space-y-1">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <section key={paragraphIndex} className="ztai__paragraph">
            {paragraph.map((sentence, sentenceIndex) => {
              const id = `p${paragraphIndex}-${sentenceIndex}`;

              return (
                <div key={id} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={open.has(id)}
                    className={`ztai__zh block w-full text-left font-serif text-xl leading-10 text-stone-900 ${sentenceButtonClass(id)}`}
                  >
                    {sentence.zh}
                  </button>
                  {open.has(id) && (
                    <div className="pl-2">
                      <Reveal sentence={sentence} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        ))}
      </article>

      <section className="mt-10 border-t border-stone-300 pt-6">
        <h2 className="mb-4 text-stone-800">
          <span className="ztai__zh">回答课文问题</span>{" "}
          <span className="text-sm">
            Answer the questions according to the text
          </span>
        </h2>
        <ol className="space-y-4">
          {questions.map((question, index) => {
            const id = `q${index}`;

            return (
              <li key={id} className="space-y-2 pl-4">
                <div className="flex gap-2">
                  <span className="ztai__zh font-serif text-lg text-stone-900">
                    （{index + 1}）
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={open.has(id)}
                    className={`ztai__zh font-serif text-lg leading-8 text-stone-900 ${sentenceButtonClass(id)}`}
                  >
                    {question.zh}
                  </button>
                </div>
                {open.has(id) && (
                  <div className="pl-12">
                    <Reveal sentence={question} />
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
