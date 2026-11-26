import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 03 - 语音" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson03}>
      <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
        <div className="inline-flex items-center gap-3 rounded-sm bg-stone-200 px-3 py-1.5">
          <span className="ztai__zh text-stone-600">五</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">语音</span>{" "}
            <span className="text-sm">Yǔyīn</span>{" "}
            <span className="text-sm">Phonetics</span>
          </span>
        </div>
        <div className="my-3 w-full opacity-80">
          <audio controls preload="none" className="lesson-audio h-10 w-full">
            <source
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/03_lianxi.mp3"
              type="audio/mpeg"
            />
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
          </audio>
        </div>

        <section>
          <h1 className="ztai__zh mb-1 text-2xl font-bold">(1) 辨音辨调</h1>
          <p className="mb-5 text-stone-500">
            Distinguish the pronunciations and tones
          </p>
          <div className="overflow-x-auto rounded-sm border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">左边</th>
                  <th className="px-4 py-3 font-semibold">Pinyin</th>
                  <th className="px-4 py-3 font-semibold">Tiếng Việt</th>
                  <th className="px-4 py-3 font-semibold">右边</th>
                  <th className="px-4 py-3 font-semibold">Pinyin</th>
                  <th className="px-4 py-3 font-semibold">Tiếng Việt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">部分</td>
                  <td className="px-4 py-3">bùfen</td>
                  <td className="px-4 py-3 text-stone-600">bộ phận, phần</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">不分</td>
                  <td className="px-4 py-3">bù fēn</td>
                  <td className="px-4 py-3 text-stone-600">
                    không phân biệt
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">旅游</td>
                  <td className="px-4 py-3">lǚyóu</td>
                  <td className="px-4 py-3 text-stone-600">du lịch</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">理由</td>
                  <td className="px-4 py-3">lǐyóu</td>
                  <td className="px-4 py-3 text-stone-600">lý do</td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">善良</td>
                  <td className="px-4 py-3">shànliáng</td>
                  <td className="px-4 py-3 text-stone-600">
                    lương thiện, tốt bụng
                  </td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">商量</td>
                  <td className="px-4 py-3">shāngliang</td>
                  <td className="px-4 py-3 text-stone-600">bàn bạc, thương lượng</td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">鲜花</td>
                  <td className="px-4 py-3">xiānhuā</td>
                  <td className="px-4 py-3 text-stone-600">hoa tươi</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">闲话</td>
                  <td className="px-4 py-3">xiánhuà</td>
                  <td className="px-4 py-3 text-stone-600">
                    chuyện phiếm, lời đàm tiếu
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">和平</td>
                  <td className="px-4 py-3">hépíng</td>
                  <td className="px-4 py-3 text-stone-600">hòa bình</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">合并</td>
                  <td className="px-4 py-3">hébìng</td>
                  <td className="px-4 py-3 text-stone-600">
                    sáp nhập, hợp nhất
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">广场</td>
                  <td className="px-4 py-3">guǎngchǎng</td>
                  <td className="px-4 py-3 text-stone-600">quảng trường</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">工厂</td>
                  <td className="px-4 py-3">gōngchǎng</td>
                  <td className="px-4 py-3 text-stone-600">nhà máy, xưởng</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="ztai__zh mb-1 mt-3 text-2xl font-bold">(2) 朗读</h2>
          <p className="mb-5 text-stone-500">Read out the following idioms</p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <article className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-2xl leading-loose">鸟语花香</p>
              <p className="mt-2 text-sm text-stone-500">niǎoyǔ-huāxiāng</p>
              <p className="mt-1 text-sm text-stone-600">
                chim hót hoa thơm (cảnh xuân tươi đẹp)
              </p>
            </article>
            <article className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-2xl leading-loose">烈日高照</p>
              <p className="mt-2 text-sm text-stone-500">lièrì gāozhào</p>
              <p className="mt-1 text-sm text-stone-600">
                nắng gắt chiếu trên cao
              </p>
            </article>
            <article className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-2xl leading-loose">秋高气爽</p>
              <p className="mt-2 text-sm text-stone-500">qiūgāo-qìshuǎng</p>
              <p className="mt-1 text-sm text-stone-600">
                trời thu cao, khí trời mát mẻ
              </p>
            </article>
            <article className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-2xl leading-loose">万里雪飘</p>
              <p className="mt-2 text-sm text-stone-500">wànlǐ xuěpiāo</p>
              <p className="mt-1 text-sm text-stone-600">
                tuyết bay khắp vạn dặm
              </p>
            </article>
          </div>
        </section>
      </main>
    </LessonLayout>
  );
}
