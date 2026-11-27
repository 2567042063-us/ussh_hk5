import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

import LessonSidebar from "./LessonSidebar";

export default function LessonLayout({
  children,
  lesson,
}: {
  children: React.ReactNode;
  lesson: LessonConfig;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <LessonSidebar lesson={lesson}>
        <div className="w-full min-w-0">{children}</div>
      </LessonSidebar>
      <Footer />
    </div>
  );
}
