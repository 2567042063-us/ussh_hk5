import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  unit: "第二单元 · Đơn nguyên 2",
  title: "一、过年",
  titlePy: "Guònián",
  titleVi: "Ăn Tết",
  paras: [
    [
      {
        zh: "今天是大年三十。",
        py: "Jīntiān shì dànián sānshí.",
        vi: "Hôm nay là ngày ba mươi Tết.",
      },
      {
        zh: "一大早她就开始忙起来。",
        py: "Yí dàzǎo tā jiù kāishǐ máng qǐlái.",
        vi: "Từ sáng sớm cô đã bắt đầu bận rộn.",
      },
      {
        zh: "整理房间,去超市给公婆买礼物。",
        py: "Zhěnglǐ fángjiān, qù chāoshì gěi gōngpó mǎi lǐwù.",
        vi: "Dọn dẹp phòng ốc, đi siêu thị mua quà cho bố mẹ chồng.",
      },
      {
        zh: "孩子穿着一身漂亮的新衣服,在她身边跑来跑去,非常兴奋地等待着。",
        py: "Háizi chuānzhe yì shēn piàoliang de xīn yīfu, zài tā shēnbiān pǎo lái pǎo qù, fēicháng xīngfèn de děngdàizhe.",
        vi: "Đứa bé mặc bộ quần áo mới đẹp, chạy tới chạy lui bên cạnh cô, háo hức chờ đợi.",
      },
    ],
    [
      {
        zh: "在中国,过年时所有的人都要回到父母身边,一家人团聚在一起。",
        py: "Zài Zhōngguó, guònián shí suǒyǒu de rén dōu yào huídào fùmǔ shēnbiān, yì jiā rén tuánjù zài yìqǐ.",
        vi: "Ở Trung Quốc, dịp Tết mọi người đều về bên cha mẹ, cả nhà sum họp.",
      },
      {
        zh: "所以,今天晚上他们一家三口要回公婆家去吃年夜饭。",
        py: "Suǒyǐ, jīntiān wǎnshang tāmen yì jiā sān kǒu yào huí gōngpó jiā qù chī niányèfàn.",
        vi: "Vì vậy, tối nay cả nhà ba người họ sẽ về nhà bố mẹ chồng ăn bữa cơm tất niên.",
      },
    ],
    [
      {
        zh: "平时她的丈夫工作很忙,买菜、做饭、洗衣服、照顾孩子等家务大部分是她做。",
        py: "Píngshí tā de zhàngfu gōngzuò hěn máng, mǎicài, zuòfàn, xǐ yīfu, zhàogù háizi děng jiāwù dàbùfen shì tā zuò.",
        vi: "Ngày thường chồng cô làm việc rất bận, đi chợ, nấu ăn, giặt giũ, chăm con… phần lớn việc nhà là do cô làm.",
      },
      {
        zh: "每天早上给一家人准备好简单的早饭,然后送孩子去幼儿园,送完孩子自己才去上班。",
        py: "Měitiān zǎoshang gěi yì jiā rén zhǔnbèi hǎo jiǎndān de zǎofàn, ránhòu sòng háizi qù yòu'éryuán, sòng wán háizi zìjǐ cái qù shàngbān.",
        vi: "Mỗi sáng chuẩn bị bữa sáng đơn giản cho cả nhà, rồi đưa con đến nhà trẻ, đưa xong mới tự đi làm.",
      },
      {
        zh: "晚上下了班,先把孩子接回家,然后马上进厨房做晚饭。",
        py: "Wǎnshang xià le bān, xiān bǎ háizi jiē huíjiā, ránhòu mǎshàng jìn chúfáng zuò wǎnfàn.",
        vi: "Tối tan làm, đón con về nhà trước, rồi vào bếp nấu cơm tối ngay.",
      },
      {
        zh: "有时丈夫会在一旁帮助她。",
        py: "Yǒushí zhàngfu huì zài yìpáng bāngzhù tā.",
        vi: "Đôi khi chồng đứng bên giúp cô.",
      },
      {
        zh: "吃晚饭是一家人最愉快的时候。",
        py: "Chī wǎnfàn shì yì jiā rén zuì yúkuài de shíhou.",
        vi: "Bữa tối là lúc cả nhà vui nhất.",
      },
      {
        zh: "她和丈夫聊家常,谈论各自单位里的新闻。",
        py: "Tā hé zhàngfu liáo jiācháng, tánlùn gèzì dānwèi lǐ de xīnwén.",
        vi: "Cô và chồng nói chuyện nhà cửa, bàn tán chuyện ở cơ quan mỗi người.",
      },
      {
        zh: "孩子也在一旁凑热闹,比比画画地给爸爸妈妈讲幼儿园里发生的事情:那个叫丽丽的小朋友哭鼻子了,冬冬又打架了……",
        py: "Háizi yě zài yìpáng còu rènao, bǐbi huàhuà de gěi bàba māma jiǎng yòu'éryuán lǐ fāshēng de shìqing: nàge jiào Lìli de xiǎopéngyou kū bízi le, Dōngdong yòu dǎjià le……",
        vi: "Đứa bé cũng ở bên góp vui, khoa tay múa chân kể cho bố mẹ nghe chuyện ở nhà trẻ: bạn nhỏ tên Lệ Lệ khóc nhè rồi, Đông Đông lại đánh nhau rồi…",
      },
      {
        zh: "孩子天真的话语和认真的神态,常常逗得夫妻俩哈哈大笑。",
        py: "Háizi tiānzhēn de huàyǔ hé rènzhēn de shéntài, chángcháng dòu de fūqī liǎ hāhā dàxiào.",
        vi: "Lời nói ngây thơ và vẻ mặt nghiêm túc của con thường khiến hai vợ chồng cười ha hả.",
      },
    ],
    [
      {
        zh: "下午四点多,丈夫下班回家了。",
        py: "Xiàwǔ sì diǎn duō, zhàngfu xiàbān huíjiā le.",
        vi: "Hơn bốn giờ chiều, chồng tan làm về nhà.",
      },
      {
        zh: "一家人穿戴整齐,欢天喜地地出了门。",
        py: "Yì jiā rén chuāndài zhěngqí, huān tiān xǐ dì de chū le mén.",
        vi: "Cả nhà ăn mặc chỉnh tề, hớn hở ra khỏi nhà.",
      },
      {
        zh: "在婆家,老少三代十几口人围坐在一张大圆桌旁,一边看中央电视台的“春节联欢晚会”,一边热热闹闹地吃团圆饭过年。",
        py: "Zài pójiā, lǎo shào sān dài shí jǐ kǒu rén wéizuò zài yì zhāng dà yuánzhuō páng, yìbiān kàn Zhōngyāng Diànshìtái de “Chūnjié Liánhuān Wǎnhuì”, yìbiān rèrè nàonào de chī tuányuánfàn guònián.",
        vi: "Ở nhà chồng, già trẻ ba thế hệ hơn chục người ngồi quanh một chiếc bàn tròn lớn, vừa xem “Gala mừng xuân” của CCTV, vừa ăn bữa cơm đoàn viên đón Tết rôm rả.",
      },
    ],
  ],
  vocab: [
    {
      zh: "大年三十",
      py: "dànián sānshí",
      hv: "đại niên tam thập",
      vi: "ngày 30 Tết, giao thừa",
      syn: "除夕",
    },
    {
      zh: "一大早",
      py: "yí dàzǎo",
      hv: "nhất đại tảo",
      vi: "sáng sớm tinh mơ",
      syn: "清早, 大清早",
    },
    {
      zh: "超市",
      py: "chāoshì",
      hv: "siêu thị",
      vi: "siêu thị",
      syn: "超级市场",
    },
    { zh: "公婆", py: "gōngpó", hv: "công bà", vi: "bố mẹ chồng", syn: "—" },
    {
      zh: "团聚",
      py: "tuánjù",
      hv: "đoàn tụ",
      vi: "sum họp, đoàn tụ",
      syn: "团圆",
    },
    {
      zh: "年夜饭",
      py: "niányèfàn",
      hv: "niên dạ phạn",
      vi: "bữa cơm tất niên",
      syn: "团圆饭",
    },
    {
      zh: "家务",
      py: "jiāwù",
      hv: "gia vụ",
      vi: "việc nhà",
      syn: "家务事, 家里的活儿",
    },
    {
      zh: "聊家常",
      py: "liáo jiācháng",
      hv: "liêu gia thường",
      vi: "nói chuyện nhà cửa, chuyện thường ngày",
      syn: "拉家常",
    },
    {
      zh: "凑热闹",
      py: "còu rènao",
      hv: "tấu nhiệt náo",
      vi: "góp vui, hùa vào cho vui",
      syn: "—",
    },
    {
      zh: "比比画画",
      py: "bǐbi huàhuà",
      hv: "tỉ tỉ hoạ hoạ",
      vi: "khoa tay múa chân",
      syn: "手舞足蹈, 比划",
    },
    {
      zh: "哭鼻子",
      py: "kū bízi",
      hv: "khốc tị tử",
      vi: "khóc nhè (khẩu ngữ)",
      syn: "哭, 掉眼泪",
    },
    {
      zh: "神态",
      py: "shéntài",
      hv: "thần thái",
      vi: "vẻ mặt, dáng vẻ",
      syn: "神情, 表情",
    },
    { zh: "逗", py: "dòu", hv: "đậu", vi: "chọc cười, trêu", syn: "引逗" },
    {
      zh: "欢天喜地",
      py: "huān tiān xǐ dì",
      hv: "hoan thiên hỉ địa",
      vi: "vui mừng hớn hở",
      syn: "兴高采烈, 喜气洋洋",
    },
    {
      zh: "团圆饭",
      py: "tuányuánfàn",
      hv: "đoàn viên phạn",
      vi: "bữa cơm đoàn viên",
      syn: "年夜饭",
    },
  ],
  ex1: [
    { q: "一大早", opts: ["一个早晨", "一个上午", "很早", "很快"], a: 2 },
    {
      q: "团聚",
      opts: [
        "很多人坐成一个圆圈",
        "一家人坐成一个圆圈",
        "很多人在一起",
        "一家人在一起",
      ],
      a: 3,
    },
    {
      q: "公婆",
      opts: [
        "丈夫称呼妻子的父母",
        "妻子称呼丈夫的父母",
        "老头儿和老太太",
        "老太太",
      ],
      a: 1,
    },
    {
      q: "年夜饭",
      opts: ["晚饭", "夜里吃的饭", "大年初一的晚饭", "大年三十的晚饭"],
      a: 3,
    },
    {
      q: "家务",
      opts: ["家庭服务", "家里的活儿", "家庭服务员", "家人的工作"],
      a: 1,
    },
    {
      q: "聊家常",
      opts: [
        "讨论发生的事",
        "讨论生活中的问题",
        "谈家里发生的事",
        "谈家里的日常生活",
      ],
      a: 3,
    },
    {
      q: "比比画画",
      opts: [
        "用手做动作来帮助说话",
        "用手画画儿来表示意思",
        "比较谁好谁坏",
        "比一比谁画得好",
      ],
      a: 0,
    },
    { q: "哭鼻子", opts: ["鼻子不好", "哭", "鼻子哭了", "小声地哭"], a: 1 },
    {
      q: "欢天喜地",
      opts: ["非常高兴的样子", "非常喜欢", "像喜欢天和地一样", "很喜欢的样子"],
      a: 0,
    },
    {
      q: "团圆",
      opts: [
        "大家住在一起",
        "全家人聚到了一起",
        "家人围坐成一个圆圈",
        "大家围坐在一起",
      ],
      a: 1,
    },
  ],
  ex2: [
    {
      q: "大年三十晚上",
      opts: [
        "她一个人在家",
        "她和孩子在家",
        "一家三口吃团圆饭",
        "全家人都不在家",
      ],
      a: 3,
    },
    {
      q: "大年三十这一天孩子没有做什么?",
      opts: ["穿新衣服", "跑来跑去", "去幼儿园", "去爷爷家"],
      a: 2,
    },
    {
      q: "每天早上她不用做什么?",
      opts: ["洗衣服", "做早饭", "送孩子上幼儿园", "上班"],
      a: 0,
    },
    {
      q: "下班以后她的第一件事是",
      opts: ["接孩子", "买菜", "进厨房", "做晚饭"],
      a: 0,
    },
    {
      q: "孩子每天上幼儿园是",
      opts: ["妈妈送爸爸接", "爸爸送妈妈接", "妈妈送妈妈接", "爸爸送爸爸接"],
      a: 2,
    },
    {
      q: "“孩子也在一旁凑热闹”,意思是:孩子",
      opts: [
        "在旁边看她和丈夫聊家常",
        "给他们添麻烦",
        "也和他们一起聊天儿",
        "走过来听他们说什么",
      ],
      a: 2,
    },
    {
      q: "他们什么时候去公婆家?",
      opts: ["一大早", "做完家务以后", "丈夫下班以后", "晚上"],
      a: 2,
    },
  ],
  ex3: [
    { q: "孩子跑来跑去,所以很兴奋。", a: false },
    { q: "她是一位家庭妇女,每天只是在家做家务。", a: false },
    { q: "她丈夫工作总是很忙。", a: true },
    { q: "丈夫从来不帮妻子做家务。", a: false },
    { q: "吃晚饭时,他们常常一边吃饭一边聊天儿。", a: true },
    { q: "他们的孩子名字叫冬冬。", a: false },
    { q: "夫妻俩哈哈大笑是因为幼儿园很有意思。", a: false },
    { q: "过年了,全家人都穿得很漂亮。", a: true },
    { q: "婆家的人不太多。", a: false },
    { q: "大年三十,人们喜欢回到父母身边吃晚饭。", a: true },
  ],
  ex5: [
    "为什么她和家人要在大年三十这一天去公婆家?",
    "她每天都要做什么事?",
    "平时孩子白天在哪儿?",
    "她对自己的家庭生活满意吗?",
  ],
};

export default function Lesson1() {
  return <LessonViewer lesson={lesson} />;
}
