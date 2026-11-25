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
    hanzi: "女士",
    pinyin: "nǚshì",
    pos: "名",
    vi: "quý bà; phu nhân",
    meaning: "lady; madam",
  },
  {
    no: 2,
    hanzi: "服务员",
    pinyin: "fúwùyuán",
    pos: "名",
    vi: "nhân viên phục vụ",
    meaning: "waiter/waitress; service staff",
  },
  {
    no: 3,
    hanzi: "长",
    pinyin: "zhǎng",
    pos: "动",
    vi: "trông; có vẻ ngoài",
    meaning: "to look; to appear",
  },
  {
    no: 4,
    hanzi: "样(子)",
    pinyin: "yàng(zi)",
    pos: "名",
    vi: "dáng vẻ; hình dáng 〔 bài hát 你的样子 Dáng em 〕",
    meaning: "appearance",
  },
  {
    no: 5,
    hanzi: "个子",
    pinyin: "gèzi",
    pos: "名",
    vi: "vóc dáng; chiều cao",
    meaning: "height; stature",
  },
  {
    no: 6,
    hanzi: "左右",
    pinyin: "zuǒyòu",
    pos: "名",
    vi: "khoảng; chừng (đặt sau số từ)",
    meaning: "about; or so (after a numeral)",
  },
  {
    no: 7,
    hanzi: "戴",
    pinyin: "dài",
    pos: "动",
    vi: "đeo (phụ kiện)",
    meaning: "to wear (accessories)",
  },
  {
    no: 8,
    hanzi: "着",
    pinyin: "zhe",
    pos: "助",
    vi: "đang; (trợ từ chỉ sự tiếp diễn của hành động hoặc trạng thái)",
    meaning: "indicating continuation of an action or state",
  },
  {
    no: 9,
    hanzi: "副",
    pinyin: "fù",
    pos: "量",
    vi: "cặp; bộ",
    meaning: "pair",
  },
  {
    no: 10,
    hanzi: "穿",
    pinyin: "chuān",
    pos: "动",
    vi: "mặc (quần áo)",
    meaning: "to wear (clothes)",
  },
  {
    no: 11,
    hanzi: "西服",
    pinyin: "xīfú",
    pos: "名",
    vi: "com-lê; bộ vest",
    meaning: "Western suit",
  },
  {
    no: 12,
    hanzi: "裙子",
    pinyin: "qúnzi",
    pos: "名",
    vi: "váy",
    meaning: "skirt",
  },
  {
    no: 13,
    hanzi: "干",
    pinyin: "gàn",
    pos: "动",
    vi: "làm",
    meaning: "to do",
  },
  {
    no: 14,
    hanzi: "主持人",
    pinyin: "zhǔchírén",
    pos: "名",
    vi: "người dẫn chương trình",
    meaning: "presenter; anchorperson",
  },
  {
    hanzi: "主持",
    pinyin: "zhǔchí",
    pos: "动",
    vi: "chủ trì; dẫn chương trình",
    meaning: "to host; to preside over",
  },
  {
    no: 15,
    hanzi: "小伙子",
    pinyin: "xiǎohuǒzi",
    pos: "名",
    vi: "chàng trai; thanh niên",
    meaning: "young man; lad",
  },
  {
    hanzi: "小伙儿",
    pinyin: "xiǎohuǒr",
    pos: "名",
    vi: "chàng trai; thanh niên",
    meaning: "young man; lad",
  },
  {
    no: 16,
    hanzi: "扛",
    pinyin: "káng",
    pos: "动",
    vi: "vác; khiêng (trên vai)",
    meaning: "to carry (on one's shoulder); to shoulder",
  },
  {
    no: 17,
    hanzi: "摄像机",
    pinyin: "shèxiàngjī",
    pos: "名",
    vi: "máy quay phim",
    meaning: "video camera",
  },
  {
    no: 18,
    hanzi: "会议厅",
    pinyin: "huìyìtīng",
    pos: "名",
    vi: "hội trường; phòng họp",
    meaning: "conference hall; assembly hall",
  },
  {
    hanzi: "厅",
    pinyin: "tīng",
    pos: "名",
    vi: "sảnh; đại sảnh",
    meaning: "hall",
  },
  {
    no: 19,
    hanzi: "麦克风",
    pinyin: "màikèfēng",
    pos: "名",
    vi: "micro",
    meaning: "microphone",
  },
  {
    no: 20,
    hanzi: "讲话",
    pinyin: "jiǎng huà",
    pos: "动",
    vi: "nói chuyện; phát biểu",
    meaning: "to speak; to talk",
  },
  {
    no: 21,
    hanzi: "婚礼",
    pinyin: "hūnlǐ",
    pos: "名",
    vi: "đám cưới; hôn lễ",
    meaning: "wedding",
  },
  {
    no: 22,
    hanzi: "热闹",
    pinyin: "rènao",
    pos: "形",
    vi: "náo nhiệt; sôi nổi",
    meaning: "lively; bustling",
  },
  {
    no: 23,
    hanzi: "挂",
    pinyin: "guà",
    pos: "动",
    vi: "treo; móc",
    meaning: "to hang",
  },
  {
    no: 24,
    hanzi: "灯笼",
    pinyin: "dēnglong",
    pos: "名",
    vi: "đèn lồng",
    meaning: "lantern",
  },
  {
    no: 25,
    hanzi: "墙",
    pinyin: "qiáng",
    pos: "名",
    vi: "tường",
    meaning: "wall",
  },
  {
    no: 26,
    hanzi: "双",
    pinyin: "shuāng",
    pos: "形",
    vi: "đôi; song",
    meaning: "two; double",
  },
  {
    no: 27,
    hanzi: "喜",
    pinyin: "xǐ",
    vi: "vui; mừng; (thuộc) hỷ",
    meaning: "happy; celebratory",
  },
  {
    no: 28,
    hanzi: "摆",
    pinyin: "bǎi",
    pos: "动",
    vi: "bày; đặt; sắp xếp",
    meaning: "to put; to place",
  },
  {
    no: 29,
    hanzi: "新娘",
    pinyin: "xīnniáng",
    pos: "名",
    vi: "cô dâu",
    meaning: "bride",
  },
  {
    no: 30,
    hanzi: "棉袄",
    pinyin: "mián'ǎo",
    pos: "名",
    vi: "áo bông",
    meaning: "cotton-padded jacket",
  },
  {
    no: 31,
    hanzi: "新郎",
    pinyin: "xīnláng",
    pos: "名",
    vi: "chú rể",
    meaning: "bridegroom",
  },
  {
    no: 32,
    hanzi: "帅",
    pinyin: "shuài",
    pos: "形",
    vi: "đẹp trai",
    meaning: "handsome",
  },
  {
    no: 33,
    hanzi: "系",
    pinyin: "jì",
    pos: "动",
    vi: "thắt; buộc",
    meaning: "to tie",
  },
  {
    no: 34,
    hanzi: "领带",
    pinyin: "lǐngdài",
    pos: "名",
    vi: "cà vạt",
    meaning: "necktie",
  },
  {
    no: 35,
    hanzi: "热情",
    pinyin: "rèqíng",
    pos: "形",
    vi: "nhiệt tình",
    meaning: "warm-hearted; enthusiastic",
  },
  {
    no: 36,
    hanzi: "客人",
    pinyin: "kèrén",
    pos: "名",
    vi: "khách",
    meaning: "guest",
  },
  {
    no: 37,
    hanzi: "倒",
    pinyin: "dào",
    pos: "动",
    vi: "rót",
    meaning: "to pour",
  },
  {
    no: 38,
    hanzi: "停",
    pinyin: "tíng",
    pos: "动",
    vi: "dừng; ngừng",
    meaning: "to stop",
  },
  {
    no: 39,
    hanzi: "气氛",
    pinyin: "qìfēn",
    pos: "名",
    vi: "không khí; bầu không khí",
    meaning: "atmosphere; ambience",
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
