import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Lesson02 from "./Lesson2";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Lesson02 />
      </div>
    </LessonLayout>
  );
}
