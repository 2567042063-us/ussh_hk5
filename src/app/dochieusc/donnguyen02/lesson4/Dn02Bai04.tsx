import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  unit: "第二单元 · Đơn nguyên 2",
  title: "四、家庭服务谁来做",
  titlePy: "Jiātíng fúwù shéi lái zuò",
  titleVi: "Ai sẽ làm dịch vụ gia đình?",
  paras: [
    [
      {
        zh: "现在,不少家庭都请了小保姆。",
        py: "Xiànzài, bù shǎo jiātíng dōu qǐng le xiǎo bǎomǔ.",
        vi: "Hiện nay, không ít gia đình thuê người giúp việc trẻ.",
      },
      {
        zh: "小保姆为主人分担了大量的家务:照顾孩子、洗衣做饭、打扫卫生……为双职工家庭解决了不少生活上的困难,很受城市家庭的欢迎。",
        py: "Xiǎo bǎomǔ wèi zhǔrén fēndān le dàliàng de jiāwù: zhàogù háizi, xǐyī zuòfàn, dǎsǎo wèishēng…… wèi shuāngzhígōng jiātíng jiějué le bù shǎo shēnghuó shàng de kùnnan, hěn shòu chéngshì jiātíng de huānyíng.",
        vi: "Người giúp việc gánh thay chủ nhà một lượng lớn việc nhà: chăm con, giặt giũ nấu ăn, dọn dẹp vệ sinh… giải quyết không ít khó khăn đời sống cho các gia đình hai vợ chồng đều đi làm, rất được gia đình thành thị ưa chuộng.",
      },
      {
        zh: "但是随着保姆进入家庭,烦恼也出现了。",
        py: "Dànshì suízhe bǎomǔ jìnrù jiātíng, fánnǎo yě chūxiàn le.",
        vi: "Nhưng cùng với việc người giúp việc vào nhà, phiền não cũng xuất hiện.",
      },
      {
        zh: "在城市,大部分家庭住房比较拥挤,小保姆的到来使居住空间更加狭小,生活上带来许多不便。",
        py: "Zài chéngshì, dàbùfen jiātíng zhùfáng bǐjiào yōngjǐ, xiǎo bǎomǔ de dàolái shǐ jūzhù kōngjiān gèngjiā xiáxiǎo, shēnghuó shàng dàilái xǔduō búbiàn.",
        vi: "Ở thành phố, nhà ở của đa số gia đình khá chật chội, sự xuất hiện của người giúp việc khiến không gian sống càng chật hơn, gây nhiều bất tiện trong sinh hoạt.",
      },
      {
        zh: "多数小保姆来自农村,对城市生活方式不熟悉,所以事事都离不开主人的操心。",
        py: "Duōshù xiǎo bǎomǔ láizì nóngcūn, duì chéngshì shēnghuó fāngshì bù shúxī, suǒyǐ shìshì dōu lí bu kāi zhǔrén de cāoxīn.",
        vi: "Đa số người giúp việc đến từ nông thôn, không quen lối sống thành thị nên việc gì cũng cần chủ nhà phải lo lắng.",
      },
      {
        zh: "还有,小保姆的年龄普遍偏低,生活经历少,做事常常缺少耐心,很难做好照顾幼儿、老人或病人的工作。",
        py: "Hái yǒu, xiǎo bǎomǔ de niánlíng pǔbiàn piān dī, shēnghuó jīnglì shǎo, zuòshì chángcháng quēshǎo nàixīn, hěn nán zuòhǎo zhàogù yòu'ér, lǎorén huò bìngrén de gōngzuò.",
        vi: "Ngoài ra, tuổi của người giúp việc nhìn chung khá thấp, ít trải nghiệm cuộc sống, làm việc hay thiếu kiên nhẫn, khó làm tốt việc chăm sóc trẻ nhỏ, người già hay người bệnh.",
      },
      {
        zh: "因此,人们迫切需要钟点工。",
        py: "Yīncǐ, rénmen pòqiè xūyào zhōngdiǎngōng.",
        vi: "Vì thế, người ta cấp thiết cần người làm theo giờ.",
      },
    ],
    [
      {
        zh: "钟点工作为一种新的服务方式,如今已经在城市里流行开来。",
        py: "Zhōngdiǎngōng zuòwéi yì zhǒng xīn de fúwù fāngshì, rújīn yǐjīng zài chéngshì lǐ liúxíng kāilái.",
        vi: "Người làm theo giờ, với tư cách một hình thức dịch vụ mới, nay đã thịnh hành trong thành phố.",
      },
      {
        zh: "钟点工到点来干活儿,干够时间就走,不在主人家吃住,给主人家减少了许多麻烦。",
        py: "Zhōngdiǎngōng dào diǎn lái gànhuór, gàn gòu shíjiān jiù zǒu, bú zài zhǔrén jiā chī zhù, gěi zhǔrén jiā jiǎnshǎo le xǔduō máfan.",
        vi: "Người làm theo giờ đến đúng giờ làm việc, làm đủ thời gian thì về, không ăn ở nhà chủ, giúp chủ nhà bớt nhiều phiền phức.",
      },
      {
        zh: "做钟点工的大部分是城郊居民,他们无论是使用家用电器,还是炒菜做饭,都比来自农村的小保姆干得好。",
        py: "Zuò zhōngdiǎngōng de dàbùfen shì chéngjiāo jūmín, tāmen wúlùn shì shǐyòng jiāyòng diànqì, háishi chǎocài zuòfàn, dōu bǐ láizì nóngcūn de xiǎo bǎomǔ gàn de hǎo.",
        vi: "Người làm theo giờ phần lớn là dân vùng ven thành phố, dù là dùng đồ điện gia dụng hay nấu nướng, họ đều làm tốt hơn người giúp việc từ nông thôn.",
      },
      {
        zh: "据说,这些钟点工大多是下岗女工,她们做家务很有经验,普遍受到用人家庭的欢迎。",
        py: "Jùshuō, zhèxiē zhōngdiǎngōng dàduō shì xiàgǎng nǚgōng, tāmen zuò jiāwù hěn yǒu jīngyàn, pǔbiàn shòudào yòngrén jiātíng de huānyíng.",
        vi: "Nghe nói những người làm theo giờ này phần lớn là nữ công nhân nghỉ việc, họ làm việc nhà rất có kinh nghiệm, được các gia đình thuê người ưa chuộng rộng rãi.",
      },
    ],
  ],
  vocab: [
    {
      zh: "小保姆",
      py: "xiǎo bǎomǔ",
      hv: "tiểu bảo mỗ",
      vi: "người giúp việc trẻ (ở nhà chủ)",
      syn: "保姆, 家政工",
    },
    {
      zh: "双职工",
      py: "shuāngzhígōng",
      hv: "song chức công",
      vi: "gia đình vợ chồng cùng đi làm",
      syn: "—",
    },
    {
      zh: "烦恼",
      py: "fánnǎo",
      hv: "phiền não",
      vi: "phiền não, điều phiền toái",
      syn: "麻烦, 苦恼",
    },
    {
      zh: "拥挤",
      py: "yōngjǐ",
      hv: "ủng tễ",
      vi: "chật chội, chen chúc",
      syn: "拥塞, 狭窄",
    },
    { zh: "狭小", py: "xiáxiǎo", hv: "hiệp tiểu", vi: "chật hẹp", syn: "窄小" },
    {
      zh: "熟悉",
      py: "shúxī",
      hv: "thục tất",
      vi: "quen thuộc, am hiểu",
      syn: "了解",
    },
    {
      zh: "事事",
      py: "shìshì",
      hv: "sự sự",
      vi: "mọi việc, việc gì cũng",
      syn: "每一件事",
    },
    {
      zh: "操心",
      py: "cāoxīn",
      hv: "thao tâm",
      vi: "lo lắng, bận tâm lo liệu",
      syn: "费心, 担心",
    },
    {
      zh: "经历",
      py: "jīnglì",
      hv: "kinh lịch",
      vi: "trải nghiệm, từng trải",
      syn: "经验, 阅历",
    },
    { zh: "耐心", py: "nàixīn", hv: "nại tâm", vi: "kiên nhẫn", syn: "—" },
    {
      zh: "迫切",
      py: "pòqiè",
      hv: "bách thiết",
      vi: "cấp thiết",
      syn: "急切, 急需",
    },
    {
      zh: "钟点工",
      py: "zhōngdiǎngōng",
      hv: "chung điểm công",
      vi: "người làm theo giờ",
      syn: "小时工",
    },
    {
      zh: "如今",
      py: "rújīn",
      hv: "như kim",
      vi: "hiện nay, giờ đây",
      syn: "现在, 目前",
    },
    {
      zh: "城郊",
      py: "chéngjiāo",
      hv: "thành giao",
      vi: "vùng ven thành phố, ngoại ô",
      syn: "郊区",
    },
    {
      zh: "下岗",
      py: "xiàgǎng",
      hv: "há cương",
      vi: "nghỉ việc, mất việc (do cơ quan cắt giảm)",
      syn: "失业",
    },
    {
      zh: "用人家庭",
      py: "yòngrén jiātíng",
      hv: "dụng nhân gia đình",
      vi: "gia đình thuê người giúp việc",
      syn: "雇主家庭",
    },
  ],
  ex1: [
    { q: "烦恼", opts: ["生气", "难过", "麻烦", "痛苦"], a: 2 },
    {
      q: "拥挤",
      opts: ["没有地方", "地方又大又热闹", "地方小人多", "很多人在一起"],
      a: 2,
    },
    {
      q: "事事",
      opts: ["每一件事", "有一些事", "有些大事", "有些重要的事"],
      a: 0,
    },
    {
      q: "操心",
      opts: [
        "非常担心",
        "想着一件事",
        "不停地考虑和处理",
        "不断地在心里进行练习",
      ],
      a: 2,
    },
    {
      q: "经历",
      opts: [
        "亲自见过、做过的事",
        "亲自去过、玩过的地方",
        "经济的历史",
        "经济的基础",
      ],
      a: 0,
    },
    {
      q: "耐心",
      opts: [
        "对自己的信心",
        "做事不着急的心情",
        "经验和信心",
        "经验不多的样子",
      ],
      a: 1,
    },
    {
      q: "迫切",
      opts: ["非常着急地", "非常努力地", "十分欢迎", "快要接近"],
      a: 0,
    },
    {
      q: "如今",
      opts: ["像现在一样", "好像今天一样", "现在", "例如今天"],
      a: 2,
    },
  ],
  ex2: [
    {
      q: "小保姆做的工作是",
      opts: ["写文章", "打扫卫生、洗衣服", "帮助主人做家务", "卖东西"],
      a: 2,
    },
    {
      q: "“事事都离不开主人的操心”,意思是",
      opts: [
        "主人一离开操心",
        "小保姆必须时刻操心主人的事情",
        "主人还要操心每一件事",
        "小保姆要为主人操心每一件事",
      ],
      a: 2,
    },
    {
      q: "“年龄普遍偏低”的意思是",
      opts: [
        "年龄太小",
        "大部分年龄比较小",
        "年龄小,所以个子低",
        "年龄比普通人小",
      ],
      a: 1,
    },
    {
      q: "小保姆受到城市家庭欢迎的原因是",
      opts: [
        "能帮助主人解决家中的各种问题",
        "年龄小",
        "做事有耐心",
        "为主人分担大量的家务",
      ],
      a: 3,
    },
    {
      q: "人们迫切需要钟点工的原因是",
      opts: [
        "小保姆太少",
        "使用小保姆有很多麻烦",
        "钟点工比小保姆的工资低",
        "小保姆只能做家务",
      ],
      a: 1,
    },
    {
      q: "使用钟点工的好处是",
      opts: [
        "不需要主人为她们事事操心",
        "比小保姆年龄大而且工资低",
        "做家务熟练而且不在主人家吃住",
        "可以帮助主人工作",
      ],
      a: 2,
    },
    {
      q: "钟点工",
      opts: [
        "只在主人家干一个小时的活儿",
        "有空就过来干活儿,干到约好的时间就离开",
        "刚一到主人家就开始干活儿,干完活儿就走了",
        "到了约好的时间就来干活儿,干够一定的时间就离开",
      ],
      a: 3,
    },
  ],
  ex3: [
    { q: "小保姆虽然做了大量的工作,但是却不受城市家庭的欢迎。", a: false },
    { q: "小保姆吃住都在主人家里,所以生活上有很多不方便。", a: true },
    { q: "小保姆大多数都是从农村来的。", a: true },
    { q: "人们需要钟点工只是为了照顾幼儿、老人和病人。", a: false },
    { q: "小保姆太年轻,所以人们不喜欢用。", a: false },
    { q: "使用钟点工可以避免一些使用小保姆所带来的麻烦。", a: true },
    { q: "钟点工大部分是在工厂里上班的女工。", a: false },
    { q: "钟点工对城市生活方式很熟悉。", a: true },
    { q: "钟点工在做家务方面要比小保姆好。", a: true },
  ],
  extra: [
    {
      label: "练习(五) Giải thích từ",
      qs: ["小保姆:", "钟点工:", "居住空间:", "用人家庭:"],
    },
    {
      label: "练习(六) Trả lời",
      qs: ["随着小保姆进入家庭,出现了哪些烦恼?", "钟点工为什么要比小保姆好?"],
    },
  ],
};

export default function Lesson4() {
  return <LessonViewer lesson={lesson} />;
}
