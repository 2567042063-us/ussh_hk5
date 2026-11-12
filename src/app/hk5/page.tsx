import { Metadata } from "next";
import Link from "next/link";

import Footer from "../common/Footer";
import Header from "../common/Header";
import DocHieuSC from "./dochieusc";
import KhauNgu from "./khaungu";
import LichThi from "./lichthi";

export const metadata: Metadata = {
  title: "HK5",
  description: "HK5 - GTHN, Khẩu ngữ, Đọc hiểu SC",
};

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

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      <div className="container flex-1 px-3 md:px-0">
        <nav className="z-2 sticky top-0 flex flex-wrap justify-center gap-2 bg-white py-2 text-lg font-light dark:bg-slate-800">
          {["GTHN", "Khẩu ngữ", "Đọc hiểu SC"].map((subject, index) => (
            <a
              key={index}
              href={`#m${index + 1}`}
              className="hover:rotate-5 mx-5 inline-block transform text-sky-600 transition-[transform,color] duration-300 ease-in-out hover:text-amber-400 dark:text-sky-300 dark:hover:text-yellow-400"
            >
              ⭑.ᐟ {subject}
            </a>
          ))}
        </nav>

        <div className="max-w-200 mx-auto my-5">
          <LichThi />
        </div>

        <div id="m1" className="my-5">
          <div className="max-w-200 mx-auto">
            <h2 className="mb-5 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:border-sky-300 dark:text-sky-300">
              <Link
                href="/hk5/nguphap"
                prefetch={false}
                className="mr-3 text-lg text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
              >
                ٩꒰｡•◡•｡꒱۶
              </Link>
              GTHN
              <Link
                href="/hk5/gthn"
                prefetch={false}
                className="ml-3 text-lg text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
              >
                °ʚ(*´꒳`*)ɞ°
              </Link>
            </h2>

            <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[1fr_1fr]">
              <div className="flex flex-col rounded-sm border border-cyan-800/20 p-5 dark:border-slate-700">
                <div className="flex justify-between">
                  <Link
                    href="/hk5/dich"
                    prefetch={false}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
                  >
                    •̀ ᴗ - Luyện Dịch
                  </Link>
                  <Link
                    href="/hk5/tuvung"
                    prefetch={false}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
                  >
                    Từ vựng • ˕ •
                  </Link>
                </div>

                <ul className="mt-3 text-slate-800 dark:text-slate-200">
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Dịch sang Việt: 5 câu, 1 đoạn.
                  </li>
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Dịch sang Trung: 5 câu, 1 đoạn.
                  </li>
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Phạm vi: quyển 4,{" "}
                    <span className="font-bold text-fuchsia-600">
                      bài 15-25
                    </span>
                    <br />
                    (70% đã học + 30% bên ngoài).
                  </li>
                  <li>
                    <small>GV: thầy Minh (GK), cô Diệp (CK).</small>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
                <ul className="mt-3 text-slate-800 dark:text-slate-200">
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Câu hỏi trắc nghiệm (25x0.2 = 5 điểm)
                  </li>
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Sắp xếp câu (3x0.5 = 1.5 điểm)
                  </li>
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Sửa câu sai (3x0.2 = 1.5 điểm)
                  </li>
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Điền trống không cho từ (10x0.2 = 2.0 điểm)
                  </li>
                  <li className="border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                    Phạm vi: quyển 4,{" "}
                    <span className="font-bold text-fuchsia-600">
                      bài 15-25
                    </span>
                    <br />
                    (70% đã học + 30% bên ngoài).
                  </li>
                </ul>

                {btHrefs.map((bt) => (
                  <div
                    key={bt.href}
                    className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
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
          </div>
        </div>

        <div id="m2" className="my-5">
          <KhauNgu />
        </div>

        <div id="m3" className="my-5">
          <DocHieuSC />
        </div>
      </div>

      <Footer />
    </div>
  );
}
