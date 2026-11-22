import React from "react";

export default function ZhText({ text }: { text: string }) {
  return (
    <>
      {text.split(/([\u3400-\u9fff]+)/g).map((part, i) =>
        /[\u3400-\u9fff]/.test(part) ? (
          <span key={i} className="ztai__zh">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}
