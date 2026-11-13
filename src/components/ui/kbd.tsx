import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Kbd({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded border border-white/15 bg-white/5 px-1 font-sans text-[10px] font-medium leading-none text-zinc-400 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]",
        className
      )}
      {...props}
    />
  );
}
