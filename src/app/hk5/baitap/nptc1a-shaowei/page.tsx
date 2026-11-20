import { Metadata } from "next";

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
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <ShaoweiYoudianr />
        <details className="mx-auto max-w-3xl px-4">
          <summary className="cursor-pointer py-3 text-sky-700">
            So sánh <span className="ztai__zh text-2xl">稍微</span> 、
            <span className="ztai__zh text-2xl">有点儿</span> 、
            <span className="ztai__zh text-2xl">一点儿</span>
          </summary>
          <ShaoweiYoudianrYidianr />
        </details>
      </div>
      <Footer />
    </div>
  );
}
