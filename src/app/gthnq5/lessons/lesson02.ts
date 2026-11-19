import type { LessonConfig } from "./types";

export const lesson02 = {
  id: "lesson02",
  title: "GTHNq5 - Bài 02",
  basePath: "/gthnq5/lesson02",
  header: {
    pinyin: "Dì-èr kè",
    ordinal: "第二课",
    label: "Lesson 2",
    pronunciation: "trống",
    title: "trống",
    translation: "trống",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq5/lesson02/vocab" },
    { id: "kewen", title: "课文", href: "/gthnq5/lesson02/kewen" },
    {
      id: "translation",
      title: "越中翻译练习",
      href: "/gthnq5/lesson02/translation-quiz",
    },
    {
      id: "word-usage",
      title: "注释+词语用法",
      href: "/gthnq5/lesson02/word-usage",
    },
    { id: "phonetic", title: "语音", href: "/gthnq5/lesson02/phonetic" },
    { id: "phrases", title: "词语", href: "/gthnq5/lesson02/phrases" },
    { id: "exercises", title: "练习", href: "/gthnq5/lesson02/exercises" },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq5/lesson02/supplementary",
    },
  ],
} satisfies LessonConfig;
