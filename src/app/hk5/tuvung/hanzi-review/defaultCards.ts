import { book4 } from "@shared/data/tuvung/vocabQ4";

export type CardSeed = {
  hanzi: string;
  pinyin: string;
  meaning: string;
  example?: string;
  day: number; // ngày bắt đầu học, tính từ hôm nay (0 = hôm nay)
};

// Từ thêm tay, luôn học ngay hôm nay.
const EXTRA_CARDS: Omit<CardSeed, "day">[] = [
  { hanzi: "售货员", pinyin: "shòuhuòyuán", meaning: "nhân viên bán hàng" },
  { hanzi: "纸箱", pinyin: "zhǐxiāng", meaning: "hộp giấy carton" },
  {
    hanzi: "京剧脸谱的小饰物",
    pinyin: "jīngjù liǎnpǔ de xiǎo shìwù",
    meaning: "đồ trang trí nhỏ của mặt nạ kinh kịch",
  },
  { hanzi: "丝织品", pinyin: "sīzhīpǐn", meaning: "sản phẩm dệt tơ lụa" },
  { hanzi: "钥匙链儿", pinyin: "yàoshi liàn'ér", meaning: "móc khóa" },
  { hanzi: "小熊猫", pinyin: "xiǎoxióngmāo", meaning: "gấu trúc đỏ" },
  { hanzi: "玩具", pinyin: "wánjù", meaning: "đồ chơi" },
  { hanzi: "舒服", pinyin: "shūfu", meaning: "thoải mái" },
  { hanzi: "电梯维修", pinyin: "diàntī wéixiù", meaning: "sửa chữa thang máy" },
];

// Từ vựng quyển 4: chia đều cho DAYS ngày, xếp theo số bài.
const DAYS = 5;
const lessonOf = (w: Word) =>
  Array.isArray(w.lesson) ? (w.lesson[0] ?? 0) : (w.lesson ?? 0);
const known = new Set(EXTRA_CARDS.map((c) => c.hanzi));
const book = book4
  .filter((w) => !known.has(w.hanzi))
  .sort((a, b) => lessonOf(a) - lessonOf(b));
const perDay = Math.ceil(book.length / DAYS);

// Tự được thêm vào danh sách nếu chưa có (so theo chữ Hán).
export const DEFAULT_CARDS: CardSeed[] = [
  ...EXTRA_CARDS.map((c) => ({ ...c, day: 0 })),
  ...book.map((w, i) => ({
    hanzi: w.hanzi,
    pinyin: w.pinyin,
    meaning: w.meanings.join("; "),
    example: w.examples[0]?.zh ?? "",
    day: Math.floor(i / perDay),
  })),
];
