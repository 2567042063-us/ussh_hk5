import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

import LessonHeader from "./LessonHeader";
import { lessons } from "./lessons";
import type { LessonConfig } from "./lessons/types";
import LessonSidebar from "./LessonSidebar";

export default function LessonLayout({
  children,
  lesson,
  hideHeader,
}: {
  children: React.ReactNode;
  lesson: LessonConfig;
  hideHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LessonSidebar lesson={lesson} lessons={lessons}>
        <div className="w-full min-w-0">
          {!hideHeader && lesson.header && (
            <LessonHeader lesson={lesson.header} />
          )}
          {children}
        </div>
      </LessonSidebar>
      <Footer />
    </div>
  );
}
