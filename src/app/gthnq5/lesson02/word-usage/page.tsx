import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import WordUsage from "./WordUsage";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 词语用法" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01} hideHeader>
      <div className="px-5">
        <WordUsage />
      </div>
    </LessonLayout>
  );
}
