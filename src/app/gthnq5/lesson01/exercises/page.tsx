import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import ExercisesWithToggle from "./ExercisesWithToggle";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài tập" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01} hideHeader>
      <ExercisesWithToggle />
    </LessonLayout>
  );
}
