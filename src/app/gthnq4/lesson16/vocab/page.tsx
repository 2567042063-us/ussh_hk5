import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";
import VocabBai16 from "./Vocab";

export default function Page() {
  return (
    <LessonLayout lesson={lesson16}>
      <VocabBai16 />
    </LessonLayout>
  );
}
