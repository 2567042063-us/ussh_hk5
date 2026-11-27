"use client";

import { useState } from "react";

// ===== DỮ LIỆU TỪ bai17.html =====

// 9. Tình huống: [câu hỏi, pinyin, nghĩa, [gợi ý, pinyin, nghĩa]]
const T9 = [
  [
    "你买了一幅画儿，想挂在屋子里，怎么和家人商量挂在什么地方？",
    "Nǐ mǎi le yì fú huàr, xiǎng guà zài wūzi li, zěnme hé jiārén shāngliang guà zài shénme dìfang?",
    "Bạn mua một bức tranh, muốn treo trong nhà, nói thế nào để bàn với gia đình treo ở chỗ nào?",
    [
      "我想把这幅画儿挂在客厅里，你们觉得怎么样？",
      "Wǒ xiǎng bǎ zhè fú huàr guà zài kètīng li, nǐmen juéde zěnmeyàng?",
      "Con muốn treo bức tranh này trong phòng khách, mọi người thấy sao?",
    ],
  ],
  [
    "你想借你同学的手机用一下儿，怎么对他说？",
    "Nǐ xiǎng jiè nǐ tóngxué de shǒujī yòng yíxiàr, zěnme duì tā shuō?",
    "Bạn muốn mượn điện thoại của bạn học dùng một chút, nói thế nào?",
    [
      "你能把手机借给我用一下儿吗？",
      "Nǐ néng bǎ shǒujī jiè gěi wǒ yòng yíxiàr ma?",
      "Cậu cho mình mượn điện thoại dùng một chút được không?",
    ],
  ],
  [
    "你在宾馆，要去住的房间，你让服务员帮你搬箱子，怎么说？",
    "Nǐ zài bīnguǎn, yào qù zhù de fángjiān, nǐ ràng fúwùyuán bāng nǐ bān xiāngzi, zěnme shuō?",
    "Bạn ở khách sạn, sắp lên phòng, nhờ nhân viên giúp khiêng vali, nói thế nào?",
    [
      "请你把我的箱子搬到房间里去。",
      "Qǐng nǐ bǎ wǒ de xiāngzi bān dào fángjiān li qù.",
      "Nhờ anh khiêng vali của tôi lên phòng.",
    ],
  ],
  [
    "你想买一个手机，让营业员拿给你看看，怎么说？",
    "Nǐ xiǎng mǎi yí ge shǒujī, ràng yíngyèyuán ná gěi nǐ kànkan, zěnme shuō?",
    "Bạn muốn mua điện thoại, nhờ nhân viên bán hàng lấy cho xem, nói thế nào?",
    [
      "请把这个手机拿给我看看。",
      "Qǐng bǎ zhè ge shǒujī ná gěi wǒ kànkan.",
      "Làm ơn lấy chiếc điện thoại này cho tôi xem.",
    ],
  ],
  [
    "玛丽要去医院看安娜，你想请玛丽带一束花儿给安娜，怎么说？",
    "Mǎlì yào qù yīyuàn kàn Ānnà, nǐ xiǎng qǐng Mǎlì dài yí shù huār gěi Ānnà, zěnme shuō?",
    "Mary sắp đến bệnh viện thăm Anna, bạn muốn nhờ Mary mang một bó hoa cho Anna, nói thế nào?",
    [
      "玛丽，请你把这束花儿带给安娜。",
      "Mǎlì, qǐng nǐ bǎ zhè shù huār dài gěi Ānnà.",
      "Mary, nhờ cậu mang bó hoa này cho Anna.",
    ],
  ],
  [
    "在出租车里，怎么告诉出租车师傅在你的宿舍门口停车？",
    "Zài chūzūchē li, zěnme gàosu chūzūchē shīfu zài nǐ de sùshè ménkǒu tíngchē?",
    "Trong taxi, nói thế nào để bảo tài xế dừng xe ở cổng ký túc xá của bạn?",
    [
      "师傅，请把车停在我宿舍门口。",
      "Shīfu, qǐng bǎ chē tíng zài wǒ sùshè ménkǒu.",
      "Bác tài, làm ơn dừng xe ở cổng ký túc xá của tôi.",
    ],
  ],
];

// 10. Hội thoại: [speaker, câu, pinyin, nghĩa]
const T10 = [
  [
    "玛丽",
    "山本，请把这张请假条儿带给王老师。",
    "Mǎlì: Shānběn, qǐng bǎ zhè zhāng qǐngjiàtiáor dài gěi Wáng lǎoshī.",
    "Mary: Yamamoto, nhờ cậu mang tờ đơn xin nghỉ này đưa cho thầy Vương.",
  ],
  [
    "山本",
    "怎么？你不去上课了？",
    "Shānběn: Zěnme? Nǐ bú qù shàngkè le?",
    "Yamamoto: Sao thế? Cậu không đi học à?",
  ],
  [
    "玛丽",
    "李美英生病了。我要去看看她。",
    "Mǎlì: Lǐ Měiyīng shēngbìng le. Wǒ yào qù kànkan tā.",
    "Mary: Lý Mỹ Anh bị ốm. Mình muốn đi thăm cô ấy.",
  ],
  ["山本", "她怎么了？", "Shānběn: Tā zěnme le?", "Yamamoto: Cô ấy sao vậy?"],
  [
    "玛丽",
    "她得了重感冒。",
    "Mǎlì: Tā dé le zhòng gǎnmào.",
    "Mary: Cô ấy bị cảm nặng.",
  ],
  [
    "山本",
    "是吗？你把我刚买的这束花儿带给她吧。",
    "Shānběn: Shì ma? Nǐ bǎ wǒ gāng mǎi de zhè shù huār dài gěi tā ba.",
    "Yamamoto: Vậy à? Cậu mang bó hoa mình vừa mua này cho cô ấy nhé.",
  ],
  ["玛丽", "好。", "Mǎlì: Hǎo.", "Mary: Được."],
  [
    "山本",
    "问她好，祝她早日康复。",
    "Shānběn: Wèn tā hǎo, zhù tā zǎorì kāngfù.",
    "Yamamoto: Gửi lời hỏi thăm cô ấy, chúc cô ấy sớm khỏe lại.",
  ],
];

// 11. Đọc & thuật lại: [câu, pinyin, nghĩa]
const T11 = [
  [
    "爸爸带着三岁的儿子坐火车去看奶奶。",
    "Bàba dài zhe sān suì de érzi zuò huǒchē qù kàn nǎinai.",
    "Bố dẫn đứa con trai ba tuổi đi tàu hỏa thăm bà nội.",
  ],
  [
    "在火车上，儿子喜欢把头伸到窗外去。",
    "Zài huǒchē shang, érzi xǐhuan bǎ tóu shēn dào chuāng wài qù.",
    "Trên tàu, cậu bé thích thò đầu ra ngoài cửa sổ.",
  ],
  [
    "爸爸对他说：“儿子，小心点儿，别把头伸到窗外去。”",
    "Bàba duì tā shuō: “Érzi, xiǎoxīn diǎnr, bié bǎ tóu shēn dào chuāng wài qù.”",
    "Bố nói với con: “Con trai, cẩn thận chút, đừng thò đầu ra ngoài cửa sổ.”",
  ],
  [
    "可是男孩儿不听爸爸的话，还是把头伸到窗外。",
    "Kěshì nánháir bù tīng bàba de huà, háishi bǎ tóu shēn dào chuāng wài.",
    "Nhưng cậu bé không nghe lời bố, vẫn thò đầu ra ngoài cửa sổ.",
  ],
  [
    "这时爸爸悄悄地把儿子的帽子摘了下来，放在自己身后，然后对他说：“你看，风把你的帽子刮跑了。”",
    "Zhèshí bàba qiāoqiāo de bǎ érzi de màozi zhāi le xiàlái, fàng zài zìjǐ shēn hòu, ránhòu duì tā shuō: “Nǐ kàn, fēng bǎ nǐ de màozi guā pǎo le.”",
    "Lúc này bố lặng lẽ cởi mũ của con xuống, đặt ra sau lưng mình, rồi nói: “Con xem, gió thổi bay mũ của con rồi.”",
  ],
  [
    "儿子急得哭了，哭着要他的帽子。",
    "Érzi jí de kū le, kū zhe yào tā de màozi.",
    "Cậu bé sốt ruột đến phát khóc, vừa khóc vừa đòi mũ.",
  ],
  [
    "爸爸说：“好，你对着窗口吹一口气，帽子就回来了。”",
    "Bàba shuō: “Hǎo, nǐ duì zhe chuāngkǒu chuī yì kǒu qì, màozi jiù huílái le.”",
    "Bố nói: “Được, con thổi một hơi về phía cửa sổ, mũ sẽ quay về.”",
  ],
  [
    "儿子就对着窗口吹了一口气，爸爸很快把帽子戴到他的头上。",
    "Érzi jiù duì zhe chuāngkǒu chuī le yì kǒu qì, bàba hěn kuài bǎ màozi dài dào tā de tóu shang.",
    "Cậu bé liền thổi một hơi về phía cửa sổ, bố nhanh chóng đội mũ lại lên đầu con.",
  ],
  [
    "儿子笑了。他想，这太有意思了。就一下子把爸爸的帽子摘了下来，扔到车窗外边去了，然后高兴地对爸爸说：“爸爸，快！现在该你吹气了。”",
    "Érzi xiào le. Tā xiǎng, zhè tài yǒuyìsi le. Jiù yíxiàzi bǎ bàba de màozi zhāi le xiàlái, rēng dào chēchuāng wàibian qù le, ránhòu gāoxìng de duì bàba shuō: “Bàba, kuài! Xiànzài gāi nǐ chuī qì le.”",
    "Cậu bé cười, nghĩ: thế này thú vị quá. Liền giật mũ của bố xuống, ném ra ngoài cửa sổ tàu, rồi vui vẻ nói với bố: “Bố ơi, nhanh lên! Giờ đến lượt bố thổi hơi rồi.”",
  ],
];

const VG = [
  ["奶奶", "nǎinai", "bà nội"],
  ["伸", "shēn", "duỗi, thò"],
  ["小心", "xiǎoxīn", "cẩn thận"],
  ["悄悄", "qiāoqiāo", "lặng lẽ"],
  ["帽子", "màozi", "cái mũ"],
  ["摘", "zhāi", "cởi (mũ), hái"],
  ["吹气", "chuī qì", "thổi một hơi"],
  ["一下子", "yíxiàzi", "trong chốc lát"],
  ["扔", "rēng", "ném"],
];

// ===== COMPONENTS =====

function Sent({ zh, py, vi, who, all, onToggle, open }) {
  const show = all || open;
  return (
    <div
      onClick={onToggle}
      className={
        "cursor-pointer rounded-lg px-3 py-1 transition " +
        (show ? "bg-stone-50" : "hover:bg-gray-100")
      }
    >
      <div className="ztai__zh text-2xl leading-9 text-gray-900">
        {who && <span className="mr-2 text-stone-600">{who}:</span>}
        {zh}
      </div>
      {show && (
        <div className="mt-1 text-sm">
          <div className="text-gray-500">{py}</div>
          <div className="text-gray-900">{vi}</div>
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

// Tab 9: tình huống, có nút gợi ý đáp án riêng từng câu
function TinhHuongTab({ all }) {
  const [openAns, setOpenAns] = useState({});
  return (
    <div>
      <div className="mb-3 rounded-lg bg-sky-50 p-3 text-sm text-sky-800">
        Bạn nói thế nào trong các tình huống sau (dùng câu chữ 把)? Tự nghĩ rồi
        bấm “Gợi ý đáp án”.
      </div>
      {T9.map((r, i) => {
        const [q, qpy, qvi, ans] = r;
        const show = all || openAns[i];
        return (
          <div key={i} className="border-b border-dashed border-stone-200 py-3">
            <div className="ztai__zh text-2xl leading-9 text-gray-900">{q}</div>
            {all && (
              <div className="mt-1 text-sm">
                <div className="text-gray-500">{qpy}</div>
                <div className="text-gray-900">{qvi}</div>
              </div>
            )}
            <button
              onClick={() => setOpenAns((s) => ({ ...s, [i]: !s[i] }))}
              className="mt-2 rounded-full border border-stone-300 px-3 py-1 text-xs text-stone-700 hover:bg-stone-100"
            >
              Gợi ý đáp án (câu chữ 把)
            </button>
            {show && (
              <div className="mt-2 rounded-lg bg-emerald-50 p-3">
                <div className="ztai__zh text-2xl text-emerald-800">
                  {ans[0]}
                </div>
                <div className="text-sm text-gray-500">{ans[1]}</div>
                <div className="text-sm text-gray-900">{ans[2]}</div>
              </div>
            )}
          </div>
        );
      })}
      <p className="mt-3 text-sm text-sky-700">
        Đáp án chỉ là gợi ý tự soạn, không phải đáp án chính thức của sách.
      </p>
    </div>
  );
}

// Tab 10: hội thoại
function HoiThoaiTab({ all, setAll }) {
  const [open, setOpen] = useState({});
  return (
    <div>
      <Toggle all={all} setAll={setAll} />
      {T10.map((r, i) => (
        <Sent
          key={i}
          who={r[0]}
          zh={r[1]}
          py={r[2]}
          vi={r[3]}
          all={all}
          open={open[i]}
          onToggle={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
        />
      ))}
    </div>
  );
}

// Tab 11: đọc & thuật lại
function DocTab({ all, setAll }) {
  const [open, setOpen] = useState({});
  return (
    <div>
      <div className="mb-2 p-3 text-xl text-sky-800">
        补充生词 – Từ mới bổ sung
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2">
        {VG.map(([w, py, vi], i) => (
          <div
            key={i}
            className="rounded-sm border border-stone-100 px-2 py-1 text-sm text-gray-500"
          >
            <b className="ztai__zh block text-2xl font-normal leading-8 text-gray-900">
              {w}
            </b>
            {py} · {vi}
          </div>
        ))}
      </div>
      <Toggle all={all} setAll={setAll} />
      {T11.map((r, i) => (
        <Sent
          key={i}
          zh={r[0]}
          py={r[1]}
          vi={r[2]}
          all={all}
          open={open[i]}
          onToggle={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
        />
      ))}
    </div>
  );
}

// ===== MAIN =====
export default function Lesson17BaiKhoaPhu() {
  const [tab, setTab] = useState(0);
  const [all, setAll] = useState(false);
  const tabs = ["9. Tình huống", "10. Hội thoại", "11. Đọc & thuật lại"];

  return (
    <div className="mx-auto p-4">
      <div className="mb-4 flex gap-2 overflow-x-auto border-b border-stone-200 pb-2">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={
              "shrink-0 rounded-lg px-4 py-1.5 text-sm transition-colors " +
              (tab === i
                ? "bg-stone-800 text-white"
                : "text-stone-600 hover:bg-stone-200")
            }
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && <TinhHuongTab all={all} />}
      {tab === 1 && <HoiThoaiTab all={all} setAll={setAll} />}
      {tab === 2 && <DocTab all={all} setAll={setAll} />}
    </div>
  );
}
