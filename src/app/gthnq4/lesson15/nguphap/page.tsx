"use client";

import { useState } from "react";

import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";
import {
  grammarSentences,
  type GrammarGroup,
  type GrammarSentence,
} from "./NguPhap";
import NguPhapBaiKhoa15 from "./NguPhapBaiKhoa15";

/* ------------------------------ Tab 1: Ngữ pháp ------------------------------ */

const sections: {
  group: GrammarGroup;
  title: string;
  subtitle: string;
  rule: string;
  formula?: string;
}[] = [
  {
    group: "continue",
    title: "(1) 动作的进行或状态的持续",
    subtitle: "Động tác đang tiến hành hoặc trạng thái kéo dài",
    rule: "Thêm trợ từ động thái “着” sau động từ, chủ yếu biểu thị động tác đang tiến hành hoặc trạng thái đang kéo dài. Trong giao tiếp, thường dùng để miêu tả.",
    formula: "Động từ + 着",
  },
  {
    group: "negative",
    title: "(2) 否定式",
    subtitle: "Hình thức phủ định (ít dùng trong giao tiếp)",
    rule: "Hình thức phủ định của “động từ + 着” là “没(有) + động từ + 着”, nhưng trong giao tiếp ít được dùng.",
    formula: "没(有) + Động từ + 着",
  },
  {
    group: "question",
    title: "(3) 正反疑问式",
    subtitle: "Câu hỏi chính phản",
    rule: "Hình thức câu hỏi chính phản của “động từ + 着” là “động từ + 着 (+ tân ngữ) + 没有”.",
    formula: "Động từ + 着 (+ Tân ngữ) + 没有？",
  },
  {
    group: "serial",
    title: "(4) 连动句",
    subtitle: "Câu liên động",
    rule: "“Động từ + 着” dùng trước động từ thứ hai trong câu liên động, để nói rõ trạng thái hoặc cách thức khi động tác thứ hai diễn ra.",
    formula: "Động từ 1 + 着 + Động từ 2",
  },
  {
    group: "together",
    title: "(5) 与“正在”“正”“在”“呢”连用",
    subtitle: "Dùng cùng 正在 / 正 / 在 / 呢",
    rule: "“Động từ + 着” thường dùng cùng các từ như “正在”, “正”, “在”, “呢”.",
    formula: "正在 / 正 / 在 + Động từ + 着 + (呢)",
  },
];

function GrammarTab() {
  return (
    <div>
      <h1 className="ztai__zh mb-1 text-2xl font-bold">动词 + 着</h1>
      <p className="mb-5 text-stone-500">
        Indicating the continuation of an action or a state: Verb + 着
      </p>

      {sections.map((section) => (
        <section key={section.group} className="mb-8">
          <h2 className="ztai__zh mb-1 text-xl font-bold">{section.title}</h2>
          <h3 className="mb-2 text-stone-500">{section.subtitle}</h3>
          <p className="mb-3 text-sm leading-6 text-stone-800 dark:text-stone-300">
            {section.rule}
          </p>
          {section.formula && (
            <p className="mb-3 inline-block rounded-sm bg-stone-200 px-3 py-1.5 text-sm font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
              {section.formula}
            </p>
          )}

          <div className="grid grid-cols-1 gap-3">
            {grammarSentences
              .filter((s) => s.group === section.group)
              .map((s, i) => (
                <article
                  key={s.zh}
                  className="overflow-hidden rounded-sm border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900 sm:p-4"
                >
                  <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
                    <span className="mr-2 text-base text-stone-400">
                      ({i + 1})
                    </span>
                    {s.zh}
                  </p>
                  <p className="wrap-break-word mt-1 text-sm text-stone-500 dark:text-sky-300">
                    {s.py}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-stone-800 dark:text-stone-300">
                    {s.vi}
                  </p>
                  {s.note && (
                    <p className="mt-2 border-l-2 border-stone-300 pl-2 text-xs leading-5 text-stone-500 dark:border-stone-600">
                      {s.note}
                    </p>
                  )}
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/* ------------------------------ Tab 2: Bài tập ------------------------------ */

// Xáo trộn cố định (không random) để tránh lệch SSR/hydration
function scramble(tokens: string[]) {
  const n = tokens.length;
  const r = [...tokens].reverse();
  return r.map((_, i) => r[(i + 1) % n]);
}

function blank(zh: string) {
  return zh.split("着").join("＿＿");
}

function Answer({ s }: { s: GrammarSentence }) {
  return (
    <details className="mt-3 text-sm">
      <summary className="cursor-pointer text-stone-500 dark:text-sky-300">
        Xem đáp án
      </summary>
      <p className="font-kaiti mt-2 text-xl text-stone-900 dark:text-stone-100">
        {s.zh}
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

function ExercisesTab() {
  return (
    <div>
      <section>
        <h1 className="ztai__zh mb-1 text-2xl font-bold">(1) 填空</h1>
        <p className="mb-3 text-stone-500">
          Điền “着” vào chỗ trống, đọc to rồi bấm xem đáp án
        </p>
        <div className="grid grid-cols-1 gap-3">
          {grammarSentences.map((s, i) => (
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
        <h2 className="ztai__zh mb-1 text-2xl font-bold">(2) 连词成句</h2>
        <p className="mb-3 text-stone-500">
          Sắp xếp các thành phần thành câu hoàn chỉnh
        </p>
        <div className="grid grid-cols-1 gap-3">
          {grammarSentences.map((s, i) => (
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
        <h2 className="ztai__zh mb-1 text-2xl font-bold">(3) 翻译</h2>
        <p className="mb-3 text-stone-500">
          Dịch câu tiếng Việt sang tiếng Trung
        </p>
        <div className="grid grid-cols-1 gap-3">
          {grammarSentences.map((s, i) => (
            <Card key={s.zh} index={i}>
              <p className="text-base leading-6 text-stone-900 dark:text-stone-100">
                {s.vi}
              </p>
              <Answer s={s} />
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="ztai__zh mb-1 text-2xl font-bold">(4) 例句</h2>
        <p className="mb-3 text-stone-500">Danh sách toàn bộ câu trong bài</p>
        <div className="grid grid-cols-1 gap-3">
          {grammarSentences.map((s, i) => (
            <Card key={s.zh} index={i}>
              <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
                {s.zh}
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
      </section>
    </div>
  );
}

/* ------------------------------ 课文 ≖⩊≖ highlight ------------------------------ */

function EmptyTab() {
  return <NguPhapBaiKhoa15 />;
}

/* ---------------------------------- Page ---------------------------------- */

const tabs = [
  { id: "grammar", zh: "语法", label: "Ngữ pháp", Content: GrammarTab },
  { id: "exercises", zh: "练习", label: "Bài tập", Content: ExercisesTab },
  { id: "tab3", zh: "", label: "课文 ≖⩊≖ highlight", Content: EmptyTab },
] as const;

export default function Page() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("grammar");
  const ActiveContent = tabs.find((t) => t.id === active)!.Content;

  return (
    <LessonLayout lesson={lesson15} hideHeader>
      <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
        <div
          role="tablist"
          className="mb-5 inline-flex gap-1 rounded-sm bg-stone-200 p-1 dark:bg-stone-800"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded px-3 py-1.5 text-sm transition-colors ${
                active === tab.id
                  ? "bg-stone-500 text-white"
                  : "text-stone-600 hover:bg-stone-300 dark:text-stone-300 dark:hover:bg-stone-700"
              }`}
            >
              {tab.zh && <span className="ztai__zh mr-1">{tab.zh}</span>}
              {tab.label}
            </button>
          ))}
        </div>

        <ActiveContent />
      </main>
    </LessonLayout>
  );
}
