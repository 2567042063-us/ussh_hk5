"use client";

import { useState } from "react";

type Row = { zh: string; py: string; vi: string };

const TITLE = {
  zh: "一、过年",
  py: "Yī, Guònián",
  vi: "1. Ăn Tết (Đón năm mới)",
};

const ROWS: Row[] = [
  {
    zh: "今天是大年三十。一大早她就开始忙起来。整理房间，去超市给公婆买礼物。孩子穿着一身漂亮的新衣服，在她身边跑来跑去，非常兴奋地等待着。",
    py: "Jīntiān shì dànián sānshí. Yī dàzǎo tā jiù kāishǐ máng qǐlái. Zhěnglǐ fángjiān, qù chāoshì gěi gōngpó mǎi lǐwù. Háizi chuānzhe yī shēn piàoliang de xīn yīfu, zài tā shēnbiān pǎo lái pǎo qù, fēicháng xīngfèn de děngdàizhe.",
    vi: "Hôm nay là ngày 30 Tết. Sáng sớm cô ấy đã bắt đầu bận rộn. Dọn dẹp nhà cửa, đi siêu thị mua quà cho bố mẹ chồng. Đứa trẻ mặc một bộ quần áo mới thật đẹp, chạy nhảy quanh cô ấy, vô cùng phấn khích chờ đợi.",
  },
  {
    zh: "在中国，过年时所有的人都要回到父母身边，一家人团聚在一起。所以，今天晚上他们一家三口要回公婆家去吃年夜饭。",
    py: "Zài Zhōngguó, guònián shí suǒyǒu de rén dōu yào huídào fùmǔ shēnbiān, yī jiā rén tuánjù zài yīqǐ. Suǒyǐ, jīntiān wǎnshang tāmen yī jiā sān kǒu yào huí gōngpó jiā qù chī niányèfàn.",
    vi: "Ở Trung Quốc, dịp Tết mọi người đều phải trở về bên cha mẹ, cả nhà đoàn tụ bên nhau. Vì vậy, tối nay ba người trong gia đình họ sẽ về nhà bố mẹ chồng ăn cơm tất niên.",
  },
  {
    zh: "平时她的丈夫工作很忙，买菜、做饭、洗衣服、照顾孩子等家务大部分是她做。每天早上给一家人准备好简单的早饭，然后送孩子去幼儿园，送完孩子自己才去上班。晚上下了班，先把孩子接回家，然后马上进厨房做晚饭。有时丈夫会在一旁帮助她。吃晚饭是一家人最愉快的时候。她和丈夫聊家常，谈论各自单位里的新闻。孩子也在一旁凑热闹，比比画画地给爸爸妈妈讲幼儿园里发生的事情：那个叫丽丽的小朋友哭鼻子了，冬冬又打架了……孩子天真的话语和认真的神态，常常逗得夫妻俩哈哈大笑。",
    py: "Píngshí tā de zhàngfu gōngzuò hěn máng, mǎicài, zuòfàn, xǐ yīfu, zhàogù háizi děng jiāwù dà bùfèn shì tā zuò. Měitiān zǎoshang gěi yī jiā rén zhǔnbèi hǎo jiǎndān de zǎofàn, ránhòu sòng háizi qù yòu'éryuán, sòng wán háizi zìjǐ cái qù shàngbān. Wǎnshang xiàle bān, xiān bǎ háizi jiē huí jiā, ránhòu mǎshàng jìn chúfáng zuò wǎnfàn. Yǒushí zhàngfu huì zài yīpáng bāngzhù tā. Chī wǎnfàn shì yī jiā rén zuì yúkuài de shíhou. Tā hé zhàngfu liáo jiācháng, tánlùn gèzì dānwèi lǐ de xīnwén. Háizi yě zài yīpáng còu rènao, bǐbi huàhuà de gěi bàba māma jiǎng yòu'éryuán lǐ fāshēng de shìqing: nàge jiào Lìlì de xiǎopéngyǒu kū bízi le, Dōngdong yòu dǎjià le…… Háizi tiānzhēn de huàyǔ hé rènzhēn de shéntài, chángcháng dòu de fūqī liǎ hāhā dàxiào.",
    vi: "Bình thường chồng cô ấy bận rộn công việc, việc mua rau, nấu cơm, giặt quần áo, chăm sóc con cái... phần lớn việc nhà là do cô ấy làm. Mỗi sáng chuẩn bị bữa sáng đơn giản cho cả nhà, rồi đưa con đến trường mẫu giáo, đưa xong con cô ấy mới đi làm. Tối tan làm, trước tiên đón con về nhà, rồi lập tức vào bếp nấu cơm tối. Có lúc chồng sẽ ở bên cạnh giúp cô ấy. Ăn cơm tối là lúc vui vẻ nhất của cả nhà. Cô ấy và chồng trò chuyện việc nhà, thảo luận tin tức ở cơ quan của mỗi người. Đứa trẻ cũng ở bên cạnh hóng chuyện, vừa nói vừa ra điệu bộ kể cho bố mẹ nghe chuyện xảy ra ở trường mẫu giáo: bạn nhỏ tên Lệ Lệ khóc nhè rồi, Đông Đông lại đánh nhau rồi... Lời nói ngây thơ và vẻ mặt nghiêm túc của đứa trẻ thường khiến vợ chồng cười phá lên.",
  },
  {
    zh: "下午四点多，丈夫下班回家了。一家人穿戴整齐，欢天喜地地出了门。在婆家，老少三代十几口人围坐在一张大圆桌旁，一边看中央电视台的“春节联欢晚会”，一边热热闹闹地吃团圆饭过年。",
    py: "Xiàwǔ sì diǎn duō, zhàngfu xiàbān huí jiā le. Yī jiā rén chuāndài zhěngqí, huāntiānxǐdì de chūle mén. Zài pójiā, lǎoshào sān dài shí jǐ kǒu rén wéizuò zài yī zhāng dà yuánzhuō páng, yībiān kàn Zhōngyāng Diànshìtái de “Chūnjié Liánhuān Wǎnhuì”, yībiān rèrènaonào de chī tuányuánfàn guònián.",
    vi: "Hơn 4 giờ chiều, chồng tan làm về nhà. Cả nhà ăn mặc chỉnh tề, vui mừng hớn hở ra khỏi nhà. Ở nhà bố mẹ chồng, ba thế hệ già trẻ hơn mười người ngồi quây quần bên một chiếc bàn tròn lớn, vừa xem “Gala Xuân Vãn” của Đài Truyền hình Trung ương, vừa ăn cơm đoàn tụ náo nhiệt để đón năm mới.",
  },
];

// const CSS = `

// `;

export default function GuoNian() {
  const [showPinyin, setShowPinyin] = useState(true);
  const [showVi, setShowVi] = useState(true);

  return (
    <div className="ztai__dochieu">
      {/* <style>{CSS}</style> */}

      <div className="ztai__dochieu__bar">
        <button
          type="button"
          className="ztai__dochieu__btn"
          aria-pressed={!showPinyin}
          onClick={() => setShowPinyin((v) => !v)}
        >
          {showPinyin ? "Tắt pinyin" : "Bật pinyin"}
        </button>
        <button
          type="button"
          className="ztai__dochieu__btn"
          aria-pressed={!showVi}
          onClick={() => setShowVi((v) => !v)}
        >
          {showVi ? "Tắt tiếng Việt" : "Bật tiếng Việt"}
        </button>
      </div>

      <table className="ztai__dochieu__table">
        <thead>
          <tr>
            <th>汉字</th>
            {showPinyin && <th>Pinyin</th>}
            {showVi && <th>Tiếng Việt</th>}
          </tr>
        </thead>
        <tbody>
          <tr className="ztai__dochieu__title">
            <td className="ztai__zh">{TITLE.zh}</td>
            {showPinyin && <td className="ztai__py">{TITLE.py}</td>}
            {showVi && <td>{TITLE.vi}</td>}
          </tr>
          {ROWS.map((r, i) => (
            <tr key={i}>
              <td className="ztai__zh">{r.zh}</td>
              {showPinyin && <td className="ztai__py">{r.py}</td>}
              {showVi && <td>{r.vi}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
