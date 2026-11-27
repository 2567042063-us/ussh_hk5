"use client";

import { useState } from "react";

import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

const P = [
  [
    [
      "半年前,我临来中国时,朋友们一起{1|为}我过了一次生日。",
      "Bànnián qián, wǒ lín lái Zhōngguó shí, péngyoumen yìqǐ wèi wǒ guò le yí cì shēngrì.",
      "Nửa năm trước, lúc sắp đến Trung Quốc, bạn bè cùng nhau tổ chức sinh nhật cho tôi một lần.",
    ],
    [
      "当时,最让我难忘的是,大家送给我一个戒指,上面刻{2|着}一句话:“我们都爱你。”",
      "Dāngshí, zuì ràng wǒ nánwàng de shì, dàjiā sòng gěi wǒ yí ge jièzhi, shàngmiàn kè zhe yí jù huà: “Wǒmen dōu ài nǐ.”",
      "Lúc đó, điều khiến tôi khó quên nhất là mọi người tặng tôi một chiếc nhẫn, bên trên khắc một câu: “Chúng mình đều yêu cậu.”",
    ],
    [
      "看到这句话,我的眼泪一下子就流了{3|出来}。",
      "Kàndào zhè jù huà, wǒ de yǎnlèi yíxiàzi jiù liú le chūlái.",
      "Nhìn thấy câu này, nước mắt tôi chảy ra ngay lập tức.",
    ],
    [
      "想到就要和朋友们分别了,我真有点儿恋恋不舍。",
      "Xiǎngdào jiùyào hé péngyoumen fēnbié le, wǒ zhēn yǒudiǎnr liànliànbùshě.",
      "Nghĩ đến việc sắp phải chia tay các bạn, tôi thật sự có chút lưu luyến không rời.",
    ],
    [
      "但是,来中国留学的手续已经办好了,我只好与朋友分别,坐{4|上}了飞往中国的飞机。",
      "Dànshì, lái Zhōngguó liúxué de shǒuxù yǐjīng bàn hǎo le, wǒ zhǐhǎo yǔ péngyou fēnbié, zuò shàng le fēi wǎng Zhōngguó de fēijī.",
      "Nhưng thủ tục đi du học Trung Quốc đã làm xong, tôi đành chia tay bạn bè, lên chuyến bay đến Trung Quốc.",
    ],
  ],
  [
    [
      "一个人来到异国他乡,{5|到处}都是陌生的,一切都感到不习惯。",
      "Yí ge rén láidào yìguó tāxiāng, dàochù dōu shì mòshēng de, yíqiè dōu gǎndào bù xíguàn.",
      "Một mình đến nơi đất khách quê người, đâu đâu cũng xa lạ, mọi thứ đều thấy không quen.",
    ],
    [
      "但是到中国不久,我就认识了不少新朋友。",
      "Dànshì dào Zhōngguó bù jiǔ, wǒ jiù rènshi le bù shǎo xīn péngyou.",
      "Nhưng đến Trung Quốc không lâu, tôi đã quen được khá nhiều bạn mới.",
    ],
    [
      "可以说,我能一直坚持学习到现在,除了国内的朋友支持我、帮助我、鼓励我以外,更重要的是因为有了这些新朋友。",
      "Kěyǐ shuō, wǒ néng yìzhí jiānchí xuéxí dào xiànzài, chúle guónèi de péngyou zhīchí wǒ, bāngzhù wǒ, gǔlì wǒ yǐwài, gèng zhòngyào de shì yīnwèi yǒu le zhèxiē xīn péngyou.",
      "Có thể nói, tôi kiên trì học được đến bây giờ, ngoài việc bạn bè trong nước ủng hộ, giúp đỡ, động viên tôi, điều quan trọng hơn là nhờ có những người bạn mới này.",
    ],
    [
      "{6|如果}没有她们,我在中国的生活会是非常孤独和寂寞的。",
      "Rúguǒ méiyǒu tāmen, wǒ zài Zhōngguó de shēnghuó huì shì fēicháng gūdú hé jìmò de.",
      "Nếu không có họ, cuộc sống của tôi ở Trung Quốc sẽ vô cùng cô độc và cô đơn.",
    ],
  ],
  [
    [
      "刚到中国一个月,我{7|突然}生病住进了医院。",
      "Gāng dào Zhōngguó yí ge yuè, wǒ tūrán shēngbìng zhù jìn le yīyuàn.",
      "Mới đến Trung Quốc được một tháng, tôi đột nhiên bị ốm và phải nhập viện.",
    ],
    [
      "在医院里,我感到非常寂寞,十分后悔到中国来。",
      "Zài yīyuàn lǐ, wǒ gǎndào fēicháng jìmò, shífēn hòuhuǐ dào Zhōngguó lái.",
      "Ở bệnh viện, tôi cảm thấy vô cùng cô đơn, rất hối hận vì đã đến Trung Quốc.",
    ],
    [
      "正在我感到非常孤独和寂寞时,我遇到了一位热心的中国大学生。",
      "Zhèngzài wǒ gǎndào fēicháng gūdú hé jìmò shí, wǒ yùdào le yí wèi rèxīn de Zhōngguó dàxuéshēng.",
      "Đúng lúc tôi cảm thấy vô cùng cô độc và cô đơn, tôi gặp một bạn sinh viên Trung Quốc rất nhiệt tình.",
    ],
    [
      "{8|她}与我同住一个病房,每天都邀请我一起下楼去吃饭、散步。",
      "Tā yǔ wǒ tóng zhù yí ge bìngfáng, měitiān dōu yāoqǐng wǒ yìqǐ xià lóu qù chīfàn, sànbù.",
      "Cô ấy ở chung phòng bệnh với tôi, ngày nào cũng rủ tôi cùng xuống lầu ăn cơm, đi dạo.",
    ],
    [
      "我觉得心情一下子好多了。",
      "Wǒ juéde xīnqíng yíxiàzi hǎo duō le.",
      "Tôi cảm thấy tâm trạng bỗng chốc tốt lên nhiều.",
    ],
    [
      "晚上,有时医院里还组织联欢会,每次大家都邀请我唱一支我们国家的歌。",
      "Wǎnshang, yǒushí yīyuàn lǐ hái zǔzhī liánhuānhuì, měi cì dàjiā dōu yāoqǐng wǒ chàng yì zhī wǒmen guójiā de gē.",
      "Buổi tối, đôi khi bệnh viện còn tổ chức liên hoan, lần nào mọi người cũng mời tôi hát một bài hát của nước mình.",
    ],
    [
      "虽然我唱得不太好,但是大家听了都给我鼓掌,让我很感动。",
      "Suīrán wǒ chàng de bú tài hǎo, dànshì dàjiā tīng le dōu gěi wǒ gǔzhǎng, ràng wǒ hěn gǎndòng.",
      "Tuy tôi hát không hay lắm, nhưng nghe xong mọi người đều vỗ tay cho tôi, khiến tôi rất cảm động.",
    ],
    [
      "在病房里,这位朋友还教我学汉语,成了我的辅导老师。",
      "Zài bìngfáng lǐ, zhè wèi péngyou hái jiāo wǒ xué Hànyǔ, chéng le wǒ de fǔdǎo lǎoshī.",
      "Trong phòng bệnh, bạn ấy còn dạy tôi học tiếng Trung, trở thành gia sư của tôi.",
    ],
    [
      "{9|在}她的帮助下,我的功课并没有因为住院而落下。",
      "Zài tā de bāngzhù xià, wǒ de gōngkè bìng méiyǒu yīnwèi zhùyuàn ér là xià.",
      "Nhờ sự giúp đỡ của bạn ấy, bài vở của tôi không hề bị bỏ lỡ vì nằm viện.",
    ],
  ],
  [
    [
      "出院后,朋友还邀请我到她家玩儿,她的父母像对自己的女儿一样对待我,使我感到就像回到了自己家一样。",
      "Chūyuàn hòu, péngyou hái yāoqǐng wǒ dào tā jiā wánr, tā de fùmǔ xiàng duì zìjǐ de nǚ’ér yíyàng duìdài wǒ, shǐ wǒ gǎndào jiù xiàng huí dào le zìjǐ jiā yíyàng.",
      "Sau khi xuất viện, bạn còn mời tôi đến nhà chơi, bố mẹ bạn đối xử với tôi như con gái ruột, khiến tôi cảm thấy như được về nhà mình vậy.",
    ],
    [
      "认识了朋友这一家人,{10|使}我对中国、对中国人有了更多的了解。",
      "Rènshi le péngyou zhè yì jiārén, shǐ wǒ duì Zhōngguó, duì Zhōngguórén yǒu le gèng duō de liǎojiě.",
      "Quen được gia đình của bạn, khiến tôi hiểu thêm nhiều về Trung Quốc và người Trung Quốc.",
    ],
  ],
];

const C = [
  [
    "A",
    "老师,我想去中国学汉语。",
    "Lǎoshī, wǒ xiǎng qù Zhōngguó xué Hànyǔ.",
    "Thưa thầy, em muốn đến Trung Quốc học tiếng Trung.",
  ],
  [
    "B",
    "好啊!手续办好了吗?",
    "Hǎo a! Shǒuxù bàn hǎo le ma?",
    "Tốt quá! Thủ tục đã làm xong chưa?",
  ],
  [
    "A",
    "还没有呢。我想请教老师,几月去比较好?",
    "Hái méiyǒu ne. Wǒ xiǎng qǐngjiào lǎoshī, jǐ yuè qù bǐjiào hǎo?",
    "Vẫn chưa ạ. Em muốn hỏi thầy, đi vào tháng mấy thì tốt hơn ạ?",
  ],
  [
    "B",
    "你准备学多长时间?",
    "Nǐ zhǔnbèi xué duō cháng shíjiān?",
    "Em dự định học bao lâu?",
  ],
  ["A", "一年。", "Yì nián.", "Một năm ạ."],
  [
    "B",
    "如果只学一年的话,还是从九月开始比较好。因为中国学校的新学年是从九月开始的。",
    "Rúguǒ zhǐ xué yì nián de huà, háishi cóng jiǔ yuè kāishǐ bǐjiào hǎo. Yīnwèi Zhōngguó xuéxiào de xīn xuénián shì cóng jiǔ yuè kāishǐ de.",
    "Nếu chỉ học một năm thì nên bắt đầu từ tháng chín. Vì năm học mới của trường Trung Quốc bắt đầu từ tháng chín.",
  ],
  [
    "A",
    "我去以后读二年级可以吗?",
    "Wǒ qù yǐhòu dú èr niánjí kěyǐ ma?",
    "Sau khi đến, em học năm hai có được không ạ?",
  ],
  [
    "B",
    "根据你的情况,我想,最好从一年级开始,先把语音和语法基础打好了,对你今后的学习会更好。",
    "Gēnjù nǐ de qíngkuàng, wǒ xiǎng, zuìhǎo cóng yī niánjí kāishǐ, xiān bǎ yǔyīn hé yǔfǎ jīchǔ dǎ hǎo le, duì nǐ jīnhòu de xuéxí huì gèng hǎo.",
    "Dựa vào tình hình của em, thầy nghĩ tốt nhất nên bắt đầu từ năm nhất, trước hết xây vững nền tảng ngữ âm và ngữ pháp, sẽ tốt hơn cho việc học sau này của em.",
  ],
];

const supplementaryTranslation = {
  id: "gthnq5-lesson01-supplementary-consultation",
  // title: "Dịch Việt – Trung · 请教 Consultation",
  items: C.map(([speaker, zh, pinyin, vietnamese]) => ({
    speaker,
    zh,
    pinyin,
    vietnamese,
  })),
};

const supplementaryTextTranslation = {
  id: "gthnq5-lesson01-supplementary-text",
  title: "补充课文 · trang 42",
  items: P.flat().map(([zh, pinyin, vietnamese]) => ({
    zh: zh.replace(/\{\d+\|([^}]+)\}/g, "$1"),
    pinyin,
    vietnamese,
  })),
};

// [no, word, pinyin, pos, hán việt, meaning, usage, ex zh, ex py, ex vi, synonyms, related]
const V = [
  [
    1,
    "戒指",
    "jièzhi",
    "名",
    "GIỚI CHỈ",
    "nhẫn · (finger) ring",
    "Lượng từ: 个 / 枚 / 只",
    "他送了她一个钻石戒指。",
    "Tā sòng le tā yí ge zuànshí jièzhi.",
    "Anh ấy tặng cô ấy một chiếc nhẫn kim cương.",
    "指环 zhǐhuan: nhẫn (văn viết, trang trọng hơn)",
    "戒 jiè: bỏ, cai (戒烟) · 指 zhǐ: ngón tay, chỉ",
  ],
  [
    2,
    "刻",
    "kè",
    "动",
    "KHẮC",
    "khắc, chạm · to carve; to engrave",
    "Tân ngữ: 字 / 名字 / 图案 · 在…上刻…",
    "他在戒指上刻了我的名字。",
    "Tā zài jièzhi shàng kè le wǒ de míngzi.",
    "Anh ấy khắc tên tôi lên chiếc nhẫn.",
    "雕 diāo / 雕刻 diāokè: chạm trổ (thiên về nghệ thuật điêu khắc)",
    "刻 còn là lượng từ: 一刻钟 = 15 phút",
  ],
  [
    3,
    "分别",
    "fēnbié",
    "动",
    "PHÂN BIỆT",
    "chia tay, từ biệt · to say goodbye",
    "与 / 和 + người + 分别 · 分别了 + thời gian",
    "毕业以后,我们就要分别了。",
    "Bìyè yǐhòu, wǒmen jiùyào fēnbié le.",
    "Sau khi tốt nghiệp, chúng tôi sắp phải chia tay.",
    "告别 gàobié: từ biệt (có đối tượng) · 离别 líbié: li biệt (văn viết, giàu cảm xúc) · 分手 fēnshǒu: chia tay (hay dùng cho người yêu)",
    "分别 (副) còn nghĩa “riêng biệt, lần lượt”: 分别介绍",
  ],
  [
    4,
    "异国他乡",
    "yìguó tāxiāng",
    "成语",
    "DỊ QUỐC THA HƯƠNG",
    "đất khách quê người · country other than one’s motherland",
    "Hay dùng: 在异国他乡 + sống / học / làm việc",
    "他一个人在异国他乡生活了十年。",
    "Tā yí ge rén zài yìguó tāxiāng shēnghuó le shí nián.",
    "Anh ấy sống một mình nơi đất khách quê người mười năm.",
    "异乡 yìxiāng · 外乡 wàixiāng: nơi khác, xa quê · (trái nghĩa) 故乡 gùxiāng: quê hương",
    "异国 yìguó: nước ngoài · 他乡 tāxiāng: quê người",
  ],
  [
    5,
    "鼓励",
    "gǔlì",
    "动",
    "CỔ LỆ",
    "động viên, khích lệ · to encourage",
    "Tân ngữ: 学生 / 孩子 / 我 · 鼓励 + người + V",
    "老师鼓励我们多说汉语。",
    "Lǎoshī gǔlì wǒmen duō shuō Hànyǔ.",
    "Cô giáo khích lệ chúng tôi nói tiếng Hán nhiều hơn.",
    "鼓舞 gǔwǔ: cổ vũ, làm phấn chấn (tinh thần tập thể) · 激励 jīlì: thúc đẩy mạnh · 勉励 miǎnlì: khuyên nhủ (trang trọng, người trên với người dưới)",
    "励 lì: gắng sức (励志) · 鼓 gǔ: trống, vỗ (鼓掌)",
  ],
  [
    6,
    "孤独",
    "gūdú",
    "形",
    "CÔ ĐỘC",
    "cô độc, lẻ loi · lonely; alone",
    "Hay đi với: 感到 / 觉得 + 孤独 · 很孤独 · 孤独的人",
    "住院的时候,我觉得很孤独。",
    "Zhù yuàn de shíhou, wǒ juéde hěn gūdú.",
    "Lúc nằm viện, tôi cảm thấy rất cô độc.",
    "孤单 gūdān: lẻ loi, khẩu ngữ, nhẹ hơn · 寂寞 jìmò: cô đơn, buồn chán vì không có người bầu bạn · 孤零零 gūlínglíng: trơ trọi",
    "独 dú: một mình (独自, 独生子女)",
  ],
  [
    7,
    "后悔",
    "hòuhuǐ",
    "动",
    "HẬU HỐI",
    "hối hận · to regret",
    "后悔 + V (+ 了) · 后悔 + 没 V · 很/十分后悔",
    "我很后悔没有好好学习。",
    "Wǒ hěn hòuhuǐ méiyǒu hǎohāo xuéxí.",
    "Tôi rất hối hận vì đã không học hành chăm chỉ.",
    "懊悔 àohuǐ: hối hận, ân hận (văn viết) · 悔恨 huǐhèn: hối hận sâu sắc · 遗憾 yíhàn: tiếc nuối (không nhất thiết do lỗi mình)",
    "悔 huǐ: hối · 后 hòu: sau",
  ],
  [
    8,
    "落",
    "là",
    "动",
    "LẠC",
    "bị bỏ lại, tụt lại · to fall behind",
    "Tân ngữ: 功课 / 课 / 进度 · 落下 + tân ngữ",
    "他生病请假,落下了很多功课。",
    "Tā shēngbìng qǐngjià, là xià le hěn duō gōngkè.",
    "Cậu ấy ốm xin nghỉ nên bỏ lỡ rất nhiều bài vở.",
    "拉下 lā xià (khẩu ngữ): bỏ sót, để lỡ · 落后 luòhòu: tụt hậu (tính chất, trạng thái)",
    "Đọc luò: rơi, rụng (落叶 / 落雨) · Đọc là: bỏ sót, để quên (落下 / 丢三落四)",
  ],
];

function Zh({ s }) {
  return s.split(/(\{[^}]+\})/).map((p, i) => {
    const m = p.match(/^\{(\d+)\|(.+)\}$/);
    if (!m) return <span key={i}>{p}</span>;
    return (
      <mark key={i} className="mx-0.5 rounded bg-yellow-50 px-1 text-sky-700">
        <sup className="mr-0.5 text-[10px] text-gray-500">{m[1]}</sup>
        {m[2]}
      </mark>
    );
  });
}

function Sent({ zh, py, vi, all, who }) {
  const [o, setO] = useState(false);
  const show = all || o;
  return (
    <div
      onClick={() => setO(!o)}
      className={
        "mb-1 cursor-pointer transition " +
        (show ? "bg-slate-50" : "hover:bg-stone-50")
      }
    >
      <div className="ztai__zh text-xl leading-9 text-gray-900">
        {who && <span className="mr-2 text-sky-700">{who}:</span>}
        <Zh s={zh} />
      </div>
      {show && (
        <div className="mt-1 text-sm">
          <div className="text-sky-700">{py}</div>
          <div className="text-gray-500">{vi}</div>
        </div>
      )}
    </div>
  );
}

function Toggle({ all, setAll }) {
  return (
    <button
      onClick={() => setAll(!all)}
      className="mb-3 rounded-full border border-sky-300 px-3 py-1 text-sm text-sky-700 hover:bg-sky-50"
    >
      {all ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
    </button>
  );
}

export default function Lesson1BaiKhoaPhu() {
  const [tab, setTab] = useState(0);
  const [all, setAll] = useState(false);
  const tabs = ["课文", "生词", "请教 Consultation", "Dịch Việt – Trung"];
  return (
    <div className="mx-auto p-4">
      <h1 className="ztai__zh text-2xl text-gray-800">
        第一课 离家的时候 · 补充课文
      </h1>
      <p className="mb-4 text-sm text-gray-500">
        汉语教程 (第3版) 第三册 上 · Bài khoá phụ
      </p>
      <div className="mb-4 flex flex-wrap gap-2 border-b border-stone-100">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={
              "rounded-t-lg px-4 py-1.5 text-sm font-medium " +
              (tab === i
                ? "bg-sky-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200")
            }
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div>
          <h2 className="mb-1 text-lg font-bold">
            综合填空 · Bài 9 (đã điền đáp án)
          </h2>
          {/* <p className="mb-2 text-xs text-gray-500">
            Bấm vào từng câu để xem pinyin + tiếng Việt. Đáp án được tô vàng.
          </p> */}
          <Toggle all={all} setAll={setAll} />
          {P.map((para, i) => (
            <div key={i} className="mb-3">
              {para.map((s, j) => (
                <Sent key={j} zh={s[0]} py={s[1]} vi={s[2]} all={all} />
              ))}
            </div>
          ))}
        </div>
      )}

      {tab === 1 && (
        <div>
          <h2 className="mb-3 text-lg font-bold">
            补充生词 · Supplementary words
          </h2>
          <div className="space-y-4">
            {V.map((v) => (
              <div
                key={v[0]}
                className="overflow-hidden rounded-xl border border-stone-200"
              >
                <div className="flex items-center gap-4 bg-gray-50 px-4 py-3">
                  <span className="w-5 text-sm text-gray-400">{v[0]}</span>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">{v[2]}</div>
                    <div className="ztai__zh text-5xl">{v[1]}</div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">({v[3]})</span>{" "}
                    <span className="font-bold text-stone-700">{v[4]}</span>
                    <div className="text-gray-800">{v[5]}</div>
                  </div>
                </div>
                <div className="space-y-2 px-4 py-3 text-sm">
                  <div>
                    <span className="font-semibold">Cách dùng:</span> {v[6]}
                  </div>
                  <div className="rounded-lg bg-sky-50 p-2">
                    <div className="text-lg">{v[7]}</div>
                    <div className="ztai__py text-sky-700">{v[8]}</div>
                    <div className="text-slate-700">{v[9]}</div>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Từ đồng nghĩa / gần nghĩa:
                    </span>{" "}
                    {v[10]}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Mở rộng:</span> {v[11]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 2 && (
        <>
          <div>
            <h2 className="mb-1 text-lg font-bold">
              交际会话 · 请教 (1) Consultation (1)
            </h2>
            {/* <p className="mb-2 text-xs text-gray-500">
              Bấm vào từng câu để xem pinyin + tiếng Việt.
            </p> */}
            <Toggle all={all} setAll={setAll} />
            {C.map((c, i) => (
              <Sent
                key={i}
                who={c[0]}
                zh={c[1]}
                py={c[2]}
                vi={c[3]}
                all={all}
              />
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-white p-0 shadow dark:bg-slate-700">
            <p className="pt-6 text-lg font-bold uppercase">
              <span className="border-l-4 border-stone-600 px-4 text-stone-600">
                luyện tập dịch
              </span>
            </p>
            <TranslationQuiz lesson={supplementaryTranslation} />
          </div>
        </>
      )}

      {tab === 3 && <TranslationQuiz lesson={supplementaryTextTranslation} />}
    </div>
  );
}
