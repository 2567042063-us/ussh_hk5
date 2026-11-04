import { Metadata } from "next";
import Link from "next/link";

import BtabcdYouzaicaijiu from "@shared/components/BtabcdYouzaicaijiu";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export const metadata: Metadata = {
  title: "就 才 再 又",
  description: "bài tập phân biệt 就, 才, 再, 又",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Bài tập 就 才 再 又
        </h1>
        <BtabcdYouzaicaijiu />
        <div className="mt-4 flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1k4Xf3YuD3vxBxCXUIjwRU4QW9TBbd6s5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Đối chiếu với file đáp án gốc PDF
          </Link>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="https://tiffanysmandarin.com/index.php/2023/04/01/jiu-chi-zai-practice/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ôn tập thêm với 就, 才, 再
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
