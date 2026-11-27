import {
  dialogue2,
  dialogue3,
  text1,
  type Dialogue,
  type Sentence,
} from "./Kewen17";

export type VocabSentence = { zh: string; pinyin: string; vietnamese: string };

const toVocab = ({ zh, py, vi }: Sentence): VocabSentence => ({
  zh,
  pinyin: py,
  vietnamese: vi,
});

// text1: Sentence[][] -> làm phẳng các đoạn
export const flattenText = (paragraphs: Sentence[][]): VocabSentence[] =>
  paragraphs.flat().map(toVocab);

// Dialogue -> làm phẳng các lượt nói (mặc định bỏ title và intro)
export const flattenDialogue = (
  d: Dialogue,
  opts: { includeTitle?: boolean; includeIntro?: boolean } = {},
): VocabSentence[] => [
  ...(opts.includeTitle ? [toVocab(d.title)] : []),
  ...(opts.includeIntro ? [toVocab(d.intro)] : []),
  ...d.turns.flatMap((t) => t.sentences.map(toVocab)),
];

// export const dataBai17: VocabSentence[] = [
//   ...flattenText(text1),
//   ...flattenDialogue(dialogue2),
//   ...flattenDialogue(dialogue3),
// ];

export const dataBai17Text1: VocabSentence[] = flattenText(text1);

export const dataBai17Dialogue2: VocabSentence[] = flattenDialogue(dialogue2);

export const dataBai17Dialogue3: VocabSentence[] = flattenDialogue(dialogue3);
