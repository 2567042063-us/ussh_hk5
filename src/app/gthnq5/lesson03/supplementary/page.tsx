import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";
import BaiKhoaPhu from "./BaiKhoaPhu";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 03 - Bài khoá phụ" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson03} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
