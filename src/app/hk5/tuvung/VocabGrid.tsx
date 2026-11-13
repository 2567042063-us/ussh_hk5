"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  title: string; // tiêu đề trang, ví dụ "Từ vựng quyển 4"
  words: Word[]; // bộ từ cần hiển thị
  groupByPos?: boolean; // gom nhóm theo loại từ (mặc định: bật)
};

// Thứ tự hiển thị các nhóm loại từ; nhóm lạ sẽ xếp cuối.
const GROUP_ORDER = [
  "danh từ",
  "động từ",
  "động từ năng nguyện",
  "tính từ",
  "phó từ",
  "giới từ",
  "đại từ",
  "số từ",
  "lượng từ",
  "trợ từ",
  "liên từ",
  "thán từ",
  "từ tượng thanh",
  "hậu tố",
  "cụm từ",
  "tên riêng",
];

const GROUP_LABEL: Record<string, string> = {
  "cụm từ": "Cụm từ & cấu trúc",
};

const groupOf = (w: Word) =>
  w.pos
    .split("/")[0]
    .trim()
    .replace(/ ly hợp$/, "");
const labelOf = (key: string) =>
  GROUP_LABEL[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
const wordKey = (w: Word) => `${w.hanzi}-${w.pinyin}`;
const lessonText = (l: Word["lesson"]) =>
  l === undefined ? "" : `Bài ${Array.isArray(l) ? l.join(", ") : l}`;

// Bỏ dấu (pinyin + tiếng Việt) để tìm kiếm không cần gõ dấu.
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");

export default function VocabGrid({ title, words, groupByPos = true }: Props) {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [selected, setSelected] = useState<Word | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openFrame = useRef<number | null>(null);

  const openDialog = useCallback((word: Word) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (openFrame.current !== null) cancelAnimationFrame(openFrame.current);
    setSelected(word);
    setDialogOpen(false);
    openFrame.current = requestAnimationFrame(() => {
      setDialogOpen(true);
      openFrame.current = null;
    });
  }, []);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setSelected(null);
      closeTimer.current = null;
    }, 300);
  }, []);

  const index = useMemo(
    () =>
      words.map((w) => ({
        word: w,
        group: groupOf(w),
        haystack: normalize([w.hanzi, w.pinyin, ...w.meanings].join(" ")),
      })),
    [words],
  );

  // Danh sách nhóm có trong bộ từ + số lượng
  const groups = useMemo(() => {
    const counts = new Map<string, number>();
    index.forEach((i) => counts.set(i.group, (counts.get(i.group) ?? 0) + 1));
    const rank = (k: string) => {
      const r = GROUP_ORDER.indexOf(k);
      return r === -1 ? GROUP_ORDER.length : r;
    };
    return [...counts.entries()]
      .sort((a, b) => rank(a[0]) - rank(b[0]) || a[0].localeCompare(b[0]))
      .map(([key, count]) => ({ key, count }));
  }, [index]);

  const showGroups = groupByPos && groups.length > 1;

  // Kết quả đã lọc, tách theo nhóm
  const sections = useMemo(() => {
    const q = normalize(query.trim());
    const filtered = index.filter(
      (i) =>
        (activeGroup === "all" || i.group === activeGroup) &&
        (!q || i.haystack.includes(q)),
    );
    if (!showGroups) {
      return filtered.length
        ? [{ key: "", words: filtered.map((i) => i.word) }]
        : [];
    }
    return groups
      .map((g) => ({
        key: g.key,
        words: filtered.filter((i) => i.group === g.key).map((i) => i.word),
      }))
      .filter((s) => s.words.length > 0);
  }, [index, groups, query, activeGroup, showGroups]);

  const total = sections.reduce((n, s) => n + s.words.length, 0);

  // Esc để đóng, khóa cuộn nền khi box đang mở.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected, closeDialog]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (openFrame.current !== null) cancelAnimationFrame(openFrame.current);
    },
    [],
  );

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="mb-5 text-2xl font-semibold text-slate-900">{title}</h1>

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
          placeholder={`Tìm trong ${words.length} từ…`}
          aria-label="Tìm từ"
          className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
      </label>

      {/* Lọc theo loại từ */}
      {showGroups && (
        <div
          className="mt-4 flex flex-wrap gap-2"
          role="group"
          aria-label="Lọc theo loại từ"
        >
          {[
            { key: "all", label: "Tất cả", count: words.length },
            ...groups.map((g) => ({
              key: g.key,
              label: labelOf(g.key),
              count: g.count,
            })),
          ].map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setActiveGroup(c.key)}
              aria-pressed={activeGroup === c.key}
              className={`rounded-full px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                activeGroup === c.key
                  ? "bg-sky-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700"
              }`}
            >
              {c.label} <span className="opacity-70">{c.count}</span>
            </button>
          ))}
        </div>
      )}

      {/* Lưới ô chữ */}
      {total > 0 ? (
        sections.map((s) => (
          <section key={s.key || "all"} className="mt-8">
            {showGroups && (
              <h2 className="mb-3 text-lg font-semibold text-slate-800">
                {labelOf(s.key)}{" "}
                <span className="text-sm font-normal text-slate-400">
                  {s.words.length}
                </span>
              </h2>
            )}
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
              {s.words.map((w) => (
                <li key={wordKey(w)}>
                  <button
                    type="button"
                    onClick={() => openDialog(w)}
                    className="group flex aspect-square w-full flex-col items-center justify-center rounded-xl bg-slate-100 px-1 text-slate-800 transition-colors hover:bg-sky-100 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <span
                      className={`ztai__zh font-medium leading-tight ${
                        w.hanzi.length > 4
                          ? "text-sm"
                          : w.hanzi.length > 2
                            ? "text-lg"
                            : "text-3xl"
                      }`}
                    >
                      {w.hanzi}
                    </span>
                    {/* <span className="mt-1 max-w-full truncate text-[11px] text-slate-500 group-hover:text-sky-600">
                      {w.pinyin}
                    </span> */}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))
      ) : (
        <p className="mt-12 text-center text-slate-500">
          Không có từ nào khớp “{query}”. Thử gõ pinyin không dấu hoặc nghĩa
          tiếng Việt.
        </p>
      )}

      {/* Box chi tiết */}
      {selected && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
              dialogOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={closeDialog}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.hanzi} ${selected.pinyin}`}
            className={`fixed inset-x-0 bottom-0 z-50 mx-auto max-h-[88dvh] w-full max-w-2xl overflow-y-auto transition-all duration-300 ease-out ${
              dialogOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <div className="rounded-t-md border-x border-t border-slate-200 bg-white p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl">
              <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-200" />
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2.5 text-slate-800">
                    <span className="ztai__zh text-2xl font-medium leading-[1.55]">
                      {selected.hanzi}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="ztai__zh truncate text-3xl font-light leading-[1.55] text-slate-900">
                      {selected.hanzi}
                    </h2>
                    <p className="text-sm text-slate-500">{selected.pinyin}</p>
                  </div>
                </div>
                <button
                  type="button"
                  autoFocus
                  onClick={closeDialog}
                  aria-label="Đóng"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
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

              <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-sm text-sky-700">
                  {selected.pos}
                </span>
                {selected.lesson !== undefined && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-sm text-slate-600">
                    {lessonText(selected.lesson)}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-500">
                Nghĩa
              </h3>
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

              {selected.examples.length > 0 && (
                <>
                  <h3 className="mt-5 text-sm font-semibold text-slate-500">
                    Ví dụ
                  </h3>
                  <ul className="mt-2 space-y-3">
                    {selected.examples.map((ex) => (
                      <li
                        key={ex.zh}
                        className="rounded-lg border border-slate-200 px-4 py-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="ztai__zh text-lg leading-[1.55] text-slate-900">
                            {ex.zh}
                          </p>
                          {ex.added && (
                            <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                              thêm
                            </span>
                          )}
                        </div>
                        <p className="ztai__py mt-0.5 leading-[1.45] text-slate-600 dark:text-sky-300">
                          {ex.py}
                        </p>
                        <p className="mt-0.5 text-slate-600">{ex.vi}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
