"use client";

import { useState } from "react";

import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";
import CauViDu from "./CauViDu";
import ExercisesTab from "./ExercisesTab";
import GrammarTab from "./GrammarTab";
import NguPhapBaiKhoa16 from "./NguPhapBaiKhoa16";

const tabs = [
  { id: "grammar", zh: "语法", label: "Ngữ pháp", Content: GrammarTab },
  { id: "exercises", zh: "练习", label: "Bài tập", Content: ExercisesTab },
  { id: "allexamples", zh: "例句", label: "12 câu ví dụ", Content: CauViDu },
  {
    id: "text",
    zh: "",
    label: "课文 ≖⩊≖ highlight",
    Content: NguPhapBaiKhoa16,
  },
] as const;

export default function Page() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("grammar");
  const ActiveContent = tabs.find((t) => t.id === active)!.Content;

  return (
    <LessonLayout lesson={lesson16} hideHeader>
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
