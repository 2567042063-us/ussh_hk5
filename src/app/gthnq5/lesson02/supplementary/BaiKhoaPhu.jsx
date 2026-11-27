"use client";

import { useState } from "react";

import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

// 课文: điền đoạn văn 综合填空 vào đây (cùng định dạng với bài trước):
// [[ [ "câu có {1|đáp án}", "pinyin", "tiếng Việt" ], ... ], ... ]  (mỗi mảng ngoài = 1 đoạn)
const P = [
  [
    [
      "雪后爬长城",
      "Xuě hòu pá Chángchéng",
      "Leo Vạn Lý Trường Thành sau khi tuyết rơi.",
    ],
    [
      "星期六夜里,下了一场大雪。",
      "Xīngqīliù yè lǐ, xià le yì cháng dàxuě.",
      "Đêm thứ Bảy, có một trận tuyết lớn.",
    ],
    [
      "第二天早上起床一看,外边的雪景很美。",
      "Dì-èr tiān zǎoshang qǐchuáng yí kàn, wàibian de xuějǐng hěn měi.",
      "Sáng hôm sau thức dậy nhìn ra, cảnh tuyết bên ngoài rất đẹp.",
    ],
    [
      "这时我突然想带女朋友去长城看雪景。",
      "Zhè shí wǒ tūrán xiǎng dài nǚpéngyou qù Chángchéng kàn xuějǐng.",
      "Lúc này tôi đột nhiên muốn đưa bạn gái đến Trường Thành ngắm cảnh tuyết.",
    ],
    [
      "我给她打了个电话,问她愿意不愿意去长城。",
      "Wǒ gěi tā dǎ le ge diànhuà, wèn tā yuànyì bú yuànyì qù Chángchéng.",
      "Tôi gọi điện cho cô ấy, hỏi cô ấy có muốn đi Trường Thành không.",
    ],
    [
      "她说她也正要给我打电话,问我想不想去呢。",
      "Tā shuō tā yě zhèng yào gěi wǒ dǎ diànhuà, wèn wǒ xiǎng bu xiǎng qù ne.",
      "Cô ấy nói cô ấy cũng đang định gọi điện cho tôi, hỏi tôi có muốn đi không.",
    ],
  ],
  [
    [
      "太阳{1|出来}了,是个好天气。",
      "Tàiyáng chūlái le, shì ge hǎo tiānqì.",
      "Mặt trời ló ra rồi, là một ngày đẹp trời.",
    ],
    [
      "吃了早饭我们就坐车出发了。",
      "Chī le zǎofàn wǒmen jiù zuò chē chūfā le.",
      "Ăn sáng xong chúng tôi đi xe xuất phát.",
    ],
  ],
  [
    [
      "只用了两个多小时,我们{2|就}到了长城。",
      "Zhǐ yòng le liǎng ge duō xiǎoshí, wǒmen jiù dào le Chángchéng.",
      "Chỉ mất hơn hai tiếng, chúng tôi đã đến Trường Thành.",
    ],
    [
      "女朋友说:“‘不到长城非好汉’,今天我们到了长城,也算是好汉了。”",
      "Nǚpéngyou shuō: “‘Bú dào Chángchéng fēi hǎohàn’, jīntiān wǒmen dào le Chángchéng, yě suàn shì hǎohàn le.”",
      "Bạn gái nói: “‘Chưa đến Trường Thành chưa phải hảo hán’, hôm nay chúng ta đã đến Trường Thành, cũng coi như là hảo hán rồi.”",
    ],
    [
      "长城上没有人,很静。",
      "Chángchéng shàng méiyǒu rén, hěn jìng.",
      "Trên Trường Thành không có người, rất yên tĩnh.",
    ],
    [
      "几个工作人员看见我们都笑{3|了},我不知道他们为什么笑。",
      "Jǐ ge gōngzuò rényuán kànjiàn wǒmen dōu xiào le, wǒ bù zhīdào tāmen wèishénme xiào.",
      "Mấy nhân viên làm việc thấy chúng tôi đều cười, tôi không biết vì sao họ cười.",
    ],
    [
      "大概他们觉得下这么大的雪还来爬长城很奇怪{4|吧}。",
      "Dàgài tāmen juéde xià zhème dà de xuě hái lái pá Chángchéng hěn qíguài ba.",
      "Có lẽ họ thấy tuyết lớn thế này mà còn đến leo Trường Thành thì rất lạ nhỉ.",
    ],
    [
      "买了票我们就往上爬,因为有雪,爬不上{5|去}。",
      "Mǎi le piào wǒmen jiù wǎng shàng pá, yīnwèi yǒu xuě, pá bu shàngqù.",
      "Mua vé xong chúng tôi leo lên, vì có tuyết nên không leo lên được.",
    ],
    [
      "我们刚爬上去几步又滑下来,滑下来再爬上去,很有意思。",
      "Wǒmen gāng pá shàngqù jǐ bù yòu huá xiàlái, huá xiàlái zài pá shàngqù, hěn yǒu yìsi.",
      "Chúng tôi vừa leo lên được mấy bước lại trượt xuống, trượt xuống rồi lại leo lên, rất thú vị.",
    ],
    [
      "长城上只有我和女朋友。",
      "Chángchéng shàng zhǐ yǒu wǒ hé nǚpéngyou.",
      "Trên Trường Thành chỉ có tôi và bạn gái.",
    ],
    [
      "爬了快一个小时了,我女朋友累{6|得}有点儿爬不动了。",
      "Pá le kuài yí ge xiǎoshí le, wǒ nǚpéngyou lèi de yǒudiǎnr pá bu dòng le.",
      "Leo gần một tiếng rồi, bạn gái tôi mệt đến mức hơi không leo nổi nữa.",
    ],
    [
      "我要拉她,她不让,一定要自己爬上去。",
      "Wǒ yào lā tā, tā bú ràng, yídìng yào zìjǐ pá shàngqù.",
      "Tôi định kéo cô ấy, cô ấy không cho, nhất quyết tự mình leo lên.",
    ],
    [
      "我们爬了差不多两个小时,终于爬到了长城最{7|高}的地方。",
      "Wǒmen pá le chàbuduō liǎng ge xiǎoshí, zhōngyú pá dào le Chángchéng zuì gāo de dìfang.",
      "Chúng tôi leo gần hai tiếng, cuối cùng cũng lên đến chỗ cao nhất của Trường Thành.",
    ],
    [
      "站在上边往下看,眼前是一片白色的世界,真美啊!",
      "Zhàn zài shàngbian wǎng xià kàn, yǎnqián shì yí piàn báisè de shìjiè, zhēn měi a!",
      "Đứng trên cao nhìn xuống, trước mắt là một thế giới màu trắng, đẹp thật!",
    ],
    [
      "我们在长城上照了很多相,{8|还}在长城上边堆了一个大雪人。",
      "Wǒmen zài Chángchéng shàng zhào le hěn duō xiàng, hái zài Chángchéng shàngbian duī le yí ge dà xuěrén.",
      "Chúng tôi chụp rất nhiều ảnh trên Trường Thành, còn đắp một người tuyết lớn ở trên đó.",
    ],
  ],
  [
    [
      "下来的时候,我们一会儿扶着墙走,一会儿坐在地上往下滑,很好玩儿。",
      "Xiàlái de shíhou, wǒmen yíhuìr fú zhe qiáng zǒu, yíhuìr zuò zài dì shàng wǎng xià huá, hěn hǎowánr.",
      "Lúc xuống, lúc thì chúng tôi vịn tường đi, lúc thì ngồi xuống đất trượt xuống, rất vui.",
    ],
  ],
  [
    [
      "今天,虽然很累,但是我们玩儿得非常高兴。",
      "Jīntiān, suīrán hěn lèi, dànshì wǒmen wánr de fēicháng gāoxìng.",
      "Hôm nay tuy rất mệt nhưng chúng tôi chơi rất vui.",
    ],
  ],
  [
    [
      "你要是去长城,最好也在下雪以后去。",
      "Nǐ yàoshi qù Chángchéng, zuìhǎo yě zài xiàxuě yǐhòu qù.",
      "Nếu bạn đi Trường Thành, tốt nhất cũng nên đi sau khi tuyết rơi.",
    ],
  ],
];

const ANS = ["出来", "就", "了", "吧", "去", "得", "高", "还"];

// Ghi chú đáp án khác cũng đúng (hiện ở footer): [số câu, đáp án sách, đáp án khác, ghi chú]
const NOTES = [
  [
    3,
    "了",
    "起来",
    "笑了 (cười một cái / đã cười) hoặc 笑起来 (bắt đầu cười) đều đúng; sách chọn 了.",
  ],
  [
    8,
    "还",
    "也",
    "还在…堆了… (còn đắp thêm) hoặc 也在…堆了… (cũng đắp) đều đúng; 又 ít hợp vì không phải việc lặp lại.",
  ],
  [
    2,
    "就",
    "—",
    "Không dùng 才: 只用了两个多小时 nhấn mạnh nhanh, đi với 就; 才 hàm ý muộn / lâu.",
  ],
];

const C = [
  [
    "A",
    "妈妈,我跟你商量一件事儿。",
    "Māma, wǒ gēn nǐ shāngliang yí jiàn shìr.",
    "Mẹ ơi, con bàn với mẹ một việc.",
  ],
  ["B", "什么事儿?", "Shénme shìr?", "Việc gì vậy?"],
  [
    "A",
    "我想去中国留学。",
    "Wǒ xiǎng qù Zhōngguó liúxué.",
    "Con muốn đi Trung Quốc du học.",
  ],
  [
    "B",
    "你怎么有这样的想法?你不打算结婚了?",
    "Nǐ zěnme yǒu zhèyàng de xiǎngfǎ? Nǐ bù dǎsuàn jiéhūn le?",
    "Sao con lại có ý nghĩ như vậy? Con không định kết hôn nữa à?",
  ],
  [
    "A",
    "我就去一年,结婚的事儿回来以后再说。",
    "Wǒ jiù qù yì nián, jiéhūn de shìr huílái yǐhòu zài shuō.",
    "Con chỉ đi một năm thôi, chuyện kết hôn để về rồi tính.",
  ],
  [
    "B",
    "你现在的工作不是挺好吗?回来以后找不到工作怎么办?",
    "Nǐ xiànzài de gōngzuò bú shì tǐng hǎo ma? Huílái yǐhòu zhǎo bu dào gōngzuò zěnme bàn?",
    "Công việc hiện tại của con chẳng phải khá tốt sao? Về rồi không tìm được việc thì làm thế nào?",
  ],
  [
    "A",
    "不会的。我已经学了一年汉语了,可是,说得还不太好,我想去中国学一年,回来后能找到更好的工作。",
    "Bú huì de. Wǒ yǐjīng xué le yì nián Hànyǔ le, kěshì, shuō de hái bú tài hǎo, wǒ xiǎng qù Zhōngguó xué yì nián, huílái hòu néng zhǎo dào gèng hǎo de gōngzuò.",
    "Sẽ không đâu ạ. Con đã học tiếng Hán một năm rồi, nhưng nói vẫn chưa tốt lắm, con muốn sang Trung Quốc học một năm, về rồi sẽ tìm được công việc tốt hơn.",
  ],
  [
    "B",
    "你跟你爸爸说了吗?",
    "Nǐ gēn nǐ bàba shuō le ma?",
    "Con nói với bố con chưa?",
  ],
  [
    "A",
    "爸爸没问题,主要是你。",
    "Bàba méi wèntí, zhǔyào shì nǐ.",
    "Bố thì không vấn đề gì, chủ yếu là mẹ.",
  ],
  [
    "B",
    "我不同意你就不去了吗?我还不知道你的性格,决定了的事情,谁说也不行。",
    "Wǒ bù tóngyì nǐ jiù bú qù le ma? Wǒ hái bù zhīdào nǐ de xìnggé, juédìng le de shìqing, shéi shuō yě bù xíng.",
    "Mẹ không đồng ý thì con sẽ không đi sao? Mẹ còn lạ gì tính con, việc đã quyết định thì ai nói cũng không được.",
  ],
  [
    "A",
    "妈妈,一年时间很快就会过去的。",
    "Māma, yì nián shíjiān hěn kuài jiù huì guòqù de.",
    "Mẹ ơi, một năm trôi qua rất nhanh thôi.",
  ],
  [
    "B",
    "小鸟长大了,翅膀(chìbǎng: cánh chim)硬了,该飞了。",
    "Xiǎoniǎo zhǎng dà le, chìbǎng yìng le, gāi fēi le.",
    "Chim non lớn rồi, cánh đã cứng cáp rồi, đến lúc bay rồi. (Ý: con đã trưởng thành, đến lúc tự lập.)",
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
  title: "补充课文 · 雪后爬长城",
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
    "突然",
    "tūrán",
    "副 / 形",
    "ĐỘT NHIÊN",
    "đột nhiên, bất ngờ · suddenly; unexpectedly",
    "突然 + V · 很突然 · 突然的 + N (làm được cả vị ngữ, định ngữ)",
    "天突然下起雨来了。",
    "Tiān tūrán xià qǐ yǔ lái le.",
    "Trời đột nhiên đổ mưa.",
    "忽然 hūrán: bỗng nhiên (chỉ làm trạng ngữ, không dùng 很忽然) · 猛然 měngrán: đột ngột, mạnh mẽ · 骤然 zhòurán: bỗng chốc (văn viết) · (trái nghĩa) 逐渐 zhújiàn: dần dần",
    "突 tū: đột ngột · 然 rán: như vậy",
  ],
  [
    2,
    "不到长城非好汉",
    "bú dào Chángchéng fēi hǎohàn",
    "俗语",
    "BẤT ĐÁO TRƯỜNG THÀNH PHI HẢO HÁN",
    "chưa đến Trường Thành chưa phải hảo hán · If you fail to reach the Great Wall, you are not a hero",
    "Dùng để khích lệ leo Trường Thành hoặc làm việc gì phải đến cùng; 非 = 不是 (văn viết)",
    "不到长城非好汉,我们一起爬上去吧!",
    "Bú dào Chángchéng fēi hǎohàn, wǒmen yìqǐ pá shàngqù ba!",
    "Chưa lên Trường Thành chưa phải hảo hán, chúng ta cùng leo lên nào!",
    "Gần ý (kiên trì đến cùng): 有志者事竟成 yǒu zhì zhě shì jìng chéng",
    "好汉 hǎohàn: hảo hán, người dũng cảm · 长城 Chángchéng: Trường Thành · 非 fēi: không phải",
  ],
  [
    3,
    "奇怪",
    "qíguài",
    "形 / 动",
    "KỲ QUÁI",
    "kỳ lạ, lạ lùng · strange; weird",
    "很奇怪 · 奇怪的 + N · 觉得奇怪 · 奇怪 + câu hỏi (lấy làm lạ)",
    "他今天没来上课,真奇怪。",
    "Tā jīntiān méi lái shàngkè, zhēn qíguài.",
    "Hôm nay cậu ấy không đến lớp, lạ thật.",
    "奇特 qítè: đặc biệt, hiếm thấy (trung tính / khen) · 古怪 gǔguài: kỳ quặc (thường chê) · 怪 guài: lạ (khẩu ngữ: 怪事)",
    "奇 qí: lạ, hiếm · 怪 guài: quái, lạ",
  ],
  [
    4,
    "滑",
    "huá",
    "动 / 形",
    "HOẠT",
    "trượt; trơn · to slip; to slide",
    "路很滑 · 滑倒 · 滑冰 / 滑雪 (trượt băng / tuyết)",
    "下雨以后路很滑,他不小心滑倒了。",
    "Xià yǔ yǐhòu lù hěn huá, tā bù xiǎoxīn huá dǎo le.",
    "Sau mưa đường rất trơn, anh ấy không cẩn thận trượt ngã.",
    "溜 liū: trượt, lướt (khẩu ngữ: 溜冰) · 滑溜 huáliu: trơn láng",
    "滑冰 huábīng · 滑雪 huáxuě · 滑梯 huátī: cầu trượt",
  ],
  [
    5,
    "堆",
    "duī",
    "动 / 量",
    "ĐÔI",
    "chất đống; đống · to pile up",
    "堆在…上 · 堆满 · 一堆 + N (lượng từ: đống)",
    "桌子上堆着很多书。",
    "Zhuōzi shàng duī zhe hěn duō shū.",
    "Trên bàn chất rất nhiều sách.",
    "积 jī: tích tụ, dồn lại (积雪) · 摞 luò: xếp chồng lên nhau · 垒 lěi: xếp / xây chồng",
    "堆积 duījī: chất đống · 雪堆 xuěduī: đống tuyết",
  ],
  [
    6,
    "扶",
    "fú",
    "动",
    "PHÙ",
    "đỡ (bằng tay) · to support with the hand",
    "扶 + người (+ 起来 / 着 / 过马路) · 扶着 + vật (vịn)",
    "我扶着奶奶慢慢地走过马路。",
    "Wǒ fú zhe nǎinai mànmàn de zǒu guò mǎlù.",
    "Tôi đỡ bà từ từ đi qua đường.",
    "搀 chān / 搀扶 chānfú: dìu (người yếu, già) · 帮助 bāngzhù: giúp đỡ (nghĩa rộng hơn)",
    "扶手 fúshou: tay vịn · 扶梯 fútī: thang cuốn",
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
          <div className="ztai__py text-sky-700">{py}</div>
          <div className="text-slate-700">{vi}</div>
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

export default function BaiKhoaPhuShangLiang() {
  const [tab, setTab] = useState(0);
  const [all, setAll] = useState(false);
  const tabs = ["课文", "生词", "商量 Discussing", "Dịch Việt – Trung"];
  return (
    <div className="mx-auto p-4">
      <h1 className="ztai__zh text-2xl text-gray-800">
        第二课 · 补充课文 · 雪后爬长城
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
          <h2 className="mb-1 text-lg font-bold">综合填空</h2>
          {/* <p className="mb-2 text-xs text-gray-500">
            Bấm vào từng câu để xem pinyin + tiếng Việt. Đáp án được tô vàng.
          </p> */}
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
