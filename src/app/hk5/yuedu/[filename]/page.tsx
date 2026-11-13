import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

import HtmlRenderer from "@shared/components/HtmlRenderer";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  return {
    title: `阅读 - ${filename}`,
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
    "yuedu",
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
      <HtmlRenderer htmlContent={htmlContent} />
      <Footer />
    </div>
  );
}
