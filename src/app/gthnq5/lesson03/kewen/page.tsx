import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";
import Lesson2Kewen from "./Kewen";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 03 - 课文" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson03}>
      <Lesson2Kewen />
    </LessonLayout>
  );
}
