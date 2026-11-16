import Lesson01Layout from "../Lesson01Layout";
import VocabBai1 from "../Vocab";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 生词" };
}

export default function Page() {
  return (
    <Lesson01Layout activeMenuId="vocab">
      <VocabBai1 />
    </Lesson01Layout>
  );
}
