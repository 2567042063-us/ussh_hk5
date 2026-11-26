import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";
import VocabBai2 from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 03 - 生词" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson03}>
      <VocabBai2 />
    </LessonLayout>
  );
}
