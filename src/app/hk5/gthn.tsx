import fs from "fs";
import path from "path";
import Link from "next/link";

import NdthiNPDsc3 from "./NdthiNPDsc3";

const btHrefs = [
  {
    name: "Bài tập Bổ ngữ xu hướng",
    href: "/hk5/baitap/bt-bnxh",
  },
  {
    name: "Bài tập Bổ ngữ kết quả",
    href: "/hk5/baitap/bt-bnkq",
  },
  {
    name: "Tổng hợp Bổ ngữ kết quả _ Bài 4 và Bài 12",
    href: "/hk5/baitap/bnkq",
  },
  {
    name: "Sửa câu sai _ b11 →	b19",
    href: "/hk5/baitap/suacausai-1119",
  },
  {
    name: "Câu chữ 把",
    href: "/hk5/baitap/cauchuba",
  },
  {
    name: "Phân biệt 了 - 着 - 过",
    href: "/hk5/baitap/abc-lezheguo",
  },
  {
    name: "Bài tập 就 才 再 又",
    href: "/hk5/baitap/abcd-youzaicaijiu",
  },

  {
    name: "Sắp xếp 302 câu tiếng Trung HSK 3-4-5",
    href: "/hk5/baitap/sapxep302cau",
  },
  {
    name: "Sắp xếp câu SBT1",
    href: "/hk5/baitap/sapxepsbt1",
  },
  {
    name: "Sắp xếp câu SBT2",
    href: "/hk5/baitap/sapxepsbt2",
  },
];

export default function GTHN() {
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

  // Tất cả Bài dịch
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
    <div className="max-w-200 mx-auto">
      <h2 className="mb-5 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:border-sky-300 dark:text-sky-300">
        GTHN
      </h2>

      {/* bài khoá chính và bài khoá phụ  */}
      <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[0.5fr_1fr]">
        <div className="flex flex-col justify-center rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          {["gthn3-bai11", ...filesGthn].map((fileName) => (
            <div
              key={fileName}
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
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
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
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
      <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[0.5fr_1fr]">
        <div className="flex flex-col rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          {filesDich.map((fileName) => (
            <div
              key={fileName}
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={`/hk5/dich/${fileName}`}
                prefetch={false}
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
              >
                Dịch _ {fileName}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          {btHrefs.map((bt) => (
            <div
              key={bt.href}
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={bt.href}
                prefetch={false}
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
              >
                {bt.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <NdthiNPDsc3 />
    </div>
  );
}

// <ul className="mt-5 flex flex-wrap justify-center gap-4">
//         {htmlFiles.map((file) => (
//           <li key={file}>
//             <Link
//               href={`/hk5/${file}`}
//               prefetch={false}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-3 inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
//             >
//               {file.replace(/\.[^/.]+$/, "")}{" "}
//             </Link>
//           </li>
//         ))}
//       </ul>
