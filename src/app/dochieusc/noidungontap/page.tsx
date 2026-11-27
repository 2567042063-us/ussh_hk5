import Link from "next/link";

import LessonLayout from "../LessonLayout";
import { topMenus } from "../lessons/topmenus";

export default function Page() {
  return (
    <LessonLayout lesson={topMenus[0]}>
      <div className="mb-4 grid grid-cols-1 gap-3 px-5 text-slate-500 dark:text-slate-300">
        <div className="flex flex-col gap-1.5 rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          <p>NỘI DUNG ÔN TẬP - CẤU TRÚC ĐỀ THI</p>
          <table className="ztai__table">
            <thead>
              <tr>
                <th>GIỮA KÌ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex flex-col gap-4 text-slate-800 dark:text-slate-200">
                  <p>- Điền từ/cụm từ vào chỗ trống</p>
                  <p>- Chọn giải thích đúng cho các từ ngữ được gạch chân</p>
                  <p>
                    - Dựa vào nội dung bài đọc chọn đáp án đúng, phán đoán đúng
                    sai, điền từ ngữ/thông tin phù hợp… <br />
                    (2-3 đoạn văn, 400-500 chữ/đoạn)
                  </p>
                  <p className="text-rose-700 dark:text-rose-300">
                    (Ôn tập đơn nguyên 2, 3)
                  </p>
                </td>
              </tr>
              <tr>
                <th>CUỐI KÌ</th>
              </tr>
              <tr>
                <td>
                  <p>- Điền từ/cụm từ vào chỗ trống</p>
                  <p>- Chọn giải thích đúng cho các từ/cụm từ</p>
                  <p>
                    - Dựa vào nội dung bài đọc chọn đáp án đúng, phán đoán đúng
                    sai, điền từ ngữ/thông tin phù hợp, trả lời câu hỏi… (3-4
                    đoạn văn, 400-500 chữ/đoạn)
                  </p>
                  <p>(Ôn tập các đơn nguyên đã học: 2, 3, 4)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5k lộn xộn  */}

        <div className="flex flex-col rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          <div className="border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700">
            <Link
              href="/hk5/yuedu/dy21-guonian"
              prefetch={false}
              // target="_blank"
              // rel="noopener noreferrer"
              className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
            >
              Đọc hiểu _ dy21-guonian
            </Link>
          </div>
          <div className="border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700">
            <Link
              href="/hk5/yuedu/dy22-zouqinqi"
              prefetch={false}
              // target="_blank"
              // rel="noopener noreferrer"
              className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
            >
              Đọc hiểu _ dy22-zouqinqi
            </Link>
          </div>
          <div className="border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700">
            <Link
              href="/hk5/self-study"
              prefetch={false}
              className="ml-3 text-lg text-sky-600 hover:text-yellow-600 dark:text-sky-300 dark:hover:text-yellow-400"
            >
              {`₊·*◟(˶╹̆ꇴ╹̆˵)◜‧*･`}
            </Link>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
