import type { LessonData } from "./types";

type SelfStudyLessonEntry = {
  id: string;
  title: string;
  load: () => Promise<LessonData>;
};

const lessonRegistry: SelfStudyLessonEntry[] = [
  {
    id: "kouyu-lesson13",
    title: "Bài 13 · 您过奖了",
    load: async () => {
      const { lesson13 } = await import("./kouyu_lesson13");
      return lesson13;
    },
  },
];

export const selfStudyMenu: IMenuGrbt = lessonRegistry.map(
  ({ id, title }) => ({
    id,
    title,
    href: `/hk5/self-study/${id}`,
  }),
);

export async function getSelfStudyLessonById(
  id: string,
): Promise<LessonData | undefined> {
  const lesson = lessonRegistry.find((item) => item.id === id);
  return lesson?.load();
}
