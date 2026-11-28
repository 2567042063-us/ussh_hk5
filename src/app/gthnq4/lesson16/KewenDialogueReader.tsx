"use client";

import { useState } from "react";

import type { Dialogue, Sentence } from "./Kewen";

function Reveal({ sentence }: { sentence: Sentence }) {
  return (
    <div className="border-l-2 border-stone-300 pl-3">
      <p className="text-sm leading-6 text-stone-500">{sentence.py}</p>
      <p className="text-[15px] leading-6 text-stone-800">{sentence.vi}</p>
    </div>
  );
}

export default function DialogueReader({
  dialogue,
  audioSrc,
}: {
  dialogue: Dialogue;
  audioSrc: string;
}) {
  const { title, intro, turns } = dialogue;

  const allIds = [
    "intro",
    ...turns.flatMap((t, ti) => t.sentences.map((_, si) => `t${ti}-${si}`)),
  ];

  const [open, setOpen] = useState<Set<string>>(new Set());
  const allOpen = open.size === allIds.length;

  const toggle = (id: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(allIds));

  const sentenceButtonClass = (id: string) =>
    `ztai__zh text-2xl cursor-pointer rounded-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 ${
      open.has(id) ? "bg-stone-100" : "hover:bg-amber-50"
    }`;

  return (
    <main className="px-6 pb-5">
      <div className="z-9 sticky top-0 mb-3 w-full bg-white/95 py-2 backdrop-blur dark:bg-slate-800/95">
        <audio controls preload="none" className="lesson-audio h-10 w-full">
          <source src={audioSrc} type="audio/mpeg" />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
          <span className="text-stone-600">一</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            课文 <span className="text-sm">Kèwén</span>{" "}
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
      <p className="mb-6 text-sm text-stone-500">
        Bấm vào từng câu để xem pinyin và nghĩa tiếng Việt.
      </p>

      <h2 className="mb-1 text-center font-serif text-2xl text-stone-900">
        {title.zh}
      </h2>
      <p className="mb-5 text-center text-sm text-stone-500">
        {title.py} — {title.vi}
      </p>

      <article>
        <section className="mb-4 space-y-2">
          <p>
            <button
              type="button"
              onClick={() => toggle("intro")}
              aria-expanded={open.has("intro")}
              className={`${sentenceButtonClass("intro")} !text-lg text-stone-600`}
            >
              {intro.zh}
            </button>
          </p>
          {open.has("intro") && (
            <div className="pl-2">
              <Reveal sentence={intro} />
            </div>
          )}
        </section>

        <div>
          {turns.map((turn, turnIndex) => {
            const opened = turn.sentences
              .map((sentence, sentenceIndex) => ({
                sentence,
                id: `t${turnIndex}-${sentenceIndex}`,
              }))
              .filter(({ id }) => open.has(id));

            return (
              <div
                key={turnIndex}
                className="grid grid-cols-[4.5rem_1fr] gap-x-3 py-1"
              >
                <div className="pt-1 text-stone-500">
                  <p className="font-serif text-base leading-6 text-stone-700">
                    {turn.speaker.zh}
                  </p>
                  <p className="text-xs">{turn.speaker.vi}</p>
                </div>

                <div className="space-y-1">
                  <p className="font-serif text-xl leading-10 text-stone-900">
                    {turn.sentences.map((sentence, sentenceIndex) => {
                      const id = `t${turnIndex}-${sentenceIndex}`;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggle(id)}
                          aria-expanded={open.has(id)}
                          className={sentenceButtonClass(id)}
                        >
                          {sentence.zh}
                        </button>
                      );
                    })}
                  </p>
                  {opened.length > 0 && (
                    <div className="space-y-3 pl-2">
                      {opened.map(({ sentence, id }) => (
                        <Reveal key={id} sentence={sentence} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
}
