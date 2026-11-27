"use client";

import { useState } from "react";

import BaiTapBNKQ from "@shared/components/baitap/BaiTapBNKQ";
import BaiTapBoNguKetQua from "@shared/components/baitap/BaiTapBoNguKetQua";
import BNKQ from "@shared/components/baitap/BNKQ";

import LessonLayout from "../../LessonLayout";
import { baitapq4 } from "../../lessons/baitap";

const tabItems = [
  { id: "exercises", label: "Bài tập" },
  { id: "tonghop", label: "Tổng hợp từ Bài 4 và Bài 12" },
] as const;

type TabId = (typeof tabItems)[number]["id"];

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("exercises");

  return (
    <LessonLayout lesson={baitapq4} hideHeader>
      <div
        role="tablist"
        aria-label="Nội dung bài khoá phụ"
        className="flex overflow-x-auto border-b border-slate-200"
      >
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`min-w-max flex-1 border-b-[3px] px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              activeTab === tab.id
                ? "border-sky-600 font-semibold text-sky-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === "exercises" && (
        <div className="flex-1">
          <div className="px-5">
            <p className="my-2 text-sm text-slate-500">
              Bài tập Bổ Ngữ Kết Quả (结果补语)
            </p>
            <BaiTapBoNguKetQua />
          </div>
        </div>
      )}
      {activeTab === "tonghop" && (
        <div className="flex-1 px-5">
          <p className="my-2 text-sm text-slate-500">
            Bổ ngữ kết quả (结果补语): tổng hợp từ Bài 4 và Bài 12
          </p>

          <BNKQ />
          <BaiTapBNKQ />
        </div>
      )}
    </LessonLayout>
  );
}
