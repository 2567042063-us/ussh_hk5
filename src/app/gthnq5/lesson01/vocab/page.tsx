import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import VocabBai1 from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 生词" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01}>
      <VocabBai1 />
    </LessonLayout>
  );
}
