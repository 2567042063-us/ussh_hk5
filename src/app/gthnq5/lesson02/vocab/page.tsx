import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
import VocabBai2 from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - 生词" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02}>
      <VocabBai2 />
    </LessonLayout>
  );
}
