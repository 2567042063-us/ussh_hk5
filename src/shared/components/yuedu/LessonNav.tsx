import type { ReactNode } from "react";
import { Languages, PenLine } from "lucide-react";

import type { DisplayOptions } from "@shared/types/yuedu-display";

interface LessonNavProps extends DisplayOptions {
  onDisplayChange: (next: DisplayOptions) => void;
}

export function LessonNav({
  showPinyin,
  showVietnamese,
  onDisplayChange,
}: LessonNavProps) {
  // ? "bg-white text-red-800 shadow-sm"
  //                   : "text-stone-600 hover:text-stone-900"
  //               `}
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
        <div
          className="flex gap-1 rounded-xl bg-stone-100"
          aria-label="Mục của bài học"
        >
          <span
            className={`flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-all duration-200 hover:text-stone-900 md:flex-none md:px-4`}
          >
            <PenLine className="mr-2 h-4 w-4" aria-hidden="true" /> 练习 Bài tập
            ٩꒰｡•◡•｡꒱۶ 第二单元、 一、过年
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-end">
          <ToggleSwitch
            label="Pinyin"
            checked={showPinyin}
            onChange={(checked) =>
              onDisplayChange({ showPinyin: checked, showVietnamese })
            }
          />
          <ToggleSwitch
            label="Tiếng Việt"
            checked={showVietnamese}
            onChange={(checked) =>
              onDisplayChange({ showPinyin, showVietnamese: checked })
            }
            icon={<Languages className="h-4 w-4" aria-hidden="true" />}
          />
        </div>
      </div>
    </header>
  );
}

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: ReactNode;
}

function ToggleSwitch({ label, checked, onChange, icon }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2.5 rounded-full py-1 text-sm font-medium text-stone-700"
    >
      {icon}
      <span>{label}</span>
      <span
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 ${
          checked ? "bg-stone-700" : "bg-stone-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}
