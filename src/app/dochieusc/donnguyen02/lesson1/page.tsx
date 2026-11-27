import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Dn02Bai01 from "./Dn02Bai01";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Dn02Bai01 />
      </div>
    </LessonLayout>
  );
}
