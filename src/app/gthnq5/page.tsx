import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export const metadata: Metadata = {
  title: "GTHN q5",
  description: "GTHN quyển 5",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      <div className="container flex-1 px-3 md:px-0">
        <div className="max-w-200 mx-auto mt-5">
          <div className="flex flex-col justify-center rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
            <div
              className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={`/gthnq5/lesson01`}
                prefetch={false}
                className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
              >
                GTHNq5 - bài 01
              </Link>
            </div>
            <div
              className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={`/gthnq5/lesson02`}
                prefetch={false}
                className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
              >
                GTHNq5 - bài 02
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
