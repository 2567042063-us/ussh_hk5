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
    hanzi: "品尝",
    pinyin: "pǐncháng",
    pos: "动",
    vi: "nếm thử; thưởng thức",
    meaning: "to taste",
  },
  {
    no: 2,
    hanzi: "特色",
    pinyin: "tèsè",
    pos: "名",
    vi: "nét đặc sắc; đặc trưng",
    meaning: "salient feature; hallmark",
  },
  {
    no: 3,
    hanzi: "班长",
    pinyin: "bānzhǎng",
    pos: "名",
    vi: "lớp trưởng",
    meaning: "class monitor",
  },
  {
    no: 4,
    hanzi: "把",
    pinyin: "bǎ",
    pos: "介",
    vi: "đem; mang (đưa tân ngữ lên trước động từ, là đối tượng chịu tác động của hành động)",
    meaning:
      "used when the object is placed before the verb and is the recipient of the action",
  },
  {
    no: 5,
    hanzi: "亲手",
    pinyin: "qīnshǒu",
    pos: "副",
    vi: "tự tay; đích thân",
    meaning: "with one's own hands; in person",
  },
  {
    no: 6,
    hanzi: "最好",
    pinyin: "zuìhǎo",
    pos: "副",
    vi: "tốt nhất là; nên",
    meaning: "had better; it would be best",
  },
  {
    no: 7,
    hanzi: "它",
    pinyin: "tā",
    pos: "代",
    vi: "nó (chỉ vật, con vật)",
    meaning: "it",
  },
  {
    no: 8,
    hanzi: "布置",
    pinyin: "bùzhì",
    pos: "动",
    vi: "bố trí; bày biện; trang trí",
    meaning: "to fix up; to arrange; to decorate",
  },
  {
    no: 9,
    hanzi: "会场",
    pinyin: "huìchǎng",
    pos: "名",
    vi: "hội trường; nơi tổ chức",
    meaning: "meeting venue",
  },
  {
    no: 10,
    hanzi: "管理员",
    pinyin: "guǎnlǐyuán",
    pos: "名",
    vi: "người quản lý; nhân viên quản lý",
    meaning: "custodian; manager",
  },
  {
    hanzi: "管理",
    pinyin: "guǎnlǐ",
    pos: "动",
    vi: "quản lý",
    meaning: "to manage",
  },
  {
    no: 11,
    hanzi: "告诉",
    pinyin: "gàosu",
    pos: "动",
    vi: "nói cho biết; báo cho biết",
    meaning: "to tell; to inform; to let know",
  },
  {
    no: 12,
    hanzi: "答应",
    pinyin: "dāying",
    pos: "动",
    vi: "đồng ý; nhận lời",
    meaning: "to agree; to permit",
  },
  {
    no: 13,
    hanzi: "打扫",
    pinyin: "dǎsǎo",
    pos: "动",
    vi: "quét dọn; dọn dẹp",
    meaning: "to sweep; to clean",
  },
  {
    no: 14,
    hanzi: "窗户",
    pinyin: "chuānghu",
    pos: "名",
    vi: "cửa sổ",
    meaning: "window",
  },
  {
    hanzi: "窗",
    pinyin: "chuāng",
    pos: "名",
    vi: "cửa sổ",
    meaning: "window",
  },
  {
    no: 15,
    hanzi: "擦",
    pinyin: "cā",
    pos: "动",
    vi: "lau; chùi",
    meaning: "to wipe; to rub",
  },
  {
    no: 16,
    hanzi: "桌子",
    pinyin: "zhuōzi",
    pos: "名",
    vi: "cái bàn",
    meaning: "table; desk",
  },
  {
    no: 17,
    hanzi: "圆圈(儿)",
    pinyin: "yuánquānr",
    pos: "名",
    vi: "vòng tròn",
    meaning: "circle; ring",
  },
  {
    no: 18,
    hanzi: "黑板",
    pinyin: "hēibǎn",
    pos: "名",
    vi: "bảng đen",
    meaning: "blackboard",
  },
  {
    no: 19,
    hanzi: "音响",
    pinyin: "yīnxiǎng",
    pos: "名",
    vi: "dàn âm thanh; hệ thống loa",
    meaning: "stereo system",
  },
  {
    no: 20,
    hanzi: "彩灯",
    pinyin: "cǎidēng",
    pos: "名",
    vi: "đèn màu",
    meaning: "colored light/lamp",
  },
  {
    no: 21,
    hanzi: "彩带",
    pinyin: "cǎidài",
    pos: "名",
    vi: "dải ruy băng màu; dây trang trí màu",
    meaning: "colored ribbon/streamer",
  },
  {
    no: 22,
    hanzi: "份",
    pinyin: "fèn",
    pos: "量",
    vi: "phần; suất (lượng từ)",
    meaning: "share; portion; part",
  },
  {
    no: 23,
    hanzi: "惊喜",
    pinyin: "jīngxǐ",
    pos: "名",
    vi: "niềm vui bất ngờ; sự bất ngờ thú vị",
    meaning: "pleasant surprise",
  },
  {
    no: 24,
    hanzi: "幅",
    pinyin: "fú",
    pos: "量",
    vi: "bức (lượng từ dùng cho tranh, thư pháp…)",
    meaning: "a measure word for paintings, calligraphy works, etc.",
  },
  {
    no: 25,
    hanzi: "水仙",
    pinyin: "shuǐxiān",
    pos: "名",
    vi: "hoa thủy tiên",
    meaning: "narcissus",
  },
  {
    no: 26,
    hanzi: "开",
    pinyin: "kāi",
    pos: "动",
    vi: "nở (hoa)",
    meaning: "to bloom",
  },
  {
    no: 27,
    hanzi: "福",
    pinyin: "fú",
    pos: "名",
    vi: "phúc; hạnh phúc; may mắn",
    meaning: "happiness; good fortune; blessing",
  },
  {
    no: 28,
    hanzi: "字",
    pinyin: "zì",
    pos: "名",
    vi: "chữ; chữ Hán",
    meaning: "word; character",
  },
  {
    no: 29,
    hanzi: "对联(儿)",
    pinyin: "duìliánr",
    pos: "名",
    vi: "câu đối",
    meaning: "antithetical couplet",
  },
  {
    no: 30,
    hanzi: "新春",
    pinyin: "xīnchūn",
    pos: "名",
    vi: "đầu xuân; xuân mới; Tết Nguyên đán và những ngày sau đó",
    meaning: "(new) spring; Lunar New Year and the following days",
  },
  {
    no: 31,
    hanzi: "吉祥",
    pinyin: "jíxiáng",
    pos: "形",
    vi: "cát tường; may mắn",
    meaning: "auspicious; lucky",
  },
  {
    no: 32,
    hanzi: "行业",
    pinyin: "hángyè",
    pos: "名",
    vi: "ngành nghề",
    meaning: "trade; profession",
  },
  {
    no: 33,
    hanzi: "兴旺",
    pinyin: "xīngwàng",
    pos: "形",
    vi: "hưng vượng; thịnh vượng",
    meaning: "prosperous",
  },
  {
    no: 34,
    hanzi: "哦",
    pinyin: "ò",
    pos: "叹",
    vi: "ồ; à (biểu thị vỡ lẽ, hiểu ra)",
    meaning: "(expressing realization or understanding) oh",
  },
  {
    no: 35,
    hanzi: "可不是",
    pinyin: "kěbúshì",
    pos: "副",
    vi: "đúng vậy; chứ còn gì nữa (biểu thị đồng tình)",
    meaning: "(expressing agreement) right; exactly",
  },
  {
    no: 36,
    hanzi: "仔细",
    pinyin: "zǐxì",
    pos: "形",
    vi: "tỉ mỉ; kỹ lưỡng; cẩn thận",
    meaning: "careful; attentive",
  },
  {
    no: 37,
    hanzi: "幸福",
    pinyin: "xìngfú",
    pos: "名、形",
    vi: "hạnh phúc; sung sướng, may mắn",
    meaning: "happiness; happy; fortunate",
  },
  {
    no: 38,
    hanzi: "倒",
    pinyin: "dào",
    pos: "动",
    vi: "lộn ngược; đảo ngược",
    meaning: "to invert; to turn upside down",
  },
  {
    no: 39,
    hanzi: "声音",
    pinyin: "shēngyīn",
    pos: "名",
    vi: "âm thanh; tiếng; giọng",
    meaning: "sound; voice",
  },
  {
    no: 40,
    hanzi: "椅子",
    pinyin: "yǐzi",
    pos: "名",
    vi: "cái ghế",
    meaning: "chair",
  },
  {
    no: 41,
    hanzi: "沙发",
    pinyin: "shāfā",
    pos: "名",
    vi: "ghế sofa",
    meaning: "sofa",
  },
  {
    no: 42,
    hanzi: "冰箱",
    pinyin: "bīngxiāng",
    pos: "名",
    vi: "tủ lạnh",
    meaning: "refrigerator",
  },
  {
    no: 43,
    hanzi: "洗衣机",
    pinyin: "xǐyījī",
    pos: "名",
    vi: "máy giặt",
    meaning: "washing machine",
  },
  {
    no: 44,
    hanzi: "空调",
    pinyin: "kōngtiáo",
    pos: "名",
    vi: "máy điều hòa",
    meaning: "air conditioner",
  },
  {
    no: 1,
    hanzi: "李美英",
    pinyin: "Lǐ Měiyīng",
    pos: "专名",
    vi: "Lý Mỹ Anh (tên người)",
    meaning: "Li Meiying, name of a person",
  },
  {
    no: 2,
    hanzi: "安娜",
    pinyin: "Ānnà",
    pos: "专名",
    vi: "Anna (tên người)",
    meaning: "Anna",
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
