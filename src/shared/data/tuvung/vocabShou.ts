// vocabData.ts
// Thêm từ mới: copy một khối { ... } bên dưới, dán vào cuối mảng `vocab`.
// `added: true` = ví dụ do mình thêm (không có trong sách) → hiện nhãn "thêm" trong box.

export const vocab: Word[] = [
  {
    hanzi: "接",
    pinyin: "jiē",
    pos: "động từ",
    meanings: ["nghe, bắt (điện thoại)", "đón (người)", "đỡ, bắt lấy"],
    usage:
      "接电话 = nghe điện thoại. 接 + người = đón ai đó (去机场接朋友). Khi thêm bổ ngữ kết quả 住: 接住 = đỡ/bắt chắc được (接住球). Trái nghĩa với “đón” là 送 (sòng) – tiễn, đưa.",
    examples: [
      {
        zh: "电话又响了，你去接吧。",
        py: "Diànhuà yòu xiǎng le, nǐ qù jiē ba.",
        vi: "Điện thoại lại reo rồi, bạn đi nghe đi.",
      },
      {
        zh: "我去机场接我的朋友。",
        py: "Wǒ qù jīchǎng jiē wǒ de péngyou.",
        vi: "Tôi ra sân bay đón bạn của tôi.",
      },
      {
        zh: "他接住了我扔过来的球。",
        py: "Tā jiēzhùle wǒ rēng guòlái de qiú.",
        vi: "Anh ấy bắt được quả bóng tôi ném sang.",
        added: true,
      },
    ],
  },
  {
    hanzi: "报名",
    pinyin: "bàomíng",
    pos: "động từ ly hợp",
    meanings: ["đăng ký, ghi danh"],
    usage:
      "Là từ ly hợp (报 + 名) nên có thể chen thành phần vào giữa: 报了名, 报过名, 报不上名. Thường đi với 参加: 报名参加 + lớp học/cuộc thi/hoạt động.",
    examples: [
      {
        zh: "我想报名参加汉语班。",
        py: "Wǒ xiǎng bàomíng cānjiā Hànyǔ bān.",
        vi: "Tôi muốn đăng ký tham gia lớp tiếng Hán.",
        added: true,
      },
      {
        zh: "你报名了吗？",
        py: "Nǐ bàomíng le ma?",
        vi: "Bạn đã đăng ký chưa?",
        added: true,
      },
    ],
  },
  {
    hanzi: "摆",
    pinyin: "bǎi",
    pos: "động từ",
    meanings: ["bày, sắp đặt", "vẫy, lắc (摆手)"],
    usage:
      "Dùng trong câu tồn hiện: Nơi chốn + 摆着 + vật (桌子上摆着很多菜). Trong câu 把: 把 + vật + 摆 + 在 + nơi chốn, hoặc 摆好/摆整齐 (bày xong, bày ngay ngắn).",
    examples: [
      {
        zh: "桌子上摆着很多酒和菜。",
        py: "Zhuōzi shàng bǎizhe hěn duō jiǔ hé cài.",
        vi: "Trên bàn bày rất nhiều rượu và thức ăn.",
      },
      {
        zh: "请把椅子摆整齐。",
        py: "Qǐng bǎ yǐzi bǎi zhěngqí.",
        vi: "Hãy xếp ghế cho ngay ngắn.",
        added: true,
      },
    ],
  },
  {
    hanzi: "提",
    pinyin: "tí",
    pos: "động từ",
    meanings: ["xách (bằng tay, buông thõng)", "nêu ra", "nâng lên"],
    usage:
      "Nghĩa “xách”: 提 + 着 + vật (tay cầm quai/túi, vật nằm dưới tay). Phân biệt: 提 xách, 拿 cầm, 扛 vác trên vai, 抱 ôm. Nghĩa mở rộng: 提问 (đặt câu hỏi), 提高 (nâng cao), 提前 (sớm hơn dự kiến).",
    examples: [
      {
        zh: "我手里提着一箱子东西，一步一步地往上爬。",
        py: "Wǒ shǒu li tízhe yì xiāngzi dōngxi, yí bù yí bù de wǎng shàng pá.",
        vi: "Trong tay tôi xách một thùng đồ, từng bước từng bước leo lên.",
      },
      {
        zh: "她手里提着一个大袋子。",
        py: "Tā shǒu li tízhe yí gè dà dàizi.",
        vi: "Trong tay cô ấy xách một cái túi lớn.",
        added: true,
      },
      {
        zh: "老师提了一个很难的问题。",
        py: "Lǎoshī tíle yí gè hěn nán de wèntí.",
        vi: "Cô giáo nêu ra một câu hỏi rất khó.",
        added: true,
      },
    ],
  },
  {
    hanzi: "打扫",
    pinyin: "dǎsǎo",
    pos: "động từ",
    meanings: ["quét dọn, dọn dẹp"],
    usage:
      "Hay đi với 房间, 教室, 卫生: 打扫房间, 打扫卫生. Thêm bổ ngữ kết quả: 打扫干净 (dọn sạch). Trong câu 把: 把房间打扫干净。",
    examples: [
      {
        zh: "周末我常常打扫房间。",
        py: "Zhōumò wǒ chángcháng dǎsǎo fángjiān.",
        vi: "Cuối tuần tôi thường dọn phòng.",
        added: true,
      },
      {
        zh: "请把教室打扫干净。",
        py: "Qǐng bǎ jiàoshì dǎsǎo gānjìng.",
        vi: "Hãy quét dọn lớp học cho sạch sẽ.",
        added: true,
      },
    ],
  },
  {
    hanzi: "摘",
    pinyin: "zhāi",
    pos: "động từ",
    meanings: ["hái, ngắt", "tháo (kính, mũ) xuống"],
    usage:
      "摘 + hoa/quả (hái từ cây). 摘下 + 眼镜/帽子/口罩 = tháo xuống (đồ đang đeo trên người). Trái nghĩa khi đeo: 戴 (dài).",
    examples: [
      {
        zh: "我们去果园摘苹果。",
        py: "Wǒmen qù guǒyuán zhāi píngguǒ.",
        vi: "Chúng tôi ra vườn cây hái táo.",
        added: true,
      },
      {
        zh: "他摘下帽子，向大家鞠了一躬。",
        py: "Tā zhāixià màozi, xiàng dàjiā jūle yì gōng.",
        vi: "Anh ấy bỏ mũ xuống, cúi chào mọi người.",
        added: true,
      },
    ],
  },
  {
    hanzi: "挂",
    pinyin: "guà",
    pos: "động từ",
    meanings: ["treo, móc", "cúp (điện thoại)"],
    usage:
      "Câu 把: 把 + vật + 挂 + 在 + nơi chốn. Câu tồn hiện: Nơi chốn + 挂着 + vật (墙上挂着地图). 挂电话 = cúp máy, trái với 接电话.",
    examples: [
      {
        zh: "把这幅画儿挂在书房里。",
        py: "Bǎ zhè fú huàr guà zài shūfáng li.",
        vi: "Treo bức tranh này trong phòng sách.",
      },
      {
        zh: "墙上挂着一张世界地图。",
        py: "Qiáng shang guàzhe yì zhāng shìjiè dìtú.",
        vi: "Trên tường treo một tấm bản đồ thế giới.",
        added: true,
      },
      {
        zh: "他还没说完就把电话挂了。",
        py: "Tā hái méi shuō wán jiù bǎ diànhuà guà le.",
        vi: "Anh ấy chưa nói xong đã cúp máy.",
        added: true,
      },
    ],
  },
  {
    hanzi: "按摩",
    pinyin: "ànmó",
    pos: "động từ / danh từ",
    meanings: ["xoa bóp, mát-xa"],
    usage:
      "Làm động từ: 给 + người + 按摩 (xoa bóp cho ai), 按摩一下/一会儿. Làm danh từ: 去按摩 (đi mát-xa).",
    examples: [
      {
        zh: "我肩膀很疼，想去按摩一下。",
        py: "Wǒ jiānbǎng hěn téng, xiǎng qù ànmó yíxià.",
        vi: "Vai tôi rất đau, muốn đi mát-xa một chút.",
        added: true,
      },
      {
        zh: "妈妈的腰不舒服，我给她按摩了一会儿。",
        py: "Māma de yāo bù shūfu, wǒ gěi tā ànmóle yíhuìr.",
        vi: "Lưng mẹ không khỏe, tôi xoa bóp cho mẹ một lúc.",
        added: true,
      },
    ],
  },
  {
    hanzi: "摸",
    pinyin: "mō",
    pos: "động từ",
    meanings: ["sờ, chạm, mò"],
    usage:
      "Dùng tay chạm nhẹ. Lặp lại để nói sờ nhẹ/thử: 摸摸, 摸了摸. Hay gặp: 摸一下, 摸不着 (sờ không tới, không nắm bắt được).",
    examples: [
      {
        zh: "孩子好奇地摸了摸小狗。",
        py: "Háizi hàoqí de mōle mō xiǎogǒu.",
        vi: "Đứa bé tò mò sờ nhẹ chú cún.",
        added: true,
      },
      {
        zh: "他摸了摸口袋，发现钥匙不见了。",
        py: "Tā mōle mō kǒudai, fāxiàn yàoshi bú jiàn le.",
        vi: "Anh ấy sờ túi, phát hiện chìa khóa biến mất.",
        added: true,
      },
    ],
  },
  {
    hanzi: "掉",
    pinyin: "diào",
    pos: "động từ",
    meanings: ["rơi"],
    usage: "摔(động từ)+坏了(bổ ngữ kết quả). VD: 眼镜儿也掉在地上摔坏了。",
    examples: [],
  },
  {
    hanzi: "摔",
    pinyin: "shuāi",
    pos: "động từ",
    meanings: ["té, ngã", "làm rơi (hỏng, vỡ)", "ném mạnh"],
    usage:
      "摔了一跤 = té một cái (跤 là danh từ, 摔 + 跤 kiểu ly hợp). Kết hợp bổ ngữ: 摔倒 (ngã xuống), 摔伤 (ngã bị thương), 摔坏 (làm rơi hỏng), 摔碎 (làm rơi vỡ).",
    examples: [
      {
        zh: "刚出门就摔了一跤，眼镜儿也掉在地上摔坏了。",
        py: "Gāng chūmén jiù shuāile yì jiāo, yǎnjìngr yě diào zài dì shang shuāihuài le.",
        vi: "Vừa ra khỏi cửa đã té một cái, kính cũng rơi xuống đất hỏng mất.",
      },
      {
        zh: "路很滑，小心别摔倒。",
        py: "Lù hěn huá, xiǎoxīn bié shuāidǎo.",
        vi: "Đường rất trơn, cẩn thận đừng ngã.",
        added: true,
      },
    ],
  },
  {
    hanzi: "拔",
    pinyin: "bá",
    pos: "động từ",
    meanings: ["nhổ, rút ra"],
    usage:
      "Kéo vật đang cắm/mọc ra ngoài: 拔草 (nhổ cỏ), 拔牙 (nhổ răng), 拔钥匙 (rút chìa khóa). Hay đi với 下来/出来. Trái nghĩa: 插 (cắm). 拔河 = kéo co.",
    examples: [
      {
        zh: "钥匙忘拔下来了。",
        py: "Yàoshi wàng bá xiàlái le.",
        vi: "Quên rút chìa khóa ra rồi.",
      },
      {
        zh: "医生给我拔了一颗牙。",
        py: "Yīshēng gěi wǒ bále yì kē yá.",
        vi: "Bác sĩ nhổ cho tôi một chiếc răng.",
        added: true,
      },
      {
        zh: "他蹲在地上拔草。",
        py: "Tā dūn zài dì shang bá cǎo.",
        vi: "Anh ấy ngồi xổm dưới đất nhổ cỏ.",
        added: true,
      },
    ],
  },
  {
    hanzi: "挑",
    pinyin: "tiāo",
    pos: "động từ",
    meanings: ["chọn, lựa (kỹ)"],
    usage:
      "Chọn có so sánh, kén chọn; khẩu ngữ hơn 选. Hay gặp: 挑 + 好 / 挑一件 / 挑选. Chú ý: 挑 còn đọc tiǎo trong 挑战 (tiǎozhàn, thách thức).",
    examples: [
      {
        zh: "我挑了几本历史书，麦克选了一些中文小说儿。",
        py: "Wǒ tiāole jǐ běn lìshǐ shū, Màikè xuǎnle yìxiē Zhōngwén xiǎoshuōr.",
        vi: "Tôi chọn mấy cuốn sách lịch sử, Mike chọn một số tiểu thuyết tiếng Trung.",
      },
      {
        zh: "她挑了一件红色的衣服。",
        py: "Tā tiāole yí jiàn hóngsè de yīfu.",
        vi: "Cô ấy chọn một chiếc áo màu đỏ.",
        added: true,
      },
    ],
  },
  {
    hanzi: "抽",
    pinyin: "chōu",
    pos: "động từ",
    meanings: ["rút ra", "hút (thuốc)", "dành (thời gian)"],
    usage:
      "抽 + 出来: rút một vật ra khỏi chỗ đang xếp/kẹp (rút sách khỏi giá). 抽烟 = hút thuốc. 抽时间 = dành thời gian, 抽空 (chōukòng) = tranh thủ lúc rảnh.",
    examples: [
      {
        zh: "从一个书架上抽出来一本看看。",
        py: "Cóng yí gè shūjià shang chōu chūlái yì běn kànkan.",
        vi: "Rút một cuốn từ giá sách ra xem thử.",
      },
      {
        zh: "这里不能抽烟。",
        py: "Zhèlǐ bù néng chōuyān.",
        vi: "Ở đây không được hút thuốc.",
        added: true,
      },
      {
        zh: "他每天抽时间锻炼身体。",
        py: "Tā měitiān chōu shíjiān duànliàn shēntǐ.",
        vi: "Mỗi ngày anh ấy dành thời gian tập thể dục.",
        added: true,
      },
    ],
  },
  {
    hanzi: "插",
    pinyin: "chā",
    pos: "động từ",
    meanings: ["cắm", "xen vào, chen vào"],
    usage:
      "Cắm vật vào trong/lên: 插着 (đang cắm, trạng thái), 把 + vật + 插 + 在 + nơi. Từ ghép: 插座 (ổ cắm), 插头 (phích cắm), 插嘴 (chen vào lời người khác). Trái nghĩa: 拔.",
    examples: [
      {
        zh: "钥匙还在楼下自行车上插着呢，我忘拔下来了。",
        py: "Yàoshi hái zài lóuxià zìxíngchē shang chāzhe ne, wǒ wàng bá xiàlái le.",
        vi: "Chìa khóa vẫn còn cắm trên xe đạp dưới lầu, tôi quên rút ra.",
      },
      {
        zh: "她把花插在花瓶里。",
        py: "Tā bǎ huā chā zài huāpíng li.",
        vi: "Cô ấy cắm hoa vào bình.",
        added: true,
      },
      {
        zh: "大人说话的时候，小孩子不要插嘴。",
        py: "Dàren shuōhuà de shíhou, xiǎo háizi búyào chāzuǐ.",
        vi: "Lúc người lớn nói chuyện, trẻ con đừng chen vào.",
        added: true,
      },
    ],
  },
  {
    hanzi: "扛",
    pinyin: "káng",
    pos: "động từ",
    meanings: ["vác (trên vai)"],
    usage:
      "Vác vật nặng trên vai: 扛着 + vật. Phân biệt: 提 xách bằng tay, 背 (bēi) cõng/đeo sau lưng, 抱 ôm trước ngực, 扛 vác trên vai.",
    examples: [
      {
        zh: "两个小伙子扛着摄像机。",
        py: "Liǎng gè xiǎohuǒzi kángzhe shèxiàngjī.",
        vi: "Hai chàng trai vác máy quay trên vai.",
      },
      {
        zh: "他扛着一袋米上楼。",
        py: "Tā kángzhe yí dài mǐ shàng lóu.",
        vi: "Anh ấy vác một bao gạo lên lầu.",
        added: true,
      },
    ],
  },
  {
    hanzi: "搞",
    pinyin: "gǎo",
    pos: "động từ",
    meanings: ["làm, xoay xở, xử lý (khẩu ngữ)"],
    usage:
      "Động từ khẩu ngữ, nghĩa rất rộng, thay cho nhiều động từ khác tùy tân ngữ: 搞卫生 (dọn vệ sinh), 搞清楚 (làm rõ), 搞错 (làm nhầm), 搞砸 (làm hỏng bét), 搞好 (làm tốt).",
    examples: [
      {
        zh: "你在搞什么？",
        py: "Nǐ zài gǎo shénme?",
        vi: "Bạn đang làm gì thế?",
        added: true,
      },
      {
        zh: "这件事被他搞砸了。",
        py: "Zhè jiàn shì bèi tā gǎozá le.",
        vi: "Việc này bị anh ta làm hỏng rồi.",
        added: true,
      },
      {
        zh: "我没搞清楚这个词的意思。",
        py: "Wǒ méi gǎo qīngchu zhè gè cí de yìsi.",
        vi: "Tôi chưa hiểu rõ nghĩa của từ này.",
        added: true,
      },
    ],
  },
  {
    hanzi: "排",
    pinyin: "pái",
    pos: "động từ / lượng từ",
    meanings: ["xếp, sắp xếp", "xếp hàng (排队)", "hàng (lượng từ)"],
    usage:
      "排队 là từ ly hợp: 排了很长的队. 排 + 在 + vị trí (排在第三个). Lượng từ: 一排椅子 (một hàng ghế). Từ ghép: 排列, 排名.",
    examples: [
      {
        zh: "大家排好队，一个一个上车。",
        py: "Dàjiā pái hǎo duì, yí gè yí gè shàng chē.",
        vi: "Mọi người xếp hàng cho ngay ngắn, lần lượt lên xe.",
        added: true,
      },
      {
        zh: "我排在第三个。",
        py: "Wǒ pái zài dì sān gè.",
        vi: "Tôi đứng thứ ba trong hàng.",
        added: true,
      },
      {
        zh: "老师把座位排好了。",
        py: "Lǎoshī bǎ zuòwèi pái hǎo le.",
        vi: "Cô giáo đã sắp xếp xong chỗ ngồi.",
        added: true,
      },
    ],
  },
  {
    hanzi: "拉",
    pinyin: "lā",
    pos: "động từ",
    meanings: ["kéo", "kéo (đàn vĩ cầm…)", "đi ngoài (拉肚子)"],
    usage:
      "拉 kéo về phía mình, trái nghĩa 推 (tuī, đẩy) – trên cửa thường ghi 推/拉. 拉小提琴 = kéo vĩ cầm; 拉肚子 = bị tiêu chảy; 拉上 = kéo lại (拉上窗帘).",
    examples: [
      {
        zh: "他拉着我的手往前走。",
        py: "Tā lāzhe wǒ de shǒu wǎng qián zǒu.",
        vi: "Anh ấy nắm tay tôi kéo đi về phía trước.",
        added: true,
      },
      {
        zh: "请把窗帘拉上。",
        py: "Qǐng bǎ chuānglián lāshàng.",
        vi: "Làm ơn kéo rèm lại.",
        added: true,
      },
      {
        zh: "他会拉小提琴。",
        py: "Tā huì lā xiǎotíqín.",
        vi: "Anh ấy biết kéo vĩ cầm.",
        added: true,
      },
    ],
  },
  {
    hanzi: "撞",
    pinyin: "zhuàng",
    pos: "động từ",
    meanings: ["đâm, va vào", "tình cờ gặp (撞见)"],
    usage:
      "Hay đi với bổ ngữ kết quả: 撞到/撞上 (va phải), 撞伤 (đâm bị thương), 撞坏 (đâm hỏng), 撞倒 (đâm ngã). Thường gặp trong câu 被: A 被 B 撞 + 伤了. 撞车 = đâm xe.",
    examples: [
      {
        zh: "我的腿被自行车撞伤了。",
        py: "Wǒ de tuǐ bèi zìxíngchē zhuàngshāng le.",
        vi: "Chân tôi bị xe đạp đâm bị thương.",
        added: true,
      },
      {
        zh: "他不小心撞到了桌子。",
        py: "Tā bù xiǎoxīn zhuàngdàole zhuōzi.",
        vi: "Anh ấy không cẩn thận va vào cái bàn.",
        added: true,
      },
    ],
  },
  {
    hanzi: "打扮",
    pinyin: "dǎban",
    pos: "động từ / danh từ",
    meanings: ["trang điểm, ăn diện", "hóa trang (thành…)"],
    usage:
      "打扮得 + bổ ngữ trạng thái (打扮得很漂亮). 打扮成 + nhân vật = hóa trang thành. Làm danh từ: 她的打扮 = cách ăn mặc của cô ấy.",
    examples: [
      {
        zh: "她今天打扮得很漂亮。",
        py: "Tā jīntiān dǎban de hěn piàoliang.",
        vi: "Hôm nay cô ấy ăn diện rất đẹp.",
        added: true,
      },
      {
        zh: "他打扮成圣诞老人，给孩子们送礼物。",
        py: "Tā dǎban chéng Shèngdàn lǎorén, gěi háizimen sòng lǐwù.",
        vi: "Anh ấy hóa trang thành ông già Noel, tặng quà cho bọn trẻ.",
        added: true,
      },
    ],
  },
  {
    hanzi: "打的",
    pinyin: "dǎ dī",
    pos: "động từ",
    meanings: ["đi taxi"],
    usage: "",
    examples: [
      {
        zh: "太晚了，我们打的回家吧。",
        py: "Tài wǎn le, wǒmen dǎdī huí jiā ba.",
        vi: "Muộn quá rồi, chúng ta đi taxi về nhà đi.",
        added: true,
      },
    ],
  },
  {
    hanzi: "插头",
    pinyin: "chātóu",
    pos: "danh từ",
    meanings: ["trang điểm, ăn diện", "hóa trang (thành…)"],
    usage: "phích cắm",
    examples: [
      {
        zh: "你把插头插进去了没有?",
        py: "Nǐ bǎ chātóu chā jìnqu le méiyǒu?",
        vi: "...",
        added: true,
      },
      {
        zh: "没有。我没有把插头插进去。",
        py: "Méiyǒu. Wǒ méiyǒu bǎ chātóu chā jìnqu.",
        vi: "...",
        added: true,
      },
    ],
  },
  {
    hanzi: "擦",
    pinyin: "cā",
    pos: "động từ",
    meanings: ["lau, chùi", "xóa", "bôi, thoa"],
    usage:
      "擦 + vật cần lau: 擦桌子, 擦窗户, 擦汗, 擦眼泪. Bổ ngữ: 擦干净 (lau sạch), 擦掉 (lau/xóa mất). Lặp lại: 擦擦, 擦了擦. 擦药 = bôi thuốc.",
    examples: [
      {
        zh: "请把黑板擦干净。",
        py: "Qǐng bǎ hēibǎn cā gānjìng.",
        vi: "Hãy lau bảng cho sạch.",
        added: true,
      },
      {
        zh: "他正在擦桌子。",
        py: "Tā zhèngzài cā zhuōzi.",
        vi: "Anh ấy đang lau bàn.",
        added: true,
      },
      {
        zh: "他擦了擦汗。",
        py: "Tā cāle cā hàn.",
        vi: "Anh ấy lau mồ hôi.",
        added: true,
      },
    ],
  },
  {
    hanzi: "扶手",
    pinyin: "fúshou",
    pos: "danh từ",
    meanings: ["tay vịn"],
    usage:
      "扶 (đỡ, vịn) + 手: vật để tay vịn vào. Hay gặp: 楼梯扶手 (tay vịn cầu thang), 抓住扶手/扶着扶手 (nắm/vịn tay vịn), 扶手椅 (ghế có tay vịn).",
    examples: [
      {
        zh: "上楼的时候，请抓住扶手。",
        py: "Shàng lóu de shíhou, qǐng zhuāzhù fúshou.",
        vi: "Khi lên lầu, xin hãy nắm chắc tay vịn.",
        added: true,
      },
      {
        zh: "老人慢慢地扶着扶手下楼。",
        py: "Lǎorén mànmàn de fúzhe fúshou xià lóu.",
        vi: "Cụ già vịn tay vịn, chậm rãi đi xuống lầu.",
        added: true,
      },
    ],
  },
  {
    hanzi: "坚持",
    pinyin: "jiānchí",
    pos: "động từ",
    meanings: ["kiên trì; cố gắng"],
    usage: "",
    examples: [],
  },
  {
    hanzi: "揉",
    pinyin: "róu",
    pos: "động từ",
    meanings: ["vo", "vò"],
    usage: "",
    examples: [
      {
        zh: "从0到9，每张纸上各写一个数字，揉成纸团，抓到哪个是哪个吧。",
        py: "Cóng líng dào jiǔ, měi zhāng zhǐ shang gè xiě yí ge shùzì, róuchéng zhǐtuán, zhuādào nǎge shì nǎge ba.",
        vi: "Từ 0 đến 9, mỗi tờ giấy viết một con số, vo thành viên, bốc trúng số nào thì là số đó.",
      },
    ],
  },
  {
    hanzi: "摇",
    pinyin: "yáo",
    pos: "động từ",
    meanings: ["rung", "lắc", "đong đưa"],
    usage: "",
    examples: [
      {
        zh: "李四摇摇头说：“3就是散，就是离婚，多不吉利呀！你想想2可以不可以？”",
        py: "Lǐ Sì yáoyao tóu shuō: “Sān jiùshì sàn, jiùshì líhūn, duō bù jílì ya! Nǐ xiǎngxiang èr kěyǐ bù kěyǐ?”",
        vi: "Lý Tứ lắc đầu nói: “3 là tan, là ly hôn, xui xẻo quá! Em nghĩ xem 2 được không?”",
      },
    ],
  },
  {
    hanzi: "抓",
    pinyin: "zhuā",
    pos: "động từ",
    meanings: ["bốc, chộp"],
    usage: "",
    examples: [
      {
        zh: "抓到哪个是哪个",
        py: "zhuādào nǎge shì nǎge ba”",
        vi: "bốc trúng số nào thì lấy số đó”",
      },
    ],
  },
];
