"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { pinyin } from "pinyin-pro";

export default function StrokeOrderViewer() {
  const [inputText, setInputText] = useState<string>("加油");
  const [characters, setCharacters] = useState<string[]>(["加", "油"]);
  const characterPinyin = useMemo(
    () =>
      characters.map(
        (char) => pinyin(char, { toneType: "symbol", type: "array" })[0] ?? "",
      ),
    [characters],
  );

  // Lưu trữ danh sách các instance của HanziWriter và thẻ DOM tương ứng
  const writersRef = useRef<(HanziWriter | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isCancelledRef = useRef<boolean>(false);

  // Hàm chạy hiệu ứng vẽ tuần tự từng chữ từ trái sang phải
  const animateSequence = async (skipFadeOut = false) => {
    if (writersRef.current.length === 0) return;

    // Dừng hiệu ứng cũ nếu đang chạy dở
    isCancelledRef.current = true;
    await new Promise((resolve) => setTimeout(resolve, 50));
    isCancelledRef.current = false;

    if (!skipFadeOut) {
      const hidePromises = writersRef.current.map(
        (writer) =>
          new Promise<void>((resolve) => {
            if (!writer) {
              resolve();
              return;
            }
            writer.hideCharacter({
              duration: 450,
              onComplete: () => resolve(),
            });
          }),
      );

      await Promise.all(hidePromises);
      if (isCancelledRef.current) return;

      await new Promise((resolve) => setTimeout(resolve, 150));
      if (isCancelledRef.current) return;
    } else {
      writersRef.current.forEach((writer) =>
        writer?.hideCharacter({ duration: 0 }),
      );
    }

    // Chạy tuần tự từng chữ
    for (let i = 0; i < writersRef.current.length; i++) {
      if (isCancelledRef.current) break;
      const writer = writersRef.current[i];
      if (writer) {
        await new Promise<void>((resolve) => {
          writer.animateCharacter({
            onComplete: () => {
              resolve();
            },
          });
        });
      }
    }
  };

  // Khởi tạo lại HanziWriter mỗi khi danh sách ký tự thay đổi
  useEffect(() => {
    isCancelledRef.current = true;
    writersRef.current = [];

    characters.forEach((char, index) => {
      const targetEl = containerRefs.current[index];
      if (targetEl) {
        targetEl.innerHTML = ""; // Xóa SVG cũ nếu có
        const writer = HanziWriter.create(targetEl, char, {
          width: 140,
          height: 140,
          padding: 10,
          showOutline: true, // Hiện nét mờ nền trước và trong khi vẽ
          outlineColor: "#E5E7EB", // Màu xám nhạt hài hòa với đường kẻ ô
          strokeColor: "#0369a1", // Màu xám đậm của nét vẽ
          radicalColor: "#ca8a04",
          strokeAnimationSpeed: 1.5, // Tốc độ vẽ
          delayBetweenStrokes: 120, // Thời gian nghỉ giữa các nét (ms)
          drawingFadeDuration: 400,
        });
        writersRef.current[index] = writer;
      }
    });

    // Tự động chạy vẽ ngay sau khi render xong
    const timer = setTimeout(() => {
      animateSequence(true);
    }, 150);

    return () => {
      clearTimeout(timer);
      isCancelledRef.current = true;
    };
  }, [characters]);

  // Xử lý khi bấm nút Thực hiện hoặc nhấn Enter
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hanziOnly = inputText
      .trim()
      .split("")
      .filter((char) => /[\u4e00-\u9fa5]/.test(char));

    if (hanziOnly.length > 0) {
      const isSameCharacters =
        hanziOnly.length === characters.length &&
        hanziOnly.every((char, index) => char === characters[index]);

      if (isSameCharacters) {
        void animateSequence(false);
      } else {
        setCharacters(hanziOnly);
      }
    }
  };

  const handleSingleCharClick = (index: number) => {
    const writer = writersRef.current[index];
    if (!writer) return;

    writer.hideCharacter({
      duration: 350,
      onComplete: () => {
        setTimeout(() => writer.animateCharacter(), 100);
      },
    });
  };

  return (
    <main
      className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6"
      id="strokeorder"
    >
      <div className="flex w-full flex-col items-start">
        <form
          onSubmit={handleSubmit}
          className="mb-8 flex w-full flex-col items-start gap-3"
        >
          <label className="flex w-full items-center gap-3 rounded-xl border border-sky-400 bg-white px-4 py-3 shadow-[0_0_0_4px_rgba(14,165,233,0.12)] focus-within:border-sky-500">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 text-sky-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="VD: 加油..."
              aria-label="Tìm chữ và xem thứ tự nét"
              className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
          </label>
        </form>
        <div className="characters">
          {/* Phần 2: Giao diện hiển thị giống hình mẫu */}
          {characters.length > 0 && (
            <div className="inline-flex flex-wrap border-l border-t border-gray-200 bg-white">
              {characters.map((char, index) => (
                <div
                  key={`${char}-${index}`}
                  onClick={() => handleSingleCharClick(index)}
                  title="Bấm vào chữ để vẽ lại riêng chữ này"
                  className="relative flex cursor-pointer select-none flex-col border-b border-r border-gray-200"
                >
                  <div className="h-35 w-35 relative">
                    {/* Nền SVG tạo đường kẻ ngang, dọc và 2 đường chéo mờ */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      viewBox="0 0 140 140"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="140"
                        y2="140"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                      <line
                        x1="140"
                        y1="0"
                        x2="0"
                        y2="140"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                      <line
                        x1="70"
                        y1="0"
                        x2="70"
                        y2="140"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="70"
                        x2="140"
                        y2="70"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                    </svg>

                    {/* Container chứa nét chữ của HanziWriter */}
                    <div
                      ref={(el) => {
                        containerRefs.current[index] = el;
                      }}
                      className="relative z-10 h-full w-full"
                    />
                  </div>
                  <p className="ztai__py w-35 flex h-12 items-center justify-center border-t border-gray-100 text-center text-xl font-semibold leading-none text-sky-700">
                    {characterPinyin[index]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
