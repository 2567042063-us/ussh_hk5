"use client";

import Link from "next/link";
import { ArrowUp, Home } from "lucide-react";

export default function StickyFloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 rounded-full bg-sky-700 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
      >
        <ArrowUp aria-hidden="true" size={18} />
        <span>Scroll to top</span>
      </button>
      <Link
        href="/hk5"
        className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-slate-950 shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      >
        <Home aria-hidden="true" size={18} />
        <span>Back to hk5</span>
      </Link>
    </div>
  );
}
