import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";
import StickyFloatingButtons from "@shared/components/common/StickyFloatingButtons";
import { gameVocabShou } from "@shared/data/tuvung/game-vocabShou";
import { vocabMenu } from "@shared/data/tuvung/vocab-loader";

import HoctuvungGame from "./HoctuvungGame";

export function generateMetadata() {
  return {
    title: "Game học từ vựng tiếng Trung",
  };
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <LayoutGrbt
        menuGrbt={vocabMenu}
        filename="gameVocabShou"
        menuTitle="TỪ VỰNG"
      >
        <HoctuvungGame
          key="gameVocabShou"
          title="Game từ vựng có bộ 扌"
          words={gameVocabShou}
        />
      </LayoutGrbt>
      <Footer />
      <StickyFloatingButtons />
    </div>
  );
}
