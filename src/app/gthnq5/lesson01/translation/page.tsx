import TranslationQuiz from "../../../hk5/dich/[filename]/TranslationQuiz";
import { paragraphs, questions } from "../kewen/Kewen";
import Lesson01Layout from "../Lesson01Layout";

const translationLesson: Lesson = {
  id: "gthnq5-lesson01",
  items: [...paragraphs.flat(), ...questions].map(({ zh, py, vi }) => ({
    zh,
    pinyin: py,
    vietnamese: vi,
  })),
};

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 翻译" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="translation">
      <TranslationQuiz lesson={translationLesson} />
    </Lesson01Layout>
  );
}
