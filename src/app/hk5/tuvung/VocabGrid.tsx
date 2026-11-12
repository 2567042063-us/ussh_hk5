"use client";

import { useEffect, useMemo, useState } from "react";

import { vocab, type Word } from "./vocabData";

// Bỏ dấu (pinyin + tiếng Việt) để tìm kiếm không cần gõ dấu.
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");

export default function VocabGrid() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Word | null>(null);

  const index = useMemo(
    () =>
      vocab.map((w) => ({
        word: w,
        haystack: normalize([w.hanzi, w.pinyin, ...w.meanings].join(" ")),
      })),
    [],
  );

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return vocab;
    return index.filter((i) => i.haystack.includes(q)).map((i) => i.word);
  }, [query, index]);

  // Esc để đóng, khóa cuộn nền khi box đang mở.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Ô tìm kiếm */}
      <label className="flex items-center gap-3 rounded-xl border border-sky-400 bg-white px-4 py-3 shadow-[0_0_0_4px_rgba(14,165,233,0.12)] focus-within:border-sky-500">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 text-sky-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Tìm trong ${vocab.length} từ…`}
          aria-label="Tìm từ"
          className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
      </label>

      {/* Lưới ô chữ */}
      {results.length > 0 ? (
        <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
          {results.map((w) => (
            <li key={w.hanzi}>
              <button
                type="button"
                onClick={() => setSelected(w)}
                className="group flex aspect-square w-full flex-col items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors hover:bg-sky-100 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span
                  className={`font-medium ${
                    w.hanzi.length > 2 ? "text-lg" : "text-2xl"
                  }`}
                >
                  {w.hanzi}
                </span>
                <span className="mt-1 text-[11px] text-slate-500 group-hover:text-sky-600">
                  {w.pinyin}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-center text-slate-500">
          Không có từ nào khớp “{query}”. Thử gõ pinyin không dấu hoặc nghĩa
          tiếng Việt.
        </p>
      )}

      {/* Box chi tiết */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 sm:items-center sm:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.hanzi} ${selected.pinyin}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-5xl font-medium text-slate-900">
                  {selected.hanzi}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xl text-sky-600">
                    {selected.pinyin}
                  </span>
                  <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-sm text-sky-700">
                    {selected.pos}
                  </span>
                </div>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setSelected(null)}
                aria-label="Đóng"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <h3 className="mt-5 text-sm font-semibold text-slate-500">Nghĩa</h3>
            <ul className="mt-1 list-inside list-disc space-y-0.5 text-slate-800">
              {selected.meanings.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            {selected.usage && (
              <>
                <h3 className="mt-5 text-sm font-semibold text-slate-500">
                  Cách dùng
                </h3>
                <p className="mt-1 rounded-lg border-l-4 border-sky-400 bg-sky-50 px-4 py-3 leading-relaxed text-slate-800">
                  {selected.usage}
                </p>
              </>
            )}

            <h3 className="mt-5 text-sm font-semibold text-slate-500">Ví dụ</h3>
            <ul className="mt-2 space-y-3">
              {selected.examples.map((ex) => (
                <li
                  key={ex.zh}
                  className="rounded-lg border border-slate-200 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-lg text-slate-900">{ex.zh}</p>
                    {ex.added && (
                      <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                        thêm
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sky-600">{ex.py}</p>
                  <p className="mt-0.5 text-slate-600">{ex.vi}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
