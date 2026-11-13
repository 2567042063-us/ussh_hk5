"use client";

import { useState } from "react";

const vocabulary = [
  // Đầu và mặt
  {
    word: "头",
    pinyin: "tóu",
    meaning: "Đầu",
    group: "Đầu và mặt",
    example: "我的头有点儿疼。",
    ep: "Wǒ de tóu yǒudiǎnr téng.",
    vi: "Đầu tôi hơi đau.",
  },
  {
    word: "头发",
    pinyin: "tóufa",
    meaning: "Tóc",
    group: "Đầu và mặt",
    example: "她的头发很长。",
    ep: "Tā de tóufa hěn cháng.",
    vi: "Tóc cô ấy rất dài.",
  },
  {
    word: "脸",
    pinyin: "liǎn",
    meaning: "Mặt",
    group: "Đầu và mặt",
    example: "他的脸红了。",
    ep: "Tā de liǎn hóng le.",
    vi: "Mặt anh ấy đỏ lên.",
  },
  {
    word: "眼睛",
    pinyin: "yǎnjing",
    meaning: "Mắt",
    group: "Đầu và mặt",
    example: "我的眼睛有点儿疼。",
    ep: "Wǒ de yǎnjing yǒudiǎnr téng.",
    vi: "Mắt tôi hơi đau.",
  },
  {
    word: "眉毛",
    pinyin: "méimao",
    meaning: "Lông mày",
    group: "Đầu và mặt",
    example: "她的眉毛很好看。",
    ep: "Tā de méimao hěn hǎokàn.",
    vi: "Lông mày cô ấy rất đẹp.",
  },
  {
    word: "鼻子",
    pinyin: "bízi",
    meaning: "Mũi",
    group: "Đầu và mặt",
    example: "我的鼻子不舒服。",
    ep: "Wǒ de bízi bù shūfu.",
    vi: "Mũi tôi không thoải mái.",
  },
  {
    word: "嘴",
    pinyin: "zuǐ",
    meaning: "Miệng",
    group: "Đầu và mặt",
    example: "张开嘴。",
    ep: "Zhāngkāi zuǐ.",
    vi: "Há miệng ra.",
  },
  {
    word: "嘴巴",
    pinyin: "zuǐba",
    meaning: "Miệng",
    group: "Đầu và mặt",
    example: "他的嘴巴很小。",
    ep: "Tā de zuǐba hěn xiǎo.",
    vi: "Miệng anh ấy rất nhỏ.",
  },
  {
    word: "牙齿",
    pinyin: "yáchǐ",
    meaning: "Răng",
    group: "Đầu và mặt",
    example: "每天早上要刷牙齿。",
    ep: "Měitiān zǎoshang yào shuā yáchǐ.",
    vi: "Mỗi sáng cần đánh răng.",
  },
  {
    word: "舌头",
    pinyin: "shétou",
    meaning: "Lưỡi",
    group: "Đầu và mặt",
    example: "舌头可以尝出味道。",
    ep: "Shétou kěyǐ cháng chū wèidào.",
    vi: "Lưỡi có thể nếm được mùi vị.",
  },
  {
    word: "耳朵",
    pinyin: "ěrduo",
    meaning: "Tai",
    group: "Đầu và mặt",
    example: "我的耳朵听不清楚。",
    ep: "Wǒ de ěrduo tīng bu qīngchu.",
    vi: "Tai tôi nghe không rõ.",
  },

  // Thân người
  {
    word: "脖子",
    pinyin: "bózi",
    meaning: "Cổ",
    group: "Thân người",
    example: "我的脖子有点儿酸。",
    ep: "Wǒ de bózi yǒudiǎnr suān.",
    vi: "Cổ tôi hơi mỏi.",
  },
  {
    word: "肩膀",
    pinyin: "jiānbǎng",
    meaning: "Vai",
    group: "Thân người",
    example: "他的肩膀很宽。",
    ep: "Tā de jiānbǎng hěn kuān.",
    vi: "Vai anh ấy rộng.",
  },
  {
    word: "胸",
    pinyin: "xiōng",
    meaning: "Ngực",
    group: "Thân người",
    example: "他的胸口有点儿疼。",
    ep: "Tā de xiōngkǒu yǒudiǎnr téng.",
    vi: "Ngực anh ấy hơi đau.",
  },
  {
    word: "肚子",
    pinyin: "dùzi",
    meaning: "Bụng",
    group: "Thân người",
    example: "我肚子饿了。",
    ep: "Wǒ dùzi è le.",
    vi: "Tôi đói bụng rồi.",
  },
  {
    word: "腰",
    pinyin: "yāo",
    meaning: "Eo, thắt lưng",
    group: "Thân người",
    example: "我的腰有点儿疼。",
    ep: "Wǒ de yāo yǒudiǎnr téng.",
    vi: "Eo tôi hơi đau.",
  },
  {
    word: "背",
    pinyin: "bèi",
    meaning: "Lưng",
    group: "Thân người",
    example: "他的背很疼。",
    ep: "Tā de bèi hěn téng.",
    vi: "Lưng anh ấy rất đau.",
  },
  {
    word: "身体",
    pinyin: "shēntǐ",
    meaning: "Cơ thể, thân thể",
    group: "Thân người",
    example: "身体健康很重要。",
    ep: "Shēntǐ jiànkāng hěn zhòngyào.",
    vi: "Sức khỏe rất quan trọng.",
  },

  // Tay và chân
  {
    word: "胳膊",
    pinyin: "gēbo",
    meaning: "Cánh tay",
    group: "Tay và chân",
    example: "我的胳膊有点儿疼。",
    ep: "Wǒ de gēbo yǒudiǎnr téng.",
    vi: "Cánh tay tôi hơi đau.",
  },
  {
    word: "手",
    pinyin: "shǒu",
    meaning: "Bàn tay",
    group: "Tay và chân",
    example: "请洗手。",
    ep: "Qǐng xǐ shǒu.",
    vi: "Xin hãy rửa tay.",
  },
  {
    word: "手指",
    pinyin: "shǒuzhǐ",
    meaning: "Ngón tay",
    group: "Tay và chân",
    example: "我的手指很冷。",
    ep: "Wǒ de shǒuzhǐ hěn lěng.",
    vi: "Ngón tay tôi rất lạnh.",
  },
  {
    word: "手掌",
    pinyin: "shǒuzhǎng",
    meaning: "Lòng bàn tay",
    group: "Tay và chân",
    example: "他的手掌很大。",
    ep: "Tā de shǒuzhǎng hěn dà.",
    vi: "Lòng bàn tay anh ấy rất lớn.",
  },
  {
    word: "腿",
    pinyin: "tuǐ",
    meaning: "Chân (phần chân)",
    group: "Tay và chân",
    example: "走了一天，我的腿很累。",
    ep: "Zǒu le yì tiān, wǒ de tuǐ hěn lèi.",
    vi: "Đi bộ cả ngày, chân tôi rất mỏi.",
  },
  {
    word: "膝盖",
    pinyin: "xīgài",
    meaning: "Đầu gối",
    group: "Tay và chân",
    example: "我的膝盖不舒服。",
    ep: "Wǒ de xīgài bù shūfu.",
    vi: "Đầu gối tôi không thoải mái.",
  },
  {
    word: "脚",
    pinyin: "jiǎo",
    meaning: "Bàn chân",
    group: "Tay và chân",
    example: "我的脚很冷。",
    ep: "Wǒ de jiǎo hěn lěng.",
    vi: "Chân tôi rất lạnh.",
  },
  {
    word: "脚趾",
    pinyin: "jiǎozhǐ",
    meaning: "Ngón chân",
    group: "Tay và chân",
    example: "我的脚趾有点儿疼。",
    ep: "Wǒ de jiǎozhǐ yǒudiǎnr téng.",
    vi: "Ngón chân tôi hơi đau.",
  },

  // Nội tạng và cấu tạo cơ thể
  {
    word: "心脏",
    pinyin: "xīnzàng",
    meaning: "Tim",
    group: "Nội tạng",
    example: "心脏是重要的器官。",
    ep: "Xīnzàng shì zhòngyào de qìguān.",
    vi: "Tim là một cơ quan quan trọng.",
  },
  {
    word: "胃",
    pinyin: "wèi",
    meaning: "Dạ dày",
    group: "Nội tạng",
    example: "我的胃不太舒服。",
    ep: "Wǒ de wèi bú tài shūfu.",
    vi: "Dạ dày tôi không được thoải mái.",
  },
  {
    word: "肺",
    pinyin: "fèi",
    meaning: "Phổi",
    group: "Nội tạng",
    example: "肺帮助我们呼吸。",
    ep: "Fèi bāngzhù wǒmen hūxī.",
    vi: "Phổi giúp chúng ta hô hấp.",
  },
  {
    word: "肝",
    pinyin: "gān",
    meaning: "Gan",
    group: "Nội tạng",
    example: "肝是人体的重要器官。",
    ep: "Gān shì réntǐ de zhòngyào qìguān.",
    vi: "Gan là cơ quan quan trọng của cơ thể.",
  },
  {
    word: "血",
    pinyin: "xuè",
    meaning: "Máu",
    group: "Nội tạng",
    example: "血液在身体里流动。",
    ep: "Xuèyè zài shēntǐ lǐ liúdòng.",
    vi: "Máu lưu thông trong cơ thể.",
  },
  {
    word: "骨头",
    pinyin: "gǔtou",
    meaning: "Xương",
    group: "Nội tạng",
    example: "骨头支撑着身体。",
    ep: "Gǔtou zhīchēng zhe shēntǐ.",
    vi: "Xương nâng đỡ cơ thể.",
  },
  {
    word: "肌肉",
    pinyin: "jīròu",
    meaning: "Cơ bắp",
    group: "Nội tạng",
    example: "运动可以锻炼肌肉。",
    ep: "Yùndòng kěyǐ duànliàn jīròu.",
    vi: "Vận động có thể rèn luyện cơ bắp.",
  },
  {
    word: "皮肤",
    pinyin: "pífū",
    meaning: "Da",
    group: "Nội tạng",
    example: "皮肤需要保护。",
    ep: "Pífū xūyào bǎohù.",
    vi: "Da cần được bảo vệ.",
  },

  // Sức khỏe
  {
    word: "健康",
    pinyin: "jiànkāng",
    meaning: "Khỏe mạnh, sức khỏe",
    group: "Sức khỏe",
    example: "健康比什么都重要。",
    ep: "Jiànkāng bǐ shénme dōu zhòngyào.",
    vi: "Sức khỏe quan trọng hơn tất cả.",
  },
  {
    word: "疼",
    pinyin: "téng",
    meaning: "Đau",
    group: "Sức khỏe",
    example: "我的头很疼。",
    ep: "Wǒ de tóu hěn téng.",
    vi: "Đầu tôi rất đau.",
  },
  {
    word: "头疼",
    pinyin: "tóuténg",
    meaning: "Đau đầu",
    group: "Sức khỏe",
    example: "我今天有点儿头疼。",
    ep: "Wǒ jīntiān yǒudiǎnr tóuténg.",
    vi: "Hôm nay tôi hơi đau đầu.",
  },
  {
    word: "发烧",
    pinyin: "fāshāo",
    meaning: "Sốt",
    group: "Sức khỏe",
    example: "他昨天晚上发烧了。",
    ep: "Tā zuótiān wǎnshang fāshāo le.",
    vi: "Tối qua anh ấy bị sốt.",
  },
  {
    word: "感冒",
    pinyin: "gǎnmào",
    meaning: "Cảm cúm, cảm lạnh",
    group: "Sức khỏe",
    example: "我感冒了，需要休息。",
    ep: "Wǒ gǎnmào le, xūyào xiūxi.",
    vi: "Tôi bị cảm, cần nghỉ ngơi.",
  },
  {
    word: "咳嗽",
    pinyin: "késou",
    meaning: "Ho",
    group: "Sức khỏe",
    example: "他一直在咳嗽。",
    ep: "Tā yìzhí zài késou.",
    vi: "Anh ấy cứ ho mãi.",
  },
  {
    word: "检查",
    pinyin: "jiǎnchá",
    meaning: "Kiểm tra, khám",
    group: "Sức khỏe",
    example: "我想去医院检查身体。",
    ep: "Wǒ xiǎng qù yīyuàn jiǎnchá shēntǐ.",
    vi: "Tôi muốn đến bệnh viện kiểm tra sức khỏe.",
  },
];

const groups = [
  "Tất cả",
  "Đầu và mặt",
  "Thân người",
  "Tay và chân",
  "Trong người",
  "Sức khỏe",
];

type VocabularyItem = (typeof vocabulary)[number];

export default function BodyVocabulary() {
  const [activeGroup, setActiveGroup] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<VocabularyItem | null>(null);

  const filtered = vocabulary.filter((item) => {
    const matchesGroup = activeGroup === "Tất cả" || item.group === activeGroup;

    const keyword = search.toLowerCase().trim();
    const matchesSearch =
      !keyword ||
      item.word.includes(keyword) ||
      item.pinyin.toLowerCase().includes(keyword) ||
      item.meaning.toLowerCase().includes(keyword);

    return matchesGroup && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-800 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              HSK 4 VOCABULARY
            </span>
            <span className="text-sm text-slate-400">Ôn tập theo chủ đề</span>
          </div>

          <h1 className="text-4xl font-bold text-sky-600">人体部位</h1>
          <p className="mt-2 text-slate-500">Từ vựng về cơ thể con người</p>
          <p className="mt-1 text-sm text-slate-400">
            Khám phá {vocabulary.length} từ vựng tiếng Trung
          </p>
        </header>

        {/* Search */}
        <label className="mb-5 flex items-center gap-3 rounded-xl border border-sky-400 bg-white px-4 py-3 shadow-[0_0_0_4px_rgba(14,165,233,0.12)] focus-within:border-sky-500">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 text-sky-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Gõ chữ Hán, pinyin hoặc nghĩa tiếng Việt..."
            aria-label="Tìm từ"
            className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
        </label>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => {
                setActiveGroup(group);
                setSelected(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeGroup === group
                  ? "bg-sky-500 text-white shadow-md shadow-sky-100"
                  : "bg-sky-50 text-sky-700 hover:bg-sky-100"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Vocabulary grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((item) => (
            <div key={item.word} className="relative">
              <button
                onClick={() =>
                  setSelected(selected?.word === item.word ? null : item)
                }
                className={`w-full rounded-md border bg-white p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100 ${
                  selected?.word === item.word
                    ? "border-sky-500 ring-2 ring-sky-100"
                    : "border-slate-100 hover:border-0"
                }`}
              >
                <div className="ztai__zh mb-2 text-5xl text-sky-800">
                  {item.word}
                </div>

                <div className="mb-1 text-sm text-slate-500">{item.pinyin}</div>

                <div className="text-sm font-medium text-slate-700">
                  {item.meaning}
                </div>
              </button>

              {/* Animated Popover */}
              {selected?.word === item.word && (
                <div
                  key={item.word}
                  className="animate-popover absolute left-1/2 top-full z-30 mt-3 w-72 max-w-[85vw] -translate-x-1/2 rounded-sm border border-sky-500 bg-white p-5 shadow-xl shadow-sky-100"
                >
                  {/* <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-sky-200 bg-white" /> */}

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="ztai__zh text-5xl text-sky-800">
                          {item.word}
                        </h3>
                        <p className="mt-1 text-slate-500">{item.pinyin}</p>
                      </div>

                      <button
                        onClick={() => setSelected(null)}
                        className="text-xl text-slate-400 hover:text-sky-600"
                        aria-label="Đóng"
                      >
                        ×
                      </button>
                    </div>

                    <div className="mt-3 flex items-center gap-3 rounded-lg bg-sky-50 p-3">
                      <span className="text-xs text-sky-500">NGHĨA:</span>
                      <span className="text-slate-800">{item.meaning}</span>
                    </div>

                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold text-sky-600">
                        VÍ DỤ
                      </p>
                      <p className="ztai__zh text-2xl font-medium text-slate-800">
                        {item.example}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{item.ep}</p>
                      <p className="mt-2 text-sm text-slate-700">{item.vi}</p>
                    </div>

                    <div className="mt-4 border-t border-sky-100 pt-3">
                      <span className="text-xs text-slate-400">
                        Chủ đề: {item.group}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-slate-400">
            Không tìm thấy từ vựng phù hợp.
          </div>
        )}
      </div>

      {/* Popover animation */}
      <style jsx global>{`
        @keyframes popoverIn {
          from {
            opacity: 0;
            transform: translate(-50%, -8px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        .animate-popover {
          animation: popoverIn 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: top center;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-popover {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
