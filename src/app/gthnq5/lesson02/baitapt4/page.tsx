import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";
// import BaiGiang_Kao from "./BaiGiang_Kao";
import BaiGiangTabs from "./BaiGiangTabs";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - 越中翻译练习" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02} hideHeader>
      <BaiGiangTabs />
    </LessonLayout>
  );
}
