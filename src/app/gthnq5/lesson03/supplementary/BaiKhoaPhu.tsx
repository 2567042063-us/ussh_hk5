"use client";

import { useState } from "react";

import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

const P = [
  [
    ["一把雨伞", "Yì bǎ yǔsǎn", "Một chiếc ô."],
    [
      "去年秋天的一个星期天,我和爱人带孩子去爬山。",
      "Qùnián qiūtiān de yí ge xīngqītiān, wǒ hé àiren dài háizi qù páshān.",
      "Một ngày Chủ nhật mùa thu năm ngoái, tôi và vợ/chồng dẫn con đi leo núi.",
    ],
    [
      "刚刚两岁{1|的}儿子,玩儿得很高兴。",
      "Gānggāng liǎng suì de érzi, wánr de hěn gāoxìng.",
      "Cậu con trai vừa tròn hai tuổi chơi rất vui.",
    ],
    [
      "这时,一阵风刮来,抬头一看,刚才还蓝蓝的天上,不知什么时候起{2|了}乌云,很快就开始掉雨点了。",
      "Zhè shí, yí zhèn fēng guā lái, táitóu yí kàn, gāngcái hái lánlán de tiānshàng, bù zhī shénme shíhou qǐ le wūyún, hěn kuài jiù kāishǐ diào yǔdiǎnr le.",
      "Lúc này, một cơn gió thổi tới, ngẩng đầu nhìn, trên bầu trời vừa còn xanh biếc, không biết từ lúc nào đã nổi mây đen, rất nhanh bắt đầu rơi mưa.",
    ],
    [
      "我和爱人一下子着急了,从这儿往前,离车站还远,往回走,也要将近一个小时,我们又没带雨伞。",
      "Wǒ hé àiren yíxiàzi zháojí le, cóng zhèr wǎng qián, lí chēzhàn hái yuǎn, wǎng huí zǒu, yě yào jiāngjìn yí ge xiǎoshí, wǒmen yòu méi dài yǔsǎn.",
      "Tôi và vợ/chồng đột nhiên lo lắng, từ đây đi tiếp thì còn xa ga, quay về cũng phải gần một tiếng, mà chúng tôi lại không mang ô.",
    ],
    [
      "{3|雨}越下越大,我抱{4|起/着}儿子,不知怎么办好。",
      "Yǔ yuè xià yuè dà, wǒ bào qǐ/zhe érzi, bù zhī zěnme bàn hǎo.",
      "Mưa càng lúc càng to, tôi bế con trai lên, không biết làm thế nào.",
    ],
    [
      "正在这时,一对儿年轻人打着一{5|把}雨伞向我们这边走来,看到我们的样子,两人一笑,马上{6|把}伞送给我们,说:“孩子小,淋了雨会感冒的。”",
      "Zhèngzài zhè shí, yí duìr niánqīngrén dǎ zhe yì bǎ yǔsǎn xiàng wǒmen zhèbiān zǒu lái, kàndào wǒmen de yàngzi, liǎng rén yí xiào, mǎshàng bǎ sǎn sòng gěi wǒmen, shuō: “Háizi xiǎo, lín le yǔ huì gǎnmào de.”",
      "Đúng lúc này, một đôi vợ chồng trẻ che một chiếc ô đi về phía chúng tôi, thấy dáng vẻ chúng tôi, hai người cười, lập tức đưa ô cho chúng tôi, nói: “Trẻ con còn nhỏ, bị mưa ướt sẽ cảm lạnh đấy.”",
    ],
    [
      "然后,{7|他们}俩说着笑着淋着雨跑远了。",
      "Ránhòu, tāmen liǎ shuō zhe xiào zhe lín zhe yǔ pǎo yuǎn le.",
      "Sau đó, hai người họ vừa nói vừa cười, đội mưa chạy xa dần.",
    ],
    [
      "雨中的经历使我常想起这两个不知姓名的年轻人,只知道他们在北京工作,但是因为当时没有留下姓名和地址,{8|所以}这把雨伞现在还放在我们家里。",
      "Yǔ zhōng de jīnglì shǐ wǒ cháng xiǎngqǐ zhè liǎng ge bù zhī xìngmíng de niánqīngrén, zhǐ zhīdào tāmen zài Běijīng gōngzuò, dànshì yīnwèi dāngshí méiyǒu liúxià xìngmíng hé dìzhǐ, suǒyǐ zhè bǎ yǔsǎn xiànzài hái fàng zài wǒmen jiā lǐ.",
      "Trải nghiệm trong mưa khiến tôi thường nhớ đến hai người trẻ tuổi không biết tên này, chỉ biết họ làm việc ở Bắc Kinh, nhưng vì lúc đó không để lại tên và địa chỉ, nên chiếc ô này hiện vẫn còn để ở nhà chúng tôi.",
    ],
  ],
];

const ANS = ["的", "了", "雨", "起/着", "把", "把", "他们", "所以"];

const NOTES = [
  [
    4,
    "起/着",
    "起",
    "抱起来 (bế lên) hoặc 抱着 (bế trên tay) đều đúng; sách in 起/着.",
  ],
  [5, "把", "—", "一把雨伞 (lượng từ 把 dùng cho vật có cán cầm)."],
];

const C = [
  ["A", "啊——，好冷啊！", "A——, hǎo lěng a!", "A——, lạnh quá!"],
  [
    "B",
    "冷在三九嘛，现在才是头九，冷的时候还在后面呢。",
    "Lěng zài sānjiǔ ma, xiànzài cái shì tóujiǔ, lěng de shíhou hái zài hòumiàn ne.",
    "Lạnh nhất là vào tam cửu, bây giờ mới là đầu cửu, thời gian lạnh còn ở phía sau.",
  ],
  [
    "A",
    "什么？什么？你说的我怎么听不懂啊。什么“三九”“头九”？",
    "Shénme? Shénme? Nǐ shuō de wǒ zěnme tīngbudǒng a. Shénme “sānjiǔ” “tóujiǔ”?",
    "Cái gì? Cái gì? Cậu nói gì tớ nghe không hiểu. “Tam cửu” “đầu cửu” là gì?",
  ],
  [
    "B",
    "啊, 中国人把冬天最冷的时候, 叫作三九天。从冬至 (dōngzhì, the winter solstice) 开始, 每九天算一九。今天是 12 月 25 号, 算头九。",
    "A, Zhōngguórén bǎ dōngtiān zuì lěng de shíhou, jiàozuò sānjiǔtiān. Cóng dōngzhì kāishǐ, měi jiǔ tiān suàn yì jiǔ. Jīntiān shì 12 yuè 25 hào, suàn tóujiǔ.",
    "À, người Trung Quốc gọi thời gian lạnh nhất mùa đông là “tam cửu thiên”. Từ tiết đông chí bắt đầu, cứ chín ngày tính là một “cửu”. Hôm nay là 25/12, tính là đầu cửu.",
  ],
  [
    "A",
    "这样啊。这么说，以后还会更冷啊。",
    "Zhèyàng a. Zhème shuō, yǐhòu hái huì gèng lěng a.",
    "Ra thế. Vậy thì sau này còn lạnh hơn nữa.",
  ],
  ["B", "当然。", "Dāngrán.", "Tất nhiên rồi."],
  [
    "A",
    "我最怕冷了。每天早上都不想起床，所以常常迟到。",
    "Wǒ zuì pà lěng le. Měitiān zǎoshang dōu bù xiǎng qǐchuáng, suǒyǐ chángcháng chídào.",
    "Tớ sợ lạnh nhất. Mỗi sáng đều không muốn ra khỏi giường, nên thường xuyên đến muộn.",
  ],
  [
    "B",
    "我怕热，但不怕冷。我喜欢冬天，也喜欢滑冰滑雪。",
    "Wǒ pà rè, dàn bú pà lěng. Wǒ xǐhuan dōngtiān, yě xǐhuan huábīng huáxuě.",
    "Tớ sợ nóng, nhưng không sợ lạnh. Tớ thích mùa đông, cũng thích trượt băng trượt tuyết.",
  ],
  [
    "A",
    "难怪你每天一早就出去锻炼。我可起不来。",
    "Nánguài nǐ měitiān yì zǎo jiù chūqù duànliàn. Wǒ kě qǐbulái.",
    "Thảo nào ngày nào cậu cũng dậy sớm ra ngoài tập thể dục. Tớ thì không dậy nổi.",
  ],
];

const supplementaryTranslation = {
  id: "gthnq5-lesson02-supplementary-discussion",
  items: C.map(([speaker, zh, pinyin, vietnamese]) => ({
    speaker,
    zh,
    pinyin,
    vietnamese,
  })),
};

const supplementaryTextTranslation = {
  id: "gthnq5-lesson02-supplementary-text",
  title: "补充课文 · 一把雨伞",
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
    "阵",
    "zhèn",
    "量",
    "TRẬN",
    "cơn, trận (gió, mưa...) · short period; spell",
    "一阵 + N (gió/mưa/tiếng...) · 一阵子 (một lúc)",
    "这时,一阵风刮来。",
    "Zhè shí, yí zhèn fēng guā lái.",
    "Lúc này, một cơn gió thổi tới.",
    "场 chǎng: trận (mưa, bệnh...) · 股 gǔ: luồng (gió, mùi)",
    "阵雨 zhènyǔ: mưa rào · 一阵子 yízhènzi: một lúc",
  ],
  [
    2,
    "抬",
    "tái",
    "动",
    "ĐÀI",
    "nâng, ngẩng · to raise",
    "抬头 / 抬手 / 抬东西",
    "抬头一看,刚才还蓝蓝的天上……",
    "Táitóu yí kàn, gāngcái hái lánlán de tiānshàng……",
    "Ngẩng đầu nhìn, trên bầu trời vừa còn xanh biếc……",
    "举 jǔ: giơ lên · 仰 yǎng: ngẩng lên",
    "抬头 tái tóu: ngẩng đầu · 抬高 táigāo: nâng cao",
  ],
  [
    3,
    "将近",
    "jiāngjìn",
    "副",
    "TƯƠNG CẬN",
    "gần, sắp · to be about to",
    "将近 + số lượng / thời gian",
    "往回走,也要将近一个小时。",
    "Wǎng huí zǒu, yě yào jiāngjìn yí ge xiǎoshí.",
    "Quay về cũng phải gần một tiếng.",
    "接近 jiējìn: tiếp cận · 差不多 chàbuduō: gần như",
    "将 jiāng: sắp · 近 jìn: gần",
  ],
  [
    4,
    "经历",
    "jīnglì",
    "动 / 名",
    "KINH LỊCH",
    "trải qua; trải nghiệm · experience",
    "经历 + sự việc · 一段经历 · 亲身经历",
    "雨中的经历使我常想起这两个不知姓名的年轻人。",
    "Yǔ zhōng de jīnglì shǐ wǒ cháng xiǎngqǐ zhè liǎng ge bù zhī xìngmíng de niánqīngrén.",
    "Trải nghiệm trong mưa khiến tôi thường nhớ đến hai người trẻ tuổi không biết tên này.",
    "经验 jīngyàn: kinh nghiệm (kiến thức/thực hành) · 体验 tǐyàn: trải nghiệm (cảm nhận)",
    "经过 jīngguò: trải qua · 阅历 yuèlì: từng trải",
  ],
];

function Zh({ s }: { s: string }) {
  return (
    <>
      {s.split(/(\{[^}]+\})/).map((p, i) => {
        const m = p.match(/^\{(\d+)\|(.+)\}$/);
        if (!m) return <span key={i}>{p}</span>;
        return (
          <mark
            key={i}
            className="mx-0.5 rounded bg-yellow-50 px-1 text-sky-700"
          >
            <sup className="mr-0.5 text-[10px] text-gray-500">{m[1]}</sup>
            {m[2]}
          </mark>
        );
      })}
    </>
  );
}

function Sent({
  zh,
  py,
  vi,
  all,
  who,
}: {
  zh: string;
  py: string;
  vi: string;
  all: boolean;
  who?: string;
}) {
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
          <div className="ztai__py text-gray-500">{py}</div>
          <div className="text-slate-900">{vi}</div>
        </div>
      )}
    </div>
  );
}

function Toggle({
  all,
  setAll,
}: {
  all: boolean;
  setAll: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => setAll(!all)}
      className="mb-3 rounded-full border border-sky-300 px-3 py-1 text-sm text-sky-700 hover:bg-sky-50"
    >
      {all ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
    </button>
  );
}

export default function BaiKhoaPhuShangLiang() {
  const [tab, setTab] = useState(0);
  const [all, setAll] = useState(false);
  const tabs = ["课文", "生词", "商量 Discussing", "Dịch Việt – Trung"];
  return (
    <div className="mx-auto p-4">
      <h1 className="ztai__zh text-2xl text-gray-800">
        第三课 · 补充课文 · 综合填空
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
          <h2 className="ztai__zh mb-2 text-2xl">综合填空</h2>
          <Toggle all={all} setAll={setAll} />
          {P.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed p-6 text-center text-sm text-gray-400">
              Chưa có đoạn văn (cần trang chứa bài 综合填空). Khi có, điền vào
              mảng <code>P</code> là xong.
            </div>
          ) : (
            <div>
              {P.map((para, i) => (
                <div key={i} className="mb-3">
                  {para.map((s, j) => (
                    <Sent key={j} zh={s[0]} py={s[1]} vi={s[2]} all={all} />
                  ))}
                </div>
              ))}
            </div>
          )}
          <footer className="mt-4 border-t border-gray-100 pt-3 text-sm text-gray-600">
            <div className="mb-1 font-semibold">Ghi chú đáp án khác</div>
            {NOTES.length === 0 ? (
              <div className="text-gray-400">
                Sẽ bổ sung sau khi có đoạn văn 综合填空.
              </div>
            ) : (
              <ul className="list-disc space-y-1 pl-5">
                {NOTES.map((n, i) => (
                  <li key={i}>
                    ({n[0]}) <b>{n[1]}</b>
                    {n[2] !== "—" && (
                      <>
                        {" "}
                        hoặc <b>{n[2]}</b>
                      </>
                    )}
                    : {n[3]}
                  </li>
                ))}
              </ul>
            )}
          </footer>
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
                    <div className="ztai__zh text-2xl">{v[7]}</div>
                    <div className="ztai__py text-gray-500">{v[8]}</div>
                    <div className="text-slate-900">{v[9]}</div>
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
              交际会话 · 商量 Discussing sth. with sb.
            </h2>
            <p className="mb-2 text-xs text-gray-500">
              Trao đổi, bàn bạc, thương lượng · Bấm vào từng câu để xem pinyin +
              tiếng Việt.
            </p>
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
