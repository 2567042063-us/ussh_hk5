"use client";

import { useState } from "react";

type Choice = "稍微" | "有点儿";

type Question = {
  id: number;
  before: string;
  after: string;
  pinyinBefore: string;
  pinyinAfter: string;
  answer: Choice;
  vi: string;
  explanation: string;
};

const CHOICES: { word: Choice; pinyin: string }[] = [
  { word: "稍微", pinyin: "shāowēi" },
  { word: "有点儿", pinyin: "yǒudiǎnr" },
];

const QUESTIONS: Question[] = [
  {
    id: 1,
    before: "今天我身体不太舒服，觉得",
    after: "累。",
    pinyinBefore: "Jīntiān wǒ shēntǐ bú tài shūfu, juéde",
    pinyinAfter: "lèi.",
    answer: "有点儿",
    vi: "Hôm nay cơ thể mình không khỏe lắm, cảm thấy hơi mệt.",
    explanation:
      "Mệt là trạng thái không như ý của người nói, mà 有点儿 + tính từ thường diễn tả điều không mong muốn, mang sắc thái bất mãn. 稍微 không dùng để miêu tả cảm giác khó chịu như vậy.",
  },
  {
    id: 2,
    before: "请你",
    after: "说慢一点儿，我听不懂。",
    pinyinBefore: "Qǐng nǐ",
    pinyinAfter: "shuō màn yìdiǎnr, wǒ tīng bù dǒng.",
    answer: "稍微",
    vi: "Bạn làm ơn nói chậm lại một chút, mình nghe không hiểu.",
    explanation:
      "Đây là câu đề nghị, mong muốn thay đổi. 稍微 + động từ/tính từ + 一点儿/一下 dùng để yêu cầu điều chỉnh ở mức độ nhẹ. 有点儿 không dùng được trong câu cầu khiến.",
  },
  {
    id: 3,
    before: "这件衣服",
    after: "贵，我不想买。",
    pinyinBefore: "Zhè jiàn yīfu",
    pinyinAfter: "guì, wǒ bù xiǎng mǎi.",
    answer: "有点儿",
    vi: "Bộ quần áo này hơi đắt, mình không muốn mua.",
    explanation:
      "Người nói chê giá đắt, không hài lòng và dẫn đến quyết định không mua. 有点儿 + 贵 diễn tả sự bất mãn rất tự nhiên. 稍微 thường đi với 一点儿 và dùng khi so sánh hoặc đề nghị.",
  },
  {
    id: 4,
    before: "请大家",
    after: "安静一下，老师要说话了。",
    pinyinBefore: "Qǐng dàjiā",
    pinyinAfter: "ānjìng yíxià, lǎoshī yào shuōhuà le.",
    answer: "稍微",
    vi: "Mọi người vui lòng giữ yên lặng một chút, thầy cô sắp nói rồi.",
    explanation:
      "Câu bắt đầu bằng 请, là câu cầu khiến, nên dùng 稍微. Cấu trúc 稍微 + 安静 + 一下 nghĩa là yêu cầu làm cho yên lặng một chút. 有点儿 không dùng trong câu yêu cầu.",
  },
  {
    id: 5,
    before: "这个房间",
    after: "小，不适合住四个人。",
    pinyinBefore: "Zhège fángjiān",
    pinyinAfter: "xiǎo, bú shìhé zhù sì ge rén.",
    answer: "有点儿",
    vi: "Căn phòng này hơi nhỏ, không thích hợp cho bốn người ở.",
    explanation:
      "Phòng nhỏ là điều người nói thấy chưa vừa ý, vì nó không hợp cho bốn người ở. 有点儿 + tính từ diễn tả sự chưa hài lòng. Đây là câu trần thuật, không phải đề nghị.",
  },
  {
    id: 6,
    before: "你",
    after: "等我一下，我马上就来。",
    pinyinBefore: "Nǐ",
    pinyinAfter: "děng wǒ yíxià, wǒ mǎshàng jiù lái.",
    answer: "稍微",
    vi: "Bạn đợi mình một chút, mình đến ngay.",
    explanation:
      "Đây là lời nhờ đợi một lúc ngắn, thuộc câu cầu khiến. 稍微 + 等 + 一下 nghĩa là đợi một chút, mức độ nhẹ. 有点儿 không đứng trước động từ để yêu cầu như vậy.",
  },
];

export default function ShaoweiYoudianrExercise() {
  const [picked, setPicked] = useState<Record<number, Choice>>({});
  const [revealAll, setRevealAll] = useState(false);

  const answered = Object.keys(picked).length;
  const score = QUESTIONS.filter((q) => picked[q.id] === q.answer).length;
  const done = answered === QUESTIONS.length;

  const reset = () => {
    setPicked({});
    setRevealAll(false);
  };

  return (
    <>
      <div className="mb-4">
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {CHOICES.map((c) => (
            <div
              key={c.word}
              className="rounded-sm border border-stone-300 bg-stone-50 px-4 py-3 text-sm"
            >
              <p className="text-base font-medium text-stone-900">
                <span className="ztai__zh text-3xl">{c.word} </span>
                <span className="font-normal text-stone-500">{c.pinyin}</span>
              </p>
              <p className="mt-1 text-stone-600">
                {c.word === "稍微"
                  ? "Một chút, hơi. Hay dùng khi đề nghị hoặc so sánh, không mang sắc thái bất mãn."
                  : "Hơi, có chút. Diễn tả trạng thái không như ý, thường mang sắc thái bất mãn."}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ol className="space-y-3">
        {QUESTIONS.map((q) => {
          const choice = picked[q.id];
          const show = revealAll || choice !== undefined;
          const correct = choice === q.answer;

          return (
            <li
              key={q.id}
              className="rounded-sm border border-stone-300 bg-white p-5"
            >
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-medium text-stone-700">
                  {q.id}
                </span>
                <div className="min-w-0">
                  <p className="text-xl leading-relaxed text-stone-900">
                    {q.before}
                    <span
                      className={`mx-1 inline-block min-w-[4.5rem] border-b-2 px-1 text-center ${
                        show
                          ? "border-sky-600 font-medium text-sky-700"
                          : "border-stone-400 text-transparent"
                      }`}
                    >
                      {show ? q.answer : "＿＿"}
                    </span>
                    {q.after}
                  </p>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 pl-9">
                {CHOICES.map((c) => {
                  const isPicked = choice === c.word;
                  const isAnswer = q.answer === c.word;
                  let style =
                    "border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-200";
                  if (choice !== undefined && isAnswer)
                    style = "border-sky-600 bg-sky-600 text-white";
                  else if (isPicked && !isAnswer)
                    style =
                      "border-stone-400 bg-stone-200 text-stone-500 line-through";

                  return (
                    <button
                      key={c.word}
                      type="button"
                      disabled={choice !== undefined}
                      onClick={() =>
                        setPicked((p) => ({ ...p, [q.id]: c.word }))
                      }
                      className={`rounded-sm border px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 disabled:cursor-default ${style}`}
                    >
                      {c.word}
                    </button>
                  );
                })}
              </div>

              {show && (
                <div className="ml-9 mt-4 rounded-sm border border-stone-200 bg-stone-50 p-4 text-sm leading-relaxed">
                  {choice !== undefined && (
                    <p className="mb-2 font-medium text-sky-700">
                      {correct
                        ? "Chính xác."
                        : `Chưa đúng, đáp án là ${q.answer}.`}
                    </p>
                  )}
                  <p className="text-light text-stone-700">{q.explanation}</p>
                  <p className="mt-2 text-sm text-stone-500">
                    {q.pinyinBefore}{" "}
                    <span className={show ? "font-medium text-sky-700" : ""}>
                      {show
                        ? q.answer === "稍微"
                          ? "shāowēi"
                          : "yǒudiǎnr"
                        : "____"}
                    </span>{" "}
                    {q.pinyinAfter}
                  </p>
                  <p className="mt-1 text-stone-500">{q.vi}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <section className="mt-3 rounded-sm border border-sky-100 bg-sky-50 p-5">
        <h2 className="text-base font-semibold text-stone-900">
          Ghi nhớ nhanh
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone-900">
          <li>
            有点儿 (yǒudiǎnr) + tính từ: miêu tả trạng thái hiện tại, thường
            không như ý. <br />
            Ví dụ: 有点儿累 (hơi mệt), 有点儿贵 (hơi đắt).
          </li>
          <li>
            稍微 (shāowēi) + động từ/tính từ + 一点儿/一下 <br /> mức độ nhẹ,
            hay dùng trong câu đề nghị. Ví dụ: 稍微等一下 (đợi một chút).
          </li>
          <li>Câu có 请 hoặc ý nhờ bảo thường dùng 稍微, không dùng 有点儿.</li>
        </ul>
      </section>

      <footer className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-600">
          {done
            ? `Kết quả: ${score}/${QUESTIONS.length} câu đúng`
            : `Đã làm ${answered}/${QUESTIONS.length} câu`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRevealAll((v) => !v)}
            className="rounded-sm border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            {revealAll ? "Ẩn đáp án" : "Xem tất cả đáp án"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-sm bg-stone-800 px-4 py-2 text-sm text-stone-50 transition hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
          >
            Làm lại
          </button>
        </div>
      </footer>
    </>
  );
}
