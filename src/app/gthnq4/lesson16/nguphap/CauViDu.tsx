"use client";

import { renderMarks, sentences } from "./ExercisesTab";

/* Tab 练习 bài 16 — tổng hợp toàn bộ câu ví dụ trong mục 语法
   thành 4 dạng bài: 填空 · 连词成句 · 翻译 · 例句
*/

function Card({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <article className="min-w-0 overflow-hidden rounded-sm border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900 sm:p-4">
      <p className="mb-2 text-xs text-stone-400">{index + 1}</p>
      {children}
    </article>
  );
}

export default function CauViDu() {
  return (
    <div>
      <h1 className="ztai__zh mb-1 text-2xl font-bold">练习 · 存现句</h1>
      <p className="mb-5 text-stone-500">
        Tổng hợp câu ví dụ trong mục 语法 thành bài tập
      </p>

      <section className="mt-8">
        <h2 className="ztai__zh mb-1 text-xl font-bold">
          例句 -{" "}
          <span className="mb-3 text-stone-500">
            Danh sách toàn bộ câu ví dụ
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {sentences.map((s, i) => (
            <Card key={s.zh} index={i}>
              <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
                {renderMarks(s.zh, s.marks)}
              </p>
              <p className="wrap-break-word mt-1 text-sm text-stone-500 dark:text-sky-300">
                {s.py}
              </p>
              <p className="mt-2 text-sm leading-5 text-stone-800 dark:text-stone-300">
                {s.vi}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
