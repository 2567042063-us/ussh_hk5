const lessonLoaders = new Map<string, () => Promise<Lesson>>([
  [
    "bai15",
    async () => {
      const { dataBai15 } = await import("./bai15");
      return { id: "bai15", title: "Bài 15", items: dataBai15 };
    },
  ],
  [
    "bai16",
    async () => {
      const { dataBai16 } = await import("./bai16");
      return { id: "bai16", title: "Bài 16", items: dataBai16 };
    },
  ],
]);

export const lessonMenu: IMenuGrbt = [
  { id: "bai15", title: "Bài 15", href: "/hk5/dich/bai15" },
  { id: "bai16", title: "Bài 16", href: "/hk5/dich/bai16" },
];

export async function getLessonById(id: string): Promise<Lesson | undefined> {
  const loadLesson = lessonLoaders.get(id);
  return loadLesson?.();
}
