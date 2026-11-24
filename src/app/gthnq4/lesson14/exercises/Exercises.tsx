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
  img?: number;
  noHint?: boolean;
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

// ===== Dữ liệu bài 3 – 8 (第十四课 钥匙忘拔下来了) =====
const TAB3: Tab = {
  id: "3",
  label: "3",
  sub: "Chọn từ thích hợp điền vào chỗ trống",
  options: [
    {
      zh: "除了",
      py: "chúle",
    },
    {
      zh: "于是",
      py: "yúshì",
    },
    {
      zh: "只好",
      py: "zhǐhǎo",
    },
    {
      zh: "各",
      py: "gè",
    },
    {
      zh: "兴奋",
      py: "xīngfèn",
    },
    {
      zh: "哭笑不得",
      py: "kūxiàobùdé",
    },
    {
      zh: "回",
      py: "huí",
    },
    {
      zh: "另",
      py: "lìng",
    },
    {
      zh: "寒假",
      py: "hánjià",
    },
  ],
  items: [
    {
      q: "收到他给我发来的邮件，我非常{}。",
      a: ["兴奋"],
      py: "Shōudào tā gěi wǒ fā lái de yóujiàn, wǒ fēicháng xīngfèn.",
      vi: "Nhận được thư điện tử anh ấy gửi cho tôi, tôi vô cùng phấn khởi.",
      note: "兴奋 = phấn khởi, hào hứng (tính từ chỉ tâm trạng). 非常 + tính từ tâm lý.",
    },
    {
      q: "我想买一些书带{}国去。",
      a: ["回"],
      py: "Wǒ xiǎng mǎi yìxiē shū dài huí guó qù.",
      vi: "Tôi muốn mua một ít sách mang về nước.",
      note: "带回国去: V + 回 + nơi chốn + 去. Tân ngữ nơi chốn (国) chen giữa 回 và 去.",
    },
    {
      q: "{}买书，我还想买一些小礼品。",
      a: ["除了"],
      py: "Chúle mǎi shū, wǒ hái xiǎng mǎi yìxiē xiǎo lǐpǐn.",
      vi: "Ngoài mua sách ra, tôi còn muốn mua một ít quà nhỏ.",
      note: "除了…还…: ngoài… ra còn… (bổ sung thêm). Vế sau có 还 là dấu hiệu nhận biết.",
    },
    {
      q: "他想让我跟他一起去书店，{}我就跟他去了。",
      a: ["于是"],
      py: "Tā xiǎng ràng wǒ gēn tā yìqǐ qù shūdiàn, yúshì wǒ jiù gēn tā qù le.",
      vi: "Anh ấy muốn tôi cùng đi hiệu sách, thế là tôi đi với anh ấy.",
      note: "于是 = thế là, vì vậy. Nối hai sự việc nối tiếp nhau, vế sau là hành động xảy ra do vế trước. Đứng đầu vế sau.",
    },
    {
      q: "我们从一个商场出来，又去了{}一个商场。",
      a: ["另"],
      py: "Wǒmen cóng yí ge shāngchǎng chūlái, yòu qù le lìng yí ge shāngchǎng.",
      vi: "Chúng tôi từ một trung tâm thương mại đi ra, lại đến một trung tâm khác.",
      note: "另 + 一 + lượng từ + danh từ = một cái khác (ngoài cái đã nhắc).",
    },
    {
      q: "很快就要放{}了。",
      a: ["寒假"],
      py: "Hěn kuài jiù yào fàng hánjià le.",
      vi: "Sắp được nghỉ đông rồi.",
      note: "放寒假 = nghỉ đông. 放假 là động từ ly hợp, chèn 寒/暑 vào giữa: 放寒假, 放暑假. 就要…了: sắp…",
    },
    {
      q: "因为没得到奖学金（jiǎngxuéjīn: học bổng），我{}回国。",
      a: ["只好"],
      py: "Yīnwèi méi dédào jiǎngxuéjīn, wǒ zhǐhǎo huí guó.",
      vi: "Vì không nhận được học bổng nên tôi đành phải về nước.",
      note: "只好 = đành phải, không còn cách nào khác. Đứng trước động từ, vế trước thường nêu nguyên nhân.",
    },
    {
      q: "语言大学的学生主要是从世界{}国来的留学生。",
      a: ["各"],
      py: "Yǔyán Dàxué de xuésheng zhǔyào shì cóng shìjiè gè guó lái de liúxuéshēng.",
      vi: "Sinh viên Đại học Ngôn ngữ chủ yếu là lưu học sinh đến từ các nước trên thế giới.",
      note: "各 + danh từ/lượng từ = mỗi, các: 各国 (các nước), 各种, 各位.",
    },
    {
      q: "这种事真让人{}。",
      a: ["哭笑不得"],
      py: "Zhè zhǒng shì zhēn ràng rén kūxiàobùdé.",
      vi: "Chuyện thế này thật khiến người ta dở khóc dở cười.",
      note: "哭笑不得 là thành ngữ: dở khóc dở cười. Thường dùng: 让人哭笑不得.",
    },
  ],
};

const TAB4A: Tab = {
  id: "4A",
  label: "4A",
  sub: "Chọn tổ hợp từ điền vào chỗ trống (phần A)",
  options: [
    {
      zh: "从楼下",
      py: "cóng lóuxià",
    },
    {
      zh: "从书架上",
      py: "cóng shūjià shang",
    },
    {
      zh: "从书包里",
      py: "cóng shūbāo li",
    },
    {
      zh: "从中国",
      py: "cóng Zhōngguó",
    },
    {
      zh: "从图书馆",
      py: "cóng túshūguǎn",
    },
    {
      zh: "从国外",
      py: "cóng guówài",
    },
    {
      zh: "从书店",
      py: "cóng shūdiàn",
    },
    {
      zh: "从商场",
      py: "cóng shāngchǎng",
    },
    {
      zh: "从外边",
      py: "cóng wàibian",
    },
    {
      zh: "从香港",
      py: "cóng Xiānggǎng",
    },
  ],
  items: [
    {
      q: "{}买回一本词典来。",
      a: ["从书店"],
      py: "Cóng shūdiàn mǎi huí yì běn cídiǎn lái.",
      vi: "Mua về một cuốn từ điển từ hiệu sách.",
      note: "从 + nơi xuất phát + V + 回 + … + 来. 买回…来 = mua mang về; người nói ở nơi đích nên dùng 来. Từ điển mua ở hiệu sách.",
    },
    {
      q: "{}借回一些中文小说儿来。",
      a: ["从图书馆"],
      py: "Cóng túshūguǎn jiè huí yìxiē Zhōngwén xiǎoshuōr lái.",
      vi: "Mượn về một số tiểu thuyết tiếng Trung từ thư viện.",
      note: "借 (mượn) sách thì nơi mượn là 图书馆.",
    },
    {
      q: "{}拿出来一本中国历史书。",
      a: ["从书包里"],
      py: "Cóng shūbāo li ná chūlái yì běn Zhōngguó lìshǐ shū.",
      vi: "Lấy từ trong cặp ra một cuốn sách lịch sử Trung Quốc.",
      note: "拿出来: lấy từ bên trong ra ngoài, nơi xuất phát là nơi chứa đồ (书包里).",
    },
    {
      q: "{}拿下来一本杂志。",
      a: ["从书架上"],
      py: "Cóng shūjià shang ná xiàlái yì běn zázhì.",
      vi: "Lấy từ trên giá sách xuống một cuốn tạp chí.",
      note: "拿下来: từ chỗ cao xuống thấp. 书架上 là chỗ cao, đi với 下来.",
    },
    {
      q: "{}买回一些玩具。",
      a: ["从商场"],
      py: "Cóng shāngchǎng mǎi huí yìxiē wánjù.",
      vi: "Mua về một ít đồ chơi từ trung tâm thương mại.",
      note: "买 (mua) → nơi mua là 商场. Cấu trúc giống câu (1).",
    },
    {
      q: "{}给你带回一点儿礼物去。",
      a: ["从香港"],
      py: "Cóng Xiānggǎng gěi nǐ dài huí yìdiǎnr lǐwù qù.",
      vi: "Từ Hồng Kông mang về cho bạn một chút quà.",
      note: "回…去: người nói đang ở nơi xuất phát (Hồng Kông), món quà được mang về nơi khác nên dùng 去 (rời xa người nói).",
    },
    {
      q: "{}寄回一本词典来。",
      a: ["从中国"],
      py: "Cóng Zhōngguó jì huí yì běn cídiǎn lái.",
      vi: "Gửi về một cuốn từ điển từ Trung Quốc.",
      note: "寄回…来: người nói ở nơi nhận (nước mình) nên dùng 来; 从中国 là nơi gửi.",
    },
    {
      q: "{}提进来一个箱子。",
      a: ["从外边"],
      py: "Cóng wàibian tí jìnlái yí ge xiāngzi.",
      vi: "Từ bên ngoài xách vào một cái vali.",
      note: "提进来: từ ngoài vào trong, người nói ở bên trong. Nơi xuất phát là 外边.",
      warn: "Trong khung từ của sách ghi 从外边, còn đáp án sách ghi 从外面. Hai từ cùng nghĩa (bên ngoài), chọn 从外边 theo khung từ.",
    },
    {
      q: "{}提上来一箱子书。",
      a: ["从楼下"],
      py: "Cóng lóuxià tí shànglái yì xiāngzi shū.",
      vi: "Từ dưới lầu xách lên một thùng sách.",
      note: "提上来: từ dưới lên, người nói ở trên. Nơi xuất phát là 楼下.",
    },
    {
      q: "{}给我寄来一件生日礼物。",
      a: ["从国外"],
      py: "Cóng guówài gěi wǒ jì lái yí jiàn shēngrì lǐwù.",
      vi: "Từ nước ngoài gửi cho tôi một món quà sinh nhật.",
      note: "寄来: gửi đến chỗ người nói. 从国外 là nơi gửi đi.",
    },
  ],
};

const TAB4B: Tab = {
  id: "4B",
  label: "4B",
  sub: "Chọn tổ hợp từ điền vào chỗ trống (phần B)",
  options: [
    {
      zh: "拿起来",
      py: "ná qǐlái",
    },
    {
      zh: "抽出来",
      py: "chōu chūlái",
    },
    {
      zh: "拿下来",
      py: "ná xiàlái",
    },
    {
      zh: "找出来",
      py: "zhǎo chūlái",
    },
    {
      zh: "拿出来",
      py: "ná chūlái",
    },
    {
      zh: "取出来",
      py: "qǔ chūlái",
    },
    {
      zh: "捡起来",
      py: "jiǎn qǐlái",
    },
    {
      zh: "买回来",
      py: "mǎi huílái",
    },
    {
      zh: "送上来",
      py: "sòng shànglái",
    },
    {
      zh: "取回来",
      py: "qǔ huílái",
    },
  ],
  items: [
    {
      q: "他从手提包儿里{}一本护照。",
      a: ["找出来"],
      py: "Tā cóng shǒutíbāor li zhǎo chūlái yì běn hùzhào.",
      vi: "Anh ấy tìm ra một cuốn hộ chiếu từ trong túi xách.",
      note: "找出来 = tìm ra (tìm trong đồ đựng rồi lấy ra). 拿出来 cũng nói được, nên bài quiz chấp nhận cả hai.",
      alt: [["找出来", "拿出来"]],
    },
    {
      q: "玛丽从银行{}五百美元。",
      a: ["取出来"],
      py: "Mǎlì cóng yínháng qǔ chūlái wǔbǎi měiyuán.",
      vi: "Mary rút từ ngân hàng ra năm trăm đô la.",
      note: "取 = rút, lấy (tiền, đồ gửi). 取出来 = rút ra.",
    },
    {
      q: "妈妈寄的礼物你{}了吗？",
      a: ["取回来"],
      py: "Māma jì de lǐwù nǐ qǔ huílái le ma?",
      vi: "Quà mẹ gửi bạn đã đi lấy về chưa?",
      note: "取回来 = lấy về (từ bưu điện). Tân ngữ làm chủ đề đứng trước, 了吗 hỏi đã hoàn thành chưa.",
    },
    {
      q: "麦克从商场{}一辆自行车。",
      a: ["买回来"],
      py: "Màikè cóng shāngchǎng mǎi huílái yí liàng zìxíngchē.",
      vi: "Mike mua từ trung tâm thương mại về một chiếc xe đạp.",
      note: "买回来 = mua mang về.",
    },
    {
      q: "服务员从楼下{}一束（shù: bó）花儿。",
      a: ["送上来"],
      py: "Fúwùyuán cóng lóuxià sòng shànglái yí shù huār.",
      vi: "Nhân viên phục vụ từ dưới lầu mang lên một bó hoa.",
      note: "送上来: từ dưới đưa lên, người nói ở trên. 一束 = một bó.",
    },
    {
      q: "她从箱子里{}一件羽绒服。",
      a: ["拿出来"],
      py: "Tā cóng xiāngzi li ná chūlái yí jiàn yǔróngfú.",
      vi: "Cô ấy lấy từ trong vali ra một chiếc áo lông vũ.",
      note: "拿出来 = lấy ra (từ bên trong ra ngoài). 找出来 cũng nói được, nên chấp nhận cả hai.",
      alt: [["拿出来", "找出来"]],
    },
    {
      q: "他从楼上{}一个纸箱子。",
      a: ["拿下来"],
      py: "Tā cóng lóushàng ná xiàlái yí ge zhǐ xiāngzi.",
      vi: "Anh ấy từ trên lầu mang xuống một cái thùng giấy.",
      note: "拿下来: từ trên xuống dưới.",
    },
    {
      q: "我从地上{}一个钱包儿（qiánbāor: ví tiền）。",
      a: ["捡起来"],
      py: "Wǒ cóng dìshang jiǎn qǐlái yí ge qiánbāor.",
      vi: "Tôi nhặt từ dưới đất lên một cái ví.",
      note: "捡起来 = nhặt lên. 起来 chỉ hướng từ thấp lên cao.",
    },
    {
      q: "他从桌子上{}一副（fù: cặp, đôi）眼镜儿。",
      a: ["拿起来"],
      py: "Tā cóng zhuōzi shang ná qǐlái yí fù yǎnjìngr.",
      vi: "Anh ấy cầm từ trên bàn lên một cặp kính.",
      note: "拿起来 = cầm lên. 副 là lượng từ cho đồ có đôi/cặp: 一副眼镜.",
    },
    {
      q: "张东从书架上{}一本书。",
      a: ["抽出来"],
      py: "Zhāng Dōng cóng shūjià shang chōu chūlái yì běn shū.",
      vi: "Trương Đông rút từ trên giá sách ra một cuốn sách.",
      note: "抽出来 = rút ra (vật xếp sát nhau như sách trên giá).",
    },
  ],
};

const TAB5: Tab = {
  id: "5",
  label: "5",
  sub: "Điền bổ ngữ xu hướng kép thích hợp. Nhớ: 来 = hướng về phía người nói, 去 = rời xa người nói.",
  options: [
    {
      zh: "上来",
      py: "shànglái",
    },
    {
      zh: "下来",
      py: "xiàlái",
    },
    {
      zh: "上去",
      py: "shàngqù",
    },
    {
      zh: "下去",
      py: "xiàqù",
    },
    {
      zh: "进来",
      py: "jìnlái",
    },
    {
      zh: "进去",
      py: "jìnqù",
    },
    {
      zh: "出来",
      py: "chūlái",
    },
    {
      zh: "出去",
      py: "chūqù",
    },
    {
      zh: "回来",
      py: "huílái",
    },
    {
      zh: "回去",
      py: "huíqù",
    },
    {
      zh: "过来",
      py: "guòlái",
    },
    {
      zh: "过去",
      py: "guòqù",
    },
    {
      zh: "起来",
      py: "qǐlái",
    },
  ],
  items: [
    {
      q: "我们爬了半个多小时，才爬{}，往山下一看，风景漂亮极了。",
      a: ["上来"],
      py: "Wǒmen pá le bàn ge duō xiǎoshí, cái pá shànglái, wǎng shān xià yí kàn, fēngjǐng piàoliang jí le.",
      vi: "Chúng tôi leo hơn nửa tiếng mới leo lên đến nơi, nhìn xuống chân núi, phong cảnh đẹp vô cùng.",
      note: "Người nói đã ở trên đỉnh núi, nên dùng 上来 (lên đến chỗ người nói).",
    },
    {
      q: "小心点儿，别掉{}。",
      a: ["下来"],
      py: "Xiǎoxīn diǎnr, bié diào xiàlái.",
      vi: "Cẩn thận nhé, đừng rơi xuống.",
      note: "掉下来: rơi từ trên xuống, hướng về phía người nói đứng ở dưới.",
    },
    {
      q: "她不小心，从楼梯上摔{}，腿摔坏了。",
      a: ["下来"],
      py: "Tā bù xiǎoxīn, cóng lóutī shang shuāi xiàlái, tuǐ shuāihuài le.",
      vi: "Cô ấy không cẩn thận, ngã từ cầu thang xuống, bị gãy chân.",
      note: "摔下来: ngã từ chỗ cao xuống thấp, 从楼梯上 chỉ nơi xuất phát ở trên cao.",
    },
    {
      q: "太累了，我们找个地方，坐{}休息一会儿吧。",
      a: ["下来"],
      py: "Tài lèi le, wǒmen zhǎo ge dìfang, zuò xiàlái xiūxi yíhuìr ba.",
      vi: "Mệt quá, chúng ta tìm chỗ ngồi xuống nghỉ một lát nhé.",
      note: "坐下来 = ngồi xuống. 下来 mang nghĩa mở rộng: động tác chuyển từ trạng thái hoạt động sang yên tĩnh.",
    },
    {
      q: "我看见前边走{}一个人，就走{}问她去图书城怎么走。",
      a: ["过来", "上去"],
      py: "Wǒ kànjiàn qiánbian zǒu guòlái yí ge rén, jiù zǒu shàngqù wèn tā qù túshūchéng zěnme zǒu.",
      vi: "Tôi thấy phía trước có một người đi tới, liền bước lên hỏi cô ấy đường đến Thư thành.",
      note: "走过来: người kia đi về phía người nói. 走上去: người nói tiến lại gần người kia (rời xa vị trí của mình).",
    },
    {
      q: "你别下来了，我给你拿{}。",
      a: ["上去"],
      py: "Nǐ bié xiàlái le, wǒ gěi nǐ ná shàngqù.",
      vi: "Bạn đừng xuống nữa, tôi mang lên cho bạn.",
      note: "Người nói ở dưới, vật được mang lên chỗ người nghe (rời xa người nói) nên dùng 上去.",
    },
    {
      q: "她从口袋里拿{}一个钱包儿，又从钱包儿里拿{}三千块钱，放在我手里，说：“快给你妈妈寄{}吧，看病要紧（yàojǐn: quan trọng）。”",
      a: ["出来", "出来", "回去"],
      py: "Tā cóng kǒudài li ná chūlái yí ge qiánbāor, yòu cóng qiánbāor li ná chūlái sānqiān kuài qián, fàng zài wǒ shǒu li, shuō: “Kuài gěi nǐ māma jì huíqù ba, kànbìng yàojǐn.”",
      vi: "Cô ấy lấy trong túi ra một cái ví, lại lấy trong ví ra ba nghìn tệ, đặt vào tay tôi và nói: “Mau gửi về cho mẹ bạn đi, chữa bệnh là quan trọng.”",
      note: "拿出来: lấy từ bên trong ra ngoài. 寄回去: gửi về nhà, rời xa chỗ người nói.",
    },
    {
      q: "“救命（jiù mìng: cứu）啊！有人掉{}水里{}了！”听见喊（hǎn: hét）声，他很快脱（tuō: cởi）下上衣，跑了{}。人们看见他跳{}水{}，向那个孩子游了{}。",
      a: ["下", "去", "过去", "下", "去", "过去"],
      py: "“Jiù mìng a! Yǒu rén diào xià shuǐ li qù le!” Tīngjiàn hǎn shēng, tā hěn kuài tuō xià shàngyī, pǎo le guòqù. Rénmen kànjiàn tā tiào xià shuǐ qù, xiàng nàge háizi yóu le guòqù.",
      vi: "“Cứu với! Có người rơi xuống nước rồi!” Nghe tiếng kêu, anh ấy nhanh chóng cởi áo khoác, chạy qua đó. Mọi người thấy anh ấy nhảy xuống nước, bơi về phía đứa trẻ kia.",
      note: "Khi có tân ngữ nơi chốn (水里, 水), bổ ngữ kép bị tách ra: 掉下水里去, 跳下水去. Người nói đứng trên bờ nên đều là 去 (rời xa). 跑过去, 游过去: tiến về phía người gặp nạn.",
      choices: [
        {
          zh: "下",
          py: "xià",
        },
        {
          zh: "去",
          py: "qù",
        },
        {
          zh: "过去",
          py: "guòqù",
        },
        {
          zh: "上",
          py: "shàng",
        },
        {
          zh: "来",
          py: "lái",
        },
        {
          zh: "过来",
          py: "guòlái",
        },
      ],
    },
  ],
};

const TAB6: Tab = {
  id: "6",
  label: "6",
  sub: "Chỉ ra vị trí của người nói. Ví dụ: 衣服从楼上掉下来了 → người nói ở 下边 (dưới).",
  options: [
    {
      zh: "上边",
      py: "shàngbian",
    },
    {
      zh: "下边",
      py: "xiàbian",
    },
    {
      zh: "里边",
      py: "lǐbian",
    },
    {
      zh: "外边",
      py: "wàibian",
    },
    {
      zh: "这边",
      py: "zhèbian",
    },
    {
      zh: "那边",
      py: "nàbian",
    },
  ],
  items: [
    {
      q: "你看，他跑过去了。\n说话人在：{}",
      a: ["这边"],
      py: "Nǐ kàn, tā pǎo guòqù le.",
      vi: "Bạn xem, anh ấy chạy qua bên kia rồi.",
      note: "过去: rời khỏi chỗ người nói sang phía bên kia, nên người nói ở bên này (这边).",
    },
    {
      q: "您的行李已经给您搬上来了。\n说话人在：{}",
      a: ["上边"],
      py: "Nín de xíngli yǐjīng gěi nín bān shànglái le.",
      vi: "Hành lý của ngài đã được khuân lên cho ngài rồi.",
      note: "上来: di chuyển lên đến chỗ người nói, nên người nói ở phía trên.",
    },
    {
      q: "他的车开进来了。\n说话人在：{}",
      a: ["里边"],
      py: "Tā de chē kāi jìnlái le.",
      vi: "Xe của anh ấy đã chạy vào rồi.",
      note: "进来: từ ngoài vào đến chỗ người nói, nên người nói ở bên trong.",
    },
    {
      q: "我们走上去吧。\n说话人在：{}",
      a: ["下边"],
      py: "Wǒmen zǒu shàngqù ba.",
      vi: "Chúng ta đi lên nhé.",
      note: "上去: lên chỗ cao, rời xa người nói, nên người nói ở phía dưới.",
    },
    {
      q: "书他已经提上去了。\n说话人在：{}",
      a: ["下边"],
      py: "Shū tā yǐjīng tí shàngqù le.",
      vi: "Sách anh ấy đã xách lên rồi.",
      note: "上去: đi lên, rời xa người nói, nên người nói ở phía dưới.",
    },
    {
      q: "你要的电脑我已经买回来了。\n说话人在：{}",
      a: ["里边"],
      py: "Nǐ yào de diànnǎo wǒ yǐjīng mǎi huílái le.",
      vi: "Cái máy tính bạn cần tôi đã mua về rồi.",
      note: "回来: trở về chỗ người nói. Người nói đang ở nơi đích (ở nhà, ở trong), sách chọn 里边.",
    },
    {
      q: "她们爬上山去了。\n说话人在：{}",
      a: ["下边"],
      py: "Tāmen pá shàng shān qù le.",
      vi: "Họ leo lên núi rồi.",
      note: "上…去: lên cao, rời xa người nói, nên người nói ở phía dưới (chân núi).",
    },
    {
      q: "钱我已经取回来了。\n说话人在：{}",
      a: ["里边"],
      py: "Qián wǒ yǐjīng qǔ huílái le.",
      vi: "Tiền tôi đã rút về rồi.",
      note: "回来: về đến chỗ người nói. Người nói đang ở nơi đích (trong nhà, trong phòng), sách chọn 里边.",
    },
  ],
};

const EX7: Fill[] = [
  {
    q: "{}",
    img: 0,
    noHint: true,
    word: {
      zh: "上去",
      py: "shàngqù",
    },
    a: "他爬上去了",
    py: "Tā pá shàngqù le.",
    vi: "Anh ấy leo lên rồi.",
    note: "Tranh: người đeo ba lô leo lên vách đá. Người nói ở phía dưới nhìn lên nên dùng 上去 (rời xa người nói).",
    alt: [],
  },
  {
    q: "{}",
    img: 1,
    noHint: true,
    word: {
      zh: "下来",
      py: "xiàlái",
    },
    a: "他跳下来了",
    py: "Tā tiào xiàlái le.",
    vi: "Anh ấy nhảy xuống rồi.",
    note: "Tranh: người nhảy từ bục cao xuống nước, người nói đứng ở dưới nhìn lên. Hướng về phía người nói nên dùng 下来.",
    alt: [],
  },
  {
    q: "{}",
    img: 2,
    noHint: true,
    word: {
      zh: "进来",
      py: "jìnlái",
    },
    a: "她走进来了",
    py: "Tā zǒu jìnlái le.",
    vi: "Cô ấy bước vào rồi.",
    note: "Tranh: cô gái đeo ba lô bước vào ngân hàng (银行). Người nói ở bên trong nên dùng 进来.",
    alt: [],
  },
  {
    q: "{}",
    img: 3,
    noHint: true,
    word: {
      zh: "进来",
      py: "jìnlái",
    },
    a: "他跑进来了",
    py: "Tā pǎo jìnlái le.",
    vi: "Anh ấy chạy vào rồi.",
    note: "Tranh: một người chạy từ ngoài trời mưa vào nhà. Người nói ở trong nhà nên dùng 进来.",
    alt: [],
  },
  {
    q: "{}",
    img: 4,
    noHint: true,
    word: {
      zh: "出来",
      py: "chūlái",
    },
    a: "他走出来了",
    py: "Tā zǒu chūlái le.",
    vi: "Anh ấy bước ra rồi.",
    note: "Tranh: người đàn ông bước ra khỏi bưu điện (邮局). Người nói ở bên ngoài nên dùng 出来.",
    alt: [],
  },
  {
    q: "{}",
    img: 5,
    noHint: true,
    word: {
      zh: "起来",
      py: "qǐlái",
    },
    a: "她提起来了",
    py: "Tā tí qǐlái le.",
    vi: "Cô ấy xách lên rồi.",
    note: "Tranh: cô gái cúi xuống xách chiếc túi từ dưới đất lên. 起来 chỉ hướng từ thấp lên cao.",
    alt: [],
  },
  {
    q: "{}",
    img: 6,
    noHint: true,
    word: {
      zh: "过来",
      py: "guòlái",
    },
    a: "他跑过来了",
    py: "Tā pǎo guòlái le.",
    vi: "Anh ấy chạy tới rồi.",
    note: "Tranh: chàng trai chạy qua cầu về phía cô gái (người nói). Hướng về phía người nói nên dùng 过来.",
    alt: [],
  },
  {
    q: "{}",
    img: 7,
    noHint: true,
    word: {
      zh: "过去",
      py: "guòqù",
    },
    a: "车开过去了",
    py: "Chē kāi guòqù le.",
    vi: "Xe chạy qua rồi.",
    note: "Tranh: tàu chạy qua cầu, người nói chỉ theo hướng đó. Đi qua và rời xa người nói nên dùng 过去.",
    alt: [],
  },
];

const EX8: Fix[] = [
  {
    wrong: "上课十分钟他才走进来教室。",
    a: "上课十分钟他才走进教室来。",
    py: "Shàngkè shí fēnzhōng tā cái zǒu jìn jiàoshì lái.",
    vi: "Vào học được mười phút anh ấy mới bước vào lớp.",
    note: "Khi có tân ngữ chỉ nơi chốn (教室), nó phải đứng giữa 进 và 来: V + 进 + nơi chốn + 来. Chuyển 来 ra sau 教室.",
  },
  {
    wrong: "我看见她走出去图书馆了。",
    a: "我看见她走出图书馆去了。",
    py: "Wǒ kànjiàn tā zǒu chū túshūguǎn qù le.",
    vi: "Tôi thấy cô ấy đi ra khỏi thư viện rồi.",
    note: "Cùng quy tắc: V + 出 + nơi chốn + 去. Chuyển 去 ra sau 图书馆.",
  },
  {
    wrong: "孩子看见我，就向我跑过去。",
    a: "孩子看见我，就向我跑过来。",
    py: "Háizi kànjiàn wǒ, jiù xiàng wǒ pǎo guòlái.",
    vi: "Đứa trẻ nhìn thấy tôi liền chạy về phía tôi.",
    note: "向我 = hướng về người nói, tức tiến lại gần người nói nên phải dùng 来, không dùng 去.",
  },
  {
    wrong: "他从箱子里拿出去一件羽绒服。",
    a: "他从箱子里拿出来一件羽绒服。",
    py: "Tā cóng xiāngzi li ná chūlái yí jiàn yǔróngfú.",
    vi: "Anh ấy lấy từ trong vali ra một chiếc áo lông vũ.",
    note: "Lấy đồ từ trong vali ra, hướng về phía người nói quan sát nên dùng 出来. Đổi 去 thành 来.",
  },
  {
    wrong: "我们的飞机马上就飞上去天了。",
    a: "我们的飞机马上就飞上天去了。",
    py: "Wǒmen de fēijī mǎshàng jiù fēi shàng tiān qù le.",
    vi: "Máy bay của chúng ta sắp bay lên trời rồi.",
    note: "天 là tân ngữ chỉ nơi chốn nên đứng giữa 上 và 去: 飞上天去. Chuyển 去 ra sau 天.",
  },
  {
    wrong: "妈妈病好了以后，我就送她回去家了。",
    a: "妈妈病好了以后，我就送她回家去了。",
    py: "Māma bìng hǎo le yǐhòu, wǒ jiù sòng tā huí jiā qù le.",
    vi: "Sau khi mẹ khỏi bệnh, tôi liền đưa mẹ về nhà.",
    note: "家 là tân ngữ chỉ nơi chốn, đứng giữa 回 và 去: 回家去. Chuyển 去 ra sau 家.",
  },
];

const norm = (s: string) =>
  s.replace(/[（(][^）)]*[）)]/g, "").replace(/[^\p{L}\p{N}]/gu, "");

const TITLES: Record<string, { t: string; s: string }> = {
  "3": { t: "3. 选词填空", s: "Chọn từ thích hợp điền vào chỗ trống" },
  "4A": {
    t: "4. 选择下列词组填空 · A",
    s: "Chọn tổ hợp từ điền vào chỗ trống",
  },
  "4B": {
    t: "4. 选择下列词组填空 · B",
    s: "Chọn tổ hợp từ điền vào chỗ trống",
  },
  "5": {
    t: "5. 在空格里填入适当的复合趋向补语",
    s: "Điền bổ ngữ xu hướng kép thích hợp. Nhớ: 来 = hướng về phía người nói, 去 = rời xa người nói.",
  },
  "6": {
    t: "6. 指出说话人在哪儿",
    s: "Chỉ ra vị trí của người nói. Ví dụ: 衣服从楼上掉下来了 → người nói ở 下边 (dưới).",
  },
  "7": {
    t: "7. 看图说话",
    s: "Nhìn tranh và gõ một câu mô tả (động từ + bổ ngữ xu hướng + 了)",
  },
  "8": { t: "8. 改错句", s: "Sửa câu sai" },
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
          className="rounded-md bg-sky-600 px-6 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
        >
          Kiểm tra
        </button>
      ) : (
        <button
          onClick={onReset}
          className="rounded-md border border-sky-600 px-6 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
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
    <span className="w-7 shrink-0 pt-3 text-right text-sm font-semibold text-slate-400">
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
                              "min-w-18 mx-1 cursor-pointer appearance-none rounded px-2 py-0.5 text-center text-base focus:outline-none " +
                              (!checked
                                ? "bg-blue-50 text-slate-900 hover:bg-stone-100"
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
                  {it.img !== undefined && (
                    <img
                      src={IMGS[it.img]}
                      alt={"Tranh " + (i + 1)}
                      className="mb-2 max-h-48 rounded-md"
                    />
                  )}
                  {!it.noHint && (
                    <p className="mb-1 text-sm text-slate-500">
                      Từ cần dùng:{" "}
                      <span className="rounded bg-sky-50 px-2 py-0.5 font-serif text-base text-sky-800">
                        {it.word.zh}
                      </span>{" "}
                      {it.word.py}
                    </p>
                  )}
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
                        <span className="font-serif text-lg text-slate-900">
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

// ===== Trang chính =====
const KEYS = ["3", "4A", "4B", "5", "6", "7", "8"];

export default function Lesson1Quiz() {
  const [tab, setTab] = useState("3");

  const render = (k: string) => {
    if (k === "3") return <FillTab tab={TAB3} />;
    if (k === "4A") return <FillTab tab={TAB4A} />;
    if (k === "4B") return <FillTab tab={TAB4B} />;
    if (k === "5") return <FillTab tab={TAB5} />;
    if (k === "6") return <FillTab tab={TAB6} />;
    if (k === "7") return <FillInTab EX5={EX7} />;
    return <FixTab EX7={EX8} />;
  };

  return (
    <div className="mx-auto">
      <p className="mb-2 text-sm text-slate-500">
        汉语教程（第3版）第二册 下 · 第十四课 钥匙忘拔下来了
      </p>
      <div className="mb-2 flex flex-wrap gap-2 bg-stone-50 py-3">
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
      <p className="mb-2 text-slate-600">{TITLES[tab].s}</p>

      {KEYS.map((k) => (
        <div key={k} className={k === tab ? "" : "hidden"}>
          {render(k)}
        </div>
      ))}
    </div>
  );
}

// ===== Tranh bài 7 =====
// Đặt 8 file tranh-1.jpg ... tranh-8.jpg vào thư mục public/lesson14/ của dự án.
// Nếu để ảnh chỗ khác, chỉ cần đổi IMG_DIR (hoặc đổi sang import từng ảnh).
const IMG_DIR = "/images/gthnq4-lesson14";
const IMGS: string[] = Array.from(
  { length: 8 },
  (_, i) => `${IMG_DIR}/tranh-${i + 1}.jpg`,
);
