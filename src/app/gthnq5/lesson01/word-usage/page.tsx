import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 词语用法" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01}>
      <p className="py-6 text-slate-500">Đang làm tiếp...</p>
    </LessonLayout>
  );
}
