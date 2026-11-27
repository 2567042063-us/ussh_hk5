import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import { dataBai17Text1 } from "../Kewen17Dich";

const translationLesson: Lesson = {
  id: "gthnq4-lesson17-1",
  title: "第十七课",
  items: dataBai17Text1,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
