import LessonLayout from "../LessonLayout";
import { lesson02 } from "../lessons/lesson02";

export const metadata = {
  title: "GTHN q5 - Bài 02",
};

export default function Page() {
  return <LessonLayout lesson={lesson02}>{null}</LessonLayout>;
}
