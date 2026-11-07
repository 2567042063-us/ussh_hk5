import { Metadata } from "next";
import Link from "next/link";

import BaiTapBoNguKetQua from "@shared/components/baitap/BaiTapBoNguKetQua";

import Footer from "../../../common/Footer";
import Header from "../../../common/Header";

export const metadata: Metadata = {
  title: "BNKQ",
  description: "bài tập Bổ ngữ kết quả (结果补语): tổng hợp từ Bài 4 và Bài 12",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Bài tập Bổ Ngữ Kết Quả (结果补语)
        </h1>

        <BaiTapBoNguKetQua />
        <div className="mt-4 flex justify-center">
          <Link
            href="/hk5/bnkq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bổ ngữ kết quả (结果补语): tổng hợp từ Bài 4 và Bài 12
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
