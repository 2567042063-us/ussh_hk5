"use client";

import { useState } from "react";

import { paragraphs, questions, type Sentence } from "./Kewen";

const allIds = [
  ...paragraphs.flatMap((paragraph, paragraphIndex) =>
    paragraph.map((_, sentenceIndex) => `p${paragraphIndex}-${sentenceIndex}`),
  ),
  ...questions.map((_, index) => `q${index}`),
];

function Reveal({ sentence }: { sentence: Sentence }) {
  return (
    <div className="border-l-2 border-stone-300 pl-3">
      <p className="text-sm leading-6 text-stone-500">{sentence.py}</p>
      <p className="text-base leading-6 text-stone-800">{sentence.vi}</p>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const allOpen = open.size === allIds.length;
  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(allIds));
  const sentenceButtonClass = (id: string) =>
    `cursor-pointer rounded-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
      open.has(id) ? "bg-stone-100" : "hover:bg-amber-50"
    }`;

  return (
    <main
      id="gthnq5bai1kewen"
      className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3"
    >
      <div className="z-9 sticky top-0 mb-3 w-full bg-white/95 py-2 backdrop-blur dark:bg-slate-800/95">
        <audio controls preload="none" className="lesson-audio h-10 w-full">
          <source
            src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq5/01_kewen.mp3"
            type="audio/mpeg"
          />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
          <span className="ztai__zh text-stone-600">一</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">课文</span>{" "}
            <span className="text-sm">Kèwén</span>{" "}
            <span className="text-sm">Text</span>
          </span>
        </div>
        <button
          type="button"
          onClick={toggleAll}
          className="rounded border border-stone-300 px-3 py-1 text-sm text-stone-700 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {allOpen ? "Ẩn ≖⩊≖" : "Hiện ≖⩊≖"}
        </button>
      </div>

      <article className="space-y-1">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <section key={paragraphIndex} className="ztai__paragraph">
            {paragraph.map((sentence, sentenceIndex) => {
              const id = `p${paragraphIndex}-${sentenceIndex}`;

              return (
                <div key={id} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={open.has(id)}
                    className={`ztai__zh block w-full text-left font-serif text-xl leading-10 text-stone-900 ${sentenceButtonClass(id)}`}
                  >
                    {sentence.zh}
                  </button>
                  {open.has(id) && (
                    <div className="pl-2">
                      <Reveal sentence={sentence} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        ))}
      </article>

      <section className="mt-10 border-t border-stone-300 pt-6">
        <h2 className="mb-4 text-stone-800">
          <span className="ztai__zh">回答课文问题</span>{" "}
          <span className="text-sm">
            Answer the questions according to the text
          </span>
        </h2>
        <ol className="space-y-4">
          {questions.map((question, index) => {
            const id = `q${index}`;

            return (
              <li key={id} className="space-y-2 pl-4">
                <div className="flex gap-2">
                  <span className="ztai__zh font-serif text-lg text-stone-900">
                    （{index + 1}）
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={open.has(id)}
                    className={`ztai__zh font-serif text-lg leading-8 text-stone-900 ${sentenceButtonClass(id)}`}
                  >
                    {question.zh}
                  </button>
                </div>
                {open.has(id) && (
                  <div className="pl-12">
                    <Reveal sentence={question} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-10 border-t border-stone-300 pt-6">
        <h2 className="mb-4 text-stone-800">
          <span className="text-sm">Ghi chú ngữ pháp bài khoá</span>
        </h2>

        {/* <!-- 1. 从去年夏天起 --> */}
        <section className="my-5 rounded-sm border border-gray-100 bg-white p-5">
          <h2 className="text-lg font-semibold text-sky-800">
            1. 从去年夏天起
          </h2>
          <p className="text-sm text-slate-500">
            Cóng qùnián xiàtiān qǐ · Bắt đầu từ mùa hè năm ngoái
          </p>

          <div className="mt-4 space-y-4 text-base leading-7">
            <div>
              <p className="font-medium text-sky-900">
                ① Cấu trúc: &quot;Bắt đầu từ [mốc thời gian / địa điểm]&quot;
              </p>
              <p className="mt-1 rounded-lg bg-stone-100 px-3 py-2 font-medium">
                从 / 自 + [mốc thời gian / địa điểm] + 起
              </p>
              <ul className="mt-2 list-disc pl-6">
                <li>从 (cóng): từ</li>
                <li>去年夏天 (qùnián xiàtiān): mùa hè năm ngoái</li>
                <li>起 (qǐ): bắt đầu, khởi điểm</li>
              </ul>
              <p className="mt-2">
                Nếu bỏ 起, cụm &quot;从去年夏天&quot; nghe hơi lửng lơ, chưa
                trọn vẹn.
              </p>
            </div>

            <div>
              <p className="font-medium text-sky-900">
                ② Nhấn mạnh sự tiếp diễn
              </p>
              <p className="mt-1">
                Cách nói này ngầm cho thấy hành động/trạng thái bắt đầu từ mốc
                đó và còn tiếp diễn đến hiện tại (hoặc đến một thời điểm được
                nhắc tới).
              </p>
              <div className="mt-2 rounded-lg border-l-4 border-stone-400 bg-stone-50 px-3 py-2">
                <p className="font-serif text-lg">
                  从去年夏天起，我就开始学中文。
                </p>
                <p className="text-sm text-slate-500">
                  Cóng qùnián xiàtiān qǐ, wǒ jiù kāishǐ xué Zhōngwén.
                </p>
                <p className="text-base">
                  Bắt đầu từ mùa hè năm ngoái, tôi đã học tiếng Trung (và vẫn
                  đang học).
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-sky-900">③ Có thể thay thế bằng</p>
              <ul className="mt-1 space-y-2">
                <li>
                  <span className="font-serif">
                    从去年夏天<b className="text-sky-700">开始</b>
                  </span>{" "}
                  <span className="text-sm text-slate-500">(kāishǐ)</span> · bắt
                  đầu từ mùa hè năm ngoái
                </li>
                <li>
                  <span className="font-serif">
                    从去年夏天<b className="text-sky-700">以来</b>
                  </span>{" "}
                  <span className="text-sm text-slate-500">(yǐlái)</span> · kể
                  từ mùa hè năm ngoái đến nay
                </li>
              </ul>
              <div className="mt-3 space-y-2">
                <div className="rounded-lg border-l-4 border-stone-400 bg-stone-50 px-3 py-2">
                  <p className="font-serif text-lg">从今天起，我要努力减肥。</p>
                  <p className="text-sm text-slate-500">
                    Cóng jīntiān qǐ, wǒ yào nǔlì jiǎnféi.
                  </p>
                  <p className="text-base">
                    Bắt đầu từ hôm nay, tôi sẽ cố gắng giảm cân.
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-stone-400 bg-stone-50 px-3 py-2">
                  <p className="font-serif text-lg">
                    自下周起，公司实行新规定。
                  </p>
                  <p className="text-sm text-slate-500">
                    Zì xià zhōu qǐ, gōngsī shíxíng xīn guīdìng.
                  </p>
                  <p className="text-base">
                    Bắt đầu từ tuần sau, công ty sẽ áp dụng quy định mới.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-3 ring-1 ring-stone-200">
              <p className="text-sm font-semibold text-stone-800">Lưu ý nhỏ</p>
              <ul className="mt-1 list-disc pl-5 text-sm leading-6">
                <li>
                  Bỏ 起 không sai ngữ pháp: 从去年夏天就开始… vẫn nói được.
                  从…起 chỉ là cách nói quen thuộc, hơi trang trọng hơn.
                </li>
                <li>
                  起 chỉ đánh dấu <b>mốc bắt đầu</b>. Ý &quot;vẫn đang tiếp
                  diễn&quot; đến từ ngữ cảnh (就, 一直…). Vì vậy 从…起 còn dùng
                  cho tương lai (从明天起 = từ ngày mai).
                </li>
                <li>
                  Khác với 以来: 从…以来 đã bao hàm &quot;cho đến nay&quot;, nên
                  chỉ dùng cho quá khứ → hiện tại.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- 2. 我只跟…商量 --> */}
        <section className="my-5 rounded-sm border border-gray-100 bg-white p-5">
          <h2 className="text-lg font-semibold text-sky-800">
            2. 我只跟朋友和教我汉语的老师商量
          </h2>
          <p className="text-sm text-slate-500">
            Wǒ zhǐ gēn péngyou hé jiāo wǒ Hànyǔ de lǎoshī shāngliang
          </p>

          <div className="mt-4 space-y-3 text-base leading-7">
            <p className="rounded-lg bg-stone-100 px-3 py-2 font-medium">
              我 + 只 + 跟 [朋友] 和 [教我汉语的老师] + 商量
            </p>
            <div className="rounded-lg border-l-4 border-stone-400 bg-stone-50 px-3 py-2">
              <p className="font-serif text-lg">
                我只跟<b className="text-sky-700">朋友</b>和
                <b className="text-sky-700">教我汉语的老师</b>商量。
              </p>
              <p className="text-sm text-slate-500">
                Wǒ zhǐ gēn [péngyou] hé [jiāo wǒ Hànyǔ de lǎoshī] shāngliang.
              </p>
              <p className="text-base">
                Tôi chỉ bàn bạc với bạn bè và cô giáo dạy tiếng Trung cho tôi.
              </p>
            </div>
            <ul className="list-disc pl-6">
              <li>只 (zhǐ): chỉ, đặt trước 跟…</li>
              <li>
                跟 A 商量: bàn bạc với A; 和 nối hai đối tượng &quot;朋友&quot;
                và &quot;老师&quot;.
              </li>
              <li>
                教我汉语的老师: người dạy tôi tiếng Hán + 的 + 老师 (cụm định
                ngữ đứng trước danh từ).
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- 3. 将来 vs 今后 --> */}
        <section className="my-5 rounded-sm border border-gray-100 bg-white p-5">
          <h2 className="text-lg font-semibold text-sky-800">
            3. 将来 và 今后
          </h2>
          <p className="text-sm text-slate-500">
            对于将来要做什么 · 然后再考虑今后的打算
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-lg w-full border-collapse text-base leading-7">
              <thead>
                <tr className="bg-stone-100 text-left text-stone-900">
                  <th className="w-24 border border-stone-200 px-3 py-2"></th>
                  <th className="border border-stone-200 px-3 py-2">
                    将来 (jiānglái)
                  </th>
                  <th className="border border-stone-200 px-3 py-2">
                    今后 (jīnhòu)
                  </th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr>
                  <td className="border border-stone-200 px-3 py-2 font-medium">
                    Nghĩa
                  </td>
                  <td className="border border-stone-200 px-3 py-2">
                    Tương lai nói chung, thường xa và còn mơ hồ
                  </td>
                  <td className="border border-stone-200 px-3 py-2">
                    Từ nay về sau, lấy hiện tại làm mốc rồi tính tiếp
                  </td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-3 py-2 font-medium">
                    Hay dùng với
                  </td>
                  <td className="border border-stone-200 px-3 py-2">
                    Ước mơ, dự đoán, nghề nghiệp sau này
                  </td>
                  <td className="border border-stone-200 px-3 py-2">
                    Kế hoạch, quyết tâm, lời nhờ cậy
                  </td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-3 py-2 font-medium">
                    Ví dụ
                  </td>
                  <td className="border border-stone-200 px-3 py-2">
                    <p className="font-serif text-lg">我将来想当医生。</p>
                    <p className="text-sm text-slate-500">
                      Wǒ jiānglái xiǎng dāng yīshēng.
                    </p>
                    <p>Sau này tôi muốn làm bác sĩ.</p>
                    <p className="mt-2 font-serif text-lg">
                      将来有一天，他会成为作家。
                    </p>
                    <p className="text-sm text-slate-500">
                      Jiānglái yǒu yì tiān, tā huì chéngwéi zuòjiā.
                    </p>
                    <p>Một ngày nào đó, anh ấy sẽ trở thành nhà văn.</p>
                  </td>
                  <td className="border border-stone-200 px-3 py-2">
                    <p className="font-serif text-lg">今后我一定努力学习。</p>
                    <p className="text-sm text-slate-500">
                      Jīnhòu wǒ yídìng nǔlì xuéxí.
                    </p>
                    <p>Từ nay tôi nhất định học chăm chỉ.</p>
                    <p className="mt-2 font-serif text-lg">今后请多关照。</p>
                    <p className="text-sm text-slate-500">
                      Jīnhòu qǐng duō guānzhào.
                    </p>
                    <p>Mong được giúp đỡ nhiều từ nay về sau.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-2 text-base leading-7">
            <p>
              <b className="text-stone-800">Trong bài:</b>
            </p>
            <ul className="list-disc pl-6">
              <li>
                <b>对于将来要做什么</b>: việc sau này làm nghề gì, chuyện lâu
                dài, chưa có định hướng → 将来.
              </li>
              <li>
                <b>然后再考虑今后的打算</b>: kế hoạch tiếp theo sau một năm ở
                nước ngoài, tính từ bây giờ trở đi → 今后.
              </li>
            </ul>
            <p className="text-sm text-slate-500">
              Thực tế hai từ này nhiều khi thay được cho nhau; 将来 thiên về
              &quot;viễn cảnh xa, ước mơ&quot;, 今后 thiên về &quot;kế
              hoạch/quyết tâm tính từ giờ&quot;.
            </p>
          </div>
        </section>

        {/* <!-- 4. 而又 vs 又…又… --> */}
        <section className="my-5 rounded-sm border border-gray-100 bg-white p-5">
          <h2 className="text-lg font-semibold text-sky-800">
            4. 这个古老而又年轻的国家: vì sao 而又, không phải 又…又…?
          </h2>
          <p className="text-sm text-slate-500">
            Zhège gǔlǎo ér yòu niánqīng de guójiā · Đất nước vừa cổ xưa vừa trẻ
            trung này
          </p>

          <div className="mt-4 space-y-4 text-base leading-7">
            <p>
              <b>古老</b> (cổ xưa) và <b>年轻</b> (trẻ trung) là hai tính chất{" "}
              <b>trái nghĩa</b>. Tác giả muốn nhấn vào sự &quot;tưởng như mâu
              thuẫn mà lại cùng tồn tại&quot; ở một đất nước, nên chọn 而又.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-lg w-full border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left text-stone-900">
                    <th className="w-24 border border-stone-200 px-3 py-2"></th>
                    <th className="border border-stone-200 px-3 py-2">
                      A 而又 B
                    </th>
                    <th className="border border-stone-200 px-3 py-2">
                      又 A 又 B
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr>
                    <td className="border border-stone-200 px-3 py-2 font-medium">
                      Sắc thái
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      B được thêm vào như một điểm bất ngờ, đối lập hoặc bổ
                      sung; nhấn vào sự tương phản
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      Liệt kê song song hai đặc điểm, nhẹ nhàng, không nhấn
                      tương phản
                    </td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="border border-stone-200 px-3 py-2 font-medium">
                      Văn phong
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      Văn viết, trang trọng, văn chương
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      Khẩu ngữ, đời thường
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stone-200 px-3 py-2 font-medium">
                      Thường gặp
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      Hai tính từ trái nghĩa hoặc có đối chiếu: 古老而又年轻
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      Hai ưu điểm cùng chiều: 又便宜又好吃
                    </td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="border border-stone-200 px-3 py-2 font-medium">
                      Ví dụ
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      <p className="font-serif text-lg">
                        他的表情严肃而又温和。
                      </p>
                      <p className="text-sm text-slate-500">
                        Tā de biǎoqíng yánsù ér yòu wēnhé.
                      </p>
                      <p>Nét mặt anh ấy nghiêm nghị mà lại hiền hoà.</p>
                    </td>
                    <td className="border border-stone-200 px-3 py-2">
                      <p className="font-serif text-lg">
                        这家餐厅又便宜又好吃。
                      </p>
                      <p className="text-sm text-slate-500">
                        Zhè jiā cāntīng yòu piányi yòu hǎochī.
                      </p>
                      <p>Quán này vừa rẻ vừa ngon.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border-l-4 border-stone-400 bg-stone-50 px-3 py-2">
              <p className="font-serif text-lg">这个办法简单而又有效。</p>
              <p className="text-sm text-slate-500">
                Zhège bànfǎ jiǎndān ér yòu yǒuxiào.
              </p>
              <p>Cách này đơn giản mà lại hiệu quả.</p>
            </div>

            <div className="rounded-lg bg-white p-3 ring-1 ring-stone-200">
              <p className="text-sm font-semibold text-stone-800">Lưu ý</p>
              <ul className="mt-1 list-disc pl-5 text-sm leading-6">
                <li>
                  Đây là khác biệt về <b>sắc thái và văn phong</b>, không phải
                  đúng/sai tuyệt đối. 又…又… vẫn có thể đi với hai ý đối lập, ví
                  dụ 又高兴又难过 (vừa vui vừa buồn). Chỉ là 而又 làm nổi bật sự
                  tương phản hơn và nghe &quot;văn&quot; hơn.
                </li>
                <li>
                  Không ghép lẫn hai cấu trúc: không nói{" "}
                  <span className="line-through">又古老而又年轻</span>.
                </li>
                <li>
                  Cũng có thể nói 既古老又年轻 (jì…yòu…), cũng trang trọng,
                  nhưng sắc thái là &quot;vừa… vừa…&quot; song song, ít nhấn
                  tương phản hơn 而又.
                </li>
                <li>
                  Chữ 而 (ér) đứng một mình cũng được: 古老而年轻; thêm 又 để
                  nhấn mạnh &quot;lại còn&quot;.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
