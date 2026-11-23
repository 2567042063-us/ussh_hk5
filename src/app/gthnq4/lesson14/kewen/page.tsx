import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import Kewen from "./kewen";

export function generateMetadata() {
  return { title: "GTHN q4 - Bài 14 - 钥匙忘拔下来了" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
      <Kewen />
    </LessonLayout>
  );
}
