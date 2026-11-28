import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Lesson04 from "./Lesson4";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Lesson04 />
      </div>
    </LessonLayout>
  );
}
