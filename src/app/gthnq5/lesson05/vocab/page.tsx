import LessonLayout from "../../LessonLayout";
import { lesson05 } from "../../lessons/lesson05";
import VocabBai2 from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 05 - 生词" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson05}>
      <VocabBai2 />
    </LessonLayout>
  );
}
