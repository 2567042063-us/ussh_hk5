import type { LessonToken } from "@shared/types/yuedu-lesson";

const TOKEN_PATTERN = /([^{}，。、：；！？“”（）…\s]+)\{([^}]*)\}|(.)/g;

export function parseLessonText(text: string): LessonToken[] {
  const tokens: LessonToken[] = [];
  for (const [, hanziWithPinyin, pinyin, plain] of text.matchAll(
    TOKEN_PATTERN,
  )) {
    if (hanziWithPinyin !== undefined && pinyin !== undefined) {
      tokens.push({ hanzi: hanziWithPinyin, pinyin });
    } else {
      tokens.push({ hanzi: plain ?? "" });
    }
  }
  return tokens;
}
