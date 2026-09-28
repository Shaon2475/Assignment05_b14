import { useStack } from "../context/StackContext";

export default function YourStackPanel() {
  const { stack, removeFromStack, removeAll } = useStack();
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-2">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-2"
            >
              <img
                src={item.icon}
                alt=""
                className="h-8 w-8 shrink-0 object-contain"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="truncate text-xs text-slate-500">{item.category}</p>
              </div>
              <button
                type="button"
                onClick={() => removeFromStack(item.id)}
                aria-label={`Remove ${item.name} from your stack`}
                className="focus-ring shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={removeAll}
          className="focus-ring mt-4 w-full rounded-lg border border-rose-200 py-2 text-sm font-semibold text-rose-500 hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
