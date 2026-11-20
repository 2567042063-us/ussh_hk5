import TranslationQuiz from "../../../hk5/dich/[filename]/TranslationQuiz";
import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
import { paragraphs, questions } from "../kewen/data";

const translationLesson: Lesson = {
  id: "gthnq5-lesson02",
  items: [
    ...paragraphs.flatMap((paragraph) => paragraph.s),
    ...questions,
  ].map(({ zh, py, vi }) => ({
    zh,
    pinyin: py,
    vietnamese: vi,
  })),
};

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
