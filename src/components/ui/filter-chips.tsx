import { cn } from "@/lib/utils";

export type FilterChipOption<Value extends string> = {
  value: Value;
  label: string;
  count?: number;
};

type FilterChipsProps<Value extends string> = {
  label: string;
  options: FilterChipOption<Value>[];
  value: Value;
  onValueChange: (value: Value) => void;
  className?: string;
};

/** Single-select filter that wraps on small screens, with optional counts. */
export function FilterChips<Value extends string>({
  label,
  options,
  value,
  onValueChange,
  className,
}: FilterChipsProps<Value>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onValueChange(option.value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              isSelected
                ? "border-blue-400/40 bg-blue-500/15 text-blue-100"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white"
            )}
          >
            {option.label}
            {option.count !== undefined && (
              <span
                className={cn(
                  "tabular-nums",
                  isSelected ? "text-blue-300" : "text-zinc-500"
                )}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
