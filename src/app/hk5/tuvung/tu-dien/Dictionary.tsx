"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { Info, Layers, PencilLine } from "lucide-react";
import { pinyin } from "pinyin-pro";

// Kiểu dữ liệu cho câu ví dụ
interface ExampleSentence {
  cn: string;
  pinyin: string;
  vi: string;
}

// Kiểu dữ liệu cho từng bộ thành phần cấu tạo nên chữ Hán
interface HanziComponentDetail {
  char: string; // Bộ thành phần (VD: 扌, 犮)
  role: string; // Vai trò: "Bộ thủ chính", "Thành phần biểu âm", "Thành phần biểu ý", "Biến thể bộ thủ"...
  nameVi: string; // Tên gọi tiếng Việt / Hán Việt (VD: Bộ Thủ - tay)
  pinyin: string; // Phiên âm (VD: shǒu)
  radicalNumber?: number; // Số thứ tự trong 214 bộ thủ Khang Hy (nếu là bộ thủ)
  strokes: number; // Số nét của bộ thành phần
  meaning: string; // Giải thích nghĩa & nguồn gốc
}

// Kiểu dữ liệu phân tích cấu trúc chữ Hán
interface CharacterStructure {
  char: string;
  idsSymbol: string; // Ký hiệu IDS (VD: ⿰, ⿱, ⿴, ⿺...)
  structureName: string; // Tên cấu trúc tiếng Việt (VD: Kết cấu Trái – Phải)
  formula: string; // Công thức trực quan (VD: 拔 = 扌 + 犮)
  totalStrokes: number; // Tổng số nét
  mainRadical: string; // Bộ thủ chính
  etymologyNote?: string; // Ghi chú chiết tự / mẹo nhớ nhanh
  components: HanziComponentDetail[];
}

// Kiểu dữ liệu cho mỗi mục từ điển
interface DictionaryEntry {
  word: string;
  traditional?: string;
  pinyin: string;
  hanViet?: string;
  partOfSpeech: string;
  meanings: string[];
  examples: ExampleSentence[];
}

// 1. Dữ liệu từ điển cốt lõi
const SAMPLE_DICTIONARY: Record<string, DictionaryEntry> = {
  拔: {
    word: "拔",
    traditional: "拔",
    pinyin: "bá",
    hanViet: "Bạt",
    partOfSpeech: "Động từ",
    meanings: [
      "Nhổ, kéo ra, rút ra (nhổ cỏ, nhổ răng, rút kiếm...)",
      "Chọn lọc, đề bạt (nhân tài)",
      "Chiếm lấy, đánh chiếm (thành trì)",
    ],
    examples: [
      {
        cn: "他去医院拔牙了。",
        pinyin: "Tā qù yīyuàn báyá le.",
        vi: "Anh ấy đi bệnh viện nhổ răng rồi.",
      },
      {
        cn: "我们要选拔优秀的人才。",
        pinyin: "Wǒmen yào xuǎnbá yōuxiù de réncái.",
        vi: "Chúng ta cần tuyển chọn những nhân tài ưu tú.",
      },
    ],
  },
  图书城: {
    word: "图书城",
    traditional: "圖書城",
    pinyin: "tú shū chéng",
    hanViet: "Đồ thư thành",
    partOfSpeech: "Danh từ",
    meanings: ["Thành phố sách", "Trung tâm hoặc khu vực chuyên bán sách"],
    examples: [
      {
        cn: "我们星期天去图书城买书。",
        pinyin: "Wǒmen xīngqītiān qù túshūchéng mǎi shū.",
        vi: "Chủ nhật chúng tôi đi thành phố sách mua sách.",
      },
    ],
  },
  续: {
    word: "续",
    traditional: "續",
    pinyin: "xù",
    hanViet: "Tục",
    partOfSpeech: "Động từ",
    meanings: [
      "Tiếp tục, nối tiếp, kế tục",
      "Gia hạn (hợp đồng, thẻ, visa...)",
      "Thêm vào, châm thêm (nước, trà...)",
    ],
    examples: [
      {
        cn: "请续一下杯。",
        pinyin: "Qǐng xù yīxià bēi.",
        vi: "Làm ơn châm thêm nước vào cốc.",
      },
      {
        cn: "合同下个月到期，我们需要续签。",
        pinyin: "Hétóng xià gè yuè dàoqī, wǒmen xūyào xùqiān.",
        vi: "Hợp đồng tháng sau hết hạn, chúng ta cần gia hạn ký tiếp.",
      },
    ],
  },
  学习: {
    word: "学习",
    traditional: "學習",
    pinyin: "xué xí",
    hanViet: "Học tập",
    partOfSpeech: "Động từ / Danh từ",
    meanings: [
      "Học tập, nghiên cứu",
      "Noi theo, học hỏi (tấm gương, kinh nghiệm)",
    ],
    examples: [
      {
        cn: "我每天都在学习汉语。",
        pinyin: "Wǒ měitiān dōu zài xuéxí Hànyǔ.",
        vi: "Tôi học tiếng Hán mỗi ngày.",
      },
      {
        cn: "我们要向他学习。",
        pinyin: "Wǒmen yào xiàng tā xuéxí.",
        vi: "Chúng ta cần phải học hỏi anh ấy.",
      },
    ],
  },
  你好: {
    word: "你好",
    traditional: "你好",
    pinyin: "nǐ hǎo",
    hanViet: "Nhĩ hảo",
    partOfSpeech: "Thán từ / Đại từ",
    meanings: ["Xin chào (dùng khi gặp mặt hoặc chào hỏi xã giao)"],
    examples: [
      {
        cn: "你好，很高兴认识你！",
        pinyin: "Nǐ hǎo, hěn gāoxìng rènshi nǐ!",
        vi: "Xin chào, rất vui được làm quen với bạn!",
      },
    ],
  },
};

// 2. Cơ sở dữ liệu phân tích cấu trúc & bộ thành phần từng chữ Hán
// Trong thực tế: nạp từ bảng `hanzi_structures` (dữ liệu Make Me a Hanzi + Bảng 214 bộ thủ Khang Hy)
const HANZI_STRUCTURE_DB: Record<string, CharacterStructure> = {
  拔: {
    char: "拔",
    idsSymbol: "⿰",
    structureName: "Kết cấu Trái – Phải",
    formula: "拔 = 扌 (⺘) + 犮",
    totalStrokes: 8,
    mainRadical: "扌 (Bộ Thủ)",
    etymologyNote:
      "Chữ Hình thanh & Hội ý: Bên trái có bộ Tay (扌) chỉ hành động dùng tay; bên phải là chữ Bạt (犮) vừa gợi âm đọc 'bá' vừa mang nghĩa kéo mạnh.",
    components: [
      {
        char: "扌",
        role: "Bộ thủ chính (Biểu ý)",
        nameVi: "Bộ Thủ (Tay) — dạng viết gọn của 手",
        pinyin: "shǒu",
        radicalNumber: 64,
        strokes: 3,
        meaning:
          "Bàn tay, biểu thị các động tác thực hiện bằng tay (kéo, nhổ, nắm, đánh...).",
      },
      {
        char: "犮",
        role: "Thành phần biểu âm & gợi ý",
        nameVi: "Chữ Bạt (Kéo / Chạy)",
        pinyin: "bá",
        strokes: 5,
        meaning:
          "Tượng hình con chó (犬) bị buộc dây kéo chân chạy, mang nghĩa gốc là lôi kéo, giật mạnh ra.",
      },
    ],
  },
  图: {
    char: "图",
    idsSymbol: "⿴",
    structureName: "Kết cấu Bao quanh toàn bộ",
    formula: "图 = 囗 + 冬",
    totalStrokes: 8,
    mainRadical: "囗 (Bộ Vi)",
    etymologyNote:
      "Bên ngoài là khung viền (囗) tượng trưng cho biên giới bản đồ/khung tranh, bên trong là chữ Đông (冬).",
    components: [
      {
        char: "囗",
        role: "Bộ thủ chính (Biểu ý)",
        nameVi: "Bộ Vi (Vây quanh)",
        pinyin: "wéi",
        radicalNumber: 31,
        strokes: 3,
        meaning: "Vòng vây, khuôn viên, khung hình hoặc ranh giới lãnh thổ.",
      },
      {
        char: "冬",
        role: "Thành phần bên trong",
        nameVi: "Chữ Đông (Mùa đông)",
        pinyin: "dōng",
        strokes: 5,
        meaning:
          "Mùa đông, điểm kết thúc của một năm (gồm bộ Trĩ 夂 và hai chấm băng 冫).",
      },
    ],
  },
  书: {
    char: "书",
    idsSymbol: "⿻",
    structureName: "Kết cấu Độc thể (Xuyên nét)",
    formula: "书 = 𠃌 + 丨 + 丶",
    totalStrokes: 4,
    mainRadical: "乙 (Bộ Ất)",
    etymologyNote:
      "Dạng giản thể của chữ 書 (gồm cây bút 聿 viết trên thẻ tre/giấy 曰).",
    components: [
      {
        char: "乙",
        role: "Bộ thủ chính",
        nameVi: "Bộ Ất",
        pinyin: "yǐ",
        radicalNumber: 5,
        strokes: 1,
        meaning: "Can thứ hai trong Thiên Can, nét móc cong.",
      },
      {
        char: "丨",
        role: "Nét cấu thành",
        nameVi: "Bộ Cổn (Nét sổ)",
        pinyin: "gǔn",
        radicalNumber: 2,
        strokes: 1,
        meaning: "Nét sổ thẳng từ trên xuống, tượng trưng cho trục xuyên suốt.",
      },
    ],
  },
  城: {
    char: "城",
    idsSymbol: "⿰",
    structureName: "Kết cấu Trái – Phải",
    formula: "城 = 土 + 成",
    totalStrokes: 9,
    mainRadical: "土 (Bộ Thổ)",
    etymologyNote:
      "Chữ Hình thanh: Bên trái là Đất (土) vì thành lũy xưa đắp bằng đất; bên phải là Thành (成) gợi âm đọc 'chéng'.",
    components: [
      {
        char: "土",
        role: "Bộ thủ chính (Biểu ý)",
        nameVi: "Bộ Thổ (Đất)",
        pinyin: "tǔ",
        radicalNumber: 32,
        strokes: 3,
        meaning: "Đất đai, nền móng, tường thành đắp bằng đất.",
      },
      {
        char: "成",
        role: "Thành phần biểu âm",
        nameVi: "Chữ Thành (Hoàn thành)",
        pinyin: "chéng",
        strokes: 6,
        meaning: "Hoàn thành, thành tựu, trở nên.",
      },
    ],
  },
  续: {
    char: "续",
    idsSymbol: "⿰",
    structureName: "Kết cấu Trái – Phải",
    formula: "续 = 纟 + 卖",
    totalStrokes: 11,
    mainRadical: "纟 (Bộ Mịch)",
    etymologyNote:
      "Chữ Hình thanh: Bộ Sợi tơ (纟) chỉ việc nối các sợi chỉ lại với nhau; bên phải là chữ Mại (卖) gợi âm.",
    components: [
      {
        char: "纟",
        role: "Bộ thủ chính (Biểu ý)",
        nameVi: "Bộ Mịch (Sợi tơ) — dạng giản thể của 糸",
        pinyin: "mì",
        radicalNumber: 120,
        strokes: 3,
        meaning: "Sợi tơ nhỏ, dây nối, biểu thị sự liên kết, kéo dài liên tục.",
      },
      {
        char: "卖",
        role: "Thành phần biểu âm",
        nameVi: "Chữ Mại (Bán)",
        pinyin: "mài",
        strokes: 8,
        meaning: "Bán hàng, trao đổi (trong phồn thể là 賣).",
      },
    ],
  },
  学: {
    char: "学",
    idsSymbol: "⿱",
    structureName: "Kết cấu Trên – Dưới",
    formula: "学 = ⺌ + 冖 + 子",
    totalStrokes: 8,
    mainRadical: "子 (Bộ Tử)",
    etymologyNote:
      "Chữ Hội ý: Đứa trẻ (子) ngồi dưới mái nhà (冖) tiếp thu tri thức (⺌).",
    components: [
      {
        char: "⺌",
        role: "Thành phần phía trên",
        nameVi: "Bộ Tiểu (Biến thể)",
        pinyin: "xiǎo",
        radicalNumber: 42,
        strokes: 3,
        meaning:
          "Tượng trưng cho hai bàn tay truyền dạy tri thức hoặc các thẻ tre.",
      },
      {
        char: "冖",
        role: "Thành phần giữa",
        nameVi: "Bộ Mịch (Trùm khăn / Mái che)",
        pinyin: "mì",
        radicalNumber: 14,
        strokes: 2,
        meaning: "Mái nhà, lớp học che chở.",
      },
      {
        char: "子",
        role: "Bộ thủ chính (Biểu ý)",
        nameVi: "Bộ Tử (Đứa trẻ)",
        pinyin: "zǐ",
        radicalNumber: 39,
        strokes: 3,
        meaning: "Đứa trẻ, người học trò.",
      },
    ],
  },
  习: {
    char: "习",
    idsSymbol: "⿹",
    structureName: "Kết cấu Bao góc trên phải",
    formula: "习 = 𠃌 + 冫",
    totalStrokes: 3,
    mainRadical: "乙 (Bộ Ất)",
    etymologyNote:
      "Dạng giản thể của 習 (chim non 羽 tập bay dưới ánh mặt trời 白 -> luyện tập).",
    components: [
      {
        char: "乙",
        role: "Bộ thủ chính",
        nameVi: "Bộ Ất",
        pinyin: "yǐ",
        radicalNumber: 5,
        strokes: 1,
        meaning: "Tượng trưng cho một bên cánh chim non.",
      },
      {
        char: "冫",
        role: "Thành phần bên trong",
        nameVi: "Bộ Băng (2 chấm)",
        pinyin: "bīng",
        radicalNumber: 15,
        strokes: 2,
        meaning: "Hai nét chấm hất tạo thành hình lông vũ.",
      },
    ],
  },
};

// 3. Kho câu song ngữ (Mô phỏng dữ liệu từ Tatoeba / OPUS Corpus)
const BILINGUAL_CORPUS: { cn: string; vi: string }[] = [
  { cn: "谢谢你的帮助！", vi: "Cảm ơn sự giúp đỡ của bạn!" },
  {
    cn: "不客气，这是我应该做的。",
    vi: "Đừng khách sáo, đây là việc tôi nên làm.",
  },
  {
    cn: "今天天气真好，我们去公园吧。",
    vi: "Thời tiết hôm nay thật đẹp, chúng ta đi công viên nhé.",
  },
  { cn: "请问去火车站怎么走？", vi: "Xin hỏi đi đến ga tàu hỏa đi đường nào?" },
  { cn: "我喜欢喝中国茶。", vi: "Tôi thích uống trà Trung Quốc." },
  {
    cn: "工作虽然很忙，但是我很快乐。",
    vi: "Công việc tuy rất bận, nhưng tôi rất vui.",
  },
  {
    cn: "别担心，一切都会好起来的。",
    vi: "Đừng lo lắng, mọi chuyện rồi sẽ ổn thôi.",
  },
  { cn: "这本书非常值得一看。", vi: "Cuốn sách này rất đáng để đọc." },
  {
    cn: "我们明天早上八点见面。",
    vi: "Chúng ta gặp nhau lúc 8 giờ sáng mai nhé.",
  },
  {
    cn: "成功需要不断的努力。",
    vi: "Thành công đòi hỏi sự nỗ lực không ngừng.",
  },
];

function findExamplesFromCorpus(keyword: string): ExampleSentence[] {
  const cleanKeyword = keyword.trim();
  if (!cleanKeyword) return [];

  return BILINGUAL_CORPUS.filter((item) => item.cn.includes(cleanKeyword))
    .sort((a, b) => a.cn.length - b.cn.length)
    .slice(0, 3)
    .map((item) => ({
      cn: item.cn,
      pinyin: pinyin(item.cn, { toneType: "symbol", type: "string" }),
      vi: item.vi,
    }));
}

export default function ChineseDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState<string>("拔");
  const [query, setQuery] = useState<string>("拔");
  // Tab đang chọn để xem cấu trúc chi tiết từng chữ (với từ ghép nhiều chữ như 图书城)
  const [activeStructIndex, setActiveStructIndex] = useState<number>(0);

  // State cho dịch tự động & ví dụ sinh động (Corpus + AI Cache)
  const [fallbackTranslation, setFallbackTranslation] = useState<string | null>(
    null,
  );
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [dynamicExamples, setDynamicExamples] = useState<ExampleSentence[]>([]);
  const [exampleSource, setExampleSource] = useState<
    "dictionary" | "corpus" | "ai" | null
  >(null);
  const [isLoadingExamples, setIsLoadingExamples] = useState<boolean>(false);

  const aiExampleCacheRef = useRef<Record<string, ExampleSentence[]>>({});
  const writerContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const writerInstanceRefs = useRef<(HanziWriter | null)[]>([]);

  // Tách các ký tự Hán
  const chineseChars = useMemo(
    () => Array.from(query).filter((char) => /[一-龥]/.test(char)),
    [query],
  );

  // Ký tự đang được xem phân tích cấu trúc
  const safeStructIndex =
    activeStructIndex < chineseChars.length ? activeStructIndex : 0;
  const activeStructChar = chineseChars[safeStructIndex] || "";
  const activeStructure: CharacterStructure | null = activeStructChar
    ? HANZI_STRUCTURE_DB[activeStructChar] || null
    : null;

  const generatedPinyin = query
    ? pinyin(query, { toneType: "symbol", type: "string" })
    : "";

  const dictionaryEntry = SAMPLE_DICTIONARY[query.trim()];
  const resolvedExamples = dictionaryEntry?.examples.length
    ? dictionaryEntry.examples
    : dynamicExamples;
  const resolvedExampleSource = dictionaryEntry?.examples.length
    ? "dictionary"
    : exampleSource;
  const resolvedIsLoading = dictionaryEntry ? false : isLoadingExamples;

  // Xử lý tra cứu 3 tầng cho Ví dụ minh họa & Dịch nghĩa
  useEffect(() => {
    const cleanQuery = query.trim();
    if (!cleanQuery) return;

    const entry = SAMPLE_DICTIONARY[cleanQuery];
    if (entry && entry.examples.length > 0) {
      return;
    }

    const fetchTranslationAndExamples = async () => {
      setIsTranslating(true);
      setIsLoadingExamples(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        setFallbackTranslation(
          `[Bản dịch tự động cho "${cleanQuery}"]: Kết nối endpoint /api/translate của bạn tại đây để dịch nghĩa chính xác.`,
        );
      } catch {
        setFallbackTranslation("Không thể tải bản dịch tự động.");
      } finally {
        setIsTranslating(false);
      }

      const corpusMatches = findExamplesFromCorpus(cleanQuery);
      if (corpusMatches.length > 0) {
        setDynamicExamples(corpusMatches);
        setExampleSource("corpus");
        setIsLoadingExamples(false);
        return;
      }

      if (aiExampleCacheRef.current[cleanQuery]) {
        setDynamicExamples(aiExampleCacheRef.current[cleanQuery]);
        setExampleSource("ai");
        setIsLoadingExamples(false);
        return;
      }

      try {
        await new Promise((resolve) => setTimeout(resolve, 700));
        const sampleCn1 = `我经常使用“${cleanQuery}”这个词。`;
        const sampleCn2 = `请用“${cleanQuery}”造一个句子。`;

        const generatedByAI: ExampleSentence[] = [
          {
            cn: sampleCn1,
            pinyin: pinyin(sampleCn1, { toneType: "symbol", type: "string" }),
            vi: `Tôi thường xuyên sử dụng từ "${cleanQuery}" này.`,
          },
          {
            cn: sampleCn2,
            pinyin: pinyin(sampleCn2, { toneType: "symbol", type: "string" }),
            vi: `Hãy dùng từ "${cleanQuery}" để đặt một câu.`,
          },
        ];

        aiExampleCacheRef.current[cleanQuery] = generatedByAI;
        setDynamicExamples(generatedByAI);
        setExampleSource("ai");
      } catch {
        setDynamicExamples([]);
      } finally {
        setIsLoadingExamples(false);
      }
    };

    fetchTranslationAndExamples();
  }, [query]);

  // Khởi tạo HanziWriter cho toàn bộ ký tự
  useEffect(() => {
    writerInstanceRefs.current = [];

    chineseChars.forEach((char, index) => {
      const container = writerContainerRefs.current[index];
      if (!container) return;

      container.innerHTML = "";

      try {
        const writer = HanziWriter.create(container, char, {
          width: 140,
          height: 140,
          padding: 10,
          showOutline: true,
          strokeAnimationSpeed: 1.2,
          delayBetweenStrokes: 250,
          strokeColor: "#0369a1",
          outlineColor: "#e5e7eb",
          drawingColor: "#1d4ed8",
          radicalColor: "#b91c1c", // Tô màu đỏ đậm cho bộ thủ chính
        });

        writerInstanceRefs.current[index] = writer;
      } catch (err) {
        console.error(`Lỗi khởi tạo HanziWriter cho chữ "${char}":`, err);
      }
    });
  }, [chineseChars]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setFallbackTranslation(null);
      setDynamicExamples([]);
      setExampleSource(null);
      setActiveStructIndex(0);
      setQuery(searchTerm.trim());
    }
  };

  const handleQuickSelect = (word: string) => {
    setSearchTerm(word);
    setFallbackTranslation(null);
    setDynamicExamples([]);
    setExampleSource(null);
    setActiveStructIndex(0);
    setQuery(word);
  };

  const handleQuizStroke = (index: number, char: string) => {
    writerInstanceRefs.current[index]?.quiz({
      onComplete: () => {
        alert(`Chúc mừng! Bạn đã viết đúng chữ "${char}"`);
      },
    });
  };

  const handleSpeak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getExampleSourceBadge = () => {
    if (resolvedExampleSource === "dictionary") {
      return (
        <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
          Nguồn: Từ điển chuẩn
        </span>
      );
    }
    if (resolvedExampleSource === "corpus") {
      return (
        <span className="rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
          Nguồn: Kho câu song ngữ
        </span>
      );
    }
    if (resolvedExampleSource === "ai") {
      return (
        <span className="rounded border border-purple-200 bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
          Nguồn: AI Generate + Cache
        </span>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header & Thanh tìm kiếm */}
        <div>
          <form onSubmit={handleSearchSubmit} className="w-full">
            <label className="flex w-full items-center gap-3 rounded-xl border border-sky-400 bg-white px-4 py-3 shadow-[0_0_0_4px_rgba(14,165,233,0.12)] focus-within:border-sky-500">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="VD: 拔, 图书城, 续, 学习..."
                aria-label="Tìm chữ Hán trong từ điển"
                className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <button type="submit" className="sr-only">
              Tra cứu
            </button>
          </form>

          {/* Gợi ý tra nhanh */}
          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>Gợi ý tra cứu:</span>
            {["拔", "图书城", "续", "学习"].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => handleQuickSelect(sample)}
                className={`cursor-pointer rounded-md border px-2.5 py-1 transition ${
                  query === sample
                    ? "border-sky-500 bg-sky-50 font-medium text-sky-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-300"
                }`}
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Khu vực hiển thị kết quả chính */}
        {query && (
          <div className="flex flex-col gap-6">
            {/* KHỐI 1 (Trên cùng): Khung vẽ nét chữ HanziWriter */}
            <div className="order-1 flex flex-col">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Thứ tự nét viết{" "}
                  <span className="ml-1 text-xs font-normal normal-case text-slate-400">
                    (Nét màu đỏ biểu thị bộ thủ chính)
                  </span>
                </h3>
              </div>

              {chineseChars.length > 0 ? (
                <div className="flex w-full flex-wrap justify-center gap-4">
                  {chineseChars.map((char, index) => (
                    <div
                      key={`${char}-${index}`}
                      className="flex flex-col items-center"
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        title="Bấm để xem lại thứ tự nét"
                        onClick={() => {
                          setActiveStructIndex(index);
                          writerInstanceRefs.current[index]?.animateCharacter();
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setActiveStructIndex(index);
                            writerInstanceRefs.current[
                              index
                            ]?.animateCharacter();
                          }
                        }}
                        className={`relative flex h-36 w-36 cursor-pointer items-center justify-center overflow-hidden border-2 bg-white transition ${
                          safeStructIndex === index
                            ? "border-sky-500 shadow-sm"
                            : "border-gray-200 hover:border-sky-300"
                        }`}
                      >
                        <div className="pointer-events-none absolute inset-0">
                          <div className="h-1/2 w-full border-b border-dashed border-sky-100" />
                          <div className="absolute left-0 top-0 h-full w-1/2 border-r border-dashed border-sky-100" />
                        </div>
                        <div
                          ref={(el) => {
                            writerContainerRefs.current[index] = el;
                          }}
                          className="relative z-10"
                        />
                      </div>

                      <div className="mt-2.5 flex h-8 w-36 justify-center">
                        <button
                          type="button"
                          onClick={() => handleQuizStroke(index, char)}
                          className="flex cursor-pointer items-center justify-center gap-1.5 rounded border border-stone-300 bg-white px-3 py-1 text-xs font-medium leading-none text-stone-700 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                          <PencilLine
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>Tập viết</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-10 text-center text-sm text-slate-400">
                  Không có ký tự chữ Hán để hiển thị nét viết.
                </p>
              )}
            </div>

            {/* KHỐI 2 (Giữa): Nghĩa từ vựng & Ví dụ minh họa */}
            <div className="shadow-xs order-2 space-y-6 rounded-lg border border-slate-200 bg-white p-6">
              {/* Từ vựng, Pinyin, Phát âm */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-baseline gap-3">
                    <h2 className="ztai__zh text-6xl font-medium text-sky-600 sm:text-7xl">
                      {query}
                    </h2>
                    {dictionaryEntry?.traditional &&
                      dictionaryEntry.traditional !== query && (
                        <span className="text-base text-slate-400">
                          (Phồn thể: {dictionaryEntry.traditional})
                        </span>
                      )}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center">
                    <span className="text-lg font-light text-stone-500">
                      ［ {dictionaryEntry?.pinyin || generatedPinyin} ］
                    </span>
                    {dictionaryEntry?.hanViet && (
                      <span className="ztai__py text-stone-600">
                        〔 {dictionaryEntry.hanViet.toUpperCase()} 〕
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => handleSpeak(query)}
                      className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                      title="Nghe phát âm"
                    >
                      🔊 Phát âm
                    </button>
                  </div>
                </div>
              </div>

              {/* Nội dung nghĩa tiếng Việt */}
              {dictionaryEntry ? (
                <div>
                  <span className="mb-3 inline-block rounded-md bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                    {dictionaryEntry.partOfSpeech}
                  </span>
                  <ul className="list-inside list-disc space-y-2 text-base text-slate-700">
                    {dictionaryEntry.meanings.map((meaning, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {meaning}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    Dịch tự động (Machine Translation)
                  </span>
                  {isTranslating ? (
                    <p className="animate-pulse text-slate-500">
                      Đang dịch sang tiếng Việt...
                    </p>
                  ) : (
                    <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 leading-relaxed text-slate-700">
                      {fallbackTranslation}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* KHỐI 3 (Dưới cùng): Phân tích cấu trúc hình thái & bộ thành phần chữ Hán */}
            {chineseChars.length > 0 && (
                <div className="shadow-xs order-3 rounded-lg border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-sky-600" />
                      <h3 className="text-base font-bold uppercase tracking-wide text-slate-800">
                        Bộ thành phần
                      </h3>
                    </div>

                    {/* Bộ chọn từng chữ nếu từ tra cứu có nhiều ký tự (VD: 图书城) */}
                    {chineseChars.length > 1 && (
                      <div className="flex items-center gap-1.5">
                        <span className="mr-1 text-xs text-slate-400">
                          Chọn chữ:
                        </span>
                        {chineseChars.map((char, idx) => (
                          <button
                            key={`${char}-tab-${idx}`}
                            type="button"
                            onClick={() => setActiveStructIndex(idx)}
                            className={`h-8 w-8 cursor-pointer rounded-md border text-base font-medium transition ${
                              safeStructIndex === idx
                                ? "border-sky-600 bg-sky-600 text-white"
                                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300"
                            }`}
                          >
                            {char}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {activeStructure ? (
                    <div className="space-y-5">
                      {/* 1. Thanh tổng quan công thức chiết tự & Hình thái */}
                      <div className="grid grid-cols-1 gap-3 rounded-xl border border-sky-100 bg-sky-50/60 p-4 sm:grid-cols-3">
                        <div className="flex flex-col justify-center">
                          <span className="text-xs font-medium uppercase text-slate-400">
                            Công thức cấu tạo
                          </span>
                          <p className="mt-1 text-xl font-bold tracking-wide text-slate-900">
                            {activeStructure.formula}
                          </p>
                        </div>

                        <div className="flex flex-col justify-center">
                          <span className="text-xs font-medium uppercase text-slate-400">
                            Hình thái kết cấu
                          </span>
                          <p className="mt-1 flex items-center gap-2 text-base font-semibold text-sky-800">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded border border-sky-200 bg-white text-lg font-bold text-sky-600">
                              {activeStructure.idsSymbol}
                            </span>
                            <span>{activeStructure.structureName}</span>
                          </p>
                        </div>

                        <div className="flex flex-col justify-center">
                          <span className="text-xs font-medium uppercase text-slate-400">
                            Thông số nét & Bộ thủ
                          </span>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            Bộ thủ:{" "}
                            <span className="font-semibold text-red-700">
                              {activeStructure.mainRadical}
                            </span>{" "}
                            • Tổng{" "}
                            <span className="font-semibold text-slate-900">
                              {activeStructure.totalStrokes} nét
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* 2. Danh sách chi tiết từng bộ thành phần */}
                      <div>
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Chi tiết các bộ thành phần (
                          {activeStructure.components.length} phần)
                        </h4>
                        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                          {activeStructure.components.map((comp, idx) => (
                            <div
                              key={`${comp.char}-${idx}`}
                              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-sky-200 hover:bg-white"
                            >
                              {/* Ô hiển thị ký tự bộ thành phần */}
                              <div
                                className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border text-3xl font-semibold ${
                                  comp.radicalNumber
                                    ? "border-red-200 bg-red-50 text-red-700"
                                    : "border-slate-200 bg-white text-slate-800"
                                }`}
                              >
                                <span>{comp.char}</span>
                                <span className="mt-0.5 text-[10px] font-normal text-slate-500">
                                  {comp.strokes} nét
                                </span>
                              </div>

                              {/* Thông tin giải thích chi tiết */}
                              <div className="min-w-0 flex-1 space-y-1">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span className="text-base font-bold text-slate-900">
                                    {comp.nameVi}
                                  </span>
                                  <span className="rounded bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700">
                                    [{comp.pinyin}]
                                  </span>
                                </div>

                                {/* Huy hiệu số bộ thủ Khang Hy & Vai trò */}
                                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                  {comp.radicalNumber && (
                                    <span className="rounded border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700">
                                      Bộ thủ số {comp.radicalNumber}
                                    </span>
                                  )}
                                  <span className="rounded border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-600">
                                    {comp.role}
                                  </span>
                                </div>

                                <p className="pt-1 text-sm leading-relaxed text-slate-600">
                                  <span className="font-medium text-slate-700">
                                    Ý nghĩa:{" "}
                                  </span>
                                  {comp.meaning}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3. Ghi chú chiết tự / Mẹo nhớ chữ */}
                      {activeStructure.etymologyNote && (
                        <div className="flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-sm text-amber-900">
                          <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                          <p className="leading-relaxed">
                            <span className="font-semibold">
                              Giải thích chiết tự:{" "}
                            </span>
                            {activeStructure.etymologyNote}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                      Chưa có dữ liệu phân tích chiết tự cho chữ{" "}
                      <span className="font-bold text-slate-700">
                        “{activeStructChar}”
                      </span>{" "}
                      trong dữ liệu mẫu. Bạn có thể nối API hoặc import file{" "}
                      <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                        Make Me a Hanzi (dictionary.txt)
                      </code>{" "}
                      kết hợp bảng 214 bộ thủ Khang Hy để tự động phân rã toàn
                      bộ chữ Hán.
                    </div>
                  )}
                </div>
              )}

            {/* Khu vực Ví dụ minh họa */}
            <div className="shadow-xs order-2 space-y-6 rounded-lg border border-slate-200 bg-white p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Ví dụ minh họa
                </h3>
                {!resolvedIsLoading && getExampleSourceBadge()}
              </div>

              {resolvedIsLoading ? (
                <div className="space-y-2.5">
                  <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                  <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                </div>
              ) : resolvedExamples.length > 0 ? (
                <div className="space-y-3">
                  {resolvedExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-slate-900">
                          {ex.cn}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleSpeak(ex.cn)}
                          className="cursor-pointer text-sm text-slate-400 hover:text-sky-600"
                          title="Nghe câu ví dụ"
                        >
                          🔊
                        </button>
                      </div>
                      <p className="mt-0.5 text-sm text-blue-600">
                        {ex.pinyin}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{ex.vi}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm italic text-slate-400">
                  Chưa tìm thấy ví dụ phù hợp cho từ này.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
