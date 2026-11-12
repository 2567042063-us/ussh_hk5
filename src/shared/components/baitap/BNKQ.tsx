/* ───────────────────────── Component ───────────────────────── */

export default function Template() {
  return (
    <div className="wrap">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <header>
        <h1 className="border-t-3 border-b-3 mb-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Bổ ngữ kết quả (结果补语): tổng hợp từ Bài 4 và Bài 12
        </h1>
        <p style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
          汉语教程 (第3版) 第二册 上. Đã rà toàn bộ bài khóa, bài khóa phụ, từ
          mới, ngữ pháp, bài tập và bài đọc của hai bài. Tổng cộng{" "}
          <b>83 cụm động từ + bổ ngữ</b>.
        </p>
      </header>

      <section
        className="card my-5 border-slate-200 p-5 dark:border-slate-200/10"
        style={{ background: "#fff" }}
      >
        <h2>Quy tắc chung của bổ ngữ kết quả (Bài 4)</h2>
        <div className="rules">
          <div className="rule">
            <b>Khẳng định</b>
            <span className="ztai__zh text-2xl leading-[1.55] chip2">动词 + BNKQ (+ 了)</span>
            <br />
            <span className="ztai__zh text-2xl leading-[1.55]">我做完了。</span> <br />
            <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]" style={{ fontSize: "12px" }}>
              Wǒ zuòwán le.
            </span>
          </div>
          <div className="rule">
            <b>Phủ định</b>
            <span className="ztai__zh text-2xl leading-[1.55] chip2">没(有) + 动词 + BNKQ</span> (bỏ 了)
            <br />
            <span className="ztai__zh text-2xl leading-[1.55]">这课课文我没有看懂。</span> <br />
            <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]" style={{ fontSize: "12px" }}>
              Zhè kè kèwén wǒ méiyǒu kàndǒng.
            </span>
          </div>
          <div className="rule">
            <b>Câu hỏi chính phản</b>
            <span className="ztai__zh text-2xl leading-[1.55] chip2">动词 + BNKQ (+宾语) 了没有?</span>
            <br />
            <span className="ztai__zh text-2xl leading-[1.55]">你看见玛丽了没有?</span> <br />
            <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]" style={{ fontSize: "12px" }}>
              Nǐ kànjiàn Mǎlì le méiyǒu?
            </span>
          </div>
          <div className="rule">
            <b>Vị trí tân ngữ và 了</b>Tân ngữ đứng sau bổ ngữ; 了 đứng sau bổ
            ngữ, trước tân ngữ.
            <br />
            <span className="ztai__zh text-2xl leading-[1.55]">我做错了两道题。</span> <br />
            <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]" style={{ fontSize: "12px" }}>
              Wǒ zuòcuòle liǎng dào tí.
            </span>
          </div>
        </div>
      </section>

      <section
        className="card my-5 border-slate-200 p-5 dark:border-slate-200/10"
        style={{ background: "#fff" }}
      >
        <h2>Danh sách các bổ ngữ</h2>
        <div className="tblwrap">
          <table className="ztai__table sumtbl w-full">
            <thead>
              <tr>
                <th>Bổ ngữ</th>
                <th>Pinyin</th>
                <th>Nghĩa</th>
                <th>Ví dụ cụm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">完</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">wán</td>
                <td>xong</td>
                <td className="ztai__zh text-2xl leading-[1.55]">做完, 看完, 吃完</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">懂</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǒng</td>
                <td>hiểu</td>
                <td className="ztai__zh text-2xl leading-[1.55]">听懂, 看懂</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">见</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiàn</td>
                <td>thấy</td>
                <td className="ztai__zh text-2xl leading-[1.55]">看见, 听见</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">开</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kāi</td>
                <td>mở ra</td>
                <td className="ztai__zh text-2xl leading-[1.55]">打开, 开开</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">上</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shang</td>
                <td>khép lại, dính vào</td>
                <td className="ztai__zh text-2xl leading-[1.55]">关上, 合上, 写上, 穿上</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">到</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dào</td>
                <td>đạt, tới, đến mốc</td>
                <td className="ztai__zh text-2xl leading-[1.55]">回到, 找到, 买到, 学到, 睡到</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">给</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gěi</td>
                <td>trao cho</td>
                <td className="ztai__zh text-2xl leading-[1.55]">交给, 还给, 送给, 借给</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">成₁</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chéng</td>
                <td>biến thành</td>
                <td className="ztai__zh text-2xl leading-[1.55]">写成, 说成, 改成, 换成</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">成₂</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chéng</td>
                <td>làm xong, thành công</td>
                <td className="ztai__zh text-2xl leading-[1.55]">去成, 做成, 建成</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">好</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">hǎo</td>
                <td>hoàn thiện</td>
                <td className="ztai__zh text-2xl leading-[1.55]">洗好, 睡好, 办好, 准备好</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">对 / 错</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">duì / cuò</td>
                <td>đúng / sai</td>
                <td className="ztai__zh text-2xl leading-[1.55]">做对, 写错, 答错, 看错</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">熟</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shú</td>
                <td>thuộc, thạo</td>
                <td className="ztai__zh text-2xl leading-[1.55]">念熟</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">干净</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gānjìng</td>
                <td>sạch</td>
                <td className="ztai__zh text-2xl leading-[1.55]">洗干净</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">在</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zài</td>
                <td>ở tại</td>
                <td className="ztai__zh text-2xl leading-[1.55]">放在, 挂在, 写在, 停在</td>
              </tr>
              <tr>
                <td className="ztai__zh text-2xl leading-[1.55] sz">着</td>
                <td className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zháo</td>
                <td>đạt mục đích</td>
                <td className="ztai__zh text-2xl leading-[1.55]">找着, 买着, 睡着</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="toc" aria-label="Nhảy đến nhóm bổ ngữ">
          <a href="#g1">
            <span className="ztai__zh text-2xl leading-[1.55]">完</span>
          </a>
          <a href="#g2">
            <span className="ztai__zh text-2xl leading-[1.55]">懂</span>
          </a>
          <a href="#g3">
            <span className="ztai__zh text-2xl leading-[1.55]">见</span>
          </a>
          <a href="#g4">
            <span className="ztai__zh text-2xl leading-[1.55]">开 / 上 </span>
          </a>
          <a href="#g5">
            <span className="ztai__zh text-2xl leading-[1.55]">到</span>
          </a>
          <a href="#g6">
            <span className="ztai__zh text-2xl leading-[1.55]">给</span>
          </a>
          <a href="#g7">
            <span className="ztai__zh text-2xl leading-[1.55]">成</span>
          </a>
          <a href="#g8">
            <span className="ztai__zh text-2xl leading-[1.55]">好</span>
          </a>
          <a href="#g9">
            <span className="ztai__zh text-2xl leading-[1.55]">对</span>
          </a>
          <a href="#g10">
            <span className="ztai__zh text-2xl leading-[1.55]">熟</span>
          </a>
          <a href="#g11">
            <span className="ztai__zh text-2xl leading-[1.55]">在</span>
          </a>
          <a href="#g12">
            <span className="ztai__zh text-2xl leading-[1.55]">着</span>
          </a>
          <a href="#g13">
            <span className="ztai__zh text-2xl leading-[1.55]">早 / 晚</span>
          </a>
        </div>
      </section>

      <div className="tblwrap">
        <table className="ztai__table w-full">
          <thead>
            <tr>
              <th>STT</th>
              <th>Cụm động từ + bổ ngữ</th>
              <th>Câu ví dụ trong sách</th>
              <th>Giải thích và bổ ngữ khác đi kèm</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grp" id="g1">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">完 wán</span>
                  <span className="gm">xong, hoàn tất hành động</span>
                </div>
                <div className="gd">
                  V + 完: hành động kết thúc, làm xong. Phủ định 没(有) + V + 完
                  (bỏ 了); hỏi 做完了没有?; trả lời 做完了 / 还没做完呢.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">1</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">做完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòwán</div>
                <div className="pv">làm xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我都做完了,但是没都做对。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ dōu zuòwán le, dànshì méi dōu zuòduì.
                  </div>
                  <div className="vi">
                    Tớ làm xong hết rồi, nhưng không đúng hết.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">题太多了,我没有做完。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Tí tài duō le, wǒ méiyǒu zuòwán.
                  </div>
                  <div className="vi">
                    Nhiều câu quá, tớ chưa làm xong.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">今天的作业我做完了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Jīntiān de zuòyè wǒ zuòwán le.</div>
                  <div className="vi">
                    Bài tập hôm nay tớ làm xong rồi.{" "}
                    <span className="src">B4 tr.55</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Tân ngữ đứng sau bổ ngữ: 做完作业 (làm xong bài tập). 了 đứng
                  sau bổ ngữ, trước tân ngữ: 做完了作业.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòduì</span>{" "}
                      <span className="cv">làm đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòcuò</span>{" "}
                      <span className="cv">làm sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòhǎo</span>{" "}
                      <span className="cv">làm xong, làm tốt</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòchéng</span>{" "}
                      <span className="cv">làm được, làm thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">2</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">看完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànwán</div>
                <div className="pv">xem/đọc xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你看完了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Nǐ kànwán le méiyǒu?</div>
                  <div className="vi">
                    Cậu xem/đọc xong chưa? <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">看完电视剧再洗吧。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Kànwán diànshìjù zài xǐ ba.</div>
                  <div className="vi">
                    Xem xong phim rồi hãy giặt.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Dạng hỏi chính phản: V + RC (+ O) + 了 + 没有?</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndǒng</span>{" "}
                      <span className="cv">xem hiểu</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànjiàn</span>{" "}
                      <span className="cv">nhìn thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàncuò</span>{" "}
                      <span className="cv">xem nhầm</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndào</span>{" "}
                      <span className="cv">xem đến, nhìn thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看清楚</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàn qīngchu</span>{" "}
                      <span className="cv">nhìn rõ</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">3</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">吃完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chīwán</div>
                <div className="pv">ăn xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">吃完晚饭,我和玛丽回到宿舍。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Chīwán wǎnfàn, wǒ hé Mǎlì huídào sùshè.
                  </div>
                  <div className="vi">
                    Ăn tối xong, tớ và Mary về ký túc xá.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">吃完晚饭我们一起去跳舞吧。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Chīwán wǎnfàn wǒmen yìqǐ qù tiàowǔ ba.
                  </div>
                  <div className="vi">
                    Ăn tối xong chúng mình cùng đi khiêu vũ nhé.{" "}
                    <span className="src">B12 tr.206</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Hay đi với 就 / 再 / 以后: 吃完…就…, 吃完…再…</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">吃好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chīhǎo</span>{" "}
                      <span className="cv">ăn xong, ăn ngon miệng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">吃饱</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chībǎo</span>{" "}
                      <span className="cv">ăn no</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">吃光</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chīguāng</span>{" "}
                      <span className="cv">ăn sạch</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">4</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">洗完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐwán</div>
                <div className="pv">giặt/rửa xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    我的衣服还没有洗完呢,还得给我妹妹回信。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ de yīfu hái méiyǒu xǐwán ne, hái děi gěi wǒ mèimei huí
                    xìn.
                  </div>
                  <div className="vi">
                    Quần áo tớ còn chưa giặt xong, còn phải trả lời thư cho em
                    gái. <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">洗完了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐwán le</div>
                  <div className="vi">
                    giặt xong rồi <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Câu hỏi/đáp: 洗完了没有? — 还没洗完呢.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">洗好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐhǎo</span>{" "}
                      <span className="cv">giặt xong, giặt tốt</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">洗干净</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐ gānjìng</span>{" "}
                      <span className="cv">giặt sạch</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">洗坏</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐhuài</span>{" "}
                      <span className="cv">giặt hỏng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">5</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">喝完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">hēwán</div>
                <div className="pv">uống hết</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这杯喝完了。 / 这杯没喝完。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè bēi hēwán le. / Zhè bēi méi hēwán.
                  </div>
                  <div className="vi">
                    Cốc này uống hết rồi. / Cốc này chưa uống hết.{" "}
                    <span className="src">B4 tr.56</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Ví dụ minh họa khẳng định và phủ định: phủ định bỏ 了.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">喝光</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">hēguāng</span>{" "}
                      <span className="cv">uống sạch</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">喝醉</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">hēzuì</span>{" "}
                      <span className="cv">uống say</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">喝多</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">hēduō</span>{" "}
                      <span className="cv">uống nhiều</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">6</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">读完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúwán</div>
                <div className="pv">đọc xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">读完了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúwán le</div>
                  <div className="vi">
                    đọc xong rồi <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm luyện đọc trong bài tập ngữ âm.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">读懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúdǒng</span>{" "}
                      <span className="cv">đọc hiểu</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">读熟</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúshú</span>{" "}
                      <span className="cv">đọc thuộc, đọc trôi chảy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">读错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúcuò</span>{" "}
                      <span className="cv">đọc sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">读对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúduì</span>{" "}
                      <span className="cv">đọc đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">7</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">念完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niànwán</div>
                <div className="pv">đọc to xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    我念完一个故事,问你几个问题,看你能不能答对。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ niànwán yí ge gùshi, wèn nǐ jǐ ge wèntí, kàn nǐ néng bu
                    néng dáduì.
                  </div>
                  <div className="vi">
                    Tớ đọc xong một câu chuyện thì hỏi cậu vài câu, xem cậu trả
                    lời đúng được không. <span className="src">B4 tr.52</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>念 = đọc thành tiếng. 念完 chỉ đọc xong cả bài.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">念熟</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niànshú</span>{" "}
                      <span className="cv">đọc thuộc</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">念对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niànduì</span>{" "}
                      <span className="cv">đọc đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">念错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niàncuò</span>{" "}
                      <span className="cv">đọc sai</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">8</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">练习完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">liànxí wán</div>
                <div className="pv">luyện tập xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    我们还没有练习完,就听见安娜在门外叫我们。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒmen hái méiyǒu liànxíwán, jiù tīngjiàn Ānnà zài mén wài
                    jiào wǒmen.
                  </div>
                  <div className="vi">
                    Chúng tớ chưa luyện xong thì nghe thấy Anna gọi ngoài cửa.{" "}
                    <span className="src">B4 tr.53</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Động từ hai âm tiết vẫn dùng được với 完, bổ ngữ đặt ngay sau
                  cả động từ.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">复习完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fùxí wán</span>{" "}
                      <span className="cv">ôn tập xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">预习完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yùxí wán</span>{" "}
                      <span className="cv">chuẩn bị bài xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">9</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">说完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōwán</div>
                <div className="pv">nói xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    说完,我们三个就去礼堂看电影了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Shuōwán, wǒmen sān ge jiù qù lǐtáng kàn diànyǐng le.
                  </div>
                  <div className="vi">
                    Nói xong, ba đứa tớ đi hội trường xem phim.{" "}
                    <span className="src">B4 tr.53</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>说完 thường mở đầu một mệnh đề chỉ trình tự thời gian.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōduì</span>{" "}
                      <span className="cv">nói đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōcuò</span>{" "}
                      <span className="cv">nói sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōchéng</span>{" "}
                      <span className="cv">nói thành, nói nhầm thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说清楚</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuō qīngchu</span>{" "}
                      <span className="cv">nói rõ</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">10</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">学完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuéwán</div>
                <div className="pv">học xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">第一本书你学完了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Dì-yī běn shū nǐ xuéwán le ma?</div>
                  <div className="vi">
                    Cuốn thứ nhất cậu học xong chưa?{" "}
                    <span className="src">B4 tr.63</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">(Sửa lỗi) 我学完这本书了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    (Sửa lỗi) Wǒ xuéwán zhè běn shū le.
                  </div>
                  <div className="vi">
                    Sai: 我学这本书完了 → bổ ngữ phải đứng ngay sau động từ.{" "}
                    <span className="src">B4 tr.64</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Bổ ngữ kết quả đứng ngay sau động từ, tân ngữ ra sau bổ ngữ.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学会</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuéhuì</span>{" "}
                      <span className="cv">học được, biết làm</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuéhǎo</span>{" "}
                      <span className="cv">học tốt</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuédào</span>{" "}
                      <span className="cv">học đến, học được</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">11</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">听完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngwán</div>
                <div className="pv">nghe xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这一课的录音你听完了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè yí kè de lùyīn nǐ tīngwán le méiyǒu?
                  </div>
                  <div className="vi">
                    Bản ghi âm bài này cậu nghe xong chưa?{" "}
                    <span className="src">B4 tr.60 (theo mẫu)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Từ trong bảng thay thế (3): 这一课的录音 + 听完.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngdǒng</span>{" "}
                      <span className="cv">nghe hiểu</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngjiàn</span>{" "}
                      <span className="cv">nghe thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听清楚</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīng qīngchu</span>{" "}
                      <span className="cv">nghe rõ</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">12</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">写完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěwán</div>
                <div className="pv">viết xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">今天的汉字你写完了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Jīntiān de Hànzì nǐ xiěwán le méiyǒu?
                  </div>
                  <div className="vi">
                    Chữ Hán hôm nay cậu viết xong chưa?{" "}
                    <span className="src">B4 tr.60 (theo mẫu)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Từ trong bảng thay thế (3): 今天的汉字 + 写完.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěduì</span>{" "}
                      <span className="cv">viết đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěcuò</span>{" "}
                      <span className="cv">viết sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěchéng</span>{" "}
                      <span className="cv">viết thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěshang</span>{" "}
                      <span className="cv">viết thêm vào</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">13</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">用完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yòngwán</div>
                <div className="pv">dùng xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我一用完就还给张东了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ yí yòngwán jiù huángěi Zhāng Dōng le.
                  </div>
                  <div className="vi">
                    Tớ vừa dùng xong là trả cho Trương Đông ngay.{" "}
                    <span className="src">B12 tr.204 (theo mẫu)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Mẫu 一……就…… kết hợp bổ ngữ 完 và 给.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">用好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yònghǎo</span>{" "}
                      <span className="cv">dùng tốt</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">用错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yòngcuò</span>{" "}
                      <span className="cv">dùng sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">用光</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yòngguāng</span>{" "}
                      <span className="cv">dùng hết sạch</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">14</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">办完</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànwán</div>
                <div className="pv">làm xong thủ tục</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">昨天你办完签证放在什么地方了?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zuótiān nǐ bànwán qiānzhèng fàng zài shénme dìfang le?
                  </div>
                  <div className="vi">
                    Hôm qua làm xong visa cậu để ở đâu?{" "}
                    <span className="src">B12 tr.196</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>办 = làm (thủ tục, giấy tờ).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">办好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànhǎo</span>{" "}
                      <span className="cv">làm xong, làm ổn thỏa</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">办成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànchéng</span>{" "}
                      <span className="cv">làm thành công</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g2">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">懂 dǒng</span>
                  <span className="gm">hiểu</span>
                </div>
                <div className="gd">
                  V + 懂: hiểu được nội dung sau khi nghe, đọc, xem. Phủ định:
                  没(有) + V + 懂.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">15</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">听懂</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngdǒng</div>
                <div className="pv">nghe hiểu</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">很多句子我没听懂。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Hěn duō jùzi wǒ méi tīngdǒng.</div>
                  <div className="vi">
                    Nhiều câu tớ nghe không hiểu.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我听懂了老师的话。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ tīngdǒngle lǎoshī de huà.</div>
                  <div className="vi">
                    Tớ nghe hiểu lời thầy giáo.{" "}
                    <span className="src">B4 tr.55</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我念了一个故事,玛丽听懂了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ niànle yí ge gùshi, Mǎlì tīngdǒng le.
                  </div>
                  <div className="vi">
                    Tớ đọc một câu chuyện, Mary nghe hiểu.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  听懂 là nghe và hiểu; 听见 chỉ nghe thấy âm thanh. Sai:
                  *我听老师的话懂 → đúng: 我听懂老师的话 (B4 tr.64).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngjiàn</span>{" "}
                      <span className="cv">nghe thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngwán</span>{" "}
                      <span className="cv">nghe xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听清楚</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīng qīngchu</span>{" "}
                      <span className="cv">nghe rõ</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngcuò</span>{" "}
                      <span className="cv">nghe nhầm</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听明白</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīng míngbai</span>{" "}
                      <span className="cv">nghe rõ, nghe hiểu</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">16</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">看懂</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndǒng</div>
                <div className="pv">xem/đọc hiểu</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">都看懂了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Dōu kàndǒng le ma?</div>
                  <div className="vi">
                    Hiểu hết rồi à? <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这课课文我没有看懂。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè kè kèwén wǒ méiyǒu kàndǒng.
                  </div>
                  <div className="vi">
                    Bài khóa này tớ đọc chưa hiểu.{" "}
                    <span className="src">B4 tr.56</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Trả lời trong bài: 有的看懂了,有的没看懂 (có chỗ hiểu, có chỗ
                  chưa hiểu).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànwán</span>{" "}
                      <span className="cv">xem xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànjiàn</span>{" "}
                      <span className="cv">nhìn thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看清楚</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàn qīngchu</span>{" "}
                      <span className="cv">nhìn rõ</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看明白</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàn míngbai</span>{" "}
                      <span className="cv">xem hiểu rõ</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g3">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">见 jiàn</span>
                  <span className="gm">cảm nhận được bằng giác quan</span>
                </div>
                <div className="gd">
                  Chỉ đi với 看 và 听 (và một số ít động từ giác quan): 看见
                  (nhìn thấy), 听见 (nghe thấy).
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">17</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">看见</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànjiàn</div>
                <div className="pv">nhìn thấy</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我没看见你的词典。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ méi kànjiàn nǐ de cídiǎn.</div>
                  <div className="vi">
                    Tớ không thấy từ điển của cậu.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你看见玛丽了没有? — 看见了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ kànjiàn Mǎlì le méiyǒu? — Kànjiàn le.
                  </div>
                  <div className="vi">
                    Cậu thấy Mary chưa? — Thấy rồi.{" "}
                    <span className="src">B4 tr.57</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    我看见玛丽,她在操场打太极拳呢。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ kànjiàn Mǎlì, tā zài cāochǎng dǎ tàijíquán ne.
                  </div>
                  <div className="vi">
                    Tớ thấy Mary, cô ấy đang tập thái cực quyền ở sân.{" "}
                    <span className="src">B4 tr.55</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  看 chỉ hành động nhìn, 看见 chỉ nhìn và đã thấy. Sai:
                  *我没看你的词典 (≠ 我没看见你的词典) (B4 tr.57). Mẫu tr.62:
                  你看 (hãy nhìn) và 看见了吗 (thấy chưa).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndào</span>{" "}
                      <span className="cv">nhìn thấy, xem đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndǒng</span>{" "}
                      <span className="cv">xem hiểu</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànwán</span>{" "}
                      <span className="cv">xem xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàncuò</span>{" "}
                      <span className="cv">xem nhầm</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">18</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">听见</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngjiàn</div>
                <div className="pv">nghe thấy</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你没有听见吗?安娜在叫你。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ méiyǒu tīngjiàn ma? Ānnà zài jiào nǐ.
                  </div>
                  <div className="vi">
                    Cậu không nghe thấy à? Anna đang gọi cậu.{" "}
                    <span className="src">B4 tr.56</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">听见我说的话 / 听见她叫你</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    tīngjiàn wǒ shuō de huà / tīngjiàn tā jiào nǐ
                  </div>
                  <div className="vi">
                    nghe thấy lời tớ nói / nghe thấy cô ấy gọi cậu{" "}
                    <span className="src">B4 tr.60 (mẫu thay thế)</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  听 chỉ hành động nghe; 听见 là đã nghe thấy. Cũng gặp ở bài
                  3B: 我刚才叫你,你没听见吗?
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngdào</span>{" "}
                      <span className="cv">nghe thấy (dùng được thay)</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngdǒng</span>{" "}
                      <span className="cv">nghe hiểu</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听清楚</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīng qīngchu</span>{" "}
                      <span className="cv">nghe rõ</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g4">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">
                    开 / 上 (mở, đóng, dính vào)
                  </span>
                  <span className="gm">mở ra, khép lại, dính vào</span>
                </div>
                <div className="gd">
                  开 là mở ra. 上 có hai nghĩa: (1) hai vật tiếp xúc, khép lại;
                  (2) vật này bám/dính lên vật kia. Cách dịch tùy động từ đi
                  trước.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">19</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">打开</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎkāi</div>
                <div className="pv">mở ra</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">快打开电脑,看看电视剧吧。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Kuài dǎkāi diànnǎo, kànkan diànshìjù ba.
                  </div>
                  <div className="vi">
                    Mau bật máy tính lên xem phim đi.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">打开电脑,好吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Dǎkāi diànnǎo, hǎo ma?</div>
                  <div className="vi">
                    Bật máy tính lên nhé? <span className="src">B4 tr.61</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">打开灯 / 打开窗户 / 打开书</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    dǎkāi dēng / dǎkāi chuānghu / dǎkāi shū
                  </div>
                  <div className="vi">
                    bật đèn / mở cửa sổ / mở sách{" "}
                    <span className="src">B4 tr.61</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Đối lập với 关上 / 合上. Dùng với máy móc, đèn, sách, cửa sổ.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">拉开</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">lākāi</span>{" "}
                      <span className="cv">kéo ra</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">推开</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tuīkāi</span>{" "}
                      <span className="cv">đẩy ra</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">翻开</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fānkāi</span>{" "}
                      <span className="cv">lật mở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">睁开</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhēngkāi</span>{" "}
                      <span className="cv">mở (mắt)</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">20</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">开开</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kāikai</div>
                <div className="pv">mở ra</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我开开门问她:“什么事?”</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ kāikai mén wèn tā: “Shénme shì?”
                  </div>
                  <div className="vi">
                    Tớ mở cửa hỏi cô ấy: “Có chuyện gì?”{" "}
                    <span className="src">B4 tr.53</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">开开门 / 开开电视</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kāikai mén / kāikai diànshì</div>
                  <div className="vi">
                    mở cửa / bật tivi <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  开开 = 开 (động từ) + 开 (bổ ngữ), nghĩa gần 打开, khẩu ngữ
                  hơn.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">打开</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎkāi</span>{" "}
                      <span className="cv">mở ra</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">关上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guānshang</span>{" "}
                      <span className="cv">đóng lại</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">21</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">关上</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guānshang</div>
                <div className="pv">đóng lại</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">他关上门了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Tā guānshang mén le.</div>
                  <div className="vi">
                    Anh ấy đóng cửa rồi. <span className="src">B4 tr.57</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">关上门吧。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Guānshang mén ba.</div>
                  <div className="vi">
                    Đóng cửa lại đi. <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">外边风很大,关上窗户吧。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wàibian fēng hěn dà, guānshang chuānghu ba.
                  </div>
                  <div className="vi">
                    Bên ngoài gió to, đóng cửa sổ lại đi.{" "}
                    <span className="src">B4 tr.61</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  上 nghĩa (1): hai vật khép sát vào nhau. Còn gặp: 关上电视 /
                  关上电脑 (B4 tr.60). So sánh: 他在关门 (đang đóng) và
                  他关上门了 (đã đóng xong).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">关好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guānhǎo</span>{" "}
                      <span className="cv">đóng chặt, đóng cẩn thận</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">关掉</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guāndiào</span>{" "}
                      <span className="cv">tắt đi</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">22</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">合上</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">héshang</div>
                <div className="pv">khép lại, gập lại</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">请同学们合上书,现在听写。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Qǐng tóngxuémen héshang shū, xiànzài tīngxiě.
                  </div>
                  <div className="vi">
                    Các bạn gập sách lại, bây giờ nghe viết.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    她念了一个故事,合上书,问我听懂了没有。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Tā niànle yí ge gùshi, héshang shū, wèn wǒ tīngdǒngle
                    méiyǒu.
                  </div>
                  <div className="vi">
                    Cô ấy đọc một câu chuyện, gập sách lại, hỏi tớ nghe hiểu
                    chưa. <span className="src">B4 tr.53</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Dùng cho sách, miệng, mắt...</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">闭上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bìshang</span>{" "}
                      <span className="cv">nhắm lại (mắt, miệng)</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">关上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guānshang</span>{" "}
                      <span className="cv">đóng lại (cửa)</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">23</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">写上</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěshang</div>
                <div className="pv">viết thêm lên</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">请在这儿写上你的名字。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Qǐng zài zhèr xiěshang nǐ de míngzi.
                  </div>
                  <div className="vi">
                    Xin viết tên cậu vào đây.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>上 nghĩa (2): thêm vào, bám lên một vật khác.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiězài</span>{" "}
                      <span className="cv">viết ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěduì</span>{" "}
                      <span className="cv">viết đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">加上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiāshang</span>{" "}
                      <span className="cv">thêm vào</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">24</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">穿上</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chuānshang</div>
                <div className="pv">mặc vào</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你穿上这件衣服试试。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ chuānshang zhè jiàn yīfu shìshi.
                  </div>
                  <div className="vi">
                    Cậu mặc bộ này vào thử đi.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">他穿上衣服了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Tā chuānshang yīfu le.</div>
                  <div className="vi">
                    Anh ấy mặc quần áo vào rồi.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  So sánh: 他在穿衣服 (đang mặc) và 他穿上衣服了 (đã mặc xong).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">穿好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chuānhǎo</span>{" "}
                      <span className="cv">mặc xong, mặc chỉnh tề</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">戴上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dàishang</span>{" "}
                      <span className="cv">đội/đeo vào</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">带上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dàishang</span>{" "}
                      <span className="cv">mang theo</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g5">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">到 dào</span>
                  <span className="gm">
                    đạt mục đích, tới nơi, kéo dài đến mốc
                  </span>
                </div>
                <div className="gd">
                  Ba nghĩa trong sách: (1) đạt được mục đích; (2) đến một nơi
                  hoặc một giai đoạn (tân ngữ là từ chỉ nơi chốn, giai đoạn);
                  (3) kéo dài đến thời điểm nào đó.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">25</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">回到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huídào</div>
                <div className="pv">trở về đến</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我昨天很晚才回到家。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ zuótiān hěn wǎn cái huídào jiā.
                  </div>
                  <div className="vi">
                    Hôm qua tớ về đến nhà rất muộn.{" "}
                    <span className="src">B4 tr.59</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">吃完晚饭,我和玛丽回到宿舍。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Chīwán wǎnfàn, wǒ hé Mǎlì huídào sùshè.
                  </div>
                  <div className="vi">
                    Ăn tối xong, tớ và Mary về ký túc xá.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我一回到家不是就交给你了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ yì huídào jiā bú shì jiù jiāogěi nǐ le ma?
                  </div>
                  <div className="vi">
                    Vừa về đến nhà tớ chẳng phải đã đưa cho cậu rồi sao?{" "}
                    <span className="src">B12 tr.196</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (2): sau 到 là từ chỉ nơi chốn. Còn gặp: 回到了学校 /
                  回到了宿舍 / 回到了家 (B4 tr.59).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">走到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zǒudào</span>{" "}
                      <span className="cv">đi đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">跑到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">pǎodào</span>{" "}
                      <span className="cv">chạy đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">搬到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bāndào</span>{" "}
                      <span className="cv">chuyển đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">送到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">sòngdào</span>{" "}
                      <span className="cv">đưa đến</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">26</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">找到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǎodào</div>
                <div className="pv">tìm được</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我找到王老师了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ zhǎodào Wáng lǎoshī le.</div>
                  <div className="vi">
                    Tớ tìm được thầy Vương rồi.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">啊,找到了!</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">À, zhǎodào le!</div>
                  <div className="vi">
                    À, tìm thấy rồi! <span className="src">B12 tr.197</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">是在包儿里找到的吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Shì zài bāor lǐ zhǎodào de ma?</div>
                  <div className="vi">
                    Là tìm thấy trong túi à?{" "}
                    <span className="src">B12 tr.196</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (1): đạt mục đích. 找着 (zhǎozháo) nghĩa tương tự, khẩu
                  ngữ hơn. Cấu trúc nhấn mạnh 是……的 (Bài 12).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">找着</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǎozháo</span>{" "}
                      <span className="cv">tìm được</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">找错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǎocuò</span>{" "}
                      <span className="cv">tìm nhầm</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">找完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǎowán</span>{" "}
                      <span className="cv">tìm xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">27</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">买到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎidào</div>
                <div className="pv">mua được</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">罗兰买到那本书了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Luólán mǎidào nà běn shū le.</div>
                  <div className="vi">
                    Lô Lan mua được cuốn sách đó rồi.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你要的那本书我给你买到了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ yào de nà běn shū wǒ gěi nǐ mǎidào le.
                  </div>
                  <div className="vi">
                    Cuốn sách cậu cần tớ mua được cho cậu rồi.{" "}
                    <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (1). Trong câu 2, “你要的” là cụm chủ vị làm định ngữ
                  nên có 的.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">买着</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎizháo</span>{" "}
                      <span className="cv">mua được</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">买好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎihǎo</span>{" "}
                      <span className="cv">mua xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">买错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎicuò</span>{" "}
                      <span className="cv">mua nhầm</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">买完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎiwán</span>{" "}
                      <span className="cv">mua xong, mua hết</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">28</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">看到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndào</div>
                <div className="pv">xem đến, thấy</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">看到有意思的地方,就想笑。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Kàndào yǒu yìsi de dìfang, jiù xiǎng xiào.
                  </div>
                  <div className="vi">
                    Xem đến chỗ thú vị là muốn cười.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我们看到九点才看完。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒmen kàndào jiǔ diǎn cái kànwán.
                  </div>
                  <div className="vi">
                    Chúng tớ xem đến chín giờ mới xem xong.{" "}
                    <span className="src">B4 tr.53</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    我看到一半儿,肚子疼很厉害,就去医院了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ kàndào yíbànr, dùzi téng hěn lìhai, jiù qù yīyuàn le.
                  </div>
                  <div className="vi">
                    Tớ xem được một nửa thì đau bụng dữ dội nên đi bệnh viện.{" "}
                    <span className="src">B4 tr.63</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (2) và (3): đạt đến một giai đoạn hoặc thời điểm. 看到
                  cũng có thể là nhìn thấy, gần với 看见.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànjiàn</span>{" "}
                      <span className="cv">nhìn thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànwán</span>{" "}
                      <span className="cv">xem xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndǒng</span>{" "}
                      <span className="cv">xem hiểu</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">29</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">听到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngdào</div>
                <div className="pv">nghe thấy</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">听到了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngdào le</div>
                  <div className="vi">
                    nghe thấy rồi <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài luyện đọc, đặt cạnh 听见了 để so sánh.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngjiàn</span>{" "}
                      <span className="cv">nghe thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">听说</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tīngshuō</span>{" "}
                      <span className="cv">nghe nói</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">30</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">学到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuédào</div>
                <div className="pv">học đến</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我们学到二十九课了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒmen xuédào èrshíjiǔ kè le.</div>
                  <div className="vi">
                    Chúng tớ học đến bài 29 rồi.{" "}
                    <span className="src">B4 tr.59</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你们学到第几课了?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Nǐmen xuédào dì-jǐ kè le?</div>
                  <div className="vi">
                    Các cậu học đến bài mấy rồi?{" "}
                    <span className="src">B4 tr.63</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我每天晚上都学到十一二点。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ měi tiān wǎnshang dōu xuédào shíyī èr diǎn.
                  </div>
                  <div className="vi">
                    Tối nào tớ cũng học đến mười một, mười hai giờ.{" "}
                    <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Nghĩa (2) khi chỉ bài, trang; nghĩa (3) khi chỉ giờ giấc.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学会</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuéhuì</span>{" "}
                      <span className="cv">học được</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuéwán</span>{" "}
                      <span className="cv">học xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">31</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">睡到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìdào</div>
                <div className="pv">ngủ đến</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">星期六早上我睡到九点才起床。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Xīngqīliù zǎoshang wǒ shuìdào jiǔ diǎn cái qǐchuáng.
                  </div>
                  <div className="vi">
                    Sáng thứ bảy tớ ngủ đến chín giờ mới dậy.{" "}
                    <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (3): hành động kéo dài đến thời điểm nào đó, thường kèm
                  才.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">玩到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">wándào</span>{" "}
                      <span className="cv">chơi đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">等到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">děngdào</span>{" "}
                      <span className="cv">đợi đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">忙到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mángdào</span>{" "}
                      <span className="cv">bận đến</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">32</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">工作到 / 学习到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gōngzuòdào / xuéxídào</div>
                <div className="pv">làm việc đến / học đến</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">昨天晚上,我工作到十点。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zuótiān wǎnshang, wǒ gōngzuòdào shí diǎn.
                  </div>
                  <div className="vi">
                    Tối qua tớ làm việc đến mười giờ.{" "}
                    <span className="src">B12 tr.206 (đáp án sửa lỗi)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我打算在这儿学习到明年七月。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ dǎsuan zài zhèr xuéxídào míngnián qī yuè.
                  </div>
                  <div className="vi">
                    Tớ định học ở đây đến tháng bảy năm sau.{" "}
                    <span className="src">B12 tr.207 (đáp án sửa lỗi)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (3). Câu sai gốc: 我到十点工作 / 在这儿到明年七月学习.
                  Mốc thời gian đứng sau 到, không đứng trước động từ.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">睡到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìdào</span>{" "}
                      <span className="cv">ngủ đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuédào</span>{" "}
                      <span className="cv">học đến</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">33</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">放到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngdào</div>
                <div className="pv">đặt vào</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">是我昨天晚上放到口袋里的。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Shì wǒ zuótiān wǎnshang fàngdào kǒudài lǐ de.
                  </div>
                  <div className="vi">
                    Là tối qua tớ đặt vào trong túi áo.{" "}
                    <span className="src">B12 tr.197</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Nghĩa (2). 放到 nhấn vào đích đến của việc di chuyển; 放在
                  nhấn vào vị trí cuối cùng.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">放在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngzài</span>{" "}
                      <span className="cv">đặt ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">放进</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngjìn</span>{" "}
                      <span className="cv">bỏ vào</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">放回</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fànghuí</span>{" "}
                      <span className="cv">đặt lại</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">34</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">掉到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">diàodào</div>
                <div className="pv">rơi xuống</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你看看是不是掉到桌子下边了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ kànkan shì bu shì diàodào zhuōzi xiàbian le.
                  </div>
                  <div className="vi">
                    Cậu xem có phải rơi xuống dưới bàn không.{" "}
                    <span className="src">B4 tr.65</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Nghĩa (2). Tân ngữ là từ chỉ nơi chốn.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">掉在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">diàozài</span>{" "}
                      <span className="cv">rơi ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">掉下来</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">diào xiàlai</span>{" "}
                      <span className="cv">rơi xuống</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">35</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">迷到</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mídào</div>
                <div className="pv">mê đến mức</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">迷到什么程度?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Mídào shénme chéngdù?</div>
                  <div className="vi">
                    Mê đến mức nào? <span className="src">B12 tr.197</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">有时候迷到了发狂的程度。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Yǒu shíhou mídàole fā kuáng de chéngdù.
                  </div>
                  <div className="vi">
                    Đôi khi mê đến mức phát điên.{" "}
                    <span className="src">B12 tr.197</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Ở đây 到 chỉ mức độ, không thuộc phần ngữ pháp của hai bài
                  nhưng xuất hiện trong bài khóa.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">累到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">lèidào</span>{" "}
                      <span className="cv">mệt đến mức</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">忙到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mángdào</span>{" "}
                      <span className="cv">bận đến mức</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g6">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">给 gěi</span>
                  <span className="gm">trao cho, dành cho (người nhận)</span>
                </div>
                <div className="gd">
                  V + 给 + người nhận. Bài 4 liệt kê 给 trong nhóm bổ ngữ kết
                  quả; bài 12 dùng rất nhiều ở phần bài khóa và bài tập.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">36</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">交给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiāogěi</div>
                <div className="pv">giao cho, nộp cho</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我一回到家不是就交给你了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ yì huídào jiā bú shì jiù jiāogěi nǐ le ma?
                  </div>
                  <div className="vi">
                    Vừa về đến nhà tớ chẳng phải đã đưa cho cậu rồi sao?{" "}
                    <span className="src">B12 tr.196</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    作业你交给老师了没有? — 交给老师了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zuòyè nǐ jiāogěi lǎoshī le méiyǒu? — Jiāogěi lǎoshī le.
                  </div>
                  <div className="vi">
                    Bài tập cậu nộp cho thầy chưa? — Nộp rồi.{" "}
                    <span className="src">B12 tr.204</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Từ mới 交 (jiāo): nộp, giao. Cụm 交给老师 cũng có trong bài
                  luyện đọc (tr.203).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">还给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huángěi</span>{" "}
                      <span className="cv">trả lại cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">送给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">sònggěi</span>{" "}
                      <span className="cv">tặng cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">递给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dìgěi</span>{" "}
                      <span className="cv">chuyển cho</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">37</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">还给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huángěi</div>
                <div className="pv">trả lại cho</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    那本书我一看完就还给你了,你怎么忘了?
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nà běn shū wǒ yí kànwán jiù huángěi nǐ le, nǐ zěnme wàng le?
                  </div>
                  <div className="vi">
                    Cuốn sách đó tớ vừa đọc xong là trả cậu rồi, sao cậu quên?{" "}
                    <span className="src">B12 tr.205</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">还给图书馆 / 还给张东</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    huángěi túshūguǎn / huángěi Zhāng Dōng
                  </div>
                  <div className="vi">
                    trả cho thư viện / trả cho Trương Đông{" "}
                    <span className="src">B12 tr.204</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Lưu ý: 还 ở đây đọc huán. Mẫu 一……就…… rất hay đi với 还给.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">借给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiègěi</span>{" "}
                      <span className="cv">cho mượn</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">退给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tuìgěi</span>{" "}
                      <span className="cv">trả lại (hàng, tiền)</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">38</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">送给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">sònggěi</div>
                <div className="pv">tặng cho</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">一个同学送给我的。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Yí ge tóngxué sònggěi wǒ de.</div>
                  <div className="vi">
                    Một bạn học tặng tớ. <span className="src">B12 tr.206</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">送给朋友 / 送给玛丽</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">sònggěi péngyou / sònggěi Mǎlì</div>
                  <div className="vi">
                    tặng bạn bè / tặng Mary{" "}
                    <span className="src">B12 tr.203, 204</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Cùng bài luyện: 这件礼物是谁送给你的? (Món quà này là ai tặng
                  cậu?).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">寄给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìgěi</span>{" "}
                      <span className="cv">gửi (qua bưu điện) cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">发给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fāgěi</span>{" "}
                      <span className="cv">gửi cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">卖给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">màigěi</span>{" "}
                      <span className="cv">bán cho</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">39</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">借给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiègěi</div>
                <div className="pv">cho mượn</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    田芳借给你的那本书你看完了没有?
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Tián Fāng jiègěi nǐ de nà běn shū nǐ kànwán le méiyǒu?
                  </div>
                  <div className="vi">
                    Cuốn sách Điền Phương cho cậu mượn cậu đọc xong chưa?{" "}
                    <span className="src">B4 tr.59</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">田芳借给她一本书。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Tián Fāng jiègěi tā yì běn shū.
                  </div>
                  <div className="vi">
                    Điền Phương cho cô ấy mượn một cuốn sách.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">借给同学</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiègěi tóngxué</div>
                  <div className="vi">
                    cho bạn học mượn <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Ví dụ đầu cũng là minh họa cụm chủ vị làm định ngữ (phải có
                  的).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">借</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiè</span>{" "}
                      <span className="cv">mượn (không có 给)</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">还给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huángěi</span>{" "}
                      <span className="cv">trả lại</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">40</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">寄给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìgěi</div>
                <div className="pv">gửi cho</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">寄给妈妈</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìgěi māma</div>
                  <div className="vi">
                    gửi cho mẹ <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài luyện đọc, chưa có câu đầy đủ trong sách.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">发给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fāgěi</span>{" "}
                      <span className="cv">gửi cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">传给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chuángěi</span>{" "}
                      <span className="cv">chuyển cho</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">41</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">发给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fāgěi</div>
                <div className="pv">gửi cho</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我发给你的邮件,你收到了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ fāgěi nǐ de yóujiàn, nǐ shōudàole méiyǒu?
                  </div>
                  <div className="vi">
                    Thư tớ gửi cậu, cậu nhận được chưa?{" "}
                    <span className="src">B12 tr.206</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">那些照片发给她</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">nàxiē zhàopiàn fāgěi tā</div>
                  <div className="vi">
                    những bức ảnh đó gửi cho cô ấy{" "}
                    <span className="src">B12 tr.204</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Dùng với thư điện tử, ảnh, tin nhắn.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">寄给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìgěi</span>{" "}
                      <span className="cv">gửi bưu điện cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">传给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">chuángěi</span>{" "}
                      <span className="cv">chuyển cho</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">42</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">带给</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dàigěi</div>
                <div className="pv">mang cho</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">那把雨伞带给麦克</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">nà bǎ yǔsǎn dàigěi Màikè</div>
                  <div className="vi">
                    cây dù đó mang cho Mike{" "}
                    <span className="src">B12 tr.204</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài thay thế, chưa có câu đầy đủ.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">拿给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">nágěi</span>{" "}
                      <span className="cv">đưa cho</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">送给</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">sònggěi</span>{" "}
                      <span className="cv">tặng cho</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g7">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">成 chéng</span>
                  <span className="gm">
                    biến thành (成₁) / làm xong, thành công (成₂)
                  </span>
                </div>
                <div className="gd">
                  Sách chia hai nghĩa. 成₁ (Bài 4): hành động làm một vật biến
                  thành vật khác, kết quả tốt hay xấu đều được. 成₂ (Bài 12):
                  hành động hoàn thành và đạt mục đích.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">43</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">写成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěchéng</div>
                <div className="pv">viết thành, viết nhầm thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    糟糕,写错了,是这个“得”,我写成这个“的”了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zāogāo, xiěcuò le, shì zhège “de”, wǒ xiěchéng zhège “de”
                    le.
                  </div>
                  <div className="vi">
                    Chết rồi, viết sai, là chữ “得”, tớ viết thành chữ “的”.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这是个“我”字,你写成“找”字了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè shì ge “wǒ” zì, nǐ xiěchéng “zhǎo” zì le.
                  </div>
                  <div className="vi">
                    Đây là chữ “我”, cậu viết thành chữ “找”.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">写成小说</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěchéng xiǎoshuō</div>
                  <div className="vi">
                    viết thành tiểu thuyết{" "}
                    <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Kết quả có thể xấu (viết nhầm) hoặc tốt (viết thành tác phẩm).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěduì</span>{" "}
                      <span className="cv">viết đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěcuò</span>{" "}
                      <span className="cv">viết sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěwán</span>{" "}
                      <span className="cv">viết xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">44</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">说成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōchéng</div>
                <div className="pv">nói thành, nói nhầm thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">“是不是”,他总说成“四不四”。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    “Shì bu shì”, tā zǒng shuōchéng “sì bu sì”.
                  </div>
                  <div className="vi">
                    “Shì bu shì”, anh ấy toàn nói thành “sì bu sì”.{" "}
                    <span className="src">B4 tr.58</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Hay dùng khi nói nhầm, phát âm nhầm.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">发成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fāchéng</span>{" "}
                      <span className="cv">phát âm thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">念成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niànchéng</span>{" "}
                      <span className="cv">đọc thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">45</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">改成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gǎichéng</div>
                <div className="pv">sửa thành, chuyển thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    这篇会话课文,老师要我们改成叙述体。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè piān huìhuà kèwén, lǎoshī yào wǒmen gǎichéng xùshùtǐ.
                  </div>
                  <div className="vi">
                    Bài khóa hội thoại này thầy bảo chúng tớ chuyển thành thể tự
                    sự. <span className="src">B4 tr.58</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">改成会话</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gǎichéng huìhuà</div>
                  <div className="vi">
                    chuyển thành hội thoại{" "}
                    <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Đối tượng chuyển đổi đứng trước, hoặc dùng 把 (học ở bài sau).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">变成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">biànchéng</span>{" "}
                      <span className="cv">biến thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">换成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huànchéng</span>{" "}
                      <span className="cv">đổi thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">46</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">发成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fāchéng</div>
                <div className="pv">phát âm thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    “ān (安)”这个音,我总是发成“āng”。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    “Ān (安)” zhège yīn, wǒ zǒngshì fāchéng “āng”.
                  </div>
                  <div className="vi">
                    Âm “ān (安)” tớ toàn phát âm thành “āng”.{" "}
                    <span className="src">B4 tr.61</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Đáp án điền từ ở bài 3A (10).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōchéng</span>{" "}
                      <span className="cv">nói thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">念成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niànchéng</span>{" "}
                      <span className="cv">đọc thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">47</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">译成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yìchéng</div>
                <div className="pv">dịch thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">译成汉语</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yìchéng Hànyǔ</div>
                  <div className="vi">
                    dịch sang tiếng Hán <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài luyện đọc.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">翻译成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fānyìchéng</span>{" "}
                      <span className="cv">dịch thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">翻译对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fānyìduì</span>{" "}
                      <span className="cv">dịch đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">48</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">换成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huànchéng</div>
                <div className="pv">đổi thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">麻烦您给我换成零钱。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Máfan nín gěi wǒ huànchéng língqián.
                  </div>
                  <div className="vi">
                    Phiền bạn đổi giúp tôi thành tiền lẻ.{" "}
                    <span className="src">B12 tr.207</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">换成十块一张的就行。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Huànchéng shí kuài yì zhāng de jiù xíng.
                  </div>
                  <div className="vi">
                    Đổi thành tờ mười tệ là được.{" "}
                    <span className="src">B12 tr.207</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">换成人民币</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huànchéng rénmínbì</div>
                  <div className="vi">
                    đổi thành nhân dân tệ{" "}
                    <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Trong hội thoại đổi tiền lẻ (换零钱).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">变成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">biànchéng</span>{" "}
                      <span className="cv">biến thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">分成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fēnchéng</span>{" "}
                      <span className="cv">chia thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànchéng</span>{" "}
                      <span className="cv">nhìn nhầm thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">49</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">变成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">biànchéng</div>
                <div className="pv">biến thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">变成了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">biànchéng le</div>
                  <div className="vi">
                    đã biến thành <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài luyện đọc.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">改成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gǎichéng</span>{" "}
                      <span className="cv">sửa thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">换成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huànchéng</span>{" "}
                      <span className="cv">đổi thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">50</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">去成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">qùchéng</div>
                <div className="pv">đi được</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">最后去成了吗? — 去成了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zuìhòu qùchéng le ma? — Qùchéng le.
                  </div>
                  <div className="vi">
                    Cuối cùng đi được không? — Đi được rồi.{" "}
                    <span className="src">B12 tr.198, 203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  成₂: hành động hoàn thành, đạt mục đích, tương tự 去到 nhưng
                  nhấn vào việc thực hiện được.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">办成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànchéng</span>{" "}
                      <span className="cv">làm thành công</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòchéng</span>{" "}
                      <span className="cv">làm xong, làm được</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">51</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">做成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòchéng</div>
                <div className="pv">làm xong, làm thành</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">做成了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòchéng le</div>
                  <div className="vi">
                    làm xong rồi <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Cụm trong bài luyện đọc; có thể hiểu theo cả hai nghĩa tùy ngữ
                  cảnh.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòwán</span>{" "}
                      <span className="cv">làm xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòhǎo</span>{" "}
                      <span className="cv">làm xong, làm tốt</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">52</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">建成</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jiànchéng</div>
                <div className="pv">xây xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这座大楼是什么时候建成的?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè zuò dàlóu shì shénme shíhou jiànchéng de?
                  </div>
                  <div className="vi">
                    Tòa nhà này xây xong từ khi nào?{" "}
                    <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Từ mới trong chú thích: 建 (jiàn): xây dựng.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">完成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">wánchéng</span>{" "}
                      <span className="cv">hoàn thành</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">修成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiūchéng</span>{" "}
                      <span className="cv">sửa/xây xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g8">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">好 hǎo</span>
                  <span className="gm">hoàn thiện, đạt mức tốt/như ý</span>
                </div>
                <div className="gd">
                  V + 好: hành động hoàn thành và đạt mức hoàn chỉnh, khiến
                  người ta hài lòng. Phủ định: 没(有) + V + 好; hỏi: V + 好 +
                  了没有?
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">53</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">考好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kǎohǎo</div>
                <div className="pv">thi tốt</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这次没考好。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Zhè cì méi kǎohǎo.</div>
                  <div className="vi">
                    Lần này tớ thi không tốt.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    这次我没考好,因为考试前我病了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè cì wǒ méi kǎohǎo, yīnwèi kǎoshì qián wǒ bìng le.
                  </div>
                  <div className="vi">
                    Lần này tớ thi không tốt vì trước kỳ thi tớ bị ốm.{" "}
                    <span className="src">B4 tr.61</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Chú ý: 考试 (kǎo shì) là động từ ly hợp; ở đây 考 + 好.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">考完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kǎowán</span>{" "}
                      <span className="cv">thi xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">考对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kǎoduì</span>{" "}
                      <span className="cv">thi đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">54</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">洗好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐhǎo</div>
                <div className="pv">giặt xong, giặt tốt</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我洗好了。 / 我还没洗好呢!</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ xǐhǎo le. / Wǒ hái méi xǐhǎo ne!
                  </div>
                  <div className="vi">
                    Tớ giặt xong rồi. / Tớ còn chưa giặt xong đâu!{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你的衣服洗好了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Nǐ de yīfu xǐhǎo le ma?</div>
                  <div className="vi">
                    Quần áo cậu giặt xong chưa?{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>So sánh với 洗完 (xong về thời gian) và 洗干净 (sạch).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">洗完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐwán</span>{" "}
                      <span className="cv">giặt xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">洗干净</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐ gānjìng</span>{" "}
                      <span className="cv">giặt sạch</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">55</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">睡好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìhǎo</div>
                <div className="pv">ngủ ngon</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">昨天晚上我没有睡好。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zuótiān wǎnshang wǒ méiyǒu shuìhǎo.
                  </div>
                  <div className="vi">
                    Tối qua tớ ngủ không ngon.{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cẩn thận với 睡着 (shuìzháo): ngủ thiếp đi.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">睡着</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìzháo</span>{" "}
                      <span className="cv">ngủ thiếp đi</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">睡够</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìgòu</span>{" "}
                      <span className="cv">ngủ đủ</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">56</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">商量好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shāngliang hǎo</div>
                <div className="pv">bàn bạc xong, thống nhất</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我跟老板商量好了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ gēn lǎobǎn shāngliang hǎo le.
                  </div>
                  <div className="vi">
                    Tớ đã bàn bạc xong với sếp.{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Động từ hai âm tiết + 好.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">商量完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shāngliangwán</span>{" "}
                      <span className="cv">bàn xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">决定好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">juédìng hǎo</span>{" "}
                      <span className="cv">quyết định xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">57</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">办好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànhǎo</div>
                <div className="pv">làm xong ổn thỏa</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你的签证办好了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ de qiānzhèng bànhǎo le méiyǒu?
                  </div>
                  <div className="vi">
                    Visa của cậu làm xong chưa?{" "}
                    <span className="src">B12 tr.205</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Đáp án điền từ ở bài 3A (2).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">办完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànwán</span>{" "}
                      <span className="cv">làm xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">办成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">bànchéng</span>{" "}
                      <span className="cv">làm thành công</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">58</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">准备好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǔnbèihǎo</div>
                <div className="pv">chuẩn bị xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    请大家准备好笔和本子,现在听写句子。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Qǐng dàjiā zhǔnbèihǎo bǐ hé běnzi, xiànzài tīngxiě jùzi.
                  </div>
                  <div className="vi">
                    Mọi người chuẩn bị sẵn bút và vở, bây giờ nghe viết câu.{" "}
                    <span className="src">B12 tr.206</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Đáp án điền từ ở bài 4 (1).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">预习好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yùxíhǎo</span>{" "}
                      <span className="cv">chuẩn bị bài xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">安排好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">ānpáihǎo</span>{" "}
                      <span className="cv">sắp xếp xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">59</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">预习好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yùxíhǎo</div>
                <div className="pv">chuẩn bị bài xong</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">明天的生词你预习好了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Míngtiān de shēngcí nǐ yùxíhǎo le méiyǒu?
                  </div>
                  <div className="vi">
                    Từ mới ngày mai cậu chuẩn bị xong chưa?{" "}
                    <span className="src">B4 tr.60 (theo mẫu)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Từ trong bảng thay thế (3): 明天的生词 + 预习好.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">预习完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">yùxíwán</span>{" "}
                      <span className="cv">chuẩn bị xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">复习好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fùxíhǎo</span>{" "}
                      <span className="cv">ôn tập tốt</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">60</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">做好</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòhǎo</div>
                <div className="pv">làm xong, làm tốt</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">妈妈,晚饭做好了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Māma, wǎnfàn zuòhǎo le ma?</div>
                  <div className="vi">
                    Mẹ ơi, cơm tối làm xong chưa?{" "}
                    <span className="src">B4 tr.62</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Đáp án điền từ ở bài 4 (2): 已经做好了.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòwán</span>{" "}
                      <span className="cv">làm xong</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòduì</span>{" "}
                      <span className="cv">làm đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g9">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">对 / 错 duì / cuò</span>
                  <span className="gm">đúng / sai</span>
                </div>
                <div className="gd">
                  Tính từ làm bổ ngữ cho biết kết quả hành động đúng hay sai.
                  Phủ định: 没(有) + V + 对. Với tân ngữ: V + 错 + 了 + số lượng
                  + tân ngữ.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">61</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">做对</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòduì</div>
                <div className="pv">làm đúng</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这道题我没做对。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Zhè dào tí wǒ méi zuòduì.</div>
                  <div className="vi">
                    Câu này tớ làm không đúng.{" "}
                    <span className="src">B4 tr.56</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这道题你做对了没有? — 没做对。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè dào tí nǐ zuòduì le méiyǒu? — Méi zuòduì.
                  </div>
                  <div className="vi">
                    Câu này cậu làm đúng chưa? — Chưa đúng.{" "}
                    <span className="src">B4 tr.57</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Tên bài: 我都做对了. Khác với 做完 (xong) và 做好 (tốt).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòcuò</span>{" "}
                      <span className="cv">làm sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòwán</span>{" "}
                      <span className="cv">làm xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">62</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">做错</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòcuò</div>
                <div className="pv">làm sai</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我做错了两道题。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ zuòcuòle liǎng dào tí.</div>
                  <div className="vi">
                    Tớ làm sai hai câu. <span className="src">B4 tr.57</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">做错了题</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòcuòle tí</div>
                  <div className="vi">
                    làm sai câu hỏi <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  了 đứng sau bổ ngữ, trước tân ngữ. Tên bài đối lập: 没都做对 /
                  做错了两道题.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">做对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòduì</span>{" "}
                      <span className="cv">làm đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">63</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">写对</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěduì</div>
                <div className="pv">viết đúng</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我查一个词,看看写对了没有。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ chá yí ge cí, kànkan xiěduìle méiyǒu.
                  </div>
                  <div className="vi">
                    Tớ tra một từ xem viết đúng chưa.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这个字写对</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhège zì xiěduì</div>
                  <div className="vi">
                    chữ này viết đúng{" "}
                    <span className="src">B4 tr.60 (mẫu thay thế)</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Dạng hỏi chính phản có tân ngữ: V + RC + (O) + 了 + 没有.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěcuò</span>{" "}
                      <span className="cv">viết sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěchéng</span>{" "}
                      <span className="cv">viết thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">64</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">写错</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěcuò</div>
                <div className="pv">viết sai</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">糟糕,写错了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Zāogāo, xiěcuò le.</div>
                  <div className="vi">
                    Chết rồi, viết sai rồi.{" "}
                    <span className="src">B4 tr.51</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">写错了字</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěcuòle zì</div>
                  <div className="vi">
                    viết sai chữ <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>糟糕 (zāogāo): tệ quá, chết rồi.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěduì</span>{" "}
                      <span className="cv">viết đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěchéng</span>{" "}
                      <span className="cv">viết thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">65</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">翻译对</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fānyìduì</div>
                <div className="pv">dịch đúng</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我只翻译对了一个句子。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ zhǐ fānyìduìle yí ge jùzi.</div>
                  <div className="vi">
                    Tớ chỉ dịch đúng được một câu.{" "}
                    <span className="src">B4 tr.57</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这些句子翻译对</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhèxiē jùzi fānyìduì</div>
                  <div className="vi">
                    những câu này dịch đúng{" "}
                    <span className="src">B4 tr.60</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Động từ hai âm tiết + 对.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">翻译错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fānyìcuò</span>{" "}
                      <span className="cv">dịch sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">翻译成</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fānyìchéng</span>{" "}
                      <span className="cv">dịch thành</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">66</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">说对</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōduì</div>
                <div className="pv">nói đúng</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">说对了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōduì le</div>
                  <div className="vi">
                    nói đúng rồi <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài luyện đọc.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōcuò</span>{" "}
                      <span className="cv">nói sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">说完</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuōwán</span>{" "}
                      <span className="cv">nói xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">67</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">答对</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dáduì</div>
                <div className="pv">trả lời đúng</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">看你能不能答对。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Kàn nǐ néng bu néng dáduì.</div>
                  <div className="vi">
                    Xem cậu có trả lời đúng được không.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">问了她五个问题,她都答对了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wènle tā wǔ ge wèntí, tā dōu dáduì le.
                  </div>
                  <div className="vi">
                    Hỏi cô ấy năm câu, cô ấy đều trả lời đúng.{" "}
                    <span className="src">B4 tr.52</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  能不能 + V + 对 là dạng nghi vấn khả năng (sẽ học kỹ ở bổ ngữ
                  khả năng).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">答错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dácuò</span>{" "}
                      <span className="cv">trả lời sai</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">回答对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huídá duì</span>{" "}
                      <span className="cv">trả lời đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">68</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">答错</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dácuò</div>
                <div className="pv">trả lời sai</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我答对了四个,答错了一个。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ dáduìle sì ge, dácuòle yí ge.
                  </div>
                  <div className="vi">
                    Tớ trả lời đúng bốn câu, sai một câu.{" "}
                    <span className="src">B4 tr.53</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我答错了两道题。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ dácuòle liǎng dào tí.</div>
                  <div className="vi">
                    Tớ trả lời sai hai câu.{" "}
                    <span className="src">B4 tr.55</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Số lượng đứng trước tân ngữ: 答错了两道题.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">答对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dáduì</span>{" "}
                      <span className="cv">trả lời đúng</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">69</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">回答错</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huídá cuò</div>
                <div className="pv">trả lời sai</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这个问题我回答错了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Zhège wèntí wǒ huídá cuò le.</div>
                  <div className="vi">
                    Câu hỏi này tớ trả lời sai.{" "}
                    <span className="src">B4 tr.64 (đáp án sửa lỗi)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">回答错</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huídá cuò</div>
                  <div className="vi">
                    trả lời sai{" "}
                    <span className="src">B4 tr.60 (mẫu thay thế)</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Câu sai gốc: 这个问题我错了回答. Bổ ngữ phải đứng sau động từ
                  回答.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">回答对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">huídá duì</span>{" "}
                      <span className="cv">trả lời đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">答错</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dácuò</span>{" "}
                      <span className="cv">trả lời sai</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">70</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">看错</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàncuò</div>
                <div className="pv">xem nhầm, nhìn nhầm</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我看错题了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ kàncuò tí le.</div>
                  <div className="vi">
                    Tớ xem nhầm đề rồi. <span className="src">B4 tr.57</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    对不起,我看错时间了,所以来晚了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Duìbuqǐ, wǒ kàncuò shíjiān le, suǒyǐ lái wǎn le.
                  </div>
                  <div className="vi">
                    Xin lỗi, tớ xem nhầm giờ nên đến muộn.{" "}
                    <span className="src">B4 tr.61</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Không nói: *我看题错了. Tân ngữ đứng sau bổ ngữ.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看对</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànduì</span>{" "}
                      <span className="cv">xem đúng</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看见</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kànjiàn</span>{" "}
                      <span className="cv">nhìn thấy</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">看懂</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">kàndǒng</span>{" "}
                      <span className="cv">xem hiểu</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">71</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">打错</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎcuò</div>
                <div className="pv">gọi nhầm</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">对不起,我打错了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Duìbuqǐ, wǒ dǎcuò le.</div>
                  <div className="vi">
                    Xin lỗi, tôi gọi nhầm. <span className="src">B4 tr.63</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">打错了电话</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎcuòle diànhuà</div>
                  <div className="vi">
                    gọi nhầm số điện thoại <span className="src">B4 tr.59</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Đáp án điền từ ở bài 4 (4). Gặp trong hội thoại điện thoại
                  (喂,你找谁?).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">打通</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎtōng</span>{" "}
                      <span className="cv">gọi được (thông máy)</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">打开</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎkāi</span>{" "}
                      <span className="cv">mở ra</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g10">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">熟 / 干净 (tính từ khác)</span>
                  <span className="gm">thuộc, thạo / sạch</span>
                </div>
                <div className="gd">
                  Bài 4 nêu 熟 (và 早, 晚…) trong danh sách tính từ làm bổ ngữ
                  kết quả. 干净 xuất hiện trong ví dụ phủ định.
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">72</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">念熟</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">niànshú</div>
                <div className="pv">đọc thuộc, đọc trôi chảy</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这课课文念熟</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhè kè kèwén niànshú</div>
                  <div className="vi">
                    bài khóa này đọc thuộc{" "}
                    <span className="src">B4 tr.60 (mẫu thay thế)</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">课文念熟了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Kèwén niànshú le méiyǒu?</div>
                  <div className="vi">
                    Bài khóa đọc thuộc chưa?{" "}
                    <span className="src">B4 tr.63</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">课文也读得不太熟。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Kèwén yě dú de bú tài shú.</div>
                  <div className="vi">
                    Bài khóa cũng đọc chưa thuộc lắm.{" "}
                    <span className="src">B4 tr.53</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Câu thứ ba dùng 得 (bổ ngữ trạng thái), không phải bổ ngữ kết
                  quả: 读得不太熟. So sánh với 念熟了.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">读熟</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dúshú</span>{" "}
                      <span className="cv">đọc thuộc</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">记熟</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìshú</span>{" "}
                      <span className="cv">nhớ kỹ</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">学熟</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xuéshú</span>{" "}
                      <span className="cv">học thuộc</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">73</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">洗干净</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xǐ gānjìng</div>
                <div className="pv">giặt sạch</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">这件衣服没洗干净。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Zhè jiàn yīfu méi xǐ gānjìng.</div>
                  <div className="vi">
                    Cái áo này giặt chưa sạch.{" "}
                    <span className="src">B4 tr.56</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Ví dụ minh họa phủ định: bỏ 了.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">擦干净</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">cā gānjìng</span>{" "}
                      <span className="cv">lau sạch</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">打扫干净</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">dǎsǎo gānjìng</span>{" "}
                      <span className="cv">quét dọn sạch</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g11">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">在 zài</span>
                  <span className="gm">
                    ở tại (vị trí kết quả của hành động)
                  </span>
                </div>
                <div className="gd">
                  V + 在 + từ chỉ nơi chốn: hành động khiến người hoặc vật nằm ở
                  vị trí nào đó. Tân ngữ phải là từ chỉ nơi chốn (nên thêm 里,
                  上, 下边…). Hỏi: V + 在 + 哪儿 / 什么地方?
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">74</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">放在</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngzài</div>
                <div className="pv">đặt ở</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">放在我的手提包儿里了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Fàngzài wǒ de shǒutíbāor lǐ le.
                  </div>
                  <div className="vi">
                    Để trong túi xách của tớ rồi.{" "}
                    <span className="src">B12 tr.196</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    我的护照你放在哪儿了? — 就放在你的口袋里了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ de hùzhào nǐ fàngzài nǎr le? — Jiù fàngzài nǐ de kǒudài
                    lǐ le.
                  </div>
                  <div className="vi">
                    Hộ chiếu của tớ cậu để đâu rồi? — Để trong túi áo cậu đấy.{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">放在桌子上 / 放在手提包儿里</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    fàngzài zhuōzi shàng / fàngzài shǒutíbāor lǐ
                  </div>
                  <div className="vi">
                    đặt trên bàn / đặt trong túi xách{" "}
                    <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Còn dùng trong bài đọc: 他到山上去砍柴时,丢在山上了. So sánh
                  放在 (vị trí) và 放到 (đích đến).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">放到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngdào</span>{" "}
                      <span className="cv">đặt vào</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">挂在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guàzài</span>{" "}
                      <span className="cv">treo ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">住在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhùzài</span>{" "}
                      <span className="cv">ở tại</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">坐在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zuòzài</span>{" "}
                      <span className="cv">ngồi ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">站在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhànzài</span>{" "}
                      <span className="cv">đứng ở</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">75</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">挂在</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guàzài</div>
                <div className="pv">treo ở</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    这张画儿我们挂在哪儿呢? — 挂在这儿吧。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhè zhāng huàr wǒmen guàzài nǎr ne? — Guàzài zhèr ba.
                  </div>
                  <div className="vi">
                    Bức tranh này mình treo ở đâu nhỉ? — Treo ở đây đi.{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">挂在墙上</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">guàzài qiáng shàng</div>
                  <div className="vi">
                    treo trên tường <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Tân ngữ chỉ nơi chốn: 这儿, 墙上.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">放在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngzài</span>{" "}
                      <span className="cv">đặt ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">贴在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tiēzài</span>{" "}
                      <span className="cv">dán ở</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">76</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">写在</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiězài</div>
                <div className="pv">viết ở</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">写在本子上</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiězài běnzi shàng</div>
                  <div className="vi">
                    viết vào vở <span className="src">B12 tr.203</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Cụm trong bài luyện đọc.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写上</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiěshang</span>{" "}
                      <span className="cv">viết thêm vào</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">记在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìzài</span>{" "}
                      <span className="cv">ghi ở</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">77</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">记在</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìzài</div>
                <div className="pv">ghi lại vào</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    老师的电话号码我忘了,因为我没记在本子上。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Lǎoshī de diànhuà hàomǎ wǒ wàng le, yīnwèi wǒ méi jìzài
                    běnzi shàng.
                  </div>
                  <div className="vi">
                    Số điện thoại thầy tớ quên mất vì tớ không ghi vào vở.{" "}
                    <span className="src">B12 tr.207 (đáp án sửa lỗi)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Câu sai gốc: 因为我没记住在本子上. 记住 (nhớ) khác với 记在
                  (ghi vào).
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">写在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">xiězài</span>{" "}
                      <span className="cv">viết ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">记住</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">jìzhù</span>{" "}
                      <span className="cv">nhớ chắc</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">78</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">停在</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tíngzài</div>
                <div className="pv">đỗ ở</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">汽车停在楼下</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">qìchē tíngzài lóu xià</div>
                  <div className="vi">
                    ô tô đỗ ở dưới tòa nhà{" "}
                    <span className="src">B12 tr.204</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>停 (tíng): đỗ xe, dừng.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">停到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">tíngdào</span>{" "}
                      <span className="cv">đỗ đến</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">放在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">fàngzài</span>{" "}
                      <span className="cv">đặt ở</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">79</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">丢在</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">diūzài</div>
                <div className="pv">bỏ quên ở</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    原来是他到山上去砍柴时,丢在山上了。
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Yuánlái shì tā dào shān shàng qù kǎn chái shí, diūzài shān
                    shàng le.
                  </div>
                  <div className="vi">
                    Hóa ra lúc ông ta lên núi đốn củi đã làm rơi ở trên núi.{" "}
                    <span className="src">B12 tr.208</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Bài đọc 丢了斧子以后.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">落在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">làzài</span>{" "}
                      <span className="cv">bỏ quên ở</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">掉在</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">diàozài</span>{" "}
                      <span className="cv">rơi ở</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g12">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">着 zháo</span>
                  <span className="gm">đạt được mục đích, có kết quả</span>
                </div>
                <div className="gd">
                  V + 着 (đọc zháo): mục đích của hành động đã đạt. Cùng nghĩa
                  với 到 nhưng khẩu ngữ hơn. Hỏi: V + 着 + 了没有?
                </div>
              </td>
            </tr>

            <tr>
              <td className="stt">80</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">找着</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǎozháo</div>
                <div className="pv">tìm được</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我找了半天也没找着。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ zhǎole bàntiān yě méi zhǎozháo.
                  </div>
                  <div className="vi">
                    Tớ tìm cả buổi mà vẫn không tìm thấy.{" "}
                    <span className="src">B12 tr.196</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我的护照你给我找着了没有?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Wǒ de hùzhào nǐ gěi wǒ zhǎozháo le méiyǒu?
                  </div>
                  <div className="vi">
                    Hộ chiếu của tớ cậu tìm giúp được chưa?{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>半天 ở đây nghĩa là một lúc lâu. Nghĩa tương đương: 找到.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">找到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zhǎodào</span>{" "}
                      <span className="cv">tìm được</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">81</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">买着</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎizháo</div>
                <div className="pv">mua được</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你要的那本书我给你买着了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Nǐ yào de nà běn shū wǒ gěi nǐ mǎizháo le.
                  </div>
                  <div className="vi">
                    Cuốn sách cậu cần tớ mua được cho cậu rồi.{" "}
                    <span className="src">B12 tr.202</span>
                  </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">电影票你买着了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Diànyǐng piào nǐ mǎizháo le ma?
                  </div>
                  <div className="vi">
                    Vé phim cậu mua được chưa?{" "}
                    <span className="src">B12 tr.205</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>Câu thứ hai là đáp án điền từ ở bài 3A (4).</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">买到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎidào</span>{" "}
                      <span className="cv">mua được</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">买好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">mǎihǎo</span>{" "}
                      <span className="cv">mua xong</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">82</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">睡着</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìzháo</div>
                <div className="pv">ngủ thiếp đi</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你睡着了吗?</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Nǐ shuìzháo le ma?</div>
                  <div className="vi">
                    Cậu ngủ rồi à? <span className="src">B12 tr.202</span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>睡着 chỉ trạng thái đã ngủ; 睡好 là ngủ ngon.</p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">睡好</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuìhǎo</span>{" "}
                      <span className="cv">ngủ ngon</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">猜着</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">cāizháo</span>{" "}
                      <span className="cv">đoán được</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">够着</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">gòuzháo</span>{" "}
                      <span className="cv">với tới</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">83</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">拿着 / 租着</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">názháo / zūzháo</div>
                <div className="pv">lấy được / thuê được</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">
                    照片你拿着了没有? / 房子你租着了没有?
                  </div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">
                    Zhàopiàn nǐ názháo le méiyǒu? / Fángzi nǐ zūzháo le méiyǒu?
                  </div>
                  <div className="vi">
                    Ảnh cậu lấy được chưa? / Nhà cậu thuê được chưa?{" "}
                    <span className="src">B12 tr.204 (theo mẫu)</span>{" "}
                    <span
                      className="flag"
                      title="Câu do mình điền theo đáp án hoặc mẫu thay thế, không phải nguyên văn trong sách"
                    >
                      ※
                    </span>
                  </div>
                </div>
              </td>
              <td className="gt2">
                <p>
                  Chú ý: 拿着 (ná zhe) với 着 nhẹ là trạng thái đang cầm, khác
                  với 拿着 (ná zháo) là đã lấy được.
                </p>
                <div className="others">
                  <span className="lab">Đi kèm động từ này</span>
                  <div className="chips">
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">拿到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">nádào</span>{" "}
                      <span className="cv">lấy được</span>
                    </span>
                    <span className="chip">
                      <span className="ztai__zh text-2xl leading-[1.55]">租到</span>{" "}
                      <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zūdào</span>{" "}
                      <span className="cv">thuê được</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="grp" id="g13">
              <td colSpan={4}>
                <div className="gt">
                  <span className="ztai__zh text-2xl leading-[1.55] gz">
                    早 (zǎo - sớm) và 晚 (wǎn - muộn){" "}
                  </span>
                  <span className="gm">
                    bổ ngữ kết quả (结果补语) đứng ngay sau động từ để biểu thị
                    kết quả của hành động diễn ra sớm hoặc muộn hơn mốc thời
                    gian/mong đợi.
                  </span>
                </div>
                <div className="gd">
                  phần này dò trong sách ko có, nên lấy từ trên mạng
                </div>
              </td>
            </tr>
            <tr>
              <td className="stt">84</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">来了 / 来晚</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">lái zǎo / lái wǎn</div>
                <div className="pv">Đến sớm. / Đến muộn.</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">我没来晚。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Wǒ méi lái wǎn.</div>
                  <div className="vi">Tôi đến không muộn. </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">你来晚了没有？</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Nǐ lái wǎn le méiyǒu?</div>
                  <div className="vi">Anh đến muộn phải ko. </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">对不起，我来晚了。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Duìbuqǐ, wǒ lái wǎn le.</div>
                  <div className="vi">Xin lỗi, tôi đến muộn rồi.</div>
                </div>
              </td>
              <td className="gt2"></td>
            </tr>
            <tr>
              <td className="stt">85</td>
              <td className="ph">
                <div className="ztai__zh text-2xl leading-[1.55] pz">睡早 / 睡晚</div>
                <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">shuì zǎo / shuì wǎn</div>
                <div className="pv">Ngủ sớm. / Ngủ muộn.</div>
              </td>
              <td className="exs">
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">他没,睡早。</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Tā méi shuì zǎo.</div>
                  <div className="vi">Anh ấy ngủ không sớm. </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">起早了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Qǐ zǎo le.</div>
                  <div className="vi">Dậy sớm rồi. </div>
                </div>
                <div className="ex">
                  <div className="ztai__zh text-2xl leading-[1.55]">睡晚了</div>
                  <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">Shuì wǎn le.</div>
                  <div className="vi">Ngủ muộn rồi. </div>
                </div>
              </td>
              <td className="gt2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="card notes" style={{ background: "#fff" }}>
        <h2>Những chỗ dễ nhầm</h2>
        <ul>
          <li>
            <b>Không phải bổ ngữ kết quả:</b> 读得不太熟 (bổ ngữ trạng thái với
            得, B4 tr.53); 偷走 (走 trong 偷走的, B12 tr.208, gần bổ ngữ xu
            hướng); 感冒已经好了 (好 là vị ngữ tính từ, B4 tr.65).
          </li>
          <li>
            <b>Hai chữ 成:</b> 成₁ là biến thành (写成, 改成, 换成); 成₂ là làm
            xong, đạt mục đích (去成, 做成, 建成). Cách dịch sẽ khác nhau.
          </li>
          <li>
            <b>找到 và 找着:</b> cùng nghĩa tìm được; 着 đọc{" "}
            <span className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">zháo</span> và khẩu ngữ hơn. Tương tự
            买到 / 买着.
          </li>
          <li>
            <b>看 / 看见, 听 / 听见:</b> 看, 听 là hành động; 看见, 听见 là đã
            thấy, đã nghe thấy. Kiểm tra: 我没看你的词典 khác nghĩa
            我没看见你的词典 (B4 tr.57).
          </li>
          <li>
            <b>Không đặt bổ ngữ sau tân ngữ:</b> 我看错题了 đúng, *我看题错了
            sai. Các câu sai trong phần “改错句” của hai bài: 学这本书完了,
            做了完, 错了回答, 听老师的话懂.
          </li>
          <li>
            <b>Mẫu hay đi cùng bổ ngữ kết quả:</b> 一……就……
            (我一回到家就交给你了); 才 (看到九点才看完); 再 (看完电视剧再洗吧).
          </li>
        </ul>
      </section>

      <footer>
        Ký hiệu nguồn: <b>B4</b> = Bài 4 (tr.51 đến 65); <b>B12</b> = Bài 12
        (tr.196 đến 209). Dấu <span className="flag">※</span> là câu mình điền
        theo đáp án bài tập hoặc theo mẫu thay thế, không in nguyên văn trong
        sách. Các cột “đi kèm động từ này” là phần mình bổ sung ngoài sách.
      </footer>
    </div>
  );
}
/* ───────────────────────── CSS (nhúng sẵn) ───────────────────────── */

const CSS = `
:root{
  --paper:#ffffff; --ink:#18212b; --mute:#5b6a78; --line:#d6dde3;
  --accent:#0c4a6e; --accent-soft:#f0f9ff; --py:#a2411f; --flag:#b4690e; --chip:#eef2f5;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --paper:#171f27; --ink:#e6ebf0; --mute:#97a6b4; --line:#2b3743;
    --accent:#6cc4d3; --accent-soft:#1c2c33; --py:#f0a27e; --flag:#e8b25c; --chip:#212c36;
  }
}
*{box-sizing:border-box}
html{color-scheme:light dark}
body{margin:0;
  background: #fff;
  line-height:1.55;font-size:15px}
.wrap{max-width:1180px;margin:0 auto;padding:28px 18px}
header h1{margin:0 0 6px;font-size:1.65rem;letter-spacing:.2px}
header p{margin:0;color:var(--mute);}
.card{border:1px solid var(--line);border-radius:6px;padding:16px 18px;margin:20px 0}
.card h2{margin:0 0 10px;font-size:1.1rem}
.rules{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px}
.rule{border-left:3px solid #f1f5f9;padding:2px 0 2px 12px}
.rule b{display:block;margin-bottom:2px}
.toc{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
.toc a{color:var(--accent);text-decoration:none;border:1px solid var(--line);border-radius:4px;padding:2px 10px;background:var(--paper)}
.toc a:hover,.toc a:focus-visible{background:var(--accent-soft);outline:2px solid var(--accent)}
.tblwrap{overflow-x:auto;background:var(--paper);border:1px solid var(--line);border-radius:6px}
table{border-collapse:collapse;width:100%;min-width:860px}
th,td{vertical-align:top;padding:10px 12px;border-bottom:1px solid var(--line);text-align:left}
thead th{position:sticky;top:0;background:#f3f5f7;color:#000;font-weight:600;z-index:2}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]) thead th{color:#0c1519}}
.stt{width:46px;color:var(--mute);text-align:center}
.ph{width:17%}
.exs{width:38%}
.gt2{width:40%}
.pz{font-size:1.45em;line-height:1.25}
.pv{color:var(--mute);margin-top:2px}
tr.grp td{background:var(--accent-soft);border-top:2px solid var(--accent);padding:12px}
.gt{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.gz{font-size:1.5em;font-weight:700;color:var(--accent)}
.gm{font-weight:600}
.gd{color:var(--mute);margin-top:2px;max-width:100ch}
.ex{margin-bottom:10px}
.ex:last-child{margin-bottom:0}
.ex .ztai__zh{font-size:1.18em}
.vi{color:var(--ink)}
.src{display:inline-block;font-size:.78em;color:var(--mute);border:1px solid var(--line);border-radius:3px;padding:0 5px;margin-left:4px;white-space:nowrap}
.flag{color:var(--flag);font-weight:700;cursor:help}
.gt2 p{margin:0 0 8px}
.lab{display:block;font-size:.82em;color:var(--mute);margin-bottom:4px}
.chips{display:flex;flex-wrap:wrap;gap:5px}
.chip{background:var(--chip);border-radius:4px;padding:2px 8px;font-size:.92em}
.chip2{background: #f8fafc;border-radius:4px;padding:2px 8px;font-size:1.25em;
padding: 6px;color: #86198f;}
.cv{color:var(--mute)}
.sumtbl{min-width:0; margin:0;}
.sumtbl td,.sumtbl th{padding:6px 10px}
.sumtbl thead th{position:static}
.sz{font-size:1.75em;color:var(--accent)}
.notes ul{margin:0;padding-left:20px}
.notes li{margin-bottom:6px}
.ztai__py {color: #a2411f;letter-spacing: 1px;}
footer{color:var(--mute);margin-top:18px;font-size:.9em}
@media (max-width:640px){body{font-size:14px}header h1{font-size:1.3rem}}
@media print{.toc{display:none}thead th{position:static}body{background:#fff}}
`;
