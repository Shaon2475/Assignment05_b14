export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[40vh] flex-col items-center justify-center gap-3 py-24"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
      <p className="text-sm font-medium text-slate-500">Loading technologies…</p>
    </div>
  );
}
