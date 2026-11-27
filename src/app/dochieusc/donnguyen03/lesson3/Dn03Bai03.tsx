"use client";

import LessonViewer, { Lesson } from "../LessonViewer";

const lesson: Lesson = {
  title: "三、婚姻倒计时",
  titlePy: "Hūnyīn dàojìshí",
  titleVi: "Đếm ngược hôn nhân",
  paras: [
    [
      {
        zh: "景和景妻都觉得这样的日子再也没法过了。",
        py: "Jǐng hé Jǐng qī dōu juéde zhèyàng de rìzi zài yě méi fǎ guò le.",
        vi: "Cảnh và vợ Cảnh đều thấy những ngày tháng thế này không thể sống tiếp được nữa.",
      },
      {
        zh: "整天不是吵就是闹,谁也容不下谁。",
        py: "Zhěngtiān bú shì chǎo jiù shì nào, shéi yě róng bu xià shéi.",
        vi: "Suốt ngày không cãi thì cũng ầm ĩ, ai cũng không chịu nổi ai.",
      },
      {
        zh: "没有办法,他俩便订了个协定,给双方最后三个月的适应期。",
        py: "Méiyǒu bànfǎ, tā liǎ biàn dìng le ge xiédìng, gěi shuāngfāng zuìhòu sān gè yuè de shìyìngqī.",
        vi: "Hết cách, hai người bèn lập một thỏa thuận, cho đôi bên ba tháng cuối cùng để thích nghi.",
      },
      {
        zh: "如果三个月过后,俩人还是合不来,就友好地散伙;如果三个月后俩人都有所改进,能过下去了,就继续过。",
        py: "Rúguǒ sān gè yuè guòhòu, liǎ rén háishi hé bu lái, jiù yǒuhǎo de sànhuǒ; rúguǒ sān gè yuè hòu liǎ rén dōu yǒu suǒ gǎijìn, néng guò xiàqù le, jiù jìxù guò.",
        vi: "Nếu sau ba tháng hai người vẫn không hợp nhau thì chia tay trong hòa bình; nếu sau ba tháng cả hai có cải thiện, sống tiếp được thì tiếp tục.",
      },
    ],
    [
      {
        zh: "人往往对得到的东西不珍惜,而一旦要失去了,却又依依不舍。",
        py: "Rén wǎngwǎng duì dédào de dōngxi bù zhēnxī, ér yídàn yào shīqù le, què yòu yīyī bù shě.",
        vi: "Con người thường không trân trọng thứ đã có, nhưng một khi sắp mất thì lại lưu luyến không rời.",
      },
      {
        zh: "婚姻也是如此。",
        py: "Hūnyīn yě shì rúcǐ.",
        vi: "Hôn nhân cũng vậy.",
      },
      {
        zh: "夫妻一场,就剩最后三个月了,咬着牙也只有90多天,以后就自由了,为什么不彼此留个最后的好印象呢?",
        py: "Fūqī yì chǎng, jiù shèng zuìhòu sān gè yuè le, yǎozhe yá yě zhǐ yǒu jiǔshí duō tiān, yǐhòu jiù zìyóu le, wèishénme bù bǐcǐ liú ge zuìhòu de hǎo yìnxiàng ne?",
        vi: "Đã làm vợ chồng một lần, chỉ còn ba tháng cuối, nghiến răng chịu cũng chỉ hơn 90 ngày, sau đó là tự do, sao không để lại cho nhau ấn tượng tốt cuối cùng?",
      },
    ],
    [
      {
        zh: "于是,一向不做饭的景现在只要比妻子早下班,一回家他就下到厨房张罗饭菜,等妻子回到家时,饭菜常常都端到了桌上。",
        py: "Yúshì, yíxiàng bú zuòfàn de Jǐng xiànzài zhǐyào bǐ qīzi zǎo xiàbān, yì huíjiā tā jiù xiàdào chúfáng zhāngluo fàncài, děng qīzi huídào jiā shí, fàncài chángcháng dōu duāndào le zhuō shàng.",
        vi: "Thế là Cảnh, người xưa nay không nấu ăn, giờ hễ tan làm sớm hơn vợ, về nhà là xuống bếp lo cơm nước, đến khi vợ về, thức ăn thường đã bày sẵn trên bàn.",
      },
    ],
    [
      {
        zh: "一向爱唠叨的妻子也开始学会沉默,而且慢慢地改变了不喜欢清理房间的习惯,把杂乱无章的家收拾得既整洁又舒适。",
        py: "Yíxiàng ài láodao de qīzi yě kāishǐ xuéhuì chénmò, érqiě mànmàn de gǎibiàn le bù xǐhuan qīnglǐ fángjiān de xíguàn, bǎ záluàn wú zhāng de jiā shōushi de jì zhěngjié yòu shūshì.",
        vi: "Người vợ xưa nay hay cằn nhằn cũng bắt đầu học cách im lặng, lại dần dần bỏ thói quen không thích dọn phòng, dọn căn nhà bừa bộn thành vừa gọn gàng vừa thoải mái.",
      },
    ],
    [
      {
        zh: "景从来不陪妻子逛街,更不用说陪她买菜了。",
        py: "Jǐng cónglái bù péi qīzi guàngjiē, gèng búyòng shuō péi tā mǎicài le.",
        vi: "Cảnh xưa nay chưa từng đi dạo phố cùng vợ, huống chi là đi chợ cùng.",
      },
      {
        zh: "可是现在,周末早上只要妻子一邀请,他就提上菜篮子跟着一起去菜市场。",
        py: "Kěshì xiànzài, zhōumò zǎoshang zhǐyào qīzi yì yāoqǐng, tā jiù tíshàng càilánzi gēnzhe yìqǐ qù càishìchǎng.",
        vi: "Nhưng giờ, sáng cuối tuần hễ vợ vừa mời, anh xách giỏ đi chợ cùng ngay.",
      },
      {
        zh: "妻子邀请他的理由是:免得我三个月后离开了你,你连菜价也不知道,只好让小商小贩宰了。",
        py: "Qīzi yāoqǐng tā de lǐyóu shì: miǎnde wǒ sān gè yuè hòu líkāi le nǐ, nǐ lián càijià yě bù zhīdào, zhǐhǎo ràng xiǎo shāng xiǎo fàn zǎi le.",
        vi: "Lý do vợ mời anh là: để khỏi sau ba tháng em rời xa anh, anh đến giá rau cũng không biết, đành bị tiểu thương chặt chém.",
      },
      {
        zh: "他也觉得这话有理,现在就当是为三个月后作准备吧。",
        py: "Tā yě juéde zhè huà yǒu lǐ, xiànzài jiù dàngshì wèi sān gè yuè hòu zuò zhǔnbèi ba.",
        vi: "Anh cũng thấy lời này có lý, bây giờ coi như chuẩn bị cho ba tháng sau vậy.",
      },
    ],
    [
      {
        zh: "婚姻倒计时给他俩带来了紧迫感、危机感和末日感。",
        py: "Hūnyīn dàojìshí gěi tā liǎ dàilái le jǐnpò gǎn, wēijī gǎn hé mòrì gǎn.",
        vi: "Đếm ngược hôn nhân đem lại cho hai người cảm giác cấp bách, khủng hoảng và ngày tận thế.",
      },
      {
        zh: "他俩都在心里默默地计算着时间:我俩婚姻存在的时间还有88天、87天……还剩最后一天。",
        py: "Tā liǎ dōu zài xīnlǐ mòmò de jìsuànzhe shíjiān: wǒ liǎ hūnyīn cúnzài de shíjiān hái yǒu bāshíbā tiān, bāshíqī tiān…… hái shèng zuìhòu yì tiān.",
        vi: "Cả hai đều thầm tính thời gian trong lòng: hôn nhân của đôi ta còn 88 ngày, 87 ngày… còn đúng một ngày cuối.",
      },
    ],
    [
      {
        zh: "三个月的期限到了,他俩各自都向对方所期望的方向努力靠近了一大步。",
        py: "Sān gè yuè de qīxiàn dào le, tā liǎ gèzì dōu xiàng duìfāng suǒ qīwàng de fāngxiàng nǔlì kàojìn le yí dà bù.",
        vi: "Hạn ba tháng đã đến, mỗi người đều nỗ lực tiến một bước lớn về hướng mà đối phương mong đợi.",
      },
      {
        zh: "当婚姻倒计时为0天时,他俩似乎都十分健忘,早已“忘”掉了那个协定。",
        py: "Dāng hūnyīn dàojìshí wéi líng tiān shí, tā liǎ sìhū dōu shífēn jiànwàng, zǎoyǐ “wàng” diào le nàge xiédìng.",
        vi: "Khi đếm ngược hôn nhân về 0 ngày, hai người dường như đều rất hay quên, đã “quên” mất bản thỏa thuận kia từ lâu.",
      },
    ],
  ],
  vocab: [
    {
      zh: "容不下",
      py: "róng bu xià",
      hv: "dung bất hạ",
      vi: "không chịu nổi, không dung thứ được",
      syn: "容忍不了, 受不了",
    },
    {
      zh: "协定",
      py: "xiédìng",
      hv: "hiệp định",
      vi: "thỏa thuận (hai bên cùng tuân thủ)",
      syn: "协议",
    },
    {
      zh: "适应期",
      py: "shìyìngqī",
      hv: "thích ứng kỳ",
      vi: "thời gian thích nghi",
      syn: "磨合期",
    },
    {
      zh: "合不来",
      py: "hé bu lái",
      hv: "hợp bất lai",
      vi: "không hợp nhau",
      syn: "不和, 处不来",
    },
    {
      zh: "散伙",
      py: "sànhuǒ",
      hv: "tán hỏa",
      vi: "chia tay, giải tán",
      syn: "分手, 分开",
    },
    {
      zh: "有所改进",
      py: "yǒu suǒ gǎijìn",
      hv: "hữu sở cải tiến",
      vi: "có cải thiện, tiến bộ phần nào",
      syn: "有所进步",
    },
    {
      zh: "依依不舍",
      py: "yīyī bù shě",
      hv: "y y bất xá",
      vi: "lưu luyến không rời",
      syn: "恋恋不舍, 难舍难分",
    },
    {
      zh: "夫妻一场",
      py: "fūqī yì chǎng",
      hv: "phu thê nhất trường",
      vi: "đã từng là vợ chồng một thời",
      syn: "—",
    },
    {
      zh: "张罗",
      py: "zhāngluo",
      hv: "trương la",
      vi: "lo liệu, sắp xếp chuẩn bị",
      syn: "筹备, 操办",
    },
    {
      zh: "唠叨",
      py: "láodao",
      hv: "lao thao",
      vi: "cằn nhằn, lải nhải",
      syn: "啰唆, 絮叨",
    },
    {
      zh: "杂乱无章",
      py: "záluàn wú zhāng",
      hv: "tạp loạn vô chương",
      vi: "bừa bộn, lộn xộn",
      syn: "乱七八糟",
    },
    {
      zh: "免得",
      py: "miǎnde",
      hv: "miễn đắc",
      vi: "để khỏi, kẻo",
      syn: "以免, 省得",
    },
    {
      zh: "宰",
      py: "zǎi",
      hv: "tể",
      vi: "chặt chém (bán giá cắt cổ); giết mổ",
      syn: "敲竹杠",
    },
    {
      zh: "倒计时",
      py: "dàojìshí",
      hv: "đảo kế thời",
      vi: "đếm ngược",
      syn: "—",
    },
    {
      zh: "健忘",
      py: "jiànwàng",
      hv: "kiện vong",
      vi: "hay quên",
      syn: "忘性大",
    },
  ],
  ex1: [
    { q: "容不下", opts: ["装不下", "不原谅", "不允许", "放不下"], a: 1 },
    {
      q: "协定",
      opts: [
        "互相帮助的决定",
        "友好的决定",
        "商量后做出的共同遵守的决定",
        "经过互相帮助作出的最后的决定",
      ],
      a: 2,
    },
    {
      q: "合不来",
      opts: ["不能在一起", "无法放在一起", "不能一起来", "无法合上"],
      a: 0,
    },
    { q: "散伙", opts: ["解散", "大家都散了", "离开", "分开"], a: 3 },
    {
      q: "有所改进",
      opts: [
        "因为改变所以进步",
        "因为进步所以改变",
        "有改变、有进步",
        "所有的都改变了、进步了",
      ],
      a: 2,
    },
    {
      q: "依依不舍",
      opts: [
        "靠在那儿舍不得走",
        "不愿放开的样子",
        "非常留恋",
        "来回摇摆不能决定",
      ],
      a: 2,
    },
    {
      q: "夫妻一场",
      opts: [
        "夫妻看了一场戏",
        "夫妻演了一场戏",
        "演了一回夫妻",
        "做了一回夫妻",
      ],
      a: 3,
    },
    {
      q: "张罗",
      opts: ["打开放饭菜的东西", "准备", "寻找", "计划做什么"],
      a: 1,
    },
    { q: "免得", opts: ["免费得到", "避免得到", "为了避免", "不要得到"], a: 2 },
    { q: "宰", opts: ["杀", "被杀", "要高价", "被要了高价"], a: 2 },
    { q: "健忘", opts: ["容易忘记", "忘记健康", "不想忘记", "忘记锻炼"], a: 0 },
  ],
  ex2: [
    {
      q: "“婚姻倒计时”的意思是",
      opts: [
        "景和景妻觉得日子再也没法过了",
        "整天不是吵就是闹的日子应该马上结束",
        "景和景妻决定再过最后三个月的婚姻生活",
        "景和景妻再也无法容忍对方了",
      ],
      a: 2,
    },
    {
      q: "本文想说明",
      opts: [
        "婚姻倒计时是改变夫妻关系的一个好方法",
        "要改变夫妻关系至少要有三个月",
        "如果双方都能够改进自己,原谅对方,婚姻还是可以继续的",
        "人对已经得到的东西常常不珍惜,一旦要失去时才会觉得珍贵",
      ],
      a: 2,
    },
    {
      q: "从课文中,我们可以看到一开始",
      opts: ["景想离婚", "景妻想离婚", "他们都不想离婚", "他们都想离婚"],
      a: 3,
    },
    {
      q: "婚姻倒计时的结果是",
      opts: [
        "景不想离婚了",
        "景妻不想离婚了",
        "他们都不想离婚了",
        "他们都想离婚了",
      ],
      a: 2,
    },
    {
      q: "这种变化的原因是",
      opts: [
        "景开始做饭了",
        "景妻开始清理房间了",
        "他们开始一起去买菜了",
        "他们都向对方期望的方向努力了",
      ],
      a: 3,
    },
    {
      q: "景为什么开始做饭买菜了?",
      opts: [
        "想学会怎么做家务",
        "想给妻子留个好印象",
        "想让妻子高兴高兴",
        "不想和妻子离婚",
      ],
      a: 1,
    },
    {
      q: "景妻为什么要邀请景一起去买菜?",
      opts: [
        "想给景留个好印象",
        "想让景学会怎么买菜",
        "想和景多待一会儿",
        "不想和景离婚",
      ],
      a: 1,
    },
  ],
  ex3: [
    { q: "景和妻子常常吵架。", a: true },
    { q: "他们决定三个月后离婚。", a: false },
    { q: "开始景和景妻都非常想离婚。", a: true },
    { q: "这三个月中,景常常把饭菜做好等妻子。", a: true },
    { q: "他们的家一向是既整洁又舒适。", a: false },
    { q: "景妻是一个比较沉默的人。", a: false },
    { q: "景不喜欢陪妻子逛街,但常陪妻子逛菜场。", a: false },
    { q: "在菜场买菜一不小心就会被小商小贩宰了。", a: false },
    { q: "婚姻倒计时使他们都觉得很紧张。", a: true },
    { q: "三个月后他们都忘了他们的协定。", a: false },
  ],
  ex5: [
    "在倒计时开始以前的日子里,景和景妻的生活是什么样的?",
    "在倒计时的三个月里,他们的生活是什么样的?",
    "景以前有哪些缺点?",
    "景妻以前有哪些缺点?",
  ],
};

export default function Lesson3() {
  return <LessonViewer lesson={lesson} />;
}
