import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import BaiKhoaPhu from "./BaiKhoaPhu";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài khoá phụ" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
