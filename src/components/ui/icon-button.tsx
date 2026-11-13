import * as React from "react";

import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  tooltip?: React.ReactNode;
  tooltipSide?: React.ComponentProps<typeof Tooltip>["side"];
  tooltipAlign?: React.ComponentProps<typeof Tooltip>["align"];
  isActive?: boolean;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      label,
      tooltip,
      tooltipSide,
      tooltipAlign,
      isActive = false,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <Tooltip content={tooltip ?? label} side={tooltipSide} align={tooltipAlign}>
      <button
        ref={ref}
        type="button"
        aria-label={label}
        className={cn(
          "inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-40 data-[state=open]:bg-white/10 data-[state=open]:text-white [&_svg]:size-4 [&_svg]:shrink-0",
          isActive && "bg-white/10 text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </Tooltip>
  )
);
IconButton.displayName = "IconButton";
