import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
import WordUsage from "./WordUsage";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 词语用法" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02} hideHeader>
      <div className="px-5">
        <WordUsage />
      </div>
    </LessonLayout>
  );
}
