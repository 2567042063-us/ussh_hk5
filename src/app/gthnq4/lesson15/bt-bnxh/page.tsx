"use client";

import { Fragment, useState } from "react";
import clsx from "clsx";

import { compoundExercises, exercises, passage } from "./data";
import { ExerciseGroup } from "./exercise-group";

const markClasses = {
  // Bổ ngữ xu hướng
  bnxh: "rounded-sm bg-yellow-200 px-0.5 text-inherit dark:bg-yellow-700",
  // Bổ ngữ kết quả
  bnkq: "rounded-sm bg-lime-300 px-0.5 text-stone-900 dark:bg-lime-700 dark:text-slate-100",
  // Tân ngữ nằm giữa bổ ngữ xu hướng
  object:
    "mx-px rounded-sm bg-transparent px-0.5 text-inherit ring-1 ring-yellow-300 dark:ring-yellow-600",
} as const;

export default function Page() {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <div className="container mx-auto p-3 text-stone-800 dark:text-slate-100 sm:px-6">
      <section>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <button
            type="button"
            aria-pressed={highlighted}
            onClick={() => setHighlighted((current) => !current)}
            className={clsx(
              "rounded border px-3 py-1 text-sm hover:bg-slate-50",
              highlighted
                ? "border-sky-600 bg-sky-50 text-sky-700"
                : "border-stone-300 text-stone-700",
            )}
          >
            Tô sáng ≖⩊≖
          </button>
          <ul
            aria-label="Chú thích màu"
            className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-600 dark:text-slate-300"
          >
            <li className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block h-3 w-3 rounded-sm bg-yellow-200 dark:bg-yellow-700"
              />
              Vàng: BNXH
            </li>
            <li className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block h-3 w-3 rounded-sm bg-lime-500 dark:bg-lime-700"
              />
              Xanh: BNKQ
            </li>
          </ul>
        </div>
        <article>
          {passage.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="font-kaiti indent-8 text-xl leading-9 text-stone-800 dark:text-slate-100 sm:text-2xl"
            >
              {paragraph.map((segment, segmentIndex) =>
                typeof segment === "string" ? (
                  <Fragment key={segmentIndex}>{segment}</Fragment>
                ) : (
                  <mark
                    key={segmentIndex}
                    className={
                      highlighted
                        ? markClasses[segment.kind]
                        : "bg-transparent px-0 text-inherit"
                    }
                  >
                    {segment.text}
                  </mark>
                ),
              )}
            </p>
          ))}
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-slate-100">
          2. Bài tập: điền động từ + bổ ngữ phù hợp
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">
          Mỗi chỗ trống điền cả động từ và bổ ngữ (ví dụ 走进, 拿下来). Có chỗ
          bổ ngữ bị tách bởi tân ngữ nên có hai ô.
        </p>
        <ExerciseGroup exercises={exercises} />
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-slate-100">
          3. Bài tập 5: điền bổ ngữ xu hướng kép
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">
          在空格里填入适当的复合趋向补语 (Điền bổ ngữ xu hướng kép thích hợp vào
          chỗ trống). Chỉ điền bổ ngữ, ví dụ 上来, 下去.
        </p>
        <ExerciseGroup exercises={compoundExercises} />
      </section>
    </div>
  );
}
