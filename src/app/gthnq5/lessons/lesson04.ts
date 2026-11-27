import type { LessonConfig } from "./types";

export const lesson04 = {
  id: "lesson04",
  title: "GTHNq5 - Bài 04",
  basePath: "/gthnq5/lesson04",
  header: {
    pinyin: "Dì-sì kè",
    ordinal: "第四课",
    label: "Lesson 4",
    pronunciation: "Lǐxiǎng",
    title: "理想",
    translation: "Ideal",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq5/lesson04/vocab" },
    { id: "kewen", title: "课文", href: "/gthnq5/lesson04/kewen" },
    {
      id: "translation",
      title: "越中翻译练习",
      href: "/gthnq5/lesson04/translation-quiz",
    },
    // { id: "phonetic", title: "语音", href: "/gthnq5/lesson04/phonetic" },
    // { id: "phrases", title: "词语", href: "/gthnq5/lesson04/phrases" },
    // { id: "exercises", title: "练习", href: "/gthnq5/lesson04/exercises" },
    // {
    //   id: "supplementary",
    //   title: "补充课文",
    //   href: "/gthnq5/lesson04/supplementary",
    // },
  ],
} satisfies LessonConfig;
