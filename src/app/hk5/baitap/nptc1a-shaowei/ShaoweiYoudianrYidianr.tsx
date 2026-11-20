"use client";

import { useState } from "react";

type Choice = "稍微" | "有点儿" | "一点儿";

const PINYIN: Record<Choice, string> = {
  稍微: "shāowēi",
  有点儿: "yǒudiǎnr",
  一点儿: "yìdiǎnr",
};

const CHOICES: Choice[] = ["稍微", "有点儿", "一点儿"];

type Question = {
  before: string;
  after: string;
  pinyinBefore: string;
  pinyinAfter: string;
  answer: Choice;
  vi: string;
  explanation: string;
};

const COMPARE = [
  {
    label: "Từ loại",
    cells: ["Phó từ (副词)", "Phó từ (副词)", "Số lượng từ bất định (数量词)"],
  },
  {
    label: "Cấu trúc",
    cells: [
      "稍微 + verb / adj (+ 一点儿 / 一下)",
      "有点儿 + adj",
      "adj / verb + 一点儿\n一点儿 + danh từ\n一点儿 + 也 + 不 / 没",
    ],
  },
  {
    label: "Vị trí",
    cells: [
      "Trước verb / adj",
      "Trước adj",
      "Sau adj / verb, hoặc trước danh từ",
    ],
  },
  {
    label: "Sắc thái",
    cells: [
      "Mức độ rất nhẹ, nghe nhẹ nhàng, lịch sự",
      "Hơi, thường là điều không như ý",
      "Trung tính, chỉ lượng hoặc mức độ nhỏ",
    ],
  },
  {
    label: "Câu cầu khiến",
    cells: ["Dùng được", "Không dùng được", "Dùng được"],
  },
  {
    label: "Ví dụ",
    cells: [
      "请稍微等一下。\nQǐng shāowēi děng yíxià.",
      "这件衣服有点儿贵。\nZhè jiàn yīfu yǒudiǎnr guì.",
      "便宜一点儿。 / 我想喝一点儿水。\nPiányi yìdiǎnr. / Wǒ xiǎng hē yìdiǎnr shuǐ.",
    ],
  },
];

const QUESTIONS: Question[] = [
  {
    before: "这个菜",
    after: "辣，我不太能吃。",
    pinyinBefore: "Zhège cài",
    pinyinAfter: "là, wǒ bú tài néng chī.",
    answer: "有点儿",
    vi: "Món này hơi cay, mình không ăn cay lắm được.",
    explanation:
      "Chỗ trống đứng trước adj 辣 và người nói thấy chưa vừa ý, nên dùng 有点儿.",
  },
  {
    before: "这件衣服太大了，请给我小",
    after: "的。",
    pinyinBefore: "Zhè jiàn yīfu tài dà le, qǐng gěi wǒ xiǎo",
    pinyinAfter: "de.",
    answer: "一点儿",
    vi: "Cái áo này to quá, cho mình cái nhỏ hơn một chút.",
    explanation:
      "一点儿 đứng sau adj (小一点儿) để nêu yêu cầu thay đổi nhẹ. 有点儿 và 稍微 đều đứng trước adj.",
  },
  {
    before: "你",
    after: "休息一下吧，别太累了。",
    pinyinBefore: "Nǐ",
    pinyinAfter: "xiūxi yíxià ba, bié tài lèi le.",
    answer: "稍微",
    vi: "Bạn nghỉ ngơi một chút đi, đừng mệt quá.",
    explanation:
      "Đây là lời khuyên (câu cầu khiến) và chỗ trống đứng trước verb 休息, nên dùng 稍微.",
  },
  {
    before: "我想喝",
    after: "咖啡。",
    pinyinBefore: "Wǒ xiǎng hē",
    pinyinAfter: "kāfēi.",
    answer: "一点儿",
    vi: "Mình muốn uống một ít cà phê.",
    explanation:
      "Chỗ trống đứng trước danh từ 咖啡 để chỉ lượng ít. Chỉ 一点儿 đứng được trước danh từ.",
  },
  {
    before: "他今天",
    after: "不高兴，你别去打扰他。",
    pinyinBefore: "Tā jīntiān",
    pinyinAfter: "bù gāoxìng, nǐ bié qù dǎrǎo tā.",
    answer: "有点儿",
    vi: "Hôm nay anh ấy hơi không vui, bạn đừng đi làm phiền anh ấy.",
    explanation:
      "Miêu tả trạng thái không tốt của người khác, thuộc sắc thái không như ý của 有点儿.",
  },
  {
    before: "这个房间太吵了，请你们小声",
    after: "。",
    pinyinBefore: "Zhège fángjiān tài chǎo le, qǐng nǐmen xiǎoshēng",
    pinyinAfter: ".",
    answer: "一点儿",
    vi: "Căn phòng này ồn quá, mọi người nói nhỏ lại một chút.",
    explanation:
      "Chỗ trống nằm cuối câu, sau 小声, nên chỉ có 一点儿 phù hợp (小声一点儿).",
  },
  {
    before: "今天比昨天",
    after: "热一点儿。",
    pinyinBefore: "Jīntiān bǐ zuótiān",
    pinyinAfter: "rè yìdiǎnr.",
    answer: "稍微",
    vi: "Hôm nay nóng hơn hôm qua một chút.",
    explanation:
      "Câu so sánh với 比 dùng 稍微 + adj + 一点儿. 有点儿 không dùng trong câu so sánh 比.",
  },
  {
    before: "我",
    after: "也不累，还可以再走一个小时。",
    pinyinBefore: "Wǒ",
    pinyinAfter: "yě bú lèi, hái kěyǐ zài zǒu yí ge xiǎoshí.",
    answer: "一点儿",
    vi: "Mình không mệt chút nào, còn đi thêm một tiếng nữa được.",
    explanation:
      "Cấu trúc 一点儿 + 也 + 不 + adj nghĩa là không ... chút nào. Chỉ 一点儿 có cấu trúc này.",
  },
  {
    before: "这双鞋",
    after: "小，我穿着不舒服。",
    pinyinBefore: "Zhè shuāng xié",
    pinyinAfter: "xiǎo, wǒ chuān zhe bù shūfu.",
    answer: "有点儿",
    vi: "Đôi giày này hơi nhỏ, mình đi thấy không thoải mái.",
    explanation:
      "Giày nhỏ gây khó chịu, là điều không như ý, đứng trước adj 小, nên dùng 有点儿.",
  },
  {
    before: "请你",
    after: "往前走几步。",
    pinyinBefore: "Qǐng nǐ",
    pinyinAfter: "wǎng qián zǒu jǐ bù.",
    answer: "稍微",
    vi: "Bạn làm ơn bước lên phía trước vài bước một chút.",
    explanation:
      "Câu có 请 là câu cầu khiến, chỗ trống đứng trước verb/giới từ ngữ nên dùng 稍微.",
  },
  {
    before: "我只会说",
    after: "汉语。",
    pinyinBefore: "Wǒ zhǐ huì shuō",
    pinyinAfter: "Hànyǔ.",
    answer: "一点儿",
    vi: "Mình chỉ biết nói một ít tiếng Trung.",
    explanation: "一点儿 + danh từ (汉语) chỉ một lượng nhỏ.",
  },
  {
    before: "我觉得这里的冬天",
    after: "冷，不太习惯。",
    pinyinBefore: "Wǒ juéde zhèlǐ de dōngtiān",
    pinyinAfter: "lěng, bú tài xíguàn.",
    answer: "有点儿",
    vi: "Mình thấy mùa đông ở đây hơi lạnh, không quen lắm.",
    explanation:
      "Người nói cảm thấy chưa quen, mang sắc thái không hài lòng, đứng trước adj 冷, nên dùng 有点儿.",
  },
  {
    before: "你的病好多了，但还要",
    after: "注意一下。",
    pinyinBefore: "Nǐ de bìng hǎo duō le, dàn hái yào",
    pinyinAfter: "zhùyì yíxià.",
    answer: "稍微",
    vi: "Bệnh bạn đỡ nhiều rồi, nhưng vẫn cần chú ý một chút.",
    explanation:
      "稍微 + verb + 一下 là lời nhắc nhở nhẹ nhàng. 有点儿 không đứng trước verb 注意 trong nghĩa này.",
  },
  {
    before: "这件比那件便宜",
    after: "。",
    pinyinBefore: "Zhè jiàn bǐ nà jiàn piányi",
    pinyinAfter: ".",
    answer: "一点儿",
    vi: "Cái này rẻ hơn cái kia một chút.",
    explanation:
      "Trong câu so sánh 比, 一点儿 đứng sau adj để chỉ mức chênh lệch nhỏ.",
  },
  {
    before: "他的房间",
    after: "乱，你帮他收拾一下吧。",
    pinyinBefore: "Tā de fángjiān",
    pinyinAfter: "luàn, nǐ bāng tā shōushi yíxià ba.",
    answer: "有点儿",
    vi: "Phòng của anh ấy hơi bừa, bạn giúp anh ấy dọn một chút đi.",
    explanation:
      "Chê phòng bừa, đứng trước adj 乱, đây là câu nêu nhận xét không như ý nên dùng 有点儿.",
  },
  {
    before: "请把声音开大",
    after: "，我听不清楚。",
    pinyinBefore: "Qǐng bǎ shēngyīn kāi dà",
    pinyinAfter: ", wǒ tīng bù qīngchu.",
    answer: "一点儿",
    vi: "Làm ơn mở âm thanh to hơn một chút, mình nghe không rõ.",
    explanation:
      "Yêu cầu thay đổi mức độ, 一点儿 đứng sau adj 大 (开大一点儿).",
  },
  {
    before: "请您",
    after: "等一会儿，经理马上就来。",
    pinyinBefore: "Qǐng nín",
    pinyinAfter: "děng yíhuìr, jīnglǐ mǎshàng jiù lái.",
    answer: "稍微",
    vi: "Ngài vui lòng đợi một lát, giám đốc đến ngay.",
    explanation:
      "Lời nhờ lịch sự, đứng trước verb 等, dùng 稍微 để câu nghe nhẹ nhàng.",
  },
  {
    before: "这个手机很好，就是",
    after: "贵。",
    pinyinBefore: "Zhège shǒujī hěn hǎo, jiùshì",
    pinyinAfter: "guì.",
    answer: "有点儿",
    vi: "Cái điện thoại này rất tốt, chỉ là hơi đắt.",
    explanation:
      "就是 ... nêu điểm chưa hài lòng. 有点儿 + 贵 diễn tả đúng sắc thái chê nhẹ.",
  },
  {
    before: "这道题很简单，只要",
    after: "想一想就能做出来。",
    pinyinBefore: "Zhè dào tí hěn jiǎndān, zhǐyào",
    pinyinAfter: "xiǎng yi xiǎng jiù néng zuò chūlái.",
    answer: "稍微",
    vi: "Bài này rất đơn giản, chỉ cần nghĩ một chút là làm ra.",
    explanation:
      "稍微 + verb lặp (想一想) nghĩa là chỉ cần làm một chút, mức độ rất nhẹ.",
  },
  {
    before: "今天我没有胃口，只吃了",
    after: "饭。",
    pinyinBefore: "Jīntiān wǒ méiyǒu wèikǒu, zhǐ chīle",
    pinyinAfter: "fàn.",
    answer: "一点儿",
    vi: "Hôm nay mình không thấy thèm ăn, chỉ ăn một ít cơm.",
    explanation:
      "一点儿 + danh từ (饭) chỉ lượng ít. 稍微 và 有点儿 không đứng trước danh từ.",
  },
];

export default function ShaoweiYoudianrYidianr() {
  const [picked, setPicked] = useState<Record<number, Choice>>({});
  const [revealAll, setRevealAll] = useState(false);

  const answered = Object.keys(picked).length;
  const score = QUESTIONS.filter((q, i) => picked[i] === q.answer).length;
  const done = answered === QUESTIONS.length;

  const reset = () => {
    setPicked({});
    setRevealAll(false);
  };

  return (
    <div className="min-h-screen text-stone-800">
      <div className="mx-auto max-w-3xl px-4">
        <p className="mt-1 text-sm text-stone-500">
          Xem bảng so sánh, sau đó làm 20 câu để thấy sự khác biệt.
        </p>

        <section className="overflow-x-auto rounded-sm border border-stone-300 bg-white">
          <table className="min-w-160 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-stone-200 text-stone-900">
                <th className="w-28 px-4 py-3 font-medium"></th>
                {CHOICES.map((c) => (
                  <th key={c} className="px-4 py-3 font-medium">
                    <span className="text-base">{c}</span>{" "}
                    <span className="font-normal text-stone-600">
                      {PINYIN[c]}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr
                  key={row.label}
                  className="border-t border-stone-200 align-top"
                >
                  <th className="bg-stone-50 px-4 py-3 font-medium text-stone-700">
                    {row.label}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className="whitespace-pre-line px-4 py-3 leading-relaxed text-stone-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <h2 className="mb-4 mt-10 text-lg font-semibold text-stone-900">
          Bài tập: chọn 稍微, 有点儿 hoặc 一点儿
        </h2>

        <ol className="space-y-5">
          {QUESTIONS.map((q, i) => {
            const choice = picked[i];
            const show = revealAll || choice !== undefined;
            const correct = choice === q.answer;

            return (
              <li
                key={i}
                className="rounded-xl border border-stone-300 bg-white p-5 shadow-sm"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-medium text-stone-700">
                    {i + 1}
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
                    <p className="mt-1 text-sm text-stone-500">
                      {q.pinyinBefore}{" "}
                      <span className={show ? "font-medium text-sky-700" : ""}>
                        {show ? PINYIN[q.answer] : "____"}
                      </span>{" "}
                      {q.pinyinAfter}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 pl-9">
                  {CHOICES.map((c) => {
                    const isPicked = choice === c;
                    const isAnswer = q.answer === c;
                    let style =
                      "border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-200";
                    if (choice !== undefined && isAnswer)
                      style = "border-sky-600 bg-sky-600 text-white";
                    else if (isPicked && !isAnswer)
                      style =
                        "border-stone-400 bg-stone-200 text-stone-500 line-through";

                    return (
                      <button
                        key={c}
                        type="button"
                        disabled={choice !== undefined}
                        onClick={() => setPicked((p) => ({ ...p, [i]: c }))}
                        className={`rounded-lg border px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 disabled:cursor-default ${style}`}
                      >
                        {c} <span className="opacity-70">{PINYIN[c]}</span>
                      </button>
                    );
                  })}
                </div>

                {show && (
                  <div className="ml-9 mt-4 rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm leading-relaxed">
                    {choice !== undefined && (
                      <p className="mb-2 font-medium text-sky-700">
                        {correct
                          ? "Chính xác."
                          : `Chưa đúng, đáp án là ${q.answer}.`}
                      </p>
                    )}
                    <p className="text-stone-700">{q.explanation}</p>
                    <p className="mt-2 text-stone-500">Dịch: {q.vi}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-stone-600">
            {done
              ? `Kết quả: ${score}/${QUESTIONS.length} câu đúng`
              : `Đã làm ${answered}/${QUESTIONS.length} câu`}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRevealAll((v) => !v)}
              className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              {revealAll ? "Ẩn đáp án" : "Xem tất cả đáp án"}
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg bg-stone-800 px-4 py-2 text-sm text-stone-50 transition hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
            >
              Làm lại
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
