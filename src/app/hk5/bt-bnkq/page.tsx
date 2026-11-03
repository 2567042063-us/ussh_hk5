import { Metadata } from "next";
import Link from "next/link";

import BaiTapBoNguKetQua from "@shared/components/BaiTapBoNguKetQua";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export const metadata: Metadata = {
  title: "BNKQ",
  description: "bài tập Bổ ngữ kết quả (结果补语): tổng hợp từ Bài 4 và Bài 12",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
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
