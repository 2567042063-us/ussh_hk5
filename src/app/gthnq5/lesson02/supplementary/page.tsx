import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
import BaiKhoaPhu from "./BaiKhoaPhu";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - Bài khoá phụ" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
