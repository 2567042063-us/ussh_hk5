import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import VocabBai16 from "./Vocab";

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <VocabBai16 />
    </LessonLayout>
  );
}
