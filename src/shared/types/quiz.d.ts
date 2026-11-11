type IMenuGrbt = {
  id: string;
  title: string;
  href: string;
  items?: Lesson;
}[];

//translate Việt -ZH
interface Sentence {
  zh: string;
  pinyin: string;
  vietnamese: string;
  /** HTML tùy ý, hiển thị sau khi kiểm tra. Chỉ dùng nội dung do bạn tự viết. */
  notes?: string;
  /** Tuỳ chọn: tên người nói (vd "Mary"), hiển thị phía trên câu tiếng Việt. */
  speaker?: string;
}

interface Lesson {
  id: string;
  title: string;
  items: Sentence[];
}
