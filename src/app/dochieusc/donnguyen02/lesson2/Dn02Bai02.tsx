import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  unit: "第二单元 · Đơn nguyên 2",
  title: "二、走亲戚",
  titlePy: "Zǒu qīnqi",
  titleVi: "Đi thăm họ hàng",
  paras: [
    [
      {
        zh: "我们农村别的没有,就是亲戚多。",
        py: "Wǒmen nóngcūn bié de méiyǒu, jiù shì qīnqi duō.",
        vi: "Nông thôn chúng tôi cái khác không có, chỉ được cái họ hàng nhiều.",
      },
      { zh: "有多少呢?", py: "Yǒu duōshao ne?", vi: "Nhiều bao nhiêu ư?" },
      {
        zh: "我一时半会儿也数不清。",
        py: "Wǒ yìshí bànhuìr yě shǔ bu qīng.",
        vi: "Tôi nhất thời cũng không đếm xuể.",
      },
      {
        zh: "记得我第一次带那个城里生城里长的媳妇回老家过年时,我给她讲了一晚上我家的亲戚,可她还是搞不清楚。",
        py: "Jìde wǒ dì-yī cì dài nàge chéng lǐ shēng chéng lǐ zhǎng de xífù huí lǎojiā guònián shí, wǒ gěi tā jiǎng le yì wǎnshang wǒ jiā de qīnqi, kě tā háishi gǎo bu qīngchu.",
        vi: "Nhớ lần đầu tôi đưa cô vợ sinh ra lớn lên ở thành phố về quê ăn Tết, tôi kể cả buổi tối về họ hàng nhà tôi, vậy mà cô ấy vẫn không rõ.",
      },
      {
        zh: "第二天一大早,我给她画了一张图,把我的亲戚关系列了出来。",
        py: "Dì-èr tiān yí dàzǎo, wǒ gěi tā huà le yì zhāng tú, bǎ wǒ de qīnqi guānxi liè le chūlái.",
        vi: "Sáng sớm hôm sau, tôi vẽ cho cô ấy một sơ đồ, liệt kê ra các quan hệ họ hàng của tôi.",
      },
      {
        zh: "我媳妇一看,眼睛睁得老大,好家伙,快上百了呢!",
        py: "Wǒ xífù yí kàn, yǎnjing zhēng de lǎo dà, hǎojiāhuo, kuài shàng bǎi le ne!",
        vi: "Vợ tôi vừa nhìn, mắt trợn tròn: trời đất, sắp hàng trăm người rồi!",
      },
      {
        zh: "我心想,我说的还都是最直接的亲戚呢。",
        py: "Wǒ xīn xiǎng, wǒ shuō de hái dōu shì zuì zhíjiē de qīnqi ne.",
        vi: "Tôi thầm nghĩ, những người tôi kể còn đều là họ hàng trực tiếp nhất đấy.",
      },
      {
        zh: "要知道,这些亲戚的亲戚也是我们的亲戚。",
        py: "Yào zhīdào, zhèxiē qīnqi de qīnqi yě shì wǒmen de qīnqi.",
        vi: "Phải biết rằng, họ hàng của những họ hàng này cũng là họ hàng của chúng tôi.",
      },
    ],
    [
      {
        zh: "在老家,过年最重要的活动之一就是走亲戚。",
        py: "Zài lǎojiā, guònián zuì zhòngyào de huódòng zhī yī jiù shì zǒu qīnqi.",
        vi: "Ở quê, một trong những hoạt động quan trọng nhất dịp Tết là đi thăm họ hàng.",
      },
      {
        zh: "亲戚亲戚,只有走动才能显示出“亲”来。",
        py: "Qīnqi qīnqi, zhǐyǒu zǒudong cái néng xiǎnshì chū “qīn” lái.",
        vi: "Họ hàng là họ hàng, có qua lại thăm hỏi mới thể hiện ra được chữ “thân”.",
      },
      {
        zh: "大年初一一过,我就开始带着媳妇走东家串西家地去拜年。",
        py: "Dànián chūyī yí guò, wǒ jiù kāishǐ dàizhe xífù zǒu dōngjiā chuàn xījiā de qù bàinián.",
        vi: "Qua mùng một Tết, tôi bắt đầu dẫn vợ đi hết nhà này đến nhà khác chúc Tết.",
      },
      {
        zh: "一天下来累得说话的劲儿都没有了。",
        py: "Yì tiān xiàlái lèi de shuōhuà de jìnr dōu méiyǒu le.",
        vi: "Một ngày trôi qua mệt đến mức sức nói chuyện cũng không còn.",
      },
      {
        zh: "我媳妇对这些倒没抱怨。",
        py: "Wǒ xífù duì zhèxiē dào méi bàoyuàn.",
        vi: "Vợ tôi thì lại không than phiền gì về những chuyện này.",
      },
      {
        zh: "她最怕的是,有人亲亲热热地和她聊家常,而她却不知道怎么称呼对方。",
        py: "Tā zuì pà de shì, yǒu rén qīnqīn rèrè de hé tā liáo jiācháng, ér tā què bù zhīdào zěnme chēnghu duìfāng.",
        vi: "Điều cô sợ nhất là có người thân mật trò chuyện với mình mà cô lại không biết xưng hô với họ thế nào.",
      },
      {
        zh: "晚上回来对着图找,怎么找也找不到。",
        py: "Wǎnshang huílái duìzhe tú zhǎo, zěnme zhǎo yě zhǎo bu dào.",
        vi: "Tối về đối chiếu sơ đồ để tìm, tìm thế nào cũng không thấy.",
      },
      {
        zh: "于是,我便指着图中的一个人说,这是我二舅的丈母娘的姐姐的外甥,我们该叫他“舅舅”。",
        py: "Yúshì, wǒ biàn zhǐzhe tú zhōng de yí gè rén shuō, zhè shì wǒ èr jiù de zhàngmuniáng de jiějie de wàisheng, wǒmen gāi jiào tā “jiùjiu”.",
        vi: "Thế là tôi chỉ vào một người trên sơ đồ nói: đây là cháu ngoại của chị gái mẹ vợ cậu hai tôi, chúng ta nên gọi ông ấy là “cậu”.",
      },
      {
        zh: "哇!我媳妇惊叹道,这样连下去,所有的中国人都会是亲戚呢。",
        py: "Wā! Wǒ xífù jīngtàn dào, zhèyàng lián xiàqù, suǒyǒu de Zhōngguó rén dōu huì shì qīnqi ne.",
        vi: "Oa! Vợ tôi kinh ngạc thốt lên: nối tiếp thế này thì tất cả người Trung Quốc đều là họ hàng mất!",
      },
    ],
  ],
  vocab: [
    {
      zh: "亲戚",
      py: "qīnqi",
      hv: "thân thích",
      vi: "họ hàng, bà con",
      syn: "亲属",
    },
    {
      zh: "走亲戚",
      py: "zǒu qīnqi",
      hv: "tẩu thân thích",
      vi: "đi thăm họ hàng",
      syn: "探亲, 拜访亲戚",
    },
    {
      zh: "一时半会儿",
      py: "yìshí bànhuìr",
      hv: "nhất thời bán hội nhi",
      vi: "trong một lúc ngắn, nhất thời",
      syn: "一时半刻",
    },
    {
      zh: "老家",
      py: "lǎojiā",
      hv: "lão gia",
      vi: "quê nhà, quê gốc",
      syn: "故乡, 家乡",
    },
    {
      zh: "媳妇",
      py: "xífù",
      hv: "tức phụ",
      vi: "vợ (khẩu ngữ); con dâu",
      syn: "妻子, 老婆",
    },
    {
      zh: "搞不清楚",
      py: "gǎo bu qīngchu",
      hv: "cảo bất thanh sở",
      vi: "không làm rõ được, không phân biệt nổi",
      syn: "弄不明白",
    },
    {
      zh: "列",
      py: "liè",
      hv: "liệt",
      vi: "liệt kê, kê ra",
      syn: "列出, 写出",
    },
    {
      zh: "好家伙",
      py: "hǎojiāhuo",
      hv: "hảo gia hoả",
      vi: "trời đất! (thán từ kinh ngạc)",
      syn: "我的天, 哎呀",
    },
    { zh: "直接", py: "zhíjiē", hv: "trực tiếp", vi: "trực tiếp", syn: "—" },
    {
      zh: "走动",
      py: "zǒudong",
      hv: "tẩu động",
      vi: "qua lại thăm hỏi",
      syn: "来往, 往来",
    },
    {
      zh: "显示",
      py: "xiǎnshì",
      hv: "hiển thị",
      vi: "thể hiện, biểu lộ",
      syn: "表现, 表明",
    },
    { zh: "拜年", py: "bàinián", hv: "bái niên", vi: "chúc Tết", syn: "贺年" },
    {
      zh: "抱怨",
      py: "bàoyuàn",
      hv: "bão oán",
      vi: "oán trách, than phiền",
      syn: "埋怨, 不满",
    },
    {
      zh: "亲亲热热",
      py: "qīnqīn rèrè",
      hv: "thân thân nhiệt nhiệt",
      vi: "thân mật, nồng hậu",
      syn: "亲热, 热情",
    },
    {
      zh: "称呼",
      py: "chēnghu",
      hv: "xưng hô",
      vi: "xưng hô, cách gọi",
      syn: "叫",
    },
    {
      zh: "惊叹",
      py: "jīngtàn",
      hv: "kinh thán",
      vi: "kinh ngạc thốt lên",
      syn: "赞叹, 吃惊",
    },
    {
      zh: "外甥",
      py: "wàisheng",
      hv: "ngoại sanh",
      vi: "cháu ngoại (con của chị/em gái)",
      syn: "—",
    },
  ],
  ex1: [
    {
      q: "走亲戚",
      opts: [
        "走到亲戚那儿",
        "亲戚们走来走去",
        "亲戚到自己家里来",
        "亲戚之间互相拜访",
      ],
      a: 3,
    },
    {
      q: "一时半会儿",
      opts: ["短时间内", "一会儿的一半", "一定的时间", "一个半小时"],
      a: 0,
    },
    { q: "老家", opts: ["很老的家", "故乡", "有老人的家", "农村"], a: 1 },
    { q: "列", opts: ["写", "解释", "算", "介绍"], a: 0 },
    {
      q: "好家伙",
      opts: ["很好的家", "很好的人", "表示吃惊", "表示赞扬"],
      a: 2,
    },
    { q: "走动", opts: ["走路运动", "互相来往", "访问", "走路"], a: 1 },
    { q: "显示", opts: ["看出来", "说出", "明白", "表现"], a: 3 },
    { q: "抱怨", opts: ["心中生气", "表示不满", "觉得麻烦", "很讨厌"], a: 1 },
    {
      q: "亲亲热热",
      opts: ["亲自表示热情", "亲人们很热情", "很热情的样子", "离得很近的样子"],
      a: 2,
    },
    {
      q: "惊叹",
      opts: ["吃惊地感叹", "害怕地叹气", "大声地喊", "很感动"],
      a: 0,
    },
  ],
  ex2: [
    {
      q: "为什么我要给媳妇画一张图?",
      opts: [
        "媳妇听不清楚我讲的话",
        "我说不清楚我家的亲戚关系",
        "媳妇搞不清楚我家的亲戚关系",
        "为了让媳妇知道亲戚的名字",
      ],
      a: 2,
    },
    {
      q: "“亲戚亲戚,只有走动才能显示出‘亲’来。”意思是",
      opts: [
        "只有互相来往才能成为亲戚",
        "经常来往才能保持较好的亲戚关系",
        "亲戚和亲戚必须互相来往",
        "因为经常来往所以是亲戚",
      ],
      a: 1,
    },
    {
      q: "“走东家串西家”的意思是",
      opts: [
        "先去住在东边的人家,再去住在西边的人家",
        "去住在东边和西边的人家拜访",
        "从东边的人家走到西边的人家",
        "从这一家走到那一家",
      ],
      a: 3,
    },
    {
      q: "为什么我和媳妇要去走亲戚?",
      opts: [
        "亲戚们请我们去",
        "我喜欢去亲戚家",
        "我媳妇喜欢去亲戚家",
        "过年的时候应该去向亲戚们拜年",
      ],
      a: 3,
    },
    {
      q: "我们什么时候开始走亲戚?",
      opts: ["大年三十", "大年初一", "大年初二", "每天"],
      a: 2,
    },
    {
      q: "我媳妇害怕什么?",
      opts: [
        "每天都要去走亲戚",
        "太累了",
        "有人和她聊家常",
        "不知道怎么称呼对方",
      ],
      a: 3,
    },
    {
      q: "为什么有的人在我的图里找不到?",
      opts: [
        "我不认识那个人",
        "我忘了那个人",
        "那个人不是我们的亲戚",
        "那个人不是我们直接的亲戚",
      ],
      a: 3,
    },
  ],
  ex3: [
    { q: "农村的一个特点就是亲戚多。", a: true },
    { q: "我是农村人,媳妇是城里人。", a: true },
    { q: "我给媳妇画的图里列出了我所有的亲戚。", a: false },
    { q: "我家有一百多个直接的亲戚。", a: false },
    { q: "在农村,亲戚的亲戚都是亲戚。", a: true },
    { q: "我媳妇比较了解我家的亲戚。", a: false },
    { q: "我媳妇喜欢到处去走亲戚。", a: false },
    { q: "有时我媳妇不认识和她说话的亲戚。", a: true },
    { q: "我媳妇害怕和别人谈话。", a: false },
    { q: "所有的中国人都是亲戚。", a: false },
  ],
  extra: [
    {
      label: "练习(四) Trả lời",
      qs: [
        "我知道我家有多少亲戚吗?",
        "城里人有没有那么多亲戚?",
        "我给媳妇画了一张什么图?",
        "我媳妇了解农村的亲戚关系吗?",
        "在农村,过年最重要的活动是什么?",
      ],
    },
  ],
  order: {
    label: "练习(五) 连句成段",
    sents: [
      "大年初一一过,我和媳妇就开始去亲戚家拜年。",
      "亲戚亲戚,只有走动才能显示出“亲”来。",
      "我媳妇不怕辛苦,就怕不认识她的人和她聊家常。",
      "在农村,过年最重要的活动之一就是走亲戚。",
      "因为她不知道怎么称呼对方。",
    ],
    answer: [4, 2, 1, 3, 5],
  },
};

export default function Lesson2() {
  return <LessonViewer lesson={lesson} />;
}
