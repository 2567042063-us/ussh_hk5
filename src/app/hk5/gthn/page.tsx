import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import NdthiNPDsc3 from "../NdthiNPDsc3";

export const metadata: Metadata = {
  title: "HK5",
  description: "HK5 - GTHN",
};

export default function Page() {
  // Tất cả GTHN
  const dirPathGthn = path.join(process.cwd(), "public", "hk5", "gthn");
  let filesGthn: string[] = [];
  try {
    const files = fs.readdirSync(dirPathGthn);
    const htmlFilesGthn = files.filter((file) => file.endsWith(".html"));
    filesGthn = htmlFilesGthn.map((file) => file.replace(/\.html$/, ""));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/bkp:", error);
  }
  // Tất cả Bài khoá phụ
  const dirPathBkp = path.join(process.cwd(), "public", "hk5", "bkp");
  let filesBkp: string[] = [];
  try {
    const files = fs.readdirSync(dirPathBkp);
    const htmlFilesBkp = files.filter((file) => file.endsWith(".html"));
    filesBkp = htmlFilesBkp.map((file) => file.replace(/\.html$/, ""));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/bkp:", error);
  }
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      <div className="container flex-1 px-3 md:px-0">
        <div id="m1" className="my-5">
          {/* bài khoá chính và bài khoá phụ  */}
          <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[0.5fr_1fr]">
            <div className="flex flex-col justify-center rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
              {["gthn3-bai11", ...filesGthn].map((fileName) => (
                <div
                  key={fileName}
                  className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
                >
                  <Link
                    href={`/hk5/gthn/${fileName}`}
                    prefetch={false}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
                  >
                    {fileName}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
              {filesBkp.map((fileName) => (
                <div
                  key={fileName}
                  className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
                >
                  <Link
                    href={`/hk5/bkp/${fileName}`}
                    prefetch={false}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
                  >
                    Bài khoá phụ _ {fileName}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ngữ pháp và bài tập */}

          <NdthiNPDsc3 />
        </div>
      </div>

      <Footer />
    </div>
  );
}
