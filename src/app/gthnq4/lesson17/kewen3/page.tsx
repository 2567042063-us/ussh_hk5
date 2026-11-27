import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";
import BaiKhoaChinh3 from "./BaiKhoaChinh3";

export default function Page() {
  return (
    <LessonLayout lesson={lesson17}>
      <BaiKhoaChinh3 />
    </LessonLayout>
  );
}
