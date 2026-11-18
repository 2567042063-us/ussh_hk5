import Lesson01Layout from "../Lesson01Layout";
import Baitap from "./BaiTap";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài tập" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="exercises" hideHeader>
      <Baitap />
    </Lesson01Layout>
  );
}
