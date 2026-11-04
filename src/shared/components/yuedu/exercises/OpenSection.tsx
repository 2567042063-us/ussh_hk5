import { useState } from "react";

import { SectionCard } from "@shared/components/yuedu/exercises/SectionCard";
import type {
  ExerciseSectionMeta,
  OpenQuestion,
} from "@shared/types/yuedu-lesson";

interface OpenSectionProps {
  meta: ExerciseSectionMeta;
  questions: OpenQuestion[];
  showVietnamese: boolean;
}

export function OpenSection({
  meta,
  questions,
  showVietnamese,
}: OpenSectionProps) {
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (questionId: string) => {
    setRevealed((previous) => ({
      ...previous,
      [questionId]: !previous[questionId],
    }));
  };

  return (
    <SectionCard meta={meta} showVietnamese={showVietnamese}>
      <ol className="space-y-8">
        {questions.map((question) => {
          const isRevealed = revealed[question.id] === true;
          return (
            <li key={question.id} className="space-y-3">
              <p className="font-chinese text-lg font-bold text-stone-900">
                {question.prompt}
              </p>
              {showVietnamese && (
                <p className="text-sm text-stone-600">{question.promptVi}</p>
              )}
              <textarea
                rows={3}
                value={drafts[question.id] ?? ""}
                onChange={(event) =>
                  setDrafts((previous) => ({
                    ...previous,
                    [question.id]: event.target.value,
                  }))
                }
                placeholder="Viết câu trả lời của bạn tại đây..."
                aria-label={`Câu trả lời cho câu hỏi ${question.id}`}
                className="font-chinese w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
              />
              <button
                type="button"
                onClick={() => toggleReveal(question.id)}
                aria-expanded={isRevealed}
                className="rounded-lg border border-red-800 px-4 py-2 text-sm font-medium text-red-800 transition-colors hover:bg-red-50"
              >
                {isRevealed ? "Ẩn đáp án mẫu" : "Xem đáp án mẫu"}
              </button>
              {isRevealed && (
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="font-chinese text-stone-900">
                    {question.sampleAnswer}
                  </p>
                  {showVietnamese && (
                    <p className="mt-2 text-sm text-stone-700">
                      {question.sampleAnswerVi}
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </SectionCard>
  );
}
