import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import VocabBai from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01}>
      <VocabBai />
    </LessonLayout>
  );
}
