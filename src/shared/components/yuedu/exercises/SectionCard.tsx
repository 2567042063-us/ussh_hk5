import type { ReactNode } from "react";

import type { ExerciseSectionMeta } from "@shared/types/yuedu-lesson";

interface SectionCardProps {
  meta: ExerciseSectionMeta;
  showVietnamese: boolean;
  children: ReactNode;
}

export function SectionCard({
  meta,
  showVietnamese,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-sm border border-stone-200 bg-white p-6 md:p-8">
      <h3 className="font-chinese text-xl font-bold text-stone-900">
        {meta.title}
      </h3>
      {showVietnamese && (
        <p className="mt-1 text-sm text-stone-600">{meta.instructionVi}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
}
