import type { LessonConfig } from "./types";

export const lesson03 = {
  id: "lesson03",
  title: "GTHNq5 - Bài 03",
  basePath: "/gthnq5/lesson03",
  header: {
    pinyin: "Dì-sān kè",
    ordinal: "第三课",
    label: "Lesson 3",
    pronunciation: "Běijīng de sìjì",
    title: "北京的四季",
    translation: "Four seasons in Beijing",
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
