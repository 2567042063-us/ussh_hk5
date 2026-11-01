import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { listGTSC } from "../config";

interface Props {
  params: Promise<{ filename: string }>;
}

// Hàm này giúp Next.js tự đổi Title & Canonical URL cho từng trang
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { filename } = await params;
  const slug = filename.replace(/\.(html|tsx)$/, "");
  const meta = listGTSC[slug] || { title: slug };

  return {
    title: `${meta.titleseo} | lvtd`,
    alternates: {
      canonical: `https://ussh-hk5-neon.vercel.app/hk5/${slug}`,
    },
  };
}

export default async function ViewPage({ params }: Props) {
  const { filename } = await params;
  const meta = listGTSC[filename];

  let DynamicContent: React.ComponentType | null = null;
  try {
    DynamicContent = dynamic(() => import(`../content-gtsc/${filename}`), {
      loading: () => <p className="py-8 text-center">Đang tải nội dung...</p>,
    });
  } catch {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-800">
      <Header
        title={filename}
        canonical={`https://ussh-hk5-neon.vercel.app/hk5/${filename}`}
      />

      <div className="flex-1">
        <div className="mx-auto text-center">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="ztai__fkaiti mb-2 border-sky-300 py-2 text-4xl font-extralight leading-tight text-rose-800 dark:text-primary-dark">
              {meta.title}
            </h1>

            <Link
              href="/hk5"
              className="text-sm text-teal-700 hover:text-fuchsia-500"
            >
              ← Quay lại
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto flex-1">
        {/* Render trực tiếp React Component thay vì Iframe */}
        <DynamicContent />
      </main>

      <Footer />
    </div>
  );
}
