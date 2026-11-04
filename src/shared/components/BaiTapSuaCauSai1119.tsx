"use client";

import { useEffect, useState } from "react";

// [câu sai, câu đúng, pinyin, nghĩa tiếng Việt, giải thích, ghi chú (tuỳ chọn)]
type Q = [string, string, string, string, string, string?];
type Lesson = { id: string; title: string; topic: string; qs: Q[] };

const LESSONS: Lesson[] = [
  {
    id: "11",
    title: "Bài 11",
    topic: "Câu 是…的 (tr.226)",
    qs: [
      [
        "你是什么时候来了中国?",
        "你是什么时候来的中国?",
        "Nǐ shì shénme shíhou lái de Zhōngguó?",
        "Bạn đến Trung Quốc khi nào vậy?",
        "Câu 是…的 nhấn mạnh thời gian/địa điểm/cách thức của hành động đã xảy ra. Cuối câu dùng 的, không dùng 了. Đổi 了 → 的.",
      ],
      [
        "我是在操场看见了玛丽的。",
        "我是在操场看见玛丽的。",
        "Wǒ shì zài cāochǎng kànjiàn Mǎlì de.",
        "Tôi gặp Mary ở sân vận động.",
        "Trong câu 是…的 không dùng 了 sau động từ. Bỏ 了.",
      ],
      [
        "他是今年九月来中国了。",
        "他是今年九月来中国的。",
        "Tā shì jīnnián jiǔyuè lái Zhōngguó de.",
        "Anh ấy đến Trung Quốc vào tháng 9 năm nay.",
        "Cuối câu 是…的 phải là 的, không phải 了. Đổi 了 → 的.",
      ],
      [
        "我来中国不是坐高铁的。",
        "我不是坐高铁来的中国。",
        "Wǒ bú shì zuò gāotiě lái de Zhōngguó.",
        "Tôi đến Trung Quốc không phải bằng tàu cao tốc.",
        "Phủ định của 是…的 là 不是…的, và 不是 phải đứng ngay sau chủ ngữ, trước phần được nhấn mạnh (坐高铁). Câu gốc đặt 不是 sai chỗ.",
      ],
      [
        "她是前天下午到了上海。",
        "她是前天下午到的上海。",
        "Tā shì qiántiān xiàwǔ dào de Shànghǎi.",
        "Cô ấy đến Thượng Hải vào chiều hôm kia.",
        "Dùng 的 thay 了 sau động từ 到. Tân ngữ nơi chốn có thể đứng sau 的.",
      ],
      [
        "我汉字写得很马马虎虎。",
        "我汉字写得马马虎虎。",
        "Wǒ Hànzì xiě de mǎmǎhūhū.",
        "Tôi viết chữ Hán tàm tạm thôi.",
        "马马虎虎 tự nó đã chỉ mức độ (tàm tạm) nên không thêm 很. Bỏ 很.",
      ],
      [
        "我们是坐公共汽车到博物馆去的参观。",
        "我们是坐公共汽车到博物馆去参观的。",
        "Wǒmen shì zuò gōnggòng qìchē dào bówùguǎn qù cānguān de.",
        "Chúng tôi đi tham quan bảo tàng bằng xe buýt.",
        "的 phải đứng sau động từ chính cuối cùng (参观), không chen giữa 去 và 参观. Dời 的 ra sau 参观.",
      ],
      [
        "我是跟朋友一起去大使馆。",
        "我是跟朋友一起去的大使馆。",
        "Wǒ shì gēn péngyou yìqǐ qù de dàshǐguǎn.",
        "Tôi đi đến đại sứ quán cùng bạn.",
        "Câu 是…的 thiếu 的. Khi có tân ngữ, 的 đặt sau động từ 去, trước 大使馆. Thêm 的 trước 大使馆.",
      ],
    ],
  },
  {
    id: "12",
    title: "Bài 12",
    topic: "Bổ ngữ kết quả / thời gian (tr.242)",
    qs: [
      [
        "昨天晚上,我到十点工作。",
        "昨天晚上,我工作到十点。",
        "Zuótiān wǎnshang, wǒ gōngzuò dào shí diǎn.",
        "Tối qua tôi làm việc đến 10 giờ.",
        "到 + mốc thời gian là bổ ngữ, phải đứng sau động từ: V + 到 + thời gian. Dời 工作 lên trước 到.",
      ],
      [
        "这本书我一看完就来给你还。",
        "这本书我一看完就来还给你。",
        "Zhè běn shū wǒ yí kàn wán jiù lái huán gěi nǐ.",
        "Quyển sách này tôi đọc xong sẽ đến trả bạn ngay.",
        "给 + người nhận là bổ ngữ, đi liền sau động từ: 还给你. Dời 还 lên trước 给你.",
      ],
      [
        "老师的电话号码我忘了,因为我没记住在本子上。",
        "老师的电话号码我忘了,因为我没记在本子上。",
        "Lǎoshī de diànhuà hàomǎ wǒ wàng le, yīnwèi wǒ méi jì zài běnzi shang.",
        "Tôi quên số điện thoại của thầy vì không ghi vào vở.",
        "Cấu trúc V + 在 + nơi chốn (记在本子上). 住 thừa vì 记住 mang nghĩa 'nhớ được', không đi với 在 chỉ nơi chốn. Bỏ 住.",
      ],
      [
        "我下了飞机就看了爸爸。",
        "我下了飞机就看到爸爸了。",
        "Wǒ xià le fēijī jiù kàndào bàba le.",
        "Vừa xuống máy bay tôi đã nhìn thấy bố.",
        "看 một mình chỉ hành động 'nhìn', muốn nói 'nhìn thấy' cần bổ ngữ kết quả 到 (看到/看见). Thêm 到 sau 看.",
      ],
      [
        "我打算在这儿到明年七月学习。",
        "我打算在这儿学习到明年七月。",
        "Wǒ dǎsuàn zài zhèr xuéxí dào míngnián qī yuè.",
        "Tôi dự định học ở đây đến tháng 7 năm sau.",
        "Giống câu 1: V + 到 + thời gian. Dời 学习 ra sau 这儿, đứng trước 到.",
      ],
      [
        "她进步很大,现在已经能听见老师的话了。",
        "她进步很大,现在已经能听懂老师的话了。",
        "Tā jìnbù hěn dà, xiànzài yǐjīng néng tīngdǒng lǎoshī de huà le.",
        "Cô ấy tiến bộ nhiều, giờ đã nghe hiểu lời thầy nói.",
        "听见 chỉ là 'nghe thấy' âm thanh; 听懂 mới là 'nghe hiểu'. Đổi 见 → 懂.",
      ],
    ],
  },
  {
    id: "13",
    title: "Bài 13",
    topic: "Bổ ngữ kết quả",
    qs: [
      [
        "照相机我不小心坏了。",
        "照相机我不小心摔坏了。",
        "Zhàoxiàngjī wǒ bù xiǎoxīn shuāihuài le.",
        "Tôi lỡ làm rơi hỏng máy ảnh.",
        "坏 là bổ ngữ kết quả, phải đi sau một động từ chỉ hành động gây ra kết quả đó. Thêm động từ 摔.",
      ],
      [
        "我已经完了今天的作业。",
        "我已经做完了今天的作业。",
        "Wǒ yǐjīng zuòwán le jīntiān de zuòyè.",
        "Tôi đã làm xong bài tập hôm nay.",
        "完 là bổ ngữ kết quả, không dùng một mình làm động từ. Thêm động từ 做.",
      ],
      [
        "上课完了我就去商店买衣服。",
        "上完课我就去商店买衣服。",
        "Shàng wán kè wǒ jiù qù shāngdiàn mǎi yīfu.",
        "Học xong là tôi đi cửa hàng mua quần áo.",
        "Bổ ngữ kết quả đứng ngay sau động từ, tân ngữ (课) đứng sau bổ ngữ: 上完课. Đổi 上课完了 → 上完课.",
      ],
      [
        "我的自行车朋友借了。",
        "我的自行车被朋友借走了。",
        "Wǒ de zìxíngchē bèi péngyou jièzǒu le.",
        "Xe đạp của tôi bị bạn mượn đi rồi.",
        "Chủ ngữ (xe đạp) là vật bị tác động nên cần câu bị động với 被. Thêm 被 trước 朋友. (Đáp án sách chỉ thêm 被; thêm 走 cho tự nhiên hơn.)",
      ],
      [
        "黑板上的字你看见清楚了吗?",
        "黑板上的字你看清楚了吗?",
        "Hēibǎn shang de zì nǐ kàn qīngchu le ma?",
        "Chữ trên bảng đen bạn nhìn rõ chưa?",
        "Bổ ngữ kết quả 清楚 đi trực tiếp sau 看, không chen 见 vào giữa. Bỏ 见.",
      ],
      [
        "那本书找了很长时间也不找到。",
        "那本书找了很长时间也没找到。",
        "Nà běn shū zhǎo le hěn cháng shíjiān yě méi zhǎodào.",
        "Quyển sách đó tìm rất lâu cũng không tìm thấy.",
        "Phủ định của hành động đã xảy ra / bổ ngữ kết quả dùng 没(有), không dùng 不. Đổi 不 → 没.",
      ],
    ],
  },
  {
    id: "14",
    title: "Bài 14",
    topic: "Bổ ngữ xu hướng",
    qs: [
      [
        "上课十分钟他才走进来教室。",
        "上课十分钟他才走进教室来。",
        "Shàng kè shí fēnzhōng tā cái zǒu jìn jiàoshì lái.",
        "Vào học mười phút anh ấy mới đi vào lớp.",
        "Tân ngữ nơi chốn phải nằm giữa hai phần của bổ ngữ xu hướng kép: 走进 + 教室 + 来. Dời 来 ra sau 教室.",
      ],
      [
        "我看见她走出去图书馆了。",
        "我看见她走出图书馆去了。",
        "Wǒ kànjiàn tā zǒu chū túshūguǎn qù le.",
        "Tôi thấy cô ấy đi ra khỏi thư viện rồi.",
        "Tương tự: 走出 + 图书馆 + 去. Dời 去 ra sau 图书馆.",
      ],
      [
        "孩子看见我,就向我跑过去。",
        "孩子看见我,就向我跑过来。",
        "Háizi kànjiàn wǒ, jiù xiàng wǒ pǎo guòlái.",
        "Đứa bé thấy tôi liền chạy về phía tôi.",
        "Di chuyển hướng về phía người nói thì dùng 来, không dùng 去. Đổi 去 → 来.",
      ],
      [
        "他从箱子里拿出去一件羽绒服。",
        "他从箱子里拿出来一件羽绒服。",
        "Tā cóng xiāngzi li ná chūlái yí jiàn yǔróngfú.",
        "Anh ấy lấy ra một chiếc áo lông vũ từ trong hòm.",
        "Người nói đứng ở bên ngoài hòm, vật di chuyển từ trong ra phía người nói nên dùng 出来. Đổi 去 → 来.",
      ],
      [
        "我们的飞机马上就飞上去天了。",
        "我们的飞机马上就飞上天去了。",
        "Wǒmen de fēijī mǎshàng jiù fēi shàng tiān qù le.",
        "Máy bay của chúng ta sắp bay lên trời rồi.",
        "Tân ngữ nơi chốn (天) đứng giữa 上 và 去. Dời 去 ra sau 天.",
      ],
      [
        "妈妈病好了以后,我就送她回去家了。",
        "妈妈病好了以后,我就送她回家去了。",
        "Māma bìng hǎo le yǐhòu, wǒ jiù sòng tā huí jiā qù le.",
        "Sau khi mẹ khỏi bệnh, tôi đưa mẹ về nhà.",
        "Tân ngữ nơi chốn (家) đứng giữa 回 và 去. Dời 去 ra sau 家.",
      ],
    ],
  },
  {
    id: "15",
    title: "Bài 15",
    topic: "Trợ từ 着",
    qs: [
      [
        "他吃了饭就躺着床上。",
        "他吃了饭就在床上躺着。",
        "Tā chī le fàn jiù zài chuáng shang tǎngzhe.",
        "Anh ấy ăn xong là nằm trên giường.",
        "Địa điểm đặt trước động từ bằng 在: 在床上躺着. Không viết 躺着 + nơi chốn.",
      ],
      [
        "我一进他的房间就看见挂着墙上的画儿。",
        "我一进他的房间就看见墙上挂着的画儿。",
        "Wǒ yī jìn tā de fángjiān jiù kànjiàn qiáng shang guàzhe de huàr.",
        "Tôi vừa vào phòng anh ấy là thấy bức tranh treo trên tường.",
        "Câu tồn hiện: Nơi chốn + V着 + vật (墙上挂着画儿). Đưa 墙上 lên trước 挂着.",
        "⚠️ Đáp án trong file ('才 → 再') không khớp với câu này, đây là cách sửa đúng theo nội dung câu.",
      ],
      [
        "他已经病着一个多星期了。",
        "他已经病了一个多星期了。",
        "Tā yǐjīng bìng le yí ge duō xīngqī le.",
        "Anh ấy đã ốm hơn một tuần rồi.",
        "Khoảng thời gian kéo dài đã hoàn thành dùng 了, không dùng 着 (着 chỉ trạng thái đang tiếp diễn, không đi với lượng thời gian). Đổi 着 → 了.",
        "⚠️ Đáp án trong file ('着 → 在') không khớp với câu này.",
      ],
      [
        "我们坐着房间里谈话。",
        "我们在房间里坐着谈话。",
        "Wǒmen zài fángjiān li zuòzhe tánhuà.",
        "Chúng tôi ngồi trong phòng nói chuyện.",
        "Địa điểm cần giới từ 在 đặt trước động từ: 在房间里坐着谈话 (V着 + V: vừa ngồi vừa nói). Thêm 在 trước 房间里.",
        "⚠️ Đáp án trong file ('着 → 了') không khớp với câu này.",
      ],
      [
        "中国的商店星期日也不关着门,非常好。",
        "中国的商店星期日也不关门,非常好。",
        "Zhōngguó de shāngdiàn xīngqīrì yě bù guān mén, fēicháng hǎo.",
        "Cửa hàng ở Trung Quốc chủ nhật cũng không đóng cửa, rất tốt.",
        "Thói quen/sự việc chung chung không dùng 着 để chỉ trạng thái. Bỏ 着.",
      ],
      [
        "她穿着一件红大衣在身上。",
        "她穿着一件红大衣。",
        "Tā chuānzhe yí jiàn hóng dàyī.",
        "Cô ấy mặc một chiếc áo khoác đỏ.",
        "穿 đã bao hàm nghĩa 'trên người' nên không thêm 在身上. Bỏ 在身上.",
      ],
    ],
  },
  {
    id: "16",
    title: "Bài 16",
    topic: "Câu tồn hiện & 越…越…",
    qs: [
      [
        "教室里跑出来了麦克。",
        "教室里跑出来了一个人。",
        "Jiàoshì li pǎo chūlái le yí ge rén.",
        "Từ trong lớp học có một người chạy ra.",
        "Trong câu xuất hiện, người/vật xuất hiện là thông tin mới nên phải là bất định (一个人), không dùng tên riêng. Đổi 麦克 → 一个人.",
      ],
      [
        "很多同学坐着在操场上。",
        "很多同学坐在操场上。",
        "Hěn duō tóngxué zuò zài cāochǎng shang.",
        "Nhiều bạn học ngồi trên sân vận động.",
        "V + 在 + nơi chốn. Đổi 着 → 在.",
      ],
      [
        "车里坐在我和一个朋友。",
        "车里坐着我和一个朋友。",
        "Chē li zuòzhe wǒ hé yí ge péngyou.",
        "Trong xe có tôi và một người bạn đang ngồi.",
        "Câu tồn tại: Nơi chốn + V着 + người/vật. Đổi 在 → 着.",
      ],
      [
        "前边开过来他坐的汽车。",
        "前边开过来一辆车。",
        "Qiánbian kāi guòlái yí liàng chē.",
        "Phía trước có một chiếc xe chạy tới.",
        "Vật xuất hiện phải bất định (一辆车). Không dùng cụm xác định như '他坐的汽车'. Đổi thành 一辆车.",
      ],
      [
        "我们班来了这个新老师。",
        "我们班来了一个新老师。",
        "Wǒmen bān lái le yí ge xīn lǎoshī.",
        "Lớp chúng tôi có một thầy giáo mới đến.",
        "Giống câu 1: tân ngữ của câu xuất hiện phải bất định. Đổi 这个 → 一个.",
      ],
      [
        "我的汉语越来越很流利了。",
        "我的汉语越说越流利了。",
        "Wǒ de Hànyǔ yuè shuō yuè liúlì le.",
        "Tiếng Hán của tôi càng nói càng lưu loát.",
        "Cấu trúc 越 + V + 越 + adj, và sau 越 không dùng 很. Đổi 来 → 说 và bỏ 很. (越来越流利 cũng đúng, nhưng phải bỏ 很.)",
      ],
      [
        "这首歌我越听越很喜欢。",
        "这首歌我越听越喜欢。",
        "Zhè shǒu gē wǒ yuè tīng yuè xǐhuan.",
        "Bài hát này tôi càng nghe càng thích.",
        "Sau 越 thứ hai không dùng 很. Bỏ 很.",
      ],
      [
        "在床上他躺着玩儿手机。",
        "他在床上躺着玩儿手机。",
        "Tā zài chuáng shang tǎngzhe wánr shǒujī.",
        "Anh ấy nằm trên giường chơi điện thoại.",
        "Chủ ngữ đứng trước, cụm nơi chốn 在床上 đứng sau chủ ngữ, trước động từ. Đổi 在床上他 → 他在床上.",
      ],
    ],
  },
  {
    id: "17",
    title: "Bài 17",
    topic: "Câu chữ 把 (1)",
    qs: [
      [
        "我在书包里把词典放了。",
        "我把词典放在书包里了。",
        "Wǒ bǎ cídiǎn fàng zài shūbāo li le.",
        "Tôi để từ điển vào trong cặp rồi.",
        "Trật tự câu 把: S + 把 + O + V + 在 + nơi chốn. Cụm nơi chốn (在书包里) đi sau động từ, không đứng trước 把.",
      ],
      [
        "我应该送这个礼物给她。",
        "我应该把这个礼物送给她。",
        "Wǒ yīnggāi bǎ zhège lǐwù sòng gěi tā.",
        "Tôi nên tặng món quà này cho cô ấy.",
        "Khi tân ngữ xác định (这个礼物) được xử lý và có bổ ngữ (给她), nên dùng 把. Trạng từ năng nguyện 应该 đứng trước 把.",
      ],
      [
        "我用了两天的时间翻译这篇小说儿成英文。",
        "我用了两天的时间把这篇小说儿翻译成了英文。",
        "Wǒ yòng le liǎng tiān de shíjiān bǎ zhè piān xiǎoshuōr fānyì chéng le Yīngwén.",
        "Tôi mất hai ngày để dịch cuốn tiểu thuyết này sang tiếng Anh.",
        "V + 成 + kết quả biến đổi (dịch thành) cần dùng 把: 把 + O + 翻译成 + …",
      ],
      [
        "我常常把晚饭吃在饭店里。",
        "我常常在饭店里吃晚饭。",
        "Wǒ chángcháng zài fàndiàn li chī wǎnfàn.",
        "Tôi thường ăn tối ở nhà hàng.",
        "Câu này không cần 把 vì 晚饭 không bị 'xử lý' thay đổi vị trí. Địa điểm hành động đặt trước động từ bằng 在. Bỏ 把.",
      ],
      [
        "我挂新买的画儿在宿舍的墙上。",
        "我把新买的画儿挂在宿舍的墙上。",
        "Wǒ bǎ xīn mǎi de huàr guà zài sùshè de qiáng shang.",
        "Tôi treo bức tranh mới mua lên tường ký túc xá.",
        "Làm vật di chuyển đến vị trí mới (挂在…) dùng 把: 把 + O + V + 在 + nơi chốn.",
      ],
      [
        "我已经发那些照片给妈妈了。",
        "我已经把那些照片发给妈妈了。",
        "Wǒ yǐjīng bǎ nàxiē zhàopiàn fā gěi māma le.",
        "Tôi đã gửi những tấm ảnh đó cho mẹ rồi.",
        "Tân ngữ xác định (那些照片) + chuyển giao cho người (给妈妈) → dùng câu 把. 已经 đứng trước 把.",
      ],
    ],
  },
  {
    id: "18",
    title: "Bài 18",
    topic: "Câu chữ 把 (2)",
    qs: [
      [
        "请你把一本杂志给我看看。",
        "请你把这本杂志给我看看。",
        "Qǐng nǐ bǎ zhè běn zázhì gěi wǒ kànkan.",
        "Phiền bạn đưa tôi xem quyển tạp chí này.",
        "Tân ngữ sau 把 phải là xác định (这/那…), không dùng 一. Đổi 一 → 这.",
      ],
      [
        "以前我没把长城看见过。",
        "我以前没看见过长城。",
        "Wǒ yǐqián méi kànjiàn guo Chángchéng.",
        "Trước đây tôi chưa từng nhìn thấy Vạn Lý Trường Thành.",
        "看见 (nhìn thấy) không 'xử lý' tân ngữ nên không dùng 把. Dùng câu thường.",
      ],
      [
        "外边很冷,快把大衣穿穿。",
        "外边很冷,快把大衣穿上。",
        "Wàibian hěn lěng, kuài bǎ dàyī chuān shàng.",
        "Bên ngoài lạnh lắm, mau mặc áo khoác vào.",
        "Động từ trong câu 把 phải có thành phần khác đi kèm (bổ ngữ). 穿穿 lặp động từ chưa chỉ kết quả. Đổi thành 穿上.",
      ],
      [
        "我来中国以后,很把朋友想。",
        "我来中国以后,很想朋友。",
        "Wǒ lái Zhōngguó yǐhòu, hěn xiǎng péngyou.",
        "Từ khi đến Trung Quốc, tôi rất nhớ bạn bè.",
        "想 (nhớ) là động từ tâm lý, không tác động làm thay đổi tân ngữ nên không dùng 把.",
      ],
      [
        "他把两盘饺子能吃完。",
        "他能把两盘饺子吃完。",
        "Tā néng bǎ liǎng pán jiǎozi chīwán.",
        "Anh ấy ăn hết được hai đĩa sủi cảo.",
        "Động từ năng nguyện (能) và phó từ phải đứng trước 把. Dời 能 lên trước 把.",
      ],
      [
        "你知道,我很把我的狗喜欢。",
        "你知道,我很喜欢我的狗。",
        "Nǐ zhīdào, wǒ hěn xǐhuan wǒ de gǒu.",
        "Bạn biết đấy, tôi rất thích chú chó của tôi.",
        "喜欢 là động từ tâm lý, không dùng 把. Bỏ 把.",
      ],
      [
        "我看见玛丽把宿舍进去了。",
        "我看见玛丽进宿舍去了。",
        "Wǒ kànjiàn Mǎlì jìn sùshè qù le.",
        "Tôi thấy Mary đi vào ký túc xá rồi.",
        "Động từ di chuyển + nơi chốn (进宿舍去) không dùng 把. Bỏ 把, đặt 宿舍 giữa 进 và 去.",
      ],
      [
        "我没把中国来以前不会说汉语。",
        "我来中国以前不会说汉语。",
        "Wǒ lái Zhōngguó yǐqián bú huì shuō Hànyǔ.",
        "Trước khi đến Trung Quốc tôi không biết nói tiếng Hán.",
        "来中国 là hành động di chuyển, không dùng 把. Bỏ 没把.",
      ],
    ],
  },
  {
    id: "19",
    title: "Bài 19",
    topic: "Câu bị động 被/让/叫",
    qs: [
      [
        "我的衣服都让雨湿了。",
        "我的衣服都让雨淋湿了。",
        "Wǒ de yīfu dōu ràng yǔ línshī le.",
        "Quần áo của tôi bị mưa làm ướt hết rồi.",
        "Câu bị động cần một động từ chỉ hành động, không dùng tính từ trực tiếp sau tác nhân. Thêm động từ 淋 trước 湿.",
      ],
      [
        "真对不起,你的相机让我坏了。",
        "真对不起,你的相机让我弄坏了。",
        "Zhēn duìbuqǐ, nǐ de xiàngjī ràng wǒ nònghuài le.",
        "Thật xin lỗi, máy ảnh của bạn bị tôi làm hỏng rồi.",
        "Giống câu 1, cần động từ 弄 trước bổ ngữ 坏.",
      ],
      [
        "我的自行车叫借走了。",
        "我的自行车叫人借走了。",
        "Wǒ de zìxíngchē jiào rén jièzǒu le.",
        "Xe đạp của tôi bị người ta mượn đi rồi.",
        "Với 叫/让 bắt buộc phải có tân ngữ (tác nhân) sau chúng, dù không rõ là ai. Thêm 人. (被 thì có thể lược tác nhân.)",
      ],
      [
        "我没被自行车撞倒了。",
        "我没被自行车撞倒。",
        "Wǒ méi bèi zìxíngchē zhuàngdǎo.",
        "Tôi không bị xe đạp đâm ngã.",
        "Phủ định bằng 没 thì không dùng 了 ở cuối. Bỏ 了.",
      ],
      [
        "钥匙被我忘拔下来了。",
        "钥匙我忘拔下来了。",
        "Yàoshi wǒ wàng bá xiàlai le.",
        "Tôi quên rút chìa khóa ra rồi.",
        "忘 (quên) không phải hành động tác động làm thay đổi chìa khóa theo nghĩa bị động, nên không dùng 被. Bỏ 被.",
      ],
      [
        "我们班好几个同学都被感冒了。",
        "我们班好几个同学都感冒了。",
        "Wǒmen bān hǎo jǐ ge tóngxué dōu gǎnmào le.",
        "Mấy bạn trong lớp chúng tôi đều bị cảm rồi.",
        "感冒 là động từ không mang tân ngữ, không có nghĩa bị động. Bỏ 被.",
      ],
      [
        "我们刚到公园就被天下雨了。",
        "我们刚到公园就下雨了。",
        "Wǒmen gāng dào gōngyuán jiù xià yǔ le.",
        "Chúng tôi vừa đến công viên thì trời mưa.",
        "下雨 là hiện tượng tự nhiên, không có tác nhân bị động. Bỏ cụm 被天.",
      ],
      [
        "今天的作业被我没做完。",
        "今天的作业我没做完。",
        "Jīntiān de zuòyè wǒ méi zuòwán.",
        "Bài tập hôm nay tôi chưa làm xong.",
        "Việc 'chưa làm xong' không phải điều ngoài ý muốn bị tác động nên không dùng 被. Bỏ 被.",
      ],
    ],
  },
];

// Các đáp án khác cũng được chấp nhận
const ALTS: Record<string, string[]> = {
  "我的自行车被朋友借走了。": ["我的自行车被朋友借了。"],
  "我的汉语越说越流利了。": ["我的汉语越来越流利了。"],
  "你是什么时候来的中国?": ["你是什么时候来中国的?"],
  "我不是坐高铁来的中国。": ["我不是坐高铁来中国的。"],
  "我是在操场看见玛丽的。": ["我是在操场看见的玛丽。"],
  "他是今年九月来中国的。": ["他是今年九月来的中国。"],
  "她是前天下午到的上海。": ["她是前天下午到上海的。"],
  "我是跟朋友一起去的大使馆。": ["我是跟朋友一起去大使馆的。"],
  "我以前没看见过长城。": ["以前我没看见过长城。"],
};

type Item = { li: number; qi: number };
const build = (scope: number): Item[] =>
  scope === -1
    ? LESSONS.flatMap((l, li) => l.qs.map((_, qi) => ({ li, qi })))
    : LESSONS[scope].qs.map((_, qi) => ({ li: scope, qi }));
const shuffle = <T,>(a: T[]): T[] => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const norm = (s: string) => s.replace(/[\s,，.。?？!！、;；:：“”"']/g, "");

export default function GaiCuoiBaiTap() {
  const [scope, setScope] = useState(0); // -1 = tất cả
  const [order, setOrder] = useState<Item[]>(() => build(0));
  const [shuffled, setShuffled] = useState(false);
  const [pos, setPos] = useState(0);
  const [text, setText] = useState(LESSONS[0].qs[0][0]);
  const [status, setStatus] = useState<"idle" | "ok" | "bad">("idle");
  const [show, setShow] = useState(false);
  const [done, setDone] = useState<Record<string, boolean>>({});

  const cur = order[pos];
  const q = LESSONS[cur.li].qs[cur.qi];
  const [wrong, right, pinyin, vi, why, note] = q;
  const key = `${cur.li}-${cur.qi}`;
  const total = order.length;

  useEffect(() => {
    setText(wrong);
    setStatus("idle");
    setShow(false);
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeScope = (s: number) => {
    setScope(s);
    setOrder(build(s));
    setShuffled(false);
    setPos(0);
  };
  const doShuffle = () => {
    setOrder(shuffle(build(scope)));
    setShuffled(true);
    setPos(0);
  };
  const resetOrder = () => {
    setOrder(build(scope));
    setShuffled(false);
    setPos(0);
  };
  const go = (d: number) => {
    const n = pos + d;
    if (n >= 0 && n < total) setPos(n);
  };
  const check = () => {
    const ok = [right, ...(ALTS[right] || [])].some(
      (a) => norm(a) === norm(text),
    );
    setStatus(ok ? "ok" : "bad");
    setDone((d) => ({ ...d, [key]: ok }));
    if (ok) setShow(true);
  };

  const scoped = order.filter((o) => `${o.li}-${o.qi}` in done);
  const correct = scoped.filter((o) => done[`${o.li}-${o.qi}`]).length;
  const tabs = [
    { t: "Tất cả", v: -1 },
    ...LESSONS.map((l, i) => ({ t: l.title, v: i })),
  ];

  return (
    <div className="flex flex-col font-sans text-stone-900">
      <header className="mx-auto w-full max-w-xl pb-2 pt-4">
        <div className="flex items-baseline justify-between px-4">
          <h1 className="text-lg font-bold">改错句 · Sửa câu sai</h1>
          <span className="text-sm tabular-nums">
            Đúng {correct}/{scoped.length}
          </span>
        </div>
        <div
          className="flex flex-wrap gap-2 overflow-x-auto px-4 pb-2 pt-3"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((t) => (
            <button
              key={t.v}
              onClick={() => changeScope(t.v)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium ${
                t.v === scope
                  ? "bg-stone-50 text-sky-900"
                  : "bg-sky-800 text-sky-100"
              }`}
            >
              {t.t}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-4 px-4 py-5">
        <div>
          <div className="mb-2 flex items-center justify-between gap-2 text-sm text-stone-600">
            <span>
              {LESSONS[cur.li].title} · {LESSONS[cur.li].topic}
            </span>
            <span className="shrink-0 tabular-nums">
              {pos + 1}/{total}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded bg-stone-300">
            <div
              className="h-full bg-sky-800 transition-all"
              style={{ width: `${((pos + 1) / total) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex gap-2">
            <button
              onClick={doShuffle}
              className="rounded-lg border border-stone-400 px-3 py-1.5 text-sm font-medium active:bg-stone-200"
            >
              Xáo trộn câu hỏi
            </button>
            {shuffled && (
              <button
                onClick={resetOrder}
                className="rounded-lg border border-stone-400 px-3 py-1.5 text-sm active:bg-stone-200"
              >
                Về thứ tự gốc
              </button>
            )}
          </div>
        </div>

        <section className="rounded-xl border border-stone-300 bg-white p-5">
          <p className="mb-2 text-sm text-stone-500">Câu sai</p>
          <p className="text-2xl leading-relaxed" lang="zh-CN">
            {wrong}
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-xl border border-stone-300 bg-white p-5">
          <label htmlFor="ans" className="text-sm text-stone-500">
            Câu của bạn (sửa trực tiếp ở đây)
          </label>
          <textarea
            id="ans"
            lang="zh-CN"
            rows={3}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className={`w-full resize-none rounded-lg border-2 p-3 text-2xl leading-relaxed focus:outline-none ${
              status === "ok"
                ? "border-emerald-600"
                : status === "bad"
                  ? "border-red-600"
                  : "border-stone-300 focus:border-red-800"
            }`}
          />
          <div className="flex gap-2">
            <button
              onClick={check}
              className="flex-1 rounded-xl bg-sky-900 py-3 font-semibold text-white active:bg-sky-800"
            >
              Kiểm tra
            </button>
            <button
              onClick={() => setText(wrong)}
              className="rounded-xl border border-stone-400 px-4 py-3 active:bg-stone-200"
            >
              Làm lại
            </button>
          </div>
          {status === "ok" && (
            <p className="font-medium text-emerald-800">Chính xác!</p>
          )}
          {status === "bad" && (
            <p className="font-medium text-red-700">
              Chưa đúng, thử sửa lại hoặc xem đáp án.
            </p>
          )}
        </section>

        {!show ? (
          <button
            onClick={() => setShow(true)}
            className="rounded-xl border-2 border-sky-900 py-3 font-semibold text-sky-900 active:bg-sky-50"
          >
            Xem đáp án
          </button>
        ) : (
          <section className="border-l-5 flex flex-col gap-4 border border-emerald-600 bg-white p-5">
            <div>
              <p className="text-md mb-2 text-emerald-800">Câu đúng</p>
              <p className="text-2xl font-medium leading-relaxed" lang="zh-CN">
                {right}
              </p>
              <p className="mt-1 text-base italic text-stone-600">{pinyin}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-stone-500">Nghĩa</p>
              <p>{vi}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-stone-500">Cách sửa</p>
              <p className="leading-relaxed">{why}</p>
            </div>
            {note && (
              <p className="rounded-lg bg-amber-100 p-3 text-sm leading-relaxed text-amber-900">
                {note}
              </p>
            )}
          </section>
        )}
      </main>

      <footer
        className="sticky bottom-0 bg-white px-4 py-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-xl gap-3">
          <button
            onClick={() => go(-1)}
            disabled={pos === 0}
            className="flex-1 rounded-xl border border-stone-400 py-3 font-medium active:bg-stone-200 disabled:opacity-40"
          >
            ← Câu trước
          </button>
          <button
            onClick={() => go(1)}
            disabled={pos === total - 1}
            className="flex-1 rounded-xl bg-stone-900 py-3 font-medium text-white active:bg-stone-700 disabled:opacity-40"
          >
            Câu sau →
          </button>
        </div>
      </footer>
    </div>
  );
}
