export default function KhauNgu() {
  return (
    <div className="mb-10">
      <h2 className="border-t-3 border-b-3 mb-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
        Khẩu ngữ
      </h2>
      <div className="mx-auto max-w-[800px] rounded-lg bg-white p-5 shadow dark:bg-slate-700">
        <h4 className="text-center text-xl text-cyan-600 dark:text-cyan-400">
          GK (26/12)
        </h4>
        <ul>
          <li>
            4 chủ đề, bốc thăm ngẫu nhiên.
            <br />
            Tự bắt cặp sẵn, nếu không có cặp thì GV chọn ngẫu nhiên.
            <br />
            trình bày khoảng 3-5 phút.
          </li>
          <li>
            Phần 1 (8 điểm): nội dung 4.0, ngữ pháp 2.0, diễn đạt (ngữ âm + lưu
            loát) 2.0.
          </li>
          <li>Phần 2 (2 điểm): phản xạ, trả lời câu hỏi của GV.</li>
        </ul>
        <div className="tblwrap">
          <table className="ztai__table">
            <tbody>
              <tr>
                <th>#</th>
                <th>Chủ đề</th>
                <th>Nghĩa</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span className="ztai__zh">学习汉语的目标</span>
                  <br />
                  <small>Xuéxí Hànyǔ de mùbiāo</small>
                </td>
                <td>Mục tiêu học tiếng Hán</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <span className="ztai__zh">一次难忘的购物经历</span>
                  <br />
                  <small>Yí cì nánwàng de gòuwù jīnglì</small>
                </td>
                <td>Một trải nghiệm mua sắm khó quên</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <span className="ztai__zh">说说你这个假期的计划</span>
                  <br />
                  <small>Shuōshuo nǐ zhège jiàqī de jìhuà</small>
                </td>
                <td>Kế hoạch của bạn trong kỳ nghỉ này</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <span className="ztai__zh">说说你所在城市的季节特点</span>
                  <br />
                  <small>Shuōshuo nǐ suǒzài chéngshì de jìjié tèdiǎn</small>
                </td>
                <td>Đặc điểm các mùa ở thành phố bạn sống</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 className="text-center text-xl text-cyan-600 dark:text-cyan-400">
          CK (15/01)
        </h4>
        <ul>
          <li>Khoảng 10 chủ đề (gồm 4 chủ đề của GK).</li>
          <li>
            Thi cá nhân, bốc thăm ngẫu nhiên chọn chủ đề, tương tự thi Khẩu ngữ
            CK ở HK4.
          </li>
        </ul>
      </div>
    </div>
  );
}
