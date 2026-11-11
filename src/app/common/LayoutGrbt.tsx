import Link from "next/link";
import clsx from "clsx";

import { classNameActive } from "@shared/constant";

interface LayoutGrbtProps {
  children: React.ReactNode;
  menuGrbt: IMenuGrbt;
  filename?: string;
}

export default function LayoutGrbt({
  children,
  menuGrbt,
  filename,
}: LayoutGrbtProps) {
  return (
    <div className="container mx-auto flex flex-1 flex-col gap-3 md:flex-row">
      <div className="md:w-50 flex flex-col gap-1.5 rounded-sm md:shrink-0">
        {menuGrbt.map((menu) => (
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
      <div className="flex w-full flex-1 flex-col gap-1.5 pl-0 md:pl-5">
        {children}
      </div>
    </div>
  );
}
