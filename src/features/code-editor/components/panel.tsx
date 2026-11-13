import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Surface shared by every popover in the editor, matching the snippet dialog. */
export const POPOVER_SURFACE_CLASS_NAME =
  "border-white/10 bg-[#101018] p-0 text-zinc-100 shadow-2xl shadow-black/50";

export const COMMAND_SURFACE_CLASS_NAME =
  "bg-transparent text-zinc-100 [&_[cmdk-input-wrapper]]:border-white/10 [&_[cmdk-input-wrapper]_svg]:text-zinc-500";

export const COMMAND_GROUP_CLASS_NAME =
  "text-zinc-300 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500";

export const COMMAND_ITEM_CLASS_NAME =
  "gap-3 rounded-md px-2 py-1.5 text-sm text-zinc-300 data-[selected='true']:bg-white/10 data-[selected=true]:text-white";

export const TRIGGER_CLASS_NAME =
  "inline-flex h-8 min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 text-xs font-medium text-zinc-200 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 data-[state=open]:bg-white/10";

export function Panel({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "flex min-h-0 min-w-0 flex-col rounded-xl border border-white/10 bg-[#0c0c12]/90 shadow-2xl shadow-black/40 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

export function PanelHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex min-h-11 shrink-0 flex-wrap items-center gap-2 border-b border-white/10 px-2 py-1.5 sm:px-3",
        className
      )}
      {...props}
    />
  );
}

export function PanelBody({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative min-h-0 flex-1 overflow-hidden rounded-b-xl",
        className
      )}
      {...props}
    />
  );
}

export function ToolbarDivider({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("mx-1 h-5 w-px shrink-0 bg-white/10", className)}
    />
  );
}

export function PanelTitle({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-zinc-400 [&_svg]:size-4 [&_svg]:shrink-0">
      {icon}
      <span className="truncate">{children}</span>
    </div>
  );
}
