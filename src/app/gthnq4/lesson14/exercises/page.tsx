import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import Exercises from "./Exercises";

export default function Page() {
  return (
    <LessonLayout lesson={lesson14} hideHeader>
      <div className="px-5">
        <Exercises />
      </div>
    </LessonLayout>
  );
}
