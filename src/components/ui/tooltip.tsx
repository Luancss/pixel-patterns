import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TooltipSide = "top" | "bottom";

type TooltipAlign = "start" | "center" | "end";

const SIDE_CLASS_NAMES: Record<TooltipSide, string> = {
  top: "bottom-full mb-2 translate-y-1",
  bottom: "top-full mt-2 -translate-y-1",
};

const ALIGN_CLASS_NAMES: Record<TooltipAlign, string> = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  side?: TooltipSide;
  align?: TooltipAlign;
  className?: string;
};

/**
 * Lightweight, CSS-only tooltip. It is purely visual: the wrapped control
 * must carry its own accessible name (e.g. `aria-label`).
 */
export function Tooltip({
  content,
  children,
  side = "bottom",
  align = "center",
  className,
}: TooltipProps) {
  return (
    <span className={cn("group/tooltip relative inline-flex", className)}>
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute z-50 flex items-center gap-1.5 whitespace-nowrap rounded-md border border-white/10 bg-[#16161f] px-2 py-1 text-[11px] font-medium text-zinc-200 opacity-0 shadow-lg shadow-black/40 transition duration-150 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-has-[:focus-visible]/tooltip:translate-y-0 group-has-[:focus-visible]/tooltip:opacity-100 group-has-[[data-state=open]]/tooltip:opacity-0",
          SIDE_CLASS_NAMES[side],
          ALIGN_CLASS_NAMES[align]
        )}
      >
        {content}
      </span>
    </span>
  );
}
