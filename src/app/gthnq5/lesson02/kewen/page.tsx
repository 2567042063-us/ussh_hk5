import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
import Lesson2Kewen from "./Kewen";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - 课文" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02}>
      <Lesson2Kewen />
    </LessonLayout>
  );
}
