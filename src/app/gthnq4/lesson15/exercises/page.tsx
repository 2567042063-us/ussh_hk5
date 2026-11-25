import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";
import Exercises from "./Exercises";

export default function Page() {
  return (
    <LessonLayout lesson={lesson15} hideHeader>
      <div className="px-5">
        <Exercises />
      </div>
    </LessonLayout>
  );
}
