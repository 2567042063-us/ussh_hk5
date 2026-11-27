"use client";

/* Tab 练习 bài 17 — tổng hợp toàn bộ câu ví dụ trong mục 语法
   thành 4 dạng bài: 填空 · 连词成句 · 翻译 · 例句
*/

export type ExerciseSentence = {
  zh: string;
  py: string;
  vi: string;
  tokens: string[];
  /** Cụm ngữ pháp cần tô sáng trong đáp án */
  marks?: string[];
};

export const sentences: ExerciseSentence[] = [
  /* 存现句 */
  {
    zh: "门前种着一棵树。",
    py: "Mén qián zhòngzhe yì kē shù.",
    vi: "Trước cửa trồng một cây.",
    tokens: ["门前", "种着", "一棵", "树"],
    marks: ["种着"],
  },
  {
    zh: "树上开着很多花儿。",
    py: "Shù shang kāizhe hěn duō huār.",
    vi: "Trên cây nở rất nhiều hoa.",
    tokens: ["树上", "开着", "很多", "花儿"],
    marks: ["开着"],
  },
  {
    zh: "楼下上来一个人。",
    py: "Lóu xià shànglai yí ge rén.",
    vi: "Dưới lầu có một người đi lên.",
    tokens: ["楼下", "上来", "一个", "人"],
    marks: ["上来"],
  },
  {
    zh: "前面开过来一辆出租车。",
    py: "Qiánmiàn kāi guolai yí liàng chūzūchē.",
    vi: "Phía trước có một chiếc taxi chạy tới.",
    tokens: ["前面", "开过来", "一辆", "出租车"],
    marks: ["开过来"],
  },
  {
    zh: "我们班走了两个学生。",
    py: "Wǒmen bān zǒu le liǎng ge xuésheng.",
    vi: "Lớp chúng tôi có hai học sinh chuyển đi.",
    tokens: ["我们班", "走了", "两个", "学生"],
    marks: ["走了"],
  },
  /* 越来越… */
  {
    zh: "课文越来越长。",
    py: "Kèwén yuèláiyuè cháng.",
    vi: "Bài khoá ngày càng dài.",
    tokens: ["课文", "越来越", "长"],
    marks: ["越来越"],
  },
  {
    zh: "年轻人越来越会打扮了。",
    py: "Niánqīngrén yuèláiyuè huì dǎban le.",
    vi: "Người trẻ ngày càng biết ăn mặc.",
    tokens: ["年轻人", "越来越", "会", "打扮", "了"],
    marks: ["越来越"],
  },
  {
    zh: "来中国学习汉语的人越来越多。",
    py: "Lái Zhōngguó xuéxí Hànyǔ de rén yuèláiyuè duō.",
    vi: "Người đến Trung Quốc học tiếng Trung ngày càng nhiều.",
    tokens: ["来", "中国", "学习", "汉语", "的", "人", "越来越", "多"],
    marks: ["越来越"],
  },
  /* 越…越… */
  {
    zh: "城市里大楼越盖越多了。",
    py: "Chéngshì li dàlóu yuè gài yuè duō le.",
    vi: "Trong thành phố nhà cao tầng càng xây càng nhiều.",
    tokens: ["城市里", "大楼", "越", "盖", "越", "多", "了"],
    marks: ["越盖越多"],
  },
  {
    zh: "他的汉语越说越好。",
    py: "Tā de Hànyǔ yuè shuō yuè hǎo.",
    vi: "Tiếng Trung của anh ấy càng nói càng tốt.",
    tokens: ["他", "的", "汉语", "越", "说", "越", "好"],
    marks: ["越说越好"],
  },
  {
    zh: "你看，雨越下越大了。",
    py: "Nǐ kàn, yǔ yuè xià yuè dà le.",
    vi: "Bạn xem, mưa càng lúc càng to.",
    tokens: ["你", "看", "雨", "越", "下", "越", "大", "了"],
    marks: ["越下越大"],
  },
  {
    zh: "这本书我越看越喜欢。",
    py: "Zhè běn shū wǒ yuè kàn yuè xǐhuan.",
    vi: "Cuốn sách này mình càng đọc càng thích.",
    tokens: ["这", "本", "书", "我", "越", "看", "越", "喜欢"],
    marks: ["越看越喜欢"],
  },
];

// Xáo trộn cố định (không random) để tránh lệch SSR/hydration
function scramble(tokens: string[]) {
  const n = tokens.length;
  const r = [...tokens].reverse();
  return r.map((_, i) => r[(i + 1) % n]);
}

function blank(zh: string) {
  // Ẩn các cụm ngữ pháp trọng tâm để điền
  return zh.replace(
    /种着|开着|上来|开过来|走了|越来越|越盖越多|越说越好|越下越大|越看越喜欢/g,
    "＿＿",
  );
}

const markClass = "rounded-sm bg-yellow-200 px-0.5 text-inherit";

export function renderMarks(zh: string, marks?: string[]) {
  if (!marks || marks.length === 0) return zh;
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  marks.forEach((mark, i) => {
    const start = zh.indexOf(mark, cursor);
    if (start === -1) return;
    parts.push(zh.slice(cursor, start));
    parts.push(
      <mark key={i} className={markClass}>
        {mark}
      </mark>,
    );
    cursor = start + mark.length;
  });
  parts.push(zh.slice(cursor));
  return parts;
}

function Answer({ s }: { s: ExerciseSentence }) {
  return (
    <details className="mt-3 text-sm">
      <summary className="cursor-pointer text-stone-500 dark:text-sky-300">
        Xem đáp án
      </summary>
      <p className="font-kaiti mt-2 text-xl text-stone-900 dark:text-stone-100">
        {renderMarks(s.zh, s.marks)}
      </p>
      <p className="mt-1 text-stone-500 dark:text-sky-300">{s.py}</p>
    </details>
  );
}

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

export default function ExercisesTab() {
  return (
    <div>
      <h1 className="ztai__zh mb-1 text-2xl font-bold">练习 · 存现句</h1>
      <p className="mb-5 text-stone-500">
        Tổng hợp câu ví dụ trong mục 语法 thành bài tập
      </p>

      <section>
        <h2 className="ztai__zh mb-1 text-xl font-bold">(1) 填空</h2>
        <p className="mb-3 text-stone-500">
          Điền cụm ngữ pháp còn thiếu, đọc to rồi bấm xem đáp án
        </p>
        <div className="grid grid-cols-1 gap-3">
          {sentences.map((s, i) => (
            <Card key={s.zh} index={i}>
              <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
                {blank(s.zh)}
              </p>
              <p className="mt-2 text-sm leading-5 text-stone-800 dark:text-stone-300">
                {s.vi}
              </p>
              <Answer s={s} />
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="ztai__zh mb-1 text-xl font-bold">(2) 连词成句</h2>
        <p className="mb-3 text-stone-500">
          Sắp xếp các thành phần thành câu hoàn chỉnh
        </p>
        <div className="grid grid-cols-1 gap-3">
          {sentences.map((s, i) => (
            <Card key={s.zh} index={i}>
              <div className="flex flex-wrap gap-2">
                {scramble(s.tokens).map((t, j) => (
                  <span
                    key={`${t}-${j}`}
                    className="font-kaiti rounded-sm border border-stone-300 bg-stone-50 px-2 py-1 text-xl text-stone-900 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-5 text-stone-800 dark:text-stone-300">
                {s.vi}
              </p>
              <Answer s={s} />
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="ztai__zh mb-1 text-xl font-bold">(3) 翻译</h2>
        <p className="mb-3 text-stone-500">
          Dịch câu tiếng Việt sang tiếng Trung
        </p>
        <div className="grid grid-cols-1 gap-3">
          {sentences.map((s, i) => (
            <Card key={s.zh} index={i}>
              <p className="text-base leading-6 text-stone-900 dark:text-stone-100">
                {s.vi}
              </p>
              <Answer s={s} />
            </Card>
          ))}
        </div>
      </section>

      {/* <section className="mt-8">
        <h2 className="ztai__zh mb-1 text-xl font-bold">(4) 例句</h2>
        <p className="mb-3 text-stone-500">Danh sách toàn bộ câu ví dụ</p>
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
      </section> */}
    </div>
  );
}
