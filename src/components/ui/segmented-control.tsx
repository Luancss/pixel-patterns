"use client";

import { motion } from "framer-motion";
import { type ReactNode, useId } from "react";

import { cn } from "@/lib/utils";

export type SegmentedControlOption<Value extends string> = {
  value: Value;
  label: string;
  icon?: ReactNode;
  count?: number;
};

type SegmentedControlSize = "sm" | "md";

const SIZE_CLASS_NAMES: Record<SegmentedControlSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
};

type SegmentedControlProps<Value extends string> = {
  label: string;
  options: SegmentedControlOption<Value>[];
  value: Value;
  onValueChange: (value: Value) => void;
  size?: SegmentedControlSize;
  iconOnly?: boolean;
  className?: string;
};

export function SegmentedControl<Value extends string>({
  label,
  options,
  value,
  onValueChange,
  size = "sm",
  iconOnly = false,
  className,
}: SegmentedControlProps<Value>) {
  const indicatorId = useId();

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
            aria-label={iconOnly ? option.label : undefined}
            title={iconOnly ? option.label : undefined}
            onClick={() => onValueChange(option.value)}
            className={cn(
              "relative inline-flex flex-1 items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              SIZE_CLASS_NAMES[size],
              iconOnly && "px-2",
              isSelected ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            {isSelected && (
              <motion.span
                layoutId={indicatorId}
                aria-hidden="true"
                className="absolute inset-0 rounded-md bg-white/10 shadow-sm ring-1 ring-inset ring-white/10"
                transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
              />
            )}
            <span className="relative inline-flex items-center gap-1.5">
              {option.icon}
              {!iconOnly && option.label}
              {option.count !== undefined && (
                <span
                  className={cn(
                    "rounded px-1 text-[10px] tabular-nums leading-4 transition-colors",
                    isSelected
                      ? "bg-blue-500/20 text-blue-200"
                      : "bg-white/10 text-zinc-400"
                  )}
                >
                  {option.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
