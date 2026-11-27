"use client";

import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  title: "二、一个跨国家庭的故事",
  titlePy: "Yí gè kuàguó jiātíng de gùshi",
  titleVi: "Câu chuyện về một gia đình đa quốc tịch",
  paras: [
    [
      {
        zh: "林虹是在莫斯科大学留学时认识瓦西里的。",
        py: "Lín Hóng shì zài Mòsīkē Dàxué liúxué shí rènshi Wǎxīlǐ de.",
        vi: "Lâm Hồng quen Vasily khi đang du học ở Đại học Moskva.",
      },
      {
        zh: "那一年,校学生会组织中国留学生去圣彼得堡玩儿,带队的就是这个会说中文的小伙子——瓦西里。",
        py: "Nà yì nián, xiào xuéshēnghuì zǔzhī Zhōngguó liúxuéshēng qù Shèngbǐdébǎo wánr, dàiduì de jiù shì zhège huì shuō Zhōngwén de xiǎohuǒzi——Wǎxīlǐ.",
        vi: "Năm đó, hội sinh viên nhà trường tổ chức cho du học sinh Trung Quốc đi chơi Saint Petersburg, người dẫn đoàn chính là chàng trai biết nói tiếng Trung này — Vasily.",
      },
      {
        zh: "一路上,他们聊得很开心,有许多共同语言,一场跨国恋在这对年轻人之间开始了。",
        py: "Yílù shàng, tāmen liáo de hěn kāixīn, yǒu xǔduō gòngtóng yǔyán, yì chǎng kuàguó liàn zài zhè duì niánqīngrén zhījiān kāishǐ le.",
        vi: "Suốt đường đi họ trò chuyện rất vui, có nhiều tiếng nói chung, một mối tình xuyên quốc gia bắt đầu giữa đôi bạn trẻ.",
      },
    ],
    [
      {
        zh: "他们是在林虹毕业的第二年结婚的。",
        py: "Tāmen shì zài Lín Hóng bìyè de dì-èr nián jiéhūn de.",
        vi: "Họ kết hôn vào năm thứ hai sau khi Lâm Hồng tốt nghiệp.",
      },
      {
        zh: "一年后,他们的儿子——萨沙出生了。",
        py: "Yì nián hòu, tāmen de érzi——Shàshā chūshēng le.",
        vi: "Một năm sau, con trai họ — Sasha chào đời.",
      },
      {
        zh: "这时俄罗斯的经济情况不太好,他们这个跨国家庭的生活日益艰难。",
        py: "Zhèshí Éluósī de jīngjì qíngkuàng bú tài hǎo, tāmen zhège kuàguó jiātíng de shēnghuó rìyì jiānnán.",
        vi: "Lúc này tình hình kinh tế Nga không tốt lắm, cuộc sống của gia đình đa quốc tịch này ngày càng khó khăn.",
      },
      {
        zh: "于是林虹便和丈夫带着不满一岁的萨沙回到了北京。",
        py: "Yúshì Lín Hóng biàn hé zhàngfu dàizhe bù mǎn yí suì de Shàshā huídào le Běijīng.",
        vi: "Thế là Lâm Hồng cùng chồng mang theo Sasha chưa đầy một tuổi trở về Bắc Kinh.",
      },
    ],
    [
      {
        zh: "瓦西里虽然会说中文、英文和俄文,但要在北京找一份合适的工作还是很难。",
        py: "Wǎxīlǐ suīrán huì shuō Zhōngwén, Yīngwén hé Éwén, dàn yào zài Běijīng zhǎo yí fèn héshì de gōngzuò háishi hěn nán.",
        vi: "Vasily tuy biết nói tiếng Trung, Anh và Nga, nhưng muốn tìm một công việc phù hợp ở Bắc Kinh vẫn rất khó.",
      },
      {
        zh: "他们正在分期付款买房,每月要交近8000元的房款,再加上一家人的生活费,是一笔不小的开销。",
        py: "Tāmen zhèngzài fēnqī fùkuǎn mǎi fáng, měi yuè yào jiāo jìn bāqiān yuán de fángkuǎn, zài jiāshàng yì jiā rén de shēnghuófèi, shì yì bǐ bù xiǎo de kāixiao.",
        vi: "Họ đang mua nhà trả góp, mỗi tháng phải đóng gần 8000 tệ tiền nhà, cộng thêm sinh hoạt phí cả nhà, là một khoản chi tiêu không nhỏ.",
      },
      {
        zh: "后来,瓦西里在一家香港公司找到了工作,被派到香港。",
        py: "Hòulái, Wǎxīlǐ zài yì jiā Xiānggǎng gōngsī zhǎodào le gōngzuò, bèi pài dào Xiānggǎng.",
        vi: "Sau đó, Vasily tìm được việc ở một công ty Hồng Kông, được cử sang Hồng Kông.",
      },
      {
        zh: "在香港,瓦西里的工资很高,能支付得了这些。",
        py: "Zài Xiānggǎng, Wǎxīlǐ de gōngzī hěn gāo, néng zhīfù de liǎo zhèxiē.",
        vi: "Ở Hồng Kông, lương của Vasily rất cao, đủ chi trả những khoản này.",
      },
    ],
    [
      {
        zh: "瓦西里很想到北京来找工作,林虹总是狠心不让他来。",
        py: "Wǎxīlǐ hěn xiǎng dào Běijīng lái zhǎo gōngzuò, Lín Hóng zǒngshì hěnxīn bú ràng tā lái.",
        vi: "Vasily rất muốn đến Bắc Kinh tìm việc, nhưng Lâm Hồng luôn quyết tâm không cho anh đến.",
      },
      {
        zh: "林虹说,只能让他一个人在那边受苦了。",
        py: "Lín Hóng shuō, zhǐ néng ràng tā yí gè rén zài nàbiān shòukǔ le.",
        vi: "Lâm Hồng nói, đành để anh một mình chịu khổ bên đó.",
      },
      {
        zh: "对这个跨国家庭来说,生活的压力太大了。",
        py: "Duì zhège kuàguó jiātíng lái shuō, shēnghuó de yālì tài dà le.",
        vi: "Đối với gia đình đa quốc tịch này, áp lực cuộc sống quá lớn.",
      },
    ],
    [
      {
        zh: "萨沙是他们的骄傲。",
        py: "Shàshā shì tāmen de jiāo'ào.",
        vi: "Sasha là niềm tự hào của họ.",
      },
      {
        zh: "小萨沙很漂亮,他继承了父母的优点,白皙的皮肤,棕色的卷发,大而黑的眼睛。",
        py: "Xiǎo Shàshā hěn piàoliang, tā jìchéng le fùmǔ de yōudiǎn, báixī de pífū, zōngsè de juǎnfà, dà ér hēi de yǎnjing.",
        vi: "Bé Sasha rất xinh, bé thừa hưởng ưu điểm của bố mẹ: làn da trắng, tóc xoăn màu nâu, đôi mắt to và đen.",
      },
      {
        zh: "他快两岁了,开始咿咿呀呀地学说话,已经会用汉语和俄语打招呼、数数儿。",
        py: "Tā kuài liǎng suì le, kāishǐ yīyī yāyā de xué shuōhuà, yǐjīng huì yòng Hànyǔ hé Éyǔ dǎ zhāohu, shǔshùr.",
        vi: "Bé sắp hai tuổi, bắt đầu bi bô tập nói, đã biết chào hỏi, đếm số bằng tiếng Hán và tiếng Nga.",
      },
      {
        zh: "除了长相外,萨沙和一般孩子不同的,就是他的表情,他总是在笑。",
        py: "Chúle zhǎngxiàng wài, Shàshā hé yìbān háizi bù tóng de, jiù shì tā de biǎoqíng, tā zǒngshì zài xiào.",
        vi: "Ngoài ngoại hình ra, điểm Sasha khác trẻ thường là biểu cảm, bé lúc nào cũng cười.",
      },
      {
        zh: "不过,林虹说,萨沙也有伤心的时候:每次瓦西里离开家时,萨沙就会大声哭叫,叫着:“爸爸没。”",
        py: "Búguò, Lín Hóng shuō, Shàshā yě yǒu shāngxīn de shíhou: měi cì Wǎxīlǐ líkāi jiā shí, Shàshā jiù huì dàshēng kūjiào, jiàozhe: “Bàba méi.”",
        vi: "Có điều, Lâm Hồng nói Sasha cũng có lúc buồn: mỗi lần Vasily rời nhà, bé khóc to, gọi: “Bố mất (bố đi rồi).”",
      },
    ],
    [
      {
        zh: "谈到未来,林虹说:也许她会带萨沙去香港,一家人总是要团聚的。",
        py: "Tándào wèilái, Lín Hóng shuō: yěxǔ tā huì dài Shàshā qù Xiānggǎng, yì jiā rén zǒngshì yào tuánjù de.",
        vi: "Nói đến tương lai, Lâm Hồng nói: có lẽ cô sẽ đưa Sasha sang Hồng Kông, cả nhà rốt cuộc cũng phải đoàn tụ.",
      },
    ],
  ],
  vocab: [
    {
      zh: "跨国",
      py: "kuàguó",
      hv: "khoá quốc",
      vi: "xuyên quốc gia, đa quốc tịch",
      syn: "国际",
    },
    {
      zh: "日益",
      py: "rìyì",
      hv: "nhật ích",
      vi: "ngày càng",
      syn: "越来越, 一天比一天",
    },
    {
      zh: "分期付款",
      py: "fēnqī fùkuǎn",
      hv: "phân kỳ phó khoản",
      vi: "trả góp",
      syn: "按揭 (vay thế chấp)",
    },
    {
      zh: "开销",
      py: "kāixiao",
      hv: "khai tiêu",
      vi: "chi phí, khoản chi",
      syn: "花费, 开支",
    },
    {
      zh: "支付",
      py: "zhīfù",
      hv: "chi phó",
      vi: "chi trả, thanh toán",
      syn: "付, 付款",
    },
    {
      zh: "狠心",
      py: "hěnxīn",
      hv: "ngận tâm",
      vi: "nhẫn tâm; quyết tâm cứng rắn",
      syn: "下决心, 坚决",
    },
    {
      zh: "骄傲",
      py: "jiāo'ào",
      hv: "kiêu ngạo",
      vi: "tự hào; kiêu ngạo",
      syn: "自豪",
    },
    {
      zh: "继承",
      py: "jìchéng",
      hv: "kế thừa",
      vi: "thừa hưởng, kế thừa",
      syn: "承接, 遗传",
    },
    { zh: "白皙", py: "báixī", hv: "bạch tích", vi: "trắng trẻo", syn: "白净" },
    {
      zh: "长相",
      py: "zhǎngxiàng",
      hv: "trưởng tướng",
      vi: "diện mạo, khuôn mặt",
      syn: "相貌, 样子",
    },
    {
      zh: "表情",
      py: "biǎoqíng",
      hv: "biểu tình",
      vi: "nét mặt, biểu cảm",
      syn: "神情",
    },
    {
      zh: "伤心",
      py: "shāngxīn",
      hv: "thương tâm",
      vi: "đau lòng, buồn",
      syn: "难过, 悲伤",
    },
    {
      zh: "团聚",
      py: "tuánjù",
      hv: "đoàn tụ",
      vi: "đoàn tụ, sum họp",
      syn: "团圆",
    },
    {
      zh: "共同语言",
      py: "gòngtóng yǔyán",
      hv: "cộng đồng ngữ ngôn",
      vi: "tiếng nói chung (cùng sở thích, suy nghĩ)",
      syn: "志同道合",
    },
  ],
  ex1: [
    { q: "开销", opts: ["得到的钱", "花掉的钱", "要付钱", "开始付钱"], a: 1 },
    { q: "支付", opts: ["买东西", "付出费用", "支持", "得到"], a: 1 },
    { q: "狠心", opts: ["坚决", "厉害", "一心", "心里"], a: 0 },
    { q: "长相", opts: ["身高", "体重", "脸的样子", "头发的颜色"], a: 2 },
    {
      q: "表情",
      opts: [
        "心里表达出来的感情",
        "脸上表现出来的感情",
        "表示感情",
        "表达方式",
      ],
      a: 1,
    },
    { q: "伤心", opts: ["难过", "受伤", "心里很疼", "喜欢哭"], a: 0 },
  ],
  ex2: [
    {
      q: "林虹是在什么地方认识瓦西里的?",
      opts: ["莫斯科", "莫斯科大学", "去圣彼得堡的路上", "北京"],
      a: 2,
    },
    {
      q: "关于瓦西里,下面哪种说法不正确?",
      opts: [
        "是莫斯科大学的学生",
        "在莫斯科大学留学",
        "带着中国学生去旅行",
        "会说汉语",
      ],
      a: 1,
    },
    {
      q: "“他们之间有许多共同语言”,意思是",
      opts: [
        "他们会说一样的语言",
        "他们都会好几种语言",
        "他们有许多相同的兴趣爱好和想法",
        "他们互相都爱上了对方",
      ],
      a: 2,
    },
    {
      q: "“跨国恋”的意思是",
      opts: [
        "来自不同国家的人之间的恋爱",
        "在不同的国家恋爱",
        "从一个国家到另一个国家的恋爱",
        "恋爱可以跨越国境",
      ],
      a: 0,
    },
    {
      q: "他们回到中国是因为",
      opts: [
        "林虹毕业了",
        "孩子出生了",
        "俄罗斯的经济情况不太好",
        "跨国家庭无法在俄罗斯生活",
      ],
      a: 2,
    },
    {
      q: "为什么瓦西里在北京找一份合适的工作很难?",
      opts: [
        "他会的语言太少",
        "林虹不让瓦西里在北京工作",
        "北京的工作工资不够高",
        "他喜欢在香港工作",
      ],
      a: 2,
    },
    {
      q: "林虹不让瓦西里在北京工作是因为",
      opts: [
        "希望他一个人在香港受苦",
        "在北京生活开销太大",
        "他们还没有买到房子",
        "香港的工资能够维持一家人的生活",
      ],
      a: 3,
    },
    {
      q: "下面哪一项不是小萨沙的特点?",
      opts: ["很漂亮", "刚刚开始学说话", "很喜欢笑", "常常大声哭叫"],
      a: 3,
    },
  ],
  ex3: [
    { q: "有一年,林虹和瓦西里两个人去圣彼得堡玩儿。", a: false },
    { q: "从圣彼得堡回来的第二年,林虹和瓦西里结婚了。", a: false },
    { q: "林虹和瓦西里回到北京时,萨沙还不到一岁。", a: true },
    { q: "他们买房花了8000元。", a: false },
    { q: "在香港,瓦西里每月的工资在8000元以上。", a: true },
    { q: "瓦西里希望能在北京工作。", a: true },
    { q: "跨国家庭的生活不太容易。", a: true },
    { q: "小萨沙是一个很骄傲的孩子。", a: false },
    { q: "萨沙总是舍不得爸爸离开。", a: true },
    { q: "林虹希望一家人能生活在一起。", a: true },
  ],
  ex5: [
    "林虹和瓦西里是怎样认识的?",
    "为什么瓦西里不在北京找工作?",
    "请你介绍一下小萨沙。",
    "你觉得这个跨国家庭怎么样?",
  ],
};

export default function Lesson2() {
  return <LessonViewer lesson={lesson} />;
}
