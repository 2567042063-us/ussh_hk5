"use client";

import React, { useMemo, useState } from "react";

/**
 * Bài tập: điền động từ + bổ ngữ kết quả (结果补语) vào chỗ trống.
 * Nguồn: 汉语教程 (第3版) 第二册 上, Bài 4 và Bài 12.
 * Chinese cells use class "ztai__zh", pinyin uses "ztai__py".
 */

type Item = {
  parts: string[]; // text around the blanks (parts.length === answers.length + 1)
  answers: string[]; // main answer for each blank
  alts: string[][]; // accepted alternatives for each blank
  py: string;
  vi: string;
  src: string;
};

type Section = {
  id: string;
  title: string;
  mean: string;
  hint: string; // the complement, shown only when "gợi ý bổ ngữ" is on
  items: Item[];
};

const SECTIONS: Section[] = [
  {
    id: "goc",
    title: "Bài tập gốc",
    mean: "用动词和补语填空 (B12 tr.206, bài 5)",
    hint: "",
    items: [
      {
        parts: ["昨天买来的那本新书你", "哪儿了?"],
        answers: ["放在"],
        alts: [[]],
        py: "Zuótiān mǎilái de nà běn xīn shū nǐ fàngzài nǎr le?",
        vi: "Cuốn sách mới mua hôm qua cậu để ở đâu rồi?",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["这张画儿咱们", "什么地方呢?"],
        answers: ["挂在"],
        alts: [["放在"]],
        py: "Zhè zhāng huàr zánmen guàzài shénme dìfang ne?",
        vi: "Bức tranh này mình treo ở chỗ nào nhỉ?",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["那本书我已经", "她了。"],
        answers: ["还给"],
        alts: [["借给", "送给"]],
        py: "Nà běn shū wǒ yǐjīng huángěi tā le.",
        vi: "Cuốn sách đó tớ đã trả cho cô ấy rồi.",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["这张照片我", "墙上,怎么样?"],
        answers: ["挂在"],
        alts: [["贴在"]],
        py: "Zhè zhāng zhàopiàn wǒ guàzài qiáng shàng, zěnmeyàng?",
        vi: "Tớ treo tấm ảnh này lên tường, thấy thế nào?",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["你要的词典我给你", "了。"],
        answers: ["买着"],
        alts: [["买到", "找着", "找到"]],
        py: "Nǐ yào de cídiǎn wǒ gěi nǐ mǎizháo le.",
        vi: "Cuốn từ điển cậu cần tớ mua được cho cậu rồi.",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["山本过生日,我们", "她一件什么礼物呢?"],
        answers: ["送给"],
        alts: [[]],
        py: "Shānběn guò shēngrì, wǒmen sònggěi tā yí jiàn shénme lǐwù ne?",
        vi: "Sinh nhật Yamamoto, mình tặng cô ấy món quà gì nhỉ?",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["今天的生词我还没", "呢。"],
        answers: ["预习好"],
        alts: [["准备好"]],
        py: "Jīntiān de shēngcí wǒ hái méi yùxíhǎo ne.",
        vi: "Từ mới hôm nay tớ còn chưa chuẩn bị xong.",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
      {
        parts: ["那几张照片我已经", "她了。"],
        answers: ["发给"],
        alts: [["寄给", "送给"]],
        py: "Nà jǐ zhāng zhàopiàn wǒ yǐjīng fāgěi tā le.",
        vi: "Mấy tấm ảnh đó tớ đã gửi cho cô ấy rồi.",
        src: "B12 tr.206, bài 5 (ảnh bạn gửi; đáp án gợi ý)",
      },
    ],
  },
  {
    id: "s1",
    title: "完 wán",
    mean: "xong, hoàn tất hành động",
    hint: "完",
    items: [
      {
        parts: ["我都", "了,但是没都做对。"],
        answers: ["做完"],
        alts: [[]],
        py: "Wǒ dōu zuòwán le, dànshì méi dōu zuòduì.",
        vi: "Tớ làm xong hết rồi, nhưng không đúng hết.",
        src: "B4 tr.51",
      },
      {
        parts: ["题太多了,我没有", "。"],
        answers: ["做完"],
        alts: [[]],
        py: "Tí tài duō le, wǒ méiyǒu zuòwán.",
        vi: "Nhiều câu quá, tớ chưa làm xong.",
        src: "B4 tr.51",
      },
      {
        parts: ["今天的作业我", "了。"],
        answers: ["做完"],
        alts: [[]],
        py: "Jīntiān de zuòyè wǒ zuòwán le.",
        vi: "Bài tập hôm nay tớ làm xong rồi.",
        src: "B4 tr.55",
      },
      {
        parts: ["你", "了没有?"],
        answers: ["看完"],
        alts: [[]],
        py: "Nǐ kànwán le méiyǒu?",
        vi: "Cậu xem/đọc xong chưa?",
        src: "B4 tr.52",
      },
      {
        parts: ["", "电视剧再洗吧。"],
        answers: ["看完"],
        alts: [[]],
        py: "Kànwán diànshìjù zài xǐ ba.",
        vi: "Xem xong phim rồi hãy giặt.",
        src: "B4 tr.52",
      },
      {
        parts: ["", "晚饭,我和玛丽回到宿舍。"],
        answers: ["吃完"],
        alts: [[]],
        py: "Chīwán wǎnfàn, wǒ hé Mǎlì huídào sùshè.",
        vi: "Ăn tối xong, tớ và Mary về ký túc xá.",
        src: "B4 tr.52",
      },
      {
        parts: ["", "晚饭我们一起去跳舞吧。"],
        answers: ["吃完"],
        alts: [[]],
        py: "Chīwán wǎnfàn wǒmen yìqǐ qù tiàowǔ ba.",
        vi: "Ăn tối xong chúng mình cùng đi khiêu vũ nhé.",
        src: "B12 tr.206",
      },
      {
        parts: ["我的衣服还没有", "呢,还得给我妹妹回信。"],
        answers: ["洗完"],
        alts: [[]],
        py: "Wǒ de yīfu hái méiyǒu xǐwán ne, hái děi gěi wǒ mèimei huí xìn.",
        vi: "Quần áo tớ còn chưa giặt xong, còn phải trả lời thư cho em gái.",
        src: "B4 tr.52",
      },
      {
        parts: ["", "了"],
        answers: ["洗完"],
        alts: [[]],
        py: "xǐwán le",
        vi: "giặt xong rồi",
        src: "B4 tr.59",
      },
      {
        parts: ["这杯", "了。 / 这杯没", "。"],
        answers: ["喝完", "喝完"],
        alts: [[], []],
        py: "Zhè bēi hēwán le. / Zhè bēi méi hēwán.",
        vi: "Cốc này uống hết rồi. / Cốc này chưa uống hết.",
        src: "B4 tr.56",
      },
      {
        parts: ["", "了"],
        answers: ["读完"],
        alts: [[]],
        py: "dúwán le",
        vi: "đọc xong rồi",
        src: "B4 tr.59",
      },
      {
        parts: ["我", "一个故事,问你几个问题,看你能不能答对。"],
        answers: ["念完"],
        alts: [[]],
        py: "Wǒ niànwán yí ge gùshi, wèn nǐ jǐ ge wèntí, kàn nǐ néng bu néng dáduì.",
        vi: "Tớ đọc xong một câu chuyện thì hỏi cậu vài câu, xem cậu trả lời đúng được không.",
        src: "B4 tr.52",
      },
      {
        parts: ["我们还没有", ",就听见安娜在门外叫我们。"],
        answers: ["练习完"],
        alts: [[]],
        py: "Wǒmen hái méiyǒu liànxíwán, jiù tīngjiàn Ānnà zài mén wài jiào wǒmen.",
        vi: "Chúng tớ chưa luyện xong thì nghe thấy Anna gọi ngoài cửa.",
        src: "B4 tr.53",
      },
      {
        parts: ["", ",我们三个就去礼堂看电影了。"],
        answers: ["说完"],
        alts: [[]],
        py: "Shuōwán, wǒmen sān ge jiù qù lǐtáng kàn diànyǐng le.",
        vi: "Nói xong, ba đứa tớ đi hội trường xem phim.",
        src: "B4 tr.53",
      },
      {
        parts: ["第一本书你", "了吗?"],
        answers: ["学完"],
        alts: [[]],
        py: "Dì-yī běn shū nǐ xuéwán le ma?",
        vi: "Cuốn thứ nhất cậu học xong chưa?",
        src: "B4 tr.63",
      },
      {
        parts: ["我", "这本书了。"],
        answers: ["学完"],
        alts: [[]],
        py: "Wǒ xuéwán zhè běn shū le.",
        vi: "Tớ học xong cuốn sách này rồi.",
        src: "B4 tr.64",
      },
      {
        parts: ["这一课的录音你", "了没有?"],
        answers: ["听完"],
        alts: [[]],
        py: "Zhè yí kè de lùyīn nǐ tīngwán le méiyǒu?",
        vi: "Bản ghi âm bài này cậu nghe xong chưa?",
        src: "B4 tr.60 (theo mẫu)",
      },
      {
        parts: ["今天的汉字你", "了没有?"],
        answers: ["写完"],
        alts: [[]],
        py: "Jīntiān de Hànzì nǐ xiěwán le méiyǒu?",
        vi: "Chữ Hán hôm nay cậu viết xong chưa?",
        src: "B4 tr.60 (theo mẫu)",
      },
      {
        parts: ["我一", "就还给张东了。"],
        answers: ["用完"],
        alts: [[]],
        py: "Wǒ yí yòngwán jiù huángěi Zhāng Dōng le.",
        vi: "Tớ vừa dùng xong là trả cho Trương Đông ngay.",
        src: "B12 tr.204 (theo mẫu)",
      },
      {
        parts: ["昨天你", "签证放在什么地方了?"],
        answers: ["办完"],
        alts: [[]],
        py: "Zuótiān nǐ bànwán qiānzhèng fàng zài shénme dìfang le?",
        vi: "Hôm qua làm xong visa cậu để ở đâu?",
        src: "B12 tr.196",
      },
    ],
  },
  {
    id: "s2",
    title: "懂 dǒng",
    mean: "hiểu",
    hint: "懂",
    items: [
      {
        parts: ["很多句子我没", "。"],
        answers: ["听懂"],
        alts: [[]],
        py: "Hěn duō jùzi wǒ méi tīngdǒng.",
        vi: "Nhiều câu tớ nghe không hiểu.",
        src: "B4 tr.51",
      },
      {
        parts: ["我", "了老师的话。"],
        answers: ["听懂"],
        alts: [[]],
        py: "Wǒ tīngdǒngle lǎoshī de huà.",
        vi: "Tớ nghe hiểu lời thầy giáo.",
        src: "B4 tr.55",
      },
      {
        parts: ["我念了一个故事,玛丽", "了。"],
        answers: ["听懂"],
        alts: [[]],
        py: "Wǒ niànle yí ge gùshi, Mǎlì tīngdǒng le.",
        vi: "Tớ đọc một câu chuyện, Mary nghe hiểu.",
        src: "B4 tr.52",
      },
      {
        parts: ["都", "了吗?"],
        answers: ["看懂"],
        alts: [[]],
        py: "Dōu kàndǒng le ma?",
        vi: "Hiểu hết rồi à?",
        src: "B4 tr.52",
      },
      {
        parts: ["这课课文我没有", "。"],
        answers: ["看懂"],
        alts: [[]],
        py: "Zhè kè kèwén wǒ méiyǒu kàndǒng.",
        vi: "Bài khóa này tớ đọc chưa hiểu.",
        src: "B4 tr.56",
      },
    ],
  },
  {
    id: "s3",
    title: "见 jiàn",
    mean: "cảm nhận được bằng giác quan",
    hint: "见",
    items: [
      {
        parts: ["我没", "你的词典。"],
        answers: ["看见"],
        alts: [["看到"]],
        py: "Wǒ méi kànjiàn nǐ de cídiǎn.",
        vi: "Tớ không thấy từ điển của cậu.",
        src: "B4 tr.51",
      },
      {
        parts: ["你", "玛丽了没有? — ", "了。"],
        answers: ["看见", "看见"],
        alts: [["看到"], ["看到"]],
        py: "Nǐ kànjiàn Mǎlì le méiyǒu? — Kànjiàn le.",
        vi: "Cậu thấy Mary chưa? — Thấy rồi.",
        src: "B4 tr.57",
      },
      {
        parts: ["我", "玛丽,她在操场打太极拳呢。"],
        answers: ["看见"],
        alts: [["看到"]],
        py: "Wǒ kànjiàn Mǎlì, tā zài cāochǎng dǎ tàijíquán ne.",
        vi: "Tớ thấy Mary, cô ấy đang tập thái cực quyền ở sân.",
        src: "B4 tr.55",
      },
      {
        parts: ["你没有", "吗?安娜在叫你。"],
        answers: ["听见"],
        alts: [["听到"]],
        py: "Nǐ méiyǒu tīngjiàn ma? Ānnà zài jiào nǐ.",
        vi: "Cậu không nghe thấy à? Anna đang gọi cậu.",
        src: "B4 tr.56",
      },
      {
        parts: ["", "我说的话 / ", "她叫你"],
        answers: ["听见", "听见"],
        alts: [["听到"], ["听到"]],
        py: "tīngjiàn wǒ shuō de huà / tīngjiàn tā jiào nǐ",
        vi: "nghe thấy lời tớ nói / nghe thấy cô ấy gọi cậu",
        src: "B4 tr.60 (mẫu thay thế)",
      },
    ],
  },
  {
    id: "s4",
    title: "开 / 上 (mở, đóng, dính vào)",
    mean: "mở ra, khép lại, dính vào",
    hint: "开",
    items: [
      {
        parts: ["快", "电脑,看看电视剧吧。"],
        answers: ["打开"],
        alts: [["开开"]],
        py: "Kuài dǎkāi diànnǎo, kànkan diànshìjù ba.",
        vi: "Mau bật máy tính lên xem phim đi.",
        src: "B4 tr.52",
      },
      {
        parts: ["", "电脑,好吗?"],
        answers: ["打开"],
        alts: [["开开"]],
        py: "Dǎkāi diànnǎo, hǎo ma?",
        vi: "Bật máy tính lên nhé?",
        src: "B4 tr.61",
      },
      {
        parts: ["", "灯 / ", "窗户 / ", "书"],
        answers: ["打开", "打开", "打开"],
        alts: [["开开"], ["开开"], ["开开"]],
        py: "dǎkāi dēng / dǎkāi chuānghu / dǎkāi shū",
        vi: "bật đèn / mở cửa sổ / mở sách",
        src: "B4 tr.61",
      },
      {
        parts: ["我", "门问她:“什么事?”"],
        answers: ["开开"],
        alts: [["打开"]],
        py: "Wǒ kāikai mén wèn tā: “Shénme shì?”",
        vi: "Tớ mở cửa hỏi cô ấy: “Có chuyện gì?”",
        src: "B4 tr.53",
      },
      {
        parts: ["", "门 / ", "电视"],
        answers: ["开开", "开开"],
        alts: [["打开"], ["打开"]],
        py: "kāikai mén / kāikai diànshì",
        vi: "mở cửa / bật tivi",
        src: "B4 tr.59",
      },
      {
        parts: ["他", "门了。"],
        answers: ["关上"],
        alts: [[]],
        py: "Tā guānshang mén le.",
        vi: "Anh ấy đóng cửa rồi.",
        src: "B4 tr.57",
      },
      {
        parts: ["", "门吧。"],
        answers: ["关上"],
        alts: [[]],
        py: "Guānshang mén ba.",
        vi: "Đóng cửa lại đi.",
        src: "B4 tr.58",
      },
      {
        parts: ["外边风很大,", "窗户吧。"],
        answers: ["关上"],
        alts: [[]],
        py: "Wàibian fēng hěn dà, guānshang chuānghu ba.",
        vi: "Bên ngoài gió to, đóng cửa sổ lại đi.",
        src: "B4 tr.61",
      },
      {
        parts: ["请同学们", "书,现在听写。"],
        answers: ["合上"],
        alts: [[]],
        py: "Qǐng tóngxuémen héshang shū, xiànzài tīngxiě.",
        vi: "Các bạn gập sách lại, bây giờ nghe viết.",
        src: "B4 tr.58",
      },
      {
        parts: ["她念了一个故事,", "书,问我听懂了没有。"],
        answers: ["合上"],
        alts: [[]],
        py: "Tā niànle yí ge gùshi, héshang shū, wèn wǒ tīngdǒngle méiyǒu.",
        vi: "Cô ấy đọc một câu chuyện, gập sách lại, hỏi tớ nghe hiểu chưa.",
        src: "B4 tr.53",
      },
      {
        parts: ["请在这儿", "你的名字。"],
        answers: ["写上"],
        alts: [[]],
        py: "Qǐng zài zhèr xiěshang nǐ de míngzi.",
        vi: "Xin viết tên cậu vào đây.",
        src: "B4 tr.58",
      },
      {
        parts: ["你", "这件衣服试试。"],
        answers: ["穿上"],
        alts: [[]],
        py: "Nǐ chuānshang zhè jiàn yīfu shìshi.",
        vi: "Cậu mặc bộ này vào thử đi.",
        src: "B4 tr.58",
      },
      {
        parts: ["他", "衣服了。"],
        answers: ["穿上"],
        alts: [[]],
        py: "Tā chuānshang yīfu le.",
        vi: "Anh ấy mặc quần áo vào rồi.",
        src: "B4 tr.58",
      },
    ],
  },
  {
    id: "s5",
    title: "到 dào",
    mean: "đạt mục đích, tới nơi, kéo dài đến mốc",
    hint: "到",
    items: [
      {
        parts: ["我昨天很晚才", "家。"],
        answers: ["回到"],
        alts: [[]],
        py: "Wǒ zuótiān hěn wǎn cái huídào jiā.",
        vi: "Hôm qua tớ về đến nhà rất muộn.",
        src: "B4 tr.59",
      },
      {
        parts: ["吃完晚饭,我和玛丽", "宿舍。"],
        answers: ["回到"],
        alts: [[]],
        py: "Chīwán wǎnfàn, wǒ hé Mǎlì huídào sùshè.",
        vi: "Ăn tối xong, tớ và Mary về ký túc xá.",
        src: "B4 tr.52",
      },
      {
        parts: ["我一", "家不是就交给你了吗?"],
        answers: ["回到"],
        alts: [[]],
        py: "Wǒ yì huídào jiā bú shì jiù jiāogěi nǐ le ma?",
        vi: "Vừa về đến nhà tớ chẳng phải đã đưa cho cậu rồi sao?",
        src: "B12 tr.196",
      },
      {
        parts: ["我", "王老师了。"],
        answers: ["找到"],
        alts: [["找着"]],
        py: "Wǒ zhǎodào Wáng lǎoshī le.",
        vi: "Tớ tìm được thầy Vương rồi.",
        src: "B4 tr.58",
      },
      {
        parts: ["啊,", "了!"],
        answers: ["找到"],
        alts: [["找着"]],
        py: "À, zhǎodào le!",
        vi: "À, tìm thấy rồi!",
        src: "B12 tr.197",
      },
      {
        parts: ["是在包儿里", "的吗?"],
        answers: ["找到"],
        alts: [["找着"]],
        py: "Shì zài bāor lǐ zhǎodào de ma?",
        vi: "Là tìm thấy trong túi à?",
        src: "B12 tr.196",
      },
      {
        parts: ["罗兰", "那本书了。"],
        answers: ["买到"],
        alts: [["买着"]],
        py: "Luólán mǎidào nà běn shū le.",
        vi: "Lô Lan mua được cuốn sách đó rồi.",
        src: "B4 tr.58",
      },
      {
        parts: ["你要的那本书我给你", "了。"],
        answers: ["买到"],
        alts: [["买着"]],
        py: "Nǐ yào de nà běn shū wǒ gěi nǐ mǎidào le.",
        vi: "Cuốn sách cậu cần tớ mua được cho cậu rồi.",
        src: "B4 tr.59",
      },
      {
        parts: ["", "有意思的地方,就想笑。"],
        answers: ["看到"],
        alts: [[]],
        py: "Kàndào yǒu yìsi de dìfang, jiù xiǎng xiào.",
        vi: "Xem đến chỗ thú vị là muốn cười.",
        src: "B4 tr.52",
      },
      {
        parts: ["我们", "九点才看完。"],
        answers: ["看到"],
        alts: [[]],
        py: "Wǒmen kàndào jiǔ diǎn cái kànwán.",
        vi: "Chúng tớ xem đến chín giờ mới xem xong.",
        src: "B4 tr.53",
      },
      {
        parts: ["我", "一半儿,肚子疼很厉害,就去医院了。"],
        answers: ["看到"],
        alts: [[]],
        py: "Wǒ kàndào yíbànr, dùzi téng hěn lìhai, jiù qù yīyuàn le.",
        vi: "Tớ xem được một nửa thì đau bụng dữ dội nên đi bệnh viện.",
        src: "B4 tr.63",
      },
      {
        parts: ["", "了"],
        answers: ["听到"],
        alts: [["听见"]],
        py: "tīngdào le",
        vi: "nghe thấy rồi",
        src: "B4 tr.59",
      },
      {
        parts: ["我们", "二十九课了。"],
        answers: ["学到"],
        alts: [[]],
        py: "Wǒmen xuédào èrshíjiǔ kè le.",
        vi: "Chúng tớ học đến bài 29 rồi.",
        src: "B4 tr.59",
      },
      {
        parts: ["你们", "第几课了?"],
        answers: ["学到"],
        alts: [[]],
        py: "Nǐmen xuédào dì-jǐ kè le?",
        vi: "Các cậu học đến bài mấy rồi?",
        src: "B4 tr.63",
      },
      {
        parts: ["我每天晚上都", "十一二点。"],
        answers: ["学到"],
        alts: [[]],
        py: "Wǒ měi tiān wǎnshang dōu xuédào shíyī èr diǎn.",
        vi: "Tối nào tớ cũng học đến mười một, mười hai giờ.",
        src: "B4 tr.59",
      },
      {
        parts: ["星期六早上我", "九点才起床。"],
        answers: ["睡到"],
        alts: [[]],
        py: "Xīngqīliù zǎoshang wǒ shuìdào jiǔ diǎn cái qǐchuáng.",
        vi: "Sáng thứ bảy tớ ngủ đến chín giờ mới dậy.",
        src: "B4 tr.59",
      },
      {
        parts: ["昨天晚上,我", "十点。"],
        answers: ["工作到"],
        alts: [[]],
        py: "Zuótiān wǎnshang, wǒ gōngzuòdào shí diǎn.",
        vi: "Tối qua tớ làm việc đến mười giờ.",
        src: "B12 tr.206 (đáp án sửa lỗi)",
      },
      {
        parts: ["我打算在这儿", "明年七月。"],
        answers: ["学习到"],
        alts: [[]],
        py: "Wǒ dǎsuan zài zhèr xuéxídào míngnián qī yuè.",
        vi: "Tớ định học ở đây đến tháng bảy năm sau.",
        src: "B12 tr.207 (đáp án sửa lỗi)",
      },
      {
        parts: ["是我昨天晚上", "口袋里的。"],
        answers: ["放到"],
        alts: [[]],
        py: "Shì wǒ zuótiān wǎnshang fàngdào kǒudài lǐ de.",
        vi: "Là tối qua tớ đặt vào trong túi áo.",
        src: "B12 tr.197",
      },
      {
        parts: ["你看看是不是", "桌子下边了。"],
        answers: ["掉到"],
        alts: [[]],
        py: "Nǐ kànkan shì bu shì diàodào zhuōzi xiàbian le.",
        vi: "Cậu xem có phải rơi xuống dưới bàn không.",
        src: "B4 tr.65",
      },
      {
        parts: ["", "什么程度?"],
        answers: ["迷到"],
        alts: [[]],
        py: "Mídào shénme chéngdù?",
        vi: "Mê đến mức nào?",
        src: "B12 tr.197",
      },
      {
        parts: ["有时候", "了发狂的程度。"],
        answers: ["迷到"],
        alts: [[]],
        py: "Yǒu shíhou mídàole fā kuáng de chéngdù.",
        vi: "Đôi khi mê đến mức phát điên.",
        src: "B12 tr.197",
      },
    ],
  },
  {
    id: "s6",
    title: "给 gěi",
    mean: "trao cho, dành cho (người nhận)",
    hint: "给",
    items: [
      {
        parts: ["我一回到家不是就", "你了吗?"],
        answers: ["交给"],
        alts: [[]],
        py: "Wǒ yì huídào jiā bú shì jiù jiāogěi nǐ le ma?",
        vi: "Vừa về đến nhà tớ chẳng phải đã đưa cho cậu rồi sao?",
        src: "B12 tr.196",
      },
      {
        parts: ["作业你", "老师了没有? — ", "老师了。"],
        answers: ["交给", "交给"],
        alts: [[], []],
        py: "Zuòyè nǐ jiāogěi lǎoshī le méiyǒu? — Jiāogěi lǎoshī le.",
        vi: "Bài tập cậu nộp cho thầy chưa? — Nộp rồi.",
        src: "B12 tr.204",
      },
      {
        parts: ["那本书我一看完就", "你了,你怎么忘了?"],
        answers: ["还给"],
        alts: [[]],
        py: "Nà běn shū wǒ yí kànwán jiù huángěi nǐ le, nǐ zěnme wàng le?",
        vi: "Cuốn sách đó tớ vừa đọc xong là trả cậu rồi, sao cậu quên?",
        src: "B12 tr.205",
      },
      {
        parts: ["", "图书馆 / ", "张东"],
        answers: ["还给", "还给"],
        alts: [[], []],
        py: "huángěi túshūguǎn / huángěi Zhāng Dōng",
        vi: "trả cho thư viện / trả cho Trương Đông",
        src: "B12 tr.204",
      },
      {
        parts: ["一个同学", "我的。"],
        answers: ["送给"],
        alts: [[]],
        py: "Yí ge tóngxué sònggěi wǒ de.",
        vi: "Một bạn học tặng tớ.",
        src: "B12 tr.206",
      },
      {
        parts: ["", "朋友 / ", "玛丽"],
        answers: ["送给", "送给"],
        alts: [[], []],
        py: "sònggěi péngyou / sònggěi Mǎlì",
        vi: "tặng bạn bè / tặng Mary",
        src: "B12 tr.203, 204",
      },
      {
        parts: ["田芳", "你的那本书你看完了没有?"],
        answers: ["借给"],
        alts: [[]],
        py: "Tián Fāng jiègěi nǐ de nà běn shū nǐ kànwán le méiyǒu?",
        vi: "Cuốn sách Điền Phương cho cậu mượn cậu đọc xong chưa?",
        src: "B4 tr.59",
      },
      {
        parts: ["田芳", "她一本书。"],
        answers: ["借给"],
        alts: [[]],
        py: "Tián Fāng jiègěi tā yì běn shū.",
        vi: "Điền Phương cho cô ấy mượn một cuốn sách.",
        src: "B4 tr.52",
      },
      {
        parts: ["", "同学"],
        answers: ["借给"],
        alts: [[]],
        py: "jiègěi tóngxué",
        vi: "cho bạn học mượn",
        src: "B12 tr.203",
      },
      {
        parts: ["", "妈妈"],
        answers: ["寄给"],
        alts: [[]],
        py: "jìgěi māma",
        vi: "gửi cho mẹ",
        src: "B12 tr.203",
      },
      {
        parts: ["我", "你的邮件,你收到了没有?"],
        answers: ["发给"],
        alts: [[]],
        py: "Wǒ fāgěi nǐ de yóujiàn, nǐ shōudàole méiyǒu?",
        vi: "Thư tớ gửi cậu, cậu nhận được chưa?",
        src: "B12 tr.206",
      },
      {
        parts: ["那些照片", "她"],
        answers: ["发给"],
        alts: [[]],
        py: "nàxiē zhàopiàn fāgěi tā",
        vi: "những bức ảnh đó gửi cho cô ấy",
        src: "B12 tr.204",
      },
      {
        parts: ["那把雨伞", "麦克"],
        answers: ["带给"],
        alts: [[]],
        py: "nà bǎ yǔsǎn dàigěi Màikè",
        vi: "cây dù đó mang cho Mike",
        src: "B12 tr.204",
      },
    ],
  },
  {
    id: "s7",
    title: "成 chéng",
    mean: "biến thành (成₁) / làm xong, thành công (成₂)",
    hint: "成",
    items: [
      {
        parts: ["糟糕,写错了,是这个“得”,我", "这个“的”了。"],
        answers: ["写成"],
        alts: [[]],
        py: "Zāogāo, xiěcuò le, shì zhège “de”, wǒ xiěchéng zhège “de” le.",
        vi: "Chết rồi, viết sai, là chữ “得”, tớ viết thành chữ “的”.",
        src: "B4 tr.51",
      },
      {
        parts: ["这是个“我”字,你", "“找”字了。"],
        answers: ["写成"],
        alts: [[]],
        py: "Zhè shì ge “wǒ” zì, nǐ xiěchéng “zhǎo” zì le.",
        vi: "Đây là chữ “我”, cậu viết thành chữ “找”.",
        src: "B4 tr.58",
      },
      {
        parts: ["", "小说"],
        answers: ["写成"],
        alts: [[]],
        py: "xiěchéng xiǎoshuō",
        vi: "viết thành tiểu thuyết",
        src: "B12 tr.203",
      },
      {
        parts: ["“是不是”,他总", "“四不四”。"],
        answers: ["说成"],
        alts: [[]],
        py: "“Shì bu shì”, tā zǒng shuōchéng “sì bu sì”.",
        vi: "“Shì bu shì”, anh ấy toàn nói thành “sì bu sì”.",
        src: "B4 tr.58",
      },
      {
        parts: ["这篇会话课文,老师要我们", "叙述体。"],
        answers: ["改成"],
        alts: [[]],
        py: "Zhè piān huìhuà kèwén, lǎoshī yào wǒmen gǎichéng xùshùtǐ.",
        vi: "Bài khóa hội thoại này thầy bảo chúng tớ chuyển thành thể tự sự.",
        src: "B4 tr.58",
      },
      {
        parts: ["", "会话"],
        answers: ["改成"],
        alts: [[]],
        py: "gǎichéng huìhuà",
        vi: "chuyển thành hội thoại",
        src: "B12 tr.203",
      },
      {
        parts: ["“ān (安)”这个音,我总是", "“āng”。"],
        answers: ["发成"],
        alts: [[]],
        py: "“Ān (安)” zhège yīn, wǒ zǒngshì fāchéng “āng”.",
        vi: "Âm “ān (安)” tớ toàn phát âm thành “āng”.",
        src: "B4 tr.61",
      },
      {
        parts: ["", "汉语"],
        answers: ["译成"],
        alts: [[]],
        py: "yìchéng Hànyǔ",
        vi: "dịch sang tiếng Hán",
        src: "B12 tr.203",
      },
      {
        parts: ["麻烦您给我", "零钱。"],
        answers: ["换成"],
        alts: [[]],
        py: "Máfan nín gěi wǒ huànchéng língqián.",
        vi: "Phiền bạn đổi giúp tôi thành tiền lẻ.",
        src: "B12 tr.207",
      },
      {
        parts: ["", "十块一张的就行。"],
        answers: ["换成"],
        alts: [[]],
        py: "Huànchéng shí kuài yì zhāng de jiù xíng.",
        vi: "Đổi thành tờ mười tệ là được.",
        src: "B12 tr.207",
      },
      {
        parts: ["", "人民币"],
        answers: ["换成"],
        alts: [[]],
        py: "huànchéng rénmínbì",
        vi: "đổi thành nhân dân tệ",
        src: "B12 tr.203",
      },
      {
        parts: ["", "了"],
        answers: ["变成"],
        alts: [[]],
        py: "biànchéng le",
        vi: "đã biến thành",
        src: "B12 tr.203",
      },
      {
        parts: ["最后", "了吗? — ", "了。"],
        answers: ["去成", "去成"],
        alts: [[], []],
        py: "Zuìhòu qùchéng le ma? — Qùchéng le.",
        vi: "Cuối cùng đi được không? — Đi được rồi.",
        src: "B12 tr.198, 203",
      },
      {
        parts: ["", "了"],
        answers: ["做成"],
        alts: [[]],
        py: "zuòchéng le",
        vi: "làm xong rồi",
        src: "B12 tr.203",
      },
      {
        parts: ["这座大楼是什么时候", "的?"],
        answers: ["建成"],
        alts: [[]],
        py: "Zhè zuò dàlóu shì shénme shíhou jiànchéng de?",
        vi: "Tòa nhà này xây xong từ khi nào?",
        src: "B12 tr.203",
      },
    ],
  },
  {
    id: "s8",
    title: "好 hǎo",
    mean: "hoàn thiện, đạt mức tốt/như ý",
    hint: "好",
    items: [
      {
        parts: ["这次没", "。"],
        answers: ["考好"],
        alts: [[]],
        py: "Zhè cì méi kǎohǎo.",
        vi: "Lần này tớ thi không tốt.",
        src: "B4 tr.51",
      },
      {
        parts: ["这次我没", ",因为考试前我病了。"],
        answers: ["考好"],
        alts: [[]],
        py: "Zhè cì wǒ méi kǎohǎo, yīnwèi kǎoshì qián wǒ bìng le.",
        vi: "Lần này tớ thi không tốt vì trước kỳ thi tớ bị ốm.",
        src: "B4 tr.61",
      },
      {
        parts: ["我", "了。 / 我还没", "呢!"],
        answers: ["洗好", "洗好"],
        alts: [[], []],
        py: "Wǒ xǐhǎo le. / Wǒ hái méi xǐhǎo ne!",
        vi: "Tớ giặt xong rồi. / Tớ còn chưa giặt xong đâu!",
        src: "B12 tr.202",
      },
      {
        parts: ["你的衣服", "了吗?"],
        answers: ["洗好"],
        alts: [[]],
        py: "Nǐ de yīfu xǐhǎo le ma?",
        vi: "Quần áo cậu giặt xong chưa?",
        src: "B12 tr.202",
      },
      {
        parts: ["昨天晚上我没有", "。"],
        answers: ["睡好"],
        alts: [[]],
        py: "Zuótiān wǎnshang wǒ méiyǒu shuìhǎo.",
        vi: "Tối qua tớ ngủ không ngon.",
        src: "B12 tr.202",
      },
      {
        parts: ["我跟老板", "了。"],
        answers: ["商量好"],
        alts: [[]],
        py: "Wǒ gēn lǎobǎn shāngliang hǎo le.",
        vi: "Tớ đã bàn bạc xong với sếp.",
        src: "B12 tr.202",
      },
      {
        parts: ["你的签证", "了没有?"],
        answers: ["办好"],
        alts: [[]],
        py: "Nǐ de qiānzhèng bànhǎo le méiyǒu?",
        vi: "Visa của cậu làm xong chưa?",
        src: "B12 tr.205",
      },
      {
        parts: ["请大家", "笔和本子,现在听写句子。"],
        answers: ["准备好"],
        alts: [[]],
        py: "Qǐng dàjiā zhǔnbèihǎo bǐ hé běnzi, xiànzài tīngxiě jùzi.",
        vi: "Mọi người chuẩn bị sẵn bút và vở, bây giờ nghe viết câu.",
        src: "B12 tr.206",
      },
      {
        parts: ["明天的生词你", "了没有?"],
        answers: ["预习好"],
        alts: [[]],
        py: "Míngtiān de shēngcí nǐ yùxíhǎo le méiyǒu?",
        vi: "Từ mới ngày mai cậu chuẩn bị xong chưa?",
        src: "B4 tr.60 (theo mẫu)",
      },
      {
        parts: ["妈妈,晚饭", "了吗?"],
        answers: ["做好"],
        alts: [[]],
        py: "Māma, wǎnfàn zuòhǎo le ma?",
        vi: "Mẹ ơi, cơm tối làm xong chưa?",
        src: "B4 tr.62",
      },
    ],
  },
  {
    id: "s9",
    title: "对 / 错 duì / cuò",
    mean: "đúng / sai",
    hint: "对",
    items: [
      {
        parts: ["这道题我没", "。"],
        answers: ["做对"],
        alts: [[]],
        py: "Zhè dào tí wǒ méi zuòduì.",
        vi: "Câu này tớ làm không đúng.",
        src: "B4 tr.56",
      },
      {
        parts: ["这道题你", "了没有? — 没", "。"],
        answers: ["做对", "做对"],
        alts: [[], []],
        py: "Zhè dào tí nǐ zuòduì le méiyǒu? — Méi zuòduì.",
        vi: "Câu này cậu làm đúng chưa? — Chưa đúng.",
        src: "B4 tr.57",
      },
      {
        parts: ["我", "了两道题。"],
        answers: ["做错"],
        alts: [[]],
        py: "Wǒ zuòcuòle liǎng dào tí.",
        vi: "Tớ làm sai hai câu.",
        src: "B4 tr.57",
      },
      {
        parts: ["", "了题"],
        answers: ["做错"],
        alts: [[]],
        py: "zuòcuòle tí",
        vi: "làm sai câu hỏi",
        src: "B4 tr.59",
      },
      {
        parts: ["我查一个词,看看", "了没有。"],
        answers: ["写对"],
        alts: [[]],
        py: "Wǒ chá yí ge cí, kànkan xiěduìle méiyǒu.",
        vi: "Tớ tra một từ xem viết đúng chưa.",
        src: "B4 tr.51",
      },
      {
        parts: ["这个字", ""],
        answers: ["写对"],
        alts: [[]],
        py: "zhège zì xiěduì",
        vi: "chữ này viết đúng",
        src: "B4 tr.60 (mẫu thay thế)",
      },
      {
        parts: ["糟糕,", "了。"],
        answers: ["写错"],
        alts: [[]],
        py: "Zāogāo, xiěcuò le.",
        vi: "Chết rồi, viết sai rồi.",
        src: "B4 tr.51",
      },
      {
        parts: ["", "了字"],
        answers: ["写错"],
        alts: [[]],
        py: "xiěcuòle zì",
        vi: "viết sai chữ",
        src: "B4 tr.59",
      },
      {
        parts: ["我只", "了一个句子。"],
        answers: ["翻译对"],
        alts: [[]],
        py: "Wǒ zhǐ fānyìduìle yí ge jùzi.",
        vi: "Tớ chỉ dịch đúng được một câu.",
        src: "B4 tr.57",
      },
      {
        parts: ["这些句子", ""],
        answers: ["翻译对"],
        alts: [[]],
        py: "zhèxiē jùzi fānyìduì",
        vi: "những câu này dịch đúng",
        src: "B4 tr.60",
      },
      {
        parts: ["", "了"],
        answers: ["说对"],
        alts: [[]],
        py: "shuōduì le",
        vi: "nói đúng rồi",
        src: "B4 tr.59",
      },
      {
        parts: ["看你能不能", "。"],
        answers: ["答对"],
        alts: [[]],
        py: "Kàn nǐ néng bu néng dáduì.",
        vi: "Xem cậu có trả lời đúng được không.",
        src: "B4 tr.52",
      },
      {
        parts: ["问了她五个问题,她都", "了。"],
        answers: ["答对"],
        alts: [[]],
        py: "Wènle tā wǔ ge wèntí, tā dōu dáduì le.",
        vi: "Hỏi cô ấy năm câu, cô ấy đều trả lời đúng.",
        src: "B4 tr.52",
      },
      {
        parts: ["我答对了四个,", "了一个。"],
        answers: ["答错"],
        alts: [[]],
        py: "Wǒ dáduìle sì ge, dácuòle yí ge.",
        vi: "Tớ trả lời đúng bốn câu, sai một câu.",
        src: "B4 tr.53",
      },
      {
        parts: ["我", "了两道题。"],
        answers: ["答错"],
        alts: [[]],
        py: "Wǒ dácuòle liǎng dào tí.",
        vi: "Tớ trả lời sai hai câu.",
        src: "B4 tr.55",
      },
      {
        parts: ["这个问题我", "了。"],
        answers: ["回答错"],
        alts: [[]],
        py: "Zhège wèntí wǒ huídá cuò le.",
        vi: "Câu hỏi này tớ trả lời sai.",
        src: "B4 tr.64 (đáp án sửa lỗi)",
      },
      {
        parts: ["", ""],
        answers: ["回答错"],
        alts: [[]],
        py: "huídá cuò",
        vi: "trả lời sai",
        src: "B4 tr.60 (mẫu thay thế)",
      },
      {
        parts: ["我", "题了。"],
        answers: ["看错"],
        alts: [[]],
        py: "Wǒ kàncuò tí le.",
        vi: "Tớ xem nhầm đề rồi.",
        src: "B4 tr.57",
      },
      {
        parts: ["对不起,我", "时间了,所以来晚了。"],
        answers: ["看错"],
        alts: [[]],
        py: "Duìbuqǐ, wǒ kàncuò shíjiān le, suǒyǐ lái wǎn le.",
        vi: "Xin lỗi, tớ xem nhầm giờ nên đến muộn.",
        src: "B4 tr.61",
      },
      {
        parts: ["对不起,我", "了。"],
        answers: ["打错"],
        alts: [[]],
        py: "Duìbuqǐ, wǒ dǎcuò le.",
        vi: "Xin lỗi, tôi gọi nhầm.",
        src: "B4 tr.63",
      },
      {
        parts: ["", "了电话"],
        answers: ["打错"],
        alts: [[]],
        py: "dǎcuòle diànhuà",
        vi: "gọi nhầm số điện thoại",
        src: "B4 tr.59",
      },
    ],
  },
  {
    id: "s10",
    title: "熟 / 干净 (tính từ khác)",
    mean: "thuộc, thạo / sạch",
    hint: "熟",
    items: [
      {
        parts: ["这课课文", ""],
        answers: ["念熟"],
        alts: [[]],
        py: "zhè kè kèwén niànshú",
        vi: "bài khóa này đọc thuộc",
        src: "B4 tr.60 (mẫu thay thế)",
      },
      {
        parts: ["课文", "了没有?"],
        answers: ["念熟"],
        alts: [[]],
        py: "Kèwén niànshú le méiyǒu?",
        vi: "Bài khóa đọc thuộc chưa?",
        src: "B4 tr.63",
      },
      {
        parts: ["这件衣服没", "。"],
        answers: ["洗干净"],
        alts: [[]],
        py: "Zhè jiàn yīfu méi xǐ gānjìng.",
        vi: "Cái áo này giặt chưa sạch.",
        src: "B4 tr.56",
      },
    ],
  },
  {
    id: "s11",
    title: "在 zài",
    mean: "ở tại (vị trí kết quả của hành động)",
    hint: "在",
    items: [
      {
        parts: ["", "我的手提包儿里了。"],
        answers: ["放在"],
        alts: [[]],
        py: "Fàngzài wǒ de shǒutíbāor lǐ le.",
        vi: "Để trong túi xách của tớ rồi.",
        src: "B12 tr.196",
      },
      {
        parts: ["我的护照你", "哪儿了? — 就", "你的口袋里了。"],
        answers: ["放在", "放在"],
        alts: [[], []],
        py: "Wǒ de hùzhào nǐ fàngzài nǎr le? — Jiù fàngzài nǐ de kǒudài lǐ le.",
        vi: "Hộ chiếu của tớ cậu để đâu rồi? — Để trong túi áo cậu đấy.",
        src: "B12 tr.202",
      },
      {
        parts: ["", "桌子上 / ", "手提包儿里"],
        answers: ["放在", "放在"],
        alts: [[], []],
        py: "fàngzài zhuōzi shàng / fàngzài shǒutíbāor lǐ",
        vi: "đặt trên bàn / đặt trong túi xách",
        src: "B12 tr.203",
      },
      {
        parts: ["这张画儿我们", "哪儿呢? — ", "这儿吧。"],
        answers: ["挂在", "挂在"],
        alts: [[], []],
        py: "Zhè zhāng huàr wǒmen guàzài nǎr ne? — Guàzài zhèr ba.",
        vi: "Bức tranh này mình treo ở đâu nhỉ? — Treo ở đây đi.",
        src: "B12 tr.202",
      },
      {
        parts: ["", "墙上"],
        answers: ["挂在"],
        alts: [[]],
        py: "guàzài qiáng shàng",
        vi: "treo trên tường",
        src: "B12 tr.203",
      },
      {
        parts: ["", "本子上"],
        answers: ["写在"],
        alts: [[]],
        py: "xiězài běnzi shàng",
        vi: "viết vào vở",
        src: "B12 tr.203",
      },
      {
        parts: ["老师的电话号码我忘了,因为我没", "本子上。"],
        answers: ["记在"],
        alts: [[]],
        py: "Lǎoshī de diànhuà hàomǎ wǒ wàng le, yīnwèi wǒ méi jìzài běnzi shàng.",
        vi: "Số điện thoại thầy tớ quên mất vì tớ không ghi vào vở.",
        src: "B12 tr.207 (đáp án sửa lỗi)",
      },
      {
        parts: ["汽车", "楼下"],
        answers: ["停在"],
        alts: [[]],
        py: "qìchē tíngzài lóu xià",
        vi: "ô tô đỗ ở dưới tòa nhà",
        src: "B12 tr.204",
      },
      {
        parts: ["原来是他到山上去砍柴时,", "山上了。"],
        answers: ["丢在"],
        alts: [[]],
        py: "Yuánlái shì tā dào shān shàng qù kǎn chái shí, diūzài shān shàng le.",
        vi: "Hóa ra lúc ông ta lên núi đốn củi đã làm rơi ở trên núi.",
        src: "B12 tr.208",
      },
    ],
  },
  {
    id: "s12",
    title: "着 zháo",
    mean: "đạt được mục đích, có kết quả",
    hint: "着",
    items: [
      {
        parts: ["我找了半天也没", "。"],
        answers: ["找着"],
        alts: [["找到"]],
        py: "Wǒ zhǎole bàntiān yě méi zhǎozháo.",
        vi: "Tớ tìm cả buổi mà vẫn không tìm thấy.",
        src: "B12 tr.196",
      },
      {
        parts: ["我的护照你给我", "了没有?"],
        answers: ["找着"],
        alts: [["找到"]],
        py: "Wǒ de hùzhào nǐ gěi wǒ zhǎozháo le méiyǒu?",
        vi: "Hộ chiếu của tớ cậu tìm giúp được chưa?",
        src: "B12 tr.202",
      },
      {
        parts: ["你要的那本书我给你", "了。"],
        answers: ["买着"],
        alts: [["买到"]],
        py: "Nǐ yào de nà běn shū wǒ gěi nǐ mǎizháo le.",
        vi: "Cuốn sách cậu cần tớ mua được cho cậu rồi.",
        src: "B12 tr.202",
      },
      {
        parts: ["电影票你", "了吗?"],
        answers: ["买着"],
        alts: [["买到"]],
        py: "Diànyǐng piào nǐ mǎizháo le ma?",
        vi: "Vé phim cậu mua được chưa?",
        src: "B12 tr.205",
      },
      {
        parts: ["你", "了吗?"],
        answers: ["睡着"],
        alts: [[]],
        py: "Nǐ shuìzháo le ma?",
        vi: "Cậu ngủ rồi à?",
        src: "B12 tr.202",
      },
      {
        parts: ["照片你", "了没有? / 房子你", "了没有?"],
        answers: ["拿着", "租着"],
        alts: [[], []],
        py: "Zhàopiàn nǐ názháo le méiyǒu? / Fángzi nǐ zūzháo le méiyǒu?",
        vi: "Ảnh cậu lấy được chưa? / Nhà cậu thuê được chưa?",
        src: "B12 tr.204 (theo mẫu)",
      },
    ],
  },
  {
    id: "s13",
    title: "早 / 晚 zǎo / wǎn",
    mean: "sớm / muộn",
    hint: "早",
    items: [
      {
        parts: ["我没", "。"],
        answers: ["来晚"],
        alts: [[]],
        py: "Wǒ méi lái wǎn.",
        vi: "Tôi đến không muộn.",
        src: "bạn bổ sung",
      },
      {
        parts: ["你", "了没有?"],
        answers: ["来晚"],
        alts: [[]],
        py: "Nǐ lái wǎn le méiyǒu?",
        vi: "Anh đến muộn phải không?",
        src: "bạn bổ sung",
      },
      {
        parts: ["对不起,我", "了。"],
        answers: ["来晚"],
        alts: [[]],
        py: "Duìbuqǐ, wǒ lái wǎn le.",
        vi: "Xin lỗi, tôi đến muộn rồi.",
        src: "bạn bổ sung",
      },
      {
        parts: ["对不起,我看错时间了,所以", "了。"],
        answers: ["来晚"],
        alts: [[]],
        py: "Duìbuqǐ, wǒ kàncuò shíjiān le, suǒyǐ lái wǎn le.",
        vi: "Xin lỗi, tớ xem nhầm giờ nên đến muộn.",
        src: "B4 tr.61",
      },
      {
        parts: ["他没", "。"],
        answers: ["睡早"],
        alts: [[]],
        py: "Tā méi shuì zǎo.",
        vi: "Anh ấy ngủ không sớm.",
        src: "bạn bổ sung",
      },
      {
        parts: ["", "了。"],
        answers: ["起早"],
        alts: [[]],
        py: "Qǐ zǎo le.",
        vi: "Dậy sớm rồi.",
        src: "bạn bổ sung",
      },
      {
        parts: ["", "了。"],
        answers: ["睡晚"],
        alts: [[]],
        py: "Shuì wǎn le.",
        vi: "Ngủ muộn rồi.",
        src: "bạn bổ sung",
      },
    ],
  },
];

const norm = (s: string) => s.replace(/[\s,.!?;:，。！？；：、“”"']/g, "");

function isRight(input: string | undefined, item: Item, k: number) {
  const v = norm(input ?? "");
  if (!v) return false;
  return v === norm(item.answers[k]) || item.alts[k].some((a) => v === norm(a));
}

export default function ResultComplementExercise() {
  const [sectionId, setSectionId] = useState<string>(SECTIONS[0].id);
  const [showVi, setShowVi] = useState(true);
  const [showPy, setShowPy] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const section = SECTIONS.find((s) => s.id === sectionId) ?? SECTIONS[0];
  const key = (i: number, k: number) => `${section.id}-${i}-${k}`;

  const score = useMemo(() => {
    let right = 0;
    let total = 0;
    section.items.forEach((item, i) => {
      item.answers.forEach((_, k) => {
        total += 1;
        if (
          checked[`${section.id}-${i}`] &&
          isRight(values[`${section.id}-${i}-${k}`], item, k)
        )
          right += 1;
      });
    });
    return { right, total };
  }, [section, values, checked]);

  const anyChecked = section.items.some(
    (_, i) => checked[`${section.id}-${i}`],
  );

  const checkAll = () => {
    const next = { ...checked };
    section.items.forEach((_, i) => (next[`${section.id}-${i}`] = true));
    setChecked(next);
  };

  const resetSection = () => {
    const nv = { ...values };
    const nc = { ...checked };
    section.items.forEach((item, i) => {
      delete nc[`${section.id}-${i}`];
      item.answers.forEach((_, k) => delete nv[`${section.id}-${i}-${k}`]);
    });
    setValues(nv);
    setChecked(nc);
  };

  const reveal = (i: number) => {
    const item = section.items[i];
    const nv = { ...values };
    item.answers.forEach((a, k) => (nv[key(i, k)] = a));
    setValues(nv);
    setChecked({ ...checked, [`${section.id}-${i}`]: true });
  };

  return (
    <div className="zbn">
      <style>{CSS}</style>

      <header className="zbn-head">
        <h1>Điền động từ + bổ ngữ phù hợp vào chỗ trống</h1>
        <p>
          汉语教程 第二册 上, Bài 4 và Bài 12. Dịch tiếng Việt giúp bạn chọn
          đúng bổ ngữ; pinyin sẽ hiện sau khi kiểm tra.
        </p>
      </header>

      <nav className="zbn-tabs" aria-label="Chọn nhóm bài tập">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={s.id === sectionId ? "tab on" : "tab"}
            onClick={() => setSectionId(s.id)}
          >
            <span className="">{s.title.split(" (")[0]}</span>
            <span className="cnt">{s.items.length}</span>
          </button>
        ))}
      </nav>

      <div className="zbn-bar">
        <label>
          <input
            type="checkbox"
            checked={showVi}
            onChange={(e) => setShowVi(e.target.checked)}
          />{" "}
          Hiện tiếng Việt
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPy}
            onChange={(e) => setShowPy(e.target.checked)}
          />{" "}
          Hiện pinyin
        </label>
        {section.hint && (
          <label>
            <input
              type="checkbox"
              checked={showHint}
              onChange={(e) => setShowHint(e.target.checked)}
            />{" "}
            Gợi ý bổ ngữ
          </label>
        )}
        <span className="grow" />
        {anyChecked && (
          <span className="score">
            Đúng {score.right}/{score.total} chỗ trống
          </span>
        )}
        <button type="button" className="btn main" onClick={checkAll}>
          Kiểm tra
        </button>
        <button type="button" className="btn" onClick={resetSection}>
          Làm lại
        </button>
      </div>

      <section className="zbn-sec">
        <h2>
          <span className="ztai__zh text-2xl leading-[1.55]">{section.title}</span>
          <span className="mean">{section.mean}</span>
        </h2>

        <ol className="zbn-list">
          {section.items.map((item, i) => {
            const done = !!checked[`${section.id}-${i}`];
            const allRight = item.answers.every((_, k) =>
              isRight(values[key(i, k)], item, k),
            );
            return (
              <li
                key={`${section.id}-${i}`}
                className={done ? (allRight ? "it ok" : "it bad") : "it"}
              >
                <div className="line ztai__zh text-2xl leading-[1.55]">
                  {item.parts.map((p, k) => (
                    <React.Fragment key={k}>
                      <span>{p}</span>
                      {k < item.answers.length && (
                        <span className="slot">
                          <input
                            className={
                              done
                                ? isRight(values[key(i, k)], item, k)
                                  ? "inp right"
                                  : "inp wrong"
                                : "inp"
                            }
                            style={{
                              width: `${Math.max(item.answers[k].length * 1.5 + 1.2, 4.5)}em`,
                            }}
                            value={values[key(i, k)] ?? ""}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                [key(i, k)]: e.target.value,
                              })
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter")
                                setChecked({
                                  ...checked,
                                  [`${section.id}-${i}`]: true,
                                });
                            }}
                            aria-label={`Câu ${i + 1}, chỗ trống ${k + 1}`}
                            autoComplete="off"
                            spellCheck={false}
                          />
                          {showHint && section.hint && (
                            <span className="hint">{section.hint}</span>
                          )}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {showVi && <div className="vi">{item.vi}</div>}
                {(showPy || done) && <div className="ztai__py text-slate-500 dark:text-sky-300 leading-[1.45]">{item.py}</div>}

                {done && !allRight && (
                  <div className="ans">
                    Đáp án:{" "}
                    {item.answers.map((a, k) => (
                      <b key={k} className="ztai__zh text-2xl leading-[1.55]">
                        {a}
                        {item.alts[k].length > 0 && (
                          <span className="alt">
                            {" "}
                            (hoặc {item.alts[k].join(", ")})
                          </span>
                        )}
                        {k < item.answers.length - 1 ? " ; " : ""}
                      </b>
                    ))}
                  </div>
                )}

                <div className="meta">
                  <span className="src">{item.src}</span>
                  <button
                    type="button"
                    className="link"
                    onClick={() => reveal(i)}
                  >
                    Xem đáp án
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

const CSS = `
.zbn{--bg:#fff;--paper:#fff;--ink:#18212b;--mute:#5b6a78;--line:#d6dde3;--accent:#0b5c6b;--soft:#e1eef1;--py:#a2411f;--ok:#17803d;--okbg:#e6f5ea;--bad:#b42318;--badbg:#fdeceb;
  max-width:980px;margin:0 auto;padding:24px 16px 60px;color:var(--ink);background:var(--bg);
  font-family:Inter,"Segoe UI","Noto Sans","Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif;line-height:1.55;font-size:15px}
@media (prefers-color-scheme: dark){.zbn{--bg:#10161c;--paper:#171f27;--ink:#e6ebf0;--mute:#97a6b4;--line:#2b3743;--accent:#6cc4d3;--soft:#1c2c33;--py:#f0a27e;--ok:#6fd392;--okbg:#14291d;--bad:#ff8f86;--badbg:#321816}}
.zbn *{box-sizing:border-box}
.zbn .ztai__zh{font-family:"KaiTi", "STKaiti", "PingFang SC", "Songti SC", "SimSun",
    "Noto Serif CJK SC", "Noto Serif SC", serif;}
.zbn .ztai__py{color:var(--py);font-size:.93em}
.zbn-head h1{margin:0 0 4px;font-size:1.5rem}
.zbn-head p{margin:0;color:var(--mute);}
.zbn-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:18px 0 10px}
.zbn .tab{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:var(--paper);color:var(--ink);border-radius:5px;padding:4px 10px;cursor:pointer;font-size:.95em}
.zbn .tab.on{background:var(--accent);color:#fff;border-color:var(--accent)}
@media (prefers-color-scheme: dark){.zbn .tab.on{color:#0c1519}}
.zbn .tab .cnt{font-size:.78em;opacity:.8}
.zbn-bar{display:flex;flex-wrap:wrap;align-items:center;gap:14px;background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:10px 14px}
.zbn-bar label{display:inline-flex;align-items:center;gap:6px;cursor:pointer}
.zbn-bar .grow{flex:1}
.zbn .score{font-weight:600;color:var(--accent)}
.zbn .btn{border:1px solid var(--line);background:var(--paper);color:var(--ink);border-radius:5px;padding:5px 14px;cursor:pointer}
.zbn .btn.main{background:var(--accent);border-color:var(--accent);color:#fff}
@media (prefers-color-scheme: dark){.zbn .btn.main{color:#0c1519}}
.zbn button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.zbn-sec h2{margin:22px 0 10px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;font-size:1.35rem;color:var(--accent)}
.zbn-sec h2 .mean{font-size:.85rem;font-weight:500;color:var(--mute);font-family:inherit}
.zbn-list{list-style:decimal;padding-left:28px;margin:0;display:flex;flex-direction:column;gap:10px}
.zbn .it{background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:10px 14px}
.zbn .it::marker{color:var(--mute)}
.zbn .it.ok{border-color:var(--ok);background:var(--okbg)}
.zbn .it.bad{border-color:var(--bad);background:var(--badbg)}
.zbn .line{font-size:1.3em;line-height:2.1}
.zbn .slot{display:inline-flex;align-items:center;gap:4px;margin:0 3px}
.zbn .inp{font:inherit;font-size:.92em;text-align:center;border:0;border-bottom:2px solid var(--mute);background:transparent;color:var(--ink);padding:0 2px;border-radius:0}
.zbn .inp.right{border-bottom-color:var(--ok);color:var(--ok)}
.zbn .inp.wrong{border-bottom-color:var(--bad);color:var(--bad)}
.zbn .hint{font-size:.7em;color:var(--mute);border:1px solid var(--line);border-radius:3px;padding:0 5px}
.zbn .vi{color:var(--ink)}
.zbn .ans{margin-top:4px;color:var(--bad)}
.zbn .alt{font-weight:400;color:var(--mute);font-size:.85em}
.zbn .meta{display:flex;justify-content:space-between;gap:10px;margin-top:6px;align-items:center}
.zbn .src{font-size:.78em;color:var(--mute)}
.zbn .link{border:0;background:none;color:var(--accent);cursor:pointer;text-decoration:underline;font-size:.85em;padding:0}
@media (max-width:560px){.zbn{font-size:14px}.zbn .line{font-size:1.15em}}
`;
