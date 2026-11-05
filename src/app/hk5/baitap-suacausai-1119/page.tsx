import Link from "next/link";

import BaiTapSuaCauSai1119 from "@shared/components/BaiTapSuaCauSai1119";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="container flex-1">
        <BaiTapSuaCauSai1119 />

        <section className="mx-auto mt-4 w-full max-w-xl rounded-sm bg-stone-50 p-4 md:p-6">
          <p dir="ltr">
            <strong>
              Lưu &yacute; về đ&aacute;p &aacute;n trong file PDF:
            </strong>{" "}
            ở b&agrave;i 15 c&acirc;u (2), (3), (4), đ&aacute;p &aacute;n trong
            file kh&ocirc;ng khớp với c&acirc;u hỏi (v&iacute; dụ c&acirc;u 2
            ghi "才 &rarr; 再" nhưng c&acirc;u kh&ocirc;ng c&oacute; chữ 才).
            M&igrave;nh đ&atilde; tự sửa theo nội dung c&acirc;u v&agrave; ghi
            ch&uacute; m&agrave;u v&agrave;ng ngay tr&ecirc;n c&acirc;u
            đ&oacute;. Bạn n&ecirc;n kiểm tra lại với gi&aacute;o vi&ecirc;n.
          </p>
          <p dir="ltr">Ngo&agrave;i ra:</p>
          <ul dir="ltr">
            <li>
              <strong>B&agrave;i 13 c&acirc;u 4:</strong> đ&aacute;p &aacute;n
              s&aacute;ch chỉ th&ecirc;m 被. M&igrave;nh viết th&ecirc;m 走
              (借走了) cho tự nhi&ecirc;n hơn v&agrave; c&oacute; ghi ch&uacute;
              trong phần giải th&iacute;ch.
            </li>
            <li>
              <strong>B&agrave;i 16 c&acirc;u 6:</strong> ngo&agrave;i đổi 来
              &rarr; 说, m&igrave;nh bỏ lu&ocirc;n 很 v&igrave; sau
              越&hellip;越&hellip; kh&ocirc;ng d&ugrave;ng 很.
            </li>
            <li>
              <strong>Pinyin:</strong> hiện chỉ c&oacute; cho c&acirc;u
              đ&uacute;ng, c&acirc;u sai chưa c&oacute;. Nếu bạn muốn th&ecirc;m
              pinyin cho cả c&acirc;u sai th&igrave; b&aacute;o m&igrave;nh
              nh&eacute;.
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1-ClXIjK8mwqEFkLCSWf-CUNV4qHCzpP-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Đối chiếu với file đáp án gốc PDF
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}
