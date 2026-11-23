import { Metadata } from "next";
import Link from "next/link";
import { UndoDot } from "lucide-react";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

import CCAdDich from "./CCAdDich";
import CCAdDichp3 from "./CCAdDichp3";

export const metadata: Metadata = {
  title: "第十七课翻译练习",
  description: "第十七课翻译练习",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <div className="w-full min-w-0 flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-10">
          <header>
            <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
              第十七课翻译练习
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
          <CCAdDich />
          <CCAdDichp3 />
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1Fv4EQyK1eCHJaMGD-YiL-QX5YSeUU5L6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Đối chiếu với file đáp án gốc PDF
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
