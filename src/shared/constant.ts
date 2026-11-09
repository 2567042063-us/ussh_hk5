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
  // {
  //   id: "nguphap",
  //   label: "Ngữ Pháp",
  //   href: "/nguphap",
  // },
  // {
  //   id: "about",
  //   label: "About",
  //   href: "/about",
  // },
];

// fileName === filename ? classNameActive : "",
export const classNameActive =
  "bg-linear-to-r bg-size-[160%_auto] cursor-default border-yellow-400 from-yellow-400 via-sky-500 to-yellow-400 bg-clip-text text-transparent";
