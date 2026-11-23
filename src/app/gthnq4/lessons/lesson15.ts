import type { LessonConfig } from "./types";

export const lesson15 = {
  id: "lesson15",
  title: "GTHNq4 - Bài 15",
  basePath: "/gthnq4/lesson15",
  header: {
    pinyin: "Dì-shíwǔ kè",
    ordinal: "第十五课",
    label: "Lesson 15",
    pronunciation: "Huìyìtīng de mén kāizhe ne",
    title: "会议厅的门开着呢",
    translation: "Cửa phòng họp đang mở",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq4/lesson15/vocab" },
    { id: "kewen1", title: "课文（一）", href: "/gthnq4/lesson15/kewen1" },
    { id: "kewen2", title: "课文（二）", href: "/gthnq4/lesson15/kewen2" },
    { id: "phonetic", title: "语音", href: "/gthnq4/lesson15/phonetic" },
    {
      id: "translation1",
      title: "课文（一）越中翻译练习",
      href: "/gthnq4/lesson15/translation-quiz-1",
    },
    {
      id: "translation2",
      title: "课文（二）越中翻译练习",
      href: "/gthnq4/lesson15/translation-quiz-2",
    },
    {
      id: "btbnxh",
      title: "课文 - phân tích BNXH",
      href: "/gthnq4/lesson15/bt-bnxh",
    },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq4/lesson15/supplementary",
    },
  ],
} satisfies LessonConfig;
