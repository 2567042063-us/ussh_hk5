import { Fragment, useState } from "react";

import { SectionActions } from "@shared/components/yuedu/exercises/SectionActions";
import { SectionCard } from "@shared/components/yuedu/exercises/SectionCard";
import type { ExerciseSectionMeta, FillItem } from "@shared/types/yuedu-lesson";

const BLANK_MARKER = "____";

interface FillSectionProps {
  meta: ExerciseSectionMeta;
  items: FillItem[];
  showVietnamese: boolean;
}

function blankKey(itemId: string, blankIndex: number) {
  return `${itemId}:${blankIndex}`;
}

function isItemCorrect(item: FillItem, values: Record<string, string>) {
  return item.answers.every(
    (answer, blankIndex) =>
      (values[blankKey(item.id, blankIndex)] ?? "").trim() === answer,
  );
}

export function FillSection({ meta, items, showVietnamese }: FillSectionProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = items.filter((item) =>
    item.answers.some(
      (_, blankIndex) =>
        (values[blankKey(item.id, blankIndex)] ?? "").trim() !== "",
    ),
  ).length;
  const score = items.filter((item) => isItemCorrect(item, values)).length;

  const updateBlank = (itemId: string, blankIndex: number, value: string) => {
    setValues((previous) => ({
      ...previous,
      [blankKey(itemId, blankIndex)]: value,
    }));
  };

  return (
    <SectionCard meta={meta} showVietnamese={showVietnamese}>
      <ol className="space-y-8">
        {items.map((item) => {
          const itemCorrect = submitted && isItemCorrect(item, values);
          const parts = item.template.split(BLANK_MARKER);
          return (
            <li key={item.id}>
              <p className="font-chinese text-lg leading-[2.4] text-stone-900">
                {parts.map((part, partIndex) => (
                  <Fragment key={partIndex}>
                    {part}
                    {partIndex < item.answers.length && (
                      <BlankInput
                        value={values[blankKey(item.id, partIndex)] ?? ""}
                        disabled={submitted}
                        status={
                          submitted
                            ? (
                                values[blankKey(item.id, partIndex)] ?? ""
                              ).trim() === item.answers[partIndex]
                              ? "correct"
                              : "wrong"
                            : "idle"
                        }
                        label={`Chỗ trống ${partIndex + 1} của câu ${item.id}`}
                        onChange={(value) =>
                          updateBlank(item.id, partIndex, value)
                        }
                      />
                    )}
                  </Fragment>
                ))}
              </p>
              {submitted && !itemCorrect && (
                <p className="mt-1 text-sm text-rose-800">
                  Đáp án: {item.answers.join(", ")}
                </p>
              )}
              {showVietnamese && (
                <p className="mt-1 text-sm text-stone-600">{item.templateVi}</p>
              )}
            </li>
          );
        })}
      </ol>
      <SectionActions
        answeredCount={answeredCount}
        total={items.length}
        submitted={submitted}
        score={score}
        onSubmit={() => setSubmitted(true)}
        onReset={() => {
          setValues({});
          setSubmitted(false);
        }}
      />
    </SectionCard>
  );
}

interface BlankInputProps {
  value: string;
  disabled: boolean;
  status: "idle" | "correct" | "wrong";
  label: string;
  onChange: (value: string) => void;
}

const BLANK_STATUS_CLASS = {
  idle: "border-stone-400 focus:border-red-700",
  correct: "border-emerald-600 bg-emerald-50 text-emerald-900",
  wrong: "border-rose-600 bg-rose-50 text-rose-900",
};

function BlankInput({
  value,
  disabled,
  status,
  label,
  onChange,
}: BlankInputProps) {
  return (
    <input
      type="text"
      value={value}
      disabled={disabled}
      aria-label={label}
      onChange={(event) => onChange(event.target.value)}
      className={`font-chinese mx-1 inline-block w-28 rounded-md border-b-2 px-2 py-0.5 text-center text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:cursor-default ${BLANK_STATUS_CLASS[status]}`}
    />
  );
}
