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

const topMenus = [
  {
    id: "hk4",
    title: "Tổng hợp NP hk4",
    href: "/nguphap/tonghop-np-hk4",
  },
  { id: "overview", title: "Tổng hợp 2", href: "/nguphap/tonghop2" },
];

const menuGroups = [
  {
    id: "complement",
    title: "Bổ ngữ",
    menu: [
      {
        id: "state-complement",
        title: "Bổ ngữ trạng thái",
        href: "/nguphap/bo-ngu-trang-thai",
      },
      {
        id: "result-complement",
        title: "Bổ ngữ kết quả",
        href: "/nguphap/bo-ngu-ket-qua",
      },
    ],
  },
  {
    id: "particles",
    title: "Trợ từ",
    menu: [
      {
        id: "structural-particle",
        title: "Trợ từ kết cấu",
        href: "/nguphap/tro-tu-ket-cau",
      },
      {
        id: "aspect-particle",
        title: "Trợ từ động thái",
        href: "/nguphap/tro-tu-dong-thai",
      },
    ],
  },
];

export default function NguphapSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenuIds, setOpenMenuIds] = useState<string[]>(["complement"]);
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

  const collapseOnMobile = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      <div className="container mx-auto flex flex-1 overflow-x-clip px-3 md:px-0">
        <aside
          id={sidebarId}
          aria-label="Danh mục ngữ pháp tiếng Trung"
          aria-hidden={isCollapsed}
          inert={isCollapsed}
          className={`sticky top-0 shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out ${
            isCollapsed
              ? "h-0 w-0 md:h-[calc(100dvh-5rem)]"
              : "w-75 h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-5rem)]"
          }`}
        >
          <div
            className={`w-75 h-full transition-transform duration-300 ease-in-out ${
              isCollapsed ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="h-full overflow-y-auto rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
              <nav aria-label="Tổng hợp ngữ pháp">
                {topMenus.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700"
                  >
                    <Link
                      href={item.href}
                      prefetch={false}
                      onClick={collapseOnMobile}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={clsx(
                        "inline-block font-light text-sky-600 dark:text-sky-300",
                        pathname === item.href
                          ? classNameActive
                          : "hover:text-sky-700 dark:hover:text-sky-200",
                      )}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </nav>

              {menuGroups.map((group) => {
                const isOpen = openMenuIds.includes(group.id);
                const groupNavId = `${sidebarId}-${group.id}-nav`;

                return (
                  <section
                    key={group.id}
                    className="border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={groupNavId}
                      onClick={() =>
                        setOpenMenuIds((openIds) =>
                          isOpen
                            ? openIds.filter((id) => id !== group.id)
                            : [...openIds, group.id],
                        )
                      }
                      className="flex w-full items-center justify-between text-left font-light text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      <span>{group.title}</span>
                      <ChevronDown
                        aria-hidden="true"
                        size={16}
                        className={clsx("shrink-0 transition-transform", {
                          "rotate-180": !isOpen,
                        })}
                      />
                    </button>
                    <nav
                      id={groupNavId}
                      aria-label={group.title}
                      aria-hidden={!isOpen}
                      className={clsx(
                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-2">
                          {group.menu.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between gap-2 border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700"
                            >
                              <Link
                                href={item.href}
                                prefetch={false}
                                onClick={collapseOnMobile}
                                className="inline-block px-2 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
                              >
                                {item.title}
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
