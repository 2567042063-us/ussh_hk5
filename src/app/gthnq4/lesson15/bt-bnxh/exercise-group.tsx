"use client";

import { Fragment, useState } from "react";

import type { Exercise } from "./data";

export function ExerciseGroup({
  exercises: exerciseItems,
}: {
  exercises: Exercise[];
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [results, setResults] = useState<
    Record<string, "correct" | "incorrect">
  >({});
  const [score, setScore] = useState("");

  const blanks = exerciseItems.flatMap((exercise, exerciseIndex) =>
    exercise.segments.flatMap((segment, segmentIndex) =>
      typeof segment === "string"
        ? []
        : [
            {
              id: `${exerciseIndex}-${segmentIndex}`,
              answer: segment.answer,
            },
          ],
    ),
  );

  const checkAnswers = () => {
    let correct = 0;
    const nextResults: Record<string, "correct" | "incorrect"> = {};

    blanks.forEach(({ id, answer }) => {
      const isCorrect = (values[id] ?? "").trim() === answer;
      if (values[id]?.trim()) {
        nextResults[id] = isCorrect ? "correct" : "incorrect";
      }
      if (isCorrect) correct += 1;
    });

    setResults(nextResults);
    setScore(`${correct} / ${blanks.length} ô đúng`);
  };

  const showAnswers = () => {
    const nextValues: Record<string, string> = {};
    const nextResults: Record<string, "correct" | "incorrect"> = {};

    blanks.forEach(({ id, answer }) => {
      nextValues[id] = answer;
      nextResults[id] = "correct";
    });

    setValues(nextValues);
    setResults(nextResults);
  };

  const reset = () => {
    setValues({});
    setResults({});
    setScore("");
  };

  return (
    <>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={checkAnswers}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Kiểm tra
        </button>
        <button
          type="button"
          onClick={showAnswers}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Hiện đáp án
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Làm lại
        </button>
        <span
          className="min-h-6 font-semibold text-sky-700 dark:text-sky-300"
          aria-live="polite"
        >
          {score}
        </span>
      </div>

      <ol className="mt-4 list-decimal space-y-3 pl-10 marker:font-bold marker:text-stone-700 dark:marker:text-stone-300">
        {exerciseItems.map((exercise, exerciseIndex) => (
          <li
            key={exerciseIndex}
            className="rounded-sm border border-stone-200 bg-white px-4 py-3 text-lg leading-9 text-stone-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <div>
              {exercise.segments.map((segment, segmentIndex) => {
                if (typeof segment === "string") {
                  return <Fragment key={segmentIndex}>{segment}</Fragment>;
                }

                const id = `${exerciseIndex}-${segmentIndex}`;
                const result = results[id];
                const resultClass =
                  result === "correct"
                    ? "border-sky-600 text-sky-700 dark:border-sky-400 dark:text-sky-300"
                    : result === "incorrect"
                      ? "border-red-600 text-red-700 dark:border-red-400 dark:text-red-300"
                      : "border-stone-400 text-stone-800 focus:border-sky-600 dark:border-slate-500 dark:text-slate-100";

                return (
                  <input
                    key={segmentIndex}
                    type="text"
                    size={4}
                    aria-label={`Đáp án câu ${exerciseIndex + 1}`}
                    value={values[id] ?? ""}
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        [id]: event.target.value,
                      }))
                    }
                    className={`mx-1 w-[4.6em] border-0 border-b-2 bg-transparent px-0.5 text-center text-base outline-none transition-colors focus:ring-0 ${resultClass}`}
                  />
                );
              })}
            </div>
            <span className="mt-1 block text-xs leading-5 text-stone-500 dark:text-slate-400">
              Gợi ý: {exercise.hint}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
