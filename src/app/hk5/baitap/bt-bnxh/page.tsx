import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import HtmlRenderer from "@shared/components/HtmlRenderer";

import Footer from "../../../common/Footer";
import Header from "../../../common/Header";

export const metadata: Metadata = {
  title: "BNXH",
  description: "bài tập Bổ ngữ xu hướng - Bài 14",
};

export default function Page() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "hk5",
    "baitap",
    `bnxh.html`,
  );

  let htmlContent: string;
  try {
    htmlContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Lỗi khi đọc file HTML:", error);
    return notFound();
  }
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Bài tập BN Xu Hướng - điền “động từ + bổ ngữ xu hướng”
        </h1>

        <div className="container mx-auto flex flex-1 flex-col">
          <HtmlRenderer htmlContent={htmlContent} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
