"use client";

/**
 * Bài tập "Sắp xếp câu" phần 2 (chép từ ảnh sách giáo trình).
 * Component client độc lập cho Next.js (App Router) / React.
 *
 * Dùng:  import BaiTapSapXepCauSGK2 from "@/components/BaiTapSapXepCauSGK2";
 *        <BaiTapSapXepCauSGK2 />
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
    "(6)",
    "学|你|过|吗|没|用电脑|打字",
    "你没学过用电脑打字吗",
    "Nǐ méi xué guo yòng diànnǎo dǎzì ma",
    [],
  ],
  [
    1,
    "(7)",
    "不|的|一条|他|都|裙子|连|到|合适|买",
    "他连一条合适的裙子都买不到",
    "Tā lián yì tiáo héshì de qúnzi dōu mǎi bú dào",
    [],
  ],
  [
    1,
    "(8)",
    "复习|五分钟后|什么|了|就要|还|考试|呢",
    "五分钟后就要考试了，还复习什么呢",
    "Wǔ fēnzhōng hòu jiù yào kǎoshì le, hái fùxí shénme ne",
    [],
  ],
  [
    2,
    "(1)",
    "能|我|中国|怎么|的|忘记|日子|生活|呢|在",
    "我怎么能忘记在中国生活的日子呢",
    "Wǒ zěnme néng wàngjì zài Zhōngguó shēnghuó de rìzi ne",
    [],
  ],
  [
    2,
    "(2)",
    "没有|这|都|超市|地方|连|个",
    "这个地方连超市都没有",
    "Zhège dìfang lián chāoshì dōu méiyǒu",
    [],
  ],
  [
    2,
    "(3)",
    "漂亮|我写|哪儿|出来|这么|得|的|汉字|啊",
    "哪儿我写得出来这么漂亮的汉字啊",
    "Nǎr wǒ xiě de chūlái zhème piàoliang de Hànzì a",
    [],
  ],
  [
    2,
    "(4)",
    "名字|第二次|忘|见面|都|时|连|的|了|我|他",
    "第二次见面时，我连他的名字都忘了",
    "Dì èr cì jiànmiàn shí, wǒ lián tā de míngzi dōu wàng le",
    [],
  ],
  [
    2,
    "(5)",
    "怎么|你|同意|会|父母|留学|你|出国|呢",
    "你父母怎么会同意你出国留学呢",
    "Nǐ fùmǔ zěnme huì tóngyì nǐ chūguó liúxué ne",
    [],
  ],
  [
    3,
    "(3)",
    "都|说|我|流利|跟|汉语|说|一样|得|朋友们|中国人",
    "朋友们都说我汉语说得跟中国人一样流利",
    "Péngyoumen dōu shuō wǒ Hànyǔ shuō de gēn Zhōngguórén yíyàng liúlì",
    [],
  ],
  [
    3,
    "(4)",
    "的|他|得|话|让|气|出|说|不|来|决定|父母",
    "他的决定让父母气得说不出话来",
    "Tā de juédìng ràng fùmǔ qì de shuō bu chū huà lái",
    [],
  ],
  [
    3,
    "(5)",
    "擦|干干|把|得|净净|黑板|的|丽丽",
    "丽丽把黑板擦得干干净净的",
    "Lìli bǎ hēibǎn cā de gānganjìngjìng de",
    [],
  ],
  [
    4,
    "(1)",
    "哭|我|这|事|几|难过|让|件|得|了|好|天",
    "这件事让我难过得哭了好几天",
    "Zhè jiàn shì ràng wǒ nánguò de kū le hǎo jǐ tiān",
    [],
  ],
  [
    4,
    "(2)",
    "几|这|他|天|下班|吃|累|连|饭|都|不|一直|下去|得",
    "这几天他下班，一直累得连饭都吃不下去",
    "Zhè jǐ tiān tā xiàbān, yìzhí lèi de lián fàn dōu chī bu xiàqù",
    [],
  ],
  [
    5,
    "(1)",
    "我|一边|利用|打工|赚|汉语|钱|一边|学习|暑假",
    "我利用暑假一边打工赚钱，一边学习汉语",
    "Wǒ lìyòng shǔjià yìbiān dǎgōng zhuànqián, yìbiān xuéxí Hànyǔ",
    [],
  ],
  [
    5,
    "(2)",
    "好|什么|我们|时候|准备|就|出发|什么|时候",
    "什么时候准备好，我们就什么时候出发",
    "Shénme shíhou zhǔnbèi hǎo, wǒmen jiù shénme shíhou chūfā",
    [],
  ],
  [
    5,
    "(3)",
    "有|哪儿|卖|就|去|买|哪儿|我们",
    "哪儿有卖，我们就去哪儿买",
    "Nǎr yǒu mài, wǒmen jiù qù nǎr mǎi",
    [],
  ],
  [
    5,
    "(4)",
    "一边|电视|习惯|一边|是|个|坏|学习|看",
    "一边看电视，一边学习是个坏习惯",
    "Yìbiān kàn diànshì, yìbiān xuéxí shì ge huài xíguàn",
    [],
  ],
  [
    5,
    "(5)",
    "我|再|去|北京|到|苏州|上海|然后|游览|去|杭州|最后|广州|先",
    "我先到北京游览，然后去上海、苏州、杭州，最后再去广州",
    "Wǒ xiān dào Běijīng yóulǎn, ránhòu qù Shànghǎi, Sūzhōu, Hángzhōu, zuìhòu zài qù Guǎngzhōu",
    ["我先到北京游览，然后去上海、杭州、苏州，最后再去广州"],
  ],
  [
    6,
    "(3)",
    "路|走|出来|的|钢|人|是|练|是|出来|火|的",
    "路是人走出来的，钢是火练出来的",
    "Lù shì rén zǒu chūlái de, gāng shì huǒ liàn chūlái de",
    [],
  ],
  [
    6,
    "(4)",
    "这里|一直|在|他|住|下去|想",
    "他一直想在这里住下去",
    "Tā yìzhí xiǎng zài zhèlǐ zhù xiàqù",
    [],
  ],
  [
    6,
    "(5)",
    "就|今晚|住|在|你|下来|这|里|吧",
    "你今晚就在这里住下来吧",
    "Nǐ jīnwǎn jiù zài zhèlǐ zhù xiàlái ba",
    [],
  ],
  [
    6,
    "(6)",
    "故事|古代|这是|的|下来|流传",
    "这是古代流传下来的故事",
    "Zhè shì gǔdài liúchuán xiàlái de gùshi",
    [],
  ],
  [
    7,
    "(1)",
    "拿|他|起来|一本书|看|出|了",
    "他拿起来一本书，看出了",
    "Tā ná qǐlái yì běn shū, kàn chū le",
    [],
  ],
  [
    7,
    "(2)",
    "但是|困难|虽然|还是|坚持|他|遇到|很多|下来|了",
    "虽然他遇到很多困难，但是还是坚持下来了",
    "Suīrán tā yùdào hěn duō kùnnan, dànshì háishi jiānchí xiàlái le",
    [],
  ],
  [
    8,
    "(1)",
    "我|不|这件事|想|也|通|怎么",
    "这件事我怎么也想不通",
    "Zhè jiàn shì wǒ zěnme yě xiǎng bu tōng",
    [],
  ],
  [
    8,
    "(2)",
    "这么|人|多|一|个|孩子|照顾|过来|我|不",
    "我一个人照顾不过来这么多孩子",
    "Wǒ yí ge rén zhàogù bu guòlái zhème duō háizi",
    [],
  ],
  [
    8,
    "(3)",
    "咱们|吃|太|西瓜|俩|这个|不|了|大",
    "这个西瓜太大，咱们俩吃不了",
    "Zhège xīguā tài dà, zánmen liǎ chī bu liǎo",
    [],
  ],
  [
    8,
    "(4)",
    "不|这|件|买|贵|我们|太|大衣|起",
    "这件大衣太贵，我们买不起",
    "Zhè jiàn dàyī tài guì, wǒmen mǎi bu qǐ",
    [],
  ],
  [
    8,
    "(5)",
    "上去|这|山|得|高|不|我们|座|爬",
    "这座山高得我们爬不上去",
    "Zhè zuò shān gāo de wǒmen pá bu shàngqù",
    [],
  ],
  [
    8,
    "(6)",
    "得|这些|翻译|小时|你|句子|完|翻译|一个|不|完",
    "这些句子你一个小时翻译得完翻译不完",
    "Zhèxiē jùzi nǐ yí ge xiǎoshí fānyì de wán fānyì bu wán",
    [],
  ],
  [
    9,
    "(1)",
    "的|好|作品|不|生活|离|开",
    "好的作品离不开生活",
    "Hǎo de zuòpǐn lí bu kāi shēnghuó",
    [],
  ],
  [
    9,
    "(2)",
    "发|我|音|好|这个|不|总是",
    "这个音我总是发不好",
    "Zhège yīn wǒ zǒngshì fā bu hǎo",
    [],
  ],
  [
    9,
    "(3)",
    "但是|我|不|看|懂|听|意思|了|猜|演|出|可以|出|虽然|京剧",
    "虽然京剧我听不懂，但是看演出可以猜出意思了",
    "Suīrán jīngjù wǒ tīng bu dǒng, dànshì kàn yǎnchū kěyǐ cāi chū yìsi le",
    [],
  ],
  [
    9,
    "(4)",
    "人|这|坐|个|大|很|下|很|多|房间|得",
    "这个房间很大，坐得下很多人",
    "Zhège fángjiān hěn dà, zuò de xià hěn duō rén",
    [],
  ],
  [
    9,
    "(5)",
    "这么|完|菜|你|吃|吃|得|不|完|多",
    "这么多菜你吃得完吃不完",
    "Zhème duō cài nǐ chī de wán chī bu wán",
    [],
  ],
  [
    10,
    "(1)",
    "很|钱|他|的|被|了|可能|小偷|去|偷",
    "他的钱很可能被小偷偷去了",
    "Tā de qián hěn kěnéng bèi xiǎotōu tōu qù le",
    [],
  ],
  [
    10,
    "(2)",
    "的|你|用|意思|让|坏|了|我|真|钢笔|不好",
    "让你用坏了我的钢笔，真不好意思",
    "Ràng nǐ yòng huài le wǒ de gāngbǐ, zhēn bù hǎoyìsi",
    [],
  ],
  [
    10,
    "(3)",
    "王|被|来|今天|参加|老师|晚会|的|了|请",
    "王老师被请来参加今天的晚会了",
    "Wáng lǎoshī bèi qǐng lái cānjiā jīntiān de wǎnhuì le",
    [],
  ],
  [
    10,
    "(4)",
    "了|树叶|的|在|地上|扫|叫|干净|工人|落|都",
    "落在地上的树叶都叫工人扫干净了",
    "Luò zài dì shang de shùyè dōu jiào gōngrén sǎo gānjìng le",
    [],
  ],
  [
    10,
    "(5)",
    "都|的|寄|学生们|被|成绩|了|回国",
    "学生们的成绩都被寄回国了",
    "Xuéshengmen de chéngjì dōu bèi jì huíguó le",
    [],
  ],
  [
    11,
    "(1)",
    "你|把|信|交|给|封|老师|吗|这|能",
    "你能把这封信交给老师吗",
    "Nǐ néng bǎ zhè fēng xìn jiāo gěi lǎoshī ma",
    [],
  ],
  [
    11,
    "(2)",
    "应该|想|你|告诉|把|他|我|这件事",
    "我想你应该把这件事告诉他",
    "Wǒ xiǎng nǐ yīnggāi bǎ zhè jiàn shì gàosu tā",
    [],
  ],
  [
    11,
    "(3)",
    "不用|你|应该|上课|把|宿舍|打扫|一下|星期天",
    "星期天不用上课，你应该把宿舍打扫一下",
    "Xīngqītiān búyòng shàngkè, nǐ yīnggāi bǎ sùshè dǎsǎo yíxià",
    [],
  ],
  [
    11,
    "(4)",
    "给|打算|我|送|这|拿|晚上|把|份|礼物|出来|生日|他",
    "他打算晚上把这份生日礼物拿出来送给我",
    "Tā dǎsuàn wǎnshang bǎ zhè fèn shēngrì lǐwù ná chūlái sòng gěi wǒ",
    [],
  ],
  [
    11,
    "(5)",
    "洒|你|碰|了|牛奶|杯子|全|倒|了|把",
    "你碰倒了杯子，把牛奶全洒了",
    "Nǐ pèng dǎo le bēizi, bǎ niúnǎi quán sǎ le",
    [],
  ],
  [
    12,
    "(5)",
    "放|把|上|汉语|书|请|本|回|那|书架",
    "请把那本汉语书放回书架上",
    "Qǐng bǎ nà běn Hànyǔ shū fàng huí shūjià shang",
    [],
  ],
  [
    13,
    "(1)",
    "我|的|给|词典|借|刚买|他|把|了",
    "我把刚买的词典借给他了",
    "Wǒ bǎ gāng mǎi de cídiǎn jiè gěi tā le",
    [],
  ],
  [
    13,
    "(2)",
    "出租车|那|辆|开|正好|过|一|边|来",
    "一辆出租车正好开过那边来",
    "Yí liàng chūzūchē zhènghǎo kāi guò nà biān lái",
    [],
  ],
  [
    13,
    "(3)",
    "在|去|机|场|护照|把|的|昨天|他|路上|丢|了",
    "昨天他把去机场的护照在路上丢了",
    "Zuótiān tā bǎ qù jīchǎng de hùzhào zài lùshang diū le",
    [],
  ],
  [
    13,
    "(4)",
    "写|常常|“永”|把|“水”|成|留学生",
    "留学生常常把“永”写成“水”",
    "Liúxuéshēng chángcháng bǎ “yǒng” xiě chéng “shuǐ”",
    ["留学生常常把“水”写成“永”"],
  ],
  [
    14,
    "(1)",
    "一天|觉得|好|我|人|们|生活|的|比|一天",
    "我觉得人们的生活一天比一天好",
    "Wǒ juéde rénmen de shēnghuó yì tiān bǐ yì tiān hǎo",
    [],
  ],
  [
    14,
    "(2)",
    "有点儿|虽然|我|也|但|还是|搬|可以|楼房|进|希望|的|住|新盖|里|去|舍不得",
    "虽然我也有点儿舍不得，但还是希望可以搬进新盖的楼房里去住",
    "Suīrán wǒ yě yǒudiǎnr shěbude, dàn háishi xīwàng kěyǐ bān jìn xīn gài de lóufáng li qù zhù",
    [],
  ],
  [
    15,
    "(1)",
    "我|下|楼|刚|要|去|的时候|看见|就|玛丽|走上来",
    "我刚要下楼去的时候，就看见玛丽走上来",
    "Wǒ gāng yào xià lóu qù de shíhou, jiù kànjiàn Mǎlì zǒu shànglái",
    [],
  ],
  [
    15,
    "(2)",
    "走|一个饭馆|进|去|午饭|我们|吃",
    "我们走进一个饭馆去吃午饭",
    "Wǒmen zǒu jìn yí ge fànguǎn qù chī wǔfàn",
    [],
  ],
  [
    15,
    "(3)",
    "寄|一份|学校|录取通知书|来|了",
    "学校寄来了一份录取通知书",
    "Xuéxiào jì lái le yí fèn lùqǔ tōngzhīshū",
    [],
  ],
  [
    15,
    "(4)",
    "一个书店|我们|走出来|从|走进|又|另一个书店|去",
    "我们从一个书店走出来又走进另一个书店去",
    "Wǒmen cóng yí ge shūdiàn zǒu chūlái yòu zǒu jìn lìng yí ge shūdiàn qù",
    [],
  ],
  [
    15,
    "(5)",
    "根据|这个电影|琼瑶的小说|是|拍|成|的",
    "这个电影是根据琼瑶的小说拍成的",
    "Zhège diànyǐng shì gēnjù Qióng Yáo de xiǎoshuō pāi chéng de",
    [],
  ],
  [
    16,
    "(4)",
    "地铁|发展|解决|拥挤|城市交通|办法|是|的|之一",
    "发展地铁是解决城市交通拥挤的办法之一",
    "Fāzhǎn dìtiě shì jiějué chéngshì jiāotōng yōngjǐ de bànfǎ zhī yī",
    [],
  ],
  [
    16,
    "(5)",
    "没|差点儿|他|去年|考|大学|上",
    "他去年差点儿没考上大学",
    "Tā qùnián chàdiǎnr méi kǎo shàng dàxué",
    [],
  ],
  [
    17,
    "(1)",
    "个个|都|这些|翻译|句子|他|得|准确|很",
    "这些句子他翻译得个个都很准确",
    "Zhèxiē jùzi tā fānyì de gègè dōu hěn zhǔnquè",
    [],
  ],
  [
    17,
    "(2)",
    "你们那儿|听说|冬天|的|得|很|冷",
    "听说你们那儿的冬天冷得很",
    "Tīngshuō nǐmen nàr de dōngtiān lěng de hěn",
    [],
  ],
  [
    17,
    "(3)",
    "在天安门|我们|照片|照|的|了没有|洗|好",
    "我们在天安门照的照片洗好了没有",
    "Wǒmen zài Tiān'ānmén zhào de zhàopiàn xǐ hǎo le méiyǒu",
    [],
  ],
  [
    18,
    "(2)",
    "他|还是|最后|去不成|留学|美国",
    "他最后还是去不成美国留学",
    "Tā zuìhòu háishi qù bu chéng Měiguó liúxué",
    [],
  ],
  [
    18,
    "(3)",
    "总算|他|护照|到|找|了|的",
    "他的护照总算找到了",
    "Tā de hùzhào zǒngsuàn zhǎo dào le",
    [],
  ],
  [
    18,
    "(4)",
    "向|昨天|请|了|假|为了|看|去泰国|老板|亚洲杯|五天|他",
    "他昨天为了去泰国看亚洲杯向老板请了五天假",
    "Tā zuótiān wèile qù Tàiguó kàn Yàzhōubēi xiàng lǎobǎn qǐng le wǔ tiān jià",
    [],
  ],
  [
    18,
    "(5)",
    "为了|这本小说|翻译完|他|饭|不|也|吃",
    "为了翻译完这本小说，他饭也不吃",
    "Wèile fānyì wán zhè běn xiǎoshuō, tā fàn yě bù chī",
    [],
  ],
  [
    19,
    "(1)",
    "的|我|是|长城|上个星期|去",
    "我是上个星期去长城的",
    "Wǒ shì shàng ge xīngqī qù Chángchéng de",
    [],
  ],
  [
    19,
    "(2)",
    "不是|她|一个人|旅行团|来的|跟|是|来的",
    "她不是一个人来的，是跟旅行团来的",
    "Tā bú shì yí ge rén lái de, shì gēn lǚxíngtuán lái de",
    [],
  ],
  [
    19,
    "(3)",
    "一|大夫|摸|知道|就|你|什么|有|病",
    "大夫一摸就知道你有什么病",
    "Dàifu yì mō jiù zhīdào nǐ yǒu shénme bìng",
    [],
  ],
  [
    19,
    "(4)",
    "曾经|学|汉语|过|我|两年前|在|北京大学",
    "我两年前曾经在北京大学学过汉语",
    "Wǒ liǎng nián qián céngjīng zài Běijīng Dàxué xué guo Hànyǔ",
    [],
  ],
  [
    19,
    "(5)",
    "几句话|简简单单|用|的|他|就|这|解决|个|问题",
    "他就用简简单单的几句话解决这个问题",
    "Tā jiù yòng jiǎnjiǎndāndān de jǐ jù huà jiějué zhège wèntí",
    [],
  ],
  [
    20,
    "(1)",
    "人家|靠|很多|饭店|发了财|经营",
    "人家靠经营很多饭店发了财",
    "Rénjiā kào jīngyíng hěn duō fàndiàn fā le cái",
    [],
  ],
  [
    20,
    "(2)",
    "他们|快|结婚|怎么|刚|这么|认识|就要|了",
    "他们刚认识怎么这么快就要结婚了",
    "Tāmen gāng rènshi zěnme zhème kuài jiù yào jiéhūn le",
    [],
  ],
  [
    20,
    "(3)",
    "二十岁|自己|都|了|的|事情|自己做|应该",
    "都二十岁了，自己的事情应该自己做",
    "Dōu èrshí suì le, zìjǐ de shìqing yīnggāi zìjǐ zuò",
    [],
  ],
  [
    21,
    "(1)",
    "不一样|价钱|的|那件毛衣|跟|这件毛衣",
    "那件毛衣跟这件毛衣的价钱不一样",
    "Nà jiàn máoyī gēn zhè jiàn máoyī de jiàqian bù yíyàng",
    [],
  ],
  [
    21,
    "(2)",
    "不但|我们那儿的|冷|冬天|刮|常常|而且|还|大风",
    "我们那儿的冬天不但冷，而且还常常刮大风",
    "Wǒmen nàr de dōngtiān búdàn lěng, érqiě hái chángcháng guā dàfēng",
    [],
  ],
  [
    21,
    "(3)",
    "有|我们住的地方|时差|这儿|的|三个小时|跟",
    "我们住的地方跟这儿的时差有三个小时",
    "Wǒmen zhù de dìfang gēn zhèr de shíchā yǒu sān ge xiǎoshí",
    [],
  ],
  [
    22,
    "(6)",
    "下|刚|他们|楼|了|去",
    "他们刚下楼去了",
    "Tāmen gāng xià lóu qù le",
    [],
  ],
  [
    22,
    "(7)",
    "从|他|历史书|书架|拿|上|一本|下来",
    "他从书架上拿下来一本历史书",
    "Tā cóng shūjià shang ná xiàlái yì běn lìshǐ shū",
    [],
  ],
  [
    22,
    "(8)",
    "老朋友|跟|看|他|握手|见|走|立刻|朋友|过去",
    "他看见老朋友，立刻走过去跟朋友握手",
    "Tā kànjiàn lǎo péngyou, lìkè zǒu guòqù gēn péngyou wòshǒu",
    ["他看见朋友，立刻走过去跟老朋友握手"],
  ],
  [
    23,
    "(1)",
    "房间|进|麦克|他|的|去|了",
    "麦克进他的房间去了",
    "Màikè jìn tā de fángjiān qù le",
    [],
  ],
  [
    23,
    "(2)",
    "包裹|给|他|寄|去|一个|朋友",
    "他给朋友寄去一个包裹",
    "Tā gěi péngyou jì qù yí ge bāoguǒ",
    [],
  ],
  [
    23,
    "(3)",
    "英文杂志|里|出|从|书包|她|拿|一本",
    "她从书包里拿出一本英文杂志",
    "Tā cóng shūbāo li ná chū yì běn Yīngwén zázhì",
    [],
  ],
  [
    23,
    "(4)",
    "他|电视机|昨天|买|进|一台|城|回|来",
    "他昨天进城买回来一台电视机",
    "Tā zuótiān jìn chéng mǎi huílái yì tái diànshìjī",
    [],
  ],
  [
    23,
    "(5)",
    "去|应该|水果|你们|一些|带|看老师|去",
    "你们应该带一些水果去看老师去",
    "Nǐmen yīnggāi dài yìxiē shuǐguǒ qù kàn lǎoshī qù",
    ["你们应该去看老师，带一些水果去"],
  ],
  [
    24,
    "(1)",
    "明天|比|北京的|上海|高|气温|两度",
    "明天上海气温比北京的高两度",
    "Míngtiān Shànghǎi qìwēn bǐ Běijīng de gāo liǎng dù",
    [],
  ],
  [
    24,
    "(2)",
    "觉得|这件|我|比|羽绒服的|好看|颜色|多了|那件",
    "我觉得这件羽绒服的颜色比那件好看多了",
    "Wǒ juéde zhè jiàn yǔróngfú de yánsè bǐ nà jiàn hǎokàn duō le",
    [],
  ],
  [
    24,
    "(3)",
    "足球迷|比赛|看|是|他|个|非常|喜欢|足球",
    "他是个足球迷，非常喜欢看足球比赛",
    "Tā shì ge zúqiúmí, fēicháng xǐhuan kàn zúqiú bǐsài",
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

export default function BaiTapSapXepCauSGK2() {
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
