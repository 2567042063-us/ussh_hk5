// app/bai-tap-ba/page.tsx
import BaiTapBa from "@shared/components/BaiTapCauChuBa";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <BaiTapBa />
      <Footer />
    </div>
  );
}
