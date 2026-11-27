import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

import LessonLayout from "../../LessonLayout";
import { lesson05 } from "../../lessons/lesson05";
import { paragraphs, questions } from "../kewen/data";

const translationLesson: Lesson = {
  id: "gthnq5-lesson05",
  items: [...paragraphs.flatMap((paragraph) => paragraph.s), ...questions].map(
    ({ zh, py, vi }) => ({
      zh,
      pinyin: py,
      vietnamese: vi,
    }),
  ),
};

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 05 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson05}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
