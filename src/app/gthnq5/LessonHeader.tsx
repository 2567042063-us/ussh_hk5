import type { LessonHeaderConfig } from "./lessons/types";

export default function LessonHeader({
  lesson,
}: {
  lesson: LessonHeaderConfig;
}) {
  return (
    <header className="border-b border-stone-300">
      <div className="flex items-end gap-3 px-3 pb-4 sm:gap-6 sm:px-6">
        <div className="shrink-0 border border-stone-400 bg-white px-3 py-2 text-center shadow-[3px_3px_0_0_rgba(0,0,0,0.25)] sm:px-4">
          <div className="text-xs text-stone-700">{lesson.pinyin}</div>
          <div className="ztai__zh font-serif text-2xl text-stone-900">
            {lesson.ordinal}
          </div>
          <div className="text-sm italic text-stone-600">{lesson.label}</div>
        </div>
        <div className="min-w-0 flex-1 text-center">
          <div className="text-sm tracking-widest text-stone-700">
            {lesson.pronunciation}
          </div>
          <h1 className="ztai__zh font-serif text-3xl text-stone-900 sm:text-4xl">
            {lesson.title}
          </h1>
          <p className="font-serif text-lg italic text-stone-600">
            {lesson.translation}
          </p>
        </div>
      </div>
    </header>
  );
}
