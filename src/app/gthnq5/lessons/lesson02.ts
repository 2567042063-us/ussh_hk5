import type { LessonConfig } from "./types";
import { createLessonMenu } from "./menu";

export const lesson02 = {
  id: "lesson02",
  title: "GTHNq5 - Bài 02",
  basePath: "/gthnq5/lesson02",
  menu: createLessonMenu("/gthnq5/lesson02"),
} satisfies LessonConfig;
