import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

import NguphapSidebar from "./NguphapSidebar";

export default function NguphapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <NguphapSidebar>{children}</NguphapSidebar>
      <Footer />
    </div>
  );
}
