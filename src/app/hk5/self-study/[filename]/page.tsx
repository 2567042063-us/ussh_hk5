import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import { notFound } from "next/navigation";
import LessonViewer from "../LessonViewer";
import {
  getSelfStudyLessonById,
  selfStudyMenu,
} from "../data/lesson-loader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;
  const lesson = await getSelfStudyLessonById(filename);

  return {
    title: lesson?.title ?? "Không tìm thấy bài học",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;
  const lesson = await getSelfStudyLessonById(filename);
  if (!lesson) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt
        menuGrbt={selfStudyMenu}
        filename={filename}
        menuTitle="TỰ HỌC"
      >
        <LessonViewer lesson={lesson} />
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
