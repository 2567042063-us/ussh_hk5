"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type PointerEvent as PE,
} from "react";

import { DEFAULT_CARDS } from "./defaultCards";

type Card = {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  example: string;
  box: number;
  due: string;
  wrong: number;
};
type Session = {
  queue: string[];
  failed: string[];
  total: number;
  firstTry: number;
};

const KEY = "han-tu-hay-quen:v1";
const INTERVALS = [0, 1, 3, 7, 14, 30]; // ngày chờ theo từng bậc nhớ

const HAN = /[\u3400-\u9fff\uf900-\ufaff]/;
const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

const ymd = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const addDays = (s: string, n: number) => {
  const [y, m, d] = s.split("-").map(Number);
  return ymd(new Date(y, m - 1, d + n));
};
const diffDays = (a: string, b: string) => {
  const t = (s: string) => {
    const [y, m, d] = s.split("-").map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((t(b) - t(a)) / 86400000);
};
const dueLabel = (due: string, today: string) => {
  const d = diffDays(today, due);
  return d <= 0 ? "Ôn hôm nay" : d === 1 ? "Ôn ngày mai" : `Ôn sau ${d} ngày`;
};
const shuffle = <T,>(a: T[]) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

function WritingPad({
  hanzi,
  showAnswer,
}: {
  hanzi: string;
  showAnswer: boolean;
}) {
  const chars = Array.from(hanzi).slice(0, 4);
  const n = Math.max(chars.length, 1);
  const ref = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    const r = c.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    c.width = Math.round(r.width * dpr);
    c.height = Math.round(r.height * dpr);
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#1c1917";
  }, []);

  const pos = (e: PE<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const line = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  };
  return (
    <div
      className="relative mx-auto w-full border border-stone-300 bg-white"
      style={
        {
          aspectRatio: `${n} / 1`,
          maxWidth: n === 1 ? "18rem" : n === 2 ? "24rem" : "100%",
          containerType: "inline-size",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 flex">
        {chars.map((ch, i) => (
          <div
            key={i}
            className={`relative flex-1 ${i > 0 ? "border-l border-stone-300" : ""}`}
          >
            <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-stone-200" />
            <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-stone-200" />
            {showAnswer && (
              <span
                lang="zh-CN"
                className="ztai__zh absolute inset-0 flex items-center justify-center leading-none text-stone-400"
                style={{ fontSize: `${80 / n}cqw` }}
              >
                {ch}
              </span>
            )}
          </div>
        ))}
      </div>
      <canvas
        ref={ref}
        className="absolute inset-0 h-full w-full cursor-crosshair touch-none select-none [-webkit-touch-callout:none] [-webkit-user-select:none]"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          drawing.current = true;
          last.current = pos(e);
          line(last.current, last.current);
        }}
        onPointerMove={(e) => {
          if (!drawing.current) return;
          const p = pos(e);
          line(last.current, p);
          last.current = p;
        }}
        onPointerUp={() => (drawing.current = false)}
        onPointerCancel={() => (drawing.current = false)}
      />
    </div>
  );
}

export default function HanziReview() {
  const loaded = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const [cards, setCards] = useState<Card[]>(() => {
    if (typeof window === "undefined") return [];
    const withDefaults = (saved: Card[]) => {
      const have = new Set(saved.map((c) => c.hanzi));
      const day = ymd(new Date());
      const fresh: Card[] = DEFAULT_CARDS.filter((c) => !have.has(c.hanzi)).map(
        ({ day: offset, ...c }) => ({
          ...c,
          id: `default-${c.hanzi}`,
          example: c.example ?? "",
          box: 0,
          due: addDays(day, offset),
          wrong: 0,
        }),
      );
      return [...saved, ...fresh];
    };
    try {
      const d = JSON.parse(localStorage.getItem(KEY) || "{}");
      return withDefaults(Array.isArray(d.cards) ? d.cards : []);
    } catch {
      return withDefaults([]);
    }
  });
  const [usePad, setUsePad] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const d = JSON.parse(localStorage.getItem(KEY) || "{}");
      return typeof d.usePad === "boolean" ? d.usePad : true;
    } catch {
      return true;
    }
  });
  const [today, setToday] = useState(() => ymd(new Date()));
  const [tab, setTab] = useState<"review" | "list">("review");
  const [session, setSession] = useState<Session | null>(null);
  const [practice, setPractice] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [round, setRound] = useState(0);
  const [draft, setDraft] = useState({
    hanzi: "",
    pinyin: "",
    meaning: "",
    example: "",
  });
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const f = () => setToday(ymd(new Date()));
    window.addEventListener("focus", f);
    return () => window.removeEventListener("focus", f);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify({ cards, usePad }));
    } catch {}
  }, [cards, usePad, loaded]);

  if (!loaded) return null;

  const due = cards.filter((c) => c.due <= today);
  const current = session
    ? cards.find((c) => c.id === session.queue[0])
    : undefined;
  const finished = !!session && (session.queue.length === 0 || !current);
  const remaining = session ? new Set(session.queue).size : 0;
  const blanked =
    current && current.example.includes(current.hanzi)
      ? current.example.split(current.hanzi).join("＿＿")
      : "";
  const nextDue = cards.length ? cards.map((c) => c.due).sort()[0] : "";

  const start = (all: boolean) => {
    const ids = shuffle((all ? cards : due).map((c) => c.id));
    setPractice(all);
    setSession({ queue: ids, failed: [], total: ids.length, firstTry: 0 });
    setRevealed(false);
    setRound((r) => r + 1);
  };

  const answer = (ok: boolean) => {
    if (!session || !current) return;
    const id = current.id;
    const retry = session.failed.includes(id);
    if (!practice) {
      setCards((prev) =>
        prev.map((c) => {
          if (c.id !== id) return c;
          if (!ok) return { ...c, box: 0, due: today, wrong: c.wrong + 1 };
          if (retry) return { ...c, box: 1, due: addDays(today, 1) };
          const box = Math.min(c.box + 1, INTERVALS.length - 1);
          return { ...c, box, due: addDays(today, INTERVALS[box]) };
        }),
      );
    }
    const rest = session.queue.slice(1);
    if (ok) {
      setSession({
        ...session,
        queue: rest,
        firstTry: session.firstTry + (retry ? 0 : 1),
      });
    } else {
      rest.splice(Math.min(3, rest.length), 0, id); // gặp lại sau vài chữ
      setSession({
        ...session,
        queue: rest,
        failed: retry ? session.failed : [...session.failed, id],
      });
    }
    setRevealed(false);
    setRound((r) => r + 1);
  };

  const add = (e: FormEvent) => {
    e.preventDefault();
    const hanzi = draft.hanzi.trim();
    if (!HAN.test(hanzi)) return setNotice("Nhập ít nhất một chữ Hán.");
    if (!draft.pinyin.trim() && !draft.meaning.trim())
      return setNotice("Nhập pinyin hoặc nghĩa để có gợi ý khi ôn.");
    if (cards.some((c) => c.hanzi === hanzi))
      return setNotice("Chữ này đã có trong danh sách.");
    setCards([
      {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        hanzi,
        pinyin: draft.pinyin.trim(),
        meaning: draft.meaning.trim(),
        example: draft.example.trim(),
        box: 0,
        due: today,
        wrong: 0,
      },
      ...cards,
    ]);
    setDraft({ hanzi: "", pinyin: "", meaning: "", example: "" });
    setNotice(`Đã thêm ${hanzi}.`);
  };

  const input =
    "w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900 placeholder:text-stone-400 focus:border-red-800 focus:outline-none";
  const primary =
    " rounded-md bg-stone-700 px-4 py-3 font-medium text-stone-50 hover:bg-stone-700";

  return (
    <main className="min-h-screen px-4 text-stone-800">
      <div className="mx-auto">
        <h1 className="text-2xl font-semibold uppercase text-stone-500">
          Chữ Hán hay quên
        </h1>
        <p className="mt-1 text-stone-400">
          {cards.length} chữ đã lưu, {due.length} chữ cần ôn hôm nay
        </p>

        <div className="mt-6 flex gap-6 border-b border-stone-200">
          {(
            [
              ["review", `Ôn hôm nay (${due.length})`],
              ["list", `Danh sách (${cards.length})`],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => {
                setTab(k);
                setNotice("");
              }}
              className={`-mb-px border-b-2 pb-2 ${tab === k ? "border-red-800 font-medium text-stone-900" : "border-transparent text-stone-500"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "review" && (
          <section className="mt-6 cursor-crosshair touch-none select-none [-webkit-touch-callout:none] [-webkit-user-select:none]">
            {!session && cards.length === 0 && (
              <div className="text-center">
                <p className="text-stone-600">
                  Chưa có chữ nào. Thêm vài chữ bạn hay quên để bắt đầu ôn.
                </p>
                <button
                  onClick={() => setTab("list")}
                  className={`${primary} mt-4`}
                >
                  Thêm chữ
                </button>
              </div>
            )}
            {!session && cards.length > 0 && due.length > 0 && (
              <div className="text-center">
                <p className="text-5xl font-semibold">{due.length}</p>
                <p className="mt-2 text-stone-600">chữ cần viết lại hôm nay</p>
                <button
                  onClick={() => start(false)}
                  className={`${primary} mt-5`}
                >
                  Bắt đầu ôn
                </button>
              </div>
            )}
            {!session && cards.length > 0 && due.length === 0 && (
              <div className="text-center">
                <p className="text-lg">Hôm nay đã ôn xong.</p>
                <p className="mt-1 text-stone-600">
                  {dueLabel(nextDue, today)} cho chữ tiếp theo.
                </p>
                <button
                  onClick={() => start(true)}
                  className="mt-5 rounded-md border border-stone-300 px-4 py-3 hover:bg-stone-100"
                >
                  Ôn thêm tất cả (không đổi lịch)
                </button>
              </div>
            )}

            {session && !finished && current && (
              <div className="m-5">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Còn {remaining} chữ</span>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={usePad}
                      onChange={(e) => setUsePad(e.target.checked)}
                    />{" "}
                    Viết trên màn hình
                  </label>
                </div>
                <div className="mt-2 h-1 rounded bg-stone-200">
                  <div
                    className="h-1 rounded bg-red-800"
                    style={{
                      width: `${((session.total - remaining) / session.total) * 100}%`,
                    }}
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-2xl font-semibold">
                    {current.meaning || current.pinyin}
                  </p>
                  {current.meaning && current.pinyin && (
                    <p className="mt-1 text-lg text-stone-600">
                      {current.pinyin}
                    </p>
                  )}
                  {blanked && (
                    <p lang="zh-CN" className="mt-3 text-stone-600">
                      {blanked}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  {usePad ? (
                    <WritingPad
                      key={round}
                      hanzi={current.hanzi}
                      showAnswer={revealed}
                    />
                  ) : (
                    !revealed && (
                      <p className="rounded-md border border-dashed border-stone-300 p-6 text-center text-stone-500">
                        Viết chữ này ra giấy, rồi bấm “Hiện đáp án”.
                      </p>
                    )
                  )}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setRound((r) => r + 1)}
                    disabled={!usePad}
                    className="rounded-md border border-stone-300 px-4 py-3 font-medium text-stone-700 hover:bg-stone-100 disabled:opacity-40"
                  >
                    Xoá nét viết
                  </button>
                  <button
                    onClick={() => setRevealed(true)}
                    disabled={revealed}
                    className="rounded-md border border-stone-300 px-4 py-3 font-medium text-stone-700 hover:bg-stone-100 disabled:opacity-40"
                  >
                    Hiện đáp án
                  </button>
                  <button
                    onClick={() => answer(true)}
                    className="rounded-md bg-stone-900 px-4 py-3 font-medium text-stone-50 hover:bg-stone-700"
                  >
                    Từ tiếp theo
                  </button>
                </div>
                {revealed && (
                  <div className="mt-6">
                    <div className="text-center">
                      <p lang="zh-CN" className="ztai__zh text-5xl">
                        {current.hanzi}
                      </p>
                      {/* <p className="mt-1 text-lg text-stone-600">
                        {current.pinyin}
                      </p> */}
                      {current.example && (
                        <p lang="zh-CN" className="mt-2 text-stone-600">
                          {current.example}
                        </p>
                      )}
                    </div>
                    {/* <p className="mt-4 text-center text-sm text-stone-500">
                      Chỉ tính là đúng khi đủ nét và đúng cấu trúc chữ.
                    </p> */}
                  </div>
                )}
              </div>
            )}

            {session && finished && (
              <div className="text-center">
                <p className="text-lg font-medium">
                  Xong rồi: {session.firstTry}/{session.total} chữ đúng ngay lần
                  đầu.
                </p>
                {session.failed.length > 0 && (
                  <div className="mt-4">
                    <p className="text-stone-600">
                      Chữ cần viết lại trên giấy:
                    </p>
                    <p
                      lang="zh-CN"
                      className="ztai__zh mt-2 flex flex-wrap justify-center gap-4 text-4xl"
                    >
                      {session.failed.map((id) => (
                        <span key={id}>
                          {cards.find((c) => c.id === id)?.hanzi}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setSession(null)}
                  className={`${primary} mt-6`}
                >
                  Đóng
                </button>
              </div>
            )}
          </section>
        )}

        {tab === "list" && (
          <section className="mt-6">
            <form onSubmit={add} className="grid grid-cols-2 gap-3">
              <input
                lang="zh-CN"
                className={`${input} col-span-2 text-2xl`}
                placeholder="Chữ Hán"
                value={draft.hanzi}
                onChange={(e) => setDraft({ ...draft, hanzi: e.target.value })}
              />
              <input
                className={input}
                placeholder="Pinyin (jiē)"
                value={draft.pinyin}
                onChange={(e) => setDraft({ ...draft, pinyin: e.target.value })}
              />
              <input
                className={input}
                placeholder="Nghĩa tiếng Việt"
                value={draft.meaning}
                onChange={(e) =>
                  setDraft({ ...draft, meaning: e.target.value })
                }
              />
              <input
                lang="zh-CN"
                className={`${input} col-span-2`}
                placeholder="Câu ví dụ (không bắt buộc)"
                value={draft.example}
                onChange={(e) =>
                  setDraft({ ...draft, example: e.target.value })
                }
              />
              <button className={`${primary} col-span-2`}>Thêm chữ</button>
              {notice && (
                <p className="col-span-2 text-sm text-stone-600">{notice}</p>
              )}
            </form>

            {cards.length === 0 ? (
              <p className="mt-8 text-center text-stone-500">
                Danh sách đang trống.
              </p>
            ) : (
              <ul className="mt-6 divide-y divide-stone-200 rounded-md border border-stone-200 bg-white">
                {cards.map((c) => (
                  <li key={c.id} className="flex flex-col gap-1 p-3">
                    <p lang="zh-CN" className="ztai__zh text-3xl">
                      {c.hanzi}
                    </p>
                    <p className="truncate text-stone-500">{c.pinyin} </p>
                    <p className="truncate">
                      {c.meaning && (
                        <span className="text-stone-600">{c.meaning}</span>
                      )}
                    </p>
                    <p className="text-sm text-stone-500">
                      {dueLabel(c.due, today)}
                      {c.wrong > 0 && `, từng sai ${c.wrong} lần`}
                    </p>
                    <button
                      onClick={() =>
                        window.confirm(`Xoá ${c.hanzi}?`) &&
                        setCards(cards.filter((x) => x.id !== c.id))
                      }
                      className="text-sm text-stone-500 hover:text-red-800"
                    >
                      Xoá
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
