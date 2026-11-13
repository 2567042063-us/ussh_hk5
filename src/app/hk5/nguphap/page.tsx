import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import LayoutGrbtDashboard from "@shared/components/common/LayoutGrbtDashboard";

export function generateMetadata() {
  return {
    title: `Ngữ pháp`,
  };
}

const nguphapMenu: IMenuGrbt = [
  {
    id: "nguphap01",
    title: "aaa",
    href: "/hk5/nguphap",
  },
  {
    id: "nguphap01",
    title: "nguphap",
    href: "/hk5/nguphap",
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      <LayoutGrbt menuGrbt={nguphapMenu} menuTitle="NGỮ PHÁP">
        <LayoutGrbtDashboard />
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
