// app/bai-tap-ba/page.tsx
import { Metadata } from "next";
import Link from "next/link";

import BaiTapBa from "@shared/components/baitap/BaiTapCauChuBa";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";

export const metadata: Metadata = {
  title: "把",
  description: "câu chữ 把",
  alternates: {
    canonical: "/hk5/btchuba",
  },
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header />
      <BaiTapBa />
      <div className="mt-4 flex justify-center">
        <Link
          href="https://docs.google.com/document/d/1B8rxzY-USIi7MN1e3Z9xhRzFUYettqW5wMRmPO8aC2k/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Câu chữ 把
        </Link>
      </div>
      <Footer />
    </div>
  );
}
