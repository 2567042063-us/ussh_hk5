import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import HtmlRenderer from "@shared/components/HtmlRenderer";

import Footer from "../../../common/Footer";
import Header from "../../../common/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  return {
    title: `Bài khoá phụ – ${filename}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  const filePath = path.join(
    process.cwd(),
    "public",
    "hk5",
    "bkp",
    `${filename}.html`,
  );

  try {
    if (!fs.existsSync(filePath)) {
      return notFound();
    }

    const htmlContent = fs.readFileSync(filePath, "utf8");

    return (
      <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
        <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
        <div className="max-w-180 flex w-full flex-1 flex-col">
          <HtmlRenderer htmlContent={htmlContent} />
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Lỗi khi đọc file HTML:", error);
    return notFound();
  }
}
