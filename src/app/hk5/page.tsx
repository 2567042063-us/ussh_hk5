import { Metadata } from "next";

import Footer from "../common/Footer";
import Header from "../common/Header";
import DocHieuSC from "./dochieusc";
import GTHN from "./gthn";
import KhauNgu from "./khaungu";
import LichThi from "./lichthi";

export const metadata: Metadata = {
  title: "HK5",
  description: "HK5 - GTHN, Khẩu ngữ, Đọc hiểu SC",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />

      <div className="container flex-1 px-3 md:px-0">
        <nav className="z-2 sticky top-0 flex flex-wrap justify-center gap-2 bg-white py-2 text-lg font-light dark:bg-slate-800">
          {["GTHN", "Khẩu ngữ", "Đọc hiểu SC"].map((subject, index) => (
            <a
              key={index}
              href={`#m${index + 1}`}
              className="hover:rotate-5 mx-5 inline-block transform text-sky-600 transition-[transform,color] duration-300 ease-in-out hover:text-primary dark:text-sky-300"
            >
              ⭑.ᐟ {subject}
            </a>
          ))}
        </nav>

        <div className="max-w-200 mx-auto my-5">
          <LichThi />
        </div>

        <div id="m1" className="my-5">
          <GTHN />
        </div>

        <div id="m2" className="my-5">
          <KhauNgu />
        </div>

        <div id="m3" className="my-5">
          <DocHieuSC />
        </div>
      </div>

      <Footer />
    </div>
  );
}
