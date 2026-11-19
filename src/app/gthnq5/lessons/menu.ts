import type { LessonMenuItem } from "./types";

const lessonSections = [
  { id: "vocab", title: "生词", path: "vocab" },
  { id: "kewen", title: "课文", path: "kewen" },
  { id: "translation", title: "翻译", path: "translation" },
  { id: "word-usage", title: "注释+词语用法", path: "word-usage" },
  { id: "phonetic", title: "语音", path: "phonetic" },
  { id: "phrases", title: "词语", path: "phrases" },
  { id: "exercises", title: "Bài tập", path: "exercises" },
  { id: "supplementary", title: "补充课文", path: "supplementary" },
];

export function createLessonMenu(basePath: string): LessonMenuItem[] {
  return lessonSections.map(({ id, title, path }) => ({
    id,
    title,
    href: `${basePath}/${path}`,
  }));
}
