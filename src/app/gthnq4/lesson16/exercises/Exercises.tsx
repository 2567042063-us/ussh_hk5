"use client";

import { useState } from "react";

// ===== Kiểu dữ liệu =====
type Opt = { zh: string; py: string };
type Q = {
  q: string; // "{}" = chỗ trống
  a: string[]; // đáp án từng chỗ trống
  choices?: Opt[];
  alt?: string[][];
  pair?: boolean;
  py: string;
  vi: string;
  note: string;
  warn?: string;
};
type Tab = {
  id: string;
  label: string;
  sub: string;
  options?: Opt[];
  items: Q[];
};
type Multi = {
  q: string;
  a: string[];
  alt?: string[][];
  word?: string;
  py: string;
  vi: string;
  note: string;
  warn?: string;
};
type Fix = {
  wrong: string;
  a: string;
  alt?: string[];
  py: string;
  vi: string;
  note: string;
  warn?: string;
};

// ===== Hàm chấm =====
function grade(item: Q, vals: string[]): boolean[] {
  const res = item.a.map((ans, j) =>
    (item.alt?.[j] ?? [ans]).includes(vals[j]),
  );
  if (item.pair) {
    const same = vals[0] === vals[1];
    res[0] = res[0] && same;
    res[1] = res[1] && same;
  }
  return res;
}

// ===== Bài 3 (第十六课 前边开过来一辆空车) =====
const TAB3_A: Tab = {
  id: "3A",
  label: "3A",
  sub: "Chọn từ thích hợp điền vào chỗ trống (A)",
  options: [
    { zh: "着", py: "zhe" },
    { zh: "四合院", py: "sìhéyuàn" },
    { zh: "越来越", py: "yuèláiyuè" },
    { zh: "越……越……", py: "yuè...yuè..." },
    { zh: "靠", py: "kào" },
    { zh: "尝尝", py: "chángchang" },
    { zh: "节日", py: "jiérì" },
    { zh: "欢乐", py: "huānlè" },
  ],
  items: [
    {
      q: "我家院子里种{}很多花儿。",
      a: ["着"],
      py: "Wǒ jiā yuànzi li zhòngzhe hěn duō huār.",
      vi: "Trong sân nhà tôi trồng rất nhiều hoa.",
      note: "Câu tồn hiện: Nơi chốn + V + 着 + danh từ. 种着 = trồng (trạng thái duy trì).",
    },
    {
      q: "我觉得北京的{}是一种建筑文化。",
      a: ["四合院"],
      py: "Wǒ juéde Běijīng de sìhéyuàn shì yì zhǒng jiànzhù wénhuà.",
      vi: "Tôi nghĩ tứ hợp viện của Bắc Kinh là một loại văn hóa kiến trúc.",
      note: "四合院 = tứ hợp viện (nhà ở truyền thống Bắc Kinh).",
    },
    {
      q: "这种建筑现在{}少了。",
      a: ["越来越"],
      py: "Zhè zhǒng jiànzhù xiànzài yuèláiyuè shǎo le.",
      vi: "Loại kiến trúc này bây giờ ngày càng ít.",
      note: "越来越 + tính từ: biểu thị mức độ thay đổi theo thời gian.",
    },
    {
      q: "汉语{}学{}有意思。",
      a: ["越", "越"],
      py: "Hànyǔ yuè xué yuè yǒu yìsi.",
      vi: "Tiếng Trung càng học càng thấy thú vị.",
      note: "越 + V + 越 + A: càng... càng...",
    },
    {
      q: "我们全家{}父亲一个人工作生活。",
      a: ["靠"],
      py: "Wǒmen quánjiā kào fùqīn yí ge rén gōngzuò shēnghuó.",
      vi: "Cả gia đình chúng tôi sống và làm việc nhờ vào một mình bố tôi.",
      note: "靠 = dựa vào, nhờ vào.",
    },
    {
      q: "这是我做的菜，请您{}。",
      a: ["尝尝"],
      py: "Zhè shì wǒ zuò de cài, qǐng nín chángchang.",
      vi: "Đây là món tôi nấu, mời ngài nếm thử.",
      note: "尝尝 = nếm thử (động từ lặp lại).",
    },
    {
      q: "中国最大的{}还是春节。",
      a: ["节日"],
      py: "Zhōngguó zuì dà de jiérì háishi Chūnjié.",
      vi: "Ngày lễ lớn nhất của Trung Quốc vẫn là Tết Xuân.",
      note: "节日 = ngày lễ, dịp lễ.",
    },
    {
      q: "有些人过圣诞节可能是因为喜欢那种{}的气氛。",
      a: ["欢乐"],
      py: "Yǒuxiē rén guò Shèngdàn Jié kěnéng shì yīnwèi xǐhuan nà zhǒng huānlè de qìfēn.",
      vi: "Một số người đón Giáng sinh có thể là vì thích bầu không khí vui vẻ đó.",
      note: "欢乐 = vui vẻ, hoan lạc.",
    },
  ],
};

const TAB3_B: Tab = {
  id: "3B",
  label: "3B",
  sub: "Chọn từ thích hợp điền vào chỗ trống (B)",
  options: [
    { zh: "种着", py: "zhòngzhe" },
    { zh: "停着", py: "tíngzhe" },
    { zh: "贴着", py: "tiēzhe" },
    { zh: "睡着", py: "shuìzhe" },
    { zh: "摆着", py: "bǎizhe" },
    { zh: "写着", py: "xiězhe" },
    { zh: "放着", py: "fàngzhe" },
    { zh: "挂着", py: "guàzhe" },
  ],
  items: [
    {
      q: "会议中心前边{}很多花儿。",
      a: ["种着"],
      py: "Huìyì zhōngxīn qiánbian zhòngzhe hěn duō huār.",
      vi: "Phía trước trung tâm hội nghị trồng rất nhiều hoa.",
      note: "Câu tồn hiện: Nơi chốn + V着 + danh từ.",
    },
    {
      q: "楼前{}几辆车。",
      a: ["停着"],
      py: "Lóu qián tíngzhe jǐ liàng chē.",
      vi: "Trước tòa nhà đỗ mấy chiếc xe.",
      note: "停着 = đang đỗ (trạng thái).",
    },
    {
      q: "门上{}一个“红双喜字”。",
      a: ["贴着"],
      py: "Mén shang tiēzhe yí ge “hóng shuāngxǐ zì”.",
      vi: "Trên cửa dán một chữ “Song Hỷ” màu đỏ.",
      note: "贴着 = đang được dán (trạng thái).",
    },
    {
      q: "床上{}一个孩子。",
      a: ["睡着"],
      py: "Chuáng shang shuìzhe yí ge háizi.",
      vi: "Trên giường có một đứa trẻ đang ngủ.",
      note: "睡着 = đang ngủ (trạng thái). Chú ý: 睡着 (shuìzhe) ở đây là ngủ say, khác với 着急 (zháojí).",
    },
    {
      q: "屋子里{}两个书架。",
      a: ["放着"],
      py: "Wūzi li fàngzhe liǎng ge shūjià.",
      vi: "Trong phòng đặt hai giá sách.",
      note: "放着 = đang đặt, để (trạng thái).",
    },
    {
      q: "书上{}她的名字，书肯定是她的。",
      a: ["写着"],
      py: "Shū shang xiězhe tā de míngzi, shū kěndìng shì tā de.",
      vi: "Trên sách có viết tên cô ấy, sách chắc chắn là của cô ấy.",
      note: "写着 = có viết (trạng thái chữ còn đó).",
    },
    {
      q: "桌子上{}一瓶花儿。",
      a: ["摆着"],
      py: "Zhuōzi shang bǎizhe yì píng huār.",
      vi: "Trên bàn bày một lọ hoa.",
      note: "摆着 = đang bày (trạng thái).",
    },
    {
      q: "教室里{}两张画儿。",
      a: ["挂着"],
      py: "Jiàoshì li guàzhe liǎng zhāng huàr.",
      vi: "Trong lớp học treo hai bức tranh.",
      note: "挂着 = đang treo (trạng thái).",
    },
  ],
};

// ===== Bài 4: Dùng từ gợi ý điền vào chỗ trống =====
const EX4_A: Q[] = [
  {
    q: "出院后，她的身体{}了。",
    a: ["越来越好"],
    py: "Chūyuàn hòu, tā de shēntǐ yuèláiyuè hǎo le.",
    vi: "Sau khi xuất viện, sức khỏe của cô ấy ngày càng tốt hơn.",
    note: "越来越好: ngày càng tốt hơn.",
  },
  {
    q: "城市里的汽车{}了，城市交通{}了。",
    a: ["越来越多", "越来越拥挤"],
    py: "Chéngshì li de qìchē yuèláiyuè duō le, chéngshì jiāotōng yuèláiyuè yōngjǐ le.",
    vi: "Xe cộ trong thành phố ngày càng nhiều, giao thông thành phố ngày càng đông đúc.",
    note: "越来越多: ngày càng nhiều. 越来越拥挤: ngày càng chen chúc.",
  },
  {
    q: "冬天快来了，天{}了。",
    a: ["越来越冷"],
    py: "Dōngtiān kuài lái le, tiān yuèláiyuè lěng le.",
    vi: "Mùa đông sắp đến, trời ngày càng lạnh.",
    note: "越来越冷: ngày càng lạnh.",
  },
  {
    q: "我对这儿的生活{}了。",
    a: ["越来越适应"],
    py: "Wǒ duì zhèr de shēnghuó yuèláiyuè shìyìng le.",
    vi: "Tôi ngày càng thích nghi với cuộc sống ở đây.",
    note: "越来越适应: ngày càng thích nghi.",
  },
  {
    q: "A: 你的发音{}了。\nB: 谢谢！可是我觉得语法{}了。",
    a: ["越来越好", "越来越难"],
    py: "A: Nǐ de fāyīn yuèláiyuè hǎo le. B: Xièxie! Kěshì wǒ juéde yǔfǎ yuèláiyuè nán le.",
    vi: "A: Phát âm của bạn ngày càng tốt. B: Cảm ơn! Nhưng tôi thấy ngữ pháp ngày càng khó.",
    note: "越来越好: ngày càng tốt. 越来越难: ngày càng khó.",
  },
  {
    q: "来中国学汉语的外国人{}。",
    a: ["越来越多"],
    py: "Lái Zhōngguó xué Hànyǔ de wàiguórén yuèláiyuè duō.",
    vi: "Người nước ngoài đến Trung Quốc học tiếng Trung ngày càng nhiều.",
    note: "越来越多: ngày càng nhiều.",
  },
];

const EX4_B: Q[] = [
  {
    q: "你看，外边的雪{}。",
    a: ["越下越大"],
    py: "Nǐ kàn, wàibian de xuě yuè xià yuè dà.",
    vi: "Bạn xem, tuyết bên ngoài càng rơi càng to.",
    note: "越下越大: càng rơi càng to.",
  },
  {
    q: "她的汉语{}了。",
    a: ["越学越好"],
    py: "Tā de Hànyǔ yuè xué yuè hǎo le.",
    vi: "Tiếng Trung của cô ấy càng học càng tốt.",
    note: "越学越好: càng học càng tốt.",
  },
  {
    q: "这本书很好，我{}。",
    a: ["越看越喜欢"],
    py: "Zhè běn shū hěn hǎo, wǒ yuè kàn yuè xǐhuan.",
    vi: "Cuốn sách này rất hay, tôi càng đọc càng thích.",
    note: "越看越喜欢: càng xem càng thích.",
  },
  {
    q: "“出门靠朋友”，朋友{}。",
    a: ["越多越好"],
    py: "“Chūmén kào péngyou”, péngyou yuè duō yuè hǎo.",
    vi: "“Ra ngoài nhờ bạn bè”, bạn càng nhiều càng tốt.",
    note: "越多越好: càng nhiều càng tốt.",
  },
  {
    q: "我觉得她{}。",
    a: ["越长越漂亮"],
    py: "Wǒ juéde tā yuè zhǎng yuè piàoliang.",
    vi: "Tôi thấy cô ấy càng lớn càng xinh.",
    note: "越长越漂亮: càng lớn càng xinh đẹp.",
  },
];

// ===== Bài 5: Sửa lỗi sai =====
const EX5: Fix[] = [
  {
    wrong: "教室里跑出来了麦克。",
    a: "教室里跑出来了一个人。",
    py: "Jiàoshì li pǎochūlái le yí ge rén.",
    vi: "Từ trong lớp học chạy ra một người.",
    note: "Câu tồn hiện dùng danh từ không xác định. Đổi “麦克” thành “一个人”.",
  },
  {
    wrong: "很多同学坐着在操场上。",
    a: "很多同学在操场上坐着。",
    py: "Hěn duō tóngxué zài cāochǎng shang zuòzhe.",
    vi: "Rất nhiều học sinh đang ngồi trên sân vận động.",
    note: "Trạng từ 在 + nơi chốn phải đứng trước động từ. Đổi “坐着在” thành “在...坐着”.",
  },
  {
    wrong: "车里坐在我和一个朋友。",
    a: "车里坐着我和一个朋友。",
    py: "Chē li zuòzhe wǒ hé yí ge péngyou.",
    vi: "Trong xe ngồi tôi và một người bạn.",
    note: "Dùng 坐着 (trạng thái) thay vì 坐在. Đổi “坐在” thành “坐着”.",
  },
  {
    wrong: "前边开过来他坐的汽车。",
    a: "前边开过来一辆汽车。",
    py: "Qiánbian kāi guolai yí liàng qìchē.",
    vi: "Phía trước chạy tới một chiếc xe hơi.",
    note: "Câu tồn hiện dùng danh từ không xác định. Đổi “他坐的汽车” thành “一辆车”.",
  },
  {
    wrong: "我们班来了这个新老师。",
    a: "我们班来了一个新老师。",
    py: "Wǒmen bān lái le yí ge xīn lǎoshī.",
    vi: "Lớp chúng tôi có một giáo viên mới đến.",
    note: "Câu tồn hiện dùng danh từ không xác định. Đổi “这个” thành “一个”.",
  },
  {
    wrong: "我的汉语越来越很流利了。",
    a: "我的汉语越来越流利了。",
    py: "Wǒ de Hànyǔ yuèláiyuè liúlì le.",
    vi: "Tiếng Trung của tôi ngày càng lưu loát.",
    note: "越来越 không đi với phó từ chỉ mức độ. Xóa “很”.",
  },
  {
    wrong: "这首歌我越听越很喜欢。",
    a: "这首歌我越听越喜欢。",
    py: "Zhè shǒu gē wǒ yuè tīng yuè xǐhuan.",
    vi: "Bài hát này tôi càng nghe càng thích.",
    note: "越...越... không đi với phó từ chỉ mức độ. Xóa “很”.",
  },
  {
    wrong: "在床上的他躺着看书。",
    a: "他在床上躺着看书。",
    py: "Tā zài chuáng shang tǎngzhe kàn shū.",
    vi: "Anh ấy nằm trên giường đọc sách.",
    note: "Chủ ngữ phải đứng trước cụm 在 + nơi chốn. Đổi “在床上的他” thành “他在床上”.",
  },
];

const norm = (s: string) =>
  s.replace(/[（(][^）)]*[）)]/g, "").replace(/[^\p{L}\p{N}]/gu, "");

const TITLES: Record<string, { t: string; s: string }> = {
  "3A": { t: "3A. 选词填空", s: "Chọn từ thích hợp điền vào chỗ trống (A)" },
  "3B": { t: "3B. 选词填空", s: "Chọn từ thích hợp điền vào chỗ trống (B)" },
  "4A": { t: "4A. 用所给词语完成句子", s: "Dùng từ gợi ý hoàn thành câu (A)" },
  "4B": { t: "4B. 用所给词语完成句子", s: "Dùng từ gợi ý hoàn thành câu (B)" },
  "5": { t: "5. 改错句", s: "Sửa câu sai" },
};

// ===== Thành phần dùng chung =====
function Explain({
  py,
  vi,
  note,
  warn,
}: {
  py: string;
  vi: string;
  note: string;
  warn?: string;
}) {
  return (
    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-[15px] leading-7">
      <p className="text-slate-500">{py}</p>
      <p className="text-slate-700">{vi}</p>
      <p className="rounded-md bg-sky-50 p-3 text-slate-800">
        <span className="font-semibold">Giải thích: </span>
        {note}
      </p>
      {warn && (
        <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-900">
          <span className="font-semibold">Lưu ý: </span>
          {warn}
        </p>
      )}
    </div>
  );
}

function Verdict({ ok, answer }: { ok: boolean; answer?: string }) {
  return (
    <p
      className={
        ok ? "font-semibold text-emerald-700" : "font-semibold text-rose-700"
      }
    >
      {ok ? "Đúng rồi!" : "Chưa đúng"}
      {!ok && answer && (
        <span className="ml-2 font-normal text-slate-700">
          Đáp án: <span className="font-bold text-sky-700">{answer}</span>
        </span>
      )}
    </p>
  );
}

function CheckBar({
  checked,
  onCheck,
  onReset,
  summary,
}: {
  checked: boolean;
  onCheck: () => void;
  onReset: () => void;
  summary: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
      {!checked ? (
        <button
          onClick={onCheck}
          className="rounded-md bg-sky-600 px-6 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
        >
          Kiểm tra
        </button>
      ) : (
        <button
          onClick={onReset}
          className="rounded-md border border-sky-600 px-6 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
        >
          Làm lại
        </button>
      )}
      {checked && <span className="font-medium text-slate-700">{summary}</span>}
    </div>
  );
}

function Num({ n }: { n: number }) {
  return (
    <span className="mt-1 w-7 shrink-0 text-right text-sm font-semibold text-slate-400">
      {n}.
    </span>
  );
}

// ===== FillTab (Dùng cho bài 3A, 3B) =====
function FillTab({ tab }: { tab: Tab }) {
  const [vals, setVals] = useState<Record<number, string[]>>({});
  const [checked, setChecked] = useState(false);
  const results = tab.items.map((it, i) => grade(it, vals[i] ?? []));
  const score = results.filter((r) => r.every(Boolean)).length;

  return (
    <div>
      {tab.options && (
        <div className="mb-4 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-3">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {tab.options.map((w) => (
              <span key={w.zh} className="text-center leading-tight">
                <span className="block text-xs text-slate-500">{w.py}</span>
                <span className="font-serif text-lg">{w.zh}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {tab.items.map((item, i) => {
          const parts = item.q.split("{}");
          const res = results[i];
          return (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-line font-serif text-lg leading-10 text-slate-900">
                    {parts.map((p, j) => (
                      <span key={j}>
                        {p}
                        {j < parts.length - 1 && (
                          <select
                            value={vals[i]?.[j] ?? ""}
                            disabled={checked}
                            onChange={(e) => {
                              const cur = [...(vals[i] ?? [])];
                              cur[j] = e.target.value;
                              setVals({ ...vals, [i]: cur });
                            }}
                            className={
                              "min-w-18 mx-1 cursor-pointer appearance-none rounded px-2 py-0.5 text-center text-base focus:outline-none " +
                              (!checked
                                ? "bg-blue-50 text-slate-900 hover:bg-stone-100"
                                : res[j]
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-rose-100 text-rose-800")
                            }
                          >
                            <option value="">…</option>
                            {(item.choices ?? tab.options ?? []).map((op) => (
                              <option key={op.zh} value={op.zh}>
                                {op.zh}
                              </option>
                            ))}
                          </select>
                        )}
                      </span>
                    ))}
                  </p>
                  {checked && (
                    <div className="mt-3">
                      <Verdict
                        ok={res.every(Boolean)}
                        answer={item.a.join(" · ")}
                      />
                      <Explain
                        py={item.py}
                        vi={item.vi}
                        note={item.note}
                        warn={item.warn}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CheckBar
        checked={checked}
        onCheck={() => setChecked(true)}
        onReset={() => {
          setChecked(false);
          setVals({});
        }}
        summary={`Đúng ${score}/${tab.items.length} câu`}
      />
    </div>
  );
}

// ===== MultiFillTab (Dùng cho bài 4A, 4B) =====
type Stat = "exact" | "word" | "none";

function MultiFillTab({ items }: { items: Q[] }) {
  const [txt, setTxt] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const blank = (it: Q, j: number, v: string): Stat => {
    const n = norm(v);
    if ([it.a[j], ...(it.alt?.[j] ?? [])].some((x) => norm(x) === n))
      return "exact";
    return "none";
  };
  const stats = items.map((it, i) =>
    it.a.map((_, j) => blank(it, j, txt[`${i}-${j}`] ?? "")),
  );
  const overall = stats.map((s): Stat =>
    s.every((x) => x === "exact") ? "exact" : "none",
  );
  const exact = overall.filter((s) => s === "exact").length;

  return (
    <div>
      <div className="space-y-3">
        {items.map((it, i) => {
          const parts = it.q.split("{}");
          return (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-line font-serif text-lg leading-10 text-slate-900">
                    {parts.map((p, j) => (
                      <span key={j}>
                        {p}
                        {j < parts.length - 1 && (
                          <input
                            value={txt[`${i}-${j}`] ?? ""}
                            readOnly={checked}
                            onChange={(e) =>
                              setTxt({ ...txt, [`${i}-${j}`]: e.target.value })
                            }
                            placeholder="…"
                            className={
                              "mx-1 w-32 border-0 border-b-2 bg-transparent px-1 text-center font-serif text-lg focus:outline-none " +
                              (!checked
                                ? "border-slate-300 focus:border-sky-500"
                                : stats[i][j] === "exact"
                                  ? "border-emerald-500 text-emerald-800"
                                  : "border-rose-400 text-rose-800")
                            }
                          />
                        )}
                      </span>
                    ))}
                  </p>
                  {checked && (
                    <div className="mt-3">
                      {overall[i] === "exact" ? (
                        <p className="font-semibold text-emerald-700">Khớp đáp án.</p>
                      ) : (
                        <p className="font-semibold text-rose-700">
                          Chưa đúng.
                        </p>
                      )}
                      <p className="mt-1 text-slate-700">
                        Đáp án:{" "}
                        <span className="whitespace-pre-line font-serif text-lg text-slate-900">
                          {parts.map((p, j) => (
                            <span key={j}>
                              {p}
                              {j < parts.length - 1 && (
                                <span className="font-bold text-sky-700">
                                  {it.a[j]}
                                </span>
                              )}
                            </span>
                          ))}
                        </span>
                      </p>
                      <Explain
                        py={it.py}
                        vi={it.vi}
                        note={it.note}
                        warn={it.warn}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CheckBar
        checked={checked}
        onCheck={() => setChecked(true)}
        onReset={() => {
          setChecked(false);
          setTxt({});
        }}
        summary={`Khớp đáp án ${exact}/${items.length} câu`}
      />
    </div>
  );
}

// ===== Bài 5: FixTab (từng câu một) =====
function FixTab({ EX7 }: { EX7: Fix[] }) {
  const n = EX7.length;
  const [order, setOrder] = useState<number[]>(EX7.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [texts, setTexts] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<Record<number, "right" | "wrong">>({});
  const [shown, setShown] = useState<Record<number, boolean>>({});

  const cur = order[pos];
  const it = EX7[cur];
  const text = texts[cur] ?? it.wrong;
  const right = Object.values(status).filter((s) => s === "right").length;
  const attempted = Object.keys(status).length;
  const showExplain = status[cur] === "right" || shown[cur];

  const check = () => {
    const ok = [it.a, ...(it.alt ?? [])].some((x) => norm(x) === norm(text));
    setStatus({ ...status, [cur]: ok ? "right" : "wrong" });
  };
  const reset = () => {
    const t = { ...texts };
    const s = { ...status };
    const h = { ...shown };
    delete t[cur];
    delete s[cur];
    delete h[cur];
    setTexts(t);
    setStatus(s);
    setShown(h);
  };
  const shuffle = () => {
    const a = [...order];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOrder(a);
    setPos(0);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-slate-700">
          Đúng <span className="font-bold text-sky-700">{right}</span>/
          {attempted}
        </p>
        <button
          onClick={shuffle}
          className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Xáo trộn câu hỏi
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {order.map((q, k) => {
          const st = status[q];
          return (
            <button
              key={q}
              onClick={() => setPos(k)}
              className={
                "h-8 w-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 " +
                (k === pos
                  ? "bg-sky-600 text-white"
                  : st === "right"
                    ? "bg-emerald-100 text-emerald-800"
                    : st === "wrong"
                      ? "bg-rose-100 text-rose-800"
                      : "bg-white text-slate-500 hover:bg-sky-50")
              }
            >
              {q + 1}
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="mb-3 text-sm text-slate-500">
          Câu {pos + 1}/{n}
        </p>

        <p className="mb-1 text-sm font-medium text-slate-600">Câu sai</p>
        <p className="mb-4 rounded-md bg-rose-50 px-3 py-2 font-serif text-lg text-rose-900">
          {it.wrong}
        </p>

        <p className="mb-1 text-sm font-medium text-slate-600">
          Câu của bạn (sửa trực tiếp ở đây)
        </p>
        <input
          value={text}
          onChange={(e) => {
            setTexts({ ...texts, [cur]: e.target.value });
            if (status[cur]) {
              const s = { ...status };
              delete s[cur];
              setStatus(s);
            }
          }}
          className="w-full rounded-md bg-sky-50 px-3 py-2 font-serif text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={check}
            className="rounded-md bg-sky-600 px-5 py-1.5 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
          >
            Kiểm tra
          </button>
          <button
            onClick={reset}
            className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Làm lại
          </button>
          <button
            onClick={() => setShown({ ...shown, [cur]: true })}
            className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Xem đáp án
          </button>
        </div>

        {status[cur] === "right" && (
          <p className="mt-3 font-semibold text-emerald-700">Chính xác!</p>
        )}
        {status[cur] === "wrong" && (
          <p className="mt-3 font-semibold text-rose-700">
            {norm(text) === norm(it.wrong)
              ? "Câu của bạn chưa được sửa."
              : "Chưa đúng."}{" "}
            <span className="font-normal text-slate-700">
              Thử lại hoặc bấm “Xem đáp án”.
            </span>
          </p>
        )}

        {showExplain && (
          <div className="mt-3">
            <p className="text-slate-700">
              Đáp án sách:{" "}
              <span className="font-serif text-lg font-bold text-sky-700">
                {it.a}
              </span>
            </p>
            <Explain py={it.py} vi={it.vi} note={it.note} warn={it.warn} />
          </div>
        )}
      </div>

      <div className="mt-3 flex justify-between">
        <button
          onClick={() => setPos(Math.max(0, pos - 1))}
          disabled={pos === 0}
          className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-40"
        >
          ← Câu trước
        </button>
        <button
          onClick={() => setPos(Math.min(n - 1, pos + 1))}
          disabled={pos === n - 1}
          className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-40"
        >
          Câu sau →
        </button>
      </div>
    </div>
  );
}

// ===== Trang chính =====
const KEYS = ["3A", "3B", "4A", "4B", "5"];

export default function Lesson16Quiz() {
  const [tab, setTab] = useState("3A");

  const render = (k: string) => {
    if (k === "3A") return <FillTab tab={TAB3_A} />;
    if (k === "3B") return <FillTab tab={TAB3_B} />;
    if (k === "4A") return <MultiFillTab items={EX4_A} />;
    if (k === "4B") return <MultiFillTab items={EX4_B} />;
    return <FixTab EX7={EX5} />;
  };

  return (
    <div className="mx-auto">
      <p className="mb-2 text-sm text-slate-500">
        汉语教程（第3版）第二册 下 · 第十六课 前边开过来一辆空车
      </p>

      <div className="mb-2 flex flex-wrap gap-2 bg-stone-50 py-3">
        {KEYS.map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={
              "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
              (k === tab
                ? "bg-stone-800 text-white hover:bg-stone-700"
                : "border border-stone-300 text-stone-600 hover:bg-stone-100")
            }
          >
            Bài {k}
          </button>
        ))}
      </div>

      <h2 className="font-serif text-xl font-bold">{TITLES[tab].t}</h2>
      <p className="mb-4 text-slate-600">{TITLES[tab].s}</p>

      {KEYS.map((k) => (
        <div key={k} className={k === tab ? "" : "hidden"}>
          {render(k)}
        </div>
      ))}
    </div>
  );
}