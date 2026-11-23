import MainNav from "./MainNav";
import MainNavMb from "./MainNavMb";

export default function Header() {
  return (
    <header className="z-5 relative w-full flex-none text-sm font-semibold leading-6">
      <nav aria-label="Global" className="container mx-auto">
        <div className="relative flex min-h-14 items-center px-3 py-2 md:min-h-20 md:px-0 md:py-5">
          <MainNav />
        </div>
        <MainNavMb />
      </nav>
    </header>
  );
}
