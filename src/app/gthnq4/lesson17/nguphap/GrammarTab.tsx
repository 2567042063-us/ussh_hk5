"use client";

/* Tab 语法 bài 17 — lấy từ mục "四 语法" của PDF
   ① 存现句 (tồn tại / xuất hiện / biến mất)
   ② 越来越… và 越…越…
*/

type Example = {
  zh: string;
  py: string;
  vi: string;
  /** Cụm cần tô sáng trong câu */
  marks?: string[];
};

type GrammarPoint = {
  no: string;
  title: string;
  subtitle: string;
  rule: string;
  formula: string;
  examples: Example[];
  /** Ghi chú thêm (lỗi thường gặp, phân biệt…) */
  notes?: string[];
};

const points: GrammarPoint[] = [
  {
    no: "①",
    title: "存现句",
    subtitle:
      "Câu tồn hiện: biểu thị sự tồn tại, xuất hiện hoặc biến mất của người/vật",
    rule: "Câu tồn hiện dùng để miêu tả khách quan sự vật. Tân ngữ trong câu là thông tin chưa biết, không xác định, nên không dùng danh từ xác định (tên riêng, 这个/那个 + N…). Cấu trúc cơ bản: Nơi chốn + Động từ + trợ từ / bổ ngữ + Danh từ.",
    formula: "处所词 + 动词 + 助词/补语 + 名词",
    examples: [
      {
        zh: "门前种着一棵树。",
        py: "Mén qián zhòngzhe yì kē shù.",
        vi: "Trước cửa trồng một cây.",
        marks: ["种着"],
      },
      {
        zh: "树上开着很多花儿。",
        py: "Shù shang kāizhe hěn duō huār.",
        vi: "Trên cây nở rất nhiều hoa.",
        marks: ["开着"],
      },
      {
        zh: "楼下上来一个人。",
        py: "Lóu xià shànglai yí ge rén.",
        vi: "Dưới lầu có một người đi lên.",
        marks: ["上来"],
      },
      {
        zh: "前面开过来一辆出租车。",
        py: "Qiánmiàn kāi guolai yí liàng chūzūchē.",
        vi: "Phía trước có một chiếc taxi chạy tới.",
        marks: ["开过来"],
      },
      {
        zh: "我们班走了两个学生。",
        py: "Wǒmen bān zǒu le liǎng ge xuésheng.",
        vi: "Lớp chúng tôi có hai học sinh chuyển đi.",
        marks: ["走了"],
      },
    ],
    notes: [
      "Không nói: *楼上下来了王老师。 → Phải nói: 楼上下来了一个人。",
      "Tân ngữ là danh từ không xác định: 一个人, 一辆出租车, 两个学生…",
    ],
  },
  {
    no: "②",
    title: "越来越…",
    subtitle: "Biểu thị mức độ thay đổi theo thời gian",
    rule: "越来越… biểu thị mức độ của sự vật thay đổi theo thời gian, nghĩa là “ngày càng…”. Đứng sau là tính từ hoặc động từ chỉ trạng thái, tâm lí.",
    formula: "越来越 + Tính từ / Động từ tâm lí",
    examples: [
      {
        zh: "课文越来越长。",
        py: "Kèwén yuèláiyuè cháng.",
        vi: "Bài khoá ngày càng dài.",
        marks: ["越来越"],
      },
      {
        zh: "年轻人越来越会打扮了。",
        py: "Niánqīngrén yuèláiyuè huì dǎban le.",
        vi: "Người trẻ ngày càng biết ăn mặc.",
        marks: ["越来越"],
      },
      {
        zh: "来中国学习汉语的人越来越多。",
        py: "Lái Zhōngguó xuéxí Hànyǔ de rén yuèláiyuè duō.",
        vi: "Người đến Trung Quốc học tiếng Trung ngày càng nhiều.",
        marks: ["越来越"],
      },
    ],
  },
  {
    no: "③",
    title: "越…越…",
    subtitle: "Biểu thị mức độ thay đổi theo điều kiện",
    rule: "越…越… biểu thị mức độ của sự vật thay đổi theo điều kiện, nghĩa là “càng… càng…”. Kết cấu này đã hàm ý mức độ cao nên không dùng thêm phó từ chỉ mức độ trước vị ngữ.",
    formula: "越 + A/V + 越 + A/V",
    examples: [
      {
        zh: "城市里大楼越盖越多了。",
        py: "Chéngshì li dàlóu yuè gài yuè duō le.",
        vi: "Trong thành phố nhà cao tầng càng xây càng nhiều.",
        marks: ["越盖越多"],
      },
      {
        zh: "他的汉语越说越好。",
        py: "Tā de Hànyǔ yuè shuō yuè hǎo.",
        vi: "Tiếng Trung của anh ấy càng nói càng tốt.",
        marks: ["越说越好"],
      },
      {
        zh: "你看，雨越下越大了。",
        py: "Nǐ kàn, yǔ yuè xià yuè dà le.",
        vi: "Bạn xem, mưa càng lúc càng to.",
        marks: ["越下越大"],
      },
      {
        zh: "这本书我越看越喜欢。",
        py: "Zhè běn shū wǒ yuè kàn yuè xǐhuan.",
        vi: "Cuốn sách này mình càng đọc càng thích.",
        marks: ["越看越喜欢"],
      },
    ],
    notes: [
      "Không nói: *这本书我越看越很喜欢。 → Phải nói: 这本书我越看越喜欢。",
      "越…越… đã hàm ý mức độ cao, không dùng 很 / 非常… trước vị ngữ.",
    ],
  },
];

const markClass = "rounded-sm bg-yellow-200 px-0.5 text-inherit";

function renderMarks(zh: string, marks?: string[]) {
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

export default function GrammarTab() {
  return (
    <div>
      <h1 className="ztai__zh mb-1 text-2xl font-bold">语法 · 存现句</h1>
      <p className="mb-5 text-stone-500">
        人或事物的存在、出现和消失 · 越来越… · 越…越…
      </p>

      {points.map((point) => (
        <section key={point.no} className="mb-8">
          <h2 className="ztai__zh mb-1 text-xl font-bold">
            <span className="mr-1 text-stone-400">{point.no}</span>
            {point.title}
          </h2>
          <h3 className="mb-2 text-stone-500">{point.subtitle}</h3>
          <p className="mb-3 text-sm leading-6 text-stone-800 dark:text-stone-300">
            {point.rule}
          </p>
          <p className="mb-3 inline-block rounded-sm bg-stone-200 px-3 py-1.5 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
            {point.formula}
          </p>

          <div className="grid grid-cols-1 gap-3">
            {point.examples.map((ex, i) => (
              <article
                key={ex.zh}
                className="overflow-hidden rounded-sm border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900 sm:p-4"
              >
                <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
                  <span className="mr-2 text-base text-stone-400">
                    ({i + 1})
                  </span>
                  {renderMarks(ex.zh, ex.marks)}
                </p>
                <p className="wrap-break-word mt-1 text-sm text-stone-500 dark:text-sky-300">
                  {ex.py}
                </p>
                <p className="mt-2 text-sm leading-5 text-stone-800 dark:text-stone-300">
                  {ex.vi}
                </p>
              </article>
            ))}
          </div>

          {point.notes && point.notes.length > 0 && (
            <ul className="mt-3 space-y-1 border-l-2 border-stone-300 pl-3 text-xs leading-5 text-stone-500 dark:border-stone-600">
              {point.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
