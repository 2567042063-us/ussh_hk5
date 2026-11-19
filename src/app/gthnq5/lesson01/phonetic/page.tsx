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
          <span className="ztai__zh text-stone-600">二</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">语音</span>{" "}
            <span className="text-sm">Yǔyīn</span>{" "}
            <span className="text-sm">Phonetics</span>
          </span>
        </div>
        <div className="my-3 w-full opacity-80">
          <audio controls preload="none" className="lesson-audio h-10 w-full">
            <source
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/01_yuyin.mp3"
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
            <table className="w-full table-fixed text-left text-sm">
              <thead className="bg-stone-100 text-stone-600">
                <tr>
                  <th className="w-[30%] px-4 py-3 font-semibold">Pair</th>
                  <th className="px-4 py-3 font-semibold">Pinyin</th>
                  <th className="px-4 py-3 font-semibold">
                    What to listen for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="ztai__zh px-4 py-3 text-2xl">终于 / 充裕</td>
                  <td className="px-4 py-3">zhōngyú / chōngyù</td>
                  <td className="px-4 py-3">
                    <b>zh</b> (unaspirated) vs <b>ch</b> (aspirated, a puff of
                    air); <b>yú</b> (2nd tone) vs <b>yù</b> (4th tone)
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh px-4 py-3 text-2xl">心里 / 心理</td>
                  <td className="px-4 py-3">xīnlǐ / xīnlǐ</td>
                  <td className="px-4 py-3">
                    Same sound and tones. Only the meaning differs:{" "}
                    <span className="ztai__zh">心里</span> &quot;in the heart or
                    mind&quot;, <span className="ztai__zh">心理</span>{" "}
                    &quot;psychology&quot;
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh px-4 py-3 text-2xl">联系 / 练习</td>
                  <td className="px-4 py-3">liánxì / liànxí</td>
                  <td className="px-4 py-3">
                    Tones swap: <b>lián-xì</b> (2-4) vs <b>liàn-xí</b> (4-2)
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh px-4 py-3 text-2xl">如果 / 路过</td>
                  <td className="px-4 py-3">rúguǒ / lùguò</td>
                  <td className="px-4 py-3">
                    <b>r</b> vs <b>l</b>; tones 2-3 vs 4-4
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh px-4 py-3 text-2xl">因此 / 影视</td>
                  <td className="px-4 py-3">yīncǐ / yǐngshì</td>
                  <td className="px-4 py-3">
                    <b>-in</b> vs <b>-ing</b>; <b>c</b> vs <b>sh</b>; tones 1-3
                    vs 3-4
                  </td>
                </tr>
                <tr>
                  <td className="ztai__zh px-4 py-3 text-2xl">想念 / 项链</td>
                  <td className="px-4 py-3">xiǎngniàn / xiàngliàn</td>
                  <td className="px-4 py-3">
                    <b>n</b> vs <b>l</b> in the second syllable; tone 3 vs 4 in
                    the first
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-sm border border-amber-200 bg-amber-50 p-4">
            <p className="mb-2 font-semibold">Tips</p>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>
                For <b>zh/ch/sh</b> and <b>r</b>, curl the tongue tip back. For{" "}
                <b>c</b>, keep it flat behind the teeth.
              </li>
              <li>
                In <span className="ztai__zh">想念 / 项链</span>, the first
                syllable is 3rd tone (xiǎng) in one and 4th tone (xiàng) in the
                other, so the difference is easy to miss.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="ztai__zh mb-1 mt-3 text-2xl font-bold">
            (2) 朗读: 游子吟
          </h2>
          <p className="mb-2 text-stone-500">
            {`Yóuzǐ Yín, "Song of the Wandering Son"`}
          </p>
          <p className="mb-2 text-stone-500">
            <span className="text-sky-800">Du tử ngâm</span>, nghĩa là Khúc ca
            của người con xa nhà của nhà thơ Mạnh Giao (孟郊) thời nhà Đường
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-white p-6 text-center">
              <p className="ztai__zh text-xl">游子吟</p>
              <p className="text-sm text-stone-500">Yóuzǐ Yín</p>
              <p className="mb-6 mt-1 text-stone-600">
                <span className="ztai__zh">[唐] 孟郊</span> · [Táng] Mèng Jiāo
              </p>

              <div className="space-y-4">
                <div>
                  <p className="ztai__zh text-2xl">慈母手中线，</p>
                  <p className="text-sm text-stone-500">
                    Cí mǔ shǒu zhōng xiàn,
                  </p>
                </div>
                <div>
                  <p className="ztai__zh text-2xl">游子身上衣。</p>
                  <p className="text-sm text-stone-500">
                    Yóu zǐ shēn shàng yī.
                  </p>
                </div>
                <div>
                  <p className="ztai__zh text-2xl">临行密密缝，</p>
                  <p className="text-sm text-stone-500">Lín xíng mì mì féng,</p>
                </div>
                <div>
                  <p className="ztai__zh text-2xl">意恐迟迟归。</p>
                  <p className="text-sm text-stone-500">Yì kǒng chí chí guī.</p>
                </div>
                <div>
                  <p className="ztai__zh text-2xl">谁言寸草心，</p>
                  <p className="text-sm text-stone-500">
                    Shéi yán cùn cǎo xīn,
                  </p>
                </div>
                <div>
                  <p className="ztai__zh text-2xl">报得三春晖。</p>
                  <p className="text-sm text-stone-500">Bào dé sān chūn huī.</p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-stone-200 bg-white p-4 text-center">
              <p className="mb-3 text-sm text-stone-500">
                Bài thơ viết về tình mẫu tử. Sau nhiều lần thi không đỗ và phải
                sống trong cảnh nghèo khó, đến khoảng năm 50 tuổi, Mạnh Giao mới
                được bổ làm huyện uý Lật Dương. Khi cuộc sống đã phần nào ổn
                định, ông đón mẹ đến ở cùng để phụng dưỡng và viết bài thơ này
                nhằm bày tỏ lòng biết ơn đối với mẹ.
              </p>
              <p className="mt-1 text-slate-800">Từ mẫu thủ trung tuyến,</p>
              <p className="mt-1 text-slate-800">Du tử thân thượng y.</p>
              <p className="mt-1 text-slate-800">Lâm hành mật mật phùng,</p>
              <p className="mt-1 text-slate-800">Ý khủng trì trì quy.</p>
              <p className="mt-1 text-slate-800">Thùy ngôn thốn thảo tâm,</p>
              <p className="mt-1 text-slate-800">Báo đắc tam xuân huy.</p>
              <p className="mt-2 text-sm">Dịch nghĩa</p>
              <p className="mt-1 text-sm text-slate-600">
                Sợi chỉ trong tay mẹ hiền,
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Nay đang ở trên áo người đi xa.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Lúc mới lên đường, mẹ khâu kỹ càng,
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Có ý sợ con chậm trễ trở về.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Ai dám nói rằng tấm lòng của một tấc cỏ,
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Lại có thể báo đáp được ánh nắng của ba xuân?
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-sm border border-stone-200 bg-white p-4">
            <p className="mb-2 font-semibold">Reading notes</p>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>
                <b>Tone change in line 1:</b>{" "}
                <span className="ztai__zh">慈母手中线</span> is read as{" "}
                <i>
                  cí <b>mú</b> shǒu zhōng xiàn
                </i>
                , because <span className="ztai__zh">母</span> (3rd tone) is
                followed by <span className="ztai__zh">手</span> (3rd tone) and
                changes to 2nd tone.
              </li>
              <li>
                <b>Repeated words:</b> <span className="ztai__zh">密密</span>{" "}
                <i>mì mì</i> and <span className="ztai__zh">迟迟</span>{" "}
                <i>chí chí</i> are read at normal tone, each syllable clear.
              </li>
              <li>
                <b>
                  <span className="ztai__zh">缝</span> here is <i>féng</i>
                </b>{" "}
                (to sew, a verb). As a noun (&quot;a seam&quot;) it is{" "}
                <i>fèng</i>.
              </li>
              <li>
                <b>Rhythm:</b> each line has 5 syllables, usually read 2+3 (
                <span className="ztai__zh">慈母 / 手中线; 游子 / 身上衣</span>).
              </li>
              <li>
                <b>Rhyme:</b> <span className="ztai__zh">衣</span> yī,{" "}
                <span className="ztai__zh">归</span> guī,{" "}
                <span className="ztai__zh">晖</span> huī are the rhyming line
                endings (-i / -ui).
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-sm border border-stone-200 bg-white p-4">
            <p className="mb-2 font-semibold">Meaning</p>
            <p className="text-sm">
              A loving mother&apos;s hand holds the thread; it is for the
              clothes on her wandering son. Just before he leaves, she sews
              stitch after stitch, afraid he will be late in coming home. Who
              says the heart of a small blade of grass can repay the warmth of
              the spring sun? (The grass is the child; the spring sun is the
              mother&apos;s love.)
            </p>
          </div>
        </section>
      </main>
    </LessonLayout>
  );
}
