"use client";

import { useId, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

import { classNameActive } from "@shared/constant";

interface LayoutGrbtProps {
  children: React.ReactNode;
  menuTitle?: string;
  menuGrbt: IMenuGrbt;
  filename?: string;
}

export default function LayoutGrbt({
  children,
  menuTitle,
  menuGrbt,
  filename,
}: LayoutGrbtProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuId = useId();
  const alwaysVisibleMenus = menuGrbt.filter((menu) =>
    ["tu-dien", "hanzi-review"].includes(menu.id),
  );
  const collapsedMenus = menuGrbt.filter(
    (menu) => !["tu-dien", "hanzi-review"].includes(menu.id),
  );

  return (
    <div className="container mx-auto flex flex-1 flex-col gap-3 md:flex-row">
      <div
        id="hamburger-menu-collapse"
        className="md:w-50 flex flex-col gap-1.5 rounded-sm md:shrink-0"
      >
        {alwaysVisibleMenus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            prefetch={false}
            className={clsx(
              "inline-block border-b border-dashed border-cyan-800/20 px-5 py-1.5 text-slate-500 dark:text-sky-400",
              menu.id === filename
                ? classNameActive
                : "hover:text-yellow-500 dark:hover:text-yellow-300",
            )}
          >
            {menu.title}
          </Link>
        ))}
        <div
          className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
        >
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex w-full items-center justify-between text-left text-sky-600 dark:text-sky-300"
          >
            <span>⭑.ᐟ {menuTitle}</span>
            <ChevronDown
              aria-hidden="true"
              size={16}
              className={clsx("shrink-0 transition-transform", {
                "rotate-180": !isMenuOpen,
              })}
            />
          </button>
        </div>
        <div id={menuId} hidden={!isMenuOpen}>
          {collapsedMenus.map((menu) => (
            <div
              key={menu.id}
              className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={menu.href}
                prefetch={false}
                className={clsx(
                  "inline-block px-5 text-slate-500 dark:text-sky-400",
                  menu.id === filename
                    ? classNameActive
                    : "hover:text-yellow-500 dark:hover:text-yellow-300",
                )}
              >
                {menu.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full min-w-0 flex-1 flex-col gap-1.5 pl-0 md:pl-5">
        {children}
      </div>
    </div>
  );
}
