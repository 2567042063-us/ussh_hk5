import fs from "fs";
import path from "path";
import Link from "next/link";

import NdthiNPDsc3 from "./NdthiNPDsc3";

// target="_blank" // Mở ở tab mới (xóa dòng này nếu muốn mở đè lên tab hiện tại)
// rel="noopener noreferrer"
export default function GTHN() {
  const dirPath = path.join(process.cwd(), "public", "hk5");
  let htmlFiles: string[] = [];
  try {
    const files = fs.readdirSync(dirPath);
    htmlFiles = files.filter((file) => file.endsWith(".html"));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/:", error);
  }
  return (
    <div className="mb-10">
      <ul className="text-center text-xl">
        <li>
          <Link
            href="/hk5/btchuba"
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            Bài tập câu chữ 把
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btsapxepcau"
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            Bài tập sắp xếp câu
          </Link>
        </li>
      </ul>

      <NdthiNPDsc3 />

      <ul className="mt-5 flex flex-wrap justify-center gap-4">
        {htmlFiles.map((file) => (
          <li key={file}>
            <Link
              href={`/hk5/${file}`}
              prefetch={false}
              className="mt-3 inline-block px-5 text-slate-500 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
            >
              {/*  `/\.[^/.]+$//` sẽ tìm dấu chấm và phần chữ theo sau ở cuối file */}
              {file.replace(/\.[^/.]+$/, "")}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
