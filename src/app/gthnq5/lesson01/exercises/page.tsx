import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import ExercisesQuiz from "./ExercisesQuiz";
import ExercisesWithToggle from "./ExercisesWithToggle";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài tập" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01} hideHeader>
      <div className="px-5">
        <ExercisesQuiz />
      </div>
      <ExercisesWithToggle />
    </LessonLayout>
  );
}
