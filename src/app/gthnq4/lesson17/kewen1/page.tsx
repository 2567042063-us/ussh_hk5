import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import BaiKhoaChinh1 from "./BaiKhoaChinh1";

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <BaiKhoaChinh1 />
    </LessonLayout>
  );
}
