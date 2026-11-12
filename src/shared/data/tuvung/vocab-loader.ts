const vocabLoaders = new Map<string, () => Promise<VocabularySet>>([
  [
    "vocabQ4",
    async () => {
      const { book4 } = await import("./vocabQ4");
      return {
        id: "vocabQ4",
        title: "Từ vựng quyển 4",
        words: book4,
      };
    },
  ],
  [
    "vocabShou",
    async () => {
      const { vocab } = await import("./vocabShou");
      return {
        id: "vocabShou",
        title: "Từ vựng có bộ 扌",
        words: vocab,
      };
    },
  ],
]);

export const vocabMenu: IMenuGrbt = [
  {
    id: "vocabQ4",
    title: "Từ vựng quyển 4",
    href: "/hk5/tuvung/vocabQ4",
  },
  {
    id: "vocabShou",
    title: "Từ vựng có bộ 扌",
    href: "/hk5/tuvung/vocabShou",
  },
];

export async function getVocabById(
  id: string,
): Promise<VocabularySet | undefined> {
  const loadVocab = vocabLoaders.get(id);
  return loadVocab?.();
}

interface VocabularySet {
  id: string;
  title: string;
  words: Word[];
}
