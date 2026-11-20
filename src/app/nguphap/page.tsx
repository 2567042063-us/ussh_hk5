import LayoutGrbtDashboard from "@shared/components/common/LayoutGrbtDashboard";

import NguphapLayout from "./NguphapLayout";

export default function NguphapIndexPage() {
  return (
    <NguphapLayout>
      <div className="w-full min-w-0">
        <LayoutGrbtDashboard />
      </div>
    </NguphapLayout>
  );
}
