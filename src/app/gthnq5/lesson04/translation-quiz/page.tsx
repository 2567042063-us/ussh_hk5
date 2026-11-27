import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

import LessonLayout from "../../LessonLayout";
import { lesson04 } from "../../lessons/lesson04";
import { bai4Paragraphs, bai4Questions } from "../kewen/data";

const translationLesson: Lesson = {
  id: "gthnq5-lesson04",
  items: [
    ...bai4Paragraphs.flatMap((paragraph) => paragraph.s),
    ...bai4Questions,
  ].map(({ zh, py, vi }) => ({
    zh,
    pinyin: py,
    vietnamese: vi,
  })),
};

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 04 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson04}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
