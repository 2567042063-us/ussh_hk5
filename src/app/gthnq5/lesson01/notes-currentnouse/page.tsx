import Lesson01Layout from "../Lesson01Layout";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 注释" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="notes">
      <p className="py-6 text-slate-500">Đang làm tiếp...</p>
    </Lesson01Layout>
  );
}
