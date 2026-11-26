import type { LessonConfig } from "./types";

export const lesson01 = {
  id: "lesson01",
  title: "GTHNq5 - Bài 01",
  basePath: "/gthnq5/lesson01",
  header: {
    pinyin: "Dì-yī kè",
    ordinal: "第一课",
    label: "Lesson 1",
    pronunciation: "Lí jiā de shíhou",
    title: "离家的时候",
    translation: "At the moment of leaving home",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq5/lesson01/vocab" },
    { id: "kewen", title: "课文", href: "/gthnq5/lesson01/kewen" },
    {
      id: "translation",
      title: "越中翻译练习",
      href: "/gthnq5/lesson01/translation-quiz",
    },
    {
      id: "word-usage",
      title: "注释+词语用法",
      href: "/gthnq5/lesson01/word-usage",
    },
    { id: "phonetic", title: "语音", href: "/gthnq5/lesson01/phonetic" },
    { id: "phrases", title: "词语", href: "/gthnq5/lesson01/phrases" },

    {
      id: "exercises",
      title: "练习",
      href: "/gthnq5/lesson01/exercises",
    },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq5/lesson01/supplementary",
    },
    {
      id: "baitapt4",
      title: "bt t4",
      href: "/gthnq5/lesson01/baitapt4",
    },
    // {
    //   id: "baitapdicht4",
    //   title: "bt dịch t4",
    //   href: "/gthnq5/lesson01/baitapdicht4",
    // },
  ],
} satisfies LessonConfig;
