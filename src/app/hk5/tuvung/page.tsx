import { getVocabById, vocabMenu } from "@shared/data/tuvung/vocab-loader";

import Footer from "../../common/Footer";
import Header from "../../common/Header";
import LayoutGrbt from "../../common/LayoutGrbt";
import VocabGrid from "./VocabGrid";

const defaultVocabId = "vocabQ4";

export function generateMetadata() {
  return {
    title: `Từ vựng`,
  };
}

export default async function Page() {
  const vocab = await getVocabById(defaultVocabId);

  if (!vocab) {
    throw new Error(`Không tìm thấy bộ từ vựng mặc định: ${defaultVocabId}`);
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
