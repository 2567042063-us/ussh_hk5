"use client";

import { useTheme } from "next-themes";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";

import { MonitorIcon, MoonIcon, SunIcon } from "@shared/icons";

const THEME_OPTIONS = ["light", "dark", "system"] as const;
type ThemeOption = (typeof THEME_OPTIONS)[number];

const renderCurrentTheme = (theme: string | undefined) => {
  switch (theme) {
    case "light":
      return <SunIcon className="fill-sky-400/20 stroke-sky-500" />;
    case "dark":
      return <MoonIcon className="fill-sky-500" />;
    default:
      return <SunIcon className="fill-sky-400/20 stroke-sky-500" />;
  }
};

const renderThemeOptionIcon = (theme: ThemeOption, isSelected: boolean) => {
  const className = clsx(
    "mr-2 h-6 w-6",
    isSelected
      ? theme === "dark"
        ? "fill-sky-500"
        : "stroke-sky-500"
      : theme === "dark"
        ? "fill-slate-400 dark:fill-slate-300"
        : "stroke-slate-400 dark:stroke-slate-300",
  );

  switch (theme) {
    case "light":
      return <SunIcon className={className} />;
    case "dark":
      return <MoonIcon className={className} />;
    case "system":
      return <MonitorIcon className={className} />;
  }
};

interface Props {
  isMobile?: boolean;
}

const ThemeSwitch = ({ isMobile }: Props) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const selectedTheme =
    THEME_OPTIONS.find((option) => option === theme) ?? "system";

  if (isMobile) {
    return (
      <div className="flex items-center justify-between font-normal">
        <span className="text-sm uppercase text-slate-500 dark:text-slate-400">
          Switch theme
        </span>
        <div className="flex">
          {THEME_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              aria-label={`Set theme to ${option}`}
              aria-pressed={selectedTheme === option}
              onClick={() => setTheme(option)}
              className="ml-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {renderThemeOptionIcon(option, selectedTheme === option)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:mr-8 lg:flex">
      <Popover className="relative flex items-center">
        <PopoverButton
          aria-label="Choose theme"
          className="rounded outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {renderCurrentTheme(resolvedTheme)}
        </PopoverButton>
        <PopoverPanel className="dark:highlight-white/5 absolute -right-5 top-2 z-10 mt-7 w-28 overflow-hidden rounded-lg bg-white py-1 text-sm font-light text-slate-700 shadow-xl ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0">
          <ul className="w-full">
            {THEME_OPTIONS.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  aria-pressed={selectedTheme === option}
                  onClick={() => setTheme(option)}
                  className={clsx(
                    "flex w-full cursor-pointer items-center py-1 pl-4 pr-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700",
                    {
                      "text-sky-500 dark:text-sky-400":
                        selectedTheme === option,
                    },
                  )}
                >
                  {renderThemeOptionIcon(option, selectedTheme === option)}
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default ThemeSwitch;
