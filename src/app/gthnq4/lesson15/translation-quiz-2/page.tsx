import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";
import { dataBai15Er } from "@shared/data/dich/bai15-2";

import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";

const translationLesson: Lesson = {
  id: "gthnq4-lesson15-2",
  title: "第十五课（二）：墙上贴着红双喜字",
  items: dataBai15Er,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson15}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
