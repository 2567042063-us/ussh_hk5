import { useCallback, useMemo, useState } from "react";

import { diffChars, DiffToken, isCorrect, shuffle } from "./quizLogic";

export type Phase = "answering" | "checked" | "finished";

export interface Result {
  item: Sentence;
  answer: string;
  correct: boolean;
}

export function useQuiz(items: Sentence[], shuffled: boolean) {
  const [queue, setQueue] = useState<Sentence[]>(() =>
    shuffled ? shuffle(items) : items,
  );
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("answering");
  const [showPinyin, setShowPinyin] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  const current = queue[index];

  const diff: DiffToken[] | null = useMemo(
    () =>
      phase === "checked" && current ? diffChars(input, current.zh) : null,
    [phase, current, input],
  );

  const lastCorrect =
    phase === "checked" ? results[results.length - 1]?.correct : undefined;

  const check = useCallback(() => {
    if (!current || phase !== "answering" || !input.trim()) return;
    setResults((r) => [
      ...r,
      { item: current, answer: input, correct: isCorrect(input, current.zh) },
    ]);
    setPhase("checked");
  }, [current, input, phase]);

  const next = useCallback(() => {
    if (index + 1 >= queue.length) {
      setPhase("finished");
    } else {
      setIndex(index + 1);
      setInput("");
      setShowPinyin(false);
      setPhase("answering");
    }
  }, [index, queue.length]);

  /** Bỏ qua = tính là sai, không cần nhập. */
  const giveUp = useCallback(() => {
    if (!current || phase !== "answering") return;
    setResults((r) => [...r, { item: current, answer: input, correct: false }]);
    setPhase("checked");
  }, [current, phase, input]);

  const restart = useCallback(
    (list: Sentence[]) => {
      setQueue(shuffled ? shuffle(list) : list);
      setIndex(0);
      setInput("");
      setShowPinyin(false);
      setResults([]);
      setPhase("answering");
    },
    [shuffled],
  );

  const wrongItems = results.filter((r) => !r.correct).map((r) => r.item);
  const score = results.filter((r) => r.correct).length;

  return {
    current,
    index,
    total: queue.length,
    input,
    setInput,
    phase,
    diff,
    lastCorrect,
    showPinyin,
    setShowPinyin,
    results,
    score,
    wrongItems,
    check,
    next,
    giveUp,
    restart,
  };
}
