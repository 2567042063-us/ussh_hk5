import LessonLayout from "../../LessonLayout";
import { lesson14 } from "../../lessons/lesson14";

const pairs = [
  [
    ["进去", "jìnqù", "đi vào"],
    ["进取", "jìnqǔ", "cầu tiến, tiến thủ"],
  ],
  [
    ["书架", "shūjià", "giá sách"],
    ["暑假", "shǔjià", "kỳ nghỉ hè"],
  ],
  [
    ["钥匙", "yàoshi", "chìa khóa"],
    ["要事", "yàoshì", "việc quan trọng"],
  ],
  [
    ["于是", "yúshì", "thế là, vì vậy"],
    ["仪式", "yíshì", "nghi lễ"],
  ],
  [
    ["影响", "yǐngxiàng", "ảnh hưởng"],
    ["印象", "yìnxiàng", "ấn tượng"],
  ],
  [
    ["只好", "zhǐhǎo", "đành phải"],
    ["吃好", "chīhǎo", "ăn ngon, ăn no"],
  ],
];

const phrases = [
  [
    ["放上去", "fàng shàngqù", "đặt lên (đằng kia)"],
    ["放下来", "fàng xiàlái", "đặt xuống (đằng này)"],
  ],
  [
    ["走进去", "zǒu jìnqù", "đi vào"],
    ["走出来", "zǒu chūlái", "đi ra"],
  ],
  [
    ["带回去", "dài huíqù", "mang về (đi)"],
    ["带回来", "dài huílái", "mang về (đây)"],
  ],
  [
    ["拿过去", "ná guòqù", "cầm sang (đằng kia)"],
    ["拿过来", "ná guòlái", "cầm sang (đằng này)"],
  ],
  [
    ["爬上去", "pá shàngqù", "leo lên"],
    ["跑下来", "pǎo xiàlái", "chạy xuống"],
  ],
  [
    ["挑出来", "tiāo chūlái", "chọn ra"],
    ["拔下来", "bá xiàlái", "nhổ / rút xuống"],
  ],
];

const sentences = [
  [
    ["爬上楼去了", "pá shàng lóu qù le", "Leo lên lầu rồi"],
    ["走下楼来了", "zǒu xià lóu lái le", "Đi xuống lầu rồi"],
  ],
  [
    ["走进教室去了", "zǒu jìn jiàoshì qù le", "Đi vào lớp học rồi"],
    ["走出学校去了", "zǒu chū xuéxiào qù le", "Đi ra khỏi trường rồi"],
  ],
  [
    ["寄回国去了", "jì huí guó qù le", "Gửi về nước rồi"],
    ["骑回学校来了", "qí huí xuéxiào lái le", "Đạp xe về trường rồi"],
  ],
  [
    ["跑过马路去了", "pǎo guò mǎlù qù le", "Chạy qua đường rồi"],
    ["飞回美国去了", "fēi huí Měiguó qù le", "Bay về Mỹ rồi"],
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

export default function Page() {
  return (
    <LessonLayout lesson={lesson14}>
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
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/14-yuyin.mp3"
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
          <h3 className="mb-2 text-stone-500">Cụm từ cơ bản</h3>
          <ExerciseCards rows={phrases} />

          <h3 className="mb-2 mt-5 text-stone-500">
            Câu có tân ngữ nơi chốn + 了
          </h3>
          <ExerciseCards rows={sentences} />
        </section>
      </main>
    </LessonLayout>
  );
}
