import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SegmentedControlOption<Value extends string> = {
  value: Value;
  label: string;
  icon?: ReactNode;
};

type SegmentedControlProps<Value extends string> = {
  label: string;
  options: SegmentedControlOption<Value>[];
  value: Value;
  onValueChange: (value: Value) => void;
  className?: string;
};

export function SegmentedControl<Value extends string>({
  label,
  options,
  value,
  onValueChange,
  className,
}: SegmentedControlProps<Value>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex rounded-lg bg-white/5 p-0.5 ring-1 ring-inset ring-white/10",
        className
      )}
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
              "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              isSelected
                ? "bg-white/10 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            {option.icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
