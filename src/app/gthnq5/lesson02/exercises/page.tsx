import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
import ExercisesQuiz from "./ExercisesQuiz";
import ExercisesWithToggle from "./ExercisesWithToggle";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - Bài tập" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02} hideHeader>
      <div className="px-5">
        <ExercisesQuiz />
      </div>
      <ExercisesWithToggle />
    </LessonLayout>
  );
}
