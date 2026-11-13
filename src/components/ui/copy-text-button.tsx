"use client";

import { Check, Copy } from "lucide-react";

import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type CopyTextButtonProps = {
  text: string;
  label?: string;
  copiedLabel?: string;
  successMessage?: string;
  className?: string;
};

/** Ghost "Copy" button with a confirmation state, for toolbars and headers. */
export function CopyTextButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
  successMessage = CODE_COPY_MESSAGES.success,
  className,
}: CopyTextButtonProps) {
  const { isCopied, copy } = useCopyToClipboard({
    success: successMessage,
    error: CODE_COPY_MESSAGES.error,
  });
  const Icon = isCopied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        className
      )}
    >
      <Icon className={cn("size-3.5", isCopied && "text-emerald-400")} />
      <span aria-live="polite">{isCopied ? copiedLabel : label}</span>
    </button>
  );
}
