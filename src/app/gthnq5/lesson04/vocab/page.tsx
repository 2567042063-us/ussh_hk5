import LessonLayout from "../../LessonLayout";
import { lesson04 } from "../../lessons/lesson04";
import VocabBai2 from "./Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 04 - 生词" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson04}>
      <VocabBai2 />
    </LessonLayout>
  );
}
