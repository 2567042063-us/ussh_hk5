"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { classNameActive, isMainNavActive, MAIN_NAV } from "@shared/constant";

import ThemeSwitch from "./ThemeSwitch";

export default function MainNav() {
  const currentRoute = usePathname();
  return (
    <div className="ml-auto hidden lg:flex lg:items-center">
      {MAIN_NAV.map((item) => {
        const isActive = isMainNavActive(currentRoute, item);
        const isHome = item.id === "home";
        return (
          <Link
            key={item.id}
            href={item.href}
            className={clsx(
              "relative ml-8",
              isHome
                ? "-top-0.5 flex-none font-semibold"
                : "border-b-[5px] text-lg font-light lowercase",
              !isHome && isActive
                ? classNameActive
                : !isHome &&
                    "border-transparent hover:text-sky-500 dark:hover:text-sky-300",
            )}
          >
            {isHome ? (
              <span className="bg-linear-to-r bg-size-[200%_auto] mb-20 animate-linear from-yellow-300 via-sky-400 to-yellow-300 bg-clip-text text-2xl font-bold text-transparent">
                NNT HK5
              </span>
            ) : (
              item.label
            )}
            {isActive && !isHome ? (
              <hr className="absolute -bottom-1 -left-1/4 h-px w-[150%] border-0 bg-gray-700 dark:bg-gray-300" />
            ) : (
              ""
            )}
          </Link>
        );
      })}
      <div className="flex lg:ml-8 lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8 dark:lg:border-slate-600">
        <ThemeSwitch />
      </div>
    </div>
  );
}
