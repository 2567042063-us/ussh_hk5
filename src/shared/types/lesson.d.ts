interface LessonMenuItem {
  id: string;
  title: string;
  href: string;
}

interface LessonHeaderConfig {
  pinyin: string;
  ordinal: string;
  label: string;
  pronunciation: string;
  title: string;
  translation: string;
}

interface LessonConfig {
  id: string;
  title: string;
  basePath: string;
  header?: LessonHeaderConfig;
  menu?: LessonMenuItem[];
}
