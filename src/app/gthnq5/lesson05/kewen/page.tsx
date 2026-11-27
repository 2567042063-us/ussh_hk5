import LessonLayout from "../../LessonLayout";
import { lesson05 } from "../../lessons/lesson05";
import Lesson2Kewen from "./Kewen";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 05 - 课文" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson05}>
      <Lesson2Kewen />
    </LessonLayout>
  );
}
