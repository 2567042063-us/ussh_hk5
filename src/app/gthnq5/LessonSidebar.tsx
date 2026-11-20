"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  ArrowUp,
  ChevronDown,
  SquareArrowLeftExit,
  SquareArrowRightExit,
} from "lucide-react";

import { classNameActive } from "@shared/constant";

import type { LessonConfig } from "./lessons/types";

export default function LessonSidebar({
  children,
  lesson,
  lessons,
}: {
  children: React.ReactNode;
  lesson: LessonConfig;
  lessons: LessonConfig[];
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openLessonIds, setOpenLessonIds] = useState<string[]>([lesson.id]);
  const sidebarId = useId();
  const pathname = usePathname();

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 767px)");

    const updateCollapsedState = () => setIsCollapsed(mobileMedia.matches);

    updateCollapsedState();
    mobileMedia.addEventListener("change", updateCollapsedState);

    return () =>
      mobileMedia.removeEventListener("change", updateCollapsedState);
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-1 overflow-hidden px-3 md:px-0">
        <aside
          id={sidebarId}
          aria-label="Danh mục các bài GTHNq5"
          aria-hidden={isCollapsed}
          inert={isCollapsed}
          className={`relative shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out ${
            isCollapsed ? "w-0" : "w-75"
          }`}
        >
          <div
            className={`w-75 h-full transition-transform duration-300 ease-in-out ${
              isCollapsed ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="h-full rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
              {lessons.map((item) => {
                const isNavOpen = openLessonIds.includes(item.id);
                const itemNavId = `${sidebarId}-${item.id}-nav`;

                return (
                  <section
                    key={item.id}
                    className="border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700"
                  >
                    <button
                      type="button"
                      aria-expanded={isNavOpen}
                      aria-controls={itemNavId}
                      onClick={() =>
                        setOpenLessonIds((openIds) =>
                          isNavOpen
                            ? openIds.filter((id) => id !== item.id)
                            : [...openIds, item.id],
                        )
                      }
                      className="flex w-full items-center justify-between text-left font-light text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      <span>⭑.ᐟ {item.title}</span>
                      <ChevronDown
                        aria-hidden="true"
                        size={16}
                        className={clsx("shrink-0 transition-transform", {
                          "rotate-180": !isNavOpen,
                        })}
                      />
                    </button>
                    <nav
                      id={itemNavId}
                      aria-label={`Danh mục ${item.title}`}
                      aria-hidden={!isNavOpen}
                      className={clsx(
                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                        isNavOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-2">
                          {item.menu.map((menu) => (
                            <div
                              key={menu.id}
                              className="flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700"
                            >
                              <Link
                                href={menu.href}
                                prefetch={false}
                                onClick={() => {
                                  if (
                                    window.matchMedia("(max-width: 767px)")
                                      .matches
                                  ) {
                                    setIsCollapsed(true);
                                  }
                                }}
                                aria-current={
                                  pathname === menu.href ? "page" : undefined
                                }
                                tabIndex={isNavOpen ? 0 : -1}
                                className={clsx(
                                  "inline-block px-2 text-slate-500 dark:text-sky-400",
                                  pathname === menu.href
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
                    </nav>
                  </section>
                );
              })}
            </div>
          </div>
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:left-6">
        <button
          type="button"
          aria-label={isCollapsed ? "Mở rộng thanh bên" : "Thu gọn thanh bên"}
          aria-expanded={!isCollapsed}
          aria-controls={sidebarId}
          onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
        >
          {isCollapsed ? (
            <SquareArrowRightExit aria-hidden="true" size={18} />
          ) : (
            <SquareArrowLeftExit aria-hidden="true" size={18} />
          )}
        </button>
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
        >
          <ArrowUp aria-hidden="true" size={18} />
        </button>
      </div>
    </>
  );
}
