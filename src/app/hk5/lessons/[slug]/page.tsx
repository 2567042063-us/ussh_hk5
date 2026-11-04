import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";

const lessons = {
  "gthn4-bai20": "gthn4-bai20.html",
  "gthn4-bai21": "gthn4-bai21.html",
  "gthn4-bai22": "gthn4-bai22.html",
  "gthn4-bai23": "gthn4-bai23.html",
  "gthn5-6": "gthn5-6.html",
  "01-lich-on-thi": "01-lich-on-thi.html",
} as const;

type LessonSlug = keyof typeof lessons;

function extractDocument(source: string) {
  const style = source.match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? "";
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? source;
  const title =
    source.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "Bài học HK5";
  return { style, body, title };
}

export async function generateStaticParams() {
  return Object.keys(lessons).map((slug) => ({ slug }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in lessons)) notFound();

  const filename = lessons[slug as LessonSlug];
  const source = await fs.readFile(
    path.join(process.cwd(), "public/hk5", filename),
    "utf8",
  );
  const document = extractDocument(source);

  return (
    <main className="container flex-1">
      <style dangerouslySetInnerHTML={{ __html: document.style }} />
      <div className="m-auto flex justify-between">
        <a href="/" className="lesson-back">
          ← ussh hk5
        </a>
        <a href="/hk5" className="lesson-index">
          Mục lục HK5
        </a>
      </div>
      <article
        className="lesson-document"
        dangerouslySetInnerHTML={{ __html: document.body }}
      />
    </main>
  );
}
