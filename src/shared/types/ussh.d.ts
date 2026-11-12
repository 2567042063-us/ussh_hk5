interface PageMeta {
  title: string;
  description?: string;
  titleseo?: string;
}

interface CustomIframeProps {
  actualHtmlFilename: string;
  meta: { title: string };
  className?: string; // ClassName tùy chọn cho khung iframe
  head?: React.ReactNode; // Nội dung tùy chỉnh muốn chèn vào <head> của iframe
  cssPath?: string; // Đường dẫn file CSS muốn import (ví dụ: '/styles/iframe.css')
}

// vocal?
interface VocabExample {
  zh: string;
  py: string;
  vi: string;
  added?: boolean;
}

interface VocabWord {
  hanzi: string;
  pinyin: string;
  pos: string; // loại từ
  meanings: string[]; // nghĩa tiếng Việt
  usage?: string; // giải thích cách dùng
  examples: VocabExample[];
}
