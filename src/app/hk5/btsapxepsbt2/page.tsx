import Link from "next/link";

import BaiTapSapXepCauSBT02 from "@shared/components/BaiTapSapXepCauSBT02";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <BaiTapSapXepCauSBT02 />
        <div className="mt-4 flex justify-center">
          {/* <Link
            href="/hk5/dapan302_causapxepcau.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Đối chiếu với file đáp án gốc PDF
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
