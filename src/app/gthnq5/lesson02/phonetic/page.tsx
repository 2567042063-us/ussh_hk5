import LessonLayout from "../../LessonLayout";
import { lesson02 } from "../../lessons/lesson02";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 02 - 语音" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson02}>
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
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/02_yuyin.mp3"
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
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">个子</td>
                  <td className="px-4 py-3">gèzi</td>
                  <td className="px-4 py-3 text-stone-600">
                    vóc dáng, chiều cao
                  </td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">各自</td>
                  <td className="px-4 py-3">gèzì</td>
                  <td className="px-4 py-3 text-stone-600">
                    mỗi người / riêng từng người
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">放心</td>
                  <td className="px-4 py-3">fàng xīn</td>
                  <td className="px-4 py-3 text-stone-600">yên tâm</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">烦心</td>
                  <td className="px-4 py-3">fánxīn</td>
                  <td className="px-4 py-3 text-stone-600">
                    phiền lòng, lo lắng
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">柔和</td>
                  <td className="px-4 py-3">róuhé</td>
                  <td className="px-4 py-3 text-stone-600">
                    dịu dàng, mềm mại
                  </td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">如何</td>
                  <td className="px-4 py-3">rúhé</td>
                  <td className="px-4 py-3 text-stone-600">như thế nào</td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">体质</td>
                  <td className="px-4 py-3">tǐzhì</td>
                  <td className="px-4 py-3 text-stone-600">thể chất</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">抵制</td>
                  <td className="px-4 py-3">dǐzhì</td>
                  <td className="px-4 py-3 text-stone-600">
                    chống lại, phản đối
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">预防</td>
                  <td className="px-4 py-3">yùfáng</td>
                  <td className="px-4 py-3 text-stone-600">phòng ngừa</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">乙方</td>
                  <td className="px-4 py-3">yǐfāng</td>
                  <td className="px-4 py-3 text-stone-600">
                    bên B (trong hợp đồng)
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">竹子</td>
                  <td className="px-4 py-3">zhúzi</td>
                  <td className="px-4 py-3 text-stone-600">cây tre</td>
                  <td className="ztai__zh p-3 px-4 py-3 text-2xl">出自</td>
                  <td className="px-4 py-3">chūzì</td>
                  <td className="px-4 py-3 text-stone-600">
                    xuất phát từ, bắt nguồn từ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="ztai__zh mb-1 mt-3 text-2xl font-bold">(2) 朗读</h2>
          <p className="mb-5 text-stone-500">Read out the following phrases</p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <article className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-2xl leading-loose">
                诗中有画，画中有诗。
              </p>
              <p className="mt-2 text-sm text-stone-500">
                Shī zhōng yǒu huà, huà zhōng yǒu shī.
              </p>
            </article>
            <article className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-2xl leading-loose">
                儿行千里母担忧。
              </p>
              <p className="mt-2 text-sm text-stone-500">
                Ér xíng qiānlǐ mǔ dānyōu.
              </p>
            </article>
          </div>
        </section>
      </main>
    </LessonLayout>
  );
}
