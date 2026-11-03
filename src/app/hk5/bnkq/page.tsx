import Link from "next/link";

import BaiTapBNKQ from "@shared/components/BaiTapBNKQ";
import BNKQ from "@shared/components/BNKQ";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <BNKQ />
        <BaiTapBNKQ />
      </div>
      <Footer />
    </div>
  );
}
