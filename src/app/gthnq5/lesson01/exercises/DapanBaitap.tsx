"use client";

import { useState } from "react";

// ===== Kiểu dữ liệu =====
type Item = {
  q: string; // đề bài; "{}" = chỗ trống
  a?: string[]; // đáp án (theo thứ tự chỗ trống / chữ cái)
  full?: string; // câu hoàn chỉnh (khi đề không có "{}")
  py: string; // pinyin câu hoàn chỉnh
  vi: string; // dịch tiếng Việt
  note: string; // giải thích
  warn?: string; // lưu ý riêng về đáp án sách
};
type Bank = { label: string; words: { zh: string; py: string }[] };
type Section = {
  id: string;
  title: string;
  sub: string;
  banks?: Bank[];
  intro?: string;
  items: Item[];
};

// ===== Dữ liệu =====
const SECTIONS: Section[] = [
  {
    id: "s3a",
    title: "3. 选词填空 · A",
    sub: "Chọn từ điền vào chỗ trống",
    banks: [
      {
        label: "Từ cho sẵn",
        words: [
          { zh: "恋恋不舍", py: "liànliànbùshě" },
          { zh: "如果", py: "rúguǒ" },
          { zh: "只好", py: "zhǐhǎo" },
          { zh: "果然", py: "guǒrán" },
          { zh: "将来", py: "jiānglái" },
          { zh: "终于", py: "zhōngyú" },
          { zh: "想念", py: "xiǎngniàn" },
          { zh: "联系", py: "liánxì" },
          { zh: "改变", py: "gǎibiàn" },
          { zh: "嘱咐", py: "zhǔfù" },
        ],
      },
    ],
    items: [
      {
        q: "我早就想能有机会到长城去看看，今天这个愿望{}实现了。",
        a: ["终于"],
        py: "Wǒ zǎo jiù xiǎng néng yǒu jīhuì dào Chángchéng qù kànkan, jīntiān zhège yuànwàng zhōngyú shíxiàn le.",
        vi: "Từ lâu tôi đã muốn có cơ hội đến Trường Thành xem thử, hôm nay nguyện vọng này cuối cùng cũng thành hiện thực.",
        note: "终于: sau một quá trình chờ đợi hoặc nỗ lực, điều mong muốn cuối cùng cũng xảy ra. Thường đứng trước động từ và đi với 了.",
      },
      {
        q: "大学毕业以后，我和她没有{}过。",
        a: ["联系"],
        py: "Dàxué bìyè yǐhòu, wǒ hé tā méiyǒu liánxì guo.",
        vi: "Sau khi tốt nghiệp đại học, tôi và cô ấy chưa từng liên lạc với nhau.",
        note: "联系 là động từ (liên lạc). 没有…过: chưa từng làm việc gì. Chỉ có 联系 hợp nghĩa trong các từ cho sẵn.",
      },
      {
        q: "{}她知道了这件事，一定会不高兴。",
        a: ["如果"],
        py: "Rúguǒ tā zhīdào le zhè jiàn shì, yídìng huì bù gāoxìng.",
        vi: "Nếu cô ấy biết chuyện này, chắc chắn sẽ không vui.",
        note: "如果 mở đầu mệnh đề giả thiết (nếu…), vế sau thường là 一定会 / 就 / 多半 …",
      },
      {
        q: "天气预报说今天有雨，你看，{}下起来了。",
        a: ["果然"],
        py: "Tiānqì yùbào shuō jīntiān yǒu yǔ, nǐ kàn, guǒrán xià qǐlái le.",
        vi: "Dự báo thời tiết nói hôm nay có mưa, bạn xem, quả nhiên mưa rồi.",
        note: "果然: sự việc xảy ra đúng như dự đoán, đúng như lời đã nói. Khác 终于 (nhấn mạnh việc mong chờ rốt cuộc đã xảy ra).",
      },
      {
        q: "离开家以后，才知道我是多么{}父母。",
        a: ["想念"],
        py: "Líkāi jiā yǐhòu, cái zhīdào wǒ shì duōme xiǎngniàn fùmǔ.",
        vi: "Rời nhà rồi mới biết mình nhớ bố mẹ biết bao.",
        note: "想念 + người/nơi chốn (nhớ nhung). 多么 + động từ tâm lý: biểu thị mức độ cao.",
      },
      {
        q: "妈妈总是{}我要注意安全。",
        a: ["嘱咐"],
        py: "Māma zǒngshì zhǔfù wǒ yào zhùyì ānquán.",
        vi: "Mẹ lúc nào cũng dặn dò tôi phải chú ý an toàn.",
        note: "嘱咐 + người + nội dung dặn (嘱咐我要…). Người dặn thường là bề trên, người lớn tuổi hơn.",
      },
      {
        q: "我知道，如果把这件事告诉父母的话，他们多半不会同意，所以{}瞒着他们。",
        a: ["只好"],
        py: "Wǒ zhīdào, rúguǒ bǎ zhè jiàn shì gàosu fùmǔ de huà, tāmen duōbàn bú huì tóngyì, suǒyǐ zhǐhǎo mánzhe tāmen.",
        vi: "Tôi biết nếu nói chuyện này với bố mẹ thì họ nhiều khả năng sẽ không đồng ý, nên đành giấu họ.",
        note: "只好 = không còn cách nào khác, buộc phải chọn cách này. Đứng trước động từ. Có 所以 phía trước thể hiện rõ quan hệ nguyên nhân – kết quả.",
      },
      {
        q: "刚到中国的时候，有好多地方不习惯，但是现在要离开了，还真有点儿{}。",
        a: ["恋恋不舍"],
        py: "Gāng dào Zhōngguó de shíhou, yǒu hǎoduō dìfang bù xíguàn, dànshì xiànzài yào líkāi le, hái zhēn yǒu diǎnr liànliànbùshě.",
        vi: "Lúc mới đến Trung Quốc có nhiều chỗ không quen, nhưng giờ sắp đi rồi lại thật sự hơi lưu luyến, không nỡ rời.",
        note: "恋恋不舍 là thành ngữ, chỉ sự lưu luyến không muốn rời xa. 有点儿 + trạng thái tâm lý.",
      },
      {
        q: "A：你{}打算做什么？\nB：我觉得我的性格当老师比较好。",
        a: ["将来"],
        py: "A: Nǐ jiānglái dǎsuàn zuò shénme? B: Wǒ juéde wǒ de xìnggé dāng lǎoshī bǐjiào hǎo.",
        vi: "A: Sau này bạn dự định làm gì? B: Tôi thấy tính cách của tôi làm giáo viên thì khá hợp.",
        note: "将来 (tương lai, sau này) là từ chỉ thời gian, đặt trước động từ, thường sau chủ ngữ: 你将来打算…",
      },
      {
        q: "世界上的一切事情都在变化中，你不觉得人的性格也会{}吗？",
        a: ["改变"],
        py: "Shìjiè shang de yíqiè shìqing dōu zài biànhuà zhōng, nǐ bù juéde rén de xìnggé yě huì gǎibiàn ma?",
        vi: "Mọi việc trên đời đều đang thay đổi, bạn không thấy tính cách con người cũng sẽ thay đổi sao?",
        note: "改变 là động từ (thay đổi, đổi khác đi), có thể dùng không có tân ngữ. Đây là từ cuối còn lại trong danh sách.",
      },
    ],
  },
  {
    id: "s3b",
    title: "3. 选词填空 · B",
    sub: "Chọn từ điền vào chỗ trống (hư từ, bổ ngữ, giới từ)",
    banks: [
      {
        label: "Từ cho sẵn",
        words: [
          { zh: "着", py: "zhe" },
          { zh: "了", py: "le" },
          { zh: "的", py: "de" },
          { zh: "到", py: "dào" },
          { zh: "给", py: "gěi" },
          { zh: "把", py: "bǎ" },
          { zh: "好", py: "hǎo" },
          { zh: "地", py: "de" },
          { zh: "下", py: "xià" },
        ],
      },
    ],
    items: [
      {
        q: "我收{}了她从国外寄来的礼物。",
        a: ["到"],
        py: "Wǒ shōudào le tā cóng guówài jì lái de lǐwù.",
        vi: "Tôi đã nhận được món quà cô ấy gửi từ nước ngoài về.",
        note: "收到 = nhận được. 到 làm bổ ngữ kết quả, chỉ hành động đạt được kết quả. 了 đứng sau 收到.",
      },
      {
        q: "下班以后，她就忙{}买菜、做饭。",
        a: ["着"],
        py: "Xiàbān yǐhòu, tā jiù mángzhe mǎi cài, zuò fàn.",
        vi: "Tan làm xong, cô ấy bận rộn đi mua rau, nấu cơm.",
        note: "忙着 + động từ: đang bận làm việc gì đó. 着 chỉ trạng thái đang tiếp diễn.",
      },
      {
        q: "我把一切手续办{}以后，才告诉她我要出国，她听了以后有点儿不大高兴。",
        a: ["好"],
        py: "Wǒ bǎ yíqiè shǒuxù bàn hǎo yǐhòu, cái gàosu tā wǒ yào chūguó, tā tīng le yǐhòu yǒudiǎnr bú dà gāoxìng.",
        vi: "Tôi làm xong hết mọi thủ tục rồi mới nói với cô ấy là tôi sắp ra nước ngoài, nghe xong cô ấy hơi không vui.",
        note: "办好 = làm xong, làm đâu vào đó. 好 làm bổ ngữ kết quả. Cấu trúc 把 + tân ngữ + động từ + bổ ngữ.",
      },
      {
        q: "妈妈要我到中国以后，每个星期都{}她打个电话。",
        a: ["给"],
        py: "Māma yào wǒ dào Zhōngguó yǐhòu, měi ge xīngqī dōu gěi tā dǎ ge diànhuà.",
        vi: "Mẹ bảo tôi sau khi đến Trung Quốc thì mỗi tuần đều gọi điện cho mẹ.",
        note: "给 + người + 打电话: gọi điện cho ai. 给 là giới từ, chỉ đối tượng của hành động.",
      },
      {
        q: "我很早就想爬上长城看看，今天这个愿望终于实现{}，心里有说不出{}高兴。",
        a: ["了", "的"],
        py: "Wǒ hěn zǎo jiù xiǎng pá shàng Chángchéng kànkan, jīntiān zhège yuànwàng zhōngyú shíxiàn le, xīn li yǒu shuō bu chū de gāoxìng.",
        vi: "Từ lâu tôi đã muốn leo lên Trường Thành, hôm nay nguyện vọng cuối cùng đã thành hiện thực, trong lòng có niềm vui không nói nên lời.",
        note: "实现了: 了 báo hiệu sự việc đã hoàn thành. 说不出的高兴: 说不出 (định ngữ) + 的 + danh từ/tính từ danh hoá.",
      },
      {
        q: "临出发时，爸爸给我买{}很多东西，拼命{}往我箱子里塞。因为东西太多，箱子都装不{}了。",
        a: ["了", "地", "下"],
        py: "Lín chūfā shí, bàba gěi wǒ mǎi le hěn duō dōngxi, pīnmìng de wǎng wǒ xiāngzi li sāi. Yīnwèi dōngxi tài duō, xiāngzi dōu zhuāng bu xià le.",
        vi: "Lúc sắp lên đường, bố mua cho tôi rất nhiều thứ, cố sống cố chết nhét vào vali. Vì đồ quá nhiều nên vali không chứa nổi nữa.",
        note: "买了: 了 sau động từ (hoàn thành). 拼命地往…塞: 地 nối trạng ngữ với động từ. 装不下: bổ ngữ khả năng dạng phủ định, 下 chỉ không đủ chỗ chứa.",
      },
      {
        q: "朋友开车{}我送{}机场，离别时看他恋恋不舍{}样子，我的眼泪也流了出来。",
        a: ["把", "到", "的"],
        py: "Péngyou kāi chē bǎ wǒ sòng dào jīchǎng, líbié shí kàn tā liànliànbùshě de yàngzi, wǒ de yǎnlèi yě liú le chūlái.",
        vi: "Bạn lái xe đưa tôi ra sân bay, lúc chia tay thấy bộ dạng lưu luyến không nỡ rời của bạn, nước mắt tôi cũng trào ra.",
        note: "把我送到机场: câu chữ 把, 到 + nơi chốn chỉ điểm đến. 恋恋不舍的样子: 的 nối định ngữ với danh từ 样子.",
      },
      {
        q: "你知道我的性格，决定了的事情是不会改变{}。",
        a: ["的"],
        py: "Nǐ zhīdào wǒ de xìnggé, juédìng le de shìqing shì bú huì gǎibiàn de.",
        vi: "Bạn biết tính tôi mà, việc đã quyết định thì sẽ không thay đổi.",
        note: "是…的: nhấn mạnh sự khẳng định, thường đi kèm 不会…的. 的 ở cuối câu biểu thị giọng chắc chắn.",
      },
    ],
  },
  {
    id: "s3c",
    title: "3. 选词填空 · C",
    sub: "Chọn từ đúng trong ngoặc (phân biệt từ gần nghĩa)",
    items: [
      {
        q: "北京烤鸭很好吃，{}不太贵。（而 / 而且）",
        a: ["而且"],
        py: "Běijīng kǎoyā hěn hǎochī, érqiě bú tài guì.",
        vi: "Vịt quay Bắc Kinh rất ngon, hơn nữa không đắt lắm.",
        note: "而且: bổ sung thêm ý cùng hướng (ngon, hơn nữa không đắt). 而 dùng cho ý đối lập, tương phản.",
      },
      {
        q: "快考试了，大家都在忙着复习，{}麦克却旅行去了。（而 / 而且）",
        a: ["而"],
        py: "Kuài kǎoshì le, dàjiā dōu zài mángzhe fùxí, ér Màikè què lǚxíng qù le.",
        vi: "Sắp thi rồi, mọi người đều bận ôn bài, còn Mike thì lại đi du lịch.",
        note: "而 nối hai vế tương phản (mọi người ôn bài >< Mike đi chơi), thường đi với 却. Không dùng 而且 vì không phải bổ sung cùng hướng.",
      },
      {
        q: "我大学毕业{}，还没有跟她联系过。（以后 / 然后）",
        a: ["以后"],
        py: "Wǒ dàxué bìyè yǐhòu, hái méiyǒu gēn tā liánxì guo.",
        vi: "Sau khi tốt nghiệp đại học, tôi chưa từng liên lạc với cô ấy.",
        note: "以后 đứng sau một sự việc hoặc thời điểm (毕业以后) để chỉ khoảng thời gian sau đó. 然后 là liên từ đứng đầu vế sau, không đứng sau cụm từ.",
      },
      {
        q: "我打算明天下午先去邮局寄包裹，{}去银行换点儿钱。（然后 / 以后）",
        a: ["然后"],
        py: "Wǒ dǎsuàn míngtiān xiàwǔ xiān qù yóujú jì bāoguǒ, ránhòu qù yínháng huàn diǎnr qián.",
        vi: "Chiều mai tôi định đi bưu điện gửi bưu kiện trước, rồi đi ngân hàng đổi ít tiền.",
        note: "先…然后…: làm việc này trước, rồi mới làm việc kia (hai hành động nối tiếp nhau).",
      },
      {
        q: "我{}先在这儿学两年汉语，然后去别的大学学习中国经济（jīngjì, economy）。（打算 / 愿意）",
        a: ["打算"],
        py: "Wǒ dǎsuàn xiān zài zhèr xué liǎng nián Hànyǔ, ránhòu qù bié de dàxué xuéxí Zhōngguó jīngjì.",
        vi: "Tôi dự định học tiếng Trung hai năm ở đây trước, sau đó sang trường đại học khác học kinh tế Trung Quốc.",
        note: "打算: có kế hoạch, dự định cho tương lai. 愿意 là bằng lòng, sẵn lòng, nói về thái độ chứ không phải kế hoạch.",
      },
      {
        q: "我们打算星期天去爬山，你要是{}就跟我们一起去。（希望 / 愿意）",
        a: ["愿意"],
        py: "Wǒmen dǎsuàn xīngqītiān qù páshān, nǐ yàoshi yuànyì jiù gēn wǒmen yìqǐ qù.",
        vi: "Chúng tôi định chủ nhật đi leo núi, nếu bạn muốn thì đi cùng chúng tôi.",
        note: "愿意: tự nguyện, sẵn lòng làm việc gì. 你要是愿意 = nếu bạn bằng lòng. 希望 là mong ước điều tốt đẹp, không hợp với lời mời này.",
      },
      {
        q: "A：暑假你有什么{}？\nB：我还没{}好呢。（打算 / 考虑）",
        a: ["打算", "考虑"],
        py: "A: Shǔjià nǐ yǒu shénme dǎsuàn? B: Wǒ hái méi kǎolǜ hǎo ne.",
        vi: "A: Kỳ nghỉ hè bạn có dự định gì không? B: Tôi vẫn chưa suy nghĩ xong.",
        note: "有什么打算: 打算 ở đây là danh từ (dự định). 没考虑好: 考虑 là động từ (cân nhắc), 好 là bổ ngữ kết quả.",
      },
      {
        q: "A：你{}不{}去云南？你要是想去，咱们一起去，怎么样？\nB：让我{}一下儿，然后再告诉你，好吗？（打算 / 考虑）",
        a: ["打算", "打算", "考虑"],
        py: "A: Nǐ dǎsuàn bu dǎsuàn qù Yúnnán? Nǐ yàoshi xiǎng qù, zánmen yìqǐ qù, zěnmeyàng? B: Ràng wǒ kǎolǜ yíxiàr, ránhòu zài gàosu nǐ, hǎo ma?",
        vi: "A: Bạn có định đi Vân Nam không? Nếu bạn muốn đi thì chúng ta đi cùng, được không? B: Để mình suy nghĩ một chút rồi sẽ nói với bạn, được không?",
        note: "A: dạng khẳng định + phủ định (打算不打算) để hỏi. B: 考虑一下儿 = cân nhắc một chút.",
        warn: "Sách ghi: A: 打算考虑 / B: 考虑. Dạng ghi hơi khó hiểu. Hai chỗ trống của A phải là cùng một từ (A不A), nên 你打算不打算去云南 hoặc 你考虑不考虑去云南 đều nói được. Mình điền 打算 theo cách đọc gần với đáp án sách nhất; bạn có thể hỏi lại cô cho chắc.",
      },
      {
        q: "科学家（kēxuéjiā, scientist）认为现在全球气候正在{}暖。（改变 / 变）",
        a: ["变"],
        py: "Kēxuéjiā rènwéi xiànzài quánqiú qìhòu zhèngzài biàn nuǎn.",
        vi: "Các nhà khoa học cho rằng khí hậu toàn cầu đang ấm lên.",
        note: "变 + tính từ (变暖, 变冷, 变好): trở nên như thế nào. 改变 + danh từ (改变计划, 改变主意): thay đổi cái gì, nên không đi với tính từ 暖.",
      },
      {
        q: "他们研究过了，可能要{}原来的计划。（改变 / 变）",
        a: ["改变"],
        py: "Tāmen yánjiū guo le, kěnéng yào gǎibiàn yuánlái de jìhuà.",
        vi: "Họ đã nghiên cứu rồi, có thể sẽ thay đổi kế hoạch ban đầu.",
        note: "改变 + tân ngữ (原来的计划). 变 thường không mang tân ngữ kiểu này.",
      },
    ],
  },
  {
    id: "s4",
    title: "4. 给括号里的词语选择正确的位置",
    sub: "Chọn vị trí đúng cho từ trong ngoặc",
    items: [
      {
        q: "这 A 就是 B 我要 C 告诉你的 D。（一切）",
        a: ["D"],
        full: "这就是我要告诉你的一切。",
        py: "Zhè jiùshì wǒ yào gàosu nǐ de yíqiè.",
        vi: "Đây chính là tất cả những gì tôi muốn nói với bạn.",
        note: "一切 là đại từ (tất cả), đứng sau 的 như một danh từ trung tâm: 告诉你的一切.",
      },
      {
        q: "A 刚到 B 中国的时候，感到 C 都是 D 那么新鲜（xīnxiān, fresh; new）。（一切）",
        a: ["C"],
        full: "刚到中国的时候，感到一切都是那么新鲜。",
        py: "Gāng dào Zhōngguó de shíhou, gǎndào yíqiè dōu shì nàme xīnxiān.",
        vi: "Lúc mới đến Trung Quốc, cảm thấy mọi thứ đều mới mẻ đến thế.",
        note: "一切 làm chủ ngữ của vế sau, đứng trước 都: 一切都是…",
      },
      {
        q: "A 那位老人 B 没走好，C 摔倒了 D。（一下子）",
        a: ["C"],
        full: "那位老人没走好，一下子摔倒了。",
        py: "Nà wèi lǎorén méi zǒu hǎo, yíxiàzi shuāidǎo le.",
        vi: "Cụ già ấy đi không vững, bỗng chốc ngã xuống.",
        note: "一下子: trong chốc lát, đột nhiên. Là trạng ngữ nên đứng ngay trước động từ 摔倒.",
      },
      {
        q: "我想 A 用 B 你的 C 词典 D，可以吗？（一下儿）",
        a: ["D"],
        full: "我想用你的词典一下儿，可以吗？",
        py: "Wǒ xiǎng yòng nǐ de cídiǎn yíxiàr, kěyǐ ma?",
        vi: "Tôi muốn dùng thử từ điển của bạn một chút, được không?",
        note: "一下儿 là số lượng từ động tác, thường đặt ngay sau động từ.",
        warn: "Sách ghi D, nhưng theo ngữ pháp thông thường mình thấy phải là B: 我想用一下儿你的词典 (Wǒ xiǎng yòng yíxiàr nǐ de cídiǎn). Khi tân ngữ là cụm danh từ dài thì 一下儿 đứng ngay sau động từ, trước tân ngữ. Bạn nên hỏi lại cô về câu này.",
      },
      {
        q: "A 他到 B 现在 C 还没来，D 不来了。（多半）",
        a: ["D"],
        full: "他到现在还没来，多半不来了。",
        py: "Tā dào xiànzài hái méi lái, duōbàn bù lái le.",
        vi: "Đến giờ anh ấy vẫn chưa đến, chắc là không đến nữa.",
        note: "多半: phần nhiều, có lẽ (phán đoán khả năng cao). Đứng trước động từ hoặc cụm động từ: 多半不来了.",
      },
      {
        q: "他 A 想多 B 睡 C 一会儿，D 不是病了。（就是）",
        a: ["A"],
        full: "他就是想多睡一会儿，不是病了。",
        py: "Tā jiùshì xiǎng duō shuì yíhuìr, bú shì bìng le.",
        vi: "Anh ấy chỉ là muốn ngủ thêm một lát thôi, không phải bị bệnh.",
        note: "就是 = chỉ là (nhấn mạnh duy nhất lý do này), đứng trước động từ 想. Vế sau 不是病了 loại trừ khả năng khác.",
      },
      {
        q: "这一个星期 A 我就收 B 到 C 五件礼物 D。（了）",
        a: ["C"],
        full: "这一个星期我就收到了五件礼物。",
        py: "Zhè yí ge xīngqī wǒ jiù shōudào le wǔ jiàn lǐwù.",
        vi: "Trong tuần này tôi đã nhận được năm món quà.",
        note: "了 đặt sau động từ kèm bổ ngữ kết quả (收到了), trước tân ngữ có số lượng (五件礼物).",
      },
      {
        q: "我打算 A 放 B 假 C 就去南方旅行 D。（了）",
        a: ["B"],
        full: "我打算放了假就去南方旅行。",
        py: "Wǒ dǎsuàn fàng le jià jiù qù nánfāng lǚxíng.",
        vi: "Tôi định nghỉ xong là đi du lịch miền Nam.",
        note: "放假 là động từ ly hợp (động từ + tân ngữ), 了 chen vào giữa: 放了假. Ở đây 了 chỉ hành động hoàn thành trước 就去…",
      },
    ],
  },
  {
    id: "s5",
    title: "5. 用括号里的词语完成句子",
    sub: "Hoàn thành câu với từ trong ngoặc",
    items: [
      {
        q: "刚来的时候我很不习惯，老师说，过一两个月就好了。现在，一个多月过去了，{}。（果然）",
        a: ["我果然习惯了"],
        py: "Gāng lái de shíhou wǒ hěn bù xíguàn, lǎoshī shuō, guò yì liǎng ge yuè jiù hǎo le. Xiànzài, yí ge duō yuè guòqù le, wǒ guǒrán xíguàn le.",
        vi: "Lúc mới đến tôi rất không quen, thầy nói qua một hai tháng sẽ ổn. Bây giờ hơn một tháng đã trôi qua, tôi quả nhiên đã quen rồi.",
        note: "果然 đặt trước động từ/tính từ: kết quả đúng như lời dự đoán của thầy.",
      },
      {
        q: "大夫跟我说，坚持打一年太极拳，你的病就会好的。你看，我才打了半年，{}。（果然）",
        a: ["我的病果然好多了"],
        py: "Dàifu gēn wǒ shuō, jiānchí dǎ yì nián tàijíquán, nǐ de bìng jiù huì hǎo de. Nǐ kàn, wǒ cái dǎ le bàn nián, wǒ de bìng guǒrán hǎo duō le.",
        vi: "Bác sĩ bảo tôi kiên trì tập thái cực quyền một năm thì bệnh sẽ khỏi. Bạn xem, tôi mới tập nửa năm mà bệnh quả nhiên đã đỡ nhiều.",
        note: "果然 đứng sau chủ ngữ (我的病), trước 好. 好多了: khá hơn nhiều rồi.",
        warn: "Trong bản đáp án của sách có một dấu chấm thừa (·) ở cuối câu, có thể bỏ qua.",
      },
      {
        q: "那天，我迷路（mí lù, to lose one's way）了，{}。（只好）",
        a: ["只好回家了"],
        py: "Nèi tiān, wǒ mílù le, zhǐhǎo huí jiā le.",
        vi: "Hôm đó tôi bị lạc đường, đành phải về nhà.",
        note: "只好 + động từ: không còn cách nào khác nên đành làm vậy. Vế trước nêu nguyên nhân (迷路).",
      },
      {
        q: "你看她的样子，{}。（多半）",
        a: ["多半是迷路了"],
        py: "Nǐ kàn tā de yàngzi, duōbàn shì mílù le.",
        vi: "Nhìn bộ dạng cô ấy, có lẽ là bị lạc đường rồi.",
        note: "多半 = phần nhiều, có lẽ: phán đoán dựa trên bằng chứng (看她的样子). Thường đi với 是…了 / 不会…",
      },
      {
        q: "玛丽病了，同学们都来看她，{}。（嘱咐）",
        a: ["嘱咐她好好养病"],
        py: "Mǎlì bìng le, tóngxuémen dōu lái kàn tā, zhǔfù tā hǎohāo yǎng bìng.",
        vi: "Mary bị bệnh, các bạn học đều đến thăm cô ấy, dặn cô ấy nghỉ ngơi dưỡng bệnh cho tốt.",
        note: "嘱咐 + người + nội dung dặn. 好好养病: dưỡng bệnh cho tốt.",
        warn: "Sách ghi 嘱咐好好养病 (thiếu 她). Mình thêm 她 cho câu đầy đủ ngữ pháp; viết như sách cũng được vì chủ ngữ rõ từ ngữ cảnh.",
      },
      {
        q: "经过努力，{}。（终于）",
        a: ["他终于得到好成绩了"],
        py: "Jīngguò nǔlì, tā zhōngyú dédào hǎo chéngjì le.",
        vi: "Qua nỗ lực, cuối cùng anh ấy đã đạt được thành tích tốt.",
        note: "经过努力 là tiền đề, 终于 nhấn mạnh kết quả mong muốn đã đạt được sau một quá trình.",
      },
      {
        q: "{}大家还有不同意见。（对于）",
        a: ["对于这个计划"],
        py: "Duìyú zhège jìhuà, dàjiā hái yǒu bùtóng yìjiàn.",
        vi: "Về kế hoạch này, mọi người vẫn còn ý kiến khác nhau.",
        note: "对于 + danh từ (đối tượng) đứng đầu câu hoặc trước chủ ngữ để nêu chủ đề: 对于…，…",
      },
      {
        q: "我哪儿都不想去，{}。（就是）",
        a: ["就是想睡觉"],
        py: "Wǒ nǎr dōu bù xiǎng qù, jiùshì xiǎng shuìjiào.",
        vi: "Tôi chẳng muốn đi đâu cả, chỉ muốn ngủ thôi.",
        note: "就是 = chỉ là, chỉ muốn: nêu điều duy nhất mình muốn, đối lập với 哪儿都不想去.",
      },
    ],
  },
  {
    id: "s6",
    title: "6. 连句成段",
    sub: "Sắp xếp các câu thành đoạn văn",
    items: [
      {
        q: "A. 尤其是冬天的星空，常常使我看得入迷。\nB. 我的家乡是一个美丽的小城。\nC. 每到晴天的夜晚，就可以看到明亮的星星。\nD. 小时候，我常爱看那美丽的星空。",
        a: ["B D C A"],
        full: "我的家乡是一个美丽的小城。小时候，我常爱看那美丽的星空。每到晴天的夜晚，就可以看到明亮的星星。尤其是冬天的星空，常常使我看得入迷。",
        py: "Wǒ de jiāxiāng shì yí ge měilì de xiǎo chéng. Xiǎoshíhou, wǒ cháng ài kàn nà měilì de xīngkōng. Měi dào qíngtiān de yèwǎn, jiù kěyǐ kàndào míngliàng de xīngxing. Yóuqí shì dōngtiān de xīngkōng, chángcháng shǐ wǒ kàn de rùmí.",
        vi: "Quê tôi là một thị trấn nhỏ xinh đẹp. Hồi nhỏ tôi thường thích ngắm bầu trời sao đẹp ấy. Mỗi đêm trời quang đều có thể thấy những vì sao sáng. Nhất là bầu trời sao mùa đông, thường khiến tôi ngắm đến mê mẩn.",
        note: "B mở đầu (giới thiệu quê hương) → D (hồi nhỏ thích ngắm sao, 那 chỉ lại 星空) → C (đêm trời quang thấy sao) → A kết (尤其是 = đặc biệt là, đưa ra trường hợp nổi bật nhất nên đứng cuối).",
      },
      {
        q: "A. 到中国以后我还是这样。\nB. 后来离开了家乡，我仍然经常想起家乡那美丽的星空。\nC. 常常一到晚上就不由得会抬起头来往天上看。\nD. 天空有没有明亮的星星？",
        a: ["B A C D"],
        full: "后来离开了家乡，我仍然经常想起家乡那美丽的星空。到中国以后我还是这样。常常一到晚上就不由得会抬起头来往天上看。天空有没有明亮的星星？",
        py: "Hòulái líkāi le jiāxiāng, wǒ réngrán jīngcháng xiǎngqǐ jiāxiāng nà měilì de xīngkōng. Dào Zhōngguó yǐhòu wǒ háishi zhèyàng. Chángcháng yí dào wǎnshang jiù bùyóude huì táiqǐ tóu lái wǎng tiānshang kàn. Tiānkōng yǒu méiyǒu míngliàng de xīngxing?",
        vi: "Sau này rời quê, tôi vẫn thường nhớ đến bầu trời sao đẹp của quê hương. Sau khi đến Trung Quốc tôi vẫn như vậy. Cứ đến tối là bất giác ngẩng đầu nhìn lên trời. Trên trời có những vì sao sáng không?",
        note: "B có 后来 nên mở đầu. A: 这样 chỉ lại việc 经常想起星空 ở B. C: tả hành động cụ thể (ngẩng đầu nhìn trời). D là câu hỏi kết thúc, chính là điều tác giả nghĩ khi nhìn lên.",
      },
    ],
  },
  {
    id: "s7",
    title: "7. 改错句",
    sub: "Sửa câu sai",
    items: [
      {
        q: "这件事你对她不该瞒。",
        a: ["这件事你不该瞒她。"],
        py: "Zhè jiàn shì nǐ bù gāi mán tā.",
        vi: "Chuyện này bạn không nên giấu cô ấy.",
        note: "瞒 là động từ mang tân ngữ trực tiếp (瞒 + người), không dùng giới từ 对. Phó từ phủ định 不该 đứng trước động từ.",
      },
      {
        q: "我终于快到中国了。",
        a: ["我终于到中国了。"],
        py: "Wǒ zhōngyú dào Zhōngguó le.",
        vi: "Cuối cùng tôi cũng đến Trung Quốc rồi.",
        note: "终于 diễn tả việc đã xảy ra sau thời gian chờ đợi, còn 快…了 là sắp xảy ra nhưng chưa xảy ra. Hai ý mâu thuẫn nên bỏ 快.",
      },
      {
        q: "你可以把我作你的朋友。",
        a: ["你可以把我当作朋友。"],
        py: "Nǐ kěyǐ bǎ wǒ dàngzuò péngyou.",
        vi: "Bạn có thể coi tôi là bạn.",
        note: "Cấu trúc đúng: 把 A 当作 B (coi A là B). Dùng 作 đơn lẻ không đúng trong cấu trúc này.",
        warn: "Sách bỏ 你的 (当作朋友). Giữ 你的朋友 cũng không sai; lỗi chính là 作 → 当作.",
      },
      {
        q: "看到这种情况，我的眼里流了眼泪。",
        a: ["看到这种情况，我流了眼泪。"],
        py: "Kàndào zhè zhǒng qíngkuàng, wǒ liú le yǎnlèi.",
        vi: "Thấy tình cảnh này, tôi rơi nước mắt.",
        note: "流眼泪 đã có sẵn 眼泪, thêm 眼里 làm câu thừa. Chủ ngữ là người (我) + 流了眼泪.",
      },
      {
        q: "因为买票太多人，我们没有买卧铺（wòpù, sleeping berth），只好买了硬座（yìngzuò, hard seat）。",
        a: ["因为买票的人太多，我们没有买卧铺只好买了硬座。"],
        py: "Yīnwèi mǎi piào de rén tài duō, wǒmen méiyǒu mǎi wòpù, zhǐhǎo mǎi le yìngzuò.",
        vi: "Vì người mua vé quá đông, chúng tôi không mua được giường nằm, đành mua ghế cứng.",
        note: "Sai trật tự từ: phải nói 买票的人太多 (định ngữ 买票 + 的 + 人, rồi 太多 làm vị ngữ). Không nói 太多人.",
      },
      {
        q: "我放行李在飞机场的大厅里。",
        a: ["我把行李放在飞机场的大厅里。"],
        py: "Wǒ bǎ xíngli fàng zài fēijīchǎng de dàtīng li.",
        vi: "Tôi để hành lý ở đại sảnh sân bay.",
        note: "Động từ chỉ sự đặt để + 在 + nơi chốn thì thường dùng câu chữ 把: 把 + vật + 放在 + nơi chốn.",
      },
      {
        q: "她结婚了一个有钱人。",
        a: ["她嫁了一个有钱人。"],
        py: "Tā jià le yí ge yǒu qián rén.",
        vi: "Cô ấy lấy một người giàu có.",
        note: "结婚 là động từ ly hợp, không mang tân ngữ trực tiếp. Phụ nữ lấy chồng dùng 嫁 + người. Hoặc nói 她跟一个有钱人结婚了.",
      },
      {
        q: "我从小就是喝妈妈的牛奶长大的。",
        a: ["我从小就是喝妈妈的奶长大的。"],
        py: "Wǒ cóng xiǎo jiù shì hē māma de nǎi zhǎng dà de.",
        vi: "Từ nhỏ tôi đã được lớn lên nhờ sữa mẹ.",
        note: "牛奶 là sữa bò. Sữa của mẹ nói 妈妈的奶 (hay 母乳), nên bỏ 牛.",
      },
    ],
  },
  {
    id: "s8",
    title: "8. 情景表达",
    sub: "Ngôn ngữ và tình huống",
    intro:
      "Bài này là bài mở, bản đáp án của sách không có phần 8. Các câu trả lời dưới đây là gợi ý do mình soạn, bạn có thể viết theo ý mình.",
    items: [
      {
        q: "1.（1）现在我的愿望终于实现了，心里有说不出的高兴。\n（句子在什么情景下说？）",
        full: "现在我的愿望终于实现了，心里有说不出的高兴。",
        py: "Xiànzài wǒ de yuànwàng zhōngyú shíxiàn le, xīn li yǒu shuō bu chū de gāoxìng.",
        vi: "Bây giờ nguyện vọng của tôi cuối cùng đã thành hiện thực, trong lòng có niềm vui khó nói thành lời.",
        note: "Tình huống gợi ý: bạn mong chờ rất lâu một điều gì đó (được đến Trung Quốc du học, leo Trường Thành, nhận được thư trúng tuyển…) và nay đã đạt được.",
      },
      {
        q: "1.（2）如果把这件事告诉她，她多半不会同意。\n（句子在什么情景下说？）",
        full: "如果把这件事告诉她，她多半不会同意。",
        py: "Rúguǒ bǎ zhè jiàn shì gàosu tā, tā duōbàn bú huì tóngyì.",
        vi: "Nếu nói chuyện này với cô ấy, cô ấy phần nhiều sẽ không đồng ý.",
        note: "Tình huống gợi ý: bạn định làm một việc (ví dụ ra nước ngoài, đổi công việc) nhưng lo người thân sẽ phản đối, nên đang cân nhắc có nên nói hay không (liên quan đến 瞒着).",
      },
      {
        q: "1.（3）看她那恋恋不舍的样子，我的眼泪也一下子流了出来。\n（句子在什么情景下说？）",
        full: "看她那恋恋不舍的样子，我的眼泪也一下子流了出来。",
        py: "Kàn tā nà liànliànbùshě de yàngzi, wǒ de yǎnlèi yě yíxiàzi liú le chūlái.",
        vi: "Nhìn bộ dạng lưu luyến không nỡ rời của cô ấy, nước mắt tôi cũng bỗng trào ra.",
        note: "Tình huống gợi ý: lúc tiễn nhau ở sân bay hoặc nhà ga, người kia khóc vì không nỡ chia tay nên bạn cũng xúc động theo.",
      },
      {
        q: "2.（1）朋友请你帮帮她，你没有时间，但看到朋友着急的样子，你还是答应了。（只好）",
        full: "我虽然没有时间，但看到朋友那么着急，只好答应了。",
        py: "Wǒ suīrán méiyǒu shíjiān, dàn kàndào péngyou nàme zháojí, zhǐhǎo dāying le.",
        vi: "Tuy tôi không có thời gian, nhưng thấy bạn sốt ruột như vậy nên đành nhận lời.",
        note: "只好 + động từ (答应了): bất đắc dĩ phải làm. Có thể mở đầu bằng 虽然…但…",
      },
      {
        q: "2.（2）和男/女朋友离别时，你不想离开，眼泪都流了出来。（恋恋不舍）",
        full: "和女朋友分别的时候，我恋恋不舍，眼泪都流了出来。",
        py: "Hé nǚpéngyou fēnbié de shíhou, wǒ liànliànbùshě, yǎnlèi dōu liú le chūlái.",
        vi: "Lúc chia tay bạn gái, tôi lưu luyến không nỡ rời, nước mắt cũng chảy ra.",
        note: "恋恋不舍 có thể làm vị ngữ (我恋恋不舍) hoặc định ngữ (恋恋不舍的样子).",
      },
      {
        q: "2.（3）刚来中国，你觉得不习惯，特别想家。（想念）",
        full: "刚来中国的时候，我很不习惯，特别想念家人。",
        py: "Gāng lái Zhōngguó de shíhou, wǒ hěn bù xíguàn, tèbié xiǎngniàn jiārén.",
        vi: "Lúc mới đến Trung Quốc, tôi rất không quen, đặc biệt nhớ gia đình.",
        note: "想念 + người (家人, 父母, 朋友) hoặc nơi chốn (家乡). Muốn nói nhớ nhà có thể nói 想念我的家 hoặc 想家.",
      },
    ],
  },
];

// ===== Giao diện =====
function Question({ item, open }: { item: Item; open: boolean }) {
  const parts = item.q.split("{}");
  return (
    <p className="ztai__zh whitespace-pre-line font-serif text-lg leading-9 text-stone-900">
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 &&
            (open ? (
              <span className="mx-1 border-b-2 border-sky-600 px-1 font-bold text-sky-700">
                {item.a?.[i]}
              </span>
            ) : (
              <span className="mx-1 inline-block w-16 border-b-2 border-stone-400 align-bottom">
                &nbsp;
              </span>
            ))}
        </span>
      ))}
    </p>
  );
}

function Card({
  item,
  no,
  open,
  toggle,
}: {
  item: Item;
  no: number;
  open: boolean;
  toggle: () => void;
}) {
  const hasBlank = item.q.includes("{}");
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-4">
      <div className="flex gap-3">
        <span className="mt-1 w-7 shrink-0 text-right text-sm font-semibold text-stone-400">
          ({no})
        </span>
        <div className="min-w-0 flex-1">
          <Question item={item} open={open} />
          <button
            onClick={toggle}
            className="mt-2 rounded-md border border-stone-300 px-3 py-1 text-sm text-stone-600 hover:bg-stone-50 focus:outline-none"
          >
            {open ? "Ẩn đáp án" : "Xem đáp án"}
          </button>

          {open && (
            <div className="mt-3 space-y-2 border-t border-stone-100 pt-3 text-[15px] leading-7">
              {item.a && !hasBlank && (
                <p className="text-stone-700">
                  Đáp án:{" "}
                  <span className="font-bold text-blue-700">
                    {item.a.join(" ")}
                  </span>
                </p>
              )}
              {!hasBlank && item.full && (
                <p className="font-serif text-lg text-stone-900">{item.full}</p>
              )}
              <p className="text-stone-500">{item.py}</p>
              <p className="text-stone-700">{item.vi}</p>
              <p className="rounded-md bg-sky-50 p-3 text-stone-800">
                <span className="font-semibold">Giải thích: </span>
                {item.note}
              </p>
              {item.warn && (
                <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-900">
                  <span className="font-semibold">Lưu ý: </span>
                  {item.warn}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Lesson1BaiTap() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const allKeys = SECTIONS.flatMap((s) =>
    s.items.map((_, i) => `${s.id}-${i}`),
  );
  const allOpen = allKeys.every((k) => openMap[k]);

  const setAll = (v: boolean) => {
    const next: Record<string, boolean> = {};
    allKeys.forEach((k) => (next[k] = v));
    setOpenMap(next);
  };

  return (
    <div className="mx-auto p-4">
      <header>
        <p className="text-sm text-stone-500">
          汉语教程（第3版）第三册 上 · Hán ngữ giáo trình quyển 5
        </p>
        <h1 className="mt-1 font-serif text-3xl font-bold">
          第一课 离家的时候
        </h1>
        <p className="mt-1 text-stone-600">
          Bài tập 3 đến 8 (trang 35 đến 37), đáp án theo sách kèm giải thích
        </p>
        <button
          onClick={() => setAll(!allOpen)}
          className="my-2 rounded-full border border-sky-300 px-3 py-1 text-sm text-sky-700 hover:bg-sky-50"
        >
          {allOpen ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
        </button>
      </header>

      <nav className="mb-8 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-stone-300 bg-white px-3 py-1 text-sm text-stone-700 hover:border-blue-500 hover:text-blue-700"
          >
            {s.title.split(" ")[0]}
            {s.title.includes("·") ? ` ${s.title.split("· ")[1]}` : ""}
          </a>
        ))}
      </nav>

      {SECTIONS.map((s) => (
        <section key={s.id} id={s.id} className="mb-12 scroll-mt-6">
          <h2 className="font-serif text-2xl font-bold">{s.title}</h2>
          <p className="mb-3 text-stone-600">{s.sub}</p>

          {s.intro && (
            <p className="mb-3 rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-900">
              {s.intro}
            </p>
          )}

          {s.banks?.map((b) => (
            <div
              key={b.label}
              className="mb-4 rounded-lg border border-dashed border-stone-400 bg-white p-3"
            >
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {b.words.map((w) => (
                  <span key={w.zh} className="text-center leading-tight">
                    <span className="block text-xs text-stone-500">{w.py}</span>
                    <span className="font-serif text-lg">{w.zh}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-3">
            {s.items.map((item, i) => {
              const key = `${s.id}-${i}`;
              return (
                <Card
                  key={key}
                  item={item}
                  no={i + 1}
                  open={!!openMap[key]}
                  toggle={() => setOpenMap((m) => ({ ...m, [key]: !m[key] }))}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
