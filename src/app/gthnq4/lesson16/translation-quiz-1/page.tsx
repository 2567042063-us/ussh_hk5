import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";
import { dataBai16Yi } from "@shared/data/dich/bai16";

import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";

const translationLesson: Lesson = {
  id: "gthnq4-lesson16-1",
  title: "第十五课（一）：前边开过来一辆空车",
  items: dataBai16Yi,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson16}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
