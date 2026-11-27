"use client";

import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  title: "四、家庭的意义",
  titlePy: "Jiātíng de yìyì",
  titleVi: "Ý nghĩa của gia đình",
  paras: [
    [
      {
        zh: "现代人为什么结婚?",
        py: "Xiàndàirén wèishénme jiéhūn?",
        vi: "Người hiện đại vì sao kết hôn?",
      },
      {
        zh: "不少人可能回答:为了爱。",
        py: "Bù shǎo rén kěnéng huídá: wèile ài.",
        vi: "Không ít người có thể trả lời: vì tình yêu.",
      },
      {
        zh: "一项调查表明,有64%的人同意“要有爱情才可以结婚”。",
        py: "Yí xiàng diàochá biǎomíng, yǒu liùshísì bǎifēnzhī de rén tóngyì “yào yǒu àiqíng cái kěyǐ jiéhūn”.",
        vi: "Một cuộc khảo sát cho thấy 64% người đồng ý “phải có tình yêu mới được kết hôn”.",
      },
      {
        zh: "但是,“爱”是什么?",
        py: "Dànshì, “ài” shì shénme?",
        vi: "Nhưng “yêu” là gì?",
      },
      {
        zh: "大多数人都受电影、电视、小说、杂志上的爱情的影响,而这种爱情与现实中的婚姻和家庭情况往往差距很大,结果人们常会感到失望。",
        py: "Dàduōshù rén dōu shòu diànyǐng, diànshì, xiǎoshuō, zázhì shàng de àiqíng de yǐngxiǎng, ér zhè zhǒng àiqíng yǔ xiànshí zhōng de hūnyīn hé jiātíng qíngkuàng wǎngwǎng chājù hěn dà, jiéguǒ rénmen cháng huì gǎndào shīwàng.",
        vi: "Đa số người chịu ảnh hưởng của tình yêu trong phim, truyền hình, tiểu thuyết, tạp chí, mà tình yêu này thường chênh lệch rất lớn so với hôn nhân, gia đình ngoài đời, kết quả là người ta hay thất vọng.",
      },
    ],
    [
      {
        zh: "其实,一个人在进入婚姻和家庭时,应该首先对婚姻和家庭有一个正确的认识,不要受电影、电视中戏剧化故事的影响。",
        py: "Qíshí, yí gè rén zài jìnrù hūnyīn hé jiātíng shí, yīnggāi shǒuxiān duì hūnyīn hé jiātíng yǒu yí gè zhèngquè de rènshi, búyào shòu diànyǐng, diànshì zhōng xìjùhuà gùshi de yǐngxiǎng.",
        vi: "Thực ra, khi bước vào hôn nhân và gia đình, trước hết nên có nhận thức đúng đắn về chúng, đừng bị ảnh hưởng bởi những câu chuyện kịch tính hóa trong phim ảnh.",
      },
      {
        zh: "我们要弄清自己心中的希望是什么,真正想要的是什么。",
        py: "Wǒmen yào nòngqīng zìjǐ xīnzhōng de xīwàng shì shénme, zhēnzhèng xiǎng yào de shì shénme.",
        vi: "Chúng ta cần làm rõ mong muốn trong lòng mình là gì, điều thực sự muốn là gì.",
      },
    ],
    [
      {
        zh: "可以说,一个家庭对人的意义远远超过了男女相爱的层面。",
        py: "Kěyǐ shuō, yí gè jiātíng duì rén de yìyì yuǎnyuǎn chāoguò le nánnǚ xiāng'ài de céngmiàn.",
        vi: "Có thể nói, ý nghĩa của gia đình đối với con người vượt xa phạm vi nam nữ yêu nhau.",
      },
      {
        zh: "首先,家庭能够把世世代代连接起来,有限的人生由于家庭的存在而使人感觉永远,家庭增加了生命的精神意义,使生命显得更加重要和严肃;",
        py: "Shǒuxiān, jiātíng nénggòu bǎ shìshì dàidài liánjiē qǐlái, yǒuxiàn de rénshēng yóuyú jiātíng de cúnzài ér shǐ rén gǎnjué yǒngyuǎn, jiātíng zēngjiā le shēngmìng de jīngshén yìyì, shǐ shēngmìng xiǎnde gèngjiā zhòngyào hé yánsù;",
        vi: "Trước hết, gia đình nối liền các thế hệ, đời người hữu hạn nhờ có gia đình mà thấy như vĩnh cửu, gia đình tăng thêm ý nghĩa tinh thần cho sinh mệnh, khiến sinh mệnh trở nên quan trọng và nghiêm túc hơn;",
      },
    ],
    [
      {
        zh: "其次,人在家庭养育子女的过程中,看着小生命一步步从婴儿、幼儿、学龄、青少年、青年到成年,内心时时激起对生命的惊叹、喜悦和迷惑,有一种送给自己另一个生命的感觉;",
        py: "Qícì, rén zài jiātíng yǎngyù zǐnǚ de guòchéng zhōng, kànzhe xiǎo shēngmìng yí bù bù cóng yīng'ér, yòu'ér, xuélíng, qīngshàonián, qīngnián dào chéngnián, nèixīn shíshí jīqǐ duì shēngmìng de jīngtàn, xǐyuè hé míhuò, yǒu yì zhǒng sòng gěi zìjǐ lìng yí gè shēngmìng de gǎnjué;",
        vi: "Thứ hai, trong quá trình nuôi dạy con cái, nhìn sinh linh bé nhỏ từng bước từ trẻ sơ sinh, nhi đồng, tuổi đi học, thiếu niên, thanh niên đến trưởng thành, trong lòng luôn trào lên sự kinh ngạc, niềm vui và bối rối về sự sống, có cảm giác như được tặng cho mình một sinh mệnh khác;",
      },
    ],
    [
      {
        zh: "再次,在家庭中,人更能感觉到自身的能力,觉得自己对孩子是重要的,必须保护他、照顾他、指导他,感觉自己是父亲、是母亲、是比孩子强的人;",
        py: "Zàicì, zài jiātíng zhōng, rén gèng néng gǎnjué dào zìshēn de nénglì, juéde zìjǐ duì háizi shì zhòngyào de, bìxū bǎohù tā, zhàogù tā, zhǐdǎo tā, gǎnjué zìjǐ shì fùqin, shì mǔqin, shì bǐ háizi qiáng de rén;",
        vi: "Thứ ba, trong gia đình, con người càng cảm nhận được năng lực bản thân, thấy mình quan trọng với con, phải bảo vệ, chăm sóc, hướng dẫn con, cảm thấy mình là cha, là mẹ, là người mạnh hơn con;",
      },
    ],
    [
      {
        zh: "最后,在家庭中,每一个人都会有清楚的人生目标,如何让新的生命成长得更好,如何为新的生命创造更好的未来,如何支持孩子实现他自己……做了父母,养育幼小生命长大,人就有了充实感、能力感和坚定的生活目标。",
        py: "Zuìhòu, zài jiātíng zhōng, měi yí gè rén dōu huì yǒu qīngchu de rénshēng mùbiāo, rúhé ràng xīn de shēngmìng chéngzhǎng de gèng hǎo, rúhé wèi xīn de shēngmìng chuàngzào gèng hǎo de wèilái, rúhé zhīchí háizi shíxiàn tā zìjǐ…… zuò le fùmǔ, yǎngyù yòuxiǎo shēngmìng zhǎngdà, rén jiù yǒu le chōngshí gǎn, nénglì gǎn hé jiāndìng de shēnghuó mùbiāo.",
        vi: "Cuối cùng, trong gia đình mỗi người đều có mục tiêu sống rõ ràng: làm sao để sinh linh mới lớn lên tốt hơn, tạo tương lai tốt đẹp hơn cho con, ủng hộ con thực hiện chính mình… Làm cha mẹ, nuôi con nhỏ khôn lớn, con người có cảm giác đầy đặn, cảm giác năng lực và mục tiêu sống kiên định.",
      },
    ],
    [
      {
        zh: "所以选择进入婚姻和家庭的基础是爱,但一个家庭给予我们的并不仅仅是爱。",
        py: "Suǒyǐ xuǎnzé jìnrù hūnyīn hé jiātíng de jīchǔ shì ài, dàn yí gè jiātíng jǐyǔ wǒmen de bìng bù jǐnjǐn shì ài.",
        vi: "Vì vậy nền tảng để chọn bước vào hôn nhân và gia đình là tình yêu, nhưng gia đình trao cho chúng ta không chỉ có tình yêu.",
      },
    ],
  ],
  vocab: [
    {
      zh: "差距",
      py: "chājù",
      hv: "sai cự",
      vi: "khoảng cách, sự chênh lệch",
      syn: "距离, 差别",
    },
    {
      zh: "失望",
      py: "shīwàng",
      hv: "thất vọng",
      vi: "thất vọng",
      syn: "扫兴",
    },
    {
      zh: "戏剧化",
      py: "xìjùhuà",
      hv: "hí kịch hoá",
      vi: "kịch tính hoá (không thực tế)",
      syn: "夸张",
    },
    {
      zh: "层面",
      py: "céngmiàn",
      hv: "tầng diện",
      vi: "phương diện, mặt, tầng",
      syn: "方面, 范围",
    },
    {
      zh: "世世代代",
      py: "shìshì dàidài",
      hv: "thế thế đại đại",
      vi: "đời đời kiếp kiếp, nhiều thế hệ",
      syn: "一代又一代",
    },
    {
      zh: "严肃",
      py: "yánsù",
      hv: "nghiêm túc",
      vi: "nghiêm túc, nghiêm trang",
      syn: "认真",
    },
    {
      zh: "养育",
      py: "yǎngyù",
      hv: "dưỡng dục",
      vi: "nuôi dạy",
      syn: "抚养, 培养",
    },
    {
      zh: "激起",
      py: "jīqǐ",
      hv: "kích khởi",
      vi: "khơi dậy, gợi lên",
      syn: "引起, 激发",
    },
    {
      zh: "惊叹",
      py: "jīngtàn",
      hv: "kinh thán",
      vi: "kinh ngạc thán phục",
      syn: "赞叹",
    },
    {
      zh: "迷惑",
      py: "míhuò",
      hv: "mê hoặc",
      vi: "bối rối, khó hiểu",
      syn: "困惑, 糊涂",
    },
    {
      zh: "指导",
      py: "zhǐdǎo",
      hv: "chỉ đạo",
      vi: "chỉ dẫn, hướng dẫn",
      syn: "引导, 教导",
    },
    {
      zh: "充实感",
      py: "chōngshí gǎn",
      hv: "sung thực cảm",
      vi: "cảm giác đầy đặn, phong phú, thỏa mãn",
      syn: "满足感",
    },
    {
      zh: "坚定",
      py: "jiāndìng",
      hv: "kiên định",
      vi: "kiên định, vững vàng",
      syn: "坚决",
    },
  ],
  ex1: [
    {
      q: "戏剧化",
      opts: ["所演的", "像戏剧那样不真实的", "有趣的", "表演非常精彩的"],
      a: 1,
    },
    { q: "层面", opts: ["范围", "高度", "意义", "价值"], a: 0 },
    {
      q: "世世代代",
      opts: ["世界各地", "世界和家庭", "一代又一代", "一年又一年"],
      a: 2,
    },
    { q: "激起", opts: ["产生", "激动", "感觉", "开始想"], a: 0 },
    { q: "迷惑", opts: ["不理解", "糊涂", "怀疑", "疑问"], a: 0 },
    {
      q: "指导",
      opts: ["指出来", "引导", "指示和教导", "指出要改正的地方"],
      a: 1,
    },
    {
      q: "充实感",
      opts: [
        "不断增加的感觉",
        "很丰富很满足的感觉",
        "感到非常真实",
        "很丰富很真实的感觉",
      ],
      a: 1,
    },
  ],
  ex2: [
    {
      q: "大多数人",
      opts: [
        "同意要结婚",
        "爱情观受电影、电视等影响",
        "婚姻和家庭存在很大的差距",
        "对爱情感到失望",
      ],
      a: 1,
    },
    {
      q: "现实中的婚姻和家庭情况",
      opts: [
        "常常很糟糕",
        "结果让人失望",
        "受电影、电视等影响",
        "与电影、电视里的不一样",
      ],
      a: 3,
    },
    {
      q: "“进入婚姻和家庭”的意思是",
      opts: [
        "结婚建立家庭",
        "对婚姻家庭进行调查研究",
        "去已经结婚的人家里访问",
        "希望得到婚姻和家庭",
      ],
      a: 0,
    },
    {
      q: "下面哪一项不是结婚前必须有的思想准备?",
      opts: [
        "正确认识婚姻和家庭",
        "了解电影和电视中的爱情故事",
        "弄清自己心中的希望",
        "知道自己想要什么",
      ],
      a: 1,
    },
    {
      q: "下面哪一项不是家庭的意义?",
      opts: [
        "使生活显得更加重要和严肃",
        "可以看到小生命一步步的成长",
        "使人更有能力感",
        "使人有了坚定的生活目标",
      ],
      a: 1,
    },
    {
      q: "下面哪一项与课文意思不符?在家庭中人能够",
      opts: [
        "感觉到自身的能力",
        "感觉自己比孩子重要",
        "感觉自己是父亲、母亲",
        "感觉自己比孩子强",
      ],
      a: 1,
    },
    {
      q: "下面哪一项与课文意思不符?一个人在家庭中必须",
      opts: ["保护孩子", "照顾孩子", "指导孩子", "比孩子强"],
      a: 3,
    },
  ],
  ex3: [
    { q: "现代人大多是为了爱而结婚。", a: true },
    { q: "大多数人结婚是受电影、电视的影响。", a: false },
    { q: "为爱而结婚常常会让人感觉失望。", a: false },
    { q: "婚姻和家庭往往差距很大。", a: false },
    { q: "结婚前应该先弄清家庭的真正意义。", a: true },
    { q: "因为男女相爱,家庭才对人有意义。", a: false },
    { q: "养育子女会让人感觉充实而有能力。", a: true },
    { q: "有了家庭就有了坚定的生活目标。", a: true },
    { q: "家庭给予我们的并不是爱。", a: false },
  ],
  ex5: [
    "现代人为什么要结婚?",
    "为什么在选择婚姻前要弄清自己心中的希望是什么?",
    "家庭的意义是什么?",
    "你对家庭的理解是什么?",
  ],
};

export default function Lesson4() {
  return <LessonViewer lesson={lesson} />;
}
