import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import VocabBai from "./Vocab";

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
      <VocabBai />
    </LessonLayout>
  );
}
