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
    <div className="mx-auto w-full bg-white shadow-md">
      <header className="border-b border-stone-300">
        <div className="flex items-end gap-3 px-3 pb-4 pt-6 sm:gap-6 sm:px-6 sm:pt-8">
          <div className="shrink-0 border border-stone-400 bg-white px-3 py-2 text-center shadow-[3px_3px_0_0_rgba(0,0,0,0.25)] sm:px-4">
            <div className="text-xs text-stone-700">Dì-yī kè</div>
            <div className="ztai__zh font-serif text-2xl text-stone-900">
              第一课
            </div>
            <div className="text-sm italic text-stone-600">Lesson 1</div>
          </div>
          <div className="min-w-0 flex-1 text-center">
            <div className="text-sm tracking-widest text-stone-700">
              Lí jiā de shíhou
            </div>
            <h1 className="ztai__zh font-serif text-3xl text-stone-900 sm:text-4xl">
              离家的时候
            </h1>
            <p className="font-serif text-lg italic text-stone-600">
              At the moment of leaving home
            </p>
          </div>
        </div>
      </header>

      {/* file nghe */}
      <div className="mt-3 w-full px-5">
        <audio controls preload="none" className="h-10 w-full">
          <source
            src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/01_kewen.mp3"
            type="audio/mpeg"
          />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>

      <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
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

        <article className="space-y-6">
          {paragraphs.map((paragraph, paragraphIndex) => (
            <section key={paragraphIndex} className="space-y-1">
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
    </div>
  );
}
