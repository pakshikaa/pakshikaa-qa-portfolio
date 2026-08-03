"use client";

export default function ReportButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.alert(
          "Test report link coming soon — add the real Playwright HTML report URL in data/projects.ts."
        )
      }
      className="w-full rounded-full border-[1.5px] border-accent px-5 py-3 text-center text-sm font-extrabold text-accent-deep transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-tint"
    >
      View Test Report ↗
    </button>
  );
}
