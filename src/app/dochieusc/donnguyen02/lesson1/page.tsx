import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Lesson01 from "./Lesson1";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Lesson01 />
      </div>
    </LessonLayout>
  );
}
