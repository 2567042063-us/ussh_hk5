import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dochieusc",
  alternates: {
    canonical: "/dochieusc",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
