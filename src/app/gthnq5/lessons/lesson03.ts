import type { LessonConfig } from "./types";

export const lesson03 = {
  id: "lesson03",
  title: "GTHNq5 - Bài 03",
  basePath: "/gthnq5/lesson03",
  header: {
    pinyin: "Dì-èr kè",
    ordinal: "第二课",
    label: "Lesson 2",
    pronunciation: "Yì fēng xìn",
    title: "一封信",
    translation: "A letter",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq5/lesson03/vocab" },
    { id: "kewen", title: "课文", href: "/gthnq5/lesson03/kewen" },
    {
      id: "translation",
      title: "越中翻译练习",
      href: "/gthnq5/lesson03/translation-quiz",
    },
    {
      id: "word-usage",
      title: "注释+词语用法",
      href: "/gthnq5/lesson03/word-usage",
    },
    { id: "phonetic", title: "语音", href: "/gthnq5/lesson03/phonetic" },
    { id: "phrases", title: "词语", href: "/gthnq5/lesson03/phrases" },
    { id: "exercises", title: "练习", href: "/gthnq5/lesson03/exercises" },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq5/lesson03/supplementary",
    },
  ],
} satisfies LessonConfig;
