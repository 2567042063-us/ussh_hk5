"use client";

import { useState } from "react";

import Baitap from "./DapanBaitap";

export default function ExercisesWithToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        id="dapan-giaithich"
        type="button"
        aria-expanded={isVisible}
        aria-controls="baitap-solutions"
        onClick={() => setIsVisible((visible) => !visible)}
        className="px-4 text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
      >
        {isVisible
          ? "Ẩn đáp án theo sách kèm giải thích"
          : "Đáp án theo sách kèm giải thích"}
      </button>
      {isVisible && <Baitap />}
    </>
  );
}
