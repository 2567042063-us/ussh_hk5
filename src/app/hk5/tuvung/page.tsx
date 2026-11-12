import { lessonMenu } from "@shared/data/dich/lesson-loader";

import Footer from "../../common/Footer";
import Header from "../../common/Header";
// import LayoutGrbt from "../../common/LayoutGrbt";
import VocabGrid from "./VocabGrid";

export function generateMetadata() {
  return {
    title: `Dịch Việt Trung`,
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      {/* <LayoutGrbt menuGrbt={lessonMenu}> */}
      <VocabGrid />
      {/* </LayoutGrbt> */}
      <Footer />
    </div>
  );
}
