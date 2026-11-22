export type LessonMenuItem = {
  id: string;
  title: string;
  href: string;
};

export type LessonHeaderConfig = {
  pinyin: string;
  ordinal: string;
  label: string;
  pronunciation: string;
  title: string;
  translation: string;
};

export type LessonConfig = {
  id: string;
  title: string;
  basePath: string;
  header?: LessonHeaderConfig;
  menu: LessonMenuItem[];
};
