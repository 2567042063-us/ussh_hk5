import Link from "next/link";

import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { pagesMeta } from "../config";

interface Props {
  params: Promise<{ filename: string }>;
}

export default async function ViewHtmlPage({ params }: Props) {
  const { filename } = await params;
  const actualHtmlFilename = filename.endsWith(".html")
    ? filename
    : `${filename}.html`;
  const meta = pagesMeta[actualHtmlFilename] || {
    title: actualHtmlFilename,
    description: "",
  };

  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-800">
      <Header
        title="langlang | about "
        canonical="https://ussh-hk5-neon.vercel.app/about"
      />

      <div className="flex-1">
        <div className="mx-auto text-center">
          <h1 className="border-b-3 mb-2 border-dashed border-sky-300 py-3 text-2xl font-extralight leading-tight text-sky-500 dark:text-primary-dark">
            Ngữ Pháp Tiếng Trung
          </h1>
          <div className="container mx-auto flex justify-between">
            <h2 className="text-xl font-semibold text-rose-800">
              📌 {meta.title}
            </h2>
            <Link
              href="/nguphap"
              className="text-sm text-teal-700 hover:text-fuchsia-500"
            >
              ← Quay lại
            </Link>
          </div>
        </div>
      </div>
      {/* --- IFRAME EMBED HOÀN TOÀN FILE HTML --- */}
      <main className="container mx-auto mt-2 flex-1">
        <iframe
          src={`/nguphap/${actualHtmlFilename}`}
          title={meta.title}
          className="block h-[calc(100vh-110px)] w-full border-none"
        />
      </main>

      <Footer />

      {/* SCRIPT BƠM CSS BÊN NGOÀI VÀO IFRAME */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const iframe = document.getElementById('html-iframe');
              if (!iframe) return;

              iframe.addEventListener('load', function() {
                try {
                  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

                  // 1. Copy toàn bộ style/stylesheet từ trang mẹ vào iframe
                  const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
                  parentStyles.forEach(function(styleNode) {
                    iframeDoc.head.appendChild(styleNode.cloneNode(true));
                  });

                  // 2. Tùy chọn: Thêm CSS bổ sung trực tiếp nếu cần
                  const customStyle = iframeDoc.createElement('style');
                  customStyle.textContent = \`
                    body {
                      font-family: system-ui, -apple-system, sans-serif !important;
                      padding: 20px !important;
                    }
                  \`;
                  iframeDoc.head.appendChild(customStyle);
                } catch (e) {
                  console.error('Không thể bơm CSS vào iframe:', e);
                }
              });
            })();
          `,
        }}
      />
    </div>
  );
}
