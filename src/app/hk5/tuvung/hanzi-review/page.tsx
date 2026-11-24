import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import { vocabMenu } from "@shared/data/tuvung/vocab-loader";

import HanziReview from "./HanziReview";

export function generateMetadata() {
  return {
    title: "Hanzi Review",
    alternates: {
      canonical: "https://ussh-hk5-neon.vercel.app/hk5/tuvung/hanzi-review",
    },
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <LayoutGrbt
        menuGrbt={vocabMenu}
        filename="hanzi-review"
        menuTitle="TỪ VỰNG"
      >
        <HanziReview />
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
