"use client";

/**
 * 302 bài tập sắp xếp câu tiếng Trung HSK 3-4-5.
 * Component client độc lập cho Next.js (App Router) / React.
 *
 * Dùng:  import BaiTapSapXepCau from "@/components/BaiTapSapXepCau";
 *        <BaiTapSapXepCau />
 *
 * CSS được nhúng ngay trong file (mọi class có tiền tố "bt-", nằm trong vùng .bt)
 * nên không cần file CSS riêng và không đụng style toàn cục.
 */
import { useCallback, useEffect, useState } from "react";

/* ───────────────────────── Kiểu dữ liệu ───────────────────────── */

/** [số câu, các từ/chữ ngăn bởi "|", đáp án, pinyin] */
type Item = [number, string, string, string];
type Chip = { id: number; t: string };
type Q = { item: Item; retry: boolean };

/* ───────────────────────── Dữ liệu ───────────────────────── */

const GROUP_SIZE = 50;

const ITEMS: Item[] = [
  [1, "她|本|把|给|这|书", "把这本书给她", "Bǎ zhè běn shū gěi tā"],
  [2, "很|说|对|得|你", "你说得很对", "Nǐ shuō de hěn duì"],
  [3, "跑|快|很|他|得", "他跑得很快", "Tā pǎo de hěn kuài"],
  [4, "少|个|多|钱|这", "这个多少钱", "Zhège duōshao qián"],
  [
    5,
    "他|来|天|愿|能|但|明",
    "但愿他明天能来",
    "Dàn yuàn tā míngtiān néng lái",
  ],
  [6, "可|知|能|他|道|不", "他不可能知道", "Tā bù kěnéng zhīdào"],
  [7, "不|爸|家|我|在|爸", "我爸爸不在家", "Wǒ bàba bú zài jiā"],
  [8, "游|喜|我|欢|泳|不", "我不喜欢游泳", "Wǒ bù xǐhuan yóuyǒng"],
  [9, "生|个|我|医|是", "我是个医生", "Wǒ shì ge yīshēng"],
  [10, "过|他|前|师|当|以|老", "他以前当过老师", "Tā yǐqián dāng guo lǎoshī"],
  [
    11,
    "他|想|来|买|两|本|书",
    "他想来买两本书",
    "Tā xiǎng lái mǎi liǎng běn shū",
  ],
  [12, "看|是|我|便|看|只|随", "我只是随便看看", "Wǒ zhǐshì suíbiàn kànkan"],
  [
    13,
    "只|题|个|我|一|问|问|想",
    "我只想问一个问题",
    "Wǒ zhǐ xiǎng wèn yí ge wèntí",
  ],
  [14, "很|长|美|得|她", "她长得很美", "Tā zhǎng de hěn měi"],
  [15, "天|书|上|我|读|每|学", "我每天上学读书", "Wǒ měi tiān shàngxué dúshū"],
  [16, "些|书|那|的|我|是|书", "那些书是我的书", "Nàxiē shū shì wǒ de shū"],
  [
    17,
    "觉|吃|在|前|药|睡|这|之",
    "这药在睡觉之前吃",
    "Zhè yào zài shuìjiào zhīqián chī",
  ],
  [18, "吃|苹|要|果|我", "我要吃苹果", "Wǒ yào chī píngguǒ"],
  [19, "安|意|通|全|注|请|交", "请注意交通安全", "Qǐng zhùyì jiāotōng ānquán"],
  [20, "睡|早|体|好|起|早|身", "早睡早起身体好", "Zǎo shuì zǎo qǐ shēntǐ hǎo"],
  [21, "车|太|了|开|他|快", "他开车太快了", "Tā kāichē tài kuài le"],
  [22, "语|说|吗|会|你|英", "你会说英语吗", "Nǐ huì shuō Yīngyǔ ma"],
  [23, "得|他|很|语|好|英|讲", "他英语讲得很好", "Tā Yīngyǔ jiǎng de hěn hǎo"],
  [24, "人|子|里|没|屋", "屋子里没人", "Wūzi li méi rén"],
  [25, "与|我|那|关|事|无", "那事与我无关", "Nà shì yǔ wǒ wúguān"],
  [26, "最|样|然|这|好|当|做", "当然这样做最好", "Dāngrán zhèyàng zuò zuì hǎo"],
  [27, "的|了|孩|你|大|多|子", "你的孩子多大了", "Nǐ de háizi duō dà le"],
  [28, "大|天|风|今|刮", "今天刮大风", "Jīntiān guā dà fēng"],
  [29, "来|了|阳|出|太", "太阳出来了", "Tàiyáng chūlái le"],
  [
    30,
    "只|鸟|上|小|两|树|有",
    "树上有两只小鸟",
    "Shù shang yǒu liǎng zhī xiǎo niǎo",
  ],
  [31, "吃|没|过|我|餐|有|西", "我没有吃过西餐", "Wǒ méiyǒu chī guo xīcān"],
  [32, "大|下|雨|得|很", "雨下得很大", "Yǔ xià de hěn dà"],
  [
    33,
    "年|他|的|龄|和|同|相|我",
    "他和我的年龄相同",
    "Tā hé wǒ de niánlíng xiāngtóng",
  ],
  [
    34,
    "中|人|，|国|呢|是|我|你",
    "我是中国人，你呢",
    "Wǒ shì Zhōngguó rén, nǐ ne",
  ],
  [35, "等|五|加|于|八|三", "三加五等于八", "Sān jiā wǔ děngyú bā"],
  [
    36,
    "吃|要|餐|你|吃|西|餐|是|还|中",
    "你要吃中餐还是吃西餐",
    "Nǐ yào chī zhōngcān háishi chī xīcān",
  ],
  [
    37,
    "色|着|是|服|总|的|她|黑|穿|衣",
    "她总是穿着黑色的衣服",
    "Tā zǒngshì chuān zhe hēisè de yīfu",
  ],
  [38, "快|么|别|请|得|说|那", "请别说得那么快", "Qǐng bié shuō de nàme kuài"],
  [39, "要|了|我|走|的|真", "我真的要走了", "Wǒ zhēn de yào zǒu le"],
  [40, "欢|喜|不|他|是|你|是", "你是不是喜欢他", "Nǐ shì bu shì xǐhuan tā"],
  [
    41,
    "顾|己|己|好|自|自|要|照|你",
    "你要自己照顾好自己",
    "Nǐ yào zìjǐ zhàogù hǎo zìjǐ",
  ],
  [
    42,
    "定|功|会|将|成|来|一|他",
    "他将来一定会成功",
    "Tā jiānglái yídìng huì chénggōng",
  ],
  [
    43,
    "示|向|感|他|我|了|谢|表",
    "我向他表示了感谢",
    "Wǒ xiàng tā biǎoshì le gǎnxiè",
  ],
  [
    44,
    "在|子|里|孩|怀|抱|她|把",
    "她把孩子抱在怀里",
    "Tā bǎ háizi bào zài huái li",
  ],
  [
    45,
    "个|作|一|完|工|他|了|时|这|做|小|花",
    "他花了一个小时做完这工作",
    "Tā huā le yí ge xiǎoshí zuòwán zhè gōngzuò",
  ],
  [46, "你|的|是|来|做|原", "原来是你做的", "Yuánlái shì nǐ zuò de"],
  [47, "该|道|应|你|知", "你应该知道", "Nǐ yīnggāi zhīdào"],
  [
    48,
    "包|子|将|在|她|书|桌|放|上",
    "她将书包放在桌子上",
    "Tā jiāng shūbāo fàng zài zhuōzi shang",
  ],
  [
    49,
    "地|您|特|的|习|向|是|来|学|我",
    "我是特地来向您学习的",
    "Wǒ shì tèdì lái xiàng nín xuéxí de",
  ],
  [
    50,
    "话|嘴|你|说|，|插|别|别|人",
    "别人说话，你别插嘴",
    "Biérén shuōhuà, nǐ bié chāzuǐ",
  ],
  [
    51,
    "的|样|我|么|车|怎|觉|你|得|新",
    "你觉得我的新车怎么样",
    "Nǐ juéde wǒ de xīn chē zěnmeyàng",
  ],
  [
    52,
    "学|友|好|我|朋|和|时|是|求|在|他",
    "我和他在求学时是好朋友",
    "Wǒ hé tā zài qiúxué shí shì hǎo péngyou",
  ],
  [
    53,
    "们|辛|天|你|可|今|了|够|苦",
    "你们今天可够辛苦了",
    "Nǐmen jīntiān kě gòu xīnkǔ le",
  ],
  [54, "前|洗|饭|先|手|吃", "吃饭前先洗手", "Chīfàn qián xiān xǐ shǒu"],
  [55, "牛|欢|吹|他|喜", "他喜欢吹牛", "Tā xǐhuan chuīniú"],
  [
    56,
    "谈|了|夜|们|整|一|他|交",
    "他们交谈了一整夜",
    "Tāmen jiāotán le yì zhěng yè",
  ],
  [57, "她|又|聪|明|又|美|丽", "她又聪明又美丽", "Tā yòu cōngming yòu měilì"],
  [58, "儿|真|亮|女|你|漂", "你女儿真漂亮", "Nǐ nǚ'ér zhēn piàoliang"],
  [
    59,
    "拿|里|他|书|着|本|一|手",
    "他手里拿着一本书",
    "Tā shǒu li ná zhe yì běn shū",
  ],
  [60, "做|合|师|适|她|教", "她适合做教师", "Tā shìhé zuò jiàoshī"],
  [61, "你|再|找|天|明|来", "你明天再来找", "Nǐ míngtiān zài lái zhǎo"],
  [
    62,
    "片|幅|得|正|这|挂|不|照",
    "这幅照片挂得不正",
    "Zhè fú zhàopiàn guà de bú zhèng",
  ],
  [
    63,
    "有|灭|了|然|都|所|灯|突|的",
    "突然所有的灯都灭了",
    "Tūrán suǒyǒu de dēng dōu miè le",
  ],
  [64, "体|他|壮|身|强", "他身体强壮", "Tā shēntǐ qiángzhuàng"],
  [
    65,
    "定|意|变|一|主|会|他|改",
    "他一定会改变主意",
    "Tā yídìng huì gǎibiàn zhǔyi",
  ],
  [
    66,
    "越|事|你|快|越|得|件|好|做|这",
    "这件事你做得越快越好",
    "Zhè jiàn shì nǐ zuò de yuè kuài yuè hǎo",
  ],
  [67, "头|他|满|汗|大", "他满头大汗", "Tā mǎn tóu dà hàn"],
  [68, "都|语|会|们|日|说|他", "他们都会说日语", "Tāmen dōu huì shuō Rìyǔ"],
  [
    69,
    "准|班|须|时|上|来|你|必|们",
    "你们必须准时来上班",
    "Nǐmen bìxū zhǔnshí lái shàngbān",
  ],
  [
    70,
    "来|想|句|们|用|达|词|思|我|表",
    "我们用词句来表达思想",
    "Wǒmen yòng cíjù lái biǎodá sīxiǎng",
  ],
  [
    71,
    "得|是|的|难|他|才|个|人",
    "他才是个难得的人",
    "Tā cái shì ge nándé de rén",
  ],
  [
    72,
    "知|从|个|纸|息|我|上|消|这|得|报",
    "我从这个报纸上得知消息",
    "Wǒ cóng zhège bàozhǐ shang dézhī xiāoxi",
  ],
  [73, "业|祝|进|你|猛|学", "祝你学业猛进", "Zhù nǐ xuéyè měng jìn"],
  [
    74,
    "通|孩|常|个|普|是|这|非|名|字|的|女|一",
    "这是一个非常普通的女孩名字",
    "Zhè shì yí ge fēicháng pǔtōng de nǚhái míngzi",
  ],
  [
    75,
    "块|他|住|一|父|跟|儿|母",
    "他跟父母一块儿住",
    "Tā gēn fùmǔ yíkuàir zhù",
  ],
  [76, "旧|衣|了|服|穿", "衣服穿旧了", "Yīfu chuān jiù le"],
  [
    77,
    "为|成|小|空|梦|太|想|就|从|人|他",
    "他从小就梦想成为太空人",
    "Tā cóng xiǎo jiù mèngxiǎng chéngwéi tàikōngrén",
  ],
  [78, "很|病|重|的|他|严", "他的病很严重", "Tā de bìng hěn yánzhòng"],
  [79, "年|业|已|了|失|半|他", "他失业已半年了", "Tā shīyè yǐ bàn nián le"],
  [80, "答|的|回|题|我|请|问", "请回答我的问题", "Qǐng huídá wǒ de wèntí"],
  [
    81,
    "场|下|雪|夜|一|了|大|昨",
    "昨夜下了一场大雪",
    "Zuó yè xià le yì chǎng dà xuě",
  ],
  [
    82,
    "斤|有|这|鱼|重|三|条",
    "这条鱼有三斤重",
    "Zhè tiáo yú yǒu sān jīn zhòng",
  ],
  [83, "感|个|事|这|很|人|故", "这个故事很感人", "Zhège gùshi hěn gǎnrén"],
  [84, "到|十|活|岁|她|八", "她活到十八岁", "Tā huó dào shíbā suì"],
  [
    85,
    "位|上|街|在|友|到|朋|我|一|碰|老",
    "我在街上碰到一位老朋友",
    "Wǒ zài jiē shang pèngdào yí wèi lǎo péngyou",
  ],
  [86, "个|望|睡|希|觉|好|你", "希望你睡个好觉", "Xīwàng nǐ shuì ge hǎo jiào"],
  [87, "意|这|错|主|个|不", "这个主意不错", "Zhège zhǔyi bú cuò"],
  [
    88,
    "姨|友|是|妈|李|的|朋|妈|好|阿",
    "李阿姨是妈妈的好朋友",
    "Lǐ āyí shì māma de hǎo péngyou",
  ],
  [
    89,
    "很|笑|的|觉|说|可|话|他|得|我",
    "我觉得他说的话很可笑",
    "Wǒ juéde tā shuō de huà hěn kěxiào",
  ],
  [
    90,
    "次|都|我|，|雷|很|害|打|每|怕",
    "每次打雷，我都很害怕",
    "Měi cì dǎléi, wǒ dōu hěn hàipà",
  ],
  [91, "空|着|叶|飞|在|子|中", "叶子在空中飞着", "Yèzi zài kōngzhōng fēi zhe"],
  [
    92,
    "要|他|班|上|个|晚|加|都|每",
    "他每个晚上都要加班",
    "Tā měi ge wǎnshang dōu yào jiābān",
  ],
  [
    93,
    "要|下|间|需|一|时|段|静|我|一|冷",
    "我需要一段时间冷静一下",
    "Wǒ xūyào yí duàn shíjiān lěngjìng yíxià",
  ],
  [
    94,
    "作|的|很|辛|工|工|洁|苦|清",
    "清洁工的工作很辛苦",
    "Qīngjiégōng de gōngzuò hěn xīnkǔ",
  ],
  [
    95,
    "有|同|兴|们|趣|共|的|他",
    "他们有共同的兴趣",
    "Tāmen yǒu gòngtóng de xìngqù",
  ],
  [
    96,
    "饭|电|们|接|我|时|话|不|吃",
    "我们吃饭时不接电话",
    "Wǒmen chīfàn shí bù jiē diànhuà",
  ],
  [
    97,
    "的|捡|谁|我|到|表|了|手",
    "谁捡到了我的手表",
    "Shéi jiǎn dào le wǒ de shǒubiǎo",
  ],
  [
    98,
    "子|这|爱|钱|太|花|乱|孩",
    "这孩子太爱乱花钱",
    "Zhè háizi tài ài luàn huā qián",
  ],
  [
    99,
    "看|着|吃|视|一|着|边|边|电|她|一|饭",
    "她一边吃着饭一边看着电视",
    "Tā yìbiān chī zhe fàn yìbiān kàn zhe diànshì",
  ],
  [
    100,
    "面|子|一|晚|们|孩|呆|整|了|在|外",
    "孩子们在外面呆了一整晚",
    "Háizimen zài wàimiàn dāi le yì zhěng wǎn",
  ],
  [101, "感|冷|容|冒|天|易", "天冷容易感冒", "Tiān lěng róngyì gǎnmào"],
  [
    102,
    "用|世|语|语|是|言|界|的|通|英",
    "英语是世界通用的语言",
    "Yīngyǔ shì shìjiè tōngyòng de yǔyán",
  ],
  [103, "里|很|间|他|乱|房", "他房间里很乱", "Tā fángjiān li hěn luàn"],
  [
    104,
    "但|很|，|明|聪|力|很|不|她|努",
    "她很聪明，但很不努力",
    "Tā hěn cōngming, dàn hěn bù nǔlì",
  ],
  [105, "到|会|料|来|我|没|你", "我没料到你会来", "Wǒ méi liàodào nǐ huì lái"],
  [
    106,
    "板|扫|净|地|干|把|她|打",
    "她把地板打扫干净",
    "Tā bǎ dìbǎn dǎsǎo gānjìng",
  ],
  [107, "板|很|脏|地|肮", "地板很肮脏", "Dìbǎn hěn āngzāng"],
  [
    108,
    "蠢|是|愚|意|个|真|主|的|那",
    "那真是个愚蠢的主意",
    "Nà zhēn shì ge yúchǔn de zhǔyi",
  ],
  [109, "时|错|我|间|了|弄", "我弄错了时间", "Wǒ nòng cuò le shíjiān"],
  [
    110,
    "恩|爱|妻|们|他|分|人|二|夫|十",
    "他们夫妻二人十分恩爱",
    "Tāmen fūqī èr rén shífēn ēn'ài",
  ],
  [
    111,
    "是|任|子|责|父|教|女|母|的|管",
    "管教子女是父母的责任",
    "Guǎnjiào zǐnǚ shì fùmǔ de zérèn",
  ],
  [112, "子|事|孩|故|们|讲|为", "为孩子们讲故事", "Wèi háizimen jiǎng gùshi"],
  [
    113,
    "们|一|赶|晚|走|他|昨|狼|只|了",
    "昨晚他们赶走了一只狼",
    "Zuówǎn tāmen gǎn zǒu le yì zhī láng",
  ],
  [
    114,
    "合|睡|一|了|就|太|累|眼|着|他|，|了",
    "他太累了，一合眼就睡着了",
    "Tā tài lèi le, yì hé yǎn jiù shuìzháo le",
  ],
  [
    115,
    "报|墙|她|在|把|上|海|贴",
    "她把海报贴在墙上",
    "Tā bǎ hǎibào tiē zài qiáng shang",
  ],
  [116, "体|子|很|对|贴|他|妻", "他对妻子很体贴", "Tā duì qīzi hěn tǐtiē"],
  [
    117,
    "起|班|人|不|了|这|真|轻|年",
    "这班年轻人真了不起",
    "Zhè bān niánqīng rén zhēn liǎobuqǐ",
  ],
  [
    118,
    "个|学|有|五|上|班|生|十",
    "班上有五十个学生",
    "Bān shang yǒu wǔshí ge xuésheng",
  ],
  [119, "祝|你|万|事|如|意", "祝你万事如意", "Zhù nǐ wànshì rúyì"],
  [
    120,
    "门|打|了|，|紧|赶|来|车|跳|下|开|他",
    "车门打开了，他赶紧跳下来",
    "Chēmén dǎkāi le, tā gǎnjǐn tiào xiàlái",
  ],
  [121, "赶|条|走|那|狗|把", "把那条狗赶走", "Bǎ nà tiáo gǒu gǎn zǒu"],
  [
    122,
    "络|和|们|我|联|他|持|保|须|们|必",
    "我们必须和他们保持联络",
    "Wǒmen bìxū hé tāmen bǎochí liánluò",
  ],
  [
    123,
    "须|建|我|园|们|们|重|必|家|我|的",
    "我们必须重建我们的家园",
    "Wǒmen bìxū chóngjiàn wǒmen de jiāyuán",
  ],
  [
    124,
    "以|体|所|胖|懒|身|他|肥|很",
    "他很懒所以身体肥胖",
    "Tā hěn lǎn suǒyǐ shēntǐ féipàng",
  ],
  [
    125,
    "经|粗|了|的|已|惯|种|活|这|他|生|习|朴",
    "他已经习惯了这种粗朴的生活",
    "Tā yǐjīng xíguàn le zhè zhǒng cūpǔ de shēnghuó",
  ],
  [126, "奇|是|太|真|了|神", "真是太神奇了", "Zhēn shì tài shénqí le"],
  [
    127,
    "强|心|宝|的|这|很|奇|好|宝",
    "这宝宝的好奇心很强",
    "Zhè bǎobao de hàoqíxīn hěn qiáng",
  ],
  [128, "哪|乐|你|种|欢|喜|音", "你喜欢哪种音乐", "Nǐ xǐhuan nǎ zhǒng yīnyuè"],
  [
    129,
    "就|站|到|五|再|车|钟|过|了|分",
    "再过五分钟就到车站了",
    "Zài guò wǔ fēnzhōng jiù dào chēzhàn le",
  ],
  [
    130,
    "度|快|速|常|架|飞|这|非|的|机",
    "这架飞机的速度非常快",
    "Zhè jià fēijī de sùdù fēicháng kuài",
  ],
  [
    131,
    "并|类|左|人|能|用|脑|右",
    "人类能左右脑并用",
    "Rénlèi néng zuǒ yòu nǎo bìng yòng",
  ],
  [
    132,
    "很|员|，|她|得|男|个|帅|友|的|行|是|长|飞",
    "她的男友是个飞行员，长得很帅",
    "Tā de nányǒu shì ge fēixíngyuán, zhǎng de hěn shuài",
  ],
  [
    133,
    "把|弄|楚|要|题|清|我|问",
    "我要把问题弄清楚",
    "Wǒ yào bǎ wèntí nòng qīngchu",
  ],
  [
    134,
    "室|们|公|楼|二|办|在|的|我",
    "我们的办公室在二楼",
    "Wǒmen de bàngōngshì zài èr lóu",
  ],
  [
    135,
    "仰|信|人|没|教|个|有|他|的|宗|是",
    "他是个没有宗教信仰的人",
    "Tā shì ge méiyǒu zōngjiào xìnyǎng de rén",
  ],
  [
    136,
    "直|夜|两|风|刮|两|大|一|了|天",
    "大风一直刮了两天两夜",
    "Dàfēng yìzhí guā le liǎng tiān liǎng yè",
  ],
  [
    137,
    "到|我|车|天|因|了|，|为|班|今|上|堵|迟",
    "因为堵车，我今天上班迟到了",
    "Yīnwèi dǔchē, wǒ jīntiān shàngbān chídào le",
  ],
  [
    138,
    "类|是|球|，|欢|赛|尤|喜|球|他|其|看|足|比",
    "他喜欢看球类比赛，尤其是足球",
    "Tā xǐhuan kàn qiú lèi bǐsài, yóuqí shì zúqiú",
  ],
  [
    139,
    "得|你|差|比|了|他|远|和",
    "他和你比差得远了",
    "Tā hé nǐ bǐ chà de yuǎn le",
  ],
  [140, "赛|了|比|次|败|他|这", "这次比赛他败了", "Zhè cì bǐsài tā bài le"],
  [
    141,
    "念|的|子|他|挂|国|妻|很|出",
    "他很挂念出国的妻子",
    "Tā hěn guàniàn chūguó de qīzi",
  ],
  [
    142,
    "本|三|书|上|书|有|桌",
    "书桌上有三本书",
    "Shūzhuō shang yǒu sān běn shū",
  ],
  [
    143,
    "激|助|分|的|十|帮|你|感|我",
    "我十分感激你的帮助",
    "Wǒ shífēn gǎnjī nǐ de bāngzhù",
  ],
  [144, "得|不|事|记|件|我|这", "这件事我不记得", "Zhè jiàn shì wǒ bú jìde"],
  [
    145,
    "精|赛|太|了|场|彩|比|这",
    "这场比赛太精彩了",
    "Zhè chǎng bǐsài tài jīngcǎi le",
  ],
  [146, "绝|摇|了|拒|头|他|摇", "他摇摇头拒绝了", "Tā yáo yao tóu jùjué le"],
  [
    147,
    "照|地|护|人|心|细|顾|士|病",
    "护士细心地照顾病人",
    "Hùshi xìxīn de zhàogù bìngrén",
  ],
  [
    148,
    "免|期|束|得|太|结|了|未|假|快",
    "假期未免结束得太快了",
    "Jiàqī wèimiǎn jiéshù de tài kuài le",
  ],
  [
    149,
    "月|飞|他|搭|海|个|机|去|每|上",
    "他每个月搭飞机去上海",
    "Tā měi ge yuè dā fēijī qù Shànghǎi",
  ],
  [
    150,
    "们|赔|失|偿|损|的|该|应|他|我",
    "他们应该赔偿我的损失",
    "Tāmen yīnggāi péicháng wǒ de sǔnshī",
  ],
  [
    151,
    "声|嘻|他|笑|嘻|住|了|不|几|忍",
    "他忍不住嘻嘻笑了几声",
    "Tā rěn bú zhù xīxī xiào le jǐ shēng",
  ],
  [152, "败|计|了|我|失|划|的", "我的计划失败了", "Wǒ de jìhuà shībài le"],
  [
    153,
    "位|一|同|碰|我|老|了|到|学|街|上|在",
    "我在街上碰到了一位老同学",
    "Wǒ zài jiē shang pèngdào le yí wèi lǎo tóngxué",
  ],
  [154, "不|我|肯|他|帮", "他不肯帮我", "Tā bù kěn bāng wǒ"],
  [155, "远|走|了|别", "别走远了", "Bié zǒu yuǎn le"],
  [156, "还|来|吗|近|好", "近来还好吗", "Jìnlái hái hǎo ma"],
  [
    157,
    "双|这|以|我|下|吗|试|可|一|鞋",
    "我可以试一下这双鞋吗",
    "Wǒ kěyǐ shì yíxià zhè shuāng xié ma",
  ],
  [158, "子|我|痛|肚", "我肚子痛", "Wǒ dùzi tòng"],
  [159, "我|望|别|失|让", "别让我失望", "Bié ràng wǒ shīwàng"],
  [160, "回|急|着|家|他|赶", "他急着赶回家", "Tā jí zhe gǎn huí jiā"],
  [
    161,
    "然|孩|来|了|男|哭|起|忽|那",
    "那男孩忽然哭起来了",
    "Nà nánhái hūrán kū qǐlái le",
  ],
  [
    162,
    "都|题|决|家|找|寻|大|的|法|在|解|问|办",
    "大家都在寻找解决问题的办法",
    "Dàjiā dōu zài xúnzhǎo jiějué wèntí de bànfǎ",
  ],
  [163, "续|力|们|继|你|努|要", "你们要继续努力", "Nǐmen yào jìxù nǔlì"],
  [164, "子|字|在|把|里|写|格", "把字写在格子里", "Bǎ zì xiě zài gézi li"],
  [165, "赞|属|的|他|他|下|称", "他称赞他的下属", "Tā chēngzàn tā de xiàshǔ"],
  [
    166,
    "续|有|他|五|了|没|连|进|天|食",
    "他连续五天没有进食了",
    "Tā liánxù wǔ tiān méiyǒu jìnshí le",
  ],
  [
    167,
    "阵|突|雨|一|下|然|大|起",
    "突然下起一阵大雨",
    "Tūrán xià qǐ yí zhèn dà yǔ",
  ],
  [168, "猫|的|了|死|小|她", "她的小猫死了", "Tā de xiǎo māo sǐ le"],
  [169, "办|该|怎|我|么", "我该怎么办", "Wǒ gāi zěnme bàn"],
  [
    170,
    "个|凡|他|一|是|平|人|的",
    "他是一个平凡的人",
    "Tā shì yí ge píngfán de rén",
  ],
  [
    171,
    "在|起|父|一|他|母|住|和",
    "他和父母住在一起",
    "Tā hé fùmǔ zhù zài yìqǐ",
  ],
  [
    172,
    "破|打|了|子|跑|他|逃|窗",
    "他打破窗子逃跑了",
    "Tā dǎpò chuāngzi táopǎo le",
  ],
  [
    173,
    "名|一|员|球|他|另|把|给|传|球",
    "他把球传给另一名球员",
    "Tā bǎ qiú chuán gěi lìng yì míng qiúyuán",
  ],
  [174, "亮|儿|你|漂|真|女", "你女儿真漂亮", "Nǐ nǚ'ér zhēn piàoliang"],
  [175, "胡|留|子|想|我", "我想留胡子", "Wǒ xiǎng liú húzi"],
  [
    176,
    "惰|是|子|他|孩|懒|不|的|个",
    "他不是个懒惰的孩子",
    "Tā bú shì ge lǎnduò de háizi",
  ],
  [
    177,
    "怪|音|个|一|声|到|的|听|他|奇",
    "他听到一个奇怪的声音",
    "Tā tīngdào yí ge qíguài de shēngyīn",
  ],
  [
    178,
    "消|决|于|赛|取|由|下|了|半|雨",
    "由于下雨半决赛取消了",
    "Yóuyú xià yǔ bàn juésài qǔxiāo le",
  ],
  [
    179,
    "眼|着|他|睡|了|合|就|一",
    "他一合眼就睡着了",
    "Tā yì hé yǎn jiù shuìzháo le",
  ],
  [180, "不|久|见|好", "好久不见", "Hǎojiǔ bú jiàn"],
  [
    181,
    "生|训|师|音|练|学|老|发",
    "老师训练学生发音",
    "Lǎoshī xùnliàn xuésheng fāyīn",
  ],
  [
    182,
    "我|要|们|饭|他|午|留|定|吃|一|们",
    "他们一定要留我们吃午饭",
    "Tāmen yídìng yào liú wǒmen chī wǔfàn",
  ],
  [183, "现|的|了|实|望|我|愿", "我的愿望实现了", "Wǒ de yuànwàng shíxiàn le"],
  [
    184,
    "服|我|件|适|衣|不|这|合",
    "这件衣服不适合我",
    "Zhè jiàn yīfu bú shìhé wǒ",
  ],
  [
    185,
    "个|了|一|女|爱|他|孩|上",
    "他爱上了一个女孩",
    "Tā àishàng le yí ge nǚhái",
  ],
  [
    186,
    "满|对|充|未|望|来|我|希",
    "我对未来充满希望",
    "Wǒ duì wèilái chōngmǎn xīwàng",
  ],
  [187, "借|应|我|钱|他|答", "他答应借我钱", "Tā dāying jiè wǒ qián"],
  [188, "试|该|试|应|一|你", "你应该试一试", "Nǐ yīnggāi shì yi shì"],
  [189, "始|刚|琴|学|她|开", "她刚开始学琴", "Tā gāng kāishǐ xué qín"],
  [
    190,
    "泳|湖|险|个|游|在|里|这|很|危",
    "在这个湖里游泳很危险",
    "Zài zhège hú li yóuyǒng hěn wēixiǎn",
  ],
  [191, "量|士|他|护|温|为|体", "护士为他量体温", "Hùshi wèi tā liáng tǐwēn"],
  [
    192,
    "满|来|望|充|我|希|未|对",
    "我对未来充满希望",
    "Wǒ duì wèilái chōngmǎn xīwàng",
  ],
  [193, "总|去|季|了|过|算|冬", "冬季总算过去了", "Dōngjì zǒngsuàn guòqu le"],
  [
    194,
    "息|个|惊|这|听|吃|我|到|消|很",
    "我听到这个消息很吃惊",
    "Wǒ tīngdào zhège xiāoxi hěn chījīng",
  ],
  [195, "么|多|阔|是|洋|广|海", "海洋是多么广阔", "Hǎiyáng shì duōme guǎngkuò"],
  [
    196,
    "服|须|令|人|必|从|军|命",
    "军人必须服从命令",
    "Jūnrén bìxū fúcóng mìnglìng",
  ],
  [197, "语|快|得|英|很|他|学", "他英语学得很快", "Tā Yīngyǔ xué de hěn kuài"],
  [
    198,
    "好|影|很|这|院|务|电|服|家|的",
    "这家电影院的服务很好",
    "Zhè jiā diànyǐngyuàn de fúwù hěn hǎo",
  ],
  [
    199,
    "做|长|他|她|选|校|们",
    "她们选他做校长",
    "Tāmen xuǎn tā zuò xiàozhǎng",
  ],
  [
    200,
    "干|了|洗|她|服|净|衣|把",
    "她把衣服洗干净了",
    "Tā bǎ yīfu xǐ gānjìng le",
  ],
  [201, "得|房|钱|买|少|多", "买房得多少钱", "Mǎi fáng děi duōshao qián"],
  [202, "吃|少|餐|很|他|早", "他早餐很少吃", "Tā zǎocān hěn shǎo chī"],
  [
    203,
    "国|京|的|北|首|中|是|都",
    "北京是中国的首都",
    "Běijīng shì Zhōngguó de shǒudū",
  ],
  [204, "他|我|借|应|钱|答", "我答应借他钱", "Wǒ dāying jiè tā qián"],
  [
    205,
    "是|的|话|说|全|她|谎",
    "她说的全是谎话",
    "Tā shuō de quán shì huǎnghuà",
  ],
  [
    206,
    "插|，|随|大|小|时|话|话|人|要|便|孩|说|不",
    "大人说话时，小孩不要随便插话",
    "Dàrén shuōhuà shí, xiǎohái búyào suíbiàn chāhuà",
  ],
  [
    207,
    "善|环|改|境|人|作|们|要|工|工|求",
    "工人们要求改善工作环境",
    "Gōngrénmen yāoqiú gǎishàn gōngzuò huánjìng",
  ],
  [
    208,
    "很|指|她|戒|他|宜|的|送|只|便|一",
    "她送他的一只戒指很便宜",
    "Tā sòng tā de yì zhī jièzhi hěn piányi",
  ],
  [209, "头|了|票|中|奖|彩", "彩票中头奖了", "Cǎipiào zhòng tóujiǎng le"],
  [
    210,
    "请|证|烦|签|很|申|麻",
    "申请签证很麻烦",
    "Shēnqǐng qiānzhèng hěn máfan",
  ],
  [
    211,
    "的|物|她|嗜|购|是|大|最|好",
    "她最大的嗜好是购物",
    "Tā zuì dà de shìhào shì gòuwù",
  ],
  [
    212,
    "好|根|给|一|吗|烟|我|香",
    "给我一根香烟好吗",
    "Gěi wǒ yì gēn xiāngyān hǎo ma",
  ],
  [
    213,
    "案|的|一|确|有|答|正|没|是|个",
    "没有一个答案是正确的",
    "Méiyǒu yí ge dá'àn shì zhèngquè de",
  ],
  [
    214,
    "倒|而|饿|因|了|他|饥|晕",
    "他因饥饿而晕倒了",
    "Tā yīn jī'è ér yūndǎo le",
  ],
  [215, "合|佳|是|最|组|们|他", "他们是最佳组合", "Tāmen shì zuì jiā zǔhé"],
  [216, "束|天|夏|了|结", "夏天结束了", "Xiàtiān jiéshù le"],
  [217, "守|定|保|密|要|一|秘", "一定要保守秘密", "Yídìng yào bǎoshǒu mìmì"],
  [
    218,
    "敦|经|们|曾|伦|在|我|住",
    "我们曾经住在伦敦",
    "Wǒmen céngjīng zhù zài Lúndūn",
  ],
  [
    219,
    "他|寄|给|我|一|张|生|日|卡|片",
    "他寄给我一张生日卡片",
    "Tā jì gěi wǒ yì zhāng shēngrì kǎpiàn",
  ],
  [
    220,
    "们|他|位|被|我|单|到|了|调",
    "他们被调到我单位了",
    "Tāmen bèi diào dào wǒ dānwèi le",
  ],
  [
    221,
    "要|案|一|查|子|还|个|查|这|需",
    "这个案子还需要查一查",
    "Zhège ànzi hái xūyào chá yi chá",
  ],
  [
    222,
    "果|场|负|这|分|赛|胜|结|不|比",
    "这场比赛结果不分胜负",
    "Zhè chǎng bǐsài jiéguǒ bù fēn shèngfù",
  ],
  [223, "持|家|静|大|安|保|请", "请大家保持安静", "Qǐng dàjiā bǎochí ānjìng"],
  [
    224,
    "散|行|心|出|散|想|旅|他|去",
    "他想出去旅行散散心",
    "Tā xiǎng chūqu lǚxíng sàn san xīn",
  ],
  [
    225,
    "至|天|们|每|次|我|该|刷|应|两|少|牙",
    "我们每天至少应该刷两次牙",
    "Wǒmen měi tiān zhìshǎo yīnggāi shuā liǎng cì yá",
  ],
  [
    226,
    "我|们|之|间|可|能|会|有|些|误|会",
    "我们之间可能会有些误会",
    "Wǒmen zhījiān kěnéng huì yǒu xiē wùhuì",
  ],
  [
    227,
    "备|们|发|准|时|我|出|随",
    "我们随时准备出发",
    "Wǒmen suíshí zhǔnbèi chūfā",
  ],
  [
    228,
    "何|诉|我|人|你|许|告|不|任",
    "我不许你告诉任何人",
    "Wǒ bù xǔ nǐ gàosu rènhé rén",
  ],
  [
    229,
    "写|文|遍|作|重|他|一|把|了",
    "他把作文重写了一遍",
    "Tā bǎ zuòwén chóng xiě le yí biàn",
  ],
  [230, "气|热|天|很", "天气很热", "Tiānqì hěn rè"],
  [
    231,
    "笑|来|住|们|起|忍|我|大|不",
    "我们忍不住大笑起来",
    "Wǒmen rěn bú zhù dà xiào qǐlái",
  ],
  [
    232,
    "是|的|非|电|保|常|车|环",
    "电车是非常环保的",
    "Diànchē shì fēicháng huánbǎo de",
  ],
  [
    233,
    "时|大|一|到|我|约|后|小",
    "我大约一小时后到",
    "Wǒ dàyuē yì xiǎoshí hòu dào",
  ],
  [
    234,
    "地|迹|们|了|脱|他|奇|逃|般",
    "他们奇迹般地逃脱了",
    "Tāmen qíjì bān de táotuō le",
  ],
  [
    235,
    "加|名|防|他|国|参|军|报|了",
    "他报名参加了国防军",
    "Tā bàomíng cānjiā le guófáng jūn",
  ],
  [236, "事|要|忧|为|不|担|小", "不要为小事担忧", "Búyào wèi xiǎo shì dānyōu"],
  [
    237,
    "物|该|们|爱|应|动|我|护",
    "我们应该爱护动物",
    "Wǒmen yīnggāi àihù dòngwù",
  ],
  [238, "伤|头|受|他|了|部", "他头部受伤了", "Tā tóubù shòushāng le"],
  [239, "康|烟|害|吸|有|健", "吸烟有害健康", "Xīyān yǒuhài jiànkāng"],
  [
    240,
    "明|且|聪|奋|而|仅|勤|不|他",
    "他不仅聪明而且勤奋",
    "Tā bùjǐn cōngming érqiě qínfèn",
  ],
  [
    241,
    "怕|雨|恐|我|下|晚|看|要|今",
    "我看今晚恐怕要下雨",
    "Wǒ kàn jīnwǎn kǒngpà yào xià yǔ",
  ],
  [
    242,
    "树|里|大|棵|一|院|有|子",
    "院子里有一棵大树",
    "Yuànzi li yǒu yì kē dà shù",
  ],
  [
    243,
    "娘|可|个|分|姑|这|十|爱|小",
    "这个小姑娘十分可爱",
    "Zhège xiǎo gūniang shífēn kě'ài",
  ],
  [244, "没|事|你|和|系|这|关", "这事和你没关系", "Zhè shì hé nǐ méi guānxi"],
  [
    245,
    "出|羞|他|话|而|因|不|害|说|来",
    "他因害羞而说不出话来",
    "Tā yīn hàixiū ér shuō bu chū huà lái",
  ],
  [
    246,
    "妇|年|30|夫|结|对|了|婚|多|这",
    "这对夫妇结婚30多年了",
    "Zhè duì fūfù jiéhūn sānshí duō nián le",
  ],
  [247, "十|人|连|一|个|你|共", "连你一共十个人", "Lián nǐ yígòng shí ge rén"],
  [
    248,
    "汤|忌|的|他|富|妒|姆|财",
    "他忌妒汤姆的财富",
    "Tā jìdù Tāngmǔ de cáifù",
  ],
  [
    249,
    "发|在|倦|地|躺|疲|沙|她|上",
    "她疲倦地躺在沙发上",
    "Tā píjuàn de tǎng zài shāfā shang",
  ],
  [
    250,
    "个|说|连|头|他|了|钟|三",
    "他连说了三个钟头",
    "Tā lián shuō le sān ge zhōngtóu",
  ],
  [
    251,
    "烈|手|疼|剧|地|心|痛|她|掌",
    "她手掌心剧烈地疼痛",
    "Tā shǒuzhǎngxīn jùliè de téngtòng",
  ],
  [
    252,
    "寞|度|晚|寂|里|家|夜|个|她|的|一|了|在|过",
    "她在家里度过了一个寂寞的夜晚",
    "Tā zài jiā li dùguò le yí ge jìmò de yèwǎn",
  ],
  [253, "饭|真|这|香", "这饭真香", "Zhè fàn zhēn xiāng"],
  [
    254,
    "瓜|是|的|西|在|淡|现|季",
    "现在是西瓜的淡季",
    "Xiànzài shì xīguā de dànjì",
  ],
  [
    255,
    "个|孔|有|人|个|鼻|两|一",
    "一个人有两个鼻孔",
    "Yí ge rén yǒu liǎng ge bíkǒng",
  ],
  [
    256,
    "我|把|这|了|疯|快|作|逼|工|些",
    "这些工作快把我逼疯了",
    "Zhèxiē gōngzuò kuài bǎ wǒ bī fēng le",
  ],
  [
    257,
    "色|买|家|视|了|我|电|台|一|彩|们",
    "我们家买了一台彩色电视",
    "Wǒmen jiā mǎi le yì tái cǎisè diànshì",
  ],
  [
    258,
    "做|激|切|感|所|我|你|一|的",
    "我感激你所做的一切",
    "Wǒ gǎnjī nǐ suǒ zuò de yíqiè",
  ],
  [
    259,
    "了|买|万|中|我|票|百|彩|一",
    "我买彩票中了一百万",
    "Wǒ mǎi cǎipiào zhòng le yìbǎi wàn",
  ],
  [
    260,
    "斥|情|影|部|力|充|这|着|色|和|电|暴",
    "这部电影充斥着色情和暴力",
    "Zhè bù diànyǐng chōngchì zhe sèqíng hé bàolì",
  ],
  [
    261,
    "脾|你|下|气|控|该|一|制|应",
    "你应该控制一下脾气",
    "Nǐ yīnggāi kòngzhì yíxià píqi",
  ],
  [262, "绪|然|她|落|情|仍|低", "她仍然情绪低落", "Tā réngrán qíngxù dīluò"],
  [
    263,
    "举|石|用|他|大|了|头|起|力",
    "他用力举起了大石头",
    "Tā yònglì jǔ qǐ le dà shítou",
  ],
  [
    264,
    "狂|法|个|疯|了|的|突|有|想|他|然|一",
    "他突然有了一个疯狂的想法",
    "Tā tūrán yǒu le yí ge fēngkuáng de xiǎngfǎ",
  ],
  [
    265,
    "了|门|时|走|忘|别|你|锁",
    "你走时别忘了锁门",
    "Nǐ zǒu shí bié wàng le suǒ mén",
  ],
  [
    266,
    "购|新|们|飞|向|了|他|三|机|订|们|架|我",
    "他们向我们订购了三架新飞机",
    "Tāmen xiàng wǒmen dìnggòu le sān jià xīn fēijī",
  ],
  [
    267,
    "为|的|满|她|恶|对|厌|行|充|了|他",
    "她对他的行为充满了厌恶",
    "Tā duì tā de xíngwéi chōngmǎn le yànwù",
  ],
  [
    268,
    "旅|备|利|用|馆|们|的|设|分|充|他",
    "他们充分利用旅馆的设备",
    "Tāmen chōngfèn lìyòng lǚguǎn de shèbèi",
  ],
  [
    269,
    "保|间|间|的|之|辆|持|当|适|距|车|应",
    "车辆之间应保持适当的间距",
    "Chēliàng zhījiān yīng bǎochí shìdàng de jiānjù",
  ],
  [
    270,
    "成|蓝|发|了|她|色|染|把|头",
    "她把头发染成了蓝色",
    "Tā bǎ tóufa rǎn chéng le lánsè",
  ],
  [
    271,
    "行|辆|购|那|车|定|已|我|自|决|买",
    "我已决定购买那辆自行车",
    "Wǒ yǐ juédìng gòumǎi nà liàng zìxíngchē",
  ],
  [
    272,
    "既|得|好|快|写|字|又|他",
    "他字写得既快又好",
    "Tā zì xiě de jì kuài yòu hǎo",
  ],
  [
    273,
    "查|察|这|案|警|调|谋|件|在|杀|正",
    "警察正在调查这件谋杀案",
    "Jǐngchá zhèngzài diàochá zhè jiàn móushā'àn",
  ],
  [
    274,
    "想|起|法|让|决|办|个|这|们|问|解|一|我|题",
    "这个问题让我们想办法一起解决",
    "Zhège wèntí ràng wǒmen xiǎng bànfǎ yìqǐ jiějué",
  ],
  [
    275,
    "匙|料|塑|汤|的|是|这|把",
    "这把汤匙是塑料的",
    "Zhè bǎ tāngchí shì sùliào de",
  ],
  [
    276,
    "到|件|新|址|地|把|转|的|请|我|信",
    "请把我的信件转到新地址",
    "Qǐng bǎ wǒ de xìnjiàn zhuǎn dào xīn dìzhǐ",
  ],
  [
    277,
    "知|信|母|近|父|我|的|告|况|写|我",
    "我写信告知父母我的近况",
    "Wǒ xiě xìn gàozhī fùmǔ wǒ de jìnkuàng",
  ],
  [
    278,
    "展|业|宜|发|工|区|该|适|重|地|不",
    "该地区不适宜发展重工业",
    "Gāi dìqū bú shìyí fāzhǎn zhòng gōngyè",
  ],
  [
    279,
    "为|俗|保|存|旧|认|习|去|该|我|些|应|下|这",
    "我认为这些旧习俗应该保存下去",
    "Wǒ rènwéi zhèxiē jiù xísú yīnggāi bǎocún xiàqù",
  ],
  [
    280,
    "乱|树|了|多|砍|胡|伐|被|许|木",
    "许多树木被胡乱砍伐了",
    "Xǔduō shùmù bèi húluàn kǎnfá le",
  ],
  [
    281,
    "鱼|进|鱼|条|放|里|的|家|缸|了|们|金|了|我|买",
    "我们买了条金鱼放进了家里的鱼缸",
    "Wǒmen mǎi le tiáo jīnyú fàng jìn le jiā li de yúgāng",
  ],
  [
    282,
    "就|天|吃|今|食|中|吧|们|堂|咱|午",
    "咱们今天中午就吃食堂吧",
    "Zánmen jīntiān zhōngwǔ jiù chī shítáng ba",
  ],
  [
    283,
    "专|必|习|们|我|学|心|须",
    "我们必须专心学习",
    "Wǒmen bìxū zhuānxīn xuéxí",
  ],
  [
    284,
    "的|技|有|兴|区|能|趣|是|与|别",
    "兴趣与技能是有区别的",
    "Xìngqù yǔ jìnéng shì yǒu qūbié de",
  ],
  [285, "切|望|利|一|希|我|顺", "我希望一切顺利", "Wǒ xīwàng yíqiè shùnlì"],
  [
    286,
    "要|紧|台|张|上|的|不|时|候",
    "上台的时候不要紧张",
    "Shàng tái de shíhou búyào jǐnzhāng",
  ],
  [
    287,
    "易|车|驾|的|汽|容|我|驶|很",
    "我的汽车很容易驾驶",
    "Wǒ de qìchē hěn róngyì jiàshǐ",
  ],
  [
    288,
    "一|顺|夫|孝|子|个|丈|是|儿|我|的",
    "我丈夫是一个孝顺的儿子",
    "Wǒ zhàngfu shì yí ge xiàoshùn de érzi",
  ],
  [
    289,
    "总|准|非|是|时|他|常",
    "他总是非常准时",
    "Tā zǒngshì fēicháng zhǔnshí",
  ],
  [
    290,
    "我|西|寄|给|东|吗|了|你",
    "你给我寄东西了吗",
    "Nǐ gěi wǒ jì dōngxi le ma",
  ],
  [
    291,
    "的|太|没|真|气|了|骨|他",
    "他真的太没骨气了",
    "Tā zhēn de tài méi gǔqì le",
  ],
  [
    292,
    "店|服|度|常|旅|务|家|这|好|非|的|态",
    "这家旅店的服务态度非常好",
    "Zhè jiā lǚdiàn de fúwù tàidù fēicháng hǎo",
  ],
  [
    293,
    "头|曲|不|很|她|直|发|，|的|弯",
    "她的头发不直，很弯曲",
    "Tā de tóufa bù zhí, hěn wānqū",
  ],
  [
    294,
    "起|是|病|由|多|疾|的|菌|许|引|细",
    "许多疾病是由细菌引起的",
    "Xǔduō jíbìng shì yóu xìjūn yǐnqǐ de",
  ],
  [
    295,
    "会|很|位|社|的|地|高|他",
    "他的社会地位很高",
    "Tā de shèhuì dìwèi hěn gāo",
  ],
  [
    296,
    "里|弥|啡|气|着|漫|咖|空|味",
    "空气里弥漫着咖啡味",
    "Kōngqì li mímàn zhe kāfēi wèi",
  ],
  [
    297,
    "球|三|第|网|排|位|世|员|动|名|界|运|这",
    "这位网球运动员排名世界第三",
    "Zhè wèi wǎngqiú yùndòngyuán páimíng shìjiè dì sān",
  ],
  [298, "光|他|途|明|前", "他前途光明", "Tā qiántú guāngmíng"],
  [
    299,
    "于|可|事|以|的|放|关|你|心|情|我",
    "关于我的事情你可以放心",
    "Guānyú wǒ de shìqing nǐ kěyǐ fàngxīn",
  ],
  [300, "们|假|望|子|放|孩|盼", "孩子们盼望放假", "Háizimen pànwàng fàngjià"],
  [
    301,
    "言|以|痛|苦|她|的|心|容|难|内|形|语|用",
    "她内心的痛苦难以用语言形容",
    "Tā nèixīn de tòngkǔ nányǐ yòng yǔyán xíngróng",
  ],
  [
    302,
    "市|最|敦|一|伦|大|界|城|是|上|世|的|之",
    "伦敦是世界上最大的城市之一",
    "Lúndūn shì shìjiè shang zuì dà de chéngshì zhī yī",
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

const GROUPS = Array.from(
  { length: Math.ceil(ITEMS.length / GROUP_SIZE) },
  (_, g) => ({
    value: String(g),
    label: `Câu ${g * GROUP_SIZE + 1}–${Math.min((g + 1) * GROUP_SIZE, ITEMS.length)}`,
  }),
);

/* ───────────────────────── Component ───────────────────────── */

export default function BaiTapSapXepCau() {
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
    setBank(shuffle(q.item[1].split("|").map((t, id) => ({ t, id }))));
  }, []);

  /** Bắt đầu lượt mới theo nhóm câu đã chọn */
  const start = useCallback(
    (g: string, rnd: boolean) => {
      let list = ITEMS.filter(
        (it) => !g || Math.floor((it[0] - 1) / GROUP_SIZE) === Number(g),
      );
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
    record(ansIds.map(chipText).join("") === q.item[2]);
  };

  return (
    <div className="bt">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bt-w">
        <p className="bt-sub">
          {ITEMS.length} câu. Sắp xếp các từ thành một câu hoàn chỉnh: chạm từ
          để xếp, chạm lại để gỡ ra.
        </p>

        <div className="bt-opt">
          <span>Nhóm câu:</span>
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
              <span className="bt-tag">Câu {q.item[0]}</span>
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
                <div className="bt-zh">{q.item[2]}</div>
                <div className="bt-py">{q.item[3]}</div>
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
