"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type SwitchSize = "sm" | "md";

const SIZES: Record<
  SwitchSize,
  { track: string; thumb: string; checked: string }
> = {
  sm: { track: "h-5 w-9", thumb: "size-4", checked: "translate-x-4" },
  md: { track: "h-6 w-11", thumb: "size-5", checked: "translate-x-5" },
};

export type SwitchProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "role"
> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  size?: SwitchSize;
  thumbIcon?: React.ReactNode;
  checkedTrackClassName?: string;
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      onCheckedChange,
      size = "md",
      thumbIcon,
      checkedTrackClassName = "bg-blue-600",
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const sizes = SIZES[size];

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) onCheckedChange(!checked);
        }}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c12] disabled:cursor-not-allowed disabled:opacity-50",
          sizes.track,
          checked ? checkedTrackClassName : "bg-white/10",
          className
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none flex items-center justify-center rounded-full bg-white text-zinc-700 shadow-md shadow-black/30 transition-transform duration-200 ease-out [&_svg]:size-3",
            sizes.thumb,
            checked ? sizes.checked : "translate-x-0.5"
          )}
        >
          {thumbIcon}
        </span>
      </button>
    );
  }
);
Switch.displayName = "Switch";
