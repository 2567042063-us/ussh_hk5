import { Metadata } from "next";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

// import Link from "next/link";

import ShaoweiYoudianr from "./ShaoweiYoudianr";

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
      </div>
      <Footer />
    </div>
  );
}
