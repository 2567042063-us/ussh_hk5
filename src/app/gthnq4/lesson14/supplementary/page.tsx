import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";
import BaiKhoaPhu from "./BaiKhoaPhu";

export default function Page() {
  return (
    <LessonLayout lesson={lesson14} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
