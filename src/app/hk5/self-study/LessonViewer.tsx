"use client";

import { useMemo, useState } from "react";

import type { LessonData, LessonLine, LessonTab } from "./data/types";

function HtmlText({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function VocabularyGrid({
  vocabulary,
}: {
  vocabulary: LessonData["vocabulary"];
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return vocabulary;
    return vocabulary.filter((item) =>
      [item.hanzi, item.hanViet, item.wordClass, item.meaning].some((value) =>
        value?.toLowerCase().includes(q),
      ),
    );
  }, [query, vocabulary]);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-sky-700">二、生词</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Từ vựng
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {vocabulary.length} từ trong bài học
          </p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm chữ Hán, Hán Việt, nghĩa..."
          className="w-full rounded-xl border border-sky-100 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 sm:max-w-xs"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-sm border border-sky-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="ztai__zh text-3xl font-semibold text-sky-800">
                {item.hanzi}
              </h3>
              <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
                {item.wordClass}
              </span>
            </div>
            <p className="mt-2 text-sm font-light uppercase text-slate-500">
              {/* Hán Việt:  */} {item.hanViet}
            </p>
            <p className="ztai__py text-md mt-2 font-light text-slate-700">
              {/* Hán Việt:  */}/ {item.pinyin} /
            </p>
            <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-700">
              {item.meaning}
            </p>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full rounded-xl border border-dashed border-sky-200 p-8 text-center text-sm text-slate-500">
            Không tìm thấy từ phù hợp.
          </p>
        )}
      </div>
    </div>
  );
}

function LessonLineCard({
  line,
  initiallyOpen = false,
}: {
  line: LessonLine;
  initiallyOpen?: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      aria-expanded={open}
      className="group w-full rounded-sm border border-sky-100 bg-white p-4 text-left transition focus:outline-none sm:p-5"
    >
      <div className="flex items-start gap-3">
        {line.speaker && (
          <span className="mt-1 shrink-0 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
            {line.speaker}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <HtmlText
            html={line.zh}
            className="block text-lg leading-8 text-slate-900 sm:text-xl"
          />
          {open && (
            <div className="mt-2 space-y-3 border-t border-sky-100 pt-2">
              <div>
                {/* <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-sky-600">
                  Pinyin
                </p> */}
                <HtmlText
                  html={line.pinyin}
                  className="block text-sm leading-6 text-sky-800"
                />
              </div>
              <div>
                {/* <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-sky-600">
                  Tiếng Việt
                </p> */}
                <HtmlText
                  html={line.vi}
                  className="block text-sm leading-6 text-slate-600"
                />
              </div>
            </div>
          )}
        </div>
        {/* <span
          className="mt-1 shrink-0 text-sky-500 transition group-hover:text-sky-700"
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span> */}
      </div>
      {/* {!open && (
        <p className="mt-2 pl-0 text-xs text-sky-600 sm:pl-0">
          Nhấn để xem pinyin và bản dịch
        </p>
      )} */}
    </button>
  );
}

function TextSection({
  sectionId,
  sections,
}: {
  sectionId: string;
  sections: LessonData["sections"];
}) {
  const section = sections.find((item) => item.id === sectionId);
  if (!section) return null;

  return (
    <div>
      <div className="mb-5">
        <p className="text-sm font-medium text-sky-700">一、课文</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="mt-1 text-sm text-slate-500">{section.subtitle}</p>
        )}
      </div>

      {section.intro && (
        <div className="mb-4 rounded-sm border border-sky-200 bg-sky-50/70 p-4 sm:p-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            旁白
          </p>
          <LessonLineCard line={section.intro} />
        </div>
      )}

      <div className="space-y-3">
        {section.lines.map((line) => (
          <LessonLineCard key={line.id} line={line} />
        ))}
      </div>
    </div>
  );
}

function GrammarPlaceholder() {
  return (
    <div className="rounded-sm border-2 border-dashed border-sky-200 bg-sky-50/50 px-6 py-14 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-sm bg-white text-2xl text-sky-600 shadow-sm">
        文
      </div>
      <h2 className="text-xl font-bold text-slate-800">Ngữ pháp</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        Khu vực này đang để trống. Bạn có thể bổ sung các điểm ngữ pháp sau
        trong file dữ liệu hoặc tạo component riêng.
      </p>
    </div>
  );
}

export default function LessonViewer({ lesson }: { lesson: LessonData }) {
  const [activeTab, setActiveTab] = useState(lesson.tabs[0]?.id ?? "");
  const currentTab: LessonTab | undefined = lesson.tabs.find(
    (tab) => tab.id === activeTab,
  );

  return (
    <main className="w-full flex-1 px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-3 overflow-hidden rounded-sm bg-gradient-to-br from-sky-600 via-sky-600 to-cyan-500 p-6 text-white shadow-lg shadow-sky-200 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-sky-100">
            汉语学习 · BÀI HỌC TIẾNG TRUNG
          </p>
          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">{lesson.title}</h1>
              <p className="mt-2 text-sky-100">{lesson.subtitle}</p>
            </div>
            <span className="w-fit rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm">
              HSK · Giáo trình
            </span>
          </div>
        </header>

        <nav
          className="mb-3 flex gap-2 overflow-x-auto rounded-sm border border-sky-100 bg-white p-2"
          aria-label="Các phần bài học"
        >
          {lesson.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-sky-600 text-white shadow-sm shadow-sky-200"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <section className="rounded-sm border border-sky-100 bg-white p-4 sm:p-7">
          {currentTab?.kind === "vocabulary" && (
            <VocabularyGrid vocabulary={lesson.vocabulary} />
          )}
          {currentTab?.kind === "text" && currentTab.sectionId && (
            <TextSection
              sectionId={currentTab.sectionId}
              sections={lesson.sections}
            />
          )}
          {currentTab?.kind === "grammar" && <GrammarPlaceholder />}
        </section>

        <footer className="mt-5 text-center text-xs text-slate-400">
          Nhấn vào từng câu tiếng Trung để hiện hoặc ẩn pinyin và nghĩa tiếng
          Việt.
        </footer>
      </div>
    </main>
  );
}
