import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import BaiKhoaChinh2 from "./BaiKhoaChinh2";

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <BaiKhoaChinh2 />
    </LessonLayout>
  );
}
