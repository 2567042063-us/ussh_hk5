"use client";

import { useState } from "react";

import type { GameWord } from "@shared/data/tuvung/game-vocabTypes";

type Mode = "mix" | "zh" | "vi" | "fill";
type QuestionMode = Exclude<Mode, "mix">;

interface Question {
  mode: QuestionMode;
  options: string[];
  answer: string;
}

interface SelectedAnswer {
  answer: string;
  correct: boolean;
}

const modes: { id: Mode; label: string }[] = [
  { id: "mix", label: "Trộn" },
  { id: "zh", label: "汉 → Việt" },
  { id: "vi", label: "Việt → 汉" },
  { id: "fill", label: "Điền từ" },
];

function shuffle<T>(items: readonly T[]): T[] {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[otherIndex]] = [
      shuffled[otherIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

function createQuestion(
  mode: Mode,
  wordIndex: number,
  words: readonly GameWord[],
): Question {
  const questionMode: QuestionMode =
    mode === "mix"
      ? (["zh", "vi", "fill"] as const)[Math.floor(Math.random() * 3)]
      : mode;
  const word = words[wordIndex];
  const answer = questionMode === "zh" ? word[2] : word[0];
  const optionIndex = questionMode === "zh" ? 2 : 0;
  const distractors = shuffle(words.filter((_, index) => index !== wordIndex))
    .slice(0, 3)
    .map((entry) => entry[optionIndex]);

  return {
    mode: questionMode,
    answer,
    options: shuffle([...distractors, answer]),
  };
}

export default function HoctuvungGame({
  words,
  title = "Game học từ vựng tiếng Trung",
}: {
  words: readonly GameWord[];
  title?: string;
}) {
  const [mode, setMode] = useState<Mode>("mix");
  const [queue, setQueue] = useState<number[]>(() =>
    words.map((_, index) => index),
  );
  const [question, setQuestion] = useState<Question>(() => ({
    mode: "zh",
    answer: words[0][2],
    options: words.slice(0, 4).map((word) => word[2]),
  }));
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<SelectedAnswer | null>(
    null,
  );

  function resetGame(nextMode: Mode) {
    const nextQueue = shuffle(words.map((_, index) => index));
    setMode(nextMode);
    setQueue(nextQueue);
    setQuestion(createQuestion(nextMode, nextQueue[0], words));
    setScore(0);
    setTotal(0);
    setSelectedAnswer(null);
  }

  const wordIndex = queue[0];
  const word = wordIndex === undefined ? undefined : words[wordIndex];
  const remaining = Math.max(
    0,
    queue.length - 1 + (selectedAnswer && !selectedAnswer.correct ? 1 : 0),
  );

  function chooseAnswer(answer: string) {
    if (!word || selectedAnswer) return;

    const correct = answer === question.answer;
    setSelectedAnswer({ answer, correct });
    setTotal((current) => current + 1);
    if (correct) setScore((current) => current + 1);
  }

  function goToNextQuestion() {
    if (!word || !selectedAnswer) return;

    const nextQueue = selectedAnswer.correct
      ? queue.slice(1)
      : [...queue.slice(1), wordIndex];
    setQueue(nextQueue);
    setSelectedAnswer(null);

    if (nextQueue.length > 0) {
      setQuestion(createQuestion(mode, nextQueue[0], words));
    }
  }

  return (
    <section className="box-border min-h-full w-full pb-[env(safe-area-inset-bottom,0px)] pt-[env(safe-area-inset-top,0px)] font-sans">
      <main className="mx-auto w-full max-w-[520px] p-4">
        <h1 className="my-1 mb-3 text-lg">🀄 {title}</h1>

        <div
          aria-label="Chọn chế độ chơi"
          className="mb-3 flex flex-wrap gap-1.5"
        >
          {modes.map((item) => (
            <button
              aria-pressed={mode === item.id}
              className={`cursor-pointer rounded-full border border-stone-300 px-2.5 py-1.5 text-[13px] dark:border-stone-700 ${
                mode === item.id
                  ? "border-red-700 text-red-700 dark:border-red-300 dark:text-red-300"
                  : "text-stone-700 dark:text-stone-300"
              }`}
              key={item.id}
              onClick={() => resetGame(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mb-2 flex justify-between text-[13px] text-stone-500 dark:text-stone-400"
        >
          <span>
            Đúng {score}/{total}
          </span>
          <span>Còn {remaining} từ</span>
        </div>

        <div className="rounded-lg p-5 text-center shadow dark:border dark:border-stone-700">
          {!word ? (
            <>
              <div className="my-2.5 text-[22px]">🎉 Xong rồi!</div>
              <div>
                Điểm: {score}/{total}
              </div>
              <button
                className="mt-3 w-full cursor-pointer rounded-[10px] border border-red-700 p-3 text-base text-red-700 dark:border-red-300 dark:text-red-300"
                onClick={() => resetGame(mode)}
                type="button"
              >
                Chơi lại
              </button>
            </>
          ) : (
            <>
              {question.mode === "zh" ? (
                <div className="my-1.5 text-[40px] font-semibold">
                  {word[0]}
                  <div className="text-base font-normal text-stone-500 dark:text-stone-400">
                    {word[1]}
                  </div>
                </div>
              ) : question.mode === "vi" ? (
                <div className="my-1.5 text-xl leading-normal">{word[2]}</div>
              ) : (
                <div className="my-1.5 text-xl leading-normal">
                  {word[3].split(word[0]).join("＿＿")}
                </div>
              )}

              <div className="mt-4 grid gap-2">
                {question.options.map((option) => {
                  const isAnswer = option === question.answer;
                  const isSelected = selectedAnswer?.answer === option;
                  const optionClass = selectedAnswer
                    ? isAnswer
                      ? "border-green-700 bg-green-700 text-slate-200 dark:border-green-400 "
                      : isSelected
                        ? "border-red-700 bg-red-700 text-slate-200 dark:border-red-400"
                        : ""
                    : "";

                  return (
                    <button
                      className={`cursor-pointer rounded-[10px] border border-stone-300 p-3 text-base disabled:cursor-default dark:border-stone-700 ${optionClass}`}
                      disabled={selectedAnswer !== null}
                      key={option}
                      onClick={() => chooseAnswer(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer && (
                <div className="mt-3.5 border-t border-dashed border-stone-300 pt-3 text-left text-[15px] leading-[1.6] dark:border-stone-700">
                  <div>
                    <b className="text-[22px]">{word[0]}</b>{" "}
                    <span className="text-base text-stone-500 dark:text-stone-400">
                      {word[1]}
                    </span>
                  </div>
                  <div>{word[2]}</div>
                  <div className="text-stone-500 dark:text-stone-400">
                    Ví dụ:
                  </div>
                  <div>{word[3]}</div>
                  <div className="text-base text-stone-500 dark:text-stone-400">
                    {word[4]}
                  </div>
                  <div>{word[5]}</div>
                  <button
                    className="mt-3 w-full cursor-pointer rounded-[10px] border border-sky-700 p-3 text-base uppercase text-sky-700 dark:border-sky-300 dark:text-sky-300"
                    onClick={goToNextQuestion}
                    type="button"
                  >
                    Tiếp →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </section>
  );
}
