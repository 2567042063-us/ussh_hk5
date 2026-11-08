import Head from "next/head";
import Link from "next/link";

import MainNav from "./MainNav";
import MainNavMb from "./MainNavMb";

type Props = {
  title?: string;
  canonical?: string;
};

export default function Header({
  title = "nhỏ yêu quái bận tu luyện",
  canonical = "https://levutrangdai.id.vn",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonical} key="canonical" />
      </Head>
      <header className="z-5 relative w-full flex-none text-sm font-semibold leading-6">
        <nav aria-label="Global" className="container mx-auto">
          <div className="relative flex items-center px-3 py-2 md:px-0 md:py-5">
            <Link className="flex-none font-semibold" href="/">
              <span className="bg-linear-to-r bg-size-[200%_auto] mb-20 animate-linear from-yellow-300 via-sky-400 to-yellow-300 bg-clip-text text-4xl font-bold text-transparent">
                ussh hk5
              </span>
            </Link>
            <MainNav />
          </div>
          <MainNavMb />
        </nav>
      </header>
    </>
  );
}
