"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

type Ex = [zh: string, py: string, vi: string];
type Point = {
  name: string;
  structure?: string[];
  note?: string;
  lesson?: string; // có = điểm bổ sung từ PDF
  ex: Ex[];
};

const DATA: Point[] = [
  {
    name: "Số từ + lượng từ + danh từ",
    structure: ["数词 + 量词 + 名词"],
    ex: [
      ["我买一本书。", "Wǒ mǎi yì běn shū.", "Tôi mua một quyển sách."],
      [
        "今天早上我买了一杯奶茶。",
        "Jīntiān zǎoshang wǒ mǎile yì bēi nǎichá.",
        "Sáng nay tôi đã mua một ly trà sữa.",
      ],
      [
        "我每天都买一杯咖啡。",
        "Wǒ měitiān dōu mǎi yì bēi kāfēi.",
        "Mỗi ngày tôi đều mua một ly cà phê.",
      ],
    ],
  },
  {
    name: "这/那 + lượng từ + danh từ",
    structure: ["这/那 + 量词 + 名词"],
    ex: [
      [
        "这本书是我的。",
        "Zhè běn shū shì wǒ de.",
        "Quyển sách này là của tôi.",
      ],
      [
        "那本书是王老师的。",
        "Nà běn shū shì Wáng lǎoshī de.",
        "Quyển sách kia là của thầy Vương.",
      ],
    ],
  },
  {
    name: "Trợ từ kết cấu 的",
    structure: ["Định ngữ + 的 + Danh từ"],
    ex: [["这是我的书。", "Zhè shì wǒ de shū.", "Đây là sách của tôi."]],
  },
  {
    name: "Trợ từ kết cấu 得 (bổ ngữ trạng thái)",
    structure: ["Động từ + 得 + Tính từ/Cụm miêu tả"],
    ex: [
      [
        "我弟弟跑得很快。",
        "Wǒ dìdi pǎo de hěn kuài.",
        "Em trai tôi chạy rất nhanh.",
      ],
      [
        "他汉语说得很流利。",
        "Tā Hànyǔ shuō de hěn liúlì.",
        "Anh ấy nói tiếng Trung rất lưu loát.",
      ],
      [
        "每天他都起得很早，睡得很晚。",
        "Měitiān tā dōu qǐ de hěn zǎo, shuì de hěn wǎn.",
        "Ngày nào anh ấy cũng dậy rất sớm, ngủ rất muộn.",
      ],
    ],
  },
  {
    name: "Trợ từ kết cấu 地 (trạng ngữ)",
    structure: ["Tính từ / Phó từ / Cụm trạng ngữ + 地 + Động từ"],
    ex: [
      ["慢慢地走", "mànman de zǒu", "Đi chầm chậm."],
      ["认真地学习", "rènzhēn de xuéxí", "Học tập một cách chăm chỉ."],
      [
        "我妈妈高兴地说：“你姐姐明天回家了。”",
        "Wǒ māma gāoxìng de shuō: “Nǐ jiějie míngtiān huí jiā le.”",
        "Mẹ tôi vui mừng nói: “Chị con ngày mai về nhà rồi.”",
      ],
      [
        "我们都在努力地学习。",
        "Wǒmen dōu zài nǔlì de xuéxí.",
        "Chúng ta đều đang nỗ lực học tập.",
      ],
    ],
  },
  {
    name: "Câu hỏi lựa chọn 还是 / Liên từ 或者",
    structure: [
      "A 还是 B? (dùng trong câu hỏi)",
      "A 或者 B (dùng trong câu trần thuật)",
    ],
    note: "Tiếng Trung phải nói đủ: 喝茶还是喝咖啡 (Bài 16, quyển 2).",
    ex: [
      [
        "你喝茶还是喝咖啡？",
        "Nǐ hē chá háishì hē kāfēi?",
        "Bạn uống trà hay cà phê?",
      ],
      [
        "我喝茶或者喝咖啡都可以。",
        "Wǒ hē chá huòzhě hē kāfēi dōu kěyǐ.",
        "Trà hay cà phê tôi đều được.",
      ],
      [
        "周末我常常去图书馆看书，或者跟朋友聊天儿。",
        "Zhōumò wǒ chángcháng qù túshūguǎn kànshū, huòzhě gēn péngyou liáotiānr.",
        "Cuối tuần tôi hay đến thư viện đọc sách, hoặc nói chuyện với bạn.",
      ],
    ],
  },
  {
    name: "有一点儿 / 一点儿",
    structure: [
      "有点儿 + Tính từ (thường mang nghĩa không như ý)",
      "Tính từ + 一点儿 (so sánh nhẹ)",
      "一点儿 + Danh từ (một ít)",
    ],
    ex: [
      [
        "这件衣服有点儿大，有小一点儿的吗？",
        "Zhè jiàn yīfu yǒudiǎnr dà, yǒu xiǎo yìdiǎnr de ma?",
        "Cái áo này hơi rộng, có cái nào nhỏ hơn một chút không?",
      ],
      [
        "我买了一点儿水果。",
        "Wǒ mǎile yìdiǎnr shuǐguǒ.",
        "Tôi đã mua một ít hoa quả.",
      ],
      [
        "今天天气有点儿热。",
        "Jīntiān tiānqì yǒudiǎnr rè.",
        "Hôm nay trời hơi nóng.",
      ],
    ],
  },
  {
    name: "Câu đang tiến hành 正在 … 呢",
    structure: ["Chủ ngữ + 正在 + Động từ (+ Tân ngữ) + 呢"],
    ex: [
      [
        "麦克正在听音乐呢。",
        "Màikè zhèngzài tīng yīnyuè ne.",
        "Mike đang nghe nhạc.",
      ],
      ["我正在吃饭呢。", "Wǒ zhèngzài chīfàn ne.", "Tui đang ăn cơm nè."],
    ],
  },
  {
    name: "Câu liên động (mục đích, phương thức)",
    structure: ["Chủ ngữ + V1 (+ O1) + V2 (+ O2)"],
    ex: [
      [
        "我去超市买东西。",
        "Wǒ qù chāoshì mǎi dōngxi.",
        "Tôi đi siêu thị mua đồ.",
      ],
      [
        "我坐地铁去学校。",
        "Wǒ zuò dìtiě qù xuéxiào.",
        "Tôi đi tàu điện ngầm đến trường.",
      ],
      [
        "我常常骑车去公园。",
        "Wǒ chángcháng qí chē qù gōngyuán.",
        "Tôi thường đạp xe đến công viên.",
      ],
    ],
  },
  {
    name: "Câu so sánh: 比 / 没有 / 有 / 不比 / 跟…一样",
    structure: [
      "A + 比 + B + Adj (+ 更/还)",
      "A + 没有 + B + (那么) + Adj",
      "A + 有 + B + 那么 + Adj",
      "A + 不比 + B + Adj",
      "A + 跟/和 + B + 一样 (+ Adj)",
    ],
    note: "比: tr.115 q3 · 没有: tr.117 q3.",
    ex: [
      ["我比他高。", "Wǒ bǐ tā gāo.", "Tôi cao hơn anh ấy."],
      ["他跑得比我快。", "Tā pǎo de bǐ wǒ kuài.", "Nó chạy nhanh hơn tôi."],
      ["飞机比汽车快。", "Fēijī bǐ qìchē kuài.", "Máy bay nhanh hơn ô tô."],
      [
        "火车没有飞机快。",
        "Huǒchē méiyǒu fēijī kuài.",
        "Tàu hỏa không nhanh bằng máy bay.",
      ],
      ["我有他那么高。", "Wǒ yǒu tā nàme gāo.", "Tôi cao bằng anh ấy."],
      [
        "我不比他高。我们俩差不多高。",
        "Wǒ bù bǐ tā gāo. Wǒmen liǎ chàbuduō gāo.",
        "Tôi không cao hơn anh ấy. Hai chúng tôi cao gần bằng nhau.",
      ],
      ["我跟她一样高。", "Wǒ gēn tā yíyàng gāo.", "Tôi cao bằng cô ấy."],
    ],
  },
  {
    name: "Hành động sắp xảy ra: 快(要) / 要 / 就要 … 了",
    structure: ["快要 / 要 / 就要 / 快 + Động từ/Tính từ + 了"],
    note: "Có trạng ngữ thời gian cụ thể phía trước thì bắt buộc dùng 就要…了.",
    ex: [
      ["要下雨了。", "Yào xià yǔ le.", "Sắp mưa rồi."],
      [
        "火车快要开了，我们快点儿吧！",
        "Huǒchē kuàiyào kāi le, wǒmen kuài diǎnr ba!",
        "Tàu sắp chạy rồi, chúng ta nhanh lên thôi!",
      ],
      ["我们快下课了。", "Wǒmen kuài xiàkè le.", "Chúng ta sắp tan học rồi."],
    ],
  },
  {
    name: "Phủ định nhấn mạnh: 一 … 也 + 没/不",
    structure: ["一 + Lượng từ + (Danh từ) + 也 + 没(有)/不 + Động từ"],
    note: "Bài 10, quyển 3.",
    ex: [
      [
        "我一次病也没有得过。",
        "Wǒ yí cì bìng yě méiyǒu déguo.",
        "Tôi chưa từng bị bệnh lần nào.",
      ],
      [
        "长城太远了，我一次也没去过。",
        "Chángchéng tài yuǎn le, wǒ yí cì yě méi qùguo.",
        "Vạn Lý Trường Thành xa quá, tôi một lần cũng chưa đi.",
      ],
      [
        "这种中成药一点儿也不苦。",
        "Zhè zhǒng zhōngchéngyào yìdiǎnr yě bù kǔ.",
        "Loại thuốc Bắc này chẳng đắng tí nào.",
      ],
      [
        "去年，我一个汉字也不会。",
        "Qùnián, wǒ yí gè Hànzì yě bú huì.",
        "Năm ngoái tôi một chữ Hán cũng không biết.",
      ],
    ],
  },
  {
    name: "Phân biệt 再 / 又",
    structure: [
      "再 + Động từ: sẽ lặp lại (tương lai)",
      "又 + Động từ: đã lặp lại (quá khứ)",
    ],
    note: "Bài 1, quyển 3 (ngữ pháp tr.24).",
    ex: [
      [
        "你过一会儿再来电话吧。",
        "Nǐ guò yíhuìr zài lái diànhuà ba.",
        "Lát nữa bạn gọi lại đi.",
      ],
      ["他又来电话了。", "Tā yòu lái diànhuà le.", "Anh ấy lại gọi điện rồi."],
      [
        "我明天再去北京。",
        "Wǒ míngtiān zài qù Běijīng.",
        "Ngày mai tôi lại đi Bắc Kinh.",
      ],
    ],
  },
  {
    name: "Động từ trùng điệp",
    structure: ["V V / V 一 V / V 了 V (thử, nhẹ nhàng, thời gian ngắn)"],
    ex: [
      [
        "我可以试试这件衣服吗？",
        "Wǒ kěyǐ shìshi zhè jiàn yīfu ma?",
        "Tôi mặc thử cái áo này được không?",
      ],
      [
        "我们休息休息吧。",
        "Wǒmen xiūxi xiūxi ba.",
        "Chúng ta nghỉ ngơi một chút đi.",
      ],
    ],
  },
  {
    name: "又 … 又 …",
    structure: ["又 + Adj1 + 又 + Adj2 (vừa… vừa…)"],
    ex: [
      [
        "这件衣服又好看又便宜。",
        "Zhè jiàn yīfu yòu hǎokàn yòu piányi.",
        "Cái áo này vừa đẹp vừa rẻ.",
      ],
      ["我又累又饿。", "Wǒ yòu lèi yòu è.", "Tôi vừa mệt vừa đói."],
      [
        "她的男朋友又高又帅。",
        "Tā de nánpéngyou yòu gāo yòu shuài.",
        "Bạn trai cô ấy vừa cao vừa đẹp trai.",
      ],
      [
        "他又聪明又努力。",
        "Tā yòu cōngmíng yòu nǔlì.",
        "Anh ấy vừa thông minh vừa chăm chỉ.",
      ],
    ],
  },
  {
    name: "以前 / 以后",
    structure: [
      "Động từ/Cụm từ + 以前 (trước khi…)",
      "Động từ/Cụm từ + 以后 (sau khi…)",
    ],
    ex: [
      [
        "去中国以前，我不会说汉语。",
        "Qù Zhōngguó yǐqián, wǒ bú huì shuō Hànyǔ.",
        "Trước khi đi Trung Quốc, tôi không biết nói tiếng Trung.",
      ],
      [
        "吃饭以前要洗手。",
        "Chīfàn yǐqián yào xǐshǒu.",
        "Trước khi ăn cơm phải rửa tay.",
      ],
      [
        "下课以后，我去图书馆。",
        "Xiàkè yǐhòu, wǒ qù túshūguǎn.",
        "Sau khi tan học, tôi đi thư viện.",
      ],
    ],
  },
  {
    name: "Danh từ phương vị (câu tồn hiện)",
    structure: ["Nơi chốn/Vật + 上/里/下… + 有 + Danh từ"],
    ex: [
      [
        "桌子上有一本书。",
        "Zhuōzi shang yǒu yì běn shū.",
        "Trên bàn có một quyển sách.",
      ],
      [
        "学校里有洗手间吗？",
        "Xuéxiào lǐ yǒu xǐshǒujiān ma?",
        "Trong trường có nhà vệ sinh không?",
      ],
    ],
  },
  {
    name: "Giới từ 离 / 从 / 往",
    structure: [
      "A + 离 + B + Adj (khoảng cách)",
      "从 + A + 到 + B (từ … đến …)",
      "往 + Phương hướng + Động từ (hướng đi)",
    ],
    ex: [
      [
        "我家离学校很远。",
        "Wǒ jiā lí xuéxiào hěn yuǎn.",
        "Nhà tôi cách trường rất xa.",
      ],
      [
        "从星期一到星期六我都学汉语。",
        "Cóng xīngqīyī dào xīngqīliù wǒ dōu xué Hànyǔ.",
        "Từ thứ Hai đến thứ Bảy tôi đều học tiếng Trung.",
      ],
      [
        "你一直往前走就到书店。",
        "Nǐ yìzhí wǎng qián zǒu jiù dào shūdiàn.",
        "Bạn cứ đi thẳng về phía trước là đến hiệu sách.",
      ],
    ],
  },
  {
    name: "Bổ ngữ trạng thái",
    structure: ["S + V + O + V + 得 + Adj", "S + V + 得 + Adj"],
    ex: [
      [
        "他学汉语学得很好。",
        "Tā xué Hànyǔ xué de hěn hǎo.",
        "Anh ấy học tiếng Trung rất giỏi.",
      ],
      ["他说得很快。", "Tā shuō de hěn kuài.", "Anh ấy nói rất nhanh."],
    ],
  },
  {
    name: "因为 … 所以 …",
    structure: ["因为 + Nguyên nhân，所以 + Kết quả (Vì… nên…)"],
    note: "Tr.43 q3.",
    ex: [
      [
        "因为下雨，所以我不上课。",
        "Yīnwèi xià yǔ, suǒyǐ wǒ bú shàngkè.",
        "Vì trời mưa nên tôi không đi học.",
      ],
      [
        "因为我家里有事，所以明天想请一天假。",
        "Yīnwèi wǒ jiālǐ yǒu shì, suǒyǐ míngtiān xiǎng qǐng yì tiān jià.",
        "Vì nhà em có việc nên ngày mai em muốn xin nghỉ một ngày ạ.",
      ],
      [
        "因为我今天不舒服，所以请个假。",
        "Yīnwèi wǒ jīntiān bù shūfu, suǒyǐ qǐng gè jià.",
        "Vì hôm nay tôi không khỏe nên xin nghỉ phép.",
      ],
    ],
  },
  {
    name: "Bổ ngữ số lượng",
    structure: ["Động từ + 了 + Số lượng + Tân ngữ (+ 了)"],
    ex: [
      [
        "我买了一本书（了）。",
        "Wǒ mǎile yì běn shū (le).",
        "Tôi đã mua một quyển sách.",
      ],
      [
        "他睡了一个小时了。",
        "Tā shuìle yí gè xiǎoshí le.",
        "Anh ấy đã ngủ một tiếng rồi.",
      ],
    ],
  },
  {
    name: "Bổ ngữ xu hướng đơn 来 / 去",
    structure: [
      "Động từ + 来/去",
      "Động từ + Địa điểm + 来/去 (địa điểm đứng trước 来/去)",
    ],
    note: "来: hướng về người nói · 去: hướng xa người nói.",
    ex: [
      [
        "他买来一本书了。",
        "Tā mǎilái yì běn shū le.",
        "Anh ấy mua một quyển sách về rồi.",
      ],
      [
        "我们进教室去吧。",
        "Wǒmen jìn jiàoshì qù ba.",
        "Chúng ta vào lớp thôi.",
      ],
    ],
  },
  {
    name: "Trợ từ động thái 过 (trải nghiệm)",
    structure: ["Động từ + 过 (đã từng…)", "没(有) + Động từ + 过"],
    ex: [
      ["我去过北京。", "Wǒ qùguo Běijīng.", "Tôi đã từng đến Bắc Kinh."],
      [
        "我没有坐过飞机。",
        "Wǒ méiyǒu zuòguo fēijī.",
        "Tôi chưa từng đi máy bay.",
      ],
      [
        "这个菜我以前没吃过。",
        "Zhège cài wǒ yǐqián méi chīguo.",
        "Món này trước đây tôi chưa ăn bao giờ.",
      ],
      [
        "我在中国公司当过一个月翻译。",
        "Wǒ zài Zhōngguó gōngsī dāngguo yí gè yuè fānyì.",
        "Tôi từng làm phiên dịch một tháng ở công ty Trung Quốc.",
      ],
    ],
  },
  {
    name: "V + 了 + O + 就 + V (O)",
    structure: ["V + 了 + O + 就 + V + (O) + (了)"],
    ex: [
      [
        "我吃了饭就去学校。",
        "Wǒ chīle fàn jiù qù xuéxiào.",
        "Tôi ăn cơm xong là đi học ngay.",
      ],
      [
        "我下了课就回家（了）。",
        "Wǒ xiàle kè jiù huí jiā (le).",
        "Tan học là tôi về nhà ngay.",
      ],
    ],
  },
  {
    name: "Phân biệt 就 / 才",
    structure: [
      "就: sự việc xảy ra sớm, nhanh, thuận lợi",
      "才: sự việc xảy ra muộn, chậm, khó khăn",
    ],
    ex: [
      [
        "六点上课，老师五点就来了，学生们七点才来。",
        "Liù diǎn shàngkè, lǎoshī wǔ diǎn jiù lái le, xuéshengmen qī diǎn cái lái.",
        "Sáu giờ vào học, thầy năm giờ đã đến, học sinh bảy giờ mới đến.",
      ],
      [
        "我每天早上七点就起床了。",
        "Wǒ měitiān zǎoshang qī diǎn jiù qǐchuáng le.",
        "Mỗi sáng bảy giờ tôi đã dậy.",
      ],
      [
        "我每天早上十一点才起床。",
        "Wǒ měitiān zǎoshang shíyī diǎn cái qǐchuáng.",
        "Mỗi sáng mười một giờ tôi mới dậy.",
      ],
    ],
  },
  {
    name: "要是 …（的话），就 …",
    structure: ["要是 + Điều kiện (的话)，就 + Kết quả (Nếu… thì…)"],
    ex: [
      [
        "要是下雨（的话），我就不去上课。",
        "Yàoshi xià yǔ (de huà), wǒ jiù bú qù shàngkè.",
        "Nếu trời mưa thì tôi sẽ không đi học.",
      ],
      [
        "要是你不喜欢，你就不要买。",
        "Yàoshi nǐ bù xǐhuan, nǐ jiù búyào mǎi.",
        "Nếu bạn không thích thì đừng mua.",
      ],
      [
        "要是明天下雨，我们就不去公园了。",
        "Yàoshi míngtiān xià yǔ, wǒmen jiù bú qù gōngyuán le.",
        "Nếu mai trời mưa thì chúng ta sẽ không đi công viên.",
      ],
    ],
  },
  {
    name: "虽然 … 但是 …",
    structure: ["虽然 + Vế 1，但是 + Vế 2 (Mặc dù… nhưng…)"],
    ex: [
      [
        "虽然下雨，但是我还去上课。",
        "Suīrán xià yǔ, dànshì wǒ hái qù shàngkè.",
        "Mặc dù trời mưa nhưng tôi vẫn đi học.",
      ],
      [
        "虽然汉语很难，但是我很喜欢学习汉语。",
        "Suīrán Hànyǔ hěn nán, dànshì wǒ hěn xǐhuan xuéxí Hànyǔ.",
        "Tuy tiếng Trung rất khó nhưng tôi rất thích học.",
      ],
    ],
  },
  {
    name: "Bổ ngữ kết quả (上, 开, 到, 着, 成, 在, 好)",
    structure: [
      "Động từ + Bổ ngữ kết quả (+ 了)",
      "没(有) + Động từ + Bổ ngữ kết quả (không dùng 了)",
    ],
    note: "上: tiếp xúc/đạt mục đích · 开: mở ra · 到: đạt tới/được · 着 zháo: đạt được, có kết quả (văn nói) · 成: chuyển thành · 在: định vị tại nơi nào đó · 好: hoàn thành tốt.",
    ex: [
      [
        "请你们打开书，我们开始读课文。",
        "Qǐng nǐmen dǎkāi shū, wǒmen kāishǐ dú kèwén.",
        "Mời các bạn mở sách ra, chúng ta bắt đầu đọc bài.",
      ],
      [
        "关上门吧，外面太冷了。",
        "Guānshàng mén ba, wàimiàn tài lěng le.",
        "Đóng cửa lại đi, bên ngoài lạnh quá.",
      ],
      [
        "这本书我翻译成越南语了。",
        "Zhè běn shū wǒ fānyì chéng Yuènányǔ le.",
        "Quyển sách này tôi đã dịch sang tiếng Việt rồi.",
      ],
      ["我买到票了。", "Wǒ mǎidào piào le.", "Tôi mua được vé rồi."],
      ["我找着弟弟了。", "Wǒ zhǎozháo dìdi le.", "Tôi tìm thấy em trai rồi."],
    ],
  },
  {
    name: "Bổ ngữ thời lượng (bao lâu?)",
    structure: [
      "V + (了) + Khoảng thời gian (+ 了)",
      "V + O + V + (了) + Khoảng thời gian",
    ],
    ex: [
      [
        "他睡了一个小时了。",
        "Tā shuìle yí gè xiǎoshí le.",
        "Anh ấy đã ngủ một tiếng rồi.",
      ],
      [
        "我在这儿等你半个小时了。",
        "Wǒ zài zhèr děng nǐ bàn gè xiǎoshí le.",
        "Tôi đã đợi bạn ở đây nửa tiếng rồi.",
      ],
    ],
  },
  {
    name: "Biểu đạt số ước lượng: 多, 几, 大概, hai số liền kề",
    structure: [
      "Hai số liền kề: 两三个, 五六十",
      "Số + 多 + Lượng từ (số tròn: 一百多个) / Số + Lượng từ + 多 (số lẻ nhỏ)",
      "几 + Lượng từ · 大概 + Số",
    ],
    ex: [
      [
        "我们公司有一百多个员工。",
        "Wǒmen gōngsī yǒu yìbǎi duō gè yuángōng.",
        "Công ty chúng tôi có hơn 100 nhân viên.",
      ],
      [
        "我们公司大概有一百个员工。",
        "Wǒmen gōngsī dàgài yǒu yìbǎi gè yuángōng.",
        "Công ty chúng tôi có khoảng 100 nhân viên.",
      ],
      [
        "这件衣服大概两三百块钱。",
        "Zhè jiàn yīfu dàgài liǎng sānbǎi kuài qián.",
        "Cái áo này khoảng hai ba trăm tệ.",
      ],
      [
        "我们班有几个留学生。",
        "Wǒmen bān yǒu jǐ gè liúxuéshēng.",
        "Lớp chúng tôi có vài du học sinh.",
      ],
    ],
  },
  {
    name: "不但 … 而且 …",
    structure: ["不但 + Vế 1，而且 + Vế 2 (vế sau mạnh hơn, nhấn giọng)"],
    ex: [
      [
        "我不但会汉语，而且还会日语。",
        "Wǒ búdàn huì Hànyǔ, érqiě hái huì Rìyǔ.",
        "Tôi không những biết tiếng Trung mà còn biết tiếng Nhật.",
      ],
      [
        "她不但漂亮，而且聪明。",
        "Tā búdàn piàoliang, érqiě cōngmíng.",
        "Cô ấy không những xinh mà còn thông minh.",
      ],
    ],
  },
  {
    name: "Bổ ngữ động lượng (bao nhiêu lần?)",
    structure: ["V + (了/过) + Số lần (次, 遍, 趟, 声)"],
    ex: [
      [
        "这部电影我看了两次了。",
        "Zhè bù diànyǐng wǒ kànle liǎng cì le.",
        "Bộ phim này tôi đã xem hai lần rồi.",
      ],
      [
        "我去过北京一次。",
        "Wǒ qùguo Běijīng yí cì.",
        "Tôi đã đến Bắc Kinh một lần.",
      ],
    ],
  },
  {
    name: "Đại từ nghi vấn: 怎么 / 怎么样 / 哪儿 / 哪",
    structure: [
      "怎么 + Động từ (làm thế nào)",
      "…，怎么样? (thế nào / thấy sao)",
      "哪儿 (ở đâu) · 哪 + Lượng từ + Danh từ (nào)",
    ],
    ex: [
      ["这个汉字怎么读？", "Zhège Hànzì zěnme dú?", "Chữ Hán này đọc thế nào?"],
      [
        "明天我们一起去公园，怎么样？",
        "Míngtiān wǒmen yìqǐ qù gōngyuán, zěnmeyàng?",
        "Ngày mai chúng ta cùng đi công viên nhé, thấy sao?",
      ],
      ["你在哪儿工作？", "Nǐ zài nǎr gōngzuò?", "Bạn làm việc ở đâu?"],
      ["你喜欢哪本书？", "Nǐ xǐhuan nǎ běn shū?", "Bạn thích quyển sách nào?"],
    ],
  },

  // ---- Bổ sung từ file PDF ----
  {
    lesson: "Bài 1",
    name: "Trợ từ ngữ khí 了 (1)",
    structure: [
      "…… 了 (khẳng định sự phát sinh/hoàn thành)",
      "Nghi vấn: …… 了 + 没有?",
      "Phủ định: 没(有) + V (cuối câu không dùng 了)",
    ],
    note: "Hành động định kỳ/thường xuyên cũng không dùng 了.",
    ex: [
      [
        "田芳去图书馆了。",
        "Tián Fāng qù túshūguǎn le.",
        "Điền Phương đi thư viện rồi.",
      ],
      ["你吃饭了没有？", "Nǐ chīfàn le méiyǒu?", "Bạn ăn cơm chưa?"],
    ],
  },
  {
    lesson: "Bài 2",
    name: "Trợ từ động thái 了 (hoàn thành)",
    structure: ["Động từ + 了", "Động từ + 了 + Số từ + Lượng từ + Tân ngữ"],
    note: "Tân ngữ trước đó thường phải có số lượng từ hoặc định ngữ khác.",
    ex: [
      ["我买了一本书。", "Wǒ mǎile yì běn shū.", "Tôi đã mua một quyển sách."],
      [
        "他喝了一瓶啤酒。",
        "Tā hēle yì píng píjiǔ.",
        "Anh ấy đã uống một chai bia.",
      ],
    ],
  },
  {
    lesson: "Bài 4",
    name: "Cụm Chủ - Vị làm định ngữ",
    structure: ["[Chủ ngữ + Động từ] + 的 + Danh từ"],
    ex: [
      [
        "我买的书很好看。",
        "Wǒ mǎi de shū hěn hǎokàn.",
        "Quyển sách tôi mua rất hay.",
      ],
      [
        "他写的字很漂亮。",
        "Tā xiě de zì hěn piàoliang.",
        "Chữ anh ấy viết rất đẹp.",
      ],
    ],
  },
  {
    lesson: "Bài 5",
    name: "Động từ ly hợp (离合动词)",
    structure: [
      "Động từ + Tân ngữ (睡觉, 跳舞, 唱歌, 毕业)",
      "Bổ ngữ thời lượng/động lượng xen giữa động từ và tân ngữ",
    ],
    ex: [
      [
        "我每天睡八个小时觉。",
        "Wǒ měitiān shuì bā gè xiǎoshí jiào.",
        "Mỗi ngày tôi ngủ tám tiếng.",
      ],
      [
        "我们跳了两次舞。",
        "Wǒmen tiàole liǎng cì wǔ.",
        "Chúng tôi đã khiêu vũ hai lần.",
      ],
    ],
  },
  {
    lesson: "Bài 6",
    name: "Bổ ngữ số lượng trong câu so sánh 比",
    structure: [
      "A + 比 + B + Adj + Số lượng",
      "A + 比 + B + Adj + 一点儿 / 多了 / 得多",
    ],
    ex: [
      ["他比我大三岁。", "Tā bǐ wǒ dà sān suì.", "Anh ấy lớn hơn tôi ba tuổi."],
      [
        "今天比昨天冷多了。",
        "Jīntiān bǐ zuótiān lěng duō le.",
        "Hôm nay lạnh hơn hôm qua nhiều.",
      ],
    ],
  },
  {
    lesson: "Bài 6",
    name: "Câu cảm thán",
    structure: ["太 + Adj + 了", "真 + Adj"],
    ex: [
      ["太好了！", "Tài hǎo le!", "Tuyệt quá!"],
      [
        "这儿的风景真美！",
        "Zhèr de fēngjǐng zhēn měi!",
        "Phong cảnh ở đây thật đẹp!",
      ],
    ],
  },
  {
    lesson: "Bài 8",
    name: "Trợ từ ngữ khí 了 (2) — biểu thị thay đổi",
    structure: ["…… 了 (tình huống/trạng thái mới xuất hiện)"],
    ex: [
      ["天气冷了。", "Tiānqì lěng le.", "Trời lạnh rồi."],
      [
        "我会说汉语了。",
        "Wǒ huì shuō Hànyǔ le.",
        "Tôi biết nói tiếng Trung rồi.",
      ],
    ],
  },
  {
    lesson: "Bài 8",
    name: "Câu không chủ ngữ",
    structure: [
      "Động từ + (Danh từ) + 了 (thời tiết, hiện tượng tự nhiên, cảnh quan)",
    ],
    ex: [
      ["下雨了。", "Xià yǔ le.", "Trời mưa rồi."],
      ["出太阳了。", "Chū tàiyáng le.", "Mặt trời mọc rồi."],
    ],
  },
  {
    lesson: "Bài 10",
    name: "Số thứ tự 第",
    structure: ["第 + Số từ (+ Lượng từ + Danh từ)"],
    ex: [
      ["第一课", "dì yī kè", "Bài một"],
      ["我住在第五层。", "Wǒ zhù zài dì wǔ céng.", "Tôi sống ở tầng năm."],
    ],
  },
  {
    lesson: "Bài 11",
    name: "Cấu trúc nhấn mạnh 是 … 的",
    structure: [
      "Chủ ngữ + 是 + [Thời gian/Địa điểm/Phương thức/Mục đích/Chủ thể] + Động từ + 的",
    ],
    note: "Nhấn mạnh một thành phần của hành động đã xảy ra.",
    ex: [
      [
        "我是跟旅游团一起来的。",
        "Wǒ shì gēn lǚyóutuán yìqǐ lái de.",
        "Tôi đi cùng đoàn du lịch đến.",
      ],
      [
        "他是在北京学的汉语。",
        "Tā shì zài Běijīng xué de Hànyǔ.",
        "Anh ấy học tiếng Trung ở Bắc Kinh.",
      ],
    ],
  },
  {
    lesson: "Bài 11",
    name: "Hình thức lặp lại của tính từ",
    structure: [
      "Tính từ đơn: AA (高高, 红红)",
      "Tính từ hai âm tiết: AABB (高高兴兴, 干干净净)",
    ],
    note: "Tăng mức độ, miêu tả sinh động.",
    ex: [
      [
        "她有一双大大的眼睛。",
        "Tā yǒu yì shuāng dàdà de yǎnjing.",
        "Cô ấy có đôi mắt to tròn.",
      ],
      [
        "他高高兴兴地回家了。",
        "Tā gāogāoxìngxìng de huí jiā le.",
        "Anh ấy vui vẻ về nhà.",
      ],
    ],
  },
  {
    lesson: "Bài 12",
    name: "Câu Chủ - Vị làm vị ngữ",
    structure: ["Chủ đề (thường là tân ngữ đưa lên đầu) + [Chủ ngữ + Vị ngữ]"],
    ex: [
      [
        "我的护照你找到了没有？",
        "Wǒ de hùzhào nǐ zhǎodào le méiyǒu?",
        "Hộ chiếu của tôi bạn tìm thấy chưa?",
      ],
      ["他身体很好。", "Tā shēntǐ hěn hǎo.", "Sức khỏe anh ấy rất tốt."],
    ],
  },
];

// Bỏ dấu (pinyin + tiếng Việt) để tìm kiếm không phụ thuộc dấu
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");

export default function NguPhapGTHN() {
  const [q, setQ] = useState("");

  const items = useMemo(
    () =>
      DATA.map((p, i) => ({
        p,
        n: i + 1,
        hay: norm(
          [
            p.name,
            p.lesson ?? "",
            p.note ?? "",
            ...(p.structure ?? []),
            ...p.ex.flat(),
          ].join(" "),
        ),
      })),
    [],
  );

  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    return items.filter(({ p, hay }) => terms.every((t) => hay.includes(t)));
  }, [q, items]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="relative mt-3">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Tìm điểm ngữ pháp: 了, 比, bổ ngữ, bi, ruguo, trạng thái…"
              aria-label="Tìm điểm ngữ pháp"
              className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-11 pr-10 text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/40"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                aria-label="Xóa tìm kiếm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-stone-500 hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                ✕
              </button>
            )}
          </div>
          <p className="mt-2 text-sm text-stone-500">
            {results.length}/{DATA.length} điểm ngữ pháp{" "}
            <span>𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊 hết GTHN quyển 3</span>
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-0">
        <div className="hidden rounded-t-sm border border-stone-300 bg-stone-100 text-sm font-semibold uppercase text-stone-700 sm:grid sm:grid-cols-[2fr_3fr]">
          <div className="px-4 py-2.5">Điểm ngữ pháp</div>
          <div className="border-l border-stone-300 px-4 py-2.5">Ví dụ</div>
        </div>

        {results.length === 0 ? (
          <p className="rounded-sm border border-dashed border-stone-300 bg-white p-8 text-center text-stone-500">
            Không tìm thấy điểm ngữ pháp nào khớp với “{q}”. Thử từ khóa ngắn
            hơn hoặc gõ pinyin không dấu.
          </p>
        ) : (
          <ul className="divide-y divide-stone-300 overflow-hidden rounded-sm border border-stone-300 bg-white sm:rounded-t-none sm:border-t-0">
            {results.map(({ p, n }) => (
              <li key={n} className="grid sm:grid-cols-[2fr_3fr]">
                <div className="px-4 py-4">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm tabular-nums text-stone-400">
                      {n}.
                    </span>
                    <h2 className="font-semibold text-sky-800">{p.name}</h2>
                    {p.lesson && (
                      <span className="rounded bg-stone-200 px-1.5 py-0.5 text-xs text-stone-600">
                        {p.lesson} · từ PDF
                      </span>
                    )}
                  </div>
                  {p.structure && (
                    <ul className="mt-2 space-y-1 text-sm text-stone-700">
                      {p.structure.map((s) => (
                        <li
                          key={s}
                          className="ztai__py rounded-lg border border-stone-200/80 bg-stone-100/90 p-2.5 text-sm text-stone-800"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.note && (
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">
                      {p.note}
                    </p>
                  )}
                </div>
                <div className="space-y-3 px-4 py-4 sm:border-l sm:border-stone-300">
                  {p.ex.map(([zh, py, vi]) => (
                    <div key={zh}>
                      <p className="ztai__zh text-lg leading-snug text-stone-900">
                        {zh}
                      </p>
                      <p className="ztai__py text-sm text-stone-500">{py}</p>
                      <p className="text-sm text-stone-700">{vi}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
