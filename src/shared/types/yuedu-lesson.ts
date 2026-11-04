export interface LessonParagraph {
  chinese: string;
  vietnamese: string;
}

export interface LessonNote {
  term: string;
  meaningZh: string;
  meaningVi: string;
}

export interface VocabularyItem {
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export interface ChoiceQuestion {
  id: string;
  prompt: string;
  promptVi?: string;
  options: string[];
  answerIndex: number;
}

export interface TrueFalseItem {
  id: string;
  statement: string;
  statementVi: string;
  answer: boolean;
}

export interface FillItem {
  id: string;
  template: string;
  templateVi: string;
  answers: string[];
}

export interface OpenQuestion {
  id: string;
  prompt: string;
  promptVi: string;
  sampleAnswer: string;
  sampleAnswerVi: string;
}

export interface ExerciseSectionMeta {
  title: string;
  instructionVi: string;
}

export interface LessonToken {
  hanzi: string;
  pinyin?: string;
}
