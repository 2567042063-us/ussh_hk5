"use client";

import { useEffect, useState } from "react";

interface ExamItem {
  d: string;
  t: string;
  s: string;
}

const EXAMS: ExamItem[] = [
  { d: "2026-11-11", t: "GK · Ngữ pháp - Dịch SC3", s: "sc3" },
  { d: "2026-12-03", t: "GK · Ngữ pháp TC1", s: "tc1" },
  { d: "2026-12-08", t: "GK · Đọc hiểu sơ cấp", s: "dochieu" },
  { d: "2026-12-11", t: "GK · Dịch TC1", s: "dich" },
  { d: "2026-12-26", t: "GK · Khẩu ngữ SC2", s: "kn" },
  {
    d: "2027-01-11",
    t: "CK · Ngữ pháp - Dịch SC3 (ca 1) + Đọc hiểu sơ cấp (ca 2)",
    s: "sc3",
  },
  {
    d: "2027-01-12",
    t: "CK · Ngữ pháp TC1 (ca 1) + Dịch TC1 (ca 2)",
    s: "tc1",
  },
  { d: "2027-01-14", t: "CK · Giao tiếp sơ cấp", s: "gt" },
  { d: "2027-01-15", t: "CK · Khẩu ngữ SC2", s: "kn" },
];

const DOW = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];

function pd(s: string) {
  const p = s.split("-");
  return new Date(+p[0], +p[1] - 1, +p[2]);
}

function fmt(d: Date) {
  return (
    ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2)
  );
}

export default function LichOnThi() {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    // Avoid a hydration mismatch caused by rendering dates in the server timezone.
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(now);
  }, []);

  if (!today) {
    return (
      <div className="p-4 text-center text-slate-500">
        Đang tải lịch ôn thi...
      </div>
    );
  }

  const daysLeft = (d: Date) =>
    Math.round((d.getTime() - today.getTime()) / 86400000);

  // Tìm kỳ thi tiếp theo
  const nextExam = EXAMS.find((e) => pd(e.d) >= today) || null;
  const nextDays = nextExam ? daysLeft(pd(nextExam.d)) : null;

  return (
    <div className="text-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between">
        <h1 className="my-2 text-xl font-light tracking-tight text-slate-500 dark:text-slate-400">
          Lịch Thi GK - CK
        </h1>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-3 text-slate-500 dark:text-slate-300 md:grid-cols-[0.5fr_1fr]">
        {/* Next Exam Card */}
        <div className="flex flex-col justify-center rounded-2xl border border-cyan-800/20 p-4 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Kỳ thi tiếp theo
          </div>
          <div className="text-4xl font-bold leading-relaxed text-rose-700 dark:text-rose-400">
            {nextExam
              ? nextDays === 0
                ? "Hôm nay"
                : `${nextDays} ngày`
              : "Xong"}
          </div>
          <div className="font-semibold">
            {nextExam ? nextExam.t : "Đã qua tất cả kỳ thi"}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {nextExam &&
              `${DOW[pd(nextExam.d).getDay()]}, ${fmt(pd(nextExam.d))}/${pd(nextExam.d).getFullYear()}`}
          </div>
        </div>

        {/* List Exams Card */}
        <div className="flex flex-col gap-1.5 rounded-2xl border border-cyan-800/20 p-3 text-xs dark:border-slate-700">
          {EXAMS.map((e) => {
            const d = pd(e.d);
            const n = daysLeft(d);
            const isActive = e.d === nextExam?.d;

            return (
              <div
                key={e.d + e.t}
                className={`flex justify-between gap-2 border-b border-dashed border-cyan-800/20 pb-1 last:border-0 dark:border-slate-700 ${
                  isActive ? "font-medium text-rose-600 dark:text-rose-400" : ""
                }`}
              >
                <span>
                  {DOW[d.getDay()].replace("Thứ ", "T ")} {fmt(d)} · {e.t}
                </span>
                <b className="whitespace-nowrap">
                  {n < 0 ? "đã qua" : n === 0 ? "hôm nay" : `${n} ngày`}
                </b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
