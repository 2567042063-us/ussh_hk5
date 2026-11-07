import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

import HtmlRenderer from "@shared/components/HtmlRenderer";

import Footer from "../../../common/Footer";
import Header from "../../../common/Header";

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

  try {
    if (!fs.existsSync(filePath)) {
      return notFound();
    }

    const htmlContent = fs.readFileSync(filePath, "utf8");

    return (
      <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
        <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
        <div className="flex-1">
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
