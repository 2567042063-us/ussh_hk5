"use client";

import { useState } from "react";

type Mode = "match" | "none";

type Item = { q: string; a: string; accept?: string[] };
type Section = { title: string; hint: string; mode: Mode; items: Item[] };

const SECTIONS: Section[] = [
  {
    title: "一、词组翻译",
    hint: "Dịch cụm từ",
    mode: "match",
    items: [
      {
        q: "Đích thân chuẩn bị",
        a: "亲自准备 / 亲手准备",
        accept: ["亲自准备", "亲手准备"],
      },
      {
        q: "Phương án tốt nhất",
        a: "最好的办法 / 最好的方案",
        accept: ["最好的办法", "最好的方案", "最佳办法", "最佳方案"],
      },
      {
        q: "Dọn dẹp phòng ốc",
        a: "打扫房间 / 收拾房屋",
        accept: ["打扫房间", "收拾房屋", "收拾房间", "打扫房屋"],
      },
      {
        q: "Quan sát một cách tỉ mỉ",
        a: "仔细地观察",
        accept: ["仔细地观察", "仔细观察"],
      },
      {
        q: "品尝各国特色",
        a: "Thưởng thức đặc sản của các nước",
        accept: [
          "Thưởng thức đặc sản của các nước",
          "Thưởng thức đặc sản các nước",
          "Nếm thử đặc sản của các nước",
          "Thưởng thức đặc sắc của các nước",
          "Thưởng thức đặc sản các quốc gia",
        ],
      },
      {
        q: "幸福的到来",
        a: "Hạnh phúc gõ cửa",
        accept: [
          "Hạnh phúc gõ cửa",
          "Hạnh phúc đến",
          "Hạnh phúc đang đến",
          "Sự đến của hạnh phúc",
          "Hạnh phúc đã đến",
        ],
      },
      {
        q: "认识过他的人",
        a: "Những người từng quen biết",
        accept: [
          "Những người từng quen biết",
          "Những người từng quen biết anh ấy",
          "Những người từng quen anh ấy",
          "Những người đã từng quen biết anh ấy",
          "Những người đã quen biết anh ấy",
        ],
      },
    ],
  },
  {
    title: "二、用“把”字句把下列句子翻译成汉语",
    hint: "Dịch sang tiếng Trung bằng câu chữ 把",
    mode: "none",
    items: [
      {
        q: "Anh ta hứa sẽ không nói với Mary về việc đó.",
        a: "他答应不会把这件事告诉玛丽 / 跟玛丽说。",
      },
      {
        q: "Cứ mỗi năm Tết đến là nhà tôi lại dán câu đối trước cửa.",
        a: "每年春节我家就把对联贴在门前。",
      },
      {
        q: "Con mau chóng bỏ điện thoại xuống và đi làm bài tập ngay.",
        a: "你快把手机放下，然后 / 马上做作业吧！",
      },
      {
        q: "Cô ấy để chìa khóa trên bàn tôi.",
        a: "她把钥匙放在我的桌上。",
      },
      {
        q: "Dạo này trí nhớ của tôi rất kém, đã đeo mắt kính rồi mà cứ đi tìm mắt kính.",
        a: "最近我的记忆力 / 记性很差，把眼镜戴好了还一直去找。",
      },
    ],
  },
];

type State = {
  text: string;
  shown: boolean;
  match: boolean | null;
};

const EMPTY: State = {
  text: "",
  shown: false,
  match: null,
};

const key = (s: number, i: number) => `${s}-${i}`;

// Bỏ khoảng trắng, dấu câu, ký hiệu và chữ hoa/thường trước khi so khớp.
const norm = (s: string) =>
  s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\p{P}\p{S}\s]+/gu, "");

function SampleAnswer({ item }: { item: Item }) {
  return (
    <div className="mt-3 rounded-sm border border-sky-100 bg-sky-50 px-3 py-2">
      <p className="text-base leading-relaxed text-sky-900">{item.a}</p>
    </div>
  );
}

export default function BaiTapDich() {
  const [state, setState] = useState<Record<string, State>>({});

  const get = (k: string): State => state[k] ?? EMPTY;
  const patch = (k: string, p: Partial<State>) =>
    setState((prev) => ({ ...prev, [k]: { ...(prev[k] ?? EMPTY), ...p } }));

  const checkMatch = (k: string, item: Item) => {
    const answer = norm(get(k).text);
    const ok = (item.accept ?? []).some((a) => norm(a) === answer);
    patch(k, { match: answer ? ok : null });
  };

  return (
    <div className="min-h-screen text-stone-800">
      <header className="flex items-end justify-end">
        <button
          onClick={() => setState({})}
          className="rounded-full px-3 py-1 text-sm text-stone-500 hover:bg-stone-200 hover:text-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
        >
          Làm lại
        </button>
      </header>

      <div className="space-y-10">
        {SECTIONS.map((section, si) => (
          <section key={si}>
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-stone-900">
                {section.title}
              </h2>
              <p className="text-sm text-stone-500">{section.hint}</p>
            </div>

            <ol className="space-y-3">
              {section.items.map((item, ii) => {
                const k = key(si, ii);
                const s = get(k);
                const hasText = s.text.trim().length > 0;

                return (
                  <li
                    key={k}
                    className="rounded-sm border border-stone-200 bg-white p-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-0.5 w-5 shrink-0 text-sm tabular-nums text-stone-400">
                        {ii + 1}.
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-base font-medium leading-relaxed text-stone-900">
                            {item.q}
                          </p>
                          <button
                            onClick={() => patch(k, { shown: !s.shown })}
                            aria-expanded={s.shown}
                            className="shrink-0 rounded text-xs text-sky-600 underline underline-offset-2 hover:text-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                          >
                            {s.shown ? "ẩn đáp án" : "đáp án mẫu"}
                          </button>
                        </div>

                        <textarea
                          value={s.text}
                          onChange={(e) =>
                            patch(k, {
                              text: e.target.value,
                              match: null,
                            })
                          }
                          rows={item.q.length > 30 ? 2 : 1}
                          placeholder="Câu trả lời của bạn"
                          className="mt-3 w-full resize-none rounded-lg border border-stone-300 bg-white px-3 py-2 text-base text-stone-800 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-300"
                        />

                        {section.mode !== "none" && (
                          <div className="mt-3 flex flex-wrap items-center gap-3">
                            <button
                              disabled={!hasText}
                              onClick={() => checkMatch(k, item)}
                              className="rounded-lg bg-stone-800 px-3 py-1.5 text-sm font-medium text-stone-50 hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500"
                            >
                              Kiểm tra
                            </button>

                            {section.mode === "match" && s.match === true && (
                              <span className="text-sm font-medium text-green-700">
                                Khớp với đáp án
                              </span>
                            )}
                            {section.mode === "match" && s.match === false && (
                              <span className="text-sm font-medium text-red-700">
                                Chưa khớp đáp án nào, thử so với đáp án mẫu
                              </span>
                            )}
                          </div>
                        )}

                        {s.shown && <SampleAnswer item={item} />}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
