import fs from "fs";
import path from "path";
import Link from "next/link";

import NdthiNPDsc3 from "./NdthiNPDsc3";

export default function GTHN() {
  const dirPath = path.join(process.cwd(), "public", "hk5");
  let htmlFiles: string[] = [];
  try {
    const files = fs.readdirSync(dirPath);
    htmlFiles = files.filter((file) => file.endsWith(".html"));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/:", error);
  }

  const dirPathBkp = path.join(process.cwd(), "public", "hk5", "bkp");
  let htmlFilesBkp: string[] = [];
  try {
    const files = fs.readdirSync(dirPathBkp);
    htmlFilesBkp = files.filter((file) => file.endsWith(".html"));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/bkp:", error);
  }
  return (
    <div className="mb-10">
      <h2 className="border-t-3 border-b-3 mb-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
        GTHN
      </h2>
      <table className="ztai__table min-w-md mx-auto mt-5">
        <thead>
          <tr>
            <th colSpan={2}>
              <span className="block text-center">Bài khoá phụ</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {htmlFilesBkp.map((file) => (
            <tr key={file}>
              <td>{file.replace(/\.[^/.]+$/, "")} </td>
              <td>
                <Link
                  href={`/hk5/bkp/${file}`}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 text-slate-500 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
                >
                  bài học & bài tập
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="ztai__table min-w-md mx-auto mt-5">
        <thead>
          <tr>
            <th colSpan={2}>
              <span className="block text-center">Ngữ pháp</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BNKQ _ 结果补语</td>
            <td>
              <div>
                <Link
                  href="/hk5/bt-bnkq"
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
                >
                  BT b04+b12
                </Link>
              </div>
              <div>
                <Link
                  href="/hk5/bnkq"
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
                >
                  Tổng hợp b04+b12
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="text-center text-xl">
        <li>
          <Link
            href="/hk5/baitap-suacausai-1119"
            prefetch={false}
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            BT Sửa câu sai bài 11-19
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btabc-lezheguo"
            prefetch={false}
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            ABC - 着、了、过
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btchuba"
            prefetch={false}
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            BT câu chữ 把
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btsapxep302cau"
            prefetch={false}
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            BT sắp xếp 302 câu
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btsapxepsbt1"
            prefetch={false}
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            BT sắp xếp câu SBT-01
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btsapxepsbt2"
            prefetch={false}
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            BT sắp xếp câu SBT-02
          </Link>
        </li>
        <li>
          <Link
            href="/hk5/btabcd-youzaicaijiu"
            className="mt-3 inline-block px-5 text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
          >
            ABCD - 就 才 再 又
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
              target="_blank"
              rel="noopener noreferrer"
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
