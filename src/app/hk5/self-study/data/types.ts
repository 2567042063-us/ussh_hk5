export type VocabularyItem = {
  id: string;
  hanzi: string;
  pinyin: string;
  hanViet: string;
  wordClass: string;
  meaning: string;
};

export type LessonLine = {
  id: string;
  speaker?: string;
  // Nội dung zh có thể chứa HTML như <strong> hoặc <span style="color:...">.
  zh: string;
  pinyin: string;
  vi: string;
};

export type LessonSection = {
  id: string;
  title: string;
  subtitle?: string;
  intro?: LessonLine;
  lines: LessonLine[];
};

export type LessonTab = {
  id: string;
  label: string;
  kind: "vocabulary" | "text" | "grammar";
  sectionId?: string;
};

export type LessonData = {
  title: string;
  subtitle: string;
  tabs: LessonTab[];
  vocabulary: VocabularyItem[];
  sections: LessonSection[];
};
