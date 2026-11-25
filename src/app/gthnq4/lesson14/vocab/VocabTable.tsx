type Word = {
  no?: number;
  hanzi: string;
  pinyin: string;
  pos?: string;
  vi: string;
  meaning: string;
};

const words: Word[] = [
  {
    no: 1,
    hanzi: "图书城",
    pinyin: "túshūchéng",
    pos: "名",
    vi: "siêu thị sách",
    meaning: "bookstore complex; book city",
  },
  {
    hanzi: "图书",
    pinyin: "túshū",
    pos: "名",
    vi: "sách, sách báo",
    meaning: "books; books and periodicals",
  },
  {
    no: 3,
    hanzi: "进去",
    pinyin: "jìnqu",
    pos: "动",
    vi: "đi vào, vào",
    meaning: "to go in",
  },
  {
    no: 4,
    hanzi: "另",
    pinyin: "lìng",
    pos: "代",
    vi: "khác",
    meaning: "other; another",
  },
  {
    hanzi: "另外",
    pinyin: "lìngwài",
    pos: "代",
    vi: "khác, ngoài ra",
    meaning: "in addition; besides",
  },
  {
    no: 6,
    hanzi: "各种各样",
    pinyin: "gèzhǒng gèyàng",
    pos: "形",
    vi: "các loại, đủ loại",
    meaning: "all kinds of; various",
  },
  {
    hanzi: "各",
    pinyin: "gè",
    pos: "代",
    vi: "các",
    meaning: "each; every",
  },
  {
    hanzi: "样",
    pinyin: "yàng",
    pos: "量",
    vi: "loại",
    meaning: "kind; type",
  },
  {
    no: 9,
    hanzi: "兴奋",
    pinyin: "xīngfèn",
    pos: "形",
    vi: "thích thú, hào hứng, vui vẻ",
    meaning: "excited",
  },
  {
    no: 10,
    hanzi: "书架",
    pinyin: "shūjià",
    pos: "名",
    vi: "giá sách, kệ sách",
    meaning: "bookshelf",
  },
  {
    no: 11,
    hanzi: "下来",
    pinyin: "xiàlai",
    pos: "趋向补语",
    vi: "xuống",
    meaning: "(directional complement) down",
  },
  {
    no: 12,
    hanzi: "抽",
    pinyin: "chōu",
    pos: "动",
    vi: "rút, kéo, lôi, hút",
    meaning: "to take out; to pull out; to smoke",
  },
  {
    no: 13,
    hanzi: "挑",
    pinyin: "tiāo",
    pos: "动",
    vi: "chọn, lựa",
    meaning: "to choose; to pick",
  },
  {
    no: 14,
    hanzi: "小说(儿)",
    pinyin: "xiǎoshuō(r)",
    pos: "名",
    vi: "tiểu thuyết",
    meaning: "novel",
  },
  {
    no: 15,
    hanzi: "放寒假",
    pinyin: "fàng hánjià",
    pos: "动词短语",
    vi: "nghỉ đông",
    meaning: "to have winter vacation",
  },
  {
    hanzi: "放",
    pinyin: "fàng",
    pos: "动",
    vi: "nghỉ",
    meaning: "to let out (school); to start a vacation",
  },
  {
    hanzi: "寒假",
    pinyin: "hánjià",
    pos: "名",
    vi: "kỳ nghỉ đông",
    meaning: "winter vacation",
  },
  {
    hanzi: "暑假",
    pinyin: "shǔjià",
    pos: "名",
    vi: "kỳ nghỉ hè",
    meaning: "summer vacation",
  },
  {
    no: 19,
    hanzi: "回去",
    pinyin: "huíqu",
    pos: "趋向补语",
    vi: "về, quay về",
    meaning: "to go back",
  },
  {
    no: 20,
    hanzi: "除了……以外",
    pinyin: "chúle…yǐwài",
    pos: "介词结构",
    vi: "ngoài…ra, trừ…ra",
    meaning: "besides…; except…",
  },
  {
    no: 21,
    hanzi: "礼品",
    pinyin: "lǐpǐn",
    pos: "名",
    vi: "quà, quà biếu, lễ vật",
    meaning: "gift; present",
  },
  {
    no: 22,
    hanzi: "于是",
    pinyin: "yúshì",
    pos: "连",
    vi: "thế là, thế nên",
    meaning: "so; thereupon",
  },
  {
    no: 23,
    hanzi: "商场",
    pinyin: "shāngchǎng",
    pos: "名",
    vi: "trung tâm thương mại",
    meaning: "shopping mall; market",
  },
  {
    no: 24,
    hanzi: "商品",
    pinyin: "shāngpǐn",
    pos: "名",
    vi: "mặt hàng, hàng hóa",
    meaning: "goods; commodity",
  },
  {
    no: 25,
    hanzi: "脸谱",
    pinyin: "liǎnpǔ",
    pos: "名",
    vi: "mặt nạ Kinh kịch, hình vẽ mặt (Kinh kịch)",
    meaning: "facial makeup in Peking opera",
  },
  {
    no: 26,
    hanzi: "饰物",
    pinyin: "shìwù",
    pos: "名",
    vi: "đồ trang trí, vật trang trí",
    meaning: "ornament; accessory",
  },
  {
    no: 27,
    hanzi: "丝织品",
    pinyin: "sīzhīpǐn",
    pos: "名",
    vi: "hàng dệt tơ",
    meaning: "silk fabrics",
  },
  {
    no: 28,
    hanzi: "钥匙链(儿)",
    pinyin: "yàoshiliàn(r)",
    pos: "名",
    vi: "móc chìa khóa",
    meaning: "key chain",
  },
  {
    no: 29,
    hanzi: "玩具",
    pinyin: "wánjù",
    pos: "名",
    vi: "đồ chơi",
    meaning: "toy",
  },
  {
    no: 30,
    hanzi: "熊猫",
    pinyin: "xióngmāo",
    pos: "名",
    vi: "gấu trúc",
    meaning: "panda",
  },
  {
    no: 31,
    hanzi: "肯定",
    pinyin: "kěndìng",
    pos: "副",
    vi: "chắc chắn, nhất định",
    meaning: "definitely; certainly",
  },
  {
    no: 32,
    hanzi: "售货员",
    pinyin: "shòuhuòyuán",
    pos: "名",
    vi: "nhân viên bán hàng",
    meaning: "shop assistant; salesperson",
  },
  {
    no: 33,
    hanzi: "纸箱",
    pinyin: "zhǐxiāng",
    pos: "名",
    vi: "thùng giấy",
    meaning: "cardboard box; carton",
  },
  {
    hanzi: "纸",
    pinyin: "zhǐ",
    pos: "名",
    vi: "giấy",
    meaning: "paper",
  },
  {
    no: 35,
    hanzi: "饭馆(儿)",
    pinyin: "fànguǎn(r)",
    pos: "名",
    vi: "quán ăn, nhà hàng",
    meaning: "restaurant",
  },
  {
    no: 36,
    hanzi: "盘",
    pinyin: "pán",
    pos: "量",
    vi: "đĩa, khay, mâm",
    meaning: "plate; dish (measure word)",
  },
  {
    no: 37,
    hanzi: "累",
    pinyin: "lèi",
    pos: "形",
    vi: "mệt",
    meaning: "tired",
  },
  {
    no: 38,
    hanzi: "困",
    pinyin: "kùn",
    pos: "形",
    vi: "buồn ngủ",
    meaning: "sleepy",
  },
  {
    no: 39,
    hanzi: "电梯",
    pinyin: "diàntī",
    pos: "名",
    vi: "thang máy",
    meaning: "elevator; lift",
  },
  {
    no: 40,
    hanzi: "维修",
    pinyin: "wéixiū",
    pos: "动",
    vi: "sửa chữa, bảo dưỡng",
    meaning: "to repair; to maintain",
  },
  {
    hanzi: "修",
    pinyin: "xiū",
    pos: "动",
    vi: "sửa, sửa chữa",
    meaning: "to repair; to fix",
  },
  {
    no: 42,
    hanzi: "楼梯",
    pinyin: "lóutī",
    pos: "名",
    vi: "cầu thang bộ",
    meaning: "stairs; staircase",
  },
  {
    no: 43,
    hanzi: "只好",
    pinyin: "zhǐhǎo",
    pos: "副",
    vi: "đành phải, chỉ còn cách",
    meaning: "have no choice but to; can only",
  },
  {
    no: 44,
    hanzi: "提",
    pinyin: "tí",
    pos: "动",
    vi: "xách, nhấc",
    meaning: "to carry (by hand); to lift",
  },
  {
    no: 45,
    hanzi: "步",
    pinyin: "bù",
    pos: "名",
    vi: "bước, bước chân",
    meaning: "step; pace",
  },
  {
    no: 46,
    hanzi: "钥匙",
    pinyin: "yàoshi",
    pos: "名",
    vi: "chìa khóa",
    meaning: "key",
  },
  {
    no: 47,
    hanzi: "却",
    pinyin: "què",
    pos: "副",
    vi: "nhưng, tuy vậy, lại",
    meaning: "but; yet; however",
  },
  {
    no: 48,
    hanzi: "忽然",
    pinyin: "hūrán",
    pos: "副",
    vi: "bỗng nhiên, đột nhiên",
    meaning: "suddenly",
  },
  {
    no: 49,
    hanzi: "起来",
    pinyin: "qǐlai",
    pos: "趋向补语",
    vi: "dùng sau động từ, biểu thị bắt đầu hoặc trạng thái/động tác được hình thành (tùy ngữ cảnh)",
    meaning:
      "(directional complement) indicating the beginning of an action or state",
  },
  {
    no: 50,
    hanzi: "插",
    pinyin: "chā",
    pos: "动",
    vi: "cắm, gài, cài",
    meaning: "to insert; to stick in",
  },
  {
    no: 51,
    hanzi: "拔",
    pinyin: "bá",
    pos: "动",
    vi: "rút, nhổ",
    meaning: "to pull out; to pull up",
  },
  {
    no: 52,
    hanzi: "哭笑不得",
    pinyin: "kūxiào bùdé",
    pos: "成语",
    vi: "dở khóc dở cười",
    meaning: "not know whether to laugh or cry (idiom)",
  },
  {
    no: 53,
    hanzi: "串(儿)",
    pinyin: "chuàn(r)",
    pos: "量",
    vi: "chùm, chuỗi, xâu",
    meaning: "string; bunch (measure word)",
  },
];

export default function VocabTable() {
  return (
    <div className="overflow-x-auto rounded-sm border border-stone-300 bg-white dark:border-stone-700 dark:bg-stone-800">
      <table className="w-full text-left text-sm">
        {/* <thead className="bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-200">
          <tr>
            <th className="px-2 py-2 font-medium">#</th>
            <th className="px-3 py-2 font-medium">Hán tự</th>
            <th className="px-3 py-2 font-medium">Pinyin</th>
            <th className="px-3 py-2 font-medium">Loại từ</th>
            <th className="px-3 py-2 font-medium">Nghĩa tiếng Việt</th>
            <th className="px-3 py-2 font-medium">Nghĩa (English)</th>
          </tr>
        </thead> */}
        <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
          {words.map((w, i) => (
            <tr
              key={i}
              className="hover:bg-stone-50 dark:hover:bg-stone-700/50"
            >
              <td className="px-2 py-2 text-stone-400">{w.no}</td>
              <td className="ztai__zh whitespace-nowrap px-3 py-2 text-2xl font-medium">
                {w.hanzi}
              </td>
              <td className="ztai__py whitespace-nowrap px-3 py-2 text-stone-600">
                {w.pinyin}
              </td>
              <td className="px-3 py-2 text-stone-500 dark:text-stone-400">
                {w.pos}
              </td>
              <td className="px-3 py-2">{w.vi}</td>
              <td className="px-3 py-2 text-stone-500 dark:text-stone-400">
                {w.meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
