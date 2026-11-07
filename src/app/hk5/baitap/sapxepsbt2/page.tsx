import { Metadata } from "next";
import Link from "next/link";

import BaiTapSapXepCauSBT02 from "@shared/components/baitap/BaiTapSapXepCauSBT02";

import Footer from "../../../common/Footer";
import Header from "../../../common/Header";

export const metadata: Metadata = {
  title: "Sắp xếp câu SBT2",
  description: "Sắp xếp câu SBT2",
};
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <BaiTapSapXepCauSBT02 />
        <div className="mt-4 flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1iUoPDbcdYWFoZYCCfOxHgauXoy5jFvTf/view?usp=sharing"
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
