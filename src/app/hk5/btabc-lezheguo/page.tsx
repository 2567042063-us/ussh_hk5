import { Metadata } from "next";
import Link from "next/link";

import BaiTapLeZheGuo from "@shared/components/BaiTapLeZheGuo";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export const metadata: Metadata = {
  title: "了 – 着 – 过",
  description: "bài tập phân biệt 了 – 着 – 过",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="Phân biệt 了 – 着 – 过"
        canonical="https://ussh-hk5-neon.vercel.app/hk5"
      />
      <div className="flex-1">
        <h2 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Phân biệt 了 – 着 – 过
        </h2>
        <BaiTapLeZheGuo />
        <div className="ztai__dochieu">
          <p>
            File có 100 câu, tách thành 103 câu hỏi vì một số câu có hai chỗ
            trống.
            <br /> Mỗi câu có 3 lựa chọn A, B, C là 了 / 着 / 过, xáo thứ tự mỗi
            lần.
            <br /> Chọn xong sẽ hiện câu hoàn chỉnh, pinyin, bản dịch tiếng Việt
            và phần giải thích.
          </p>
          <p>Câu hỏi chia thành 5 bộ:</p>
          <table className="ztai__table">
            <thead>
              <tr>
                <th scope="col">Bộ</th>
                <th scope="col">Nội dung</th>
                <th scope="col">Số câu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span dir="ltr">1</span>
                </td>
                <td>了 và 过</td>
                <td>
                  <span dir="ltr">20</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span dir="ltr">2</span>
                </td>
                <td>
                  着 và 了, có các câu tồn tại như 墙上挂着, 门开着呢 và 着 chỉ
                  cách thức như 笑着说
                </td>
                <td>
                  <span dir="ltr">20</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span dir="ltr">3</span>
                </td>
                <td>着 và 过</td>
                <td>
                  <span dir="ltr">15</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span dir="ltr">4</span>
                </td>
                <td>Tổng hợp</td>
                <td>
                  <span dir="ltr">25</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span dir="ltr">5</span>
                </td>
                <td>Mở rộng: 没…过, 没…着, V了V, V着V着</td>
                <td>
                  <span dir="ltr">20</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Mình dựa vào nội dung bài 15 mà bạn nhắc tới, nhưng không có sách
            trước mặt nên không chép câu nào từ sách.
          </p>

          <p>
            Mỗi câu mình thiết kế có từ gợi ý rõ để chỉ có một đáp án hợp lý, ví
            dụ 昨天 hay 已经 thường đi với 了, 一直 hay 正在…呢 thường đi với
            着, 曾经 hay 从来没 thường đi với 过.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="https://tiffanysmandarin.com/index.php/2025/03/16/verbing-away-zhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ref: Verb-ing away (着) - Tiffany's Mandarin
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
