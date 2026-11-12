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
interface Example {
  zh: string;
  py: string;
  vi: string;
  added?: boolean; // true = hiện nhãn "thêm" cạnh ví dụ
}

interface Word {
  hanzi: string;
  pinyin: string;
  pos: string; // loại từ; nếu nhiều loại thì cách nhau bằng " / " (loại đầu tiên dùng để nhóm)
  meanings: string[];
  lesson?: number | number[]; // bài học (nếu có)
  usage?: string; // giải thích cách dùng
  examples: Example[];
}
