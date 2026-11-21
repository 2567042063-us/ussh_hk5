import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 注释" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02}>
      <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
        <div className="inline-flex items-center gap-3 rounded-sm bg-stone-200 px-3 py-1.5">
          <span className="ztai__zh text-stone-600">五</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">词语</span>{" "}
            <span className="text-sm">Cíyǔ</span>{" "}
            <span className="text-sm">Read out the following phrases</span>
          </span>
        </div>

        <section className="mt-3">
          <table className="ztai__table w-full border-collapse text-left">
            <tbody className="divide-y divide-stone-200">
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">上星期</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shàng xīngqī
                  </p>
                  <p className="mt-1 text-sm">tuần trước</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">上月</p>
                  <p className="ztai__py text-sm text-stone-500">shàng yuè</p>
                  <p className="mt-1 text-sm">tháng trước</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">上周</p>
                  <p className="ztai__py text-sm text-stone-500">shàng zhōu</p>
                  <p className="mt-1 text-sm">tuần trước</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">上学期</p>
                  <p className="ztai__py text-sm text-stone-500">shàng xuéqī</p>
                  <p className="mt-1 text-sm">học kỳ trước</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">学习上</p>
                  <p className="ztai__py text-sm text-stone-500">xuéxí shang</p>
                  <p className="mt-1 text-sm">về mặt học tập</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">工作上</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gōngzuò shang
                  </p>
                  <p className="mt-1 text-sm">về mặt công việc</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">生活上</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shēnghuó shang
                  </p>
                  <p className="mt-1 text-sm">về mặt cuộc sống</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">班上</p>
                  <p className="ztai__py text-sm text-stone-500">bān shang</p>
                  <p className="mt-1 text-sm">trong lớp</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">发微信</p>
                  <p className="ztai__py text-sm text-stone-500">fā Wēixìn</p>
                  <p className="mt-1 text-sm">gửi WeChat</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">发照片</p>
                  <p className="ztai__py text-sm text-stone-500">fā zhàopiàn</p>
                  <p className="mt-1 text-sm">gửi ảnh</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">发邮件</p>
                  <p className="ztai__py text-sm text-stone-500">fā yóujiàn</p>
                  <p className="mt-1 text-sm">gửi email</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">发短信</p>
                  <p className="ztai__py text-sm text-stone-500">fā duǎnxìn</p>
                  <p className="mt-1 text-sm">gửi tin nhắn SMS</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">起床后</p>
                  <p className="ztai__py text-sm text-stone-500">
                    qǐchuáng hòu
                  </p>
                  <p className="mt-1 text-sm">sau khi thức dậy</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">下课后</p>
                  <p className="ztai__py text-sm text-stone-500">xiàkè hòu</p>
                  <p className="mt-1 text-sm">sau khi tan học</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">吃饭后</p>
                  <p className="ztai__py text-sm text-stone-500">chīfàn hòu</p>
                  <p className="mt-1 text-sm">sau khi ăn cơm</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">回学校后</p>
                  <p className="ztai__py text-sm text-stone-500">
                    huí xuéxiào hòu
                  </p>
                  <p className="mt-1 text-sm">sau khi về trường</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">来自美国</p>
                  <p className="ztai__py text-sm text-stone-500">
                    láizì Měiguó
                  </p>
                  <p className="mt-1 text-sm">đến từ Mỹ</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">来自亚洲</p>
                  <p className="ztai__py text-sm text-stone-500">
                    láizì Yàzhōu
                  </p>
                  <p className="mt-1 text-sm">đến từ châu Á</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">来自各国</p>
                  <p className="ztai__py text-sm text-stone-500">láizì gèguó</p>
                  <p className="mt-1 text-sm">đến từ các nước</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">来自上海</p>
                  <p className="ztai__py text-sm text-stone-500">
                    láizì Shànghǎi
                  </p>
                  <p className="mt-1 text-sm">đến từ Thượng Hải</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">动作柔和</p>
                  <p className="ztai__py text-sm text-stone-500">
                    dòngzuò róuhé
                  </p>
                  <p className="mt-1 text-sm">động tác mềm mại</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">动作缓慢</p>
                  <p className="ztai__py text-sm text-stone-500">
                    dòngzuò huǎnmàn
                  </p>
                  <p className="mt-1 text-sm">động tác chậm rãi</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">动作优美</p>
                  <p className="ztai__py text-sm text-stone-500">
                    dòngzuò yōuměi
                  </p>
                  <p className="mt-1 text-sm">động tác đẹp</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">动作舒展</p>
                  <p className="ztai__py text-sm text-stone-500">
                    dòngzuò shūzhǎn
                  </p>
                  <p className="mt-1 text-sm">động tác thoải mái, duỗi rộng</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">预防疾病</p>
                  <p className="ztai__py text-sm text-stone-500">
                    yùfáng jíbìng
                  </p>
                  <p className="mt-1 text-sm">phòng bệnh</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">预防感冒</p>
                  <p className="ztai__py text-sm text-stone-500">
                    yùfáng gǎnmào
                  </p>
                  <p className="mt-1 text-sm">phòng cảm cúm</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">有作用</p>
                  <p className="ztai__py text-sm text-stone-500">yǒu zuòyòng</p>
                  <p className="mt-1 text-sm">có tác dụng</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">没有作用</p>
                  <p className="ztai__py text-sm text-stone-500">
                    méiyǒu zuòyòng
                  </p>
                  <p className="mt-1 text-sm">không có tác dụng</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">表示感谢</p>
                  <p className="ztai__py text-sm text-stone-500">
                    biǎoshì gǎnxiè
                  </p>
                  <p className="mt-1 text-sm">bày tỏ lòng cảm ơn</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">表示满意</p>
                  <p className="ztai__py text-sm text-stone-500">
                    biǎoshì mǎnyì
                  </p>
                  <p className="mt-1 text-sm">tỏ ra hài lòng</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">没有表示</p>
                  <p className="ztai__py text-sm text-stone-500">
                    méiyǒu biǎoshì
                  </p>
                  <p className="mt-1 text-sm">không có biểu hiện gì</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">爱的表示</p>
                  <p className="ztai__py text-sm text-stone-500">
                    ài de biǎoshì
                  </p>
                  <p className="mt-1 text-sm">biểu hiện của tình yêu</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">很好玩儿</p>
                  <p className="ztai__py text-sm text-stone-500">hěn hǎowánr</p>
                  <p className="mt-1 text-sm">rất vui, rất thú vị</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">不好玩儿</p>
                  <p className="ztai__py text-sm text-stone-500">bù hǎowánr</p>
                  <p className="mt-1 text-sm">không vui, không thú vị</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">不太适应</p>
                  <p className="ztai__py text-sm text-stone-500">
                    bú tài shìyìng
                  </p>
                  <p className="mt-1 text-sm">không thích nghi lắm</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">很难适应</p>
                  <p className="ztai__py text-sm text-stone-500">
                    hěn nán shìyìng
                  </p>
                  <p className="mt-1 text-sm">rất khó thích nghi</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </LessonLayout>
  );
}
