import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import StickyFloatingButtons from "@shared/components/common/StickyFloatingButtons";
import { vocabMenu } from "@shared/data/tuvung/vocab-loader";

import Dictionary from "./Dictionary";

export function generateMetadata() {
  return {
    title: "Từ vựng - Từ điển",
    alternates: {
      canonical: "https://ussh-hk5-neon.vercel.app/hk5/tuvung/tu-dien",
    },
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <LayoutGrbt menuGrbt={vocabMenu} filename="tu-dien" menuTitle="TỪ VỰNG">
        <Dictionary />
      </LayoutGrbt>
      <Footer />
      <StickyFloatingButtons />
    </div>
  );
}
