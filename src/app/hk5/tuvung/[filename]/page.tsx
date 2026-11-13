import { notFound } from "next/navigation";

import { getVocabById, vocabMenu } from "@shared/data/tuvung/vocab-loader";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import VocabGrid from "../VocabGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;
  const vocab = await getVocabById(filename);

  return {
    title: vocab ? `Từ vựng - ${vocab.title}` : "Không tìm thấy bộ từ vựng",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;
  const vocab = await getVocabById(filename);

  if (!vocab) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt menuGrbt={vocabMenu} filename={vocab.id} menuTitle="TỪ VỰNG">
        <VocabGrid title={vocab.title} words={vocab.words} />
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
