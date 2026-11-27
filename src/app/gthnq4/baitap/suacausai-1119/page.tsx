import Link from "next/link";

import BaiTapSuaCauSai1119 from "@shared/components/baitap/BaiTapSuaCauSai1119";

import LessonLayout from "../../LessonLayout";
import { baitapq4 } from "../../lessons/baitap";

// export default function Page() {
//   return (
//     <LessonLayout lesson={baitapq4}>
//       <BaiKhoaChinh1 />
//     </LessonLayout>
//   );
// }

export default function Page() {
  return (
    <LessonLayout lesson={baitapq4} hideHeader>
      <BaiTapSuaCauSai1119 />
      <section className="mx-auto mt-4 w-full max-w-xl rounded-sm bg-stone-50 p-4 md:p-6">
        <p dir="ltr">
          <strong>Lưu &yacute; về đ&aacute;p &aacute;n trong file PDF:</strong>{" "}
          ở b&agrave;i 15 c&acirc;u (2), (3), (4), đ&aacute;p &aacute;n trong
          file kh&ocirc;ng khớp với c&acirc;u hỏi (v&iacute; dụ c&acirc;u 2 ghi
          &quot;才 &rarr; 再&quot; nhưng c&acirc;u kh&ocirc;ng c&oacute; chữ
          才). M&igrave;nh đ&atilde; tự sửa theo nội dung c&acirc;u v&agrave;
          ghi ch&uacute; m&agrave;u v&agrave;ng ngay tr&ecirc;n c&acirc;u
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
    </LessonLayout>
  );
}
