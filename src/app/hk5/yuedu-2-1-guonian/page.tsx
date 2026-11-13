import { Metadata } from "next";
import Image from "next/image";

// import Link from "next/link";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import Kewen from "./kewen";
import ShengCi from "./shengci";

export const metadata: Metadata = {
  title: "yuedu 2-1-guonian",
  description: "Bài đọc hiểu 2-1: 过年 _ Tết Nguyên Đán",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="container mx-auto flex-1">
        <Kewen />

        <div className="relative flex w-full justify-center">
          <Image
            src="/images/family.jpeg"
            alt="爸爸, 妈妈, 老公, 老婆 "
            // fill
            // sizes="100vw"
            className="object-cover" // Giữ đúng tỷ lệ ảnh không bị móp (hoặc object-contain)
            // className="h-auto w-full max-w-md rounded-lg"
            width={1078}
            height={538}
            // priority // Thêm prop này nếu là ảnh Banner/Header chính
          />
        </div>

        <ShengCi />
        <div className="ztai__dochieu">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/5bOrrkE3h1w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
