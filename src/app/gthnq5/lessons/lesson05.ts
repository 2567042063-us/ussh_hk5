import type { LessonConfig } from "./types";

export const lesson05 = {
  id: "lesson05",
  title: "GTHNq5 - Bài 05",
  basePath: "/gthnq5/lesson05",
  header: {
    pinyin: "Dì-wǔ kè",
    ordinal: "第五课",
    label: "Lesson 5",
    pronunciation: "Huítóu zàishuō",
    title: "回头再说",
    translation: "We will talk about it later",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq5/lesson05/vocab" },
    { id: "kewen", title: "课文", href: "/gthnq5/lesson05/kewen" },
    {
      id: "translation",
      title: "越中翻译练习",
      href: "/gthnq5/lesson05/translation-quiz",
    },
    // { id: "phonetic", title: "语音", href: "/gthnq5/lesson05/phonetic" },
    // { id: "phrases", title: "词语", href: "/gthnq5/lesson05/phrases" },
    // { id: "exercises", title: "练习", href: "/gthnq5/lesson05/exercises" },
    // {
    //   id: "supplementary",
    //   title: "补充课文",
    //   href: "/gthnq5/lesson05/supplementary",
    // },
  ],
} satisfies LessonConfig;
