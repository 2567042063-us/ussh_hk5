import LessonViewer, { Lesson } from "./LessonViewer";

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
      zh: "收入",
      py: "shōurù",
      hv: "thu nhập",
      vi: "thu nhập, khoản tiền kiếm được",
      syn: "收益, 进项",
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
  usage: {
    收入: "Danh từ “thu nhập”: 妻子的收入, 收入高 / 低. Trái nghĩa 支出 / 开销 (chi tiêu). Còn là động từ “thu vào”.",
    地位: "社会地位 / 家庭地位; hay đi với 提高 (nâng cao), 接近 (gần nhau).",
    来源: "Danh từ: nguồn (thu nhập, tin tức…): 经济来源, 收入来源.",
    甩手大爷:
      "Ẩn dụ khẩu ngữ: ông chủ phủi tay, người chẳng chịu đụng tay vào việc gì, chỉ ngồi hưởng hoặc chỉ đạo.",
    承担: "Hay đi với 责任 / 家务 / 费用: 承担家务 = gánh vác việc nhà. Trang trọng hơn 做.",
    观念: "Quan niệm: 传统观念, 新观念. Hay đi với 打破 (phá bỏ), 改变 (thay đổi).",
    打破: "Phá vỡ (quan niệm, kỷ lục, sự im lặng…): 打破传统观念.",
    普遍: "Phổ biến: 非常普遍 / 普遍受到欢迎. Có thể làm vị ngữ hoặc phó từ.",
    分担: "Chia nhau gánh: 分担家务 / 分担费用. Khác 承担 (một người đảm đương).",
    难以胜任:
      "难以 + V (thư diện) = khó mà…; 胜任 = đảm đương nổi công việc. Dùng khi việc vượt quá sức.",
    出差: "Động từ li hợp: 出差 / 出一次差 / 去北京出差.",
    造就: "Tạo nên, đào luyện (nhân tài, con người): 现实造就了…, hoàn cảnh tạo ra…",
    模范: "Mẫu mực, gương mẫu: 模范丈夫, 模范教师.",
    风气: "Phong khí xã hội: 社会风气; hay đi với 良好 / 不良.",
    家庭妇男:
      "Cách nói mới, hóm hỉnh, tương tự 家庭主妇 nhưng chỉ người đàn ông ở nhà lo việc nhà.",
  },
  ex1: [
    {
      q: "地位",
      py: "dìwèi",
      vi: "địa vị, vị thế",
      a: 2,
      opts: [
        ["一个人站的地方", "yí gè rén zhàn de dìfang", "Chỗ một người đứng"],
        ["地方的位置", "dìfang de wèizhi", "Vị trí của một nơi"],
        [
          "人在社会中的位置",
          "rén zài shèhuì zhōng de wèizhi",
          "Vị trí của con người trong xã hội",
        ],
        [
          "一个位置所需的地方",
          "yí gè wèizhi suǒ xū de dìfang",
          "Chỗ cần có cho một vị trí",
        ],
      ],
    },
    {
      q: "来源",
      py: "láiyuán",
      vi: "nguồn, nguồn gốc",
      a: 0,
      opts: [
        ["产生的地方", "chǎnshēng de dìfang", "Nơi phát sinh"],
        ["水流过来的地方", "shuǐ liú guòlái de dìfang", "Nơi nước chảy tới"],
        [
          "事情发生的原因",
          "shìqing fāshēng de yuányīn",
          "Nguyên nhân sự việc xảy ra",
        ],
        ["流过来的水", "liú guòlái de shuǐ", "Nước chảy tới"],
      ],
    },
    {
      q: "“甩手大爷”",
      py: "shuǎishǒu dàye",
      vi: "ông chủ phủi tay",
      a: 1,
      opts: [
        [
          "喜欢来回摆手的人",
          "xǐhuan láihuí bǎishǒu de rén",
          "Người thích vẫy tay qua lại",
        ],
        [
          "什么事情都不管的人",
          "shénme shìqing dōu bù guǎn de rén",
          "Người chẳng quản việc gì",
        ],
        [
          "把东西都扔掉的人",
          "bǎ dōngxi dōu rēngdiào de rén",
          "Người vứt hết đồ đạc",
        ],
        [
          "什么事情都不知道的人",
          "shénme shìqing dōu bù zhīdào de rén",
          "Người chẳng biết việc gì",
        ],
      ],
    },
    {
      q: "承担",
      py: "chéngdān",
      vi: "đảm nhận, gánh vác",
      a: 1,
      opts: [
        ["担心", "dānxīn", "Lo lắng"],
        ["负责", "fùzé", "Chịu trách nhiệm"],
        ["接受", "jiēshòu", "Tiếp nhận"],
        ["讨论", "tǎolùn", "Thảo luận"],
      ],
    },
    {
      q: "观念",
      py: "guānniàn",
      vi: "quan niệm",
      a: 2,
      opts: [
        ["认为", "rènwéi", "Cho rằng"],
        ["做法", "zuòfǎ", "Cách làm"],
        ["思想", "sīxiǎng", "Tư tưởng"],
        ["想念", "xiǎngniàn", "Nhớ nhung"],
      ],
    },
    {
      q: "带孩子",
      py: "dài háizi",
      vi: "trông con, chăm con",
      a: 0,
      opts: [
        ["照顾孩子", "zhàogù háizi", "Chăm sóc con"],
        ["和孩子玩", "hé háizi wán", "Chơi với con"],
        [
          "和孩子一起做家务",
          "hé háizi yìqǐ zuò jiāwù",
          "Cùng con làm việc nhà",
        ],
        ["带着孩子做事", "dàizhe háizi zuòshì", "Mang con theo làm việc"],
      ],
    },
    {
      q: "难以胜任",
      py: "nányǐ shèngrèn",
      vi: "khó đảm đương nổi",
      a: 2,
      opts: [
        [
          "很难认为是胜利",
          "hěn nán rènwéi shì shènglì",
          "Khó coi là chiến thắng",
        ],
        ["困难得做不到", "kùnnan de zuò bu dào", "Khó đến mức không làm được"],
        ["很难做好", "hěn nán zuòhǎo", "Khó làm tốt"],
        [
          "虽然难但还是能做好",
          "suīrán nán dàn háishi néng zuòhǎo",
          "Tuy khó nhưng vẫn làm tốt được",
        ],
      ],
    },
    {
      q: "出差",
      py: "chūchāi",
      vi: "đi công tác",
      a: 3,
      opts: [
        ["出去不好", "chūqù bù hǎo", "Ra ngoài không tốt"],
        [
          "把不好的人赶出去",
          "bǎ bù hǎo de rén gǎn chūqù",
          "Đuổi người xấu ra ngoài",
        ],
        [
          "因为工作不好而去外地",
          "yīnwèi gōngzuò bù hǎo ér qù wàidì",
          "Vì công việc không tốt mà đi nơi khác",
        ],
        [
          "因为工作临时去外地",
          "yīnwèi gōngzuò línshí qù wàidì",
          "Vì công việc mà tạm thời đi nơi khác",
        ],
      ],
    },
    {
      q: "造就",
      py: "zàojiù",
      vi: "tạo nên, đào tạo ra",
      a: 1,
      opts: [
        ["制造出", "zhìzào chū", "Chế tạo ra"],
        ["培养出", "péiyǎng chū", "Bồi dưỡng, đào tạo ra"],
        ["制造成功", "zhìzào chénggōng", "Chế tạo thành công"],
        ["很成功的", "hěn chénggōng de", "Rất thành công"],
      ],
    },
    {
      q: "风气",
      py: "fēngqì",
      vi: "phong khí, xu hướng xã hội",
      a: 3,
      opts: [
        [
          "风吹来的空气",
          "fēng chuī lái de kōngqì",
          "Không khí do gió thổi tới",
        ],
        [
          "像风一样流动的空气",
          "xiàng fēng yíyàng liúdòng de kōngqì",
          "Không khí chuyển động như gió",
        ],
        [
          "像风一样流行",
          "xiàng fēng yíyàng liúxíng",
          "Thịnh hành nhanh như gió",
        ],
        [
          "流行的习惯和爱好",
          "liúxíng de xíguàn hé àihào",
          "Thói quen và sở thích đang thịnh hành",
        ],
      ],
    },
  ],
  ex2: [
    {
      q: "妇女在家庭中的地位",
      py: "Fùnǚ zài jiātíng zhōng de dìwèi",
      vi: "Địa vị của phụ nữ trong gia đình",
      a: 1,
      opts: [
        ["一直很高", "yìzhí hěn gāo", "Luôn rất cao"],
        ["正在接近男子", "zhèngzài jiējìn nánzǐ", "Đang tiến gần đến nam giới"],
        ["不太高", "bú tài gāo", "Không cao lắm"],
        ["比男子高", "bǐ nánzǐ gāo", "Cao hơn nam giới"],
      ],
    },
    {
      q: "现代家庭中",
      py: "Xiàndài jiātíng zhōng",
      vi: "Trong gia đình hiện đại",
      a: 2,
      opts: [
        [
          "经济来源主要靠妻子",
          "jīngjì láiyuán zhǔyào kào qīzi",
          "Nguồn kinh tế chủ yếu dựa vào vợ",
        ],
        [
          "丈夫是“甩手大爷”",
          "zhàngfu shì “shuǎishǒu dàye”",
          "Chồng là “ông chủ phủi tay”",
        ],
        [
          "丈夫和妻子共同干家务",
          "zhàngfu hé qīzi gòngtóng gàn jiāwù",
          "Vợ chồng cùng làm việc nhà",
        ],
        ["男子干家务", "nánzǐ gàn jiāwù", "Đàn ông làm việc nhà"],
      ],
    },
    {
      q: "“男主外、女主内”的意思是",
      py: "“Nán zhǔ wài, nǚ zhǔ nèi” de yìsi shì",
      vi: "Nghĩa của “nam chủ ngoại, nữ chủ nội” là",
      a: 0,
      opts: [
        [
          "男子在外面挣钱,女子在家带孩子做家务",
          "nánzǐ zài wàimiàn zhèng qián, nǚzǐ zài jiā dài háizi zuò jiāwù",
          "Đàn ông kiếm tiền bên ngoài, phụ nữ ở nhà trông con làm việc nhà",
        ],
        [
          "男子主要生活在外面,女子主要生活在家里",
          "nánzǐ zhǔyào shēnghuó zài wàimiàn, nǚzǐ zhǔyào shēnghuó zài jiā lǐ",
          "Đàn ông chủ yếu sống bên ngoài, phụ nữ chủ yếu sống trong nhà",
        ],
        [
          "男子决定外面的事情,女子决定家里的事情",
          "nánzǐ juédìng wàimiàn de shìqing, nǚzǐ juédìng jiā lǐ de shìqing",
          "Đàn ông quyết định việc bên ngoài, phụ nữ quyết định việc trong nhà",
        ],
        [
          "男子是外面的主人,女子是家里的主人",
          "nánzǐ shì wàimiàn de zhǔrén, nǚzǐ shì jiā lǐ de zhǔrén",
          "Đàn ông là chủ bên ngoài, phụ nữ là chủ trong nhà",
        ],
      ],
    },
    {
      q: "从调查中我们可以发现",
      py: "Cóng diàochá zhōng wǒmen kěyǐ fāxiàn",
      vi: "Từ khảo sát chúng ta có thể thấy",
      a: 0,
      opts: [
        [
          "承担所有家务的妻子已经很少了",
          "chéngdān suǒyǒu jiāwù de qīzi yǐjīng hěn shǎo le",
          "Người vợ gánh hết việc nhà đã rất ít",
        ],
        [
          "男子已经都成为“家庭妇男”了",
          "nánzǐ yǐjīng dōu chéngwéi “jiātíng fùnán” le",
          "Đàn ông đều đã thành “đàn ông nội trợ”",
        ],
        [
          "愿意和丈夫分担家务的妻子越来越少",
          "yuànyì hé zhàngfu fēndān jiāwù de qīzi yuèláiyuè shǎo",
          "Vợ sẵn lòng chia việc nhà với chồng ngày càng ít",
        ],
        [
          "大部分家庭是丈夫做家务",
          "dàbùfen jiātíng shì zhàngfu zuò jiāwù",
          "Phần lớn gia đình là chồng làm việc nhà",
        ],
      ],
    },
    {
      q: "男子开始做家务是因为现代妇女",
      py: "Nánzǐ kāishǐ zuò jiāwù shì yīnwèi xiàndài fùnǚ",
      vi: "Đàn ông bắt đầu làm việc nhà là vì phụ nữ hiện đại",
      a: 0,
      opts: [
        ["都有工作", "dōu yǒu gōngzuò", "Đều có việc làm"],
        [
          "已经不会做家务、带孩子了",
          "yǐjīng bú huì zuò jiāwù, dài háizi le",
          "Đã không biết làm việc nhà, trông con",
        ],
        ["经常出差", "jīngcháng chūchāi", "Thường xuyên đi công tác"],
        [
          "觉得做家务、带孩子太难",
          "juéde zuò jiāwù, dài háizi tài nán",
          "Thấy làm việc nhà, trông con quá khó",
        ],
      ],
    },
    {
      q: "现在的社会风气是",
      py: "Xiànzài de shèhuì fēngqì shì",
      vi: "Phong khí xã hội hiện nay là",
      a: 2,
      opts: [
        [
          "未婚小伙子学习做家务",
          "wèihūn xiǎohuǒzi xuéxí zuò jiāwù",
          "Chàng trai chưa cưới học làm việc nhà",
        ],
        [
          "大城市的女青年想找理想的丈夫",
          "dà chéngshì de nǚ qīngnián xiǎng zhǎo lǐxiǎng de zhàngfu",
          "Thanh nữ thành phố lớn muốn tìm chồng lý tưởng",
        ],
        [
          "“家庭妇男”越来越多",
          "“jiātíng fùnán” yuèláiyuè duō",
          "“Đàn ông nội trợ” ngày càng nhiều",
        ],
        [
          "未婚小伙子努力想得到姑娘的喜爱",
          "wèihūn xiǎohuǒzi nǔlì xiǎng dédào gūniang de xǐ'ài",
          "Chàng trai chưa cưới cố gắng muốn được cô gái yêu mến",
        ],
      ],
    },
  ],
  ex3: [
    {
      q: "平等民主的夫妻关系需要一定的经济基础。",
      py: "Píngděng mínzhǔ de fūqī guānxi xūyào yídìng de jīngjì jīchǔ.",
      vi: "Quan hệ vợ chồng bình đẳng dân chủ cần có một nền tảng kinh tế nhất định.",
      a: true,
      why: "Bài nói thu nhập của vợ đã đặt nền tảng kinh tế cho quan hệ bình đẳng dân chủ.",
    },
    {
      q: "过去家庭中丈夫常常是“甩手大爷”。",
      py: "Guòqù jiātíng zhōng zhàngfu chángcháng shì “shuǎishǒu dàye”.",
      vi: "Trước đây trong gia đình chồng thường là “ông chủ phủi tay”.",
      a: true,
      why: "Bài nói hiện nay kiểu chồng này đã “không còn nhiều”, tức trước kia phổ biến.",
    },
    {
      q: "中国的传统是丈夫和妻子共同承担家务。",
      py: "Zhōngguó de chuántǒng shì zhàngfu hé qīzi gòngtóng chéngdān jiāwù.",
      vi: "Truyền thống Trung Quốc là vợ chồng cùng gánh vác việc nhà.",
      a: false,
      why: "Truyền thống là “nam chủ ngoại, nữ chủ nội”, và quan niệm này đang bị phá vỡ.",
    },
    {
      q: "在广州,55%的家庭主要是由丈夫做家务。",
      py: "Zài Guǎngzhōu, bǎi fēn zhī wǔshíwǔ de jiātíng zhǔyào shì yóu zhàngfu zuò jiāwù.",
      vi: "Ở Quảng Châu, 55% gia đình chủ yếu do chồng làm việc nhà.",
      a: false,
      why: "40% là chồng làm chính; 55% là vợ chồng chia nhau làm.",
    },
    {
      q: "在被调查的家庭中还有5%的丈夫是“甩手大爷”。",
      py: "Zài bèi diàochá de jiātíng zhōng hái yǒu bǎi fēn zhī wǔ de zhàngfu shì “shuǎishǒu dàye”.",
      vi: "Trong các gia đình được khảo sát vẫn còn 5% chồng là “ông chủ phủi tay”.",
      a: true,
      why: "5% gia đình chồng rất ít, thậm chí chẳng làm việc nhà, đúng nghĩa “甩手大爷”.",
    },
    {
      q: "因为妻子地位高了,所以丈夫不得不做家务。",
      py: "Yīnwèi qīzi dìwèi gāo le, suǒyǐ zhàngfu bùdébù zuò jiāwù.",
      vi: "Vì địa vị của vợ cao lên nên chồng buộc phải làm việc nhà.",
      a: false,
      why: "Lý do bài nêu: phụ nữ đều đi làm, lại phải lo nhà và con nên chồng không giúp thì khó đảm đương.",
    },
    {
      q: "“家庭妇男”是指没有工作,只在家中做家务的丈夫。",
      py: "“Jiātíng fùnán” shì zhǐ méiyǒu gōngzuò, zhǐ zài jiā zhōng zuò jiāwù de zhàngfu.",
      vi: "“Đàn ông nội trợ” là chỉ người chồng không đi làm, chỉ ở nhà làm việc nhà.",
      a: false,
      why: "Bài không nói họ thất nghiệp; họ được gọi là “模范丈夫”, người chồng chăm lo việc nhà.",
    },
    {
      q: "能干家务是现代女青年对男朋友的要求之一。",
      py: "Néng gàn jiāwù shì xiàndài nǚ qīngnián duì nán péngyou de yāoqiú zhī yī.",
      vi: "Biết làm việc nhà là một trong những yêu cầu của thanh nữ hiện đại đối với bạn trai.",
      a: true,
      why: "Bài nói các cô gái coi biết làm việc nhà là một tiêu chuẩn chọn chồng lý tưởng.",
    },
    {
      q: "现在的未婚小伙子喜爱做家务。",
      py: "Xiànzài de wèihūn xiǎohuǒzi xǐ'ài zuò jiāwù.",
      vi: "Chàng trai chưa cưới hiện nay thích làm việc nhà.",
      a: false,
      why: "Họ luyện tập để được các cô gái yêu mến, bài không nói họ tự thích làm.",
    },
  ],
  extras: [
    {
      kind: "fill",
      label: "练习(四) Điền chỗ trống",
      items: [
        {
          parts: [
            "妻子的",
            "成为家庭经济的重要",
            "之一,这为建立",
            "的夫妻关系",
            "了经济基础。",
          ],
          answers: ["收入", "来源", "平等民主", "打下"],
          py: "Qīzi de shōurù chéngwéi jiātíng jīngjì de zhòngyào láiyuán zhī yī, zhè wèi jiànlì píngděng mínzhǔ de fūqī guānxi dǎxià le jīngjì jīchǔ.",
          vi: "Thu nhập của vợ trở thành một nguồn quan trọng của kinh tế gia đình, điều này đặt nền tảng kinh tế cho quan hệ vợ chồng bình đẳng dân chủ.",
        },
        {
          parts: ["传统的“", "、", "”的观念正在被", "。"],
          answers: ["男主外", "女主内", "打破"],
          py: "Chuántǒng de “nán zhǔ wài, nǚ zhǔ nèi” de guānniàn zhèngzài bèi dǎpò.",
          vi: "Quan niệm truyền thống “nam chủ ngoại, nữ chủ nội” đang bị phá vỡ.",
        },
        {
          parts: ["如果丈夫不帮忙,现代妇女实在是", "做家务。"],
          answers: ["难以胜任"],
          py: "Rúguǒ zhàngfu bù bāngmáng, xiàndài fùnǚ shízài shì nányǐ shèngrèn zuò jiāwù.",
          vi: "Nếu chồng không giúp, phụ nữ hiện đại thật sự khó đảm đương việc nhà.",
        },
        {
          parts: ["生活现实", "了越来越多的“", "”。"],
          answers: ["造就", "家庭妇男"],
          py: "Shēnghuó xiànshí zàojiù le yuèláiyuè duō de “jiātíng fùnán”.",
          vi: "Thực tế cuộc sống đã tạo ra ngày càng nhiều “đàn ông nội trợ”.",
        },
        {
          parts: ["城市的女青年把", "作为她们寻找", "的标准之一。"],
          answers: ["会干家务", "理想丈夫"],
          py: "Chéngshì de nǚ qīngnián bǎ huì gàn jiāwù zuòwéi tāmen xúnzhǎo lǐxiǎng zhàngfu de biāozhǔn zhī yī.",
          vi: "Thanh nữ thành phố coi việc biết làm việc nhà là một trong những tiêu chuẩn tìm chồng lý tưởng.",
        },
      ],
    },
    {
      kind: "qa",
      label: "练习(五) Trả lời",
      items: [
        {
          q: "什么是“家庭妇男”?",
          qp: "Shénme shì “jiātíng fùnán”?",
          qv: "“Đàn ông nội trợ” là gì?",
          a: "“家庭妇男”是指愿意与妻子分担家务、甚至主要承担家务的丈夫,人们把他们叫做“模范丈夫”。",
          py: "“Jiātíng fùnán” shì zhǐ yuànyì yǔ qīzi fēndān jiāwù, shènzhì zhǔyào chéngdān jiāwù de zhàngfu, rénmen bǎ tāmen jiàozuò “mófàn zhàngfu”.",
          vi: "“Đàn ông nội trợ” chỉ những người chồng sẵn lòng chia sẻ việc nhà với vợ, thậm chí gánh phần chính việc nhà; người ta gọi họ là “người chồng mẫu mực”.",
        },
        {
          q: "现代家庭发生了什么样的变化?",
          qp: "Xiàndài jiātíng fāshēng le shénmeyàng de biànhuà?",
          qv: "Gia đình hiện đại đã có những thay đổi gì?",
          a: "夫妻在家庭中的地位越来越接近,“甩手大爷”式的丈夫已经不多见,丈夫一般都与妻子共同承担家务,传统的“男主外、女主内”观念正在被打破,在大城市男子干家务已经非常普遍。",
          py: "Fūqī zài jiātíng zhōng de dìwèi yuèláiyuè jiējìn, “shuǎishǒu dàye” shì de zhàngfu yǐjīng bù duō jiàn, zhàngfu yìbān dōu yǔ qīzi gòngtóng chéngdān jiāwù, chuántǒng de “nán zhǔ wài, nǚ zhǔ nèi” guānniàn zhèngzài bèi dǎpò, zài dà chéngshì nánzǐ gàn jiāwù yǐjīng fēicháng pǔbiàn.",
          vi: "Địa vị vợ chồng trong gia đình ngày càng gần nhau, kiểu chồng “phủi tay” không còn nhiều, chồng thường cùng vợ gánh việc nhà, quan niệm “nam chủ ngoại, nữ chủ nội” đang bị phá vỡ, ở thành phố lớn đàn ông làm việc nhà đã rất phổ biến.",
        },
        {
          q: "现代家庭发生变化的原因是什么?",
          qp: "Xiàndài jiātíng fāshēng biànhuà de yuányīn shì shénme?",
          qv: "Nguyên nhân khiến gia đình hiện đại thay đổi là gì?",
          a: "因为现在妇女基本上都有职业,收入成为家庭经济的重要来源;她们既要工作,又要做家务、带孩子,有的还经常出差,丈夫不帮忙实在难以胜任。",
          py: "Yīnwèi xiànzài fùnǚ jīběn shàng dōu yǒu zhíyè, shōurù chéngwéi jiātíng jīngjì de zhòngyào láiyuán; tāmen jì yào gōngzuò, yòu yào zuò jiāwù, dài háizi, yǒude hái jīngcháng chūchāi, zhàngfu bù bāngmáng shízài nányǐ shèngrèn.",
          vi: "Vì hiện nay phụ nữ về cơ bản đều có nghề nghiệp, thu nhập trở thành nguồn quan trọng của kinh tế gia đình; họ vừa phải đi làm, vừa phải làm việc nhà, trông con, có người còn thường đi công tác, chồng không giúp thì thật khó đảm đương.",
        },
        {
          q: "这种变化对社会带来的影响是什么?",
          qp: "Zhè zhǒng biànhuà duì shèhuì dàilái de yǐngxiǎng shì shénme?",
          qv: "Sự thay đổi này đem lại ảnh hưởng gì cho xã hội?",
          a: "社会上出现了越来越多的“家庭妇男”,形成了新的社会风气:一些女青年把会干家务当作理想丈夫的标准之一,一些未婚小伙子也提前训练,以便得到姑娘们的喜爱。",
          py: "Shèhuì shàng chūxiàn le yuèláiyuè duō de “jiātíng fùnán”, xíngchéng le xīn de shèhuì fēngqì: yìxiē nǚ qīngnián bǎ huì gàn jiāwù dàngzuò lǐxiǎng zhàngfu de biāozhǔn zhī yī, yìxiē wèihūn xiǎohuǒzi yě tíqián xùnliàn, yǐbiàn dédào gūniang men de xǐ'ài.",
          vi: "Xã hội xuất hiện ngày càng nhiều “đàn ông nội trợ”, hình thành phong khí mới: một số thanh nữ coi biết làm việc nhà là một tiêu chuẩn của người chồng lý tưởng, một số chàng trai chưa cưới cũng luyện tập trước để được các cô gái yêu mến.",
        },
      ],
    },
  ],
};

export default function Lesson3() {
  return <LessonViewer lesson={lesson} />;
}
