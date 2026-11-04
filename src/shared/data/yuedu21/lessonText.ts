import type { LessonNote, LessonParagraph } from "@shared/types/yuedu-lesson";

export const lessonHeader = {
  unit: "Đơn vị 2",
  chapterZh: "一、过年",
  title: "Đón Tết",
  series: "Hán ngữ hệ liệt Đọc hiểu - Tập 1",
  wordCount: 427,
};

// Mỗi chữ Hán có pinyin được viết dạng 汉字{pinyin}. Dấu câu viết trực tiếp.
export const lessonParagraphs: LessonParagraph[] = [
  {
    chinese:
      "今天{jīntiān}是{shì}大年三十{dànián sānshí}。一大早{yídàzǎo}她{tā}就{jiù}开始{kāishǐ}忙{máng}起来{qǐlai}。整理{zhěnglǐ}房间{fángjiān}，去{qù}超市{chāoshì}给{gěi}公婆{gōngpó}买{mǎi}礼物{lǐwù}。孩子{háizi}穿着{chuānzhe}一身{yìshēn}漂亮{piàoliang}的{de}新衣服{xīnyīfu}，在{zài}她{tā}身边{shēnbiān}跑来跑去{pǎolai pǎoqu}，非常{fēicháng}兴奋{xīngfèn}地{de}等待{děngdài}着{zhe}。",
    vietnamese:
      "Hôm nay là đêm giao thừa. Từ sáng sớm cô ấy đã bắt đầu bận rộn. Dọn dẹp phòng ốc, đi siêu thị mua quà cho bố mẹ chồng. Đứa trẻ mặc bộ quần áo mới rất đẹp, chạy nhảy quanh bên mẹ, hào hứng chờ đợi.",
  },
  {
    chinese:
      "在{zài}中国{Zhōngguó}，过年{guònián}时{shí}所有{suǒyǒu}的{de}人{rén}都{dōu}要{yào}回到{huídào}父母{fùmǔ}身边{shēnbiān}，一家人{yìjiārén}团聚{tuánjù}在{zài}一起{yìqǐ}。所以{suǒyǐ}，今天{jīntiān}晚上{wǎnshang}他们{tāmen}一家三口{yìjiā sānkǒu}要{yào}回{huí}公婆家{gōngpójiā}去{qù}吃{chī}年夜饭{niányèfàn}。",
    vietnamese:
      "Ở Trung Quốc, khi đón Tết, mọi người đều phải trở về bên cha mẹ, cả nhà sum họp bên nhau. Vì vậy, tối nay cả gia đình ba người họ sẽ về nhà bố mẹ chồng ăn cơm tất niên.",
  },
  {
    chinese:
      "平时{píngshí}她{tā}的{de}丈夫{zhàngfu}工作{gōngzuò}很忙{hěn máng}，买菜{mǎicài}、做饭{zuòfàn}、洗衣服{xǐyīfu}、照顾{zhàogù}孩子{háizi}等{děng}家务{jiāwù}大部分{dàbùfen}是{shì}她{tā}做{zuò}。每天{měitiān}早上{zǎoshang}给{gěi}一家人{yìjiārén}准备{zhǔnbèi}好{hǎo}简单{jiǎndān}的{de}早饭{zǎofàn}，然后{ránhòu}送{sòng}孩子{háizi}去{qù}幼儿园{yòu'éryuán}，送完{sòngwán}孩子{háizi}自己{zìjǐ}才{cái}去{qù}上班{shàngbān}。晚上{wǎnshang}下了班{xiàle bān}，先{xiān}把{bǎ}孩子{háizi}接{jiē}回家{huíjiā}，然后{ránhòu}马上{mǎshàng}进{jìn}厨房{chúfáng}做{zuò}晚饭{wǎnfàn}。有时{yǒushí}丈夫{zhàngfu}会{huì}在一旁{zài yìpáng}帮助{bāngzhù}她{tā}。吃晚饭{chī wǎnfàn}是{shì}一家人{yìjiārén}最{zuì}愉快{yúkuài}的{de}时候{shíhou}。她{tā}和{hé}丈夫{zhàngfu}聊家常{liáojiācháng}，谈论{tánlùn}各自{gèzì}单位{dānwèi}里{lǐ}的{de}新闻{xīnwén}。孩子{háizi}也{yě}在一旁{zài yìpáng}凑热闹{còu rènao}，比比画画{bǐbi huàhuà}地{de}给{gěi}爸爸{bàba}妈妈{māma}讲{jiǎng}幼儿园{yòu'éryuán}里{lǐ}发生{fāshēng}的{de}事情{shìqing}：那个{nàge}叫{jiào}丽丽{Lìli}的{de}小朋友{xiǎopéngyou}哭鼻子{kū bízi}了{le}，冬冬{Dōngdong}又{yòu}打架{dǎjià}了{le}……孩子{háizi}天真{tiānzhēn}的{de}话语{huàyǔ}和{hé}认真{rènzhēn}的{de}神态{shéntài}，常常{chángcháng}逗{dòu}得{de}夫妻俩{fūqīliǎ}哈哈大笑{hāhā dàxiào}。",
    vietnamese:
      "Thường ngày, chồng cô ấy làm việc rất bận, còn phần lớn việc nhà như mua rau, nấu cơm, giặt quần áo, chăm sóc con cái đều do cô làm. Mỗi sáng cô chuẩn bị bữa sáng đơn giản cho cả nhà, rồi đưa con đến trường mẫu giáo, đưa con xong mới đi làm. Tối tan làm, cô đón con về nhà trước rồi lập tức vào bếp nấu bữa tối. Có khi chồng cũng vào phụ giúp. Bữa tối là lúc cả nhà vui vẻ nhất. Hai vợ chồng trò chuyện chuyện nhà, bàn về tin tức ở cơ quan mỗi người. Đứa trẻ cũng góp vui bên cạnh, khoa tay múa chân kể cho bố mẹ nghe chuyện xảy ra ở trường mẫu giáo: bạn nhỏ tên Lệ Lệ khóc nhè rồi, Đông Đông lại đánh nhau... Những lời ngây thơ và vẻ mặt nghiêm túc của con thường khiến hai vợ chồng cười ha hả.",
  },
  {
    chinese:
      "下午{xiàwǔ}四点多{sìdiǎn duō}，丈夫{zhàngfu}下班{xiàbān}回家{huíjiā}了{le}。一家人{yìjiārén}穿戴整齐{chuāndài zhěngqí}，欢天喜地{huāntiān xǐdì}地{de}出{chū}了{le}门{mén}。在{zài}婆家{píjia}，老少三代{lǎoshào sāndài}十几口{shíjǐkǒu}人{rén}围坐{wéizuò}在{zài}一张{yìzhāng}大圆桌{dàyuánzhuō}旁{páng}，一边{yìbiān}看{kàn}中央电视台{Zhōngyāng Diànshìtái}的{de}“春节联欢晚会{Chūnjié Liánhuān Wǎnhuì}”，一边{yìbiān}热热闹闹{rèrenàonao}地{de}吃{chī}团圆饭{tuányuánfàn}过年{guònián}。",
    vietnamese:
      "Hơn bốn giờ chiều, chồng cô tan làm về nhà. Cả nhà ăn mặc chỉnh tề, vui vẻ hớn hở ra khỏi nhà. Ở nhà bố mẹ chồng, ba thế hệ già trẻ với hơn mười người ngồi quanh một chiếc bàn tròn lớn, vừa xem Gala mừng Xuân của Đài Truyền hình Trung ương, vừa ăn bữa cơm sum họp đón năm mới thật náo nhiệt.",
  },
];

export const lessonNotes: LessonNote[] = [
  {
    term: "大年三十",
    meaningZh: "中国农历一年中的最后一天，即除夕。",
    meaningVi: "Ngày cuối cùng của năm âm lịch Trung Quốc, tức đêm giao thừa.",
  },
  {
    term: "超市",
    meaningZh: "超级市场的简称。",
    meaningVi: "Cách gọi tắt của siêu thị.",
  },
];
