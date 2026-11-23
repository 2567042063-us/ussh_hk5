export type PassageSegment =
  string | { text: string; kind: "bnxh" | "bnkq" | "object" };
export type ExerciseSegment = string | { answer: string };
export type Exercise = {
  segments: ExerciseSegment[];
  hint: string;
};

/** Bổ ngữ xu hướng (vàng) */
const bnxh = (text: string): PassageSegment => ({ text, kind: "bnxh" });
/** Bổ ngữ kết quả (lime-500) */
const bnkq = (text: string): PassageSegment => ({ text, kind: "bnkq" });
/** Tân ngữ nằm giữa bổ ngữ xu hướng (viền) */
const between = (text: string): PassageSegment => ({ text, kind: "object" });
const blank = (answer: string): ExerciseSegment => ({ answer });

export const passage: PassageSegment[][] = [
  [
    "星期天,我和麦克一起骑车到图书城去买书。图书城离我们学校比较远。那天刮风,我们骑了一个多小时才",
    bnkq("骑到"),
    "。图书城很大,里边有很多书店。每个书店我们都想",
    bnxh("进去"),
    "看看。我们从一个书店",
    bnxh("走出来"),
    ",又",
    bnxh("走进"),
    "另一个书店。",
    bnkq("看到"),
    "书店里有各种各样的书,我很兴奋。从这个书架上",
    bnxh("拿下来"),
    "一本看看,再",
    bnxh("放上去"),
    ",又从另一个书架上",
    bnxh("抽出来"),
    "一本看看。我挑了几本历史书,麦克选了一些中文小说儿。快放寒假了,我们都想买一些书",
    bnxh("带回"),
    between("国"),
    bnxh("去"),
    "。",
  ],
  [
    "除了买书以外,我们还想买一些小礼品,",
    bnxh("带回去"),
    "送朋友。于是我们又",
    bnxh("走进"),
    between("一家商场"),
    bnxh("去"),
    "。",
  ],
  [
    "这家商场里边什么商品都有。我买了一些京剧脸谱的小饰物,还买了一些丝织品。麦克买了很多漂亮的钥匙链儿,还买了不少小玩具,有小熊猫、小汽车什么的。他说,这些玩具",
    bnxh("带回去"),
    "送给小朋友们,他们肯定喜欢。",
  ],
  [
    "售货员看我们买的东西多,不好拿,就给我们一人找了一个小纸箱。我们买的书和礼品正好都能",
    bnxh("放进去"),
    "。",
  ],
  [
    "从商场",
    bnxh("出来"),
    ",已经十二点多了。我和麦克",
    bnxh("走进"),
    between("一个小饭馆儿"),
    bnxh("去"),
    "吃午饭。我们要了一盘饺子和几个菜,吃得很舒服。",
  ],
  [
    bnkq("吃完"),
    "饭,我们就",
    bnxh("骑"),
    "车",
    bnxh("回来"),
    "了。",
    bnkq("回到"),
    "学校,我又累又困,想赶快",
    bnkq("回到"),
    between("宿舍"),
    bnxh("去"),
    "洗个澡,休息休息。我从车上",
    bnxh("拿下"),
    "小纸箱。",
    bnxh("走进"),
    between("楼"),
    bnxh("来"),
    ",",
    bnkq("看见"),
    "电梯门口贴了张通知:“电梯维修,请走楼梯。”我住十层,没办法,只好",
    bnxh("爬上去"),
    "。我手里提着一箱子东西,一步一步地往上爬。爬了半天才",
    bnkq("爬到"),
    "十层。到了门口,我",
    bnxh("放下"),
    "箱子,要",
    bnxh("拿出"),
    "钥匙开门的时候,却发现钥匙不见了,找了半天也没有",
    bnkq("找到"),
    "。啊!我忽然",
    bnxh("想起来"),
    "了,钥匙还在楼下自行车上插着呢,我忘",
    bnxh("拔下来"),
    "了。这时,我真是哭笑不得。",
  ],
  [
    "我刚要",
    bnxh("跑下"),
    between("楼"),
    bnxh("去"),
    ",就",
    bnkq("看见"),
    "麦克也",
    bnxh("爬上来"),
    "了,他手里拿的正是我的那串儿钥匙。",
  ],
];

export const exercises: Exercise[] = [
  {
    segments: ["每个书店我们都想", blank("进去"), "看看。"],
    hint: "đi vào (ra xa người nói)",
  },
  {
    segments: [
      "我们从一个书店",
      blank("走出来"),
      ",又",
      blank("走进"),
      "另一个书店。",
    ],
    hint: "đi ra (về phía người nói) / đi vào",
  },
  {
    segments: [
      "从这个书架上",
      blank("拿下来"),
      "一本看看,再",
      blank("放上去"),
      ",又从另一个书架上",
      blank("抽出来"),
      "一本看看。",
    ],
    hint: "lấy xuống / đặt lên / rút ra",
  },
  {
    segments: ["我们都想买一些书", blank("带回"), "国", blank("去"), "。"],
    hint: "mang về (nước), hướng đi xa người nói",
  },
  {
    segments: ["我们还想买一些小礼品,", blank("带回去"), "送朋友。"],
    hint: "mang về",
  },
  {
    segments: ["于是我们又", blank("走进"), "一家商场", blank("去"), "。"],
    hint: "đi vào (tân ngữ nơi chốn chen giữa)",
  },
  {
    segments: ["这些玩具", blank("带回去"), "送给小朋友们。"],
    hint: "mang về",
  },
  {
    segments: ["我们买的书和礼品正好都能", blank("放进去"), "。"],
    hint: "đặt vào trong",
  },
  {
    segments: ["从商场", blank("出来"), ",已经十二点多了。"],
    hint: "ra (về phía người nói)",
  },
  {
    segments: [
      "我和麦克",
      blank("走进"),
      "一个小饭馆儿",
      blank("去"),
      "吃午饭。",
    ],
    hint: "đi vào",
  },
  {
    segments: ["吃完饭,我们就骑车", blank("回来"), "了。"],
    hint: "quay về (về phía người nói)",
  },
  {
    segments: ["我从车上", blank("拿下"), "小纸箱。"],
    hint: "lấy xuống",
  },
  {
    segments: [
      "",
      blank("走进"),
      "楼",
      blank("来"),
      ",看见电梯门口贴了张通知。",
    ],
    hint: "đi vào (người nói ở trong tòa nhà)",
  },
  {
    segments: ["电梯维修,没办法,只好", blank("爬上去"), "。"],
    hint: "leo lên (ra xa người nói)",
  },
  {
    segments: ["我放下箱子,要", blank("拿出"), "钥匙开门的时候,……"],
    hint: "lấy ra",
  },
  {
    segments: ["啊!我忽然", blank("想起来"), "了。"],
    hint: "nhớ ra (nghĩa mở rộng)",
  },
  {
    segments: ["钥匙还插着呢,我忘", blank("拔下来"), "了。"],
    hint: "rút xuống / nhổ ra",
  },
  {
    segments: [
      "我刚要",
      blank("跑下"),
      "楼",
      blank("去"),
      ",就看见麦克也",
      blank("爬上来"),
      "了。",
    ],
    hint: "chạy xuống / leo lên (về phía người nói)",
  },
];

export const compoundExercises: Exercise[] = [
  {
    segments: [
      "我们爬了半个多小时,才爬",
      blank("上来"),
      ",往山下一看,风景漂亮极了。",
    ],
    hint: "người nói đang ở trên đỉnh núi",
  },
  {
    segments: ["小心点儿,别掉", blank("下去"), "。"],
    hint: "rơi xuống, ra xa người nói",
  },
  {
    segments: ["她不小心,从楼梯上摔", blank("下来"), ",腿摔坏了。"],
    hint: "ngã xuống",
  },
  {
    segments: ["太累了,我们找个地方,坐", blank("下来"), "休息一会儿吧。"],
    hint: "ngồi xuống",
  },
  {
    segments: [
      "我看见前边走",
      blank("来"),
      "一个人,就走",
      blank("过去"),
      "问她去图书城怎么走。",
    ],
    hint: "đi tới (về phía mình) / đi sang (chỗ người đó)",
  },
  {
    segments: ["你别下来了,我给你拿", blank("上去"), "。"],
    hint: "người nói ở dưới, mang lên",
  },
  {
    segments: [
      "她从口袋里拿",
      blank("出来"),
      "一个钱包儿,又从钱包儿里拿",
      blank("出来"),
      "三千块钱,放在我手里,说:“快给你妈妈寄",
      blank("回去"),
      "吧,看病要紧。”",
    ],
    hint: "lấy ra / lấy ra / gửi về",
  },
  {
    segments: [
      "“救命啊!有人掉",
      blank("进"),
      "水里",
      blank("去"),
      "了!”听见喊声,他很快脱下上衣,跑了",
      blank("过去"),
      "。人们看见他跳",
      blank("下"),
      "水",
      blank("去"),
      ",向那个孩子游了",
      blank("过去"),
      "。",
    ],
    hint: "rơi xuống nước / chạy tới / nhảy xuống / bơi tới",
  },
];
