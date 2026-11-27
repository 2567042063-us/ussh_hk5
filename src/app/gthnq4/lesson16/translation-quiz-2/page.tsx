import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";
import { dataBai16Er } from "@shared/data/dich/bai16";

import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";

const translationLesson: Lesson = {
  id: "gthnq4-lesson16-2",
  title: "第十六课（二）：年轻人打扮得越来越漂亮了",
  items: dataBai16Er,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson16}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
