import fs from "fs";
import path from "path";
// import { Metadata } from "next";
import { notFound } from "next/navigation";

import HtmlRenderer from "@shared/components/HtmlRenderer";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import StickyFloatingButtons from "@shared/components/common/StickyFloatingButtons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  return {
    title: filename,
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
    "gthn",
    `${filename}.html`,
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
      <div className="container mx-auto">
        <HtmlRenderer htmlContent={htmlContent} />
      </div>
      <Footer />
      <StickyFloatingButtons />
    </div>
  );
}
