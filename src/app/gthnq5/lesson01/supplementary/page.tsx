import Lesson01Layout from "../Lesson01Layout";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài khoá phụ" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="supplementary">
      <p className="py-6 text-slate-500">Đang làm tiếp...</p>
    </Lesson01Layout>
  );
}
