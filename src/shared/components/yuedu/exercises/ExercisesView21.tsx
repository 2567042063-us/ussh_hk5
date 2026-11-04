import { useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";

import { ChoiceSection } from "@shared/components/yuedu/exercises/ChoiceSection";
import { FillSection } from "@shared/components/yuedu/exercises/FillSection";
import { OpenSection } from "@shared/components/yuedu/exercises/OpenSection";
import { SectionActions } from "@shared/components/yuedu/exercises/SectionActions";
import { SectionCard } from "@shared/components/yuedu/exercises/SectionCard";
import {
  comprehensionQuestions,
  comprehensionSectionMeta,
  fillItems,
  fillSectionMeta,
  openQuestions,
  openSectionMeta,
  trueFalseItems,
  trueFalseSectionMeta,
  vocabularyQuestions,
  vocabularySectionMeta,
} from "@shared/data/yuedu21/lessonExercises";
import type { DisplayOptions } from "@shared/types/yuedu-display";

export function ExercisesView({
  showVietnamese,
}: Pick<DisplayOptions, "showVietnamese">) {
  return (
    <div className="space-y-8 pt-6">
      <ChoiceSection
        meta={vocabularySectionMeta}
        questions={vocabularyQuestions}
        showVietnamese={showVietnamese}
      />
      <ChoiceSection
        meta={comprehensionSectionMeta}
        questions={comprehensionQuestions}
        showVietnamese={showVietnamese}
      />
      <TrueFalseSection showVietnamese={showVietnamese} />
      <FillSection
        meta={fillSectionMeta}
        items={fillItems}
        showVietnamese={showVietnamese}
      />
      <OpenSection
        meta={openSectionMeta}
        questions={openQuestions}
        showVietnamese={showVietnamese}
      />
    </div>
  );
}

function TrueFalseSection({
  showVietnamese,
}: Pick<DisplayOptions, "showVietnamese">) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = trueFalseItems.filter(
    (item) => answers[item.id] === item.answer,
  ).length;

  const choose = (itemId: string, value: boolean) => {
    if (submitted) return;
    setAnswers((previous) => ({ ...previous, [itemId]: value }));
  };

  return (
    <SectionCard meta={trueFalseSectionMeta} showVietnamese={showVietnamese}>
      <ol className="divide-y divide-stone-200">
        {trueFalseItems.map((item, index) => {
          const chosen = answers[item.id];
          return (
            <li
              key={item.id}
              className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="space-y-1">
                <p className="font-chinese text-stone-900">
                  {index + 1}. {item.statement}
                </p>
                {showVietnamese && (
                  <p className="text-sm text-stone-600">{item.statementVi}</p>
                )}
              </div>
              <div className="flex shrink-0 gap-2">
                <TrueFalseButton
                  label="Đúng"
                  active={chosen === true}
                  submitted={submitted}
                  isCorrectValue={item.answer === true}
                  onClick={() => choose(item.id, true)}
                  icon={<Check className="h-4 w-4" aria-hidden="true" />}
                />
                <TrueFalseButton
                  label="Sai"
                  active={chosen === false}
                  submitted={submitted}
                  isCorrectValue={item.answer === false}
                  onClick={() => choose(item.id, false)}
                  icon={<X className="h-4 w-4" aria-hidden="true" />}
                />
              </div>
            </li>
          );
        })}
      </ol>
      <SectionActions
        answeredCount={Object.keys(answers).length}
        total={trueFalseItems.length}
        submitted={submitted}
        score={score}
        onSubmit={() => setSubmitted(true)}
        onReset={() => {
          setAnswers({});
          setSubmitted(false);
        }}
      />
    </SectionCard>
  );
}

interface TrueFalseButtonProps {
  label: string;
  active: boolean;
  submitted: boolean;
  isCorrectValue: boolean;
  onClick: () => void;
  icon: ReactNode;
}

function TrueFalseButton({
  label,
  active,
  submitted,
  isCorrectValue,
  onClick,
  icon,
}: TrueFalseButtonProps) {
  let stateClass =
    "border-stone-300 bg-white text-stone-700 hover:border-red-300 hover:bg-red-50/50";
  if (submitted && isCorrectValue) {
    stateClass = "border-emerald-600 bg-emerald-50 text-emerald-900";
  } else if (submitted && active) {
    stateClass = "border-rose-600 bg-rose-50 text-rose-900";
  } else if (active) {
    stateClass = "border-red-700 bg-red-50 text-red-900";
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={submitted}
      aria-pressed={active}
      className={`inline-flex min-w-20 items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors disabled:cursor-default ${stateClass}`}
    >
      {icon}
      {label}
    </button>
  );
}
