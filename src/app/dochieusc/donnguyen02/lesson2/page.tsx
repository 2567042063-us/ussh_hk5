import LessonLayout from "../../LessonLayout";
import { donnguyen02 } from "../../lessons/donnguyen02";
import Dn02Bai02 from "./Dn02Bai02";

export default function Page() {
  return (
    <LessonLayout lesson={donnguyen02}>
      <div className="px-5">
        <Dn02Bai02 />
      </div>
    </LessonLayout>
  );
}
