import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import BaiKhoaPhu from "./BaiKhoaPhu";

export default function Page() {
  return (
    <LessonLayout lesson={lesson17} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
