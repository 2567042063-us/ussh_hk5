import { CheckCircle2, RotateCcw } from "lucide-react";

interface SectionActionsProps {
  answeredCount: number;
  total: number;
  submitted: boolean;
  score: number;
  onSubmit: () => void;
  onReset: () => void;
}

export function SectionActions({
  answeredCount,
  total,
  submitted,
  score,
  onSubmit,
  onReset,
}: SectionActionsProps) {
  if (submitted) {
    return (
      <div className="mt-8 flex flex-col gap-3 rounded-xl bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 font-medium text-emerald-900">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          Kết quả: {score}/{total} câu đúng
        </p>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-white px-4 py-2 text-sm font-medium text-emerald-900 transition-colors hover:bg-emerald-100"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-stone-600">
        Đã làm {answeredCount}/{total} câu
      </p>
      <button
        type="button"
        onClick={onSubmit}
        disabled={answeredCount === 0}
        style={{
          letterSpacing: ".03em",
          alignItems: "center",
          gap: "22px",
          padding: "14px 18px",
          fontSize: "11px",
          fontWeight: 700,
          display: "inline-flex",
          color: "#fff",
          // backgroundColor: "#172a2c",
          // boxShadow: "4px 4px 0 #db786f",
        }}
        className="bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white shadow-[4px_4px_0_#db786f] transition-colors hover:bg-zinc-900 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-600 disabled:shadow-[4px_4px_0_#78716c]"
      >
        Nộp bài
      </button>
    </div>
  );
}
