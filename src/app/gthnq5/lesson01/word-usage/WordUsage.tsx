"use client";

import { JSX, useMemo, useState } from "react";

// ===== DỮ LIỆU =====
type E = { id: string; sec: string; h: string; p: string; v: string };
// h: {từ khoá} = highlight · "/" = ranh giới cụm · # = bài đặt từ · * = câu sai (不能说)
const SEC: { k: string; t: string; e: string }[] = [
  {
    k: "sh",
    t: "说实话",
    e: "Nói thật (说实话 / 说心里话 / 说真的): dùng để dẫn vào phần sau, nói ra suy nghĩ, cảm xúc thật của mình.",
  },
  {
    k: "gx",
    t: "过一年",
    e: "“过一年” = 生活一年: sống một năm (ở nước ngoài).",
  },
  {
    k: "yx",
    t: "一下子",
    e: "一下子 làm trạng ngữ, chỉ động tác rất nhanh, thời gian rất ngắn; nhấn mạnh động tác hoàn thành, tình huống xuất hiện hoặc thay đổi trong khoảng thời gian rất ngắn.",
  },
  {
    k: "zy",
    t: "终于 (副)",
    e: "终于 (phó từ) cuối cùng: sau một thời gian dài nỗ lực hoặc chờ đợi, cuối cùng xuất hiện một kết quả; kết quả này phần lớn là điều mong muốn.",
  },
  {
    k: "yq",
    t: "一切 (代)",
    e: "一切 (đại từ) tất cả: biểu thị toàn bộ, mọi loại; làm chủ ngữ, tân ngữ, định ngữ, thường dùng với 都. Khi làm định ngữ bổ nghĩa danh từ thì không mang 的.",
  },
  {
    k: "rg",
    t: "如果 (连)",
    e: "如果 (liên từ) nếu: biểu thị giả thiết, phần nhiều đứng đầu phân câu trước. Sau “如果……” có thể thêm trợ từ 的话.",
  },
  {
    k: "gr",
    t: "果然 (副)",
    e: "果然 (phó từ) quả nhiên: sự thật giống như dự đoán hoặc như lời người khác nói; dùng trước động từ vị ngữ, tính từ hoặc chủ ngữ.",
  },
  {
    k: "dy",
    t: "对于 (介)",
    e: "对于 (giới từ) đối với, về: dẫn ra đối tượng của động tác hoặc sự việc liên quan; thường đứng trước danh từ, rất ít kết hợp với động từ, phó từ. Chú ý: câu dùng 对于 đều có thể đổi sang 对; nhưng nhiều câu dùng 对 thì không đổi được sang 对于. Đối tượng 对 dẫn có thể là người, còn 对于 không trực tiếp dẫn người.",
  },
  {
    k: "er",
    t: "而 (连)",
    e: "而 (liên từ) và; nhưng. (1) Văn viết: nối hai tính từ/cụm tính từ song song, bổ sung cho nhau. (2) Nối tính từ, động từ, phân câu biểu thị chuyển ý, cách dùng giống 但是、却.",
  },
  {
    k: "zh",
    t: "只好 (副)",
    e: "只好 (phó từ) đành phải: biểu thị (trong hoàn cảnh nào đó) không có lựa chọn khác, chỉ có thể làm như vậy.",
  },
];
const S: E[] = [
  {
    id: "sh1",
    sec: "sh",
    h: "{说实话},/今天/老师讲的/我/有的地方/没听懂。",
    p: "Shuō shíhuà, jīntiān lǎoshī jiǎng de wǒ yǒu de dìfang méi tīngdǒng.",
    v: "Nói thật, hôm nay có chỗ tôi không nghe hiểu những gì thầy giảng.",
  },
  {
    id: "sh2",
    sec: "sh",
    h: "{说实话},/我也/是第一次/来/这个地方。",
    p: "Shuō shíhuà, wǒ yě shì dì-yī cì lái zhège dìfang.",
    v: "Nói thật, tôi cũng là lần đầu đến nơi này.",
  },
  {
    id: "sh3",
    sec: "sh",
    h: "{说实话},/我/一点儿/也/不想去。",
    p: "Shuō shíhuà, wǒ yìdiǎnr yě bù xiǎng qù.",
    v: "Nói thật, tôi chẳng muốn đi chút nào.",
  },
  {
    id: "gx1",
    sec: "gx",
    h: "自由自在地/去/国外/{过一年}。",
    p: "Zìyóu-zìzài de qù guówài guò yì nián.",
    v: "Tự do tự tại ra nước ngoài sống một năm.",
  },
  {
    id: "yx0",
    sec: "yx",
    h: "我的眼泪/也/{一下子}/流了出来。",
    p: "Wǒ de yǎnlèi yě yíxiàzi liú le chūlái.",
    v: "Nước mắt tôi cũng bỗng chốc trào ra.",
  },
  {
    id: "yx1",
    sec: "yx",
    h: "几年不见,/他/{一下子}/长/这么高了。",
    p: "Jǐ nián bú jiàn, tā yíxiàzi zhǎng zhème gāo le.",
    v: "Mấy năm không gặp, anh ấy bỗng chốc cao thế này rồi.",
  },
  {
    id: "yx2",
    sec: "yx",
    h: "#一过“五一”,/天/{一下子}/就热起来了。",
    p: "Yí guò “Wǔ-Yī”, tiān yíxiàzi jiù rè qǐlái le.",
    v: "Vừa qua dịp 1/5, trời bỗng chốc nóng lên.",
  },
  {
    id: "yx3",
    sec: "yx",
    h: "她/没走好,/{一下子}/从楼梯上/摔下来了。",
    p: "Tā méi zǒu hǎo, yíxiàzi cóng lóutī shang shuāi xiàlái le.",
    v: "Cô ấy bước không vững, bỗng chốc ngã từ cầu thang xuống.",
  },
  {
    id: "zy1",
    sec: "zy",
    h: "我很早就/希望/能有机会/来中国/学习汉语,/现在/这个愿望/{终于}/实现了,/心里/有说不出的/高兴。",
    p: "Wǒ hěn zǎo jiù xīwàng néng yǒu jīhuì lái Zhōngguó xuéxí Hànyǔ, xiànzài zhège yuànwàng zhōngyú shíxiàn le, xīnli yǒu shuō bu chū de gāoxìng.",
    v: "Từ rất sớm tôi đã mong có cơ hội đến Trung Quốc học tiếng Trung, giờ ước nguyện này cuối cùng đã thành, trong lòng vui không nói nên lời.",
  },
  {
    id: "zy2",
    sec: "zy",
    h: "经过努力,/他/{终于}/考上了/大学。",
    p: "Jīngguò nǔlì, tā zhōngyú kǎoshàng le dàxué.",
    v: "Qua nỗ lực, cuối cùng anh ấy đã đỗ đại học.",
  },
  {
    id: "zy3",
    sec: "zy",
    h: "#我很早就想看看长城,/今天我/{终于}/看到了。",
    p: "Wǒ hěn zǎo jiù xiǎng kànkan Chángchéng, jīntiān wǒ zhōngyú kàndào le.",
    v: "Từ sớm tôi đã muốn xem Trường Thành, hôm nay cuối cùng tôi đã thấy rồi.",
  },
  {
    id: "zy4",
    sec: "zy",
    h: "她/当翻译的/愿望/{终于}/实现了。",
    p: "Tā dāng fānyì de yuànwàng zhōngyú shíxiàn le.",
    v: "Ước nguyện làm phiên dịch của cô ấy cuối cùng đã thành hiện thực.",
  },
  {
    id: "yq1",
    sec: "yq",
    h: "从去年夏天起,/我就忙着/联系学校,/办各种手续,/可是,/这/{一切}/都是/瞒着/我父母/做的。",
    p: "Cóng qùnián xiàtiān qǐ, wǒ jiù mángzhe liánxì xuéxiào, bàn gè zhǒng shǒuxù, kěshì, zhè yíqiè dōu shì mánzhe wǒ fùmǔ zuò de.",
    v: "Từ mùa hè năm ngoái, tôi bận liên hệ trường, làm đủ loại thủ tục, nhưng tất cả những việc này đều giấu bố mẹ tôi mà làm.",
  },
  {
    id: "yq2",
    sec: "yq",
    h: "#刚来时是有很多地方不习惯,/但是现在/{一切}/都习惯了。",
    p: "Gāng lái shí shì yǒu hěn duō dìfang bù xíguàn, dànshì xiànzài yíqiè dōu xíguàn le.",
    v: "Lúc mới đến quả có nhiều chỗ không quen, nhưng giờ mọi thứ đều quen rồi.",
  },
  {
    id: "yq3",
    sec: "yq",
    h: "这里的/{一切}/对我来说,/都是/那么有趣。",
    p: "Zhèlǐ de yíqiè duì wǒ lái shuō, dōu shì nàme yǒuqù.",
    v: "Mọi thứ ở đây đối với tôi đều thú vị đến thế.",
  },
  {
    id: "yq4",
    sec: "yq",
    h: "我/{一切}/手续/都/办好了,/就等/机票了。",
    p: "Wǒ yíqiè shǒuxù dōu bàn hǎo le, jiù děng jīpiào le.",
    v: "Tôi đã làm xong mọi thủ tục, chỉ chờ vé máy bay.",
  },
  {
    id: "rg1",
    sec: "rg",
    h: "我是独生女,/{如果}/把这件事/告诉父母,/他们/多半/不会同意。",
    p: "Wǒ shì dúshēngnǚ, rúguǒ bǎ zhè jiàn shì gàosu fùmǔ, tāmen duōbàn bú huì tóngyì.",
    v: "Tôi là con gái một, nếu nói chuyện này với bố mẹ, phần nhiều họ sẽ không đồng ý.",
  },
  {
    id: "rg2",
    sec: "rg",
    h: "{如果}/有问题,/可以/来找我。",
    p: "Rúguǒ yǒu wèntí, kěyǐ lái zhǎo wǒ.",
    v: "Nếu có vấn đề, có thể đến tìm tôi.",
  },
  {
    id: "rg3",
    sec: "rg",
    h: "{如果}/你想/学太极拳,/就/去报名吧。",
    p: "Rúguǒ nǐ xiǎng xué tàijíquán, jiù qù bàomíng ba.",
    v: "Nếu bạn muốn học Thái cực quyền thì đi đăng ký đi.",
  },
  {
    id: "rg4",
    sec: "rg",
    h: "{如果}/有时间,/我/一定/去中国/旅行。",
    p: "Rúguǒ yǒu shíjiān, wǒ yídìng qù Zhōngguó lǚxíng.",
    v: "Nếu có thời gian, tôi nhất định đi du lịch Trung Quốc.",
  },
  {
    id: "rg5",
    sec: "rg",
    h: "如果/下雨/{的话},/我们/还去/吗?",
    p: "Rúguǒ xià yǔ de huà, wǒmen hái qù ma?",
    v: "Nếu trời mưa, chúng ta còn đi không?",
  },
  {
    id: "gr1",
    sec: "gr",
    h: "我把/出国留学的事/告诉了父母,/他们/听了,/{果然}/不大愿意。",
    p: "Wǒ bǎ chūguó liúxué de shì gàosu le fùmǔ, tāmen tīng le, guǒrán bú dà yuànyì.",
    v: "Tôi nói chuyện đi du học với bố mẹ, nghe xong, quả nhiên họ không mấy bằng lòng.",
  },
  {
    id: "gr2",
    sec: "gr",
    h: "#听朋友说那个饭店的菜又好吃又便宜,/我去吃了一次,/{果然}/不错。",
    p: "Tīng péngyou shuō nàge fàndiàn de cài yòu hǎochī yòu piányi, wǒ qù chī le yí cì, guǒrán búcuò.",
    v: "Nghe bạn nói món ở nhà hàng đó vừa ngon vừa rẻ, tôi đi ăn một lần, quả nhiên không tệ.",
  },
  {
    id: "gr3",
    sec: "gr",
    h: "天气预报/说/今天有雨,/你看,/{果然}/下起来了。",
    p: "Tiānqì yùbào shuō jīntiān yǒu yǔ, nǐ kàn, guǒrán xià qǐlái le.",
    v: "Dự báo thời tiết nói hôm nay có mưa, bạn xem, quả nhiên mưa rồi.",
  },
  {
    id: "gr4",
    sec: "gr",
    h: "大夫说/吃了这种药/我的病/就会好的,/我吃了药以后,/{果然}/病/一天比一天/好了。",
    p: "Dàifu shuō chī le zhè zhǒng yào wǒ de bìng jiù huì hǎo de, wǒ chī le yào yǐhòu, guǒrán bìng yì tiān bǐ yì tiān hǎo le.",
    v: "Bác sĩ nói uống thuốc này bệnh sẽ khỏi, sau khi uống thuốc, quả nhiên bệnh ngày một đỡ hơn.",
  },
  {
    id: "dy1",
    sec: "dy",
    h: "说实话,{对于}将来要做什么,我还没想好。",
    p: "Shuō shíhuà, duìyú jiānglái yào zuò shénme, wǒ hái méi xiǎnghǎo.",
    v: "Nói thật, về việc sau này làm gì, tôi vẫn chưa nghĩ kỹ.",
  },
  {
    id: "dy2",
    sec: "dy",
    h: "{对于}/这个问题,/大家/都/很感兴趣。",
    p: "Duìyú zhège wèntí, dàjiā dōu hěn gǎn xìngqù.",
    v: "Về vấn đề này, mọi người đều rất quan tâm.",
  },
  {
    id: "dx1",
    sec: "dy",
    h: "*我们都{对于}这个问题感兴趣。",
    p: "Wǒmen dōu duìyú zhège wèntí gǎn xìngqù.",
    v: "✗ Không thể nói. 对于 ít kết hợp với phó từ (都) đứng trước nó; phải đặt 对于…ở đầu câu (对于这个问题,我们都感兴趣) hoặc dùng 对 (我们都对这个问题感兴趣).",
  },
  {
    id: "dy3",
    sec: "dy",
    h: "{对于}/工作,/他/是/很认真的。",
    p: "Duìyú gōngzuò, tā shì hěn rènzhēn de.",
    v: "Đối với công việc, anh ấy rất nghiêm túc.",
  },
  {
    id: "dy4",
    sec: "dy",
    h: "多跟/中国人/谈话,/{对于}/提高/汉语听说能力/非常/有帮助。",
    p: "Duō gēn Zhōngguórén tánhuà, duìyú tígāo Hànyǔ tīngshuō nénglì fēicháng yǒu bāngzhù.",
    v: "Nói chuyện nhiều với người Trung Quốc rất có ích cho việc nâng cao khả năng nghe nói tiếng Hán.",
  },
  {
    id: "dy5",
    sec: "dy",
    h: "大家/{对于}/这个问题/的/看法/不一样。",
    p: "Dàjiā duìyú zhège wèntí de kànfǎ bù yíyàng.",
    v: "Cách nhìn của mọi người về vấn đề này không giống nhau.",
  },
  {
    id: "dy6",
    sec: "dy",
    h: "大家/{对}/这个问题/的/看法/不一样。",
    p: "Dàjiā duì zhège wèntí de kànfǎ bù yíyàng.",
    v: "Cách nhìn của mọi người về vấn đề này không giống nhau. (Có thể nói: dùng 对 thay cho 对于.)",
  },
  {
    id: "dy8",
    sec: "dy",
    h: "朋友们/{对}/我/很热情。",
    p: "Péngyoumen duì wǒ hěn rèqíng.",
    v: "Bạn bè rất nhiệt tình với tôi.",
  },
  {
    id: "dx2",
    sec: "dy",
    h: "*朋友们{对于}我很热情。",
    p: "Péngyoumen duìyú wǒ hěn rèqíng.",
    v: "✗ Không thể nói. 对于 không trực tiếp dẫn đối tượng là người (我), phải dùng 对.",
  },
  {
    id: "er1",
    sec: "er",
    h: "可是现在,/我就是想/学汉语,/想到中国——/这个/古老/{而}/年轻的/国家/去看看。",
    p: "Kěshì xiànzài, wǒ jiù shì xiǎng xué Hànyǔ, xiǎngdào Zhōngguó——zhège gǔlǎo ér niánqīng de guójiā qù kànkan.",
    v: "Nhưng bây giờ, tôi chỉ muốn học tiếng Trung, muốn đến Trung Quốc, đất nước vừa cổ xưa vừa trẻ trung này, để xem.",
  },
  {
    id: "er2",
    sec: "er",
    h: "她是/一个/聪明/{而}/美丽的/姑娘。",
    p: "Tā shì yí ge cōngmíng ér měilì de gūniang.",
    v: "Cô ấy là một cô gái thông minh và xinh đẹp.",
  },
  {
    id: "er3",
    sec: "er",
    h: "#这种水果/好看/{而}/不好吃。",
    p: "Zhè zhǒng shuǐguǒ hǎokàn ér bù hǎochī.",
    v: "Loại trái cây này đẹp mắt nhưng không ngon.",
  },
  {
    id: "er4",
    sec: "er",
    h: "我/选择/这家饭店,/花钱少/{而}/吃得好。",
    p: "Wǒ xuǎnzé zhè jiā fàndiàn, huā qián shǎo ér chī de hǎo.",
    v: "Tôi chọn nhà hàng này, tốn ít tiền mà ăn ngon.",
  },
  {
    id: "er5",
    sec: "er",
    h: "哈尔滨/还很冷,/{而}/中国南方/已经/春暖花开了。",
    p: "Hā’ěrbīn hái hěn lěng, ér Zhōngguó nánfāng yǐjīng chūnnuǎn-huākāi le.",
    v: "Cáp Nhĩ Tân vẫn còn rất lạnh, còn miền nam Trung Quốc đã xuân ấm hoa nở.",
  },
  {
    id: "zh1",
    sec: "zh",
    h: "父母/觉得/我的想法/是对的,/就/{只好}/同意了。",
    p: "Fùmǔ juéde wǒ de xiǎngfǎ shì duì de, jiù zhǐhǎo tóngyì le.",
    v: "Bố mẹ thấy suy nghĩ của tôi là đúng, đành đồng ý.",
  },
  {
    id: "zh2",
    sec: "zh",
    h: "半路上/忽然/下起了雨,/我/没带/雨伞,/{只好}/淋着雨/往回跑。",
    p: "Bànlù shang hūrán xià qǐ le yǔ, wǒ méi dài yǔsǎn, zhǐhǎo lín zhe yǔ wǎng huí pǎo.",
    v: "Giữa đường bỗng đổ mưa, tôi không mang ô, đành dầm mưa chạy về.",
  },
  {
    id: "zh3",
    sec: "zh",
    h: "#昨天晚上我回来时/已经没有公共汽车了,/{只好}/坐出租车。",
    p: "Zuótiān wǎnshang wǒ huílái shí yǐjīng méiyǒu gōnggòng qìchē le, zhǐhǎo zuò chūzūchē.",
    v: "Tối qua lúc tôi về đã hết xe buýt, đành đi taxi.",
  },
  {
    id: "zh4",
    sec: "zh",
    h: "我的手机/摔坏了,/{只好}/再买/一个。",
    p: "Wǒ de shǒujī shuāihuài le, zhǐhǎo zài mǎi yí ge.",
    v: "Điện thoại tôi rơi hỏng rồi, đành mua cái khác.",
  },
];
const MC: [string, string][] = [
  ["sh1", "终于|只好|一切"],
  ["sh2", "终于|只好|一下子"],
  ["sh3", "终于|一切|一下子"],
  ["gx1", "一年过|过年一|过一岁"],
  ["yx0", "如果|对于|一切"],
  ["yx1", "如果|对于|只好"],
  ["yx2", "如果|对于|只好"],
  ["yx3", "如果|对于|一切"],
  ["zy1", "如果|对于|而"],
  ["zy2", "如果|对于|一切"],
  ["zy3", "而|对于|如果"],
  ["zy4", "如果|而|对于"],
  ["yq1", "如果|果然|对于"],
  ["yq2", "如果|对于|而"],
  ["yq3", "如果|而|只好"],
  ["yq4", "如果|终于|果然"],
  ["rg1", "一切|对于|果然"],
  ["rg2", "果然|只好|一切"],
  ["rg3", "对于|果然|终于"],
  ["rg4", "终于|只好|一切"],
  ["rg5", "的吧|的了|的呢"],
  ["gr1", "如果|对于|一切"],
  ["gr2", "如果|对于|一切"],
  ["gr3", "如果|对于|而"],
  ["gr4", "对于|只好|一下子"],
  ["dy1", "终于|只好|一切"],
  ["dy2", "终于|而|只好"],
  ["dx1", "对于|如果|而"],
  ["dy3", "终于|只好|而"],
  ["dy4", "而|只好|果然"],
  ["dy5", "如果|终于|而"],
  ["dy6", "如果|终于|而"],
  ["dy8", "如果|终于|而"],
  ["dx2", "对于|终于|而"],
  ["er1", "如果|只好|果然"],
  ["er2", "如果|只好|终于"],
  ["er3", "终于|只好|如果"],
  ["er4", "如果|终于|对于"],
  ["er5", "如果|只好|果然"],
  ["zh1", "如果|对于|而"],
  ["zh2", "如果|对于|一切"],
  ["zh3", "对于|一切|一下子"],
  ["zh4", "对于|一切|而"],
];
const FIX: [string, string, string, string?][] = [
  [
    "说实话的,今天老师讲的我有的地方没听懂。",
    "“说实话” dùng trực tiếp ở đầu câu để dẫn vào phần sau, không thêm “的”.",
    "sh1",
  ],
  [
    "实话说,我也是第一次来这个地方。",
    "Cách nói cố định là “说实话”, không đảo thành “实话说”.",
    "sh2",
  ],
  [
    "说实话,我一点儿也想去。",
    "“一点儿也” dùng với phủ định: 一点儿也不想去.",
    "sh3",
  ],
  [
    "自由自在地去国外一年过。",
    "“过一年” (sống một năm) đứng sau địa điểm, không đảo: 去国外过一年.",
    "gx1",
  ],
  [
    "我的眼泪也流了出来一下子。",
    "“一下子” làm trạng ngữ, đứng trước động từ: 一下子流了出来.",
    "yx0",
  ],
  [
    "几年不见,他长一下子这么高了。",
    "“一下子” làm trạng ngữ, đứng trước động từ: 他一下子长这么高了.",
    "yx1",
  ],
  [
    "一过“五一”,天就热一下子起来了。",
    "“一下子” đứng trước cụm vị ngữ, không chen vào giữa: 天一下子就热起来了.",
    "yx2",
  ],
  [
    "她没走好,从楼梯上摔下来了一下子。",
    "“一下子” làm trạng ngữ, đứng trước động từ: 一下子从楼梯上摔下来了.",
    "yx3",
  ],
  [
    "我很早就希望能有机会来中国学习汉语,现在这个愿望实现了终于,心里有说不出的高兴。",
    "“终于” là phó từ, đứng trước động từ vị ngữ: 终于实现了.",
    "zy1",
  ],
  [
    "经过努力,他考上了终于大学。",
    "“终于” đứng trước động từ: 他终于考上了大学.",
    "zy2",
  ],
  [
    "我很早就想看看长城,今天我看到终于了。",
    "“终于” là phó từ, đứng trước động từ vị ngữ: 终于看到了.",
    "zy3",
  ],
  [
    "她当翻译的愿望实现终于了。",
    "“终于” đứng trước động từ: 终于实现了.",
    "zy4",
  ],
  [
    "这一切的都是瞒着我父母做的。",
    "“一切” thường đi với 都, không thêm “的” sau 一切.",
    "yq1",
  ],
  [
    "刚来时是有很多地方不习惯,但是现在都一切习惯了。",
    "“一切” làm chủ ngữ, đứng trước 都: 一切都习惯了.",
    "yq2",
  ],
  [
    "这里的一切的对我来说,都是那么有趣。",
    "“一切” làm chủ ngữ, không thêm “的” phía sau.",
    "yq3",
  ],
  [
    "我一切的手续都办好了,就等机票了。",
    "“一切” làm định ngữ bổ nghĩa danh từ thì không mang “的”.",
    "yq4",
  ],
  [
    "我是独生女,把这件事告诉父母如果,他们多半不会同意。",
    "“如果” đứng đầu phân câu giả thiết: 如果把这件事告诉父母.",
    "rg1",
  ],
  [
    "有问题如果,可以来找我。",
    "“如果” đứng đầu phân câu giả thiết: 如果有问题.",
    "rg2",
  ],
  [
    "你想学太极拳,如果就去报名吧。",
    "“如果” đứng đầu phân câu giả thiết: 如果你想学太极拳,…",
    "rg3",
  ],
  [
    "有时间,如果我一定去中国旅行。",
    "“如果” đứng ở đầu phân câu giả thiết: 如果有时间,…",
    "rg4",
  ],
  [
    "下雨的话如果,我们还去吗?",
    "“如果” đứng đầu vế giả thiết, “的话” đứng cuối vế đó: 如果下雨的话.",
    "rg5",
  ],
  [
    "我把出国留学的事告诉了父母,他们听了,不大果然愿意。",
    "“果然” đứng trước vị ngữ, phía trước “不大”: 果然不大愿意.",
    "gr1",
  ],
  [
    "听朋友说那个饭店的菜又好吃又便宜,我去吃了一次,不错果然。",
    "“果然” đứng trước tính từ: 果然不错.",
    "gr2",
  ],
  [
    "天气预报说今天有雨,你看,下起来果然了。",
    "“果然” đứng trước vị ngữ: 果然下起来了.",
    "gr3",
  ],
  [
    "大夫说吃了这种药我的病就会好的,我吃了药以后,病一天比一天好果然了。",
    "“果然” đứng trước vị ngữ: 果然病一天比一天好了.",
    "gr4",
  ],
  [
    "说实话,将来要做什么对于,我还没想好。",
    "“对于” đứng trước đối tượng: 对于将来要做什么.",
    "dy1",
  ],
  [
    "这个问题对于,大家都很感兴趣。",
    "“对于” đứng trước đối tượng: 对于这个问题.",
    "dy2",
  ],
  [
    "我们都对于这个问题感兴趣。",
    "“对于” ít kết hợp với phó từ (都) đứng trước nó. Sửa: 我们都对这个问题感兴趣 / 对于这个问题,我们都感兴趣.",
    "dx1",
    "我们都对这个问题感兴趣。|对于这个问题,我们都感兴趣。",
  ],
  ["工作对于,他是很认真的。", "“对于” đứng trước đối tượng: 对于工作.", "dy3"],
  [
    "多跟中国人谈话,提高汉语听说能力对于非常有帮助。",
    "“对于” đứng trước đối tượng: 对于提高汉语听说能力.",
    "dy4",
  ],
  [
    "大家这个问题对于的看法不一样。",
    "“对于” đứng trước đối tượng: 对于这个问题.",
    "dy5",
  ],
  [
    "大家这个问题对的看法不一样。",
    "“对” đứng trước đối tượng: 对这个问题.",
    "dy6",
  ],
  ["朋友们我对很热情。", "“对” đứng trước đối tượng: 对我很热情.", "dy8"],
  [
    "朋友们对于我很热情。",
    "“对于” không trực tiếp dẫn đối tượng là người (我); phải dùng “对”.",
    "dx2",
    "朋友们对我很热情。",
  ],
  [
    "可是现在,我就是想学汉语,想到中国——这个古老而的年轻国家去看看。",
    "“而” nối trực tiếp hai tính từ, rồi mới thêm “的”: 古老而年轻的国家.",
    "er1",
  ],
  [
    "她是一个聪明美丽而的姑娘。",
    "“而” đứng giữa hai tính từ: 聪明而美丽的姑娘.",
    "er2",
  ],
  [
    "这种水果好看不而好吃。",
    "“而” biểu thị chuyển ý, đứng trước vế sau: 好看而不好吃.",
    "er3",
  ],
  [
    "我选择这家饭店,花钱而少吃得好。",
    "“而” nối hai vế sau “花钱少”: 花钱少而吃得好.",
    "er4",
  ],
  [
    "哈尔滨还很冷,中国南方而已经春暖花开了。",
    "“而” biểu thị chuyển ý, đứng đầu vế sau: 而中国南方已经春暖花开了.",
    "er5",
  ],
  [
    "父母觉得我的想法是对的,就同意只好了。",
    "“只好” đứng trước động từ: 只好同意了.",
    "zh1",
  ],
  [
    "半路上忽然下起了雨,我没带雨伞,淋着雨只好往回跑。",
    "“只好” đứng trước động từ chính: 只好淋着雨往回跑.",
    "zh2",
  ],
  [
    "昨天晚上我回来时已经没有公共汽车了,坐只好出租车。",
    "“只好” đứng trước động từ: 只好坐出租车.",
    "zh3",
  ],
  [
    "我的手机摔坏了,只好买再一个。",
    "“再” đứng trước động từ: 再买一个; “只好” đứng trước cụm vị ngữ.",
    "zh4",
  ],
];
// Câu 不能说 (*) khi xếp câu sẽ dùng bản đã sửa ở đây
const ORDX: Record<string, string> = {
  dx1: "我们/都/{对}/这个问题/感兴趣。",
  dx2: "朋友们/{对}/我/很热情。",
};

// ===== DANH SÁCH TAB DỊCH (dùng cho code cũ) — mỗi nhóm = 1 điểm ngữ pháp =====
export const P: [string, string, string][][] = [
  [
    [
      "{1|说实话},今天老师讲的我有的地方没听懂。",
      "Shuō shíhuà, jīntiān lǎoshī jiǎng de wǒ yǒu de dìfang méi tīngdǒng.",
      "Nói thật, hôm nay có chỗ tôi không nghe hiểu những gì thầy giảng.",
    ],
    [
      "{1|说实话},我也是第一次来这个地方。",
      "Shuō shíhuà, wǒ yě shì dì-yī cì lái zhège dìfang.",
      "Nói thật, tôi cũng là lần đầu đến nơi này.",
    ],
    [
      "{1|说实话},我一点儿也不想去。",
      "Shuō shíhuà, wǒ yìdiǎnr yě bù xiǎng qù.",
      "Nói thật, tôi chẳng muốn đi chút nào.",
    ],
  ],
  [
    [
      "自由自在地去国外{1|过一年}。",
      "Zìyóu-zìzài de qù guówài guò yì nián.",
      "Tự do tự tại ra nước ngoài sống một năm.",
    ],
  ],
  [
    [
      "我的眼泪也{1|一下子}流了出来。",
      "Wǒ de yǎnlèi yě yíxiàzi liú le chūlái.",
      "Nước mắt tôi cũng bỗng chốc trào ra.",
    ],
    [
      "几年不见,他{1|一下子}长这么高了。",
      "Jǐ nián bú jiàn, tā yíxiàzi zhǎng zhème gāo le.",
      "Mấy năm không gặp, anh ấy bỗng chốc cao thế này rồi.",
    ],
    [
      "一过“五一”,天{1|一下子}就热起来了。",
      "Yí guò “Wǔ-Yī”, tiān yíxiàzi jiù rè qǐlái le.",
      "Vừa qua dịp 1/5, trời bỗng chốc nóng lên.",
    ],
    [
      "她没走好,{1|一下子}从楼梯上摔下来了。",
      "Tā méi zǒu hǎo, yíxiàzi cóng lóutī shang shuāi xiàlái le.",
      "Cô ấy bước không vững, bỗng chốc ngã từ cầu thang xuống.",
    ],
  ],
  [
    [
      "我很早就希望能有机会来中国学习汉语,现在这个愿望{1|终于}实现了,心里有说不出的高兴。",
      "Wǒ hěn zǎo jiù xīwàng néng yǒu jīhuì lái Zhōngguó xuéxí Hànyǔ, xiànzài zhège yuànwàng zhōngyú shíxiàn le, xīnli yǒu shuō bu chū de gāoxìng.",
      "Từ rất sớm tôi đã mong có cơ hội đến Trung Quốc học tiếng Trung, giờ ước nguyện này cuối cùng đã thành, trong lòng vui không nói nên lời.",
    ],
    [
      "经过努力,他{1|终于}考上了大学。",
      "Jīngguò nǔlì, tā zhōngyú kǎoshàng le dàxué.",
      "Qua nỗ lực, cuối cùng anh ấy đã đỗ đại học.",
    ],
    [
      "我很早就想看看长城,今天我{1|终于}看到了。",
      "Wǒ hěn zǎo jiù xiǎng kànkan Chángchéng, jīntiān wǒ zhōngyú kàndào le.",
      "Từ sớm tôi đã muốn xem Trường Thành, hôm nay cuối cùng tôi đã thấy rồi.",
    ],
    [
      "她当翻译的愿望{1|终于}实现了。",
      "Tā dāng fānyì de yuànwàng zhōngyú shíxiàn le.",
      "Ước nguyện làm phiên dịch của cô ấy cuối cùng đã thành hiện thực.",
    ],
  ],
  [
    [
      "从去年夏天起,我就忙着联系学校,办各种手续,可是,这{1|一切}都是瞒着我父母做的。",
      "Cóng qùnián xiàtiān qǐ, wǒ jiù mángzhe liánxì xuéxiào, bàn gè zhǒng shǒuxù, kěshì, zhè yíqiè dōu shì mánzhe wǒ fùmǔ zuò de.",
      "Từ mùa hè năm ngoái, tôi bận liên hệ trường, làm đủ loại thủ tục, nhưng tất cả những việc này đều giấu bố mẹ tôi mà làm.",
    ],
    [
      "刚来时是有很多地方不习惯,但是现在{1|一切}都习惯了。",
      "Gāng lái shí shì yǒu hěn duō dìfang bù xíguàn, dànshì xiànzài yíqiè dōu xíguàn le.",
      "Lúc mới đến quả có nhiều chỗ không quen, nhưng giờ mọi thứ đều quen rồi.",
    ],
    [
      "这里的{1|一切}对我来说,都是那么有趣。",
      "Zhèlǐ de yíqiè duì wǒ lái shuō, dōu shì nàme yǒuqù.",
      "Mọi thứ ở đây đối với tôi đều thú vị đến thế.",
    ],
    [
      "我{1|一切}手续都办好了,就等机票了。",
      "Wǒ yíqiè shǒuxù dōu bàn hǎo le, jiù děng jīpiào le.",
      "Tôi đã làm xong mọi thủ tục, chỉ chờ vé máy bay.",
    ],
  ],
  [
    [
      "我是独生女,{1|如果}把这件事告诉父母,他们多半不会同意。",
      "Wǒ shì dúshēngnǚ, rúguǒ bǎ zhè jiàn shì gàosu fùmǔ, tāmen duōbàn bú huì tóngyì.",
      "Tôi là con gái một, nếu nói chuyện này với bố mẹ, phần nhiều họ sẽ không đồng ý.",
    ],
    [
      "{1|如果}有问题,可以来找我。",
      "Rúguǒ yǒu wèntí, kěyǐ lái zhǎo wǒ.",
      "Nếu có vấn đề, có thể đến tìm tôi.",
    ],
    [
      "{1|如果}你想学太极拳,就去报名吧。",
      "Rúguǒ nǐ xiǎng xué tàijíquán, jiù qù bàomíng ba.",
      "Nếu bạn muốn học Thái cực quyền thì đi đăng ký đi.",
    ],
    [
      "{1|如果}有时间,我一定去中国旅行。",
      "Rúguǒ yǒu shíjiān, wǒ yídìng qù Zhōngguó lǚxíng.",
      "Nếu có thời gian, tôi nhất định đi du lịch Trung Quốc.",
    ],
    [
      "如果下雨{1|的话},我们还去吗?",
      "Rúguǒ xià yǔ de huà, wǒmen hái qù ma?",
      "Nếu trời mưa, chúng ta còn đi không?",
    ],
  ],
  [
    [
      "我把出国留学的事告诉了父母,他们听了,{1|果然}不大愿意。",
      "Wǒ bǎ chūguó liúxué de shì gàosu le fùmǔ, tāmen tīng le, guǒrán bú dà yuànyì.",
      "Tôi nói chuyện đi du học với bố mẹ, nghe xong, quả nhiên họ không mấy bằng lòng.",
    ],
    [
      "听朋友说那个饭店的菜又好吃又便宜,我去吃了一次,{1|果然}不错。",
      "Tīng péngyou shuō nàge fàndiàn de cài yòu hǎochī yòu piányi, wǒ qù chī le yí cì, guǒrán búcuò.",
      "Nghe bạn nói món ở nhà hàng đó vừa ngon vừa rẻ, tôi đi ăn một lần, quả nhiên không tệ.",
    ],
    [
      "天气预报说今天有雨,你看,{1|果然}下起来了。",
      "Tiānqì yùbào shuō jīntiān yǒu yǔ, nǐ kàn, guǒrán xià qǐlái le.",
      "Dự báo thời tiết nói hôm nay có mưa, bạn xem, quả nhiên mưa rồi.",
    ],
    [
      "大夫说吃了这种药我的病就会好的,我吃了药以后,{1|果然}病一天比一天好了。",
      "Dàifu shuō chī le zhè zhǒng yào wǒ de bìng jiù huì hǎo de, wǒ chī le yào yǐhòu, guǒrán bìng yì tiān bǐ yì tiān hǎo le.",
      "Bác sĩ nói uống thuốc này bệnh sẽ khỏi, sau khi uống thuốc, quả nhiên bệnh ngày một đỡ hơn.",
    ],
  ],
  [
    [
      "说实话,{1|对于}将来要做什么,我还没想好。",
      "Shuō shíhuà, duìyú jiānglái yào zuò shénme, wǒ hái méi xiǎnghǎo.",
      "Nói thật, về việc sau này làm gì, tôi vẫn chưa nghĩ kỹ.",
    ],
    [
      "{1|对于}这个问题,大家都很感兴趣。",
      "Duìyú zhège wèntí, dàjiā dōu hěn gǎn xìngqù.",
      "Về vấn đề này, mọi người đều rất quan tâm.",
    ],
    [
      "{1|对于}工作,他是很认真的。",
      "Duìyú gōngzuò, tā shì hěn rènzhēn de.",
      "Đối với công việc, anh ấy rất nghiêm túc.",
    ],
    [
      "多跟中国人谈话,{1|对于}提高汉语听说能力非常有帮助。",
      "Duō gēn Zhōngguórén tánhuà, duìyú tígāo Hànyǔ tīngshuō nénglì fēicháng yǒu bāngzhù.",
      "Nói chuyện nhiều với người Trung Quốc rất có ích cho việc nâng cao khả năng nghe nói tiếng Hán.",
    ],
    [
      "大家{1|对于}这个问题的看法不一样。",
      "Dàjiā duìyú zhège wèntí de kànfǎ bù yíyàng.",
      "Cách nhìn của mọi người về vấn đề này không giống nhau.",
    ],
    [
      "大家{1|对}这个问题的看法不一样。",
      "Dàjiā duì zhège wèntí de kànfǎ bù yíyàng.",
      "Cách nhìn của mọi người về vấn đề này không giống nhau. (Có thể nói: dùng 对 thay cho 对于.)",
    ],
    [
      "朋友们{1|对}我很热情。",
      "Péngyoumen duì wǒ hěn rèqíng.",
      "Bạn bè rất nhiệt tình với tôi.",
    ],
  ],
  [
    [
      "可是现在,我就是想学汉语,想到中国——这个古老{1|而}年轻的国家去看看。",
      "Kěshì xiànzài, wǒ jiù shì xiǎng xué Hànyǔ, xiǎngdào Zhōngguó——zhège gǔlǎo ér niánqīng de guójiā qù kànkan.",
      "Nhưng bây giờ, tôi chỉ muốn học tiếng Trung, muốn đến Trung Quốc, đất nước vừa cổ xưa vừa trẻ trung này, để xem.",
    ],
    [
      "她是一个聪明{1|而}美丽的姑娘。",
      "Tā shì yí ge cōngmíng ér měilì de gūniang.",
      "Cô ấy là một cô gái thông minh và xinh đẹp.",
    ],
    [
      "这种水果好看{1|而}不好吃。",
      "Zhè zhǒng shuǐguǒ hǎokàn ér bù hǎochī.",
      "Loại trái cây này đẹp mắt nhưng không ngon.",
    ],
    [
      "我选择这家饭店,花钱少{1|而}吃得好。",
      "Wǒ xuǎnzé zhè jiā fàndiàn, huā qián shǎo ér chī de hǎo.",
      "Tôi chọn nhà hàng này, tốn ít tiền mà ăn ngon.",
    ],
    [
      "哈尔滨还很冷,{1|而}中国南方已经春暖花开了。",
      "Hā’ěrbīn hái hěn lěng, ér Zhōngguó nánfāng yǐjīng chūnnuǎn-huākāi le.",
      "Cáp Nhĩ Tân vẫn còn rất lạnh, còn miền nam Trung Quốc đã xuân ấm hoa nở.",
    ],
  ],
  [
    [
      "父母觉得我的想法是对的,就{1|只好}同意了。",
      "Fùmǔ juéde wǒ de xiǎngfǎ shì duì de, jiù zhǐhǎo tóngyì le.",
      "Bố mẹ thấy suy nghĩ của tôi là đúng, đành đồng ý.",
    ],
    [
      "半路上忽然下起了雨,我没带雨伞,{1|只好}淋着雨往回跑。",
      "Bànlù shang hūrán xià qǐ le yǔ, wǒ méi dài yǔsǎn, zhǐhǎo lín zhe yǔ wǎng huí pǎo.",
      "Giữa đường bỗng đổ mưa, tôi không mang ô, đành dầm mưa chạy về.",
    ],
    [
      "昨天晚上我回来时已经没有公共汽车了,{1|只好}坐出租车。",
      "Zuótiān wǎnshang wǒ huílái shí yǐjīng méiyǒu gōnggòng qìchē le, zhǐhǎo zuò chūzūchē.",
      "Tối qua lúc tôi về đã hết xe buýt, đành đi taxi.",
    ],
    [
      "我的手机摔坏了,{1|只好}再买一个。",
      "Wǒ de shǒujī shuāihuài le, zhǐhǎo zài mǎi yí ge.",
      "Điện thoại tôi rơi hỏng rồi, đành mua cái khác.",
    ],
  ],
];

// ===== HẾT DỮ LIỆU =====

const M: Record<string, E> = Object.fromEntries(S.map((s) => [s.id, s]));
const clean = (h: string) => h.replace(/[{}*&#]/g, "");
const plain = (h: string) => clean(h).replace(/\//g, "");
const keyOf = (h: string) => h.match(/\{(.+?)\}/)?.[1] ?? "";
const norm = (s: string) => s.replace(/[\s，。,.？?！!“”":：、；;—\-]/g, "");
const shuffle = <T,>(a: T[]) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const blank = (h: string) => {
  const m = h.replace(/[*&#/]/g, "").match(/^(.*?)\{(.+?)\}(.*)$/);
  return m ? m[1] + "＿＿＿＿" + m[3] : plain(h);
};

const Hl = ({ h }: { h: string }) => {
  const m = h.replace(/[*&#/]/g, "").match(/^(.*?)\{(.+?)\}(.*)$/);
  if (!m) return <>{plain(h)}</>;
  return (
    <>
      {m[1]}
      <span className="rounded bg-sky-100 px-0.5 font-semibold text-sky-700">
        {m[2]}
      </span>
      {m[3]}
    </>
  );
};

const Info = ({ s }: { s: E }) => (
  <div className="mt-2 space-y-0.5 text-sm">
    <div className="text-stone-500">{s.p}</div>
    <div className="text-stone-700">{s.v}</div>
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3 rounded-sm border border-stone-200 bg-white p-4">
    {children}
  </div>
);
const Btn = ({
  onClick,
  children,
  kind = "main",
}: {
  onClick: () => void;
  children: React.ReactNode;
  kind?: "main" | "ghost";
}) => (
  <button
    onClick={onClick}
    className={
      "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
      (kind === "main"
        ? "bg-stone-800 text-white hover:bg-stone-700"
        : "border border-stone-300 text-stone-600 hover:bg-stone-100")
    }
  >
    {children}
  </button>
);
const Verdict = ({
  ok,
  children,
}: {
  ok: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={
      "mt-3 rounded-lg border p-3 text-sm " +
      (ok
        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
        : "border-rose-200 bg-rose-50 text-rose-800")
    }
  >
    {children}
  </div>
);

// ===== 1. TRẮC NGHIỆM =====
function MCTab() {
  const [seed, setSeed] = useState(0);
  const qs = useMemo(
    () =>
      MC.map(([id, d]) => {
        const s = M[id];
        const neg = s.h[0] === "*";
        const k = neg ? "对" : keyOf(s.h);
        return { s, neg, k, opts: shuffle([k, ...d.split("|")]) };
      }),
    [seed],
  );
  const [ans, setAns] = useState<Record<number, string>>({});
  const [chk, setChk] = useState(false);
  const score = qs.filter((q, i) => ans[i] === q.k).length;
  return (
    <>
      {qs.map((q, i) => (
        <Card key={i + "-" + seed}>
          <div className="text-lg text-stone-800">
            {i + 1}. {blank(q.s.h)}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {q.opts.map((o) => {
              const sel = ans[i] === o;
              let cls = "border-stone-300 text-stone-700 hover:bg-stone-100";
              if (chk && o === q.k)
                cls = "border-emerald-400 bg-emerald-50 text-emerald-800";
              else if (chk && sel)
                cls = "border-rose-400 bg-rose-50 text-rose-800";
              else if (sel) cls = "border-sky-400 bg-sky-50 text-sky-800";
              return (
                <button
                  key={o}
                  disabled={chk}
                  onClick={() => setAns({ ...ans, [i]: o })}
                  className={"rounded-lg border px-4 py-1.5 text-base " + cls}
                >
                  {o}
                </button>
              );
            })}
          </div>
          {chk && (
            <div className="mt-3 text-lg text-stone-800">
              {q.neg ? (
                <>
                  <span className="text-stone-400 line-through">
                    {plain(q.s.h)}
                  </span>
                  <div>{plain(q.s.h).replace("对于", "对")}</div>
                  <div className="mt-2 text-sm text-stone-500">
                    {q.s.p.replace("duìyú", "duì")}
                  </div>
                  <div className="text-sm text-stone-700">{q.s.v}</div>
                </>
              ) : (
                <>
                  <Hl h={q.s.h} />
                  <Info s={q.s} />
                </>
              )}
            </div>
          )}
        </Card>
      ))}
      <div className="flex items-center gap-3">
        <Btn onClick={() => setChk(true)}>Kiểm tra</Btn>
        <Btn
          kind="ghost"
          onClick={() => {
            setAns({});
            setChk(false);
            setSeed(seed + 1);
          }}
        >
          Làm lại
        </Btn>
        {chk && (
          <span className="text-sm text-stone-600">
            Đúng {score}/{qs.length}
          </span>
        )}
      </div>
    </>
  );
}

// ===== 2. SẮP XẾP CÂU =====
function Ord({ s, n }: { s: E; n: number }) {
  const neg = s.h[0] === "*";
  const src = neg ? ORDX[s.id] : s.h;
  const ch = useMemo(() => clean(src).split("/"), [src]);
  const init = () => shuffle(ch.map((_, i) => i));
  const [pool, setPool] = useState<number[]>(init);
  const [ans, setAns] = useState<number[]>([]);
  const [chk, setChk] = useState(false);
  const ok = ans.map((i) => ch[i]).join("") === ch.join("");
  const chip = "rounded-lg border px-3 py-1 text-base ";
  return (
    <Card>
      <div className="text-sm text-stone-500">
        {n}. {neg ? "Xếp thành câu đúng (dùng 对, không dùng 对于)" : s.v}
      </div>
      <div className="mt-3 flex min-h-11 flex-wrap gap-2 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-2">
        {ans.map((i) => (
          <button
            key={i}
            onClick={() => {
              setAns(ans.filter((x) => x !== i));
              setPool([...pool, i]);
              setChk(false);
            }}
            className={chip + "border-sky-300 bg-sky-50 text-sky-800"}
          >
            {ch[i]}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {pool.map((i) => (
          <button
            key={i}
            onClick={() => {
              setPool(pool.filter((x) => x !== i));
              setAns([...ans, i]);
              setChk(false);
            }}
            className={
              chip +
              "border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
            }
          >
            {ch[i]}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <Btn onClick={() => setChk(true)}>Kiểm tra</Btn>
        <Btn
          kind="ghost"
          onClick={() => {
            setPool(init());
            setAns([]);
            setChk(false);
          }}
        >
          Làm lại
        </Btn>
      </div>
      {chk && (
        <Verdict ok={ok}>
          {ok ? "Đúng!" : "Chưa đúng. Đáp án:"}
          <div className="mt-1 text-lg text-stone-800">
            <Hl h={src} />
          </div>
          <div className="text-stone-500">
            {neg ? s.p.replace("duìyú", "duì") : s.p}
          </div>
        </Verdict>
      )}
    </Card>
  );
}
const OrdTab = () => (
  <>
    {S.map((s, i) => (
      <Ord key={s.id} s={s} n={i + 1} />
    ))}
  </>
);

// ===== 3. SỬA CÂU SAI =====
function Fix({
  item,
  n,
}: {
  item: [string, string, string, string?];
  n: number;
}) {
  const [w, why, id, alt] = item;
  const s = M[id];
  const rights = alt ? alt.split("|") : [plain(s.h)];
  const [val, setVal] = useState(w);
  const [r, setR] = useState<"" | "ok" | "no" | "show">("");
  return (
    <Card>
      <div className="text-sm text-stone-500">{n}. Sửa câu sai</div>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          setR("");
        }}
        className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-lg text-stone-800 focus:border-sky-400 focus:outline-none"
      />
      <div className="mt-3 flex gap-2">
        <Btn
          onClick={() =>
            setR(rights.some((x) => norm(x) === norm(val)) ? "ok" : "no")
          }
        >
          Kiểm tra
        </Btn>
        <Btn
          kind="ghost"
          onClick={() => {
            setVal(w);
            setR("");
          }}
        >
          Làm lại
        </Btn>
        <Btn kind="ghost" onClick={() => setR("show")}>
          Xem đáp án
        </Btn>
      </div>
      {r && (
        <Verdict ok={r === "ok"}>
          {r === "ok" ? "Đúng!" : r === "no" ? "Chưa đúng. Đáp án:" : "Đáp án:"}
          <div className="mt-1 text-lg text-stone-800">
            {alt ? rights.join("  /  ") : <Hl h={s.h} />}
          </div>
          <div className="text-stone-500">
            {alt ? s.p.replace("duìyú", "duì") : s.p}
          </div>
          <div className="mt-1 text-stone-700">{why}</div>
        </Verdict>
      )}
    </Card>
  );
}
const FixTab = () => (
  <>
    {FIX.map((f, i) => (
      <Fix key={i} item={f} n={i + 1} />
    ))}
  </>
);

// ===== 4. ĐẶT TỪ ĐÚNG VỊ TRÍ =====
function Place({ s, n }: { s: E; n: number }) {
  const raw = s.h.slice(1).split("/");
  const ix = raw.findIndex((x) => x.includes("{"));
  const rest = raw
    .filter((_, j) => j !== ix)
    .map((x) => x.replace(/[{}]/g, ""));
  const [pick, setPick] = useState<number | null>(null);
  return (
    <Card>
      <div className="text-sm text-stone-500">
        {n}. Đặt{" "}
        <span className="rounded bg-sky-100 px-1 font-semibold text-sky-700">
          {keyOf(s.h)}
        </span>{" "}
        vào vị trí thích hợp — {s.v}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-y-2 text-lg text-stone-800">
        {Array.from({ length: rest.length + 1 }, (_, i) => (
          <span key={i} className="flex items-center">
            <button
              disabled={pick !== null}
              onClick={() => setPick(i)}
              className={
                "mx-1 h-7 w-7 rounded-full border text-sm " +
                (pick === null
                  ? "border-stone-300 text-stone-500 hover:bg-sky-50"
                  : i === ix
                    ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                    : pick === i
                      ? "border-rose-400 bg-rose-50 text-rose-800"
                      : "border-stone-200 text-stone-300")
              }
            >
              {"ABCDEFGHI"[i]}
            </button>
            {rest[i]}
          </span>
        ))}
      </div>
      {pick !== null && (
        <Verdict ok={pick === ix}>
          {pick === ix ? "Đúng!" : `Chưa đúng. Đáp án: ${"ABCDEFGHI"[ix]}`}
          <div className="mt-1 text-lg text-stone-800">
            <Hl h={s.h} />
          </div>
          <div className="text-stone-500">{s.p}</div>
          <Btn kind="ghost" onClick={() => setPick(null)}>
            Làm lại
          </Btn>
        </Verdict>
      )}
    </Card>
  );
}
const PlaceTab = () => (
  <>
    {S.filter((s) => s.h[0] === "#").map((s, i) => (
      <Place key={s.id} s={s} n={i + 1} />
    ))}
  </>
);

// ===== 5. DỊCH (placeholder — thay bằng code cũ, dùng dữ liệu P ở đầu file) =====
function TrTab() {
  const flat = P.flat();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <>
      {flat.map(([h, p, v], i) => (
        <Card key={i}>
          <div className="text-stone-800">
            {i + 1}. {v}
          </div>
          <button
            onClick={() => setOpen({ ...open, [i]: !open[i] })}
            className="mt-2 text-sm text-sky-700 hover:underline"
          >
            {open[i] ? "Ẩn đáp án" : "Xem đáp án"}
          </button>
          {open[i] && (
            <div className="mt-1">
              <div className="text-lg text-stone-800">
                {h.replace(/\{1\|(.+?)\}/g, "$1")}
              </div>
              <div className="text-sm text-stone-500">{p}</div>
            </div>
          )}
        </Card>
      ))}
    </>
  );
}

// ===== 6. DANH SÁCH CÂU =====
function ListTab() {
  return (
    <>
      {SEC.map((sc) => (
        <div key={sc.k} className="mb-6">
          <h2 className="text-lg font-semibold text-stone-800">{sc.t}</h2>
          <p className="mb-2 text-sm text-stone-600">{sc.e}</p>
          {S.filter((s) => s.sec === sc.k).map((s) => {
            const bad = s.h[0] === "*";
            return (
              <details
                key={s.id}
                className="group mb-1.5 rounded-lg border border-stone-200 bg-white px-3 py-2"
              >
                <summary className="cursor-pointer list-none text-lg text-stone-800">
                  {bad && (
                    <span className="mr-1 font-semibold text-rose-600">
                      ✗ *
                    </span>
                  )}
                  <Hl h={s.h} />
                </summary>
                <Info s={s} />
              </details>
            );
          })}
        </div>
      ))}
    </>
  );
}

// ===== APP =====
const TABS: [string, () => JSX.Element][] = [
  ["Trắc nghiệm", MCTab],
  ["Sắp xếp câu", OrdTab],
  ["Sửa câu sai", FixTab],
  ["Đặt từ", PlaceTab],
  ["Dịch", TrTab],
  ["Danh sách câu", ListTab],
];

export default function App() {
  const [t, setT] = useState(0);
  const Cur = TABS[t][1];
  return (
    <div className="min-h-screen text-stone-800">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-xl font-semibold">
          汉语教程 第三册上 · 第一课 注释 & 词语用法
        </h1>
        <p className="mb-4 text-sm text-stone-500">
          Luyện tập từ các câu ví dụ ở phần Notes và Usage
        </p>
        <div className="mb-4 flex flex-wrap gap-2 bg-stone-50 py-3">
          {TABS.map(([name], i) => (
            <button
              key={name}
              onClick={() => setT(i)}
              className={
                "rounded-lg px-3 py-1.5 text-sm font-medium " +
                (t === i
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-100")
              }
            >
              {name}
            </button>
          ))}
        </div>
        <Cur key={t} />
      </div>
    </div>
  );
}
