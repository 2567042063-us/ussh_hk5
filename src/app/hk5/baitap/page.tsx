import { Metadata } from "next";
import Link from "next/link";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export const metadata: Metadata = {
  title: "HK5",
  description: "HK5 - GTHN, Khẩu ngữ, Đọc hiểu SC",
};

const btNptc1aHrefs = [
  {
    name: "nptc1a __ 稍微 hoặc 有点儿",
    href: "/hk5/baitap/nptc1a-shaowei",
  },
  {
    name: "nptc1a __ sắp xếp câu",
    href: "/hk5/baitap/nptc1a-sxc",
  },

  {
    name: "〔 draft 〕 ccad __ 第十七课翻译练习",
    href: "/hk5/baitap/ccad-dich01",
  },
];

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
    name: "Sắp xếp câu HSK4",
    href: "/hk5/baitap/sapxephsk4",
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
        <div className="max-w-200 mx-auto my-5">
          <h2 className="mb-5 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:border-sky-300 dark:text-sky-300">
            Bài tập
          </h2>

          <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[1fr_1fr]">
            <div className="flex flex-col rounded-sm border border-cyan-800/20 p-5 dark:border-slate-700">
              <div className="flex justify-between border-b border-dashed border-cyan-800/20 py-2 last:border-0 dark:border-slate-700">
                <Link
                  href="/hk5/dich"
                  prefetch={false}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-400"
                >
                  •̀ ᴗ - Luyện Dịch
                </Link>
                <Link
                  href="/hk5/tuvung"
                  prefetch={false}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-400"
                >
                  Từ vựng • ˕ •
                </Link>
              </div>

              {btNptc1aHrefs.map((bt) => (
                <div
                  key={bt.href}
                  className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
                >
                  <Link
                    href={bt.href}
                    prefetch={false}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="inline-block px-5 text-slate-500 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    {bt.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
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
                    className="inline-block px-5 text-slate-500 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    {bt.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
