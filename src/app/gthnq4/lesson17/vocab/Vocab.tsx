import ZhText from "@shared/components/ZhText";

import VocabTable from "./VocabTable";

export default function VocabBai1() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-7xl px-3 pb-5 sm:px-4 sm:pb-8">
      <section>
        <div className="my-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <div className="inline-flex items-center gap-3 rounded-lg bg-stone-200 px-3 py-1.5">
            <span className="ztai__zh text-stone-600">二</span>
            <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
              <span className="ztai__zh">生词</span>{" "}
              <span className="text-sm">Shēngcí</span>{" "}
              <span className="text-sm">New Words</span>
            </span>
          </div>
          <p className="text-sm text-slate-500">
            <ZhText text="39 từ trong sách" />
          </p>
        </div>

        <div className="z-9 sticky top-0 mb-3 w-full bg-white/95 py-2 backdrop-blur dark:bg-slate-800/95">
          <audio controls preload="none" className="lesson-audio h-10 w-full">
            <source
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/17-shengci.mp3"
              type="audio/mpeg"
            />
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
          </audio>
        </div>

        <VocabTable />
      </section>
      <div className="my-5 rounded-sm border border-stone-200 bg-white">
        <p className="border-l-3 mt-4 border-stone-600 px-4 text-lg font-semibold text-stone-700">
          Từ loại viết tắt
        </p>
        <ul className="p-4">
          <li>
            <span className="w">
              <span className="ztai__zh">名</span>{" "}
              <small>
                (<span className="ztai__py">míng</span> – danh từ)
              </small>
            </span>
            ,{" "}
            <span className="w">
              <span className="ztai__zh">动</span>{" "}
              <small>
                (<span className="ztai__py">dòng</span> – động từ)
              </small>
            </span>
            ,{" "}
            <span className="w">
              <span className="ztai__zh">形</span>{" "}
              <small>
                (<span className="ztai__py">xíng</span> – tính từ)
              </small>
            </span>
            ,{" "}
            <span className="w">
              <span className="ztai__zh">副</span>{" "}
              <small>
                (<span className="ztai__py">fù</span> – phó từ)
              </small>
            </span>
            ,{" "}
            <span className="w">
              <span className="ztai__zh">代</span>{" "}
              <small>
                (<span className="ztai__py">dài</span> – đại từ)
              </small>
            </span>
            ,{" "}
            <span className="w">
              <span className="ztai__zh">量</span>{" "}
              <small>
                (<span className="ztai__py">liàng</span> – lượng từ)
              </small>
            </span>
            ,{" "}
            <span className="w">
              <span className="ztai__zh">连</span>{" "}
              <small>
                (<span className="ztai__py">lián</span> – liên từ)
              </small>
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
}
