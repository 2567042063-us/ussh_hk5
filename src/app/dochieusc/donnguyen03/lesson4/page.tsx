import LessonLayout from "../../LessonLayout";
import { donnguyen03 } from "../../lessons/donnguyen03";
import Dn03Bai04 from "./Dn03Bai04";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen03}>
      <div className="px-5">
        <Dn03Bai04 />
      </div>
    </LessonLayout>
  );
}
