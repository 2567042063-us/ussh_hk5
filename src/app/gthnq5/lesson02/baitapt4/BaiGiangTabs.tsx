"use client";

import { useState } from "react";

import BaiGiang_Ge_Mei from "./BaiGiang_Ge_Mei";
import BaiGiang_Kao from "./BaiGiang_Kao";

export default function BaiGiangTabs() {
  const [tab, setTab] = useState<"kao" | "gemei">("kao");

  const tabs = [
    { id: "kao" as const, label: "靠" },
    { id: "gemei" as const, label: `“各” 还是 “每”` },
  ];

  return (
    <>
      <nav className="mx-4 grid grid-cols-2 gap-1 rounded-xl bg-stone-200 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`ztai__zh rounded-lg px-4 py-2 text-lg font-medium transition ${
              tab === t.id
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <main className="px-4">
        {tab === "kao" ? <BaiGiang_Kao /> : <BaiGiang_Ge_Mei />}
      </main>
    </>
  );
}
