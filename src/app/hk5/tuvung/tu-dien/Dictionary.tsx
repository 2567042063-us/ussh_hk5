"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { PencilLine } from "lucide-react";
import { pinyin } from "pinyin-pro";

// Kiểu dữ liệu cho câu ví dụ
interface ExampleSentence {
  cn: string;
  pinyin: string;
  vi: string;
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

// 2. Kho câu song ngữ (Mô phỏng dữ liệu từ Tatoeba / OPUS Corpus)
// Trong thực tế, bạn sẽ query mảng này từ Database (PostgreSQL / SQLite / JSON)
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

// Hàm tìm kiếm ví dụ trong kho song ngữ và tự động sinh Pinyin bằng pinyin-pro
function findExamplesFromCorpus(keyword: string): ExampleSentence[] {
  const cleanKeyword = keyword.trim();
  if (!cleanKeyword) return [];

  return BILINGUAL_CORPUS.filter((item) => item.cn.includes(cleanKeyword))
    .sort((a, b) => a.cn.length - b.cn.length) // Ưu tiên câu ngắn, dễ hiểu
    .slice(0, 3)
    .map((item) => ({
      cn: item.cn,
      pinyin: pinyin(item.cn, { toneType: "symbol", type: "string" }),
      vi: item.vi,
    }));
}

export default function ChineseDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState<string>("图书城");
  const [query, setQuery] = useState<string>("图书城");

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

  // Cache bộ nhớ tạm ở Client để không phải gọi lại AI cho từ đã tra
  const aiExampleCacheRef = useRef<Record<string, ExampleSentence[]>>({});

  // Refs quản lý HanziWriter instance
  const writerContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const writerInstanceRefs = useRef<(HanziWriter | null)[]>([]);

  // Tách các ký tự Hán để hiển thị nét vẽ từng chữ
  const chineseChars = useMemo(
    () => Array.from(query).filter((char) => /[一-龥]/.test(char)),
    [query],
  );

  // Tự động tạo Pinyin bằng pinyin-pro
  const generatedPinyin = query
    ? pinyin(query, { toneType: "symbol", type: "string" })
    : "";

  // Tìm kiếm trong từ điển cục bộ
  const dictionaryEntry = SAMPLE_DICTIONARY[query.trim()];

  // Xử lý tra cứu 3 tầng cho Ví dụ minh họa & Dịch nghĩa
  useEffect(() => {
    const cleanQuery = query.trim();
    if (!cleanQuery) return;

    const entry = SAMPLE_DICTIONARY[cleanQuery];

    // Tầng 1: Lấy ví dụ có sẵn trong Từ điển
    if (entry && entry.examples.length > 0) {
      setDynamicExamples(entry.examples);
      setExampleSource("dictionary");
      return;
    }

    // Nếu chưa có trong từ điển, kích hoạt dịch tự động cho từ/câu
    const fetchTranslationAndExamples = async () => {
      setIsTranslating(true);
      setIsLoadingExamples(true);

      try {
        // Giả lập gọi API dịch nghĩa tiếng Việt (Thay bằng endpoint /api/translate của bạn)
        await new Promise((resolve) => setTimeout(resolve, 400));
        setFallbackTranslation(
          `[Bản dịch tự động cho "${cleanQuery}"]: Kết nối endpoint /api/translate của bạn tại đây để dịch nghĩa chính xác.`,
        );
      } catch {
        setFallbackTranslation("Không thể tải bản dịch tự động.");
      } finally {
        setIsTranslating(false);
      }

      // Tầng 2: Tìm kiếm trong kho câu song ngữ (Tatoeba / Corpus)
      const corpusMatches = findExamplesFromCorpus(cleanQuery);
      if (corpusMatches.length > 0) {
        setDynamicExamples(corpusMatches);
        setExampleSource("corpus");
        setIsLoadingExamples(false);
        return;
      }

      // Tầng 3: Kiểm tra Cache hoặc gọi AI để sinh ví dụ tự động
      if (aiExampleCacheRef.current[cleanQuery]) {
        setDynamicExamples(aiExampleCacheRef.current[cleanQuery]);
        setExampleSource("ai");
        setIsLoadingExamples(false);
        return;
      }

      try {
        // Trong thực tế, gọi API backend của bạn:
        // const res = await fetch(`/api/generate-examples?word=${encodeURIComponent(cleanQuery)}`);
        // const data: ExampleSentence[] = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 700));

        // Dữ liệu mẫu mô phỏng AI trả về kết hợp pinyin-pro
        const sampleCn1 = `我经常使用“${cleanQuery}”这个词。`;
        const sampleCn2 = `请用“${cleanQuery}”造一个句子。`;

        const generatedByAI: ExampleSentence[] = [
          {
            cn: sampleCn1,
            pinyin: pinyin(sampleCn1, { toneType: "symbol", type: "string" }),
            vi: `Tôi thường xuyên sử dụng từ "${cleanQuery}" này. (Ví dụ sinh tự động - hãy nối API AI của bạn vào /api/generate-examples)`,
          },
          {
            cn: sampleCn2,
            pinyin: pinyin(sampleCn2, { toneType: "symbol", type: "string" }),
            vi: `Hãy dùng từ "${cleanQuery}" để đặt một câu.`,
          },
        ];

        // Lưu vào cache
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

  // Khởi tạo HanziWriter cho toàn bộ ký tự, hiển thị theo thứ tự trái sang phải
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
          radicalColor: "#b91c1c",
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
      setQuery(searchTerm.trim());
    }
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

  // Nhãn hiển thị nguồn của ví dụ minh họa
  const getExampleSourceBadge = () => {
    if (exampleSource === "dictionary") {
      return (
        <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
          Nguồn: Từ điển chuẩn
        </span>
      );
    }
    if (exampleSource === "corpus") {
      return (
        <span className="rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
          Nguồn: Kho câu song ngữ
        </span>
      );
    }
    if (exampleSource === "ai") {
      return (
        <span className="rounded border border-purple-200 bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
          Nguồn: AI Generate + Cache
        </span>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screenpx-4 py-8 text-slate-800 sm:px-6 lg:px-8">
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
                placeholder="VD: 图书城..."
                aria-label="Tìm chữ Hán trong từ điển"
                className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <button type="submit" className="sr-only">
              Tra cứu
            </button>
          </form>
        </div>

        {/* Khu vực hiển thị kết quả chính */}
        {query && (
          <div className="flex flex-col gap-6">
            {/* Cột trái: Thông tin từ vựng, Nghĩa tiếng Việt & Ví dụ 3 tầng */}
            <div className="order-2 space-y-6 rounded-sm border border-slate-200 bg-white p-6">
              {/* Từ vựng, Pinyin, Phát âm */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-baseline gap-3">
                    <h2 className="ztai__zh text-7xl text-sky-600">{query}</h2>
                    {dictionaryEntry?.traditional &&
                      dictionaryEntry.traditional !== query && (
                        <span className="text-lg text-slate-400">
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
                      // <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-sm font-medium text-amber-800">
                      //   Hán Việt: {dictionaryEntry.hanViet.toUpperCase()}
                      // </span>
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

              {/* Khu vực Ví dụ minh họa (Luôn hiển thị cho mọi từ nhờ cơ chế 3 tầng) */}
              <div className="border-t border-slate-100 pt-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Ví dụ minh họa
                  </h3>
                  {!isLoadingExamples && getExampleSourceBadge()}
                </div>

                {isLoadingExamples ? (
                  <div className="space-y-2.5">
                    <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                    <div className="h-16 animate-pulse rounded-xl bg-slate-100" />
                  </div>
                ) : dynamicExamples.length > 0 ? (
                  <div className="space-y-3">
                    {dynamicExamples.map((ex, idx) => (
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

            {/* Cột phải: Khung vẽ nét chữ HanziWriter */}
            <div className="items-left order-1 flex flex-col">
              <h3 className="mb-3 text-base font-semibold uppercase text-stone-500">
                Thứ tự nét viết
              </h3>

              {chineseChars.length > 0 ? (
                <div className="flex w-full flex-wrap justify-center gap-4">
                  {chineseChars.map((char, index) => (
                    <div
                      key={`${char}-${index}`}
                      className="flex flex-col items-center"
                    >
                      {/* relative flex cursor-pointer select-none flex-col border-b border-r border-gray-200 */}
                      <div
                        role="button"
                        tabIndex={0}
                        title="Bấm để xem lại thứ tự nét"
                        onClick={() =>
                          writerInstanceRefs.current[index]?.animateCharacter()
                        }
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            writerInstanceRefs.current[
                              index
                            ]?.animateCharacter();
                          }
                        }}
                        className="h-35 w-35 relative flex cursor-pointer items-center justify-center overflow-hidden border-2 border-gray-200 bg-white"
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

                      <div className="w-35 mt-3 flex h-9 justify-center">
                        <button
                          type="button"
                          onClick={() => handleQuizStroke(index, char)}
                          className="flex items-center justify-center gap-1.5 rounded border border-stone-300 px-3 py-1 text-sm leading-none text-stone-700 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                          <PencilLine
                            className="h-4 w-4 shrink-0"
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
          </div>
        )}
      </div>
    </div>
  );
}
