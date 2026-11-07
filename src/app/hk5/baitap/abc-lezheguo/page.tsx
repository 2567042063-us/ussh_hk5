import { Metadata } from "next";
import Link from "next/link";

import BaiTapLeZheGuo from "@shared/components/baitap/BaiTapLeZheGuo";

import Footer from "../../../common/Footer";
import Header from "../../../common/Header";

export const metadata: Metadata = {
  title: "了 - 着 - 过",
  description: "bài tập phân biệt 了 - 着 - 过",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header
        title="Phân biệt 了 - 着 - 过"
        canonical="https://ussh-hk5-neon.vercel.app/hk5"
      />
      <div className="container-bt flex-1">
        <h1 className="mb-2 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:text-primary-dark">
          Bài tập phân biệt 了 - 着 - 过
        </h1>
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
          <table className="ztai__table w-full">
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

          <table className="ztai__table w-full">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>
                      <span>Trợ từ</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>&Yacute; nghĩa cốt l&otilde;i</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>Từ tiếng Việt tương đương</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>V&iacute; dụ minh họa</span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>
                      <span>了</span>
                    </strong>
                    <strong>
                      <span> (le)</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>
                        H&agrave;nh động đ&atilde; ho&agrave;n th&agrave;nh
                      </span>
                    </strong>
                    <span>
                      &nbsp;hoặc trạng th&aacute;i đ&atilde; c&oacute; sự thay
                      đổi.
                    </span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>...rồi, ...xong</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>我吃了饭</span>
                    <span>。</span>
                    <span>
                      &nbsp;
                      <br />{" "}
                      <em>
                        (T&ocirc;i ăn cơm <strong>xong rồi</strong>.)
                      </em>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>
                      <span>着</span>
                    </strong>
                    <strong>
                      <span> (zhe)</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>Trạng th&aacute;i đang</span>
                    </strong>
                    <strong>
                      <span> TIẾP DIỄN</span>
                    </strong>
                    <span>
                      &nbsp;hoặc h&agrave;nh động đang duy tr&igrave; li&ecirc;n
                      tục.
                    </span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>...đang, ...giữ nguy&ecirc;n</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>
                      门开<strong>着</strong>。
                    </span>
                    <span>
                      &nbsp;
                      <br />{" "}
                      <em>
                        (Cửa <strong>đang</strong> mở - đang ở trạng th&aacute;i
                        mở).
                      </em>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>
                      <span>过</span>
                    </strong>
                    <strong>
                      <span> (gu&ograve;)</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>Kinh nghiệm qu&aacute; khứ</span>
                    </strong>
                    <span>
                      , h&agrave;nh động đ&atilde; qua v&agrave; hiện tại
                      kh&ocirc;ng c&ograve;n nữa.
                    </span>
                  </p>
                  <p>
                    <span>
                      Nếu h&agrave;nh động đ&oacute; chưa bao giờ xảy ra từ
                      trước đến nay, bạn d&ugrave;ng&nbsp;
                    </span>
                    <span>没</span>
                    <span>...</span>
                    <span>过</span>
                    <span>.</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>...từng, ...đ&atilde; từng</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>
                      我去<strong>过</strong>北京。
                    </span>
                    <span>
                      &nbsp;
                      <br />{" "}
                      <em>
                        (T&ocirc;i <strong>từng</strong> đi Bắc Kinh - giờ
                        kh&ocirc;ng ở đ&oacute; nữa).
                      </em>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>
                      <span>&nbsp;</span>
                    </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>
                      <span>Cấu tr&uacute;c V1 + </span>
                    </strong>
                    <strong>
                      <span>着</span>
                    </strong>
                    <strong>
                      <span> + V2</span>
                    </strong>
                  </p>
                  <p>
                    <span>
                      他<strong>笑</strong>着<strong>说</strong>。
                    </span>
                    <span>&nbsp;</span>
                  </p>
                </td>
                <td colSpan={2}>
                  <p>
                    <span>
                      Vừa l&agrave;m c&aacute;i n&agrave;y vừa l&agrave;m
                      c&aacute;i kia
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
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
