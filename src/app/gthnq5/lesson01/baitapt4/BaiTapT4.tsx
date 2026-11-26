"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  DỮ LIỆU                                                            */
/* ------------------------------------------------------------------ */

const KEYWORDS = [
  "终于",
  "果然",
  "对于",
  "如果",
  "实现",
  "一切",
  "只好",
  "愿望",
  "表达",
  "改变",
  "拼命",
];

type Ex1Item = {
  vi: string;
  zh: string;
  keys: string[]; // từ khoá được tô sáng trong đáp án
  notes: string[]; // giải thích
};

const EX1: Ex1Item[] = [
  {
    vi: "Bạn có nói gì đi chăng nữa, tôi cũng không thay đổi kế hoạch ban đầu đâu.",
    zh: "不管/无论你说什么/你怎么说，我也不会改变原来的计划。",
    keys: ["改变"],
    notes: [
      "不管 / 无论 … 也/都 …: “dù … cũng …”. “Bạn có nói gì đi chăng nữa” = 不管/无论你说什么 hoặc 你怎么说.",
      "改变 (thay đổi) + 原来的计划 (kế hoạch ban đầu). 不会 = sẽ không → nhấn mạnh quyết tâm.",
    ],
  },
  {
    vi: "Điều kiện gia đình không cho phép, tôi đành phải bỏ đi ước mơ du học của mình.",
    zh: "因为家庭的（经济）条件不允许，我只好放弃自己的留学梦想。",
    keys: ["只好"],
    notes: [
      "只好 = “đành phải”, diễn tả không còn lựa chọn nào khác. Đứng trước động từ: 只好放弃.",
      "家庭（经济）条件 = điều kiện gia đình (kinh tế); 不允许 = không cho phép; 留学梦想 = ước mơ du học.",
      "Tiếng Việt không có “因为” nhưng tiếng Trung thường thêm vào cho câu tự nhiên, rõ nguyên nhân – kết quả.",
    ],
  },
  {
    vi: "Sau khi về nước, chắc chắn bạn sẽ rất nhớ mọi thứ ở nơi đây.",
    zh: "回国后，你一定会很想 / 想念这里的一切。",
    keys: ["一切"],
    notes: [
      "回国后 = sau khi về nước (后 đặt cuối cụm thời gian).",
      "一定会 = chắc chắn sẽ. 很想 / 想念 = rất nhớ (想念 trang trọng hơn).",
      "一切 = mọi thứ, tất cả; thường dùng làm tân ngữ hoặc đứng trước danh từ: 这里的一切.",
    ],
  },
  {
    vi: "Đối với những vấn đề phát sinh trong công việc, chúng tôi sẽ cố gắng giải quyết nhanh chóng.",
    zh: "对于工作中发生的问题，我们会尽快解决 / 尽力迅速解决。",
    keys: ["对于"],
    notes: [
      "对于 + đối tượng, + câu: “đối với …”. Đặt đầu câu để nêu chủ đề.",
      "工作中发生的问题 = những vấn đề phát sinh trong công việc (发生 = phát sinh).",
      "尽快 = nhanh nhất có thể; 尽力 = cố hết sức; 迅速 = nhanh chóng. Hai cách nói đều đúng.",
    ],
  },
  {
    vi: "Bạn nói không sai, anh ấy quả nhiên là một người rất đáng tin cậy.",
    zh: "你说得对，他果然是个可靠 / 值得信任的人。",
    keys: ["果然"],
    notes: [
      "果然 = “quả nhiên”, sự thật đúng như dự đoán/lời nói trước đó. Đứng sau chủ ngữ: 他果然…",
      "你说得对 = bạn nói đúng (“nói không sai”).",
      "可靠 / 值得信任 = đáng tin cậy. Cấu trúc 是个…的人 = là một người …",
    ],
  },
  {
    vi: "Trời đổ mưa mà tôi lại không mang theo ô, đành chạy thục mạng về nhà.",
    zh: "天下着雨，我又没带雨伞，只好拼命地跑回家。",
    keys: ["只好", "拼命"],
    notes: [
      "天下着雨 = trời đang mưa (下 + 着 chỉ trạng thái đang diễn ra). 又 = lại (thêm một điều không may).",
      "没带雨伞 = không mang ô (phủ định quá khứ dùng 没).",
      "只好 + 拼命地跑回家: “đành chạy thục mạng về nhà”. 拼命 = liều mạng, hết sức; thêm 地 trước động từ.",
    ],
  },
  {
    vi: "Nhờ có sự giúp đỡ của thầy cô và bạn bè, cuối cùng tôi đã đạt được nguyện vọng của mình.",
    zh: "在老师和同学的帮助下，我终于实现了自己的愿望。",
    keys: ["终于", "实现", "愿望"],
    notes: [
      "在 … 的帮助下 = nhờ sự giúp đỡ của … (khung cố định, rất hay gặp).",
      "终于 = cuối cùng (sau một thời gian dài mới đạt được). 实现 + 愿望 là cụm đi liền: thực hiện được nguyện vọng.",
      "自己的 = “của mình”, nhấn mạnh sở hữu.",
    ],
  },
  {
    vi: "Lòng tôi vui đến mức không biết biểu đạt thế nào.",
    zh: "我心里高兴得不知该怎么表达。",
    keys: ["表达"],
    notes: [
      "Tính từ + 得 + mức độ: 高兴得不知该怎么表达 = vui đến mức không biết diễn đạt thế nào.",
      "心里 = trong lòng. 不知该怎么 + động từ = không biết nên … thế nào.",
      "表达 = biểu đạt, diễn đạt (cảm xúc, ý kiến).",
    ],
  },
];

type Key = "A" | "B" | "C";

type Ex2Item = {
  frags: Record<Key, string>;
  answer: Key[];
  vi: string;
  tip: string;
};

const EX2: Ex2Item[] = [
  {
    frags: {
      A: "这个任务没有那么困难",
      B: "而关键是要清楚我们的主要目的，找到重点",
      C: "我的看法是",
    },
    answer: ["C", "A", "B"],
    vi: "Theo ý kiến của tôi, nhiệm vụ này không khó đến thế, mà mấu chốt là phải làm rõ mục đích chính của chúng ta và tìm ra trọng điểm.",
    tip: "我的看法是 dùng để mở đầu nêu quan điểm. Sau đó là vế “没有那么…” và vế nối tiếp bằng 而 (mà) để chuyển hướng sang điều quan trọng hơn.",
  },
  {
    frags: {
      A: "做事情往往需要照顾大的方面",
      B: "而放弃掉“森林”",
      C: "换句话说，就是不要仅仅为了一棵“大树”",
    },
    answer: ["A", "C", "B"],
    vi: "Làm việc thường cần chú ý đến khía cạnh tổng thể; nói cách khác là đừng chỉ vì một “cái cây” mà bỏ cả “khu rừng”.",
    tip: "换句话说 = nói cách khác, dùng để giải thích lại ý câu trước. “不要为了 A 而 B” = đừng vì A mà B → C đi trước B.",
  },
  {
    frags: {
      A: "一个人成熟不成熟，不是看年龄的大小",
      B: "并且准确地找到解决问题的方法",
      C: "而是要看他遇到问题时，能不能及时发现",
    },
    answer: ["A", "C", "B"],
    vi: "Một người có trưởng thành hay không không phải xem tuổi tác lớn nhỏ, mà xem khi gặp vấn đề có kịp thời phát hiện ra không và tìm được cách giải quyết chính xác hay không.",
    tip: "Khung “不是看…，而是看…” (không phải xem …, mà là xem …). 并且 (và còn) nối thêm hành động thứ hai nên đứng cuối.",
  },
  {
    frags: {
      A: "因此养成一个好习惯需要坚持",
      B: "习惯不是一天之内养成的",
      C: "而改掉一个坏习惯也需要坚持",
    },
    answer: ["B", "A", "C"],
    vi: "Thói quen không hình thành trong một ngày, vì vậy để nuôi dưỡng một thói quen tốt cần kiên trì, mà bỏ một thói quen xấu cũng cần kiên trì.",
    tip: "因此 (vì vậy) chỉ kết quả nên phải đứng sau nguyên nhân (B). 而 nối hai vế song song “好习惯 – 坏习惯”.",
  },
  {
    frags: {
      A: "还要重视环境的保护。环境如果被污染了",
      B: "社会的发展不能光看经济的发展",
      C: "经济的增长也无法为我们带来美好的生活",
    },
    answer: ["B", "A", "C"],
    vi: "Sự phát triển của xã hội không thể chỉ nhìn vào phát triển kinh tế, mà còn phải coi trọng bảo vệ môi trường. Nếu môi trường bị ô nhiễm thì tăng trưởng kinh tế cũng không thể mang lại cuộc sống tốt đẹp cho chúng ta.",
    tip: "“不能光…，还要…” (không thể chỉ …, còn phải …) → B rồi đến A. Vế cuối là kết quả của “如果…，…也…” nên C đứng cuối.",
  },
  {
    frags: {
      A: "这样才能提前结束烦恼",
      B: "如果一个人必须要完成一件自己不喜欢的事情",
      C: "最好的办法就是早点儿把它做完",
    },
    answer: ["B", "C", "A"],
    vi: "Nếu một người bắt buộc phải hoàn thành một việc mình không thích, cách tốt nhất là làm xong sớm, như vậy mới có thể kết thúc phiền não sớm hơn.",
    tip: "如果 mở đầu giả thiết → 最好的办法就是 đưa ra cách giải quyết → 这样才能 nêu kết quả. Trình tự: giả thiết – cách làm – kết quả.",
  },
  {
    frags: {
      A: "对于中国人来说",
      B: "到那时人们会举行各种各样的迎新年活动",
      C: "春节是一年之中最重要的节日",
    },
    answer: ["A", "C", "B"],
    vi: "Đối với người Trung Quốc, Tết Nguyên Đán là ngày lễ quan trọng nhất trong năm, đến lúc đó người ta sẽ tổ chức đủ loại hoạt động đón năm mới.",
    tip: "对于…来说 luôn đứng đầu câu. 到那时 (đến lúc đó) phải nhắc lại điều đã nói trước, tức “春节”, nên B đứng sau C.",
  },
  {
    frags: {
      A: "让我们一起举杯祝贺这对新人",
      B: "一切顺利，永远幸福",
      C: "希望他们在今后的生活中",
    },
    answer: ["A", "C", "B"],
    vi: "Chúng ta hãy cùng nâng ly chúc mừng đôi tân hôn, mong họ trong cuộc sống sau này mọi sự thuận lợi, mãi mãi hạnh phúc.",
    tip: "Lời chúc: 让我们…祝贺… rồi 希望 + (thời gian/phạm vi) + nội dung chúc. “在今后的生活中” là trạng ngữ nên đứng trước 一切顺利，永远幸福.",
  },
  {
    frags: {
      A: "如果你不能勇敢地走出第一步",
      B: "所以，千万不要因为害怕失败而不敢开始",
      C: "就永远没有机会获得成功",
    },
    answer: ["A", "C", "B"],
    vi: "Nếu bạn không dám mạnh dạn bước bước đầu tiên thì sẽ mãi mãi không có cơ hội thành công, vì vậy tuyệt đối đừng vì sợ thất bại mà không dám bắt đầu.",
    tip: "Khung 如果…就… (nếu … thì …) → A rồi C. 所以 (vì vậy) rút ra lời khuyên nên đứng cuối.",
  },
  {
    frags: {
      A: "意思是无论多远的路，都要从脚下这一步开始",
      B: "人们常说“千里之行，始于足下”",
      C: "也就是说，一切成功都是慢慢积累起来的",
    },
    answer: ["B", "A", "C"],
    vi: "Người ta thường nói “đi ngàn dặm bắt đầu từ một bước chân”, nghĩa là dù đường xa đến đâu cũng phải bắt đầu từ bước dưới chân; tức là mọi thành công đều được tích lũy từng chút một.",
    tip: "Trình tự: câu thành ngữ (B) → 意思是 giải thích nghĩa (A) → 也就是说 tổng kết, nâng lên ý chung (C).",
  },
];

/* ------------------------------------------------------------------ */
/*  HÀM PHỤ                                                            */
/* ------------------------------------------------------------------ */

function buildSentence(frags: Record<Key, string>, order: Key[]): string {
  return order
    .map((k, i) => {
      const t = frags[k].replace(/\s+/g, "");
      const last = i === order.length - 1;
      if (last) {
        return /[。！？]$/.test(t) ? t : t.replace(/[，、；]$/, "") + "。";
      }
      return /[，。、；！？]$/.test(t) ? t : t + "，";
    })
    .join("");
}

function Highlight({ text, keys }: { text: string; keys: string[] }) {
  if (!keys.length) return <>{text}</>;
  const re = new RegExp(`(${keys.join("|")})`, "g");
  return (
    <>
      {text.split(re).map((part, i) =>
        keys.includes(part) ? (
          <mark key={i} className="rounded bg-stone-300 px-1 text-stone-900">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-5 w-5 shrink-0 text-stone-400 transition-transform ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  BÀI 1 – BẤM TỪNG CÂU ĐỂ XEM ĐÁP ÁN                                 */
/* ------------------------------------------------------------------ */

function Exercise1() {
  const [open, setOpen] = useState<boolean[]>(EX1.map(() => false));
  const openCount = open.filter(Boolean).length;

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section>
      <div className="mb-4p-4">
        <p className="text-sm font-medium text-stone-700">
          Dùng các từ chỉ định để dịch các câu sau sang tiếng Trung:
        </p>
        <div className="my-3 flex flex-wrap gap-2">
          {KEYWORDS.map((k) => (
            <span
              key={k}
              className="ztai__zh rounded-full bg-stone-200 px-3 py-1 text-2xl text-stone-800"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-stone-500">
          Đã mở {openCount}/{EX1.length} câu
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setOpen(EX1.map(() => true))}
            className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
          >
            Mở tất cả
          </button>
          <button
            onClick={() => setOpen(EX1.map(() => false))}
            className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
          >
            Đóng tất cả
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {EX1.map((item, i) => (
          <li
            key={i}
            className="overflow-hidden rounded-sm border border-stone-200 bg-white"
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={open[i]}
              className="flex w-full items-start gap-3 p-4 text-left hover:bg-stone-50"
            >
              <span className="w-7 shrink-0 pt-1 text-right text-sm font-semibold text-stone-400">
                {i + 1}.
              </span>
              <span className="flex-1 leading-relaxed text-stone-800">
                {item.vi}
              </span>
              <Chevron open={open[i]} />
            </button>

            {open[i] && (
              <div className="border-t border-stone-200 bg-stone-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Đáp án
                </p>
                <p className="ztai__zh mt-1 text-2xl leading-relaxed text-stone-900">
                  <Highlight text={item.zh} keys={item.keys} />
                </p>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Giải thích
                </p>
                <ul className="mt-1 space-y-1.5 text-sm leading-relaxed text-stone-700">
                  {item.notes.map((n, k) => (
                    <li key={k} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  BÀI 2 – SẮP XẾP + XEM ĐÁP ÁN TỪNG CÂU                             */
/* ------------------------------------------------------------------ */

type Ex2State = { picked: Key[]; checked: boolean; revealed: boolean };

const freshState = (): Ex2State[] =>
  EX2.map(() => ({ picked: [], checked: false, revealed: false }));

function Exercise2() {
  const [states, setStates] = useState<Ex2State[]>(freshState);

  const update = (i: number, patch: Partial<Ex2State>) =>
    setStates((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)),
    );

  const isCorrect = (i: number) =>
    states[i].picked.length === 3 &&
    states[i].picked.every((k, idx) => k === EX2[i].answer[idx]);

  const score = states.filter((s, i) => s.checked && isCorrect(i)).length;
  const done = states.filter((s) => s.checked).length;

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white p-4">
        <div>
          <p className="text-sm font-medium text-stone-700">
            Sắp xếp các phần thành câu hoàn chỉnh
          </p>
          <p className="mt-0.5 text-xs text-stone-500">
            Bấm lần lượt A, B, C theo thứ tự bạn cho là đúng. Bấm vào ô đã chọn
            để bỏ chọn.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-stone-200 px-3 py-1 text-sm text-stone-800">
            Đúng {score}/{done} câu đã kiểm tra
          </span>
          <button
            onClick={() => setStates(freshState())}
            className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
          >
            Làm lại tất cả
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {EX2.map((q, i) => {
          const s = states[i];
          const full = s.picked.length === 3;
          const ok = isCorrect(i);
          const remaining = (["A", "B", "C"] as Key[]).filter(
            (k) => !s.picked.includes(k),
          );

          return (
            <li
              key={i}
              className="rounded-2xl border border-stone-200 bg-white p-4"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="w-7 shrink-0 pt-1 text-right text-xl font-semibold text-stone-400">
                  {i + 1}
                </span>
                {s.checked && (
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                      ok
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {ok ? "Chính xác" : "Chưa đúng"}
                  </span>
                )}
              </div>

              {/* Các phần A B C */}
              <ul className="space-y-2">
                {(["A", "B", "C"] as Key[]).map((k) => {
                  const used = s.picked.includes(k);
                  return (
                    <li key={k}>
                      <button
                        disabled={used || s.checked}
                        onClick={() => update(i, { picked: [...s.picked, k] })}
                        className={`ztai__zh flex w-full items-start gap-3 rounded-xl border px-3 py-2 text-left text-2xl leading-relaxed transition ${
                          used
                            ? "border-stone-200 bg-stone-100 text-stone-400"
                            : "border-stone-300 bg-white text-stone-900 hover:border-stone-500 hover:bg-stone-50"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-sm font-bold ${
                            used
                              ? "bg-stone-200 text-stone-400"
                              : "bg-stone-200 text-stone-700"
                          }`}
                        >
                          {k}
                        </span>
                        <span>{q.frags[k]}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Thứ tự đã chọn */}
              <div className="mt-4">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Thứ tự của bạn
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {[0, 1, 2].map((slot) => {
                    const k = s.picked[slot];
                    return k ? (
                      <button
                        key={slot}
                        disabled={s.checked}
                        onClick={() =>
                          update(i, {
                            picked: s.picked.filter((_, idx) => idx !== slot),
                          })
                        }
                        className={`h-10 min-w-10 rounded-lg px-3 text-base font-bold ${
                          s.checked
                            ? k === q.answer[slot]
                              ? "bg-emerald-700 text-white"
                              : "bg-rose-700 text-white"
                            : "bg-stone-800 text-stone-50 hover:bg-stone-700"
                        }`}
                      >
                        {k}
                      </button>
                    ) : (
                      <span
                        key={slot}
                        className="flex h-10 min-w-10 items-center justify-center rounded-lg border-2 border-dashed border-stone-300 text-stone-300"
                      >
                        {slot + 1}
                      </span>
                    );
                  })}
                  {remaining.length === 0 && !s.checked && (
                    <span className="text-xs text-stone-400">
                      Đã chọn đủ, bấm “Kiểm tra”.
                    </span>
                  )}
                </div>
              </div>

              {/* Nút */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  disabled={!full || s.checked}
                  onClick={() => update(i, { checked: true })}
                  className="rounded-lg bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Kiểm tra
                </button>
                <button
                  onClick={() =>
                    update(i, { picked: [], checked: false, revealed: false })
                  }
                  className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                >
                  Làm lại
                </button>
                <button
                  onClick={() => update(i, { revealed: !s.revealed })}
                  aria-expanded={s.revealed}
                  className="ml-auto flex items-center gap-1 rounded-lg border border-stone-300 bg-stone-100 px-4 py-2 text-sm text-stone-800 hover:bg-stone-200"
                >
                  {s.revealed ? "Ẩn đáp án" : "Xem đáp án"}
                  <Chevron open={s.revealed} />
                </button>
              </div>

              {/* Đáp án */}
              {s.revealed && (
                <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Đáp án
                  </p>
                  <p className="mt-1 text-lg font-bold tracking-wide text-stone-900">
                    {q.answer.join(" – ")}
                  </p>
                  <p className="mt-2 text-xl leading-relaxed text-stone-900">
                    {buildSentence(q.frags, q.answer)}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Dịch
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-700">
                    {q.vi}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Giải thích
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-700">
                    {q.tip}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRANG CHÍNH                                                        */
/* ------------------------------------------------------------------ */

export default function BaiTapBai1() {
  const [tab, setTab] = useState<1 | 2>(1);

  return (
    <main className="px-4 text-stone-900">
      <nav className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-stone-200 p-1">
        {[
          { id: 1 as const, label: "Bài 1 · Dịch câu" },
          { id: 2 as const, label: "Bài 2 · Sắp xếp" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              tab === t.id
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {tab === 1 ? <Exercise1 /> : <Exercise2 />}

      <Link
        href="https://docs.google.com/document/d/140ystDhxnx6mUoXz-pWyqnNXyk16xc8GvpXQiMRYg3s/edit?usp=sharing "
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-right text-blue-800 hover:underline"
      >
        Đối chiếu với file đáp án gốc
      </Link>
    </main>
  );
}
