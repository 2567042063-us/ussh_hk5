import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import Exercises from "./Exercises";

export default function Page() {
  return (
    <LessonLayout lesson={lesson17} hideHeader>
      <div className="px-5">
        <Exercises />
      </div>
    </LessonLayout>
  );
}
