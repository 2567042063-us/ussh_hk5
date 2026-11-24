import LessonLayout from "../../LessonLayout";
import { lesson15 } from "../../lessons/lesson15";

const pairs = [
  [
    ["会议", "huìyì", "cuộc họp"],
    ["回忆", "huíyì", "hồi ức, nhớ lại"],
  ],
  [
    ["女士", "nǚshì", "quý bà, phụ nữ"],
    ["律师", "lǜshī", "luật sư"],
  ],
  [
    ["婚礼", "hūnlǐ", "lễ cưới"],
    ["顺利", "shùnlì", "thuận lợi"],
  ],
  [
    ["热闹", "rènao", "náo nhiệt"],
    ["惹恼", "rěnǎo", "chọc tức"],
  ],
  [
    ["不停", "bù tíng", "không ngừng"],
    ["不听", "bù tīng", "không nghe"],
  ],
  [
    ["气氛", "qìfēn", "bầu không khí"],
    ["气愤", "qìfèn", "tức giận"],
  ],
];

const pourPhrases = [
  [
    ["倒酒", "dào jiǔ", "rót rượu"],
    ["倒水", "dào shuǐ", "rót nước"],
  ],
  [
    ["倒茶", "dào chá", "rót trà"],
    ["倒咖啡", "dào kāfēi", "rót cà phê"],
  ],
];

const zheWords = [
  ["听着", "tīngzhe", "đang nghe"],
  ["看着", "kànzhe", "đang nhìn"],
  ["说着", "shuōzhe", "đang nói"],
  ["坐着", "zuòzhe", "đang ngồi"],
  ["走着", "zǒuzhe", "đang đi"],
  ["笑着", "xiàozhe", "đang cười"],
  ["站着", "zhànzhe", "đang đứng"],
  ["等着", "děngzhe", "đang đợi"],
  ["玩儿着", "wánrzhe", "đang chơi"],
  ["拿着", "názhe", "đang cầm"],
  ["放着", "fàngzhe", "đang đặt"],
  ["摆着", "bǎizhe", "đang bày"],
  ["挂着", "guàzhe", "đang treo"],
  ["穿着", "chuānzhe", "đang mặc"],
  ["戴着", "dàizhe", "đang đeo"],
  ["贴着", "tiēzhe", "đang dán"],
  ["躺着", "tǎngzhe", "đang nằm"],
  ["提着", "tízhe", "đang xách"],
];

const zhePhrases = [
  [
    ["挂着灯笼", "guàzhe dēnglong", "treo đèn lồng"],
    ["挂着地图", "guàzhe dìtú", "treo bản đồ"],
  ],
  [
    ["挂着衣服", "guàzhe yīfu", "treo quần áo"],
    ["挂着画儿", "guàzhe huàr", "treo tranh"],
  ],
  [
    ["穿着西服", "chuānzhe xīfú", "mặc vest"],
    ["穿着裙子", "chuānzhe qúnzi", "mặc váy"],
  ],
  [
    ["戴着手表", "dàizhe shǒubiǎo", "đeo đồng hồ"],
    ["戴着眼镜儿", "dàizhe yǎnjìngr", "đeo kính"],
  ],
  [
    ["带着照相机", "dàizhe zhàoxiàngjī", "mang theo máy ảnh"],
    ["带着护照", "dàizhe hùzhào", "mang theo hộ chiếu"],
  ],
  [
    ["带着孩子", "dàizhe háizi", "dẫn theo con"],
    ["带着学生", "dàizhe xuésheng", "dẫn theo học sinh"],
  ],
  [
    ["做着作业", "zuòzhe zuòyè", "đang làm bài tập"],
    ["打着手机", "dǎzhe shǒujī", "đang gọi điện thoại"],
  ],
  [
    ["上着课", "shàngzhe kè", "đang học"],
    ["吃着饭", "chīzhe fàn", "đang ăn cơm"],
  ],
  [
    ["坐着听课", "zuòzhe tīngkè", "ngồi nghe giảng"],
    ["站着上课", "zhànzhe shàngkè", "đứng giảng bài"],
  ],
  [
    ["走着过去", "zǒuzhe guòqù", "đi bộ qua đó"],
    ["笑着回答", "xiàozhe huídá", "cười đáp lại"],
  ],
];

function ExerciseCards({ rows }: { rows: string[][][] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {rows.map((row, rowIndex) => (
        <article
          key={`${row[0][0]}-${row[1][0]}-${rowIndex}`}
          className="grid grid-cols-2 overflow-hidden rounded-sm border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900"
        >
          {row.map((item, itemIndex) => (
            <div
              key={item[0]}
              className={`min-w-0 p-3 sm:p-4 ${
                itemIndex === 1
                  ? "border-l border-stone-200 dark:border-stone-700"
                  : ""
              }`}
            >
              <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
                {item[0]}
              </p>
              <p className="wrap-break-word mt-1 text-sm text-stone-500 dark:text-sky-300">
                {item[1]}
              </p>
              <p className="mt-2 text-sm leading-5 text-stone-800 dark:text-stone-300">
                {item[2]}
              </p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

function WordGrid({ items }: { items: string[][] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <article
          key={item[0]}
          className="min-w-0 rounded-sm border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900 sm:p-4"
        >
          <p className="font-kaiti wrap-break-word text-2xl leading-tight text-stone-900 dark:text-stone-100">
            {item[0]}
          </p>
          <p className="wrap-break-word mt-1 text-sm text-stone-500 dark:text-sky-300">
            {item[1]}
          </p>
          <p className="mt-2 text-sm leading-5 text-stone-800 dark:text-stone-300">
            {item[2]}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson15}>
      <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
        <div className="inline-flex items-center gap-3 rounded-sm bg-stone-200 px-3 py-1.5">
          <span className="ztai__zh text-stone-600">一</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">语音</span>{" "}
            <span className="text-sm">Yǔyīn</span>{" "}
            <span className="text-sm">Phonetics</span>
          </span>
        </div>
        <div className="my-3 w-full opacity-80">
          <audio controls preload="none" className="lesson-audio h-10 w-full">
            <source
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/15-yuyin.mp3"
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

          <ExerciseCards rows={pairs} />
        </section>

        <section>
          <h2 className="ztai__zh mb-1 mt-3 text-2xl font-bold">(2) 朗读</h2>
          <p className="mb-2 text-stone-500">Read out the following phrases</p>
          <ExerciseCards rows={pourPhrases} />

          <h3 className="mb-2 mt-5 text-stone-500">Động từ + 着</h3>
          <WordGrid items={zheWords} />

          <h3 className="mb-2 mt-5 text-stone-500">Cụm từ với 着</h3>
          <ExerciseCards rows={zhePhrases} />
        </section>
      </main>
    </LessonLayout>
  );
}
