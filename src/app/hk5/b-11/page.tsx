"use client";

import { useState } from "react";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function Page() {
  const [showChinese, setShowChinese] = useState(true);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showVi, setShowVi] = useState(true);
  return (
    <div className="ztai__dochieu flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <h2 className="border-t-3 border-b-3 mb-5 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          第11课：我是跟旅游团一起来的。
        </h2>
        <div className="ztai__dochieu__bar">
          <button
            type="button"
            className="ztai__dochieu__btn"
            aria-pressed={!showChinese}
            onClick={() => setShowChinese((v) => !v)}
          >
            {showChinese ? "Tắt tiếng Trung" : "Bật tiếng Trung"}
          </button>
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

        <div>
          <table className="ztai__table">
            <thead>
              <tr>
                <th>No.</th>
                {showChinese && <th>Tiếng Trung</th>}
                {showPinyin && <th>Pinyin</th>}
                {showVi && <th>Tiếng Việt / Ghi chú</th>}
              </tr>
            </thead>
            <tbody>
              {showChinese && (
                <tr>
                  <td
                    colSpan={
                      1 +
                      Number(showChinese) +
                      Number(showPinyin) +
                      Number(showVi)
                    }
                    className="ztai__zh text-rose-800"
                  >
                    （一）我是跟旅游团一起来的。
                  </td>
                </tr>
              )}
              {(showChinese || showVi) && (
                <tr>
                  <td
                    colSpan={
                      1 +
                      Number(showChinese) +
                      Number(showPinyin) +
                      Number(showVi)
                    }
                    className="ztai__zh text-stale-600"
                  >
                    {showChinese && (
                      <>
                        （丹尼丝是王老师两年前的学生，她带了一个旅游团来中国旅游，今天她来看王老师……）
                      </>
                    )}
                    {showVi && (
                      <p className="ztai__vi">
                        (Denise là học sinh của thầy Vương cách đây hai năm, cô
                        ấy dẫn một đoàn du lịch đến Trung Quốc du lịch, hôm nay
                        cô ấy đến thăm thầy Vương...)
                      </p>
                    )}
                  </td>
                </tr>
              )}
              <tr>
                <td>1</td>
                {showChinese && (
                  <td className="ztai__zh">
                    丹尼丝：王老师，您好！好久不见了。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Wáng lǎoshī, nín hǎo! Hǎojiǔ bú jiàn le.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Chào thầy Vương! Lâu rồi không gặp thầy.
                  </td>
                )}
              </tr>
              <tr>
                <td>2</td>
                {showChinese && (
                  <td className="ztai__zh">
                    王老师：丹尼丝！你是什么时候来的？
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Dānnísī! Nǐ shì shénme shíhou lái de?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Thầy Vương: Denise! Em đến từ khi nào vậy?
                  </td>
                )}
              </tr>
              <tr>
                <td>3</td>
                {showChinese && (
                  <td className="ztai__zh">丹尼丝：前天刚到的。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">Dānnísī: Qiántiān gāng dào de.</td>
                )}
                {showVi && (
                  <td className="ztai__vi">Denise: Em vừa mới đến hôm kia.</td>
                )}
              </tr>
              <tr>
                <td>4</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：是来学习的吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Shì lái xuéxí de ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Thầy Vương: Em đến để học phải không?
                  </td>
                )}
              </tr>
              <tr>
                <td>5</td>
                {showChinese && (
                  <td className="ztai__zh">丹尼丝：不是，是来旅行的。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Bú shì, shì lái lǚxíng de.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">Denise: Không ạ, em đến du lịch.</td>
                )}
              </tr>
              <tr>
                <td>6</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：一个人来的吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Yí ge rén lái de ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">Thầy Vương: Em đi một mình à?</td>
                )}
              </tr>
              <tr>
                <td>7</td>
                {showChinese && (
                  <td className="ztai__zh">
                    丹尼丝：不是，我是跟旅游团一起来的。我当翻译，也是导游。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Bú shì, wǒ shì gēn lǚyóutuán yìqǐ lái de. Wǒ dāng
                    fānyì, yě shì dǎoyóu.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Không ạ, em đi cùng đoàn du lịch. Em làm phiên dịch,
                    đồng thời cũng là hướng dẫn viên.
                  </td>
                )}
              </tr>
              <tr>
                <td>8</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：你已经工作了？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Nǐ yǐjīng gōngzuò le?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">Thầy Vương: Em đã đi làm rồi à?</td>
                )}
              </tr>
              <tr>
                <td>9</td>
                {showChinese && (
                  <td className="ztai__zh">丹尼丝：没有，我还在读研究生。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Méiyǒu, wǒ hái zài dú yánjiūshēng.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Chưa ạ, em vẫn đang học cao học.
                  </td>
                )}
              </tr>
              <tr>
                <td>10</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：是在打工吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">Wáng lǎoshī: Shì zài dǎgōng ma?</td>
                )}
                {showVi && (
                  <td className="ztai__vi">Thầy Vương: Em đang làm thêm à?</td>
                )}
              </tr>
              <tr>
                <td>11</td>
                {showChinese && (
                  <td className="ztai__zh">
                    丹尼丝：是的，利用假期到一家旅行社打工。他们组织了一个旅游团，老板就让我陪他们来了。他知道我需要经常来中国收集资料，所以，一有来中国的旅游团，他就安排我陪团来。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Shì de, lìyòng jiàqī dào yì jiā lǚxíngshè dǎgōng.
                    Tāmen zǔzhī le yí ge lǚyóutuán, lǎobǎn jiù ràng wǒ péi tāmen
                    lái le. Tā zhīdào wǒ xūyào jīngcháng lái Zhōngguó shōují
                    zīliào, suǒyǐ, yì yǒu lái Zhōngguó de lǚyóutuán, tā jiù
                    ānpái wǒ péi tuán lái.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Vâng ạ, em tranh thủ kỳ nghỉ đến làm thêm tại một
                    công ty du lịch. Họ tổ chức một đoàn du lịch, nên ông chủ
                    bảo em đi cùng đoàn. Ông ấy biết em cần thường xuyên đến
                    Trung Quốc thu thập tài liệu, vì vậy hễ có đoàn du lịch đến
                    Trung Quốc là ông ấy sắp xếp cho em đi cùng.
                  </td>
                )}
              </tr>
              <tr>
                <td>12</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：这个老板还真不错。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Zhège lǎobǎn hái zhēn búcuò.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Thầy Vương: Ông chủ này quả thật khá tốt.
                  </td>
                )}
              </tr>
              <tr>
                <td>13</td>
                {showChinese && (
                  <td className="ztai__zh">丹尼丝：是。他给了我很多帮助。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Shì. Tā gěi le wǒ hěn duō bāngzhù.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Vâng. Ông ấy đã giúp đỡ em rất nhiều.
                  </td>
                )}
              </tr>
              <tr>
                <td>14</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：去别的地方了吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Qù bié de dìfang le ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Thầy Vương: Em đã đi nơi nào khác chưa?
                  </td>
                )}
              </tr>
              <tr>
                <td>15</td>
                {showChinese && (
                  <td className="ztai__zh">
                    丹尼丝：去了。我们先在香港玩儿了三天，又去了深圳，是从深圳过来的。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Qù le. Wǒmen xiān zài Xiānggǎng wánr le sān tiān,
                    yòu qù le Shēnzhèn, shì cóng Shēnzhèn guòlái de.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Rồi ạ. Trước tiên chúng em chơi ở Hồng Kông ba ngày,
                    sau đó lại đến Thâm Quyến. Chúng em đi từ Thâm Quyến sang
                    đây.
                  </td>
                )}
              </tr>
              <tr>
                <td>16</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：坐飞机来的吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Zuò fēijī lái de ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Thầy Vương: Em đến bằng máy bay à?
                  </td>
                )}
              </tr>
              <tr>
                <td>17</td>
                {showChinese && (
                  <td className="ztai__zh">
                    丹尼丝：不是，坐高铁来的。旅游团的人都想坐坐中国的高铁，看看铁路两边的风光。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Bú shì, zuò gāotiě lái de. Lǚyóutuán de rén dōu
                    xiǎng zuò zuo Zhōngguó de gāotiě, kànkan tiělù liǎngbiān de
                    fēngguāng.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Không ạ, chúng em đi tàu cao tốc đến. Mọi người
                    trong đoàn đều muốn thử đi tàu cao tốc của Trung Quốc và
                    ngắm phong cảnh hai bên đường sắt.
                  </td>
                )}
              </tr>
              <tr>
                <td>18</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：什么时候回去？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Shénme shíhou huíqù?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">Thầy Vương: Khi nào em về?</td>
                )}
              </tr>
              <tr>
                <td>19</td>
                {showChinese && (
                  <td className="ztai__zh">
                    丹尼丝：旅游团后天就回去了。我跟老板商量好了，晚回去几天，我要到孔子的故乡去一趟。今天下午是自由活动时间，所以来看看老师。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Dānnísī: Lǚyóutuán hòutiān jiù huíqù le. Wǒ gēn lǎobǎn
                    shāngliang hǎo le, wǎn huíqù jǐ tiān, wǒ yào dào Kǒngzǐ de
                    gùxiāng qù yí tàng. Jīntiān xiàwǔ shì zìyóu huódòng shíjiān,
                    suǒyǐ lái kànkan lǎoshī.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Denise: Đoàn du lịch sẽ về vào ngày kia. Em đã bàn bạc với
                    ông chủ rồi, em sẽ về muộn vài ngày. Em muốn đến thăm quê
                    hương của Khổng Tử một chuyến. Chiều nay là thời gian hoạt
                    động tự do, vì vậy em đến thăm thầy.
                  </td>
                )}
              </tr>
              <tr>
                <td>20</td>
                {showChinese && (
                  <td className="ztai__zh">王老师：在这儿吃了晚饭再走吧。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wáng lǎoshī: Zài zhèr chī le wǎnfàn zài zǒu ba.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Thầy Vương: Ăn tối ở đây rồi hãy đi nhé.
                  </td>
                )}
              </tr>
              {showChinese && (
                <tr>
                  <td
                    colSpan={
                      1 +
                      Number(showChinese) +
                      Number(showPinyin) +
                      Number(showVi)
                    }
                    className="ztai__zh text-rose-800"
                  >
                    （二）你的汉语是在哪儿学的
                  </td>
                </tr>
              )}
              <tr>
                <td>21</td>
                {showChinese && (
                  <td className="ztai__zh">
                    田芳：麦克，你的汉语是在哪儿学的？
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Màikè, nǐ de Hànyǔ shì zài nǎr xué de?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Mike, tiếng Trung của bạn học ở đâu vậy?
                  </td>
                )}
              </tr>
              <tr>
                <td>22</td>
                {showChinese && (
                  <td className="ztai__zh">麦克：在美国学的。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">Màikè: Zài Měiguó xué de.</td>
                )}
                {showVi && <td className="ztai__vi">Mike: Tôi học ở Mỹ.</td>}
              </tr>
              <tr>
                <td>23</td>
                {showChinese && (
                  <td className="ztai__zh">田芳：学了多长时间了？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Xué le duō cháng shíjiān le?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Bạn học được bao lâu rồi?
                  </td>
                )}
              </tr>
              <tr>
                <td>24</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：我是从去年暑假才开始学习汉语的，学了一年多了。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Wǒ shì cóng qùnián shǔjià cái kāishǐ xuéxí Hànyǔ de,
                    xué le yì nián duō le.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Tôi bắt đầu học tiếng Trung từ kỳ nghỉ hè năm ngoái,
                    đến nay đã học hơn một năm rồi.
                  </td>
                )}
              </tr>
              <tr>
                <td>25</td>
                {showChinese && (
                  <td className="ztai__zh">田芳：是在大学学的吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Shì zài dàxué xué de ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Bạn học ở trường đại học à?
                  </td>
                )}
              </tr>
              <tr>
                <td>26</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：不是。是在一个语言学校学的。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Bú shì. Shì zài yí ge yǔyán xuéxiào xué de.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Không. Tôi học ở một trường ngoại ngữ.
                  </td>
                )}
              </tr>
              <tr>
                <td>27</td>
                {showChinese && (
                  <td className="ztai__zh">田芳：是中国老师教的吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Shì Zhōngguó lǎoshī jiāo de ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Có phải giáo viên Trung Quốc dạy không?
                  </td>
                )}
              </tr>
              <tr>
                <td>28</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：有中国老师，也有美国老师。你觉得我的汉语说得怎么样？
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Yǒu Zhōngguó lǎoshī, yě yǒu Měiguó lǎoshī. Nǐ juéde
                    wǒ de Hànyǔ shuō de zěnmeyàng?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Có giáo viên Trung Quốc, cũng có giáo viên Mỹ. Bạn
                    thấy tôi nói tiếng Trung thế nào?
                  </td>
                )}
              </tr>
              <tr>
                <td>29</td>
                {showChinese && (
                  <td className="ztai__zh">
                    田芳：马马虎虎。中国人一听就知道你是老外。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Mǎmǎhūhū. Zhōngguó rén yì tīng jiù zhīdào nǐ shì
                    lǎowài.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Bình thường thôi. Người Trung Quốc vừa nghe là
                    biết bạn là người nước ngoài.
                  </td>
                )}
              </tr>
              <tr>
                <td>30</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：一看也知道我是老外呀，高高的鼻子，黄黄的头发，蓝蓝的眼睛。我知道，我的发音和声调都不太好。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Yí kàn yě zhīdào wǒ shì lǎowài ya, gāogāo de bízi,
                    huánghuáng de tóufa, lánlán de yǎnjing. Wǒ zhīdào, wǒ de
                    fāyīn hé shēngdiào dōu bú tài hǎo.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Nhìn một cái cũng biết tôi là người nước ngoài mà: mũi
                    cao, tóc vàng, mắt xanh. Tôi biết phát âm và thanh điệu của
                    mình đều chưa tốt lắm.
                  </td>
                )}
              </tr>
              <tr>
                <td>31</td>
                {showChinese && (
                  <td className="ztai__zh">
                    田芳：我们互相帮助好不好？我帮你练汉语，希望你帮我练练英语。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Wǒmen hùxiāng bāngzhù hǎo bu hǎo? Wǒ bāng nǐ liàn
                    Hànyǔ, xīwàng nǐ bāng wǒ liànlian Yīngyǔ.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Chúng ta giúp đỡ lẫn nhau nhé? Tôi giúp bạn
                    luyện tiếng Trung, hy vọng bạn giúp tôi luyện tiếng Anh.
                  </td>
                )}
              </tr>
              <tr>
                <td>32</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：好啊。不过，我的英语也马马虎虎。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Hǎo a. Búguò, wǒ de Yīngyǔ yě mǎmǎhūhū.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Được chứ. Nhưng tiếng Anh của tôi cũng chỉ bình thường
                    thôi.
                  </td>
                )}
              </tr>
              <tr>
                <td>33</td>
                {showChinese && (
                  <td className="ztai__zh">田芳：什么？你不是美国人吗？</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tián Fāng: Shénme? Nǐ bú shì Měiguó rén ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Điền Phương: Sao cơ? Bạn không phải người Mỹ à?
                  </td>
                )}
              </tr>
              <tr>
                <td>34</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：我爸爸是美国人，妈妈是意大利人，我十岁才到的美国。可以当你的老师吗？
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Wǒ bàba shì Měiguó rén, māma shì Yìdàlì rén, wǒ shí
                    suì cái dào de Měiguó. Kěyǐ dāng nǐ de lǎoshī ma?
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Bố tôi là người Mỹ, mẹ là người Ý. Đến năm mười tuổi
                    tôi mới đến Mỹ. Tôi có thể làm giáo viên của bạn không?
                  </td>
                )}
              </tr>
              <tr>
                <td>35</td>
                {showChinese && (
                  <td className="ztai__zh">田芳：马马虎虎吧。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">Tián Fāng: Mǎmǎhūhū ba.</td>
                )}
                {showVi && (
                  <td className="ztai__vi">Điền Phương: Cũng tạm vậy.</td>
                )}
              </tr>
              <tr>
                <td>36</td>
                {showChinese && (
                  <td className="ztai__zh">
                    麦克：不，不能马马虎虎，我们都要认真学习。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Màikè: Bù, bù néng mǎmǎhūhū, wǒmen dōu yào rènzhēn xuéxí.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Mike: Không, không thể học qua loa được, chúng ta đều phải
                    học tập nghiêm túc.
                  </td>
                )}
              </tr>
              <tr>
                <td colSpan={4}>Bài khoá phụ</td>
              </tr>
              <tr>
                <td>1</td>
                {showChinese && (
                  <td className="ztai__zh">
                    我是前天到的北京，两年前曾经在中国学过汉语，是王老师的学生。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wǒ shì qiántiān dào de Běijīng, liǎng nián qián céngjīng zài
                    Zhōngguó xué guo Hànyǔ, shì Wáng lǎoshī de xuésheng.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Tôi đến Bắc Kinh hôm kia. Hai năm trước, tôi từng học tiếng
                    Trung ở Trung Quốc và là học trò của thầy Vương.
                  </td>
                )}
              </tr>
              <tr>
                <td>2</td>
                {showChinese && (
                  <td className="ztai__zh">这次我不是来学习的，是来旅行的。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Zhè cì wǒ bú shì lái xuéxí de, shì lái lǚxíng de.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Lần này tôi không đến để học mà là đến để du lịch.
                  </td>
                )}
              </tr>
              <tr>
                <td>3</td>
                {showChinese && (
                  <td className="ztai__zh">
                    我不是一个人来的，是跟旅行团一起来的。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wǒ bú shì yí ge rén lái de, shì gēn lǚxíngtuán yìqǐ lái de.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Tôi không đi một mình mà đi cùng đoàn du lịch.
                  </td>
                )}
              </tr>
              <tr>
                <td>4</td>
                {showChinese && (
                  <td className="ztai__zh">我是旅行团的导游和翻译。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wǒ shì lǚxíngtuán de dǎoyóu hé fānyì.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Tôi là hướng dẫn viên kiêm phiên dịch của đoàn du lịch.
                  </td>
                )}
              </tr>
              <tr>
                <td>5</td>
                {showChinese && (
                  <td className="ztai__zh">
                    我现在还没有工作，在读研究生，研究的课题是《孔子与中国》，业余时间或寒暑假到一个旅行社去打工。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wǒ xiànzài hái méiyǒu gōngzuò, zài dú yánjiūshēng, yánjiū de
                    kètí shì “Kǒngzǐ yǔ Zhōngguó”, yèyú shíjiān huò hánshǔjià
                    dào yí ge lǚxíngshè qù dǎgōng.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Hiện giờ tôi vẫn chưa đi làm, đang học cao học. Đề tài
                    nghiên cứu của tôi là “Khổng Tử và Trung Quốc”. Trong thời
                    gian rảnh hoặc kỳ nghỉ hè, nghỉ đông, tôi đến làm thêm tại
                    một công ty du lịch.
                  </td>
                )}
              </tr>
              <tr>
                <td>6</td>
                {showChinese && (
                  <td className="ztai__zh">
                    这次，他们组织了一个旅游团，老板就让我陪团来了。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Zhè cì, tāmen zǔzhī le yí ge lǚyóutuán, lǎobǎn jiù ràng wǒ
                    péi tuán lái le.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Lần này, họ tổ chức một đoàn du lịch, ông chủ liền bảo tôi
                    đi cùng đoàn.
                  </td>
                )}
              </tr>
              <tr>
                <td>7</td>
                {showChinese && (
                  <td className="ztai__zh">
                    他知道我需要经常来中国收集资料，所以，一有来中国的旅游团，就安排我陪团来。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Tā zhīdào wǒ xūyào jīngcháng lái Zhōngguó shōují zīliào,
                    suǒyǐ, yì yǒu lái Zhōngguó de lǚyóutuán, jiù ānpái wǒ péi
                    tuán lái.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Ông ấy biết tôi cần thường xuyên đến Trung Quốc thu thập tài
                    liệu, vì vậy, hễ có đoàn du lịch đến Trung Quốc là ông ấy
                    sắp xếp cho tôi đi cùng đoàn.
                  </td>
                )}
              </tr>
              <tr>
                <td>8</td>
                {showChinese && (
                  <td className="ztai__zh">
                    我们先到的香港，在香港玩儿了三天，又去了深圳，前天是从深圳坐高铁过来的。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wǒmen xiān dào de Xiānggǎng, zài Xiānggǎng wánr le sān tiān,
                    yòu qù le Shēnzhèn, qiántiān shì cóng Shēnzhèn zuò gāotiě
                    guòlái de.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Trước tiên chúng tôi đến Hồng Kông, chơi ở đó ba ngày, sau
                    đó lại đến Thâm Quyến. Hôm kia chúng tôi đi tàu cao tốc từ
                    Thâm Quyến đến đây.
                  </td>
                )}
              </tr>
              <tr>
                <td>9</td>
                {showChinese && (
                  <td className="ztai__zh">
                    原来打算坐飞机，但是旅行团的人都没有坐过中国的高铁，很想坐坐，看看铁路两边的风光。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Yuánlái dǎsuàn zuò fēijī, dànshì lǚyóutuán de rén dōu méiyǒu
                    zuò guo Zhōngguó de gāotiě, hěn xiǎng zuòzuo, kànkan tiělù
                    liǎngbiān de fēngguāng.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Ban đầu dự định đi máy bay, nhưng mọi người trong đoàn đều
                    chưa từng đi tàu cao tốc của Trung Quốc, rất muốn thử đi và
                    ngắm phong cảnh hai bên đường sắt.
                  </td>
                )}
              </tr>
              <tr>
                <td>10</td>
                {showChinese && (
                  <td className="ztai__zh">旅行团后天就回去了。</td>
                )}
                {showPinyin && (
                  <td className="ztai__py">Lǚyóutuán hòutiān jiù huíqù le.</td>
                )}
                {showVi && (
                  <td className="ztai__vi">Đoàn du lịch ngày kia sẽ trở về.</td>
                )}
              </tr>
              <tr>
                <td>11</td>
                {showChinese && (
                  <td className="ztai__zh">
                    我跟老板说好了，晚回去几天，等送他们上了飞机，我要到孔子的故乡去一趟。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Wǒ gēn lǎobǎn shuō hǎo le, wǎn huíqù jǐ tiān, děng sòng
                    tāmen shàng le fēijī, wǒ yào dào Kǒngzǐ de gùxiāng qù yí
                    tàng.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Tôi đã nói với ông chủ rồi, tôi sẽ về muộn vài ngày. Đợi
                    tiễn mọi người lên máy bay, tôi muốn đến thăm quê hương của
                    Khổng Tử một chuyến.
                  </td>
                )}
              </tr>
              <tr>
                <td>12</td>
                {showChinese && (
                  <td className="ztai__zh">
                    今天下午是自由活动时间，来看看王老师。
                  </td>
                )}
                {showPinyin && (
                  <td className="ztai__py">
                    Jīntiān xiàwǔ shì zìyóu huódòng shíjiān, lái kànkan Wáng
                    lǎoshī.
                  </td>
                )}
                {showVi && (
                  <td className="ztai__vi">
                    Chiều nay là thời gian hoạt động tự do, nên tôi đến thăm
                    thầy Vương.
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>

        {/* bảng từ vựng */}
        <table className="ztai__table" style={{ width: "fit-content" }}>
          <tbody>
            <tr>
              <td width="283">
                <p className="ztai__zh">【 số ng&agrave;y +天前 】</p>
              </td>
              <td width="414">
                <p>【 số ng&agrave;y + trước 】</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">三天前</p>
              </td>
              <td width="414">
                <p>Ba ng&agrave;y trước</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">前天</p>
              </td>
              <td width="414">
                <p>H&ocirc;m kia</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">昨天</p>
              </td>
              <td width="414">
                <p>H&ocirc;m qua</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">今天</p>
              </td>
              <td width="414">
                <p>H&ocirc;m nay</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">明天</p>
              </td>
              <td width="414">
                <p>Ng&agrave;y mai</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">后天</p>
              </td>
              <td width="414">
                <p>Ng&agrave;y kia, ng&agrave;y mốt</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">大后天</p>
              </td>
              <td width="414">
                <p>ng&agrave;y k&igrave;a; ba ng&agrave;y sau</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">四后天</p>
              </td>
              <td width="414">
                <p>bốn ng&agrave;y sau</p>
              </td>
            </tr>
            <tr>
              <td width="283">
                <p className="ztai__zh">【 số ng&agrave;y +后天 】</p>
              </td>
              <td width="414">
                <p>【 số ng&agrave;y + sau 】</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>Từ vựng phần 练习 trang 221</p>

        <table className="ztai__table" style={{ width: "fit-content" }}>
          <tbody>
            <tr>
              <td>
                <p>dǎoy&oacute;u</p>
              </td>
              <td>
                <p className="ztai__zh">导游</p>
              </td>
              <td>
                <p>hướng dẫn vi&ecirc;n du lịch</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>d&agrave;oli&uacute;</p>
              </td>
              <td>
                <p className="ztai__zh">倒流</p>
              </td>
              <td>
                <p>chảy ngược, tr&agrave;o ngược</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>xūy&agrave;o</p>
              </td>
              <td>
                <p className="ztai__zh">需要</p>
              </td>
              <td>
                <p>cần, cần phải</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>xīy&agrave;o</p>
              </td>
              <td>
                <p className="ztai__zh">西药</p>
              </td>
              <td>
                <p>thuốc t&acirc;y</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>l&igrave;y&ograve;ng</p>
              </td>
              <td>
                <p className="ztai__zh">利用</p>
              </td>
              <td>
                <p>lợi dụng, sử dụng, tận dụng</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>lǐy&oacute;u</p>
              </td>
              <td>
                <p className="ztai__zh">理由</p>
              </td>
              <td>
                <p>l&yacute; do</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>lǎobǎn</p>
              </td>
              <td>
                <p className="ztai__zh">老板</p>
              </td>
              <td>
                <p>&ocirc;ng chủ, b&agrave; chủ, chủ tiệm</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>rǎolu&agrave;n</p>
              </td>
              <td>
                <p className="ztai__zh">扰乱</p>
              </td>
              <td>
                <p>quấy rối, l&agrave;m rối loạn</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>y&aacute;njiū</p>
              </td>
              <td>
                <p className="ztai__zh">研究</p>
              </td>
              <td>
                <p>nghi&ecirc;n cứu</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>yān jiǔ</p>
              </td>
              <td>
                <p className="ztai__zh">烟酒</p>
              </td>
              <td>
                <p>thuốc l&aacute; v&agrave; rượu</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>z&igrave;y&oacute;u</p>
              </td>
              <td>
                <p className="ztai__zh">自由</p>
              </td>
              <td>
                <p>tự do</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>j&iacute; y&oacute;u</p>
              </td>
              <td>
                <p className="ztai__zh">集邮</p>
              </td>
              <td>
                <p>sưu tập tem</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
