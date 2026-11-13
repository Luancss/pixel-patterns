"use client";

import { Check, Copy } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { getReadableTextColor } from "@/lib/color";

type ColorSwatchProps = {
  label: string;
  hex: string;
};

/** A color chip that copies its HEX value on click. */
export function ColorSwatch({ label, hex }: ColorSwatchProps) {
  const { isCopied, copy } = useCopyToClipboard({
    success: `${hex.toUpperCase()} copied`,
    error: "Failed to copy!",
  });
  const foreground = getReadableTextColor(hex);
  const Icon = isCopied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={() => copy(hex.toUpperCase())}
      aria-label={`Copy ${label} color ${hex.toUpperCase()}`}
      title={`Copy ${hex.toUpperCase()}`}
      className="group/swatch relative flex h-24 min-w-0 flex-1 flex-col justify-end px-1.5 py-2 text-left transition-[flex-grow] duration-300 hover:flex-[1.6] focus-visible:z-10 focus-visible:flex-[1.6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
      style={{ background: hex, color: foreground }}
    >
      <Icon className="absolute right-2 top-2 size-3.5 opacity-0 transition-opacity group-hover/swatch:opacity-70 group-focus-visible/swatch:opacity-70" />
      <span className="truncate text-[10px] font-medium opacity-70">
        {label}
      </span>
      <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-tight">
        {hex}
      </span>
    </button>
  );
}
