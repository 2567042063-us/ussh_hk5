"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Dữ liệu từ file CSV: words = các từ theo thứ tự xáo trộn,          */
/*  answer = các từ theo đúng thứ tự, text = câu đáp án đầy đủ,        */
/*  pinyin = phiên âm, vi = nghĩa tiếng Việt.                          */
/*  Muốn thêm câu / thêm bộ bài: thêm object vào mảng QUESTIONS.       */
/* ------------------------------------------------------------------ */

type Question = {
  id: string;
  words: string[];
  answer: string[];
  text: string;
  pinyin: string;
  vi: string;
};

const QUESTIONS: Question[] = [
  {
    id: "1",
    words: ["会弹钢琴的人", "羡慕", "很", "她"],
    answer: ["她", "很", "羡慕", "会弹钢琴的人"],
    text: "她很羡慕会弹钢琴的人。",
    pinyin: "Tā hěn xiànmù huì dàn gāngqín de rén.",
    vi: "Cô ấy rất ngưỡng mộ những người biết chơi đàn dương cầm",
  },
  {
    id: "2",
    words: ["会弹钢琴的人", "羡慕", "很", "她"],
    answer: ["会弹钢琴的人", "很", "羡慕", "她"],
    text: "会弹钢琴的人很羡慕她。",
    pinyin: "Huì dàn gāngqín de rén hěn xiànmù tā.",
    vi: "Những người biết chơi đàn dương cầm rất ngưỡng mộ cô ấy",
  },
  {
    id: "3",
    words: ["亚洲经济的", "正在", "逐渐", "提高", "增长速度"],
    answer: ["亚洲经济的", "增长速度", "正在", "逐渐", "提高"],
    text: "亚洲经济的增长速度正在逐渐提高。",
    pinyin: "Yàzhōu jīngjì de zēngzhǎng sùdù zhèngzài zhújiàn tígāo.",
    vi: "Tốc độ tăng trưởng của nền kinh tế châu Á đang dần tăng lên",
  },
  {
    id: "4",
    words: ["专为老年人", "提供的", "这椅子", "是"],
    answer: ["这椅子", "是", "专为老年人", "提供的"],
    text: "这椅子是专为老年人提供的。",
    pinyin: "Zhè yǐzǐ shì zhuān wèi lǎonián rén tígōng de.",
    vi: "Chiếc ghế này dành riêng cho người già",
  },
  {
    id: "5",
    words: ["中文", "很流利", "说得", "他"],
    answer: ["他", "中文", "说得", "很流利"],
    text: "他中文说得很流利。",
    pinyin: "Tā zhōngwén shuō dé hěn liúlì.",
    vi: "Anh ấy nói tiếng Trung rất lưu loát",
  },
  {
    id: "6",
    words: ["已经", "报名人数", "900", "超过了"],
    answer: ["报名人数", "已经", "超过了", "900"],
    text: "报名人数已经超过了 900。",
    pinyin: "Bàomíng rénshù yǐjīng chāoguòle 900.",
    vi: "Số lượng đăng ký đã vượt quá 900",
  },
  {
    id: "7",
    words: ["请", "从小到大的顺序", "按", "排列", "这些数字"],
    answer: ["请", "按", "从小到大的顺序", "排列", "这些数字"],
    text: "请按从小到大的顺序排列这些数字。",
    pinyin: "Qǐng àn cóngxiǎo dào dà de shùnxù páiliè zhèxiē shùzì.",
    vi: "Hãy sắp xếp các số này theo thứ tự từ bé đến lớn",
  },
  {
    id: "8",
    words: ["作者", "很有名", "小说的", "那本"],
    answer: ["那本", "小说的", "作者", "很有名"],
    text: "那本小说的作者很有名。",
    pinyin: "Nà běn xiǎoshuō de zuòzhě hěn yǒumíng.",
    vi: "Tác giả của cuốn tiểu thuyết kia rất nổi tiếng",
  },
  {
    id: "9",
    words: ["合格的警察", "最需要的", "一个", "是责任感"],
    answer: ["一个", "合格的警察", "最需要的", "是责任感"],
    text: "一个合格的警察最需要的是责任感。",
    pinyin: "Yīgè hégé de jǐngchá zuì xūyào de shì zérèngǎn.",
    vi: "Tinh thần trách nhiệm là điều mà một cảnh sát có trình độ cần có nhất",
  },
  {
    id: "10",
    words: ["代表们", "结束", "会议", "决定"],
    answer: ["代表们", "决定", "结束", "会议"],
    text: "代表们决定结束会议。",
    pinyin: "Dàibiǎomen juédìng jiéshù huìyì.",
    vi: "Các vị đại biểu quyết định kết thúc hội nghị",
  },
  {
    id: "11",
    words: ["对", "很熟悉", "我", "这个城市"],
    answer: ["我", "对", "这个城市", "很熟悉"],
    text: "我对这个城市很熟悉。",
    pinyin: "Wǒ duì zhège chéngshì hěn shúxī.",
    vi: "Tôi rất thân thuộc với thành phố này",
  },
  {
    id: "12",
    words: ["你", "关了", "把窗户", "吗"],
    answer: ["你", "把窗户", "关了", "吗"],
    text: "你把窗户关了吗？",
    pinyin: "Nǐ bǎ chuānghù guānle ma?",
    vi: "Bạn đóng cửa sổ chưa?",
  },
  {
    id: "13",
    words: ["拉近", "了", "人与人之间的", "手机", "距离"],
    answer: ["手机", "拉近", "了", "人与人之间的", "距离"],
    text: "手机拉近了人与人之间的距离。",
    pinyin: "Shǒujī lā jìnle rén yǔ rén zhī jiān de jùlí.",
    vi: "Điện thoại di động đã rút ngắn khoảng cách giữa con người với nhau",
  },
  {
    id: "14",
    words: ["去年秋天", "我孙子", "出生", "是", "的"],
    answer: ["我孙子", "是", "去年秋天", "出生", "的"],
    text: "我孙子是去年秋天出生的。",
    pinyin: "Wǒ sūnzǐ shì qùnián qiūtiān chūshēng de.",
    vi: "Cháu trai tôi sinh ra vào mùa thu năm ngoái",
  },
  {
    id: "15",
    words: ["打针", "的", "比吃药", "效果"],
    answer: ["打针", "比吃药", "的", "效果"],
    text: "打针比吃药的效果。",
    pinyin: "Dǎzhēn bǐ chī yào de xiàoguǒ.",
    vi: "Tiêm chủng có hiệu quả hơn dùng thuốc",
  },
  {
    id: "16",
    words: ["这个城市", "出租车的数量", "决定", "增加"],
    answer: ["这个城市", "决定", "增加", "出租车的数量"],
    text: "这个城市决定增加出租车的数量。",
    pinyin: "Zhège chéngshì juédìng zēngjiā chūzū chē de shùliàng.",
    vi: "Thành phố này đã quyết định gia tăng số lượng taxi",
  },
  {
    id: "17",
    words: ["非常", "大", "影响范围", "这场降水", "的"],
    answer: ["这场降水", "的", "影响范围", "非常", "大"],
    text: "这场降水的影响范围非常大。",
    pinyin: "Zhè chǎng jiàngshuǐ de yǐngxiǎng fànwéi fēicháng dà.",
    vi: "Phạm vi ảnh hưởng của trận mưa lần này vô cùng lớn",
  },
  {
    id: "18",
    words: ["工具书", "是", "一本", "现代汉语词典"],
    answer: ["现代汉语词典", "是", "一本", "工具书"],
    text: "现代汉语词典是一本工具书。",
    pinyin: "Xiàndài hànyǔ cídiǎn shì yī běn gōngjù shū.",
    vi: "Từ điển tiếng Trung hiện đại là cuốn sách tham khảo",
  },
  {
    id: "19",
    words: ["哥哥", "睡不着觉", "得", "兴奋"],
    answer: ["哥哥", "兴奋", "得", "睡不着觉"],
    text: "哥哥兴奋得睡不着觉。",
    pinyin: "Gēgē xīngfèn dé shuì bùzháo jué.",
    vi: "Anh trai vui mừng đến nỗi không ngủ được",
  },
  {
    id: "20",
    words: ["好处", "抽烟对你", "没有", "一点儿"],
    answer: ["抽烟对你", "没有", "一点儿", "好处"],
    text: "抽烟对你没有一点儿好处。",
    pinyin: "Chōuyān duì nǐ méiyǒu yīdiǎn er hǎochù.",
    vi: "Hút thuốc lá không có lợi cho sức khỏe",
  },
  {
    id: "21",
    words: ["完全", "国家的", "这样做", "符合", "法律规定"],
    answer: ["这样做", "完全", "符合", "国家的", "法律规定"],
    text: "这样做完全符合国家的法律规定。",
    pinyin: "Zhèyàng zuò wánquán fúhé guójiā de fǎlǜ guīdìng.",
    vi: "Điều này hoàn toàn phù hợp với quy định của pháp luật nhà nước",
  },
  {
    id: "22",
    words: ["锻炼", "健身房", "去", "他", "偶尔", "会"],
    answer: ["他", "偶尔", "会", "去", "健身房", "锻炼"],
    text: "他偶尔会去健身房锻炼。",
    pinyin: "Tā ǒu'ěr huì qù jiànshēnfáng duànliàn.",
    vi: "Anh ấy thỉnh thoảng sẽ đến phòng tập để rèn luyện sức khỏe",
  },
  {
    id: "23",
    words: ["一定", "道歉的时候", "态度诚恳", "要"],
    answer: ["道歉的时候", "一定", "要", "态度诚恳"],
    text: "道歉的时候一定要态度诚恳。",
    pinyin: "Dàoqiàn de shíhòu yīdìng yào tàidù chéngkěn.",
    vi: "Khi xin lỗi nhất định phải có thái độ thành khẩn",
  },
  {
    id: "24",
    words: ["节日", "是", "春节", "一个", "传统的"],
    answer: ["春节", "是", "一个", "传统的", "节日"],
    text: "春节是一个传统的节日。",
    pinyin: "Chūnjié shì yīgè chuántǒng de jiérì.",
    vi: "Tết là một lễ hội truyền thống",
  },
  {
    id: "25",
    words: ["北京", "给", "深刻的印象", "他", "留下了"],
    answer: ["北京", "给", "他", "留下了", "深刻的印象"],
    text: "北京给他留下了深刻的印象。",
    pinyin: "Běijīng gěi tā liú xiàle shēnkè de yìnxiàng.",
    vi: "Bắc Kinh để lại cho anh ấy những ấn tượng sâu sắc",
  },
  {
    id: "26",
    words: ["彩虹", "雨后", "常常能", "看到"],
    answer: ["雨后", "常常能", "看到", "彩虹"],
    text: "雨后常常能看到彩虹。",
    pinyin: "Yǔ hòu chángcháng néng kàn dào cǎihóng.",
    vi: "Sau cơn mưa thường thấy cầu vồng",
  },
  {
    id: "27",
    words: ["他", "日程", "把", "已经", "安排好了"],
    answer: ["他", "已经", "把", "日程", "安排好了"],
    text: "他已经把日程安排好了。",
    pinyin: "Tā yǐjīng bǎ rìchéng ānpái hǎole.",
    vi: "Cậu ấy đã sắp xếp xong lịch trình của bản thân",
  },
  {
    id: "28",
    words: ["总共", "消费", "您", "198块钱"],
    answer: ["您", "总共", "消费", "198块钱"],
    text: "您总共消费 198 块钱。",
    pinyin: "Nín zǒnggòng xiāofèi 198 kuài qián.",
    vi: "Ông đã chi tổng cộng 198 nhân dân tệ",
  },
  {
    id: "29",
    words: ["意义", "他的", "有", "很特殊的", "这段经历"],
    answer: ["他的", "这段经历", "有", "很特殊的", "意义"],
    text: "他的这段经历有很特殊的意义。",
    pinyin: "Tā de zhè duàn jīnglì yǒu hěn tèshū de yìyì.",
    vi: "Trải nghiệm này của anh ấy có ý nghĩa hết sức đặc biệt",
  },
  {
    id: "30",
    words: ["七大奇迹", "长城", "是", "世界", "之一"],
    answer: ["长城", "是", "世界", "七大奇迹", "之一"],
    text: "长城是世界七大奇迹之一。",
    pinyin: "Chángchéng shì shìjiè qī dà qíjì zhī yī.",
    vi: "Trường Thành là một trong 7 kỳ quan của thế giới",
  },
  {
    id: "31",
    words: ["一直", "班主任家的", "占线", "电话"],
    answer: ["班主任家的", "电话", "一直", "占线"],
    text: "班主任家的电话一直占线。",
    pinyin: "Bānzhǔrèn jiā de diànhuà yīzhí zhànxiàn.",
    vi: "Điện thoại nhà giáo viên chủ nhiệm cứ báo bận liên tục",
  },
  {
    id: "32",
    words: ["中老年消费者", "这种产品", "针对", "主要"],
    answer: ["这种产品", "主要", "针对", "中老年消费者"],
    text: "这种产品主要针对中老年消费者。",
    pinyin: "Zhè zhǒng chǎnpǐn zhǔyào zhēnduì zhōng lǎonián xiāofèi zhě.",
    vi: "Loại hàng hóa này chủ yếu hướng tới đối tượng người tiêu dùng trung niên và người già",
  },
  {
    id: "33",
    words: ["要", "她", "出席此次", "学术讨论会", "邀请专家"],
    answer: ["她", "要", "邀请专家", "出席此次", "学术讨论会"],
    text: "她要邀请专家出席此次学术讨论会。",
    pinyin: "Tā yào yāoqǐng zhuānjiā chūxí cǐ cì xuéshù tǎolùn huì.",
    vi: "Cô ấy muốn mời các chuyên gia tham dự thảo luận buổi hội thoại học thuật này",
  },
  {
    id: "34",
    words: ["他", "食物", "分配给了", "把", "每个士兵"],
    answer: ["他", "把", "食物", "分配给了", "每个士兵"],
    text: "他把食物分配给了每个士兵。",
    pinyin: "Tā bǎ shíwù fēnpèi gěile měi gè shìbīng.",
    vi: "Anh ấy phân phát lương thực cho từng người",
  },
  {
    id: "35",
    words: ["他的", "佩服", "勇气", "很让我"],
    answer: ["他的", "勇气", "很让我", "佩服"],
    text: "他的勇气很让我佩服。",
    pinyin: "Tā de yǒngqì hěn ràng wǒ pèifú.",
    vi: "Tôi ngưỡng mộ dũng khí của anh ấy",
  },
  {
    id: "36",
    words: ["预订", "3号桌", "已经", "了", "被", "别人"],
    answer: ["3号桌", "已经", "被", "别人", "预订", "了"],
    text: "3 号桌已经被别人预订了。",
    pinyin: "3 Hào zhuō yǐjīng bèi biérén yùdìngle.",
    vi: "Bàn 3 đã có người đặt trước rồi",
  },
  {
    id: "37",
    words: ["请", "重新", "您的密码", "输入"],
    answer: ["请", "重新", "输入", "您的密码"],
    text: "请重新输入您的密码。",
    pinyin: "Qǐng chóngxīn shūrù nín de mìmǎ.",
    vi: "Vui lòng nhập lại mật khẩu của bạn",
  },
  {
    id: "38",
    words: ["说服力", "的", "缺乏", "你", "理由"],
    answer: ["你", "的", "理由", "缺乏", "说服力"],
    text: "你的理由缺乏说服力。",
    pinyin: "Nǐ de lǐyóu quēfá shuōfú lì.",
    vi: "Lý do của bạn chưa đủ sức thuyết phục",
  },
  {
    id: "39",
    words: ["得", "采取", "措施", "我们", "立即"],
    answer: ["我们", "得", "立即", "采取", "措施"],
    text: "我们得立即采取措施。",
    pinyin: "Wǒmen dé lìjí cǎiqǔ cuòshī.",
    vi: "Chúng ta cần phải hành động ngay lập tức",
  },
  {
    id: "40",
    words: ["很羡慕", "她", "苗条的身材", "让", "人"],
    answer: ["她", "苗条的身材", "让", "人", "很羡慕"],
    text: "她苗条的身材让人很羡慕。",
    pinyin: "Tā miáotiáo de shēncái ràng rén hěn xiànmù.",
    vi: "Thân hình mảnh mai của cô ấy khiến người khác phải ngưỡng mộ",
  },
  {
    id: "41",
    words: ["领域", "这个理论", "被", "很多", "应用到"],
    answer: ["这个理论", "被", "应用到", "很多", "领域"],
    text: "这个理论被应用到很多领域。",
    pinyin: "Zhège lǐlùn bèi yìngyòng dào hěnduō lǐngyù.",
    vi: "Lý thuyết này đã được ứng dụng vào nhiều lĩnh vực thực tế",
  },
  {
    id: "42",
    words: ["好处", "抽烟", "对身体", "没有"],
    answer: ["抽烟", "对身体", "没有", "好处"],
    text: "抽烟对身体没有好处。",
    pinyin: "Chōuyān duì shēntǐ méiyǒu hǎochù.",
    vi: "Hút thuốc có hại cho sức khỏe",
  },
  {
    id: "43",
    words: ["我", "陪叔叔", "去长城", "看看", "打算"],
    answer: ["我", "打算", "陪叔叔", "去长城", "看看"],
    text: "我打算陪叔叔去长城看看。",
    pinyin: "Wǒ dǎsuàn péi shūshu qù chángchéng kàn kàn.",
    vi: "Tôi định đi Vạn Lý Trường Thành với chú tôi",
  },
  {
    id: "44",
    words: ["个", "又脏又破", "那", "白色的盘子"],
    answer: ["那", "个", "白色的盘子", "又脏又破"],
    text: "那个白色的盘子又脏又破。",
    pinyin: "Nà ge báisè de pánzi yòu zàng yòu pò.",
    vi: "Cái đĩa trắng đó bẩn và vỡ",
  },
  {
    id: "45",
    words: ["妹妹", "弹钢琴的声音", "吵醒了", "把爷爷"],
    answer: ["妹妹", "弹钢琴的声音", "把爷爷", "吵醒了"],
    text: "妹妹弹钢琴的声音把爷爷吵醒了。",
    pinyin: "Mèimei dàn gāngqín de shēngyīn bǎ yéyé chǎo xǐng le.",
    vi: "Tiếng đàn piano của em gái làm ông nội thức giấc",
  },
  {
    id: "46",
    words: ["语言表达能力", "经常阅读报纸", "提高", "能"],
    answer: ["经常阅读报纸", "能", "提高", "语言表达能力"],
    text: "经常阅读报纸能提高语言表达能力。",
    pinyin: "Jīngcháng yuèdú bàozhǐ néng tígāo yǔyán biǎodá nénglì.",
    vi: "Đọc báo thường xuyên có thể cải thiện kỹ năng diễn đạt ngôn ngữ",
  },
  {
    id: "47",
    words: ["举行", "这次电影艺术节", "在北京", "也许", "会"],
    answer: ["这次电影艺术节", "也许", "会", "在北京", "举行"],
    text: "这次电影艺术节也许会在北京举行。",
    pinyin: "Zhè cì diànyǐng yìshù jié yěxǔ huì zài běijīng jǔxíng.",
    vi: "Liên hoan phim này có thể được tổ chức ở Bắc Kinh",
  },
  {
    id: "48",
    words: ["整理", "儿子的复习笔记", "得", "很详细"],
    answer: ["儿子的复习笔记", "整理", "得", "很详细"],
    text: "儿子的复习笔记整理得很详细。",
    pinyin: "Érzǐ de fùxí bǐjì zhěnglǐ dé hěn xiángxì.",
    vi: "Ghi chép ôn tập của con trai tôi được sắp xếp rất chi tiết",
  },
  {
    id: "49",
    words: ["请假休息", "重感冒", "让他", "不得不"],
    answer: ["重感冒", "让他", "不得不", "请假休息"],
    text: "重感冒让他不得不请假休息。",
    pinyin: "Zhòng gǎnmào ràng tā bùdé bù qǐngjià xiūxí.",
    vi: "Một cơn cảm lạnh nặng đã buộc nó phải nghỉ một ngày",
  },
  {
    id: "50",
    words: ["范围", "他说的问题", "今天讨论的", "超出了"],
    answer: ["他说的问题", "超出了", "今天讨论的", "范围"],
    text: "他说的问题超出了今天讨论的范围。",
    pinyin: "Tā shuō de wèntí chāochūle jīntiān tǎolùn de fànwéi.",
    vi: "Câu hỏi của nó nằm ngoài phạm vi thảo luận của chúng tôi",
  },
  {
    id: "51",
    words: ["告诉他", "答案", "你", "最好", "别"],
    answer: ["你", "最好", "别", "告诉他", "答案"],
    text: "你最好别告诉他答案。",
    pinyin: "Nǐ zuì hǎo bié gàosù tā dá'àn.",
    vi: "Tốt hơn hết là bạn đừng nói cho nó biết câu trả lời",
  },
];

type Status = "idle" | "correct" | "wrong" | "revealed";

// Font kiểu chữ viết tay (楷体), có fallback cho nhiều hệ điều hành
const hanFont = {
  fontFamily:
    '"KaiTi", "Kaiti SC", "STKaiti", "楷体", "DFKai-SB", "BiauKai", "Noto Serif SC", serif',
};

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SentenceOrdering() {
  const [shuffle, setShuffle] = useState(false);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]); // chỉ số trong q.words
  const [status, setStatus] = useState<Status>("idle");

  const list = useMemo(
    () => (shuffle ? shuffleArray(QUESTIONS) : QUESTIONS),
    [shuffle],
  );

  const q = list[index];
  const done = status !== "idle"; // đã kiểm tra hoặc đã xem đáp án
  const isLast = index === list.length - 1;

  const goTo = (i: number) => {
    setIndex(i);
    setPicked([]);
    setStatus("idle");
  };

  const pick = (i: number) => {
    if (done || picked.includes(i)) return;
    setPicked((p) => [...p, i]);
  };

  const unpick = (pos: number) => {
    if (done) return;
    setPicked((p) => p.filter((_, k) => k !== pos));
  };

  const clear = () => {
    setPicked([]);
    setStatus("idle");
  };

  const check = () => {
    if (!q || picked.length === 0) return;
    const attempt = picked.map((i) => q.words[i]);
    const isCorrect =
      attempt.length === q.answer.length &&
      attempt.every((word, i) => word === q.answer[i]);
    setStatus(isCorrect ? "correct" : "wrong");
  };

  const reveal = () => {
    if (!q) return;
    const used = new Set<number>();
    const order = q.answer.map((token) => {
      const i = q.words.findIndex((w, k) => w === token && !used.has(k));
      if (i >= 0) used.add(i);
      return i;
    });
    setPicked(order.filter((i) => i >= 0));
    setStatus("revealed");
  };

  const next = () => goTo(isLast ? 0 : index + 1);

  if (!q) {
    return (
      <main className="min-h-screen bg-stone-100 p-6 text-stone-600">
        Không có câu hỏi nào trong bộ bài này.
      </main>
    );
  }

  return (
    <main className="min-h-screen py-4 text-stone-800">
      <div className="mx-auto w-full max-w-xl">
        <p className="mb-4 text-sm text-stone-500">
          {QUESTIONS.length} câu. Sắp xếp các từ thành một câu hoàn chỉnh: chạm
          từ để xếp, chạm lại để gỡ ra.
        </p>

        {/* Thẻ câu hỏi */}
        <section className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="tabular-nums text-stone-500">
              {index + 1}/{list.length}
            </span>
            <label className="flex cursor-pointer items-center gap-2 text-stone-700">
              <input
                type="checkbox"
                checked={shuffle}
                onChange={(e) => {
                  setShuffle(e.target.checked);
                  goTo(0);
                }}
                className="h-4 w-4 rounded border-stone-300 accent-sky-600"
              />
              Xáo trộn thứ tự câu
            </label>
          </div>

          {/* Khung xếp câu */}
          <div
            aria-label="Câu đã xếp"
            className="mb-4 flex min-h-20 flex-wrap content-start items-center gap-2 rounded-xl border-2 border-dashed border-stone-300 bg-stone-50/60 p-3"
          >
            {picked.map((wi, pos) => (
              <button
                key={`${wi}-${pos}`}
                type="button"
                onClick={() => unpick(pos)}
                disabled={done}
                style={hanFont}
                className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-2xl text-stone-900 transition hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-default disabled:hover:border-stone-300"
              >
                {q.words[wi]}
              </button>
            ))}
          </div>

          {/* Kho từ */}
          <div className="mb-5 flex flex-wrap gap-2">
            {q.words.map((w, i) => {
              const used = picked.includes(i);
              return (
                <button
                  key={`${q.id}-${i}`}
                  type="button"
                  onClick={() => pick(i)}
                  disabled={used || done}
                  style={hanFont}
                  className={[
                    "rounded-lg border px-3 py-1.5 text-2xl transition focus:outline-none focus:ring-2 focus:ring-sky-300",
                    used
                      ? "border-stone-100 bg-stone-50 text-stone-300"
                      : "border-stone-300 bg-white text-stone-900 hover:border-sky-400 hover:bg-sky-50 disabled:hover:border-stone-300 disabled:hover:bg-white",
                  ].join(" ")}
                >
                  {w}
                </button>
              );
            })}
          </div>

          {/* Nút thao tác */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={clear}
              className="rounded-xl border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300"
            >
              Xóa
            </button>
            <button
              type="button"
              onClick={reveal}
              disabled={done}
              className="rounded-xl border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300 disabled:cursor-not-allowed disabled:text-stone-400 disabled:hover:bg-white"
            >
              Xem đáp án
            </button>
            {done ? (
              <button
                type="button"
                onClick={next}
                className="rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                {isLast ? "Làm lại" : "Câu tiếp"}
              </button>
            ) : (
              <button
                type="button"
                onClick={check}
                disabled={picked.length === 0}
                className="rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:bg-sky-300"
              >
                Kiểm tra
              </button>
            )}
          </div>

          {/* Bảng đáp án */}
          {done && (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 rounded-xl bg-sky-50 p-4"
            >
              <p className="mb-2 text-sm text-sky-700">
                {status === "correct"
                  ? "Chính xác! Đáp án:"
                  : status === "wrong"
                    ? "Chưa đúng. Đáp án:"
                    : "Đáp án:"}
              </p>
              <p
                style={hanFont}
                className="text-2xl leading-snug text-stone-900"
              >
                {q.text}
              </p>
              <p className="mt-1 text-sm text-sky-700">{q.pinyin}</p>
              <p className="mt-3 border-t border-sky-100 pt-3 text-sm text-stone-700">
                {q.vi}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
