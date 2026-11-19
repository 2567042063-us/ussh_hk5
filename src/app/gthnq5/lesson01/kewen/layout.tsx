import type { Metadata } from "next";

import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";

export const metadata: Metadata = {
  title: "GTHN q5 - Bài 01 - 课文",
};

export default function KewenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LessonLayout lesson={lesson01}>{children}</LessonLayout>;
}
