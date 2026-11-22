"use client";

import { Fragment, useState } from "react";

type PassageSegment = string | { text: string; highlighted: true };
type ExerciseSegment = string | { answer: string };
type Exercise = {
  segments: ExerciseSegment[];
  hint: string;
};

const mark = (text: string): PassageSegment => ({ text, highlighted: true });
const blank = (answer: string): ExerciseSegment => ({ answer });

const passage: PassageSegment[][] = [
  [
    "星期天,我和麦克一起骑车到图书城去买书。图书城离我们学校比较远。那天刮风,我们骑了一个多小时才骑到。图书城很大,里边有很多书店。每个书店我们都想",
    mark("进去"),
    "看看。我们从一个书店",
    mark("走出来"),
    ",又",
    mark("走进"),
    "另一个书店。看到书店里有各种各样的书,我很兴奋。从这个书架上",
    mark("拿下来"),
    "一本看看,再",
    mark("放上去"),
    ",又从另一个书架上",
    mark("抽出来"),
    "一本看看。我挑了几本历史书,麦克选了一些中文小说儿。快放寒假了,我们都想买一些书",
    mark("带回"),
    "国",
    mark("去"),
    "。",
  ],
  [
    "除了买书以外,我们还想买一些小礼品,",
    mark("带回去"),
    "送朋友。于是我们又",
    mark("走进"),
    "一家商场",
    mark("去"),
    "。",
  ],
  [
    "这家商场里边什么商品都有。我买了一些京剧脸谱的小饰物,还买了一些丝织品。麦克买了很多漂亮的钥匙链儿,还买了不少小玩具,有小熊猫、小汽车什么的。他说,这些玩具",
    mark("带回去"),
    "送给小朋友们,他们肯定喜欢。",
  ],
  [
    "售货员看我们买的东西多,不好拿,就给我们一人找了一个小纸箱。我们买的书和礼品正好都能",
    mark("放进去"),
    "。",
  ],
  [
    "从商场",
    mark("出来"),
    ",已经十二点多了。我和麦克",
    mark("走进"),
    "一个小饭馆儿",
    mark("去"),
    "吃午饭。我们要了一盘饺子和几个菜,吃得很舒服。",
  ],
  [
    "吃完饭,我们就骑车",
    mark("回来"),
    "了。回到学校,我又累又困,想赶快回到宿舍去洗个澡,休息休息。我从车上",
    mark("拿下"),
    "小纸箱。",
    mark("走进"),
    "楼",
    mark("来"),
    ",看见电梯门口贴了张通知:“电梯维修,请走楼梯。”我住十层,没办法,只好",
    mark("爬上去"),
    "。我手里提着一箱子东西,一步一步地往上爬。爬了半天才爬到十层。到了门口,我",
    mark("放下"),
    "箱子,要",
    mark("拿出"),
    "钥匙开门的时候,却发现钥匙不见了,找了半天也没有找到。啊!我忽然",
    mark("想起来"),
    "了,钥匙还在楼下自行车上插着呢,我忘",
    mark("拔下来"),
    "了。这时,我真是哭笑不得。",
  ],
  [
    "我刚要",
    mark("跑下"),
    "楼",
    mark("去"),
    ",就看见麦克也",
    mark("爬上来"),
    "了,他手里拿的正是我的那串儿钥匙。",
  ],
];

const exercises: Exercise[] = [
  {
    segments: ["每个书店我们都想", blank("进去"), "看看。"],
    hint: "đi vào (ra xa người nói)",
  },
  {
    segments: [
      "我们从一个书店",
      blank("走出来"),
      ",又",
      blank("走进"),
      "另一个书店。",
    ],
    hint: "đi ra (về phía người nói) / đi vào",
  },
  {
    segments: [
      "从这个书架上",
      blank("拿下来"),
      "一本看看,再",
      blank("放上去"),
      ",又从另一个书架上",
      blank("抽出来"),
      "一本看看。",
    ],
    hint: "lấy xuống / đặt lên / rút ra",
  },
  {
    segments: ["我们都想买一些书", blank("带回"), "国", blank("去"), "。"],
    hint: "mang về (nước), hướng đi xa người nói",
  },
  {
    segments: ["我们还想买一些小礼品,", blank("带回去"), "送朋友。"],
    hint: "mang về",
  },
  {
    segments: ["于是我们又", blank("走进"), "一家商场", blank("去"), "。"],
    hint: "đi vào (tân ngữ nơi chốn chen giữa)",
  },
  {
    segments: ["这些玩具", blank("带回去"), "送给小朋友们。"],
    hint: "mang về",
  },
  {
    segments: ["我们买的书和礼品正好都能", blank("放进去"), "。"],
    hint: "đặt vào trong",
  },
  {
    segments: ["从商场", blank("出来"), ",已经十二点多了。"],
    hint: "ra (về phía người nói)",
  },
  {
    segments: [
      "我和麦克",
      blank("走进"),
      "一个小饭馆儿",
      blank("去"),
      "吃午饭。",
    ],
    hint: "đi vào",
  },
  {
    segments: ["吃完饭,我们就骑车", blank("回来"), "了。"],
    hint: "quay về (về phía người nói)",
  },
  {
    segments: ["我从车上", blank("拿下"), "小纸箱。"],
    hint: "lấy xuống",
  },
  {
    segments: [
      "",
      blank("走进"),
      "楼",
      blank("来"),
      ",看见电梯门口贴了张通知。",
    ],
    hint: "đi vào (người nói ở trong tòa nhà)",
  },
  {
    segments: ["电梯维修,没办法,只好", blank("爬上去"), "。"],
    hint: "leo lên (ra xa người nói)",
  },
  {
    segments: ["我放下箱子,要", blank("拿出"), "钥匙开门的时候,……"],
    hint: "lấy ra",
  },
  {
    segments: ["啊!我忽然", blank("想起来"), "了。"],
    hint: "nhớ ra (nghĩa mở rộng)",
  },
  {
    segments: ["钥匙还插着呢,我忘", blank("拔下来"), "了。"],
    hint: "rút xuống / nhổ ra",
  },
  {
    segments: [
      "我刚要",
      blank("跑下"),
      "楼",
      blank("去"),
      ",就看见麦克也",
      blank("爬上来"),
      "了。",
    ],
    hint: "chạy xuống / leo lên (về phía người nói)",
  },
];

const compoundExercises: Exercise[] = [
  {
    segments: [
      "我们爬了半个多小时,才爬",
      blank("上来"),
      ",往山下一看,风景漂亮极了。",
    ],
    hint: "người nói đang ở trên đỉnh núi",
  },
  {
    segments: ["小心点儿,别掉", blank("下去"), "。"],
    hint: "rơi xuống, ra xa người nói",
  },
  {
    segments: ["她不小心,从楼梯上摔", blank("下来"), ",腿摔坏了。"],
    hint: "ngã xuống",
  },
  {
    segments: ["太累了,我们找个地方,坐", blank("下来"), "休息一会儿吧。"],
    hint: "ngồi xuống",
  },
  {
    segments: [
      "我看见前边走",
      blank("来"),
      "一个人,就走",
      blank("过去"),
      "问她去图书城怎么走。",
    ],
    hint: "đi tới (về phía mình) / đi sang (chỗ người đó)",
  },
  {
    segments: ["你别下来了,我给你拿", blank("上去"), "。"],
    hint: "người nói ở dưới, mang lên",
  },
  {
    segments: [
      "她从口袋里拿",
      blank("出来"),
      "一个钱包儿,又从钱包儿里拿",
      blank("出来"),
      "三千块钱,放在我手里,说:“快给你妈妈寄",
      blank("回去"),
      "吧,看病要紧。”",
    ],
    hint: "lấy ra / lấy ra / gửi về",
  },
  {
    segments: [
      "“救命啊!有人掉",
      blank("进"),
      "水里",
      blank("去"),
      "了!”听见喊声,他很快脱下上衣,跑了",
      blank("过去"),
      "。人们看见他跳",
      blank("下"),
      "水",
      blank("去"),
      ",向那个孩子游了",
      blank("过去"),
      "。",
    ],
    hint: "rơi xuống nước / chạy tới / nhảy xuống / bơi tới",
  },
];

function ExerciseGroup({
  exercises: exerciseItems,
}: {
  exercises: Exercise[];
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [results, setResults] = useState<
    Record<string, "correct" | "incorrect">
  >({});
  const [score, setScore] = useState("");

  const blanks = exerciseItems.flatMap((exercise, exerciseIndex) =>
    exercise.segments.flatMap((segment, segmentIndex) =>
      typeof segment === "string"
        ? []
        : [
            {
              id: `${exerciseIndex}-${segmentIndex}`,
              answer: segment.answer,
            },
          ],
    ),
  );

  const checkAnswers = () => {
    let correct = 0;
    const nextResults: Record<string, "correct" | "incorrect"> = {};

    blanks.forEach(({ id, answer }) => {
      const isCorrect = (values[id] ?? "").trim() === answer;
      if (values[id]?.trim()) {
        nextResults[id] = isCorrect ? "correct" : "incorrect";
      }
      if (isCorrect) correct += 1;
    });

    setResults(nextResults);
    setScore(`${correct} / ${blanks.length} ô đúng`);
  };

  const showAnswers = () => {
    const nextValues: Record<string, string> = {};
    const nextResults: Record<string, "correct" | "incorrect"> = {};

    blanks.forEach(({ id, answer }) => {
      nextValues[id] = answer;
      nextResults[id] = "correct";
    });

    setValues(nextValues);
    setResults(nextResults);
  };

  const reset = () => {
    setValues({});
    setResults({});
    setScore("");
  };

  return (
    <>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={checkAnswers}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Kiểm tra
        </button>
        <button
          type="button"
          onClick={showAnswers}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Hiện đáp án
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Làm lại
        </button>
        <span
          className="min-h-6 font-semibold text-sky-700 dark:text-sky-300"
          aria-live="polite"
        >
          {score}
        </span>
      </div>

      <ol className="mt-4 list-decimal space-y-3 pl-10 marker:font-bold marker:text-stone-700 dark:marker:text-stone-300">
        {exerciseItems.map((exercise, exerciseIndex) => (
          <li
            key={exerciseIndex}
            className="rounded-sm border border-stone-200 bg-white px-4 py-3 text-lg leading-9 text-stone-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <div>
              {exercise.segments.map((segment, segmentIndex) => {
                if (typeof segment === "string") {
                  return <Fragment key={segmentIndex}>{segment}</Fragment>;
                }

                const id = `${exerciseIndex}-${segmentIndex}`;
                const result = results[id];
                const resultClass =
                  result === "correct"
                    ? "border-sky-600 text-sky-700 dark:border-sky-400 dark:text-sky-300"
                    : result === "incorrect"
                      ? "border-red-600 text-red-700 dark:border-red-400 dark:text-red-300"
                      : "border-stone-400 text-stone-800 focus:border-sky-600 dark:border-slate-500 dark:text-slate-100";

                return (
                  <input
                    key={segmentIndex}
                    type="text"
                    size={4}
                    aria-label={`Đáp án câu ${exerciseIndex + 1}`}
                    value={values[id] ?? ""}
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        [id]: event.target.value,
                      }))
                    }
                    className={`mx-1 w-[4.6em] border-0 border-b-2 bg-transparent px-0.5 text-center text-base outline-none transition-colors focus:ring-0 ${resultClass}`}
                  />
                );
              })}
            </div>
            <span className="mt-1 block text-xs leading-5 text-stone-500 dark:text-slate-400">
              Gợi ý: {exercise.hint}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

export default function Page() {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <div className="container mx-auto max-w-5xl p-3 text-stone-800 dark:text-slate-100 sm:px-6">
      <section>
        <button
          type="button"
          aria-pressed={highlighted}
          onClick={() => setHighlighted((current) => !current)}
          className="rounded border border-stone-300 px-3 py-1 text-sm text-stone-700 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {highlighted ? "Tắt ≖⩊≖" : "Tô sáng ≖⩊≖"}
        </button>
        <article>
          {passage.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="font-kaiti indent-8 text-xl leading-9 text-stone-800 dark:text-slate-100 sm:text-2xl"
            >
              {paragraph.map((segment, segmentIndex) =>
                typeof segment === "string" ? (
                  <Fragment key={segmentIndex}>{segment}</Fragment>
                ) : (
                  <mark
                    key={segmentIndex}
                    className={
                      highlighted
                        ? "rounded-sm bg-yellow-200 px-0.5 text-inherit dark:bg-yellow-700"
                        : "bg-transparent px-0 text-inherit"
                    }
                  >
                    {segment.text}
                  </mark>
                ),
              )}
            </p>
          ))}
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-slate-100">
          2. Bài tập: điền động từ + bổ ngữ phù hợp
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">
          Mỗi chỗ trống điền cả động từ và bổ ngữ (ví dụ 走进, 拿下来). Có chỗ
          bổ ngữ bị tách bởi tân ngữ nên có hai ô.
        </p>
        <ExerciseGroup exercises={exercises} />
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-slate-100">
          3. Bài tập 5: điền bổ ngữ xu hướng kép
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">
          在空格里填入适当的复合趋向补语 (Điền bổ ngữ xu hướng kép thích hợp vào
          chỗ trống). Chỉ điền bổ ngữ, ví dụ 上来, 下去.
        </p>
        <ExerciseGroup exercises={compoundExercises} />
      </section>
    </div>
  );
}
