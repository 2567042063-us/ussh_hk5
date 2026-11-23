import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";
import BaiKhoaPhu from "./BaiKhoaPhu";

export default function Page() {
  return (
    <LessonLayout lesson={lesson15} hideHeader>
      <BaiKhoaPhu />
    </LessonLayout>
  );
}
