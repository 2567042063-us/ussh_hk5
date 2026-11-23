import { Metadata } from "next";
import Link from "next/link";
import { UndoDot } from "lucide-react";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

import ShaoweiYoudianr from "./ShaoweiYoudianr";
import ShaoweiYoudianrYidianr from "./ShaoweiYoudianrYidianr";

export const metadata: Metadata = {
  title: "稍微 hoặc 有点儿",
  description: "Điền 稍微 hoặc 有点儿 vào chỗ trống",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <div className="flex-1">
        <div className="mx-auto px-4 py-10">
          <header>
            <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
              Điền 稍微 hoặc 有点儿 vào chỗ trống
            </h1>

            <Link
              href="/hk5/baitap"
              prefetch={false}
              className="flex text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
            >
              <UndoDot />
              <span> Bài tập</span>
            </Link>
          </header>
          <ShaoweiYoudianr />
          <details>
            <summary className="cursor-pointer py-3 text-sky-700">
              So sánh <span className="ztai__zh text-2xl">稍微</span> 、
              <span className="ztai__zh text-2xl">有点儿</span> 、
              <span className="ztai__zh text-2xl">一点儿</span>
            </summary>
            <ShaoweiYoudianrYidianr />
          </details>
        </div>
      </div>
      <Footer />
    </div>
  );
}
