import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { StoreProvider } from "@config/store-provider";
import ThemeProvider from "@config/theme-provider";

import "@shared/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "langlang",
  description: "𓇢𓆸𓋼𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊 studying chinese",
  metadataBase: new URL("https://ussh-hk5-neon.vercel.app/"),
  // openGraph: {
  //   images:
  //     "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706692565/avatar_2025_aywrf7.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <StoreProvider>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
    // </StoreProvider>
  );
}
