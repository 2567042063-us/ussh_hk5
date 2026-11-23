import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import Kewen from "./kewen";

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
      <Kewen />
    </LessonLayout>
  );
}
