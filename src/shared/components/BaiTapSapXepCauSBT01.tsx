"use client";

/**
 * Bài tập "5. Sắp xếp câu" (chép từ ảnh sách giáo trình).
 * Component client độc lập cho Next.js (App Router) / React.
 *
 * Dùng:  import BaiTapSapXepCauSGK from "@/components/BaiTapSapXepCauSGK";
 *        <BaiTapSapXepCauSGK />
 *
 * CSS được nhúng ngay trong file (mọi class có tiền tố "bt-", nằm trong vùng .bt)
 * nên không cần file CSS riêng và không đụng style toàn cục.
 */
import { useCallback, useEffect, useState } from "react";

/* ───────────────────────── Kiểu dữ liệu ───────────────────────── */

/** [bộ, số câu trong sách, các từ ngăn bởi "|", đáp án, pinyin, các đáp án khác cũng đúng] */
type Item = [number, string, string, string, string, string[]];
type Chip = { id: number; t: string };
type Q = { item: Item; retry: boolean };

/* ───────────────────────── Dữ liệu ───────────────────────── */

const ITEMS: Item[] = [
  [
    1,
    "(1)",
    "教|他们|王老师|没有|中文",
    "王老师没有教他们中文",
    "Wáng lǎoshī méiyǒu jiāo tāmen Zhōngwén",
    ["他们没有教王老师中文"],
  ],
  [
    1,
    "(2)",
    "在|朋友|下午|他|上|宿舍|聊天儿|网|跟",
    "他下午在宿舍跟朋友上网聊天儿",
    "Tā xiàwǔ zài sùshè gēn péngyou shàngwǎng liáotiānr",
    [],
  ],
  [
    1,
    "(3)",
    "现在|学习|在|汉语|你|哪儿",
    "你现在在哪儿学习汉语",
    "Nǐ xiànzài zài nǎr xuéxí Hànyǔ",
    [],
  ],
  [
    1,
    "(4)",
    "想|你|去|飞机|坐|中国|我|跟|一起",
    "我想跟你一起坐飞机去中国",
    "Wǒ xiǎng gēn nǐ yìqǐ zuò fēijī qù Zhōngguó",
    ["你想跟我一起坐飞机去中国"],
  ],
  [
    1,
    "(5)",
    "东西|超市|去|妈妈|点儿|买",
    "妈妈去超市买点儿东西",
    "Māma qù chāoshì mǎi diǎnr dōngxi",
    [],
  ],
  [
    2,
    "(1)",
    "件|商店|去|买|我|一|毛衣|明天",
    "我明天去商店买一件毛衣",
    "Wǒ míngtiān qù shāngdiàn mǎi yí jiàn máoyī",
    [],
  ],
  [
    2,
    "(2)",
    "这|怎么样|看看|你|书|中文|本",
    "你看看这本中文书怎么样",
    "Nǐ kànkan zhè běn Zhōngwén shū zěnmeyàng",
    [],
  ],
  [
    2,
    "(3)",
    "太|觉得|件|不|合适|这|衣服",
    "觉得这件衣服不太合适",
    "Juéde zhè jiàn yīfu bú tài héshì",
    [],
  ],
  [
    2,
    "(4)",
    "双|又|我|贵|鞋|高|又|喜欢|不|这",
    "我不喜欢这双鞋又高又贵",
    "Wǒ bù xǐhuan zhè shuāng xié yòu gāo yòu guì",
    [],
  ],
  [
    2,
    "(5)",
    "羽绒服|打|件|几|可以|这|折",
    "这件羽绒服可以打几折",
    "Zhè jiàn yǔróngfú kěyǐ dǎ jǐ zhé",
    [],
  ],
  [
    3,
    "(1)",
    "生日|他|正好|的|是|今年|春节",
    "今年他的生日正好是春节",
    "Jīnnián tā de shēngrì zhènghǎo shì Chūnjié",
    ["他的生日今年正好是春节"],
  ],
  [
    3,
    "(2)",
    "打算|不|汉语|我|学|韩语|学|我",
    "我不打算学韩语，我学汉语",
    "Wǒ bù dǎsuàn xué Hányǔ, wǒ xué Hànyǔ",
    ["我打算学汉语，我不学韩语"],
  ],
  [
    3,
    "(3)",
    "晚会|今天|参加|和|来|的|同学|我|都",
    "我和同学都来参加今天的晚会",
    "Wǒ hé tóngxué dōu lái cānjiā jīntiān de wǎnhuì",
    [],
  ],
  [
    3,
    "(4)",
    "都|送|给|好看|礼物|同学|我|的|很",
    "同学都送给我很好看的礼物",
    "Tóngxué dōu sòng gěi wǒ hěn hǎokàn de lǐwù",
    [],
  ],
  [
    3,
    "(5)",
    "快乐|一起|觉得|我|过|很|跟|朋友|生日|能",
    "我觉得能跟朋友一起过生日很快乐",
    "Wǒ juéde néng gēn péngyou yìqǐ guò shēngrì hěn kuàilè",
    [],
  ],
  [
    4,
    "(1)",
    "公司|都|星期一|在|从|他|星期五|没|到",
    "他从星期一到星期五都没在公司",
    "Tā cóng xīngqīyī dào xīngqīwǔ dōu méi zài gōngsī",
    [],
  ],
  [
    4,
    "(2)",
    "打|练|六点|从|她|每天|七点|早上|到|太极拳",
    "她每天早上从六点练到七点打太极拳",
    "Tā měi tiān zǎoshang cóng liù diǎn liàn dào qī diǎn dǎ tàijíquán",
    [],
  ],
  [
    4,
    "(3)",
    "天天|跑步|她|早上",
    "她天天早上跑步",
    "Tā tiāntiān zǎoshang pǎobù",
    [],
  ],
  [
    4,
    "(4)",
    "多|有|这|时间|学期|长",
    "这学期有多长时间",
    "Zhè xuéqī yǒu duō cháng shíjiān",
    [],
  ],
  [
    4,
    "(5)",
    "要|九点|三年级|明天|的|办公室|上午|学生|到|以后|准时",
    "明天上午九点以后三年级的学生要准时到办公室",
    "Míngtiān shàngwǔ jiǔ diǎn yǐhòu sān niánjí de xuésheng yào zhǔnshí dào bàngōngshì",
    ["三年级的学生明天上午九点以后要准时到办公室"],
  ],
  [
    5,
    "(3)",
    "我们|请|来|介绍|你|给|一下|吧|经验",
    "请你给我们来介绍一下经验吧",
    "Qǐng nǐ gěi wǒmen lái jièshào yíxià jīngyàn ba",
    [],
  ],
  [
    5,
    "(4)",
    "婚礼|我们|参加|北京|请|老师|的|我们|来",
    "我们请北京老师来参加我们的婚礼",
    "Wǒmen qǐng Běijīng lǎoshī lái cānjiā wǒmen de hūnlǐ",
    ["我们请北京的老师来参加我们婚礼"],
  ],
  [
    5,
    "(5)",
    "了|我|去|一个人|下午|操场|锻炼",
    "我下午一个人去操场锻炼了",
    "Wǒ xiàwǔ yí ge rén qù cāochǎng duànliàn le",
    [],
  ],
  [
    6,
    "(1)",
    "用|常常|伊妹儿|她|联系|跟|朋友",
    "她常常用伊妹儿跟朋友联系",
    "Tā chángcháng yòng yīmèir gēn péngyou liánxì",
    [],
  ],
  [
    6,
    "(2)",
    "让|都|我们|去|她|下午|办公室",
    "她让我们下午都去办公室",
    "Tā ràng wǒmen xiàwǔ dōu qù bàngōngshì",
    [],
  ],
  [
    7,
    "(1)",
    "了|昨天|聊天儿|那儿|她|去|朋友",
    "昨天她去朋友那儿聊天儿了",
    "Zuótiān tā qù péngyou nàr liáotiānr le",
    [],
  ],
  [
    7,
    "(2)",
    "在|博物馆|我|不|知道|哪儿",
    "我不知道博物馆在哪儿",
    "Wǒ bù zhīdào bówùguǎn zài nǎr",
    [],
  ],
  [
    7,
    "(3)",
    "平方米|大|三|这|个|房间|四|十",
    "这个房间四十三平方米大",
    "Zhège fángjiān sìshísān píngfāngmǐ dà",
    ["这个房间大四十三平方米"],
  ],
  [
    7,
    "(4)",
    "医院|是|邮局|西边|吗",
    "邮局西边是医院吗",
    "Yóujú xībian shì yīyuàn ma",
    [],
  ],
  [
    7,
    "(5)",
    "历史|还是|是|学校|右边|博物馆|中国银行",
    "学校右边是历史博物馆还是中国银行",
    "Xuéxiào yòubian shì lìshǐ bówùguǎn háishi Zhōngguó Yínháng",
    [],
  ],
  [
    8,
    "(1)",
    "常|同学|跟|聊天儿|他|吗",
    "他常跟同学聊天儿吗",
    "Tā cháng gēn tóngxué liáotiānr ma",
    [],
  ],
  [
    8,
    "(2)",
    "老师|上课|你|问|常|的时候|问题|吗",
    "你上课的时候常问老师问题吗",
    "Nǐ shàngkè de shíhou cháng wèn lǎoshī wèntí ma",
    [],
  ],
  [
    8,
    "(3)",
    "什么|你|做|时候|练习",
    "你什么时候做练习",
    "Nǐ shénme shíhou zuò liànxí",
    [],
  ],
  [
    8,
    "(4)",
    "一起|看|我们|去|电影|吧|明天",
    "明天我们一起去看电影吧",
    "Míngtiān wǒmen yìqǐ qù kàn diànyǐng ba",
    ["我们明天一起去看电影吧"],
  ],
  [
    8,
    "(5)",
    "去|常|买|书店|看|书|或者|书|我",
    "我常去书店买书或者看书",
    "Wǒ cháng qù shūdiàn mǎi shū huòzhě kàn shū",
    [],
  ],
  [
    9,
    "(1)",
    "得|很|我们|高兴|听",
    "我们听得很高兴",
    "Wǒmen tīng de hěn gāoxìng",
    [],
  ],
  [
    9,
    "(2)",
    "好|我|打|不|的|篮球|得|太",
    "我的篮球打得不太好",
    "Wǒ de lánqiú dǎ de bú tài hǎo",
    [],
  ],
  [
    9,
    "(3)",
    "得|很|不错|太极拳|他|打",
    "他太极拳打得很不错",
    "Tā tàijíquán dǎ de hěn búcuò",
    [],
  ],
  [
    9,
    "(4)",
    "不对|翻译|句子|你|这个|得",
    "你这个句子翻译得不对",
    "Nǐ zhège jùzi fānyì de bú duì",
    [],
  ],
  [
    9,
    "(5)",
    "才|不|我|会|表演|节目|什么|好",
    "我才不会表演什么好节目",
    "Wǒ cái bú huì biǎoyǎn shénme hǎo jiémù",
    [],
  ],
  [
    10,
    "(1)",
    "上个月|认识|我|朋友|在上海|了|一位|新",
    "我上个月在上海认识了一位新朋友",
    "Wǒ shàng ge yuè zài Shànghǎi rènshi le yí wèi xīn péngyou",
    [],
  ],
  [
    10,
    "(2)",
    "在|北京大学|了|四年|中文专业|学习|他",
    "他在北京大学中文专业学习了四年",
    "Tā zài Běijīng Dàxué Zhōngwén zhuānyè xuéxí le sì nián",
    [],
  ],
  [
    10,
    "(4)",
    "苹果|两|了|他|晚饭|后|吃|个",
    "他晚饭后吃了两个苹果",
    "Tā wǎnfàn hòu chī le liǎng ge píngguǒ",
    [],
  ],
  [
    10,
    "(5)",
    "两|买|我|了|昨天|车票|张|已经",
    "我昨天已经买了两张车票",
    "Wǒ zuótiān yǐjīng mǎi le liǎng zhāng chēpiào",
    [],
  ],
  [
    11,
    "(1)",
    "报名|就|去|要是|找|你|想|长城|去|张老师",
    "要是你想去长城就去找张老师报名",
    "Yàoshi nǐ xiǎng qù Chángchéng jiù qù zhǎo Zhāng lǎoshī bàomíng",
    [],
  ],
  [
    11,
    "(2)",
    "跟|就|要是|我|父母|同意|她|结婚",
    "要是父母同意，我就跟她结婚",
    "Yàoshi fùmǔ tóngyì, wǒ jiù gēn tā jiéhūn",
    ["要是我父母同意就跟她结婚"],
  ],
  [
    11,
    "(3)",
    "上课|她|虽然|下|坚持|大雨|还",
    "虽然下大雨她还坚持上课",
    "Suīrán xià dà yǔ tā hái jiānchí shàngkè",
    [],
  ],
  [
    11,
    "(4)",
    "这个姑娘|喜欢|我|第一次|见|她|就",
    "我第一次见她就喜欢这个姑娘",
    "Wǒ dì yī cì jiàn tā jiù xǐhuan zhège gūniang",
    [],
  ],
  [
    11,
    "(5)",
    "的|是|知道|才|现在|我|他|我|老师|儿子",
    "现在我才知道他是我老师的儿子",
    "Xiànzài wǒ cái zhīdào tā shì wǒ lǎoshī de érzi",
    [],
  ],
  [
    12,
    "(1)",
    "孩子|吃|想|到|看|苹果|就",
    "孩子看到苹果就想吃",
    "Háizi kàn dào píngguǒ jiù xiǎng chī",
    [],
  ],
  [
    12,
    "(2)",
    "票|京剧|买|我|很|才|今天|难|一张|到",
    "我今天很难才买到一张京剧票",
    "Wǒ jīntiān hěn nán cái mǎi dào yì zhāng jīngjù piào",
    ["今天我很难才买到一张京剧票"],
  ],
  [
    12,
    "(3)",
    "了|的|我|没有|你|英汉|看|词典|见",
    "我没有看见你的英汉词典了",
    "Wǒ méiyǒu kànjiàn nǐ de Yīnghàn cídiǎn le",
    [],
  ],
  [
    12,
    "(4)",
    "三|错|你|题|了|已经|做|道",
    "你已经做错了三道题",
    "Nǐ yǐjīng zuò cuò le sān dào tí",
    [],
  ],
  [
    12,
    "(5)",
    "这件事|不|好|我们|说|提|了",
    "这件事我们提了不好说",
    "Zhè jiàn shì wǒmen tí le bù hǎo shuō",
    ["这件事我们说了不好提"],
  ],
  [
    13,
    "(1)",
    "会|一|了|我们|开|晚上",
    "晚上我们开了一会",
    "Wǎnshang wǒmen kāi le yí huì",
    ["我们晚上开了一会"],
  ],
  [
    13,
    "(2)",
    "十|你|分钟|老师|等|了|多",
    "老师等了你十多分钟",
    "Lǎoshī děng le nǐ shí duō fēnzhōng",
    [],
  ],
  [
    13,
    "(3)",
    "一年|中国|了|我|来|多",
    "我来中国一年多了",
    "Wǒ lái Zhōngguó yì nián duō le",
    [],
  ],
  [
    13,
    "(4)",
    "新学生|三四|来|今年|我们|班|了|个",
    "今年我们班来了三四个新学生",
    "Jīnnián wǒmen bān lái le sān sì ge xīn xuésheng",
    ["我们班今年来了三四个新学生"],
  ],
  [
    13,
    "(5)",
    "来|半天|他|了|我|没|等|他",
    "我等了他半天，他没来",
    "Wǒ děng le tā bàntiān, tā méi lái",
    [],
  ],
  [
    14,
    "(2)",
    "来|不|是|不|你|是|比赛|参加",
    "你不来参加比赛，是不是",
    "Nǐ bù lái cānjiā bǐsài, shì bu shì",
    ["你是不是不来参加比赛"],
  ],
  [
    14,
    "(3)",
    "开演|一个|电影|小时|已经|了",
    "电影已经开演一个小时了",
    "Diànyǐng yǐjīng kāiyǎn yí ge xiǎoshí le",
    [],
  ],
  [
    14,
    "(4)",
    "寄|你|的|信|收|了|我|到",
    "我收到了你寄的信",
    "Wǒ shōu dào le nǐ jì de xìn",
    [],
  ],
  [
    14,
    "(5)",
    "没有|了|喝|他们|酒",
    "他们喝酒了没有",
    "Tāmen hē jiǔ le méiyǒu",
    [],
  ],
];

/* ───────────────────────── Hàm tiện ích ───────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Bỏ dấu câu khi so sánh đáp án (các từ trong đề không có dấu câu) */
const stripPunct = (s: string) => s.replace(/[，。？！、,.?!]/g, "");

const GROUP_IDS = Array.from(new Set(ITEMS.map((it) => it[0])));
const GROUPS = GROUP_IDS.map((g) => ({
  value: String(g),
  label: `Bộ ${g} (${ITEMS.filter((it) => it[0] === g).length} câu)`,
}));

/* ───────────────────────── Component ───────────────────────── */

export default function BaiTapSapXepCauSGK() {
  const [group, setGroup] = useState("");
  const [random, setRandom] = useState(false);

  const [pool, setPool] = useState<Q[] | null>(null);
  const [total, setTotal] = useState(0);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);

  const [bank, setBank] = useState<Chip[]>([]);
  const [ansIds, setAnsIds] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [ok, setOk] = useState(false);

  /** Chuẩn bị trạng thái cho một câu hỏi mới */
  const setup = useCallback((q: Q | undefined) => {
    setAnsIds([]);
    setChecked(false);
    setOk(false);
    if (!q) return;
    setBank(shuffle(q.item[2].split("|").map((t, id) => ({ t, id }))));
  }, []);

  /** Bắt đầu lượt mới theo nhóm câu đã chọn */
  const start = useCallback(
    (g: string, rnd: boolean) => {
      let list = ITEMS.filter((it) => !g || it[0] === Number(g));
      if (rnd) list = shuffle(list);
      const p: Q[] = list.map((item) => ({ item, retry: false }));
      setPool(p);
      setTotal(p.length);
      setQi(0);
      setScore(0);
      setup(p[0]);
    },
    [setup],
  );

  // Xáo trộn ở client sau khi mount để tránh lệch hydration
  useEffect(() => {
    start(group, random);
  }, [group, random, start]);

  const q = pool && qi < pool.length ? pool[qi] : null;

  const next = () => {
    const n = qi + 1;
    setQi(n);
    setup(pool?.[n]);
  };

  /** Ghi nhận kết quả: đúng ngay lần đầu thì +1 điểm, sai thì đưa câu xuống cuối để làm lại */
  const record = (isOk: boolean) => {
    if (!q) return;
    setChecked(true);
    setOk(isOk);
    if (!q.retry) {
      if (isOk) setScore((s) => s + 1);
      else setPool((p) => [...(p ?? []), { item: q.item, retry: true }]);
    }
  };

  const chipText = (id: number) => bank.find((c) => c.id === id)?.t ?? "";

  const onCheck = () => {
    if (!q) return;
    if (checked) {
      next();
      return;
    }
    const given = ansIds.map(chipText).join("");
    record([q.item[3], ...q.item[5]].some((a) => stripPunct(a) === given));
  };

  return (
    <div className="bt">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bt-w">
        <h1>Sắp xếp câu tiếng Trung</h1>
        <p className="bt-sub">
          {ITEMS.length} câu. Sắp xếp các từ thành một câu hoàn chỉnh: chạm từ
          để xếp, chạm lại để gỡ ra.
        </p>

        <div className="bt-opt">
          <span>Bộ bài:</span>
          <select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">Tất cả</option>
            {GROUPS.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
          <label>
            <input
              type="checkbox"
              checked={random}
              onChange={(e) => setRandom(e.target.checked)}
            />{" "}
            Xáo trộn thứ tự câu
          </label>
        </div>

        {/* Màn hình tổng kết */}
        {pool && !q && (
          <div className="bt-q bt-sc">
            <span className="bt-score">
              {score}/{total}
            </span>
            Câu đúng ngay lần đầu.
            <div className="bt-row" style={{ marginTop: 14 }}>
              <button
                type="button"
                className="bt-btn bt-pri"
                onClick={() => start(group, random)}
              >
                Làm lại
              </button>
            </div>
          </div>
        )}

        {q && pool && (
          <div className="bt-q">
            <div className="bt-meta">
              <span className="bt-tag">
                Bộ {q.item[0]} · {q.item[1]}
              </span>
              <span>
                {qi + 1}/{pool.length}
              </span>
            </div>
            <div className="bt-vi">
              Sắp xếp các từ thành một câu hoàn chỉnh.
            </div>
            <div className="bt-ans">
              {ansIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  className="bt-ch"
                  onClick={() => {
                    if (!checked) setAnsIds((a) => a.filter((x) => x !== id));
                  }}
                >
                  {chipText(id)}
                </button>
              ))}
            </div>
            <div className="bt-bank">
              {bank.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={
                    "bt-ch" + (ansIds.includes(c.id) ? " bt-used" : "")
                  }
                  onClick={() => {
                    if (!checked) setAnsIds((a) => [...a, c.id]);
                  }}
                >
                  {c.t}
                </button>
              ))}
            </div>
            <div className="bt-row">
              <button
                type="button"
                className="bt-btn"
                onClick={() => {
                  if (!checked) setAnsIds([]);
                }}
              >
                Xóa
              </button>
              <button
                type="button"
                className="bt-btn"
                onClick={() => !checked && record(false)}
              >
                Xem đáp án
              </button>
              <button type="button" className="bt-btn bt-pri" onClick={onCheck}>
                {checked ? "Câu tiếp" : "Kiểm tra"}
              </button>
            </div>
            {checked && (
              <div className={"bt-res " + (ok ? "bt-ok" : "bt-no")}>
                {ok ? "Đúng rồi!" : "Chưa đúng. Đáp án:"}
                <div className="bt-zh">{q.item[3]}</div>
                <div className="bt-py">{q.item[4]}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── CSS (nhúng sẵn) ───────────────────────── */

const CSS = `
.bt{--bg:#fff;--card:#fff;--tx:#222;--mu:#6b6b6b;--bd:#e3ded4;--ac:#c0392b;--acbg:#fbeae7;--ok:#2e7d32;--okbg:#e6f4e7;--no:#c0392b;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);
background:var(--bg);color:var(--tx);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5}
@media (prefers-color-scheme:dark){.bt{color-scheme:dark;--bg:#1d293d;--card:#0f172a;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}}
.dark .bt{color-scheme:dark;--bg:#1d293d;--card:#0f172a;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}
:where(.bt) *{box-sizing:border-box}
:where(.bt) button,:where(.bt) select{font:inherit;color:var(--tx)}
.bt-w{max-width:640px;margin:0 auto;padding:18px 14px 40px}
.bt h1{font-size:1.3rem;margin:0 0 2px}
.bt-sub{color:var(--mu);font-size:.85rem;margin:0 0 12px}
.bt-opt{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:.85rem;margin-bottom:12px}
.bt select{background:var(--card);border:1px solid var(--bd);border-radius:8px;padding:4px 8px;max-width:100%}
.bt label{cursor:pointer}
.bt-q{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:16px}
.bt-meta{display:flex;justify-content:space-between;color:var(--mu);font-size:.8rem;margin-bottom:8px}
.bt-tag{background:var(--acbg);color:var(--ac);border-radius:999px;padding:1px 10px}
.bt-vi{font-size:1.05rem;margin:4px 0 10px}
.bt-ans{min-height:58px;border:2px dashed var(--bd);border-radius:12px;padding:8px;display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;align-content:flex-start}
.bt-bank{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;min-height:44px}
.bt-ch{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.3rem;border:1px solid var(--bd);background:var(--bg);border-radius:10px;padding:4px 12px;cursor:pointer}
.bt-ch.bt-used{opacity:.25;pointer-events:none}
.bt-row{display:flex;gap:8px}
.bt-btn{flex:1;border:1px solid var(--bd);background:var(--card);border-radius:12px;padding:11px;cursor:pointer;font-weight:600}
.bt-pri{background:var(--ac);border-color:var(--ac);color:#fff}
.bt-res{margin-top:12px;border-radius:12px;padding:10px 12px;font-size:.95rem}
.bt-res.bt-ok{background:var(--okbg);color:var(--ok)}
.bt-res.bt-no{background:var(--acbg);color:var(--no)}
.bt-zh{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.35rem;color:var(--tx);margin-top:4px}
.bt-py{color:var(--ac);font-size:.9rem}
.bt-sc{text-align:center;padding:24px 8px}
.bt-score{font-size:2rem;color:var(--ac);display:block}
`;
