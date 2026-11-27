import LessonLayout from "../../LessonLayout";
import { lesson17 } from "../../lessons/lesson17";

const pairs = [
  [
    ["兴旺", "xīngwàng", "hưng vượng, thịnh vượng"],
    ["姓王", "xìng Wáng", "họ Vương"],
  ],
  [
    ["布置", "bùzhì", "bày biện, trang trí"],
    ["不是", "bú shì", "không phải là"],
  ],
  [
    ["打扫", "dǎsǎo", "quét dọn"],
    ["大嫂", "dàsǎo", "chị dâu cả"],
  ],
  [
    ["品尝", "pǐncháng", "nếm thử"],
    ["平常", "píngcháng", "bình thường"],
  ],
  [
    ["幸福", "xìngfú", "hạnh phúc"],
    ["辛苦", "xīnkǔ", "vất vả"],
  ],
  [
    ["吉祥", "jíxiáng", "cát tường, may mắn"],
    ["迹象", "jìxiàng", "dấu hiệu"],
  ],
];

const baZai = [
  [
    [
      "把那瓶花儿放在桌子上",
      "bǎ nà píng huār fàng zài zhuōzi shang",
      "đặt bình hoa đó lên bàn",
    ],
    ["把名字写在书上", "bǎ míngzi xiě zài shū shang", "viết tên lên sách"],
  ],
  [
    ["把书摆在书架上", "bǎ shū bǎi zài shūjià shang", "xếp sách lên giá sách"],
    [
      "把对联儿贴在门两边",
      "bǎ duìliánr tiē zài mén liǎngbiān",
      "dán câu đối hai bên cửa",
    ],
  ],
];

const baDao = [
  [
    ["把车开到学校去", "bǎ chē kāi dào xuéxiào qù", "lái xe đến trường"],
    ["把菜放到冰箱里", "bǎ cài fàng dào bīngxiāng li", "cho đồ ăn vào tủ lạnh"],
  ],
  [
    ["把椅子搬到楼上", "bǎ yǐzi bān dào lóu shang", "khiêng ghế lên lầu"],
    ["把她送到车站", "bǎ tā sòng dào chēzhàn", "tiễn cô ấy đến bến xe"],
  ],
];

const baGei = [
  [
    [
      "把教室借给我们",
      "bǎ jiàoshì jiè gěi wǒmen",
      "cho chúng tôi mượn phòng học",
    ],
    ["把照片发给妈妈", "bǎ zhàopiàn fā gěi māma", "gửi ảnh cho mẹ"],
  ],
  [
    ["把作业交给老师", "bǎ zuòyè jiāo gěi lǎoshī", "nộp bài tập cho thầy cô"],
    [
      "把礼物带给王老师",
      "bǎ lǐwù dài gěi Wáng lǎoshī",
      "mang quà cho thầy Vương",
    ],
  ],
];

const baCheng = [
  [
    [
      "把生词翻译成英语",
      "bǎ shēngcí fānyì chéng Yīngyǔ",
      "dịch từ mới sang tiếng Anh",
    ],
    [
      "把小说儿拍成电影",
      "bǎ xiǎoshuōr pāi chéng diànyǐng",
      "quay tiểu thuyết thành phim",
    ],
  ],
  [
    [
      "把美元换成人民币",
      "bǎ Měiyuán huàn chéng rénmínbì",
      "đổi đô la Mỹ thành nhân dân tệ",
    ],
    [
      "把教室布置成会场",
      "bǎ jiàoshì bùzhì chéng huìchǎng",
      "trang trí phòng học thành hội trường",
    ],
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
    <LessonLayout lesson={lesson17}>
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
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/17-yuyin.mp3"
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

          <h3 className="mb-2 mt-5 text-stone-500">
            把 + Tân ngữ + Động từ + 在
          </h3>
          <ExerciseCards rows={baZai} />

          <h3 className="mb-2 mt-5 text-stone-500">
            把 + Tân ngữ + Động từ + 到
          </h3>
          <ExerciseCards rows={baDao} />

          <h3 className="mb-2 mt-5 text-stone-500">
            把 + Tân ngữ + Động từ + 给
          </h3>
          <ExerciseCards rows={baGei} />

          <h3 className="mb-2 mt-5 text-stone-500">
            把 + Tân ngữ + Động từ + 成
          </h3>
          <ExerciseCards rows={baCheng} />
        </section>
      </main>
    </LessonLayout>
  );
}
