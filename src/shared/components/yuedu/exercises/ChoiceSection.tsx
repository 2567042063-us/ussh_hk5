import { useState } from "react";

import { SectionActions } from "@shared/components/yuedu/exercises/SectionActions";
import { SectionCard } from "@shared/components/yuedu/exercises/SectionCard";
import type {
  ChoiceQuestion,
  ExerciseSectionMeta,
} from "@shared/types/yuedu-lesson";

const OPTION_LABELS = ["A", "B", "C", "D"];

interface ChoiceSectionProps {
  meta: ExerciseSectionMeta;
  questions: ChoiceQuestion[];
  showVietnamese: boolean;
}

export function ChoiceSection({
  meta,
  questions,
  showVietnamese,
}: ChoiceSectionProps) {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter(
    (question) => selected[question.id] === question.answerIndex,
  ).length;

  const choose = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelected((previous) => ({ ...previous, [questionId]: optionIndex }));
  };

  const reset = () => {
    setSelected({});
    setSubmitted(false);
  };

  return (
    <SectionCard meta={meta} showVietnamese={showVietnamese}>
      <ol className="space-y-8">
        {questions.map((question) => {
          const chosen = selected[question.id];
          return (
            <li key={question.id}>
              <p className="font-chinese text-lg font-bold text-stone-900">
                {question.prompt}
              </p>
              {showVietnamese && question.promptVi && (
                <p className="mt-1 text-sm text-stone-600">
                  {question.promptVi}
                </p>
              )}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const isChosen = chosen === optionIndex;
                  const isCorrect = optionIndex === question.answerIndex;
                  let stateClass =
                    "border-stone-200 bg-white text-stone-800 hover:border-sky-300 hover:bg-sky-50/50";
                  if (submitted && isCorrect) {
                    stateClass =
                      "border-emerald-600 bg-emerald-50 text-emerald-900";
                  } else if (submitted && isChosen) {
                    stateClass = "border-rose-600 bg-rose-50 text-rose-900";
                  } else if (isChosen) {
                    stateClass = "border-sky-700 bg-sky-50 text-sky-900";
                  }
                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      onClick={() => choose(question.id, optionIndex)}
                      disabled={submitted}
                      className={`font-chinese flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-200 disabled:cursor-default ${stateClass}`}
                    >
                      <span className="font-sans text-sm font-bold">
                        {OPTION_LABELS[optionIndex]}.
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
      <SectionActions
        answeredCount={Object.keys(selected).length}
        total={questions.length}
        submitted={submitted}
        score={score}
        onSubmit={() => setSubmitted(true)}
        onReset={reset}
      />
    </SectionCard>
  );
}
