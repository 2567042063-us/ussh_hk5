import { vocabMenu } from "@shared/data/tuvung/vocab-loader";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import LayoutGrbtDashboard from "@shared/components/common/LayoutGrbtDashboard";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt menuGrbt={vocabMenu} menuTitle="TỪ VỰNG">
        <LayoutGrbtDashboard />
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
