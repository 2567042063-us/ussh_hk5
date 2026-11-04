import type {
  ChoiceQuestion,
  ExerciseSectionMeta,
  OpenQuestion,
  TrueFalseItem,
} from "@shared/types/yuedu-lesson";

export const vocabularySectionMeta: ExerciseSectionMeta = {
  title: "(一) 根据课文内容，选择下列词语的正确解释。",
  instructionVi:
    "Dựa vào nội dung bài khóa, chọn cách giải thích đúng cho các từ ngữ sau.",
};

export const vocabularyQuestions: ChoiceQuestion[] = [
  {
    id: "v1",
    prompt: "1. 走亲戚",
    options: [
      "走到亲戚那儿",
      "亲戚们走来走去",
      "亲戚到自己家里来",
      "亲戚之间互相拜访",
    ],
    answerIndex: 3,
  },
  {
    id: "v2",
    prompt: "2. 一时半会儿",
    options: ["短时间内", "一会儿的一半", "一定的时间", "一个半小时"],
    answerIndex: 0,
  },
  {
    id: "v3",
    prompt: "3. 老家",
    options: ["很老的家", "故乡", "有老人的家", "农村"],
    answerIndex: 1,
  },
  {
    id: "v4",
    prompt: "4. 列",
    options: ["写", "解释", "算", "介绍"],
    answerIndex: 3,
  },
  {
    id: "v5",
    prompt: "5. 好家伙",
    options: ["很好的家", "很好的人", "表示吃惊", "表示赞扬"],
    answerIndex: 2,
  },
  {
    id: "v6",
    prompt: "6. 走动",
    options: ["走路运动", "互相来往", "访问", "走路"],
    answerIndex: 1,
  },
  {
    id: "v7",
    prompt: "7. 显示",
    options: ["看出来", "说出", "明白", "表现"],
    answerIndex: 3,
  },
  {
    id: "v8",
    prompt: "8. 抱怨",
    options: ["心中生气", "表示不满", "觉得麻烦", "很讨厌"],
    answerIndex: 1,
  },
  {
    id: "v9",
    prompt: "9. 亲亲热热",
    options: ["亲自表示热情", "亲人们很热情", "很热情的样子", "离得很近的样子"],
    answerIndex: 2,
  },
  {
    id: "v10",
    prompt: "10. 惊叹",
    options: ["吃惊地感叹", "害怕地叹气", "大声地喊", "很感动"],
    answerIndex: 0,
  },
];

export const comprehensionSectionMeta: ExerciseSectionMeta = {
  title: "(二) 根据课文内容，选择正确答案。",
  instructionVi: "Dựa vào nội dung bài khóa, chọn đáp án đúng.",
};

export const comprehensionQuestions: ChoiceQuestion[] = [
  {
    id: "c1",
    prompt: "1. 为什么我要给媳妇画一张图？",
    promptVi: "Vì sao tôi phải vẽ một bức sơ đồ cho vợ?",
    options: [
      "媳妇听不清楚我讲的话",
      "我说不清楚我家的亲戚关系",
      "媳妇搞不清楚我家的亲戚关系",
      "为了让媳妇知道亲戚的名字",
    ],
    answerIndex: 2,
  },
  {
    id: "c2",
    prompt: '2. "亲戚亲戚，只有走动才能显示出"亲"来"意思是',
    promptVi:
      '"Họ hàng, họ hàng, chỉ có qua lại thăm hỏi mới thể hiện được chữ thân" có nghĩa là',
    options: [
      "只有互相来往才能成为亲戚",
      "经常来往才能保持较好的亲戚关系",
      "亲戚和亲戚必须互相来往",
      "因为经常来往所以是亲戚",
    ],
    answerIndex: 1,
  },
  {
    id: "c3",
    prompt: '3. "走东家串西家"的意思是',
    promptVi: '"Đi thăm hết nhà này đến nhà khác" có nghĩa là',
    options: [
      "先去住在东边的人家，再去住在西边的人家",
      "去住在东边和西边的人家拜访",
      "从东边的人家走到西边的人家",
      "从这一家走到那一家",
    ],
    answerIndex: 3,
  },
  {
    id: "c4",
    prompt: "4. 为什么我和媳妇要去走亲戚？",
    promptVi: "Vì sao tôi và vợ phải đi thăm họ hàng?",
    options: [
      "亲戚们请我们去",
      "我喜欢去亲戚家",
      "我媳妇喜欢去亲戚家",
      "过年的时候应该去向亲戚们拜年",
    ],
    answerIndex: 3,
  },
  {
    id: "c5",
    prompt: "5. 我们什么时候开始走亲戚？",
    promptVi: "Chúng tôi bắt đầu đi thăm họ hàng từ khi nào?",
    options: ["大年三十", "大年初一", "大年初二", "每天"],
    answerIndex: 1,
  },
  {
    id: "c6",
    prompt: "6. 我媳妇害怕什么？",
    promptVi: "Vợ tôi sợ điều gì?",
    options: [
      "每天都要去走亲戚",
      "太累了",
      "有人和她聊家常",
      "不知道怎么称呼对方",
    ],
    answerIndex: 3,
  },
  {
    id: "c7",
    prompt: "7. 为什么有的人在我的图里找不到？",
    promptVi: "Vì sao có người không tìm thấy trong sơ đồ của tôi?",
    options: [
      "我不认识那个人",
      "我忘了那个人",
      "那个人不是我们的亲戚",
      "那个人不是我们直接的亲戚",
    ],
    answerIndex: 3,
  },
];

export const trueFalseSectionMeta: ExerciseSectionMeta = {
  title: "(三) 根据课文内容，判断正误。",
  instructionVi: "Dựa vào nội dung bài khóa, xác định đúng hay sai.",
};

export const trueFalseItems: TrueFalseItem[] = [
  {
    id: "t1",
    statement: "农村的一个特点就是亲戚多。",
    statementVi: "Một đặc điểm của nông thôn là họ hàng nhiều.",
    answer: true,
  },
  {
    id: "t2",
    statement: "我是农村人，媳妇是城里人。",
    statementVi: "Tôi là người nông thôn, vợ tôi là người thành phố.",
    answer: true,
  },
  {
    id: "t3",
    statement: "我给媳妇画的图里列出了我所有的亲戚。",
    statementVi: "Sơ đồ tôi vẽ cho vợ liệt kê hết tất cả họ hàng của tôi.",
    answer: false,
  },
  {
    id: "t4",
    statement: "我家有一百多个直接的亲戚。",
    statementVi: "Nhà tôi có hơn một trăm người họ hàng trực hệ.",
    answer: false,
  },
  {
    id: "t5",
    statement: "在农村，亲戚的亲戚都是亲戚。",
    statementVi: "Ở nông thôn, họ hàng của họ hàng đều là họ hàng.",
    answer: true,
  },
  {
    id: "t6",
    statement: "我媳妇比较了解我家的亲戚。",
    statementVi: "Vợ tôi hiểu rõ họ hàng nhà tôi hơn.",
    answer: false,
  },
  {
    id: "t7",
    statement: "我媳妇喜欢到处去走亲戚。",
    statementVi: "Vợ tôi thích đi thăm họ hàng khắp nơi.",
    answer: false,
  },
  {
    id: "t8",
    statement: "有时我媳妇不认识和她说话的亲戚。",
    statementVi:
      "Đôi khi vợ tôi không nhận ra người họ hàng đang nói chuyện với cô.",
    answer: true,
  },
  {
    id: "t9",
    statement: "我媳妇害怕和别人谈话。",
    statementVi: "Vợ tôi sợ nói chuyện với người khác.",
    answer: false,
  },
  {
    id: "t10",
    statement: "所有的中国人都是亲戚。",
    statementVi: "Mọi người Trung Quốc đều là họ hàng.",
    answer: false,
  },
];

export const openSectionMeta: ExerciseSectionMeta = {
  title: "(四) 回答问题。",
  instructionVi:
    "Trả lời câu hỏi theo nội dung bài khóa, sau đó xem đáp án mẫu để so sánh.",
};

export const openQuestions: OpenQuestion[] = [
  {
    id: "o1",
    prompt: "1. 我知道我家有多少亲戚吗？",
    promptVi: "Tôi có biết nhà mình có bao nhiêu họ hàng không?",
    sampleAnswer: "不知道。我一时半会儿也数不清。",
    sampleAnswerVi: "Không biết. Tôi nhất thời cũng không đếm xuể.",
  },
  {
    id: "o2",
    prompt: "2. 城里人有没有那么多亲戚？",
    promptVi: "Người thành phố có nhiều họ hàng như vậy không?",
    sampleAnswer: "没有。课文说“我们农村别的没有，就是亲戚多”。",
    sampleAnswerVi:
      "Không. Bài viết: “Nhà chúng tôi ở nông thôn, thứ gì cũng không có, chỉ có họ hàng là nhiều”.",
  },
  {
    id: "o3",
    prompt: "3. 我给媳妇画了一张什么图？",
    promptVi: "Tôi đã vẽ cho vợ một bức sơ đồ gì?",
    sampleAnswer: "我把我的亲戚关系列出来的图。",
    sampleAnswerVi: "Sơ đồ liệt kê quan hệ họ hàng của tôi.",
  },
  {
    id: "o4",
    prompt: "4. 我媳妇了解农村的亲戚关系吗？",
    promptVi: "Vợ tôi có hiểu quan hệ họ hàng ở nông thôn không?",
    sampleAnswer: "不太了解。她搞不清楚，也不知道怎么称呼对方。",
    sampleAnswerVi:
      "Không hiểu lắm. Cô ấy không phân biệt được và không biết xưng hô với đối phương thế nào.",
  },
  {
    id: "o5",
    prompt: "5. 在农村，过年最重要的活动是什么？",
    promptVi: "Ở nông thôn, hoạt động quan trọng nhất trong dịp Tết là gì?",
    sampleAnswer: "走亲戚。",
    sampleAnswerVi: "Đi thăm họ hàng.",
  },
];
