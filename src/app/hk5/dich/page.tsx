import { lessonMenu } from "@shared/data/dich/lesson-loader";

import LayoutGrbtDashboard from "@shared/components/common/LayoutGrbtDashboard";
import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";

export function generateMetadata() {
  return {
    title: `Dịch Việt Trung`,
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt menuGrbt={lessonMenu} menuTitle="LUYỆN DỊCH V-T">
        <LayoutGrbtDashboard />
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
