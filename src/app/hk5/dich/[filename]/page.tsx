import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";

import HtmlRenderer from "@shared/components/HtmlRenderer";
import { classNameActive } from "@shared/constant";
import { getLessonById, lessonMenu } from "@shared/data/dich/lesson-loader";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import TranslationQuiz from "./TranslationQuiz";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  return {
    title: `Dịch - ${filename}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;
  const lesson = await getLessonById(filename);

  if (lesson) {
    return (
      <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
        <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
        <LayoutGrbt
          menuGrbt={lessonMenu}
          filename={lesson.id}
          menuTitle="LUYỆN DỊCH V-T"
        >
          <TranslationQuiz lesson={lesson} />
        </LayoutGrbt>
        <Footer />
      </div>
    );
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "hk5",
    "dich",
    `${filename}.html`,
  );

  let htmlContent: string;
  try {
    htmlContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Lỗi khi đọc file HTML:", error);
    return notFound();
  }

  // Tất cả Bài khoá phụ
  const dirPathDich = path.join(process.cwd(), "public", "hk5", "dich");
  let filesDich: string[] = [];
  try {
    const files = fs.readdirSync(dirPathDich);
    const htmlFilesDich = files.filter((file) => file.endsWith(".html"));
    filesDich = htmlFilesDich.map((file) => file.replace(/\.html$/, ""));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/dich:", error);
  }

  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      <div className="container mx-auto flex flex-1 flex-col gap-3 md:flex-row">
        <div className="md:w-50 flex flex-col gap-1.5 rounded-sm md:shrink-0">
          {filesDich.map((fileName) => (
            <div
              key={fileName}
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={`/hk5/dich/${fileName}`}
                prefetch={false}
                className={clsx(
                  "inline-block px-5 text-slate-500 dark:text-sky-400",
                  fileName === filename
                    ? classNameActive
                    : "hover:text-yellow-500 dark:hover:text-yellow-300",
                )}
              >
                {fileName}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5 pl-0 md:pl-5">
          <HtmlRenderer htmlContent={htmlContent} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
