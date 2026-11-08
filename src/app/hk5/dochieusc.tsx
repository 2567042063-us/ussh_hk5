import fs from "fs";
import path from "path";
import Link from "next/link";

export default function DocHieuSC() {
  // Tất cả bài đọc yuedu
  const dirPathBkp = path.join(process.cwd(), "public", "hk5", "yuedu");
  let filesBkp: string[] = [];
  try {
    const files = fs.readdirSync(dirPathBkp);
    const htmlFilesBkp = files.filter((file) => file.endsWith(".html"));
    filesBkp = htmlFilesBkp.map((file) => file.replace(/\.html$/, ""));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/bkp:", error);
  }

  return (
    <div className="max-w-200 mx-auto">
      <h2 className="mb-5 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:border-sky-300 dark:text-sky-300">
        Đọc hiểu SC
      </h2>

      <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[0.5fr_1fr]">
        <div className="flex flex-col justify-center rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          ... to be continue
        </div>

        <div className="flex flex-col gap-1.5 rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          {filesBkp.map((fileName) => (
            <div
              key={fileName}
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={`/hk5/yuedu/${fileName}`}
                prefetch={false}
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
              >
                Đọc hiểu _ {fileName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
