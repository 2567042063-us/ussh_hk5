"use client";

import { useRef, useState, type KeyboardEvent } from "react";

type Raw = [string, string, string, string[][], string, string];
type Item = {
  g: string;
  s: string;
  v: string;
  a: string[][];
  p: string;
  y: string;
  val: string[];
  res: boolean | null;
  oks: (boolean | null)[];
  first: boolean | null;
  rev: boolean;
  hint: boolean;
};

const IMG: Raw[] = [
  [
    "Ảnh",
    "昨天买来的那本新书你{0}哪儿了？",
    "Cuốn sách mới mua hôm qua cậu để ở đâu rồi?",
    [["放在", "放到", "搁在", "丢在", "忘在", "落在"]],
    "fàng zài",
    "Zuótiān mǎilái de nà běn xīn shū nǐ fàng zài nǎr le?",
  ],
  [
    "Ảnh",
    "这张画儿咱们{0}什么地方呢？",
    "Bức tranh này mình treo ở chỗ nào nhỉ?",
    [["挂在", "挂到", "放在", "摆在", "贴在", "放到"]],
    "guà zài",
    "Zhè zhāng huàr zánmen guà zài shénme dìfang ne?",
  ],
  [
    "Ảnh",
    "那本书我已经{0}她了。",
    "Cuốn sách đó tớ đã trả cho cô ấy rồi.",
    [["还给", "送给", "借给", "交给", "寄给", "带给", "发给"]],
    "huán gěi",
    "Nà běn shū wǒ yǐjīng huán gěi tā le.",
  ],
  [
    "Ảnh",
    "这张照片我{0}墙上，怎么样？",
    "Tấm ảnh này tớ dán lên tường, được không?",
    [["贴在", "挂在", "放在", "摆在", "贴到", "挂到"]],
    "tiē zài",
    "Zhè zhāng zhàopiàn wǒ tiē zài qiáng shang, zěnmeyàng?",
  ],
  [
    "Ảnh",
    "你要的词典我给你{0}了。",
    "Cuốn từ điển cậu cần tớ mua được cho cậu rồi.",
    [
      [
        "买到",
        "买着",
        "找到",
        "找着",
        "带来",
        "买来",
        "拿来",
        "送来",
        "借来",
        "带到",
      ],
    ],
    "mǎi dào",
    "Nǐ yào de cídiǎn wǒ gěi nǐ mǎi dào le.",
  ],
  [
    "Ảnh",
    "山本过生日，我们{0}她一件什么礼物呢？",
    "Sinh nhật Yamamoto, tụi mình tặng cô ấy món quà gì nhỉ?",
    [["送给", "买给"]],
    "sòng gěi",
    "Shānběn guò shēngrì, wǒmen sòng gěi tā yí jiàn shénme lǐwù ne?",
  ],
  [
    "Ảnh",
    "今天的生词我还没{0}呢。",
    "Từ mới hôm nay tớ còn chưa chuẩn bị xong.",
    [
      [
        "预习好",
        "预习完",
        "复习好",
        "复习完",
        "记住",
        "学会",
        "学好",
        "学完",
        "准备好",
        "念熟",
        "读熟",
        "背熟",
        "写完",
        "看完",
        "记好",
      ],
    ],
    "yùxí hǎo",
    "Jīntiān de shēngcí wǒ hái méi yùxí hǎo ne.",
  ],
  [
    "Ảnh",
    "那几张照片我已经{0}她了。",
    "Mấy tấm ảnh đó tớ đã gửi cho cô ấy rồi.",
    [["发给", "送给", "交给", "寄给", "还给", "带给", "借给"]],
    "fā gěi",
    "Nà jǐ zhāng zhàopiàn wǒ yǐjīng fā gěi tā le.",
  ],
];
const BANK: Raw[] = [
  [
    "完 wán",
    "我都{0}了，但是没都做对。",
    "Tớ làm xong hết rồi, nhưng không đúng hết.",
    [["做完"]],
    "zuòwán",
    "Wǒ dōu zuòwán le, dànshì méi dōu zuòduì.",
  ],
  [
    "完 wán",
    "题太多了，我没有{0}。",
    "Nhiều câu quá, tớ chưa làm xong.",
    [["做完"]],
    "zuòwán",
    "Tí tài duō le, wǒ méiyǒu zuòwán.",
  ],
  [
    "完 wán",
    "今天的作业我{0}了。",
    "Bài tập hôm nay tớ làm xong rồi.",
    [["做完"]],
    "zuòwán",
    "Jīntiān de zuòyè wǒ zuòwán le.",
  ],
  [
    "完 wán",
    "你{0}了没有？",
    "Cậu xem/đọc xong chưa?",
    [["看完"]],
    "kànwán",
    "Nǐ kànwán le méiyǒu?",
  ],
  [
    "完 wán",
    "{0}电视剧再洗吧。",
    "Xem xong phim rồi hãy giặt.",
    [["看完"]],
    "kànwán",
    "Kànwán diànshìjù zài xǐ ba.",
  ],
  [
    "完 wán",
    "{0}晚饭，我和玛丽{1}宿舍。",
    "Ăn tối xong, tớ và Mary về ký túc xá.",
    [["吃完"], ["回到"]],
    "chīwán + huídào",
    "Chīwán wǎnfàn, wǒ hé Mǎlì huídào sùshè.",
  ],
  [
    "完 wán",
    "{0}晚饭我们一起去跳舞吧。",
    "Ăn tối xong chúng mình cùng đi khiêu vũ nhé.",
    [["吃完"]],
    "chīwán",
    "Chīwán wǎnfàn wǒmen yìqǐ qù tiàowǔ ba.",
  ],
  [
    "完 wán",
    "我的衣服还没有{0}呢，还得给我妹妹回信。",
    "Quần áo tớ còn chưa giặt xong, còn phải trả lời thư cho em gái.",
    [["洗完", "洗好"]],
    "xǐwán",
    "Wǒ de yīfu hái méiyǒu xǐwán ne, hái děi gěi wǒ mèimei huí xìn.",
  ],
  [
    "完 wán",
    "这杯{0}了。",
    "Cốc này uống hết rồi.",
    [["喝完"]],
    "hēwán",
    "Zhè bēi hēwán le.",
  ],
  [
    "完 wán",
    "这杯没{0}。",
    "Cốc này chưa uống hết.",
    [["喝完"]],
    "hēwán",
    "Zhè bēi méi hēwán.",
  ],
  [
    "完 wán",
    "我{0}一个故事，问你几个问题，看你能不能答对。",
    "Tớ đọc xong một câu chuyện thì hỏi cậu vài câu, xem cậu trả lời đúng được không.",
    [["念完"]],
    "niànwán",
    "Wǒ niànwán yí ge gùshi, wèn nǐ jǐ ge wèntí, kàn nǐ néng bu néng dáduì.",
  ],
  [
    "完 wán",
    "我们还没有{0}，就听见安娜在门外叫我们。",
    "Chúng tớ chưa luyện xong thì nghe thấy Anna gọi ngoài cửa.",
    [["练习完"]],
    "liànxí wán",
    "Wǒmen hái méiyǒu liànxíwán, jiù tīngjiàn Ānnà zài mén wài jiào wǒmen.",
  ],
  [
    "完 wán",
    "{0}，我们三个就去礼堂看电影了。",
    "Nói xong, ba đứa tớ đi hội trường xem phim.",
    [["说完"]],
    "shuōwán",
    "Shuōwán, wǒmen sān ge jiù qù lǐtáng kàn diànyǐng le.",
  ],
  [
    "完 wán",
    "第一本书你{0}了吗？",
    "Cuốn thứ nhất cậu học xong chưa?",
    [["学完"]],
    "xuéwán",
    "Dì-yī běn shū nǐ xuéwán le ma?",
  ],
  [
    "完 wán",
    "我{0}这本书了。",
    "Tớ học xong cuốn sách này rồi.",
    [["学完"]],
    "xuéwán",
    "Wǒ xuéwán zhè běn shū le.",
  ],
  [
    "完 wán",
    "这一课的录音你{0}了没有？",
    "Bản ghi âm bài này cậu nghe xong chưa?",
    [["听完"]],
    "tīngwán",
    "Zhè yí kè de lùyīn nǐ tīngwán le méiyǒu?",
  ],
  [
    "完 wán",
    "今天的汉字你{0}了没有？",
    "Chữ Hán hôm nay cậu viết xong chưa?",
    [["写完"]],
    "xiěwán",
    "Jīntiān de Hànzì nǐ xiěwán le méiyǒu?",
  ],
  [
    "完 wán",
    "我一{0}就还给张东了。",
    "Tớ vừa dùng xong là trả cho Trương Đông ngay.",
    [["用完"]],
    "yòngwán",
    "Wǒ yí yòngwán jiù huángěi Zhāng Dōng le.",
  ],
  [
    "完 wán",
    "昨天你{0}签证放在什么地方了？",
    "Hôm qua làm xong visa cậu để ở đâu?",
    [["办完", "办好"]],
    "bànwán",
    "Zuótiān nǐ bànwán qiānzhèng fàng zài shénme dìfang le?",
  ],
  [
    "懂 dǒng",
    "很多句子我没{0}。",
    "Nhiều câu tớ nghe không hiểu.",
    [["听懂"]],
    "tīngdǒng",
    "Hěn duō jùzi wǒ méi tīngdǒng.",
  ],
  [
    "懂 dǒng",
    "我{0}了老师的话。",
    "Tớ nghe hiểu lời thầy giáo.",
    [["听懂"]],
    "tīngdǒng",
    "Wǒ tīngdǒngle lǎoshī de huà.",
  ],
  [
    "懂 dǒng",
    "我念了一个故事，玛丽{0}了。",
    "Tớ đọc một câu chuyện, Mary nghe hiểu.",
    [["听懂"]],
    "tīngdǒng",
    "Wǒ niànle yí ge gùshi, Mǎlì tīngdǒng le.",
  ],
  [
    "懂 dǒng",
    "都{0}了吗？",
    "Hiểu hết rồi à?",
    [["看懂"]],
    "kàndǒng",
    "Dōu kàndǒng le ma?",
  ],
  [
    "懂 dǒng",
    "这课课文我没有{0}。",
    "Bài khóa này tớ đọc chưa hiểu.",
    [["看懂"]],
    "kàndǒng",
    "Zhè kè kèwén wǒ méiyǒu kàndǒng.",
  ],
  [
    "见 jiàn",
    "我没{0}你的词典。",
    "Tớ không thấy từ điển của cậu.",
    [["看见", "看到"]],
    "kànjiàn",
    "Wǒ méi kànjiàn nǐ de cídiǎn.",
  ],
  [
    "见 jiàn",
    "你{0}玛丽了没有？",
    "Cậu thấy Mary chưa?",
    [["看见", "看到"]],
    "kànjiàn",
    "Nǐ kànjiàn Mǎlì le méiyǒu?",
  ],
  [
    "见 jiàn",
    "我{0}玛丽，她在操场打太极拳呢。",
    "Tớ thấy Mary, cô ấy đang tập thái cực quyền ở sân.",
    [["看见", "看到"]],
    "kànjiàn",
    "Wǒ kànjiàn Mǎlì, tā zài cāochǎng dǎ tàijíquán ne.",
  ],
  [
    "见 jiàn",
    "你没有{0}吗？安娜在叫你。",
    "Cậu không nghe thấy à? Anna đang gọi cậu.",
    [["听见", "听到"]],
    "tīngjiàn",
    "Nǐ méiyǒu tīngjiàn ma? Ānnà zài jiào nǐ.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "快{0}电脑，看看电视剧吧。",
    "Mau bật máy tính lên xem phim đi.",
    [["打开"]],
    "dǎkāi",
    "Kuài dǎkāi diànnǎo, kànkan diànshìjù ba.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "{0}电脑，好吗？",
    "Bật máy tính lên nhé?",
    [["打开"]],
    "dǎkāi",
    "Dǎkāi diànnǎo, hǎo ma?",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "我{0}门问她:“什么事？”",
    "Tớ mở cửa hỏi cô ấy: “Có chuyện gì?”",
    [["开开"]],
    "kāikai",
    "Wǒ kāikai mén wèn tā: “Shénme shì?”",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "他{0}门了。",
    "Anh ấy đóng cửa rồi.",
    [["关上"]],
    "guānshang",
    "Tā guānshang mén le.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "{0}门吧。",
    "Đóng cửa lại đi.",
    [["关上"]],
    "guānshang",
    "Guānshang mén ba.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "外边风很大，{0}窗户吧。",
    "Bên ngoài gió to, đóng cửa sổ lại đi.",
    [["关上"]],
    "guānshang",
    "Wàibian fēng hěn dà, guānshang chuānghu ba.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "请同学们{0}书，现在听写。",
    "Các bạn gập sách lại, bây giờ nghe viết.",
    [["合上"]],
    "héshang",
    "Qǐng tóngxuémen héshang shū, xiànzài tīngxiě.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "她念了一个故事，{0}书，问我听懂了没有。",
    "Cô ấy đọc một câu chuyện, gập sách lại, hỏi tớ nghe hiểu chưa.",
    [["合上"]],
    "héshang",
    "Tā niànle yí ge gùshi, héshang shū, wèn wǒ tīngdǒngle méiyǒu.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "请在这儿{0}你的名字。",
    "Xin viết tên cậu vào đây.",
    [["写上"]],
    "xiěshang",
    "Qǐng zài zhèr xiěshang nǐ de míngzi.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "你{0}这件衣服试试。",
    "Cậu mặc bộ này vào thử đi.",
    [["穿上"]],
    "chuānshang",
    "Nǐ chuānshang zhè jiàn yīfu shìshi.",
  ],
  [
    "开 / 上 (mở, đóng, dính vào)",
    "他{0}衣服了。",
    "Anh ấy mặc quần áo vào rồi.",
    [["穿上"]],
    "chuānshang",
    "Tā chuānshang yīfu le.",
  ],
  [
    "到 dào",
    "我昨天很晚才{0}家。",
    "Hôm qua tớ về đến nhà rất muộn.",
    [["回到"]],
    "huídào",
    "Wǒ zuótiān hěn wǎn cái huídào jiā.",
  ],
  [
    "到 dào",
    "我一{0}家不是就{1}你了吗？",
    "Vừa về đến nhà tớ chẳng phải đã đưa cho cậu rồi sao?",
    [["回到"], ["交给"]],
    "huídào + jiāogěi",
    "Wǒ yì huídào jiā bú shì jiù jiāogěi nǐ le ma?",
  ],
  [
    "到 dào",
    "我{0}王老师了。",
    "Tớ tìm được thầy Vương rồi.",
    [["找到", "找着"]],
    "zhǎodào",
    "Wǒ zhǎodào Wáng lǎoshī le.",
  ],
  [
    "到 dào",
    "是在包儿里{0}的吗？",
    "Là tìm thấy trong túi à?",
    [["找到", "找着"]],
    "zhǎodào",
    "Shì zài bāor lǐ zhǎodào de ma?",
  ],
  [
    "到 dào",
    "罗兰{0}那本书了。",
    "Lô Lan mua được cuốn sách đó rồi.",
    [["买到", "买着"]],
    "mǎidào",
    "Luólán mǎidào nà běn shū le.",
  ],
  [
    "到 dào",
    "你要的那本书我给你{0}了。",
    "Cuốn sách cậu cần tớ mua được cho cậu rồi.",
    [["买到", "买着"]],
    "mǎidào",
    "Nǐ yào de nà běn shū wǒ gěi nǐ mǎidào le.",
  ],
  [
    "到 dào",
    "{0}有意思的地方，就想笑。",
    "Xem đến chỗ thú vị là muốn cười.",
    [["看到"]],
    "kàndào",
    "Kàndào yǒu yìsi de dìfang, jiù xiǎng xiào.",
  ],
  [
    "到 dào",
    "我们{0}九点才看完。",
    "Chúng tớ xem đến chín giờ mới xem xong.",
    [["看到"]],
    "kàndào",
    "Wǒmen kàndào jiǔ diǎn cái kànwán.",
  ],
  [
    "到 dào",
    "我{0}一半儿，肚子疼很厉害，就去医院了。",
    "Tớ xem được một nửa thì đau bụng dữ dội nên đi bệnh viện.",
    [["看到"]],
    "kàndào",
    "Wǒ kàndào yíbànr, dùzi téng hěn lìhai, jiù qù yīyuàn le.",
  ],
  [
    "到 dào",
    "我们{0}二十九课了。",
    "Chúng tớ học đến bài 29 rồi.",
    [["学到"]],
    "xuédào",
    "Wǒmen xuédào èrshíjiǔ kè le.",
  ],
  [
    "到 dào",
    "你们{0}第几课了？",
    "Các cậu học đến bài mấy rồi?",
    [["学到"]],
    "xuédào",
    "Nǐmen xuédào dì-jǐ kè le?",
  ],
  [
    "到 dào",
    "我每天晚上都{0}十一二点。",
    "Tối nào tớ cũng học đến mười một, mười hai giờ.",
    [["学到"]],
    "xuédào",
    "Wǒ měi tiān wǎnshang dōu xuédào shíyī èr diǎn.",
  ],
  [
    "到 dào",
    "星期六早上我{0}九点才起床。",
    "Sáng thứ bảy tớ ngủ đến chín giờ mới dậy.",
    [["睡到"]],
    "shuìdào",
    "Xīngqīliù zǎoshang wǒ shuìdào jiǔ diǎn cái qǐchuáng.",
  ],
  [
    "到 dào",
    "昨天晚上，我{0}十点。",
    "Tối qua tớ làm việc đến mười giờ.",
    [["工作到"]],
    "gōngzuò dào",
    "Zuótiān wǎnshang, wǒ gōngzuòdào shí diǎn.",
  ],
  [
    "到 dào",
    "我打算在这儿{0}明年七月。",
    "Tớ định học ở đây đến tháng bảy năm sau.",
    [["学习到"]],
    "xuéxí dào",
    "Wǒ dǎsuan zài zhèr xuéxídào míngnián qī yuè.",
  ],
  [
    "到 dào",
    "是我昨天晚上{0}口袋里的。",
    "Là tối qua tớ đặt vào trong túi áo.",
    [["放到", "放在"]],
    "fàngdào",
    "Shì wǒ zuótiān wǎnshang fàngdào kǒudài lǐ de.",
  ],
  [
    "到 dào",
    "你看看是不是{0}桌子下边了。",
    "Cậu xem có phải rơi xuống dưới bàn không.",
    [["掉到"]],
    "diàodào",
    "Nǐ kànkan shì bu shì diàodào zhuōzi xiàbian le.",
  ],
  [
    "到 dào",
    "{0}什么程度？",
    "Mê đến mức nào?",
    [["迷到"]],
    "mídào",
    "Mídào shénme chéngdù?",
  ],
  [
    "到 dào",
    "有时候{0}了发狂的程度。",
    "Đôi khi mê đến mức phát điên.",
    [["迷到"]],
    "mídào",
    "Yǒu shíhou mídàole fā kuáng de chéngdù.",
  ],
  [
    "给 gěi",
    "作业你{0}老师了没有？",
    "Bài tập cậu nộp cho thầy chưa?",
    [["交给"]],
    "jiāogěi",
    "Zuòyè nǐ jiāogěi lǎoshī le méiyǒu?",
  ],
  [
    "给 gěi",
    "{0}老师了。",
    "Nộp rồi.",
    [["交给"]],
    "jiāogěi",
    "Jiāogěi lǎoshī le.",
  ],
  [
    "给 gěi",
    "那本书我一看完就{0}你了，你怎么忘了？",
    "Cuốn sách đó tớ vừa đọc xong là trả cậu rồi, sao cậu quên?",
    [["还给"]],
    "huángěi",
    "Nà běn shū wǒ yí kànwán jiù huángěi nǐ le, nǐ zěnme wàng le?",
  ],
  [
    "给 gěi",
    "一个同学{0}我的。",
    "Một bạn học tặng tớ.",
    [["送给"]],
    "sònggěi",
    "Yí ge tóngxué sònggěi wǒ de.",
  ],
  [
    "给 gěi",
    "田芳{0}你的那本书你看完了没有？",
    "Cuốn sách Điền Phương cho cậu mượn cậu đọc xong chưa?",
    [["借给"]],
    "jiègěi",
    "Tián Fāng jiègěi nǐ de nà běn shū nǐ kànwán le méiyǒu?",
  ],
  [
    "给 gěi",
    "田芳{0}她一本书。",
    "Điền Phương cho cô ấy mượn một cuốn sách.",
    [["借给"]],
    "jiègěi",
    "Tián Fāng jiègěi tā yì běn shū.",
  ],
  [
    "给 gěi",
    "我{0}你的邮件，你收到了没有？",
    "Thư tớ gửi cậu, cậu nhận được chưa?",
    [["发给"]],
    "fāgěi",
    "Wǒ fāgěi nǐ de yóujiàn, nǐ shōudàole méiyǒu?",
  ],
  [
    "成 chéng",
    "糟糕，写错了，是这个“得”，我{0}这个“的”了。",
    "Chết rồi, viết sai, là chữ “得”, tớ viết thành chữ “的”.",
    [["写成"]],
    "xiěchéng",
    "Zāogāo, xiěcuò le, shì zhège “de”, wǒ xiěchéng zhège “de” le.",
  ],
  [
    "成 chéng",
    "这是个“我”字，你{0}“找”字了。",
    "Đây là chữ “我”, cậu viết thành chữ “找”.",
    [["写成"]],
    "xiěchéng",
    "Zhè shì ge “wǒ” zì, nǐ xiěchéng “zhǎo” zì le.",
  ],
  [
    "成 chéng",
    "“是不是”，他总{0}“四不四”。",
    "“Shì bu shì”, anh ấy toàn nói thành “sì bu sì”.",
    [["说成"]],
    "shuōchéng",
    "“Shì bu shì”, tā zǒng shuōchéng “sì bu sì”.",
  ],
  [
    "成 chéng",
    "这篇会话课文，老师要我们{0}叙述体。",
    "Bài khóa hội thoại này thầy bảo chúng tớ chuyển thành thể tự sự.",
    [["改成"]],
    "gǎichéng",
    "Zhè piān huìhuà kèwén, lǎoshī yào wǒmen gǎichéng xùshùtǐ.",
  ],
  [
    "成 chéng",
    "“ān (安)”这个音，我总是{0}“āng”。",
    "Âm “ān (安)” tớ toàn phát âm thành “āng”.",
    [["发成"]],
    "fāchéng",
    "“Ān (安)” zhège yīn, wǒ zǒngshì fāchéng “āng”.",
  ],
  [
    "成 chéng",
    "麻烦您给我{0}零钱。",
    "Phiền bạn đổi giúp tôi thành tiền lẻ.",
    [["换成"]],
    "huànchéng",
    "Máfan nín gěi wǒ huànchéng língqián.",
  ],
  [
    "成 chéng",
    "{0}十块一张的就行。",
    "Đổi thành tờ mười tệ là được.",
    [["换成"]],
    "huànchéng",
    "Huànchéng shí kuài yì zhāng de jiù xíng.",
  ],
  [
    "成 chéng",
    "最后{0}了吗？",
    "Cuối cùng đi được không?",
    [["去成"]],
    "qùchéng",
    "Zuìhòu qùchéng le ma?",
  ],
  [
    "成 chéng",
    "这座大楼是什么时候{0}的？",
    "Tòa nhà này xây xong từ khi nào?",
    [["建成"]],
    "jiànchéng",
    "Zhè zuò dàlóu shì shénme shíhou jiànchéng de?",
  ],
  [
    "好 hǎo",
    "这次没{0}。",
    "Lần này tớ thi không tốt.",
    [["考好"]],
    "kǎohǎo",
    "Zhè cì méi kǎohǎo.",
  ],
  [
    "好 hǎo",
    "这次我没{0}，因为考试前我病了。",
    "Lần này tớ thi không tốt vì trước kỳ thi tớ bị ốm.",
    [["考好"]],
    "kǎohǎo",
    "Zhè cì wǒ méi kǎohǎo, yīnwèi kǎoshì qián wǒ bìng le.",
  ],
  [
    "好 hǎo",
    "我{0}了。",
    "Tớ giặt xong rồi.",
    [["洗好", "洗完"]],
    "xǐhǎo",
    "Wǒ xǐhǎo le.",
  ],
  [
    "好 hǎo",
    "我还没{0}呢！",
    "Tớ còn chưa giặt xong đâu!",
    [["洗好", "洗完"]],
    "xǐhǎo",
    "Wǒ hái méi xǐhǎo ne!",
  ],
  [
    "好 hǎo",
    "你的衣服{0}了吗？",
    "Quần áo cậu giặt xong chưa?",
    [["洗好", "洗完"]],
    "xǐhǎo",
    "Nǐ de yīfu xǐhǎo le ma?",
  ],
  [
    "好 hǎo",
    "昨天晚上我没有{0}。",
    "Tối qua tớ ngủ không ngon.",
    [["睡好"]],
    "shuìhǎo",
    "Zuótiān wǎnshang wǒ méiyǒu shuìhǎo.",
  ],
  [
    "好 hǎo",
    "我跟老板{0}了。",
    "Tớ đã bàn bạc xong với sếp.",
    [["商量好"]],
    "shāngliang hǎo",
    "Wǒ gēn lǎobǎn shāngliang hǎo le.",
  ],
  [
    "好 hǎo",
    "你的签证{0}了没有？",
    "Visa của cậu làm xong chưa?",
    [["办好", "办完"]],
    "bànhǎo",
    "Nǐ de qiānzhèng bànhǎo le méiyǒu?",
  ],
  [
    "好 hǎo",
    "请大家{0}笔和本子，现在听写句子。",
    "Mọi người chuẩn bị sẵn bút và vở, bây giờ nghe viết câu.",
    [["准备好"]],
    "zhǔnbèihǎo",
    "Qǐng dàjiā zhǔnbèihǎo bǐ hé běnzi, xiànzài tīngxiě jùzi.",
  ],
  [
    "好 hǎo",
    "明天的生词你{0}了没有？",
    "Từ mới ngày mai cậu chuẩn bị xong chưa?",
    [["预习好"]],
    "yùxíhǎo",
    "Míngtiān de shēngcí nǐ yùxíhǎo le méiyǒu?",
  ],
  [
    "好 hǎo",
    "妈妈，晚饭{0}了吗？",
    "Mẹ ơi, cơm tối làm xong chưa?",
    [["做好", "做完"]],
    "zuòhǎo",
    "Māma, wǎnfàn zuòhǎo le ma?",
  ],
  [
    "对 / 错 duì / cuò",
    "这道题我没{0}。",
    "Câu này tớ làm không đúng.",
    [["做对"]],
    "zuòduì",
    "Zhè dào tí wǒ méi zuòduì.",
  ],
  [
    "对 / 错 duì / cuò",
    "这道题你{0}了没有？",
    "Câu này cậu làm đúng chưa?",
    [["做对"]],
    "zuòduì",
    "Zhè dào tí nǐ zuòduì le méiyǒu?",
  ],
  [
    "对 / 错 duì / cuò",
    "我{0}了两道题。",
    "Tớ làm sai hai câu.",
    [["做错"]],
    "zuòcuò",
    "Wǒ zuòcuòle liǎng dào tí.",
  ],
  [
    "对 / 错 duì / cuò",
    "我查一个词，看看{0}了没有。",
    "Tớ tra một từ xem viết đúng chưa.",
    [["写对"]],
    "xiěduì",
    "Wǒ chá yí ge cí, kànkan xiěduìle méiyǒu.",
  ],
  [
    "对 / 错 duì / cuò",
    "糟糕，{0}了。",
    "Chết rồi, viết sai rồi.",
    [["写错"]],
    "xiěcuò",
    "Zāogāo, xiěcuò le.",
  ],
  [
    "对 / 错 duì / cuò",
    "我只{0}了一个句子。",
    "Tớ chỉ dịch đúng được một câu.",
    [["翻译对"]],
    "fānyìduì",
    "Wǒ zhǐ fānyìduìle yí ge jùzi.",
  ],
  [
    "对 / 错 duì / cuò",
    "看你能不能{0}。",
    "Xem cậu có trả lời đúng được không.",
    [["答对"]],
    "dáduì",
    "Kàn nǐ néng bu néng dáduì.",
  ],
  [
    "对 / 错 duì / cuò",
    "问了她五个问题，她都{0}了。",
    "Hỏi cô ấy năm câu, cô ấy đều trả lời đúng.",
    [["答对"]],
    "dáduì",
    "Wènle tā wǔ ge wèntí, tā dōu dáduì le.",
  ],
  [
    "对 / 错 duì / cuò",
    "我答对了四个，{0}了一个。",
    "Tớ trả lời đúng bốn câu, sai một câu.",
    [["答错", "回答错"]],
    "dácuò",
    "Wǒ dáduìle sì ge, dácuòle yí ge.",
  ],
  [
    "对 / 错 duì / cuò",
    "我{0}了两道题。",
    "Tớ trả lời sai hai câu.",
    [["答错", "回答错"]],
    "dácuò",
    "Wǒ dácuòle liǎng dào tí.",
  ],
  [
    "对 / 错 duì / cuò",
    "这个问题我{0}了。",
    "Câu hỏi này tớ trả lời sai.",
    [["回答错", "答错"]],
    "huídá cuò",
    "Zhège wèntí wǒ huídá cuò le.",
  ],
  [
    "对 / 错 duì / cuò",
    "我{0}题了。",
    "Tớ xem nhầm đề rồi.",
    [["看错"]],
    "kàncuò",
    "Wǒ kàncuò tí le.",
  ],
  [
    "对 / 错 duì / cuò",
    "对不起，我{0}时间了，所以{1}了。",
    "Xin lỗi, tớ xem nhầm giờ nên đến muộn.",
    [["看错"], ["来晚"]],
    "kàncuò + láiwǎn",
    "Duìbuqǐ, wǒ kàncuò shíjiān le, suǒyǐ lái wǎn le.",
  ],
  [
    "对 / 错 duì / cuò",
    "对不起，我{0}了。",
    "Xin lỗi, tôi gọi nhầm.",
    [["打错"]],
    "dǎcuò",
    "Duìbuqǐ, wǒ dǎcuò le.",
  ],
  [
    "熟 / 干净 (tính từ khác)",
    "课文{0}了没有？",
    "Bài khóa đọc thuộc chưa?",
    [["念熟"]],
    "niànshú",
    "Kèwén niànshú le méiyǒu?",
  ],
  [
    "熟 / 干净 (tính từ khác)",
    "这件衣服没{0}。",
    "Cái áo này giặt chưa sạch.",
    [["洗干净"]],
    "xǐ gānjìng",
    "Zhè jiàn yīfu méi xǐ gānjìng.",
  ],
  [
    "在 zài",
    "{0}我的手提包儿里了。",
    "Để trong túi xách của tớ rồi.",
    [["放在", "放到"]],
    "fàngzài",
    "Fàngzài wǒ de shǒutíbāor lǐ le.",
  ],
  [
    "在 zài",
    "我的护照你{0}哪儿了？",
    "Hộ chiếu của tớ cậu để đâu rồi?",
    [["放在", "放到"]],
    "fàngzài",
    "Wǒ de hùzhào nǐ fàngzài nǎr le?",
  ],
  [
    "在 zài",
    "就{0}你的口袋里了。",
    "Để trong túi áo cậu đấy.",
    [["放在", "放到"]],
    "fàngzài",
    "Jiù fàngzài nǐ de kǒudài lǐ le.",
  ],
  [
    "在 zài",
    "这张画儿我们{0}哪儿呢？",
    "Bức tranh này mình treo ở đâu nhỉ?",
    [["挂在"]],
    "guàzài",
    "Zhè zhāng huàr wǒmen guàzài nǎr ne?",
  ],
  [
    "在 zài",
    "{0}这儿吧。",
    "Treo ở đây đi.",
    [["挂在"]],
    "guàzài",
    "Guàzài zhèr ba.",
  ],
  [
    "在 zài",
    "老师的电话号码我忘了，因为我没{0}本子上。",
    "Số điện thoại thầy tớ quên mất vì tớ không ghi vào vở.",
    [["记在"]],
    "jìzài",
    "Lǎoshī de diànhuà hàomǎ wǒ wàng le, yīnwèi wǒ méi jìzài běnzi shàng.",
  ],
  [
    "在 zài",
    "汽车{0}楼下。",
    "ô tô đỗ ở dưới tòa nhà",
    [["停在"]],
    "tíngzài",
    "qìchē tíngzài lóu xià",
  ],
  [
    "在 zài",
    "原来是他到山上去砍柴时，{0}山上了。",
    "Hóa ra lúc ông ta lên núi đốn củi đã làm rơi ở trên núi.",
    [["丢在"]],
    "diūzài",
    "Yuánlái shì tā dào shān shàng qù kǎn chái shí, diūzài shān shàng le.",
  ],
  [
    "着 zháo",
    "我找了半天也没{0}。",
    "Tớ tìm cả buổi mà vẫn không tìm thấy.",
    [["找着", "找到"]],
    "zhǎozháo",
    "Wǒ zhǎole bàntiān yě méi zhǎozháo.",
  ],
  [
    "着 zháo",
    "我的护照你给我{0}了没有？",
    "Hộ chiếu của tớ cậu tìm giúp được chưa?",
    [["找着", "找到"]],
    "zhǎozháo",
    "Wǒ de hùzhào nǐ gěi wǒ zhǎozháo le méiyǒu?",
  ],
  [
    "着 zháo",
    "你要的那本书我给你{0}了。",
    "Cuốn sách cậu cần tớ mua được cho cậu rồi.",
    [["买着", "买到"]],
    "mǎizháo",
    "Nǐ yào de nà běn shū wǒ gěi nǐ mǎizháo le.",
  ],
  [
    "着 zháo",
    "电影票你{0}了吗？",
    "Vé phim cậu mua được chưa?",
    [["买着", "买到"]],
    "mǎizháo",
    "Diànyǐng piào nǐ mǎizháo le ma?",
  ],
  [
    "着 zháo",
    "你{0}了吗？",
    "Cậu ngủ rồi à?",
    [["睡着"]],
    "shuìzháo",
    "Nǐ shuìzháo le ma?",
  ],
  [
    "着 zháo",
    "照片你{0}了没有？",
    "Ảnh cậu lấy được chưa?",
    [["拿着"]],
    "názháo",
    "Zhàopiàn nǐ názháo le méiyǒu?",
  ],
  [
    "着 zháo",
    "房子你{0}了没有？",
    "Nhà cậu thuê được chưa?",
    [["租着"]],
    "zūzháo",
    "Fángzi nǐ zūzháo le méiyǒu?",
  ],
  [
    "早 / 晚 zǎo / wǎn",
    "我没{0}。",
    "Tôi đến không muộn.",
    [["来晚"]],
    "láiwǎn",
    "Wǒ méi lái wǎn.",
  ],
  [
    "早 / 晚 zǎo / wǎn",
    "你{0}了没有？",
    "Anh đến muộn phải không?",
    [["来晚"]],
    "láiwǎn",
    "Nǐ lái wǎn le méiyǒu?",
  ],
  [
    "早 / 晚 zǎo / wǎn",
    "对不起，我{0}了。",
    "Xin lỗi, tôi đến muộn rồi.",
    [["来晚"]],
    "láiwǎn",
    "Duìbuqǐ, wǒ lái wǎn le.",
  ],
  [
    "早 / 晚 zǎo / wǎn",
    "他没{0}。",
    "Anh ấy ngủ không sớm.",
    [["睡早"]],
    "shuìzǎo",
    "Tā méi shuì zǎo.",
  ],
];
const PER = 8;
const GROUPS = Array.from(new Set(BANK.map((d) => d[0])));

const norm = (s?: string) =>
  (s || "").replace(/[\s,.，。!?！？、:：;；"“”'’]/g, "");
const shuf = <T,>(a: T[]): T[] => {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
const mk = (d: Raw): Item => ({
  g: d[0],
  s: d[1],
  v: d[2],
  a: d[3],
  p: d[4],
  y: d[5],
  val: [],
  res: null,
  oks: [],
  first: null,
  rev: false,
  hint: false,
});
const build = (f: string): Item[] => {
  const img = IMG.map(mk);
  const rest = shuf(BANK.filter((d) => !f || d[0] === f)).map(mk);
  return f === "" ? img.concat(rest) : f === "Ảnh" ? img : rest;
};

function Answer({ it }: { it: Item }) {
  return (
    <>
      {it.s
        .split(/\{(\d+)\}/)
        .map((t, i) => (i % 2 === 0 ? t : <b key={i}>{it.a[+t][0]}</b>))}
    </>
  );
}

export default function BoNguKetQuaGoDapAn() {
  const [group, setGroup] = useState("");
  const [showVi, setShowVi] = useState(false);
  const [pool, setPool] = useState<Item[]>(() => build(""));
  const [pg, setPg] = useState(0);
  const box = useRef<HTMLDivElement>(null);

  const base = pg * PER;
  const L = pool.slice(base, base + PER);
  const pages = Math.max(1, Math.ceil(pool.length / PER));
  const isImg = L.length > 0 && L.every((x) => x.g === "Ảnh");
  const done = pool.filter((x) => x.first !== null);

  const restart = (g: string) => {
    setPool(build(g));
    setPg(0);
  };
  const patch = (idx: number, f: (it: Item) => Item) =>
    setPool((p) => p.map((it, i) => (i === idx ? f(it) : it)));
  const go = (n: number) => {
    setPg(n);
    window.scrollTo(0, 0);
  };

  const reveal = (it: Item): Item =>
    it.res === true || it.rev
      ? it
      : { ...it, rev: true, first: it.first === null ? false : it.first };

  const check = () =>
    setPool((p) =>
      p.map((it, i) => {
        if (i < base || i >= base + PER || it.res === true || it.rev) return it;
        if (!it.a.some((_, n) => norm(it.val[n]))) return it;
        const oks = it.a.map((acc, n) =>
          acc.map(norm).includes(norm(it.val[n])),
        );
        const res = oks.every(Boolean);
        return { ...it, oks, res, first: it.first === null ? res : it.first };
      }),
    );

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing || e.keyCode === 229)
      return;
    e.preventDefault();
    const ins = Array.from(
      box.current?.querySelectorAll<HTMLInputElement>("input.bl") ?? [],
    );
    const nxt = ins[ins.indexOf(e.currentTarget) + 1];
    if (nxt && !nxt.readOnly) nxt.focus();
    else check();
  };

  const head = isImg
    ? "Phần 1 · Bài tập trong ảnh"
    : group
      ? "Nhóm " + group
      : "Phần 2 · Các câu trong file bổ ngữ kết quả (đã xáo trộn)";
  const tip = isImg
    ? "Điền cụm động từ + bổ ngữ thích hợp vào chỗ trống. Nhiều đáp án hợp lý đều được chấp nhận."
    : "Điền cụm động từ + bổ ngữ (ví dụ 做完, 听懂, 放在, 还给) vào chỗ trống.";

  return (
    <div className="bnkq">
      <style>{CSS}</style>
      <div className="container-bt">
        <h1>___ gõ cụm động từ vào chỗ trống ___</h1>
        <p className="sub">
          {BANK.length} câu từ file tổng hợp Bài 4 và Bài 12, kèm 8 câu bài tập
          trong ảnh ở trang đầu. Gõ bằng bộ gõ pinyin hoặc chữ Hán.
        </p>
        <div className="opt">
          <span>Nhóm:</span>
          <select
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
              restart(e.target.value);
            }}
          >
            <option value="">Tất cả</option>
            <option value="Ảnh">Chỉ 8 câu trong ảnh</option>
            {GROUPS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <label>
            <input
              type="checkbox"
              checked={showVi}
              onChange={(e) => setShowVi(e.target.checked)}
            />{" "}
            Hiện nghĩa tiếng Việt
          </label>
          <button className="mini" onClick={() => restart(group)}>
            Xáo trộn thứ tự câu
          </button>
        </div>
        <div className="stat">
          <span>Tổng {pool.length} câu</span>
          <span>
            Đã làm {done.length} · Đúng ngay lần đầu{" "}
            {done.filter((x) => x.first).length}
          </span>
        </div>

        <div className="q" ref={box}>
          <p className="hd">{head}</p>
          <p className="tip">{tip}</p>
          <ol>
            {L.map((it, k) => {
              const idx = base + k;
              const fin = it.res === true || it.rev;
              return (
                <li className="it" key={idx + it.s}>
                  <div className="sen">
                    <span className="no">（{idx + 1}）</span>
                    {it.s.split(/\{(\d+)\}/).map((t, i) => {
                      if (i % 2 === 0) return t;
                      const n = +t;
                      const cls = fin
                        ? it.res === true
                          ? "ok"
                          : ""
                        : it.oks[n] === true
                          ? "ok"
                          : it.oks[n] === false
                            ? "no"
                            : "";
                      return (
                        <input
                          key={i}
                          className={"bl " + cls}
                          lang="zh"
                          autoComplete="off"
                          autoCapitalize="off"
                          autoCorrect="off"
                          spellCheck={false}
                          aria-label={`Chỗ trống câu ${idx + 1}`}
                          readOnly={fin}
                          value={
                            fin && it.rev && it.res !== true
                              ? it.a[n][0]
                              : (it.val[n] ?? "")
                          }
                          onKeyDown={onKey}
                          onChange={(e) => {
                            const v = e.target.value;
                            patch(idx, (x) => {
                              const val = x.val.slice();
                              val[n] = v;
                              const oks = x.oks.slice();
                              oks[n] = null;
                              return { ...x, val, oks };
                            });
                          }}
                        />
                      );
                    })}
                    {!isImg && it.g !== "Ảnh" && (
                      <span className="tg">{it.g.split(" ")[0]}</span>
                    )}
                  </div>
                  {showVi && <div className="vi">{it.v}</div>}
                  {it.hint && !fin && (
                    <div className="fb hi">
                      Pinyin: <span className="py">{it.p}</span>
                    </div>
                  )}
                  {!fin && (
                    <>
                      <button
                        className="mini"
                        onClick={() =>
                          patch(idx, (x) => ({ ...x, hint: true }))
                        }
                      >
                        Gợi ý
                      </button>
                      <button
                        className="mini"
                        onClick={() => patch(idx, reveal)}
                      >
                        Đáp án
                      </button>
                    </>
                  )}
                  {it.res === true && (
                    <div className="fb ok">
                      ✓ Đúng rồi. <span className="py">{it.y}</span>
                    </div>
                  )}
                  {it.rev && it.res !== true && (
                    <div className="fb hi">
                      <span className="zh">
                        <Answer it={it} />
                      </span>
                      <br />
                      <span className="py">{it.y}</span>
                    </div>
                  )}
                  {it.res === false && !it.rev && (
                    <div className="fb no">Chưa đúng, thử lại nhé.</div>
                  )}
                </li>
              );
            })}
          </ol>
          <div className="row">
            <button className="btn pri" onClick={check}>
              Kiểm tra
            </button>
            <button
              className="btn"
              onClick={() =>
                setPool((p) =>
                  p.map((it, i) =>
                    i >= base && i < base + PER ? reveal(it) : it,
                  ),
                )
              }
            >
              Hiện đáp án cả trang
            </button>
          </div>
          <div className="row">
            <button
              className="btn"
              disabled={pg === 0}
              onClick={() => go(pg - 1)}
            >
              ‹ Trang trước
            </button>
            <span className="pg">
              Trang {pg + 1}/{pages}
            </span>
            <button
              className="btn"
              disabled={pg >= pages - 1}
              onClick={() => go(pg + 1)}
            >
              Trang sau ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
.bnkq{--bg:#fff;--card:#fff;--tx:#222;--mu:#6b6b6b;--bd:#e3ded4;--ac:#c0392b;--acbg:#fbeae7;--ok:#2e7d32;--okbg:#e6f4e7;--no:#c0392b;
background:var(--bg);color:var(--tx);min-height:100vh;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5;color-scheme:light dark}
@media(prefers-color-scheme:dark){.bnkq{--bg:#101b2c;--card:#101b2c;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}}
.bnkq *{box-sizing:border-box}

.bnkq h1{font-size:1.3rem;margin:0 0 2px}
.bnkq .sub{color:var(--mu);font-size:.85rem;margin:0 0 12px}
.bnkq button,.bnkq select,.bnkq input{font:inherit;color:var(--tx)}
.bnkq .opt{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;font-size:.85rem;margin-bottom:12px}
.bnkq select{background:var(--card);border:1px solid var(--bd);border-radius:8px;padding:4px 8px;max-width:100%}
.bnkq label{cursor:pointer}
.bnkq .stat{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;color:var(--mu);font-size:.8rem;margin-bottom:8px}
.bnkq .q{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:16px}
.bnkq .hd{font-weight:700;margin:0 0 2px}
.bnkq .tip{color:var(--mu);font-size:.82rem;margin:0 0 10px}
.bnkq ol{list-style:none;margin:0;padding:0}
.bnkq .it{padding:12px 0;border-top:1px solid var(--bd)}
.bnkq .it:first-child{border-top:0}
.bnkq .sen{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.35rem;line-height:2.1}
.bnkq .no{color:var(--mu);margin-right:.2em;font-size:1.1rem}
.bnkq input.bl{font-family:inherit;font-size:1.25rem;width:5.6em;text-align:center;background:transparent;border:0;border-bottom:2px solid var(--tx);border-radius:0;padding:0 2px;margin:0 3px;outline:none}
.bnkq input.bl:focus{border-bottom-color:var(--ac);background:var(--acbg)}
.bnkq input.bl.ok{border-bottom-color:var(--ok);color:var(--ok);background:var(--okbg)}
.bnkq input.bl.no{border-bottom-color:var(--no);color:var(--no);background:var(--acbg)}
.bnkq .vi{font-size:.92rem;color:var(--mu);margin-top:2px}
.bnkq .tg{display:inline-block;background:var(--acbg);color:var(--ac);border-radius:999px;padding:0 8px;font-size:.72rem;margin-left:6px;vertical-align:middle}
.bnkq .mini{border:1px solid var(--bd);background:var(--card);border-radius:8px;padding:2px 10px;font-size:.78rem;cursor:pointer;margin:4px 6px 0 0}
.bnkq .fb{margin-top:6px;border-radius:10px;padding:6px 10px;font-size:.9rem}
.bnkq .fb.ok{background:var(--okbg);color:var(--ok)}
.bnkq .fb.no{background:var(--acbg);color:var(--no)}
.bnkq .fb.hi{background:var(--card);border:1px dashed var(--bd);color:var(--ac)}
.bnkq .zh{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.2rem;color:var(--tx)}
.bnkq .zh b{color:var(--ac)}
.bnkq .py{color:var(--ac);font-size:.88rem}
.bnkq .row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.bnkq .btn{flex:1;min-width:110px;border:1px solid var(--bd);background:var(--card);border-radius:12px;padding:10px;cursor:pointer;font-weight:600}
.bnkq .pri{background:var(--ac);border-color:var(--ac);color:#fff}
.bnkq .btn:disabled{opacity:.4;cursor:default}
.bnkq .pg{text-align:center;color:var(--mu);font-size:.85rem;align-self:center;min-width:90px}
`;
