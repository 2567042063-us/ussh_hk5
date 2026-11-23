import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";
import VocabBai from "./Vocab";

export default function Page() {
  return (
    <LessonLayout lesson={lesson15}>
      <VocabBai />
    </LessonLayout>
  );
}
