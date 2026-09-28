import { useStack } from "../context/StackContext";

export default function TechnologyCard({ technology }) {
  const { addToStack, isInStack } = useStack();
  const added = isInStack(technology.id);

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-9 w-9 shrink-0 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{technology.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {technology.category}
        </span>
        <span className="font-medium text-slate-500">{technology.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400" aria-hidden="true">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.61 1-5.79-4.21-4.1 5.82-.85z" />
          </svg>
          {technology.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => addToStack(technology)}
        disabled={added}
        className={`focus-ring mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          added
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
