import type { LessonConfig } from "./types";

export const baitapq4 = {
  id: "baitap",
  title: "GTHNq4 - Bài tập",
  basePath: "/gthnq4/baitap",
  header: {
    pinyin: "",
    ordinal: "",
    label: "",
    pronunciation: "",
    title: "",
    translation: "",
  },
  menu: [
    {
      id: "suacausai-1119",
      title: "Sửa câu sai 11-19",
      href: "/gthnq4/baitap/suacausai-1119",
    },
    { id: "bnkq", title: "Bài tập BNKQ", href: "/gthnq4/baitap/bnkq" },
    // { id: "phonetic", title: "语音", href: "/gthnq4/lesson14/phonetic" },
    // {
    //   id: "translation",
    //   title: "课文 - 越中翻译练习",
    //   href: "/gthnq4/lesson14/translation-quiz",
    // },
    // {
    //   id: "btbnxh",
    //   title: "课文 - phân tích BNXH",
    //   href: "/gthnq4/lesson14/bt-bnxh",
    // },
    // {
    //   id: "exercises",
    //   title: "练习",
    //   href: "/gthnq4/lesson14/exercises",
    // },
    // {
    //   id: "supplementary",
    //   title: "补充课文",
    //   href: "/gthnq4/lesson14/supplementary",
    // },
  ],
} satisfies LessonConfig;
