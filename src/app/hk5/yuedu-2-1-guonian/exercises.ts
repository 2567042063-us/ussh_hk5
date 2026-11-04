import type {
  ChoiceQuestion,
  ExerciseSectionMeta,
  FillItem,
  OpenQuestion,
  TrueFalseItem,
} from "./types-lesson";

export const vocabularySectionMeta: ExerciseSectionMeta = {
  title: "(一) 根据课文内容，选择下列词语的正确解释。",
  instructionVi:
    "Dựa vào nội dung bài khóa, chọn cách giải thích đúng cho các từ ngữ sau.",
};

export const vocabularyQuestions: ChoiceQuestion[] = [
  {
    id: "v1",
    prompt: "1. 一大早",
    options: ["一个早晨", "一个上午", "很早", "很快"],
    answerIndex: 0,
  },
  {
    id: "v2",
    prompt: "2. 团聚",
    options: [
      "很多人坐成一个圆圈",
      "一家人坐成一个圆圈",
      "很多人在一起",
      "一家人在一起",
    ],
    answerIndex: 3,
  },
  {
    id: "v3",
    prompt: "3. 公婆",
    options: [
      "丈夫称呼妻子的父母",
      "妻子称呼丈夫的父母",
      "老头儿和老太太",
      "老太太",
    ],
    answerIndex: 1,
  },
  {
    id: "v4",
    prompt: "4. 年夜饭",
    options: ["晚饭", "夜里吃的饭", "大年初一的晚饭", "大年三十的晚饭"],
    answerIndex: 3,
  },
  {
    id: "v5",
    prompt: "5. 家务",
    options: ["家庭服务", "家里的活儿", "家庭服务员", "家人的工作"],
    answerIndex: 1,
  },
  {
    id: "v6",
    prompt: "6. 聊家常",
    options: [
      "讨论发生的事",
      "讨论生活中的问题",
      "谈家里发生的事",
      "谈家里的日常生活",
    ],
    answerIndex: 3,
  },
  {
    id: "v7",
    prompt: "7. 比比画画",
    options: [
      "用手做动作来帮助说话",
      "用手画儿来表示意思",
      "比较谁好谁坏",
      "比一比谁画得好",
    ],
    answerIndex: 0,
  },
  {
    id: "v8",
    prompt: "8. 哭鼻子",
    options: ["鼻子不好", "哭", "鼻子哭了", "小声地哭"],
    answerIndex: 1,
  },
  {
    id: "v9",
    prompt: "9. 欢天喜地",
    options: ["非常高兴的样子", "非常喜欢", "像喜欢天和地一样", "很喜欢的样子"],
    answerIndex: 0,
  },
  {
    id: "v10",
    prompt: "10. 团圆",
    options: [
      "大家住在一起",
      "全家人聚到了一起",
      "家人围坐成一个圆圈",
      "大家围坐在一起",
    ],
    answerIndex: 1,
  },
];

export const comprehensionSectionMeta: ExerciseSectionMeta = {
  title: "(二) 根据课文内容，选择正确答案。",
  instructionVi: "Dựa vào nội dung bài khóa, chọn đáp án đúng.",
};

export const comprehensionQuestions: ChoiceQuestion[] = [
  {
    id: "c1",
    prompt: "1. 大年三十晚上",
    promptVi: "Tối đêm giao thừa",
    options: [
      "她一个人在家",
      "她和孩子在家",
      "一家三口吃团圆饭",
      "全家人都不在家",
    ],
    answerIndex: 2,
  },
  {
    id: "c2",
    prompt: "2. 大年三十这一天孩子没有做什么？",
    promptVi: "Hôm đêm giao thừa, đứa trẻ không làm việc gì?",
    options: ["穿新衣服", "跑来跑去", "去幼儿园", "去爷爷家"],
    answerIndex: 2,
  },
  {
    id: "c3",
    prompt: "3. 每天早上她不用做什么？",
    promptVi: "Mỗi sáng cô ấy không phải làm việc gì?",
    options: ["洗衣服", "做早饭", "送孩子上幼儿园", "上班"],
    answerIndex: 0,
  },
  {
    id: "c4",
    prompt: "4. 下班以后她的第一件事是",
    promptVi: "Sau khi tan làm, việc đầu tiên của cô ấy là",
    options: ["接孩子", "买菜", "进厨房", "做晚饭"],
    answerIndex: 0,
  },
  {
    id: "c5",
    prompt: "5. 孩子每天上幼儿园是",
    promptVi: "Mỗi ngày đứa trẻ đi và về trường mẫu giáo là",
    options: ["妈妈送爸爸接", "爸爸送妈妈接", "妈妈送妈妈接", "爸爸送爸爸接"],
    answerIndex: 0,
  },
  {
    id: "c6",
    prompt: '6. "孩子也在一旁凑热闹"，意思是：孩子',
    promptVi: '"Đứa trẻ cũng góp vui bên cạnh" có nghĩa là: đứa trẻ',
    options: [
      "在旁边看她和丈夫聊家常",
      "给他们添麻烦",
      "也和他们一起聊天儿",
      "走过来听他们说什么",
    ],
    answerIndex: 2,
  },
  {
    id: "c7",
    prompt: "7. 他们什么时候去公婆家？",
    promptVi: "Khi nào họ đến nhà bố mẹ chồng?",
    options: ["一大早", "做完家务以后", "丈夫下班以后", "晚上"],
    answerIndex: 2,
  },
];

export const trueFalseSectionMeta: ExerciseSectionMeta = {
  title: "(三) 根据课文内容，判断正误。",
  instructionVi: "Dựa vào nội dung bài khóa, xác định đúng hay sai.",
};

export const trueFalseItems: TrueFalseItem[] = [
  {
    id: "t1",
    statement: "孩子跑来跑去，所以很兴奋。",
    statementVi: "Đứa trẻ chạy nhảy nên rất hào hứng.",
    answer: true,
  },
  {
    id: "t2",
    statement: "她是一位家庭妇女，每天只是在家做家务。",
    statementVi: "Cô ấy là một người nội trợ, mỗi ngày chỉ ở nhà làm việc nhà.",
    answer: false,
  },
  {
    id: "t3",
    statement: "她丈夫工作总是很忙。",
    statementVi: "Chồng cô ấy làm việc rất bận.",
    answer: true,
  },
  {
    id: "t4",
    statement: "丈夫从来不帮妻子做家务。",
    statementVi: "Người chồng không bao giờ giúp vợ làm việc nhà.",
    answer: false,
  },
  {
    id: "t5",
    statement: "吃晚饭时，他们常常一边吃饭一边聊天儿。",
    statementVi: "Khi ăn tối, họ thường vừa ăn vừa trò chuyện.",
    answer: true,
  },
  {
    id: "t6",
    statement: "他们的孩子名字叫冬冬。",
    statementVi: "Con của họ tên là Đông Đông.",
    answer: false,
  },
  {
    id: "t7",
    statement: "夫妻俩哈哈大笑是因为幼儿园很有意思。",
    statementVi: "Hai vợ chồng cười ha hả vì trường mẫu giáo rất thú vị.",
    answer: false,
  },
  {
    id: "t8",
    statement: "过年了，全家人都穿得很漂亮。",
    statementVi: "Đón Tết, cả nhà đều ăn mặc rất đẹp.",
    answer: true,
  },
  {
    id: "t9",
    statement: "婆家的人不太多。",
    statementVi: "Nhà chồng không đông người.",
    answer: false,
  },
  {
    id: "t10",
    statement: "大年三十，人们喜欢回到父母身边吃晚饭。",
    statementVi: "Đêm giao thừa, mọi người thích về bên cha mẹ ăn cơm tối.",
    answer: true,
  },
];

export const fillSectionMeta: ExerciseSectionMeta = {
  title: "(四) 根据课文内容填空。",
  instructionVi: "Dựa vào nội dung bài khóa, điền vào chỗ trống.",
};

export const fillItems: FillItem[] = [
  {
    id: "f1",
    template: "1. 她去____给公婆买礼物。",
    templateVi: "Cô ấy đi ____ mua quà cho bố mẹ chồng.",
    answers: ["超市"],
  },
  {
    id: "f2",
    template: "2. 孩子穿着____漂亮的新衣服，在妈妈身边跑____跑____。",
    templateVi:
      "Đứa trẻ mặc ____ bộ quần áo mới đẹp, chạy ____ chạy ____ bên mẹ.",
    answers: ["一身", "来", "去"],
  },
  {
    id: "f3",
    template: "3. 大部分家务事，比如____、____、____、____，都是她做。",
    templateVi:
      "Phần lớn việc nhà, ví dụ ____, ____, ____, ____, đều do cô ấy làm.",
    answers: ["买菜", "做饭", "洗衣服", "照顾孩子"],
  },
  {
    id: "f4",
    template: "4. 孩子____的话语和____的神态，常常____夫妻俩哈哈大笑。",
    templateVi:
      "Lời nói ____ và vẻ mặt ____ của đứa trẻ thường ____ hai vợ chồng cười ha hả.",
    answers: ["天真", "认真", "逗得"],
  },
  {
    id: "f5",
    template: "5. 在婆家，____十几口人围坐在一起吃团圆饭。",
    templateVi:
      "Ở nhà chồng, ____ hơn mười người ngồi quây quần ăn cơm sum họp.",
    answers: ["老少三代"],
  },
];

export const openSectionMeta: ExerciseSectionMeta = {
  title: "(五) 回答问题。",
  instructionVi:
    "Trả lời câu hỏi theo nội dung bài khóa, sau đó xem đáp án mẫu để so sánh.",
};

export const openQuestions: OpenQuestion[] = [
  {
    id: "o1",
    prompt: "1. 为什么她和家人要在大年三十这一天去公婆家？",
    promptVi:
      "Vì sao cô ấy và gia đình phải đến nhà bố mẹ chồng vào đêm giao thừa?",
    sampleAnswer:
      "因为过年时所有人都要回到父母身边，一家人团聚在一起，所以今天晚上她们一家三口要回公婆家吃年夜饭。",
    sampleAnswerVi:
      "Vì khi đón Tết, mọi người đều phải trở về bên cha mẹ, cả nhà sum họp, nên tối nay gia đình ba người họ về nhà bố mẹ chồng ăn cơm tất niên.",
  },
  {
    id: "o2",
    prompt: "2. 她每天都要做什么事？",
    promptVi: "Mỗi ngày cô ấy phải làm những việc gì?",
    sampleAnswer:
      "她每天要买菜、做饭、洗衣服、照顾孩子，还要送孩子去幼儿园，接孩子回家。",
    sampleAnswerVi:
      "Mỗi ngày cô ấy phải mua rau, nấu cơm, giặt quần áo, chăm sóc con, còn phải đưa con đi mẫu giáo và đón con về nhà.",
  },
  {
    id: "o3",
    prompt: "3. 平时孩子白天在哪儿？",
    promptVi: "Thường ngày ban ngày đứa trẻ ở đâu?",
    sampleAnswer: "平时孩子白天在幼儿园。",
    sampleAnswerVi: "Thường ngày ban ngày đứa trẻ ở trường mẫu giáo.",
  },
  {
    id: "o4",
    prompt: "4. 她对自己的家庭生活满意吗？",
    promptVi: "Cô ấy có hài lòng với cuộc sống gia đình của mình không?",
    sampleAnswer: "满意。课文中一家人互相帮助，吃晚饭时聊天说笑，生活很愉快。",
    sampleAnswerVi:
      "Có. Trong bài, cả nhà giúp đỡ nhau, bữa tối trò chuyện vui cười, cuộc sống rất hạnh phúc.",
  },
];
