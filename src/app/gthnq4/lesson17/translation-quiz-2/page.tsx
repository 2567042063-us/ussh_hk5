import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";
import { dataBai16Er } from "@shared/data/dich/bai16";

import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";

const translationLesson: Lesson = {
  id: "gthnq4-lesson17-2",
  title: "第十五课（二）：年轻人打扮得越来越漂亮了",
  items: dataBai16Er,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
