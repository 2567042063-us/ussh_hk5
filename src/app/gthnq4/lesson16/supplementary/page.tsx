import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";
import BaiKhoaPhu from "./BaiKhoaPhu";

export default function Page() {
  return (
    <LessonLayout lesson={lesson16} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
