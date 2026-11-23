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

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
