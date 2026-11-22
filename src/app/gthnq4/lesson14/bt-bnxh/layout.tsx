import type { Metadata } from "next";

import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";

export const metadata: Metadata = {
  title: "GTHN q4 - Bài 14 - BN Xu Hướng",
  description: "Bài tập bổ ngữ xu hướng - Bài 14",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LessonLayout lesson={lesson14}>{children}</LessonLayout>;
}
