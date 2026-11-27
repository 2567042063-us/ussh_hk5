"use client";

import { useState } from "react";

import TranslationQuiz from "@shared/components/quizdich/TranslationQuiz";

// 课文: [[ [ "câu có {1|đáp án}", "pinyin", "tiếng Việt" ], ... ], ... ]  (mỗi mảng ngoài = 1 đoạn)
const P = [
  [
    [
      "昨天我们到田芳家去做客。",
      "Zuótiān wǒmen dào Tián Fāng jiā qù zuòkè.",
      "Hôm qua chúng tôi đến nhà Điền Phương làm khách.",
    ],
    [
      "去的时候,雨下{1|得}很大,不过我们一到田芳家雨就停了。",
      "Qù de shíhou, yǔ xià de hěn dà, búguò wǒmen yí dào Tián Fāng jiā yǔ jiù tíng le.",
      "Lúc đi, mưa rơi rất to, nhưng chúng tôi vừa đến nhà Điền Phương thì mưa tạnh.",
    ],
  ],
  [
    [
      "田芳家住{2|在}一个四合院儿里。",
      "Tián Fāng jiā zhù zài yí ge sìhéyuànr lǐ.",
      "Nhà Điền Phương ở trong một tứ hợp viện.",
    ],
    [
      "院子里种着一棵枣树,还种着很多花儿,有红的,有黄的,非常漂亮。",
      "Yuànzi lǐ zhòng zhe yì kē zǎoshù, hái zhòng zhe hěn duō huār, yǒu hóng de, yǒu huáng de, fēicháng piàoliang.",
      "Trong sân trồng một cây táo ta, còn trồng nhiều hoa, có hoa đỏ, có hoa vàng, rất đẹp.",
    ],
    [
      "他们家的院子不太大,但是很干净,也很安静。",
      "Tāmen jiā de yuànzi bú tài dà, dànshì hěn gānjìng, yě hěn ānjìng.",
      "Sân nhà họ không lớn lắm nhưng rất sạch sẽ, cũng rất yên tĩnh.",
    ],
  ],
  [
    [
      "田芳的爸爸妈妈一看我们来了,就走出来笑着说:“欢迎你们来我家做客,请到屋里坐吧。”",
      "Tián Fāng de bàba māma yí kàn wǒmen lái le, jiù zǒu chūlái xiào zhe shuō: “Huānyíng nǐmen lái wǒ jiā zuòkè, qǐng dào wū lǐ zuò ba.”",
      "Bố mẹ Điền Phương vừa thấy chúng tôi đến liền bước ra, cười nói: “Chào mừng các cháu đến nhà làm khách, mời vào nhà ngồi nhé.”",
    ],
  ],
  [
    [
      "田芳给我们介绍了她的爸爸妈妈。",
      "Tián Fāng gěi wǒmen jièshào le tā de bàba māma.",
      "Điền Phương giới thiệu bố mẹ cô ấy cho chúng tôi.",
    ],
  ],
  [
    [
      "我知道田芳的爸爸妈妈都是大学教授。",
      "Wǒ zhīdào Tián Fāng de bàba māma dōu shì dàxué jiàoshòu.",
      "Tôi biết bố mẹ Điền Phương đều là giáo sư đại học.",
    ],
    [
      "田芳的爸爸说:“你们就叫我们田老师和黄老师吧。”",
      "Tián Fāng de bàba shuō: “Nǐmen jiù jiào wǒmen Tián lǎoshī hé Huáng lǎoshī ba.”",
      "Bố Điền Phương nói: “Các cháu cứ gọi chúng tôi là thầy Điền và cô Hoàng nhé.”",
    ],
    [
      "黄老师热情{3|地}给我们倒茶,请我们吃水果。",
      "Huáng lǎoshī rèqíng de gěi wǒmen dào chá, qǐng wǒmen chī shuǐguǒ.",
      "Cô Hoàng nhiệt tình rót trà cho chúng tôi, mời chúng tôi ăn hoa quả.",
    ],
    [
      "她说:“你们跟田芳是同学,又是好朋友,到这儿来就像到自己家里一样,不要客气。”",
      "Tā shuō: “Nǐmen gēn Tián Fāng shì tóngxué, yòu shì hǎo péngyou, dào zhèr lái jiù xiàng dào zìjǐ jiā lǐ yíyàng, bú yào kèqi.”",
      "Cô nói: “Các cháu là bạn học, lại là bạn tốt của Điền Phương, đến đây cứ như về nhà mình, đừng khách sáo.”",
    ],
  ],
  [
    [
      "田芳说:“先参观参观我爸爸的书房吧。”",
      "Tián Fāng shuō: “Xiān cānguān cānguān wǒ bàba de shūfáng ba.”",
      "Điền Phương nói: “Trước hết tham quan phòng sách của bố mình nhé.”",
    ],
    [
      "她带着我们走进了她爸爸的书房。",
      "Tā dài zhe wǒmen zǒu jìn le tā bàba de shūfáng.",
      "Cô ấy dẫn chúng tôi đi vào phòng sách của bố.",
    ],
    [
      "房间不太大,周围摆着几个大书架。",
      "Fángjiān bú tài dà, zhōuwéi bǎi zhe jǐ ge dà shūjià.",
      "Căn phòng không lớn lắm, xung quanh bày mấy giá sách lớn.",
    ],
    [
      "书架里放着很多书,有中文的,也有外文的,有文学、历史方面的,也有政治、哲学方面的。",
      "Shūjià lǐ fàng zhe hěn duō shū, yǒu Zhōngwén de, yě yǒu wàiwén de, yǒu wénxué, lìshǐ fāngmiàn de, yě yǒu zhèngzhì, zhéxué fāngmiàn de.",
      "Trong giá sách có rất nhiều sách, có sách tiếng Trung, cũng có sách ngoại văn, có sách về văn học, lịch sử, cũng có sách về chính trị, triết học.",
    ],
    [
      "我看{4|了}一下儿,很多书我都不知道,我只认识鲁迅、毛泽东和邓小平的名字,因为我在国内时读过他们的书,当然是翻译成英文的。",
      "Wǒ kàn le yíxiàr, hěn duō shū wǒ dōu bù zhīdào, wǒ zhǐ rènshi Lǔ Xùn, Máo Zédōng hé Dèng Xiǎopíng de míngzi, yīnwèi wǒ zài guónèi shí dú guo tāmen de shū, dāngrán shì fānyì chéng Yīngwén de.",
      "Tôi xem qua một lát, rất nhiều sách tôi đều không biết, tôi chỉ biết tên Lỗ Tấn, Mao Trạch Đông và Đặng Tiểu Bình, vì lúc ở nước mình tôi đã đọc sách của họ, tất nhiên là bản dịch sang tiếng Anh.",
    ],
    [
      "窗前是一张写字台,写字台旁边放着一台新电脑,电脑还开{5|着}呢。",
      "Chuāng qián shì yì zhāng xiězìtái, xiězìtái pángbiān fàng zhe yì tái xīn diànnǎo, diànnǎo hái kāi zhe ne.",
      "Trước cửa sổ là một chiếc bàn viết, bên cạnh bàn đặt một chiếc máy tính mới, máy tính còn đang mở nữa.",
    ],
  ],
  [
    [
      "沙发后面的墙上挂着几幅字画,田芳指着这些字画给我们介绍说:“这是徐悲鸿画的画儿,那是郭沫若写的字。”",
      "Shāfā hòumiàn de qiáng shàng guà zhe jǐ fú zìhuà, Tián Fāng zhǐ zhe zhèxiē zìhuà gěi wǒmen jièshào shuō: “Zhè shì Xú Bēihóng huà de huàr, nà shì Guō Mòruò xiě de zì.”",
      "Trên tường sau ghế sofa treo mấy bức thư họa, Điền Phương chỉ vào chúng giới thiệu: “Đây là tranh do Từ Bi Hồng vẽ, kia là chữ do Quách Mạt Nhược viết.”",
    ],
    [
      "田芳问我:“你知道徐悲鸿和郭沫若是谁吗?”我说不知道。我对中国了解得太少了。",
      "Tián Fāng wèn wǒ: “Nǐ zhīdào Xú Bēihóng hé Guō Mòruò shì shéi ma?” Wǒ shuō bù zhīdào. Wǒ duì Zhōngguó liǎojiě de tài shǎo le.",
      "Điền Phương hỏi tôi: “Cậu có biết Từ Bi Hồng và Quách Mạt Nhược là ai không?” Tôi nói không biết. Tôi hiểu về Trung Quốc quá ít.",
    ],
    [
      "田芳告诉我,徐悲鸿是中国有名的画家,郭沫若是中国有名的历史学家。",
      "Tián Fāng gàosu wǒ, Xú Bēihóng shì Zhōngguó yǒumíng de huàjiā, Guō Mòruò shì Zhōngguó yǒumíng de lìshǐxuéjiā.",
      "Điền Phương cho tôi biết, Từ Bi Hồng là họa sĩ nổi tiếng của Trung Quốc, Quách Mạt Nhược là nhà sử học nổi tiếng của Trung Quốc.",
    ],
    [
      "田芳说:“这些书和字画都是我爷爷留给我们的。”",
      "Tián Fāng shuō: “Zhèxiē shū hé zìhuà dōu shì wǒ yéye liú gěi wǒmen de.”",
      "Điền Phương nói: “Những cuốn sách và thư họa này đều là ông nội để lại cho chúng tôi.”",
    ],
  ],
  [
    [
      "参观{6|完}书房,田芳说:“我们到客厅坐一会儿吧,你们不是想学包饺子吗?今天,我爸爸妈妈请你们吃饺子。”",
      "Cānguān wán shūfáng, Tián Fāng shuō: “Wǒmen dào kètīng zuò yíhuìr ba, nǐmen bú shì xiǎng xué bāo jiǎozi ma? Jīntiān, wǒ bàba māma qǐng nǐmen chī jiǎozi.”",
      "Tham quan xong phòng sách, Điền Phương nói: “Chúng ta ra phòng khách ngồi một lát nhé, các cậu chẳng phải muốn học gói sủi cảo sao? Hôm nay bố mẹ mình mời các cậu ăn sủi cảo.”",
    ],
    [
      "我们走进客厅的时候,田芳的爸爸妈妈正准备包饺子呢。",
      "Wǒmen zǒu jìn kètīng de shíhou, Tián Fāng de bàba māma zhèng zhǔnbèi bāo jiǎozi ne.",
      "Lúc chúng tôi bước vào phòng khách, bố mẹ Điền Phương đang chuẩn bị gói sủi cảo.",
    ],
    [
      "她爸爸说:“你们坐着聊天儿吧,我们两个包就行了。”",
      "Tā bàba shuō: “Nǐmen zuò zhe liáotiānr ba, wǒmen liǎng ge bāo jiù xíng le.”",
      "Bố cô ấy nói: “Các cháu cứ ngồi trò chuyện đi, hai vợ chồng chúng tôi gói là được rồi.”",
    ],
    [
      "田芳说:“我们一起来吧,麦克和玛丽还想学学呢。”",
      "Tián Fāng shuō: “Wǒmen yìqǐ lái ba, Màikè hé Mǎlì hái xiǎng xuéxue ne.”",
      "Điền Phương nói: “Chúng ta cùng làm đi, Mike và Mary còn muốn học nữa mà.”",
    ],
  ],
  [
    [
      "我们洗了手就开始包饺子。",
      "Wǒmen xǐ le shǒu jiù kāishǐ bāo jiǎozi.",
      "Chúng tôi rửa tay rồi bắt đầu gói sủi cảo.",
    ],
  ],
  [
    [
      "来中国以后我吃过一两次饺子,但没有包{7|过}饺子,这是第一次。",
      "Lái Zhōngguó yǐhòu wǒ chī guo yì liǎng cì jiǎozi, dàn méiyǒu bāo guo jiǎozi, zhè shì dì-yī cì.",
      "Sau khi đến Trung Quốc tôi đã ăn sủi cảo một hai lần, nhưng chưa từng gói, đây là lần đầu tiên.",
    ],
    [
      "我不会包,包了半天才包了一个,田芳说我包的饺子像小老鼠,说得大家都笑了。",
      "Wǒ bú huì bāo, bāo le bàntiān cái bāo le yí ge, Tián Fāng shuō wǒ bāo de jiǎozi xiàng xiǎo lǎoshǔ, shuō de dàjiā dōu xiào le.",
      "Tôi không biết gói, gói mãi mới được một cái, Điền Phương nói sủi cảo tôi gói trông như chuột nhắt, nói làm mọi người đều cười.",
    ],
  ],
  [
    [
      "我们大家一边包一边聊天儿,很热闹。我很喜欢这种欢乐的家庭气氛。",
      "Wǒmen dàjiā yìbiān bāo yìbiān liáotiānr, hěn rènao. Wǒ hěn xǐhuan zhè zhǒng huānlè de jiātíng qìfēn.",
      "Mọi người vừa gói vừa trò chuyện, rất náo nhiệt. Tôi rất thích bầu không khí gia đình vui vẻ này.",
    ],
  ],
  [
    [
      "饺子端出来{8|了}。今天的饺子真好吃,我吃了二十多个。",
      "Jiǎozi duān chūlái le. Jīntiān de jiǎozi zhēn hǎochī, wǒ chī le èrshí duō ge.",
      "Sủi cảo được bưng ra rồi. Sủi cảo hôm nay thật ngon, tôi ăn hơn hai mươi cái.",
    ],
  ],
  [
    [
      "吃完饺子,我们又坐了一会儿,然后对两位老师说:“我们该走了,谢谢你们,我们过得很愉快。”",
      "Chī wán jiǎozi, wǒmen yòu zuò le yíhuìr, ránhòu duì liǎng wèi lǎoshī shuō: “Wǒmen gāi zǒu le, xièxie nǐmen, wǒmen guò de hěn yúkuài.”",
      "Ăn xong sủi cảo, chúng tôi ngồi thêm một lát rồi nói với hai thầy cô: “Chúng em phải về rồi, cảm ơn thầy cô, chúng em đã có khoảng thời gian rất vui.”",
    ],
    [
      "两位老师一直送我们走出大门,对我们说:“欢迎你们常来玩儿。”",
      "Liǎng wèi lǎoshī yìzhí sòng wǒmen zǒu chū dàmén, duì wǒmen shuō: “Huānyíng nǐmen cháng lái wánr.”",
      "Hai thầy cô tiễn chúng tôi đến tận cổng, nói với chúng tôi: “Hoan nghênh các cháu thường xuyên đến chơi.”",
    ],
  ],
];

const ANS = ["得", "在", "地", "了", "着", "完", "过", "了"];

// Ghi chú đáp án khác (footer): [số câu, đáp án sách, đáp án khác hoặc "—", ghi chú]
const NOTES = [
  [
    6,
    "完",
    "了",
    "参观完书房 (xem xong) hoặc 参观了书房 (đã xem) đều đúng; sách chọn 完 để nhấn mạnh việc đã hoàn thành.",
  ],
  [
    3,
    "地",
    "—",
    "Trạng ngữ + 地 + động từ (热情地倒茶). Không dùng 的 ở vị trí này.",
  ],
  [
    7,
    "过",
    "—",
    "没(有) + V + 过 diễn tả chưa từng có kinh nghiệm; dùng 了 hay 着 sẽ sai nghĩa.",
  ],
];

const C = [
  [
    "田芳",
    "玛丽,我发现你汉语说得越来越好了。",
    "Mǎlì, wǒ fāxiàn nǐ Hànyǔ shuō de yuèláiyuè hǎo le.",
    "Mary, mình thấy tiếng Hán của cậu nói càng ngày càng tốt rồi.",
  ],
  [
    "玛丽",
    "哪里。还差得远呢。",
    "Nǎlǐ. Hái chà de yuǎn ne.",
    "Đâu có. Còn kém xa lắm.",
  ],
  ["田芳", "真的!", "Zhēn de!", "Thật mà!"],
  [
    "玛丽",
    "我觉得汉语越学越有意思,也越学越难了。",
    "Wǒ juéde Hànyǔ yuè xué yuè yǒu yìsi, yě yuè xué yuè nán le.",
    "Mình thấy tiếng Hán càng học càng thú vị, cũng càng học càng khó.",
  ],
  [
    "田芳",
    "是吗?你觉得哪方面最难?",
    "Shì ma? Nǐ juéde nǎ fāngmiàn zuì nán?",
    "Vậy à? Cậu thấy mặt nào khó nhất?",
  ],
  [
    "玛丽",
    "除了语法以外,我觉得最难的还是词语的用法。",
    "Chúle yǔfǎ yǐwài, wǒ juéde zuì nán de háishi cíyǔ de yòngfǎ.",
    "Ngoài ngữ pháp ra, mình thấy khó nhất vẫn là cách dùng từ.",
  ],
  [
    "田芳",
    "我跟你的感觉一样,我学的英语单词越来越多,用法也越来越难。",
    "Wǒ gēn nǐ de gǎnjué yíyàng, wǒ xué de Yīngyǔ dāncí yuèláiyuè duō, yòngfǎ yě yuèláiyuè nán.",
    "Mình cũng cảm thấy giống cậu, từ vựng tiếng Anh mình học càng ngày càng nhiều, cách dùng cũng càng ngày càng khó.",
  ],
];

// [no, word, pinyin, pos, hán việt, meaning, usage, ex zh, ex py, ex vi, synonyms, related]
const V = [
  [
    1,
    "做客",
    "zuòkè",
    "动 (离合词)",
    "TÁC KHÁCH",
    "làm khách, đến nhà người khác chơi · to be a guest",
    "去 / 到 + nơi + 做客 · 在…做客 · từ li hợp: 做过客, 做一次客",
    "周末我们去老师家做客。",
    "Zhōumò wǒmen qù lǎoshī jiā zuòkè.",
    "Cuối tuần chúng tôi đến nhà thầy giáo làm khách.",
    "拜访 bàifǎng: thăm viếng (trang trọng, có mục đích) · 串门儿 chuànménr: ghé nhà chơi (khẩu ngữ) · (trái nghĩa) 请客 qǐngkè / 待客 dàikè: mời khách",
    "做 zuò: làm · 客 kè: khách (客人, 客气, 客厅)",
  ],
  [
    2,
    "书房",
    "shūfáng",
    "名",
    "THƯ PHÒNG",
    "phòng sách · study (room)",
    "在书房 + V · 间 (lượng từ: 一间书房)",
    "爸爸在书房看书。",
    "Bàba zài shūfáng kàn shū.",
    "Bố đọc sách trong phòng sách.",
    "书斋 shūzhāi: thư trai (văn viết, trang nhã)",
    "客厅 kètīng: phòng khách · 卧室 wòshì: phòng ngủ · 厨房 chúfáng: nhà bếp",
  ],
  [
    3,
    "文学",
    "wénxué",
    "名",
    "VĂN HỌC",
    "văn học · literature",
    "文学 + 作品 / 家 / 史 · 对文学感兴趣 · 学文学",
    "我对中国文学很感兴趣。",
    "Wǒ duì Zhōngguó wénxué hěn gǎn xìngqù.",
    "Tôi rất hứng thú với văn học Trung Quốc.",
    "文艺 wényì: văn nghệ (rộng hơn, gồm cả văn học và nghệ thuật)",
    "文学家 wénxuéjiā: nhà văn học · 古典文学 gǔdiǎn wénxué: văn học cổ điển",
  ],
  [
    4,
    "政治",
    "zhèngzhì",
    "名",
    "CHÍNH TRỊ",
    "chính trị · politics",
    "关心 / 谈 / 学 + 政治 · 政治 + 家 / 学",
    "他不太关心政治。",
    "Tā bú tài guānxīn zhèngzhì.",
    "Anh ấy không mấy quan tâm đến chính trị.",
    "Không có từ đồng nghĩa hoàn toàn; gần nghĩa: 政务 zhèngwù (công việc chính quyền)",
    "政治家 zhèngzhìjiā: nhà chính trị · 政府 zhèngfǔ: chính phủ",
  ],
  [
    5,
    "哲学",
    "zhéxué",
    "名",
    "TRIẾT HỌC",
    "triết học · philosophy",
    "学 / 研究 + 哲学 · 哲学 + 家 / 系",
    "他在大学学哲学。",
    "Tā zài dàxué xué zhéxué.",
    "Anh ấy học triết học ở đại học.",
    "Gần nghĩa: 哲理 zhélǐ: triết lý, đạo lý sâu xa (chỉ nội dung tư tưởng, không phải môn học)",
    "哲学家 zhéxuéjiā: triết gia · 哲 zhé: sáng suốt, trí tuệ",
  ],
  [
    6,
    "写字台",
    "xiězìtái",
    "名",
    "TẢ TỰ ĐÀI",
    "bàn viết · writing desk",
    "Lượng từ: 张 · 一张写字台 · 在写字台上 / 旁边",
    "窗前有一张写字台。",
    "Chuāng qián yǒu yì zhāng xiězìtái.",
    "Trước cửa sổ có một chiếc bàn viết.",
    "书桌 shūzhuō: bàn học, bàn đọc sách (thông dụng hơn) · 办公桌 bàngōngzhuō: bàn làm việc",
    "写字 xiězì: viết chữ · 台 tái: bàn, bục",
  ],
  [
    7,
    "沙发",
    "shāfā",
    "名",
    "SA PHÁT (phiên âm)",
    "ghế sofa · sofa",
    "Lượng từ: 张 / 个 · 坐 / 躺 + 在沙发上",
    "他躺在沙发上看电视。",
    "Tā tǎng zài shāfā shàng kàn diànshì.",
    "Anh ấy nằm trên sofa xem tivi.",
    "Từ phiên âm từ “sofa”, không có từ đồng nghĩa thông dụng",
    "长沙发 chángshāfā: sofa dài · 沙发床 shāfāchuáng: sofa giường",
  ],
  [
    8,
    "幅",
    "fú",
    "量",
    "PHÚC",
    "lượng từ cho tranh, thư pháp, vải… · measure word for paintings, calligraphy",
    "一幅 + 画儿 / 字画 / 照片 / 地图 · 墙上挂着一幅…",
    "墙上挂着一幅画儿。",
    "Qiáng shàng guà zhe yì fú huàr.",
    "Trên tường treo một bức tranh.",
    "张 zhāng: dùng cho vật phẳng, mỏng (一张画 cũng được, nhưng 幅 trang trọng hơn) · Chú ý: 副 fù là lượng từ cho cặp, bộ (一副对联, 一副眼镜), không nhầm với 幅",
    "字画 zìhuà: thư họa · 画幅 huàfú: khổ tranh",
  ],
  [
    9,
    "爷爷",
    "yéye",
    "名",
    "GIA GIA",
    "ông nội · (paternal) grandpa",
    "Xưng hô với ông nội (hoặc người đàn ông lớn tuổi, thân mật) · 我爷爷 / 田芳的爷爷",
    "爷爷今年八十岁了。",
    "Yéye jīnnián bāshí suì le.",
    "Ông nội năm nay tám mươi tuổi.",
    "祖父 zǔfù: ông nội (văn viết, trang trọng)",
    "奶奶 nǎinai: bà nội · 外公 wàigōng / 姥爷 lǎoye: ông ngoại",
  ],
  [
    10,
    "包",
    "bāo",
    "动",
    "BAO",
    "gói, bọc (gói sủi cảo) · to wrap; to make (dumplings)",
    "Tân ngữ: 饺子 / 包子 / 书 / 礼物 · 包 + 得 / 不 + 好",
    "我们一起包饺子吧。",
    "Wǒmen yìqǐ bāo jiǎozi ba.",
    "Chúng ta cùng gói sủi cảo nhé.",
    "裹 guǒ: bọc, quấn chặt · 包装 bāozhuāng: đóng gói (hàng hóa)",
    "Nghĩa khác: 书包 shūbāo: cặp sách · 包括 bāokuò: bao gồm · 一包 yì bāo: một gói",
  ],
  [
    11,
    "老鼠",
    "lǎoshǔ",
    "名",
    "LÃO THỬ",
    "chuột · mouse; rat",
    "Lượng từ: 只 · 抓老鼠 · 小老鼠",
    "猫在抓老鼠。",
    "Māo zài zhuā lǎoshǔ.",
    "Mèo đang bắt chuột.",
    "耗子 hàozi: chuột (khẩu ngữ, phương Bắc) · 鼠 shǔ: chuột (văn viết, dùng trong từ ghép)",
    "鼠标 shǔbiāo: chuột máy tính · 米老鼠 Mǐ lǎoshǔ: chuột Mickey",
  ],
  [
    12,
    "端",
    "duān",
    "动",
    "ĐOAN",
    "bưng, bê bằng hai tay (giữ ngang) · to carry; to hold sth. level with both hands",
    "Tân ngữ: 菜 / 汤 / 饺子 / 茶 · 端 + 出来 / 上来 / 到…",
    "妈妈把汤端到桌子上。",
    "Māma bǎ tāng duān dào zhuōzi shàng.",
    "Mẹ bưng canh lên bàn.",
    "捧 pěng: bưng bằng hai bàn tay khum · 拿 ná: cầm, lấy (chung chung) · 提 tí: xách",
    "端出来 duān chūlái: bưng ra · 端正 duānzhèng: ngay ngắn, đoan chính",
  ],
];

// Bài dịch Việt – Trung: lấy câu từ 课文 (P) và 交际会话 (C); bỏ ký hiệu ô trống {n|đáp án}
const stripBlank = (s) => s.replace(/\{\d+\|([^}]*)\}/g, "$1");
const QUIZ_LESSON = {
  id: "gthnq4-lesson16-supplementary",
  title: "",
  items: [
    ...P.flat().map(([zh, pinyin, vietnamese]) => ({
      zh: stripBlank(zh),
      pinyin,
      vietnamese,
    })),
    ...C.map(([speaker, zh, pinyin, vietnamese]) => ({
      speaker,
      zh,
      pinyin,
      vietnamese,
    })),
  ],
};

function Zh({ s }) {
  return s.split(/(\{[^}]+\})/).map((p, i) => {
    const m = p.match(/^\{(\d+)\|(.+)\}$/);
    if (!m) return <span key={i}>{p}</span>;
    return (
      <mark
        key={i}
        className="ztai__zh mx-0.5 rounded bg-yellow-100 px-1 text-red-700"
      >
        <sup className="mr-0.5 text-[10px] text-gray-500">{m[1]}</sup>
        {m[2]}
      </mark>
    );
  });
}

function Sent({ zh, py, vi, all, who }) {
  const [o, setO] = useState(false);
  const show = all || o;
  return (
    <div
      onClick={() => setO(!o)}
      className={
        "cursor-pointer rounded-lg px-3 py-1 transition " +
        (show ? "bg-stone-50" : "hover:bg-gray-100")
      }
    >
      <div className="ztai__zh text-2xl leading-9 text-gray-900">
        {who && <span className="mr-2 text-stone-600">{who}:</span>}
        <Zh s={zh} />
      </div>
      {show && (
        <div className="mt-1 text-sm">
          <div className="italic text-gray-500">{py}</div>
          <div className="text-gray-900">{vi}</div>
        </div>
      )}
    </div>
  );
}

function Toggle({ all, setAll }) {
  return (
    <button
      onClick={() => setAll(!all)}
      className="mb-3 rounded-full border border-sky-300 px-3 py-1 text-sm text-sky-700 hover:bg-sky-50"
    >
      {all ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
    </button>
  );
}

export default function Lesson16BaiKhoaPhu() {
  const [tab, setTab] = useState(0);
  const [all, setAll] = useState(false);
  const tabs = ["课文", "生词", "交际会话", "Dịch Việt – Trung"];
  return (
    <div className="mx-auto p-4">
      <div className="mb-4 flex gap-2 overflow-x-auto border-b border-stone-200 pb-2">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={
              "shrink-0 rounded-lg px-4 py-1.5 text-sm transition-colors " +
              (tab === i
                ? "bg-stone-800 text-white"
                : "text-stone-600 hover:bg-stone-200")
            }
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div>
          {/* <h2 className="mb-1 text-lg font-bold">综合填空 (đã điền đáp án)</h2> */}
          <div className="mb-3 flex flex-wrap gap-2">
            {ANS.map((a, i) => (
              <span
                key={i}
                className="ztai__zh rounded bg-yellow-100 px-2 py-0.5 text-2xl text-red-700"
              >
                <sup className="mr-0.5 text-gray-500">{i + 1}</sup>
                {a}
              </span>
            ))}
          </div>
          {/* <p className="mb-2 text-xs text-gray-500">
            Bấm vào từng câu để xem pinyin + tiếng Việt.
          </p> */}
          <Toggle all={all} setAll={setAll} />
          {P.map((para, i) => (
            <div key={i} className="">
              {para.map((s, j) => (
                <Sent key={j} zh={s[0]} py={s[1]} vi={s[2]} all={all} />
              ))}
            </div>
          ))}
        </div>
      )}

      {tab === 1 && (
        <div>
          <h2 className="mb-3 text-lg font-bold">
            补充生词 · Supplementary words
          </h2>
          <div className="space-y-4">
            {V.map((v) => (
              <div
                key={v[0]}
                className="overflow-hidden rounded-sm border border-stone-300"
              >
                <div className="flex items-center gap-4 bg-gray-50 px-4 py-3">
                  <span className="w-5 text-sm text-gray-400">{v[0]}</span>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">{v[2]}</div>
                    <div className="ztai__zh text-5xl">{v[1]}</div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">({v[3]})</span>{" "}
                    <span className="font-bold text-red-700">{v[4]}</span>
                    <div className="text-gray-800">{v[5]}</div>
                  </div>
                </div>
                <div className="space-y-2 px-4 py-3 text-sm">
                  <div>
                    <span className="font-semibold">Cách dùng:</span> {v[6]}
                  </div>
                  <div className="rounded-lg bg-sky-50 p-2">
                    <div className="text-lg">{v[7]}</div>
                    <div className="italic text-gray-500">{v[8]}</div>
                    <div className="text-blue-700">{v[9]}</div>
                  </div>
                  <div>
                    <span className="font-semibold">
                      Đồng nghĩa / gần nghĩa:
                    </span>{" "}
                    {v[10]}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Mở rộng:</span> {v[11]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 2 && (
        <div>
          <h2 className="ztai__zh mb-1 text-2xl">
            交际会话 · 赞扬 Praising someone
          </h2>
          {/* <p className="mb-2 text-xs text-gray-500">
            Khen ngợi · Bấm vào từng câu để xem pinyin + tiếng Việt.
          </p> */}
          <Toggle all={all} setAll={setAll} />
          {C.map((c, i) => (
            <Sent key={i} who={c[0]} zh={c[1]} py={c[2]} vi={c[3]} all={all} />
          ))}
        </div>
      )}

      {tab === 3 && <TranslationQuiz lesson={QUIZ_LESSON} />}

      <footer className="mt-8 border-t pt-3 text-sm text-gray-600">
        <div className="mb-1 font-semibold">Ghi chú đáp án khác</div>
        <ul className="list-disc space-y-1 pl-5">
          {NOTES.map((n, i) => (
            <li key={i}>
              ({n[0]}) <b>{n[1]}</b>
              {n[2] !== "—" && (
                <>
                  {" "}
                  hoặc <b>{n[2]}</b>
                </>
              )}
              : {n[3]}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
