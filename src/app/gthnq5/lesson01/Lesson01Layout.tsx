import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";

import StickyFloatingButtons from "../StickyFloatingButtons";

const lessonMenu: IMenuGrbt = [
  { id: "vocab", title: "生词", href: "/gthnq5/lesson01/vocab" },
  { id: "kewen", title: "课文", href: "/gthnq5/lesson01/kewen" },
  {
    id: "translation",
    title: "翻译",
    href: "/gthnq5/lesson01/translation",
  },
  { id: "phonetic", title: "语音", href: "/gthnq5/lesson01/phonetic" },
  { id: "phrases", title: "词语", href: "/gthnq5/lesson01/phrases" },
  { id: "notes", title: "注释", href: "/gthnq5/lesson01/notes" },
  { id: "usage", title: "词语用法", href: "/gthnq5/lesson01/usage" },
  { id: "exercises", title: "Bài tập", href: "/gthnq5/lesson01/exercises" },
  {
    id: "supplementary",
    title: "Bài khoá phụ",
    href: "/gthnq5/lesson01/supplementary",
  },
];

function Lesson01Header() {
  return (
    <header className="border-b border-stone-300">
      <div className="flex items-end gap-3 px-3 pb-4 sm:gap-6 sm:px-6">
        <div className="shrink-0 border border-stone-400 bg-white px-3 py-2 text-center shadow-[3px_3px_0_0_rgba(0,0,0,0.25)] sm:px-4">
          <div className="text-xs text-stone-700">Dì-yī kè</div>
          <div className="ztai__zh font-serif text-2xl text-stone-900">
            第一课
          </div>
          <div className="text-sm italic text-stone-600">Lesson 1</div>
        </div>
        <div className="min-w-0 flex-1 text-center">
          <div className="text-sm tracking-widest text-stone-700">
            Lí jiā de shíhou
          </div>
          <h1 className="ztai__zh font-serif text-3xl text-stone-900 sm:text-4xl">
            离家的时候
          </h1>
          <p className="font-serif text-lg italic text-stone-600">
            At the moment of leaving home
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Lesson01Layout({
  children,
  activeMenuId,
}: {
  children: React.ReactNode;
  activeMenuId?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <LayoutGrbt
        menuGrbt={lessonMenu}
        menuTitle="GTHNq5 - Bài 01"
        filename={activeMenuId}
      >
        <div className="w-full min-w-0">
          <Lesson01Header />
          {children}
        </div>
      </LayoutGrbt>
      <Footer />
      <StickyFloatingButtons />
    </div>
  );
}
