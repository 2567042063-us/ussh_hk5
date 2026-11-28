import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Lesson03 from "./Lesson3";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Lesson03 />
      </div>
    </LessonLayout>
  );
}
