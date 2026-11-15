import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import Link from "next/link";
import { selfStudyMenu } from "../data/lesson-loader";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt
        menuGrbt={selfStudyMenu}
        menuTitle="TỰ HỌC"
      >
        <section className="rounded-2xl bg-sky-50 p-6 text-center sm:p-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Không tìm thấy bài học
          </h1>
          <p className="mt-2 text-slate-600">
            Bài học này không tồn tại hoặc chưa được đăng ký.
          </p>
          <Link
            href="/hk5/self-study"
            className="mt-5 inline-block rounded-xl bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-700"
          >
            Về danh sách bài học
          </Link>
        </section>
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
