import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Dn02Bai03 from "./Dn02Bai03";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Dn02Bai03 />
      </div>
    </LessonLayout>
  );
}
