import LessonLayout from "../../LessonLayout";
import { lesson16 } from "../../lessons/lesson16";

const pairs = [
  [
    ["院子", "yuànzi", "sân"],
    ["原子", "yuánzǐ", "nguyên tử"],
  ],
  [
    ["打扮", "dǎban", "ăn diện, trang điểm"],
    ["打翻", "dǎfān", "làm đổ, lật"],
  ],
  [
    ["随便", "suíbiàn", "tùy tiện, tùy ý"],
    ["虽然", "suīrán", "tuy rằng"],
  ],
  [
    ["出门", "chū mén", "ra ngoài"],
    ["处分", "chǔfèn", "xử phạt, kỷ luật"],
  ],
  [
    ["父母", "fùmǔ", "cha mẹ"],
    ["服务", "fúwù", "phục vụ"],
  ],
  [
    ["打的", "dǎ dī", "đi taxi"],
    ["打击", "dǎjī", "đả kích, đánh"],
  ],
  [
    ["欢乐", "huānlè", "vui vẻ"],
    ["换了", "huàn le", "đổi rồi"],
  ],
  [
    ["遗憾", "yíhàn", "tiếc nuối"],
    ["银行", "yínháng", "ngân hàng"],
  ],
];

const bieLe = [
  [
    ["别等了", "bié děng le", "đừng đợi nữa"],
    ["别说了", "bié shuō le", "đừng nói nữa"],
  ],
  [
    ["别吃了", "bié chī le", "đừng ăn nữa"],
    ["别喝了", "bié hē le", "đừng uống nữa"],
  ],
  [
    ["别去了", "bié qù le", "đừng đi nữa"],
    ["别哭了", "bié kū le", "đừng khóc nữa"],
  ],
  [
    ["别睡了", "bié shuì le", "đừng ngủ nữa"],
    ["别找了", "bié zhǎo le", "đừng tìm nữa"],
  ],
  [
    ["别写了", "bié xiě le", "đừng viết nữa"],
    ["别看了", "bié kàn le", "đừng xem nữa"],
  ],
];

const suibian = [
  [
    ["随便说", "suíbiàn shuō", "nói tùy ý"],
    ["随便谈", "suíbiàn tán", "trò chuyện thoải mái"],
  ],
  [
    ["随便坐", "suíbiàn zuò", "ngồi tùy ý"],
    ["随便要", "suíbiàn yào", "lấy/gọi tùy ý"],
  ],
  [
    ["随便喝", "suíbiàn hē", "uống tùy thích"],
    ["过生日", "guò shēngrì", "mừng sinh nhật"],
  ],
];

const guo = [
  [
    ["过寒假", "guò hánjià", "nghỉ đông"],
    ["过暑假", "guò shǔjià", "nghỉ hè"],
  ],
  [
    ["过新年", "guò xīnnián", "đón năm mới"],
    ["过春节", "guò Chūnjié", "đón Tết Xuân"],
  ],
];

const yueLaiYue = [
  [
    ["越来越热", "yuè lái yuè rè", "ngày càng nóng"],
    ["越来越冷", "yuè lái yuè lěng", "ngày càng lạnh"],
  ],
  [
    ["越来越好", "yuè lái yuè hǎo", "ngày càng tốt"],
    ["越来越流利", "yuè lái yuè liúlì", "ngày càng lưu loát"],
  ],
  [
    ["越来越有意思", "yuè lái yuè yǒu yìsi", "ngày càng thú vị"],
    ["越来越喜欢", "yuè lái yuè xǐhuan", "ngày càng thích"],
  ],
  [
    ["越来越高兴", "yuè lái yuè gāoxìng", "ngày càng vui"],
    ["越来越习惯", "yuè lái yuè xíguàn", "ngày càng quen"],
  ],
];

const yueYue = [
  [
    ["越学越有意思", "yuè xué yuè yǒu yìsi", "càng học càng thú vị"],
    ["越写越好", "yuè xiě yuè hǎo", "càng viết càng tốt"],
  ],
  [
    ["越跳越高", "yuè tiào yuè gāo", "càng nhảy càng cao"],
    ["越跑越快", "yuè pǎo yuè kuài", "càng chạy càng nhanh"],
  ],
  [
    ["越练越熟", "yuè liàn yuè shú", "càng luyện càng thạo"],
    ["越说越流利", "yuè shuō yuè liúlì", "càng nói càng lưu loát"],
  ],
  [
    ["越说越高兴", "yuè shuō yuè gāoxìng", "càng nói càng vui"],
    ["越好越贵", "yuè hǎo yuè guì", "càng tốt càng đắt"],
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
    <LessonLayout lesson={lesson16}>
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
            {/* TODO: đổi sang link audio thật của 15-yuyin */}
            <source
              src="https://bh9cualrgy9xkq87.public.blob.vercel-storage.com/gthnq4/16-yuyin.mp3"
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

          <h3 className="mb-2 mt-5 text-stone-500">别 + Động từ + 了</h3>
          <ExerciseCards rows={bieLe} />

          <h3 className="mb-2 mt-5 text-stone-500">随便 / 过</h3>
          <ExerciseCards rows={suibian} />
          <div className="mt-3">
            <ExerciseCards rows={guo} />
          </div>

          <h3 className="mb-2 mt-5 text-stone-500">越来越 + Tính từ</h3>
          <ExerciseCards rows={yueLaiYue} />

          <h3 className="mb-2 mt-5 text-stone-500">
            越 + Động từ + 越 + Tính từ
          </h3>
          <ExerciseCards rows={yueYue} />
        </section>
      </main>
    </LessonLayout>
  );
}
