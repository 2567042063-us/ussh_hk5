import LessonLayout from "../../LessonLayout";
import { lesson03 } from "../../lessons/lesson03";

export function generateMetadata() {
  return { title: "GTHN q5 - Bài 03 - 练习-词语" };
}

export default function Page() {
  return (
    <LessonLayout lesson={lesson03}>
      <main className="px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-3">
        <div className="inline-flex items-center gap-3 rounded-sm bg-stone-200 px-3 py-1.5">
          <span className="ztai__zh text-stone-600">五</span>
          <span className="rounded bg-stone-500 px-2 py-0.5 text-white">
            <span className="ztai__zh">词语</span>{" "}
            <span className="text-sm">Cíyǔ</span>{" "}
            <span className="text-sm">Read out the following phrases</span>
          </span>
        </div>

        <section className="mt-3">
          <table className="ztai__table w-full border-collapse text-left">
            <tbody className="divide-y divide-stone-200">
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">大部分</p>
                  <p className="ztai__py text-sm text-stone-500">dà bùfen</p>
                  <p className="mt-1 text-sm">phần lớn</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">一部分</p>
                  <p className="ztai__py text-sm text-stone-500">yí bùfen</p>
                  <p className="mt-1 text-sm">một phần</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">部分地区</p>
                  <p className="ztai__py text-sm text-stone-500">bùfen dìqū</p>
                  <p className="mt-1 text-sm">một số khu vực</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">部分学校</p>
                  <p className="ztai__py text-sm text-stone-500">
                    bùfen xuéxiào
                  </p>
                  <p className="mt-1 text-sm">một số trường học</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">充满信心</p>
                  <p className="ztai__py text-sm text-stone-500">
                    chōngmǎn xìnxīn
                  </p>
                  <p className="mt-1 text-sm">tràn đầy tự tin</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">充满希望</p>
                  <p className="ztai__py text-sm text-stone-500">
                    chōngmǎn xīwàng
                  </p>
                  <p className="mt-1 text-sm">tràn đầy hy vọng</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">充满欢乐</p>
                  <p className="ztai__py text-sm text-stone-500">
                    chōngmǎn huānlè
                  </p>
                  <p className="mt-1 text-sm">tràn đầy niềm vui</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">充满感情</p>
                  <p className="ztai__py text-sm text-stone-500">
                    chōngmǎn gǎnqíng
                  </p>
                  <p className="mt-1 text-sm">tràn đầy tình cảm</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">显得很轻松</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiǎnde hěn qīngsōng
                  </p>
                  <p className="mt-1 text-sm">trông rất thoải mái</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">显得很高兴</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiǎnde hěn gāoxìng
                  </p>
                  <p className="mt-1 text-sm">trông rất vui</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">显得很愉快</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiǎnde hěn yúkuài
                  </p>
                  <p className="mt-1 text-sm">trông rất vui vẻ</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">显得很失望</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiǎnde hěn shīwàng
                  </p>
                  <p className="mt-1 text-sm">trông rất thất vọng</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">向往北京</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiàngwǎng Běijīng
                  </p>
                  <p className="mt-1 text-sm">khao khát được đến Bắc Kinh</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">向往幸福生活</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiàngwǎng xìngfú shēnghuó
                  </p>
                  <p className="mt-1 text-sm">khao khát cuộc sống hạnh phúc</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">向往美好爱情</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiàngwǎng měihǎo àiqíng
                  </p>
                  <p className="mt-1 text-sm">khao khát tình yêu đẹp</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">向往美好未来</p>
                  <p className="ztai__py text-sm text-stone-500">
                    xiàngwǎng měihǎo wèilái
                  </p>
                  <p className="mt-1 text-sm">khao khát tương lai tươi đẹp</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">数得上</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shǔ de shàng
                  </p>
                  <p className="mt-1 text-sm">đáng kể, kể ra được</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">数不上</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shǔ bu shàng
                  </p>
                  <p className="mt-1 text-sm">không đáng kể</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">数他最高</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shǔ tā zuì gāo
                  </p>
                  <p className="mt-1 text-sm">tính ra anh ấy cao nhất</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">数玛丽考得好</p>
                  <p className="ztai__py text-sm text-stone-500">
                    shǔ Mǎlì kǎo de hǎo
                  </p>
                  <p className="mt-1 text-sm">tính ra Mary thi tốt nhất</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">美丽的姑娘</p>
                  <p className="ztai__py text-sm text-stone-500">
                    měilì de gūniang
                  </p>
                  <p className="mt-1 text-sm">cô gái xinh đẹp</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">美丽的地方</p>
                  <p className="ztai__py text-sm text-stone-500">
                    měilì de dìfang
                  </p>
                  <p className="mt-1 text-sm">nơi đẹp</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">美丽的景色</p>
                  <p className="ztai__py text-sm text-stone-500">
                    měilì de jǐngsè
                  </p>
                  <p className="mt-1 text-sm">cảnh sắc đẹp</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">美丽的故事</p>
                  <p className="ztai__py text-sm text-stone-500">
                    měilì de gùshi
                  </p>
                  <p className="mt-1 text-sm">câu chuyện đẹp</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">多么热情</p>
                  <p className="ztai__py text-sm text-stone-500">
                    duōme rèqíng
                  </p>
                  <p className="mt-1 text-sm">nhiệt tình biết bao</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">多么美好</p>
                  <p className="ztai__py text-sm text-stone-500">
                    duōme měihǎo
                  </p>
                  <p className="mt-1 text-sm">tốt đẹp biết bao</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">多么善良</p>
                  <p className="ztai__py text-sm text-stone-500">
                    duōme shànliáng
                  </p>
                  <p className="mt-1 text-sm">lương thiện biết bao</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">多么勤劳</p>
                  <p className="ztai__py text-sm text-stone-500">
                    duōme qínláo
                  </p>
                  <p className="mt-1 text-sm">chăm chỉ biết bao</p>
                </td>
              </tr>
              <tr className="divide-x divide-stone-200">
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">热爱和平</p>
                  <p className="ztai__py text-sm text-stone-500">
                    {`rè'ài`} hépíng
                  </p>
                  <p className="mt-1 text-sm">yêu hòa bình</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">热爱工作</p>
                  <p className="ztai__py text-sm text-stone-500">
                    {`rè'ài`} gōngzuò
                  </p>
                  <p className="mt-1 text-sm">yêu công việc</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">热爱祖国</p>
                  <p className="ztai__py text-sm text-stone-500">
                    {`rè'ài`} zǔguó
                  </p>
                  <p className="mt-1 text-sm">yêu Tổ quốc</p>
                </td>
                <td className="w-1/4 px-4 py-3 align-top">
                  <p className="ztai__zh text-xl">热爱人民</p>
                  <p className="ztai__py text-sm text-stone-500">
                    {`rè'ài`} rénmín
                  </p>
                  <p className="mt-1 text-sm">yêu nhân dân</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </LessonLayout>
  );
}
