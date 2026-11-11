import fs from "fs";
import path from "path";
import Link from "next/link";

export default function DocHieuSC() {
  // Tất cả bài đọc yuedu
  const dirPathBkp = path.join(process.cwd(), "public", "hk5", "yuedu");
  let filesBkp: string[] = [];
  try {
    const files = fs.readdirSync(dirPathBkp);
    const htmlFilesBkp = files.filter((file) => file.endsWith(".html"));
    filesBkp = htmlFilesBkp.map((file) => file.replace(/\.html$/, ""));
  } catch (error) {
    console.error("Không tìm thấy thư mục public/hk5/bkp:", error);
  }

  return (
    <div className="max-w-200 mx-auto">
      <h2 className="mb-5 border-b-2 border-t-2 border-dashed border-sky-600 py-3 text-center text-2xl font-extralight leading-tight text-sky-600 dark:border-sky-300 dark:text-sky-300">
        Đọc hiểu Sơ cấp
      </h2>

      <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[0.5fr_1fr]">
        <div className="flex flex-col rounded-sm border border-cyan-800/20 p-3 dark:border-slate-700">
          {filesBkp.map((fileName) => (
            <div
              key={fileName}
              className={`border-b border-dashed border-cyan-800/20 py-1 last:border-0 dark:border-slate-700`}
            >
              <Link
                href={`/hk5/yuedu/${fileName}`}
                prefetch={false}
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-block px-5 text-slate-500 hover:text-yellow-500 dark:text-sky-400 dark:hover:text-yellow-300"
              >
                Đọc hiểu _ {fileName}
              </Link>
            </div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
