// app/bai-tap-ba/page.tsx
import { Metadata } from "next";

import BaiTapBa from "@shared/components/BaiTapCauChuBa";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export const metadata: Metadata = {
  title: "把",
  description: "câu chữ 把",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="把"
        canonical="https://ussh-hk5-neon.vercel.app/hk5/btchuba"
      />
      <BaiTapBa />
      <Footer />
    </div>
  );
}
