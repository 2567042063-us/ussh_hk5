"use client";

import { useState } from "react";

import Baitap from "./DapanBaitap";

export default function ExercisesWithToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mt-10">
      <button
        id="dapan-giaithich"
        type="button"
        aria-expanded={isVisible}
        aria-controls="baitap-solutions"
        onClick={() => setIsVisible((visible) => !visible)}
        className="px-4 text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
      >
        {isVisible
          ? "𓇢𓆸 Ẩn đáp án theo sách kèm giải thích"
          : "𓇢𓆸 Đáp án theo sách kèm giải thích"}
      </button>
      {isVisible && <Baitap />}
    </div>
  );
}
