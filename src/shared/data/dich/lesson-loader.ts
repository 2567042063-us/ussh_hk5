const lessonLoaders = new Map<string, () => Promise<Lesson>>([
  [
    "bai15-1",
    async () => {
      const { dataBai15Yi } = await import("./bai15-1");
      return {
        id: "bai15-1",
        title: "第十五课：会议厅的门开着呢",
        items: dataBai15Yi,
      };
    },
  ],
  [
    "bai15-2",
    async () => {
      const { dataBai15Er } = await import("./bai15-2");
      return {
        id: "bai15-2",
        title: "第十五课：（二）墙上贴着红双喜字",
        items: dataBai15Er,
      };
    },
  ],
  [
    "bai16-1",
    async () => {
      const { dataBai16Yi } = await import("./bai16");
      return {
        id: "bai16-1",
        title: "第十六课：前边开过来一辆空车",
        items: dataBai16Yi,
      };
    },
  ],
  [
    "bai16-2",
    async () => {
      const { dataBai16Er } = await import("./bai16");
      return {
        id: "bai16-2",
        title: "第十六课：（二）年轻人打扮得越来越漂亮了",
        items: dataBai16Er,
      };
    },
  ],
  [
    "bai25-1",
    async () => {
      const { dataBai25Yi } = await import("./bai25");
      return {
        id: "bai25-1",
        title: "第二十五课：（一）吉利的数字",
        items: dataBai25Yi,
      };
    },
  ],
  [
    "bai25-2",
    async () => {
      const { dataBai25Er } = await import("./bai25");
      return {
        id: "bai25-2",
        title: "第二十五课：（二）宴会上的规矩",
        items: dataBai25Er,
      };
    },
  ],
]);

export const lessonMenu: IMenuGrbt = [
  { id: "bai15-1", title: "第15课（一）", href: "/hk5/dich/bai15-1" },
  { id: "bai15-2", title: "第15课（二）", href: "/hk5/dich/bai15-2" },
  { id: "bai16-1", title: "第16课（一）", href: "/hk5/dich/bai16-1" },
  { id: "bai16-2", title: "第16课（二）", href: "/hk5/dich/bai16-2" },
  { id: "bai25-1", title: "第25课（一）", href: "/hk5/dich/bai25-1" },
  { id: "bai25-2", title: "第25课（二）", href: "/hk5/dich/bai25-2" },
];

export async function getLessonById(id: string): Promise<Lesson | undefined> {
  const loadLesson = lessonLoaders.get(id);
  return loadLesson?.();
}
