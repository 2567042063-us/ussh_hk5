import type { LessonConfig } from "./types";

export const lesson17 = {
  id: "lesson17",
  title: "GTHNq4 - Bài 17",
  basePath: "/gthnq4/lesson17",
  header: {
    pinyin: "Dì-shíwǔ kè",
    ordinal: "第十六课",
    label: "Lesson 17",
    pronunciation: "Qiánbian kāi guòlai yí liàng kōngchē",
    title: "前边开过来一辆空车",
    translation: "Phía trước có một chiếc taxi trống chạy tới ",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq4/lesson17/vocab" },
    { id: "kewen1", title: "课文（一）", href: "/gthnq4/lesson17/kewen1" },
    { id: "kewen2", title: "课文（二）", href: "/gthnq4/lesson17/kewen2" },
    { id: "phonetic", title: "语音", href: "/gthnq4/lesson17/phonetic" },
    {
      id: "translation1",
      title: "课文（一）越中翻译练习",
      href: "/gthnq4/lesson17/translation-quiz-1",
    },
    {
      id: "translation2",
      title: "课文（二）越中翻译练习",
      href: "/gthnq4/lesson17/translation-quiz-2",
    },
    { id: "nguphap", title: "语法", href: "/gthnq4/lesson17/nguphap" },
    {
      id: "exercises",
      title: "练习",
      href: "/gthnq4/lesson17/exercises",
    },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq4/lesson17/supplementary",
    },
  ],
} satisfies LessonConfig;
