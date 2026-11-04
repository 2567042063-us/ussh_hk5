"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

import { ExercisesView } from "@shared/components/yuedu/exercises/ExercisesView21";
import { LessonNav } from "@shared/components/yuedu/LessonNav";
import type { DisplayOptions } from "@shared/types/yuedu-display";

import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function Page() {
  const [display, setDisplay] = useState<DisplayOptions>({
    showPinyin: true,
    showVietnamese: true,
  });

  return (
    <div className="flex min-h-screen flex-col items-center dark:bg-slate-800">
      <Header title="hk5" canonical="https://ussh-hk5-neon.vercel.app/hk5" />
      <div className="flex-1">
        <Link
          href="/hk5/yuedu-2-1-guonian"
          className="inline-block text-sky-700 hover:text-primary dark:text-sky-400 dark:hover:text-primary-dark"
        >
          <span className="flex flex-1 items-center justify-center">
            <MoveLeft className="mr-2 h-4 w-4" /> ٩(｡•ㅅ•｡)و trở về bài học
          </span>
        </Link>

        <LessonNav
          showPinyin={display.showPinyin}
          showVietnamese={display.showVietnamese}
          onDisplayChange={setDisplay}
        />
        <main className="mx-auto max-w-4xl">
          <section className="mt-4 rounded-sm bg-stone-50 p-4 md:p-6">
            <p className="ztai__zh text-center text-3xl text-sky-700">
              一、过年
            </p>
            <div className="ztai__zh space-y-2">
              <p className="font-chinese text-lg md:text-xl">
                今天是大年三十。一大早她就开始忙起来。整理房间，去超市给公婆买礼物。孩子穿着一身漂亮的新衣服，在她身边跑来跑去，非常兴奋地等待着。
              </p>
              <p className="font-chinese text-lg md:text-xl">
                在中国，过年时所有的人都要回到父母身边，一家人团聚在一起。所以，今天晚上他们一家三口要回公婆家去吃年夜饭。
              </p>
              <p className="font-chinese text-lg md:text-xl">
                平时她的丈夫工作很忙，买菜、做饭、洗衣服、照顾孩子等家务大部分是她做。每天早上给一家人准备好简单的早饭，然后送孩子去幼儿园，送完孩子自己才去上班。晚上下了班，先把孩子接回家，然后马上进厨房做晚饭。有时丈夫会在一旁帮助她。吃晚饭是一家人最愉快的时候。她和丈夫聊家常，谈论各自单位里的新闻。孩子也在一旁凑热闹，比比画画地给爸爸妈妈讲幼儿园里发生的事情：那个叫丽丽的小朋友哭鼻子了，冬冬又打架了&hellip;&hellip;孩子天真的话语和认真的神态，常常逗得夫妻俩哈哈大笑。
              </p>
              <p className="font-chinese text-lg md:text-xl">
                下午四点多，丈夫下班回家了。一家人穿戴整齐，欢天喜地地出了门。在婆家，老少三代十几口人围坐在一张大圆桌旁，一边看中央电视台的&ldquo;春节联欢晚会&rdquo;，一边热热闹闹地吃团圆饭过年。
              </p>
            </div>
            <p className="mt-2 text-right text-sm text-stone-500">(427 chữ)</p>
          </section>
          <ExercisesView showVietnamese={display.showVietnamese} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
