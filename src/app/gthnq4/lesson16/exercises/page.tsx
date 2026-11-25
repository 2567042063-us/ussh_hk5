import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";
import Exercises from "./Exercises";

export default function Page() {
  return (
    <LessonLayout lesson={lesson16} hideHeader>
      <div className="px-5">
        <Exercises />
      </div>
    </LessonLayout>
  );
}
