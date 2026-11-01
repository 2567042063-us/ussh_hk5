import fs from "fs";
import path from "path";
import Link from "next/link";

import Footer from "../common/Footer";
import Header from "../common/Header";
import { pagesMeta } from "./config";

export default function HK5IndexPage() {
  const dirPath = path.join(process.cwd(), "public", "nguphap");
  let htmlFiles: string[] = [];

  try {
    const files = fs.readdirSync(dirPath);
    htmlFiles = files.filter((file) => file.endsWith(".html"));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/nguphap/:", error);
  }

  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="langlang "
        canonical="https://ussh-hk5-neon.vercel.app/about"
      />
      <div className="container flex-1">
        <div className="mx-auto text-center">
          <h1 className="border-b-3 mb-2 border-dashed border-sky-300 py-3 text-2xl font-extralight leading-tight text-sky-500 dark:text-primary-dark">
            Ngữ Pháp Tiếng Trung
          </h1>
          <p className="text-md mb-8 text-gray-400">continue...</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {htmlFiles.map((filename) => {
            // Lấy cấu hình metadata (nếu không có thì lấy filename làm title mặc định)
            const meta = pagesMeta[filename] || {
              title: filename,
              description: "",
            };

            // Bỏ đuôi .html để tạo route Next.js (Ví dụ: "sample.html" -> "sample")
            const routeSlug = filename.replace(/\.html$/, "");

            return (
              <div
                key={filename}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "16px",
                  backgroundColor: "#fff",
                }}
              >
                <h3 style={{ margin: "0 0 8px 0" }}>
                  <Link
                    href={`/nguphap/${routeSlug}`}
                    style={{ color: "#0070f3", textDecoration: "none" }}
                  >
                    {meta.title}
                  </Link>
                </h3>
                {meta.description && (
                  <p style={{ margin: 0, color: "#4a5568", fontSize: "14px" }}>
                    {meta.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
