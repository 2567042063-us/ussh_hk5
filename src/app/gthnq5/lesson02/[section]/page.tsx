import { notFound } from "next/navigation";

import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";

export default async function Page({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const sectionPath = `${lesson02.basePath}/${section}`;

  if (!lesson02.menu.some((item) => item.href === sectionPath)) {
    notFound();
  }

  return (
    <LessonLayout lesson={lesson02}>
      <p className="py-6 text-slate-500">trống</p>
    </LessonLayout>
  );
}
