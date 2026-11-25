import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";
import BaiTapT4 from "./BaiTapT4";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01} hideHeader>
      <BaiTapT4 />
    </LessonLayout>
  );
}
