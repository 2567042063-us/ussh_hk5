"use client";

import { useState } from "react";

import { paragraphs, type Sentence } from "../Kewen";

const allIds = paragraphs.flatMap((paragraph, paragraphIndex) =>
  paragraph.map((_, sentenceIndex) => `p${paragraphIndex}-${sentenceIndex}`),
);

function Reveal({ sentence }: { sentence: Sentence }) {
  return (
    <div className="border-l-2 border-stone-300 pl-3">
      <p className="text-sm leading-6 text-stone-500">{sentence.py}</p>
      <p className="text-[15px] leading-6 text-stone-800">{sentence.vi}</p>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const allOpen = open.size === allIds.length;

  const toggle = (id: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(allIds));
  const sentenceButtonClass = (id: string) =>
    `ztai__zh text-2xl cursor-pointer rounded-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 ${
      open.has(id) ? "bg-stone-100" : "hover:bg-amber-50"
    }`;

  return (
    <>
      <main className="px-6 pb-10 pt-8">
        <div className="z-9 sticky top-0 mb-3 w-full bg-white/95 py-2 backdrop-blur dark:bg-slate-800/95">
          <audio controls preload="none" className="lesson-audio h-10 w-full">
            <source
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/14-kewen.mp3"
              type="audio/mpeg"
            />
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
          </audio>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
            <span className="text-stone-600">一</span>
            <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
              课文 <span className="text-sm">Kèwén</span>{" "}
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
        <p className="mb-6 text-sm text-stone-500">
          Bấm vào từng câu để xem pinyin và nghĩa tiếng Việt.
        </p>

        <article className="space-y-6">
          {paragraphs.map((paragraph, paragraphIndex) => {
            const opened = paragraph
              .map((sentence, sentenceIndex) => ({
                sentence,
                id: `p${paragraphIndex}-${sentenceIndex}`,
              }))
              .filter(({ id }) => open.has(id));

            return (
              <section key={paragraphIndex} className="space-y-2">
                <p className="indent-8 font-serif text-xl leading-10 text-stone-900">
                  {paragraph.map((sentence, sentenceIndex) => {
                    const id = `p${paragraphIndex}-${sentenceIndex}`;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggle(id)}
                        aria-expanded={open.has(id)}
                        className={sentenceButtonClass(id)}
                      >
                        {sentence.zh}
                      </button>
                    );
                  })}
                </p>
                {opened.length > 0 && (
                  <div className="space-y-3 pl-2">
                    {opened.map(({ sentence, id }) => (
                      <Reveal key={id} sentence={sentence} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </article>

        <div className="my-5 rounded-sm border border-stone-200 bg-white">
          <p className="border-l-3 mt-4 border-stone-600 px-4 text-lg font-semibold text-stone-700">
            Tóm tắt nội dung
          </p>
          <div className="p-4">
            <p className="ztai__zh text-2xl">
              星期天，“我”和麦克去图书城买书，又在商场买了一些小礼品，吃完午饭后骑车回学校。
            </p>
            {/* (Xīngqītiān, “wǒ” hé Màikè qù Túshūchéng mǎi shū, yòu zài shāngchǎng
            mǎile yìxiē xiǎo lǐpǐn, chī wán wǔfàn hòu qí chē huí xuéxiào.)
            <br />
            Chủ nhật, &quot;tôi&quot; và Mike đi mua sách ở siêu thị sách, sau
            đó mua thêm quà nhỏ ở trung tâm thương mại, ăn trưa rồi đạp xe về
            trường.
            <br /> */}
            <p className="ztai__zh text-2xl">
              {" "}
              回到学校，电梯正在维修，“我”只好提着箱子爬楼梯上十层。
            </p>
            {/* (Huídào xuéxiào, diàntī zhèngzài wéixiū, “wǒ” zhǐhǎo tízhe xiāngzi
            pá lóutī shàng shí céng.)
            <br />
            Về đến trường thì thang máy đang bảo trì, &quot;tôi&quot; đành phải
            xách thùng đồ leo cầu thang bộ lên tầng mười.
            <br /> */}
            <p className="ztai__zh text-2xl">
              到了门口才发现钥匙忘拔下来，还插在楼下的自行车上，正好麦克帮忙拿了上来。
            </p>
            {/* <br />
            (Dàole ménkǒu cái fāxiàn yàoshi wàng bá xiàlai, hái chāzài lóuxià de
            zìxíngchē shang, zhènghǎo Màikè bāngmáng nále shànglai.)
            <br />
            Đến trước cửa mới phát hiện quên rút chìa khoá xuống, chìa khoá vẫn
            còn cắm ở xe đạp dưới lầu — may mắn Mike đã giúp mang lên cho. */}
          </div>
        </div>
      </main>
    </>
  );
}
