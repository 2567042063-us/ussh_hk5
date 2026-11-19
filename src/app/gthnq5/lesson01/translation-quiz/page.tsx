import TranslationQuiz from "../../../hk5/dich/[filename]/TranslationQuiz";
import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import { paragraphs, questions } from "../kewen/Kewen";

const translationLesson: Lesson = {
  id: "gthnq5-lesson01",
  items: [...paragraphs.flat(), ...questions].map(({ zh, py, vi }) => ({
    zh,
    pinyin: py,
    vietnamese: vi,
  })),
};

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 翻译" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
