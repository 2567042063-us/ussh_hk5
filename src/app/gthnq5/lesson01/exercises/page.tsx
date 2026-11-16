import Lesson01Layout from "../Lesson01Layout";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - Bài tập" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="exercises">
      <p className="py-6 text-slate-500">Đang làm tiếp...</p>
    </Lesson01Layout>
  );
}
