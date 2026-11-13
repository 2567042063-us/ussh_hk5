import { Metadata } from "next";
import Link from "next/link";

import BaiTapSapXepCauSBT01 from "@shared/components/baitap/BaiTapSapXepCauSBT01";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export const metadata: Metadata = {
  title: "Sắp xếp câu SBT1",
  description: "Sắp xếp câu SBT1",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <BaiTapSapXepCauSBT01 />
        <div className="mt-4 flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1xTowAR02ah2dORrfPRQ19wf119L99UL2/view?usp=sharing"
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
