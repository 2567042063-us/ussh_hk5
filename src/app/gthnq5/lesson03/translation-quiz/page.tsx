import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";
import { paragraphs, questions } from "../kewen/data";

const translationLesson: Lesson = {
  id: "gthnq5-lesson03",
  items: [...paragraphs.flatMap((paragraph) => paragraph.s), ...questions].map(
    ({ zh, py, vi }) => ({
      zh,
      pinyin: py,
      vietnamese: vi,
    }),
  ),
};

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 03 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson03}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
