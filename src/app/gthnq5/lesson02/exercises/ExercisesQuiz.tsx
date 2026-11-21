"use client";

import { useState } from "react";

// ===== Kiểu dữ liệu =====
type Opt = { zh: string; py: string };
type Q = {
  q: string; // "{}" = chỗ trống
  a: string[]; // đáp án từng chỗ trống
  choices?: Opt[];
  alt?: string[][];
  pair?: boolean;
  py: string;
  vi: string;
  note: string;
  warn?: string;
};
type Tab = {
  id: string;
  label: string;
  sub: string;
  options?: Opt[];
  items: Q[];
};
type Fill = {
  q: string;
  word: Opt;
  a: string;
  alt?: string[];
  py: string;
  vi: string;
  note: string;
  warn?: string;
};
type Para = {
  sents: { k: string; t: string }[];
  a: string;
  full: string;
  py: string;
  vi: string;
  note: string;
};
type Fix = {
  wrong: string;
  a: string;
  alt?: string[];
  py: string;
  vi: string;
  note: string;
  warn?: string;
};
type Sit = { s: string; py: string; vi: string; hint: string };
type Say = {
  q: string;
  qpy: string;
  qvi: string;
  word?: Opt;
  sample: string;
  py: string;
  vi: string;
  note: string;
};

// ===== Hàm chấm =====
function grade(item: Q, vals: string[]): boolean[] {
  const res = item.a.map((ans, j) =>
    (item.alt?.[j] ?? [ans]).includes(vals[j]),
  );
  if (item.pair) {
    const same = vals[0] === vals[1];
    res[0] = res[0] && same;
    res[1] = res[1] && same;
  }
  return res;
}

// ===== Dữ liệu bài 3 – 8 (Bài 2 一封信) =====
const TAB3: Tab = {
  id: "3",
  label: "3",
  sub: "Chọn từ trong khung điền vào chỗ trống",
  options: [
    {
      zh: "课外",
      py: "kèwài",
    },
    {
      zh: "发",
      py: "fā",
    },
    {
      zh: "优美",
      py: "yōuměi",
    },
    {
      zh: "表示",
      py: "biǎoshì",
    },
    {
      zh: "柔和",
      py: "róuhé",
    },
    {
      zh: "放心",
      py: "fàngxīn",
    },
    {
      zh: "适应",
      py: "shìyìng",
    },
    {
      zh: "首",
      py: "shǒu",
    },
    {
      zh: "作用",
      py: "zuòyòng",
    },
    {
      zh: "预防",
      py: "yùfáng",
    },
    {
      zh: "分别",
      py: "fēnbié",
    },
    {
      zh: "好玩儿",
      py: "hǎowánr",
    },
  ],
  items: [
    {
      q: "我在这里一切都很好，请爸爸妈妈{}。",
      a: ["放心"],
      py: "Wǒ zài zhèlǐ yíqiè dōu hěn hǎo, qǐng bàba māma fàngxīn.",
      vi: "Ở đây mọi thứ của con đều tốt, xin bố mẹ cứ yên tâm.",
      note: "放心 = yên tâm. Cấu trúc 请 + người + 放心 dùng để trấn an người khác. 放心 là động từ ly hợp (放 + 心).",
    },
    {
      q: "我给你们{}过去了几张照片，是我在长城、颐和园照的。",
      a: ["发"],
      py: "Wǒ gěi nǐmen fā guòqù le jǐ zhāng zhàopiàn, shì wǒ zài Chángchéng, Yíhéyuán zhào de.",
      vi: "Con gửi cho bố mẹ mấy tấm ảnh, là ảnh con chụp ở Trường Thành và Di Hòa Viên.",
      note: "发 (gửi đi) + 过去 (bổ ngữ xu hướng): gửi đến chỗ người nhận (thư, ảnh, tin nhắn). 是…的 nhấn mạnh địa điểm chụp ảnh.",
    },
    {
      q: "我们班的学生，{}来自七个国家。",
      a: ["分别"],
      py: "Wǒmen bān de xuésheng, fēnbié láizì qī ge guójiā.",
      vi: "Học sinh lớp chúng tôi lần lượt đến từ bảy nước.",
      note: "分别 (phó từ) = lần lượt, mỗi người mỗi nơi. Đứng trước động từ: 分别来自…",
    },
    {
      q: "她不太喜欢参加这些{}活动。",
      a: ["课外"],
      py: "Tā bú tài xǐhuan cānjiā zhèxiē kèwài huódòng.",
      vi: "Cô ấy không thích tham gia những hoạt động ngoại khóa này.",
      note: "课外 = ngoài giờ học, làm định ngữ đứng trước danh từ: 课外活动 (hoạt động ngoại khóa), 课外书.",
    },
    {
      q: "她说话的声音很{}，很好听。",
      a: ["柔和"],
      py: "Tā shuōhuà de shēngyīn hěn róuhé, hěn hǎotīng.",
      vi: "Giọng nói của cô ấy rất dịu nhẹ, rất dễ nghe.",
      note: "柔和 = mềm mại, dịu nhẹ, dùng cho âm thanh, ánh sáng, động tác. 优美 thiên về vẻ đẹp thanh nhã của cảnh vật, tư thế.",
    },
    {
      q: "我们学校就在风景{}的西山下。",
      a: ["优美"],
      py: "Wǒmen xuéxiào jiù zài fēngjǐng yōuměi de Xīshān xià.",
      vi: "Trường chúng tôi nằm ngay dưới chân Tây Sơn có phong cảnh tuyệt đẹp.",
      note: "优美 = đẹp, thanh nhã. 风景优美 là cụm chủ vị làm định ngữ, thêm 的 để bổ nghĩa cho 西山.",
    },
    {
      q: "打太极拳可以锻炼身体，增强体质，{}疾病。",
      a: ["预防"],
      py: "Dǎ tàijíquán kěyǐ duànliàn shēntǐ, zēngqiáng tǐzhì, yùfáng jíbìng.",
      vi: "Tập thái cực quyền có thể rèn luyện cơ thể, tăng cường thể chất, phòng ngừa bệnh tật.",
      note: "预防 + danh từ (疾病, 感冒): phòng ngừa trước khi bệnh xảy ra.",
    },
    {
      q: "针灸和按摩对于这些慢性病有很好的治疗{}。",
      a: ["作用"],
      py: "Zhēnjiǔ hé ànmó duìyú zhèxiē mànxìngbìng yǒu hěn hǎo de zhìliáo zuòyòng.",
      vi: "Châm cứu và xoa bóp có tác dụng chữa trị rất tốt đối với những bệnh mạn tính này.",
      note: "作用 là danh từ (tác dụng): 有作用 / 没有作用 / 治疗作用.",
    },
    {
      q: "这是一{}非常有名的唐诗。",
      a: ["首"],
      py: "Zhè shì yì shǒu fēicháng yǒumíng de Tángshī.",
      vi: "Đây là một bài thơ Đường rất nổi tiếng.",
      note: "首 là lượng từ dùng cho thơ, bài hát: 一首诗, 一首歌.",
    },
    {
      q: "他一次又一次向我{}他喜欢我，可是我已经有男朋友了。",
      a: ["表示"],
      py: "Tā yí cì yòu yí cì xiàng wǒ biǎoshì tā xǐhuan wǒ, kěshì wǒ yǐjīng yǒu nánpéngyou le.",
      vi: "Anh ấy hết lần này đến lần khác bày tỏ với tôi là anh thích tôi, nhưng tôi đã có bạn trai rồi.",
      note: "向 + người + 表示 + nội dung: bày tỏ (tình cảm, thái độ, lòng cảm ơn) với ai.",
    },
    {
      q: "那是一个非常{}的地方，这个星期我们去那儿玩儿玩儿吧。",
      a: ["好玩儿"],
      py: "Nà shì yí ge fēicháng hǎowánr de dìfang, zhège xīngqī wǒmen qù nàr wánrwanr ba.",
      vi: "Đó là một nơi rất vui, tuần này chúng ta đến đó chơi nhé.",
      note: "好玩儿 = vui, thú vị (tính từ), đứng trước 的 để bổ nghĩa cho 地方.",
    },
    {
      q: "我还不{}这里的气候，冬天太冷，夏天太热。",
      a: ["适应"],
      py: "Wǒ hái bú shìyìng zhèlǐ de qìhòu, dōngtiān tài lěng, xiàtiān tài rè.",
      vi: "Tôi vẫn chưa thích nghi với khí hậu ở đây, mùa đông quá lạnh, mùa hè quá nóng.",
      note: "适应 + khí hậu, hoàn cảnh, cuộc sống: thích nghi, quen với. Phủ định: 不适应, 还不太适应.",
    },
  ],
};

const EX4: Fill[] = [
  {
    q: "我刚来中国时，觉得{}。",
    word: {
      zh: "一切",
      py: "yíqiè",
    },
    a: "一切都不习惯",
    py: "Wǒ gāng lái Zhōngguó shí, juéde yíqiè dōu bù xíguàn.",
    vi: "Lúc mới đến Trung Quốc, tôi thấy cái gì cũng không quen.",
    note: "一切 (tất cả, mọi thứ) thường làm chủ ngữ và đi với 都: 一切都…",
    alt: ["一切都很不习惯"],
  },
  {
    q: "我们{}，也许能找到。",
    word: {
      zh: "分别",
      py: "fēnbié",
    },
    a: "分别找",
    py: "Wǒmen fēnbié zhǎo, yěxǔ néng zhǎodào.",
    vi: "Chúng ta chia nhau ra tìm, có lẽ sẽ tìm thấy.",
    note: "分别 + động từ: mỗi người một hướng, làm riêng ra. Ở đây là chia nhau đi tìm.",
  },
  {
    q: "{}，我才找到这个地方。",
    word: {
      zh: "靠",
      py: "kào",
    },
    a: "靠他指的路",
    py: "Kào tā zhǐ de lù, wǒ cái zhǎodào zhège dìfang.",
    vi: "Nhờ con đường anh ấy chỉ, tôi mới tìm được nơi này.",
    note: "靠 = dựa vào, nhờ vào. 靠 + danh từ/cụm từ đứng đầu câu nêu phương tiện, nguồn giúp đỡ. 才 nhấn mạnh phải nhờ đó mới được.",
    alt: ["靠他指的路我才找到"],
  },
  {
    q: "这个暑假我一定{}。",
    word: {
      zh: "各",
      py: "gè",
    },
    a: "会参加各种课外活动",
    py: "Zhège shǔjià wǒ yídìng huì cānjiā gèzhǒng kèwài huódòng.",
    vi: "Kỳ nghỉ hè này tôi nhất định sẽ tham gia đủ loại hoạt động ngoại khóa.",
    note: "各 + lượng từ/danh từ (各种, 各国, 各个): mỗi, các, đủ loại. 各种课外活动 = các loại hoạt động ngoại khóa.",
    alt: ["参加各种课外活动", "我一定会参加各种课外活动"],
  },
  {
    q: "{}打太极拳。",
    word: {
      zh: "每",
      py: "měi",
    },
    a: "每天他都去",
    py: "Měi tiān tā dōu qù dǎ tàijíquán.",
    vi: "Ngày nào anh ấy cũng đi tập thái cực quyền.",
    note: "每 + lượng từ/danh từ chỉ thời gian: 每天, 每个星期. Thường đi kèm 都 để nhấn mạnh ai cũng/lần nào cũng như vậy.",
    alt: ["他每天都去"],
  },
  {
    q: "他对我的帮助很大，我真应该{}。",
    word: {
      zh: "表示",
      py: "biǎoshì",
    },
    a: "表示感谢",
    py: "Tā duì wǒ de bāngzhù hěn dà, wǒ zhēn yīnggāi biǎoshì gǎnxiè.",
    vi: "Sự giúp đỡ của anh ấy đối với tôi rất lớn, tôi thật sự nên bày tỏ lòng cảm ơn.",
    note: "表示 + 感谢/满意/欢迎: bày tỏ thái độ, tình cảm. Có thể nói rõ đối tượng: 向他表示感谢.",
    alt: ["向他表示感谢", "表示感谢他"],
  },
];

const EX5: Fill[] = [
  {
    q: "A：我只对新的东西感兴趣。你呢？\nB：我对这里的{}。",
    word: {
      zh: "一切",
      py: "yíqiè",
    },
    a: "一切都感兴趣",
    py: "A: Wǒ zhǐ duì xīn de dōngxi gǎn xìngqù. Nǐ ne? B: Wǒ duì zhèlǐ de yíqiè dōu gǎn xìngqù.",
    vi: "A: Tôi chỉ hứng thú với những thứ mới. Còn bạn? B: Tôi hứng thú với tất cả mọi thứ ở đây.",
    note: "对…感兴趣: hứng thú với… 一切 làm tân ngữ của 对 (这里的一切), sau đó 都 đứng trước 感兴趣.",
  },
  {
    q: "A：你们班的学生来自多少个国家？\nB：我们班的同学{}。",
    word: {
      zh: "分别",
      py: "fēnbié",
    },
    a: "分别来自七个国家",
    py: "A: Nǐmen bān de xuésheng láizì duōshao ge guójiā? B: Wǒmen bān de tóngxué fēnbié láizì qī ge guójiā.",
    vi: "A: Học sinh lớp bạn đến từ bao nhiêu nước? B: Các bạn lớp chúng tôi lần lượt đến từ bảy nước.",
    note: "分别来自…: mỗi bạn đến từ một nước khác nhau. Trả lời đúng trọng tâm câu hỏi: nêu số nước (七个国家).",
  },
  {
    q: "A：你觉得{}？\nB：很好。他讲得又清楚又有意思。",
    word: {
      zh: "讲课",
      py: "jiǎngkè",
    },
    a: "他讲课讲得好吗",
    py: "A: Nǐ juéde tā jiǎngkè jiǎng de hǎo ma? B: Hěn hǎo. Tā jiǎng de yòu qīngchu yòu yǒu yìsi.",
    vi: "A: Bạn thấy anh ấy giảng bài có hay không? B: Rất hay. Anh ấy giảng vừa rõ ràng vừa thú vị.",
    note: "讲课 là động từ ly hợp, khi có bổ ngữ trình độ phải lặp động từ: 讲课讲得好. Câu trả lời B (他讲得…) cũng gợi ý đúng cấu trúc này.",
    alt: ["他讲课讲得怎么样"],
  },
  {
    q: "A：中药{}？\nB：当然有作用。我的病就是喝中药以后才好的。",
    word: {
      zh: "作用",
      py: "zuòyòng",
    },
    a: "有作用吗",
    py: "A: Zhōngyào yǒu zuòyòng ma? B: Dāngrán yǒu zuòyòng. Wǒ de bìng jiùshì hē zhōngyào yǐhòu cái hǎo de.",
    vi: "A: Thuốc Đông y có tác dụng không? B: Đương nhiên có tác dụng. Bệnh của tôi chính là uống thuốc Đông y xong mới khỏi.",
    note: "有作用吗: hỏi có tác dụng hay không. Câu trả lời B nhắc lại 有作用 nên đáp án khớp: 中药有作用吗?",
    alt: ["有没有作用"],
  },
  {
    q: "A：出国以后才知道，还是在家好。\nB：可是，一个人不能{}。",
    word: {
      zh: "靠",
      py: "kào",
    },
    a: "一直靠父母",
    py: "A: Chūguó yǐhòu cái zhīdào, háishi zàijiā hǎo. B: Kěshì, yí ge rén bù néng yìzhí kào fùmǔ.",
    vi: "A: Ra nước ngoài rồi mới biết ở nhà vẫn tốt hơn. B: Nhưng mà, một người không thể mãi dựa vào bố mẹ.",
    note: "靠 + người = dựa dẫm vào ai. 一直 = luôn luôn, mãi. 不能一直靠父母 là lời khuyên phải tự lập.",
  },
  {
    q: "A：你把礼物送给她以后，{}？\nB：她很高兴，向我表示了感谢。",
    word: {
      zh: "表示",
      py: "biǎoshì",
    },
    a: "表示感谢了吗",
    py: "A: Nǐ bǎ lǐwù sòng gěi tā yǐhòu, biǎoshì gǎnxiè le ma? B: Tā hěn gāoxìng, xiàng wǒ biǎoshì le gǎnxiè.",
    vi: "A: Sau khi bạn tặng quà cho cô ấy, cô ấy có bày tỏ lời cảm ơn không? B: Cô ấy rất vui, đã bày tỏ lời cảm ơn với tôi.",
    note: "Hỏi dạng 表示感谢了吗 (có… chưa?). Câu B trả lời bằng 向我表示了感谢. Chủ ngữ 她 được lược vì ngữ cảnh đã rõ.",
    alt: ["她表示感谢了吗"],
  },
];

const EX6: Para[] = [
  {
    sents: [
      {
        k: "A",
        t: "我们每个人的照片都记录了自己人生历程的一段时光，留下了生活的欢乐",
      },
      {
        k: "B",
        t: "一边看，一边回想照片上的那些人和事，回忆那过去的美好时光",
      },
      {
        k: "C",
        t: "因此，翻相册、看照片成了我生活中的一大乐趣",
      },
      {
        k: "D",
        t: "一拿起相册就要翻来翻去看半天",
      },
    ],
    a: "ACDB",
    full: "我们每个人的照片都记录了自己人生历程的一段时光，留下了生活的欢乐。因此，翻相册、看照片成了我生活中的一大乐趣。一拿起相册就要翻来翻去看半天。一边看，一边回想照片上的那些人和事，回忆那过去的美好时光。",
    py: "Wǒmen měi ge rén de zhàopiàn dōu jìlù le zìjǐ rénshēng lìchéng de yí duàn shíguāng, liúxià le shēnghuó de huānlè. Yīncǐ, fān xiàngcè, kàn zhàopiàn chéng le wǒ shēnghuó zhōng de yí dà lèqù. Yì náqǐ xiàngcè jiù yào fān lái fān qù kàn bàntiān. Yìbiān kàn, yìbiān huíxiǎng zhàopiàn shang de nàxiē rén hé shì, huíyì nà guòqù de měihǎo shíguāng.",
    vi: "Ảnh của mỗi chúng ta đều ghi lại một đoạn thời gian của hành trình cuộc đời, lưu giữ niềm vui cuộc sống. Vì vậy, lật album, xem ảnh trở thành một niềm vui lớn trong cuộc sống của tôi. Cứ cầm album lên là lật đi lật lại xem rất lâu. Vừa xem vừa nhớ lại những người và việc trong ảnh, hồi tưởng khoảng thời gian tươi đẹp đã qua.",
    note: "A nêu nhận định chung về ảnh. C có 因此 (vì vậy) nên là kết luận rút ra từ A. D (一拿起…就…) mô tả biểu hiện cụ thể của niềm vui đó. B (一边看，一边回想) nối tiếp hành động xem ảnh ở D.",
  },
  {
    sents: [
      {
        k: "A",
        t: "所以说语言是社会交际的工具",
      },
      {
        k: "B",
        t: "没有社会生活就不会有语言",
      },
      {
        k: "C",
        t: "语言是在社会生活中产生的",
      },
      {
        k: "D",
        t: "人在社会生活中跟别人交往需要语言",
      },
      {
        k: "E",
        t: "你要想把一种语言学好，就要勇敢地去用语言跟别人交际",
      },
    ],
    a: "CBDAE",
    full: "语言是在社会生活中产生的。没有社会生活就不会有语言。人在社会生活中跟别人交往需要语言。所以说语言是社会交际的工具。你要想把一种语言学好，就要勇敢地去用语言跟别人交际。",
    py: "Yǔyán shì zài shèhuì shēnghuó zhōng chǎnshēng de. Méiyǒu shèhuì shēnghuó jiù bú huì yǒu yǔyán. Rén zài shèhuì shēnghuó zhōng gēn biérén jiāowǎng xūyào yǔyán. Suǒyǐ shuō yǔyán shì shèhuì jiāojì de gōngjù. Nǐ yào xiǎng bǎ yì zhǒng yǔyán xuéhǎo, jiù yào yǒnggǎn de qù yòng yǔyán gēn biérén jiāojì.",
    vi: "Ngôn ngữ được sinh ra trong đời sống xã hội. Không có đời sống xã hội thì sẽ không có ngôn ngữ. Con người giao tiếp với người khác trong đời sống xã hội cần có ngôn ngữ. Cho nên nói ngôn ngữ là công cụ giao tiếp xã hội. Nếu bạn muốn học tốt một ngôn ngữ thì phải mạnh dạn dùng ngôn ngữ để giao tiếp với người khác.",
    note: "C nêu luận điểm về nguồn gốc ngôn ngữ, B nói lại từ mặt phủ định, D nêu nhu cầu của con người. A có 所以说 là kết luận rút ra từ các câu trước. E là lời khuyên cho người học, đặt cuối cùng.",
  },
];

const EX7: Fix[] = [
  {
    wrong: "一切的困难我都不怕。",
    a: "一切困难我都不怕。",
    py: "Yíqiè kùnnan wǒ dōu bú pà.",
    vi: "Mọi khó khăn tôi đều không sợ.",
    note: "一切 làm định ngữ thì đứng thẳng trước danh từ, không thêm 的: 一切困难, 一切问题. Bỏ 的.",
  },
  {
    wrong: "我昨天表示她别去，可是今天她还是去了。",
    a: "我昨天叫她别去，可是今天她还是去了。",
    py: "Wǒ zuótiān jiào tā bié qù, kěshì jīntiān tā háishi qù le.",
    vi: "Hôm qua tôi bảo cô ấy đừng đi, nhưng hôm nay cô ấy vẫn đi.",
    note: "表示 là bày tỏ thái độ, tình cảm, ý kiến, không dùng với nghĩa bảo ai làm gì. Muốn bảo/khuyên ai thì dùng 叫/让 + người + động từ.",
    alt: ["我昨天让她别去，可是今天她还是去了。"],
  },
  {
    wrong: "他每天早上在公园里打太极拳和气功。",
    a: "他每天早上在公园里打太极拳和练气功。",
    py: "Tā měi tiān zǎoshang zài gōngyuán li dǎ tàijíquán hé liàn qìgōng.",
    vi: "Mỗi sáng anh ấy tập thái cực quyền và khí công ở công viên.",
    note: "Động từ phải hợp với tân ngữ: 打太极拳 nhưng 练气功 (không nói 打气功). Nối hai cụm động tân bằng 和 thì mỗi cụm cần động từ riêng.",
  },
  {
    wrong: "各个国都有不同的习惯和想法。",
    a: "各个国家的人都有不同的习惯和想法。",
    py: "Gè ge guójiā de rén dōu yǒu bùtóng de xíguàn hé xiǎngfǎ.",
    vi: "Người ở mỗi nước đều có thói quen và suy nghĩ khác nhau.",
    note: "Hai lỗi: 国 không đứng một mình mà phải là 国家; và 习惯, 想法 là của con người nên chủ ngữ phải là 各个国家的人.",
  },
  {
    wrong: "我躺在床上翻来倒去不睡着。",
    a: "我躺在床上翻来覆去睡不着。",
    py: "Wǒ tǎng zài chuáng shang fān lái fù qù shuì bu zháo.",
    vi: "Tôi nằm trên giường trằn trọc không ngủ được.",
    note: "翻来覆去 là thành ngữ cố định (trằn trọc, lật qua lật lại), không phải 翻来倒去. Phủ định khả năng là 睡不着, không nói 不睡着.",
  },
  {
    wrong: "我把这里的美景拍照了下来。",
    a: "我把这里的美景拍了下来。",
    py: "Wǒ bǎ zhèlǐ de měijǐng pāi le xiàlái.",
    vi: "Tôi đã chụp lại cảnh đẹp ở đây.",
    note: "拍下来 (chụp lại) đã đủ nghĩa. 拍照 là động từ ly hợp, không thể đi cùng 把 + tân ngữ và bổ ngữ 下来. Bỏ 照.",
    alt: ["我把这里的美景拍下来了。"],
  },
];

const EX8A: Sit[] = [
  {
    s: "这就是我要告诉你的一切。",
    py: "Zhè jiùshì wǒ yào gàosu nǐ de yíqiè.",
    vi: "Đây chính là tất cả những gì tôi muốn nói với bạn.",
    hint: "Khi bạn vừa kể xong một chuyện dài (một trải nghiệm, một lời giải thích) và muốn nói rằng đó là toàn bộ điều mình định nói, không còn gì giấu thêm.",
  },
  {
    s: "我还不太适应。",
    py: "Wǒ hái bú tài shìyìng.",
    vi: "Tôi vẫn chưa quen lắm.",
    hint: "Khi mới đến một môi trường mới (đến Trung Quốc, đổi nơi ở) và có người hỏi bạn đã quen với khí hậu, đồ ăn, cuộc sống ở đó chưa.",
  },
];

const EX8B: Say[] = [
  {
    q: "说一下儿太极拳的动作。",
    qpy: "Shuō yíxiàr tàijíquán de dòngzuò.",
    qvi: "Nói qua về các động tác của thái cực quyền.",
    sample: "太极拳的动作柔和、缓慢，很优美，也很舒展。",
    py: "Tàijíquán de dòngzuò róuhé, huǎnmàn, hěn yōuměi, yě hěn shūzhǎn.",
    vi: "Động tác của thái cực quyền mềm mại, chậm rãi, rất đẹp và uyển chuyển.",
    note: "Dùng các cụm trong phần luyện từ đầu bài: 动作柔和, 动作缓慢, 动作优美, 动作舒展.",
  },
  {
    q: "说明打太极拳的作用。",
    qpy: "Shuōmíng dǎ tàijíquán de zuòyòng.",
    qvi: "Nói rõ tác dụng của việc tập thái cực quyền.",
    sample:
      "打太极拳可以锻炼身体，增强体质，预防疾病，对慢性病也有很好的作用。",
    py: "Dǎ tàijíquán kěyǐ duànliàn shēntǐ, zēngqiáng tǐzhì, yùfáng jíbìng, duì mànxìngbìng yě yǒu hěn hǎo de zuòyòng.",
    vi: "Tập thái cực quyền có thể rèn luyện cơ thể, tăng cường thể chất, phòng bệnh, và cũng có tác dụng tốt đối với các bệnh mạn tính.",
    note: "Dùng 预防疾病, 有作用 (từ bài 3) và các cụm 锻炼身体, 增强体质 trong bài khóa.",
  },
];

const norm = (s: string) =>
  s.replace(/[（(][^）)]*[）)]/g, "").replace(/[^\p{L}\p{N}]/gu, "");

const TITLES: Record<string, { t: string; s: string }> = {
  "3": { t: "3. 选词填空", s: "Chọn từ trong khung điền vào chỗ trống" },
  "4": {
    t: "4. 用括号里的词语完成句子",
    s: "Gõ phần còn thiếu của câu, dùng từ trong ngoặc",
  },
  "5": {
    t: "5. 用括号里的词语完成会话",
    s: "Gõ phần còn thiếu của hội thoại, dùng từ trong ngoặc",
  },
  "6": {
    t: "6. 连句成段",
    s: "Bấm vào các câu theo thứ tự đúng để thành đoạn văn",
  },
  "7": { t: "7. 改错句", s: "Sửa câu sai" },
  "8": {
    t: "8. 情景表达",
    s: "Ngôn ngữ và tình huống (bài mở, sách không có đáp án, phần gợi ý do mình soạn)",
  },
};

// ===== Thành phần dùng chung =====
function Explain({
  py,
  vi,
  note,
  warn,
}: {
  py: string;
  vi: string;
  note: string;
  warn?: string;
}) {
  return (
    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-[15px] leading-7">
      <p className="text-slate-500">{py}</p>
      <p className="text-slate-700">{vi}</p>
      <p className="rounded-md bg-sky-50 p-3 text-slate-800">
        <span className="font-semibold">Giải thích: </span>
        {note}
      </p>
      {warn && (
        <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-900">
          <span className="font-semibold">Lưu ý: </span>
          {warn}
        </p>
      )}
    </div>
  );
}

function Verdict({ ok, answer }: { ok: boolean; answer?: string }) {
  return (
    <p
      className={
        ok ? "font-semibold text-emerald-700" : "font-semibold text-rose-700"
      }
    >
      {ok ? "Đúng rồi!" : "Chưa đúng"}
      {!ok && answer && (
        <span className="ml-2 font-normal text-slate-700">
          Đáp án: <span className="font-bold text-sky-700">{answer}</span>
        </span>
      )}
    </p>
  );
}

function CheckBar({
  checked,
  onCheck,
  onReset,
  summary,
}: {
  checked: boolean;
  onCheck: () => void;
  onReset: () => void;
  summary: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
      {!checked ? (
        <button
          onClick={onCheck}
          className="rounded-md bg-sky-600 px-6 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none"
        >
          Kiểm tra
        </button>
      ) : (
        <button
          onClick={onReset}
          className="rounded-md border border-sky-600 px-6 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50 focus:outline-none"
        >
          Làm lại
        </button>
      )}
      {checked && <span className="font-medium text-slate-700">{summary}</span>}
    </div>
  );
}

function Num({ n }: { n: number }) {
  return (
    <span className="mt-1 w-7 shrink-0 text-right text-sm font-semibold text-slate-400">
      {n}.
    </span>
  );
}

// ===== Bài 3 (A, B, C) =====
function FillTab({ tab }: { tab: Tab }) {
  const [vals, setVals] = useState<Record<number, string[]>>({});
  const [checked, setChecked] = useState(false);
  const results = tab.items.map((it, i) => grade(it, vals[i] ?? []));
  const score = results.filter((r) => r.every(Boolean)).length;

  return (
    <div>
      {tab.options && (
        <div className="mb-4 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-3">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {tab.options.map((w) => (
              <span key={w.zh} className="text-center leading-tight">
                <span className="block text-xs text-slate-500">{w.py}</span>
                <span className="font-serif text-lg">{w.zh}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {tab.items.map((item, i) => {
          const parts = item.q.split("{}");
          const res = results[i];
          return (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-line font-serif text-lg leading-10 text-slate-900">
                    {parts.map((p, j) => (
                      <span key={j}>
                        {p}
                        {j < parts.length - 1 && (
                          <select
                            value={vals[i]?.[j] ?? ""}
                            disabled={checked}
                            onChange={(e) => {
                              const cur = [...(vals[i] ?? [])];
                              cur[j] = e.target.value;
                              setVals({ ...vals, [i]: cur });
                            }}
                            className={
                              "mx-1 min-w-[4.5rem] cursor-pointer appearance-none rounded px-2 py-0.5 text-center text-base focus:outline-none focus:ring-2 focus:ring-sky-300 " +
                              (!checked
                                ? "bg-sky-50 text-slate-900 hover:bg-sky-100"
                                : res[j]
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-rose-100 text-rose-800")
                            }
                          >
                            <option value="">…</option>
                            {(item.choices ?? tab.options ?? []).map((op) => (
                              <option key={op.zh} value={op.zh}>
                                {op.zh}
                              </option>
                            ))}
                          </select>
                        )}
                      </span>
                    ))}
                  </p>
                  {checked && (
                    <div className="mt-3">
                      <Verdict
                        ok={res.every(Boolean)}
                        answer={item.a.join(" · ")}
                      />
                      <Explain
                        py={item.py}
                        vi={item.vi}
                        note={item.note}
                        warn={item.warn}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CheckBar
        checked={checked}
        onCheck={() => setChecked(true)}
        onReset={() => {
          setChecked(false);
          setVals({});
        }}
        summary={`Đúng ${score}/${tab.items.length} câu`}
      />
    </div>
  );
}

// ===== Bài 5 =====
type Stat = "exact" | "word" | "none";

function FillInTab({ EX5 }: { EX5: Fill[] }) {
  const [txt, setTxt] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const statOf = (it: Fill, v: string): Stat => {
    const n = norm(v);
    if ([it.a, ...(it.alt ?? [])].some((x) => norm(x) === n)) return "exact";
    if (n.includes(norm(it.word.zh))) return "word";
    return "none";
  };
  const stats = EX5.map((it, i) => statOf(it, txt[i] ?? ""));
  const exact = stats.filter((s) => s === "exact").length;
  const word = stats.filter((s) => s === "word").length;

  return (
    <div>
      <div className="space-y-3">
        {EX5.map((it, i) => {
          const parts = it.q.split("{}");
          const st = stats[i];
          return (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm text-slate-500">
                    Từ cần dùng:{" "}
                    <span className="rounded bg-sky-50 px-2 py-0.5 font-serif text-base text-sky-800">
                      {it.word.zh}
                    </span>{" "}
                    {it.word.py}
                  </p>
                  <p className="whitespace-pre-line font-serif text-lg leading-10 text-slate-900">
                    {parts[0]}
                    <input
                      value={txt[i] ?? ""}
                      readOnly={checked}
                      onChange={(e) => setTxt({ ...txt, [i]: e.target.value })}
                      placeholder="gõ câu trả lời"
                      className={
                        "mx-1 w-60 max-w-full border-0 border-b-2 bg-transparent px-1 text-center font-serif text-lg focus:outline-none " +
                        (!checked
                          ? "border-slate-300 focus:border-sky-500"
                          : st === "exact"
                            ? "border-emerald-500 text-emerald-800"
                            : st === "word"
                              ? "border-amber-400 text-amber-800"
                              : "border-rose-400 text-rose-800")
                      }
                    />
                    {parts[1]}
                  </p>
                  {checked && (
                    <div className="mt-3">
                      {st === "exact" && (
                        <p className="font-semibold text-emerald-700">
                          Khớp đáp án sách.
                        </p>
                      )}
                      {st === "word" && (
                        <p className="font-semibold text-amber-700">
                          Bạn đã dùng đúng từ nhưng câu khác đáp án sách.{" "}
                          <span className="font-normal text-slate-700">
                            Câu của bạn có thể vẫn đúng, hãy so với đáp án bên
                            dưới.
                          </span>
                        </p>
                      )}
                      {st === "none" && (
                        <p className="font-semibold text-rose-700">
                          Chưa đúng.{" "}
                          <span className="font-normal text-slate-700">
                            Câu cần có từ{" "}
                            <span className="font-serif">{it.word.zh}</span>.
                          </span>
                        </p>
                      )}
                      <p className="mt-1 text-slate-700">
                        Đáp án sách:{" "}
                        <span className="whitespace-pre-line font-serif text-lg text-slate-900">
                          {parts[0]}
                          <span className="font-bold text-sky-700">{it.a}</span>
                          {parts[1]}
                        </span>
                      </p>
                      <Explain
                        py={it.py}
                        vi={it.vi}
                        note={it.note}
                        warn={it.warn}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CheckBar
        checked={checked}
        onCheck={() => setChecked(true)}
        onReset={() => {
          setChecked(false);
          setTxt({});
        }}
        summary={`Khớp đáp án ${exact}/${EX5.length} câu${word > 0 ? ` · ${word} câu dùng đúng từ nhưng khác đáp án` : ""}`}
      />
    </div>
  );
}

// ===== Bài 6 =====
function ParaTab({ EX6 }: { EX6: Para[] }) {
  const [ord, setOrd] = useState<Record<number, string[]>>({});
  const [checked, setChecked] = useState(false);
  const score = EX6.filter((it, i) => (ord[i] ?? []).join("") === it.a).length;

  return (
    <div>
      <div className="space-y-3">
        {EX6.map((it, i) => {
          const cur = ord[i] ?? [];
          const ok = cur.join("") === it.a;
          return (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-sm text-slate-500">
                    Bấm các câu theo thứ tự đúng (đã chọn {cur.length}/
                    {it.sents.length}).
                    {!checked && cur.length > 0 && (
                      <button
                        onClick={() => setOrd({ ...ord, [i]: [] })}
                        className="ml-2 text-sky-700 underline hover:text-sky-900"
                      >
                        Chọn lại
                      </button>
                    )}
                  </p>
                  <div className="space-y-2">
                    {it.sents.map((s) => {
                      const idx = cur.indexOf(s.k);
                      const want = it.a.indexOf(s.k);
                      const cls = !checked
                        ? idx >= 0
                          ? "bg-sky-100"
                          : "bg-slate-50 hover:bg-sky-50"
                        : idx === want
                          ? "bg-emerald-100"
                          : "bg-rose-100";
                      return (
                        <button
                          key={s.k}
                          disabled={checked}
                          onClick={() =>
                            setOrd({
                              ...ord,
                              [i]:
                                idx >= 0
                                  ? cur.filter((x) => x !== s.k)
                                  : [...cur, s.k],
                            })
                          }
                          className={
                            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left font-serif text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300 " +
                            cls
                          }
                        >
                          <span className="w-5 shrink-0 font-sans text-sm text-slate-400">
                            {s.k}.
                          </span>
                          <span className="flex-1">{s.t}</span>
                          <span
                            className={
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-sans text-xs " +
                              (idx >= 0
                                ? "bg-sky-600 text-white"
                                : "bg-slate-200 text-transparent")
                            }
                          >
                            {idx >= 0 ? idx + 1 : "·"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {checked && (
                    <div className="mt-3">
                      <Verdict ok={ok} answer={it.a.split("").join(" → ")} />
                      <p className="mt-1 font-serif text-lg leading-8 text-slate-900">
                        {it.full}
                      </p>
                      <Explain py={it.py} vi={it.vi} note={it.note} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CheckBar
        checked={checked}
        onCheck={() => setChecked(true)}
        onReset={() => {
          setChecked(false);
          setOrd({});
        }}
        summary={`Đúng ${score}/${EX6.length} đoạn`}
      />
    </div>
  );
}

// ===== Bài 7 (từng câu một) =====
function FixTab({ EX7 }: { EX7: Fix[] }) {
  const n = EX7.length;
  const [order, setOrder] = useState<number[]>(EX7.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [texts, setTexts] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<Record<number, "right" | "wrong">>({});
  const [shown, setShown] = useState<Record<number, boolean>>({});

  const cur = order[pos];
  const it = EX7[cur];
  const text = texts[cur] ?? it.wrong;
  const right = Object.values(status).filter((s) => s === "right").length;
  const attempted = Object.keys(status).length;
  const showExplain = status[cur] === "right" || shown[cur];

  const check = () => {
    const ok = [it.a, ...(it.alt ?? [])].some((x) => norm(x) === norm(text));
    setStatus({ ...status, [cur]: ok ? "right" : "wrong" });
  };
  const reset = () => {
    const t = { ...texts };
    const s = { ...status };
    const h = { ...shown };
    delete t[cur];
    delete s[cur];
    delete h[cur];
    setTexts(t);
    setStatus(s);
    setShown(h);
  };
  const shuffle = () => {
    const a = [...order];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOrder(a);
    setPos(0);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-slate-700">
          Đúng <span className="font-bold text-sky-700">{right}</span>/
          {attempted}
        </p>
        <button
          onClick={shuffle}
          className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Xáo trộn câu hỏi
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {order.map((q, k) => {
          const st = status[q];
          return (
            <button
              key={q}
              onClick={() => setPos(k)}
              className={
                "h-8 w-8 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 " +
                (k === pos
                  ? "bg-sky-600 text-white"
                  : st === "right"
                    ? "bg-emerald-100 text-emerald-800"
                    : st === "wrong"
                      ? "bg-rose-100 text-rose-800"
                      : "bg-white text-slate-500 hover:bg-sky-50")
              }
            >
              {q + 1}
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="mb-3 text-sm text-slate-500">
          Câu {pos + 1}/{n}
        </p>

        <p className="mb-1 text-sm font-medium text-slate-600">Câu sai</p>
        <p className="mb-4 rounded-md bg-rose-50 px-3 py-2 font-serif text-lg text-rose-900">
          {it.wrong}
        </p>

        <p className="mb-1 text-sm font-medium text-slate-600">
          Câu của bạn (sửa trực tiếp ở đây)
        </p>
        <input
          value={text}
          onChange={(e) => {
            setTexts({ ...texts, [cur]: e.target.value });
            if (status[cur]) {
              const s = { ...status };
              delete s[cur];
              setStatus(s);
            }
          }}
          className="w-full rounded-md bg-sky-50 px-3 py-2 font-serif text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={check}
            className="rounded-md bg-sky-600 px-5 py-1.5 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
          >
            Kiểm tra
          </button>
          <button
            onClick={reset}
            className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Làm lại
          </button>
          <button
            onClick={() => setShown({ ...shown, [cur]: true })}
            className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Xem đáp án
          </button>
        </div>

        {status[cur] === "right" && (
          <p className="mt-3 font-semibold text-emerald-700">Chính xác!</p>
        )}
        {status[cur] === "wrong" && (
          <p className="mt-3 font-semibold text-rose-700">
            {norm(text) === norm(it.wrong)
              ? "Câu của bạn chưa được sửa."
              : "Chưa đúng."}{" "}
            <span className="font-normal text-slate-700">
              Thử lại hoặc bấm “Xem đáp án”.
            </span>
          </p>
        )}

        {showExplain && (
          <div className="mt-3">
            <p className="text-slate-700">
              Đáp án sách:{" "}
              <span className="font-serif text-lg font-bold text-sky-700">
                {it.a}
              </span>
            </p>
            <Explain py={it.py} vi={it.vi} note={it.note} warn={it.warn} />
          </div>
        )}
      </div>

      <div className="mt-3 flex justify-between">
        <button
          onClick={() => setPos(Math.max(0, pos - 1))}
          disabled={pos === 0}
          className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-40"
        >
          ← Câu trước
        </button>
        <button
          onClick={() => setPos(Math.min(n - 1, pos + 1))}
          disabled={pos === n - 1}
          className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-40"
        >
          Câu sau →
        </button>
      </div>
    </div>
  );
}

// ===== Bài 8 (bài mở, bấm để xem đáp án mẫu) =====
function OpenTab({ EX8A, EX8B }: { EX8A: Sit[]; EX8B: Say[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const keys = [...EX8A.map((_, i) => `a${i}`), ...EX8B.map((_, i) => `b${i}`)];
  const allOpen = keys.every((k) => open[k]);
  const toggle = (k: string) => setOpen({ ...open, [k]: !open[k] });
  const setAll = (v: boolean) =>
    setOpen(Object.fromEntries(keys.map((k) => [k, v])));

  return (
    <div>
      <p className="mb-4 text-sm text-slate-600">
        Bài mở, không có đáp án cố định. Bấm vào từng câu để xem pinyin, bản
        dịch, đáp án mẫu và giải thích.
      </p>
      <button
        onClick={() => setAll(!allOpen)}
        className="mb-5 rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        {allOpen ? "Ẩn tất cả" : "Hiện tất cả"}
      </button>

      <h3 className="mb-1 font-serif text-lg font-bold">
        1. 下列句子什么情景下说？
      </h3>
      <p className="mb-3 text-sm text-slate-600">
        Câu sau được nói trong tình huống nào?
      </p>
      <div className="space-y-3">
        {EX8A.map((it, i) => {
          const k = `a${i}`;
          return (
            <div
              key={k}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <button
                    onClick={() => toggle(k)}
                    className="w-full rounded text-left font-serif text-lg text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    {it.s}
                  </button>
                  {open[k] && (
                    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-[15px] leading-7">
                      <p className="text-slate-500">{it.py}</p>
                      <p className="text-slate-700">{it.vi}</p>
                      <p className="rounded-md bg-sky-50 p-3 text-slate-800">
                        <span className="font-semibold">
                          Đáp án mẫu (tình huống):{" "}
                        </span>
                        {it.hint}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="mb-1 mt-8 font-serif text-lg font-bold">
        2. 下列情景怎么说？
      </h3>
      <p className="mb-3 text-sm text-slate-600">
        Trong tình huống sau, bạn nói thế nào?
      </p>
      <div className="space-y-3">
        {EX8B.map((it, i) => {
          const k = `b${i}`;
          return (
            <div
              key={k}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <div className="flex gap-3">
                <Num n={i + 1} />
                <div className="min-w-0 flex-1">
                  <button
                    onClick={() => toggle(k)}
                    className="w-full rounded text-left font-serif text-lg text-slate-900 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    {it.q}
                    {it.word && (
                      <span className="ml-2 rounded bg-sky-50 px-2 py-0.5 text-base text-sky-800">
                        （{it.word.zh}）
                      </span>
                    )}
                  </button>
                  {open[k] && (
                    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-[15px] leading-7">
                      <p className="text-slate-500">
                        {it.qpy}{" "}
                        {it.word && (
                          <span className="text-slate-400">({it.word.py})</span>
                        )}
                      </p>
                      <p className="text-slate-700">{it.qvi}</p>
                      <div className="rounded-md bg-sky-50 p-3">
                        <p className="text-slate-800">
                          <span className="font-semibold">Đáp án mẫu: </span>
                          <span className="font-serif text-lg font-bold text-sky-800">
                            {it.sample}
                          </span>
                        </p>
                        <p className="text-slate-500">{it.py}</p>
                        <p className="text-slate-700">{it.vi}</p>
                      </div>
                      <p className="rounded-md bg-slate-50 p-3 text-slate-800">
                        <span className="font-semibold">Giải thích: </span>
                        {it.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ===== Trang chính =====
const KEYS = ["3", "4", "5", "6", "7", "8"];

export default function Lesson2Quiz() {
  const [tab, setTab] = useState("3");

  const render = (k: string) => {
    if (k === "3") return <FillTab tab={TAB3} />;
    if (k === "4") return <FillInTab EX5={EX4} />;
    if (k === "5") return <FillInTab EX5={EX5} />;
    if (k === "6") return <ParaTab EX6={EX6} />;
    if (k === "7") return <FixTab EX7={EX7} />;
    return <OpenTab EX8A={EX8A} EX8B={EX8B} />;
  };

  return (
    <div className="mx-auto">
      <p className="mb-2 text-sm text-slate-500">
        汉语教程（第3版）第三册 上 · 第二课 一封信
      </p>

      <div className="mb-4 flex flex-wrap gap-2 bg-stone-50 py-3">
        {KEYS.map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={
              "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
              (k === tab
                ? "bg-stone-800 text-white hover:bg-stone-700"
                : "border border-stone-300 text-stone-600 hover:bg-stone-100")
            }
          >
            Bài {k}
          </button>
        ))}
      </div>

      <h2 className="font-serif text-xl font-bold">{TITLES[tab].t}</h2>
      <p className="mb-4 text-slate-600">{TITLES[tab].s}</p>

      {KEYS.map((k) => (
        <div key={k} className={k === tab ? "" : "hidden"}>
          {render(k)}
        </div>
      ))}
    </div>
  );
}
