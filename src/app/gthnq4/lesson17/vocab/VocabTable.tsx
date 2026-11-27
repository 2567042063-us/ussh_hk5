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
    hanzi: "越来越",
    pinyin: "yuèláiyuè",
    vi: "ngày càng",
    meaning: "more and more; increasingly",
  },
  {
    no: 2,
    hanzi: "打的",
    pinyin: "dǎ dī",
    pos: "动",
    vi: "đi taxi; bắt taxi",
    meaning: "to take a taxi",
  },
  {
    no: 3,
    hanzi: "空",
    pinyin: "kōng",
    pos: "形",
    vi: "trống; rỗng",
    meaning: "vacant; unoccupied",
  },
  {
    no: 4,
    hanzi: "四合院(儿)",
    pinyin: "sìhéyuànr",
    pos: "名",
    vi: "tứ hợp viện (nhà quây quanh sân vuông kiểu truyền thống)",
    meaning:
      "quadrangle, a traditional residential compound with houses around a square courtyard",
  },
  {
    no: 5,
    hanzi: "院子",
    pinyin: "yuànzi",
    pos: "名",
    vi: "sân; sân vườn",
    meaning: "yard; courtyard",
  },
  {
    no: 6,
    hanzi: "种",
    pinyin: "zhòng",
    pos: "动",
    vi: "trồng",
    meaning: "to plant; to grow",
  },
  {
    no: 7,
    hanzi: "棵",
    pinyin: "kē",
    pos: "量",
    vi: "cây; gốc (lượng từ dùng cho cây cối)",
    meaning: "a measure word for plants, etc.",
  },
  {
    no: 8,
    hanzi: "枣",
    pinyin: "zǎo",
    pos: "名",
    vi: "táo tàu",
    meaning: "jujube; (Chinese) date",
  },
  {
    no: 9,
    hanzi: "结",
    pinyin: "jiē",
    pos: "动",
    vi: "kết (quả); ra (quả)",
    meaning: "to bear (fruit)",
  },
  {
    no: 10,
    hanzi: "尝",
    pinyin: "cháng",
    pos: "动",
    vi: "nếm",
    meaning: "to taste",
  },
  {
    no: 11,
    hanzi: "甜",
    pinyin: "tián",
    pos: "形",
    vi: "ngọt",
    meaning: "sweet",
  },
  {
    no: 12,
    hanzi: "越……越……",
    pinyin: "yuè……yuè……",
    vi: "càng…càng…",
    meaning: "the more... the more...",
  },
  {
    no: 13,
    hanzi: "盖",
    pinyin: "gài",
    pos: "动",
    vi: "xây; cất",
    meaning: "to construct; to build",
  },
  {
    no: 14,
    hanzi: "住宅",
    pinyin: "zhùzhái",
    pos: "名",
    vi: "nhà ở; chỗ ở",
    meaning: "residence; dwelling",
  },
  {
    no: 15,
    hanzi: "小区",
    pinyin: "xiǎoqū",
    pos: "名",
    vi: "khu dân cư; khu chung cư",
    meaning: "residential complex; housing estate",
  },
  {
    no: 16,
    hanzi: "建",
    pinyin: "jiàn",
    pos: "动",
    vi: "xây dựng",
    meaning: "to build; to construct",
  },
  {
    no: 17,
    hanzi: "搬",
    pinyin: "bān",
    pos: "动",
    vi: "dọn; chuyển (nhà); khuân",
    meaning: "to move",
  },
  {
    no: 18,
    hanzi: "遗憾",
    pinyin: "yíhàn",
    pos: "形",
    vi: "tiếc; đáng tiếc",
    meaning: "sorry; regretful",
  },
  {
    no: 19,
    hanzi: "舍不得",
    pinyin: "shěbude",
    pos: "动",
    vi: "luyến tiếc; không nỡ",
    meaning: "to be loath to use or part with; to grudge",
  },
  {
    no: 20,
    hanzi: "离开",
    pinyin: "líkāi",
    pos: "动",
    vi: "rời khỏi; rời đi",
    meaning: "to leave",
  },
  {
    no: 21,
    hanzi: "现代化",
    pinyin: "xiàndàihuà",
    pos: "动",
    vi: "hiện đại hóa",
    meaning: "to modernize",
  },
  {
    no: 22,
    hanzi: "随便",
    pinyin: "suíbiàn",
    pos: "形",
    vi: "tùy tiện; thoải mái; tùy ý",
    meaning: "casual; informal",
  },
  {
    no: 23,
    hanzi: "感想",
    pinyin: "gǎnxiǎng",
    pos: "名",
    vi: "cảm tưởng; suy nghĩ",
    meaning: "impressions; thoughts",
  },
  {
    no: 24,
    hanzi: "体会",
    pinyin: "tǐhuì",
    pos: "动、名",
    vi: "thể hội; thấu hiểu; cảm nhận",
    meaning: "to know from experience; understanding; feeling",
  },
  {
    no: 25,
    hanzi: "意见",
    pinyin: "yìjiàn",
    pos: "名",
    vi: "ý kiến; điều bất bình",
    meaning: "opinion; complaint",
  },
  {
    no: 26,
    hanzi: "建议",
    pinyin: "jiànyì",
    pos: "名、动",
    vi: "đề nghị; kiến nghị; góp ý",
    meaning: "advice; suggestion; to advise; to suggest",
  },
  {
    no: 27,
    hanzi: "提",
    pinyin: "tí",
    pos: "动",
    vi: "nêu ra; đưa ra",
    meaning: "to raise; to bring up",
  },
  {
    no: 28,
    hanzi: "出门",
    pinyin: "chū mén",
    pos: "动",
    vi: "ra khỏi nhà; ra ngoài",
    meaning: "to go out; to leave home",
  },
  {
    no: 29,
    hanzi: "人们",
    pinyin: "rénmen",
    pos: "名",
    vi: "mọi người; người ta",
    meaning: "people",
  },
  {
    no: 30,
    hanzi: "丰富",
    pinyin: "fēngfù",
    pos: "形",
    vi: "phong phú",
    meaning: "rich; plentiful",
  },
  {
    no: 31,
    hanzi: "打扮",
    pinyin: "dǎban",
    pos: "动",
    vi: "ăn diện; trang điểm",
    meaning: "to dress up; to make up",
  },
  {
    no: 32,
    hanzi: "新年",
    pinyin: "xīnnián",
    pos: "名",
    vi: "năm mới; Tết Dương lịch",
    meaning: "new year; New Year's Day",
  },
  {
    no: 33,
    hanzi: "圣诞树",
    pinyin: "shèngdànshù",
    pos: "名",
    vi: "cây thông Noel",
    meaning: "Christmas tree",
  },
  {
    no: 34,
    hanzi: "装饰",
    pinyin: "zhuāngshì",
    pos: "动、名",
    vi: "trang trí; đồ trang trí",
    meaning: "to decorate; decoration",
  },
  {
    no: 35,
    hanzi: "礼物",
    pinyin: "lǐwù",
    pos: "名",
    vi: "quà; quà tặng",
    meaning: "present; gift",
  },
  {
    no: 36,
    hanzi: "欢乐",
    pinyin: "huānlè",
    pos: "形",
    vi: "vui vẻ; hân hoan",
    meaning: "happy; joyous",
  },
  {
    no: 37,
    hanzi: "节日",
    pinyin: "jiérì",
    pos: "名",
    vi: "ngày lễ; lễ hội",
    meaning: "festival; holiday",
  },
  {
    no: 38,
    hanzi: "开",
    pinyin: "kāi",
    pos: "动",
    vi: "tổ chức (họp, hội nghị…); mở",
    meaning: "to hold (a meeting, symposium, etc.)",
  },
  {
    no: 39,
    hanzi: "联欢会",
    pinyin: "liánhuānhuì",
    pos: "名",
    vi: "liên hoan; buổi giao lưu",
    meaning: "get-together; party",
  },
  {
    no: 1,
    hanzi: "圣诞节",
    pinyin: "Shèngdàn Jié",
    pos: "专名",
    vi: "Lễ Giáng sinh; Noel",
    meaning: "Christmas",
  },
  {
    hanzi: "圣诞",
    pinyin: "Shèngdàn",
    pos: "专名",
    vi: "Giáng sinh",
    meaning: "Christmas",
  },
  {
    no: 2,
    hanzi: "春节",
    pinyin: "Chūnjié",
    pos: "专名",
    vi: "Tết Nguyên đán (mùng một tháng Giêng âm lịch)",
    meaning:
      "Spring Festival, the first day of the first month in the Chinese lunar calendar",
  },
];

export default function VocabTable() {
  return (
    <div className="overflow-x-auto rounded-sm border border-stone-300 bg-white dark:border-stone-700 dark:bg-stone-800">
      <table className="w-full text-left text-sm">
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
