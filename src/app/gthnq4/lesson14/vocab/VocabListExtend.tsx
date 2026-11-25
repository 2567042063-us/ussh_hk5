export default function VocabListExtend() {
  return (
    <section>
      <h2 className="mb-3 text-lg text-stone-800 dark:text-stone-100">
        So sánh từ dễ nhầm
      </h2>
      <div className="overflow-x-auto rounded-sm border border-stone-200 dark:border-stone-700">
        <table className="min-w-208 w-full border-collapse text-left text-sm text-stone-700 dark:text-stone-200">
          <thead className="bg-stone-100 text-stone-800 dark:bg-stone-700 dark:text-stone-100">
            <tr className="divide-x divide-stone-200 dark:divide-stone-600">
              <th className="border-b border-stone-200 px-4 py-3 dark:border-stone-600">
                Từ
              </th>
              <th className="border-b border-stone-200 px-4 py-3 dark:border-stone-600">
                Pinyin
              </th>
              <th className="border-b border-stone-200 px-4 py-3 dark:border-stone-600">
                Phân biệt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
            <tr className="divide-x divide-stone-200 odd:bg-white even:bg-stone-50 dark:divide-stone-700 dark:odd:bg-slate-800 dark:even:bg-slate-800/60">
              <td className="font-kaiti whitespace-nowrap px-4 py-3 text-2xl">
                拿 / 提
              </td>
              <td className="whitespace-nowrap px-4 py-3">ná / tí</td>
              <td className="px-4 py-3 leading-6">
                <span className="font-kaiti">拿</span> (ná – cầm, lấy) là từ
                chung nhất, chỉ việc lấy hoặc cầm bằng tay.{" "}
                <span className="font-kaiti">提</span> (tí – xách) dùng khi xách
                vật có quai hoặc có trọng lượng, tay buông thõng:{" "}
                <span className="font-kaiti">提着一箱子东西</span> (tí zhe yì
                xiāngzi dōngxi – xách một thùng đồ).
              </td>
            </tr>
            <tr className="divide-x divide-stone-200 odd:bg-white even:bg-stone-50 dark:divide-stone-700 dark:odd:bg-slate-800 dark:even:bg-slate-800/60">
              <td className="font-kaiti whitespace-nowrap px-4 py-3 text-2xl">
                挑 / 选
              </td>
              <td className="whitespace-nowrap px-4 py-3">tiāo / xuǎn</td>
              <td className="px-4 py-3 leading-6">
                Cả hai đều có nghĩa là “chọn”.{" "}
                <span className="font-kaiti">挑</span> (tiāo – lựa, chọn kỹ)
                thiên về lựa từng món; <span className="font-kaiti">选</span>{" "}
                (xuǎn – tuyển chọn) trang trọng hơn. Trong bài:{" "}
                <span className="font-kaiti">我挑了几本历史书</span> (wǒ tiāo le
                jǐ běn lìshǐ shū – tôi chọn mấy cuốn sách lịch sử),{" "}
                <span className="font-kaiti">麦克选了一些中文小说儿</span>{" "}
                (Màikè xuǎn le yìxiē Zhōngwén xiǎoshuōr – Mike chọn một số tiểu
                thuyết tiếng Trung).
              </td>
            </tr>
            <tr className="divide-x divide-stone-200 odd:bg-white even:bg-stone-50 dark:divide-stone-700 dark:odd:bg-slate-800 dark:even:bg-slate-800/60">
              <td className="font-kaiti whitespace-nowrap px-4 py-3 text-2xl">
                累 / 困
              </td>
              <td className="whitespace-nowrap px-4 py-3">lèi / kùn</td>
              <td className="px-4 py-3 leading-6">
                <span className="font-kaiti">累</span> (lèi – mệt): cơ thể mệt
                vì làm việc hoặc đi lại. <span className="font-kaiti">困</span>{" "}
                (kùn – buồn ngủ): muốn ngủ. Có thể đi cùng nhau:{" "}
                <span className="font-kaiti">又累又困</span> (yòu lèi yòu kùn –
                vừa mệt vừa buồn ngủ).
              </td>
            </tr>
            <tr className="divide-x divide-stone-200 odd:bg-white even:bg-stone-50 dark:divide-stone-700 dark:odd:bg-slate-800 dark:even:bg-slate-800/60">
              <td className="font-kaiti whitespace-nowrap px-4 py-3 text-2xl">
                另 / 另外
              </td>
              <td className="whitespace-nowrap px-4 py-3">lìng / lìngwài</td>
              <td className="px-4 py-3 leading-6">
                <span className="font-kaiti">另</span> (lìng – khác) thường đi
                với 一 + lượng từ:{" "}
                <span className="font-kaiti">另一个书店</span> (lìng yí ge
                shūdiàn – hiệu sách khác).{" "}
                <span className="font-kaiti">另外</span> (lìngwài – ngoài ra)
                còn dùng như liên từ hoặc phó từ đầu câu:{" "}
                <span className="font-kaiti">另外，我还想买…</span> (lìngwài, wǒ
                hái xiǎng mǎi… – ngoài ra tôi còn muốn mua…).
              </td>
            </tr>
            <tr className="divide-x divide-stone-200 odd:bg-white even:bg-stone-50 dark:divide-stone-700 dark:odd:bg-slate-800 dark:even:bg-slate-800/60">
              <td className="font-kaiti whitespace-nowrap px-4 py-3 text-2xl">
                于是 / 所以
              </td>
              <td className="whitespace-nowrap px-4 py-3">yúshì / suǒyǐ</td>
              <td className="px-4 py-3 leading-6">
                <span className="font-kaiti">于是</span> (yúshì – thế là) nối
                hai sự việc kế tiếp nhau, việc trước dẫn đến hành động sau.{" "}
                <span className="font-kaiti">所以</span> (suǒyǐ – cho nên) nhấn
                mạnh quan hệ nguyên nhân – kết quả logic. Trong bài:{" "}
                <span className="font-kaiti">
                  我们还想买小礼品，于是我们又走进一家商场去
                </span>{" "}
                (… yúshì wǒmen yòu zǒujìn yì jiā shāngchǎng qù – … thế là chúng
                tôi lại đi vào một trung tâm thương mại).
              </td>
            </tr>
            <tr className="divide-x divide-stone-200 odd:bg-white even:bg-stone-50 dark:divide-stone-700 dark:odd:bg-slate-800 dark:even:bg-slate-800/60">
              <td className="font-kaiti whitespace-nowrap px-4 py-3 text-2xl">
                放 (nghỉ) / 放 (đặt)
              </td>
              <td className="whitespace-nowrap px-4 py-3">fàng</td>
              <td className="px-4 py-3 leading-6">
                <span className="font-kaiti">放</span> còn có nghĩa “nghỉ” (học,
                làm): <span className="font-kaiti">放寒假</span> (fàng hánjià –
                nghỉ đông), <span className="font-kaiti">放暑假</span> (fàng
                shǔjià – nghỉ hè). Cùng chữ nhưng khác nghĩa trong{" "}
                <span className="font-kaiti">放上去</span> (fàng shàngqu – đặt
                lên).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
