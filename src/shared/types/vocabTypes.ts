// vocabTypes.ts — kiểu dữ liệu + hàm viết tắt dùng chung cho mọi bộ từ vựng <<chỉ trong data>>.

// Loại từ (dùng làm tên nhóm)
export const N = "danh từ";
export const V = "động từ";
export const A = "tính từ";
export const D = "phó từ";
export const P = "giới từ";
export const R = "đại từ";
export const Q = "lượng từ";
export const NU = "số từ";
export const T = "trợ từ";
export const C = "liên từ";
export const I = "thán từ";
export const O = "từ tượng thanh";
export const M = "động từ năng nguyện";
export const X = "cụm từ"; // cụm từ & cấu trúc ngữ pháp
export const PN = "tên riêng";
export const PRE = "tiền tố";
export const SUF = "hậu tố";
// e(...) = một ví dụ
export const e = (zh: string, py: string, vi: string): Example => ({
  zh,
  py,
  vi,
});

// w(...) = một từ.  Nhiều nghĩa ngăn bằng " | ".  ex có thể là 1 ví dụ hoặc mảng ví dụ.
export const w = (
  hanzi: string,
  pinyin: string,
  pos: string,
  meaning: string,
  lesson?: number | number[],
  ex?: Example | Example[],
  usage?: string,
): Word => ({
  hanzi,
  pinyin,
  pos,
  meanings: meaning.split(" | "),
  lesson,
  usage,
  examples: Array.isArray(ex) ? ex : ex ? [ex] : [],
});
