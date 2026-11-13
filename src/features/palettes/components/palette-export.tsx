"use client";

import { Download } from "lucide-react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Palette } from "@/features/palettes/types";

const PaletteExportPanel = dynamic(
  () =>
    import("@/features/palettes/components/palette-export-panel").then(
      (mod) => mod.PaletteExportPanel
    ),
  {
    loading: () => (
      <div className="h-56 animate-pulse rounded-md bg-white/[0.03]" />
    ),
  }
);

export function PaletteExport({ palette }: { palette: Palette }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="h-8 gap-1.5 border border-white/10 bg-white/5 text-xs text-zinc-200 hover:bg-white/10 data-[state=open]:bg-white/10"
        >
          <Download className="size-3.5" />
          Export
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[min(24rem,calc(100vw-2rem))] border-white/10 bg-[#101018] p-0 text-zinc-100 shadow-2xl shadow-black/50"
      >
        <PaletteExportPanel palette={palette} />
      </PopoverContent>
    </Popover>
  );
}
