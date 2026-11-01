"use client";

/**
 * Bài tập 把: sắp xếp câu, dịch Việt → Trung, điền chỗ trống.
 * Component client độc lập cho Next.js (App Router) / React.
 *
 * Dùng:  import BaiTapBa from "@/components/BaiTapBa";
 *        <BaiTapBa />
 *
 * CSS được nhúng ngay trong file này (mọi class đều có tiền tố "bt-" và nằm trong
 * vùng .bt) nên không cần file CSS riêng và không đụng style toàn cục.
 */
import { Fragment, useCallback, useEffect, useState } from "react";

/* ───────────────────────── Kiểu dữ liệu ───────────────────────── */

type Mode = "sort" | "trans" | "cloze";
/** [cấu trúc, câu tiếng Việt, các từ tiếng Trung ngăn bởi "|", pinyin] */
type Item = [string, string, string, string];
type Chip = { id: number; t: string };
type Q = { item: Item; retry: boolean };

/* ───────────────────────── Dữ liệu ───────────────────────── */

/** Gợi ý cấu trúc: [công thức, từ gợi ý] */
const STRUCT: Record<string, [string, string]> = {
  "把…在": [
    "把 + O + V + 在 + nơi chốn",
    "放 fàng, 挂 guà, 摆 bǎi, 贴 tiē, 停 tíng, 记 jì · 桌子上, 墙上, 门上, 卧室里, 客厅里, 教室",
  ],
  "把…到": [
    "把 + O + V + 到 + nơi chốn (+ 来/去)",
    "搬 bān, 带 dài, 开 kāi, 放 fàng · 学校, 医院, 国外, 教室里来, 行李箱里去",
  ],
  "把…给": [
    "把 + O + V + 给 + người",
    "送 sòng, 借 jiè, 还 huán, 交 jiāo, 发 fā, 带 dài · 我, 她, 老师, 朋友",
  ],
  "把…成": [
    "把 + O + V + 成 + danh từ",
    "布置 bùzhì, 翻译 fānyì, 写 xiě, 拍 pāi, 做 zuò · 会场, 英文, 电影, 书房",
  ],
  "把…得": [
    "把 + O + V + 得 + trạng thái",
    "打扫 dǎsǎo, 布置 bùzhì, 擦 cā, 洗 xǐ · 干净, 漂亮, 很好",
  ],
  "Kết quả": [
    "把 + O + V + 好 / 上 / 倒 / 完 / 住",
    "系 jì, 装 zhuāng, 碰 pèng, 做 zuò · 好 hǎo, 上 shàng, 倒 dǎo, 完 wán, 住 zhù",
  ],
  "Xu hướng": [
    "把 + O + V + 上去 / 出来 / 进去 / 回来",
    "拿 ná, 放 fàng, 掏 tāo, 取 qǔ · 出来 chūlái, 上去 shàngqu, 进去 jìnqù, 回来 huílái",
  ],
  一下儿: [
    "把 + O + V + 一下儿",
    "扳 bān, 看 kàn, 洗 xǐ, 复习 fùxí, 预习 yùxí · 一下儿 = một chút",
  ],
  了: [
    "(快) 把 + O + V + 了 (+ 吧)",
    "喝 hē, 吃 chī, 托运 tuōyùn, 做 zuò, 还 huán, 关 guān",
  ],
  "Phủ định": [
    "没(有) / 不 / 别 / 还没 + 把 + O + V",
    "没有 méiyǒu, 还没 hái méi, 不 bù, 别 bié: đứng TRƯỚC 把",
  ],
  "Năng nguyện": [
    "要 / 想 / 应该 + 把 + O + V",
    "要 yào, 想 xiǎng, 应该 yīnggāi: đứng TRƯỚC 把",
  ],
  "Cách thức": [
    "把 + O + 倒着 + V + 在 + nơi chốn",
    "倒着 dàozhe (ngược), 贴 tiē, 为什么 wèishénme … 呢 ne",
  ],
  Hỏi: [
    "把 + O + V + 结果 + 了没有?",
    "装上 zhuāng shàng, 了没有 le méiyǒu: hỏi đã làm xong chưa",
  ],
  "Thiên nhiên": [
    "风 + 把 + O + V + 跑了",
    "风 fēng, 刮 guā, 帽子 màozi, 跑 pǎo: chủ ngữ là gió",
  ],
  Lặp: [
    "把 + O + V lặp (擦擦, 开开)",
    "擦擦 cāca (lau lau), 开开 kāikai (mở ra) · động từ lặp làm câu có thành phần sau động từ",
  ],
  Khác: [
    "把 + O + 往 + hướng + V + 就行了",
    "往 wǎng (về phía), 一插 yì chā (cắm một cái), 就行了 jiù xíng le (là được)",
  ],
  "Tân ngữ": [
    "把 + O + 告诉 + người",
    "告诉 gàosu: động từ có thêm tân ngữ (người) sau nó",
  ],
};

/** Từ gây nhiễu cho chế độ "Dịch Việt → Trung" */
const DISTRACT: Record<string, string[]> = {
  "把…在": ["到", "给", "成"],
  "把…到": ["在", "给", "去"],
  "把…给": ["在", "到", "成"],
  "把…成": ["在", "给", "得"],
  "把…得": ["好", "成", "了"],
  "Kết quả": ["得", "在", "给"],
  "Xu hướng": ["在", "给", "得"],
  一下儿: ["了", "得", "在"],
  了: ["在", "给", "得"],
  "Phủ định": ["了", "得", "在"],
  "Năng nguyện": ["了", "得", "没"],
  "Cách thức": ["到", "给", "了"],
  Hỏi: ["在", "得", "给"],
  "Thiên nhiên": ["在", "给", "到"],
  Lặp: ["了", "在", "到"],
  Khác: ["在", "到", "给"],
  "Tân ngữ": ["给", "到", "了"],
};

/** Vị trí từ khóa cần điền (chế độ "Điền chỗ trống") theo từng cấu trúc */
const KEY: Record<string, string[]> = {
  "把…在": ["在"],
  "把…到": ["到"],
  "把…给": ["给"],
  "把…成": ["成"],
  "把…得": ["得"],
  "Kết quả": ["打开", "好", "上", "倒", "完", "开"],
  "Xu hướng": ["上去", "出来", "下来", "进去", "回来"],
  一下儿: ["一下儿"],
  了: ["了"],
  "Phủ định": ["没有", "没", "别", "不"],
  "Năng nguyện": ["要"],
  "Cách thức": ["倒着"],
  Hỏi: ["没有"],
  "Thiên nhiên": ["跑"],
  Lặp: ["擦擦", "开开"],
  Khác: ["往"],
  "Tân ngữ": ["告诉"],
};

/** Kho từ để lấy đáp án nhiễu trong chế độ điền chỗ trống */
const CLOZE_BASE = [
  "在",
  "到",
  "给",
  "成",
  "得",
  "好",
  "上",
  "了",
  "没",
  "别",
  "要",
  "出来",
  "上去",
  "倒着",
  "完",
  "开",
  "下来",
  "没有",
  "往",
  "告诉",
];

const ITEMS: Item[] = [
  [
    "把…在",
    "Tôi muốn treo nó ở giữa.",
    "我|想|把|它|挂|在|中间",
    "Wǒ xiǎng bǎ tā guà zài zhōngjiān.",
  ],
  [
    "把…在",
    "Tôi để nó trong phòng ngủ rồi.",
    "我|把|它|摆|在|卧室|里|了",
    "Wǒ bǎ tā bǎi zài wòshì li le.",
  ],
  [
    "把…在",
    "Chúng tôi đặt nó ở phía trước phòng học.",
    "我们|把|它|摆|在|了|教室|的|前边",
    "Wǒmen bǎ tā bǎi zài le jiàoshì de qiánbian.",
  ],
  [
    "把…到",
    "Xin khiêng dàn âm thanh vào phòng học.",
    "请|把|音响|搬|到|教室|里|来",
    "Qǐng bǎ yīnxiǎng bān dào jiàoshì li lái.",
  ],
  [
    "把…到",
    "Cho túi xách tay vào vali đi.",
    "把|手提包|放|到|行李箱|里|去|吧",
    "Bǎ shǒutíbāo fàng dào xínglixiāng li qù ba.",
  ],
  [
    "把…给",
    "Cô ấy đồng ý cho chúng tôi mượn phòng học lớn đó.",
    "她|答应|把|那个|大|教室|借|给|我们",
    "Tā dāying bǎ nà ge dà jiàoshì jiè gěi wǒmen.",
  ],
  [
    "把…给",
    "Xin đưa hộ chiếu và vé máy bay cho tôi.",
    "请|把|护照|和|机票|给|我",
    "Qǐng bǎ hùzhào hé jīpiào gěi wǒ.",
  ],
  [
    "把…给",
    "Đến buổi liên hoan rồi mới tặng quà sinh nhật cho cô ấy.",
    "到|晚会|上|再|把|生日|礼物|送|给|她",
    "Dào wǎnhuì shang zài bǎ shēngrì lǐwù sòng gěi tā.",
  ],
  [
    "把…成",
    "Chúng tôi muốn bày trí phòng học thành hội trường.",
    "我们|想|把|教室|布置|成|会场",
    "Wǒmen xiǎng bǎ jiàoshì bùzhì chéng huìchǎng.",
  ],
  [
    "把…成",
    "Xin dịch bài viết này sang tiếng Anh.",
    "请|把|这篇|文章|翻译|成|英文",
    "Qǐng bǎ zhè piān wénzhāng fānyì chéng Yīngwén.",
  ],
  [
    "把…成",
    "Có phải anh viết chữ “兴” thành chữ “旺” rồi không?",
    "你|是不是|把|“兴”|字|写|成|“旺”|字|了",
    "Nǐ shì bu shì bǎ “xīng” zì xiě chéng “wàng” zì le?",
  ],
  [
    "把…得",
    "Các em bày trí phòng học đẹp thật!",
    "你们|把|教室|布置|得|真|漂亮",
    "Nǐmen bǎ jiàoshì bùzhì de zhēn piàoliang!",
  ],
  [
    "把…得",
    "Anh ấy dọn phòng rất sạch.",
    "他|把|房间|打扫|得|很|干净",
    "Tā bǎ fángjiān dǎsǎo de hěn gānjìng.",
  ],
  [
    "Kết quả",
    "Xin thắt chặt dây an toàn.",
    "请|把|安全带|系|好",
    "Qǐng bǎ ānquándài jì hǎo.",
  ],
  [
    "Kết quả",
    "Anh lắp pin vào trước.",
    "我|先|把|电池|装|上",
    "Wǒ xiān bǎ diànchí zhuāng shàng.",
  ],
  [
    "Kết quả",
    "Anh làm đổ cốc rồi.",
    "你|把|杯子|碰|倒|了",
    "Nǐ bǎ bēizi pèng dǎo le.",
  ],
  ["Xu hướng", "Đặt nó lên đi.", "把|它|放|上去|吧", "Bǎ tā fàng shàngqu ba."],
  [
    "Xu hướng",
    "Xin lấy hết đồ trong túi ra.",
    "请|把|口袋|里|的|东西|都|掏|出来",
    "Qǐng bǎ kǒudài li de dōngxi dōu tāo chūlái.",
  ],
  [
    "Xu hướng",
    "Đợi một chút, lấy máy ảnh ra trước.",
    "等|一下儿|，|先|把|相机|拿|出来",
    "Děng yíxiàr, xiān bǎ xiàngjī ná chūlái.",
  ],
  [
    "一下儿",
    "Bẻ cái khóa cài một cái là mở ra.",
    "把|卡子|扳|一下儿|就|打开|了",
    "Bǎ qiǎzi bān yíxiàr jiù dǎkāi le.",
  ],
  ["了", "Mau uống nó đi.", "快|把|它|喝|了|吧", "Kuài bǎ tā hē le ba."],
  [
    "了",
    "Chúng ta ký gửi hành lý trước đã.",
    "我们|先|把|行李|托运|了",
    "Wǒmen xiān bǎ xíngli tuōyùn le.",
  ],
  [
    "Phủ định",
    "Chúng tôi vẫn chưa nói chuyện này cho cô ấy.",
    "我们|还|没|把|这事儿|告诉|她",
    "Wǒmen hái méi bǎ zhè shìr gàosu tā.",
  ],
  [
    "Phủ định",
    "Sao bạn không nói suy nghĩ của mình với cô ấy?",
    "你|为什么|不|把|你|的|想法|告诉|她|呢",
    "Nǐ wèishénme bù bǎ nǐ de xiǎngfǎ gàosu tā ne?",
  ],
  [
    "Phủ định",
    "Tôi chưa lấy máy ảnh ra.",
    "我|没有|把|相机|拿|出来",
    "Wǒ méiyǒu bǎ xiàngjī ná chūlái.",
  ],
  [
    "Phủ định",
    "Đừng thò đầu ra ngoài cửa sổ.",
    "别|把|头|伸|到|窗外|去",
    "Bié bǎ tóu shēn dào chuāngwài qù.",
  ],
  [
    "Năng nguyện",
    "Bạn phải lấy hết đồ trong túi ra.",
    "你|要|把|口袋|里|的|东西|都|掏|出来",
    "Nǐ yào bǎ kǒudài li de dōngxi dōu tāo chūlái.",
  ],
  [
    "Cách thức",
    "Tại sao lại dán ngược chữ “Phúc” lên cửa vậy?",
    "为什么|把|“福”|字|倒着|贴|在|门|上|呢",
    "Wèishénme bǎ “fú” zì dàozhe tiē zài mén shang ne?",
  ],
  [
    "Hỏi",
    "Bạn lắp pin xong chưa?",
    "你|把|电池|装|上|了|没有",
    "Nǐ bǎ diànchí zhuāng shàng le méiyǒu?",
  ],
  [
    "Thiên nhiên",
    "Gió thổi bay mũ của con rồi.",
    "风|把|你|的|帽子|刮|跑|了",
    "Fēng bǎ nǐ de màozi guā pǎo le.",
  ],
  [
    "把…到",
    "Lớp trưởng yêu cầu hôm đó chúng tôi mang món ăn tự tay mình làm đến buổi liên hoan.",
    "班长|要求|我们|那天|把|自己|亲手|做|的|菜|带|到|晚会|上|来",
    "Bānzhǎng yāoqiú wǒmen nà tiān bǎ zìjǐ qīnshǒu zuò de cài dài dào wǎnhuì shang lái.",
  ],
  [
    "把…成",
    "Tốt nhất mượn một phòng học lớn rồi bày trí nó thành hội trường.",
    "我们|最好|借|一个|大|教室|，|把|它|布置|成|会场",
    "Wǒmen zuìhǎo jiè yí ge dà jiàoshì, bǎ tā bùzhì chéng huìchǎng.",
  ],
  [
    "一下儿",
    "Chiều qua nhân viên quét dọn phòng học một chút.",
    "昨天|下午|服务员|把|教室|打扫|了|一下儿",
    "Zuótiān xiàwǔ fúwùyuán bǎ jiàoshì dǎsǎo le yíxiàr.",
  ],
  [
    "把…得",
    "Cửa ra vào và cửa sổ cũng đều được lau sạch bóng.",
    "把|门|和|窗户|也|都|擦|得|干干净净|的",
    "Bǎ mén hé chuānghu yě dōu cā de gāngānjìngjìng de.",
  ],
  [
    "把…成",
    "Chúng tôi xếp bàn thành một vòng tròn lớn.",
    "我们|把|桌子|摆|成|了|一个|大|圆圈儿",
    "Wǒmen bǎ zhuōzi bǎi chéng le yí ge dà yuánquānr.",
  ],
  [
    "把…在",
    "Edward dán mấy chữ lớn “Giáng sinh – Năm mới vui vẻ” lên bảng đen.",
    "爱德华|把|“圣诞—新年快乐”|几个|大字|贴|在|了|黑板|上",
    "Àidéhuá bǎ “Shèngdàn—xīnnián kuàilè” jǐ ge dà zì tiē zài le hēibǎn shang.",
  ],
  [
    "把…到",
    "Nên cũng khiêng dàn âm thanh vào phòng học rồi.",
    "所以|把|音响|也|搬|到|教室|里|来|了",
    "Suǒyǐ bǎ yīnxiǎng yě bān dào jiàoshì li lái le.",
  ],
  [
    "把…得",
    "Dùng đèn màu và ruy băng trang trí nó rất đẹp.",
    "用|彩灯|和|彩带|把|它|装饰|得|非常|漂亮",
    "Yòng cǎidēng hé cǎidài bǎ tā zhuāngshì de fēicháng piàoliang.",
  ],
  [
    "Kết quả",
    "Sau khi chúng tôi bày trí xong phòng học, mời thầy cô đến xem.",
    "我们|把|教室|布置|好|以后|，|请|老师|来|看|了|看",
    "Wǒmen bǎ jiàoshì bùzhì hǎo yǐhòu, qǐng lǎoshī lái kàn le kàn.",
  ],
  [
    "Phủ định",
    "Tiểu Lâm vẫn chưa mang hoa thủy tiên đến phải không?",
    "小林|还|没|把|水仙花|送|来|吧",
    "Xiǎo Lín hái méi bǎ shuǐxiānhuā sòng lái ba?",
  ],
  [
    "把…在",
    "Để nó trong phòng khách thì tốt hơn.",
    "把|它|摆|在|客厅|里|比较|好",
    "Bǎ tā bǎi zài kètīng li bǐjiào hǎo.",
  ],
  [
    "把…在",
    "Tôi dán chữ “Phúc” lên cửa nhé.",
    "我|把|“福”|字|贴|在|门|上|吧",
    "Wǒ bǎ “fú” zì tiē zài mén shang ba.",
  ],
  [
    "Xu hướng",
    "Dán luôn câu đối anh viết lên đi.",
    "把|你|写|的|对联儿|也|贴|上去|吧",
    "Bǎ nǐ xiě de duìliánr yě tiē shàngqu ba.",
  ],
  [
    "Cách thức",
    "(Trích) Dán ngược nó lên cửa, giường, bàn, ghế…",
    "把|它|倒着|贴|在|门上|、|床上|、|桌子上|、|椅子上",
    "Bǎ tā dàozhe tiē zài mén shang, chuáng shang, zhuōzi shang, yǐzi shang.",
  ],
  [
    "了",
    "Chúng ta đi làm thủ tục lên máy bay trước, ký gửi hành lý đã.",
    "我们|先|去|办理|登机|手续|，|把|行李|托运|了",
    "Wǒmen xiān qù bànlǐ dēngjī shǒuxù, bǎ xíngli tuōyùn le.",
  ],
  [
    "Xu hướng",
    "Vali nào cần ký gửi? Đặt nó lên đi.",
    "哪个|箱子|要|托运|？|把|它|放|上去|吧",
    "Nǎ ge xiāngzi yào tuōyùn? Bǎ tā fàng shàngqu ba.",
  ],
  [
    "Xu hướng",
    "Quan Kiến Bình lấy máy ảnh từ trong túi xách ra.",
    "关建平|把|相机|从|手提包|里|拿|出来",
    "Guān Jiànpíng bǎ xiàngjī cóng shǒutíbāo li ná chūlái.",
  ],
  ["Kết quả", "Em bật đèn lên đi.", "你|把|灯|打开", "Nǐ bǎ dēng dǎkāi."],
  [
    "Kết quả",
    "Xin quý khách thắt chặt dây an toàn, tắt điện thoại.",
    "请|大家|把|安全带|系|好|，|把|手机|关|上",
    "Qǐng dàjiā bǎ ānquándài jì hǎo, bǎ shǒujī guān shàng.",
  ],
  [
    "Khác",
    "Cắm đầu khóa này vào trong là được.",
    "把|这个|插头|往|里|一|插|就|行|了",
    "Bǎ zhège chātóu wǎng lǐ yì chā jiù xíng le.",
  ],
  [
    "Kết quả",
    "Vô tình làm đổ cốc nước.",
    "不小心|把|杯子|碰|倒|了",
    "Bù xiǎoxīn bǎ bēizi pèng dǎo le.",
  ],
  [
    "Lặp",
    "Mau lấy giấy lau bàn đi.",
    "快|拿|纸|把|桌子|擦擦",
    "Kuài ná zhǐ bǎ zhuōzi cāca.",
  ],
  [
    "把…到",
    "Cậu bé thích thò đầu ra ngoài cửa sổ.",
    "儿子|喜欢|把|头|伸|到|窗外|去",
    "Érzi xǐhuan bǎ tóu shēn dào chuāngwài qù.",
  ],
  [
    "把…到",
    "Nhưng cậu bé vẫn thò đầu ra ngoài cửa sổ.",
    "可是|男孩儿|还是|把|头|伸|到|窗外",
    "Kěshì nánháir háishi bǎ tóu shēn dào chuāngwài.",
  ],
  [
    "Xu hướng",
    "Lúc này bố lặng lẽ lấy mũ của con xuống.",
    "这时|爸爸|悄悄|地|把|儿子|的|帽子|摘|了|下来",
    "Zhèshí bàba qiāoqiāo de bǎ érzi de màozi zhāi le xiàlái.",
  ],
  [
    "把…到",
    "Bố rất nhanh đội mũ lên đầu con.",
    "爸爸|很快|把|帽子|戴|到|他|的|头|上",
    "Bàba hěn kuài bǎ màozi dài dào tā de tóu shang.",
  ],
  [
    "Xu hướng",
    "Cậu liền lấy mũ của bố xuống rồi ném ra ngoài cửa sổ tàu.",
    "就|一下子|把|爸爸|的|帽子|摘|了|下来|，|扔|到|车窗|外边|去|了",
    "Jiù yíxiàzi bǎ bàba de màozi zhāi le xiàlái, rēng dào chēchuāng wàibian qù le.",
  ],
  [
    "把…给",
    "Tôi đưa máy ảnh cho chị rồi.",
    "我|把|相机|给|姐姐|了",
    "Wǒ bǎ xiàngjī gěi jiějie le.",
  ],
  ["了", "Cô ấy uống thuốc rồi.", "她|把|药|喝|了", "Tā bǎ yào hē le."],
  [
    "Kết quả",
    "Bạn làm xong bài tập hôm qua chưa?",
    "你|把|昨天|的|作业|做|完|了|吗",
    "Nǐ bǎ zuótiān de zuòyè zuò wán le ma?",
  ],
  ["了", "Uống thuốc đi.", "把|药|喝|了|吧", "Bǎ yào hē le ba."],
  ["Lặp", "Xin mở cửa sổ ra.", "请|把|窗户|开开", "Qǐng bǎ chuānghu kāikai."],
  [
    "Tân ngữ",
    "Chúng ta nói chuyện này cho cô ấy nhé.",
    "我们|把|这件|事|告诉|她|吧",
    "Wǒmen bǎ zhè jiàn shì gàosu tā ba.",
  ],
  [
    "Xu hướng",
    "Đặt hành lý cần ký gửi lên đi.",
    "把|要|托运|的|行李|放|上去|吧",
    "Bǎ yào tuōyùn de xíngli fàng shàngqu ba.",
  ],
  [
    "Phủ định",
    "Bạn chưa lấy hết đồ trong túi ra.",
    "你|没|把|口袋|里|的|东西|都|掏|出来",
    "Nǐ méi bǎ kǒudài li de dōngxi dōu tāo chūlái.",
  ],
  ["Lặp", "Bật điều hòa lên.", "把|空调|开开", "Bǎ kōngtiáo kāikai."],
  ["Lặp", "Bật tivi lên.", "把|电视|开开", "Bǎ diànshì kāikai."],
  ["Lặp", "Mở cửa sổ ra.", "把|窗户|开开", "Bǎ chuānghu kāikai."],
  ["Lặp", "Bật điện thoại lên.", "把|手机|开开", "Bǎ shǒujī kāikai."],
  [
    "Kết quả",
    "Thắt chặt dây an toàn.",
    "把|安全带|系|好",
    "Bǎ ānquándài jì hǎo.",
  ],
  ["Kết quả", "Thắt cà vạt cho chỉnh.", "把|领带|系|好", "Bǎ lǐngdài jì hǎo."],
  [
    "Kết quả",
    "Cất hộ chiếu cho cẩn thận.",
    "把|护照|放|好",
    "Bǎ hùzhào fàng hǎo.",
  ],
  [
    "Kết quả",
    "Mặc quần áo cho chỉnh tề.",
    "把|衣服|穿|好",
    "Bǎ yīfu chuān hǎo.",
  ],
  ["把…给", "Đưa vé máy bay cho tôi.", "把|机票|给|我", "Bǎ jīpiào gěi wǒ."],
  ["把…给", "Đưa sách cho tôi.", "把|书|给|我", "Bǎ shū gěi wǒ."],
  ["把…给", "Đưa bài tập cho tôi.", "把|作业|给|我", "Bǎ zuòyè gěi wǒ."],
  ["把…给", "Đưa tiền cho tôi.", "把|钱|给|我", "Bǎ qián gěi wǒ."],
  [
    "把…给",
    "Đưa hộ chiếu của bạn cho tôi.",
    "把|你|的|护照|给|我",
    "Bǎ nǐ de hùzhào gěi wǒ.",
  ],
  [
    "把…给",
    "Đưa vở bài tập của bạn cho thầy.",
    "把|你|的|作业本|给|老师",
    "Bǎ nǐ de zuòyèběn gěi lǎoshī.",
  ],
  [
    "把…给",
    "Đưa món quà đó cho Anna.",
    "把|那件|礼物|给|安娜",
    "Bǎ nà jiàn lǐwù gěi Ānnà.",
  ],
  [
    "把…给",
    "Đưa chiếc áo đỏ này cho em gái.",
    "把|这件|红|衣服|给|妹妹",
    "Bǎ zhè jiàn hóng yīfu gěi mèimei.",
  ],
  [
    "把…给",
    "Đưa cuốn từ điển này cho em trai.",
    "把|这本|词典|给|弟弟",
    "Bǎ zhè běn cídiǎn gěi dìdi.",
  ],
  [
    "把…给",
    "Đưa tấm ảnh này cho bạn.",
    "把|这张|照片|给|朋友",
    "Bǎ zhè zhāng zhàopiàn gěi péngyou.",
  ],
  ["Xu hướng", "Đặt vali lên.", "把|箱子|放|上去", "Bǎ xiāngzi fàng shàngqu."],
  [
    "Xu hướng",
    "Đặt hành lý lên.",
    "把|行李|放|上去",
    "Bǎ xíngli fàng shàngqu.",
  ],
  ["Xu hướng", "Lấy máy ảnh ra.", "把|相机|拿|出来", "Bǎ xiàngjī ná chūlái."],
  ["Xu hướng", "Lấy điện thoại ra.", "把|手机|拿|出来", "Bǎ shǒujī ná chūlái."],
  ["Kết quả", "Lắp pin vào.", "把|电池|装|上", "Bǎ diànchí zhuāng shàng."],
  ["Kết quả", "Mặc quần áo vào.", "把|衣服|穿|上", "Bǎ yīfu chuān shàng."],
  ["Kết quả", "Mang máy ảnh theo.", "把|相机|拿|上", "Bǎ xiàngjī ná shàng."],
  ["Kết quả", "Mang ô theo.", "把|伞|带|上", "Bǎ sǎn dài shàng."],
  ["一下儿", "Đóng cửa một chút.", "把|门|关|一下儿", "Bǎ mén guān yíxiàr."],
  ["Kết quả", "Làm đổ cốc rồi.", "把|杯子|碰|倒|了", "Bǎ bēizi pèng dǎo le."],
  [
    "Kết quả",
    "Làm đổ xe đạp rồi.",
    "把|自行车|碰|倒|了",
    "Bǎ zìxíngchē pèng dǎo le.",
  ],
  [
    "Kết quả",
    "Xin mở cửa sổ ra.",
    "请|把|窗户|打开",
    "Qǐng bǎ chuānghu dǎkāi.",
  ],
  ["Kết quả", "Xin mở vali ra.", "请|把|箱子|打开", "Qǐng bǎ xiāngzi dǎkāi."],
  ["Kết quả", "Xin bật tivi lên.", "请|把|电视|打开", "Qǐng bǎ diànshì dǎkāi."],
  [
    "Kết quả",
    "Xin tắt điện thoại.",
    "请|把|手机|关上",
    "Qǐng bǎ shǒujī guānshàng.",
  ],
  [
    "Kết quả",
    "Xin tắt điều hòa.",
    "请|把|空调|关上",
    "Qǐng bǎ kōngtiáo guānshàng.",
  ],
  [
    "Hỏi",
    "Bạn làm xong bài tập chưa?",
    "你|把|作业|做|完|了|没有",
    "Nǐ bǎ zuòyè zuò wán le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn nấu xong bữa tối chưa?",
    "你|把|晚饭|做|好|了|没有",
    "Nǐ bǎ wǎnfàn zuò hǎo le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn chuẩn bị xong hành lý chưa?",
    "你|把|行李|准备|好|了|没有",
    "Nǐ bǎ xíngli zhǔnbèi hǎo le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn cắm phích vào chưa?",
    "你|把|插头|插|上|了|没有",
    "Nǐ bǎ chātóu chā shàng le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn đã nhớ được từ mới chưa?",
    "你|把|生词|记|住|了|没有",
    "Nǐ bǎ shēngcí jì zhù le méiyǒu?",
  ],
  [
    "了",
    "Mau uống cà phê đi.",
    "快|把|咖啡|喝|了|吧",
    "Kuài bǎ kāfēi hē le ba.",
  ],
  [
    "了",
    "Mau làm bài tập đi.",
    "快|把|作业|做|了|吧",
    "Kuài bǎ zuòyè zuò le ba.",
  ],
  [
    "了",
    "Mau giặt quần áo đi.",
    "快|把|衣服|洗|了|吧",
    "Kuài bǎ yīfu xǐ le ba.",
  ],
  ["了", "Mau uống thuốc đi.", "快|把|药|吃|了|吧", "Kuài bǎ yào chī le ba."],
  [
    "了",
    "Mau trả cuốn sách này đi.",
    "快|把|这本|书|还|了|吧",
    "Kuài bǎ zhè běn shū huán le ba.",
  ],
  [
    "了",
    "Mau tắt tivi đi.",
    "快|把|电视|关|了|吧",
    "Kuài bǎ diànshì guān le ba.",
  ],
  [
    "一下儿",
    "Xem tin WeChat này một chút.",
    "把|这条|微信|看|一下儿",
    "Bǎ zhè tiáo wēixìn kàn yíxiàr.",
  ],
  [
    "一下儿",
    "Giặt chiếc áo này một chút.",
    "把|这件|衣服|洗|一下儿",
    "Bǎ zhè jiàn yīfu xǐ yíxiàr.",
  ],
  [
    "一下儿",
    "Chuẩn bị trước từ mới hôm nay một chút.",
    "把|今天|的|生词|预习|一下儿",
    "Bǎ jīntiān de shēngcí yùxí yíxiàr.",
  ],
  [
    "一下儿",
    "Ôn lại ngữ pháp hôm qua một chút.",
    "把|昨天|的|语法|复习|一下儿",
    "Bǎ zuótiān de yǔfǎ fùxí yíxiàr.",
  ],
  [
    "Hỏi",
    "Bạn lấy máy ảnh ra chưa?",
    "你|把|相机|拿|出来|了|没有",
    "Nǐ bǎ xiàngjī ná chūlái le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn bỏ vé máy bay vào chưa?",
    "你|把|机票|放|进去|了|没有",
    "Nǐ bǎ jīpiào fàng jìnqù le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn cắm phích vào chưa?",
    "你|把|插头|插|进去|了|没有",
    "Nǐ bǎ chātóu chā jìnqù le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn lấy đồ về chưa?",
    "你|把|东西|取|回来|了|没有",
    "Nǐ bǎ dōngxi qǔ huílái le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn gửi ảnh đi chưa?",
    "你|把|照片|发|出去|了|没有",
    "Nǐ bǎ zhàopiàn fā chūqù le méiyǒu?",
  ],
  [
    "Hỏi",
    "Bạn lấy máy tính ra chưa?",
    "你|把|电脑|拿|出来|了|没有",
    "Nǐ bǎ diànnǎo ná chūlái le méiyǒu?",
  ],
  [
    "把…在",
    "Đặt lọ hoa này ở đâu?",
    "把|这瓶|花儿|摆|在|哪儿",
    "Bǎ zhè píng huār bǎi zài nǎr?",
  ],
  [
    "把…在",
    "Đặt nó trong phòng khách nhé.",
    "把|它|摆|在|客厅|里|吧",
    "Bǎ tā bǎi zài kètīng li ba.",
  ],
  [
    "把…在",
    "Dán tấm ảnh này lên tường.",
    "把|这张|照片|贴|在|墙|上",
    "Bǎ zhè zhāng zhàopiàn tiē zài qiáng shang.",
  ],
  [
    "把…在",
    "Treo bức tranh này trong phòng sách.",
    "把|这幅|画儿|挂|在|书房|里",
    "Bǎ zhè fú huàr guà zài shūfáng li.",
  ],
  [
    "把…在",
    "Dán chữ “Phúc” này lên cửa.",
    "把|这张|“福”|字|贴|在|门|上",
    "Bǎ zhè zhāng “fú” zì tiē zài mén shang.",
  ],
  ["把…在", "Đỗ xe ở cửa.", "把|车|停|在|门口", "Bǎ chē tíng zài ménkǒu."],
  [
    "把…在",
    "Ghi những số điện thoại này vào điện thoại.",
    "把|这些|电话|号码|记|在|手机|里",
    "Bǎ zhèxiē diànhuà hàomǎ jì zài shǒujī li.",
  ],
  [
    "把…在",
    "Để những cuốn sách này lên giá sách.",
    "把|这些|书|放|在|书架|上",
    "Bǎ zhèxiē shū fàng zài shūjià shang.",
  ],
  [
    "把…到",
    "Cô ấy khiêng dàn âm thanh đến phòng học.",
    "她|把|音响|搬|到|了|教室",
    "Tā bǎ yīnxiǎng bān dào le jiàoshì.",
  ],
  [
    "把…到",
    "Cô ấy đưa mẹ đến bệnh viện.",
    "她|把|妈妈|送|到|了|医院",
    "Tā bǎ māma sòng dào le yīyuàn.",
  ],
  [
    "把…到",
    "Cô ấy để quần áo vào trong va li.",
    "她|把|衣服|放|到|了|箱子|里",
    "Tā bǎ yīfu fàng dào le xiāngzi li.",
  ],
  [
    "把…到",
    "Cô ấy lái xe đến trường.",
    "她|把|车|开|到|了|学校",
    "Tā bǎ chē kāi dào le xuéxiào.",
  ],
  [
    "把…到",
    "Cô ấy đưa con ra nước ngoài.",
    "她|把|孩子|带|到|了|国外",
    "Tā bǎ háizi dài dào le guówài.",
  ],
  [
    "把…到",
    "Cô ấy để tấm ảnh vào trong sách.",
    "她|把|照片|放|到|了|书|里",
    "Tā bǎ zhàopiàn fàng dào le shū li.",
  ],
  [
    "把…到",
    "Cô ấy bày hoa ở phòng khách.",
    "她|把|花儿|摆|到|了|客厅",
    "Tā bǎ huār bǎi dào le kètīng.",
  ],
  [
    "把…给",
    "Hãy tặng món quà này cho Anna.",
    "把|这件|礼物|送|给|安娜",
    "Bǎ zhè jiàn lǐwù sòng gěi Ānnà.",
  ],
  [
    "把…给",
    "Giao tấm ảnh này cho cô ấy.",
    "把|这张|照片|交|给|她",
    "Bǎ zhè zhāng zhàopiàn jiāo gěi tā.",
  ],
  [
    "把…给",
    "Gửi tin WeChat này cho bạn.",
    "把|这条|微信|发|给|朋友",
    "Bǎ zhè tiáo wēixìn fā gěi péngyou.",
  ],
  [
    "把…给",
    "Trả cuốn sách này cho thư viện.",
    "把|这本|书|还|给|图书馆",
    "Bǎ zhè běn shū huán gěi túshūguǎn.",
  ],
  [
    "把…给",
    "Tặng hộp bánh kem này cho thầy Vương.",
    "把|这盒|蛋糕|送|给|王老师",
    "Bǎ zhè hé dàngāo sòng gěi Wáng lǎoshī.",
  ],
  [
    "把…给",
    "Mang những thứ này cho mẹ tôi.",
    "把|这些|东西|带|给|我|妈妈",
    "Bǎ zhèxiē dōngxi dài gěi wǒ māma.",
  ],
  [
    "把…给",
    "Cho anh ấy mượn số tiền này.",
    "把|这些|钱|借|给|他",
    "Bǎ zhèxiē qián jiè gěi tā.",
  ],
  [
    "把…成",
    "Có phải bạn muốn bày trí phòng học này thành hội trường?",
    "你|是不是|想|把|这个|教室|布置|成|会场",
    "Nǐ shì bu shì xiǎng bǎ zhège jiàoshì bùzhì chéng huìchǎng?",
  ],
  [
    "把…成",
    "Quay cuốn tiểu thuyết này thành phim.",
    "把|这本|小说儿|拍|成|电影",
    "Bǎ zhè běn xiǎoshuōr pāi chéng diànyǐng.",
  ],
  [
    "把…成",
    "Bày trí căn phòng này thành phòng sách.",
    "把|这个|屋子|布置|成|书房",
    "Bǎ zhège wūzi bùzhì chéng shūfáng.",
  ],
  [
    "把…成",
    "Làm cuốn sách này thành đĩa CD.",
    "把|这本|书|做|成|光盘",
    "Bǎ zhè běn shū zuò chéng guāngpán.",
  ],
  [
    "把…成",
    "Viết câu chuyện này thành tiểu thuyết.",
    "把|这个|故事|写|成|小说儿",
    "Bǎ zhège gùshi xiě chéng xiǎoshuōr.",
  ],
];

/* ───────────────────────── Hàm tiện ích ───────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function keyIdx(it: Item): number {
  const list = KEY[it[0]] || [];
  return it[2].split("|").findIndex((x) => list.includes(x));
}

/** Tô đậm chữ 把 trong chuỗi */
function BoldBa({ text }: { text: string }) {
  const parts = text.split("把");
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <b>把</b>}
          {p}
        </Fragment>
      ))}
    </>
  );
}

const TABS: [Mode, string][] = [
  ["sort", "Sắp xếp câu"],
  ["trans", "Dịch Việt → Trung"],
  ["cloze", "Điền chỗ trống"],
];

/* ───────────────────────── Component ───────────────────────── */

export default function BaiTapBa() {
  const [mode, setMode] = useState<Mode>("sort");
  const [filter, setFilter] = useState("");
  const [showGuide, setShowGuide] = useState(true);

  const [pool, setPool] = useState<Q[] | null>(null);
  const [total, setTotal] = useState(0);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);

  const [bank, setBank] = useState<Chip[]>([]);
  const [ansIds, setAnsIds] = useState<number[]>([]);
  const [cloze, setCloze] = useState<{ ki: number; opts: string[] }>({
    ki: 0,
    opts: [],
  });
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [ok, setOk] = useState(false);

  /** Chuẩn bị trạng thái cho một câu hỏi mới */
  const setup = useCallback((q: Q | undefined, m: Mode) => {
    setAnsIds([]);
    setChecked(false);
    setOk(false);
    setPicked(null);
    if (!q) return;
    const words = q.item[2].split("|");

    if (m === "cloze") {
      const ki = keyIdx(q.item);
      const ds = shuffle(
        CLOZE_BASE.filter((x) => x !== words[ki] && !words.includes(x)),
      ).slice(0, 3);
      setCloze({ ki, opts: shuffle([words[ki], ...ds]) });
      return;
    }

    let chips = words.slice();
    if (m === "trans") {
      const extra = shuffle(DISTRACT[q.item[0]] || [])
        .filter((x) => !words.includes(x))
        .slice(0, 2);
      chips = chips.concat(extra);
    }
    setBank(shuffle(chips.map((t, id) => ({ t, id }))));
  }, []);

  /** Bắt đầu lượt mới (xáo trộn lại toàn bộ câu theo bộ lọc) */
  const start = useCallback(
    (m: Mode, f: string) => {
      const p: Q[] = shuffle(
        ITEMS.filter(
          (x) => (!f || x[0] === f) && (m !== "cloze" || keyIdx(x) >= 0),
        ),
      ).map((item) => ({ item, retry: false }));
      setPool(p);
      setTotal(p.length);
      setQi(0);
      setScore(0);
      setup(p[0], m);
    },
    [setup],
  );

  // Xáo trộn ở client sau khi mount để tránh lệch hydration
  useEffect(() => {
    start(mode, filter);
  }, [mode, filter, start]);

  const q = pool && qi < pool.length ? pool[qi] : null;
  const words = q ? q.item[2].split("|") : [];
  const guide = q ? STRUCT[q.item[0]] : null;

  const next = () => {
    const n = qi + 1;
    setQi(n);
    setup(pool?.[n], mode);
  };

  /** Ghi nhận kết quả: đúng ngay lần đầu thì +1 điểm, sai thì đưa câu xuống cuối để làm lại */
  const record = (isOk: boolean) => {
    if (!q) return;
    setChecked(true);
    setOk(isOk);
    if (!q.retry) {
      if (isOk) setScore((s) => s + 1);
      else setPool((p) => [...(p ?? []), { item: q.item, retry: true }]);
    }
  };

  /* ── chế độ sắp xếp / dịch ── */
  const chipText = (id: number) => bank.find((c) => c.id === id)?.t ?? "";

  const onCheck = () => {
    if (!q) return;
    if (checked) {
      next();
      return;
    }
    record(ansIds.map(chipText).join("") === words.join(""));
  };

  /* ── chế độ điền chỗ trống ── */
  const onPick = (o: string) => {
    if (checked) return;
    setPicked(o);
    record(o === words[cloze.ki]);
  };

  const guideBox =
    showGuide && guide ? (
      <div className="bt-guide">
        <b>{guide[0]}</b>
        <br />
        {guide[1]}
      </div>
    ) : null;

  const meta = q && pool && (
    <div className="bt-meta">
      <span className="bt-tag">{q.item[0]}</span>
      <span>
        {qi + 1}/{pool.length}
      </span>
    </div>
  );

  return (
    <div className="bt">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bt-w">
        <h1>Bài tập 把: sắp xếp, dịch Việt-Trung, điền chỗ trống</h1>
        <p className="bt-sub">
          {ITEMS.length} câu: bài khóa, ví dụ ngữ pháp, câu đọc to và toàn bộ
          bài tập thay thế. Chạm từ để xếp, chạm lại để gỡ ra.
        </p>

        <div className="bt-tabs">
          {TABS.map(([m, label]) => (
            <button
              key={m}
              type="button"
              className={"bt-tab" + (mode === m ? " bt-on" : "")}
              onClick={() => setMode(m)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bt-opt">
          <span>Cấu trúc:</span>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Tất cả</option>
            {Object.keys(STRUCT).map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
          <label>
            <input
              type="checkbox"
              checked={showGuide}
              onChange={(e) => setShowGuide(e.target.checked)}
            />{" "}
            Gợi ý cấu trúc và từ
          </label>
        </div>

        {/* Màn hình tổng kết */}
        {pool && !q && (
          <div className="bt-q bt-sc">
            <span className="bt-score">
              {score}/{total}
            </span>
            Câu đúng ngay lần đầu.
            <div className="bt-row" style={{ marginTop: 14 }}>
              <button
                type="button"
                className="bt-btn bt-pri"
                onClick={() => start(mode, filter)}
              >
                Làm lại
              </button>
            </div>
          </div>
        )}

        {/* Sắp xếp câu / Dịch Việt → Trung */}
        {q && mode !== "cloze" && (
          <div className="bt-q">
            {meta}
            <div className="bt-vi">{q.item[1]}</div>
            {guideBox}
            <div className="bt-ans">
              {ansIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  className="bt-ch"
                  onClick={() => {
                    if (!checked) setAnsIds((a) => a.filter((x) => x !== id));
                  }}
                >
                  {chipText(id)}
                </button>
              ))}
            </div>
            <div className="bt-bank">
              {bank.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={
                    "bt-ch" + (ansIds.includes(c.id) ? " bt-used" : "")
                  }
                  onClick={() => {
                    if (!checked) setAnsIds((a) => [...a, c.id]);
                  }}
                >
                  {c.t}
                </button>
              ))}
            </div>
            <div className="bt-row">
              <button
                type="button"
                className="bt-btn"
                onClick={() => {
                  if (!checked) setAnsIds([]);
                }}
              >
                Xóa
              </button>
              <button type="button" className="bt-btn bt-pri" onClick={onCheck}>
                {checked ? "Câu tiếp" : "Kiểm tra"}
              </button>
            </div>
            {checked && (
              <div className={"bt-res " + (ok ? "bt-ok" : "bt-no")}>
                {ok ? "Đúng rồi!" : "Chưa đúng. Đáp án:"}
                <div className="bt-zh">
                  <BoldBa text={words.join("")} />
                </div>
                <div className="bt-py">{q.item[3]}</div>
              </div>
            )}
          </div>
        )}

        {/* Điền chỗ trống */}
        {q && mode === "cloze" && (
          <div className="bt-q">
            {meta}
            <div className="bt-vi">{q.item[1]}</div>
            {guideBox}
            <div className="bt-zh bt-big">
              {words.map((t, i) =>
                i === cloze.ki ? (
                  <span key={i} className="bt-bl">
                    &nbsp;
                  </span>
                ) : (
                  <BoldBa key={i} text={t} />
                ),
              )}
            </div>
            <div className="bt-opts">
              {cloze.opts.map((o) => {
                let cls = "bt-ch";
                if (checked) {
                  if (o === words[cloze.ki]) cls += " bt-okc";
                  else if (o === picked) cls += " bt-nc";
                }
                return (
                  <button
                    key={o}
                    type="button"
                    className={cls}
                    onClick={() => onPick(o)}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {checked && (
              <div className={"bt-res " + (ok ? "bt-ok" : "bt-no")}>
                {ok
                  ? "Đúng rồi!"
                  : `Chưa đúng. Đáp án là “${words[cloze.ki]}”.`}
                <div className="bt-zh">
                  <BoldBa text={words.join("")} />
                </div>
                <div className="bt-py">{q.item[3]}</div>
              </div>
            )}
            <div className="bt-row">
              {checked && (
                <button type="button" className="bt-btn bt-pri" onClick={next}>
                  Câu tiếp
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── CSS (nhúng sẵn) ───────────────────────── */

const CSS = `
.bt{--bg:#fff;--card:#fff;--tx:#222;--mu:#6b6b6b;--bd:#e3ded4;--ac:#c0392b;--acbg:#fbeae7;--ok:#2e7d32;--okbg:#e6f4e7;--no:#c0392b;
box-sizing:border-box;min-height:100vh;min-height:100dvh;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);
background:var(--bg);color:var(--tx);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5}
@media (prefers-color-scheme:dark){.bt{color-scheme:dark;--bg:#1d293d;--card:#0f172a;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}}
.dark .bt{color-scheme:dark;--bg:#1d293d;--card:#0f172a;--tx:#ece8e0;--mu:#a09a8e;--bd:#3a3731;--ac:#ff8a78;--acbg:#3a2623;--ok:#7bd88a;--okbg:#22331f;--no:#ff8a78}
:where(.bt) *{box-sizing:border-box}
:where(.bt) button,:where(.bt) select{font:inherit;color:var(--tx)}
.bt-w{max-width:640px;margin:0 auto;padding:18px 14px 40px}
.bt h1{font-size:1.3rem;margin:0 0 2px}
.bt-sub{color:var(--mu);font-size:.85rem;margin:0 0 12px}
.bt-opt{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:.85rem;margin-bottom:12px}
.bt select{background:var(--card);border:1px solid var(--bd);border-radius:8px;padding:4px 8px;max-width:100%}
.bt label{cursor:pointer}
.bt-tabs{display:flex;gap:6px;margin-bottom:12px}
.bt-tab{flex:1;border:1px solid var(--bd);background:var(--card);border-radius:12px;padding:10px;cursor:pointer;font-weight:600}
.bt-tab.bt-on{background:var(--ac);border-color:var(--ac);color:#fff}
.bt-q{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:16px}
.bt-meta{display:flex;justify-content:space-between;color:var(--mu);font-size:.8rem;margin-bottom:8px}
.bt-tag{background:var(--acbg);color:var(--ac);border-radius:999px;padding:1px 10px}
.bt-vi{font-size:1.15rem;margin:4px 0 10px}
.bt-guide{background:var(--acbg);border-radius:10px;padding:8px 12px;font-size:.85rem;margin-bottom:10px}
.bt-guide b{color:var(--ac)}
.bt-ans{min-height:58px;border:2px dashed var(--bd);border-radius:12px;padding:8px;display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;align-content:flex-start}
.bt-bank{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;min-height:44px}
.bt-ch{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.3rem;border:1px solid var(--bd);background:var(--bg);border-radius:10px;padding:4px 12px;cursor:pointer}
.bt-ch.bt-used{opacity:.25;pointer-events:none}
.bt-ch.bt-okc{background:var(--okbg);border-color:var(--ok);color:var(--ok)}
.bt-ch.bt-nc{background:var(--acbg);border-color:var(--no);color:var(--no)}
.bt-row{display:flex;gap:8px}
.bt-btn{flex:1;border:1px solid var(--bd);background:var(--card);border-radius:12px;padding:11px;cursor:pointer;font-weight:600}
.bt-pri{background:var(--ac);border-color:var(--ac);color:#fff}
.bt-res{margin-top:12px;border-radius:12px;padding:10px 12px;font-size:.95rem}
.bt-res.bt-ok{background:var(--okbg);color:var(--ok)}
.bt-res.bt-no{background:var(--acbg);color:var(--no)}
.bt-zh{font-family:"KaiTi","STKaiti","PingFang SC","Songti SC","SimSun","Noto Serif CJK SC","Noto Serif SC",serif;font-size:1.35rem;color:var(--tx);margin-top:4px}
.bt-zh b{color:var(--ac)}
.bt-big{font-size:1.7rem;line-height:1.8;margin:6px 0 14px}
.bt-py{color:var(--ac);font-size:.9rem}
.bt-bl{display:inline-block;min-width:2.2em;border-bottom:3px solid var(--ac);text-align:center;color:var(--ac)}
.bt-opts{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px}
.bt-sc{text-align:center;padding:24px 8px}
.bt-score{font-size:2rem;color:var(--ac);display:block}
`;
