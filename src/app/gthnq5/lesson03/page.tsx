import LessonLayout from "../LessonLayout";
import { lesson03 } from "../lessons/lesson03";

export const metadata = {
  title: "GTHN q5 - Bài 03",
};

export default function Page() {
  return (
    <LessonLayout lesson={lesson03}>
      <p className="py-6 text-slate-500">in progressing</p>
    </LessonLayout>
  );
}
