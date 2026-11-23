import Link from "next/link";

import BaiTapBNKQ from "@shared/components/baitap/BaiTapBNKQ";
import BNKQ from "@shared/components/baitap/BNKQ";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <div className="flex-1">
        <BNKQ />
        <BaiTapBNKQ />
      </div>
      <Footer />
    </div>
  );
}
