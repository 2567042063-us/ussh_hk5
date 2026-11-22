import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import VocabBai from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 生词" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
      <VocabBai />
    </LessonLayout>
  );
}
