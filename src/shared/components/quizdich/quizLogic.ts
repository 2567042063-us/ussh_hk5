export type DiffType = "same" | "missing" | "extra";
export interface DiffToken {
  ch: string;
  type: DiffType;
}

/** Bỏ khoảng trắng + mọi dấu câu/ký hiệu (全角 và ASCII) để chỉ so sánh chữ. */
export function normalize(s: string): string {
  return s.normalize("NFKC").replace(/[\s\p{P}\p{S}]/gu, "");
}

export function isCorrect(answer: string, target: string): boolean {
  return normalize(answer) === normalize(target);
}

/** So sánh từng chữ bằng LCS: same = đúng, extra = thừa, missing = thiếu. */
export function diffChars(answer: string, target: string): DiffToken[] {
  const a = [...normalize(answer)];
  const b = [...normalize(target)];
  const n = a.length;
  const m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    new Array(m + 1).fill(0)
  );
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const out: DiffToken[] = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      out.push({ ch: a[i - 1], type: "same" });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      out.push({ ch: b[j - 1], type: "missing" });
      j--;
    } else {
      out.push({ ch: a[i - 1], type: "extra" });
      i--;
    }
  }
  return out.reverse();
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
