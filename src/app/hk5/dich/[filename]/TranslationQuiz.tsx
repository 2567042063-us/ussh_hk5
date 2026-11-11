"use client";

import { useState } from "react";

import { useQuiz } from "@shared/components/quizdich/useQuiz";

const BUTTON_PRIMARY =
  "rounded-lg bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40";
const BUTTON_OUTLINE =
  "rounded-lg border border-sky-600 px-4 py-2 text-sm text-sky-600 hover:bg-sky-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40";

function Session({ lesson, shuffled }: { lesson: Lesson; shuffled: boolean }) {
  const q = useQuiz(lesson.items, shuffled);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (q.phase === "answering") {
        q.check();
      } else {
        q.next();
      }
    }
  };

  if (q.phase === "finished") {
    return (
      <div className="rounded-[14px] px-0 py-3 text-center">
        <div className="mb-1 text-[13px] text-slate-500 dark:text-slate-300">
          Kết quả
        </div>
        <div className="my-1.5 text-[44px] font-bold">
          {q.score}/{q.total}
        </div>
        <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5">
          <button
            className={BUTTON_OUTLINE}
            onClick={() => q.restart(lesson.items)}
          >
            Làm lại cả bài
          </button>
          <button
            className={BUTTON_OUTLINE}
            disabled={q.wrongItems.length === 0}
            onClick={() => q.restart(q.wrongItems)}
          >
            Chỉ làm lại câu sai ({q.wrongItems.length})
          </button>
        </div>
        {q.wrongItems.length > 0 && (
          <div className="mt-5 grid gap-2.5 px-4 text-left">
            {q.results
              .filter((r) => !r.correct)
              .map((r, i) => (
                <div
                  key={i}
                  className="rounded-[10px] border border-[#d9dee4] p-[10px_12px] dark:border-[#2f3943]"
                >
                  <div className="break-all font-['Noto_Serif_SC','Songti_SC','SimSun',serif] text-2xl leading-[1.7]">
                    {r.item.zh}
                  </div>
                  <div className="mt-3 text-[15px] text-slate-500 dark:text-slate-300">
                    {r.item.pinyin}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }

  const { current } = q;
  const checked = q.phase === "checked";

  return (
    <>
      <div className="mb-2 h-1 overflow-hidden">
        <div
          className="duration-250 h-full transition-[width]"
          style={{ width: `${(q.index / q.total) * 100}%` }}
        />
      </div>
      <div>
        <div className="mb-2.5 flex justify-between text-[13px] text-slate-500 dark:text-slate-300">
          <span>
            Câu {q.index + 1}/{q.total}
          </span>
          <span>Đúng: {q.score}</span>
        </div>

        <p className="text-md mb-4">
          {current.speaker && (
            <span className="font-light text-slate-500">
              {current.speaker}:{" "}
            </span>
          )}
          {current.vietnamese}
        </p>

        <textarea
          className="min-h-24 w-full resize-y rounded-sm border border-slate-400 bg-transparent p-2 text-2xl opacity-100 focus-visible:outline-1 focus-visible:outline-slate-200 disabled:opacity-80 dark:border-slate-600"
          lang="zh-CN"
          placeholder="Nhập câu tiếng Trung…"
          value={q.input}
          disabled={checked}
          onChange={(e) => q.setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
        />

        {!checked && (
          <>
            {q.showPinyin && (
              <div className="mt-3 text-[15px] text-slate-500 dark:text-slate-300">
                {current.pinyin}
              </div>
            )}
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
              <button
                className={BUTTON_PRIMARY}
                disabled={!q.input.trim()}
                onClick={q.check}
              >
                Kiểm tra
              </button>
              <button
                className={BUTTON_OUTLINE}
                onClick={() => q.setShowPinyin(true)}
                disabled={q.showPinyin}
              >
                Gợi ý pinyin
              </button>
              <button className={BUTTON_OUTLINE} onClick={q.giveUp}>
                Bỏ qua
              </button>
            </div>
          </>
        )}

        {checked && (
          <>
            <div
              className={`mt-4 rounded-[10px] px-4 py-3 font-semibold ${
                q.lastCorrect
                  ? "bg-[#e1f1ec] text-[#23735f] dark:bg-[#1a3a31] dark:text-[#6fd0b4]"
                  : "bg-[#fbe9e5] text-[#b83a27] dark:bg-[#43211b] dark:text-[#ff8b78]"
              }`}
            >
              {q.lastCorrect
                ? "Chính xác"
                : "Chưa đúng, xem chỗ khác nhau bên dưới"}
            </div>

            {!q.lastCorrect && q.diff && q.input.trim() && (
              <div className="mt-4">
                <div className="mb-1 text-[13px] text-slate-500 dark:text-slate-300">
                  Kiểm tra bài của bạn (đã bỏ dấu câu)
                </div>
                <div className="ztai__zh break-all">
                  {q.diff.map((t, i) => (
                    <span
                      key={i}
                      className={
                        t.type === "same"
                          ? "text-[#23735f] dark:text-[#6fd0b4]"
                          : t.type === "extra"
                            ? "text-rose-600 line-through dark:text-rose-300"
                            : "border-b-2 border-dashed border-rose-600 text-rose-600 dark:border-rose-300 dark:text-slate-300"
                      }
                    >
                      {t.ch}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="mb-1 text-sm text-slate-500 dark:text-slate-300">
                Đáp án
              </div>
              <div className="ztai__zh break-all">{current.zh}</div>
              <div className="mt-3 text-[15px] text-slate-500 dark:text-slate-300">
                {current.pinyin}
              </div>
            </div>

            {current.notes && (
              <div
                className="mt-4 border-t border-[#d9dee4] pt-3.5 text-[15px] leading-[1.6] dark:border-[#2f3943]"
                dangerouslySetInnerHTML={{ __html: current.notes }}
              />
            )}

            <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
              <button className={BUTTON_OUTLINE} onClick={q.next} autoFocus>
                {q.index + 1 >= q.total ? "Xem kết quả" : "Câu tiếp"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default function TranslationQuiz({ lesson }: { lesson: Lesson }) {
  const [shuffled, setShuffled] = useState(false);

  return (
    <div className="mx-auto w-full px-4 py-6">
      <h1 className="ztai__zh mb-4 text-xl text-sky-700">{lesson.title}</h1>
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm">
          <input
            type="checkbox"
            checked={shuffled}
            onChange={(e) => {
              setShuffled(e.target.checked);
            }}
          />{" "}
          Xáo trộn câu
        </label>
      </div>
      <Session
        key={`${lesson.id}-${shuffled}`}
        lesson={lesson}
        shuffled={shuffled}
      />
    </div>
  );
}
