import LessonLayout from "../../LessonLayout";
import { lesson04 } from "../../lessons/lesson04";
import Lesson2Kewen from "./Kewen";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 04 - 课文" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson04}>
      <Lesson2Kewen />
    </LessonLayout>
  );
}
