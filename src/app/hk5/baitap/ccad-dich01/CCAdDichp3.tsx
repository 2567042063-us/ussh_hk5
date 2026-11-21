"use client";

import { useState } from "react";

type Example = { zh: string; py?: string; vi: string };

type Part =
  | { t: "text"; text: string }
  | { t: "note"; text: string }
  | { t: "formula"; text: string; meaning?: string }
  | { t: "words"; label?: string; rows: [string, string][] }
  | { t: "examples"; items: Example[] };

type Point = { label: string; title: string; parts: Part[] };

type Item = {
  q: string;
  a: string;
  pinyin: string;
  natural: string;
  intro?: string;
  points: Point[];
  tip: string;
};

const TITLE = "三、把下列句子翻译成越南语";

const ITEMS: Item[] = [
  {
    q: "你把我的话当成耳旁风是吧？",
    a: "Bạn bỏ ngoài tai lời nói của tôi đúng không?",
    pinyin: "Nǐ bǎ wǒ de huà dàng chéng ěr páng fēng shì ba?",
    natural: "Bạn coi lời tôi nói như gió thoảng bên tai, đúng không?",
    points: [
      {
        label: "Ngữ pháp 1",
        title: "把 + tân ngữ + 当成 + danh từ",
        parts: [
          {
            t: "words",
            rows: [
              ["把我的话", "đem lời tôi nói ra..."],
              ["当成", "coi như, xem như, coi là"],
              ["耳旁风", "gió thoảng bên tai, chỉ nghe rồi bỏ ngoài tai"],
            ],
          },
          {
            t: "text",
            text: "Ở đây, 当成 biểu thị việc coi A là B, thường là cách đánh giá hoặc nhìn nhận một sự vật, sự việc.",
          },
          {
            t: "examples",
            items: [
              {
                zh: "我把他当成朋友。",
                py: "Wǒ bǎ tā dàng chéng péngyou.",
                vi: "Tôi coi anh ấy là bạn.",
              },
              {
                zh: "别把我的话当成玩笑。",
                py: "Bié bǎ wǒ de huà dàng chéng wánxiào.",
                vi: "Đừng coi lời tôi nói là chuyện đùa.",
              },
            ],
          },
        ],
      },
      {
        label: "Ngữ pháp 2",
        title: "是吧？",
        parts: [
          {
            t: "text",
            text: "是吧？ đặt ở cuối câu để xác nhận điều người nói đang suy đoán, đôi khi mang sắc thái trách móc.",
          },
          {
            t: "examples",
            items: [
              {
                zh: "你不想去，是吧？",
                py: "Nǐ bù xiǎng qù, shì ba?",
                vi: "Bạn không muốn đi, đúng không?",
              },
            ],
          },
        ],
      },
    ],
    tip: "Gặp 当成耳旁风, bạn đừng dịch từng chữ thành “coi lời nói thành gió bên tai”. Hãy nhớ cả cụm có nghĩa là bỏ ngoài tai, không coi lời người khác nói ra gì.",
  },
  {
    q: "他把那些不应该让人知道的事写出来了。",
    a: "Anh ta đã viết ra những điều không nên để người khác biết.",
    pinyin: "Tā bǎ nàxiē bù yīnggāi ràng rén zhīdào de shì xiě chūlái le.",
    natural: "Anh ấy đã viết ra những chuyện không nên để người khác biết.",
    points: [
      {
        label: "Ngữ pháp 1",
        title: "把 + tân ngữ + động từ + bổ ngữ",
        parts: [
          {
            t: "words",
            rows: [
              ["他", "Anh ấy — chủ ngữ"],
              ["把那些……事", "Những chuyện đó — tân ngữ"],
              [
                "不应该让人知道的",
                "Mà không nên để người khác biết — định ngữ",
              ],
              ["写出来了", "Đã viết ra — động từ + bổ ngữ + 了"],
            ],
          },
          {
            t: "words",
            rows: [
              [
                "出来",
                "bổ ngữ xu hướng kép (趋向补语), ở đây nhấn mạnh nội dung được viết ra, được thể hiện ra bên ngoài.",
              ],
            ],
          },
          {
            t: "examples",
            items: [
              {
                zh: "把你的名字写出来。",
                py: "Bǎ nǐ de míngzi xiě chūlái.",
                vi: "Hãy viết tên của bạn ra.",
              },
              {
                zh: "他终于想出来了一个好办法。",
                py: "Tā zhōngyú xiǎng chūlái le yí ge hǎo bànfǎ.",
                vi: "Cuối cùng anh ấy cũng nghĩ ra được một cách hay.",
              },
            ],
          },
        ],
      },
      {
        label: "Ngữ pháp 2",
        title: "不应该让人知道的事",
        parts: [
          { t: "text", text: "Tách cụm:" },
          {
            t: "words",
            rows: [
              ["不应该", "không nên"],
              ["让人知道", "để người khác biết"],
              [
                "不应该让人知道的事",
                "những chuyện không nên để người khác biết",
              ],
            ],
          },
          { t: "text", text: "Trong đó:" },
          {
            t: "formula",
            text: "让 + người + động từ",
            meaning: "khiến/để cho ai làm gì",
          },
          {
            t: "examples",
            items: [
              {
                zh: "不要让别人等你。",
                py: "Bú yào ràng biérén děng nǐ.",
                vi: "Đừng để người khác chờ bạn.",
              },
              {
                zh: "这件事不能让他知道。",
                py: "Zhè jiàn shì bù néng ràng tā zhīdào.",
                vi: "Không thể để anh ấy biết chuyện này.",
              },
            ],
          },
        ],
      },
    ],
    tip: "Khi gặp cụm dài có 的, hãy tìm danh từ đứng sau 的 trước. Ở đây, danh từ là 事 (chuyện), còn phần đứng trước dùng để mô tả loại chuyện nào.",
  },
  {
    q: "我们目前要做的就是把不高兴的事情放下，勇往前走。",
    a: "Điều trước mắt chúng ta cần làm là bỏ qua những việc không vui, dũng cảm bước về phía trước.",
    pinyin:
      "Wǒmen mùqián yào zuò de jiù shì bǎ bù gāoxìng de shìqing fàngxià, yǒng wǎng qián zǒu.",
    natural:
      "Điều chúng ta cần làm lúc này chính là gác lại những chuyện không vui và dũng cảm tiến về phía trước.",
    points: [
      {
        label: "Ngữ pháp 1",
        title: "要做的就是……",
        parts: [
          {
            t: "words",
            rows: [
              ["要做", "cần làm"],
              ["要做的", "điều cần làm"],
              ["就是", "chính là"],
            ],
          },
          {
            t: "text",
            text: "Cụm 要做的 đã lược bỏ danh từ trung tâm như 事情 (việc), nên có thể hiểu là “điều cần làm”.",
          },
          {
            t: "examples",
            items: [
              {
                zh: "你现在要做的就是好好学习。",
                py: "Nǐ xiànzài yào zuò de jiù shì hǎohāo xuéxí.",
                vi: "Điều bạn cần làm bây giờ chính là học tập thật tốt.",
              },
              {
                zh: "我们要做的就是坚持下去。",
                py: "Wǒmen yào zuò de jiù shì jiānchí xiàqù.",
                vi: "Điều chúng ta cần làm chính là kiên trì tiếp tục.",
              },
            ],
          },
        ],
      },
      {
        label: "Ngữ pháp 2",
        title: "把 + tân ngữ + 放下",
        parts: [
          {
            t: "words",
            rows: [
              ["放", "đặt, để"],
              [
                "下",
                "bổ ngữ xu hướng, ở đây diễn tả việc đặt xuống hoặc buông xuống",
              ],
              ["放下", "đặt xuống; nghĩa bóng là buông bỏ, gác lại"],
            ],
          },
          {
            t: "text",
            text: "Trong câu này, 不高兴的事情 (những chuyện không vui) là tân ngữ của 放下.",
          },
          {
            t: "examples",
            items: [
              {
                zh: "把手机放下。",
                py: "Bǎ shǒujī fàngxià.",
                vi: "Đặt điện thoại xuống.",
              },
              {
                zh: "放下过去，重新开始。",
                py: "Fàngxià guòqù, chóngxīn kāishǐ.",
                vi: "Buông bỏ quá khứ, bắt đầu lại.",
              },
            ],
          },
          {
            t: "note",
            text: "放下不高兴的事情 không nhất thiết có nghĩa là quên sạch mọi chuyện. Trong ngữ cảnh này, nó khuyên chúng ta đừng mãi bị những chuyện buồn níu giữ.",
          },
        ],
      },
      {
        label: "Ngữ pháp 3",
        title: "勇往前走",
        parts: [
          { t: "text", text: "Đây là cách diễn đạt mang tính thành ngữ:" },
          {
            t: "words",
            rows: [
              ["勇", "dũng cảm"],
              ["往前", "về phía trước"],
              ["走", "đi"],
            ],
          },
          { t: "text", text: "→ Dũng cảm tiến về phía trước." },
          {
            t: "examples",
            items: [
              {
                zh: "不管遇到什么困难，我们都要勇往前走。",
                py: "Bùguǎn yùdào shénme kùnnan, wǒmen dōu yào yǒng wǎng qián zǒu.",
                vi: "Dù gặp khó khăn gì, chúng ta cũng phải dũng cảm tiến về phía trước.",
              },
            ],
          },
        ],
      },
    ],
    tip: "Câu này có hai hành động được nối với nhau: 放下……，勇往前走 — gác lại chuyện không vui, rồi tiến về phía trước.",
  },
  {
    q: "奶奶一手把我抚养成人，那养育之恩无法用语言来形容。",
    a: "Bà nội một tay nuôi nấng tôi khôn lớn thành người, ơn dưỡng dục ấy không thể diễn đạt bằng lời.",
    pinyin:
      "Nǎinai yì shǒu bǎ wǒ fǔyǎng chéng rén, nà yǎngyù zhī ēn wúfǎ yòng yǔyán lái xíngróng.",
    natural:
      "Bà đã một tay nuôi nấng tôi khôn lớn; ơn dưỡng dục ấy không thể diễn tả bằng lời.",
    intro:
      "Câu này khó nhất vì có hai cụm rất đáng chú ý: 一手把我抚养成人 và 养育之恩.",
    points: [
      {
        label: "Ngữ pháp 1",
        title: "一手 + động từ",
        parts: [
          {
            t: "text",
            text: "一手 (yì shǒu) nghĩa đen là “một tay”, nhưng khi nói về công sức của một người, nó mang nghĩa một mình, tự tay làm, đảm đương việc gì đó.",
          },
          {
            t: "examples",
            items: [
              {
                zh: "他一手创办了这家公司。",
                py: "Tā yì shǒu chuàngbàn le zhè jiā gōngsī.",
                vi: "Anh ấy một tay thành lập công ty này.",
              },
              {
                zh: "奶奶一手把我带大。",
                py: "Nǎinai yì shǒu bǎ wǒ dài dà.",
                vi: "Bà một tay nuôi tôi khôn lớn.",
              },
            ],
          },
        ],
      },
      {
        label: "Ngữ pháp 2",
        title: "把我抚养成人",
        parts: [
          { t: "formula", text: "把 + tân ngữ + động từ + bổ ngữ kết quả" },
          {
            t: "words",
            rows: [
              ["抚养", "nuôi dưỡng, chăm sóc"],
              ["成人", "trở thành người trưởng thành"],
            ],
          },
          {
            t: "text",
            text: "成 nhấn mạnh kết quả đạt được sau hành động. Khi dịch sang tiếng Việt, không cần cố dịch 成 thành “thành” riêng biệt nếu câu tự nhiên hơn với “nuôi khôn lớn”.",
          },
        ],
      },
      {
        label: "Ngữ pháp 3",
        title: "养育之恩",
        parts: [
          { t: "text", text: "Đây là một cụm từ mang sắc thái trang trọng." },
          {
            t: "words",
            rows: [
              ["养育", "nuôi nấng, dưỡng dục"],
              [
                "之",
                "trợ từ mang nghĩa “của”, thường gặp trong văn viết hoặc cách diễn đạt trang trọng",
              ],
              ["恩", "ân nghĩa, ơn"],
            ],
          },
          { t: "text", text: "Vậy: 养育之恩 = ơn nuôi dưỡng / ơn dưỡng dục." },
          {
            t: "words",
            label: "Cấu trúc tương tự",
            rows: [
              ["父母之爱", "Tình yêu của cha mẹ"],
              ["教育之恩", "Ơn dạy dỗ"],
              ["救命之恩", "Ơn cứu mạng"],
            ],
          },
        ],
      },
      {
        label: "Ngữ pháp 4",
        title: "无法 + động từ",
        parts: [
          { t: "text", text: "无法 (wúfǎ) = không có cách nào, không thể." },
          {
            t: "words",
            rows: [
              ["无法解释", "không thể giải thích"],
              ["无法接受", "không thể chấp nhận"],
              ["无法用语言来形容", "không thể dùng ngôn ngữ để diễn tả"],
            ],
          },
          {
            t: "formula",
            text: "用 + phương tiện + 来 + động từ",
            meaning: "dùng phương tiện nào đó để thực hiện hành động",
          },
          {
            t: "examples",
            items: [
              {
                zh: "用中文来表达自己的想法。",
                py: "Yòng Zhōngwén lái biǎodá zìjǐ de xiǎngfǎ.",
                vi: "Dùng tiếng Trung để bày tỏ suy nghĩ của mình.",
              },
            ],
          },
        ],
      },
    ],
    tip: "Với 养育之恩无法用语言来形容, bạn có thể dịch cả cụm là “Ơn dưỡng dục ấy lớn lao đến mức không lời nào diễn tả được”. Đây là cách dịch tự nhiên hơn so với việc bám sát từng chữ.",
  },
];

function PartView({ p }: { p: Part }) {
  switch (p.t) {
    case "text":
      return <p className="text-stone-700">{p.text}</p>;

    case "note":
      return (
        <p className="rounded-md bg-stone-100 px-3 py-2 text-stone-700">
          <span className="font-medium text-stone-900">Lưu ý: </span>
          {p.text}
        </p>
      );

    case "formula":
      return (
        <p className="text-stone-700">
          <span className="rounded-md bg-stone-200 px-2 py-0.5 font-medium text-stone-900">
            {p.text}
          </span>
          {p.meaning && <span className="ml-2">= {p.meaning}</span>}
        </p>
      );

    case "words":
      return (
        <div>
          {p.label && <p className="mb-1 text-stone-700">{p.label}:</p>}
          <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1.5">
            {p.rows.map(([zh, vi]) => (
              <div key={zh} className="contents">
                <dt className="font-medium text-stone-900">{zh}</dt>
                <dd className="text-stone-600">{vi}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "examples":
      return (
        <div>
          <p className="mb-1 text-xs font-medium text-stone-500">Ví dụ</p>
          <ul className="space-y-2.5">
            {p.items.map((ex) => (
              <li key={ex.zh} className="border-l-2 border-stone-300 pl-3">
                <p className="text-base font-medium text-stone-900">{ex.zh}</p>
                {ex.py && <p className="text-xs text-stone-500">{ex.py}</p>}
                <p className="text-stone-700">→ {ex.vi}</p>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 text-stone-400 transition-transform motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

function Detail({ item }: { item: Item }) {
  return (
    <div className="space-y-5 border-t border-stone-200 px-4 pb-5 pt-4 text-sm leading-relaxed">
      {/* Đáp án */}
      <div className="rounded-lg border border-sky-100 bg-sky-50 px-3 py-2.5">
        <p className="text-sm text-sky-700">{item.pinyin}</p>
        <p className="mt-0.5 text-base text-sky-900">{item.a}</p>
        <p className="mt-2 border-t border-sky-100 pt-2 text-sky-900">
          <span className="font-medium">Dịch tự nhiên: </span>
          {item.natural}
        </p>
      </div>

      {/* Giải thích */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-stone-900">Giải thích</h3>
        {item.intro && <p className="text-stone-700">{item.intro}</p>}

        {item.points.map((pt) => (
          <section
            key={pt.label}
            className="rounded-lg border border-stone-200 bg-stone-50 p-3"
          >
            <h4 className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-xs font-medium text-stone-500">
                {pt.label}
              </span>
              <span className="text-base font-semibold text-stone-900">
                {pt.title}
              </span>
            </h4>
            <div className="mt-2.5 space-y-3">
              {pt.parts.map((p, i) => (
                <PartView key={i} p={p} />
              ))}
            </div>
          </section>
        ))}

        <p className="rounded-lg border-l-4 border-stone-400 bg-stone-100 px-3 py-2.5 text-stone-800">
          <span className="font-semibold">Mẹo dịch: </span>
          {item.tip}
        </p>
      </div>
    </div>
  );
}

export default function GiaiThichDich() {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (i: number) =>
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  return (
    <>
      <header className="mb-6 mt-10">
        <h1 className="text-xl font-semibold text-stone-900">{TITLE}</h1>
        <p className="mt-1 text-sm text-stone-500">
          Bấm vào từng câu để xem đáp án và giải thích.
        </p>
      </header>

      <ol className="space-y-3">
        {ITEMS.map((item, i) => {
          const isOpen = open.includes(i);
          return (
            <li
              key={i}
              className="overflow-hidden rounded-sm border border-stone-200 bg-white"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`panel-${i}`}
                className="flex w-full items-start gap-3 px-4 py-4 text-left hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone-500"
              >
                <span className="mt-1 w-5 shrink-0 text-sm tabular-nums text-stone-400">
                  {i + 1}.
                </span>
                <span className="ztai__zh flex-1 text-2xl leading-relaxed text-stone-900">
                  {item.q}
                </span>
                <span className="mt-1.5">
                  <Chevron open={isOpen} />
                </span>
              </button>

              {isOpen && (
                <div id={`panel-${i}`}>
                  <Detail item={item} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
