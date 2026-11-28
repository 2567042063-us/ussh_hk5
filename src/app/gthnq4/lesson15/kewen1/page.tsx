import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";
import Kewen from "./BaiKhoaChinh1";

export default function Page() {
  return (
    <LessonLayout lesson={lesson15}>
      <Kewen />
      <div className="px-6">
        <div className="my-5 rounded-sm border border-stone-200 bg-white">
          <p className="border-l-3 mt-4 border-stone-600 px-4 text-lg font-semibold text-stone-700">
            Giải thích thêm
          </p>
          <div className="p-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                <span className="text-gray-500">1.</span>
                <span className="ztai__zh text-2xl text-sky-800">
                  长得什么样
                </span>
                <span className="ztai__py mx-2 text-sm font-normal">
                  zhǎng de shénme yàng
                </span>
              </h2>

              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-3 text-left align-top font-normal">
                      <div className="ztai__zh text-2xl font-medium">
                        长得什么样
                      </div>
                      <p className="ztai__py text-sm">zhǎng de shénme yàng</p>
                    </th>
                    <th className="border border-gray-300 p-3 text-left align-top font-normal">
                      <div className="ztai__zh text-2xl font-medium">
                        长得怎么样
                      </div>
                      <p className="ztai__py text-sm">zhǎng de zěnme yàng</p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      colSpan={2}
                      className="border border-gray-300 p-2 text-center"
                    >
                      đều dùng để hỏi về ngoại hình
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-3 align-top">
                      <p>Hỏi về đặc điểm cụ thể, khách quan của ngoại hình.</p>
                      <p>
                        Như muốn biết người đó có đặc điểm{" "}
                        <span className="font-bold text-red-600">
                          nhận dạng
                        </span>{" "}
                        gì (cao hay thấp, mập hay gầy, mắt to hay nhỏ, có đeo
                        kính không, tóc dài hay ngắn...).
                      </p>
                    </td>

                    <td className="border border-gray-300 p-3 align-top">
                      <p>Hỏi về đánh giá, nhận xét chủ quan về ngoại hình.</p>
                      <p>
                        Như muốn biết người đó nhìn có đẹp, có ưa nhìn hay không
                        (đẹp, xấu, bình thường, xinh, 帅...).
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-3 align-top text-xl">
                      <p className="ztai__zh">你的新朋友长得什么样？</p>
                      <p className="ztai__zh">
                        ↳ 她很高，有一头长发，戴黑框眼镜。
                      </p>
                    </td>

                    <td className="border border-gray-300 p-3 align-top text-xl">
                      <p className="ztai__zh">你的新朋友长得怎么样？</p>
                      <p className="ztai__zh">
                        ↳ 她长得很漂亮 / 挺可爱的 / 相貌平平。
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} className="border border-gray-300 p-3">
                      <span className="font-semibold">Kết luận:</span>
                      trong bài 服务员 hỏi mục đích để nhận dạng nên dùng
                      <span className="ztai__zh text-xl">长得什么样</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                <span className="text-gray-500">2. </span>
                <span className="ztai__zh text-2xl text-sky-800">摄像机</span>
                <span className="ztai__py mx-2 text-sm font-normal">
                  shèxiàngjī
                </span>
                <span className="mx-2 text-sm font-normal uppercase">
                  [NHIẾP TƯỢNG CƠ]
                </span>
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="ztai__zh text-2xl">摄政的摄</span> - Nhiếp
                  trong Nhiếp chính <span className="ztai__zh">摄政</span>
                  <span className="ztai__py mx-2 text-sm font-normal">
                    shèzhèng
                  </span>
                  (thay vua nắm quyền cai trị.)
                </li>
                <li>
                  Hai từ
                  <span className="ztai__zh mx-2 text-xl">摄影机</span>
                  <span className="ztai__py mx-2 text-sm font-normal">
                    shèyǐngjī
                  </span>
                  và
                  <span className="ztai__zh mx-2 text-xl">摄像机</span>
                  <span className="ztai__py mx-2 text-sm font-normal">
                    shèxiàngjī
                  </span>
                  đều có thể dịch chung là “máy quay” trong tiếng Việt.
                  <p className="ml-3">
                    <span className="ztai__zh">- 摄影机</span>: máy quay chuyên
                    dụng để quay phim điện ảnh.
                  </p>
                  <p className="ml-3">
                    <span className="ztai__zh">- 摄像机</span>: máy quay thông
                    thường.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
