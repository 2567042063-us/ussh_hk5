import type { Metadata } from "next";

import Lesson01Layout from "../Lesson01Layout";

export const metadata: Metadata = {
  title: "GTHN q5 - Bài 01 - 课文",
};

export default function KewenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Lesson01Layout activeMenuId="kewen">{children}</Lesson01Layout>
  );
}
