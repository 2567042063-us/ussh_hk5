import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import { paragraphs, questions } from "../Kewen";

const translationLesson: Lesson = {
  id: "gthnq4-lesson14",
  items: [...paragraphs.flat(), ...questions].map(({ zh, py, vi }) => ({
    zh,
    pinyin: py,
    vietnamese: vi,
  })),
};

export function generateMetadata() {
  return { title: "GTHN q4 - Bài 14 - 钥匙忘拔下来了" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
