import { notFound } from "next/navigation";

import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import StickyFloatingButtons from "@shared/components/common/StickyFloatingButtons";
import { gameVocabShou } from "@shared/data/tuvung/game-vocabShou";
import { gameVerb } from "@shared/data/tuvung/game-vocabVerb";
import { vocabMenu } from "@shared/data/tuvung/vocab-loader";

import HoctuvungGame from "../HoctuvungGame";

function getGame(gameId: string) {
  if (gameId === "vocabShou") {
    return {
      id: "gameVocabShou",
      title: "Game từ vựng có bộ 扌",
      words: gameVocabShou,
    };
  }

  if (gameId === "verb") {
    return {
      id: "gameVerb",
      title: "Game động từ 带, 戴",
      words: gameVerb,
    };
  }

  return undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  const game = getGame(gameId);

  return {
    title: game?.title ?? "Không tìm thấy game từ vựng",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  const game = getGame(gameId);

  if (!game) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt menuGrbt={vocabMenu} filename={game.id} menuTitle="TỪ VỰNG">
        <HoctuvungGame key={game.id} title={game.title} words={game.words} />
      </LayoutGrbt>
      <Footer />
      <StickyFloatingButtons />
    </div>
  );
}
