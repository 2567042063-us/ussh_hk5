import LayoutGrbtDashboard from "@shared/components/common/LayoutGrbtDashboard";

import Lesson01Layout from "./Lesson01Layout";

export function generateMetadata() {
  return {
    title: `GTHN q5 lesson 01`,
  };
}

export default function Page() {
  return (
    <Lesson01Layout>
      <LayoutGrbtDashboard />
    </Lesson01Layout>
  );
}
