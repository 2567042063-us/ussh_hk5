import Footer from "@shared/components/common/Footer";
import Header from "@shared/components/common/Header";
import LayoutGrbt from "@shared/components/common/LayoutGrbt";

const lessonMenu: IMenuGrbt = [
  { id: "vocab", title: "生词", href: "/gthnq5/lesson01/vocab" },
  { id: "text", title: "课文", href: "/gthnq5/lesson01/text" },
  {
    id: "translation",
    title: "翻译",
    href: "/gthnq5/lesson01/translation",
  },
  { id: "notes", title: "注释", href: "/gthnq5/lesson01/notes" },
  { id: "usage", title: "词语用法", href: "/gthnq5/lesson01/usage" },
  { id: "exercises", title: "Bài tập", href: "/gthnq5/lesson01/exercises" },
  {
    id: "supplementary",
    title: "Bài khoá phụ",
    href: "/gthnq5/lesson01/supplementary",
  },
];

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
        {children}
      </LayoutGrbt>
      <Footer />
    </div>
  );
}
