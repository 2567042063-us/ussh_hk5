import type { LessonConfig } from "./types";

export const lesson17 = {
  id: "lesson17",
  title: "GTHNq4 - Bài 17",
  basePath: "/gthnq4/lesson17",
  header: {
    pinyin: "Dì-shíqī kè",
    ordinal: "第十七课",
    label: "Lesson 17",
    pronunciation: "Bǎ “fú” zì dàozhe tiē zài mén shang",
    title: "把“福”字倒着贴在门上",
    translation: "Trên cửa dán chữ “Phúc” ngược",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq4/lesson17/vocab" },
    { id: "kewen1", title: "课文（一）", href: "/gthnq4/lesson17/kewen1" },
    { id: "kewen2", title: "课文（二）", href: "/gthnq4/lesson17/kewen2" },
    { id: "kewen3", title: "课文（三）", href: "/gthnq4/lesson17/kewen3" },
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
    {
      id: "translation3",
      title: "课文（三）越中翻译练习",
      href: "/gthnq4/lesson17/translation-quiz-3",
    },
    { id: "nguphap [draft]", title: "语法", href: "/gthnq4/lesson17/nguphap" },
    {
      id: "exercises",
      title: "练习 [draft]",
      href: "/gthnq4/lesson17/exercises",
    },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq4/lesson17/supplementary",
    },
  ],
} satisfies LessonConfig;
