export const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL;

const prefixStorageKey = "portfolio_2024";
export const LOCAL_STORAGE_KEY = {
  accessToken: `${prefixStorageKey}_access_token`,
  currentUser: `${prefixStorageKey}_current_user`,
  version: `${prefixStorageKey}_version`, // not-use
  uiTheme: `${prefixStorageKey}_theme`,
};

export const MAIN_NAV = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "hk5",
    label: "HK5",
    href: "/hk5",
  },
  {
    id: "nguphap",
    label: "Ngữ Pháp",
    href: "/nguphap",
  },
  {
    id: "baitap",
    label: "Bài Tập",
    href: "/hk5/baitap",
  },
  {
    id: "gthnq4",
    label: "GTHNq4",
    href: "/gthnq4/lesson14/vocab",
  },
  {
    id: "gthnq5",
    label: "GTHNq5",
    href: "/gthnq5/lesson01/vocab",
  },
  // {
  //   id: "about",
  //   label: "About",
  //   href: "/about",
  // },
];

export const isMainNavActive = (
  pathname: string,
  item: { id: string; href: string },
) =>
  pathname === item.href ||
  (item.id === "nguphap" && pathname.startsWith(`${item.href}/`)) ||
  (item.id === "gthnq4" && pathname.startsWith("/gthnq4/")) ||
  (item.id === "gthnq5" && pathname.startsWith("/gthnq5"));

// fileName === filename ? classNameActive : "",
export const classNameActive =
  "bg-linear-to-r bg-size-[160%_auto] cursor-default border-yellow-400 from-yellow-400 via-sky-500 to-yellow-400 bg-clip-text text-transparent";
