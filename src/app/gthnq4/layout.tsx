import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hk5",
  alternates: {
    canonical: "/hk5",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
