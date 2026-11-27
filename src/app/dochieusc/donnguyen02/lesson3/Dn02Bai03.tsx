import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  unit: "第二单元 · Đơn nguyên 2",
  title: "三、家庭妇男",
  titlePy: "Jiātíng fùnán",
  titleVi: "Đàn ông nội trợ",
  paras: [
    [
      {
        zh: "随着妇女地位的提高,夫妻双方在家庭中的地位已经越来越接近了。",
        py: "Suízhe fùnǚ dìwèi de tígāo, fūqī shuāngfāng zài jiātíng zhōng de dìwèi yǐjīng yuèláiyuè jiējìn le.",
        vi: "Cùng với việc nâng cao địa vị phụ nữ, vị thế của vợ chồng trong gia đình ngày càng gần nhau.",
      },
      {
        zh: "妻子的收入成为家庭经济的重要来源之一,这为建立平等民主的夫妻关系打下了经济基础。",
        py: "Qīzi de shōurù chéngwéi jiātíng jīngjì de zhòngyào láiyuán zhī yī, zhè wèi jiànlì píngděng mínzhǔ de fūqī guānxi dǎxià le jīngjì jīchǔ.",
        vi: "Thu nhập của vợ trở thành một nguồn quan trọng của kinh tế gia đình, điều này đặt nền tảng kinh tế để xây dựng quan hệ vợ chồng bình đẳng dân chủ.",
      },
      {
        zh: "现在当“甩手大爷”的丈夫已经不多见了,他们一般都与妻子共同承担家务。",
        py: "Xiànzài dāng “shuǎishǒu dàye” de zhàngfu yǐjīng bù duō jiàn le, tāmen yìbān dōu yǔ qīzi gòngtóng chéngdān jiāwù.",
        vi: "Giờ đây những ông chồng làm “ông chủ phủi tay” không còn nhiều, họ thường cùng vợ gánh vác việc nhà.",
      },
      {
        zh: "传统的“男主外、女主内”的观念正在被打破。",
        py: "Chuántǒng de “nán zhǔ wài, nǚ zhǔ nèi” de guānniàn zhèngzài bèi dǎpò.",
        vi: "Quan niệm truyền thống “đàn ông lo bên ngoài, phụ nữ lo bên trong” đang bị phá vỡ.",
      },
      {
        zh: "尤其是在广州、北京、上海等大城市,男子干家务已经非常普遍。",
        py: "Yóuqí shì zài Guǎngzhōu, Běijīng, Shànghǎi děng dà chéngshì, nánzǐ gàn jiāwù yǐjīng fēicháng pǔbiàn.",
        vi: "Đặc biệt ở các thành phố lớn như Quảng Châu, Bắc Kinh, Thượng Hải, đàn ông làm việc nhà đã rất phổ biến.",
      },
    ],
    [
      {
        zh: "有人曾在广州的一些住宅小区作过调查,发现在被调查的家庭中,有40%的家庭主要是由丈夫做家务,55%的家庭男女分担家务,5%的家庭丈夫很少甚至一点儿也不干家务。",
        py: "Yǒu rén céng zài Guǎngzhōu de yìxiē zhùzhái xiǎoqū zuò guo diàochá, fāxiàn zài bèi diàochá de jiātíng zhōng, yǒu bǎi fēn zhī sìshí de jiātíng zhǔyào shì yóu zhàngfu zuò jiāwù, bǎi fēn zhī wǔshíwǔ de jiātíng nánnǚ fēndān jiāwù, bǎi fēn zhī wǔ de jiātíng zhàngfu hěn shǎo shènzhì yìdiǎnr yě bú gàn jiāwù.",
        vi: "Có người từng khảo sát một số khu dân cư ở Quảng Châu, thấy trong các gia đình được khảo sát, 40% chủ yếu do chồng làm việc nhà, 55% vợ chồng chia nhau làm, 5% chồng ít làm thậm chí chẳng làm việc nhà chút nào.",
      },
    ],
    [
      {
        zh: "这种情况的出现是因为现在妇女基本上都有职业。",
        py: "Zhè zhǒng qíngkuàng de chūxiàn shì yīnwèi xiànzài fùnǚ jīběn shàng dōu yǒu zhíyè.",
        vi: "Tình hình này xuất hiện vì hiện nay về cơ bản phụ nữ đều có nghề nghiệp.",
      },
      {
        zh: "她们除了要和男人一样工作以外,还要做家务、带孩子,如果丈夫不帮忙,实在是难以胜任。",
        py: "Tāmen chúle yào hé nánrén yíyàng gōngzuò yǐwài, hái yào zuò jiāwù, dài háizi, rúguǒ zhàngfu bù bāngmáng, shízài shì nányǐ shèngrèn.",
        vi: "Ngoài việc phải đi làm như đàn ông, họ còn phải làm việc nhà, trông con; nếu chồng không giúp thì thật sự khó đảm đương nổi.",
      },
      {
        zh: "有些妇女还经常出差,丈夫不做家务根本不行。",
        py: "Yǒuxiē fùnǚ hái jīngcháng chūchāi, zhàngfu bú zuò jiāwù gēnběn bù xíng.",
        vi: "Một số phụ nữ còn thường xuyên đi công tác, chồng không làm việc nhà thì hoàn toàn không được.",
      },
    ],
    [
      {
        zh: "这样的生活现实造就了越来越多的“家庭妇男”,人们把他们叫做“模范丈夫”。",
        py: "Zhèyàng de shēnghuó xiànshí zàojiù le yuèláiyuè duō de “jiātíng fùnán”, rénmen bǎ tāmen jiàozuò “mófàn zhàngfu”.",
        vi: "Thực tế cuộc sống như vậy đã tạo ra ngày càng nhiều “đàn ông nội trợ”, người ta gọi họ là “người chồng mẫu mực”.",
      },
      {
        zh: "在这种社会风气下,一些女青年,特别是大城市的女青年,把会干家务作为她们寻找理想丈夫的标准之一。",
        py: "Zài zhè zhǒng shèhuì fēngqì xià, yìxiē nǚ qīngnián, tèbié shì dà chéngshì de nǚ qīngnián, bǎ huì gàn jiāwù zuòwéi tāmen xúnzhǎo lǐxiǎng zhàngfu de biāozhǔn zhī yī.",
        vi: "Trong phong khí xã hội này, một số thanh nữ, nhất là ở thành phố lớn, coi biết làm việc nhà là một tiêu chuẩn tìm chồng lý tưởng.",
      },
      {
        zh: "与此相适应,一些未婚小伙子也已提前开始这方面的训练,以便得到姑娘们的喜爱。",
        py: "Yǔ cǐ xiāng shìyìng, yìxiē wèihūn xiǎohuǒzi yě yǐ tíqián kāishǐ zhè fāngmiàn de xùnliàn, yǐbiàn dédào gūniang men de xǐ'ài.",
        vi: "Để thích ứng, một số chàng trai chưa cưới cũng đã luyện tập trước về mặt này, để được các cô gái yêu mến.",
      },
    ],
  ],
  vocab: [
    {
      zh: "地位",
      py: "dìwèi",
      hv: "địa vị",
      vi: "địa vị, vị thế",
      syn: "位置, 身份",
    },
    {
      zh: "来源",
      py: "láiyuán",
      hv: "lai nguyên",
      vi: "nguồn gốc, nguồn",
      syn: "出处",
    },
    {
      zh: "甩手大爷",
      py: "shuǎishǒu dàye",
      hv: "suất thủ đại gia",
      vi: "ông chủ phủi tay (người chẳng đụng tay vào việc gì)",
      syn: "不管事的人",
    },
    {
      zh: "承担",
      py: "chéngdān",
      hv: "thừa đảm",
      vi: "đảm nhận, gánh vác",
      syn: "负责, 担负",
    },
    {
      zh: "观念",
      py: "guānniàn",
      hv: "quan niệm",
      vi: "quan niệm, tư tưởng",
      syn: "思想, 想法",
    },
    { zh: "打破", py: "dǎpò", hv: "đả phá", vi: "phá vỡ", syn: "突破" },
    { zh: "普遍", py: "pǔbiàn", hv: "phổ biến", vi: "phổ biến", syn: "广泛" },
    {
      zh: "分担",
      py: "fēndān",
      hv: "phân đảm",
      vi: "chia nhau gánh vác",
      syn: "分摊",
    },
    {
      zh: "带孩子",
      py: "dài háizi",
      hv: "đái hài tử",
      vi: "trông con, chăm con",
      syn: "照顾孩子",
    },
    {
      zh: "难以胜任",
      py: "nányǐ shèngrèn",
      hv: "nan dĩ thắng nhiệm",
      vi: "khó đảm đương nổi",
      syn: "力不从心",
    },
    { zh: "出差", py: "chūchāi", hv: "xuất sai", vi: "đi công tác", syn: "—" },
    {
      zh: "造就",
      py: "zàojiù",
      hv: "tạo tựu",
      vi: "tạo nên, đào tạo ra",
      syn: "培养, 造成",
    },
    {
      zh: "家庭妇男",
      py: "jiātíng fùnán",
      hv: "gia đình phụ nam",
      vi: "đàn ông nội trợ",
      syn: "家庭主夫",
    },
    {
      zh: "模范",
      py: "mófàn",
      hv: "mô phạm",
      vi: "mẫu mực, gương mẫu",
      syn: "榜样",
    },
    {
      zh: "风气",
      py: "fēngqì",
      hv: "phong khí",
      vi: "phong khí, xu hướng xã hội",
      syn: "风尚, 习惯",
    },
    {
      zh: "训练",
      py: "xùnliàn",
      hv: "huấn luyện",
      vi: "rèn luyện, huấn luyện",
      syn: "练习",
    },
  ],
  ex1: [
    {
      q: "地位",
      opts: [
        "一个人站的地方",
        "地方的位置",
        "人在社会中的位置",
        "一个位置所需的地方",
      ],
      a: 2,
    },
    {
      q: "来源",
      opts: ["产生的地方", "水流过来的地方", "事情发生的原因", "流过来的水"],
      a: 0,
    },
    {
      q: "“甩手大爷”",
      opts: [
        "喜欢来回摆手的人",
        "什么事情都不管的人",
        "把东西都扔掉的人",
        "什么事情都不知道的人",
      ],
      a: 1,
    },
    { q: "承担", opts: ["担心", "负责", "接受", "讨论"], a: 1 },
    { q: "观念", opts: ["认为", "做法", "思想", "想念"], a: 2 },
    {
      q: "带孩子",
      opts: ["照顾孩子", "和孩子玩", "和孩子一起做家务", "带着孩子做事"],
      a: 0,
    },
    {
      q: "难以胜任",
      opts: [
        "很难认为是胜利",
        "困难得做不到",
        "很难做好",
        "虽然难但还是能做好",
      ],
      a: 2,
    },
    {
      q: "出差",
      opts: [
        "出去不好",
        "把不好的人赶出去",
        "因为工作不好而去外地",
        "因为工作临时去外地",
      ],
      a: 3,
    },
    { q: "造就", opts: ["制造出", "培养出", "制造成功", "很成功的"], a: 1 },
    {
      q: "风气",
      opts: [
        "风吹来的空气",
        "像风一样流动的空气",
        "像风一样流行",
        "流行的习惯和爱好",
      ],
      a: 3,
    },
  ],
  ex2: [
    {
      q: "妇女在家庭中的地位",
      opts: ["一直很高", "正在接近男子", "不太高", "比男子高"],
      a: 1,
    },
    {
      q: "现代家庭中",
      opts: [
        "经济来源主要靠妻子",
        "丈夫是“甩手大爷”",
        "丈夫和妻子共同干家务",
        "男子干家务",
      ],
      a: 2,
    },
    {
      q: "“男主外、女主内”的意思是",
      opts: [
        "男子在外面挣钱,女子在家带孩子做家务",
        "男子主要生活在外面,女子主要生活在家里",
        "男子决定外面的事情,女子决定家里的事情",
        "男子是外面的主人,女子是家里的主人",
      ],
      a: 0,
    },
    {
      q: "从调查中我们可以发现",
      opts: [
        "承担所有家务的妻子已经很少了",
        "男子已经都成为“家庭妇男”了",
        "愿意和丈夫分担家务的妻子越来越少",
        "大部分家庭是丈夫做家务",
      ],
      a: 0,
    },
    {
      q: "男子开始做家务是因为现代妇女",
      opts: [
        "都有工作",
        "已经不会做家务、带孩子了",
        "经常出差",
        "觉得做家务、带孩子太难",
      ],
      a: 0,
    },
    {
      q: "现在的社会风气是",
      opts: [
        "未婚小伙子学习做家务",
        "大城市的女青年想找理想的丈夫",
        "“家庭妇男”越来越多",
        "未婚小伙子努力想得到姑娘的喜爱",
      ],
      a: 2,
    },
  ],
  ex3: [
    { q: "平等民主的夫妻关系需要一定的经济基础。", a: true },
    { q: "过去家庭中丈夫常常是“甩手大爷”。", a: true },
    { q: "中国的传统是丈夫和妻子共同承担家务。", a: false },
    { q: "在广州,55%的家庭主要是由丈夫做家务。", a: false },
    { q: "在被调查的家庭中还有5%的丈夫是“甩手大爷”。", a: true },
    { q: "因为妻子地位高了,所以丈夫不得不做家务。", a: false },
    { q: "“家庭妇男”是指没有工作,只在家中做家务的丈夫。", a: false },
    { q: "能干家务是现代女青年对男朋友的要求之一。", a: true },
    { q: "现在的未婚小伙子喜爱做家务。", a: false },
  ],
  ex5: [
    "什么是“家庭妇男”?",
    "现代家庭发生了什么样的变化?",
    "现代家庭发生变化的原因是什么?",
    "这种变化对社会带来的影响是什么?",
  ],
};

export default function Lesson3() {
  return <LessonViewer lesson={lesson} />;
}
