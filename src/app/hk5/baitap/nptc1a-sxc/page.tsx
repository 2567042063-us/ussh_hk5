import { Metadata } from "next";
import Link from "next/link";
import { UndoDot } from "lucide-react";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

import SentenceOrdering from "./SentenceOrdering";

export const metadata: Metadata = {
  title: "sap xep cau",
  description: "sap xep cau",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <header>
            <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
              Sắp xếp câu
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
          <SentenceOrdering />
        </div>
      </div>
      <Footer />
    </div>
  );
}
