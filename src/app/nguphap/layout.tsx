import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngữ pháp tiếng Trung",
  alternates: {
    canonical: "/nguphap",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
