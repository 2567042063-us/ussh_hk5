import Lesson01Layout from "../Lesson01Layout";
import BaiKhoaPhu from "./BaiKhoaPhu";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài khoá phụ" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="supplementary" hideHeader>
      <BaiKhoaPhu />
    </Lesson01Layout>
  );
}
