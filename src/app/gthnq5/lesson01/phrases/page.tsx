import LessonLayout from "../../LessonLayout";
import { lesson01 } from "../../lessons/lesson01";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 01 - 注释" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson01}>
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
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">实现理想</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shíxiàn lǐxiǎng
                  </p>
                  <p className="mt-1 text-sm">thực hiện lý tưởng</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">实现愿望</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shíxiàn yuànwàng
                  </p>
                  <p className="mt-1 text-sm">thực hiện nguyện vọng</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">实现不了</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shíxiàn bùliǎo
                  </p>
                  <p className="mt-1 text-sm">không thể thực hiện được</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">改变主意</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gǎibiàn zhǔyi
                  </p>
                  <p className="mt-1 text-sm">đổi ý</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">改变计划</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gǎibiàn jìhuà
                  </p>
                  <p className="mt-1 text-sm">thay đổi kế hoạch</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">改变想法</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gǎibiàn xiǎngfǎ
                  </p>
                  <p className="mt-1 text-sm">thay đổi suy nghĩ</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">有联系</p>
                  <p className="ztai__py text-sm text-stone-500">yǒu liánxì</p>
                  <p className="mt-1 text-sm">có liên hệ, có liên quan</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">没有联系</p>
                  <p className="ztai__py text-sm text-stone-500">
                    méiyǒu liánxì
                  </p>
                  <p className="mt-1 text-sm">
                    không có liên hệ, không liên quan
                  </p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">联系学校</p>
                  <p className="ztai__py text-sm text-stone-500">
                    liánxì xuéxiào
                  </p>
                  <p className="mt-1 text-sm">liên hệ với nhà trường</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">办手续</p>
                  <p className="ztai__py text-sm text-stone-500">bàn shǒuxù</p>
                  <p className="mt-1 text-sm">làm thủ tục</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">办事</p>
                  <p className="ztai__py text-sm text-stone-500">bànshì</p>
                  <p className="mt-1 text-sm">làm việc, giải quyết công việc</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">办签证</p>
                  <p className="ztai__py text-sm text-stone-500">
                    bàn qiānzhèng
                  </p>
                  <p className="mt-1 text-sm">làm visa</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">临出发</p>
                  <p className="ztai__py text-sm text-stone-500">lín chūfā</p>
                  <p className="mt-1 text-sm">
                    sắp xuất phát, ngay trước lúc xuất phát
                  </p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">临上车前</p>
                  <p className="ztai__py text-sm text-stone-500">
                    lín shàng chē qián
                  </p>
                  <p className="mt-1 text-sm">ngay trước khi lên xe</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">临上飞机</p>
                  <p className="ztai__py text-sm text-stone-500">
                    lín shàng fēijī
                  </p>
                  <p className="mt-1 text-sm">sắp lên máy bay</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">拼命跑</p>
                  <p className="ztai__py text-sm text-stone-500">pīnmìng pǎo</p>
                  <p className="mt-1 text-sm">chạy hết sức, chạy bán mạng</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">拼命学习</p>
                  <p className="ztai__py text-sm text-stone-500">
                    pīnmìng xuéxí
                  </p>
                  <p className="mt-1 text-sm">học hết mình, học cật lực</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">拼命工作</p>
                  <p className="ztai__py text-sm text-stone-500">
                    pīnmìng gōngzuò
                  </p>
                  <p className="mt-1 text-sm">làm việc cật lực</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">跟父母商量</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gēn fùmǔ shāngliang
                  </p>
                  <p className="mt-1 text-sm">bàn bạc với bố mẹ</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">跟学校商量</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gēn xuéxiào shāngliang
                  </p>
                  <p className="mt-1 text-sm">bàn bạc với nhà trường</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">跟朋友商量</p>
                  <p className="ztai__py text-sm text-stone-500">
                    gēn péngyou shāngliang
                  </p>
                  <p className="mt-1 text-sm">bàn bạc với bạn bè</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">请放心</p>
                  <p className="ztai__py text-sm text-stone-500">
                    qǐng fàngxīn
                  </p>
                  <p className="mt-1 text-sm">xin hãy yên tâm</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">不放心</p>
                  <p className="ztai__py text-sm text-stone-500">bù fàngxīn</p>
                  <p className="mt-1 text-sm">không yên tâm</p>
                </td>
                <td className="w-1/3 px-4 py-3 align-top">
                  <p className="ztai__zh text-2xl">放不下心</p>
                  <p className="ztai__py text-sm text-stone-500">
                    fàng bu xià xīn
                  </p>
                  <p className="mt-1 text-sm">không yên lòng được, cứ lo mãi</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </LessonLayout>
  );
}
