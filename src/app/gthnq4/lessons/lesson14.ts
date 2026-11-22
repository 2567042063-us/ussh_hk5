import type { LessonConfig } from "./types";

export const lesson14 = {
  id: "lesson14",
  title: "GTHNq4 - Bài 14",
  basePath: "/gthnq4/lesson14",
  header: {
    pinyin: "Dì-shísì kè",
    ordinal: "第十四课",
    label: "Lesson 14",
    pronunciation: "Yàoshi wàng bá xiàlai le",
    title: "钥匙忘拔下来了",
    translation: "Quên rút chìa khoá ra rồi",
  },
  menu: [
    { id: "vocab", title: "生词", href: "/gthnq4/lesson14/vocab" },
    { id: "kewen", title: "课文", href: "/gthnq4/lesson14/kewen" },
    {
      id: "translation",
      title: "越中翻译练习",
      href: "/gthnq4/lesson14/translation-quiz",
    },
    {
      id: "supplementary",
      title: "补充课文",
      href: "/gthnq4/lesson14/supplementary",
    },
  ],
} satisfies LessonConfig;
