import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import { dataBai17Dialogue2 } from "../Kewen17Dich";

const translationLesson: Lesson = {
  id: "gthnq4-lesson17-2",
  title: "第十七课",
  items: dataBai17Dialogue2,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
