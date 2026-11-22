import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LessonLayout lesson={lesson14} hideHeader>
      {children}
    </LessonLayout>
  );
}
