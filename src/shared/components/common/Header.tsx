import Head from "next/head";

import MainNav from "./MainNav";
import MainNavMb from "./MainNavMb";

type Props = {
  title?: string;
  canonical?: string;
};

export default function Header({
  title = "nhỏ yêu quái bận tu luyện",
  canonical = "https://ussh-hk5-neon.vercel.app/",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonical} key="canonical" />
      </Head>
      <header className="z-5 relative w-full flex-none text-sm font-semibold leading-6">
        <nav aria-label="Global" className="container mx-auto">
          <div className="relative flex min-h-14 items-center px-3 py-2 md:min-h-20 md:px-0 md:py-5">
            <MainNav />
          </div>
          <MainNavMb />
        </nav>
      </header>
    </>
  );
}
