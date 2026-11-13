import Link from "next/link";

import BaiTapSapXepCau from "@shared/components/baitap/BaiTapSapXepCau";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Sắp xếp câu tiếng Trung HSK 3-4-5
        </h1>
        <BaiTapSapXepCau />
        <div className="mt-4 flex justify-center">
          <Link
            href="/hk5/dapan302_causapxepcau.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Đối chiếu với file đáp án gốc PDF
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
