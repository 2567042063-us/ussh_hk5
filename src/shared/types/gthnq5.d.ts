//  Sentence = { zh: string; py: string; vi: string };
interface Sentence_gthnq5 {
  zh: string;
  py: string;
  vi: string;
}

interface Para_gthnq5 {
  kind?: "greet" | "sign";
  s: Sentence_gthnq5[];
}
