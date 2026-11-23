import type { Metadata } from "next";

import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";

export const metadata: Metadata = {
  title: "GTHN q4 - Bài 15 - BN Xu Hướng",
  description: "Bài tập bổ ngữ xu hướng - Bài 15",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LessonLayout lesson={lesson15}>{children}</LessonLayout>;
}
