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

// ===== Dữ liệu bài 3 – 6 (第十五课 会议厅的门开着呢) =====
const TAB3: Tab = {
  id: "3",
  label: "3",
  sub: "Chọn từ thích hợp điền vào chỗ trống",
  options: [
    {
      zh: "气氛",
      py: "qìfēn",
    },
    {
      zh: "戴",
      py: "dài",
    },
    {
      zh: "样",
      py: "yàng",
    },
    {
      zh: "开",
      py: "kāi",
    },
    {
      zh: "挂",
      py: "guà",
    },
    {
      zh: "摆",
      py: "bǎi",
    },
    {
      zh: "笑",
      py: "xiào",
    },
    {
      zh: "西服",
      py: "xīfú",
    },
  ],
  items: [
    {
      q: "她{}着一副眼镜儿。",
      a: ["戴"],
      py: "Tā dàizhe yí fù yǎnjìngr.",
      vi: "Cô ấy đang đeo một cặp kính.",
      note: "戴 = đeo (kính, mũ, nhẫn, khăn…). 戴着: trạng thái đang đeo được duy trì. 副 là lượng từ cho đồ có đôi/cặp.",
    },
    {
      q: "他女朋友长什么{}？",
      a: ["样"],
      py: "Tā nǚpéngyou zhǎng shénme yàng?",
      vi: "Bạn gái anh ấy trông như thế nào?",
      note: "长什么样 = trông thế nào, dung mạo ra sao (长 đọc zhǎng).",
    },
    {
      q: "里边正{}着教学研讨会呢。",
      a: ["开"],
      py: "Lǐbian zhèng kāizhe jiàoxué yántǎohuì ne.",
      vi: "Bên trong đang họp hội thảo giảng dạy.",
      note: "开会 = họp. 正…着…呢: đang diễn ra. 开着会 = đang họp.",
    },
    {
      q: "穿蓝{}的那位就是我的老师。",
      a: ["西服"],
      py: "Chuān lán xīfú de nà wèi jiùshì wǒ de lǎoshī.",
      vi: "Người mặc com-lê xanh kia chính là thầy giáo của tôi.",
      note: "西服 = com-lê, vest. 穿蓝西服的 là cụm có 的 làm định ngữ cho 那位: người mặc com-lê màu xanh.",
    },
    {
      q: "会上，大家在认真地讨论着，会议的{}很好。",
      a: ["气氛"],
      py: "Huì shang, dàjiā zài rènzhēn de tǎolùnzhe, huìyì de qìfēn hěn hǎo.",
      vi: "Trong cuộc họp, mọi người đang thảo luận nghiêm túc, không khí cuộc họp rất tốt.",
      note: "气氛 = không khí, bầu không khí (danh từ): 气氛很好, 气氛热烈.",
    },
    {
      q: "房间的墙上{}着一张油画。",
      a: ["挂"],
      py: "Fángjiān de qiáng shang guàzhe yì zhāng yóuhuà.",
      vi: "Trên tường phòng treo một bức tranh sơn dầu.",
      note: "Câu tồn hiện: nơi chốn + V着 + số lượng + danh từ. 挂着 = đang treo (trạng thái được duy trì).",
    },
    {
      q: "我的桌子上{}着全家的照片。",
      a: ["摆"],
      py: "Wǒ de zhuōzi shang bǎizhe quánjiā de zhàopiàn.",
      vi: "Trên bàn tôi bày ảnh cả nhà.",
      note: "摆着 = bày, đặt (đồ vật đặt trên mặt phẳng như bàn, kệ). Cũng là câu tồn hiện.",
    },
    {
      q: "她对人很热情，总是{}着跟人说话。",
      a: ["笑"],
      py: "Tā duì rén hěn rèqíng, zǒngshì xiàozhe gēn rén shuōhuà.",
      vi: "Cô ấy rất nhiệt tình với mọi người, lúc nào cũng cười nói chuyện với người ta.",
      note: "V1着 + V2: V1 (笑着) chỉ trạng thái/cách thức kèm theo khi làm V2 (说话): vừa cười vừa nói.",
    },
  ],
};

const EX4: Multi[] = [
  {
    q: "我看见她在一张桌子前{}，跟对面的一个人高兴地{}茶，{}话。",
    a: ["坐着", "喝着", "说着"],
    word: "着",
    py: "Wǒ kànjiàn tā zài yì zhāng zhuōzi qián zuòzhe, gēn duìmiàn de yí ge rén gāoxìng de hēzhe chá, shuōzhe huà.",
    vi: "Tôi thấy cô ấy ngồi trước một cái bàn, vui vẻ vừa uống trà vừa trò chuyện với người ngồi đối diện.",
    note: "V着 diễn tả trạng thái hoặc hành động đang duy trì. 坐着 là tư thế, 喝着茶 và 说着话 là hai việc đang diễn ra cùng lúc.",
  },
  {
    q: "王老师正在教室前边{}上课呢。",
    a: ["站着"],
    word: "着",
    py: "Wáng lǎoshī zhèngzài jiàoshì qiánbian zhànzhe shàngkè ne.",
    vi: "Thầy Vương đang đứng ở phía trước lớp giảng bài.",
    note: "V1着 + V2: 站着 là tư thế kèm theo khi làm V2 (上课): đứng mà giảng bài.",
  },
  {
    q: "A：你忙什么呢？\nB：我正{}饭呢。",
    a: ["忙着"],
    word: "着",
    py: "A: Nǐ máng shénme ne? B: Wǒ zhèng mángzhe zuò fàn ne.",
    vi: "A: Bạn đang bận gì thế? B: Tôi đang bận nấu cơm.",
    note: "忙着 + động từ: đang bận làm việc gì. 正…着…呢: đang diễn ra.",
    alt: [["做着", "忙着做"]],
    warn: 'Đáp án sách ghi 忙着, nhưng "我正忙着饭呢" thiếu động từ. Câu tự nhiên là 我正忙着做饭呢 (hoặc 我正做着饭呢). Quiz chấp nhận cả 忙着做 và 做着.',
  },
  {
    q: "慢点儿，别着急，我们{}你。",
    a: ["等着"],
    word: "着",
    py: "Mànr diǎn, bié zháojí, wǒmen děngzhe nǐ.",
    vi: "Từ từ thôi, đừng vội, chúng tôi đang đợi bạn.",
    note: "等着 = đang chờ. Chú ý: 着 trong 着急 đọc là zháo, khác với 着 (zhe) chỉ trạng thái.",
  },
  {
    q: "A：玛丽怎么没来？\nB：我刚给她打过电话，她已经出门了，现在可能正在路上{}呢。",
    a: ["走着"],
    word: "着",
    py: "A: Mǎlì zěnme méi lái? B: Wǒ gāng gěi tā dǎ guo diànhuà, tā yǐjīng chūmén le, xiànzài kěnéng zhèngzài lù shang zǒuzhe ne.",
    vi: "A: Sao Mary chưa đến? B: Tôi vừa gọi điện cho cô ấy, cô ấy đã ra khỏi nhà rồi, bây giờ có lẽ đang đi trên đường.",
    note: "正在…V着呢: đang trong quá trình, hành động đang tiếp diễn. 走着 = đang đi.",
  },
  {
    q: "这家门前{}一个红双喜字。",
    a: ["贴着"],
    word: "着",
    py: "Zhè jiā mén qián tiēzhe yí ge hóng shuāngxǐzì.",
    vi: "Trước cửa nhà này dán một chữ Song Hỷ màu đỏ.",
    note: "Câu tồn hiện: nơi chốn + V着 + số lượng + danh từ. 贴着 = đang dán ở đó (kết quả duy trì).",
  },
  {
    q: "他的上衣前面{}几个汉字——“不到长城非好汉”。",
    a: ["写着"],
    word: "着",
    py: "Tā de shàngyī qiánmiàn xiězhe jǐ ge Hànzì — “Bú dào Chángchéng fēi hǎohàn”.",
    vi: "Phía trước áo khoác của anh ấy có viết mấy chữ Hán: “Bất đáo Trường Thành phi hảo hán”.",
    note: "写着 = có chữ viết ở đó (trạng thái). Cũng là câu tồn hiện, nơi chốn đứng đầu.",
  },
  {
    q: "我{}一纸箱子东西一步一步地往楼上爬。",
    a: ["提着"],
    word: "着",
    py: "Wǒ tízhe yì zhǐ xiāngzi dōngxi yí bù yí bù de wǎng lóu shàng pá.",
    vi: "Tôi xách một thùng giấy đồ, từng bước từng bước leo lên lầu.",
    note: "V1着 + O + V2: 提着 là cách thức kèm theo khi leo (爬): vừa xách vừa leo.",
  },
];

const TAB5: Tab = {
  id: "5",
  label: "5",
  sub: "Điền 了, 着 hoặc 过 vào chỗ trống",
  options: [
    {
      zh: "了",
      py: "le",
    },
    {
      zh: "着",
      py: "zhe",
    },
    {
      zh: "过",
      py: "guo",
    },
  ],
  items: [
    {
      q: "昨天的晚会上，玛丽唱{}一首歌。",
      a: ["了"],
      py: "Zuótiān de wǎnhuì shang, Mǎlì chàng le yì shǒu gē.",
      vi: "Trong buổi tiệc tối qua, Mary đã hát một bài.",
      note: "了 đặt sau động từ: hành động đã hoàn thành. Có số lượng (一首歌) và thời gian quá khứ (昨天).",
    },
    {
      q: "她去年来{}一次中国，今年又来{}。",
      a: ["过", "了"],
      py: "Tā qùnián lái guo yí cì Zhōngguó, jīnnián yòu lái le.",
      vi: "Năm ngoái cô ấy đã đến Trung Quốc một lần, năm nay lại đến.",
      note: "来过 = đã từng đến (kinh nghiệm, nhấn mạnh việc từng xảy ra). 又来了: lần này đã xảy ra, 了 đặt cuối câu.",
    },
    {
      q: "很多父母带{}孩子来参观这个展览。",
      a: ["着"],
      py: "Hěn duō fùmǔ dàizhe háizi lái cānguān zhège zhǎnlǎn.",
      vi: "Rất nhiều bậc cha mẹ dẫn con đến tham quan triển lãm này.",
      note: "V1着 + O + V2: 带着孩子 là cách thức kèm theo (dắt theo con) khi làm V2 (来参观).",
    },
    {
      q: "我只去{}一次北京，还没去{}上海。",
      a: ["过", "过"],
      py: "Wǒ zhǐ qù guo yí cì Běijīng, hái méi qù guo Shànghǎi.",
      vi: "Tôi mới chỉ đến Bắc Kinh một lần, vẫn chưa từng đến Thượng Hải.",
      note: "去过 = từng đi. Phủ định kinh nghiệm: 没(有)去过, vẫn giữ 过.",
    },
    {
      q: "我给你买来{}一件生日礼物，不知道你喜欢不喜欢。",
      a: ["了"],
      py: "Wǒ gěi nǐ mǎi lái le yí jiàn shēngrì lǐwù, bù zhīdào nǐ xǐhuan bù xǐhuan.",
      vi: "Tôi mua cho bạn một món quà sinh nhật, không biết bạn có thích không.",
      note: "买来了: hành động đã hoàn thành, 了 đặt sau bổ ngữ xu hướng 来 và trước tân ngữ có số lượng.",
    },
    {
      q: "这个地方我们以前没来{}。",
      a: ["过"],
      py: "Zhège dìfang wǒmen yǐqián méi lái guo.",
      vi: "Nơi này trước đây chúng tôi chưa từng đến.",
      note: "没…过: chưa từng. 以前 gợi ý nói về kinh nghiệm trong quá khứ.",
    },
    {
      q: "我们下{}课就去买票吧。",
      a: ["了"],
      py: "Wǒmen xià le kè jiù qù mǎi piào ba.",
      vi: "Tan học xong chúng ta đi mua vé nhé.",
      note: "V + 了 + O + 就 + V: xong việc trước rồi mới làm việc sau. 下课 là động từ ly hợp nên 了 chen vào giữa: 下了课.",
    },
    {
      q: "她穿{}一条红裙子。",
      a: ["着"],
      py: "Tā chuānzhe yì tiáo hóng qúnzi.",
      vi: "Cô ấy đang mặc một chiếc váy đỏ.",
      note: "穿着 = đang mặc (trạng thái duy trì). Khác 穿了 (hành động mặc đã xong). 条 là lượng từ cho váy, quần.",
    },
  ],
};

const EX6: Fix[] = [
  {
    wrong: "他吃了饭就躺着床上。",
    a: "他吃了饭就在床上躺着。",
    py: "Tā chī le fàn jiù zài chuáng shang tǎngzhe.",
    vi: "Anh ấy ăn cơm xong là nằm trên giường.",
    note: "Nơi chốn phải đặt trước động từ bằng 在 + nơi chốn, còn 着 đặt sau động từ: 在床上躺着.",
    alt: ["他吃了饭就躺在床上。"],
  },
  {
    wrong: "我一进他的房间就看见挂着墙上的画儿。",
    a: "我一进他的房间就看见挂在墙上的画儿。",
    py: "Wǒ yí jìn tā de fángjiān jiù kànjiàn guà zài qiáng shang de huàr.",
    vi: "Vừa bước vào phòng anh ấy tôi liền thấy bức tranh treo trên tường.",
    note: "V + 在 + nơi chốn: 挂在墙上 chỉ nơi bức tranh được treo. 着 không đi trực tiếp với nơi chốn như vậy. Đổi 着 thành 在.",
    alt: ["我一进他的房间就看见墙上挂着的画儿。"],
    warn: "Đáp án sách ở dòng (2) ghi “才”改成“再”, không khớp với câu nào trong đề (có thể in nhầm). Mình sửa theo nội dung câu: (2) 着→在, (3) 着→了, (4) 着→在.",
  },
  {
    wrong: "他已经病着一个多星期了。",
    a: "他已经病了一个多星期了。",
    py: "Tā yǐjīng bìng le yí ge duō xīngqī le.",
    vi: "Anh ấy đã bệnh hơn một tuần rồi.",
    note: "Có thời lượng (一个多星期) và nói về khoảng thời gian kéo dài đến nay thì dùng 了 sau động từ, không dùng 着. Đổi 着 thành 了.",
  },
  {
    wrong: "我们坐着房间里谈话。",
    a: "我们坐在房间里谈话。",
    py: "Wǒmen zuò zài fángjiān li tánhuà.",
    vi: "Chúng tôi ngồi trong phòng nói chuyện.",
    note: "坐在 + nơi chốn = ngồi ở đâu. 着 không đi trực tiếp với nơi chốn. Đổi 着 thành 在.",
    alt: ["我们在房间里坐着谈话。"],
  },
  {
    wrong: "中国的商店星期日也不关着门，非常好。",
    a: "中国的商店星期日也不关门，非常好。",
    py: "Zhōngguó de shāngdiàn xīngqīrì yě bù guān mén, fēicháng hǎo.",
    vi: "Cửa hàng ở Trung Quốc chủ nhật cũng không đóng cửa, rất tốt.",
    note: "Nói về thói quen thường xuyên thì phủ định bằng 不 + động từ, không dùng 着 (着 chỉ trạng thái đang duy trì). Bỏ 着.",
  },
  {
    wrong: "她穿着一件红大衣在身上。",
    a: "她穿着一件红大衣。",
    py: "Tā chuānzhe yí jiàn hóng dàyī.",
    vi: "Cô ấy mặc một chiếc áo khoác đỏ.",
    note: "穿 đã có nghĩa là mặc trên người nên 在身上 là thừa. Bỏ 在身上.",
  },
];

const norm = (s: string) =>
  s.replace(/[（(][^）)]*[）)]/g, "").replace(/[^\p{L}\p{N}]/gu, "");

const TITLES: Record<string, { t: string; s: string }> = {
  "3": { t: "3. 选词填空", s: "Chọn từ thích hợp điền vào chỗ trống" },
  "4": { t: "4. 用“动词 + 着”填空", s: "Gõ “động từ + 着” vào chỗ trống" },
  "5": { t: "5. 用“了”“着”“过”填空", s: "Điền 了, 着 hoặc 过 vào chỗ trống" },
  "6": { t: "6. 改错句", s: "Sửa câu sai" },
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

// ===== Bài 3 (A, B, C) =====
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

// ===== Bài 4 (gõ tay, nhiều chỗ trống) =====
type Stat = "exact" | "word" | "none";

function MultiFillTab({ items }: { items: Multi[] }) {
  const [txt, setTxt] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const blank = (it: Multi, j: number, v: string): Stat => {
    const n = norm(v);
    if ([it.a[j], ...(it.alt?.[j] ?? [])].some((x) => norm(x) === n))
      return "exact";
    if (it.word && n.includes(norm(it.word))) return "word";
    return "none";
  };
  const stats = items.map((it, i) =>
    it.a.map((_, j) => blank(it, j, txt[`${i}-${j}`] ?? "")),
  );
  const overall = stats.map((s): Stat =>
    s.every((x) => x === "exact")
      ? "exact"
      : s.every((x) => x !== "none")
        ? "word"
        : "none",
  );
  const exact = overall.filter((s) => s === "exact").length;
  const word = overall.filter((s) => s === "word").length;

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
                              "mx-1 w-24 border-0 border-b-2 bg-transparent px-1 text-center font-serif text-lg focus:outline-none " +
                              (!checked
                                ? "border-slate-300 focus:border-sky-500"
                                : stats[i][j] === "exact"
                                  ? "border-emerald-500 text-emerald-800"
                                  : stats[i][j] === "word"
                                    ? "border-amber-400 text-amber-800"
                                    : "border-rose-400 text-rose-800")
                            }
                          />
                        )}
                      </span>
                    ))}
                  </p>
                  {checked && (
                    <div className="mt-3">
                      {overall[i] === "exact" && (
                        <p className="font-semibold text-emerald-700">
                          Khớp đáp án sách.
                        </p>
                      )}
                      {overall[i] === "word" && (
                        <p className="font-semibold text-amber-700">
                          Bạn đã dùng dạng V着 nhưng khác đáp án sách.{" "}
                          <span className="font-normal text-slate-700">
                            Câu của bạn có thể vẫn đúng, hãy so với đáp án bên
                            dưới.
                          </span>
                        </p>
                      )}
                      {overall[i] === "none" && (
                        <p className="font-semibold text-rose-700">
                          Chưa đúng.{" "}
                          <span className="font-normal text-slate-700">
                            Chỗ trống cần dạng “động từ + 着”.
                          </span>
                        </p>
                      )}
                      <p className="mt-1 text-slate-700">
                        Đáp án sách:{" "}
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
        summary={`Khớp đáp án ${exact}/${items.length} câu${word > 0 ? ` · ${word} câu dùng đúng dạng V着 nhưng khác đáp án` : ""}`}
      />
    </div>
  );
}

// ===== Bài 6 (từng câu một) =====
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
const KEYS = ["3", "4", "5", "6"];

export default function Lesson1Quiz() {
  const [tab, setTab] = useState("3");

  const render = (k: string) => {
    if (k === "3") return <FillTab tab={TAB3} />;
    if (k === "4") return <MultiFillTab items={EX4} />;
    if (k === "5") return <FillTab tab={TAB5} />;
    return <FixTab EX7={EX6} />;
  };

  return (
    <div className="mx-auto">
      <p className="mb-2 text-sm text-slate-500">
        汉语教程（第3版）第二册 下 · 第十五课 会议厅的门开着呢
      </p>
      {/* <div className="mb-5 flex gap-1 overflow-x-auto border-b border-slate-200">
        {KEYS.map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={
              "-mb-px shrink-0 rounded-t-md border-b-2 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 " +
              (k === tab
                ? "border-sky-600 bg-sky-50 text-sky-700"
                : "border-transparent text-slate-500 hover:text-slate-800")
            }
          >
            Bài {k}
          </button>
        ))}
      </div> */}
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
