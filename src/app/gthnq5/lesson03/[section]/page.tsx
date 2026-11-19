import { notFound } from "next/navigation";

import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";

export default async function Page({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const sectionPath = `${lesson03.basePath}/${section}`;

  if (!lesson03.menu.some((item) => item.href === sectionPath)) {
    notFound();
  }

  return (
    <LessonLayout lesson={lesson03}>
      <p className="py-6 text-slate-500">trống</p>
    </LessonLayout>
  );
}
