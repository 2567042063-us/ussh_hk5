import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";
import { dataBai15Yi } from "@shared/data/dich/bai15-1";

import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";

const translationLesson: Lesson = {
  id: "gthnq4-lesson15-1",
  title: "第十五课（一）：会议厅的门开着呢",
  items: dataBai15Yi,
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson15}>
      <TranslationQuiz lesson={translationLesson} />
    </LessonLayout>
  );
}
