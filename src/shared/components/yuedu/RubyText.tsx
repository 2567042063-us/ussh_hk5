import type { LessonToken } from "@shared/types/yuedu-lesson";

interface RubyTextProps {
  tokens: LessonToken[];
  showPinyin: boolean;
}

export function RubyText({ tokens, showPinyin }: RubyTextProps) {
  return (
    <>
      {tokens.map((token, index) =>
        token.pinyin && showPinyin ? (
          <ruby key={index}>
            {token.hanzi}
            <rt>{token.pinyin}</rt>
          </ruby>
        ) : (
          <span key={index}>{token.hanzi}</span>
        ),
      )}
    </>
  );
}
