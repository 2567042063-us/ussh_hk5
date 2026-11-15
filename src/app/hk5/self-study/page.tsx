import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import { selfStudyMenu } from "./data/lesson-loader";

export function generateMetadata() {
  return {
    title: "Tự học",
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt menuGrbt={selfStudyMenu} menuTitle="TỰ HỌC">
        <section className="rounded-2xl bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-wide text-sky-700">
            汉语学习 · TỰ HỌC TIẾNG TRUNG
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Chọn bài học
          </h1>
          <p className="mt-2 text-slate-600">
            Chọn một bài ở danh sách bên trái để bắt đầu học từ vựng, hội thoại
            và ngữ pháp.
          </p>
          {selfStudyMenu.length === 0 && (
            <p className="mt-6 rounded-xl border border-dashed border-sky-200 bg-white p-5 text-sm text-slate-500">
              Chưa có bài học nào. Thêm dữ liệu và khai báo bài học trong
              <code className="mx-1 rounded bg-sky-100 px-1.5 py-0.5">
                data/lesson-loader.ts
              </code>
              để bắt đầu.
            </p>
          )}
        </section>
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
