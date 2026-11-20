"use client";

import React, { useMemo, useState } from "react";
import { Search, Sparkles, X } from "lucide-react";

interface Example {
  hanzi: string;
  pinyin?: string;
  meaning?: string;
}

interface GrammarPoint {
  id: string;
  title: string;
  categories: string[];
  structures: string[];
  notes?: string;
  examples: Example[];
}

const FILTER_CATEGORIES = [
  "Tất cả",
  "Bổ ngữ",
  "Trợ từ",
  "Trùng điệp",
  "Tồn hiện & Phương vị từ",
  "Phó từ",
  "Liên từ",
  "Cấu trúc & Mẫu câu khác",
] as const;

const GRAMMAR_DATA: GrammarPoint[] = [
  {
    id: "1",
    title: "Cụm số lượng từ (Định ngữ chỉ số lượng)",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: ["Số từ + Lượng từ + Danh từ"],
    examples: [
      {
        hanzi: "我买一本书。",
        pinyin: "Wǒ mǎi yì běn shū.",
        meaning: "Tôi mua một quyển sách.",
      },
      {
        hanzi: "我每天都买一杯咖啡。",
        pinyin: "Wǒ měitiān dōu mǎi yì bēi kāfēi.",
        meaning: "Mỗi ngày tôi đều mua một ly cà phê.",
      },
      {
        hanzi: "今天早上我买了一杯奶茶。",
        pinyin: "Jīntiān zǎoshang wǒ mǎi le yì bēi nǎichá.",
        meaning: "Sáng nay tôi đã mua một ly trà sữa.",
      },
    ],
  },
  {
    id: "2",
    title: "Đại từ chỉ thị với Lượng từ",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: ["这 / 那 + (Số từ) + Lượng từ + Danh từ"],
    examples: [
      {
        hanzi: "这/那本书是谁的？",
        pinyin: "Zhè/Nà běn shū shì shéi de?",
        meaning: "Quyển sách này/kia là của ai?",
      },
      {
        hanzi: "这本书是我的。",
        pinyin: "Zhè běn shū shì wǒ de.",
        meaning: "Quyển sách này là của tôi.",
      },
      {
        hanzi: "那本书是王老师的。",
        pinyin: "Nà běn shū shì Wáng lǎoshī de.",
        meaning: "Quyển sách kia là của thầy Vương.",
      },
    ],
  },
  {
    id: "3A",
    title: "Trợ từ kết cấu 的 (Định ngữ)",
    categories: ["Trợ từ"],
    structures: ["Định ngữ (Danh từ / Đại từ / Tính từ) + 的 + Trung tâm ngữ"],
    examples: [
      {
        hanzi: "这是我的书。",
        pinyin: "Zhè shì wǒ de shū.",
        meaning: "Đây là sách của tôi.",
      },
    ],
  },
  {
    id: "3B",
    title: "Trợ từ kết cấu 得 (Bổ ngữ trình độ / trạng thái)",
    categories: ["Trợ từ", "Bổ ngữ"],
    structures: [
      "Động từ + 得 + Tính từ / Cụm hình dung từ",
      "Động từ + Tân ngữ + Động từ + 得 + Tính từ",
    ],
    examples: [
      {
        hanzi: "我弟弟跑得很快。",
        pinyin: "Wǒ dìdi pǎo de hěn kuài.",
        meaning: "Em trai tôi chạy rất nhanh.",
      },
      {
        hanzi: "他汉语说得很流利。",
        pinyin: "Tā Hànyǔ shuō de hěn liúlì.",
        meaning: "Anh ấy nói tiếng Hán rất lưu loát.",
      },
      {
        hanzi: "每天他都起得很早，睡得很晚。",
        pinyin: "Měitiān tā dōu qǐ de hěn zǎo, shuì de hěn wǎn.",
        meaning: "Mỗi ngày anh ấy đều dậy rất sớm, ngủ rất muộn.",
      },
    ],
  },
  {
    id: "3C",
    title: "Trợ từ kết cấu 地 (Trạng ngữ)",
    categories: ["Trợ từ"],
    structures: ["Tính từ / Phó từ / Cụm trạng ngữ + 地 + Động từ"],
    examples: [
      { hanzi: "慢慢地走", pinyin: "mànman de zǒu", meaning: "Đi chầm chậm." },
      {
        hanzi: "认真地学习",
        pinyin: "rènzhēn de xuéxí",
        meaning: "Học tập một cách chăm chỉ.",
      },
      {
        hanzi: "高兴地笑了",
        pinyin: "gāoxìng de xiào le",
        meaning: "Cười một cách vui vẻ.",
      },
      {
        hanzi: "我妈妈高兴地说：“你姐姐明天回家了。”",
        pinyin: 'Wǒ māma gāoxìng de shuō: "Nǐ jiějie míngtiān huí jiā le."',
        meaning: 'Mẹ tôi vui mừng nói: "Chị con ngày mai về nhà rồi."',
      },
      {
        hanzi: "我们都在努力地学习。",
        pinyin: "Wǒmen dōu zài nǔlì de xuéxí.",
        meaning: "Chúng ta đều đang nỗ lực học tập.",
      },
    ],
  },
  {
    id: "4",
    title: "Câu lựa chọn với 还是 và 或者",
    categories: ["Liên từ"],
    structures: [
      "Câu hỏi lựa chọn: A + 还是 + B？",
      "Câu trần thuật lựa chọn: A + 或者 + B + (都可以)",
    ],
    notes: "还是 dùng trong câu nghi vấn; 或者 dùng trong câu trần thuật.",
    examples: [
      {
        hanzi: "你喝茶还是喝咖啡？",
        pinyin: "Nǐ hē chá háishì hē kāfēi?",
        meaning: "Bạn uống trà hay uống cà phê?",
      },
      {
        hanzi: "茶或者咖啡，我都可以。",
        pinyin: "Chá huòzhě kāfēi, wǒ dōu kěyǐ.",
        meaning: "Trà hay cà phê, tôi đều được.",
      },
      {
        hanzi: "我喝茶或者喝咖啡都可以。",
        pinyin: "Wǒ hē chá huòzhě hē kāfēi dōu kěyǐ.",
        meaning: "Tôi uống trà hoặc uống cà phê đều được.",
      },
      {
        hanzi: "周末晚上我常常跟朋友一起去公园玩儿或者去超市买东西。",
        pinyin:
          "Zhōumò wǎnshang wǒ chángcháng gēn péngyou yìqǐ qù gōngyuán wánr huòzhě qù chāoshì mǎi dōngxi.",
        meaning:
          "Tối cuối tuần tôi thường đi công viên chơi cùng bạn hoặc đi siêu thị mua đồ.",
      },
      {
        hanzi: "周末我常常去图书馆看书，或者跟朋友聊天儿。",
        pinyin:
          "Zhōumò wǒ chángcháng qù túshūguǎn kànshū, huòzhě gēn péngyou liáotiānr.",
        meaning:
          "Cuối tuần tôi thường đi thư viện đọc sách, hoặc nói chuyện phiếm với bạn bè.",
      },
    ],
  },
  {
    id: "5",
    title: "Phó từ / Số lượng từ 有一点儿 và 一点儿",
    categories: ["Phó từ"],
    structures: [
      "有一点儿 + Tính từ (biểu thị mức độ hơi..., thường mang sắc thái không hài lòng)",
      "Tính từ + 一点儿 (biểu thị sự so sánh: ...hơn một chút)",
      "Động từ + 一点儿 + Danh từ (một ít, một chút)",
    ],
    examples: [
      {
        hanzi: "这件衣服有点儿大，有小一点儿的吗？",
        pinyin: "Zhè jiàn yīfu yǒudiǎnr dà, yǒu xiǎo yìdiǎnr de ma?",
        meaning: "Cái áo này hơi rộng, có cái nào nhỏ hơn một chút không?",
      },
      {
        hanzi: "这条裤子有点儿长，有短一点儿的吗？",
        pinyin: "Zhè tiáo kùzi yǒudiǎnr cháng, yǒu duǎn yìdiǎnr de ma?",
        meaning: "Cái quần này hơi dài, có cái nào ngắn hơn chút không?",
      },
      {
        hanzi: "这个有点儿贵，有便宜一点儿的吗？",
        pinyin: "Zhège yǒudiǎnr guì, yǒu piányi yìdiǎnr de ma?",
        meaning: "Cái này hơi đắt, có cái nào rẻ hơn chút không?",
      },
      {
        hanzi: "我去商店买了一点儿东西。",
        pinyin: "Wǒ qù shāngdiàn mǎi le yìdiǎnr dōngxi.",
        meaning: "Tôi đi cửa hàng mua một ít đồ.",
      },
      {
        hanzi: "我买了一点儿水果。",
        pinyin: "Wǒ mǎi le yìdiǎnr shuǐguǒ.",
        meaning: "Tôi đã mua một ít hoa quả.",
      },
      {
        hanzi: "今天天气有点儿热。",
        pinyin: "Jīntiān tiānqì yǒudiǎnr rè.",
        meaning: "Hôm nay thời tiết hơi nóng.",
      },
    ],
  },
  {
    id: "6",
    title: "Hành động đang diễn ra (正在……呢)",
    categories: ["Phó từ", "Trợ từ"],
    structures: ["Chủ ngữ + 正在 / 在 / 正 + Động từ + (Tân ngữ) + 呢"],
    examples: [
      {
        hanzi: "麦克正在听音乐呢。",
        pinyin: "Màikè zhèngzài tīng yīnyuè ne.",
        meaning: "Mike đang nghe nhạc.",
      },
      {
        hanzi: "我正在吃饭呢。",
        pinyin: "Wǒ zhèngzài chīfàn ne.",
        meaning: "Tôi đang ăn cơm.",
      },
      {
        hanzi: "我正在看电视呢。",
        pinyin: "Wǒ zhèngzài kàn diànshì ne.",
        meaning: "Tôi đang xem tivi.",
      },
    ],
  },
  {
    id: "7",
    title: "Câu liên động từ",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: [
      "Chủ ngữ + Động từ 1 (Phương thức/Địa điểm) + Động từ 2 (Mục đích)",
    ],
    notes: "Biểu thị phương thức hoặc mục đích thực hiện hành động.",
    examples: [
      {
        hanzi: "我去超市买东西。",
        pinyin: "Wǒ qù chāoshì mǎi dōngxi.",
        meaning: "Tôi đi siêu thị mua đồ.",
      },
      {
        hanzi: "我坐飞机去北京。",
        pinyin: "Wǒ zuò fēijī qù Běijīng.",
        meaning: "Tôi đi máy bay đến Bắc Kinh.",
      },
      {
        hanzi: "我坐地铁去学校。",
        pinyin: "Wǒ zuò dìtiě qù xuéxiào.",
        meaning: "Tôi đi tàu điện ngầm đến trường.",
      },
      {
        hanzi: "我常常骑车去公园。",
        pinyin: "Wǒ chángcháng qíchē qù gōngyuán.",
        meaning: "Tôi thường đạp xe đi công viên.",
      },
    ],
  },
  {
    id: "8",
    title: "Câu so sánh (比、没有、有、不比、跟)",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: [
      "So sánh hơn: A + 比 + B + Tính từ / Động từ + 得 + Tính từ",
      "So sánh kém: B + 没有 + A + (这么/那么) + Tính từ",
      "Không hơn: A + 不比 + B + Tính từ",
      "So sánh ngang bằng: A + 跟 / 和 + B + 一样 + (Tính từ) | A + 有 + B + (这么/那么) + Tính từ",
    ],
    examples: [
      {
        hanzi: "我说得比他好。",
        pinyin: "Wǒ shuō de bǐ tā hǎo.",
        meaning: "Tôi nói giỏi hơn anh ấy.",
      },
      {
        hanzi: "他跑得比我快。",
        pinyin: "Tā pǎo de bǐ wǒ kuài.",
        meaning: "Anh ấy chạy nhanh hơn tôi.",
      },
      {
        hanzi: "飞机比火车快。 → 火车没有飞机快。",
        pinyin: "Fēijī bǐ huǒchē kuài. → Huǒchē méiyǒu fēijī kuài.",
        meaning:
          "Máy bay nhanh hơn tàu hỏa. → Tàu hỏa không nhanh bằng máy bay.",
      },
      {
        hanzi: "西瓜比苹果大。 → 苹果没有西瓜大。",
        pinyin: "Xīguā bǐ píngguǒ dà. → Píngguǒ méiyǒu xīguā dà.",
        meaning: "Dưa hấu to hơn táo. → Táo không to bằng dưa hấu.",
      },
      {
        hanzi: "我比他高。 / 我没有他高。",
        pinyin: "Wǒ bǐ tā gāo. / Wǒ méiyǒu tā gāo.",
        meaning: "Tôi cao hơn anh ấy. / Tôi không cao bằng anh ấy.",
      },
      {
        hanzi: "我有他那么高。",
        pinyin: "Wǒ yǒu tā nàme gāo.",
        meaning: "Tôi cao bằng anh ấy.",
      },
      {
        hanzi: "我不比他高。我们俩差不多高。",
        pinyin: "Wǒ bù bǐ tā gāo. Wǒmen liǎ chàbùduō gāo.",
        meaning: "Tôi không cao hơn anh ấy. Hai chúng tôi cao gần bằng nhau.",
      },
      {
        hanzi: "我跟她一样高。",
        pinyin: "Wǒ gēn tā yíyàng gāo.",
        meaning: "Tôi cao bằng cô ấy.",
      },
    ],
  },
  {
    id: "9",
    title: "Hành động sắp xảy ra (快……了 / 要……了)",
    categories: ["Phó từ", "Trợ từ"],
    structures: ["Chủ ngữ + 快 / 要 / 快要 / 就要 + Động từ / Tính từ + 了"],
    notes: "Nếu trong câu có thời gian cụ thể thì chỉ dùng 就要……了.",
    examples: [
      {
        hanzi: "要下雨了。",
        pinyin: "Yào xià yǔ le.",
        meaning: "Sắp mưa rồi.",
      },
      {
        hanzi: "火车快要开了，我们快点儿吧！",
        pinyin: "Huǒchē kuàiyào kāi le, wǒmen kuài diǎnr ba!",
        meaning: "Tàu hỏa sắp chạy rồi, chúng ta nhanh lên thôi!",
      },
      {
        hanzi: "天要黑了，我们回家吧。",
        pinyin: "Tiān yào hēi le, wǒmen huí jiā ba.",
        meaning: "Trời sắp tối rồi, chúng ta về nhà thôi.",
      },
      {
        hanzi: "我们快下课了。",
        pinyin: "Wǒmen kuài xiàkè le.",
        meaning: "Chúng ta sắp tan học rồi.",
      },
    ],
  },
  {
    id: "10",
    title: "Cấu trúc nhấn mạnh phủ định hoàn toàn (一……也/都……不/没)",
    categories: ["Phó từ"],
    structures: [
      "一 + Lượng từ + Danh từ + 也 / 都 + 不 / 没 + Động từ",
      "一点儿 + 也 / 都 + 不 + Tính từ",
    ],
    notes: 'Biểu thị "một chút cũng không...", "một cái cũng không...".',
    examples: [
      {
        hanzi: "我一次病也没有得过。",
        pinyin: "Wǒ yí cì bìng yě méiyǒu dé guo.",
        meaning: "Tôi chưa từng bị ốm lần nào.",
      },
      {
        hanzi: "这种中成药一点儿也不苦。",
        pinyin: "Zhè zhǒng zhōngchéngyào yìdiǎnr yě bù kǔ.",
        meaning: "Loại thuốc Bắc này chẳng đắng tí nào.",
      },
      {
        hanzi: "长城太远了，我一次也没去过。",
        pinyin: "Chángchéng tài yuǎn le, wǒ yí cì yě méi qù guo.",
        meaning: "Vạn Lý Trường Thành xa quá, tôi một lần cũng chưa từng đi.",
      },
      {
        hanzi: "去年，我一个汉字也不会。",
        pinyin: "Qùnián, wǒ yí gè hànzì yě bú huì.",
        meaning: "Năm ngoái, tôi một chữ Hán cũng không biết.",
      },
      {
        hanzi: "我一次也没有吃过烤鸭。",
        pinyin: "Wǒ yí cì yě méiyǒu chī guo kǎoyā.",
        meaning: "Tôi chưa từng ăn vịt quay lần nào cả.",
      },
      {
        hanzi: "他一次也没有迟到过。",
        pinyin: "Tā yí cì yě méiyǒu chídào guo.",
        meaning: "Anh ấy chưa từng đi trễ lần nào.",
      },
    ],
  },
  {
    id: "11",
    title: "Phó từ biểu thị sự lặp lại (再 và 又)",
    categories: ["Phó từ"],
    structures: [
      "再 + Động từ (Lặp lại hành động chưa xảy ra / ở tương lai)",
      "又 + Động từ + 了 (Lặp lại hành động đã xảy ra / ở quá khứ)",
    ],
    examples: [
      {
        hanzi: "你过一会儿再来电话吧。",
        pinyin: "Nǐ guò yíhuìr zài lái diànhuà ba.",
        meaning: "Bạn chút nữa gọi lại nhé.",
      },
      {
        hanzi: "他又来电话了。",
        pinyin: "Tā yòu lái diànhuà le.",
        meaning: "Anh ấy lại gọi điện đến rồi.",
      },
      {
        hanzi: "他又喝酒了。",
        pinyin: "Tā yòu hē jiǔ le.",
        meaning: "Anh ấy lại uống rượu rồi.",
      },
      {
        hanzi: "我明天再去北京。",
        pinyin: "Wǒ míngtiān zài qù Běijīng.",
        meaning: "Ngày mai tôi lại đi Bắc Kinh.",
      },
      {
        hanzi: "我明天再买一本书。",
        pinyin: "Wǒ míngtiān zài mǎi yì běn shū.",
        meaning: "Ngày mai tôi lại mua một quyển sách.",
      },
    ],
  },
  {
    id: "12",
    title: "Động từ trùng điệp (Lặp lại động từ)",
    categories: ["Trùng điệp"],
    structures: [
      "Động từ 1 âm tiết: AA / A一A / A了A",
      "Động từ 2 âm tiết: ABAB",
    ],
    notes:
      "Diễn tả hành động xảy ra trong thời gian ngắn, thử làm gì đó hoặc làm cho ngữ khí nhẹ nhàng, thoải mái hơn.",
    examples: [
      {
        hanzi: "我可以试试这件衣服吗？",
        pinyin: "Wǒ kěyǐ shìshi zhè jiàn yīfu ma?",
        meaning: "Tôi có thể thử chiếc áo này không?",
      },
    ],
  },
  {
    id: "13",
    title: "Cấu trúc song song (又……又……)",
    categories: ["Phó từ", "Liên từ"],
    structures: ["又 + Tính từ 1 / Động từ 1 + 又 + Tính từ 2 / Động từ 2"],
    notes:
      'Biểu thị hai đặc điểm, tính chất hoặc trạng thái cùng tồn tại song song ("vừa... vừa...").',
    examples: [
      {
        hanzi: "这件衣服又好看又便宜。",
        pinyin: "Zhè jiàn yīfu yòu hǎokàn yòu piányi.",
        meaning: "Chiếc áo này vừa đẹp vừa rẻ.",
      },
      {
        hanzi: "我又累又饿。",
        pinyin: "Wǒ yòu lèi yòu è.",
        meaning: "Tôi vừa mệt vừa đói.",
      },
      {
        hanzi: "她的男朋友又高又帅。",
        pinyin: "Tā de nánpéngyou yòu gāo yòu shuài.",
        meaning: "Bạn trai của cô ấy vừa cao vừa đẹp trai.",
      },
      {
        hanzi: "他又聪明又努力。",
        pinyin: "Tā yòu cōngmíng yòu nǔlì.",
        meaning: "Anh ấy vừa thông minh vừa chăm chỉ.",
      },
      {
        hanzi: "这家饭店的菜又好吃又便宜。",
        pinyin: "Zhè jiā fàndiàn de cài yòu hǎochī yòu piányi.",
        meaning: "Món ăn ở nhà hàng này vừa ngon vừa rẻ.",
      },
    ],
  },
  {
    id: "14",
    title: "Từ chỉ thời gian 以前 (trước khi) và 以后 (sau khi)",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: [
      "Danh từ / Cụm động từ / Mệnh đề + 以前 (Trước khi...)",
      "Danh từ / Cụm động từ / Mệnh đề + 以后 (Sau khi...)",
    ],
    examples: [
      {
        hanzi: "去中国以前，我不会说汉语。",
        pinyin: "Qù Zhōngguó yǐqián, wǒ bú huì shuō Hànyǔ.",
        meaning: "Trước khi đi Trung Quốc, tôi không biết nói tiếng Hán.",
      },
      {
        hanzi: "吃饭以前要洗手。",
        pinyin: "Chīfàn yǐqián yào xǐshǒu.",
        meaning: "Trước khi ăn cơm phải rửa tay.",
      },
      {
        hanzi: "吃完饭以后我就看电视。",
        pinyin: "Chī wán fàn yǐhòu wǒ jiù kàn diànshì.",
        meaning: "Sau khi ăn cơm xong tôi liền xem tivi.",
      },
      {
        hanzi: "下课以后，我去图书馆。",
        pinyin: "Xiàkè yǐhòu, wǒ qù túshūguǎn.",
        meaning: "Sau khi tan học, tôi đi thư viện.",
      },
      {
        hanzi: "洗澡以后我就睡觉。",
        pinyin: "Xǐzǎo yǐhòu wǒ jiù shuìjiào.",
        meaning: "Sau khi tắm xong tôi đi ngủ ngay.",
      },
    ],
  },
  {
    id: "15",
    title: "Danh từ phương vị & Câu tồn hiện với 有",
    categories: ["Tồn hiện & Phương vị từ"],
    structures: [
      "Danh từ (Địa điểm) + Phương vị từ (上/下/里/外/前/后...) + 有 + Danh từ",
    ],
    examples: [
      {
        hanzi: "桌子上有一本书。",
        pinyin: "Zhuōzi shang yǒu yì běn shū.",
        meaning: "Trên bàn có một quyển sách.",
      },
      {
        hanzi: "学校里有洗手间吗？",
        pinyin: "Xuéxiào lǐ yǒu xǐshǒujiān ma?",
        meaning: "Trong trường học có nhà vệ sinh không?",
      },
    ],
  },
  {
    id: "16",
    title: "Giới từ chỉ khoảng cách, điểm đầu, phương hướng (离、从、往)",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: [
      "Khoảng cách: A + 离 + B + 很远 / 很近 / + Số đo",
      "Điểm xuất phát: 从 + Điểm đầu (Thời gian/Địa điểm) + 到 + Điểm cuối",
      "Phương hướng: 往 + Phương hướng + Động từ",
    ],
    examples: [
      {
        hanzi: "我家离学校比较远。",
        pinyin: "Wǒ jiā lí xuéxiào bǐjiào yuǎn.",
        meaning: "Nhà tôi cách trường học khá xa.",
      },
      {
        hanzi: "从我家到图书馆很远。",
        pinyin: "Cóng wǒ jiā dào túshūguǎn hěn yuǎn.",
        meaning: "Từ nhà tôi đến thư viện rất xa.",
      },
      {
        hanzi: "从星期一到星期六我都学汉语。",
        pinyin: "Cóng xīngqīyī dào xīngqīliù wǒ dōu xué Hànyǔ.",
        meaning: "Từ thứ Hai đến thứ Bảy tôi đều học tiếng Hán.",
      },
      {
        hanzi: "你一直往前走就到书店。",
        pinyin: "Nǐ yìzhí wǎng qián zǒu jiù dào shūdiàn.",
        meaning: "Bạn cứ đi thẳng về phía trước là đến hiệu sách.",
      },
      {
        hanzi: "你从这里一直往前走，大概五十米就到。",
        pinyin: "Nǐ cóng zhèlǐ yìzhí wǎng qián zǒu, dàgài wǔshí mǐ jiù dào.",
        meaning: "Bạn từ đây đi thẳng về phía trước, khoảng 50 mét là tới.",
      },
    ],
  },
  {
    id: "17",
    title: "Bổ ngữ trạng thái",
    categories: ["Bổ ngữ", "Trợ từ"],
    structures: [
      "Chủ ngữ + Động từ + 得 + Phó từ mức độ + Tính từ",
      "Chủ ngữ + Động từ + Tân ngữ + Động từ + 得 + Phó từ mức độ + Tính từ",
    ],
    notes: "Miêu tả, đánh giá trạng thái hoặc mức độ đạt được của hành động.",
    examples: [
      {
        hanzi: "他学汉语学得很好。",
        pinyin: "Tā xué Hànyǔ xué de hěn hǎo.",
        meaning: "Anh ấy học tiếng Hán rất giỏi.",
      },
      {
        hanzi: "他说得很快。",
        pinyin: "Tā shuō de hěn kuài.",
        meaning: "Anh ấy nói rất nhanh.",
      },
      {
        hanzi: "他跑得很快。",
        pinyin: "Tā pǎo de hěn kuài.",
        meaning: "Anh ấy chạy rất nhanh.",
      },
    ],
  },
  {
    id: "18",
    title: "Câu phức nguyên nhân - kết quả (因为……所以……)",
    categories: ["Liên từ"],
    structures: ["因为 + Nguyên nhân，所以 + Kết quả"],
    notes: "Có thể dùng đầy đủ cả cặp hoặc lược bỏ một trong hai vế.",
    examples: [
      {
        hanzi: "因为下雨，所以我不上课。",
        pinyin: "Yīnwèi xià yǔ, suǒyǐ wǒ bú shàngkè.",
        meaning: "Vì trời mưa, cho nên tôi không đi học.",
      },
      {
        hanzi: "因为他刚学游泳，所以他游得不太好。",
        pinyin: "Yīnwèi tā gāng xué yóuyǒng, suǒyǐ tā yóu de bú tài hǎo.",
        meaning: "Vì anh ấy mới học bơi, nên anh ấy bơi chưa được tốt lắm.",
      },
      {
        hanzi: "他因为病了，所以没有来上课。",
        pinyin: "Tā yīnwèi bìng le, suǒyǐ méiyǒu lái shàngkè.",
        meaning: "Anh ấy vì bị ốm, nên không đến lớp học.",
      },
      {
        hanzi: "因为下雨，下午我们不去公园了。",
        pinyin: "Yīnwèi xià yǔ, xiàwǔ wǒmen bú qù gōngyuán le.",
        meaning: "Vì trời mưa, buổi chiều chúng tôi không đi công viên nữa.",
      },
      {
        hanzi: "因为我家里有事，所以明天想请一天假。",
        pinyin:
          "Yīnwèi wǒ jiālǐ yǒu shì, suǒyǐ míngtiān xiǎng qǐng yì tiān jià.",
        meaning:
          "Vì nhà em có việc, nên ngày mai em muốn xin nghỉ phép một ngày ạ.",
      },
    ],
  },
  {
    id: "19",
    title: "Bổ ngữ số lượng / Thời lượng kết hợp với 了",
    categories: ["Bổ ngữ", "Trợ từ"],
    structures: [
      "Động từ + 了 + Số từ + Lượng từ + Danh từ + (了)",
      "Động từ + 了 + Khoảng thời gian + (Danh từ) + 了",
    ],
    examples: [
      {
        hanzi: "我买了一本书（了）。",
        pinyin: "Wǒ mǎi le yì běn shū (le).",
        meaning: "Tôi đã mua một quyển sách rồi.",
      },
      {
        hanzi: "他睡了一个小时了。",
        pinyin: "Tā shuì le yí gè xiǎoshí le.",
        meaning: "Anh ấy đã ngủ được một tiếng đồng hồ rồi.",
      },
      {
        hanzi: "他唱了一个小时歌了。",
        pinyin: "Tā chàng le yí gè xiǎoshí gē le.",
        meaning: "Anh ấy đã hát được một tiếng đồng hồ rồi.",
      },
    ],
  },
  {
    id: "20",
    title: "Bổ ngữ xu hướng đơn (来 / 去)",
    categories: ["Bổ ngữ"],
    structures: [
      "Động từ + 来 / 去 (Tân ngữ chỉ vật đứng trước hoặc sau 来/去)",
      "Động từ + Tân ngữ chỉ địa điểm + 来 / 去",
    ],
    notes:
      "来 biểu thị hướng tiến lại gần người nói; 去 biểu thị hướng đi ra xa người nói.",
    examples: [
      {
        hanzi: "他买来一本书了。",
        pinyin: "Tā mǎi lái yì běn shū le.",
        meaning: "Anh ấy đã mua về một quyển sách rồi.",
      },
      {
        hanzi: "我们进教室去吧。",
        pinyin: "Wǒmen jìn jiàoshì qù ba.",
        meaning: "Chúng ta đi vào lớp học thôi.",
      },
    ],
  },
  {
    id: "21",
    title: "Trợ từ động thái 过 (Từng trải)",
    categories: ["Trợ từ"],
    structures: [
      "Khẳng định: Chủ ngữ + Động từ + 过 + (Tân ngữ)",
      "Phủ định: Chủ ngữ + 没 / 没有 + Động từ + 过 + (Tân ngữ)",
    ],
    notes:
      "Biểu thị hành động từng xảy ra trong quá khứ nhưng hiện tại đã chấm dứt, nhấn mạnh kinh nghiệm.",
    examples: [
      {
        hanzi: "我去过北京。",
        pinyin: "Wǒ qù guo Běijīng.",
        meaning: "Tôi đã từng đến Bắc Kinh.",
      },
      {
        hanzi: "我在中国公司当过一个月翻译。",
        pinyin: "Wǒ zài Zhōngguó gōngsī dāng guo yí gè yuè fānyì.",
        meaning: "Tôi đã từng làm phiên dịch một tháng ở công ty Trung Quốc.",
      },
      {
        hanzi: "我没有坐过飞机。",
        pinyin: "Wǒ méiyǒu zuò guo fēijī.",
        meaning: "Tôi chưa từng đi máy bay bao giờ.",
      },
    ],
  },
  {
    id: "22",
    title: "Chuỗi hai hành động nối tiếp (V1 + 了 + O + 就 + V2)",
    categories: ["Phó từ", "Trợ từ"],
    structures: [
      "Chủ ngữ + Động từ 1 + 了 + (Tân ngữ 1) + 就 + Động từ 2 + (Tân ngữ 2) + (了)",
    ],
    notes:
      "Biểu thị hành động thứ 2 xảy ra ngay sau khi hành động thứ 1 hoàn thành.",
    examples: [
      {
        hanzi: "我吃了饭就去学校。",
        pinyin: "Wǒ chī le fàn jiù qù xuéxiào.",
        meaning: "Tôi ăn cơm xong là đi học ngay.",
      },
      {
        hanzi: "我吃了饭就来了。",
        pinyin: "Wǒ chī le fàn jiù lái le.",
        meaning: "Tôi ăn cơm xong là đến ngay.",
      },
      {
        hanzi: "我下了课就回家(了)。",
        pinyin: "Wǒ xià le kè jiù huí jiā (le).",
        meaning: "Tôi tan học là về nhà ngay.",
      },
    ],
  },
  {
    id: "23",
    title: "Phó từ chỉ thời gian 就 và 才",
    categories: ["Phó từ"],
    structures: [
      "Thời gian + 就 + Động từ + 了 (Xảy ra sớm, nhanh, thuận lợi)",
      "Thời gian + 才 + Động từ (Xảy ra muộn, chậm, không thuận lợi - không dùng 了 cuối câu)",
    ],
    examples: [
      {
        hanzi: "六点上课，老师五点就来了，学生们七点才来。",
        pinyin:
          "Liù diǎn shàngkè, lǎoshī wǔ diǎn jiù lái le, xuéshēngmen qī diǎn cái lái.",
        meaning:
          "6 giờ vào học, thầy giáo 5 giờ đã đến rồi, học sinh 7 giờ mới đến.",
      },
      {
        hanzi: "我每天早上七点就起床了。",
        pinyin: "Wǒ měitiān zǎoshang qī diǎn jiù qǐchuáng le.",
        meaning: "Mỗi sáng 7 giờ tôi đã thức dậy rồi.",
      },
      {
        hanzi: "我每天早上十一点才起床。",
        pinyin: "Wǒ měitiān zǎoshang shíyī diǎn cái qǐchuáng.",
        meaning: "Mỗi sáng 11 giờ tôi mới thức dậy.",
      },
    ],
  },
  {
    id: "24",
    title: "Câu phức điều kiện - giả thiết (要是……（的话），就……)",
    categories: ["Liên từ", "Phó từ"],
    structures: ["要是 + Giả thiết + (的话)，主语 + 就 + Kết quả"],
    examples: [
      {
        hanzi: "要是下雨（的话），我就不去上课。",
        pinyin: "Yàoshi xià yǔ (de huà), wǒ jiù bú qù shàngkè.",
        meaning: "Nếu như trời mưa, tôi sẽ không đi học.",
      },
      {
        hanzi: "要是你不喜欢，你就不要买。",
        pinyin: "Yàoshi nǐ bù xǐhuan, nǐ jiù búyào mǎi.",
        meaning: "Nếu bạn không thích, thì bạn đừng mua.",
      },
      {
        hanzi: "要是明天下雨，我们就不去公园了。",
        pinyin: "Yàoshi míngtiān xià yǔ, wǒmen jiù bú qù gōngyuán le.",
        meaning:
          "Nếu ngày mai trời mưa, thì chúng ta sẽ không đi công viên nữa.",
      },
    ],
  },
  {
    id: "25",
    title: "Câu phức chuyển ngoặt (虽然……但是……)",
    categories: ["Liên từ"],
    structures: ["虽然 + Mệnh đề 1，但是 / 可是 + Mệnh đề 2"],
    examples: [
      {
        hanzi: "虽然下雨，但是我还去上课。",
        pinyin: "Suīrán xià yǔ, dànshì wǒ hái qù shàngkè.",
        meaning: "Mặc dù trời mưa, nhưng tôi vẫn đi học.",
      },
      {
        hanzi: "虽然汉语很难，但是我很喜欢学习汉语。",
        pinyin: "Suīrán Hànyǔ hěn nán, dànshì wǒ hěn xǐhuan xuéxí Hànyǔ.",
        meaning: "Mặc dù tiếng Hán rất khó, nhưng tôi rất thích học tiếng Hán.",
      },
    ],
  },
  {
    id: "26",
    title: "Bổ ngữ kết quả (完、开、上、成、到、着)",
    categories: ["Bổ ngữ"],
    structures: [
      "Động từ + Bổ ngữ kết quả (完 / 开 / 上 / 成 / 到 / 着) + (了) + (Tân ngữ)",
    ],
    notes:
      "Biểu thị kết quả của động tác (xong, mở ra, đóng lại/mặc vào, thành, đạt được/tìm thấy).",
    examples: [
      {
        hanzi: "我吃完饭去上课。",
        pinyin: "Wǒ chī wán fàn qù shàngkè.",
        meaning: "Tôi ăn cơm xong rồi đi học.",
      },
      {
        hanzi: "请你们打开书，我们开始读课文。",
        pinyin: "Qǐng nǐmen dǎkāi shū, wǒmen kāishǐ dú kèwén.",
        meaning: "Mời các bạn mở sách ra, chúng ta bắt đầu đọc bài khóa.",
      },
      {
        hanzi: "关上门吧，外面太冷了。",
        pinyin: "Guān shàng mén ba, wàimiàn tài lěng le.",
        meaning: "Đóng cửa lại đi, bên ngoài lạnh quá.",
      },
      {
        hanzi: "这本书我翻译成越南语了。",
        pinyin: "Zhè běn shū wǒ fānyì chéng Yuènányǔ le.",
        meaning: "Quyển sách này tôi đã dịch sang tiếng Việt rồi.",
      },
      {
        hanzi: "我买到书了。 / 我买到票了。",
        pinyin: "Wǒ mǎi dào shū le. / Wǒ mǎi dào piào le.",
        meaning: "Tôi mua được sách rồi. / Tôi mua được vé rồi.",
      },
      {
        hanzi: "我找到弟弟了。 / 我找着弟弟了。",
        pinyin: "Wǒ zhǎo dào dìdi le. / Wǒ zhǎo zháo dìdi le.",
        meaning: "Tôi tìm thấy em trai rồi. (找着 dùng trong khẩu ngữ).",
      },
    ],
  },
  {
    id: "27",
    title: "Bổ ngữ thời lượng (Khoảng thời gian)",
    categories: ["Bổ ngữ"],
    structures: [
      "Động từ + (了) + Thời lượng + (Tân ngữ)",
      "Động từ + Tân ngữ + Động từ + (了) + Thời lượng",
    ],
    notes:
      'Trả lời cho câu hỏi "Trong bao lâu?" (半个小时, 一天, 一个小时...).',
    examples: [
      {
        hanzi: "他睡了一个小时了。",
        pinyin: "Tā shuì le yí gè xiǎoshí le.",
        meaning: "Anh ấy đã ngủ được một tiếng rồi.",
      },
      {
        hanzi: "我在这儿等你半个小时了。",
        pinyin: "Wǒ zài zhèr děng nǐ bàn gè xiǎoshí le.",
        meaning: "Tôi đã đợi bạn ở đây được nửa tiếng rồi.",
      },
    ],
  },
  {
    id: "28",
    title: "Biểu đạt số ước lượng (多、几、大概、2 số liền kề)",
    categories: ["Phó từ", "Cấu trúc & Mẫu câu khác"],
    structures: [
      "Số tròn chục/trăm + 多 + Lượng từ + Danh từ",
      "Số từ (1-9) + Lượng từ + 多 + Danh từ",
      "几 + Lượng từ + Danh từ (Vài...)",
      "大概 + Số lượng (Khoảng chừng...)",
      "Hai số tự nhiên liền kề (两三个, 五六十岁...)",
    ],
    examples: [
      {
        hanzi: "她四点多就去同学家了。",
        pinyin: "Tā sì diǎn duō jiù qù tóngxué jiā le.",
        meaning: "Hơn 4 giờ cô ấy đã đi đến nhà bạn học rồi.",
      },
      {
        hanzi: "我们公司大概有一百个员工。",
        pinyin: "Wǒmen gōngsī dàgài yǒu yìbǎi gè yuángōng.",
        meaning: "Công ty chúng tôi có khoảng 100 nhân viên.",
      },
      {
        hanzi: "我们公司有一百多个员工。",
        pinyin: "Wǒmen gōngsī yǒu yìbǎi duō gè yuángōng.",
        meaning:
          "Công ty chúng tôi có hơn 100 nhân viên (khoảng 101 - 109 người).",
      },
      {
        hanzi: "王老师大概五六十岁。",
        pinyin: "Wáng lǎoshī dàgài wǔ liùshí suì.",
        meaning: "Thầy Vương khoảng 50 - 60 tuổi.",
      },
      {
        hanzi: "这件衣服大概两三百块钱。",
        pinyin: "Zhè jiàn yīfu dàgài liǎng sānbǎi kuài qián.",
        meaning: "Cái áo này khoảng 200 đến 300 tệ.",
      },
      {
        hanzi: "昨天我买了十几个榴莲。",
        pinyin: "Zuótiān wǒ mǎi le shí jǐ gè liúlián.",
        meaning: "Hôm qua tôi đã mua mười mấy quả sầu riêng.",
      },
    ],
  },
  {
    id: "29",
    title: "Câu phức tăng tiến (不但……而且……)",
    categories: ["Liên từ"],
    structures: ["Chủ ngữ + 不但 + Vế 1，而且 + (还/也) + Vế 2"],
    notes:
      'Biểu thị ý nghĩa "không những... mà còn...", vế sau nhấn mạnh mức độ cao hơn vế trước.',
    examples: [
      {
        hanzi: "我不但会汉语，而且还会日语。",
        pinyin: "Wǒ búdàn huì Hànyǔ, érqiě hái huì Rìyǔ.",
        meaning: "Tôi không những biết tiếng Trung, mà còn biết cả tiếng Nhật.",
      },
      {
        hanzi: "我不但会说汉语，而且说得很流利。",
        pinyin: "Wǒ búdàn huì shuō Hànyǔ, érqiě shuō de hěn liúlì.",
        meaning:
          "Tôi không những biết nói tiếng Trung, mà còn nói rất lưu loát.",
      },
      {
        hanzi: "我不但会汉语，而且我妹妹也会呢。",
        pinyin: "Wǒ búdàn huì Hànyǔ, érqiě wǒ mèimei yě huì ne.",
        meaning:
          "Tôi không những biết tiếng Trung, mà em gái tôi cũng biết nữa.",
      },
      {
        hanzi: "她不但漂亮，而且聪明。",
        pinyin: "Tā búdàn piàoliang, érqiě cōngmíng.",
        meaning: "Cô ấy không những xinh đẹp, mà còn thông minh.",
      },
    ],
  },
  {
    id: "30",
    title: "Bổ ngữ động lượng (Số lần hành động)",
    categories: ["Bổ ngữ"],
    structures: [
      "Động từ + (了 / 过) + Số từ + Động lượng từ (次 / 遍 / 趟...) + (Tân ngữ)",
    ],
    notes: 'Trả lời cho câu hỏi "Bao nhiêu lần?" (两次, 三遍, 一次...).',
    examples: [
      {
        hanzi: "这部电影我看了两次了。",
        pinyin: "Zhè bù diànyǐng wǒ kàn le liǎng cì le.",
        meaning: "Bộ phim này tôi đã xem hai lần rồi.",
      },
      {
        hanzi: "我去过北京一次。",
        pinyin: "Wǒ qù guo Běijīng yí cì.",
        meaning: "Tôi đã từng đi Bắc Kinh một lần.",
      },
    ],
  },
  {
    id: "31",
    title: "Đại từ nghi vấn (怎么 / 怎么样 / 哪儿 / 哪)",
    categories: ["Cấu trúc & Mẫu câu khác"],
    structures: [
      "怎么 + Động từ (Hỏi cách thức: làm như thế nào?)",
      "Danh từ / Mệnh đề + 怎么样？ (Hỏi tính chất, tình trạng hoặc trưng cầu ý kiến)",
      "在哪儿 / 去哪儿 (Hỏi địa điểm: ở đâu?)",
      "哪 + Lượng từ + Danh từ (Hỏi lựa chọn: cái nào / người nào?)",
    ],
    examples: [
      {
        hanzi: "这个汉字怎么读？",
        pinyin: "Zhège hànzì zěnme dú?",
        meaning: "Chữ Hán này đọc như thế nào?",
      },
      {
        hanzi: "这种水果怎么卖？",
        pinyin: "Zhè zhǒng shuǐguǒ zěnme mài?",
        meaning: "Loại trái cây này bán thế nào?",
      },
      {
        hanzi: "你爸爸妈妈身体怎么样？",
        pinyin: "Nǐ bàba māma shēntǐ zěnmeyàng?",
        meaning: "Sức khỏe bố mẹ bạn thế nào?",
      },
      {
        hanzi: "明天我们一起去公园，怎么样？",
        pinyin: "Míngtiān wǒmen yìqǐ qù gōngyuán, zěnmeyàng?",
        meaning: "Ngày mai chúng ta cùng đi công viên nhé, thấy sao?",
      },
      {
        hanzi: "你在哪儿工作？",
        pinyin: "Nǐ zài nǎr gōngzuò?",
        meaning: "Bạn làm việc ở đâu?",
      },
      {
        hanzi: "你喜欢哪本书？ / 你是哪国人？",
        pinyin: "Nǐ xǐhuān nǎ běn shū? / Nǐ shì nǎ guó rén?",
        meaning: "Bạn thích cuốn sách nào? / Bạn là người nước nào?",
      },
    ],
  },
];

export default function GrammarGuide() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  const filteredData = useMemo(() => {
    return GRAMMAR_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "Tất cả" ||
        item.categories.includes(selectedCategory);

      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const inId = item.id.toLowerCase().includes(q);
      const inTitle = item.title.toLowerCase().includes(q);
      const inCategory = item.categories.some((c) =>
        c.toLowerCase().includes(q),
      );
      const inStructures = item.structures.some((s) =>
        s.toLowerCase().includes(q),
      );
      const inNotes = item.notes?.toLowerCase().includes(q) ?? false;
      const inExamples = item.examples.some(
        (ex) =>
          ex.hanzi.toLowerCase().includes(q) ||
          (ex.pinyin && ex.pinyin.toLowerCase().includes(q)) ||
          (ex.meaning && ex.meaning.toLowerCase().includes(q)),
      );

      return (
        matchesCategory &&
        (inId || inTitle || inCategory || inStructures || inNotes || inExamples)
      );
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 antialiased selection:bg-stone-200 selection:text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          {/* Full-width Search Bar */}
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-stone-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên điểm ngữ pháp, cấu trúc..."
              className="block w-full rounded-xl border border-stone-300 bg-white py-3 pl-11 pr-11 text-sm text-stone-900 placeholder-stone-400 shadow-sm transition-all focus:border-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-600 sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Xóa tìm kiếm"
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-stone-700"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Wrapped Category Filter Pills (No Scroll) */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                    isActive
                      ? "bg-stone-800 text-stone-50 shadow-sm"
                      : "bg-stone-200/75 text-stone-700 hover:bg-stone-300/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Status bar */}
        <div className="mb-4 flex items-center justify-between text-xs text-stone-500">
          <span>
            Hiển thị{" "}
            <strong className="text-stone-800">{filteredData.length}</strong> /{" "}
            {GRAMMAR_DATA.length} điểm ngữ pháp
          </span>
          {(searchQuery || selectedCategory !== "Tất cả") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tất cả");
              }}
              className="font-medium text-stone-700 underline hover:text-stone-900"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>

        {/* Two-Column Table */}
        {filteredData.length > 0 ? (
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-100 text-xs uppercase tracking-wider text-stone-700">
                    <th className="w-full px-6 py-4 font-semibold md:w-5/12">
                      Điểm ngữ pháp (Tên gọi & Cấu trúc)
                    </th>
                    <th className="w-full border-l border-stone-200 px-6 py-4 font-semibold md:w-7/12">
                      Ví dụ minh họa
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {filteredData.map((item) => (
                    <tr
                      key={item.id}
                      className="flex flex-col align-top transition-colors hover:bg-stone-50/80 md:table-row"
                    >
                      {/* Cột 1: Điểm ngữ pháp */}
                      <td className="px-6 py-5 md:w-5/12">
                        <div className="mb-2 flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex items-center justify-center rounded-md bg-stone-800 px-2.5 py-0.5 text-xs font-bold text-stone-50">
                            #{item.id}
                          </span>
                          {item.categories.map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center rounded-md border border-stone-200 bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        <h2 className="mb-3 text-base font-bold leading-snug text-stone-900 sm:text-lg">
                          {item.title}
                        </h2>

                        <div className="space-y-2">
                          {item.structures.map((struct, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg border border-stone-200/80 bg-stone-100/90 p-2.5 font-mono text-sm font-medium text-stone-800"
                            >
                              {struct}
                            </div>
                          ))}
                        </div>

                        {item.notes && (
                          <p className="mt-3 border-l-2 border-stone-400 bg-stone-50 py-1 pl-2.5 text-xs text-stone-600">
                            <span className="font-semibold text-stone-700">
                              Lưu ý:{" "}
                            </span>
                            {item.notes}
                          </p>
                        )}
                      </td>

                      {/* Cột 2: Ví dụ */}
                      <td className="border-stone-200 bg-stone-50/30 px-6 py-5 md:w-7/12 md:border-l md:bg-transparent">
                        <ul className="space-y-3">
                          {item.examples.map((ex, idx) => (
                            <li
                              key={idx}
                              className="rounded-xl border border-stone-200/70 bg-stone-50 p-3 transition-colors hover:border-stone-300"
                            >
                              <p className="text-base font-medium leading-relaxed text-stone-900">
                                {ex.hanzi}
                              </p>
                              {ex.pinyin && (
                                <p className="mt-0.5 font-mono text-xs text-stone-500">
                                  {ex.pinyin}
                                </p>
                              )}
                              {ex.meaning && (
                                <p className="mt-1 text-sm text-stone-700">
                                  {ex.meaning}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-white px-4 py-16 text-center">
            <Sparkles className="mx-auto mb-3 h-10 w-10 text-stone-400" />
            <h3 className="text-base font-semibold text-stone-800">
              Không tìm thấy điểm ngữ pháp phù hợp
            </h3>
            <p className="mx-auto mt-1 max-w-md text-sm text-stone-500">
              Thử tìm kiếm với từ khóa khác (ví dụ: &quot;Trợ từ&quot;, &quot;Bổ
              ngữ&quot;, &quot;比&quot;, &quot;了&quot;, &quot;so sánh&quot;...)
              hoặc xóa bộ lọc hiện tại.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tất cả");
              }}
              className="mt-4 rounded-xl bg-stone-800 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700"
            >
              Xem tất cả ngữ pháp
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
