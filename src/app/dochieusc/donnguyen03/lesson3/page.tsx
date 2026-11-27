import LessonLayout from "../../LessonLayout";
import { donnguyen03 } from "../../lessons/donnguyen03";
import Dn03Bai03 from "./Dn03Bai03";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen03}>
      <div className="px-5">
        <Dn03Bai03 />
      </div>
    </LessonLayout>
  );
}
