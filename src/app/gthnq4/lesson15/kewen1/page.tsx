import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";
import Kewen from "./BaiKhoaChinh1";

export default function Page() {
  return (
    <LessonLayout lesson={lesson15}>
      <Kewen />
    </LessonLayout>
  );
}
